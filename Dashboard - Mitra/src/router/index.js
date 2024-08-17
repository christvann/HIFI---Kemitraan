import { createRouter, createWebHistory } from "vue-router";
import DashboardView from '../pages/dashboard-view.vue';

const routes = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        component: DashboardView
    }
];
const router = Router();
export default router;
function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}