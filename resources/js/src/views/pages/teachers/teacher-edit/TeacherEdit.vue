<template>
    <component :is="teacherData === undefined ? 'div' : 'b-card'">  
      
            <!-- Alert: No item found -->
            <b-alert
                variant="danger"
                :show="teacherData === undefined"
            >
                <h4 class="alert-heading">
                Error fetching teacher data
                </h4>
                <div class="alert-body">
                No teacher found with this school id. Check
                <b-link
                    class="alert-link"
                    :to="{ name: 'teachers-home'}"
                >
                teacher List
                </b-link>
                for other teachers.
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
                 <teacher-edit-tab-information class="mt-2 pt-75" @refresh="runOnce" :teacher-data="teacherData" :teacher-id="teacherId"/> 
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
  import TeacherEditTabInformation from './TeacherEditTabInformation.vue'
  import teacherStoreModule from '../teacherStoreModule'

  export default {
    components: {
      BTab,
      BTabs,
      BCard,
      BAlert,
      BLink,
      TeacherEditTabInformation
    },
    data() {
        return {
            teacherData: null,
            teacherId: ""
        }
    },
    async mounted(){
       await this.runOnce();
    },
    methods: {
        async runOnce(){
            const TEACHER_APP_STORE_MODULE_NAME = 'app-teacher';
    
            // Register module
            if (!store.hasModule(TEACHER_APP_STORE_MODULE_NAME)) store.registerModule(TEACHER_APP_STORE_MODULE_NAME, teacherStoreModule)

            // UnRegister on leave
            onUnmounted(() => {
                if (store.hasModule(TEACHER_APP_STORE_MODULE_NAME)) store.unregisterModule(TEACHER_APP_STORE_MODULE_NAME)
            });
           
            let response = await store.dispatch('app-teacher/fetchTeacher', { id: router.currentRoute.params.id  })
            if (response.data.data){
                    this.teacherData = response.data.data;
                    this.teacherId = router.currentRoute.params.id;                  
            }            
        }
    },
  }
  </script>
  
  <style>
  
  </style>
  