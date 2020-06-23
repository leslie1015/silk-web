import Vue from "vue";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import write from "./write.vue";

Vue.use(ElementUI);

import base from "../../js/base.js";
Vue.use(base);

import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
import moment from "moment";
Vue.filter("dateformat", function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern);
});

new Vue({

    components: {
        write
    },
    render: h => h(write)
}).$mount("#write");

