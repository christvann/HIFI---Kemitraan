<template>
    <div>
      <div class="flex w-[1118px] h-[54px] rounded-lg bg-[#FFFFFF] border-collapse">
          <h1 class="w-[51px] h-[22px] font-sans text-[#7F7F80] text-[14px] font-semibold ml-6 mt-4 mb-4">Selesai</h1>
      </div>
    </div>
    <div class="px-4 py-3">
      <div class="h-[776px] w-[1086px] rounded-lg bg-[#FFFFFF] border-collapse">
          <div class="flex">
            <img src="../assets/image/Rectangle.png" class="ml-4 mt-[10px] h-[28px]">
            <h1 class="font-sans text-[20px] text-[#333333] mt-2 ml-[5px] font-semibold">Selesai</h1>
          </div>
          <h1 class="items-start justify-center px-2 ml-2 text-[#9C9C9C]">Surat Masuk Pengajuan Mitra</h1>
          <button class='flex-grow w-[56px] h-[24px] font-sans text-[16px] font-semibold mt-7 ml-8 mr-4'
            @click="navigateToSelesai">Selesai
          </button>
          <button class='w-[54px] h-[24px] font-sans text-[16px] font-semibold mt-7 ml-4 text-[#2671D9]'
            @click="navigateToDitolak">Ditolak
            <img src="@/assets/image/LineBlue.png" class="w-[54px] h-[4px] mt-2">
          </button>
          <div class="flex items-start">
              <div class="w-[320px] h-[40px] rounded-lg bg-[#FFFFFF] border border-[#E5E7E9] mt-6 ml-4 flex justify-between items-center">
                <input 
                  type="text" 
                  placeholder="Cari sesuatu disini ..." 
                  class="font-sans text-[14px] text-[#7F7F80] font-extralight ml-4 outline-none w-full"/>
                <button class="bg-[#2671D9] w-[40px] h-full flex items-center justify-center rounded-r-lg">
                  <img src="../assets/image/IconSearch.png" class="w-[13.33px] h-[13.33px]">
                </button>
              </div>
              <div class="filter-button">
                <button @click="toggleDropdown" class="flex">
                  <div class="flex items-center justify-center w-[90px] h-[40px] rounded-lg bg-[#FFFFFF] border border-[#E5E7E9] ml-2 mt-6">
                    <img src="../assets/image/Filter.png" class="w-[16px] h-[16px] mr-2">
                    <span class="text-[14px] font-sans font-medium text-[#333333]">Filter</span>
                  </div>
                </button>
                <div v-if="showDropdown" class="dropdown-options bg-[#FFFFFF] ml-2 border border-[#E5E7E9] rounded-lg mt-2 p-[10px] font-thin text-[14px]">
                  <div v-for="(option, index) in filterOptions" :key="index" class="option-item p-2 hover:bg-gray-100 cursor-pointer">
                    {{ option }}
                  </div>
                </div>
              </div>
          </div>
          <div class="ApprovalSelesai">
          <div class="flex">
            <div class="flex w-[1046px] h-[480px] rounded-lg bg-[#FFFFFF] border-[1px] border-[#E5E7E9] mt-4 ml-4 overflow-auto">
              <table class="table-auto w-full text-left border-collapse border border-[#E5E7E9]">
                <thead>
                  <tr class="bg-[#FFFFFF] text-[12px] font-sans text-[#4D5E80] font-semibold">
                    <th class="p-2 border border-[#E5E7E9]">
                      <div class="flex items-center justify-between">
                        <span>No.</span>
                        <img src="../assets/image/arrow.png" alt="arrow" class="ml-2 w-[14px] h-[10px]">
                      </div>
                    </th>
                    <th class="p-2 border border-[#E5E7E9]">
                      <div class="flex items-center justify-between">
                        <span>Judul</span>
                        <img src="../assets/image/arrow.png" alt="arrow" class="ml-2 w-[14px] h-[10px]">
                      </div>
                    </th>
                    <th class="p-2 border border-[#E5E7E9]">
                      <div class="flex items-center justify-between">
                        <span>No</span>
                        <img src="../assets/image/arrow.png" alt="arrow" class="ml-2 w-[14px] h-[10px]">
                      </div>
                    </th>
                    <th class="p-2 border border-[#E5E7E9]">
                      <div class="flex items-center justify-between">
                        <span>Tipe</span>
                        <img src="../assets/image/arrow.png" alt="arrow" class="ml-2 w-[14px] h-[10px]">
                      </div>
                    </th>
                    <th class="p-2 border border-[#E5E7E9]">
                      <div class="flex items-center justify-between">
                        <span>Pelaksana</span>
                        <img src="../assets/image/arrow.png" alt="arrow" class="ml-2 w-[14px] h-[10px]">
                      </div>
                    </th>
                    <th class="p-2 border border-[#E5E7E9]">
                      <div class="flex items-center justify-between">
                        <span>Status</span>
                        <img src="../assets/image/arrow.png" alt="arrow" class="ml-2 w-[14px] h-[10px]">
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in tableData" :key="index" class="bg-[#FFFFFF] border border-[#E5E7E9] text-[12px] text-[#4D5E80] font-sans font-semibold">
                    <td class="p-2 border border-[#E5E7E9]">{{ index + 1 }}</td>
                    <td class="p-2 border border-[#E5E7E9]">{{ item.judul }}</td>
                    <td class="p-2 border border-[#E5E7E9]">{{ item.nomor }}</td>
                    <td class="p-2 border border-[#E5E7E9]">{{ item.tipe }}</td>
                    <td class="p-2 border border-[#E5E7E9]">{{ item.pelaksana }}</td>
                    <td class="p-2 border border-[#E5E7E9]">
                      <span class="w-[55px] h-[24px] px-4 py-1 rounded-full font-sans text-[12px] text-[#FF5656] bg-[#FFE5E6] border-[1px] border-[#FD8A8A]">
                          {{ item.status }}
                      </span>
                     </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
      </div>
          <div class="flex items-center justify-between p-4">
            <div class="flex items-center text-[14px] font-sans font-normal">
              <span>Menampilkan</span>
              <select class="ml-2 p-1 border border-[#E5E7E9] rounded-md" v-model="selectedValue">
                <option v-for="value in displayOptions" :key="value" :value="value">{{ value }}</option>
              </select>
              <span class="ml-2">dari {{ totalData }} Data</span>
            </div>
            <div class="flex items-center rounded-lg border-transparent text-[14px] font-sans font-normal border-[#FFFFFF]">
              <button class="pagination-btn" :disabled="currentPage === 1" @click="prevPage">‹</button>
              <button v-for="page in pages" :key="page" 
                      :class="['pagination-btn', { 'active': currentPage === page }]" 
                      @click="setPage(page)">
                {{ page }}
              </button>
              <button class="pagination-btn" :disabled="currentPage === totalPages" @click="nextPage">›</button>
            </div>
          </div>
          <img src="../assets/image/Line.png" class="w-[1046px] ml-4 mb-6">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
    return {
      selectedTable: 'ApprovalMitra', 
  
      showDatePicker: false,
  
      showDropdown: false,
      filterOptions: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  
      selectedValue: 7,
      totalData: 25,
      currentPage: 1,
      totalPages: 10,
      displayOptions: [7, 10, 15, 20],
  
      tableData: [
          { judul: 'Lorem ipsum dolor', nomor: 90224, tipe: 'MoU', pelaksana: 'Pusat', status: 'Ditolak'},
          { judul: 'Lorem ipsum dolor', nomor: 90224, tipe: 'MoU', pelaksana: 'Pusat', status: 'Ditolak'},
          { judul: 'Lorem ipsum dolor', nomor: 90224, tipe: 'PKS', pelaksana: 'Pusat', status: 'Ditolak'},
          { judul: 'Lorem ipsum dolor', nomor: 90224, tipe: 'PKS', pelaksana: 'Pusat', status: 'Ditolak'},
          { judul: 'Lorem ipsum dolor', nomor: 90224, tipe: 'MoU', pelaksana: 'Pusat', status: 'Ditolak'},
          { judul: 'Lorem ipsum dolor', nomor: 90224, tipe: 'PKS', pelaksana: 'Pusat', status: 'Ditolak'},
          { judul: 'Lorem ipsum dolor', nomor: 90224, tipe: 'MoU', pelaksana: 'Pusat', status: 'Ditolak'},
          { judul: 'Lorem ipsum dolor', nomor: 90224, tipe: 'PKS', pelaksana: 'Pusat', status: 'Ditolak'}
        ]
      }
    },
    computed: {
      pages() {
        let pagesArray = [];
        for (let i = 1; i <= this.totalPages; i++) {
          pagesArray.push(i);
        }
        return pagesArray;
      }
    },
    methods: {
      navigateToSelesai() {
        this.$router.push('/selesai');
      },
      navigateToDitolak() {
        this.$router.push('/selesai/ditolak');
      },
      toggleDatePicker() {
        this.showDatePicker = !this.showDatePicker;
      },
      updateDate(event) {
        //Untuk handle date
        const selectedDate = event.target.value;
        console.log(selectedDate);
        this.showDatePicker = false;
      },
      hideDatePicker() {
        this.showDatePicker = false;
      },
      toggleDropdown() {
        this.showDropdown = !this.showDropdown;
      },
      setPage(page) {
        this.currentPage = page;
      },
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      }
    }
  }
  </script>
  
  <style>
  button {
    cursor: pointer;
    border: none;
    outline: none;
    transition: background-color 0,3s;
  }
  </style>