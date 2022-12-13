import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import router from "@/router";
import { dollarFilter } from "@/filter";
import { percentFilter } from "@/filter";
import Chart from "chart.js";
import Chartkick from "vue-chartkick";
import { VueSpinners } from "@saeris/vue-spinners";

Vue.use(VueSpinners);
Vue.use(Chartkick.use(Chart));
Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);
Vue.config.productionTip = false;

new Vue({
  //router:router cuando la propiedad y su nombre son el mismo se puede escribir una sola vez
  router,
  render: (h) => h(App),
}).$mount("#app");
