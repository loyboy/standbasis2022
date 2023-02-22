<template>
    <component :is="schoolData === undefined ? 'div' : 'b-card'">  
      
            <!-- Alert: No item found -->
            <b-alert
                variant="danger"
                :show="schoolData === undefined"
            >
                <h4 class="alert-heading">
                Error fetching school data
                </h4>
                <div class="alert-body">
                No school found with this school id. Check
                <b-link
                    class="alert-link"
                    :to="{ name: 'school-list'}"
                >
                    School List
                </b-link>
                for other schools.
                </div>
            </b-alert>
  
            <b-tabs pills>  
                <!-- Tab: Information -->
                <b-tab active>
                    <template #title>
                        <feather-icon
                        icon="InfoIcon"
                        size="16"
                        class="mr-0 mr-sm-50"
                        />
                        <span class="d-none d-sm-inline">Information</span>
                    </template>
                 <school-edit-tab-information class="mt-2 pt-75" @refresh="runOnce" :school-data="schoolData" :school-id="schoolId"/> 
                </b-tab>
            </b-tabs>

    </component>
</template>
  
  <script>
  import {
    BTab, BTabs, BCard, BAlert, BLink,
  } from 'bootstrap-vue'
  import { ref, onUnmounted } from '@vue/composition-api'
  import router from '@/router'
  import store from '@/store'
  import SchoolEditTabInformation from './SchoolEditTabInformation.vue'
  import schoolStoreModule from '../schoolStoreModule'

  export default {
    components: {
      BTab,
      BTabs,
      BCard,
      BAlert,
      BLink,
      SchoolEditTabInformation
    },
    data() {
        return {
            schoolData: null,
            schoolId: ""
        }
    },
    async mounted(){
       await this.runOnce();
    },
    methods: {
        async runOnce(){
            const SCHOOL_APP_STORE_MODULE_NAME = 'app-school';
    
            // Register module
            if (!store.hasModule(SCHOOL_APP_STORE_MODULE_NAME)) store.registerModule(SCHOOL_APP_STORE_MODULE_NAME, schoolStoreModule)

            // UnRegister on leave
            onUnmounted(() => {
                if (store.hasModule(SCHOOL_APP_STORE_MODULE_NAME)) store.unregisterModule(SCHOOL_APP_STORE_MODULE_NAME)
            });
           
            let response = await store.dispatch('app-school/fetchSchool', { id: router.currentRoute.params.id  })
            if (response.data.data){
                    this.schoolData = response.data.data;
                    this.schoolId = router.currentRoute.params.id;                  
            }           
        }
    },
  }
  </script>
  
  <style>
  
  </style>
  