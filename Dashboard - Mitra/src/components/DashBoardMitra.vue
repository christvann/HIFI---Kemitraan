<template>
  <div class="flex flex-col items-start w-[216px] mb-6 mt-4">
    <div class="flex items-center">
        <img src="../assets/image/Rectangle.png" class="ml-[10px]">
        <h1 class="font-inter text-[20px] text-[#333333] mb-[1px] ml-[10px]">Dashboard</h1>
    </div>
        <span class="ml-[10px] font-inter text-[16px] text-[#9C9C9C]">Dashboard Kemitraan</span>
   </div>
  <div>
    <div class="blue-box ml-[10px] relative">
      <div class="flex items-start">
        <div>
          <div class="flex items-center">
            <img src="../assets/image/Avatar.png" class="mb-[5px]">
            <h1 class="ml-[15px] mb-[2px] text-white" style="font-family: Inter; font-size: 14px; font-weight: 400; line-height: 18.15px; text-align: left;">
              OFFICER KEMITRAAN BISNIS
            </h1>
          </div>
          <span class="ml-[30px] text-white" style="font-family: Inter; font-size: 14px; font-weight: 400; line-height: 18.15px; text-align: left;">
            Staff Sub Bidang Kemitraan Bisnis Konektivitas dan Infrastruktur
          </span>
        </div>
        <!-- Design Image -->
        <img src="../assets/image/design.png" class="design absolute right-0 top-0" alt="Design Element"/>
      </div>
    </div>
  </div>

</template>

<script>
export default {
    name: 'DashBoardMitra, BlueBoxWithDesign',
};
</script>

<style>
.blue-box {
  background-color: #4285f4;
  padding: 20px;
  border-radius: 10px;
  width: calc(100% - 20px); 
  position: relative;
}
.design {
  width: 215px; 
  height: auto;
  top: 0;
  right: 0;
}

</style>