<template>
    <component :is="timetableData === undefined ? 'div' : 'b-card'">  
      
            <!-- Alert: No item found -->
            <b-alert
                variant="danger"
                :show="timetableData === undefined"
            >
                <h4 class="alert-heading">
                Error fetching timetable data
                </h4>
                <div class="alert-body">
                No timetable found with this timetable id. Check
                <b-link
                    class="alert-link"
                    :to="{ name: 'timetables-home'}"
                >
                timetable List
                </b-link>
                for other timetables.
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
                 <timetable-edit-tab-information class="mt-2 pt-75" :teacher-options="teacherOptions" :class-options="classOptions" :subject-options="subjectOptions" :timetable-data="timetableData" :timetable-id="timetableId"/> 
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
  import { $themeConfig } from "@themeConfig";
  import axios from "axios";
  import TimetableEditTabInformation from './TimetableEditTabInformation.vue'
  import timetableStoreModule from '../timetableStoreModule'

  export default {
    components: {
      BTab,
      BTabs,
      BCard,
      BAlert,
      BLink,
      TimetableEditTabInformation
    },
    data() {
        
      let classOptions = []; 
      let teacherOptions = [];
      let subjectOptions = [];
      let baseURL = $themeConfig.app.baseURL;

        return {
            timetableData: null,
            timetableId: "",

            classOptions,
            subjectOptions,
            teacherOptions,
            baseURL
        }
    },
    async mounted(){

       await this.runOnce();
       this.getTeachers();
       this.getClasses();
       this.getSubjects();

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
           
            let response = await store.dispatch('app-timetable/fetchTimetable', { id: router.currentRoute.params.id  })
            if (response.data.data){
                    this.timetableData = response.data.data;
                    this.timetableId = router.currentRoute.params.id;                  
            }           
        },

        getClasses(){
          this.$loading(true);
          const sef = this;
          this.classOptions.push({ value:  new String(""), text: "Please select your School's Timetable class. " });
          axios.get( this.baseURL + "/misc/allClasses/"+ sef.timetableData.class_stream.school.schId)
          .then(function (response) {  
                sef.$loading(false);
                let data = response.data;
                let contents = data.data;
                for (let i = 0; i < contents.length; ++i) {
                    sef.classOptions.push( { value: Number(contents[i].clsId), text: contents[i].title + " " + contents[i].ext } )
                }
          }); 
       },

       getTeachers(){
          this.$loading(true);
        //  console.log('Teacher timetable panel here..........' + JSON.stringify(this.timetableData) )
          const sef = this;
          this.teacherOptions.push({ value:  new String(""), text: "Please select your School's Timetable teacher. "  });
          axios.get( this.baseURL + "/misc/allTeachers/"+ sef.timetableData.teacher.school.schId)
          .then(function (response) {  
                sef.$loading(false);
                let data = response.data;
                let contents = data.data;
                for (let i = 0; i < contents.length; ++i) {
                    sef.teacherOptions.push( { value: Number(contents[i].teaId), text: contents[i].fname + " " + contents[i].lname  } )
                }
          }); 
       },

       getSubjects(){
          this.$loading(true);
          const sef = this;
          this.subjectOptions.push({ value:  new String(""), text: "Please select your School's Timetable subject. " });
          axios.get( this.baseURL + "/misc/allSubjects")
          .then(function (response) {  
                sef.$loading(false);
                let data = response.data;
                let contents = data.data;
                for (let i = 0; i < contents.length; ++i) {
                    sef.subjectOptions.push( { value: Number(contents[i].subId), text: contents[i].name  } )
                }
          }); 
       }
    },
  }
  </script>
  
  <style>
  
  </style>
  