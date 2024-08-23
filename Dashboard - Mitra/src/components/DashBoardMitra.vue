<template>
  <div>
    <div class="w-[1132px] h-[54px] rounded-lg bg-[#FFFFFF] border-collapse"></div>
  </div>
  <div class="px-4 py-3">
    <div class="h-[1260px] w-auto rounded-lg bg-[#FFFFFF] border-collapse">
        <div class="flex">
          <img src="../assets/image/Rectangle.png" class="ml-4 mt-[10px] h-[28px]">
          <h1 class="font-sans text-[20px] text-[#333333] mt-2 ml-[5px] font-semibold">Dashboard</h1>
        </div>
        <h1 class="items-start justify-center px-2 ml-2 text-[#9C9C9C]">Dashboard Kemitraan</h1>
        <div class="blue-box mt-3 ml-4 w-[1046px] h-[100px] relative">
          <div class="flex items-start">
            <div>
              <div class="flex items-center">
                <img src="../assets/image/Avatar.png" class="w-[12.75px] h-[16.13px] top-[0.94px] left-[2.63px] mb-1">
                <h1 class="ml-2 mb-1 text-white text-[15px] font-sans font-semibold">
                  OFFICER KEMITRAAN BISNIS
                </h1>
              </div>
              <span class="flex text-white font-sans font-normal text-[20px] px-5">
                Staff Sub Bidang Kemitraan Bisnis Konektivitas dan Infrastruktur
              </span>
            </div>
            <img src="../assets/image/design.png" class="design absolute right-0 top-0 w-auto h-[100px] rounded-md" alt="Design Element"/>
          </div>
        </div>
        <div>
          <div class="flex">
            <div class="w-[676px] h-[416px] border-collapse rounded-lg bg-[#FFFFFF] border-[#E5E7E9] border-[1px] ml-4 mt-6">
              <div class="flex items-center">
                <h1 class="text-[20px] font-sans font-semibold text-[#000000] ml-6 mt-6">Progress Kemitraan</h1>
                <span class="text-[16px] font-sans font-normal text-[#000000] ml-2 mt-6">(per Tahun)</span>
                <!--Date-->
                <div class="relative">
                  <div class="w-[120px] h-[40px] border rounded-lg bg-white border-[#E5E7E9] ml-[246px] mt-4 flex items-center justify-between px-4 cursor-pointer" @click="toggleDatePicker">
                    <span class="text-[14px] font-sans font-light text-[#9C9C9C]">
                      {{ selectedDate ? formatDate(selectedDate) : '2024' }}
                    </span>
                    <img src="../assets/image/Calendar.png" class="w-[16px] h-[16px]" />
                  </div>

                  <!-- Date Picker -->
                  <input 
                    v-if="showDatePicker" 
                    type="date" 
                    class="custom-date-picker absolute top-[52px] mt-2 left-[246px] border border-[#E5E7E9] font-sans text-[10px] text-[#9C9C9C] rounded-lg p-2 w-[120px]"
                    @change="updateDate"
                    @blur="hideDatePicker"
                  />
                </div>
              </div>
                <div class="items-center w-[124px] h-[60px] ml-6 mt-2 border-dashed rounded-lg bg-[#E7F1FD] border-[1px] border-[#91BEF7]">
                  <h1 class="text-[12px] font-sans font-light text-[#9CA2AD] ml-[22px] mr-4 mt-2">Total Pengajuan</h1>
                  <span class="text-[16px] font-sans font-bold text-[#071631] w-[92px] h-[24px] ml-[50px] mr-4 mt-7 mb-2">30</span>
                </div>
                <div>
                  <img src="../assets/image/Line.png" class="ml-6 mr-6 mt-4">
                </div>
            </div>
            <div class="flex flex-col justify-start w-[346px] h-[137px] ml-6 mt-6 mr-6 border-collapse rounded-lg bg-[#FFFFFF] border-[#E5E7E9] border-[1px] bg-wave">
              <div class="flex items-start p-6">
                <h1 class="font-sans text-[20px] font-semibold text-[#FFFFFF]">
                  <span class="block">Total Dokumen</span>
                  <span class="block">Kemitraan</span>
                </h1>
              </div>
              <div class="flex flex-col items-start w-[282px] h-[60px] mt-[50px]">
                <h1 class="font-sans font-extralight text-[16px] text-[#7F7F80] ml-[30px]">Total NDA</h1>
                <span class="text-[24px] font-sans font-bold text-[#333333] ml-[30px]">20</span>
              </div>
              <div class="flex flex-col items-start w-[282px] h-[60px] mt-6">
                <h1 class="font-sans font-extralight text-[16px] text-[#7F7F80] ml-[30px]">Total MoU</h1>
                <span class="text-[24px] font-sans font-bold text-[#333333] ml-[30px]">10</span>
              </div>
              <div class="flex flex-col items-start w-[282px] h-[60px] mt-6">
                <h1 class="font-sans font-extralight text-[16px] text-[#7F7F80] ml-[30px]">Total PKS</h1>
                <span class="text-[24px] font-sans font-bold text-[#333333] ml-[30px]">15</span>
              </div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="w-[320px] h-[40px] rounded-lg bg-[#FFFFFF] border border-[#E5E7E9] mt-6 ml-4 flex justify-between items-center">
              <input 
                type="text" 
                placeholder="Cari sesuatu disini ..." 
                class="font-sans text-[14px] text-[#7F7F80] font-extralight ml-4 outline-none w-full"
              />
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
        </div>
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
                      <span>PIC Kemitraan</span>
                      <img src="../assets/image/arrow.png" alt="arrow" class="ml-2 w-[14px] h-[10px]">
                    </div>
                  </th>
                  <th class="p-2 border border-[#E5E7E9]">
                    <div class="flex items-center justify-between">
                      <span>Jumlah Pengajuan</span>
                      <img src="../assets/image/arrow.png" alt="arrow" class="ml-2 w-[14px] h-[10px]">
                    </div>
                  </th>
                  <th class="p-2 border border-[#E5E7E9]">
                    <div class="flex items-center justify-between">
                      <span>Total Selesai</span>
                      <img src="../assets/image/arrow.png" alt="arrow" class="ml-2 w-[14px] h-[10px]">
                    </div>
                  </th>
                  <th class="p-2 border border-[#E5E7E9]">
                    <div class="flex items-center justify-between">
                      <span>Total Diproses</span>
                      <img src="../assets/image/arrow.png" alt="arrow" class="ml-2 w-[14px] h-[10px]">
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in tableData" :key="index" class="bg-[#FFFFFF] border border-[#E5E7E9] text-[12px] text-[#4D5E80] font-sans font-semibold">
                  <td class="p-2 border border-[#E5E7E9]">{{ index + 1 }}</td>
                  <td class="p-2 border border-[#E5E7E9]">{{ item.pic }}</td>
                  <td class="p-2 border border-[#E5E7E9]">{{ item.jumlahPengajuan }}</td>
                  <td class="p-2 border border-[#E5E7E9]">{{ item.totalSelesai }}</td>
                  <td class="p-2 border border-[#E5E7E9]">{{ item.totalDiproses }}</td>
                </tr>
              </tbody>
            </table>
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
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      showDatePicker: false,
      selectedDate: null,

      showDropdown: false,
      filterOptions: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],

      selectedValue: 8,
      totalData: 25,
      currentPage: 1,
      totalPages: 10,
      displayOptions: [8, 10, 15],
      actionDropdownIndex: null,
      tableData: [
        { pic: 'Cameron Murray', jumlahPengajuan: 30, totalSelesai: 20, totalDiproses: 10 },
        { pic: 'Melba Skiles', jumlahPengajuan: 30, totalSelesai: 20, totalDiproses: 10 },
        { pic: 'Ernestine Stark', jumlahPengajuan: 30, totalSelesai: 20, totalDiproses: 10 },
        { pic: 'Luther Connelly', jumlahPengajuan: 30, totalSelesai: 20, totalDiproses: 10 },
        { pic: 'Elsie Mosciski', jumlahPengajuan: 30, totalSelesai: 20, totalDiproses: 10 },
        { pic: 'Courtney Schmidt', jumlahPengajuan: 30, totalSelesai: 20, totalDiproses: 10 },
        { pic: 'Salvador Pfannerstill', jumlahPengajuan: 30, totalSelesai: 20, totalDiproses: 10 },
        { pic: 'Hattie Marvin', jumlahPengajuan: 30, totalSelesai: 20, totalDiproses: 10 }
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
    toggleDatePicker() {
      this.showDatePicker = !this.showDatePicker;
    },
    formatDate(date) {
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      return new Date(date).toLocaleDateString('en-GB', options);
    },
    updateDate(event) {
      //Untuk handle date
      this.selectedDate = event.target.value; // Update with the selected date
      this.hideDatePicker(); // Hide the date picker after selecting the date
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
};
</script>

<style>
  .blue-box {
  background-color: #4285f4;
  padding: 20px;
  border-radius: 10px;
  position: relative;}
.bg-wave {
  width: 346px;
  height: 416px;
  gap: 0px;
  background-image: url('../assets/image/Wave.png');
  background-repeat: no-repeat;  /* Agar gambar tidak berulang */
  background-position: top;   /* Memusatkan gambar pada elemen */
}
.custom-date-picker {
  appearance: none; /* Remove default styling */
  -webkit-appearance: none; /* Remove default styling for WebKit browsers */
  background-image: url('../assets/image/Calendar.png'); /* Use the same calendar icon */
  background-repeat: no-repeat;
  background-position: right 10px center; /* Position it like the icon in the button */
  background-size: 16px 16px; /* Make sure the icon size matches */
}
.custom-date-picker::-webkit-calendar-picker-indicator {
  opacity: 0; /* Hide the default calendar icon */
}
.filter-button {
  position: relative;
}
.dropdown-options {
  position: absolute;
  z-index: 10; /* Ensure dropdown is above other content */
}
.table-container {
  margin: 20px;
}
th, td {
  text-align: left;
  border-left: none; /* Menghapus garis vertikal di sebelah kiri */
  border-right: none; /* Menghapus garis vertikal di sebelah kanan */
}
th img {
  display: inline-block;
}
th, td {
  border-left: none; /* Menghapus garis vertikal di sebelah kiri */
  border-right: none; /* Menghapus garis vertikal di sebelah kanan */
  border-bottom: 1px solid #e5e7e9; /* Hanya menyisakan garis horizontal bawah */
}
.pagination-btn {
  display: flex; /* Menggunakan flexbox */
  align-items: center; /* Vertikal tengah */
  justify-content: center; /* Horizontal tengah */
  padding: 8px 6px 8px 6px;
  width: 32px;
  height: 32px;
  border: transparent;
  border-radius: 8px;
  background-color: #fff;
  color: #000;
  cursor: pointer;
}
.pagination-btn.active {
  background-color: #1d4ed8;
  color: #fff;
}
.pagination-btn:disabled {
  background-color: #fff;
  cursor: not-allowed;
}
</style>