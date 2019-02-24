<template>
    <div>
        <!-- 这是 轮播图区域 -->
        <mt-swipe :auto="4000">
            <!-- 在组件中v-for循环的时候,必须要  :key绑定 -->
            <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
                <img v-bind:src="item.img" alt="">
            </mt-swipe-item>
            <!-- <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item> -->
        </mt-swipe>



  <!-- 九宫格 改成 六宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
                    <img src="../../images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu2.png" alt="">
                    
                    <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu3.png" alt="">
                    
                    <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu4.png" alt="">
                    
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu5.png" alt="">
                   
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu6.png" alt="">
                   
                    <div class="mui-media-body">资讯我们</div></a></li>
           
		</ul> 

    </div>
</template>

<script> 
    import {Toast} from 'mint-ui'

    export default {
        data(){
            return {
                lunbotuList: [ ]  //保存轮播图的数组
            }
        },
        created() {
            this.getlunbotu()
        },
        methods: {
            getlunbotu(){
                this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(result => {
                    console.log(result.body);
                    if(result.body.status === 0){
                        // 如果成功了, 把获取到的数据 放在  轮播图数组中
                        this.lunbotuList = result.body.message;
                        Toast({
                            message: '获取轮播图加载数据成功',
                            position: 'top',
                            duration: 3000
                        });
                    }else{
                        Toast('获取加载轮播图失败!!!')
                    }
                })
            },
        }
    }
</script>

<style lang="scss" scoped>

// 修改轮播图盒子的样式
.mint-swipe{
    height: 200px;

    .mint-swipe-item{
        &:nth-child(1){
            background: yellow;
        }
         &:nth-child(2){
            background: pink;
        }
         &:nth-child(3){
            background: blue;
        }

        img {
            width: 100%; 
            height: 100%;
        }
    }
}


// 修改六宫格 ul 和li 的边框和背景颜色的样式
// 这是ul
.mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: none;

}
// 这是li
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border:0;

        img{
            width: 60px;
            height: 60px;
        }

        .mui-media-body{
            font-size: 12px;
        }
    }
</style>

