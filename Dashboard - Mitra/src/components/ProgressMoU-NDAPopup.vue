<template>
  <div v-if="isVisible" class="fixed inset-0 flex items-center justify-center bg-[#1F2937] bg-opacity-50">
    <div class="bg-[#FFFFFF] rounded-lg shadow-lg w-[684.92px] h-[538.92px]">
      <button @click="closePopup" class="text-[#2671D9] w-[14px] h-[14px] absolute right-[185px] mt-[20px] mr-2 text-[20px]">&times;</button>
      <div class="flex mt-[20px]">
        <img src="../assets/image/Rectangle.png" class="ml-4 mt-[10px] h-[28px]" />
        <h1 class="font-sans text-[20px] text-[#333333] mt-2 ml-[5px] font-semibold">Progress Kemitraan</h1>
      </div>
      <h1 class="items-start justify-center px-2 ml-2 text-[#9C9C9C]">$judul_pengajuan</h1>
      <div class="flex">
        <div class="relative mt-6 ml-4 items-start w-[289px] h-[130px] border-[1px] border-[#E5E7E9] rounded-md">
          <div class="w-[289px] h-[40px] border-[1px] border-[#E5E7E9] rounded-tl-md rounded-tr-md bg-[#0EA976]">
            <h1 class="mt-[7px] ml-4 w-[116px] h-[17px] font-sans text-[14px] text-[#FFFFFF] font-semibold">Surat Penawaran</h1>
          </div>
          <div class="flex mt-[10px]">
            <div class="size-[15px] rounded-md bg-[#E2FCF3] border-[#292D32] absolute right-[13.5px]">
              <svg class="mt-[5.25px] ml-[4.12px]" width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.30812 6.12563C3.15812 6.12563 3.01562 6.06562 2.91062 5.96062L0.788125 3.83812C0.570625 3.62062 0.570625 3.26063 0.788125 3.04313C1.00562 2.82563 1.36562 2.82563 1.58312 3.04313L3.30812 4.76813L7.16313 0.913125C7.38062 0.695625 7.74063 0.695625 7.95813 0.913125C8.17563 1.13063 8.17563 1.49062 7.95813 1.70812L3.70562 5.96062C3.60062 6.06562 3.45812 6.12563 3.30812 6.12563Z"
                  fill="#0C8D63"
                />
              </svg>
            </div>
            <h1 class="w-[154px] h-[15px] ml-3 font-sans text-[12px] text-[#333333] font-normal">Dokumen Surat Penawaran</h1>
          </div>
          <div class="flex ml-3 mt-3 w-[134px] h-[29.13px]">
            <div class="flex size-[29.13px] rounded-xl bg-[#E2FCF3] border-[#292D32]">
              <div class="flex items-center ml-[10px]">
                <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.4206 4.70885C10.4143 4.65309 10.4021 4.59817 10.3842 4.54499V4.49037C10.355 4.42797 10.3161 4.37061 10.2689 4.32044L6.62757 0.679135C6.5774 0.63193 6.52004 0.593007 6.45764 0.563827H6.40302C6.34137 0.528471 6.27328 0.505776 6.20275 0.49707H2.5311C2.04823 0.49707 1.58514 0.688889 1.24371 1.03033C0.902267 1.37177 0.710449 1.83486 0.710449 2.31772V10.8141C0.710449 11.297 0.902267 11.7601 1.24371 12.1015C1.58514 12.4429 2.04823 12.6348 2.5311 12.6348H8.59994C9.08281 12.6348 9.5459 12.4429 9.88734 12.1015C10.2288 11.7601 10.4206 11.297 10.4206 10.8141V4.74526V4.70885ZM6.77929 2.56654L8.35112 4.13837H7.38617C7.22522 4.13837 7.07085 4.07443 6.95704 3.96062C6.84323 3.84681 6.77929 3.69245 6.77929 3.53149V2.56654ZM9.20683 10.8141C9.20683 10.9751 9.14289 11.1294 9.02907 11.2432C8.91526 11.357 8.7609 11.421 8.59994 11.421H2.5311C2.37015 11.421 2.21578 11.357 2.10197 11.2432C1.98816 11.1294 1.92422 10.9751 1.92422 10.8141V2.31772C1.92422 2.15677 1.98816 2.0024 2.10197 1.88859C2.21578 1.77478 2.37015 1.71084 2.5311 1.71084H5.56552V3.53149C5.56552 4.01436 5.75734 4.47745 6.09878 4.81889C6.44022 5.16032 6.90331 5.35214 7.38617 5.35214H9.20683V10.8141Z"
                    fill="#0EA976"
                  />
                </svg>
              </div>
              <h1 class="w-[90px] h-[12px] ml-[19px] font-sans text-[9.06px] text-[#333333] font-extralight">suratpenawaran.pdf</h1>
            </div>
            <span class="text-[7.77px] font-sans w-[19px] h-[11px] text-[#9E9E9E] mt-[13px] ml-[11px]">2 MB</span>
          </div>
        </div>
        <div class="flex">
          <svg class="mt-[75px] ml-[18px]" width="33" height="28" viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.75 6.91797L31.8317 13.9996L24.75 21.0813" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M1 14H30.64" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <div class="relative mt-6 ml-4 items-start w-[289px] h-[130px] border-[1px] border-[#E5E7E9] rounded-md">
            <div class="w-[289px] h-[40px] border-[1px] border-[#E5E7E9] rounded-tl-md rounded-tr-md bg-[#FFB200]">
              <h1 class="mt-[7px] ml-4 w-[116px] h-[17px] font-sans text-[14px] text-[#FFFFFF] font-semibold">Proposal</h1>
            </div>
            <div class="flex">
              <h1 class="w-[107px] h-[15px] ml-3 mt-[10px] font-sans text-[12px] text-[#333333] font-normal">Dokumen Proposal</h1>
            </div>
            <span class="ml-3 text-[8px] font-sans font-extralight w-[265px] h-[10px] text-[#FF5656]">Progress kemitraan melewati tenggat waktu yang telah ditentukan.</span>
            <input type="file" id="fileInputProposal" class="hidden" @change="handleFileChange('Proposal', $event)" ref="fileInputProposal" />
            <button class="absolute left-3 mt-2" @click="openFileDialog('Proposal')">
              <div class="flex justify-between items-center">
                <div class="overflow-hidden">
                  <span class="block text-[9.06px] text-[#333333] font-extralight">
                    {{ fileDetails.Proposal.fileName || "" }}
                  </span>
                  <span class="block text-[7.77px] font-sans text-[#9E9E9E]">
                    {{ fileDetails.Proposal.fileSize || "" }}
                  </span>
                </div>
              </div>
              <div class="flex items-center justify-center w-[73px] h-[25px] rounded-lg bg-[#2671D9] border-[1px] border-[#E5E7E9]">
                <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.87337 1.13053C3.01762 1.13053 2.32389 1.82426 2.32389 2.68001C2.32389 2.77881 2.33309 2.87512 2.35059 2.96824C2.38432 3.14782 2.27992 3.32463 2.10638 3.38182C1.59703 3.54968 1.23014 4.02951 1.23014 4.59407C1.23014 5.29881 1.80145 5.87012 2.50618 5.87012H6.60775C7.16147 5.87012 7.61035 5.42124 7.61035 4.86751C7.61035 4.43975 7.3423 4.07368 6.96375 3.92985C6.77894 3.85963 6.68377 3.65491 6.74921 3.46836C6.77555 3.39326 6.79004 3.31216 6.79004 3.22689C6.79004 2.82418 6.46358 2.49772 6.06087 2.49772C5.98167 2.49772 5.9061 2.51022 5.83562 2.53308C5.74043 2.56395 5.63673 2.55433 5.54884 2.50649C5.46095 2.45864 5.39658 2.37677 5.37084 2.28007C5.19455 1.61791 4.59041 1.13053 3.87337 1.13053ZM1.59473 2.68001C1.59473 1.42155 2.61491 0.401367 3.87337 0.401367C4.80935 0.401367 5.61285 0.965434 5.96369 1.77176C5.99584 1.76963 6.02825 1.76855 6.06087 1.76855C6.86629 1.76855 7.51921 2.42147 7.51921 3.22689C7.51921 3.28171 7.51616 3.33591 7.51023 3.3893C8.00728 3.69338 8.33952 4.24132 8.33952 4.86751C8.33952 5.82394 7.56418 6.59928 6.60775 6.59928H2.50618C1.39874 6.59928 0.500977 5.70152 0.500977 4.59407C0.500977 3.81305 0.947312 3.13701 1.59815 2.80588C1.59588 2.76418 1.59473 2.72222 1.59473 2.68001ZM4.16245 2.42221C4.30483 2.27983 4.53567 2.27983 4.67805 2.42221L5.7718 3.51596C5.91418 3.65834 5.91418 3.88918 5.7718 4.03156C5.62942 4.17394 5.39858 4.17394 5.2562 4.03156L4.78483 3.56019L4.78483 5.14095C4.78483 5.3423 4.6216 5.50553 4.42025 5.50553C4.21889 5.50553 4.05566 5.3423 4.05566 5.14095L4.05566 3.56019L3.5843 4.03156C3.44192 4.17394 3.21108 4.17394 3.0687 4.03156C2.92632 3.88918 2.92632 3.65834 3.0687 3.51596L4.16245 2.42221Z"
                    fill="white"
                  />
                </svg>
                <span class="w-[31px] h-[14px] text-[8.75px] font-sans font-medium text-[#FFFFFF] ml-[5px] mt-[9px] mr-3 mb-[9px]">Upload</span>
              </div>
            </button>
          </div>
        </div>
        <div class="flex">
          <svg class="mt-[75px] ml-[18px]" width="33" height="28" viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.75 6.91797L31.8317 13.9996L24.75 21.0813" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M1 14H30.64" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <div class="relative mt-6 ml-4 items-start w-[289px] h-[130px] border-[1px] border-[#E5E7E9] rounded-md">
            <div class="w-[289px] h-[40px] border-[1px] border-[#E5E7E9] rounded-tl-md rounded-tr-md bg-[#FF5656]">
              <h1 class="mt-[7px] ml-4 w-[116px] h-[17px] font-sans text-[14px] text-[#FFFFFF] font-semibold">MoU/NDA</h1>
            </div>
            <div class="flex">
              <h1 class="w-[107px] h-[10px] ml-3 mt-[10px] font-sans text-[12px] text-[#333333] font-normal">Dokumen MoU/NDA</h1>
            </div>
            <input type="file" id="fileInputMoU" class="hidden" @change="handleFileChange('MoU', $event)" ref="fileInputMoU" />
            <button class="absolute left-3 mt-6" @click="openFileDialog('MoU')">
              <div class="flex justify-between items-center">
                <div class="overflow-hidden">
                  <span class="block text-[9.06px] text-[#333333] font-extralight">
                    {{ fileDetails.MoU.fileName || "" }}
                  </span>
                  <span class="block text-[7.77px] font-sans text-[#9E9E9E]">
                    {{ fileDetails.MoU.fileSize || "" }}
                  </span>
                </div>
              </div>
              <div class="flex items-center justify-center w-[73px] h-[25px] rounded-lg bg-[#2671D9] border-[1px] border-[#E5E7E9]">
                <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.87337 1.13053C3.01762 1.13053 2.32389 1.82426 2.32389 2.68001C2.32389 2.77881 2.33309 2.87512 2.35059 2.96824C2.38432 3.14782 2.27992 3.32463 2.10638 3.38182C1.59703 3.54968 1.23014 4.02951 1.23014 4.59407C1.23014 5.29881 1.80145 5.87012 2.50618 5.87012H6.60775C7.16147 5.87012 7.61035 5.42124 7.61035 4.86751C7.61035 4.43975 7.3423 4.07368 6.96375 3.92985C6.77894 3.85963 6.68377 3.65491 6.74921 3.46836C6.77555 3.39326 6.79004 3.31216 6.79004 3.22689C6.79004 2.82418 6.46358 2.49772 6.06087 2.49772C5.98167 2.49772 5.9061 2.51022 5.83562 2.53308C5.74043 2.56395 5.63673 2.55433 5.54884 2.50649C5.46095 2.45864 5.39658 2.37677 5.37084 2.28007C5.19455 1.61791 4.59041 1.13053 3.87337 1.13053ZM1.59473 2.68001C1.59473 1.42155 2.61491 0.401367 3.87337 0.401367C4.80935 0.401367 5.61285 0.965434 5.96369 1.77176C5.99584 1.76963 6.02825 1.76855 6.06087 1.76855C6.86629 1.76855 7.51921 2.42147 7.51921 3.22689C7.51921 3.28171 7.51616 3.33591 7.51023 3.3893C8.00728 3.69338 8.33952 4.24132 8.33952 4.86751C8.33952 5.82394 7.56418 6.59928 6.60775 6.59928H2.50618C1.39874 6.59928 0.500977 5.70152 0.500977 4.59407C0.500977 3.81305 0.947312 3.13701 1.59815 2.80588C1.59588 2.76418 1.59473 2.72222 1.59473 2.68001ZM4.16245 2.42221C4.30483 2.27983 4.53567 2.27983 4.67805 2.42221L5.7718 3.51596C5.91418 3.65834 5.91418 3.88918 5.7718 4.03156C5.62942 4.17394 5.39858 4.17394 5.2562 4.03156L4.78483 3.56019L4.78483 5.14095C4.78483 5.3423 4.6216 5.50553 4.42025 5.50553C4.21889 5.50553 4.05566 5.3423 4.05566 5.14095L4.05566 3.56019L3.5843 4.03156C3.44192 4.17394 3.21108 4.17394 3.0687 4.03156C2.92632 3.88918 2.92632 3.65834 3.0687 3.51596L4.16245 2.42221Z"
                    fill="white"
                  />
                </svg>
                <span class="w-[31px] h-[14px] text-[8.75px] font-sans font-medium text-[#FFFFFF] ml-[5px] mt-[9px] mr-3 mb-[9px]">Upload</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
    openFileDialog(section) {
      const inputElement = this.$refs[`fileInput${section}`];
      if (inputElement) {
        inputElement.click();
      } else {
        console.error(`File input for section ${section} not found.`);
      }
    },
    handleFileChange(section, event) {
      const file = event.target.files[0];
      if (file) {
        this.fileDetails[section].fileName = file.name;
        this.fileDetails[section].fileSize = `${(file.size / (1024 * 1024)).toFixed(2)} MB`;
      } else {
        this.fileDetails[section].fileName = "";
        this.fileDetails[section].fileSize = "";
      }
    },
  },
  data() {
    return {
      fileDetails: {
        Proposal: { fileName: "", fileSize: "" },
        MoU: { fileName: "", fileSize: "" },
      },
      fileName: "", // Nama file yang dipilih
      fileSize: "", // Ukuran file yang dipilih
    };
  },
};
</script>
<style scoped>
.fixed {
  z-index: 9999;
}
</style>
