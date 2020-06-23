<template>
    <div id="person-info">
        <ul>
            <li>用户名：{{userInfo.username}}</li>
            <li>昵称：{{userInfo.nickname}}</li>
            <li>角色：{{userInfo.roleType}}</li>
            <li>电话：{{userInfo.phone}}</li>
            <li>邮箱：{{userInfo.email}}</li>
            <li>注册时间：{{userInfo.createTime}}</li>
            <li>最后登录时间：{{userInfo.lastTime}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userInfo: {}
            }
        },
        created() {
            this.getUserInfo();
        },
        methods: {
            getUserInfo() {
                this.httpGet(this.silkRouter + '/user/getByUsername?username=' + this.getLoginUser()).then((response) => {
                    this.userInfo = response.data.value;
                }).catch((response) => {
                    console.log(response);
                })
            }
        },
        components: {

        }

    };
</script>

<style lang="stylus">


</style>
