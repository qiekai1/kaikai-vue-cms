// 入口文件     
// console.log('OK')


import Vue from 'vue'

// 1.1导入路由的包
import VueRouter from 'vue-router'
// 1.2安装路由
Vue.use(VueRouter)

// 1.3导入自己的 router.js路由模块
import router from './router.js'


// 这个包是用来 显示新闻列表中的时间格式的
import moment from 'moment'

// 定义一个全局的过滤器来 设置时间显示的格式
Vue.filter('dateFormat',function(dataStr, pattern="YYYY-MM-DD : hh:mm:ss"){
    return moment(dataStr).format(pattern)
})








// 2.1导入 vue-resource 包   这是从接口中获取数据 必使用的包
import VueResource from 'vue-resource'
// 2.1安装
Vue.use(VueResource)

// 配置获取数据的  url基地址
Vue.http.options.root = 'http://www.liulongbin.top:3005'    
//注意这句定义全局的基地址的 要在引入vue-resource之后使用


// 按需导入mint-ui组件:  header  轮播图
import { Header, Swipe, SwipeItem, Button } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

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
