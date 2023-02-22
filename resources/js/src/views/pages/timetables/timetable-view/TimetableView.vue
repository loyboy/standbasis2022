<template>
    <div>
  
      <!-- Alert: No item found -->
      <b-alert
        variant="danger"
        :show="timetableData === undefined"
      >
        <h4 class="alert-heading">
          Error fetching timetable data
        </h4>
        <div class="alert-body">
          No timetable data found with this timetable id. Check
          <b-link
            class="alert-link"
            :to="{ name: 'timetables-home'}"
          >
            timetable List
          </b-link>
          for other timetables.
        </div>
      </b-alert>
  
      <template v-if="timetableData">
        <!-- First Row -->
        <b-row>
            <b-col
                cols="12"
                md="12"
            >
                <timetable-view-info-card :timetable-data="timetableData" />

            </b-col>         
        </b-row>    

        <event-list :schoolId="timetableData.school.schId" :module="moduleName"/>
      </template>
  
    </div>
  </template>
  
  <script>
    import {
        BTab, BTabs, BCard, BAlert, BLink,
    } from 'bootstrap-vue'
    import { ref, onUnmounted } from '@vue/composition-api'
    import router from '@/router'
    import store from '@/store'
    import TimetableViewInfoCard from './TimetableViewInfoCard.vue'
    import timetableStoreModule from '../timetableStoreModule'
    import EventList from '../../dashboard/EventList.vue'

    export default {
        components: {
        BTab,
        BTabs,
        BCard,
        BAlert,
        BLink,
        EventList,
        TimetableViewInfoCard
        },
        data() {
            return {
                timetableData: null,
                timetableId: "",
                moduleName: "timetable"
            }
        },
        async mounted(){
           await this.runOnce();
        },
        methods: {
            async runOnce(){
                const TIMETABLE_APP_STORE_MODULE_NAME = 'app-timetable';
        
                // Register module
                if (!store.hasModule(TIMETABLE_APP_STORE_MODULE_NAME)) store.registerModule(TIMETABLE_APP_STORE_MODULE_NAME, timetableStoreModule)

                // UnRegister on leave
                onUnmounted(() => {
                    if (store.hasModule(TIMETABLE_APP_STORE_MODULE_NAME)) store.unregisterModule(TIMETABLE_APP_STORE_MODULE_NAME)
                });
                
                if (router.currentRoute.params.id){
                  let response = await store.dispatch('app-timetable/fetchTimetable', { id: router.currentRoute.params.id  })
                  if (response.data.data){
                          this.timetableData = response.data.data;
                          this.timetableId = router.currentRoute.params.id;                  
                  } 
                }
                
                          
            }
        },
    }
  </script>
  
  <style>
  
  </style>
  