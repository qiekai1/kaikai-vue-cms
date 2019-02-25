<template>
    <div>


        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
                        <!-- vue的类样式的使用 -->
                        <!-- 这里的高亮默认的是 最开始 是 '全部'这个选项是 高亮的,'全部'的id是0 -->
						<a :class="['mui-control-item ', item.id == 0 ? 'mui-active' : '']" v-for="item in cates" :key="item.id" @click="getPhotoListById(item.id)">
							{{item.title}}
						</a>
						
						
					</div>
				</div>

			</div>

            <ul class="photo-list">
                <router-link v-for="item in list" :key="item.id" :to="'/home/photosInfo/' + item.id" tag="li">
                    <img v-lazy="item.img_url">
                    <div class="info">
                        <h1 class="info-title">
                            {{item.title}}
                        </h1>
                        <div class="info-body">
                            {{item.zhaiyao}}
                        </div>

                    </div>
                </router-link>
            </ul>

    </div>
</template>


<script>
    import {Toast} from 'mint-ui'


    // 初始化 mui的滑动组件  先引入mui的js文件, 再初始化该组件
    import mui from '../../lib/mui/js/mui.min.js'

    // mui('.mui-scroll-wrapper').scroll({
	//     deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    // });

    export default {
        data(){
            return{
                cates:[],  //获取全部分类的 数组
                list:[],
            }
        },
        created(){
            this.getAllCategory()
            this.getPhotoListById(0)
        },
        mounted(){   //当组件中的DOM结构被渲染好并放到页面中的时候,会执行这个函数

        // 所以要在这个钩子函数中  初始化 图片列表栏 这个滚动这个组件
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        methods: {
            getAllCategory(){
                this.$http.get('api/getimgcategory').then(res => {
                    if(res.body.status === 0) {
                        res.body.message.unshift({title: '全部', id: 0})

                        this.cates = res.body.message

                        Toast(' 获取全部分类成功')
                    }else{
                       Toast(' 获取全部分类失败')
                    }
                })
            },

            getPhotoListById(cateId){
                this.$http.get('api/getimages/' + cateId).then(res => {
                    if(res.body.status === 0) {
                        this.list = res.body.message

                        Toast(' 获取图片列表成功')
                    }else{
                        Toast(' 获取图片列表失败')
                    }
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

// 这个样式是 解决触摸滑动时候的警告
    * {
        touch-action: pan-y;
    }

.photo-list{
    list-style: none;
    margin: 0;
    padding: 10px;
    padding-bottom: 0;
    li{
        text-align: center;
        margin-bottom: 10px;
        position: relative;
        img{
            width: 100%;
            vertical-align: middle;  //去除图片之间的间隙
        }
        img[lazy=loading] {
            width: 40px;
            height: 300px;
            margin: auto;
        }
        .info{
            position: absolute;
            bottom: 0;
            background-color: rgba(0,0,0,.2);
            color: #fff;
            text-align: center;
            max-height: 85px;
            .info-title{
                font-size: 14px;
            }
            .info-body{ 
                font-size: 12px;
            }
        }
    }
}

    
</style>


