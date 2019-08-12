<template>
  <div>
    <router-view></router-view>

    <!-- 底部按钮 -->
    <div class="foot_btn">
      <ul>
        <li
          v-for="(item,index) in footbtn"
          :key="index"
          @click="active(index)"
          :class="{active:index == num}"
        >
          <em class="iconfont" :class="item.icon"></em>
          <p v-text="item.title"></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footbtn: [{
        icon: 'icon-shouye',
        title: '首页'
      }, {
        icon: 'icon-pinpai',
        title: '商城'
      }, {
        icon: 'icon-gouwudai',
        title: '购物车'
      }, {
        icon: 'icon-wode-copy',
        title: '我的'
      }],
      num: 0 //记录高亮
    }
  },
  methods: {
    active(index) {
      this.num = index
      this.$router.push({
        name: `home${index}`
      })
    }
  }
}
</script>

<style scoped src="../css/tabbar.css" />
