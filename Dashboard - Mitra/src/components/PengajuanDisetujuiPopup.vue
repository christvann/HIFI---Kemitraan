<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 flex items-center justify-center bg-[#1F2937] bg-opacity-50"
  >
    <div class="bg-[#FFFFFF] rounded-lg shadow-lg w-[360px] h-[476px]">
      <div class="flex flex-col items-center mt-14 ml-8 mr-8 mb-14">
        <img
          src="../assets/image/pengajuanditerima.png"
          class="w-[200px] h-[160px] mb-4"
        />
        <h2 class="text-[20px] font-sans font-semibold text-[#333333] mb-2">
          Pengajuan Telah Disetujui
        </h2>
        <p class="text-[16px] font-sans text-[#333333] font-normal mb-6 text-center">
          Anda telah berhasil menyetujui pengajuan ini. Proses pengajuan kemitraan telah selesai. Silakan cek pengajuan pada menu Selesai.
        </p>
        <button
          @click="closePopup"
          class="bg-[#2671D9] text-[#FFFFFF] text-[14px] p-2 rounded-lg w-full"
        >
          Selesai
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
      this.$emit('close');
    },
  },
};
</script>
