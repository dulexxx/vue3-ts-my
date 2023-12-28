import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {store, key} from './store/index'
import router from './router/index'
import '@/style/index.less'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App);

app.use(router).use(store,key).use(ElementPlus, { size: 'small'}).mount('#app')
