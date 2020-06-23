<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <Layout>
        <template v-slot:header>

        </template>
        <template v-slot:ad-left>
            <h1></h1>
        </template>
        <template v-slot:main>
            <div class="article-info">
                <h2 class="main-title">
                    {{articleInfo.articleTitle}}
                </h2>
                <h4 v-if="articleInfo.subTitle" class="text-center">
                    {{articleInfo.subTitle}}
                </h4>
                <div class="date-info">
                    {{articleInfo.addTime | dateformat('YYYY-MM-DD HH:mm')}} &nbsp;
                    <span class="author-name">作者：{{articleInfo.addName}}</span>
                </div>
                <div class="content-wrap"  v-html="articleInfo.content">
                </div>
            </div>
        </template>
        <template v-slot:ad-right>
            <h1> </h1>
        </template>
    </Layout>


</template>

<script>

    import Layout from '../Layout'
    export default {
        data() {
            return {
                articleInfo: {}
            }
        },
        created() {
            this.getArticleInfo();
        },
        methods: {
            getArticleInfo() {
                const url = this.silkRouter + '/article/getArticleInfo?articleId=' + this.$route.params.articleId;
                this.httpGet(url).then((response) => {
                    this.articleInfo = response.data.value;
                }).catch((response) => {
                    console.log(response);
                })
            }
        },
        components: {
            Layout
        }
    };
</script>

<style lang="stylus">
    .article-info {
        display: flex;
        flex-direction: column;
    }

    .content-wrap {
        table {
            /*#从别处复制的内容如果有table，且样式包含table-layout:auto，会导致现有样式紊乱，所以重置为auto*/
            table-layout:auto !important;
        }
    }

    .content-wrap img {
        max-width: 100% !important;
    }

    .date-info {
        padding: 1rem;
        border-bottom: 1px solid #e5e5e5;
    }

    .main-title {
        /*font-size: 38px;*/
        weight:bold;
        color: #4d4f53;
        letter-spacing: 1px;
        line-height: 3rem;
        padding: 1rem 0;
    }

    @media (min-width: 567px) {

    }
</style>