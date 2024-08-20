<template>
  <div>
    <div class="flex w-[1118px] h-[54px] rounded-lg bg-[#FFFFFF] border-collapse">
        <h1 class="w-[51px] h-[22px] font-sans text-[#2671D9] text-[14px] font-semibold ml-6 mt-4 mb-4">Masuk</h1>
        <img src="../assets/image/NextIcon.png" class="w-[16px] h-[16px] mt-[19px] mr-1">
        <span class="w-[119px] h-[22px] font-sans text-[#7F7F80] text-[14px] font-semibold mt-4">Detail Pengajuan</span>
    </div>
  </div>
  <div class="px-4 py-3">
    <div class="h-[712px] w-[1086px] rounded-lg bg-[#FFFFFF] border-collapse">
        <div class="flex">
          <img src="../assets/image/Rectangle.png" class="ml-4 mt-[10px] h-[28px]">
          <h1 class="font-sans text-[20px] text-[#333333] mt-2 ml-[5px] font-semibold">Detail Pengajuan</h1>
        </div>
        <h1 class="items-start justify-center px-2 ml-2 text-[#9C9C9C]">#no_pengajuan</h1>
        <div class="flex justify-end">
            <div class="w-[81px] h-[40px] border-collapse rounded-lg bg-[#2671D9] border-[#E5E7E9] border-[1px] ml-[246px] mt-4">
                <div @click="toggleDatePicker" class="flex items-center text-[14px] w-[40px] h-[22px] font-sans font-semibold text-[#FFFFFF] mt-[9px] mb-[9px] ml-4 mr-10 cursor-pointer">
                    Dispose
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
    return {
        showDropdown: false,
    }
  }
}
</script>

<style>

</style>