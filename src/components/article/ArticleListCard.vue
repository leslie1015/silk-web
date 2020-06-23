<template>
    <div class="card article-card-wrap" @click="showArticleDetail(articleInfo.id)">
        <el-row>
            <el-col :span="24" class="card-body-wrap">
                <div class="card-body">
                    <h5 class="card-title">{{articleInfo.articleTitle}}</h5>
                    <p class="card-text">{{articleInfo.simpleIntro}}</p>
                    <p class="card-text"><small class="text-muted">上传时间：{{articleInfo.addTime | dateformat('YYYY-MM-DD HH:mm:ss')}}</small></p>
                </div>
            </el-col>
<!--            <el-col :span="4" class="card-img-wrap">-->
<!--&lt;!&ndash;                <img src="../../img/1.jpg" class="card-img" alt="...">&ndash;&gt;-->
<!--            </el-col>-->
        </el-row>
    </div>
</template>

<script>
    export default {
        props: {
            articleInfo: Object
        },
        methods: {
            showArticleDetail(articleId) {
                location.href = 'articleDetail.html?articleId=' + articleId
            }
        }
    }
</script>

<style>
    @media (max-width: 567px) {
        .card-img-wrap{
            display: none !important;
        }
    }

    .card {
        /*cursor: pointer;*/
        position: relative;
        width: 100%;
        margin: 0 0 15px;
        padding: 15px 2px 20px 0;
        border-bottom: 1px solid #f0f0f0;
        word-wrap: break-word;
    }
    .article-card-wrap :hover {
        cursor: pointer;
        /*box-shadow: 3px 5px 5px #888888;*/
        background-color: beige;
    }

    .card-img-wrap {
        display: flex;
        justify-content: flex-start;
        align-items: center;     /* 垂直居中 */
        /*margin-top: -58px;*/
        /*bottom: 40px;*/
        /*width: 125px;*/
        /*height: 100px;*/
    }
    .card-body {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    .card-img {
        max-height: 8rem;
        /*width: 10rem;*/
    }
    .card-title {
        margin: -7px 0 4px;
        display: inherit;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
    }
    .card-text {
        color: #999;
    }

</style>