<template>
    <div>
      <div class="flex w-auto h-[54px] rounded-lg bg-[#FFFFFF] border-collapse">
        <button @click="navigateToDetail">
          <h1 class="w-[51px] h-[22px] font-sans text-[#2671D9] text-[14px] font-semibold ml-6 mr-1 mt-4 mb-4">Approval</h1>
        </button>
          <img src="../assets/image/NextIcon.png" class="w-[16px] h-[16px] mt-[19px] ml-1">
          <span class="w-[119px] h-[22px] font-sans text-[#7F7F80] text-[14px] font-semibold mt-4">Detail Pengajuan</span>
      </div>
      <div class="px-4 py-3">
        <div class="relative h-[2058px] w-[1086px] rounded-lg bg-[#FFFFFF] border-collapse">
          <div class="flex">
            <img src="../assets/image/Rectangle.png" class="ml-4 mt-[10px] h-[28px]">
            <h1 class="font-sans text-[20px] text-[#333333] mt-2 ml-[5px] font-semibold">Detail Pengajuan</h1>
          </div>
          <h1 class="items-start justify-center px-2 ml-2 text-[#9C9C9C]">#no_pengajuan</h1>
          <div class="flex items-center w-[1046px] h-[55px] rounded-lg border-[#4791F2] border-[1px] bg-[#e7f1fd] ml-4 mt-4 mb-4">
            <h1 class="text-[16px] font-semibold text-[#2671D9] font-sans ml-4 mt-4 mb-5">Info Approval :</h1>
            <span class="text-[16px] text-[#333333] font-sans ml-1 mt-4 mb-5">Pengajuan ini memerlukan approval untuk stop clock</span>
          </div>
  
          <div class="flex items-center mt-4 ml-4 w-[1046px] h-[48px] rounded-lg bg-[#FFFFFF] border-[#E5E7E9] border-[1px]">
            <div class="w-[30px] h-[48px] bg-[#4791F2] rounded-tl-md rounded-bl-md  "></div>
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
                      <img src="../assets/image/arrow.png" alt="arrow" class="ml-[9px] w-[14px] h-[10px]">
                    </div>
                  </th>
                  <th class="p-2 border border-[#E5E7E9]">
                    <div class="flex items-center justify-between">
                      <span class="px-3">Pekerjaan</span>
                      <img src="../assets/image/arrow.png" alt="arrow" class="ml-[9px] w-[14px] h-[10px]">
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
            <table class="table-auto w-auto text-left rounded-lg border-collapse border-[1px] border-[#E5E7E9] mt-3 ">
              <thead>
                <tr class="bg-[#FFFFFF] text-[12px] font-sans text-[#4D5E80] font-semibold">
                  <th class="p-2 border border-[#E5E7E9] w-[74px] h-[48px]">
                    <div class="flex items-center">
                      <span>No.</span>
                      <img src="../assets/image/arrow.png" alt="arrow" class="ml-[9px] w-[14px] h-[10px]">
                    </div>
                  </th>
                  <th class="p-2 border border-[#E5E7E9]">
                    <div class="flex items-center justify-between w-[231px]">
                      <span class="px-3">Aksi</span>
                      <img src="../assets/image/arrow.png" alt="arrow" class="ml-[9px] w-[14px] h-[10px]">
                    </div>
                  </th>
                  <th class="p-2 border border-[#E5E7E9]">
                    <div class="flex items-center justify-between w-[231px]">
                      <span class="px-3">Deskripsi</span>
                      <img src="../assets/image/arrow.png" alt="arrow" class="ml-[9px] w-[14px] h-[10px]">
                    </div>
                  </th>
                  <th class="p-2 border border-[#E5E7E9]">
                    <div class="flex items-center w-[300px] justify-between">
                      <span class="px-3">Pelanggan</span>
                      <img src="../assets/image/arrow.png" alt="arrow" class="ml-[9px] w-[14px] h-[10px]">
                    </div>
                  </th>
                  <th class="p-2 border border-[#E5E7E9]">
                    <div class="flex items-center justify-between">
                      <span class="px-3">PLN/NonPLN</span>
                      <img src="../assets/image/arrow.png" alt="arrow" class="ml-[9px] w-[14px] h-[10px]">
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
                        <img src="../assets/image/DocumentIcon.png" alt="Document Icon" class="w-5 h-5">
                    </div>
                    <div class="relative w-full">
                        <!-- Input file yang tersembunyi -->
                        <input 
                            type="file" 
                            id="fileInputKKB" 
                            class="hidden" 
                            @change="handleFileChange('KKB', $event)" 
                            ref="fileInputKKB"
                        />
                        <!-- Tombol yang menampilkan nama file dan ukuran -->
                        <button 
                            class="ml-4 block text-left p-2 bg-[#FFFFFF] w-full"
                            @click="openFileDialog('KKB')"
                        >
                            <div class="flex justify-between items-center">
                                <div class="overflow-hidden">
                                    <span class="block text-sm font-semibold text-[#333333] font-sans text-[14px] truncate">
                                        {{ fileDetails.KKB.fileName || 'Pilih File/Dokumen Anda' }}
                                    </span>
                                    <span class="block text-xs">
                                        {{ fileDetails.KKB.fileSize || '' }}
                                    </span>
                                </div>
                                <!-- Remove button -->
                                <button 
                                    v-if="fileDetails.KKB.fileName" 
                                    @click.stop="removeFile('KKB')" 
                                    class="text-[#EF4444] ml-2 text-[12px] font-sans"
                                >
                                    Remove
                                </button>
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
                        <img src="../assets/image/DocumentIcon.png" alt="Document Icon" class="w-5 h-5">
                    </div>
                    <div class="relative w-full">
                        <!-- Input file yang tersembunyi -->
                        <input 
                            type="file" 
                            id="fileInputKKR" 
                            class="hidden" 
                            @change="handleFileChange('KKR', $event)" 
                            ref="fileInputKKR"
                        />
                        <!-- Tombol yang menampilkan nama file dan ukuran -->
                        <button 
                            class="ml-4 block text-left p-2 bg-[#FFFFFF] w-full"
                            @click="openFileDialog('KKR')"
                        >
                            <div class="flex justify-between items-center">
                                <div class="overflow-hidden">
                                    <span class="block text-sm font-semibold text-[#333333] font-sans text-[14px] truncate">
                                        {{ fileDetails.KKR.fileName || 'Pilih File/Dokumen Anda' }}
                                    </span>
                                    <span class="block text-xs">
                                        {{ fileDetails.KKR.fileSize || '' }}
                                    </span>
                                </div>
                                <!-- Remove button -->
                                <button 
                                    v-if="fileDetails.KKR.fileName" 
                                    @click.stop="removeFile('KKR')" 
                                    class="text-[#EF4444] ml-2 text-[12px] font-sans"
                                >
                                    Remove
                                </button>
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
                        <img src="../assets/image/DocumentIcon.png" alt="Document Icon" class="w-5 h-5">
                    </div>
                    <div class="relative w-full">
                        <!-- Input file yang tersembunyi -->
                        <input 
                            type="file" 
                            id="fileInputKKF" 
                            class="hidden" 
                            @change="handleFileChange('KKF', $event)" 
                            ref="fileInputKKF"
                        />
                        <!-- Tombol yang menampilkan nama file dan ukuran -->
                        <button 
                            class="ml-4 block text-left p-2 bg-[#FFFFFF] w-full"
                            @click="openFileDialog('KKF')"
                        >
                            <div class="flex justify-between items-center">
                                <div class="overflow-hidden">
                                    <span class="block text-sm font-semibold text-[#333333] font-sans text-[14px] truncate">
                                        {{ fileDetails.KKF.fileName || 'Pilih File/Dokumen Anda' }}
                                    </span>
                                    <span class="block text-xs">
                                        {{ fileDetails.KKF.fileSize || '' }}
                                    </span>
                                </div>
                                <!-- Remove button -->
                                <button 
                                    v-if="fileDetails.KKF.fileName" 
                                    @click.stop="removeFile('KKF')" 
                                    class="text-[#EF4444] ml-2 text-[12px] font-sans"
                                >
                                    Remove
                                </button>
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
                        <img src="../assets/image/DocumentIcon.png" alt="Document Icon" class="w-5 h-5">
                    </div>
                    <div class="relative w-full">
                        <!-- Input file yang tersembunyi -->
                        <input 
                            type="file" 
                            id="fileInputKKO" 
                            class="hidden" 
                            @change="handleFileChange('KKO', $event)" 
                            ref="fileInputKKO"
                        />
                        <!-- Tombol yang menampilkan nama file dan ukuran -->
                        <button 
                            class="ml-4 block text-left p-2 bg-[#FFFFFF] w-full"
                            @click="openFileDialog('KKO')"
                        >
                            <div class="flex justify-between items-center">
                                <div class="overflow-hidden">
                                    <span class="block text-sm font-semibold text-[#333333] font-sans text-[14px] truncate">
                                        {{ fileDetails.KKO.fileName || 'Pilih File/Dokumen Anda' }}
                                    </span>
                                    <span class="block text-xs">
                                        {{ fileDetails.KKO.fileSize || '' }}
                                    </span>
                                </div>
                                <!-- Remove button -->
                                <button 
                                    v-if="fileDetails.KKO.fileName" 
                                    @click.stop="removeFile('KKO')" 
                                    class="text-[#EF4444] ml-2 text-[12px] font-sans"
                                >
                                    Remove
                                </button>
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
                        <img src="../assets/image/DocumentIcon.png" alt="Document Icon" class="w-5 h-5">
                    </div>
                    <div class="relative w-full">
                        <!-- Input file yang tersembunyi -->
                        <input 
                            type="file" 
                            id="fileInputProposalMitra" 
                            class="hidden" 
                            @change="handleFileChange('ProposalMitra', $event)" 
                            ref="fileInputProposalMitra"
                        />
                        <!-- Tombol yang menampilkan nama file dan ukuran -->
                        <button 
                            class="ml-4 block text-left p-2 bg-[#FFFFFF] w-full"
                            @click="openFileDialog('ProposalMitra')"
                        >
                            <div class="flex justify-between items-center">
                                <div class="overflow-hidden">
                                    <span class="block text-sm font-semibold text-[#333333] font-sans text-[14px] truncate">
                                        {{ fileDetails.ProposalMitra?.fileName || 'Pilih File/Dokumen Anda' }}
                                    </span>
                                    <span class="block text-xs">
                                        {{ fileDetails.ProposalMitra?.fileSize || '' }}
                                    </span>
                                </div>
                                <!-- Remove button -->
                                <button 
                                    v-if="fileDetails.ProposalMitra?.fileName" 
                                    @click.stop="removeFile('ProposalMitra')" 
                                    class="text-[#EF4444] ml-2 text-[12px] font-sans"
                                >
                                    Remove
                                </button>
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
                        <img src="../assets/image/DocumentIcon.png" alt="Document Icon" class="w-5 h-5">
                    </div>
                    <div class="relative w-full">
                        <!-- Input file yang tersembunyi -->
                        <input 
                            type="file" 
                            id="fileInputDokumenSuratMenyurat" 
                            class="hidden" 
                            @change="handleFileChange('DokumenSuratMenyurat', $event)" 
                            ref="fileInputDokumenSuratMenyurat"
                        />
                        <!-- Tombol yang menampilkan nama file dan ukuran -->
                        <button 
                            class="ml-4 block text-left p-2 bg-[#FFFFFF] w-full"
                            @click="openFileDialog('DokumenSuratMenyurat')"
                        >
                            <div class="flex justify-between items-center">
                                <div class="overflow-hidden">
                                    <span class="block text-sm font-semibold text-[#333333] font-sans text-[14px] truncate">
                                        {{ fileDetails.DokumenSuratMenyurat?.fileName || 'Pilih File/Dokumen Anda' }}
                                    </span>
                                    <span class="block text-xs">
                                        {{ fileDetails.DokumenSuratMenyurat?.fileSize || '' }}
                                    </span>
                                </div>
                                <!-- Remove button -->
                                <button 
                                    v-if="fileDetails.DokumenSuratMenyurat?.fileName" 
                                    @click.stop="removeFile('DokumenSuratMenyurat')" 
                                    class="text-[#EF4444] ml-2 text-[12px] font-sans"
                                >
                                    Remove
                                </button>
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
                        <img src="../assets/image/DocumentIcon.png" alt="Document Icon" class="w-5 h-5">
                    </div>
                    <div class="relative w-full">
                        <!-- Input file yang tersembunyi -->
                        <input 
                            type="file" 
                            id="fileInputDokumenLainnya" 
                            class="hidden" 
                            @change="handleFileChange('DokumenLainnya', $event)" 
                            ref="fileInputDokumenLainnya"
                        />
                        <!-- Tombol yang menampilkan nama file dan ukuran -->
                        <button 
                            class="ml-4 block text-left p-2 bg-[#FFFFFF] w-full"
                            @click="openFileDialog('DokumenLainnya')"
                        >
                            <div class="flex justify-between items-center">
                                <div class="overflow-hidden">
                                    <span class="block text-sm font-semibold text-[#333333] font-sans text-[14px] truncate">
                                        {{ fileDetails.DokumenLainnya?.fileName || 'Pilih File/Dokumen Anda' }}
                                    </span>
                                    <span class="block text-xs">
                                        {{ fileDetails.DokumenLainnya?.fileSize || '' }}
                                    </span>
                                </div>
                                <!-- Remove button -->
                                <button 
                                    v-if="fileDetails.DokumenLainnya?.fileName" 
                                    @click.stop="removeFile('DokumenLainnya')" 
                                    class="text-[#EF4444] ml-2 text-[12px] font-sans"
                                >
                                    Remove
                                </button>
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
                    <span class="block text-[#333333] font-sans text-[14px]">Lorem ipsum dolor sit amet consectetur. Tincidunt convallis sit quisque.</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col w-[520px] h-auto ml-4">
              <div class="flex items-center">
                <h1 class="font-sans text-[#4D5E80] text-[16px] font-semibold">Catatan Approval</h1>
              </div>
              <textarea 
                type="text"
                placeholder="Masukkan catatan approval" 
                class="w-full h-[88px] text-[#000000] font-sans text-[14px] focus:border-[#9C9C9C] focus:outline-none border-[1px] border-[#E5E7E9] rounded-lg p-2 mt-2 bg-[#FFFFFF]">
              </textarea>
            </div>
          </div>
          <button class="absolute bottom-[12px] right-[123px] flex">
            <div class="flex items-center justify-center w-[69px] h-[40px] rounded-lg bg-[#FFFFFF] border-[#C53830] border-[1px]">
                <span class="text-[14px] font-sans text-[#C53830] ml-3 mt-[9px] mr-3 mb-[9px]">Reject</span>
            </div>
            </button>
            <button @click="showPopup = true" class="absolute bottom-[12px] right-[24px] flex">
                <div class="flex items-center justify-center w-[83px] h-[40px] rounded-lg bg-[#2671D9] border-[#FFFFFF] border-[1px]">
                    <span class="text-[14px] font-sans text-[#FFFFFF] ml-3 mt-[9px] mr-3 mb-[9px]">Approve</span>
                </div>
            </button>
            <ApprovalStopClockPopup :isVisible="showPopup" @close="showPopup = false" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  import ApprovalStopClockPopup from '../components/ApprovalStopclockPopup.vue'
  
  export default {
    components: {
        ApprovalStopClockPopup,
    },
      data() {
      return {
        fileDetails: {
          KKB: { fileName: '', fileSize: '' },
          KKR: { fileName: '', fileSize: '' },
          KKF: { fileName: '', fileSize: '' },
          KKO: { fileName: '', fileSize: '' },
          ProposalMitra: { fileName: '', fileSize: '' },
          DokumenSuratMenyurat: { fileName: '', fileSize: '' },
          DokumenLainnya: { fileName: '', fileSize: '' }
        },
          showDropdown: false,
          showPopup: false,
          fileName: '', // Nama file yang dipilih
          fileSize: '', // Ukuran file yang dipilih
      }
    },
    methods: {
      navigateToDetail() {
        this.$router.push('/approval');
      },
      removeFile(type) {
      this.fileDetails[type] = { fileName: '', fileSize: '' };
      this.$refs[`fileInput${type}`].value = ''; // Clear the file input
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
          this.fileDetails[section].fileName = '';
          this.fileDetails[section].fileSize = '';
        }
      }
    }
  }
  </script>
  
  <style>
  
  </style>