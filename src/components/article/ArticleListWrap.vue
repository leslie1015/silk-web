<template>
  <div class="article-list-wrap">
    <template v-for="(article, index) in articleList">
      <div :key="index" class="article-title">
        <article-list-card :article-info="article"></article-list-card>
      </div>
    </template>
  </div>
</template>

<script>
import articleListCard from "../../components/article/ArticleListCard";

export default {
  name: "articleList",
  data() {
    return {
      articleList: []
    };
  },
  props: {
      searchText: String
  },
  created() {
    this.listArticles();
  },
  methods: {
    listArticles() {
      const url = this.silkRouter + "/article/list";
      const data = {
        pageNum: 1,
        pageSize: 10,
        filters: this.assemblySearchCond()
      };
      this.httpPost(url, data)
        .then(response => {
          this.articleList = response.data.value.list;
        })
        .catch(error => {
          console.log(error);
        });
    },
    assemblySearchCond() {
      // 作为通用的列表展示，如果是从类型点进来，则传typeId，若果是搜索结果进来，则传searchText
      if (this.searchText) {
        return {articleTitle: this.searchText };
      }
      return {typeId: this.getQueryString("typeId") };
    }
  },
  components: {
    articleListCard
  }
};
</script>

<style lang="stylus">
.article-list-wrap {
    display: flex;
    flex-direction: column;
    /*justify-content: flex-start;*/
}

.article-title {
    /*display: flex;*/
    /*!*flex-direction: column;*!*/
    /*justify-content: flex-start;*/
    /*height: 35px;*/
    /*line-height: 35px;*/
    /*font-size: 15px;*/
    /*color: #333;*/
    /*max-width: calc(100% - 60px);*/
    /*text-overflow: ellipsis;*/
    /*white-space: nowrap;*/
    /*overflow: hidden;*/
    /*text-indent: 20px;*/
    /*position: relative;*/
}
a {
    text-decoration: none;
}
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    /*text-decoration: underline;*/
}
</style>
