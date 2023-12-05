import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia';
import App from './App.vue'
import 'mdb-vue-ui-kit/css/mdb.min.css';

import router from './routes'

const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')

