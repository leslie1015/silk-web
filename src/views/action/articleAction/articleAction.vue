<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div id="articleAction">
    <div class="main">
      <Layout>
        <template v-slot:header>

        </template>
        <template v-slot:ad-left>
          <h1></h1>
        </template>
        <template v-slot:main>
          <div class="article-info">
            <h2 class="main-title">
              {{ articleInfo.articleTitle }}
            </h2>
            <h4 v-if="articleInfo.subTitle" class="text-center">
              {{ articleInfo.subTitle }}
            </h4>
            <div class="date-info">
              {{ articleInfo.addTime | dateformat("YYYY-MM-DD HH:mm") }} &nbsp;
              <span class="author-name">作者：{{ articleInfo.addName }}</span>
            </div>
            <div class="content-wrap" v-html="articleInfo.content"></div>
          </div>
        </template>
        <template v-slot:ad-right>
          <h1></h1>
        </template>
      </Layout>
    </div>
    <div class="footer">
      <div v-if="actionType === 'audit'">
        <div>
          <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入审核意见（返回修改、拒绝必填）"
            v-model="auditAdvice"
          >
          </el-input>
        </div>
        <div class="button-group">
          <el-button @click="audit(3)" type="primary">审核通过</el-button>
          <el-button @click="audit(4)" type="warning">返回修改</el-button>
          <el-button @click="audit(5)" type="danger">拒绝</el-button>
          <AuditLog :article-id="articleId"></AuditLog>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Layout from "../../../components/Layout";
import AuditLog from "./components/auditLog.vue";

export default {
  name: "articleAction",
  data() {
    return {
      articleInfo: {},
      actionType: this.getQueryString("action"),
      auditAdvice: "",
      articleId: this.getQueryString("id")
    };
  },
  created() {
    this.getArticle();
  },
  methods: {
    getArticle() {
      if (!this.getQueryString("id")) {
        return false;
      }
      const url =
        this.silkRouter +
        "/article/getArticleInfo?articleId=" +
        this.getQueryString("id");
      this.httpGet(url)
        .then(response => {
          this.articleInfo = response.data.value;

          if (this.actionType === "audit" && this.articleInfo.status !== 2) {
            this.warningNotice("当前状态不能审核");
          }
        })
        .catch(response => {
          this.errorNotice(response);
        });
    },

    audit(afterStatus) {
      if (!this.getQueryString("id")) {
        this.errorNotice("无此数据");
        return false;
      }
      if (
        (afterStatus === 4 || afterStatus === 5) &&
        (this.auditAdvice === "" || this.auditAdvice.length === 0)
      ) {
        this.warningNotice("审核意见不能为空");
        return false;
      }
      const data = {
        id: this.getQueryString("id"),
        afterStatus: afterStatus, // 审核状态
        auditAdvice: this.auditAdvice
      };
      const url = this.silkRouter + "/article/audit";
      this.httpPost(url, data)
        .then(response => {
          this.successNotice(response.data.value);
        })
        .catch(error => {
          this.errorNotice(error);
        });
    }
  },
  components: {
    Layout,
    AuditLog
  }
};
</script>

<style lang="stylus">
.article-info {
    display: flex;
    flex-direction: column;
    padding-bottom:100px;
}

.content-wrap {
    table {
        /*#从别处复制的内容如果有table，且样式包含table-layout:auto，会导致现有样式紊乱，所以重置为auto*/
        table-layout: auto !important;
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
    weight: bold;
    color: #4d4f53;
    letter-spacing: 1px;
    line-height: 3rem;
    padding: 1rem 0;
}

/*固定在底部css*/
.footer {
    background-color: #dbdbdb;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100px;
    line-height: 49px;
    z-index: 1010;
    padding-bottom: 5px;
}

.button-group {
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
</style>
