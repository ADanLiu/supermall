import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import FastClick from "fastclick";

import toast from "components/common/toast";

//安装自己创建的插件
Vue.use(toast);

Vue.config.productionTip = false;

//添加事件总线
Vue.prototype.$bus = new Vue();

//解决移动端300ms的延迟
FastClick.attach(document.body);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
