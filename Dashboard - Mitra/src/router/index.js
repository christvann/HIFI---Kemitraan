import { createRouter, createWebHistory } from 'vue-router';
import DashboardView from '../pages/dashboard-view.vue';
import MasukManager from '../pages/masuk-manager.vue';
import DetailPengajuanManager from '../pages/detail-pengajuan-manager.vue';

const routes = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: DashboardView
  },
  {
    name: 'MasukManager',
    path: '/masukmanager',
    component: MasukManager
  },
  {
    name: 'DetailPengajuanManager',
    path: '/masukmanager/detailpengajuanmanager',
    component: DetailPengajuanManager
  },
];

function Router() {
  return createRouter({
    history: createWebHistory(),
    routes,
  });
}
const router = Router();
export default router;
