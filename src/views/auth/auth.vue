<template>
    <div id="auth">
        <div class="auth-header">
            <router-link to="/login"><h2>登录</h2></router-link>
            <router-link to="/registered"><h2>注册</h2></router-link>
        </div>
        <div>
            <router-view/>
        </div>
    </div>

</template>

<script>
    export default {
        name: "auth",
        data() {
            return {
                activeIndex: '1',
                searchCond: ''
            };
        },
        methods: {}
    };
</script>

<style lang="stylus">
    #auth {
        width: 100%;
        display: flex;
        flex-direction: column;
        height: calc(98vh);
        /*background: url(../../img/login_back.jpg) no-repeat center;*/
        margin:0px;
        background-size:100% 100%; background-attachment:fixed;
        background-color: whitesmoke;

    }

    #auth .auth-header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-end ;
        height:250px;
    }
    #auth .auth-header a {
        margin-left: 50px;
    }

    .el-input {
        width: 15rem;
    }


</style>
