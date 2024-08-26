<template>
    <div class="">
      <div class="background">
        <div class="flex">
          <SidebarKemitraan/>
          <div class="flex-grow"> 
            <MainBar/> 
            <DetailPengajuan/>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>

import MainBar from '@/components/MainBar.vue';
import SidebarKemitraan from '@/components/SidebarKemitraan.vue';
import DetailPengajuan from '@/components/DetailPengajuanApproval.vue';

export default {
    components: {
    SidebarKemitraan,
    MainBar,
    DetailPengajuan,
    }
};
</script>

<style>
.background {
  width: Fixed (1,366px)px;
  height: Hug (1,416px)px;
  left: 3733px;
  gap: 0px;
  opacity: 0px;
  background: #F6F7FD;
}
</style>