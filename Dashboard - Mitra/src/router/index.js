import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/pages/login-page.vue';
import HomePage from '@/pages/home-page.vue';
import DashboardView from '../pages/dashboard-view.vue';
import MasukManager from '../pages/masuk/masuk-manager.vue';
import DetailPengajuanManager from '../pages/detail-pengajuan/detail-pengajuan-manager.vue';
import MasukStaff from '@/pages/masuk/masuk-staff.vue';
import DetailPengajuanStaff from '@/pages/detail-pengajuan/detail-pengajuan-staff.vue';
import ApprovalMitra from '@/pages/approval/approval-view.vue';
import ApprovalStopclock from '@/pages/approval/approval-stopclock.vue';
import DetailPengajuanApproval from '@/pages/approval/detail-pengajuan-approval.vue';
import DetailPengajuanApprovalStopclock from '@/pages/approval/detail-pengajuan-approval-stopclock.vue';
import ProsesMitra from '@/pages/proses/proses-view.vue';
import SelesaiMitra from '@/pages/selesai/selesai-view.vue';
import SelesaiDitolak from '@/pages/selesai/selesai-ditolak.vue';
import DetailPengajuanPKS from '@/pages/proses/proses-detail-pengajuan-pks.vue';

const routes = [
  {
    name: 'LoginPage',
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/',
    redirect: '/login',
  },
  {
    name: 'Homepage',
    path: '/homepage',
    component: HomePage,
  },
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
    name: 'MasukStaff',
    path: '/masukstaff',
    component: MasukStaff
  },
  {
    name: 'DetailPengajuanStaff',
    path: '/masukstaff/detailpengajuanstaff',
    component: DetailPengajuanStaff
  },
  {
    name: 'ApprovalMitra',
    path: '/approval',
    component: ApprovalMitra
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
    name: 'ProsesMitra',
    path: '/proses',
    component: ProsesMitra
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
  },
  {
    name: 'DetailPengajuanPKS',
    path: '/proses/detailpengajuanpks',
    component: DetailPengajuanPKS
  },
];

function Router() {
  return createRouter({
    history: createWebHistory(),
    routes,
  });
}
const router = Router();

router.beforeEach((to, from, next) => {
  document.title = 'Diamond';
  next();
});

export default router;
