<template>
  <!-- 登录页 -->
  <div>
    <!-- 头部 -->
    <van-nav-bar
      title="黑鲨登录"
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
      <input type="tel" placeholder="请输入手机号" v-model="tel" v-focus="focusState" />
      <span v-text="passwordtitle" :style="passwordcolor? {'color':'#58bc58'} :{'color':'red'}"></span>
      <input type="password" placeholder="请输入密码" v-model="password" v-focus="focusPassword" />
    </div>

    <!-- 忘记密码 -->
    <div class="forget clearfix">
      <ul>
        <li @click="goreg">立即注册</li>
        <li>忘记密码</li>
      </ul>
    </div>

    <!-- 登录 -->
    <div class="reg" @click="loginStore">登录</div>
    <!-- 登录按钮 -->
    <div class="login">小米账号登陆</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tel: null,
      teltitle: null,
      titlecolor: false,
      focusState: false,

      //密码
      password: null,
      passwordtitle: null,
      passwordcolor: false,
      focusPassword: false,
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    async loginStore() {
      if (this.tel) {
        if (this.password) {
          await this.$axios({
            method: 'post',
            url: 'http://10.3.132.145:3000/login/tel',
            data: this.$qs.stringify({
              tel: this.tel,
              pwd: this.password
            })
          }).then(res => {
            console.log(res)
            if (res.data == 'no') {
              this.$toast('账号或密码错误')
              this.password = null
            } else {
              this.$toast('成功')
              localStorage.setItem('uid', this.tel)
              localStorage.setItem('token', res.data.token)
              this.$router.go(-1)
            }
          })
        } else {
          this.$toast('请输入密码')
        }
      } else {
        this.$toast('请输入账号')
      }
    },
    goreg() {
      this.$router.push({
        name: 'reg'
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

<style scoped src="../css/login.css" />




