<template>
    <div class="">
      <div class="background">
        <div class="flex">
          <SidebarStaff />
          <div class="flex-grow">
            <MainBar />
            <SelesaiStaff />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import MainBar from "@/components/MainBar.vue";
  import SidebarStaff from "@/components/SidebarStaff.vue";
  import SelesaiStaff from "@/components/SelesaiStaff.vue";
  
  export default {
    components: {
      SidebarStaff,
      MainBar,
      SelesaiStaff,
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
  