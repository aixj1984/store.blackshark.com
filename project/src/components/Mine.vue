<template>
  <!-- 我的界面 -->
  <div style="background: #f5f5f9;">
    <!-- 头部信息 -->
    <div class="mineinf">
      <ul>
        <li class="headimg">
          <img src="../assets/mine.png" alt />
        </li>
        <li class="number">
          <b v-text="uid"></b>
          <p>
            <img src="../assets/mobile.png" alt />
            <span v-text="uid.replace(/^(\d{3})\d{4}(\d{4})$/,'$1****$2')"></span>
          </p>
        </li>
      </ul>
    </div>
    <!-- 单元格 -->
    <div class="cell">
      <van-cell
        v-for="(item,index) in cell"
        :key="index"
        :title="item.title"
        is-link
        class="iconfont"
        :class="item.icon"
      />
    </div>

    <!-- 收货地址 -->
    <div class="adress">
      <van-cell title="收获地址" is-link class="iconfont icon-weizhibiaoji" />
    </div>

    <!-- 设置 -->
    <div class="shezhi">
      <van-cell title="设置" is-link class="iconfont icon-shezhi" />
    </div>

    <!-- 退出登录 -->
    <div class="loginout" @click="loginout">退出登录</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cell: [{
        icon: 'icon-icon-',
        title: '我的订单'
      }, {
        icon: 'icon-pinpai',
        title: '我的优购码'
      }, {
        icon: 'icon-youhuima',
        title: '我的优惠卷'
      }, {
        icon: 'icon-pingjia',
        title: '我的评价'
      }, {
        icon: 'icon-yuyue',
        title: '我的预约'
      }],
      uid: ''
    }
  },
  methods: {
    loginout() {
      localStorage.clear()
      this.$router.push({
        name: 'login'
      })
    }
  },
  created() {
    let uid = localStorage.getItem('uid')
    this.uid = uid
  }
}
</script>

<style scoped src="../css/mine.css" />






