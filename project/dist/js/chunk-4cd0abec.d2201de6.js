(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4cd0abec"],{c84b:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"detail"},[e("Detail")],1)},o=[],i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticStyle:{"background-color":"#f5f5f9"}},[e("van-nav-bar",{attrs:{title:"搜索","left-text":"←","right-text":"","left-arrow":!1,fixed:!0},on:{"click-left":t.onClickLeft}}),e("van-swipe",{staticStyle:{"margin-top":"1.10666rem"},attrs:{autoplay:2e3}},t._l(t.images,function(t,s){return e("van-swipe-item",{key:s},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"image"}]})])}),1),e("div",{staticClass:"shop_inf"},[e("h3",{domProps:{textContent:t._s(t.shoplis.name)}}),e("p",{staticClass:"title",domProps:{textContent:t._s(""+t.shoplis.slogan+t.shoplis.name)}}),e("p",{staticClass:"price",domProps:{textContent:t._s("￥"+t.shoplis.price+".00")}}),e("van-coupon-cell",{attrs:{coupons:t.coupons,"chosen-coupon":t.chosenCoupon,title:"满199元立减20元"},on:{click:function(s){t.showList=!0}}}),e("van-popup",{attrs:{position:"bottom"},model:{value:t.showList,callback:function(s){t.showList=s},expression:"showList"}},[e("van-coupon-list",{attrs:{coupons:t.coupons,"chosen-coupon":t.chosenCoupon,"disabled-coupons":t.disabledCoupons},on:{change:t.onChange,exchange:t.onExchange}})],1),e("p",{staticClass:"permute"},[t._v("依旧换新")])],1),e("van-cell",{staticStyle:{"margin-top":".2rem"},attrs:{id:"guige",title:"选择：官方标配","is-link":"","arrow-direction":"down"},on:{click:t.showPopup}}),e("van-popup",{attrs:{"get-container":"#guige"},model:{value:t.show,callback:function(s){t.show=s},expression:"show"}}),e("van-popup",{style:{height:"8.16rem"},attrs:{position:"bottom"},model:{value:t.show,callback:function(s){t.show=s},expression:"show"}},[e("div",{staticClass:"pic"},[e("div",{staticClass:"pic_img"},[e("img",{attrs:{src:t.shoplis.img,alt:""}})]),e("div",{staticClass:"pic_title"},[e("h4",[t._v(t._s("￥"+t.shoplis.price))]),e("p",[t._v(t._s(t.shoplis.name))])])]),e("div",{staticClass:"peizhi"},[e("h4",[t._v("版本")]),e("p",[t._v("官方标配")])]),e("div",{staticClass:"number"},[e("span",[t._v("购买数量")]),e("van-stepper",{staticStyle:{"margin-right":".266667rem"},attrs:{min:"1",max:t.max,integer:""},model:{value:t.value,callback:function(s){t.value=s},expression:"value"}})],1),e("div",{staticClass:"yes",on:{click:t.btnyes}},[t._v("确定")])]),e("van-cell",{staticStyle:{"margin-top":".2rem"},attrs:{title:"商品评价("+t.shoplis.Stock+")","is-link":"","arrow-direction":"down",value:"查看更多"}}),t._m(0),e("div",{staticClass:"specification"},[e("ul",{staticClass:"flag"},t._l(t.flag,function(s,a){return e("li",{key:a,class:{active:a==t.num},domProps:{textContent:t._s(s)},on:{click:function(s){return t.active(a)}}})}),0)]),t._m(1),e("div",{staticClass:"img_box"},t._l(t.imgurl,function(t,s){return e("img",{key:s,attrs:{src:t,alt:""}})}),0),t._m(2),e("div",{staticClass:"canshu"},[e("table",{attrs:{border:"0",cellpadding:"0",cellspacing:"0"}},[e("tbody",t._l(t.tbody,function(s,a){return e("tr",{key:a},[e("td",{staticStyle:{background:"rgb(244, 244, 244)",padding:"20px"},attrs:{width:"317",valign:"top"}},[e("p",[e("strong",{domProps:{textContent:t._s(s.title)}})])]),e("td",{staticStyle:{background:"rgb(244, 244, 244)",padding:"20px"},attrs:{width:"685",valign:"top"}},t._l(s.more,function(s,a){return e("p",{key:a,domProps:{textContent:t._s(s)}})}),0)])}),0)])]),t._m(3),e("div",{staticClass:"know"},t._l(t.know,function(s,a){return e("p",{key:a,domProps:{textContent:t._s(s)}})}),0),e("div",{directives:[{name:"show",rawName:"v-show",value:t.show?t.hide:!t.hide,expression:"show? hide :!hide"}],staticClass:"foot_btn"},[e("ul",[e("li",{on:{click:t.onAddCartClicked}},[t._v("加入购物车")]),e("li",{attrs:{"data-id":t.shoplis.tag},on:{click:function(s){return t.onBuyClicked(t.shoplis.tag)}}},[t._v("立即购买")])])])],1)},l=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"pingjia"},[e("div",{staticClass:"ren"},[e("img",{attrs:{src:"https://s1.mi-img.com/mfsv2/avatar/fdsc3/p01IygEDSf9w/Eg2foR14Rxs6Ur.jpg",alt:""}}),e("span",[t._v("生而为人")])]),e("p",{staticClass:"title"},[t._v("刚买没几天**就下调，真的是醉了")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"titles"},[e("b",[t._v("商品详情")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"titles"},[e("b",[t._v("产品参数")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"titles"},[e("b",[t._v("购买须知")])])}],n=(e("96cf"),e("3b8d")),c={available:1,condition:"满199元可以使用",reason:"",value:2e3,name:"满199元减20元",startAt:1559104e3,endAt:1584592e3,valueDesc:"20",unitDesc:"元"},r={data:function(){return{images:[],chosenCoupon:-1,coupons:[c],disabledCoupons:[c],showList:!1,shoplis:[],show:!1,value:null,max:"",hide:!1,flag:["商品详情","规格参数","购买须知"],num:0,imgurl:["https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194134_527.jpg","https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194134_843.jpg","https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_849.jpg","https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_184.jpg","https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_630.jpg","https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_694.jpg","https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_642.jpg","https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_377.jpg","https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_206.jpg","https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_7.jpg","https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_192.jpg","https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_882.jpg","https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_433.jpg","https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_482.jpg","https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_439.jpg","https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_324.jpg","https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_371.jpg","https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_931.jpg","https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_977.jpg","https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_345.jpg","https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_400.jpg","https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_396.jpg","https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194135_635.jpg","https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194136_983.jpg","https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194136_634.jpg","https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194136_849.jpg","https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194136_158.jpg","https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194136_762.jpg","https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194136_675.jpg","https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194136_611.jpg","https://shop-1256119282.file.myqcloud.com/blackshark/20190802/20190802194136_579.jpg"],tbody:[{title:"产品名称",more:["黑鲨游戏手机 2 Pro"]},{title:"颜色",more:["电鸣黑 冰魄灰 风行蓝"]},{title:"处理器与内存",more:["12GB＋128GB","骁龙855 Plus最高主频2.96GHz","Adreno™ 640 图形处理器","12GB LPDDR4x 双通道","128GB 机身存储 UFS3.0","12GB＋256GB","骁龙855 Plus最高主频2.96GHz","Adreno™ 640 图形处理器","12GB LPDDR4x 双通道","256GB 机身存储 UFS3.0"]},{title:"重量与尺寸",more:["4000mAh(typ)/3900mAh(min)","内置电池，免更换","手机支持 QC4+ 快充协议，标配27W充电器(充电器支持Qualcomm® Quick Charge™ 3.0协议)","USB Type-C 双面充电接口"]},{title:"拍照与摄像",more:["后置摄像头","主摄像头48M 0.8µm（48MP 4in1 PDAF f1.75）","光圈: f/1.75 大光圈","6片式镜头","LED闪光灯","副摄像头12M  1.0µm（12MP PDAF f2.2）","光圈: f/2.2光圈","6片式镜头 长焦镜头（2倍光学变焦）","&nbsp","支持PDAF相位对焦","支持暗光增强技术","HDR 高动态范围调节技术","人像模式","全景模式","AI相机","超级夜景","&nbsp;","前置摄像头","20M 0.9µm 4in1","光圈: f/2.0光圈","5片式镜头","&nbsp;","智能美颜，自拍实时美颜","倒计时自拍","人像模式","&nbsp;","4K 视频拍摄，60fps","1080p 视频拍摄，60fps","慢动作 720P@240fps，1080P@120fps，720P@1920fps"]},{title:"屏幕",more:["6.39英寸 AMOLED","19.5:9 全面屏","430nit（typ）高亮度","1080*2340 分辨率，403PPI，对比度 ≥60000:1","DCI－P3 色域占比108.9%（typ）","支持护眼模式","支持MEMC 智能运动补偿技术","支持图像增强"]},{title:"网络支持",more:["3XCA，2XCA, 支持4*4 MIMO（Band 1/3/38/39/41）","全网通","双Nano－SIM 卡槽，支持双卡盲插","出厂默认卡1位主卡，可以通过设置切换主副卡","主卡支持TD LTE／FDD LTE／TD－SCDMA／WCDMA／CDMA／GSM","副卡支持TD LTE／FDD LTE／TD－SCDMA／WCDMA／CDMA／GSM","主副卡不能同时CDMA","支持802.11a/b/g/n/ac 双频无线网络","支持2 X 2 mimo 技术，支持MU MIMO","支持WIFI Display，WIFI Direct，WIFI 热点","支持蓝牙5.0 无线技术，支持 aptX&aptX HD&aptX Adaptive&LDAC高清音乐传输","网络频段","FDD LTE（频段 B1,B3,B4,B5,B7,B8）","TDD LTE（频段 B34,B38,B39,B40,B41）","TD-SCDMA（频段 B34,B39）","WCDMA（频段 B1,B2,B5,B8）","GSM（频段 B2,B3,B5,B8）","CDMA／EVDO（频段 BC0）"]},{title:"指纹按键与识别",more:["虚拟按键：多任务，HOME，返回","支持全面屏手势，支持四角滑动进入智能DOCK","Shark键：两段式开关，进入或者退出Sharkspace","支持支付宝，微信指纹支付"]},{title:"导航定位",more:["GPS，Galileo，GLONASS，北斗，QZSS，A-GPS辅助定位"]},{title:"传感器",more:["陀螺仪，地磁，重力感应，距离感应，环境光感应，屏下指纹，压力感应"]},{title:"多媒体播放",more:["视频文件格式：3gp、mp4、flv、avi、asf、webm、3g2等"]},{title:"音频&图片",more:["音频文件格式：mp3、amr、flac、aac、wav、ogg、wma、ape、aiff等","图片文件格式：png、gif、jpg、bmp、webp、wbmp等"]},{title:"包装清单",more:["手机主机／电源适配器／USB Type-C 数据线／Type-C Audio 转接线／插针／手机保护壳／保护膜／入门指南／三包凭证（请以实际入盒配件内容为准）"]}],know:["7天无理由退货，15天质量问题换货","1、以上图片仅供参考，请以实物为准","2、页面中涉及到的数据均来自黑鲨实验室，实际使用会因具体使用环境、产品个体差异等略有不同，请以实际情况为准","3、游戏中对于外设用户的规则，以游戏运营商公布的信息为准"],tel:"",tag:"",nums:"",gid:""}},methods:{onClickLeft:function(){this.$router.go(-1)},onChange:function(t){this.showList=!1,this.chosenCoupon=t},onExchange:function(t){this.coupons.push(c)},onBuyClicked:function(t,s){this.$router.push({name:"order",params:{gid:t,num:this.value?this.value:1}})},onAddCartClicked:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var s=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.tag=this.$route.params.id,this.tel=localStorage.getItem("uid"),this.nums=this.value,!this.tel){t.next=13;break}if(null!=this.nums){t.next=9;break}this.$toast("请先选择规格"),this.show=!0,t.next=11;break;case 9:return t.next=11,this.$axios({method:"post",url:"http://10.3.132.145:3000/cart/gid",data:this.$qs.stringify({tel:this.tel,tag:this.tag,num:this.nums})}).then(function(t){s.$toast("添加成功")});case 11:t.next=15;break;case 13:this.$toast("请先登录"),this.$router.push({name:"login"});case 15:case"end":return t.stop()}},t,this)}));function s(){return t.apply(this,arguments)}return s}(),showPopup:function(){this.show=!0},btnyes:function(){this.show=!1},active:function(t){this.num=t}},created:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var s,e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return s=this.$route.params.id,t.next=3,this.$axios.get("http://10.3.132.145:3000/list/gid",{params:{tag:s}});case 3:e=t.sent,this.shoplis=e.data[0],this.images=e.data[0].images,this.max=e.data[0].Stock,console.log(e.data[0]);case 8:case"end":return t.stop()}},t,this)}));function s(){return t.apply(this,arguments)}return s}()},p=r,h=(e("d1d5"),e("2877")),u=Object(h["a"])(p,i,l,!1,null,"7a95647b",null),m=u.exports,d={name:"detail",components:{Detail:m}},f=d,g=Object(h["a"])(f,a,o,!1,null,null,null);s["default"]=g.exports},d1d5:function(t,s,e){"use strict";var a=e("e8b3"),o=e.n(a);o.a},e8b3:function(t,s,e){}}]);
//# sourceMappingURL=chunk-4cd0abec.d2201de6.js.map