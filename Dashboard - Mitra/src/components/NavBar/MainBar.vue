<template>
  <div class="flex items-center justify-between w-auto h-[70px] bg-[#FFFFFF] border-b border-[#E5E7E9] bg-topographic">
    <div class="text-[20px] font-sans text-[#2671D9] font-medium py-5 px-4">Selamat Datang di DIAMOND</div>
    <!-- Right Section: Notifications and User Info -->
    <div class="flex items-center space-x-4 pr-4">
      <div class="relative">
        <!-- Notification Button -->
        <button @click="toggleDropdownNotification" class="relative rounded-full hover:bg-[#F3F4F6] py-2">
          <img src="@/assets/image/bell.png" class="w-[20px] h-[20px]" />
          <i class="fas fa-bell"></i>
        </button>
        <!-- Notification Dropdown -->
        <div v-if="isOpenNotification" class="absolute right-0 mt-2 w-80 bg-[#FFFFFF] border border-[#E5E7E9] rounded-lg shadow-lg z-50">
          <div v-if="notifications.length" class="p-4">
            <p class="text-base font-semibold text-[#666666]">Notifications</p>
            <ul>
              <li v-for="(notification, index) in notifications" :key="index" class="mt-2">
                <a href="#" class="block p-2 bg-gray-50 rounded-lg hover:bg-gray-100">
                  <p class="text-sm text-gray-600">{{ notification.message }}</p>
                  <span class="text-xs text-gray-400">{{ notification.time }}</span>
                </a>
              </li>
            </ul>
          </div>
          <div v-else class="p-4">
            <p class="text-sm text-gray-500">No new notifications</p>
          </div>
        </div>
      </div>
      <div class="flex items-center space-x-2">
        <!-- User Avatar -->
        <div class="w-[24px] h-[24px] bg-[#C7E5D7] text-[10px] font-sans rounded-full font-bold text-[#333333] flex items-center justify-center">J</div>
        <!-- User Name -->
        <div class="text-[16px] text-[#666666] font-semibold font-sans">John Doe</div>
        <!-- Dropdown Arrow -->
        <div class="relative">
          <button @click="toggleDropdownArrow" class="flex items-center justify-center py-1 px-1 rounded-full hover:bg-[#F3F4F6]">
            <svg class="w-4 h-4 text-[#666666]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <!-- Dropdown Menu -->
          <div v-if="isOpenDropdownArrow" class="absolute right-0 mt-2 w-48 bg-[#FFFFFF] border border-gray-200 rounded-lg shadow-lg z-50">
            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 1</a>
            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 2</a>
            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 3</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainBar, DropdownButton",
  data() {
    return {
      isOpenNotification: false,
      isOpenDropdownArrow: false,
      notifications: [
        { message: "New Notification", time: "2 minutes ago" },
        { message: "New Notification", time: "1 hour ago" },
        { message: "New Notification", time: "3 days ago" },
      ],
    };
  },
  methods: {
    toggleDropdownArrow() {
      this.isOpenDropdownArrow = !this.isOpenDropdownArrow;
      if (this.isOpenNotification) {
        this.isOpenNotification = false;
      }
    },
    toggleDropdownNotification() {
      this.isOpenNotification = !this.isOpenNotification;
      if (this.isOpenDropdownArrow) {
        this.isOpenDropdownArrow = false;
      }
    },
  },
};
</script>

<style scoped>
.relative .absolute {
  right: 0;
  top: 100%; /* Makes the dropdown appear directly below the button */
  margin-top: 8px; /* Adjust spacing between button and dropdown */
}
.bg-topographic {
  background-image: url("/src/assets/image/topographic.png");
  background-size: cover;
  background-position: center;
}
</style>
