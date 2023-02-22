<template>
    <div>
  
      <!-- Alert: No item found -->
      <b-alert
        variant="danger"
        :show="calendarData === undefined"
      >
        <h4 class="alert-heading">
          Error fetching calendar data
        </h4>
        <div class="alert-body">
          No calendar data found with this calendar id. Check
          <b-link
            class="alert-link"
            :to="{ name: 'calendars-home'}"
          >
            calendar List
          </b-link>
          for other calendars.
        </div>
      </b-alert>
  
      <template v-if="calendarData">
        <!-- First Row -->
        <b-row>
            <b-col
                cols="12"
                md="12"
            >
                <calendar-view-info-card :calendar-data="calendarData" />

            </b-col>         
        </b-row>    

        <event-list :schoolId="calendarData.school.schId" :module="moduleName" />
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
    import CalendarViewInfoCard from './CalendarViewInfoCard.vue'
    import calendarStoreModule from '../calendarStoreModule'
    import EventList from '../../dashboard/EventList.vue'

    export default {
        components: {
            BTab,
            BTabs,
            BCard,
            BAlert,
            BLink,
            EventList,
            CalendarViewInfoCard
        },
        data() {
            return {
                calendarData: null,
                calendarId: "",
                moduleName: "calendar"
            }
        },
        async mounted(){
           await this.runOnce();
        },
        methods: {
            async runOnce(){
                const CALENDAR_APP_STORE_MODULE_NAME = 'app-calendar';
        
                // Register module
                if (!store.hasModule(CALENDAR_APP_STORE_MODULE_NAME)) store.registerModule(CALENDAR_APP_STORE_MODULE_NAME, calendarStoreModule)

                // UnRegister on leave
                onUnmounted(() => {
                    if (store.hasModule(CALENDAR_APP_STORE_MODULE_NAME)) store.unregisterModule(CALENDAR_APP_STORE_MODULE_NAME)
                });
            
                let response = await store.dispatch('app-calendar/fetchCalendar', { id: router.currentRoute.params.id  })
                if (response.data.data){
                        this.calendarData = response.data.data;
                        this.calendarId = router.currentRoute.params.id;                  
                }           
            }
        },
    }
  </script>
  
  <style>
  
  </style>
  