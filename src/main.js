// 入口文件     
// console.log('OK')


import Vue from 'vue'

// 1.1导入路由的包
import VueRouter from 'vue-router'
// 1.2安装路由
Vue.use(VueRouter)

// 1.3导入自己的 router.js路由模块
import router from './router.js'



// 2.1导入 vue-resource 包   这是从接口中获取数据 必使用的包
import VueResource from 'vue-resource'
// 2.1安装
Vue.use(VueResource)



// 按需导入mint-ui组件:  header  轮播图
import { Header, Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 制作底部小图标的时候,使用的mui的样式文件
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


// 导入app根组件
import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app), 
    router  //1.4挂载路由对象
})
