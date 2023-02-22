<template>
    <component :is="calendarData === undefined ? 'div' : 'b-card'">  
      
            <!-- Alert: No item found -->
            <b-alert
                variant="danger"
                :show="calendarData === undefined"
            >
                <h4 class="alert-heading">
                Error fetching calendar data
                </h4>
                <div class="alert-body">
                No calendar found with this calendar id. Check
                <b-link
                    class="alert-link"
                    :to="{ name: 'calendars-home'}"
                >
                calendar List
                </b-link>
                for other calendars.
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
                 <calendar-edit-tab-information class="mt-2 pt-75" :calendar-data="calendarData" :calendar-id="calendarId"/> 
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
  import CalendarEditTabInformation from './CalendarEditTabInformation.vue'
  import calendarStoreModule from '../calendarStoreModule'

  export default {
    components: {
      BTab,
      BTabs,
      BCard,
      BAlert,
      BLink,
      CalendarEditTabInformation
    },
    data() {
        return {
            calendarData: null,
            calendarId: ""
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
  