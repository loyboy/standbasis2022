<template>
    <div>
  
      <!-- Alert: No item found -->
      <b-alert
        variant="danger"
        :show="attendanceData === undefined"
      >
        <h4 class="alert-heading">
          Error fetching attendance data
        </h4>
        <div class="alert-body">
          No attendance data found with this attendance id. Check
          <b-link
            class="alert-link"
            :to="{ name: 'attendances-home'}"
          >
            attendance List
          </b-link>
          for other attendances.
        </div>
      </b-alert>
  
      <template v-if="attendanceData">
        <!-- First Row -->
        <b-row>
            <b-col
                cols="12"
                md="12"
            >
                <attendance-view-info-card :attendance-data="attendanceData" />
            </b-col>         
        </b-row>    

        <event-list :schoolId="attendanceData.teacher.school.schId" :module="moduleName" />
      </template>
  
    </div>
  </template>
  
  <script>
   import attendanceStoreModule from '../attendanceStoreModule'
    import {
        BTab, BTabs, BCard, BAlert, BLink, BRow, BCol
    } from 'bootstrap-vue'
    import { ref, onUnmounted } from '@vue/composition-api'
    import router from '@/router'
    import store from '@/store'
    import AttendanceViewInfoCard from './AttendanceViewInfoCard.vue'
   
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
        AttendanceViewInfoCard
        },
        data() {
            return {
              attendanceData: null,
              attendanceId: "",
              moduleName:"attendance"
            }
        },
        async mounted(){
           await this.runOnce();
        },
        methods: {
            async runOnce(){
                const ATTENDANCE_APP_STORE_MODULE_NAME = 'app-Attendance';
        
                // Register module
                if (!store.hasModule(ATTENDANCE_APP_STORE_MODULE_NAME)) store.registerModule(ATTENDANCE_APP_STORE_MODULE_NAME, attendanceStoreModule)

                // UnRegister on leave
                onUnmounted(() => {
                    if (store.hasModule(ATTENDANCE_APP_STORE_MODULE_NAME)) store.unregisterModule(ATTENDANCE_APP_STORE_MODULE_NAME)
                });
            
                let response = await store.dispatch(`${ATTENDANCE_APP_STORE_MODULE_NAME}/fetchAttendance`, { id: router.currentRoute.params.id  })
                if (response.data.data){
                        this.attendanceData = response.data.data;
                        this.attendanceId = router.currentRoute.params.id;                  
                }           
            }
        },
    }
  </script>
  
  <style>
  
  </style>
  