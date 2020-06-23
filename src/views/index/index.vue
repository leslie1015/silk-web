<template>
    <div id="index">
        <div class="home">
            <CategoryCard :category-list="categoryList"></CategoryCard>
        </div>
    </div>
</template>

<script>
    import CategoryCard from './componets/CategoryCard'
    export default {
        name: "index",
        data() {
            return {
                activeIndex: '1',
                categoryList: []
            };
        },
        created() {
            this.initCategorys();
        },
        methods: {
            addArticle() {
                // window.location.href='/addArticle';
            },
            handleSelect(key, keyPath) {
                // this.$router.push({path: key})
                // console.log(key, keyPath);
            },
            initCategorys() {
                this.httpGet(this.silkRouter + '/category/list4Home').then((response) => {
                    this.categoryList = response.data.value;
                }).catch((response) => {
                    console.log(response);
                })
            }
        },
        components: {
            CategoryCard
        }
    };
</script>

<style lang="stylus">
    #index
        font-family 'Avenir', Helvetica, Arial, sans-serif
        -webkit-font-smoothing antialiased
        -moz-osx-font-smoothing grayscale
        /*text-align center*/
        color #2c3e50


    .el-input {
        width: 15rem;

    }

    .add-article {
        float: right !important;
    }

</style>
