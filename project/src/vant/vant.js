import Vue from 'vue'

import {
  Search,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Lazyload,
  NavBar,
  Toast,
  CouponCell,
  CouponList,
  Popup,
  Cell,
  CellGroup,
  Stepper,
  Card,
  Button,
  SubmitBar,
  Checkbox,
  CheckboxGroup
} from 'vant'


export default () => {
  Vue.use(Search)
    .use(Tabbar)
    .use(TabbarItem)
    .use(Swipe).use(SwipeItem)
    .use(Lazyload)
    .use(NavBar)
    .use(Toast)
    .use(CouponCell).use(CouponList)
    .use(Popup)
    .use(Cell).use(CellGroup)
    .use(Stepper)
    .use(Card)
    .use(Button)
    .use(SubmitBar)
    .use(Checkbox).use(CheckboxGroup)
}
