import Vue from "vue";
import { createGtm } from "vue-gtm";
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

app.use(
    createGtm({
        id: "GTM-N3DL544",
        queryParams: {
            // Add url query string when load gtm.js with GTM ID (optional)
            gtm_auth: "AB7cDEf3GHIjkl-MnOP8qr",
            gtm_preview: "env-4",
            gtm_cookies_win: "x",
        },
    })
);

app.$mount("#app");




