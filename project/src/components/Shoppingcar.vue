<template>
  <!-- 购物车页面 -->
  <div style="background:#f5f5f9">
    <!-- 头部 -->
    <van-nav-bar
      title="购物车"
      :right-text="clickRight ? '完成' : '编辑'"
      @click-right="onClickRight"
      :fixed="true"
    />
    <!-- 商品列表 -->
    <div class="list">
      <div class="item___1tPbB" v-for="(item,index) in shoplist" :key="index">
        <div class="xuan___3iY-j">
          <input type="checkbox" name id />
        </div>
        <img :src="item.img" alt />
        <div class="xiangxi___1qLX4">
          <h1>{{item.name}}</h1>
          <p>官方标配</p>
          <div class="jiage___3aDi9">
            <span v-text="`￥${item.price}`"></span>
            <b v-text="`×${item.num}`" v-show="!clickRight"></b>
            <van-stepper
              v-model="item.num"
              integer
              v-show="clickRight"
              async-change
              :data-id="item.tag"
              @change="onChange(item.num,item.tag)"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- 提示话 -->
    <p class="hint">去看看有哪些优惠吧</p>

    <!-- 购买按钮 -->
    <div class="btn_box">
      <div class="input">
        <input type="checkbox" />
        <span>全选</span>
      </div>
      <div class="price">
        <b v-show="!clickRight">合计:￥</b>
        <span v-show="!clickRight">111</span>
      </div>
      <div class="btns" :style="clickRight? {'background':'red'} :{'background':'#00c03c'}">
        <span v-text="clickRight? '删除' :'结算'"></span>
        <em v-show="!clickRight">(0)</em>
      </div>
    </div>
  </div>
  <!-- cart/good -->
</template>

<script>
export default {
  data() {
    return {
      clickRight: false,
      checked: '',
      shoplist: []
    }
  },
  methods: {
    onClickRight() {
      this.clickRight = !this.clickRight
    },
    onSubmit() {

    },
    async onChange(item) {
      await this.$axios('http://10.3.132.145:3000/cart/num', {
        params: {
          num: item.num,
          tag: item.tag
        }
      })
    }
  },
  async created() {
    let tel = localStorage.getItem('uid')
    let shoplist = await this.$axios('http://10.3.132.145:3000/cart/good', { params: { tel } })
    this.shoplist = shoplist.data
    this.num = shoplist.data.num
    // console.log(shoplist.data)
  }
}
</script>

<style scoped src="../css/shoppingcar.css" />

