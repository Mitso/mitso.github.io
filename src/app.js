import Vue from "vue";
import VueGtm from "@gtm-support/vue2-gtm";
import router from "./app/router";
import store from "./app/store";
import App from "./App.vue";


Vue.prototype.$appDescription = "Isixeko sam - masakhane, sizibuze ukuba njengomeli welizwe lam ngingenza ntoni na ukuphihlisa ekhaya.";

import "font-awesome/css/font-awesome.min.css";

Vue.use(VueGtm, {
    id: "GTM-TF5ZL2D",
    defer: false,
    enabled: true,
    debug: true,
    vueRouter: router,
    vueStore: store

});


const app = new Vue({
    store,
    router,
    render (h) {
        return h(App);
    }
});


app.$mount("#app");




