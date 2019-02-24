<template>
    <div class="newsInfo-container">
        <h2 class="title">{{newsInfo.title}}</h2>
        <p class="subtitle">
            <span>发表时间:{{newsInfo.add_time | dateFormat}}</span>
            <span>点击:{{newsInfo.click}} 次</span>
        </p>

        <hr>


        <!-- 内容区域 -->
        <div class="content" v-html = "newsInfo.content">
        </div>

        
        <!-- 评论子组件区域 -->
        <comment-box></comment-box>
    </div>
</template>

<script> 

import comment from '../subcomments/comment.vue'

import {Toast} from 'mint-ui'




    export default {
        data(){
            return {
                id: this.$route.params.id,
                newsInfo: [ ]
            }
        },
        created(){
            // 一定要用 this来调用方法
           this.getnewsInfo()
        },
        methods:{
            getnewsInfo(){
                this.$http.get('api/getnew/' 
                + this.id).then(result => {
                    if(result.body.status === 0) {
                        this.newsInfo = result.body.message[0]

                        Toast('获取新闻成功')
                    }else{
                        Toast('获取新闻失败')
                    }
                })
            },
        },
        components: {  // 这是放子组件的节点
            'comment-box': comment
        },
    }
</script>

<style lang="scss" scoped>
 .newsInfo-container{
     padding: 5px;
     .title{
         font-size: 16px;
         text-align: center;
         margin: 15px 0;
         color: pink;
         
     }
     .subtitle{
             font-size: 13px;
             color: blue;
             display: flex;
             justify-content: space-between;
         }
    .content{

    }
 }
</style>
