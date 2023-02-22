<template>
    <div>
  
      <!-- Alert: No item found -->
      <b-alert
        variant="danger"
        :show="schoolgroupData === undefined"
      >
        <h4 class="alert-heading">
          Error fetching school group data
        </h4>
        <div class="alert-body">
          No school group data found with this school group id. Check
          <b-link
            class="alert-link"
            :to="{ name: 'groupschools-home'}"
          >
            School Group List
          </b-link>
          for other groups.
        </div>
      </b-alert>
  
      <template v-if="schoolgroupData">
        <!-- First Row -->
        <b-row>
            <b-col
                cols="12"
                md="12"
            >
                <group-school-info-card :tCount="teacherCount" :stuCount="studentCount" :schCount="schoolCount" :schoolgroup-data="schoolgroupData" />
            </b-col>         
        </b-row>    

        <event-list :schoolgroupId="  schoolgroupId" :module="moduleName"/>
      </template>
  
    </div>
  </template>
  
  <script>
    import {
        BTab, BTabs, BCard, BAlert, BLink, BCol, BRow
    } from 'bootstrap-vue'
    import { ref, onUnmounted } from '@vue/composition-api'
    import router from '@/router'
    import store from '@/store'
    import GroupSchoolInfoCard from './GroupSchoolInfoCard.vue'
    import groupschoolStoreModule from '../groupschoolStoreModule'
    import EventList from '../../dashboard/EventList.vue'

    export default {
        components: {
        BTab,
        BTabs,
        BCard,
        BAlert,
        BLink,
        BCol,
        BRow,
        EventList,
        GroupSchoolInfoCard
        },
        data() {
            return {
                schoolgroupData: null,
                schoolgroupId: null,      
                schoolCount: 0,
                teacherCount:0,
                studentCount:0,
                moduleName:"schoolgroup"
            }
        },
        async mounted(){
           await this.runOnce();
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
                
                let response4 = await store.dispatch('app-schoolgroup/countStudentBySchoolGroup', { id: router.currentRoute.params.id  })
                if (response4.data.data){
                   // console.log("Response in three: " + response3.data.data[0] )
                    this.studentCount = response4.data.data[0];           
                    console.log("Response in student log: " + this.studentCount )                               
                }

                let response = await store.dispatch('app-schoolgroup/fetchGroup', { id: router.currentRoute.params.id  })
                if (response.data.data){
                        this.schoolgroupData = response.data.data;
                        this.schoolgroupId = Number(router.currentRoute.params.id);                  
                }
                
                let response2 = await store.dispatch('app-schoolgroup/countSchoolBySchoolGroup', { id: router.currentRoute.params.id  })
                if (response2.data.data){
                    this.schoolCount = response2.data.data[0];                                          
                }

                let response3 = await store.dispatch('app-schoolgroup/countTeacherBySchoolGroup', { id: router.currentRoute.params.id  })
                if (response3.data.data){
                  //  console.log("Response in three: " + response3.data.data[0] )
                    this.teacherCount = response3.data.data[0];                                          
                }

                
            }
        },
    }
  </script>
  
  <style>
  
  </style>
  