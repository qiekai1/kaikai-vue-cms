import VueRouter from 'vue-router'

// 导入组件
import homeContainer from './components/tabbar/homeContainer.vue'
import memberContainer from './components/tabbar/memberContainer.vue'
import shopcarContainer from './components/tabbar/shopcarContainer.vue'
import searchContainer from './components/tabbar/searchContainer.vue'


import newsList from './components/news/newsList.vue'
import newsInfo from './components/news/newsInfo.vue' 

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' } ,   //如果刚打开页面是根路径的话, 重定向到 /home 路径下的页面
    { path: '/home', component: homeContainer},
    { path: '/member', component: memberContainer},
    { path: '/shopcar', component: shopcarContainer},
    { path: '/search', component: searchContainer},
    { path: '/home/newsList', component: newsList},
    { path: '/home/newsInfo/:id', component: newsInfo}
  ],
  linkActiveClass: 'mui-active'  //覆盖默认的 路由高亮的类, 原来默认的类是 router-link-active
})

// 把路由对象暴露出去
export default router