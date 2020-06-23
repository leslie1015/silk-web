import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "hash",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/login",
            name: "login",
            component: () =>
                import("../pages/Login.vue")
        },
        {
            path: "/registered",
            name: "registered",
            component: () =>
                import("../pages/Registered.vue")
        }
    ]
});
