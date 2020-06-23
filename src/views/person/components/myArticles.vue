<template>
  <div id="myArticles">
      <el-table :data="articleList" style="width: 100%">
          <!--<el-table-column prop="id" label="ID" width="50"> </el-table-column>-->
          <el-table-column prop="articleTitle" label="标题" :show-overflow-tooltip="showOverflowTooltip"> </el-table-column>
          <!--<el-table-column prop="id" label="ID"> </el-table-column>-->

          <el-table-column
                  fixed="right"
                  label="操作"
                  width="100">
              <template slot-scope="scope">
                  <el-button @click="view(scope.row.id)" type="text" size="small">查看</el-button>
                  <el-button @click="update(scope.row.id)" type="text" size="small">编辑</el-button>
              </template>
          </el-table-column>
      </el-table>
  </div>
</template>

<script>
export default {
  data() {
      return {
          showOverflowTooltip:true,
          articleList: []
      }
  },
  props: {
    articleStatus: Number
  },

  created: function() {
      this.listArticlesByType();
  },
  methods: {
    listArticlesByType() {
      this.httpGet(this.silkRouter + "/article/listByStatus?status=" + this.articleStatus
      )
        .then(response => {
          this.articleList = response.data.value;
        })
        .catch(response => {
          console.log(response);
        });
    }
    ,
      view(articleId) {
      // alert("view:" + articleId)
          window.open("/articleDetail.html?articleId=" + articleId)

    },
      update(articleId) {
        alert("update:" + articleId)
      }
  }
};
</script>

<style lang="stylus"></style>
