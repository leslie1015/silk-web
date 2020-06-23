<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <Layout>
        <template v-slot:header>
            <HeadTop></HeadTop>
        </template>
        <template v-slot:ad-left>
            <h1></h1>
        </template>
        <template v-slot:main>
            <el-row class="return-img-wrap" :gutter="10">
                <el-col :span="24">
                    <!--每日推荐等信息-->
                </el-col>
            </el-row>
            <template v-for=" (category,index) in categoryList">
                <el-row :gutter="10">
                    <el-col :key="index" :span="24" class="category-wrap">
                        <el-card class="box-card card-wrap"  shadow="never">
                            <div slot="header" class="clearfix">
                                <h5 class="card-title">
                                    <div>{{category.categoryName}}</div>
                                    <div>
                                        <a href="#" title="点击查看更多">
                                            查看更多<i style="font-weight: bold; font-size: 1rem" class="el-icon-arrow-right" @click="listArticleByCategory(category.id)"></i>
                                        </a>
                                    </div>
                                </h5>
                            </div>
                            <div v-for=" (article,aIndex) in category.articleList" :key="aIndex" class="text item article-title-wrap">
                                <ul>
                                    <li class="article-title"
                                       @click="showArticleDetail(article.id)">
                                        <label style="color: #9c9c9c">{{aIndex + 1}}.</label>
                                        {{article.articleTitle}}
                                    </li>
                                </ul>
                                <div class="article-date">{{article.addTime |
                                    dateformat('MM-DD')}}
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </template>
        </template>
        <template v-slot:ad-right>
            <h1> </h1>
        </template>
    </Layout>

</template>

<script>

    import Layout from '../../../components/Layout'
    import HeadTop from '../../../components/HeadTop'

    export default {
        props: {
            categoryList: Array
        },
        methods: {
            listArticleByCategory(typeId) {
                location.href = 'articleList.html?typeId=' + typeId
                // this.$router.push({path: '/articleList/'+ typeId})
            },
            showArticleDetail(articleId) {
                location.href = 'articleDetail.html?articleId=' + articleId
                // this.$router.push({path: '/articleDetail/'+ articleId})
            }
        },
        components: {
            Layout, HeadTop
        }
    };
</script>

<style>

    .return-img-wrap {
        height: 150px;
        background-color: #dbdbdb;
    }

    .article-title-wrap {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 1rem;
    }

    .article-title {
        color: #333;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        /*去除下划线*/
        text-decoration:none;
        cursor:pointer;
    }

    .article-title:hover {
        color: #9c9c9c;
    }

    .card-wrap {
        /*margin-top: 10px;*/
        /*style="width: 20rem;"*/
    }


    .category-wrap {
        /*background-color: beige;*/
        /*border: 1px solid yellowgreen;*/
        /*height: 200px;*/
    }

    .card-title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .article-date {
        color: #9c9c9c;
    }

    @media (max-width: 1000px) {
        .article-date {
            display: none !important;
        }
    }

</style>