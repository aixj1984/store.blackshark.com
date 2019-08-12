import Vue from "vue";
import Router from "vue-router";
import Tabbar from "../views/Tabbar.vue";
Vue.use(Router);

const home = () => import("../views/Home.vue");
const shopping = () => import("../views/Shopping.vue");
const shoppingcar = () => import("../views/Shoppingcar.vue");
const mine = () => import("../views/Mine.vue");
const login = () => import("../views/Login.vue");
const reg = () => import("../views/Reg.vue");
const list = () => import("../views/List.vue");
const detail = () => import("../views/Detail.vue");
const order = () => import("../views/Order.vue");


const routes = [{
    path: "/tabbar",
    name: "tabbar",
    component: Tabbar,
    children: [{
        path: "home",
        name: "home0",
        component: home
      },
      {
        path: "shopping",
        name: "home1",
        component: shopping
      },
      {
        path: "shoppingcar",
        name: "home2",
        component: shoppingcar
      },
      {
        path: "mine",
        name: "home3",
        component: mine
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: login
  },
  {
    path: "/reg",
    name: "reg",
    component: reg
  },
  {
    path: "/list/:value",
    name: "list",
    component: list
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: detail
  },
  {
    path: "/order/:gid/:num",
    name: "order",
    component: order
  },
  {
    // 重定向
    path: "/",
    alias: "/index.html",
    redirect: () => {
      return "/tabbar/home";
    }
  }
]

let router = new Router({
  routes: routes
});

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token');
  if (token) {
    next()
  } else {
    if (to.name == 'home2' || to.path == '/tabbar/mine') {
      router.push({
        name: 'login'
      })
    } else {
      next()
    }
  }
})

export default router;
