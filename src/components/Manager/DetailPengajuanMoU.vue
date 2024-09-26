<template>
  <div>
    <div class="flex w-auto h-[54px] rounded-lg bg-[#FFFFFF] border-collapse">
      <button @click="navigateToDetail">
        <h1 class="w-[51px] h-[22px] font-sans text-[#2671D9] text-[14px] font-semibold ml-6 mt-4 mb-4">Proses</h1>
      </button>
      <svg width="8" height="12" class="mt-[21px] mr-1" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.20711 5.29289C7.59763 5.68342 7.59763 6.31658 7.20711 6.70711L2.20711 11.7071C1.81658 12.0976 1.18342 12.0976 0.792892 11.7071C0.402369 11.3166 0.402369 10.6834 0.792892 10.2929L5.08579 6L0.792893 1.70711C0.402369 1.31658 0.402369 0.683417 0.792893 0.292893C1.18342 -0.0976314 1.81658 -0.0976313 2.20711 0.292893L7.20711 5.29289Z"
          fill="#7F7F80"
        />
      </svg>
      <span class="w-[119px] h-[22px] font-sans text-[#7F7F80] text-[14px] font-semibold mt-4">Detail Pengajuan</span>
    </div>
    <div class="px-4 py-3">
      <div class="relative h-auto w-[1086px] rounded-lg bg-[#FFFFFF] border-collapse">
        <div class="flex">
          <svg class="ml-4 mt-[18px]" width="6" height="28" viewBox="0 0 6 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="6" height="28" fill="#1F5AAD" />
          </svg>
          <h1 class="w-[825px] h-[28px] font-sans text-[20px] text-[#333333] mt-4 ml-[5px] font-semibold">Detail Pengajuan</h1>
          <div class="relative mt-4 mb-4 items-start w-[209px] h-[72px] border-[1px] border-[#E5E7E9] rounded-md">
            <div class="w-[209px] h-[29px] border-[1px] border-[#E5E7E9] rounded-tl-md rounded-tr-md bg-[#FFB200]">
              <h1 class="mt-[7px] ml-4 w-[177px] h-[15px] font-sans text-[10px] text-[#333333] font-medium">Progress Kemitraan</h1>
            </div>
            <div class="flex items-center">
              <h1 class="w-[79px] h-[27px] font-sans text-[18px] font-bold text-[#FFB200] ml-4 mb-2">Proposal</h1>
              <button @click="showPopup = true" class="ml-[80px]">
                <svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_1290_16355)">
                    <g opacity="0.4" filter="url(#filter1_d_1290_16355)">
                      <path d="M19 26C23.1421 26 26.5 22.6421 26.5 18.5C26.5 14.3579 23.1421 11 19 11C14.8579 11 11.5 14.3579 11.5 18.5C11.5 22.6421 14.8579 26 19 26Z" fill="#FFB200" />
                    </g>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21.3536 18.6464C21.5488 18.8417 21.5488 19.1583 21.3536 19.3536L18.8536 21.8536C18.6583 22.0488 18.3417 22.0488 18.1464 21.8536C17.9512 21.6583 17.9512 21.3417 18.1464 21.1464L20.2929 19L18.1464 16.8536C17.9512 16.6583 17.9512 16.3417 18.1464 16.1464C18.3417 15.9512 18.6583 15.9512 18.8536 16.1464L21.3536 18.6464Z"
                      fill="#F08800"
                    />
                  </g>
                  <defs>
                    <filter id="filter0_d_1290_16355" x="6" y="6.5" width="26" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="1" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.778759 0 0 0 0 0.267318 0 0 0 1 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1290_16355" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1290_16355" result="shape" />
                    </filter>
                    <filter id="filter1_d_1290_16355" x="0.5" y="0" width="45" height="45" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dx="4" dy="4" />
                      <feGaussianBlur stdDeviation="7.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.763946 0 0 0 0 0.970231 0 0 0 0 0.498223 0 0 0 0.5 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1290_16355" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1290_16355" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </button>
              <ProgressMoUPopup :isVisible="showPopup" @close="showPopup = false" />
            </div>
          </div>
        </div>
        <div class="flex items-center mt-4 ml-4 w-[1046px] h-[48px] rounded-lg bg-[#FFFFFF] border-[#E5E7E9] border-[1px]">
          <div class="w-[30px] h-[48px] bg-[#4791F2] rounded-tl-md rounded-bl-md"></div>
          <div class="text-[16px] font-sans font-semibold text-[#333333] ml-[10px] mt-[14.5px] mb-[14.5px]">Informasi Umum</div>
          <button @click="toggleDropdownArrow" class="ml-auto mr-4 flex py-1 px-1 rounded-full hover:bg-[#FFFFFF]">
            <svg :class="{ 'rotate-180': isDropdownArrowOpen }" class="w-4 h-4 text-[#2671D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <transition name="fade">
          <div v-if="isDropdownArrowOpen" class="flex flex-col w-[1046px] h-[320px] bg-[#FFFFFF] border-collapse rounded-bl-md rounded-br-md border-[#E5E7E9] border-[1px] ml-4 px-6 py-6">
            <div class="flex items-center">
              <h1 class="w-[130px] h-[17px] font-sans text-[#333333] text-[14px] font-semibold">No. Permintaan</h1>
              <span class="w-[92px] h-[17px] text-[#7F7F80] font-sans font-thin text-[14px] ml-4">370.526.7356</span>
              <div class="flex">
                <h1 class="w-[130px] h-[17px] font-sans text-[14px] text-[#333333] font-semibold ml-[300px]">Metode Kemitraan</h1>
                <span class="w-[112px] h-[17px] font-sans font-thin text-[#7F7F80] text-[14px] ml-4">Tunjuk Langsung</span>
              </div>
            </div>
            <div class="flex mt-6 items-center">
              <h1 class="w-[130px] h-[17px] font-sans text-[#333333] text-[14px] font-semibold">Judul</h1>
              <span class="w-[182px] h-[17px] text-[#7F7F80] font-sans font-thin text-[14px] ml-4">Uji Coba Aplikasi Kemitraan</span>
              <div class="flex ml-[1px]">
                <h1 class="w-[130px] h-[17px] font-sans text-[14px] text-[#333333] font-semibold ml-[209px]">Jenis Material</h1>
                <span class="w-[112px] h-[17px] font-sans font-thin text-[#7F7F80] text-[14px] ml-4">Material Only</span>
              </div>
            </div>
            <div class="flex mt-6 items-center">
              <h1 class="w-[130px] h-[17px] font-sans text-[#333333] text-[14px] font-semibold">Nomor Anggaran</h1>
              <span class="w-[57px] h-[17px] text-[#7F7F80] font-sans font-thin text-[14px] ml-4">2024113</span>
              <div class="flex ml-[335px]">
                <h1 class="w-[130px] h-[17px] font-sans text-[14px] text-[#333333] font-semibold">Jenis Barang</h1>
                <span class="w-[112px] h-[17px] font-sans font-thin text-[#7F7F80] text-[14px] ml-[17px]">lorem ipsum</span>
              </div>
            </div>
            <div class="flex mt-6 items-center">
              <h1 class="w-[130px] h-[17px] font-sans text-[#333333] text-[14px] font-semibold">Tipe Anggaran</h1>
              <span class="w-[43px] h-[17px] text-[#7F7F80] font-sans font-thin text-[14px] ml-4">Capex</span>
              <div class="flex ml-[348px]">
                <h1 class="w-[130px] h-[17px] font-sans text-[14px] text-[#333333] font-semibold">Pelaksana</h1>
                <span class="w-[112px] h-[17px] font-sans font-thin text-[#7F7F80] text-[14px] ml-[18px]">Derek Klocko</span>
              </div>
            </div>
            <div class="w-[1046px] h-[1px] bg-[#E5E7E9] justify-center transform translate-x-[-2.3%] mt-6"></div>
            <div class="flex items-center mt-6">
              <h1 class="w-[130px] h-[17px] font-sans text-[#333333] text-[14px] font-semibold">Latar Belakang</h1>
              <span class="w-[92px] h-[17px] text-[#7F7F80] font-sans font-thin text-[14px] ml-4">370.526.7356</span>
              <div class="flex">
                <h1 class="w-[130px] h-[17px] font-sans text-[14px] text-[#333333] font-semibold ml-[300px]">Catatan</h1>
                <span class="w-[112px] h-[17px] font-sans font-thin text-[#7F7F80] text-[14px] ml-4">370.526.7356</span>
              </div>
            </div>
            <div class="flex items-center mt-6">
              <h1 class="w-[130px] h-[17px] font-sans text-[#333333] text-[14px] font-semibold">Dibuat Oleh</h1>
              <span class="w-[92px] h-[17px] text-[#7F7F80] font-sans font-thin text-[14px] ml-4">Kenny Carroll</span>
              <div class="flex">
                <h1 class="w-[130px] h-[17px] font-sans text-[14px] text-[#333333] font-semibold ml-[300px]">Tanggal</h1>
                <span class="w-[112px] h-[17px] font-sans font-thin text-[#7F7F80] text-[14px] ml-4">21/3/2023</span>
              </div>
            </div>
          </div>
        </transition>
        <div class="flex items-center mt-4 ml-4 w-[1046px] h-[48px] rounded-lg bg-[#FFFFFF] border-[#E5E7E9] border-[1px]">
          <div class="w-[30px] h-[48px] bg-[#FFA229] rounded-tl-md rounded-bl-md"></div>
          <div class="text-[16px] font-sans font-semibold text-[#333333] ml-[10px] mt-[14.5px] mb-[14.5px]">Lingkup Pekerjaan</div>
          <button @click="toggleDropdownArrow1" class="ml-auto mr-4 flex py-1 px-1 rounded-full hover:bg-[#FFFFFF]">
            <svg :class="{ 'rotate-180': isDropdownArrowOpen1 }" class="w-4 h-4 text-[#2671D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <transition name="fade">
          <div v-if="isDropdownArrowOpen1" class="flex flex-col w-[1046px] h-[270px] bg-[#FFFFFF] border-[#E5E7E9] border-[1px] ml-4 px-6 py-6 rounded-bl-md rounded-br-md">
            <div class="flex items-center">
              <h1 class="w-[130px] h-[17px] font-sans text-[#333333] text-[14px] font-semibold">Pembayaran</h1>
              <span class="w-[130px] h-[17px] font-sans text-[#333333] text-[14px] font-semibold ml-[230px]">Time Schedule</span>
              <span class="w-[130px] h-[17px] font-sans text-[#333333] text-[14px] font-semibold ml-[195px]">Calon Mitra Bisnis</span>
            </div>
            <div class="flex items-center mt-2">
              <h1 class="w-[7px] h-[17px] text-[14px] text-[#7F7F80]">-</h1>
              <span class="w-[7px] h-[17px] text-[14px] text-[#7F7F80] ml-[355px]">-</span>
              <span class="w-[7px] h-[17px] text-[14px] text-[#7F7F80] ml-[316px]">-</span>
            </div>
            <table class="table-auto w-auto text-left border-collapse border-[1px] border-[#E5E7E9] mt-4">
              <thead>
                <tr class="bg-[#FFFFFF] text-[12px] font-sans text-[#4D5E80] font-semibold">
                  <th class="p-2 border border-[#E5E7E9] w-[74px] h-[48px]">
                    <div class="flex items-center w-[74px]">
                      <span>No.</span>
                      <svg width="14" height="10" class="ml-3" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.4252 0.144043C10.7073 0.144043 10.9359 0.364674 10.9359 0.636836L10.9359 8.3174L13.1282 6.20189C13.3276 6.00944 13.651 6.00944 13.8504 6.20189C14.0499 6.39434 14.0499 6.70636 13.8504 6.89881L10.7863 9.85556C10.6906 9.94798 10.5607 9.9999 10.4252 9.9999C10.2898 9.9999 10.1599 9.94798 10.0641 9.85556L7.00001 6.89881C6.80057 6.70636 6.80057 6.39434 7.00001 6.20189C7.19944 6.00944 7.52279 6.00944 7.72223 6.20189L9.91454 8.3174L9.91454 0.636836C9.91454 0.364674 10.1432 0.144043 10.4252 0.144043Z"
                          fill="#93B8EC"
                        />
                        <path
                          d="M3.21369 0.144824C3.41312 -0.0476236 3.73647 -0.0476236 3.9359 0.144824L7.00001 3.10158C7.19945 3.29403 7.19945 3.60605 7.00001 3.79849C6.80058 3.99094 6.47723 3.99094 6.27779 3.79849L4.08548 1.68299V9.36355C4.08548 9.63571 3.85684 9.85634 3.57479 9.85634C3.29275 9.85634 3.06411 9.63571 3.06411 9.36355V1.68299L0.871794 3.79849C0.672359 3.99094 0.349011 3.99094 0.149576 3.79849C-0.0498587 3.60605 -0.0498587 3.29403 0.149576 3.10158L3.21369 0.144824Z"
                          fill="#93B8EC"
                        />
                      </svg>
                    </div>
                  </th>
                  <th class="p-2 border border-[#E5E7E9]">
                    <div class="flex items-center justify-between">
                      <span class="px-3">Pekerjaan</span>
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.4252 0.144043C10.7073 0.144043 10.9359 0.364674 10.9359 0.636836L10.9359 8.3174L13.1282 6.20189C13.3276 6.00944 13.651 6.00944 13.8504 6.20189C14.0499 6.39434 14.0499 6.70636 13.8504 6.89881L10.7863 9.85556C10.6906 9.94798 10.5607 9.9999 10.4252 9.9999C10.2898 9.9999 10.1599 9.94798 10.0641 9.85556L7.00001 6.89881C6.80057 6.70636 6.80057 6.39434 7.00001 6.20189C7.19944 6.00944 7.52279 6.00944 7.72223 6.20189L9.91454 8.3174L9.91454 0.636836C9.91454 0.364674 10.1432 0.144043 10.4252 0.144043Z"
                          fill="#93B8EC"
                        />
                        <path
                          d="M3.21369 0.144824C3.41312 -0.0476236 3.73647 -0.0476236 3.9359 0.144824L7.00001 3.10158C7.19945 3.29403 7.19945 3.60605 7.00001 3.79849C6.80058 3.99094 6.47723 3.99094 6.27779 3.79849L4.08548 1.68299V9.36355C4.08548 9.63571 3.85684 9.85634 3.57479 9.85634C3.29275 9.85634 3.06411 9.63571 3.06411 9.36355V1.68299L0.871794 3.79849C0.672359 3.99094 0.349011 3.99094 0.149576 3.79849C-0.0498587 3.60605 -0.0498587 3.29403 0.149576 3.10158L3.21369 0.144824Z"
                          fill="#93B8EC"
                        />
                      </svg>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody class="h-[54px] w-[998px]">
                <tr class="bg-[#FFFFFF] border border-[#E5E7E9] text-[#333333] font-sans text-[14px] font-normal w-[900px] h-[22px]">
                  <td class="p-2 border border-[#E5E7E9]">1</td>
                  <td class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333]">Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                </tr>
                <tr class="bg-[#FFFFFF] border border-[#E5E7E9] text-[#333333] font-sans text-[14px] font-normal">
                  <td class="p-2 border border-[#E5E7E9]">2</td>
                  <td class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333]">Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                </tr>
                <tr class="bg-[#FFFFFF] border border-[#E5E7E9] text-[#333333] font-sans text-[14px] font-normal">
                  <td class="p-2 border border-[#E5E7E9]">3</td>
                  <td class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333]">Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </transition>
        <div class="flex items-center mt-4 ml-4 w-[1046px] h-[48px] rounded-lg bg-[#FFFFFF] border-[#E5E7E9] border-[1px]">
          <div class="w-[30px] h-[48px] bg-[#0FB37D] rounded-tl-md rounded-bl-md"></div>
          <div class="text-[16px] font-sans font-semibold text-[#333333] ml-[10px] mt-[14.5px] mb-[14.5px]">Informasi RAB</div>
          <button @click="toggleDropdownArrow2" class="ml-auto mr-4 flex py-1 px-1 rounded-full hover:bg-[#FFFFFF]">
            <svg :class="{ 'rotate-180': isDropdownArrowOpen2 }" class="w-4 h-4 text-[#2671D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <transition name="fade">
          <div v-if="isDropdownArrowOpen2" class="flex items-center w-[1046px] h-[430px] bg-[#FFFFFF] border-[#E5E7E9] border-[1px] ml-4 px-6 py-6 rounded-bl-md rounded-br-md">
            <table class="table-auto w-auto text-left rounded-lg border-collapse border-[1px] border-[#E5E7E9] mt-3">
              <thead>
                <tr class="bg-[#FFFFFF] text-[12px] font-sans text-[#4D5E80] font-semibold">
                  <th class="p-2 border border-[#E5E7E9] w-[74px] h-[48px]">
                    <div class="flex items-center">
                      <span>No.</span>
                      <svg width="14" height="10" class="ml-3" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.4252 0.144043C10.7073 0.144043 10.9359 0.364674 10.9359 0.636836L10.9359 8.3174L13.1282 6.20189C13.3276 6.00944 13.651 6.00944 13.8504 6.20189C14.0499 6.39434 14.0499 6.70636 13.8504 6.89881L10.7863 9.85556C10.6906 9.94798 10.5607 9.9999 10.4252 9.9999C10.2898 9.9999 10.1599 9.94798 10.0641 9.85556L7.00001 6.89881C6.80057 6.70636 6.80057 6.39434 7.00001 6.20189C7.19944 6.00944 7.52279 6.00944 7.72223 6.20189L9.91454 8.3174L9.91454 0.636836C9.91454 0.364674 10.1432 0.144043 10.4252 0.144043Z"
                          fill="#93B8EC"
                        />
                        <path
                          d="M3.21369 0.144824C3.41312 -0.0476236 3.73647 -0.0476236 3.9359 0.144824L7.00001 3.10158C7.19945 3.29403 7.19945 3.60605 7.00001 3.79849C6.80058 3.99094 6.47723 3.99094 6.27779 3.79849L4.08548 1.68299V9.36355C4.08548 9.63571 3.85684 9.85634 3.57479 9.85634C3.29275 9.85634 3.06411 9.63571 3.06411 9.36355V1.68299L0.871794 3.79849C0.672359 3.99094 0.349011 3.99094 0.149576 3.79849C-0.0498587 3.60605 -0.0498587 3.29403 0.149576 3.10158L3.21369 0.144824Z"
                          fill="#93B8EC"
                        />
                      </svg>
                    </div>
                  </th>
                  <th class="p-2 border border-[#E5E7E9]">
                    <div class="flex items-center justify-between w-[231px]">
                      <span class="px-3">Aksi</span>
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.4252 0.144043C10.7073 0.144043 10.9359 0.364674 10.9359 0.636836L10.9359 8.3174L13.1282 6.20189C13.3276 6.00944 13.651 6.00944 13.8504 6.20189C14.0499 6.39434 14.0499 6.70636 13.8504 6.89881L10.7863 9.85556C10.6906 9.94798 10.5607 9.9999 10.4252 9.9999C10.2898 9.9999 10.1599 9.94798 10.0641 9.85556L7.00001 6.89881C6.80057 6.70636 6.80057 6.39434 7.00001 6.20189C7.19944 6.00944 7.52279 6.00944 7.72223 6.20189L9.91454 8.3174L9.91454 0.636836C9.91454 0.364674 10.1432 0.144043 10.4252 0.144043Z"
                          fill="#93B8EC"
                        />
                        <path
                          d="M3.21369 0.144824C3.41312 -0.0476236 3.73647 -0.0476236 3.9359 0.144824L7.00001 3.10158C7.19945 3.29403 7.19945 3.60605 7.00001 3.79849C6.80058 3.99094 6.47723 3.99094 6.27779 3.79849L4.08548 1.68299V9.36355C4.08548 9.63571 3.85684 9.85634 3.57479 9.85634C3.29275 9.85634 3.06411 9.63571 3.06411 9.36355V1.68299L0.871794 3.79849C0.672359 3.99094 0.349011 3.99094 0.149576 3.79849C-0.0498587 3.60605 -0.0498587 3.29403 0.149576 3.10158L3.21369 0.144824Z"
                          fill="#93B8EC"
                        />
                      </svg>
                    </div>
                  </th>
                  <th class="p-2 border border-[#E5E7E9]">
                    <div class="flex items-center justify-between w-[231px]">
                      <span class="px-3">Deskripsi</span>
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.4252 0.144043C10.7073 0.144043 10.9359 0.364674 10.9359 0.636836L10.9359 8.3174L13.1282 6.20189C13.3276 6.00944 13.651 6.00944 13.8504 6.20189C14.0499 6.39434 14.0499 6.70636 13.8504 6.89881L10.7863 9.85556C10.6906 9.94798 10.5607 9.9999 10.4252 9.9999C10.2898 9.9999 10.1599 9.94798 10.0641 9.85556L7.00001 6.89881C6.80057 6.70636 6.80057 6.39434 7.00001 6.20189C7.19944 6.00944 7.52279 6.00944 7.72223 6.20189L9.91454 8.3174L9.91454 0.636836C9.91454 0.364674 10.1432 0.144043 10.4252 0.144043Z"
                          fill="#93B8EC"
                        />
                        <path
                          d="M3.21369 0.144824C3.41312 -0.0476236 3.73647 -0.0476236 3.9359 0.144824L7.00001 3.10158C7.19945 3.29403 7.19945 3.60605 7.00001 3.79849C6.80058 3.99094 6.47723 3.99094 6.27779 3.79849L4.08548 1.68299V9.36355C4.08548 9.63571 3.85684 9.85634 3.57479 9.85634C3.29275 9.85634 3.06411 9.63571 3.06411 9.36355V1.68299L0.871794 3.79849C0.672359 3.99094 0.349011 3.99094 0.149576 3.79849C-0.0498587 3.60605 -0.0498587 3.29403 0.149576 3.10158L3.21369 0.144824Z"
                          fill="#93B8EC"
                        />
                      </svg>
                    </div>
                  </th>
                  <th class="p-2 border border-[#E5E7E9]">
                    <div class="flex items-center w-[300px] justify-between">
                      <span class="px-3">Pelanggan</span>
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.4252 0.144043C10.7073 0.144043 10.9359 0.364674 10.9359 0.636836L10.9359 8.3174L13.1282 6.20189C13.3276 6.00944 13.651 6.00944 13.8504 6.20189C14.0499 6.39434 14.0499 6.70636 13.8504 6.89881L10.7863 9.85556C10.6906 9.94798 10.5607 9.9999 10.4252 9.9999C10.2898 9.9999 10.1599 9.94798 10.0641 9.85556L7.00001 6.89881C6.80057 6.70636 6.80057 6.39434 7.00001 6.20189C7.19944 6.00944 7.52279 6.00944 7.72223 6.20189L9.91454 8.3174L9.91454 0.636836C9.91454 0.364674 10.1432 0.144043 10.4252 0.144043Z"
                          fill="#93B8EC"
                        />
                        <path
                          d="M3.21369 0.144824C3.41312 -0.0476236 3.73647 -0.0476236 3.9359 0.144824L7.00001 3.10158C7.19945 3.29403 7.19945 3.60605 7.00001 3.79849C6.80058 3.99094 6.47723 3.99094 6.27779 3.79849L4.08548 1.68299V9.36355C4.08548 9.63571 3.85684 9.85634 3.57479 9.85634C3.29275 9.85634 3.06411 9.63571 3.06411 9.36355V1.68299L0.871794 3.79849C0.672359 3.99094 0.349011 3.99094 0.149576 3.79849C-0.0498587 3.60605 -0.0498587 3.29403 0.149576 3.10158L3.21369 0.144824Z"
                          fill="#93B8EC"
                        />
                      </svg>
                    </div>
                  </th>
                  <th class="p-2 border border-[#E5E7E9]">
                    <div class="flex items-center justify-between">
                      <span class="px-3">PLN/NonPLN</span>
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.4252 0.144043C10.7073 0.144043 10.9359 0.364674 10.9359 0.636836L10.9359 8.3174L13.1282 6.20189C13.3276 6.00944 13.651 6.00944 13.8504 6.20189C14.0499 6.39434 14.0499 6.70636 13.8504 6.89881L10.7863 9.85556C10.6906 9.94798 10.5607 9.9999 10.4252 9.9999C10.2898 9.9999 10.1599 9.94798 10.0641 9.85556L7.00001 6.89881C6.80057 6.70636 6.80057 6.39434 7.00001 6.20189C7.19944 6.00944 7.52279 6.00944 7.72223 6.20189L9.91454 8.3174L9.91454 0.636836C9.91454 0.364674 10.1432 0.144043 10.4252 0.144043Z"
                          fill="#93B8EC"
                        />
                        <path
                          d="M3.21369 0.144824C3.41312 -0.0476236 3.73647 -0.0476236 3.9359 0.144824L7.00001 3.10158C7.19945 3.29403 7.19945 3.60605 7.00001 3.79849C6.80058 3.99094 6.47723 3.99094 6.27779 3.79849L4.08548 1.68299V9.36355C4.08548 9.63571 3.85684 9.85634 3.57479 9.85634C3.29275 9.85634 3.06411 9.63571 3.06411 9.36355V1.68299L0.871794 3.79849C0.672359 3.99094 0.349011 3.99094 0.149576 3.79849C-0.0498587 3.60605 -0.0498587 3.29403 0.149576 3.10158L3.21369 0.144824Z"
                          fill="#93B8EC"
                        />
                      </svg>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody class="h-[54px] w-[231px]">
                <tr class="bg-[#FFFFFF] border border-[#E5E7E9] text-[#333333] font-sans text-[14px] font-normal">
                  <td class="p-2 border border-[#E5E7E9]">1</td>
                  <td class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">Lorem ipsum dolor sit amet</td>
                  <td class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">Lorem ipsum dolor sit amet</td>
                  <td class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">Lorem ipsum dolor sit amet</td>
                  <td class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">Lorem ipsum</td>
                </tr>
                <tr class="bg-[#FFFFFF] border border-[#E5E7E9] text-[#333333] font-sans text-[14px] font-normal">
                  <td class="p-2 border border-[#E5E7E9]">2</td>
                  <td class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333]">Lorem ipsum dolor sit amet</td>
                  <td class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">Lorem ipsum dolor sit amet</td>
                  <td class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">Lorem ipsum dolor sit amet</td>
                  <td class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">Lorem ipsum</td>
                </tr>
                <tr class="bg-[#FFFFFF] border border-[#E5E7E9] text-[#333333] font-sans text-[14px] font-normal">
                  <td class="p-2 border border-[#E5E7E9]">3</td>
                  <td class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333]">Lorem ipsum dolor sit amet</td>
                  <td class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">Lorem ipsum dolor sit amet</td>
                  <td class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">Lorem ipsum dolor sit amet</td>
                  <td class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">Lorem ipsum</td>
                </tr>
                <tr class="bg-[#FFFFFF] border border-[#E5E7E9] text-[#333333] font-sans text-[14px] font-normal">
                  <td class="p-2 border border-[#E5E7E9]">4</td>
                  <td class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">Lorem ipsum dolor sit amet</td>
                  <td class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">Lorem ipsum dolor sit amet</td>
                  <td class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">Lorem ipsum dolor sit amet</td>
                  <td class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">Lorem ipsum</td>
                </tr>
                <tr class="bg-[#FFFFFF] border border-[#E5E7E9] text-[#333333] font-sans text-[14px] font-normal">
                  <td class="p-2 border border-[#E5E7E9]">5</td>
                  <td class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">Lorem ipsum dolor sit amet</td>
                  <td class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">Lorem ipsum dolor sit amet</td>
                  <td class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">Lorem ipsum dolor sit amet</td>
                  <td class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">Lorem ipsum</td>
                </tr>
                <tr class="bg-[#FFFFFF] border border-[#E5E7E9] text-[#333333] font-sans text-[14px] font-normal">
                  <td class="p-2 border border-[#E5E7E9]">6</td>
                  <td class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">Lorem ipsum dolor sit amet</td>
                  <td class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">Lorem ipsum dolor sit amet</td>
                  <td class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">Lorem ipsum dolor sit amet</td>
                  <td class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">Lorem ipsum</td>
                </tr>
                <tr class="bg-[#FFFFFF] border border-[#E5E7E9] text-[#333333] font-sans text-[14px] font-normal">
                  <td class="p-2 border border-[#E5E7E9]">7</td>
                  <td class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">Lorem ipsum dolor sit amet</td>
                  <td class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">Lorem ipsum dolor sit amet</td>
                  <td class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">Lorem ipsum dolor sit amet</td>
                  <td class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">Lorem ipsum</td>
                </tr>
                <tr class="bg-[#FFFFFF] border border-[#E5E7E9] text-[#333333] font-sans text-[14px] font-normal">
                  <td class="p-2 border border-[#E5E7E9]">8</td>
                  <td class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">Lorem ipsum dolor sit amet</td>
                  <td class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">Lorem ipsum dolor sit amet</td>
                  <td class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">Lorem ipsum dolor sit amet</td>
                  <td class="p-2 border border-[#E5E7E9] text-[14px] text-left pl-5 font-sans font-normal text-[#333333] w-[207px]">Lorem ipsum</td>
                </tr>
              </tbody>
            </table>
          </div>
        </transition>
        <div class="flex items-center mt-4 ml-4 w-[1046px] h-[48px] rounded-lg bg-[#FFFFFF] border-[#E5E7E9] border-[1px]">
          <div class="w-[30px] h-[48px] bg-[#F42495] rounded-tl-md rounded-bl-md"></div>
          <div class="text-[16px] font-sans font-semibold text-[#333333] ml-[10px] mt-[14.5px] mb-[14.5px]">Berkas Lampiran</div>
          <button @click="toggleDropdownArrow3" class="ml-auto mr-4 flex py-1 px-1 rounded-full hover:bg-[#FFFFFF]">
            <svg :class="{ 'rotate-180': isDropdownArrowOpen3 }" class="w-4 h-4 text-[#2671D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <transition name="fade">
          <div v-if="isDropdownArrowOpen3" class="flex flex-wrap w-[1046px] bg-[#FFFFFF] border-[#E5E7E9] border-[1px] ml-4 px-5 py-6 rounded-bl-md rounded-br-md gap-6">
            <!-- KKB -->
            <div class="flex flex-col w-[316.6px]">
              <div class="flex items-center">
                <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">KKB</h1>
                <span class="text-[#FF5656] font-bold ml-1">*</span>
              </div>
              <div class="w-full h-[69px] bg-[#FFFFFF] border-[#E5E7E9] border-[1px] rounded-lg mt-2 flex items-center justify-center">
                <div class="flex items-center p-4 bg-[#FFFFFF] border border-[#E5E7E9] rounded-lg w-full">
                  <div class="flex items-center justify-center w-10 h-10 bg-[#E9F1FB] rounded-full">
                    <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 6.63125C14.9902 6.54513 14.9714 6.46028 14.9437 6.37813V6.29375C14.8987 6.19736 14.8385 6.10875 14.7656 6.03125L9.14062 0.40625C9.06313 0.333328 8.97452 0.273201 8.87812 0.228125H8.79375C8.69851 0.173507 8.59333 0.138448 8.48437 0.125H2.8125C2.06658 0.125 1.35121 0.421316 0.823762 0.948762C0.296316 1.47621 0 2.19158 0 2.9375V16.0625C0 16.8084 0.296316 17.5238 0.823762 18.0512C1.35121 18.5787 2.06658 18.875 2.8125 18.875H12.1875C12.9334 18.875 13.6488 18.5787 14.1762 18.0512C14.7037 17.5238 15 16.8084 15 16.0625V6.6875V6.63125ZM9.375 3.32187L11.8031 5.75H10.3125C10.0639 5.75 9.8254 5.65123 9.64959 5.47541C9.47377 5.2996 9.375 5.06114 9.375 4.8125V3.32187ZM13.125 16.0625C13.125 16.3111 13.0262 16.5496 12.8504 16.7254C12.6746 16.9012 12.4361 17 12.1875 17H2.8125C2.56386 17 2.3254 16.9012 2.14959 16.7254C1.97377 16.5496 1.875 16.3111 1.875 16.0625V2.9375C1.875 2.68886 1.97377 2.4504 2.14959 2.27459C2.3254 2.09877 2.56386 2 2.8125 2H7.5V4.8125C7.5 5.55842 7.79632 6.27379 8.32376 6.80124C8.85121 7.32868 9.56658 7.625 10.3125 7.625H13.125V16.0625Z"
                        fill="#2671D9"
                      />
                    </svg>
                  </div>
                  <div class="relative w-full">
                    <!-- Input file yang tersembunyi -->
                    <input type="file" id="fileInputKKB" class="hidden" @change="handleFileChange('KKB', $event)" ref="fileInputKKB" />
                    <!-- Tombol yang menampilkan nama file dan ukuran -->
                    <button class="ml-4 block text-left p-2 bg-[#FFFFFF] w-full" @click="openFileDialog('KKB')">
                      <div class="flex justify-between items-center">
                        <div class="overflow-hidden">
                          <span class="block text-sm font-semibold text-[#333333] font-sans text-[14px] truncate">
                            {{ fileDetails.KKB.fileName || "namadokumen.pdf" }}
                          </span>
                          <span class="block text-xs">
                            {{ fileDetails.KKB.fileSize || "" }}
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- KKR -->
            <div class="flex flex-col w-[316.6px]">
              <div class="flex items-center">
                <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">KKR</h1>
                <span class="text-[#FF5656] font-bold ml-1">*</span>
              </div>
              <div class="w-full h-[69px] bg-[#FFFFFF] border-[#E5E7E9] border-[1px] rounded-lg mt-2 flex items-center justify-center">
                <div class="flex items-center p-4 bg-[#FFFFFF] border border-[#E5E7E9] rounded-lg w-full">
                  <div class="flex items-center justify-center w-10 h-10 bg-[#E9F1FB] rounded-full">
                    <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 6.63125C14.9902 6.54513 14.9714 6.46028 14.9437 6.37813V6.29375C14.8987 6.19736 14.8385 6.10875 14.7656 6.03125L9.14062 0.40625C9.06313 0.333328 8.97452 0.273201 8.87812 0.228125H8.79375C8.69851 0.173507 8.59333 0.138448 8.48437 0.125H2.8125C2.06658 0.125 1.35121 0.421316 0.823762 0.948762C0.296316 1.47621 0 2.19158 0 2.9375V16.0625C0 16.8084 0.296316 17.5238 0.823762 18.0512C1.35121 18.5787 2.06658 18.875 2.8125 18.875H12.1875C12.9334 18.875 13.6488 18.5787 14.1762 18.0512C14.7037 17.5238 15 16.8084 15 16.0625V6.6875V6.63125ZM9.375 3.32187L11.8031 5.75H10.3125C10.0639 5.75 9.8254 5.65123 9.64959 5.47541C9.47377 5.2996 9.375 5.06114 9.375 4.8125V3.32187ZM13.125 16.0625C13.125 16.3111 13.0262 16.5496 12.8504 16.7254C12.6746 16.9012 12.4361 17 12.1875 17H2.8125C2.56386 17 2.3254 16.9012 2.14959 16.7254C1.97377 16.5496 1.875 16.3111 1.875 16.0625V2.9375C1.875 2.68886 1.97377 2.4504 2.14959 2.27459C2.3254 2.09877 2.56386 2 2.8125 2H7.5V4.8125C7.5 5.55842 7.79632 6.27379 8.32376 6.80124C8.85121 7.32868 9.56658 7.625 10.3125 7.625H13.125V16.0625Z"
                        fill="#2671D9"
                      />
                    </svg>
                  </div>
                  <div class="relative w-full">
                    <!-- Input file yang tersembunyi -->
                    <input type="file" id="fileInputKKR" class="hidden" @change="handleFileChange('KKR', $event)" ref="fileInputKKR" />
                    <!-- Tombol yang menampilkan nama file dan ukuran -->
                    <button class="ml-4 block text-left p-2 bg-[#FFFFFF] w-full" @click="openFileDialog('KKR')">
                      <div class="flex justify-between items-center">
                        <div class="overflow-hidden">
                          <span class="block text-sm font-semibold text-[#333333] font-sans text-[14px] truncate">
                            {{ fileDetails.KKR.fileName || "namadokumen.pdf" }}
                          </span>
                          <span class="block text-xs">
                            {{ fileDetails.KKR.fileSize || "" }}
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- KKF -->
            <div class="flex flex-col w-[316.6px]">
              <div class="flex items-center">
                <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">KKF</h1>
                <span class="text-[#FF5656] font-bold ml-1">*</span>
              </div>
              <div class="w-full h-[69px] bg-[#FFFFFF] border-[#E5E7E9] border-[1px] rounded-lg mt-2 flex items-center justify-center">
                <div class="flex items-center p-4 bg-[#FFFFFF] border border-[#E5E7E9] rounded-lg w-full">
                  <div class="flex items-center justify-center w-10 h-10 bg-[#E9F1FB] rounded-full">
                    <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 6.63125C14.9902 6.54513 14.9714 6.46028 14.9437 6.37813V6.29375C14.8987 6.19736 14.8385 6.10875 14.7656 6.03125L9.14062 0.40625C9.06313 0.333328 8.97452 0.273201 8.87812 0.228125H8.79375C8.69851 0.173507 8.59333 0.138448 8.48437 0.125H2.8125C2.06658 0.125 1.35121 0.421316 0.823762 0.948762C0.296316 1.47621 0 2.19158 0 2.9375V16.0625C0 16.8084 0.296316 17.5238 0.823762 18.0512C1.35121 18.5787 2.06658 18.875 2.8125 18.875H12.1875C12.9334 18.875 13.6488 18.5787 14.1762 18.0512C14.7037 17.5238 15 16.8084 15 16.0625V6.6875V6.63125ZM9.375 3.32187L11.8031 5.75H10.3125C10.0639 5.75 9.8254 5.65123 9.64959 5.47541C9.47377 5.2996 9.375 5.06114 9.375 4.8125V3.32187ZM13.125 16.0625C13.125 16.3111 13.0262 16.5496 12.8504 16.7254C12.6746 16.9012 12.4361 17 12.1875 17H2.8125C2.56386 17 2.3254 16.9012 2.14959 16.7254C1.97377 16.5496 1.875 16.3111 1.875 16.0625V2.9375C1.875 2.68886 1.97377 2.4504 2.14959 2.27459C2.3254 2.09877 2.56386 2 2.8125 2H7.5V4.8125C7.5 5.55842 7.79632 6.27379 8.32376 6.80124C8.85121 7.32868 9.56658 7.625 10.3125 7.625H13.125V16.0625Z"
                        fill="#2671D9"
                      />
                    </svg>
                  </div>
                  <div class="relative w-full">
                    <!-- Input file yang tersembunyi -->
                    <input type="file" id="fileInputKKF" class="hidden" @change="handleFileChange('KKF', $event)" ref="fileInputKKF" />
                    <!-- Tombol yang menampilkan nama file dan ukuran -->
                    <button class="ml-4 block text-left p-2 bg-[#FFFFFF] w-full" @click="openFileDialog('KKF')">
                      <div class="flex justify-between items-center">
                        <div class="overflow-hidden">
                          <span class="block text-sm font-semibold text-[#333333] font-sans text-[14px] truncate">
                            {{ fileDetails.KKF.fileName || "namadokumen.pdf" }}
                          </span>
                          <span class="block text-xs">
                            {{ fileDetails.KKF.fileSize || "" }}
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- KKO -->
            <div class="flex flex-col w-[316.6px]">
              <div class="flex items-center">
                <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">KKO</h1>
                <span class="text-[#FF5656] font-bold ml-1">*</span>
              </div>
              <div class="w-full h-[69px] bg-[#FFFFFF] border-[#E5E7E9] border-[1px] rounded-lg mt-2 flex items-center justify-center">
                <div class="flex items-center p-4 bg-[#FFFFFF] border border-[#E5E7E9] rounded-lg w-full">
                  <div class="flex items-center justify-center w-10 h-10 bg-[#E9F1FB] rounded-full">
                    <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 6.63125C14.9902 6.54513 14.9714 6.46028 14.9437 6.37813V6.29375C14.8987 6.19736 14.8385 6.10875 14.7656 6.03125L9.14062 0.40625C9.06313 0.333328 8.97452 0.273201 8.87812 0.228125H8.79375C8.69851 0.173507 8.59333 0.138448 8.48437 0.125H2.8125C2.06658 0.125 1.35121 0.421316 0.823762 0.948762C0.296316 1.47621 0 2.19158 0 2.9375V16.0625C0 16.8084 0.296316 17.5238 0.823762 18.0512C1.35121 18.5787 2.06658 18.875 2.8125 18.875H12.1875C12.9334 18.875 13.6488 18.5787 14.1762 18.0512C14.7037 17.5238 15 16.8084 15 16.0625V6.6875V6.63125ZM9.375 3.32187L11.8031 5.75H10.3125C10.0639 5.75 9.8254 5.65123 9.64959 5.47541C9.47377 5.2996 9.375 5.06114 9.375 4.8125V3.32187ZM13.125 16.0625C13.125 16.3111 13.0262 16.5496 12.8504 16.7254C12.6746 16.9012 12.4361 17 12.1875 17H2.8125C2.56386 17 2.3254 16.9012 2.14959 16.7254C1.97377 16.5496 1.875 16.3111 1.875 16.0625V2.9375C1.875 2.68886 1.97377 2.4504 2.14959 2.27459C2.3254 2.09877 2.56386 2 2.8125 2H7.5V4.8125C7.5 5.55842 7.79632 6.27379 8.32376 6.80124C8.85121 7.32868 9.56658 7.625 10.3125 7.625H13.125V16.0625Z"
                        fill="#2671D9"
                      />
                    </svg>
                  </div>
                  <div class="relative w-full">
                    <!-- Input file yang tersembunyi -->
                    <input type="file" id="fileInputKKO" class="hidden" @change="handleFileChange('KKO', $event)" ref="fileInputKKO" />
                    <!-- Tombol yang menampilkan nama file dan ukuran -->
                    <button class="ml-4 block text-left p-2 bg-[#FFFFFF] w-full" @click="openFileDialog('KKO')">
                      <div class="flex justify-between items-center">
                        <div class="overflow-hidden">
                          <span class="block text-sm font-semibold text-[#333333] font-sans text-[14px] truncate">
                            {{ fileDetails.KKO.fileName || "namadokumen.pdf" }}
                          </span>
                          <span class="block text-xs">
                            {{ fileDetails.KKO.fileSize || "" }}
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Proposal Mitra -->
            <div class="flex flex-col w-[316.6px]">
              <div class="flex items-center">
                <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">Proposal Mitra</h1>
                <span class="text-[#B3B3B3] font-sans text-[12px] font-light mt-1 ml-1">(Opsional)</span>
              </div>
              <div class="w-full h-[69px] bg-[#FFFFFF] border-[#E5E7E9] border-[1px] rounded-lg mt-2 flex items-center justify-center">
                <div class="flex items-center p-4 bg-[#FFFFFF] border border-[#E5E7E9] rounded-lg w-full">
                  <div class="flex items-center justify-center w-10 h-10 bg-[#E9F1FB] rounded-full">
                    <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 6.63125C14.9902 6.54513 14.9714 6.46028 14.9437 6.37813V6.29375C14.8987 6.19736 14.8385 6.10875 14.7656 6.03125L9.14062 0.40625C9.06313 0.333328 8.97452 0.273201 8.87812 0.228125H8.79375C8.69851 0.173507 8.59333 0.138448 8.48437 0.125H2.8125C2.06658 0.125 1.35121 0.421316 0.823762 0.948762C0.296316 1.47621 0 2.19158 0 2.9375V16.0625C0 16.8084 0.296316 17.5238 0.823762 18.0512C1.35121 18.5787 2.06658 18.875 2.8125 18.875H12.1875C12.9334 18.875 13.6488 18.5787 14.1762 18.0512C14.7037 17.5238 15 16.8084 15 16.0625V6.6875V6.63125ZM9.375 3.32187L11.8031 5.75H10.3125C10.0639 5.75 9.8254 5.65123 9.64959 5.47541C9.47377 5.2996 9.375 5.06114 9.375 4.8125V3.32187ZM13.125 16.0625C13.125 16.3111 13.0262 16.5496 12.8504 16.7254C12.6746 16.9012 12.4361 17 12.1875 17H2.8125C2.56386 17 2.3254 16.9012 2.14959 16.7254C1.97377 16.5496 1.875 16.3111 1.875 16.0625V2.9375C1.875 2.68886 1.97377 2.4504 2.14959 2.27459C2.3254 2.09877 2.56386 2 2.8125 2H7.5V4.8125C7.5 5.55842 7.79632 6.27379 8.32376 6.80124C8.85121 7.32868 9.56658 7.625 10.3125 7.625H13.125V16.0625Z"
                        fill="#2671D9"
                      />
                    </svg>
                  </div>
                  <div class="relative w-full">
                    <!-- Input file yang tersembunyi -->
                    <input type="file" id="fileInputProposalMitra" class="hidden" @change="handleFileChange('ProposalMitra', $event)" ref="fileInputProposalMitra" />
                    <!-- Tombol yang menampilkan nama file dan ukuran -->
                    <button class="ml-4 block text-left p-2 bg-[#FFFFFF] w-full" @click="openFileDialog('ProposalMitra')">
                      <div class="flex justify-between items-center">
                        <div class="overflow-hidden">
                          <span class="block text-sm font-semibold text-[#333333] font-sans text-[14px] truncate">
                            {{ fileDetails.ProposalMitra?.fileName || "namadokumen.pdf" }}
                          </span>
                          <span class="block text-xs">
                            {{ fileDetails.ProposalMitra?.fileSize || "" }}
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Dokumen Surat Menyurat (Opsional) -->
            <div class="flex flex-col w-[316.6px]">
              <div class="flex items-center">
                <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">Dokumen Surat Menyurat</h1>
                <span class="text-[#B3B3B3] font-sans text-[12px] font-light mt-1 ml-1">(Opsional)</span>
              </div>
              <div class="w-full h-[69px] bg-[#FFFFFF] border-[#E5E7E9] border-[1px] rounded-lg mt-2 flex items-center justify-center">
                <div class="flex items-center p-4 bg-[#FFFFFF] border border-[#E5E7E9] rounded-lg w-full">
                  <div class="flex items-center justify-center w-10 h-10 bg-[#E9F1FB] rounded-full">
                    <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 6.63125C14.9902 6.54513 14.9714 6.46028 14.9437 6.37813V6.29375C14.8987 6.19736 14.8385 6.10875 14.7656 6.03125L9.14062 0.40625C9.06313 0.333328 8.97452 0.273201 8.87812 0.228125H8.79375C8.69851 0.173507 8.59333 0.138448 8.48437 0.125H2.8125C2.06658 0.125 1.35121 0.421316 0.823762 0.948762C0.296316 1.47621 0 2.19158 0 2.9375V16.0625C0 16.8084 0.296316 17.5238 0.823762 18.0512C1.35121 18.5787 2.06658 18.875 2.8125 18.875H12.1875C12.9334 18.875 13.6488 18.5787 14.1762 18.0512C14.7037 17.5238 15 16.8084 15 16.0625V6.6875V6.63125ZM9.375 3.32187L11.8031 5.75H10.3125C10.0639 5.75 9.8254 5.65123 9.64959 5.47541C9.47377 5.2996 9.375 5.06114 9.375 4.8125V3.32187ZM13.125 16.0625C13.125 16.3111 13.0262 16.5496 12.8504 16.7254C12.6746 16.9012 12.4361 17 12.1875 17H2.8125C2.56386 17 2.3254 16.9012 2.14959 16.7254C1.97377 16.5496 1.875 16.3111 1.875 16.0625V2.9375C1.875 2.68886 1.97377 2.4504 2.14959 2.27459C2.3254 2.09877 2.56386 2 2.8125 2H7.5V4.8125C7.5 5.55842 7.79632 6.27379 8.32376 6.80124C8.85121 7.32868 9.56658 7.625 10.3125 7.625H13.125V16.0625Z"
                        fill="#2671D9"
                      />
                    </svg>
                  </div>
                  <div class="relative w-full">
                    <!-- Input file yang tersembunyi -->
                    <input type="file" id="fileInputDokumenSuratMenyurat" class="hidden" @change="handleFileChange('DokumenSuratMenyurat', $event)" ref="fileInputDokumenSuratMenyurat" />
                    <!-- Tombol yang menampilkan nama file dan ukuran -->
                    <button class="ml-4 block text-left p-2 bg-[#FFFFFF] w-full" @click="openFileDialog('DokumenSuratMenyurat')">
                      <div class="flex justify-between items-center">
                        <div class="overflow-hidden">
                          <span class="block text-sm font-semibold text-[#333333] font-sans text-[14px] truncate">
                            {{ fileDetails.DokumenSuratMenyurat?.fileName || "namadokumen.pdf" }}
                          </span>
                          <span class="block text-xs">
                            {{ fileDetails.DokumenSuratMenyurat?.fileSize || "" }}
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Dokumen Lainnya (Opsional) -->
            <div class="flex flex-col w-[316.6px]">
              <div class="flex items-center">
                <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">Dokumen Lainnya</h1>
                <span class="text-[#B3B3B3] font-sans text-[12px] font-light mt-1 ml-1">(Opsional)</span>
              </div>
              <div class="w-full h-[69px] bg-[#FFFFFF] border-[#E5E7E9] border-[1px] rounded-lg mt-2 flex items-center justify-center">
                <div class="flex items-center p-4 bg-[#FFFFFF] border border-[#E5E7E9] rounded-lg w-full">
                  <div class="flex items-center justify-center w-10 h-10 bg-[#E9F1FB] rounded-full">
                    <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 6.63125C14.9902 6.54513 14.9714 6.46028 14.9437 6.37813V6.29375C14.8987 6.19736 14.8385 6.10875 14.7656 6.03125L9.14062 0.40625C9.06313 0.333328 8.97452 0.273201 8.87812 0.228125H8.79375C8.69851 0.173507 8.59333 0.138448 8.48437 0.125H2.8125C2.06658 0.125 1.35121 0.421316 0.823762 0.948762C0.296316 1.47621 0 2.19158 0 2.9375V16.0625C0 16.8084 0.296316 17.5238 0.823762 18.0512C1.35121 18.5787 2.06658 18.875 2.8125 18.875H12.1875C12.9334 18.875 13.6488 18.5787 14.1762 18.0512C14.7037 17.5238 15 16.8084 15 16.0625V6.6875V6.63125ZM9.375 3.32187L11.8031 5.75H10.3125C10.0639 5.75 9.8254 5.65123 9.64959 5.47541C9.47377 5.2996 9.375 5.06114 9.375 4.8125V3.32187ZM13.125 16.0625C13.125 16.3111 13.0262 16.5496 12.8504 16.7254C12.6746 16.9012 12.4361 17 12.1875 17H2.8125C2.56386 17 2.3254 16.9012 2.14959 16.7254C1.97377 16.5496 1.875 16.3111 1.875 16.0625V2.9375C1.875 2.68886 1.97377 2.4504 2.14959 2.27459C2.3254 2.09877 2.56386 2 2.8125 2H7.5V4.8125C7.5 5.55842 7.79632 6.27379 8.32376 6.80124C8.85121 7.32868 9.56658 7.625 10.3125 7.625H13.125V16.0625Z"
                        fill="#2671D9"
                      />
                    </svg>
                  </div>
                  <div class="relative w-full">
                    <!-- Input file yang tersembunyi -->
                    <input type="file" id="fileInputDokumenLainnya" class="hidden" @change="handleFileChange('DokumenLainnya', $event)" ref="fileInputDokumenLainnya" />
                    <!-- Tombol yang menampilkan nama file dan ukuran -->
                    <button class="ml-4 block text-left p-2 bg-[#FFFFFF] w-full" @click="openFileDialog('DokumenLainnya')">
                      <div class="flex justify-between items-center">
                        <div class="overflow-hidden">
                          <span class="block text-sm font-semibold text-[#333333] font-sans text-[14px] truncate">
                            {{ fileDetails.DokumenLainnya?.fileName || "namadokumen.pdf" }}
                          </span>
                          <span class="block text-xs">
                            {{ fileDetails.DokumenLainnya?.fileSize || "" }}
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
        <div class="flex items-center mt-4 ml-4 w-[1046px] h-[48px] rounded-lg bg-[#FFFFFF] border-[#E5E7E9] border-[1px]">
          <div class="w-[30px] h-[48px] bg-[#CE8861] rounded-tl-md rounded-bl-md"></div>
          <div class="text-[16px] font-sans font-semibold text-[#333333] ml-[10px] mt-[14.5px] mb-[14.5px]">Dokumen Progress Kemitraan</div>
          <button @click="toggleDropdownArrow4" class="ml-auto mr-4 flex py-1 px-1 rounded-full hover:bg-[#FFFFFF]">
            <svg :class="{ 'rotate-180': isDropdownArrowOpen4 }" class="w-4 h-4 text-[#2671D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <transition name="fade">
          <div v-if="isDropdownArrowOpen4" class="flex flex-wrap w-[1046px] bg-[#FFFFFF] border-[#E5E7E9] border-[1px] ml-4 px-5 py-6 rounded-bl-md rounded-br-md gap-6">
            <!-- Surat Penawaran -->
            <div class="flex flex-col w-[316.6px]">
              <div class="flex items-center">
                <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">Surat Penawaran</h1>
              </div>
              <div class="w-full h-[69px] bg-[#FFFFFF] border-[#E5E7E9] border-[1px] rounded-lg mt-2 flex items-center justify-center">
                <div class="flex items-center p-4 bg-[#FFFFFF] border border-[#E5E7E9] rounded-lg w-full">
                  <div class="flex items-center justify-center w-10 h-10 bg-[#E9F1FB] rounded-full">
                    <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 6.63125C14.9902 6.54513 14.9714 6.46028 14.9437 6.37813V6.29375C14.8987 6.19736 14.8385 6.10875 14.7656 6.03125L9.14062 0.40625C9.06313 0.333328 8.97452 0.273201 8.87812 0.228125H8.79375C8.69851 0.173507 8.59333 0.138448 8.48437 0.125H2.8125C2.06658 0.125 1.35121 0.421316 0.823762 0.948762C0.296316 1.47621 0 2.19158 0 2.9375V16.0625C0 16.8084 0.296316 17.5238 0.823762 18.0512C1.35121 18.5787 2.06658 18.875 2.8125 18.875H12.1875C12.9334 18.875 13.6488 18.5787 14.1762 18.0512C14.7037 17.5238 15 16.8084 15 16.0625V6.6875V6.63125ZM9.375 3.32187L11.8031 5.75H10.3125C10.0639 5.75 9.8254 5.65123 9.64959 5.47541C9.47377 5.2996 9.375 5.06114 9.375 4.8125V3.32187ZM13.125 16.0625C13.125 16.3111 13.0262 16.5496 12.8504 16.7254C12.6746 16.9012 12.4361 17 12.1875 17H2.8125C2.56386 17 2.3254 16.9012 2.14959 16.7254C1.97377 16.5496 1.875 16.3111 1.875 16.0625V2.9375C1.875 2.68886 1.97377 2.4504 2.14959 2.27459C2.3254 2.09877 2.56386 2 2.8125 2H7.5V4.8125C7.5 5.55842 7.79632 6.27379 8.32376 6.80124C8.85121 7.32868 9.56658 7.625 10.3125 7.625H13.125V16.0625Z"
                        fill="#2671D9"
                      />
                    </svg>
                  </div>
                  <div class="relative w-full">
                    <!-- Input file yang tersembunyi -->
                    <input type="file" id="fileInputSuratPenawaran" class="hidden" @change="handleFileChange('SuratPenawaran', $event)" ref="fileInputSuratPenawaran" />
                    <!-- Tombol yang menampilkan nama file dan ukuran -->
                    <button class="ml-4 block text-left p-2 bg-[#FFFFFF] w-full" @click="openFileDialog('SuratPenawaran')">
                      <div class="flex justify-between items-center">
                        <div class="overflow-hidden">
                          <span class="block text-sm font-semibold text-[#333333] font-sans text-[14px] truncate">
                            {{ fileDetails.SuratPenawaran?.fileName || "Surat_Penawaran.pdf" }}
                          </span>
                          <span class="block text-xs">
                            {{ fileDetails.SuratPenawaran?.fileSize || "" }}
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Proposal -->
            <div class="flex flex-col w-[316.6px]">
              <div class="flex items-center">
                <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">Proposal</h1>
              </div>
              <div class="w-full h-[69px] bg-[#FFFFFF] border-[#E5E7E9] border-[1px] rounded-lg mt-2 flex items-center justify-center">
                <div class="flex items-center p-4 bg-[#FFFFFF] border border-[#E5E7E9] rounded-lg w-full">
                  <div class="flex items-center justify-center w-10 h-10 bg-[#E9F1FB] rounded-full">
                    <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 6.63125C14.9902 6.54513 14.9714 6.46028 14.9437 6.37813V6.29375C14.8987 6.19736 14.8385 6.10875 14.7656 6.03125L9.14062 0.40625C9.06313 0.333328 8.97452 0.273201 8.87812 0.228125H8.79375C8.69851 0.173507 8.59333 0.138448 8.48437 0.125H2.8125C2.06658 0.125 1.35121 0.421316 0.823762 0.948762C0.296316 1.47621 0 2.19158 0 2.9375V16.0625C0 16.8084 0.296316 17.5238 0.823762 18.0512C1.35121 18.5787 2.06658 18.875 2.8125 18.875H12.1875C12.9334 18.875 13.6488 18.5787 14.1762 18.0512C14.7037 17.5238 15 16.8084 15 16.0625V6.6875V6.63125ZM9.375 3.32187L11.8031 5.75H10.3125C10.0639 5.75 9.8254 5.65123 9.64959 5.47541C9.47377 5.2996 9.375 5.06114 9.375 4.8125V3.32187ZM13.125 16.0625C13.125 16.3111 13.0262 16.5496 12.8504 16.7254C12.6746 16.9012 12.4361 17 12.1875 17H2.8125C2.56386 17 2.3254 16.9012 2.14959 16.7254C1.97377 16.5496 1.875 16.3111 1.875 16.0625V2.9375C1.875 2.68886 1.97377 2.4504 2.14959 2.27459C2.3254 2.09877 2.56386 2 2.8125 2H7.5V4.8125C7.5 5.55842 7.79632 6.27379 8.32376 6.80124C8.85121 7.32868 9.56658 7.625 10.3125 7.625H13.125V16.0625Z"
                        fill="#2671D9"
                      />
                    </svg>
                  </div>
                  <div class="relative w-full">
                    <!-- Input file yang tersembunyi -->
                    <input type="file" id="fileInputProposal" class="hidden" @change="handleFileChange('Proposal', $event)" ref="fileInputProposal" />
                    <!-- Tombol yang menampilkan nama file dan ukuran -->
                    <button class="ml-4 block text-left p-2 bg-[#FFFFFF] w-full" @click="openFileDialog('Proposal')">
                      <div class="flex justify-between items-center">
                        <div class="overflow-hidden">
                          <span class="block text-sm font-semibold text-[#333333] font-sans text-[14px] truncate">
                            {{ fileDetails.Proposal.fileName || "proposal.pdf" }}
                          </span>
                          <span class="block text-xs">
                            {{ fileDetails.Proposal.fileSize || "" }}
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Evaluasi -->
            <div class="flex flex-col w-[316.6px]">
              <div class="flex items-center">
                <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">Evaluasi</h1>
              </div>
              <div class="w-full h-[69px] bg-[#FFFFFF] border-[#E5E7E9] border-[1px] rounded-lg mt-2 flex items-center justify-center">
                <div class="flex items-center p-4 bg-[#FFFFFF] border border-[#E5E7E9] rounded-lg w-full">
                  <div class="flex items-center justify-center w-10 h-10 bg-[#E9F1FB] rounded-full">
                    <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 6.63125C14.9902 6.54513 14.9714 6.46028 14.9437 6.37813V6.29375C14.8987 6.19736 14.8385 6.10875 14.7656 6.03125L9.14062 0.40625C9.06313 0.333328 8.97452 0.273201 8.87812 0.228125H8.79375C8.69851 0.173507 8.59333 0.138448 8.48437 0.125H2.8125C2.06658 0.125 1.35121 0.421316 0.823762 0.948762C0.296316 1.47621 0 2.19158 0 2.9375V16.0625C0 16.8084 0.296316 17.5238 0.823762 18.0512C1.35121 18.5787 2.06658 18.875 2.8125 18.875H12.1875C12.9334 18.875 13.6488 18.5787 14.1762 18.0512C14.7037 17.5238 15 16.8084 15 16.0625V6.6875V6.63125ZM9.375 3.32187L11.8031 5.75H10.3125C10.0639 5.75 9.8254 5.65123 9.64959 5.47541C9.47377 5.2996 9.375 5.06114 9.375 4.8125V3.32187ZM13.125 16.0625C13.125 16.3111 13.0262 16.5496 12.8504 16.7254C12.6746 16.9012 12.4361 17 12.1875 17H2.8125C2.56386 17 2.3254 16.9012 2.14959 16.7254C1.97377 16.5496 1.875 16.3111 1.875 16.0625V2.9375C1.875 2.68886 1.97377 2.4504 2.14959 2.27459C2.3254 2.09877 2.56386 2 2.8125 2H7.5V4.8125C7.5 5.55842 7.79632 6.27379 8.32376 6.80124C8.85121 7.32868 9.56658 7.625 10.3125 7.625H13.125V16.0625Z"
                        fill="#2671D9"
                      />
                    </svg>
                  </div>
                  <div class="relative w-full">
                    <!-- Input file yang tersembunyi -->
                    <input type="file" id="fileInputEvaluasi" class="hidden" @change="handleFileChange('Evaluasi', $event)" ref="fileInputEvaluasi" />
                    <!-- Tombol yang menampilkan nama file dan ukuran -->
                    <button class="ml-4 block text-left p-2 bg-[#FFFFFF] w-full" @click="openFileDialog('Evaluasi')">
                      <div class="flex justify-between items-center">
                        <div class="overflow-hidden">
                          <span class="block text-sm font-semibold text-[#333333] font-sans text-[14px] truncate">
                            {{ fileDetails.Evaluasi.fileName || "evaluasi.pdf" }}
                          </span>
                          <span class="block text-xs">
                            {{ fileDetails.Evaluasi.fileSize || "" }}
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
        <div class="flex flex-row w-[1046px] h-auto py-4 ml-4">
          <div class="flex flex-col w-[511px] h-auto">
            <div class="flex items-center">
              <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">Tanggapan</h1>
            </div>
            <div class="w-full h-[88px] bg-[#E0E0E0] border-[#E5E7E9] border-[1px] rounded-lg mt-2 flex items-start justify-start">
              <div class="flex p-4">
                <div class="ml-4">
                  <span class="block text-[#333333] font-sans text-[14px]">Lorem ipsum dolor sit amet consectetur. Tincidunt convallis sit quisque.</span>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col w-[520px] h-auto ml-4">
            <div class="flex items-center">
              <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">Catatan Approval</h1>
            </div>
            <textarea type="text" placeholder="Masukkan catatan approval" class="w-full h-[88px] text-[#000000] font-sans text-[14px] focus:border-[#9C9C9C] focus:outline-none border-[1px] border-[#E5E7E9] rounded-lg p-2 mt-2 bg-[#FFFFFF]">
            </textarea>
          </div>
        </div>
        <div class="w-[1046px] h-[1px] bg-[#E5E7E9] items-center transform ml-4 mt-6"></div>
        <div class="flex flex-row w-[1046px] h-auto ml-4 py-9">
          <button class="absolute bottom-[12px] right-[123px] mt-4 flex">
            <div class="flex items-center justify-center w-[101px] h-[40px] rounded-lg bg-[#FFFFFF] border-[#2671D9] border-[1px] hover:bg-[#DBEAFE] cursor-pointer transition-all">
              <span class="text-[14px] font-sans font-semibold text-[#2671D9] ml-3 mt-[9px] mr-3 mb-[9px]">Stop Clock</span>
            </div>
          </button>
          <button @click="showPenyelesaianMoUPopup = true" class="absolute bottom-[12px] right-[24px] flex">
            <div class="flex items-center justify-center w-[83px] h-[40px] rounded-lg bg-[#E6E6E6] border-[#FFFFFF] border-[1px]">
              <span class="text-[14px] font-sans font-semibold text-[#7F7F80] ml-3 mt-[9px] mr-3 mb-[9px]">Selesai</span>
            </div>
          </button>
        </div>
        <div v-if="showPenyelesaianMoUPopup" class="fixed inset-0 flex items-center justify-center bg-[#1F2937] bg-opacity-50">
          <div class="bg-[#FFFFFF] rounded-lg shadow-lg w-[502px] h-[508px]">
            <div class="flex w-[502px] h-[76px] bg-[#E9F1FB] border-[#DEDEDE] rounded-tl-lg rounded-tr-lg">
              <h1 class="w-[380px] h-[28px] ml-6 mt-6 font-sans font-bold text-[20px] text-[#000000]">Progress Kemitraan (MoU/NDA) Selesai</h1>
              <button @click="closePenyelesaianMoUPopup" class="text-[#CCCCCC] absolute mt-5 ml-[472px] text-[20px]">&times;</button>
            </div>
            <div class="flex flex-col justify-start items-start mt-4 ml-6 mr-8">
              <h1 class="w-[454px] h-[56px] items-start text-[16px] font-sans font-normal text-[#333333] mb-2">Silahkan mengisi form berikut untuk penyelesaian dokumen MoU/NDA.</h1>
              <div class="relative flex flex-col w-[454.5px] h-[72px]">
                <div class="flex items-center">
                  <h1 class="w-[140px] h-[24px] font-sans text-[16px] font-bold text-[#4D5E80]">Nomor MoU/NDA</h1>
                  <span class="text-[#FF5656] font-bold ml-1">*</span>
                </div>
                <input
                  v-model="nomorMoU"
                  type="text"
                  placeholder="Masukkan Nomor MoU/NDA"
                  class="w-[454.5px] h-[40px] rounded-md bg-[#FFFFFF] border border-[#E5E7E9] mt-2 pl-4 font-sans text-[14px] text-[#7F7F80] font-extralight outline-none"
                />
              </div>
              <div class="relative flex flex-col w-[454.5px] h-[72px] mt-4">
                <div class="flex items-center">
                  <h1 class="w-[122px] h-[24px] font-sans text-[16px] font-bold text-[#4D5E80]">Tanggal Selesai</h1>
                  <span class="text-[#FF5656] font-bold">*</span>
                </div>
                <input v-model="selectedDateSelesai" type="text" placeholder="mm/dd/yyyy" class="border rounded mt-2 p-2 pl-3 w-full cursor-pointer" @focus="toggleDatePickerSelesai" readonly />
                <span class="absolute right-3 top-[45px] cursor-pointer" @click="toggleDatePickerSelesai">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.50016 0.333496C3.86835 0.333496 4.16683 0.631973 4.16683 1.00016V1.8335H9.8335V1.00016C9.8335 0.631973 10.132 0.333496 10.5002 0.333496C10.8684 0.333496 11.1668 0.631973 11.1668 1.00016V1.8335H11.5002C12.6968 1.8335 13.6668 2.80355 13.6668 4.00016V11.5002C13.6668 12.6968 12.6968 13.6668 11.5002 13.6668H2.50016C1.30355 13.6668 0.333496 12.6968 0.333496 11.5002V4.00016C0.333496 2.80355 1.30355 1.8335 2.50016 1.8335H2.8335V1.00016C2.8335 0.631973 3.13197 0.333496 3.50016 0.333496ZM2.50016 3.16683C2.03993 3.16683 1.66683 3.53993 1.66683 4.00016V4.49955C1.92336 4.39257 2.20486 4.3335 2.50016 4.3335H11.5002C11.7955 4.3335 12.077 4.39257 12.3335 4.49955V4.00016C12.3335 3.53993 11.9604 3.16683 11.5002 3.16683H2.50016ZM12.3335 6.50016C12.3335 6.03993 11.9604 5.66683 11.5002 5.66683H2.50016C2.03993 5.66683 1.66683 6.03993 1.66683 6.50016V11.5002C1.66683 11.9604 2.03993 12.3335 2.50016 12.3335H11.5002C11.9604 12.3335 12.3335 11.9604 12.3335 11.5002V6.50016Z"
                      fill="#2671D9"
                    />
                  </svg>
                </span>
                <input
                  v-if="showDatePickerSelesai"
                  type="date"
                  class="custom-date-picker absolute border border-[#E5E7E9] font-sans text-[10px] text-[#9C9C9C] rounded-lg p-2 w-[120px] z-10 hover:bg-[#DBEAFE] cursor-pointer transition-all"
                  style="top: 105%; right: 0"
                  @change="updateDateSelesai"
                  @blur="hideDatePickerSelesai"
                />
              </div>
              <div class="flex flex-col w-[454.5px] h-[72px] mt-4">
                <div class="flex items-center">
                  <h1 class="w-[286px] h-[24px] font-sans text-[16px] font-bold text-[#4D5E80]">Nama Pejabat yang Bertanda Tangan</h1>
                  <span class="text-[#FF5656] font-bold">*</span>
                </div>
                <input
                  v-model="namaPejabat"
                  type="text"
                  placeholder="Cari Nama Pejabat"
                  class="w-[454.5px] h-[40px] rounded-md bg-[#FFFFFF] border border-[#E5E7E9] mt-2 pl-4 font-sans text-[14px] text-[#7F7F80] font-extralight outline-none"
                />
                <span class="absolute mt-[45px] ml-[428px] cursor-pointer">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.99967 1.66634C3.60644 1.66634 1.66634 3.60644 1.66634 5.99967C1.66634 8.39291 3.60644 10.333 5.99967 10.333C7.19648 10.333 8.27889 9.84871 9.0638 9.0638C9.84871 8.27889 10.333 7.19648 10.333 5.99967C10.333 3.60644 8.39291 1.66634 5.99967 1.66634ZM0.333008 5.99967C0.333008 2.87006 2.87006 0.333008 5.99967 0.333008C9.12929 0.333008 11.6663 2.87006 11.6663 5.99967C11.6663 7.32398 11.2114 8.54294 10.4503 9.50751L13.4711 12.5283C13.7314 12.7886 13.7314 13.2107 13.4711 13.4711C13.2107 13.7314 12.7886 13.7314 12.5283 13.4711L9.50751 10.4503C8.54294 11.2114 7.32398 11.6663 5.99967 11.6663C2.87006 11.6663 0.333008 9.12929 0.333008 5.99967Z"
                      fill="#2671D9"
                    />
                  </svg>
                </span>
              </div>
              <!-- Tombol Kirim -->
              <button @click="Progress" :disabled="!isFormComplete" class="absolute mt-[350px] ml-[378px] flex">
                <div :class="{ 'bg-[#2671D9] text-[#FFFFFF]': isFormComplete, 'bg-[#E6E6E6] text-[#7F7F80]': !isFormComplete }" class="flex items-center justify-center w-[78px] h-[40px] rounded-lg border-[1px]">
                  <span class="text-[14px] font-sans font-semibold ml-3 mt-[9px] mr-3 mb-[9px]">Kirim</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="showDisetujuiPopup" class="fixed inset-0 flex items-center justify-center bg-[#1F2937] bg-opacity-50">
        <div class="bg-[#FFFFFF] rounded-lg shadow-lg w-[360px] h-[452px]">
          <div class="flex flex-col items-center mt-14 ml-8 mr-8 mb-14">
            <img src="@/assets/image/pengajuanditerima.png" class="w-[200px] h-[160px] mb-4" />
            <h2 class="text-[20px] font-sans font-semibold text-[#333333] mb-2">Progress Kemitraan Selesai</h2>
            <p class="text-[16px] font-sans text-[#333333] font-normal mb-6 text-center">Progress kemitraan MoU/NDA telah selesai. Selanjutnya akan dilakukan proses approval oleh atasan.</p>
            <button @click="closeDisetujuiPopup" class="bg-[#2671D9] text-[#FFFFFF] text-[14px] p-2 rounded-lg w-full">Selesai</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressMoUPopup from "./ProgressMoUPopup.vue";

export default {
  components: {
    ProgressMoUPopup,
  },
  data() {
    return {
      fileDetails: {
        KKB: { fileName: "", fileSize: "" },
        KKR: { fileName: "", fileSize: "" },
        KKF: { fileName: "", fileSize: "" },
        KKO: { fileName: "", fileSize: "" },
        ProposalMitra: { fileName: "", fileSize: "" },
        DokumenSuratMenyurat: { fileName: "", fileSize: "" },
        DokumenLainnya: { fileName: "", fileSize: "" },
        SuratPenawaran: { fileName: "", fileSize: "" },
        Proposal: { fileName: "", fileSize: "" },
        Evaluasi: { fileName: "", fileSize: "" },
      },
      isDropdownArrowOpen: false,
      isDropdownArrowOpen1: false,
      isDropdownArrowOpen2: false,
      isDropdownArrowOpen3: false,
      isDropdownArrowOpen4: false,
      showDropdown: false,
      showPopup: false,
      showPenyelesaianMoUPopup: false,
      showProgressPopup: false,
      showDisetujuiPopup: false,
      fileName: "", // Nama file yang dipilih
      fileSize: "", // Ukuran file yang dipilih
      selectedDateSelesai: "", // Untuk menyimpan tanggal selesai
      jangkaWaktuPerjanjian: "",
      showDatePickerSelesai: false,
      showDatePickerPerjanjian: false,
      nomorMoU: "",
      namaPejabat: "",
    };
  },
  computed: {
    isFormComplete() {
      return this.nomorMoU && this.selectedDateSelesai && this.namaPejabat;
    },
  },
  methods: {
    toggleDropdownArrow() {
      this.isDropdownArrowOpen = !this.isDropdownArrowOpen;
    },
    toggleDropdownArrow1() {
      this.isDropdownArrowOpen1 = !this.isDropdownArrowOpen1;
    },
    toggleDropdownArrow2() {
      this.isDropdownArrowOpen2 = !this.isDropdownArrowOpen2;
    },
    toggleDropdownArrow3() {
      this.isDropdownArrowOpen3 = !this.isDropdownArrowOpen3;
    },
    toggleDropdownArrow4() {
      this.isDropdownArrowOpen4 = !this.isDropdownArrowOpen4;
    },
    navigateToDetail() {
      this.$router.push("/proses");
    },
    removeFile(type) {
      this.fileDetails[type] = { fileName: "", fileSize: "" };
      this.$refs[`fileInput${type}`].value = ""; // Clear the file input
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
    toggleDatePickerSelesai() {
      this.showDatePickerSelesai = !this.showDatePickerSelesai;
    },
    hideDatePickerSelesai() {
      this.showDatePickerSelesai = false;
    },
    toggleDatePickerPerjanjian() {
      this.showDatePickerPerjanjian = !this.showDatePickerPerjanjian;
    },
    hideDatePickerPerjanjian() {
      this.showDatePickerPerjanjian = false;
    },
    formatDateToDDMMYYYY(date) {
      const d = new Date(date);
      const day = ("0" + d.getDate()).slice(-2);
      const month = ("0" + (d.getMonth() + 1)).slice(-2);
      const year = d.getFullYear();
      return `${day}/${month}/${year}`;
    },
    updateDateSelesai(event) {
      const formattedDate = this.formatDateToDDMMYYYY(event.target.value);
      this.selectedDateSelesai = formattedDate;
      if (this.jangkaWaktuPerjanjian) {
        const endDate = this.jangkaWaktuPerjanjian.split(" s.d ")[1];
        this.jangkaWaktuPerjanjian = `${this.selectedDateSelesai} s.d ${endDate}`;
      }

      this.showDatePickerSelesai = false;
    },
    updateDatePerjanjian(event) {
      const endDate = this.formatDateToDDMMYYYY(event.target.value);
      this.jangkaWaktuPerjanjian = `${this.selectedDateSelesai} s.d ${endDate}`;
      this.showDatePickerPerjanjian = false;
    },
    closePenyelesaianMoUPopup() {
      this.showPenyelesaianMoUPopup = false;
    },
    Progress() {
      this.showDisetujuiPopup = true;
      this.showPenyelesaianMoUPopup = false;
    },
    closeDisetujuiPopup() {
      this.showDisetujuiPopup = false;
    },
  },
};
</script>

<style>
.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.z-10 {
  z-index: 10;
}

.custom-date-picker {
  appearance: none;
  -webkit-appearance: none;
  background-image: url('data:image/svg+xml;utf8,<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.50016 0.333496C3.86835 0.333496 4.16683 0.631973 4.16683 1.00016V1.8335H9.8335V1.00016C9.8335 0.631973 10.132 0.333496 10.5002 0.333496C10.8684 0.333496 11.1668 0.631973 11.1668 1.00016V1.8335H11.5002C12.6968 1.8335 13.6668 2.80355 13.6668 4.00016V11.5002C13.6668 12.6968 12.6968 13.6668 11.5002 13.6668H2.50016C1.30355 13.6668 0.333496 12.6968 0.333496 11.5002V4.00016C0.333496 2.80355 1.30355 1.8335 2.50016 1.8335H2.8335V1.00016C2.8335 0.631973 3.13197 0.333496 3.50016 0.333496ZM2.50016 3.16683C2.03993 3.16683 1.66683 3.53993 1.66683 4.00016V4.49955C1.92336 4.39257 2.20486 4.3335 2.50016 4.3335H11.5002C11.7955 4.3335 12.077 4.39257 12.3335 4.49955V4.00016C12.3335 3.53993 11.9604 3.16683 11.5002 3.16683H2.50016ZM12.3335 6.50016C12.3335 6.03993 11.9604 5.66683 11.5002 5.66683H2.50016C2.03993 5.66683 1.66683 6.03993 1.66683 6.50016V11.5002C1.66683 11.9604 2.03993 12.3335 2.50016 12.3335H11.5002C11.9604 12.3335 12.3335 11.9604 12.3335 11.5002V6.50016Z" fill="%232671D9"/></svg>');
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 16px 16px;
}

.rotate-180 {
  transform: rotate(180deg);
}
</style>
