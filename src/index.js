import * as Sentry from '@sentry/browser'
import { Vue as VueIntegration } from '@sentry/integrations'
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'


Vue.config.productionTip = false

const appMainInstance = new Vue(
    {
        router,
        store,
        render: h => h(App)
    }
)
appMainInstance.$mount('#isixeko');

Sentry.init({
    dsn: "https://40d9a9f0b70f4f4d846098fa6044d47e@o413908.ingest.sentry.io/5773954",
    integrations: [new VueIntegration({ Vue, attachProps: true })],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});

const dataLayer = [];
const pageTracker = ({action}) => {
    return {
        event: action
    }
}
dataLayer.push(pageTracker('route'))

console.log(pageTracker('route'))

