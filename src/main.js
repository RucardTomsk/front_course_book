import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router"
import 'mdb-vue-ui-kit/css/mdb.min.css';

createApp(App)
    .use(router)
    .mount('#app')
