import Vue from "vue";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import articleAction from "./articleAction.vue";

Vue.use(ElementUI);

import base from "../../../js/base.js";
Vue.use(base);

import axios from "axios";
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

import moment from "moment";

Vue.filter("dateformat", function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern);
});

new Vue({
    render: h => h(articleAction)
}).$mount("#articleAction");
