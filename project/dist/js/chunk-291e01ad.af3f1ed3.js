(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-291e01ad"],{2054:function(t,e,o){"use strict";var s=o("db04"),a=o.n(s);a.a},a55b:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"Login"},[o("Login")],1)},a=[],r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("van-nav-bar",{attrs:{title:"黑鲨登录","left-text":"←","right-text":"","left-arrow":!1,fixed:!0},on:{"click-left":t.onClickLeft}}),t._m(0),o("div",{staticClass:"input_box"},[o("span",{style:t.titlecolor?{color:"#58bc58"}:{color:"red"},domProps:{textContent:t._s(t.teltitle)}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.tel,expression:"tel"},{name:"focus",rawName:"v-focus",value:t.focusState,expression:"focusState"}],attrs:{type:"tel",placeholder:"请输入手机号"},domProps:{value:t.tel},on:{input:function(e){e.target.composing||(t.tel=e.target.value)}}}),o("span",{style:t.passwordcolor?{color:"#58bc58"}:{color:"red"},domProps:{textContent:t._s(t.passwordtitle)}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"},{name:"focus",rawName:"v-focus",value:t.focusPassword,expression:"focusPassword"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),o("div",{staticClass:"forget clearfix"},[o("ul",[o("li",{on:{click:t.goreg}},[t._v("立即注册")]),o("li",[t._v("忘记密码")])])]),o("div",{staticClass:"reg",on:{click:t.loginStore}},[t._v("登录")]),o("div",{staticClass:"login"},[t._v("小米账号登陆")])],1)},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"logo_box"},[o("img",{attrs:{src:"https://shop-1256119282.file.myqcloud.com/blackshark/pass-source/resources/login/img/login-m-logo.png",alt:""}})])}],l=(o("96cf"),o("3b8d")),i={data:function(){return{tel:null,teltitle:null,titlecolor:!1,focusState:!1,password:null,passwordtitle:null,passwordcolor:!1,focusPassword:!1}},methods:{onClickLeft:function(){this.$router.go(-1)},loginStore:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.tel){t.next=9;break}if(!this.password){t.next=6;break}return t.next=4,this.$axios({method:"post",url:"http://10.3.132.145:3000/login/tel",data:this.$qs.stringify({tel:this.tel,pwd:this.password})}).then(function(t){console.log(t),"no"==t.data?(e.$toast("账号或密码错误"),e.password=null):(e.$toast("成功"),localStorage.setItem("uid",e.tel),localStorage.setItem("token",t.data.token),e.$router.go(-1))});case 4:t.next=7;break;case 6:this.$toast("请输入密码");case 7:t.next=10;break;case 9:this.$toast("请输入账号");case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),goreg:function(){this.$router.push({name:"reg"})}},directives:{focus:{update:function(t,e){var o=e.value;o&&t.focus()}}}},c=i,u=(o("2054"),o("2877")),d=Object(u["a"])(c,r,n,!1,null,"6e98ed8f",null),p=d.exports,f={name:"login",components:{Login:p}},v=f,g=Object(u["a"])(v,s,a,!1,null,null,null);e["default"]=g.exports},db04:function(t,e,o){}}]);
//# sourceMappingURL=chunk-291e01ad.af3f1ed3.js.map