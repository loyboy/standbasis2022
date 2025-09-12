<template>
    <div>
  
      <!-- Alert: No item found -->
      <b-alert
        variant="danger"
        :show="schoolData === undefined"
      >
        <h4 class="alert-heading">
          Error fetching school data
        </h4>
        <div class="alert-body">
          No school data found with this school id. Check
          <b-link
            class="alert-link"
            :to="{ name: 'school-list'}"
          >
            School List
          </b-link>
          for other schools.
        </div>
      </b-alert>
  
      <template v-if="schoolData">
        <!-- First Row -->
        <b-row>
            <b-col
                cols="12"
                xl="12"
                lg="12"
                md="12"
            >
                <school-view-info-card :t-count="teacherCount" :s-count="studentCount" :school-data="schoolData" />
            </b-col>         
        </b-row>    

        <event-list :schoolId="schoolId" :module="moduleName" />
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
    import SchoolViewInfoCard from './SchoolViewInfoCard.vue'
    import schoolStoreModule from '../schoolStoreModule'
    import EventList from '../../dashboard/EventList.vue'

    export default {
        components: {
        BTab,
        BTabs,
        BRow,
        BCol,
        BCard,
        BAlert,
        BLink,
        EventList,
        SchoolViewInfoCard
        },
        data() {
            return {
                schoolData: null,
                schoolId: null,
                moduleName: "school",
                studentCount: 0,
                teacherCount: 0
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
                
                let response2 = await store.dispatch('app-school/countStudentBySchool', { id: router.currentRoute.params.id  })
                if (response2.data.data){
                    this.studentCount = response2.data.data[0];                                          
                }

                let response3 = await store.dispatch('app-school/countTeacherBySchool', { id: router.currentRoute.params.id  })
                if (response3.data.data){
                   // console.log("Response in three: " + response3.data.data[0] )
                    this.teacherCount = response3.data.data[0];                                          
                }

            }
        },
    }
  </script>
  
  <style>
  
  </style>
  