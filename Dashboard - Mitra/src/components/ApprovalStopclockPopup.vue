<template>
    <div
      v-if="isVisible"
      class="fixed inset-0 flex items-center justify-center bg-[#1F2937] bg-opacity-50"
    >
      <div class="bg-[#FFFFFF] rounded-lg shadow-lg w-[360px] h-[476px]">
        <button @click="closePopup" class="text-[#4B5563] absolute right-[520px] mt-2 mr-2 text-[20px]">&times;</button>
        <div class="flex flex-col items-center mt-14 ml-8 mr-8 mb-14">
          <img
            src="../assets/image/Pengajuan.png"
            class="w-[200px] h-[160px] mb-4"
          />
          <h2 class="text-[20px] font-sans font-semibold text-[#333333] mb-2">
            Setujui Pengajuan
          </h2>
          <p class="text-[16px] font-sans text-[#333333] font-normal mb-6 text-center">
            Apakah Anda yakin ingin menyetujui stop clock pada pengajuan ini ?
          </p>
          <button
            @click="closePopup"
            class="bg-[#2671D9] text-[#FFFFFF] text-[14px] p-2 rounded-lg w-full mb-2">
            Setujui
          </button>
          <button
            @click="closePopup"
            class="border-[1px] bg-[#FFFFFF] text-[#2671D9] border-[#2671D9] text-[14px] p-2 rounded-lg w-full">
            Batal
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isVisible: {
        type: Boolean,
        required: true,
      },
    },
    methods: {
      closePopup() {
        this.$emit("close");
      },
    },
  };
  </script>
  
  <style scoped>
  .fixed {
    z-index: 9999;
  }
  </style>
  