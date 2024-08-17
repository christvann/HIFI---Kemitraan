<template>
  <div class="flex flex-col items-start p-4 w-[248px] h-screen bg-white border-r border-neutral-stroke">
    <!-- Logo Section -->
    <div class="flex justify-between items-center w-[216px] h-[27px] mb-6 mt-4">
      <img src="@/assets/image/pln.png" alt="PLN Icon Plus" class="h-full" />
      <div class="text-[19.29px] font-sans leading-[27px] text-[#2671D9]">iMitra</div>
    </div>

    <!-- Line -->
    <div class="w-[216px] h-0 border items-center border-[#E5E7E9] mt-[10px] mb-6"></div>

    <!-- Menu Items -->
    <div class="flex flex-col w-full gap-[8px]">
      
      <!-- Dashboard -->
      <button 
        :class="['flex text-[14px] ml-[5px] font-sans items-center justify p-2 rounded-lg transition-colors', 
                selectedMenu === 'Dashboard' ? 'bg-blue-500 text-white' : 'bg-white-500 text-black hover:bg-blue-300']" 
        @click="selectedMenu = 'Dashboard'">
        <img 
          :class="[selectedMenu === 'Dashboard' ? 'filter-white' : '']" 
          src="@/assets/image/IconDashboard.png" class="mr-[1px] pl-[1px] pr-[12px]" />Dashboard
      </button>

      <!-- Masuk -->
      <button 
        :class="['flex text-[14px] font-sans items-center justify p-2 rounded-lg transition-colors', 
                selectedMenu === 'Masuk' ? 'bg-blue-500 text-white' : 'bg-white-500 text-black hover:bg-blue-300']" 
        @click="selectedMenu = 'Masuk'">
        <img 
          :class="[selectedMenu === 'Masuk' ? 'filter-white' : '']" 
          src="@/assets/image/IconMasuk.png" class="ml-1 pl-1 pr-[15px]" />Masuk
      </button>

      <!-- Approval -->
      <button 
        :class="['flex text-[14px] font-sans items-center justify p-2 rounded-lg transition-colors', 
                selectedMenu === 'Approval' ? 'bg-blue-500 text-white' : 'bg-white-500 text-black hover:bg-blue-300']" 
        @click="selectedMenu = 'Approval'">
        <img 
          :class="[selectedMenu === 'Approval' ? 'filter-white' : '']" 
          src="@/assets/image/IconApproval.png" class="ml-1 pl-[2px] pr-[13px]" />Approval
      </button>

      <!-- Proses -->
      <button 
        :class="['flex text-[14px] font-sans items-center justify p-2 rounded-lg transition-colors', 
                selectedMenu === 'Proses' ? 'bg-blue-500 text-white' : 'bg-white-500 text-black hover:bg-blue-300']" 
        @click="selectedMenu = 'Proses'">
        <img 
          :class="[selectedMenu === 'Proses' ? 'filter-white' : '']" 
          src="@/assets/image/IconProses.png" class="ml-1 pr-4 pl-[2px]"/>Proses
      </button>

      <!-- Selesai -->
      <button 
        :class="['flex text-[14px] font-sans items-center justify p-2 rounded-lg transition-colors', 
                selectedMenu === 'Selesai' ? 'bg-blue-500 text-white' : 'bg-white-500 text-black hover:bg-blue-300']" 
        @click="selectedMenu = 'Selesai'">
        <img 
          :class="[selectedMenu === 'Selesai' ? 'filter-white' : '']" 
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
};
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