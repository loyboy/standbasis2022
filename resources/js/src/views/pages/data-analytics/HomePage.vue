<template>
    <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <!-- First Column -->
        <div class="row mb-3">
          <div class="col">
            <div class="border p-3">Row 1, Column 1</div>
          </div>
          <div class="col">
            <div class="border p-3">Row 1, Column 2</div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="border p-3">Row 2, Column 1</div>
          </div>
          <div class="col">
            <div class="border p-3">Row 2, Column 2</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  import {
    BCard,
    BRow,
    BCol,
    BFormInput,
    BButton,
    BTable,
    BSidebar,
    BForm,
    BMedia,
    BAvatar,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,
  } from 'bootstrap-vue';
  import StatisticCardHorizontal from "@core/components/statistics-cards/StatisticCardHorizontal.vue";
  import vSelect from 'vue-select'
  import router from '@/router'
  import store from '@/store'
  import { ref, onUnmounted } from '@vue/composition-api'
  import formValidation from '@core/comp-functions/forms/form-validation'

  import useDataList from './useDataList'
  import dataStoreModule from './dataStoreModule'

  
  export default {
    components: {
    
      StatisticCardHorizontal,
      BCard,
      BRow,
      BCol,
      BFormInput,
      BButton,
      BTable,
      BSidebar,
      BForm,
      BMedia,
      BAvatar,
      BLink,
      BBadge,
      BDropdown,
      BDropdownItem,
      BPagination,
  
      vSelect,
    },

    data() {
      return {  
        
      }
    },

    setup() {
      const { refFormObserver, getValidationState, resetForm } = formValidation(() => {})
      const DATA_APP_STORE_MODULE_NAME = 'app-home-data-analytics';
  
      // Register module
      if (!store.hasModule(DATA_APP_STORE_MODULE_NAME)) store.registerModule(DATA_APP_STORE_MODULE_NAME, dataStoreModule)
  
      // UnRegister on leave
      onUnmounted(() => {
        if (store.hasModule(DATA_APP_STORE_MODULE_NAME)) store.unregisterModule(DATA_APP_STORE_MODULE_NAME)
      })
  
      const {

      } = useDataList(  );

     
      return { 
       
      }
    },
    methods: {
      handleSubmit() { 

      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .per-page-selector {
    width: 90px;
  }
  </style>
  
  <style lang="scss">
  @import '~@core/scss/vue/libs/vue-select.scss';
  </style>
  