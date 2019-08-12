<template>
  <!-- 首页 -->
  <div style="background-color: #f5f5f9">
    <!-- 图片连接 -->
    <div class="img_box">
      <img v-for="(item,index) in imgurl" :key="index" :src="item" alt />
    </div>
    <!-- 7天无理由退货 -->
    <div class="pledge">
      <div class="icon_box">
        <ul>
          <li v-for="(item,index) in icon" :key="index">
            <i class="iconfont" :class="item.name"></i>
            <p v-text="item.title"></p>
          </li>
        </ul>
      </div>
      <h4 class="telnum">{{tel}}</h4>
      <p class="time">{{time}}</p>
      <div class="service_btn">{{btn}}</div>
      <p class="record">{{record}}</p>
      <p class="copy">{{copy}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgurl: ['https://shop-1256119282.file.myqcloud.com/blackshark/20190807/20190807094541_882.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190730/20190730165404_751.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190730/20190730165413_659.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190804/20190804115614_631.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190804/20190804115715_108.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802112405_353.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802112411_953.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190730/20190730165553_949.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190730/20190730165604_478.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190727/20190727003454_500.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190727/20190727003503_986.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190727/20190727003511_972.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190727/20190727003519_958.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190727/20190727003525_921.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190724/20190724211949_637.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190724/20190724212021_773.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190724/20190724212215_99.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190724/20190724212330_125.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190724/20190724212421_334.jpg', 'https://shop-1256119282.file.myqcloud.com/blackshark/20190724/20190724212537_655.jpg'],
      icon: [{
        name: 'icon-qitianwuliyoutuihuan',
        title: '质量问题15天换货'
      }, {
        name: 'icon-tian',
        title: '质量问题15天换货'
      }, {
        name: 'icon-bao',
        title: '满99元包邮'
      }],
      tel: '400-015-8899',
      time: '热线服务时间: 09:00 - 24:00',
      btn: '在线客服',
      record: '赣公网安备36010602000042',
      copy: 'Copyright ©2017-2018 Black Shark 赣ICP备17012659',
    }
  }
}
</script>
<style scoped src="../css/home.css" />



