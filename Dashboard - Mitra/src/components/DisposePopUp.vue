<template>
  <div v-if="isVisible" class="fixed inset-0 flex items-center justify-center bg-[#1F2937] bg-opacity-50">
    <div class="bg-[#FFFFFF] rounded-lg shadow-lg w-[400px] p-6">
      <div class="flex justify-between items-center">
        <h2 class="text-[20px] font-sans font-semibold text-[#000000]">Dispose Pengajuan</h2>
        <button @click="closePopup" class="text-[#4B5563] text-[20px]">&times;</button>
      </div>
      <div class="mt-4">
        <p class="text-[16px] font-sans text-[#333333] font-normal">Silakan pilih nama staff kemitraan untuk dispose pengajuan.</p>
        <label for="staffKemitraan" class="block mt-4 text-[16px] font-sans text-[#4D5E80] font-medium">Staff Kemitraan *</label>
        <input type="text" id="staffKemitraan" placeholder="Cari Staff Kemitraan" class="mt-1 text-[14px] font-sans text-[#9C9C9C] p-2 w-full border rounded-lg" />
      </div>
      <div class="flex justify-end mt-4">
        <button @click="closePopup" class="mr-2 text-[#FF5656] font-sans text-[14px] font-semibold">Batal</button>
        <button @click="navigateToDetail" class="bg-[#E6E6E6] text-[#7F7F80] p-2 rounded-lg">Pilih</button>
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
    navigateToDetail() {
      this.$router.push("/masukstaff");
    },
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
