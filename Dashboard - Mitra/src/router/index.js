import { createRouter, createWebHistory } from 'vue-router';
import DashboardView from '../pages/dashboard-view.vue';
import MasukManager from '../pages/masuk-manager.vue';
import DetailPengajuanManager from '../pages/detail-pengajuan-manager.vue';
import ApprovalMitra from '../pages/approval-view.vue';
import ApprovalStopclock from '../pages/approval-stopclock.vue';
import DetailPengajuanApprovalStopclock from '../pages/detail-pengajuan-approval-stopclock.vue';
import DetailPengajuanApproval from '../pages/detail-pengajuan-approval.vue';
import ProsesiMitra from '../pages/proses-view.vue';
import SelesaiMitra from '../pages/selesai-view.vue';
import SelesaiDitolak from '../pages/selesai-ditolak.vue';

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
  {
    name: 'ApprovalMitra',
    path: '/approval',
    component: ApprovalMitra
  },
  {
    name: 'ApprovalStopclock',
    path: '/approval/approvalstopclock',
    component: ApprovalStopclock
  },
  {
    name: 'DetailPengajuanApproval',
    path: '/approval/detailpengajuanapproval',
    component: DetailPengajuanApproval
  },
  {
    name: 'DetailPengajuanApprovalStopclock',
    path: '/approval/approvalstopclock/detailpengajuanapprovalstopclock',
    component: DetailPengajuanApprovalStopclock
  },
  {
    name: 'ProsesiMitra',
    path: '/proses',
    component: ProsesiMitra
  },
  {
    name: 'SelesaiMitra',
    path: '/selesai',
    component: SelesaiMitra
  },
  {
    name: 'Ditolak',
    path: '/selesai/ditolak',
    component: SelesaiDitolak
  }

];

function Router() {
  return createRouter({
    history: createWebHistory(),
    routes,
  });
}
const router = Router();
export default router;
