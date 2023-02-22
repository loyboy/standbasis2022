<template>
    <div>
  
        <!-- Alert: No item found -->
        <b-alert
            variant="danger"
            :show="enrollmentData === undefined"
        >
            <h4 class="alert-heading">
            Error fetching enrollment data
            </h4>
            <div class="alert-body">
            No enrollment data found with this enrollment id. Check
            <b-link
                class="alert-link"
                :to="{ name: 'enrollments-home'}"
            >
            Enrollment List
            </b-link>
            for other enrollments.
            </div>
        </b-alert>
  
      <template v-if="enrollmentData">
        <!-- First Row -->
        <b-row>
            <b-col
                cols="12"
                md="12"
            >
                <enrollment-view-info-card :enrollment-data="enrollmentData" />
            </b-col>         
        </b-row>    

        <event-list :schoolId="enrollmentData.classstream.school.schId" :module="moduleName" />
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
    import EnrollmentViewInfoCard from './EnrollmentViewInfoCard.vue'
    import enrollmentStoreModule from '../enrollmentStoreModule'
    import EventList from '../../dashboard/EventList.vue'

    export default {
        components: {
        BTab,
        BRow,
        BCol,
        BTabs,
        BCard,
        BAlert,
        BLink,
        EventList,
        EnrollmentViewInfoCard
        },
        data() {
            return {
                enrollmentData: null,
                enrollmentId: "",
                moduleName: "enrollment"
            }
        },
        async mounted(){
           await this.runOnce();
        },
        methods: {
            async runOnce(){
                const ENROLLMENT_APP_STORE_MODULE_NAME = 'app-enrollment';
        
                // Register module
                if (!store.hasModule(ENROLLMENT_APP_STORE_MODULE_NAME)) store.registerModule(ENROLLMENT_APP_STORE_MODULE_NAME, enrollmentStoreModule)

                // UnRegister on leave
                onUnmounted(() => {
                    if (store.hasModule(ENROLLMENT_APP_STORE_MODULE_NAME)) store.unregisterModule(ENROLLMENT_APP_STORE_MODULE_NAME)
                });
            
                let response = await store.dispatch('app-enrollment/fetchEnrollment', { id: router.currentRoute.params.id  })
                if (response.data.data){
                        this.enrollmentData = response.data.data;
                        this.enrollmentId = router.currentRoute.params.id;                  
                }           
            }
        },
    }
  </script>
  
  <style>
  
  </style>
  