<template>
    <div>
  
      <!-- Alert: No item found -->
      <b-alert
        variant="danger"
        :show="classroomData === undefined"
      >
        <h4 class="alert-heading">
          Error fetching classroom data
        </h4>
        <div class="alert-body">
          No classroom data found with this classroom id. Check
          <b-link
            class="alert-link"
            :to="{ name: 'classrooms-home'}"
          >
            classroom List
          </b-link>
          for other classrooms.
        </div>
      </b-alert>
  
      <template v-if="classroomData">
        <!-- First Row -->
        <b-row>
            <b-col
                cols="12"
                md="12"
            >
                <classroom-view-info-card :classroom-data="classroomData" />

            </b-col>         
        </b-row>    

        <event-list :schoolId="classroomData.school.schId" :module="moduleName"  />
      </template>
  
    </div>
  </template>
  
  <script>
    import {
        BTab, BTabs, BCard, BAlert, BLink, BRow, BCol
    } from 'bootstrap-vue'
    import { ref, onUnmounted } from '@vue/composition-api'
    import router from '@/router'
    import store from '@/store'
    import ClassroomViewInfoCard from './ClassroomViewInfoCard.vue'
    import classroomStoreModule from '../classroomStoreModule'
    import EventList from '../../dashboard/EventList.vue'

    export default {
        components: {
        BTab,
        BTabs,
        BCard,
        BAlert,
        BLink,
        BRow,
        BCol,
        EventList,
        ClassroomViewInfoCard
        },
        data() {
            return {
                classroomData: null,
                classroomId: "",
                moduleName: "classstream"
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
                        this.classroomId = router.currentRoute.params.id;                  
                }           
            }
        },
    }
  </script>
  
  <style>
  
  </style>
  