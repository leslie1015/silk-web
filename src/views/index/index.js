import Vue from "vue";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import index from "./index.vue";


Vue.use(ElementUI);

import base from "../../js/base.js";
Vue.use(base);

import axios from "axios";
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

import moment from "moment";

import router from "../../router";
import store from "../../store";

Vue.filter("dateformat", function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern);
});

new Vue({
  router,
  store,
  render: h => h(index)
}).$mount("#index");
