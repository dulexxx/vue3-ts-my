import { RouteRecordRaw } from "vue-router";
import {createRouter} from 'vue-router'
import {createWebHashHistory} from 'vue-router'
const routes: RouteRecordRaw[]  = [
    {
        path: '/',
        component:() => import('@/views/index/index.vue'),
        name: 'index'
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router