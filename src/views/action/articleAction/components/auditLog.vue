<template>
    <div id="auditLog">
        <el-button type="info" style="margin-left: 1rem" @click="dialogTableVisible = true">查看审核记录</el-button>
        <el-dialog title="审核记录"
                   :visible.sync="dialogTableVisible"
                   :modal="false"
                   :lock-scroll="false"
                   :custom-class="dialogClass"
                  >
            <el-table :data="auditLogs">
                <el-table-column property="auditName" label="审核人" width="150"></el-table-column>
                <el-table-column property="auditTimeFormat" label="审核时间" width="200"></el-table-column>
                <el-table-column property="statusDesc" label="审核状态"></el-table-column>
                <el-table-column property="audiAdvice" label="审核意见"></el-table-column>
            </el-table>
        </el-dialog>
    </div>
</template>

<script>

    export default {
        name: "auditLog",
        props: {
            articleId: String
        },
        data() {
            return {
                auditLogs:[],
                dialogTableVisible: false,
                dialogFormVisible: false,
                dialogClass: 'selfDialog'
            };
        },
        created() {
            this.listAuditLogs();
        },
        methods: {
            listAuditLogs() {
                if (this.articleId === '' || this.articleId === null || this.articleId === undefined) {
                    return false;
                }
                const url = this.silkRouter + "/article/listAuditLogs?articleId=" + this.articleId;
                this.httpGet(url)
                    .then(response => {
                        this.auditLogs = response.data.value;
                    })
                    .catch(response => {
                        this.errorNotice(response);
                    });
            },

        }
    };
</script>

<style lang="stylus">

    .selfDialog {
        background-color : #deebf9
    }

    .el-dialog__header {
        padding: 5px 20px 5px !important;
    }
    .el-dialog__body {
        padding: 0px 20px 10px !important;
    }

</style>
