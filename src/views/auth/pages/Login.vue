<template>
    <div id="login">
        <div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="账号" prop="username">
                    <el-input v-model="ruleForm.username"></el-input>
                </el-form-item>

                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="ruleForm.password"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button style="width: 240px" type="primary" @click="login('ruleForm')">登录</el-button>
<!--                    <el-button @click="resetForm('ruleForm')">重置</el-button>-->
                </el-form-item>
            </el-form>
        </div>

    </div>

</template>
<script>
    export default {

        data() {
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        {min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
            login(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.axios({
                            method: 'post',
                            url: this.iusRouter + '/auth/login',
                            data: this.ruleForm
                        })
                            .then((response) => {
                                if (response.data.code === 0) {
                                    localStorage.setItem(this.LOCAL_AUTH_KEY, JSON.stringify(response.data.value));
                                    if (response.data.value.adminFlag === 0) {
                                        location.href= "/index.html";
                                    } else {
                                        location.href= "/listTool.html";
                                    }

                                } else {
                                    alert(response.data.message);
                                }
                            })
                            .catch((error) => {
                                alert("登录失败。" + error);
                            })
                    } else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>


<style>

    #login {
        display: flex;
        width: 100%;
        justify-content: center;
        padding-top: 20px;
        /*background-color: #d8d3d3;*/
    }

    #login .el-form-item label {
        font-weight: bold;
    }

</style>