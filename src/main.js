"use strict";

import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

//页面组件引用
import Index from "./views/Index.vue"; //首页
import DingYue from "./views/DingYue.vue";
import JiJian from "./views/JiJian.vue";
import FaXian from "./views/FaXian.vue";

import KeTang from "./views/KeTang.vue";//课堂
import GeRen from "./views/GeRen.vue";//个人
import YinPin from "./views/YinPin.vue";//印品
import GuanZhu from "./views/GuanZhu.vue";//关注
import XiaoXi from "./views/XiaoXi.vue";//消息
import WoDe from "./views/WoDe.vue";//我的



//公共样式和CSS文件
import "./static/js/rem.js";
import "./static/css/public.css";
import "./static/css/swiper.min.css";
import "./static/js/swiper.min.js";
import jquery from "jquery";


Vue.use(VueRouter);
const router = new VueRouter({
    routes:[
        {path:"/",component:Index},
        {path:"/dingyue",component:DingYue},
        {path:"/jijian",component:JiJian},
        {path:"/faxian",component:FaXian},
        {path:"/ketang",component:KeTang},
        {path:"/geren",component:GeRen},
        {path:"/yinpin",component:YinPin},
        {path:"/guanzhu",component:GuanZhu},
        {path:"/xiaoxi",component:XiaoXi},
        {path:"/wode",component:WoDe}





    ]
});

new Vue({
    el: "#app",
    router,
    render: h=>h(App)
});