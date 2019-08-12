<template>
  <!-- 商城界面 -->
  <div style="background-color: #f5f5f9;margin-bottom:1.4rem">
    <!-- 顶部搜索 -->
    <div class="search">
      <img src alt />
      <img class="logo" src="../assets/logo.png" alt />
      <img class="sou" src="../assets/search.png" alt @click="golist" />
      <form action>
        <input type="text" :placeholder="placeholder" v-model="value" @click="clear" />
      </form>
    </div>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <!-- 列表块 -->
    <div class="list" v-for="(item,index) in list" :key="index">
      <h3 v-text="item.posname"></h3>
      <ul class="list_ul">
        <li
          v-for="(i,index) in item.poslist"
          :key="index"
          :data-id="i.tag"
          @click="godetail(i.tag)"
        >
          <img :src="i.img" alt />
          <i>新品</i>
          <h4 v-text="i.name"></h4>
          <p v-text="i.slogan"></p>
          <b v-text="`￥${i.price}`"></b>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [
        'https://shop-1256119282.file.myqcloud.com/blackshark/20190730/20190730152805_946.jpg',
        'https://shop-1256119282.file.myqcloud.com/blackshark/20190715/20190715171630_63.jpg',
        'https://shop-1256119282.file.myqcloud.com/blackshark/20190605/20190605171211_500.jpg',
        'https://shop-1256119282.file.myqcloud.com/blackshark/20190611/20190611165438_113.jpg'
      ],
      list: [],
      value: '黑鲨',
      placeholder: '黑鲨'
    }
  },
  methods: {
    golist() {
      if (!this.value) {
        this.placeholder = '请输入商品名'
        this.$toast('搜索内容不能为空')
      } else {
        this.$router.push({
          name: 'list',
          params: { value: this.value }
        })
      }
    },
    clear() {
      this.value = '';
    },
    godetail(id) {
      this.$router.push({
        name: 'detail',
        params: { id: id }
      })
    }
  },
  async created() {
    let list = await this.$axios('https://www.easy-mock.com/mock/5d4a9049d247740ab81aa95f/goodlist')
    this.list = list.data
    console.log(list.data)
  }
}
</script>
<style scoped src="../css/shopping.css" />
