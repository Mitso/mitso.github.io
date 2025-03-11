import { createApp } from 'vue';
import './assets/styles/css/style.css';

import router from '@/routes/index.js';

import App from '@/App.vue';

const rootComponentInstance = createApp(App);
rootComponentInstance.use(router);
rootComponentInstance.mount('#app');