<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div id="articleList">
        <Layout>
            <template v-slot:header>
                <HeadTop></HeadTop>
            </template>
            <template v-slot:ad-left>
                <h1></h1>
            </template>
            <template v-slot:main>
                <ArticleListWrap :searchText="searchText"></ArticleListWrap>
            </template>
            <template v-slot:ad-right>
                <h1> </h1>
            </template>
        </Layout>
    </div>
</template>

<script>
    import Layout from '../../components/Layout'
    import HeadTop from '../../components/HeadTop'
    import ArticleListWrap from '../../components/article/ArticleListWrap'

    export default {
        name: "articleList",
        data() {
            return {
                searchText:''
            }
        },
        created() {
            this.initSearchCond();
        },
        methods: {
            initSearchCond() {
                this.searchText = decodeURI(this.getQueryString('searchText'));
            },
        },
        components: {
            ArticleListWrap, Layout, HeadTop
        }
    };
</script>

<style lang="stylus">

</style>
