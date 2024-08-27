<template>
  <div class="flex flex-col items-start p-4 w-[248px] h-[1416px] bg-white border-r border-neutral-stroke">
    <!-- Logo Section -->
    <div class="flex justify-between items-center w-[216px] h-[27px] mt-4">
      <img src="../assets/image/Diamond.png" alt="Diamond Icon" class="w-[60px] h-[10.5px]"/>
    </div>

    <!-- Line -->
    <div class="w-[216px] h-0 border items-center border-[#E5E7E9] mt-[23px] mb-6"></div>

    <!-- Menu Items -->
    <div class="flex flex-col w-full gap-[8px]">
      
      <!-- Dashboard -->
      <button 
        :class="['flex text-[14px] font-sans font-semibold items-center justify p-2 rounded-lg transition-colors', 
                isActive('Dashboard') ? 'bg-[#2671D9] text-[#FFFFFF]' : 'text-[#333333] hover:bg-[#DBEAFE]']" 
        @click="navigateTo('Dashboard')">
        <img 
          :class="[isActive('Dashboard') ? 'filter-white' : '']" 
          src="@/assets/image/IconDashboard.png" class="ml-[5px] mr-[1px] pl-[1px] pr-[12px]" />Dashboard
      </button>

      <!-- Masuk -->
      <button 
        :class="['flex text-[14px] font-sans font-semibold items-center justify p-2 rounded-lg transition-colors', 
                isActive('MasukManager') ? 'bg-[#2671D9] text-[#FFFFFF]' : 'text-[#333333] hover:bg-[#DBEAFE]']" 
        @click="navigateTo('MasukManager')">
        <img 
          :class="[isActive('MasukManager') ? 'filter-white' : '']" 
          src="@/assets/image/IconMasuk.png" class="ml-1 pl-1 pr-[15px]" />Masuk
      </button>

      <!-- Approval -->
      <button 
        :class="['flex text-[14px] font-sans font-semibold items-center justify p-2 rounded-lg transition-colors', 
                isActive('Approval') ? 'bg-[#2671D9] text-[#FFFFFF]' : 'text-[#333333] hover:bg-[#DBEAFE]']" 
        @click="navigateTo('Approval')">
        <img 
          :class="[isActive('Approval') ? 'filter-white' : '']" 
          src="@/assets/image/IconApproval.png" class="ml-1 pl-[2px] pr-[13px]" />Approval
      </button>

      <!-- Proses -->
      <button 
        :class="['flex text-[14px] font-sans font-semibold items-center justify p-2 rounded-lg transition-colors', 
                isActive('Proses') ? 'bg-[#2671D9] text-[#FFFFFF]' : 'text-[#333333] hover:bg-[#DBEAFE]']" 
        @click="navigateTo('Proses')">
        <img 
          :class="[isActive('Proses') ? 'filter-white' : '']" 
          src="@/assets/image/IconProses.png" class="ml-1 pr-4 pl-[2px]"/>Proses
      </button>

      <!-- Selesai -->
      <button 
        :class="['flex text-[14px] font-sans font-semibold items-center justify p-2 rounded-lg transition-colors', 
                isActive('Selesai') ? 'bg-[#2671D9] text-[#FFFFFF]' : 'text-[#333333] hover:bg-[#DBEAFE]']" 
        @click="navigateTo('Selesai')">
        <img 
          :class="[isActive('Selesai') ? 'filter-white' : '']" 
          src="@/assets/image/IconSelesai.png" class="ml-1 pl-[1px] pr-[15px]" />Selesai
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarKemitraan, DashboardButton',
  data() {
    return {
      selectedMenu: 'Dashboard', 
    };
  },
  methods: {
    navigateTo(menu) {
      this.selectedMenu = menu;
      switch (menu) {
        case 'Dashboard':
          this.$router.push('/dashboard');
          break;
        case 'MasukManager':
          this.$router.push('/masukmanager');
          break;
        case 'Approval':
          this.$router.push('/approval'); 
          break;
        case 'Proses':
          this.$router.push('/proses'); 
          break;
        case 'Selesai':
          this.$router.push('/selesai'); 
          break;
        default:
          break;
      }
    },
    isActive(menu) {
      const routePath = this.$route.path;

      switch (menu) {
        case 'Dashboard':
          return routePath === '/dashboard';
        case 'MasukManager':
          return routePath.startsWith('/masukmanager');
        case 'Approval':
          return routePath.startsWith('/approval');
        case 'Proses':
          return routePath.startsWith('/proses');
        case 'Selesai':
          return routePath.startsWith('/selesai');
        default:
          return false;
      }
    }
  }
}
</script>

<style scoped>
button {
  cursor: pointer;
  border: none;
  outline: none;
  transition: background-color 0.3s;
}
.filter-white {
  filter: brightness(0) invert(1);
}
</style>
