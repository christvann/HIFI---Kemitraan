<template>
    <div>
      <!-- Trigger to open ApprovalPengajuanPopup -->
      <button @click="openPopup('approvalPopup')">Open Approval Popup</button>
  
      <!-- ApprovalPengajuanPopup Component -->
      <ApprovalPengajuanPopup
        :isVisible="activePopup === 'ApprovalPengajuanPopup'"
        @close="closePopup"
        @open-pengajuan-disetujui="openPengajuanDisetujui"
      />
  
      <!-- PengajuanDisetujuiPopup Component -->
      <PengajuanDisetujuiPopup
        :isVisible="activePopup === 'PengajuanDisetujuiPopup'"
        @close="closePopup"
      />
    </div>
  </template>
  
  <script>
  import ApprovalPengajuanPopup from './PengajuanDisetujuiPopup.vue';
  import PengajuanDisetujuiPopup from './PengajuanDisetujuiPopup.vue';
  
  export default {
    components: {
      ApprovalPengajuanPopup,
      PengajuanDisetujuiPopup,
    },
    data() {
      return {
        activePopup: null, // Keep track of the active popup
      };
    },
    methods: {
      openPopup(ApprovalPengajuanPopup) {
        this.activePopup = ApprovalPengajuanPopup; // Open the selected popup
      },
      closePopup() {
        this.activePopup = null; // Close any open popup
      },
      openPengajuanDisetujui() {
        this.activePopup = 'PengajuanDisetujuiPopup'; // Open PengajuanDisetujuiPopup
      },
    },
  };
  </script>
  