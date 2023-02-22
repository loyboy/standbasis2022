<template>
    <component :is="classroomData === undefined ? 'div' : 'b-card'">  
      
            <!-- Alert: No item found -->
            <b-alert
                variant="danger"
                :show="classroomData === undefined"
            >
                <h4 class="alert-heading">
                Error fetching classroom data
                </h4>
                <div class="alert-body">
                No classroom found with this classroom id. Check
                <b-link
                    class="alert-link"
                    :to="{ name: 'classrooms-home'}"
                >
                classroom List
                </b-link>
                for other classrooms.
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
                 <classroom-edit-tab-information class="mt-2 pt-75" :classroom-data="classroomData" :classroom-id="classroomId"/> 
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
  import ClassroomEditTabInformation from './ClassroomEditTabInformation.vue'
  import classroomStoreModule from '../classroomStoreModule'

  export default {
    components: {
      BTab,
      BTabs,
      BCard,
      BAlert,
      BLink,
      ClassroomEditTabInformation
    },
    data() {
        return {
            classroomData: null,
            classroomId: ""
        }
    },
    async mounted(){
       await this.runOnce();
    },
    methods: {
        async runOnce(){
            const CLASSROOM_APP_STORE_MODULE_NAME = 'app-classroom';
    
            // Register module
            if (!store.hasModule(CLASSROOM_APP_STORE_MODULE_NAME)) store.registerModule(CLASSROOM_APP_STORE_MODULE_NAME, classroomStoreModule)

            // UnRegister on leave
            onUnmounted(() => {
                if (store.hasModule(CLASSROOM_APP_STORE_MODULE_NAME)) store.unregisterModule(CLASSROOM_APP_STORE_MODULE_NAME)
            });
           
            let response = await store.dispatch('app-classroom/fetchClassroom', { id: router.currentRoute.params.id  })
            if (response.data.data){
                    this.classroomData = response.data.data;
                    this.classroomData.title = new String( this.classroomData.title).replace('\n',"");
                    
                    this.classroomId = router.currentRoute.params.id;                  
            }           
        }
    },
  }
  </script>
  
  <style>
  
  </style>
  