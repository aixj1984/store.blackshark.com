<template>
  <!-- 搜索列表页 -->
  <div style="background-color: #f5f5f9;">
    <!-- 头部 -->
    <van-nav-bar
      title="搜索"
      left-text="←"
      right-text
      :left-arrow="false"
      @click-left="onClickLeft"
      :fixed="true"
    />
    <!-- 搜索框 -->
    <div class="search">
      <img src alt />
      <img class="logo" src="../assets/logo.png" alt />
      <img class="sou" src="../assets/search.png" alt @click="golist" />
      <form action>
        <input type="text" placeholder="黑鲨" v-model="value" />
      </form>
    </div>
    <!-- 提示 -->
    <div class="inf" v-show="bool">
      为您找到所有
      <span>"{{title}}"</span>
      相关商品
    </div>
    <div class="inf" v-show="!bool">
      抱歉，没有找到
      <span>"{{title}}"</span>
      相关商品， 为您推荐以下产品
    </div>
    <!-- 商品列表 -->
    <div class="list">
      <ul class="list_ul">
        <li
          v-for="(item,index) in list"
          :key="index"
          :data-id="item.tag"
          @click="godetail(item.tag)"
        >
          <img :src="item.img" alt />
          <i>新品</i>
          <h4 v-text="item.name"></h4>
          <p v-text="item.slogan"></p>
          <b v-text="`￥${item.price}`"></b>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '',
      list: [],
      bool: true,
      value: '',
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    async golist() {
      if (!this.value) {
        this.$toast('搜索内容不能为空');
      } else {
        let name = this.value
        let list = await this.$axios('http://10.3.132.145:3000/list/shop', { params: { name } })
        console.log(list.data.data)
        if (list.data.isok == 'yes') {
          this.list = list.data.data
          this.title = name
          this.bool = true
        } else {
          this.list = list.data.data
          this.title = name
          this.bool = false
        }
      }
    },
    godetail(id) {
      this.$router.push({
        name: 'detail',
        params: { id: id }
      })
    }
  },
  async created() {
    let name = this.$route.params.value;
    let list = await this.$axios('http://10.3.132.145:3000/list/shop', { params: { name } })
    console.log(list.data.data)
    if (list.data.isok == 'yes') {
      this.list = list.data.data
      this.title = name
      this.bool = true
    } else {
      this.list = list.data.data
      this.title = name
      this.bool = false
    }
  }
}
</script>
<style scoped src="../css/list.css" />




