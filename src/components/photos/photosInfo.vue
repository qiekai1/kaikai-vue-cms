<template>
    <div class="photoInfo-container">
        <h1>{{photoInfo.title}}</h1>
        <p>
            <span>发表时间:{{photoInfo.add_time | dateFormat}}</span>
            <span>点击: {{photoInfo.click}}次</span>
        </p>
        <hr>


        <!-- 缩略图区域 -->


        <!-- 图片文字内容区域 -->
        <div class="content" v-html="photoInfo.content">
        </div>


        <!-- 发表评论子组件 -->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script> 
import comment from '../subcomments/comment.vue'
import {Toast} from 'mint-ui'
    export default {
        data(){
            return{
                id: this.$route.params.id,
                photoInfo: [],
            }
        },
        created(){
            this.getPhotosInfo()
        },
        methods:{
            getPhotosInfo(){
                this.$http.get('api/getimageInfo/'+ this.id).then(res=>{
                    if(res.body.status===0){
                        this.photoInfo = res.body.message[0]
                    }else{
                        Toasy('获取图片详情失败')
                    }
                })
            }
        },
        components:{
            'comment-box':comment
        }

    }
</script>

<style lang="scss" scoped>
.photoInfo-container{
    h1{
        font-size: 14px;
        color: orange;
        text-align: center;
    }
    p{
        padding: 0 5px;
        color: blue;
        display: flex;
        justify-content: space-between;
        font-size: 12px;
    }
    .content{
        font-size: 13px;
        text-indent: 2em;
        line-height: 30px;
    }
}
</style>
