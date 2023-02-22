<template>
    <component :is="schoolgroupData === undefined ? 'div' : 'b-card'">  
      
            <!-- Alert: No item found -->
            <b-alert
                variant="danger"
                :show="schoolgroupData === undefined"
            >
                <h4 class="alert-heading">
                Error fetching school group data
                </h4>
                <div class="alert-body">
                No school group found with this school group id. Check
                <b-link
                    class="alert-link"
                    :to="{ name: 'school-list'}"
                >
                    School Group List
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
                        <span class="d-none d-sm-inline">School Group Information</span>
                    </template>

                    <group-school-edit-tab-information class="mt-2 pt-75" :schoolgroup-data="schoolgroupData" :schoolgroup-id="schoolgroupId"/> 

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
  import GroupSchoolEditTabInformation from './GroupSchoolEditTabInformation.vue'
  import groupschoolStoreModule from '../groupschoolStoreModule'

  export default {
    components: {
      BTab,
      BTabs,
      BCard,
      BAlert,
      BLink,
      GroupSchoolEditTabInformation
    },
    data() {
        return {
            schoolgroupData: null,
            schoolgroupId: ""
        }
    },
    async mounted(){
       await this.runOnce();
       console.log( "Response data: " + JSON.stringify( this.schoolgroupData ) )
    },
    methods: {
        async runOnce(){
            const SCHOOLGROUP_APP_STORE_MODULE_NAME = 'app-schoolgroup';
    
            // Register module
            if (!store.hasModule(SCHOOLGROUP_APP_STORE_MODULE_NAME)) store.registerModule(SCHOOLGROUP_APP_STORE_MODULE_NAME, groupschoolStoreModule)

            // UnRegister on leave
            onUnmounted(() => {
                if (store.hasModule(SCHOOLGROUP_APP_STORE_MODULE_NAME)) store.unregisterModule(SCHOOLGROUP_APP_STORE_MODULE_NAME)
            });
           
            let response = await store.dispatch('app-schoolgroup/fetchGroup', { id: router.currentRoute.params.id  })
            if (response.data.data){
                    this.schoolgroupData = response.data.data;
                    
                    
                    this.schoolgroupId = router.currentRoute.params.id;                  
            }           
        }
    },
  }
  </script>
  
  <style>
  
  </style>
  