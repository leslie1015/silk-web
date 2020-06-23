<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div id="articleDetail">
        <Layout>
            <template v-slot:header>

            </template>
            <template v-slot:ad-left>
                <h1></h1>
            </template>
            <template v-slot:main>
                <el-form :label-position="labelPosition" label-width="120px" ref="form" :model="categoryInfo">
                    <el-form-item label="名称">
                        <el-input v-model="categoryInfo.categoryName"></el-input>
                    </el-form-item>
                    <el-form-item label="顺序">
                        <el-input v-model="categoryInfo.orderNum"></el-input>
                    </el-form-item>
                    <el-form-item label="是否启用">
                        <el-radio-group v-model="categoryInfo.activeFlag">
                            <el-radio :label="1">启用</el-radio>
                            <el-radio :label="0">禁用</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item>
                        <template v-if="actionType ==='update'">
                            <el-button type="primary" @click="update">修改</el-button>
                        </template>
                        <template v-else-if="actionType ==='add'">
                            <el-button type="primary" @click="add">保存</el-button>
                        </template>
                        <template v-else>
                        </template>
                    </el-form-item>
                </el-form>
            </template>
            <template v-slot:ad-right>
                <h1></h1>
            </template>
        </Layout>
    </div>
</template>

<script>
    import Layout from '../../../components/Layout'
    export default {
        name: "categoryAction",
        data () {
            return {
                categoryInfo: {
                    categoryName:'',
                    orderNum: 0,
                    activeFlag: 1
                },
                labelPosition: 'left',
                actionType: this.getQueryString("action")
            }
        },
        created () {
            this.getCategory()
        },
        methods: {
            getCategory () {
                if (!this.getQueryString('id')) {
                    return false;
                }

                const url = this.silkRouter + '/category/getById?id=' + this.getQueryString('id')
                this.httpGet(url).then((response) => {
                    this.categoryInfo = response.data.value
                }).catch((response) => {
                    this.errorNotice(response);
                })
            },
            add() {
                const url = this.silkRouter + '/category/add';
                this.httpPost(url, this.categoryInfo)
                    .then(response => {
                        this.successNotice(response.data.value);
                    })
                    .catch(error => {
                        this.errorNotice(error);
                    });
            },
            update() {
                const url = this.silkRouter + '/category/update';
                this.httpPost(url, this.categoryInfo)
                    .then(response => {
                        this.successNotice(response.data.value);
                    })
                    .catch(error => {
                        this.errorNotice(error);
                    });
            }
        },
        components: {
            Layout
        }
    }
</script>

<style lang="stylus">


    @media (min-width: 567px) {

    }
</style>
