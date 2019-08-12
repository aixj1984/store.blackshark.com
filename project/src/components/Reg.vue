<template>
  <!-- 注册页面 -->
  <div>
    <!-- 头部 -->
    <van-nav-bar
      title="黑鲨注册"
      left-text="←"
      right-text
      :left-arrow="false"
      @click-left="onClickLeft"
      :fixed="true"
    />

    <!-- logo图标 -->
    <div class="logo_box">
      <img
        src="https://shop-1256119282.file.myqcloud.com/blackshark/pass-source/resources/login/img/login-m-logo.png"
        alt
      />
    </div>

    <!-- 输入框盒子 -->
    <div class="input_box">
      <span v-text="teltitle" :style="titlecolor? {'color':'#58bc58'} :{'color':'red'}"></span>
      <input
        type="tel"
        placeholder="请输入手机号"
        v-model="tel"
        @blur="VerifyPhoneNumber"
        v-focus="focusState"
      />
      <span v-text="notetitle" :style="notecolor? {'color':'#58bc58'} :{'color':'red'}"></span>
      <input type="text" placeholder="请输入验证码" v-model="note" @blur="checkNote" v-focus="focusNote" />
      <span v-text="passwordtitle" :style="passwordcolor? {'color':'#58bc58'} :{'color':'red'}"></span>
      <input
        type="password"
        placeholder="请输入密码(字母开头，6至18位之间)"
        v-model="password"
        v-focus="focusPassword"
        @blur="passwords"
      />
      <span v-text="affirmtitle" :style="affirmcolor? {'color':'#58bc58'} :{'color':'red'}"></span>
      <input
        type="password"
        placeholder="请确认密码"
        @blur="affirms"
        v-model="affirm"
        v-focus="focusAffirm"
      />
      <div class="btns" @click="getNote">获取验证码</div>
    </div>

    <!-- 注册按钮 -->
    <div class="reg" @click="regbtn">注册</div>
    <!-- 登录按钮 -->
    <div class="login" @click="goLogin">账号登录</div>
    <!-- 阅读条款按钮 -->
    <div class="xiaoxi">
      <input type="checkbox" :checked="checked" @click="check" />
      <span>我已阅读并接受《黑鲨服务协议》</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tel: null,
      regularTel: /^1[3456789]\d{9}$/,
      teltitle: null,
      titlecolor: false,
      focusState: false,

      //短信
      note: null,
      notetitle: null,
      notecolor: false,
      focusNote: false,

      //密码
      password: null,
      passwordtitle: null,
      passwordcolor: false,
      focusPassword: false,
      regularPassword: /^[a-zA-Z]\w{5,17}$/,

      //确认密码
      affirm: null,
      affirmtitle: null,
      affirmcolor: false,
      focusAffirm: false,

      checked: false
    }
  },
  methods: {


    //返回上一层
    onClickLeft() {
      this.$router.go(-1)
    },

    check() {
      this.checked = !this.checked
    },


    //验证手机号是否注册
    async VerifyPhoneNumber() {
      if (this.regularTel.test(this.tel)) {
        await this.$axios({
          method: 'post',
          url: 'http://10.3.132.145:3000/reg/tel',
          data: this.$qs.stringify({
            tel: this.tel
          })
        }).then(res => {
          if (res.data == 'yes') {
            this.teltitle = '可以注册'
            this.titlecolor = true
          } else {
            this.teltitle = '已注册'
            this.tel = null
            this.titlecolor = false
          }
          console.log(res)
        })
      } else {
        this.teltitle = '请输入格式正确的手机号'
        this.titlecolor = false
        this.tel = null
      }
    },




    //获得随即验证码
    async getNote() {
      if (this.regularTel.test(this.tel)) {
        await this.$axios({
          method: 'post',
          url: 'http://10.3.132.145:3000/reg/xin',
          data: this.$qs.stringify({
            tel: this.tel
          })
        }).then(res => {
          console.log(res.data)
          sessionStorage.setItem('num', res.data.nums)
        })
      } else {
        this.teltitle = '请输入格式正确的手机号'
        this.titlecolor = false
        this.tel = null
        this.focusState = true
      }
    },



    //验证随机验证码
    checkNote() {
      const noteNum = sessionStorage.getItem('num')
      if (this.note) {
        if (this.note === noteNum) {
          this.notetitle = '匹配成功'
          this.notecolor = true
        } else {
          this.notetitle = '请输入正确验证码'
          this.notecolor = false
          this.note = null
        }
      } else {
        this.notetitle = '验证码不能为空'
        this.notecolor = false
      }
    },



    //密码输入
    passwords() {
      if (this.password) {
        if (this.regularPassword.test(this.password)) {
          this.passwordtitle = '密码可用'
          this.passwordcolor = true
        } else {
          this.passwordtitle = '请输入6-18位以字母开头的密码'
          this.passwordcolor = false
          this.password = null
        }
      } else {
        this.passwordtitle = '请设置密码'
        this.passwordcolor = false
      }
    },




    //确认密码
    affirms() {
      if (this.affirm) {
        if (this.affirm === this.password) {
          this.affirmtitle = '密码可用'
          this.affirmcolor = true
        } else {
          this.affirmtitle = '两次密码不匹配'
          this.affirmcolor = false
          this.affirm = null
          // this.focusAffirm = true
        }
      } else {
        this.affirmtitle = '请再次输入密码'
        this.affirmcolor = false
      }
    },


    //注册按钮
    async regbtn() {
      if (this.titlecolor && this.notecolor && this.passwordcolor && this.affirmcolor) {
        if (this.checked) {
          await this.$axios({
            method: 'post',
            url: 'http://10.3.132.145:3000/reg/add',
            data: this.$qs.stringify({
              tel: this.tel,
              pwd: this.password
            })
          }).then(res => {
            if (res.data == 'yes') {
              this.$toast('注册成功')
              sessionStorage.clear()
              this.$router.push({
                name: 'login'
              })
            } else {
              this.$toast('注册失败')
            }
          })
        } else {
          this.$toast('请先阅读注册须知')
        }
      } else {
        this.$toast('请输入完整注册信息')
      }
    },

    //登录按钮
    goLogin() {
      this.$router.push({
        name: 'login'
      })
    }
  },
  directives: {
    //自定义的v-focus指令
    focus: {
      update: function (el, { value }) {
        if (value) {
          el.focus();
        }
      }
    }
  }
}
</script>

<style scoped src="../css/reg.css" />




