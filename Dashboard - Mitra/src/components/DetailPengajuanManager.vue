<template>
  <div>
    <div class="flex w-auto h-[54px] rounded-lg bg-[#FFFFFF] border-collapse">
      <button @click="navigateToDetail">
        <h1 class="w-[51px] h-[22px] font-sans text-[#2671D9] text-[14px] font-semibold ml-6 mt-4 mb-4">Masuk</h1>
      </button>
      <svg width="8" height="12" class="mt-[21px] ml-2 mr-2" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <div class="relative h-[2009px] w-[1086px] rounded-lg bg-[#FFFFFF] border-collapse">
        <div class="flex">
          <img src="../assets/image/Rectangle.png" class="ml-4 mt-[10px] h-[28px]" />
          <h1 class="font-sans text-[20px] text-[#333333] mt-2 ml-[5px] font-semibold">Detail Pengajuan</h1>
        </div>
        <h1 class="items-start justify-center px-2 ml-2 text-[#9C9C9C]">#no_pengajuan</h1>
        <button @click="showPopup = true" class="absolute top-[12px] right-[20px]">
          <div class="flex items-center justify-center w-[81px] h-[40px] rounded-lg bg-[#2671D9] border-[1px] border-[#E5E7E9]">
            <span class="w-[57px] h-[22px] text-[14px] font-sans font-medium text-[#FFFFFF] ml-3 mt-[9px] mr-3 mb-[9px]">Dispose</span>
          </div>
        </button>
        <DisposePopUp :isVisible="showPopup" @close="showPopup = false" />

        <div class="flex items-center mt-4 ml-4 w-[1046px] h-[48px] rounded-lg bg-[#FFFFFF] border-[#E5E7E9] border-[1px]">
          <div class="w-[30px] h-[48px] bg-[#4791F2] rounded-tl-md rounded-bl-md"></div>
          <div class="text-[16px] font-sans font-bold text-[#333333] ml-[10px] mt-[14.5px] mb-[14.5px]">Informasi Umum</div>
          <button @click="toggleDropdownArrow" class="ml-auto mr-4 flex py-1 px-1 rounded-full hover:bg-[#FFFFFF]">
            <svg class="w-4 h-4 text-[#2671D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <div class="flex flex-col w-[1046px] h-[320px] bg-[#FFFFFF] border-collapse rounded-bl-md rounded-br-md border-[#E5E7E9] border-[1px] ml-4 px-6 py-6">
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
        <div class="flex items-center mt-4 ml-4 w-[1046px] h-[48px] rounded-lg bg-[#FFFFFF] border-[#E5E7E9] border-[1px]">
          <div class="w-[30px] h-[48px] bg-[#FFA229] rounded-tl-md rounded-bl-md"></div>
          <div class="text-[16px] font-sans font-bold text-[#333333] ml-[10px] mt-[14.5px] mb-[14.5px]">Lingkup Pekerjaan</div>
          <button @click="toggleDropdownArrow" class="ml-auto mr-4 flex py-1 px-1 rounded-full hover:bg-[#FFFFFF]">
            <svg class="w-4 h-4 text-[#2671D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <div class="flex flex-col w-[1046px] h-[270px] bg-[#FFFFFF] border-[#E5E7E9] border-[1px] ml-4 px-6 py-6 rounded-bl-md rounded-br-md">
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
        <div class="flex items-center mt-4 ml-4 w-[1046px] h-[48px] rounded-lg bg-[#FFFFFF] border-[#E5E7E9] border-[1px]">
          <div class="w-[30px] h-[48px] bg-[#0FB37D] rounded-tl-md rounded-bl-md"></div>
          <div class="text-[16px] font-sans font-bold text-[#333333] ml-[10px] mt-[14.5px] mb-[14.5px]">Informasi RAB</div>
          <button @click="toggleDropdownArrow" class="ml-auto mr-4 flex py-1 px-1 rounded-full hover:bg-[#FFFFFF]">
            <svg class="w-4 h-4 text-[#2671D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <div class="flex items-center w-[1046px] h-[430px] bg-[#FFFFFF] border-[#E5E7E9] border-[1px] ml-4 px-6 py-6 rounded-bl-md rounded-br-md">
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
        <div class="flex items-center mt-4 ml-4 w-[1046px] h-[48px] rounded-lg bg-[#FFFFFF] border-[#E5E7E9] border-[1px]">
          <div class="w-[30px] h-[48px] bg-[#F42495] rounded-tl-md rounded-bl-md"></div>
          <div class="text-[16px] font-sans font-bold text-[#333333] ml-[10px] mt-[14.5px] mb-[14.5px]">Berkas Lampiran</div>
          <button @click="toggleDropdownArrow" class="ml-auto mr-4 flex py-1 px-1 rounded-full hover:bg-[#FFFFFF]">
            <svg class="w-4 h-4 text-[#2671D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <div class="flex flex-wrap w-[1046px] bg-[#FFFFFF] border-[#E5E7E9] border-[1px] ml-4 px-5 py-6 rounded-bl-md rounded-br-md gap-6">
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
        <div class="flex flex-row w-[1046px] h-auto mt-4 ml-4">
          <div class="flex flex-col w-[511px] h-auto">
            <div class="flex items-center">
              <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">Tanggapan</h1>
            </div>
            <div class="w-full h-[88px] bg-[#E0E0E0] border-[#E5E7E9] border-[1px] rounded-lg mt-2 flex items-start justify-start">
              <div class="flex p-4">
                <div class="ml-4">
                  <span class="block text-[#4D5E80] font-sans text-[14px] font-semibold">Lorem ipsum dolor sit amet consectetur. Tincidunt convallis sit quisque.</span>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col w-[511px] h-auto ml-4">
            <div class="flex items-center">
              <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">Approval</h1>
            </div>
            <div class="w-full h-[88px] bg-[#E0E0E0] border-[#E5E7E9] border-[1px] rounded-lg mt-2 flex items-start justify-start">
              <div class="flex p-4">
                <div class="ml-4">
                  <span class="block text-[#4D5E80] font-sans text-[14px] font-semibold">Lorem ipsum dolor sit amet consectetur. Tincidunt convallis sit quisque.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DisposePopUp from "../components/DisposePopUp.vue";

export default {
  components: {
    DisposePopUp,
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
      },
      showDropdown: false,
      showPopup: false,
      fileName: "", // Nama file yang dipilih
      fileSize: "", // Ukuran file yang dipilih
    };
  },
  methods: {
    navigateToDetail() {
      this.$router.push("/masukmanager");
    },
    openFileDialog(section) {
      const inputElement = this.$refs[`fileInput${section}`];
      if (inputElement) {
        inputElement.click();
      } else {
        console.error(`File input for section ${section} not found.`);
      }
    },
    removeFile(type) {
      this.fileDetails[type] = { fileName: "", fileSize: "" };
      this.$refs[`fileInput${type}`].value = ""; // Clear the file input
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
};
</script>

<style></style>
