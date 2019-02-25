<template>
<!-- 这个文件是 创建一个单独的  评论子组件 -->
    <div class="comment-container">
        <h2>发表评论</h2>
        <hr>
        <textarea  placeholder="请输入你要评论的内容(不超过20个字)" maxlength="120" v-model="msg">
        
        </textarea>

        <mt-button type="primary" size="large" @click="postComments">发表评论</mt-button>


        <div class="cmt-list" v-for="(item, i) in comments" :key="item.i">
            <div class="cmt-item">
                <div class="cmt-title">
                    第{{i+1}}楼&nbsp;&nbsp;用户::{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time | dateFormat }}
                </div>
                <div class="cmt-body">
                    {{item.content === 'undefined'? '此用户很懒,没有评论' : item.content}}
                </div>
            </div>
        </div>



        <mt-button type="danger" size="large" plain @click="getMoreComments">加载更多</mt-button>
    </div>
</template>


<script> 
    import {Toast} from 'mint-ui'
    export default {
        data(){
            return {
                pageindex: 1,
                comments:[],
                msg: '',
            }
        },
        created(){
            this.getComments()
        },
        methods: {
            getComments(){  //获取到评论的内容
                this.$http.get('api/getcomments/'+this.id+'?pageindex='+this.pageindex).then(res => {
                    if(res.body.status === 0){
                        // this.comments = res.body.message

                        // 加载更多评论的时候,前面的页面的评论还是要有的，所以用拼接
                        this.comments = this.comments.concat(res.body.message)

                        // concat()方法是字符串的 拼接方法

                        Toast('获取评论成功')
                    }else{
                        Toast('获取评论失败')
                    }
                })
                
            },
            getMoreComments(){ //加载更多 按钮的方法
                this.pageindex ++;
                this.getComments();
                Toast('加载更多评论成功');

            },
            postComments(){  // 发表(提交)评论的方法

            // 在提交之前进行 评论内容的非空验证
            // 字符串的trim方法  指的是  去除一个字符串中 前后的空格,并且返回的是   字符串长度
            if(this.msg.trim().lengh === 0){
                return Toast('评论的内容不可以为空!')
            }
            /* post 向服务器提交数据
            参数1: 请求的url地址;
            参数2: 提交给服务器的数据对象 {content:this.msg}
            参数3: 定义提交时候,表单中数据的格式  {emulateJSON: true} 
            参数4:成功的 回调函数 then(function(res){})
            */
            this.$http.post('api/postcomment/' + this.$route.params.id, {content: this.msg.trim()} ).then(res => {
                if(res.body.status === 0){

                    // 将该评论的内容 手动建一个 对象,里面有 格式
                    var cmt = { user_name: '匿名用户', add_time: Date.now(), content: this.msg.trim()}

                    // 把该评论放到 数组的最前面一项,这样我们就可以看到  最新的评论了
                    this.comments.unshift(cmt) 

                    this.mag='';

                    Toast('发表评论成功')
                }else{
                    Toast('发表评论失败')
                }
            })
            }
        },
        props: ['id'] // id是父组件传递给子组件的元素
    }
</script>


<style lang="scss" scoped>
    .comment-container{
        h2{
            font-size: 18px;
        }
        textarea{
            height: 90px;
            font-size: 15px;
            margin: 0;
        }
        .cmt-list{
            margin: 10px;
            .cmt-item{
                font-size: 14px;
                .cmt-title{
                    background-color: yellow;
                    line-height: 30px;
                    margin-bottom: 10px;
                }
                .cmt-body{
                    line-height: 35px;
                    text-indent: 2em;
                    border: 1px solid #ccc;
                }
            }
        }
    }
</style>
