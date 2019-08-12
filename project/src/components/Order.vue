<template>
  <!-- 订单页 -->
  <div style="background:#f5f5f9">
    <!-- 头部 -->
    <van-nav-bar
      title="填写订单"
      left-text="←"
      right-text
      :left-arrow="false"
      @click-left="onClickLeft"
      :fixed="true"
    />

    <!-- 添加收货地址 -->
    <div class="address">
      <van-cell title="请选择收货地址" is-link />
    </div>

    <!-- 商品单 -->
    <van-card
      :num="nums? nums : 1"
      :price="content.price"
      :desc="content.slogan"
      :title="content.name"
      :thumb="content.img"
    />

    <!-- 配送方式 -->
    <van-cell style="margin-top: .2rem" title="配送方式" is-link value="顺丰包邮" />

    <!-- 发票 -->
    <van-cell style="margin-top: .2rem" id="invoice" title="发票类型" is-link @click="showPopup" />
    <van-popup v-model="show" get-container="#invoice" />
    <van-popup v-model="show" position="bottom" :style="{ height: '4.33rem' }">
      <div class="invoicetitle">编辑发票信息</div>
      <div class="peizhi">
        <h4>发票类型</h4>
        <p
          v-for="(item,index) in ptitle"
          :key="index"
          v-text="item"
          @click="active(index)"
          :class="{active:index == num}"
        ></p>
      </div>
      <div class="yes" @click="btnyes">提交</div>
    </van-popup>

    <!-- 优惠码 -->
    <div class="favorable">
      <div class="font">
        <span>优惠码</span>
        <input type="text" placeholder="请输入优惠码" />
      </div>
      <em @click="favorable">使用</em>
    </div>

    <!-- 结算 -->
    <div class="clear">
      <p>
        <span>商品总额</span>
        <span>{{`￥${content.price * (this.nums ? this.nums : 1)}`}}</span>
      </p>
      <p>
        <span>优惠金额总额</span>
        <span>-￥0.00</span>
      </p>
      <p>
        <span>邮费</span>
        <span>+￥0.00</span>
      </p>
    </div>

    <!-- 结算按钮 -->
    <div class="clear_btn">
      <p>
        合计金额:
        <span>{{`￥${content.price * this.nums}`}}</span>
      </p>
      <b @click="submit">提交订单</b>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      ptitle: ['不开发票', '普通电子发票'],
      num: 0,
      content: [],
      tag: '',
      nums: null
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    showPopup() {
      this.show = true;
    },
    btnyes() {
      this.show = false;
    },
    active(index) {
      this.num = index
    },
    favorable() {
      this.$toast('优惠卷通道故障')
    },
    submit() {
      this.$toast('提交成功')
      this.$router.push({
        name: 'home0'
      })
    }
  },
  async created() {
    let tag = this.$route.params.gid
    this.nums = this.$route.params.num
    let content = await this.$axios('http://10.3.132.145:3000/list/gid', { params: { tag } })
    this.content = content.data[0]
    console.log(content.data[0])
  }
}
</script>

<style scoped src="../css/order.css" />




