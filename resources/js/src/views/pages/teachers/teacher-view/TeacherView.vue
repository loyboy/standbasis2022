<template>
    <div>
  
      <!-- Alert: No item found -->
      <b-alert
        variant="danger"
        :show="teacherData === undefined"
      >
        <h4 class="alert-heading">
          Error fetching teacher data
        </h4>
        <div class="alert-body">
          No teacher data found with this teacher id. Check
          <b-link
            class="alert-link" 
            :to="{ name: 'teachers-home'}"
          >
            Teacher List
          </b-link>
          for other teachers.
        </div>
      </b-alert>
  
      <template v-if="teacherData">
        <!-- First Row -->
        <b-row>
            <b-col
                cols="12"
                md="12"
            >
                <teacher-view-info-card :teacher-data="teacherData" :classTaught="classTaught" />
            </b-col>         
        </b-row>    

        <event-list :schoolId="teacherData.school.schId" :username="fullName" :module="moduleName" />
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
    import TeacherViewInfoCard from './TeacherViewInfoCard.vue'
    import teacherStoreModule from '../teacherStoreModule'
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
        TeacherViewInfoCard
        },
        data() {
            return {
                teacherData: null,
                teacherId: "",
                classTaught: 0,
                moduleName:"teacher"
            }
        },
        computed: {
          fullName() {
            return this.teacherData.fname + " " + this.teacherData.lname
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
                
                let response2 = await store.dispatch('app-teacher/fetchTeacherClasses', { id: router.currentRoute.params.id  })
                if (response2.data.data){
                        this.classTaught = response2.data.data[0];                                     
                }  
            }
        },
    }
  </script>
  
  <style>
  
  </style>
  