<template>
  <div class="app-container">
    <!-- 顶部header区域 -->

    <mt-header fixed title="Vue项目-恺" ></mt-header>


    <!-- 中间的路由 router-view区域 -->
     <transition>
					<router-view></router-view>

		 </transition>

    <!-- 底部tabbar区域 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
		

  </div>
</template>

<script>
</script>


<style lang="scss" scoped>
  .app-container{
    padding-top: 40px;
		// overflow-x: hidden;  这个样式实现 动画切换的过程中 底部导航栏不出现 滚动条
  }


// 把 	.v-enter  	.v-leave-to 这两个样式 分开写, 实现的是 刚开始动画 从左侧进来.,出去的时候还是从左侧出去
	.v-enter,
	{
		opacity: 0;
		transform: translateX(100%);
	}
	.v-leave-to {
		opacity: 0;
		transform: translateX(-100%);
		position: absolute;  // 这一个样式   实现  不往上飘

	}

	.v-enter-active,
	.v-leave-active{
			transition: all 0.5s ease;
	}
</style>




