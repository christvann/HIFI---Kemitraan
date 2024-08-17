<template>
  <div class="flex justify-between items-start w-full bg-white p-4 border-b border-gray-200 h-[62px] bg-topographic">
    <!-- Left Section: Welcome Message -->
    <div class="text-[20px] font-sans text-blue-500 mb-[110px] mr-[800px]">Selamat Datang di <i>iMitra</i></div>

    <!-- Right Section: Notifications and User Info -->
    <div class="flex items-center">
      <!-- Notification Icon -->
      <button class="relative p-2 rounded-full hover:bg-gray-100 mb-[350px]">
          <img src="@/assets/image/bell.png" class="w-[24px] h-[24px]">
        <i class="fas fa-bell"></i>
        <!-- Notification Badge -->
        <span class="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
      </button>
      
      <!-- User Info -->
      <div class="flex items-center pr-[5px] ml-4 mb-[350px]">
        <!-- User Avatar -->
        <div class="w-[24px] h-[24px] gap-[5px] bg-green-200 rounded-full text-gray-700 flex items-center justify-center">J</div>
        <!-- User Name -->
        <div class="text-[16px] ml-2 text-gray-700 font-sans flex items-center">
          John Doe
          <!-- Dropdown Arrow -->
          <button class="flex items-center justify-center p-2 rounded-full bg-gray-10 hover:bg-gray-100">
            <svg class="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-between items-start w-full h-[54px] bg-white p-4 border-b border-gray-200 ">
  </div>

</template>

<script>
export default {
name: 'MainBar, DropdownButton',
};
</script>

<style scoped>
.bg-topographic {
  background-image: url('../assets/image/topographic.png');
  background-size: cover;
  background-position: center;
}
.dashboard-container {
  text-align: center; 
}
.dashboard-text {
  font-size: 24px; 
  font-weight: bold; 
}
.partnership-text {
  font-size: 18px; 
  color: #555; 
}
</style>