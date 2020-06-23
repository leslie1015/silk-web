import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import person from "./person.vue";
import base from "../../js/base.js";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(base);
Vue.use(ElementUI);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
    render: h => h(person)
}).$mount("#person");
