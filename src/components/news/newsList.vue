<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
					<router-link :to="'/home/newsInfo/' + item.id " class="">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1> {{ item.title }}</h1>
							<p class="mui-ellipsis">
                            <span>发表时间: {{item.add_time | dateFormat('YYYY-MM-DD hh:mm:ss---') }}</span>
                            <span>点击: {{item.click}} 次</span>
                            </p>
						</div>
					</router-link>
				</li>
				
			</ul>
    </div>
</template>

<script> 
    import { Toast } from 'mint-ui'

    export default {
        data(){
            return {
                newsList: []
            }
        },
        created() {
            this.getnewsList()
        },
        methods: {
            getnewsList() {
                this.$http.get('api/getnewslist').then(result => {
                    if(result.body.status === 0) {
                        // 如果成功获取到了,要把数据保存到data上
                        this.newsList = result.body.message

                        Toast('获取数据成功')
                    }else{
                        Toast('获取数据失败')
                    }
                })
            },
        }
    }
</script>



<style lang="scss" scoped>
    .mui-table-view{
        li{
            h1{
                font-size: 14px;
            }
            .mui-ellipsis{
                font-size: 12px;
                color: #222aff;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>
