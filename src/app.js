import Vue from "vue";
import router from "./client/router";
import store from "./client/store";
import App from "./App.vue";


Vue.prototype.$appDescription = "Isixeko sam - masakhane, sizibuze ukuba njengomeli welizwe lam ngingenza ntoni na ukuphihlisa ekhaya.";

const app = new Vue({
    store,
    router,
    render (h) {
        return h(App);
    }
});


app.$mount("#app");




