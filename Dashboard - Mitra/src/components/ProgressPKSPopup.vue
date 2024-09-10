<template>
  <div v-if="isVisible" class="fixed inset-0 flex items-center justify-center bg-[#1F2937] bg-opacity-50">
    <div class="bg-[#FFFFFF] re rounded-lg shadow-lg w-[1040.84px] h-[650px] border-collapse">
      <button @click="closePopup" class="text-[#2671D9] w-[14px] h-[14px] absolute right-[185px] mt-[20px] mr-2 text-[20px]">&times;</button>
      <div class="flex mt-[20px]">
        <img src="../assets/image/Rectangle.png" class="ml-4 mt-[10px] h-[28px]" />
        <h1 class="font-sans text-[20px] text-[#333333] mt-2 ml-[5px] font-semibold">Progress Kemitraan</h1>
      </div>
      <h1 class="items-start justify-center px-2 ml-2 text-[#9C9C9C]">$judul_pengajuan</h1>
      <div class="flex">
        <div :class="boxClass1" class="flex flex-col w-[289px] h-[130px] rounded-lg mt-6 ml-5 border-[1px] border-[#DEDEDE]">
          <div :class="headerClass1" class="w-[289px] h-[40px] p-4 flex justify-between items-center rounded-t-lg">
            <div class="font-sans text-[14px] font-semibold text-white">{{ fileUploaded1 ? "Surat Penawaran" : "Surat Penawaran" }}</div>
          </div>
          <div v-if="!fileUploaded1" class="flex flex-col ml-4 mt-[10px]">
            <p class="font-sans text-[#333333] text-[12px] font-normal">Dokumen Surat Penawaran</p>
            <label class="bg-[#2671D9] text-white w-[73px] h-[25px] rounded mt-[12px] cursor-pointer inline-flex items-center justify-center text-[8.75px] font-sans font-semibold">
              <div class="flex items-center">
                <svg class="mr-1" width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.87337 1.13053C3.01762 1.13053 2.32389 1.82426 2.32389 2.68001C2.32389 2.77881 2.33309 2.87512 2.35059 2.96824C2.38432 3.14782 2.27992 3.32463 2.10638 3.38182C1.59703 3.54968 1.23014 4.02951 1.23014 4.59407C1.23014 5.29881 1.80145 5.87012 2.50618 5.87012H6.60775C7.16147 5.87012 7.61035 5.42124 7.61035 4.86751C7.61035 4.43975 7.3423 4.07368 6.96375 3.92985C6.77894 3.85963 6.68377 3.65491 6.74921 3.46836C6.77555 3.39326 6.79004 3.31216 6.79004 3.22689C6.79004 2.82418 6.46358 2.49772 6.06087 2.49772C5.98167 2.49772 5.9061 2.51022 5.83562 2.53308C5.74043 2.56395 5.63673 2.55433 5.54884 2.50649C5.46095 2.45864 5.39658 2.37677 5.37084 2.28007C5.19455 1.61791 4.59041 1.13053 3.87337 1.13053ZM1.59473 2.68001C1.59473 1.42155 2.61491 0.401367 3.87337 0.401367C4.80935 0.401367 5.61285 0.965434 5.96369 1.77176C5.99584 1.76963 6.02825 1.76855 6.06087 1.76855C6.86629 1.76855 7.51921 2.42147 7.51921 3.22689C7.51921 3.28171 7.51616 3.33591 7.51023 3.3893C8.00728 3.69338 8.33952 4.24132 8.33952 4.86751C8.33952 5.82394 7.56418 6.59928 6.60775 6.59928H2.50618C1.39874 6.59928 0.500977 5.70152 0.500977 4.59407C0.500977 3.81305 0.947312 3.13701 1.59815 2.80588C1.59588 2.76418 1.59473 2.72222 1.59473 2.68001ZM4.16245 2.42221C4.30483 2.27983 4.53567 2.27983 4.67805 2.42221L5.7718 3.51596C5.91418 3.65834 5.91418 3.88918 5.7718 4.03156C5.62942 4.17394 5.39858 4.17394 5.2562 4.03156L4.78483 3.56019L4.78483 5.14095C4.78483 5.3423 4.6216 5.50553 4.42025 5.50553C4.21889 5.50553 4.05566 5.3423 4.05566 5.14095L4.05566 3.56019L3.5843 4.03156C3.44192 4.17394 3.21108 4.17394 3.0687 4.03156C2.92632 3.88918 2.92632 3.65834 3.0687 3.51596L4.16245 2.42221Z"
                    fill="white"
                  />
                </svg>
                <span>Upload</span>
              </div>
              <input type="file" @change="handleFileUpload1" class="hidden" />
            </label>
          </div>
          <div v-else class="flex items-center ml-4 mt-[10px]">
            <div class="flex items-center">
              <div>
                <div class="font-sans text-[#333333] text-[12px] font-normal">Dokumen Surat Penawaran</div>
                <div class="mt-[12px] ml-[38px]">
                  <p class="w-[200px] h[-12px] text-[#333333] text-[9.06px]">{{ fileName1 }}</p>
                  <p class="w-[30px] h-[11px] text-[#9E9E9E] text-[7.77px]">{{ fileSize1 }} MB</p>
                </div>
              </div>
              <svg class="w-[30px] h-[30px] absolute left-[205px] mt-[30px]" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="15" r="14.5652" class="fill-[#E2FCF3]" />
                <g transform="translate(9, 8)">
                  <path
                    class="fill-[#0EA976]"
                    d="M10.4206 4.70885C10.4143 4.65309 10.4021 4.59817 10.3842 4.54499V4.49037C10.355 4.42797 10.3161 4.37061 10.2689 4.32044L6.62757 0.679135C6.5774 0.63193 6.52004 0.593007 6.45764 0.563827H6.40302C6.34137 0.528471 6.27328 0.505776 6.20275 0.49707H2.5311C2.04823 0.49707 1.58514 0.688889 1.24371 1.03033C0.902267 1.37177 0.710449 1.83486 0.710449 2.31772V10.8141C0.710449 11.297 0.902267 11.7601 1.24371 12.1015C1.58514 12.4429 2.04823 12.6348 2.5311 12.6348H8.59994C9.08281 12.6348 9.5459 12.4429 9.88734 12.1015C10.2288 11.7601 10.4206 11.297 10.4206 10.8141V4.74526V4.70885ZM6.77929 2.56654L8.35112 4.13837H7.38617C7.22522 4.13837 7.07085 4.07443 6.95704 3.96062C6.84323 3.84681 6.77929 3.69245 6.77929 3.53149V2.56654ZM9.20683 10.8141C9.20683 10.9751 9.14289 11.1294 9.02907 11.2432C8.91526 11.357 8.7609 11.421 8.59994 11.421H2.5311C2.37015 11.421 2.21578 11.357 2.10197 11.2432C1.98816 11.1294 1.92422 10.9751 1.92422 10.8141V2.31772C1.92422 2.15677 1.98816 2.0024 2.10197 1.88859C2.21578 1.77478 2.37015 1.71084 2.5311 1.71084H5.56552V3.53149C5.56552 4.01436 5.75734 4.47745 6.09878 4.81889C6.44022 5.16032 6.90331 5.35214 7.38617 5.35214H9.20683V10.8141Z"
                  />
                </g>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="text-[#0EA976] bg-[#E2FCF3] rounded-full w-[15px] h-[15px] absolute top-[165px] left-[450px]" viewBox="0 0 21 19" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 4.293a1 1 0 00-1.414 0L8 11.586 4.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-[33px] h-[28px] absolute top-[175px] left-[495px]" viewBox="0 0 33 28" fill="none">
          <path d="M24.75 6.91797L31.8317 13.9996L24.75 21.0813" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M1 14H30.64" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <div :class="boxClass2" class="flex flex-col w-[289px] h-[130px] rounded-lg mt-6 ml-[64px] border-[1px] border-[#DEDEDE]">
          <div :class="headerClass2" class="w-[289px] h-[40px] p-4 flex justify-between items-center rounded-t-lg">
            <div class="font-sans text-[14px] font-semibold text-white">{{ fileUploaded2 ? "Proposal" : "Proposal" }}</div>
          </div>
          <div v-if="!fileUploaded2" class="flex flex-col ml-4 mt-[10px]">
            <p class="font-sans text-[#333333] text-[12px] font-normal">Dokumen Proposal</p>
            <label class="bg-[#2671D9] text-white w-[73px] h-[25px] rounded mt-[12px] cursor-pointer inline-flex items-center justify-center text-[8.75px] font-sans font-semibold">
              <div class="flex items-center">
                <svg class="mr-1" width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.87337 1.13053C3.01762 1.13053 2.32389 1.82426 2.32389 2.68001C2.32389 2.77881 2.33309 2.87512 2.35059 2.96824C2.38432 3.14782 2.27992 3.32463 2.10638 3.38182C1.59703 3.54968 1.23014 4.02951 1.23014 4.59407C1.23014 5.29881 1.80145 5.87012 2.50618 5.87012H6.60775C7.16147 5.87012 7.61035 5.42124 7.61035 4.86751C7.61035 4.43975 7.3423 4.07368 6.96375 3.92985C6.77894 3.85963 6.68377 3.65491 6.74921 3.46836C6.77555 3.39326 6.79004 3.31216 6.79004 3.22689C6.79004 2.82418 6.46358 2.49772 6.06087 2.49772C5.98167 2.49772 5.9061 2.51022 5.83562 2.53308C5.74043 2.56395 5.63673 2.55433 5.54884 2.50649C5.46095 2.45864 5.39658 2.37677 5.37084 2.28007C5.19455 1.61791 4.59041 1.13053 3.87337 1.13053ZM1.59473 2.68001C1.59473 1.42155 2.61491 0.401367 3.87337 0.401367C4.80935 0.401367 5.61285 0.965434 5.96369 1.77176C5.99584 1.76963 6.02825 1.76855 6.06087 1.76855C6.86629 1.76855 7.51921 2.42147 7.51921 3.22689C7.51921 3.28171 7.51616 3.33591 7.51023 3.3893C8.00728 3.69338 8.33952 4.24132 8.33952 4.86751C8.33952 5.82394 7.56418 6.59928 6.60775 6.59928H2.50618C1.39874 6.59928 0.500977 5.70152 0.500977 4.59407C0.500977 3.81305 0.947312 3.13701 1.59815 2.80588C1.59588 2.76418 1.59473 2.72222 1.59473 2.68001ZM4.16245 2.42221C4.30483 2.27983 4.53567 2.27983 4.67805 2.42221L5.7718 3.51596C5.91418 3.65834 5.91418 3.88918 5.7718 4.03156C5.62942 4.17394 5.39858 4.17394 5.2562 4.03156L4.78483 3.56019L4.78483 5.14095C4.78483 5.3423 4.6216 5.50553 4.42025 5.50553C4.21889 5.50553 4.05566 5.3423 4.05566 5.14095L4.05566 3.56019L3.5843 4.03156C3.44192 4.17394 3.21108 4.17394 3.0687 4.03156C2.92632 3.88918 2.92632 3.65834 3.0687 3.51596L4.16245 2.42221Z"
                    fill="white"
                  />
                </svg>
                <span>Upload</span>
              </div>
              <input type="file" @change="handleFileUpload2" class="hidden" />
            </label>
          </div>
          <div v-else class="flex items-center ml-4 mt-[10px]">
            <div class="flex items-center">
              <div>
                <div class="font-sans text-[#333333] text-[12px] font-normal">Dokumen Proposal</div>
                <div class="mt-[12px] ml-[38px]">
                  <p class="w-[200px] h[-12px] text-[#333333] text-[9.06px]">{{ fileName2 }}</p>
                  <p class="w-[30px] h-[11px] text-[#9E9E9E] text-[7.77px]">{{ fileSize2 }} MB</p>
                </div>
              </div>
              <svg class="w-[30px] h-[30px] absolute left-[560px] mt-[30px]" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="15" r="14.5652" class="fill-[#E2FCF3]" />
                <g transform="translate(9, 8)">
                  <path
                    class="fill-[#0EA976]"
                    d="M10.4206 4.70885C10.4143 4.65309 10.4021 4.59817 10.3842 4.54499V4.49037C10.355 4.42797 10.3161 4.37061 10.2689 4.32044L6.62757 0.679135C6.5774 0.63193 6.52004 0.593007 6.45764 0.563827H6.40302C6.34137 0.528471 6.27328 0.505776 6.20275 0.49707H2.5311C2.04823 0.49707 1.58514 0.688889 1.24371 1.03033C0.902267 1.37177 0.710449 1.83486 0.710449 2.31772V10.8141C0.710449 11.297 0.902267 11.7601 1.24371 12.1015C1.58514 12.4429 2.04823 12.6348 2.5311 12.6348H8.59994C9.08281 12.6348 9.5459 12.4429 9.88734 12.1015C10.2288 11.7601 10.4206 11.297 10.4206 10.8141V4.74526V4.70885ZM6.77929 2.56654L8.35112 4.13837H7.38617C7.22522 4.13837 7.07085 4.07443 6.95704 3.96062C6.84323 3.84681 6.77929 3.69245 6.77929 3.53149V2.56654ZM9.20683 10.8141C9.20683 10.9751 9.14289 11.1294 9.02907 11.2432C8.91526 11.357 8.7609 11.421 8.59994 11.421H2.5311C2.37015 11.421 2.21578 11.357 2.10197 11.2432C1.98816 11.1294 1.92422 10.9751 1.92422 10.8141V2.31772C1.92422 2.15677 1.98816 2.0024 2.10197 1.88859C2.21578 1.77478 2.37015 1.71084 2.5311 1.71084H5.56552V3.53149C5.56552 4.01436 5.75734 4.47745 6.09878 4.81889C6.44022 5.16032 6.90331 5.35214 7.38617 5.35214H9.20683V10.8141Z"
                  />
                </g>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="text-[#0EA976] bg-[#E2FCF3] rounded-full w-[15px] h-[15px] absolute top-[165px] left-[800px]" viewBox="0 0 21 19" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 4.293a1 1 0 00-1.414 0L8 11.586 4.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-[33px] h-[28px] absolute top-[175px] right-[500px]" viewBox="0 0 33 28" fill="none">
          <path d="M24.75 6.91797L31.8317 13.9996L24.75 21.0813" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M1 14H30.64" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <div :class="boxClass3" class="flex flex-col w-[289px] h-[130px] rounded-lg mt-6 ml-[64px] border-[1px] border-[#DEDEDE]">
          <div :class="headerClass3" class="w-[289px] h-[40px] p-4 flex justify-between items-center rounded-t-lg">
            <div class="font-sans text-[14px] font-semibold text-white">{{ fileUploaded3 ? "Evaluasi" : "Evaluasi" }}</div>
          </div>
          <div v-if="!fileUploaded3" class="flex flex-col ml-4 mt-[10px]">
            <p class="font-sans text-[#333333] text-[12px] font-normal">Dokumen Evaluasi</p>
            <label class="bg-[#2671D9] text-white w-[73px] h-[25px] rounded mt-[12px] cursor-pointer inline-flex items-center justify-center text-[8.75px] font-sans font-semibold">
              <div class="flex items-center">
                <svg class="mr-1" width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.87337 1.13053C3.01762 1.13053 2.32389 1.82426 2.32389 2.68001C2.32389 2.77881 2.33309 2.87512 2.35059 2.96824C2.38432 3.14782 2.27992 3.32463 2.10638 3.38182C1.59703 3.54968 1.23014 4.02951 1.23014 4.59407C1.23014 5.29881 1.80145 5.87012 2.50618 5.87012H6.60775C7.16147 5.87012 7.61035 5.42124 7.61035 4.86751C7.61035 4.43975 7.3423 4.07368 6.96375 3.92985C6.77894 3.85963 6.68377 3.65491 6.74921 3.46836C6.77555 3.39326 6.79004 3.31216 6.79004 3.22689C6.79004 2.82418 6.46358 2.49772 6.06087 2.49772C5.98167 2.49772 5.9061 2.51022 5.83562 2.53308C5.74043 2.56395 5.63673 2.55433 5.54884 2.50649C5.46095 2.45864 5.39658 2.37677 5.37084 2.28007C5.19455 1.61791 4.59041 1.13053 3.87337 1.13053ZM1.59473 2.68001C1.59473 1.42155 2.61491 0.401367 3.87337 0.401367C4.80935 0.401367 5.61285 0.965434 5.96369 1.77176C5.99584 1.76963 6.02825 1.76855 6.06087 1.76855C6.86629 1.76855 7.51921 2.42147 7.51921 3.22689C7.51921 3.28171 7.51616 3.33591 7.51023 3.3893C8.00728 3.69338 8.33952 4.24132 8.33952 4.86751C8.33952 5.82394 7.56418 6.59928 6.60775 6.59928H2.50618C1.39874 6.59928 0.500977 5.70152 0.500977 4.59407C0.500977 3.81305 0.947312 3.13701 1.59815 2.80588C1.59588 2.76418 1.59473 2.72222 1.59473 2.68001ZM4.16245 2.42221C4.30483 2.27983 4.53567 2.27983 4.67805 2.42221L5.7718 3.51596C5.91418 3.65834 5.91418 3.88918 5.7718 4.03156C5.62942 4.17394 5.39858 4.17394 5.2562 4.03156L4.78483 3.56019L4.78483 5.14095C4.78483 5.3423 4.6216 5.50553 4.42025 5.50553C4.21889 5.50553 4.05566 5.3423 4.05566 5.14095L4.05566 3.56019L3.5843 4.03156C3.44192 4.17394 3.21108 4.17394 3.0687 4.03156C2.92632 3.88918 2.92632 3.65834 3.0687 3.51596L4.16245 2.42221Z"
                    fill="white"
                  />
                </svg>
                <span>Upload</span>
              </div>
              <input type="file" @change="handleFileUpload3" class="hidden" />
            </label>
          </div>
          <div v-else class="flex items-center ml-4 mt-[10px]">
            <div class="flex items-center">
              <div>
                <div class="font-sans text-[#333333] text-[12px] font-normal">Dokumen Evaluasi</div>
                <div class="mt-[12px] ml-[38px]">
                  <p class="w-[200px] h[-12px] text-[#333333] text-[9.06px]">{{ fileName3 }}</p>
                  <p class="w-[30px] h-[11px] text-[#9E9E9E] text-[7.77px]">{{ fileSize3 }} MB</p>
                </div>
              </div>
              <svg class="w-[30px] h-[30px] absolute right-[440px] mt-[30px]" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="15" r="14.5652" class="fill-[#E2FCF3]" />
                <g transform="translate(9, 8)">
                  <path
                    class="fill-[#0EA976]"
                    d="M10.4206 4.70885C10.4143 4.65309 10.4021 4.59817 10.3842 4.54499V4.49037C10.355 4.42797 10.3161 4.37061 10.2689 4.32044L6.62757 0.679135C6.5774 0.63193 6.52004 0.593007 6.45764 0.563827H6.40302C6.34137 0.528471 6.27328 0.505776 6.20275 0.49707H2.5311C2.04823 0.49707 1.58514 0.688889 1.24371 1.03033C0.902267 1.37177 0.710449 1.83486 0.710449 2.31772V10.8141C0.710449 11.297 0.902267 11.7601 1.24371 12.1015C1.58514 12.4429 2.04823 12.6348 2.5311 12.6348H8.59994C9.08281 12.6348 9.5459 12.4429 9.88734 12.1015C10.2288 11.7601 10.4206 11.297 10.4206 10.8141V4.74526V4.70885ZM6.77929 2.56654L8.35112 4.13837H7.38617C7.22522 4.13837 7.07085 4.07443 6.95704 3.96062C6.84323 3.84681 6.77929 3.69245 6.77929 3.53149V2.56654ZM9.20683 10.8141C9.20683 10.9751 9.14289 11.1294 9.02907 11.2432C8.91526 11.357 8.7609 11.421 8.59994 11.421H2.5311C2.37015 11.421 2.21578 11.357 2.10197 11.2432C1.98816 11.1294 1.92422 10.9751 1.92422 10.8141V2.31772C1.92422 2.15677 1.98816 2.0024 2.10197 1.88859C2.21578 1.77478 2.37015 1.71084 2.5311 1.71084H5.56552V3.53149C5.56552 4.01436 5.75734 4.47745 6.09878 4.81889C6.44022 5.16032 6.90331 5.35214 7.38617 5.35214H9.20683V10.8141Z"
                  />
                </g>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="text-[#0EA976] bg-[#E2FCF3] rounded-full w-[15px] h-[15px] absolute top-[165px] right-[212px]" viewBox="0 0 21 19" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 4.293a1 1 0 00-1.414 0L8 11.586 4.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        <svg width="28" height="33" class="w-[33px] h-[28px] absolute top-[260px] right-[320px]" viewBox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.1221 24.75L14.3405 31.8317L7.55898 24.75" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M14.3408 1L14.3408 30.64" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <div :class="boxClass4" class="flex flex-col w-[289px] h-[130px] absolute top-[280px] right-[196px] rounded-lg mt-6 ml-[64px] border-[1px] border-[#DEDEDE]">
          <div :class="headerClass4" class="w-[289px] h-[40px] p-4 flex justify-between items-center rounded-t-lg">
            <div class="font-sans text-[14px] font-semibold text-white">{{ fileUploaded4 ? "Negosiasi" : "Negosiasi" }}</div>
          </div>
          <div v-if="!fileUploaded4" class="flex flex-col ml-4 mt-[10px]">
            <p class="font-sans text-[#333333] text-[12px] font-normal">Dokumen Negosiasi</p>
            <label class="bg-[#2671D9] text-white w-[73px] h-[25px] rounded mt-[12px] cursor-pointer inline-flex items-center justify-center text-[8.75px] font-sans font-semibold">
              <div class="flex items-center">
                <svg class="mr-1" width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.87337 1.13053C3.01762 1.13053 2.32389 1.82426 2.32389 2.68001C2.32389 2.77881 2.33309 2.87512 2.35059 2.96824C2.38432 3.14782 2.27992 3.32463 2.10638 3.38182C1.59703 3.54968 1.23014 4.02951 1.23014 4.59407C1.23014 5.29881 1.80145 5.87012 2.50618 5.87012H6.60775C7.16147 5.87012 7.61035 5.42124 7.61035 4.86751C7.61035 4.43975 7.3423 4.07368 6.96375 3.92985C6.77894 3.85963 6.68377 3.65491 6.74921 3.46836C6.77555 3.39326 6.79004 3.31216 6.79004 3.22689C6.79004 2.82418 6.46358 2.49772 6.06087 2.49772C5.98167 2.49772 5.9061 2.51022 5.83562 2.53308C5.74043 2.56395 5.63673 2.55433 5.54884 2.50649C5.46095 2.45864 5.39658 2.37677 5.37084 2.28007C5.19455 1.61791 4.59041 1.13053 3.87337 1.13053ZM1.59473 2.68001C1.59473 1.42155 2.61491 0.401367 3.87337 0.401367C4.80935 0.401367 5.61285 0.965434 5.96369 1.77176C5.99584 1.76963 6.02825 1.76855 6.06087 1.76855C6.86629 1.76855 7.51921 2.42147 7.51921 3.22689C7.51921 3.28171 7.51616 3.33591 7.51023 3.3893C8.00728 3.69338 8.33952 4.24132 8.33952 4.86751C8.33952 5.82394 7.56418 6.59928 6.60775 6.59928H2.50618C1.39874 6.59928 0.500977 5.70152 0.500977 4.59407C0.500977 3.81305 0.947312 3.13701 1.59815 2.80588C1.59588 2.76418 1.59473 2.72222 1.59473 2.68001ZM4.16245 2.42221C4.30483 2.27983 4.53567 2.27983 4.67805 2.42221L5.7718 3.51596C5.91418 3.65834 5.91418 3.88918 5.7718 4.03156C5.62942 4.17394 5.39858 4.17394 5.2562 4.03156L4.78483 3.56019L4.78483 5.14095C4.78483 5.3423 4.6216 5.50553 4.42025 5.50553C4.21889 5.50553 4.05566 5.3423 4.05566 5.14095L4.05566 3.56019L3.5843 4.03156C3.44192 4.17394 3.21108 4.17394 3.0687 4.03156C2.92632 3.88918 2.92632 3.65834 3.0687 3.51596L4.16245 2.42221Z"
                    fill="white"
                  />
                </svg>
                <span>Upload</span>
              </div>
              <input type="file" @change="handleFileUpload4" class="hidden" />
            </label>
          </div>
          <div v-else class="flex items-center ml-4 mt-[10px]">
            <div class="flex items-center">
              <div>
                <div class="font-sans text-[#333333] text-[12px] font-normal">Dokumen Negosiasi</div>
                <div class="mt-[12px] ml-[38px]">
                  <p class="w-[200px] h[-12px] text-[#333333] text-[9.06px]">{{ fileName4 }}</p>
                  <p class="w-[30px] h-[11px] text-[#9E9E9E] text-[7.77px]">{{ fileSize4 }} MB</p>
                </div>
              </div>
              <svg class="w-[30px] h-[30px] absolute right-[240px] mt-[30px]" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="15" r="14.5652" class="fill-[#E2FCF3]" />
                <g transform="translate(9, 8)">
                  <path
                    class="fill-[#0EA976]"
                    d="M10.4206 4.70885C10.4143 4.65309 10.4021 4.59817 10.3842 4.54499V4.49037C10.355 4.42797 10.3161 4.37061 10.2689 4.32044L6.62757 0.679135C6.5774 0.63193 6.52004 0.593007 6.45764 0.563827H6.40302C6.34137 0.528471 6.27328 0.505776 6.20275 0.49707H2.5311C2.04823 0.49707 1.58514 0.688889 1.24371 1.03033C0.902267 1.37177 0.710449 1.83486 0.710449 2.31772V10.8141C0.710449 11.297 0.902267 11.7601 1.24371 12.1015C1.58514 12.4429 2.04823 12.6348 2.5311 12.6348H8.59994C9.08281 12.6348 9.5459 12.4429 9.88734 12.1015C10.2288 11.7601 10.4206 11.297 10.4206 10.8141V4.74526V4.70885ZM6.77929 2.56654L8.35112 4.13837H7.38617C7.22522 4.13837 7.07085 4.07443 6.95704 3.96062C6.84323 3.84681 6.77929 3.69245 6.77929 3.53149V2.56654ZM9.20683 10.8141C9.20683 10.9751 9.14289 11.1294 9.02907 11.2432C8.91526 11.357 8.7609 11.421 8.59994 11.421H2.5311C2.37015 11.421 2.21578 11.357 2.10197 11.2432C1.98816 11.1294 1.92422 10.9751 1.92422 10.8141V2.31772C1.92422 2.15677 1.98816 2.0024 2.10197 1.88859C2.21578 1.77478 2.37015 1.71084 2.5311 1.71084H5.56552V3.53149C5.56552 4.01436 5.75734 4.47745 6.09878 4.81889C6.44022 5.16032 6.90331 5.35214 7.38617 5.35214H9.20683V10.8141Z"
                  />
                </g>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="text-[#0EA976] bg-[#E2FCF3] rounded-full w-[15px] h-[15px] absolute top-[52px] right-[10px]" viewBox="0 0 21 19" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 4.293a1 1 0 00-1.414 0L8 11.586 4.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        <svg width="33" height="29" class="w-[33px] h-[28px] absolute bottom-[270px] right-[500px]" viewBox="0 0 33 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.09082 7.83984L1.00915 14.9215L8.09082 22.0032" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M31.8408 14.9209H2.20082" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <div :class="boxClass5" class="flex flex-col absolute bottom-[229px] left-[480px] w-[289px] h-[130px] rounded-lg mt-6 ml-[64px] border-[1px] border-[#DEDEDE]">
          <div :class="headerClass5" class="w-full h-[40px] p-4 flex justify-between items-center rounded-t-lg">
            <div class="font-sans text-[14px] font-semibold text-white">{{ fileUploaded5 ? "BAK Pemilihan Mitra" : "BAK Pemilihan Mitra" }}</div>
          </div>
          <div v-if="!fileUploaded5" class="flex flex-col ml-4 mt-[10px]">
            <p class="font-sans text-[#333333] text-[12px] font-normal">Dokumen BAK Pemilihan Mitra</p>
            <label class="bg-[#2671D9] text-white w-[73px] h-[25px] rounded mt-[12px] cursor-pointer inline-flex items-center justify-center text-[8.75px] font-sans font-semibold">
              <div class="flex items-center">
                <svg class="mr-1" width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.87337 1.13053C3.01762 1.13053 2.32389 1.82426 2.32389 2.68001C2.32389 2.77881 2.33309 2.87512 2.35059 2.96824C2.38432 3.14782 2.27992 3.32463 2.10638 3.38182C1.59703 3.54968 1.23014 4.02951 1.23014 4.59407C1.23014 5.29881 1.80145 5.87012 2.50618 5.87012H6.60775C7.16147 5.87012 7.61035 5.42124 7.61035 4.86751C7.61035 4.43975 7.3423 4.07368 6.96375 3.92985C6.77894 3.85963 6.68377 3.65491 6.74921 3.46836C6.77555 3.39326 6.79004 3.31216 6.79004 3.22689C6.79004 2.82418 6.46358 2.49772 6.06087 2.49772C5.98167 2.49772 5.9061 2.51022 5.83562 2.53308C5.74043 2.56395 5.63673 2.55433 5.54884 2.50649C5.46095 2.45864 5.39658 2.37677 5.37084 2.28007C5.19455 1.61791 4.59041 1.13053 3.87337 1.13053ZM1.59473 2.68001C1.59473 1.42155 2.61491 0.401367 3.87337 0.401367C4.80935 0.401367 5.61285 0.965434 5.96369 1.77176C5.99584 1.76963 6.02825 1.76855 6.06087 1.76855C6.86629 1.76855 7.51921 2.42147 7.51921 3.22689C7.51921 3.28171 7.51616 3.33591 7.51023 3.3893C8.00728 3.69338 8.33952 4.24132 8.33952 4.86751C8.33952 5.82394 7.56418 6.59928 6.60775 6.59928H2.50618C1.39874 6.59928 0.500977 5.70152 0.500977 4.59407C0.500977 3.81305 0.947312 3.13701 1.59815 2.80588C1.59588 2.76418 1.59473 2.72222 1.59473 2.68001ZM4.16245 2.42221C4.30483 2.27983 4.53567 2.27983 4.67805 2.42221L5.7718 3.51596C5.91418 3.65834 5.91418 3.88918 5.7718 4.03156C5.62942 4.17394 5.39858 4.17394 5.2562 4.03156L4.78483 3.56019L4.78483 5.14095C4.78483 5.3423 4.6216 5.50553 4.42025 5.50553C4.21889 5.50553 4.05566 5.3423 4.05566 5.14095L4.05566 3.56019L3.5843 4.03156C3.44192 4.17394 3.21108 4.17394 3.0687 4.03156C2.92632 3.88918 2.92632 3.65834 3.0687 3.51596L4.16245 2.42221Z"
                    fill="white"
                  />
                </svg>
                <span>Upload</span>
              </div>
              <input type="file" @change="handleFileUpload5" class="hidden" />
            </label>
          </div>
          <div v-else class="flex items-center ml-4 mt-[10px]">
            <div class="flex items-center">
              <div>
                <div class="font-sans text-[#333333] text-[12px] font-normal">Dokumen BAK Pemilihan Mitra</div>
                <div class="mt-[12px] ml-[38px]">
                  <p class="w-[200px] h[-12px] text-[#333333] text-[9.06px]">{{ fileName5 }}</p>
                  <p class="w-[30px] h-[11px] text-[#9E9E9E] text-[7.77px]">{{ fileSize5 }} MB</p>
                </div>
              </div>
              <svg class="w-[30px] h-[30px] absolute right-[240px] mt-[30px]" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="15" r="14.5652" class="fill-[#E2FCF3]" />
                <g transform="translate(9, 8)">
                  <path
                    class="fill-[#0EA976]"
                    d="M10.4206 4.70885C10.4143 4.65309 10.4021 4.59817 10.3842 4.54499V4.49037C10.355 4.42797 10.3161 4.37061 10.2689 4.32044L6.62757 0.679135C6.5774 0.63193 6.52004 0.593007 6.45764 0.563827H6.40302C6.34137 0.528471 6.27328 0.505776 6.20275 0.49707H2.5311C2.04823 0.49707 1.58514 0.688889 1.24371 1.03033C0.902267 1.37177 0.710449 1.83486 0.710449 2.31772V10.8141C0.710449 11.297 0.902267 11.7601 1.24371 12.1015C1.58514 12.4429 2.04823 12.6348 2.5311 12.6348H8.59994C9.08281 12.6348 9.5459 12.4429 9.88734 12.1015C10.2288 11.7601 10.4206 11.297 10.4206 10.8141V4.74526V4.70885ZM6.77929 2.56654L8.35112 4.13837H7.38617C7.22522 4.13837 7.07085 4.07443 6.95704 3.96062C6.84323 3.84681 6.77929 3.69245 6.77929 3.53149V2.56654ZM9.20683 10.8141C9.20683 10.9751 9.14289 11.1294 9.02907 11.2432C8.91526 11.357 8.7609 11.421 8.59994 11.421H2.5311C2.37015 11.421 2.21578 11.357 2.10197 11.2432C1.98816 11.1294 1.92422 10.9751 1.92422 10.8141V2.31772C1.92422 2.15677 1.98816 2.0024 2.10197 1.88859C2.21578 1.77478 2.37015 1.71084 2.5311 1.71084H5.56552V3.53149C5.56552 4.01436 5.75734 4.47745 6.09878 4.81889C6.44022 5.16032 6.90331 5.35214 7.38617 5.35214H9.20683V10.8141Z"
                  />
                </g>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="text-[#0EA976] bg-[#E2FCF3] rounded-full w-[15px] h-[15px] absolute top-[52px] right-[10px]" viewBox="0 0 21 19" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 4.293a1 1 0 00-1.414 0L8 11.586 4.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        <svg width="33" height="29" class="w-[33px] h-[28px] absolute bottom-[270px] left-[500px]" viewBox="0 0 33 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.09082 7.83984L1.00915 14.9215L8.09082 22.0032" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M31.8408 14.9209H2.20082" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <div :class="boxClass6" class="flex flex-col absolute bottom-[229px] left-[127px] w-[289px] h-[130px] rounded-lg mt-6 ml-[64px] border-[1px] border-[#DEDEDE]">
          <div :class="headerClass6" class="w-full h-[40px] p-4 flex justify-between items-center rounded-t-lg">
            <div class="font-sans text-[14px] font-semibold text-white">{{ fileUploaded6 ? "Surat Pesanan" : "Surat Pesanan" }}</div>
          </div>
          <div v-if="!fileUploaded6" class="flex flex-col ml-4 mt-[10px]">
            <p class="font-sans text-[#333333] text-[12px] font-normal">Dokumen Surat Pesanan</p>
            <label class="bg-[#2671D9] text-white w-[73px] h-[25px] rounded mt-[12px] cursor-pointer inline-flex items-center justify-center text-[8.75px] font-sans font-semibold">
              <div class="flex items-center">
                <svg class="mr-1" width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.87337 1.13053C3.01762 1.13053 2.32389 1.82426 2.32389 2.68001C2.32389 2.77881 2.33309 2.87512 2.35059 2.96824C2.38432 3.14782 2.27992 3.32463 2.10638 3.38182C1.59703 3.54968 1.23014 4.02951 1.23014 4.59407C1.23014 5.29881 1.80145 5.87012 2.50618 5.87012H6.60775C7.16147 5.87012 7.61035 5.42124 7.61035 4.86751C7.61035 4.43975 7.3423 4.07368 6.96375 3.92985C6.77894 3.85963 6.68377 3.65491 6.74921 3.46836C6.77555 3.39326 6.79004 3.31216 6.79004 3.22689C6.79004 2.82418 6.46358 2.49772 6.06087 2.49772C5.98167 2.49772 5.9061 2.51022 5.83562 2.53308C5.74043 2.56395 5.63673 2.55433 5.54884 2.50649C5.46095 2.45864 5.39658 2.37677 5.37084 2.28007C5.19455 1.61791 4.59041 1.13053 3.87337 1.13053ZM1.59473 2.68001C1.59473 1.42155 2.61491 0.401367 3.87337 0.401367C4.80935 0.401367 5.61285 0.965434 5.96369 1.77176C5.99584 1.76963 6.02825 1.76855 6.06087 1.76855C6.86629 1.76855 7.51921 2.42147 7.51921 3.22689C7.51921 3.28171 7.51616 3.33591 7.51023 3.3893C8.00728 3.69338 8.33952 4.24132 8.33952 4.86751C8.33952 5.82394 7.56418 6.59928 6.60775 6.59928H2.50618C1.39874 6.59928 0.500977 5.70152 0.500977 4.59407C0.500977 3.81305 0.947312 3.13701 1.59815 2.80588C1.59588 2.76418 1.59473 2.72222 1.59473 2.68001ZM4.16245 2.42221C4.30483 2.27983 4.53567 2.27983 4.67805 2.42221L5.7718 3.51596C5.91418 3.65834 5.91418 3.88918 5.7718 4.03156C5.62942 4.17394 5.39858 4.17394 5.2562 4.03156L4.78483 3.56019L4.78483 5.14095C4.78483 5.3423 4.6216 5.50553 4.42025 5.50553C4.21889 5.50553 4.05566 5.3423 4.05566 5.14095L4.05566 3.56019L3.5843 4.03156C3.44192 4.17394 3.21108 4.17394 3.0687 4.03156C2.92632 3.88918 2.92632 3.65834 3.0687 3.51596L4.16245 2.42221Z"
                    fill="white"
                  />
                </svg>
                <span>Upload</span>
              </div>
              <input type="file" @change="handleFileUpload6" class="hidden" />
            </label>
          </div>
          <div v-else class="flex items-center ml-4 mt-[10px]">
            <div class="flex items-center">
              <div>
                <div class="font-sans text-[#333333] text-[12px] font-normal">Dokumen Surat Pesanan</div>
                <div class="mt-[12px] ml-[38px]">
                  <p class="w-[200px] h[-12px] text-[#333333] text-[9.06px]">{{ fileName6 }}</p>
                  <p class="w-[30px] h-[11px] text-[#9E9E9E] text-[7.77px]">{{ fileSize6 }} MB</p>
                </div>
              </div>
              <svg class="w-[30px] h-[30px] absolute right-[240px] mt-[30px]" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="15" r="14.5652" class="fill-[#E2FCF3]" />
                <g transform="translate(9, 8)">
                  <path
                    class="fill-[#0EA976]"
                    d="M10.4206 4.70885C10.4143 4.65309 10.4021 4.59817 10.3842 4.54499V4.49037C10.355 4.42797 10.3161 4.37061 10.2689 4.32044L6.62757 0.679135C6.5774 0.63193 6.52004 0.593007 6.45764 0.563827H6.40302C6.34137 0.528471 6.27328 0.505776 6.20275 0.49707H2.5311C2.04823 0.49707 1.58514 0.688889 1.24371 1.03033C0.902267 1.37177 0.710449 1.83486 0.710449 2.31772V10.8141C0.710449 11.297 0.902267 11.7601 1.24371 12.1015C1.58514 12.4429 2.04823 12.6348 2.5311 12.6348H8.59994C9.08281 12.6348 9.5459 12.4429 9.88734 12.1015C10.2288 11.7601 10.4206 11.297 10.4206 10.8141V4.74526V4.70885ZM6.77929 2.56654L8.35112 4.13837H7.38617C7.22522 4.13837 7.07085 4.07443 6.95704 3.96062C6.84323 3.84681 6.77929 3.69245 6.77929 3.53149V2.56654ZM9.20683 10.8141C9.20683 10.9751 9.14289 11.1294 9.02907 11.2432C8.91526 11.357 8.7609 11.421 8.59994 11.421H2.5311C2.37015 11.421 2.21578 11.357 2.10197 11.2432C1.98816 11.1294 1.92422 10.9751 1.92422 10.8141V2.31772C1.92422 2.15677 1.98816 2.0024 2.10197 1.88859C2.21578 1.77478 2.37015 1.71084 2.5311 1.71084H5.56552V3.53149C5.56552 4.01436 5.75734 4.47745 6.09878 4.81889C6.44022 5.16032 6.90331 5.35214 7.38617 5.35214H9.20683V10.8141Z"
                  />
                </g>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="text-[#0EA976] bg-[#E2FCF3] rounded-full w-[15px] h-[15px] absolute top-[52px] right-[10px]" viewBox="0 0 21 19" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 4.293a1 1 0 00-1.414 0L8 11.586 4.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        <svg width="28" height="33" class="w-[33px] h-[28px] absolute bottom-[185px] left-[320px]" viewBox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.1221 24.75L14.3405 31.8317L7.55898 24.75" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M14.3408 1L14.3408 30.64" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <div :class="boxClass7" class="flex flex-col absolute bottom-[30px] left-[128px] w-[289px] h-[130px] rounded-lg mt-6 ml-[64px] border-[1px] border-[#DEDEDE]">
          <div :class="headerClass7" class="w-full h-[40px] p-4 flex justify-between items-center rounded-t-lg">
            <div class="font-sans text-[14px] font-semibold text-white">{{ fileUploaded7 ? "PKS" : "PKS" }}</div>
          </div>
          <div v-if="!fileUploaded7" class="flex flex-col ml-4 mt-[10px]">
            <p class="font-sans text-[#333333] text-[12px] font-normal">Dokumen PKS</p>
            <label class="bg-[#2671D9] text-white w-[73px] h-[25px] rounded mt-[12px] cursor-pointer inline-flex items-center justify-center text-[8.75px] font-sans font-semibold">
              <div class="flex items-center">
                <svg class="mr-1" width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.87337 1.13053C3.01762 1.13053 2.32389 1.82426 2.32389 2.68001C2.32389 2.77881 2.33309 2.87512 2.35059 2.96824C2.38432 3.14782 2.27992 3.32463 2.10638 3.38182C1.59703 3.54968 1.23014 4.02951 1.23014 4.59407C1.23014 5.29881 1.80145 5.87012 2.50618 5.87012H6.60775C7.16147 5.87012 7.61035 5.42124 7.61035 4.86751C7.61035 4.43975 7.3423 4.07368 6.96375 3.92985C6.77894 3.85963 6.68377 3.65491 6.74921 3.46836C6.77555 3.39326 6.79004 3.31216 6.79004 3.22689C6.79004 2.82418 6.46358 2.49772 6.06087 2.49772C5.98167 2.49772 5.9061 2.51022 5.83562 2.53308C5.74043 2.56395 5.63673 2.55433 5.54884 2.50649C5.46095 2.45864 5.39658 2.37677 5.37084 2.28007C5.19455 1.61791 4.59041 1.13053 3.87337 1.13053ZM1.59473 2.68001C1.59473 1.42155 2.61491 0.401367 3.87337 0.401367C4.80935 0.401367 5.61285 0.965434 5.96369 1.77176C5.99584 1.76963 6.02825 1.76855 6.06087 1.76855C6.86629 1.76855 7.51921 2.42147 7.51921 3.22689C7.51921 3.28171 7.51616 3.33591 7.51023 3.3893C8.00728 3.69338 8.33952 4.24132 8.33952 4.86751C8.33952 5.82394 7.56418 6.59928 6.60775 6.59928H2.50618C1.39874 6.59928 0.500977 5.70152 0.500977 4.59407C0.500977 3.81305 0.947312 3.13701 1.59815 2.80588C1.59588 2.76418 1.59473 2.72222 1.59473 2.68001ZM4.16245 2.42221C4.30483 2.27983 4.53567 2.27983 4.67805 2.42221L5.7718 3.51596C5.91418 3.65834 5.91418 3.88918 5.7718 4.03156C5.62942 4.17394 5.39858 4.17394 5.2562 4.03156L4.78483 3.56019L4.78483 5.14095C4.78483 5.3423 4.6216 5.50553 4.42025 5.50553C4.21889 5.50553 4.05566 5.3423 4.05566 5.14095L4.05566 3.56019L3.5843 4.03156C3.44192 4.17394 3.21108 4.17394 3.0687 4.03156C2.92632 3.88918 2.92632 3.65834 3.0687 3.51596L4.16245 2.42221Z"
                    fill="white"
                  />
                </svg>
                <span>Upload</span>
              </div>
              <input type="file" @change="handleFileUpload7" class="hidden" />
            </label>
          </div>
          <div v-else class="flex items-center ml-4 mt-[10px]">
            <div class="flex items-center">
              <div>
                <div class="font-sans text-[#333333] text-[12px] font-normal">Dokumen PKS</div>
                <div class="mt-[12px] ml-[38px]">
                  <p class="w-[200px] h[-12px] text-[#333333] text-[9.06px]">{{ fileName7 }}</p>
                  <p class="w-[30px] h-[11px] text-[#9E9E9E] text-[7.77px]">{{ fileSize7 }} MB</p>
                </div>
              </div>
              <svg class="w-[30px] h-[30px] absolute right-[240px] mt-[30px]" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="15" r="14.5652" class="fill-[#E2FCF3]" />
                <g transform="translate(9, 8)">
                  <path
                    class="fill-[#0EA976]"
                    d="M10.4206 4.70885C10.4143 4.65309 10.4021 4.59817 10.3842 4.54499V4.49037C10.355 4.42797 10.3161 4.37061 10.2689 4.32044L6.62757 0.679135C6.5774 0.63193 6.52004 0.593007 6.45764 0.563827H6.40302C6.34137 0.528471 6.27328 0.505776 6.20275 0.49707H2.5311C2.04823 0.49707 1.58514 0.688889 1.24371 1.03033C0.902267 1.37177 0.710449 1.83486 0.710449 2.31772V10.8141C0.710449 11.297 0.902267 11.7601 1.24371 12.1015C1.58514 12.4429 2.04823 12.6348 2.5311 12.6348H8.59994C9.08281 12.6348 9.5459 12.4429 9.88734 12.1015C10.2288 11.7601 10.4206 11.297 10.4206 10.8141V4.74526V4.70885ZM6.77929 2.56654L8.35112 4.13837H7.38617C7.22522 4.13837 7.07085 4.07443 6.95704 3.96062C6.84323 3.84681 6.77929 3.69245 6.77929 3.53149V2.56654ZM9.20683 10.8141C9.20683 10.9751 9.14289 11.1294 9.02907 11.2432C8.91526 11.357 8.7609 11.421 8.59994 11.421H2.5311C2.37015 11.421 2.21578 11.357 2.10197 11.2432C1.98816 11.1294 1.92422 10.9751 1.92422 10.8141V2.31772C1.92422 2.15677 1.98816 2.0024 2.10197 1.88859C2.21578 1.77478 2.37015 1.71084 2.5311 1.71084H5.56552V3.53149C5.56552 4.01436 5.75734 4.47745 6.09878 4.81889C6.44022 5.16032 6.90331 5.35214 7.38617 5.35214H9.20683V10.8141Z"
                  />
                </g>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="text-[#0EA976] bg-[#E2FCF3] rounded-full w-[15px] h-[15px] absolute top-[52px] right-[10px]" viewBox="0 0 21 19" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 4.293a1 1 0 00-1.414 0L8 11.586 4.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
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
      fileUploaded1: false,
      fileName1: "",
      fileSize1: "",
      fileUploaded2: false,
      fileName2: "",
      fileSize2: "",
      fileUploaded3: false,
      fileName3: "",
      fileSize3: "",
      fileUploaded4: false,
      fileName4: "",
      fileSize4: "",
      fileUploaded5: false,
      fileName5: "",
      fileSize5: "",
      fileUploaded6: false,
      fileName6: "",
      fileSize6: "",
      fileUploaded7: false,
      fileName7: "",
      fileSize7: "",
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
    boxClass4() {
      return this.fileUploaded4 ? "border-[#0EA976]" : "border-[#FFC107]";
    },
    headerClass4() {
      return this.fileUploaded4 ? "bg-[#0EA976]" : "bg-[#FFC107]";
    },
    boxClass5() {
      return this.fileUploaded5 ? "border-[#0EA976]" : "border-[#FFC107]";
    },
    headerClass5() {
      return this.fileUploaded5 ? "bg-[#0EA976]" : "bg-[#FFC107]";
    },
    boxClass6() {
      return this.fileUploaded6 ? "border-[#0EA976]" : "border-[#FFC107]";
    },
    headerClass6() {
      return this.fileUploaded6 ? "bg-[#0EA976]" : "bg-[#FFC107]";
    },
    boxClass7() {
      return this.fileUploaded7 ? "border-[#0EA976]" : "border-[#FFC107]";
    },
    headerClass7() {
      return this.fileUploaded7 ? "bg-[#0EA976]" : "bg-[#FFC107]";
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
    handleFileUpload4(event) {
      const file = event.target.files[0];
      if (file) {
        this.fileUploaded4 = true;
        this.fileName4 = file.name;
        this.fileSize4 = (file.size / 1024 / 1024).toFixed(2);
      }
    },
    handleFileUpload5(event) {
      const file = event.target.files[0];
      if (file) {
        this.fileUploaded5 = true;
        this.fileName5 = file.name;
        this.fileSize5 = (file.size / 1024 / 1024).toFixed(2);
      }
    },
    handleFileUpload6(event) {
      const file = event.target.files[0];
      if (file) {
        this.fileUploaded6 = true;
        this.fileName6 = file.name;
        this.fileSize6 = (file.size / 1024 / 1024).toFixed(2);
      }
    },
    handleFileUpload7(event) {
      const file = event.target.files[0];
      if (file) {
        this.fileUploaded7 = true;
        this.fileName7 = file.name;
        this.fileSize7 = (file.size / 1024 / 1024).toFixed(2);
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
