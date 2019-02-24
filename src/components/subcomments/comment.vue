<template>
<!-- 这个文件是 创建一个单独的  评论子组件 -->
    <div class="comment-container">
        <h2>发表评论</h2>
        <hr>
        <textarea  placeholder="请输入你要评论的内容(不超过20个字)" maxlength="120">
        
        </textarea>

        <mt-button type="primary" size="large">发表评论</mt-button>


        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                    第1楼&nbsp;&nbsp;用户::匿名用户&nbsp;&nbsp;发表时间:2012-11-20 12:12:12
                </div>
                <div class="cmt-body">
                    哈哈哈哈
                </div>
            </div>
        </div>

        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                    第1楼&nbsp;&nbsp;用户::匿名用户&nbsp;&nbsp;发表时间:2012-11-20 12:12:12
                </div>
                <div class="cmt-body">
                    哈哈哈哈
                </div>
            </div>
        </div>

        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                    第1楼&nbsp;&nbsp;用户::匿名用户&nbsp;&nbsp;发表时间:2012-11-20 12:12:12
                </div>
                <div class="cmt-body">
                    哈哈哈哈
                </div>
            </div>
        </div>


        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>


<script> 
    
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
