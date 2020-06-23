<template>
    <div id="person-articles">
        <el-tabs v-model="activeTab" :tab-position="tabPosition" style="height: 200px;">
            <el-tab-pane label="已发布" name="pass">
                <keep-alive>
                    <my-articles v-if="activeTab=='pass'" :article-status="articleStatusArr.pass"></my-articles>
                </keep-alive>
            </el-tab-pane>
            <el-tab-pane label="待审核" name="waitAudit">
                <keep-alive>
                    <my-articles v-if="activeTab=='waitAudit'" :article-status="articleStatusArr.waitAudit"></my-articles>
                </keep-alive>
            </el-tab-pane>
            <el-tab-pane label="返回修改" name="returnUpdate">
                <keep-alive>
                    <my-articles v-if="activeTab=='returnUpdate'" :article-status="articleStatusArr.returnUpdate"></my-articles>
                </keep-alive>
            </el-tab-pane>
            <el-tab-pane label="已拒绝" name="reject">
                <keep-alive>
                    <my-articles v-if="activeTab=='reject'" :article-status="articleStatusArr.reject"></my-articles>
                </keep-alive>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import MyArticles from './myArticles.vue'
    export default {
        data() {
            return {
                activeTab: 'pass',
                tabPosition: 'left',
                articleStatusArr: {
                    waitAudit: 2,
                    pass: 3,
                    returnUpdate: 4,
                    reject: 5
                }
            }
        },
        components: {
            MyArticles
        }

    };
</script>

<style lang="stylus">


</style>
