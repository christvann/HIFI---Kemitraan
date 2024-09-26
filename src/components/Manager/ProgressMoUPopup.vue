<template>
  <div v-if="isVisible" class="fixed inset-0 flex items-center justify-center bg-[#1F2937] bg-opacity-50">
    <div class="w-[684.92px] h-[470px] rounded-lg shadow-lg bg-[#FFFFFF] border-collapse">
      <button @click="closePopup" class="text-[#2671D9] w-[14px] h-[14px] absolute mt-[25px] ml-[650px] text-[20px]">&times;</button>
      <div class="flex mt-[8px]">
        <svg class="ml-4 mt-[10px]" width="6" height="28" viewBox="0 0 6 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="6" height="28" fill="#1F5AAD" />
        </svg>
        <h1 class="font-sans text-[20px] text-[#333333] mt-2 ml-[5px] font-semibold">Progress Kemitraan</h1>
      </div>
      <h1 class="items-start justify-center px-2 ml-2 text-[#9C9C9C]">$judul_pengajuan</h1>
      <!-- Tabel 1 -->
      <div class="flex flex-col w-[289px] h-[130px] rounded-lg mt-6 ml-5 border-[1px] border-[#E5E7E9]">
        <div class="w-full h-[40px] p-4 flex justify-between items-center rounded-t-lg bg-[#0EA976]">
          <div class="font-sans text-[14px] font-semibold text-white">Surat Penawaran</div>
        </div>
        <div class="flex items-center ml-4 mt-[10px]">
          <div class="flex items-center">
            <div>
              <div class="font-sans text-[#333333] text-[12px] font-normal">Dokumen Surat Penawaran</div>
              <div class="mt-[12px] ml-[38px]">
                <p class="w-[200px] h[-12px] text-[#333333] text-[9.06px]">suratpenawaran.pdf</p>
                <p class="w-[30px] h-[11px] text-[#9E9E9E] text-[7.77px]">2 MB</p>
              </div>
            </div>
            <svg class="w-[30px] h-[30px] absolute mt-[30px]" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15" cy="15" r="14.5652" class="fill-[#E2FCF3]" />
              <g transform="translate(9, 8)">
                <path
                  class="fill-[#0EA976]"
                  d="M10.4206 4.70885C10.4143 4.65309 10.4021 4.59817 10.3842 4.54499V4.49037C10.355 4.42797 10.3161 4.37061 10.2689 4.32044L6.62757 0.679135C6.5774 0.63193 6.52004 0.593007 6.45764 0.563827H6.40302C6.34137 0.528471 6.27328 0.505776 6.20275 0.49707H2.5311C2.04823 0.49707 1.58514 0.688889 1.24371 1.03033C0.902267 1.37177 0.710449 1.83486 0.710449 2.31772V10.8141C0.710449 11.297 0.902267 11.7601 1.24371 12.1015C1.58514 12.4429 2.04823 12.6348 2.5311 12.6348H8.59994C9.08281 12.6348 9.5459 12.4429 9.88734 12.1015C10.2288 11.7601 10.4206 11.297 10.4206 10.8141V4.74526V4.70885ZM6.77929 2.56654L8.35112 4.13837H7.38617C7.22522 4.13837 7.07085 4.07443 6.95704 3.96062C6.84323 3.84681 6.77929 3.69245 6.77929 3.53149V2.56654ZM9.20683 10.8141C9.20683 10.9751 9.14289 11.1294 9.02907 11.2432C8.91526 11.357 8.7609 11.421 8.59994 11.421H2.5311C2.37015 11.421 2.21578 11.357 2.10197 11.2432C1.98816 11.1294 1.92422 10.9751 1.92422 10.8141V2.31772C1.92422 2.15677 1.98816 2.0024 2.10197 1.88859C2.21578 1.77478 2.37015 1.71084 2.5311 1.71084H5.56552V3.53149C5.56552 4.01436 5.75734 4.47745 6.09878 4.81889C6.44022 5.16032 6.90331 5.35214 7.38617 5.35214H9.20683V10.8141Z"
                />
              </g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="text-[#0EA976] bg-[#E2FCF3] rounded-full w-[15px] h-[15px] absolute mb-[35px] ml-[240px]" viewBox="0 0 21 19" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 4.293a1 1 0 00-1.414 0L8 11.586 4.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      <!-- Tabel 1 -->
      <svg xmlns="http://www.w3.org/2000/svg" class="w-[33px] h-[28px] absolute ml-[325px] mt-[-80px]" viewBox="0 0 33 28" fill="none">
        <path d="M24.75 6.91797L31.8317 13.9996L24.75 21.0813" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M1 14H30.64" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <!-- Tabel 2 -->
      <div class="flex flex-col w-[289px] h-[130px] rounded-lg absolute mt-[-130px] ml-[374px] border-[1px] border-[#DEDEDE]">
        <div class="w-full h-[40px] p-4 flex justify-between items-center rounded-t-lg bg-[#0EA976]">
          <div class="font-sans text-[14px] font-semibold text-white">Proposal</div>
        </div>
        <div class="flex items-center ml-4 mt-[10px]">
          <div class="flex items-center">
            <div>
              <div class="font-sans text-[#333333] text-[12px] font-normal">Dokumen Proposal</div>
              <div class="mt-[12px] ml-[38px]">
                <p class="w-[200px] h[-12px] text-[#333333] text-[9.06px]">proposal.pdf</p>
                <p class="w-[30px] h-[11px] text-[#9E9E9E] text-[7.77px]">2 MB</p>
              </div>
            </div>
            <svg class="w-[30px] h-[30px] absolute mt-[30px]" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15" cy="15" r="14.5652" class="fill-[#E2FCF3]" />
              <g transform="translate(9, 8)">
                <path
                  class="fill-[#0EA976]"
                  d="M10.4206 4.70885C10.4143 4.65309 10.4021 4.59817 10.3842 4.54499V4.49037C10.355 4.42797 10.3161 4.37061 10.2689 4.32044L6.62757 0.679135C6.5774 0.63193 6.52004 0.593007 6.45764 0.563827H6.40302C6.34137 0.528471 6.27328 0.505776 6.20275 0.49707H2.5311C2.04823 0.49707 1.58514 0.688889 1.24371 1.03033C0.902267 1.37177 0.710449 1.83486 0.710449 2.31772V10.8141C0.710449 11.297 0.902267 11.7601 1.24371 12.1015C1.58514 12.4429 2.04823 12.6348 2.5311 12.6348H8.59994C9.08281 12.6348 9.5459 12.4429 9.88734 12.1015C10.2288 11.7601 10.4206 11.297 10.4206 10.8141V4.74526V4.70885ZM6.77929 2.56654L8.35112 4.13837H7.38617C7.22522 4.13837 7.07085 4.07443 6.95704 3.96062C6.84323 3.84681 6.77929 3.69245 6.77929 3.53149V2.56654ZM9.20683 10.8141C9.20683 10.9751 9.14289 11.1294 9.02907 11.2432C8.91526 11.357 8.7609 11.421 8.59994 11.421H2.5311C2.37015 11.421 2.21578 11.357 2.10197 11.2432C1.98816 11.1294 1.92422 10.9751 1.92422 10.8141V2.31772C1.92422 2.15677 1.98816 2.0024 2.10197 1.88859C2.21578 1.77478 2.37015 1.71084 2.5311 1.71084H5.56552V3.53149C5.56552 4.01436 5.75734 4.47745 6.09878 4.81889C6.44022 5.16032 6.90331 5.35214 7.38617 5.35214H9.20683V10.8141Z"
                />
              </g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="text-[#0EA976] bg-[#E2FCF3] rounded-full w-[15px] h-[15px] absolute top-[53.5px] left-[255px]" viewBox="0 0 21 19" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 4.293a1 1 0 00-1.414 0L8 11.586 4.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      <!-- Tabel 2 -->
      <svg xmlns="http://www.w3.org/2000/svg" class="w-[33px] h-[32px] absolute ml-[505px] mt-[20px]" viewBox="0 0 32 33" fill="none">
        <path d="M20.2017 24.75L13.4201 31.8317L6.63857 24.75" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M13.4204 1L13.4204 30.64" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <!-- Tabel 3 -->
      <div class="absolute flex flex-col w-[289px] h-[130px] rounded-lg mt-[70px] ml-[370px] border-[1px] border-[#E5E7E9]">
        <div class="w-full h-[40px] p-4 flex justify-between items-center rounded-t-lg bg-[#0EA976]">
          <div class="font-sans text-[14px] font-semibold text-white">MoU/NDA</div>
        </div>
        <div class="flex items-center ml-4 mt-[10px]">
          <div class="flex items-center">
            <div>
              <div class="font-sans text-[#333333] text-[12px] font-normal">MoU/NDA</div>
              <div class="mt-[12px] ml-[38px]">
                <p class="w-[200px] h[-12px] text-[#333333] text-[9.06px]">MoU/NDA.pdf</p>
                <p class="w-[30px] h-[11px] text-[#9E9E9E] text-[7.77px]">2 MB</p>
              </div>
            </div>
            <svg class="w-[30px] h-[30px] absolute mt-[30px]" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15" cy="15" r="14.5652" class="fill-[#E2FCF3]" />
              <g transform="translate(9, 8)">
                <path
                  class="fill-[#0EA976]"
                  d="M10.4206 4.70885C10.4143 4.65309 10.4021 4.59817 10.3842 4.54499V4.49037C10.355 4.42797 10.3161 4.37061 10.2689 4.32044L6.62757 0.679135C6.5774 0.63193 6.52004 0.593007 6.45764 0.563827H6.40302C6.34137 0.528471 6.27328 0.505776 6.20275 0.49707H2.5311C2.04823 0.49707 1.58514 0.688889 1.24371 1.03033C0.902267 1.37177 0.710449 1.83486 0.710449 2.31772V10.8141C0.710449 11.297 0.902267 11.7601 1.24371 12.1015C1.58514 12.4429 2.04823 12.6348 2.5311 12.6348H8.59994C9.08281 12.6348 9.5459 12.4429 9.88734 12.1015C10.2288 11.7601 10.4206 11.297 10.4206 10.8141V4.74526V4.70885ZM6.77929 2.56654L8.35112 4.13837H7.38617C7.22522 4.13837 7.07085 4.07443 6.95704 3.96062C6.84323 3.84681 6.77929 3.69245 6.77929 3.53149V2.56654ZM9.20683 10.8141C9.20683 10.9751 9.14289 11.1294 9.02907 11.2432C8.91526 11.357 8.7609 11.421 8.59994 11.421H2.5311C2.37015 11.421 2.21578 11.357 2.10197 11.2432C1.98816 11.1294 1.92422 10.9751 1.92422 10.8141V2.31772C1.92422 2.15677 1.98816 2.0024 2.10197 1.88859C2.21578 1.77478 2.37015 1.71084 2.5311 1.71084H5.56552V3.53149C5.56552 4.01436 5.75734 4.47745 6.09878 4.81889C6.44022 5.16032 6.90331 5.35214 7.38617 5.35214H9.20683V10.8141Z"
                />
              </g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="text-[#0EA976] bg-[#E2FCF3] rounded-full w-[15px] h-[15px] absolute top-[53.5px] left-[255px]" viewBox="0 0 21 19" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 4.293a1 1 0 00-1.414 0L8 11.586 4.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      <!-- Tabel 3 -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileUploaded1: false,
      fileName1: "",
      fileSize1: "",
      fileUploaded2: false,
      fileName2: "",
      fileSize2: "",
      fileUploaded3: false,
      fileName3: "",
      fileSize3: "",
    };
  },
  computed: {
    boxClass1() {
      return this.fileUploaded1 ? "border-[#0EA976]" : "border-[#FFC107]";
    },
    headerClass1() {
      return this.fileUploaded1 ? "bg-[#0EA976]" : "bg-[#FFC107]";
    },
    boxClass2() {
      return this.fileUploaded2 ? "border-[#0EA976]" : "border-[#FFC107]";
    },
    headerClass2() {
      return this.fileUploaded2 ? "bg-[#0EA976]" : "bg-[#FFC107]";
    },
    boxClass3() {
      return this.fileUploaded3 ? "border-[#0EA976]" : "border-[#FFC107]";
    },
    headerClass3() {
      return this.fileUploaded3 ? "bg-[#0EA976]" : "bg-[#FFC107]";
    },
  },
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closePopup() {
      this.$emit("close");
    },
    handleFileUpload1(event) {
      const file = event.target.files[0];
      if (file) {
        this.fileUploaded1 = true;
        this.fileName1 = file.name;
        this.fileSize1 = (file.size / 1024 / 1024).toFixed(2);
      }
    },
    handleFileUpload2(event) {
      const file = event.target.files[0];
      if (file) {
        this.fileUploaded2 = true;
        this.fileName2 = file.name;
        this.fileSize2 = (file.size / 1024 / 1024).toFixed(2);
      }
    },
    handleFileUpload3(event) {
      const file = event.target.files[0];
      if (file) {
        this.fileUploaded3 = true;
        this.fileName3 = file.name;
        this.fileSize3 = (file.size / 1024 / 1024).toFixed(2);
      }
    },
  },
};
</script>
<style scoped>
.fixed {
  z-index: 9999;
}

label {
  cursor: pointer;
}
</style>
