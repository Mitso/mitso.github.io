import Vue from "vue";
import { createGtm } from "@gtm-support/vue-gtm";
import router from "./app/router";
import store from "./app/store";
import App from "./App.vue";


Vue.prototype.$appDescription = "Isixeko sam - masakhane, sizibuze ukuba njengomeli welizwe lam ngingenza ntoni na ukuphihlisa ekhaya.";

import "font-awesome/css/font-awesome.min.css";


const app = new Vue({
    store,
    router,
    render (h) {
        return h(App);
    }
});

Vue.use(
    createGtm({
        id: "GTM-N3DL544",
        defer: false,
        enabled: true,
        debug: true,
        vueRouter: router,
        vueStore: store

    })
);

app.$mount("#app");




