<template>
  <!-- 详情页 -->
  <div style="background-color: #f5f5f9">
    <!-- 头部 -->
    <van-nav-bar
      title="搜索"
      left-text="←"
      right-text
      :left-arrow="false"
      @click-left="onClickLeft"
      :fixed="true"
    />

    <!-- 轮播图 -->
    <van-swipe :autoplay="2000" style="margin-top:1.10666rem">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>

    <!-- 商品信息盒子 -->
    <div class="shop_inf">
      <h3 v-text="shoplis.name"></h3>
      <p class="title" v-text="`${shoplis.slogan}${shoplis.name}`"></p>
      <p class="price" v-text="`￥${shoplis.price}.00`"></p>
      <!-- 优惠卷 -->
      <!-- 优惠券单元格 -->
      <van-coupon-cell
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        @click="showList = true"
        title="满199元立减20元"
      />
      <!-- 优惠券列表 -->
      <van-popup v-model="showList" position="bottom">
        <van-coupon-list
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          :disabled-coupons="disabledCoupons"
          @change="onChange"
          @exchange="onExchange"
        />
      </van-popup>
      <p class="permute">依旧换新</p>
    </div>

    <!-- 选择规格 -->
    <van-cell
      style="margin-top: .2rem"
      id="guige"
      title="选择：官方标配"
      is-link
      arrow-direction="down"
      @click="showPopup"
    />
    <van-popup v-model="show" get-container="#guige" />
    <van-popup v-model="show" position="bottom" :style="{ height: '8.16rem' }">
      <div class="pic">
        <div class="pic_img">
          <img :src="shoplis.img" alt />
        </div>
        <div class="pic_title">
          <h4>{{`￥${shoplis.price}`}}</h4>
          <p>{{shoplis.name}}</p>
        </div>
      </div>
      <div class="peizhi">
        <h4>版本</h4>
        <p>官方标配</p>
      </div>
      <div class="number">
        <span>购买数量</span>
        <van-stepper style="margin-right:.266667rem" v-model="value" min="1" :max="max" integer />
      </div>
      <div class="yes" @click="btnyes">确定</div>
    </van-popup>

    <!-- 商品评价 -->
    <van-cell
      style="margin-top: .2rem"
      :title="`商品评价(${shoplis.Stock})`"
      is-link
      arrow-direction="down"
      value="查看更多"
    />
    <div class="pingjia">
      <div class="ren">
        <img src="https://s1.mi-img.com/mfsv2/avatar/fdsc3/p01IygEDSf9w/Eg2foR14Rxs6Ur.jpg" alt />
        <span>生而为人</span>
      </div>
      <p class="title">刚买没几天**就下调，真的是醉了</p>
    </div>

    <!-- 产品规格 -->
    <div class="specification">
      <ul class="flag">
        <li
          v-for="(item,index) in flag"
          :key="index"
          :class="{active:index == num}"
          @click="active(index)"
          v-text="item"
        ></li>
      </ul>
    </div>

    <!-- 产品须知图片 -->
    <div class="titles">
      <b>商品详情</b>
    </div>
    <div class="img_box">
      <img v-for="(item,index) in imgurl" :key="index" :src="item" alt />
    </div>
    <!-- 商品规格 -->
    <div class="titles">
      <b>产品参数</b>
    </div>
    <div class="canshu">
      <table border="0" cellpadding="0" cellspacing="0">
        <tbody>
          <tr v-for="(item,index) in tbody" :key="index">
            <td width="317" valign="top" style="background: rgb(244, 244, 244); padding: 20px">
              <p>
                <strong v-text="item.title"></strong>
              </p>
            </td>
            <td width="685" valign="top" style="background: rgb(244, 244, 244); padding: 20px">
              <p v-for="(i,index) in item.more" :key="index" v-text="i"></p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 购买须知 -->
    <div class="titles">
      <b>购买须知</b>
    </div>
    <div class="know">
      <p v-for="(item,index) in know" :key="index" v-text="item"></p>
    </div>

    <!-- 底部按钮 -->
    <div class="foot_btn" v-show="show? hide :!hide">
      <ul>
        <li @click="onAddCartClicked">加入购物车</li>
        <li @click="onBuyClicked(shoplis.tag)" :data-id="shoplis.tag">立即购买</li>
      </ul>
    </div>
  </div>
</template>
<script>

const coupon = {
  available: 1,
  condition: '满199元可以使用',
  reason: '',
  value: 2000,
  name: '满199元减20元',
  startAt: 1559104000,
  endAt: 1584592000,
  valueDesc: '20',
  unitDesc: '元'
};
export default {

  data() {
    return {
      images: [],

      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList: false,

      shoplis: [],
      show: false,
      value: null,
      max: '',
      hide: false,
      flag: ['商品详情', '规格参数', '购买须知'],
      num: 0,
      imgurl: ['https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194134_527.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194134_843.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_849.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_184.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_630.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_694.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_642.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_377.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_206.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_7.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_192.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_882.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_433.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_482.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_439.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_324.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_371.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_931.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_977.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_345.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_400.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_396.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_635.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194136_983.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194136_634.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194136_849.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194136_158.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194136_762.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194136_675.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194136_611.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194136_579.jpg'],
      tbody: [{
        title: '产品名称',
        more: ['黑鲨游戏手机 2 Pro']
      }, {
        title: '颜色',
        more: ['电鸣黑 冰魄灰 风行蓝']
      }, {
        title: '处理器与内存',
        more: ['12GB＋128GB', '骁龙855 Plus最高主频2.96GHz', 'Adreno™ 640 图形处理器', '12GB LPDDR4x 双通道', '128GB 机身存储 UFS3.0', '12GB＋256GB', '骁龙855 Plus最高主频2.96GHz', 'Adreno™ 640 图形处理器', '12GB LPDDR4x 双通道', '256GB 机身存储 UFS3.0']
      }, {
        title: '重量与尺寸',
        more: ['4000mAh(typ)/3900mAh(min)', '内置电池，免更换', '手机支持 QC4+ 快充协议，标配27W充电器(充电器支持Qualcomm® Quick Charge™ 3.0协议)', 'USB Type-C 双面充电接口']
      }, {
        title: '拍照与摄像',
        more: ['后置摄像头', '主摄像头48M 0.8µm（48MP 4in1 PDAF f1.75）', '光圈: f/1.75 大光圈', '6片式镜头', 'LED闪光灯', '副摄像头12M  1.0µm（12MP PDAF f2.2）', '光圈: f/2.2光圈', '6片式镜头 长焦镜头（2倍光学变焦）', '&nbsp', '支持PDAF相位对焦', '支持暗光增强技术', 'HDR 高动态范围调节技术', '人像模式', '全景模式', 'AI相机', '超级夜景', '&nbsp;', '前置摄像头', '20M 0.9µm 4in1', '光圈: f/2.0光圈', '5片式镜头', '&nbsp;', '智能美颜，自拍实时美颜', '倒计时自拍', '人像模式', '&nbsp;', '4K 视频拍摄，60fps', '1080p 视频拍摄，60fps', '慢动作 720P@240fps，1080P@120fps，720P@1920fps']
      }, {
        title: '屏幕',
        more: ['6.39英寸 AMOLED', '19.5:9 全面屏', '430nit（typ）高亮度', '1080*2340 分辨率，403PPI，对比度 ≥60000:1', 'DCI－P3 色域占比108.9%（typ）', '支持护眼模式', '支持MEMC 智能运动补偿技术', '支持图像增强']
      }, {
        title: '网络支持',
        more: ['3XCA，2XCA, 支持4*4 MIMO（Band 1/3/38/39/41）', '全网通', '双Nano－SIM 卡槽，支持双卡盲插', '出厂默认卡1位主卡，可以通过设置切换主副卡', '主卡支持TD LTE／FDD LTE／TD－SCDMA／WCDMA／CDMA／GSM', '副卡支持TD LTE／FDD LTE／TD－SCDMA／WCDMA／CDMA／GSM', '主副卡不能同时CDMA', '支持802.11a/b/g/n/ac 双频无线网络', '支持2 X 2 mimo 技术，支持MU MIMO', '支持WIFI Display，WIFI Direct，WIFI 热点', '支持蓝牙5.0 无线技术，支持 aptX&aptX HD&aptX Adaptive&LDAC高清音乐传输', '网络频段', 'FDD LTE（频段 B1,B3,B4,B5,B7,B8）', 'TDD LTE（频段 B34,B38,B39,B40,B41）', 'TD-SCDMA（频段 B34,B39）', 'WCDMA（频段 B1,B2,B5,B8）', 'GSM（频段 B2,B3,B5,B8）', 'CDMA／EVDO（频段 BC0）']
      }, {
        title: '指纹按键与识别',
        more: ['虚拟按键：多任务，HOME，返回', '支持全面屏手势，支持四角滑动进入智能DOCK', 'Shark键：两段式开关，进入或者退出Sharkspace', '支持支付宝，微信指纹支付']
      }, {
        title: '导航定位',
        more: ['GPS，Galileo，GLONASS，北斗，QZSS，A-GPS辅助定位']
      }, {
        title: '传感器',
        more: ['陀螺仪，地磁，重力感应，距离感应，环境光感应，屏下指纹，压力感应']
      }, {
        title: '多媒体播放',
        more: ['视频文件格式：3gp、mp4、flv、avi、asf、webm、3g2等']
      }, {
        title: '音频&图片',
        more: ['音频文件格式：mp3、amr、flac、aac、wav、ogg、wma、ape、aiff等', '图片文件格式：png、gif、jpg、bmp、webp、wbmp等']
      }, {
        title: '包装清单',
        more: ['手机主机／电源适配器／USB Type-C 数据线／Type-C Audio 转接线／插针／手机保护壳／保护膜／入门指南／三包凭证（请以实际入盒配件内容为准）']
      }],
      know: ['7天无理由退货，15天质量问题换货', '1、以上图片仅供参考，请以实物为准', '2、页面中涉及到的数据均来自黑鲨实验室，实际使用会因具体使用环境、产品个体差异等略有不同，请以实际情况为准', '3、游戏中对于外设用户的规则，以游戏运营商公布的信息为准'],
      tel: '',
      tag: '',
      nums: '',
      gid: ''

    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
    onBuyClicked(gid, num) {
      this.$router.push({
        name: 'order',
        params: {
          gid: gid,
          num: this.value ? this.value : 1
        }
      })
    },
    async onAddCartClicked() {
      this.tag = this.$route.params.id
      this.tel = localStorage.getItem('uid')
      this.nums = this.value
      if (this.tel) {
        if (this.nums == null) {
          this.$toast('请先选择规格')
          this.show = true
        } else {
          await this.$axios({
            method: 'post',
            url: 'http://10.3.132.145:3000/cart/gid',
            data: this.$qs.stringify({
              tel: this.tel,
              tag: this.tag,
              num: this.nums
            })
          }).then(res => {
            this.$toast('添加成功')
          })
        }
      } else {
        this.$toast('请先登录')
        this.$router.push({
          name: 'login'
        })
      }
    },
    showPopup() {
      this.show = true;
    },
    btnyes() {
      this.show = false;
    },
    active(index) {
      this.num = index
    }

  },
  async created() {
    let tag = this.$route.params.id
    let shoplis = await this.$axios.get('http://10.3.132.145:3000/list/gid', { params: { tag } })
    this.shoplis = shoplis.data[0]
    this.images = shoplis.data[0].images
    this.max = shoplis.data[0].Stock
    console.log(shoplis.data[0])
  }
}
</script>

<style scoped src="../css/detail.css" />



