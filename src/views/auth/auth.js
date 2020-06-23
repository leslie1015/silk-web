import Vue from "vue";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import App from "./auth.vue";
import router from "./router/router";
import store from "./store/store";

import base from "../../js/base.js";
Vue.use(base);

Vue.use(ElementUI);

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
  router,
  store,
  render: h => h(App)
}).$mount("#auth");
