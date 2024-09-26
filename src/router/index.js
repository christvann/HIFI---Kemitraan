import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/pages/login-page.vue';
import HomePage from '@/pages/home-page.vue';
import DashboardView from '@/pages/dashboard/dashboard-staff.vue';
import DashboardStaff from '@/pages/dashboard/dashboard-staff.vue';
import MasukManager from '@/pages/masuk/masuk-manager.vue';
import DetailPengajuanManager from '@/pages/detail-pengajuan/detail-pengajuan-manager.vue';
import MasukStaff from '@/pages/masuk/masuk-staff.vue';
import DetailPengajuanStaff from '@/pages/detail-pengajuan/detail-pengajuan-staff.vue';
import ApprovalMitra from '@/pages/approval/approval-view.vue';
import ApprovalStopclock from '@/pages/approval/approval-stopclock.vue';
import DetailPengajuanApproval from '@/pages/approval/detail-pengajuan-approval.vue';
import DetailPengajuanApprovalStopclock from '@/pages/approval/detail-pengajuan-approval-stopclock.vue';
import ProsesMitra from '@/pages/proses/proses-view.vue';
import ProsesStaff from '@/pages/proses/proses-staff.vue';
import SelesaiMitra from '@/pages/selesai/selesai-view.vue';
import SelesaiDitolak from '@/pages/selesai/selesai-ditolak.vue';
import DetailPengajuanPKS from '@/pages/proses/proses-detail-pengajuan-pks.vue';
import DetailPengajuanPKSstaff from '@/pages/proses/proses-detail-pengajuan-pks-staff.vue';  
import DetailPengajuanMoU from '@/pages/proses/proses-detail-pengajuan-mou.vue';
import DetailPengajuanMoUStaff from '@/pages/proses/proses-detail-pengajuan-mou-staff.vue';
import SelesaiStaff from '@/pages/selesai/selesai-staff.vue';
import SelesaiDitolakStaff from '@/pages/selesai/selesai-ditolak-staff.vue';

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
    name: 'DashboardStaff',
    path: '/dashboardstaff',
    component: DashboardStaff
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
    name: 'ProsesStaff',
    path: '/prosesstaff',
    component: ProsesStaff
  },
  {
    name: 'SelesaiMitra',
    path: '/selesai',
    component: SelesaiMitra
  },
  {
    name: 'SelesaiStaff',
    path: '/selesaistaff',
    component: SelesaiStaff
  },
  {
    name: 'Ditolak',
    path: '/selesai/ditolak',
    component: SelesaiDitolak
  },
  {
    name: 'DitolakStaff',
    path: '/selesaistaff/ditolakstaff',
    component: SelesaiDitolakStaff
  },
  {
    name: 'DetailPengajuanPKS',
    path: '/proses/detailpengajuanpks',
    component: DetailPengajuanPKS
  },
  {
    name: 'DetailPengajuanPKSstaff',
    path: '/prosesstaff/detailpengajuanpksstaff',
    component: DetailPengajuanPKSstaff
  },
  {
    name: 'DetailPengajuanMoU',
    path: '/proses/detailpengajuanmou',
    component: DetailPengajuanMoU
  },
  {
    name: 'DetailPengajuanMoUStaff',
    path: '/prosesstaff/detailpengajuanmoustaff',
    component: DetailPengajuanMoUStaff
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
  document.title = 'DIAMOND';
  next();
});

export default router;
