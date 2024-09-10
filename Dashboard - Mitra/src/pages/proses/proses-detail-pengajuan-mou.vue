<template>
  <div class="">
    <div class="background">
      <div class="flex">
        <SidebarKemitraan />
        <div class="flex-grow">
          <MainBar />
          <DetailPengajuanMoUNDA />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainBar from "@/components/MainBar.vue";
import SidebarKemitraan from "@/components/SidebarKemitraan.vue";
import DetailPengajuanMoUNDA from "@/components/DetailPengajuanMoU-NDA.vue";

export default {
  components: {
    SidebarKemitraan,
    MainBar,
    DetailPengajuanMoUNDA,
  },
};
</script>

<style>
.background {
  width: Fixed (1, 366px) px;
  height: Hug (1, 416px) px;
  left: 3733px;
  gap: 0px;
  opacity: 0px;
  background: #f6f7fd;
}
</style>
