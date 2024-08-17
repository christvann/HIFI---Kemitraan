<template>
  <div class="flex">
    <SidebarKemitraan/>
    <div class="flex-grow"> 
      <MainBar/> 
      <DashBoardMitra/>
    </div>
  
  </div>
</template>

<script>

import MainBar from '@/components/MainBar.vue';
import SidebarKemitraan from '@/components/SidebarKemitraan.vue';
import DashBoardMitra from '@/components/DashBoardMitra.vue';


export default {
  components: {
    SidebarKemitraan,
    MainBar,
    DashBoardMitra,
  }
};
</script>
