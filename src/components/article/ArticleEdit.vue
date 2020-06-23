<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">

    <Layout>
        <template v-slot:header>

        </template>
        <template v-slot:ad-left>
            <h1></h1>
        </template>
        <template v-slot:main>
            <div class="btn-wrap">
                <div class="btn-group" role="group" aria-label="...">
                    <el-button type="primary" @click="clear" plain>清空内容</el-button>
                    <el-button type="primary" @click="submit" plain>发布文章</el-button>
                </div>
            </div>
            <div>
                <el-row  class="input-wrap">
                    <el-col class="input-title" :span="4">
                        标题
                        <label style="color: red;">*</label>
                    </el-col>
                    <el-col  :span="20">
                        <el-input v-model="articleTitle" placeholder="文章标题"></el-input>
                    </el-col>
                </el-row>
                <el-row  class="input-wrap">
                    <el-col class="input-title" :span="4">
                        副标题
                    </el-col>
                    <el-col  :span="20">
                        <el-input v-model="subTitle" placeholder="副标题"></el-input>
                    </el-col>
                </el-row>
                <el-row  class="input-wrap">
                    <el-col class="input-title" :span="4">
                        分类
                        <label style="color: red;">*</label>
                    </el-col>
                    <el-col  :span="20">
                        <el-select v-model="currentCategory" clearable  placeholder="请选择">
                            <el-option
                                    v-for="(category,index) in articleCategorys"
                                    :key="index"
                                    :label="category.categoryName"
                                    :value="category.id">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-row>
                <el-row  class="input-wrap">
                    <el-col class="input-title" :span="4">
                        简介
                    </el-col>
                    <el-col  :span="20">
                        <el-input class="simple-introduction"
                                  type="textarea"
                                  :autosize="{ minRows: 2, maxRows: 8}"
                                  placeholder="文章简介"
                                  v-model="simpleIntro"
                                  maxlength="200">
                        </el-input>
                    </el-col>
                </el-row>
            </div>
            <self-tinymce-editor style="margin-top: 10px" ref="editor"
                          v-model="msg"
                          :disabled="disabled"
                          @onClick="onClick"
            ></self-tinymce-editor>
        </template>
        <template v-slot:ad-right>
            <h1> </h1>
        </template>
    </Layout>

</template>

<script>
    import SelfTinymceEditor from "../tinymce/SelfTinymceEditor";
    import Layout from '../Layout'
    export default {
        name: "ArticleEdit",
        data () {
            return {
                articleTitle:'',
                subTitle: '',
                simpleIntro: '',
                msg: '',
                disabled: false,
                articleCategorys:[],
                currentCategory: ''
            }
        },
        created() {
            this.listArticleCategorys();
        },
        methods: {
            listArticleCategorys() {
                this.httpGet(this.silkRouter + '/category/listAllCategory').then((response) => {
                    this.articleCategorys = response.data.value;
                }).catch((response) => {
                    console.log(response);
                })
            },
            // 鼠标单击的事件
            onClick (e, editor) {
                console.log('Element clicked')

            },
            // 清空内容
            clear () {
                this.$refs.editor.clear()
            },
            submit() {
                const url = this.silkRouter + '/article/submit';
                const data= {
                    content: this.$refs.editor.getContent(),
                    articleTitle: this.articleTitle,
                    subTitle: this.subTitle,
                    simpleIntro: this.simpleIntro,
                    typeId: this.currentCategory
                }
                this.httpPost(url, data)
                    .then((response) => {
                        alert("添加成功");
                        window.location.href='/';

                }).catch((error) => {
                    alert("添加失败");
                });
            }
        },
        components: {
            SelfTinymceEditor, Layout
        }
    }
</script>

<style scoped>
    .simple-introduction {
        max-height: 7rem;
    }

    .btn-group {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }

    .btn-wrap {
        padding-bottom: 10px;
        border-bottom: 1px solid #e6e6e6;
    }

    .input-wrap {
        margin-top: 1rem;
    }

    .el-input {
        width: 100%;
    }

    .input-title {
        display: flex;
        justify-content: flex-start;
        padding-top:8px;
    }

</style>