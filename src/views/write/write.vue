<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div id="write">
    <Layout>
      <template v-slot:header>

      </template>
      <template v-slot:ad-left>
        <h1></h1>
      </template>
      <template v-slot:main>
        <el-form ref="form" :model="form" label-width="4rem">
          <el-form-item label="标题">
            <el-input v-model="form.articleTitle"></el-input>
          </el-form-item>
          <el-form-item label="副标题">
            <el-input v-model="form.subTitle"></el-input>
          </el-form-item>
          <el-form-item label="类型">
            <el-select
              v-model="currentCategory"
              clearable
              placeholder="请选择类型"
            >
              <el-option
                v-for="(category, index) in form.articleCategorys"
                :key="index"
                :label="category.categoryName"
                :value="category.id"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="简介">
            <el-input
              class="simple-introduction"
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 8 }"
              placeholder="文章简介"
              v-model="form.simpleIntro"
              maxlength="200"
            >
            </el-input>
          </el-form-item>
          <el-form-item label="">
            <self-tinymce-editor
              style="margin-top: 10px"
              ref="editor"
              v-model="form.msg"
              :disabled="disabled"
              @onClick="onClick"
            ></self-tinymce-editor>
          </el-form-item>


          <el-form-item>
            <template v-if="actionType === 'update'">
              <el-button type="primary" @click="submit(2)">提交修改</el-button>
              <el-button @click="clear">清空</el-button>
            </template>
            <template v-else-if="actionType === 'add'">
              <el-button type="primary" @click="submit(1)">提交</el-button>
            </template>
            <template v-else> </template>
          </el-form-item>

        </el-form>
      </template>
      <template v-slot:ad-right>
        <h1> </h1>
      </template>
    </Layout>
  </div>
</template>

<script>
import SelfTinymceEditor from "../../components/tinymce/SelfTinymceEditor";
import Layout from "../../components/Layout";
export default {
  name: "write",
  data() {
    return {
      currentCategory: 1,
      disabled: false,
      currKey: 2,
      form: {
        id: "",
        articleTitle: "",
        subTitle: "",
        simpleIntro: "",
        msg: "",
        articleCategorys: [],
        content: ""
      },
      actionType: !!this.getQueryString("action") ? this.getQueryString("action") : 'add'
    };
  },
  created() {
    this.listArticleCategorys();
    this.getArticleInfo();
  },
  methods: {
    getArticleInfo() {
      if (!this.getQueryString("id") || this.actionType !== "update") {
        return false;
      }
      const url =
        this.silkRouter +
        "/article/getArticleInfo?articleId=" +
        this.getQueryString("id");
      this.httpGet(url)
        .then(response => {
          let result = response.data.value;
            this.form.id = result.id;
          this.form.articleTitle = result.articleTitle;
          this.form.subTitle = result.subTitle;
          this.form.simpleIntro = result.simpleIntro;
          this.form.msg = result.content;
          this.currentCategory = result.typeId;
        })
        .catch(response => {
          console.log(response);
        });
    },
    listArticleCategorys() {
      this.httpGet(this.silkRouter + "/category/listAllCategory")
        .then(response => {
          this.form.articleCategorys = response.data.value;
        })
        .catch(response => {
          console.log(response);
        });
    },
    // 鼠标单击的事件
    onClick(e, editor) {
      console.log("Element clicked");
    },
    // 清空内容
    clear() {
      this.$refs.editor.clear();
    },
    submit(type) {
      let url = "";
      let articleId = "";
      if (type === 1) {
        url = this.silkRouter + "/article/submit";
      } else {
        articleId = this.form.id;
        url = this.silkRouter + "/article/update";
      }
      const data = {
        id: articleId,
        content: this.$refs.editor.getContent(),
        articleTitle: this.form.articleTitle,
        subTitle: this.form.subTitle,
        simpleIntro: this.form.simpleIntro,
        typeId: this.currentCategory
      };
      this.httpPost(url, data)
        .then(response => {
          this.successNotice(response.data.value);
        })
        .catch(error => {
            this.errorNotice(error.data.value);
        });
    }
  },
  components: {
    SelfTinymceEditor,
    Layout
  }
};
</script>

<style scoped>
.simple-introduction {
  max-height: 7rem;
}
</style>
