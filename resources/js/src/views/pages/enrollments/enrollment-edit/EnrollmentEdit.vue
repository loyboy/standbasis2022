<template>
    <component :is="enrollmentData === undefined ? 'div' : 'b-card'">  
      
            <!-- Alert: No item found -->
            <b-alert
                variant="danger"
                :show="enrollmentData === undefined"
            >
                <h4 class="alert-heading">
                Error fetching enrollment data
                </h4>
                <div class="alert-body">
                No enrollment found with this enrollment id. Check
                <b-link
                    class="alert-link"
                    :to="{ name: 'enrollments-home'}"
                >
                enrollment List
                </b-link>
                for other enrollments.
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
                 <enrollment-edit-tab-information class="mt-2 pt-75" :pupil-data="pupilOptions" :class-data="classOptions" :enrollment-data="enrollmentData" :enrollment-id="enrollmentId"/> 
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
  import axios from "axios";
  import { $themeConfig } from '@themeConfig';
  import jwtHeader from "@core/services/jwt-header";
  import EnrollmentEditTabInformation from './EnrollmentEditTabInformation.vue'
  import enrollmentStoreModule from '../enrollmentStoreModule'

  export default {
    components: {
      BTab,
      BTabs,
      BCard,
      BAlert,
      BLink,
      EnrollmentEditTabInformation
    },
    data() {
        return {
            enrollmentData: null,
            enrollmentId: "",
            pupilOptions: [],
            classOptions: []
        } 
    },

    async mounted(){
       await this.runOnce();
       this.getPupils();
       this.getClasses();
    },

    methods: {
        getPupils(){
          this.$loading(true);
          const { baseURL } = $themeConfig.app;
          const sef = this;
          this.pupilOptions.push({ value:  new String(""), text: "Please select your Pupil's Enrollment student. " });
          axios.get( baseURL + "/misc/allPupils/"+ this.enrollmentData.student.school.schId)
          .then(function (response) {  
                sef.$loading(false);
                let data = response.data;
                let contents = data.data;
                for (let i = 0; i < contents.length; ++i) {
                    sef.pupilOptions.push( { value: Number(contents[i].pupId), text: contents[i].name } )
                }
          }); 
        },
       /* getClasses(){
            this.$loading(true);
            const { baseURL } = $themeConfig.app;
            const sef = this;
            this.classOptions.push({ value:  new String(""), text: "Please select your Class for the Enrollment student. " });
            axios.get( baseURL + "/misc/allClasses/"+this.enrollmentData.classstream.school.schId)
            .then(function (response) {  
                  sef.$loading(false);
                  let data = response.data;
                  let contents = data.data;
                  for (let i = 0; i < contents.length; ++i) {
                      sef.classOptions.push( { value: Number(contents[i].clsId), text: contents[i].title + " " + contents[i].ext } )
                  }
            }); 
        },*/
        getClasses() {
            this.$loading(true);
            const sef = this;
            this.classOptions = []; // Clear existing options first
            this.classOptions.push({ value: "", text: "Please select your School's Timetable class." });
            
            axios.get(this.baseURL + "/misc/allClasses/" + this.enrollmentData.classstream.school.schId)
            .then(function (response) {  
                sef.$loading(false);
                let data = response.data;
                let contents = data.data;
                
                // Get current class category (e.g., "SS3", "JSS1", etc.)
                let currentClassCategory = "";
                if (sef.enrollmentData.classstream.clsId) {
                    // Find the current class text to determine category
                    const currentClass = contents.find(cls => cls.clsId == sef.enrollmentData.classstream.clsId);
                    if (currentClass) {
                        // Clean the title by removing leading/trailing whitespace and newline characters
                        const cleanTitle = currentClass.title.trim();
                        currentClassCategory = cleanTitle; // This will be "SS1", "SS2", "SS3", etc.
                    }
                }
                
                // Filter classes based on current category
                let filteredContents = contents;
                if (currentClassCategory) {
                    filteredContents = contents.filter(cls => {
                        const cleanTitle = cls.title.trim(); // Remove leading/trailing whitespace and newline
                        const cleanExt = cls.ext.trim(); // Remove leading/trailing spaces from extension
                        return cleanTitle === currentClassCategory;
                    });
                }
                
                for (let i = 0; i < filteredContents.length; ++i) {
                    const cleanTitle = filteredContents[i].title.trim();
                    const cleanExt = filteredContents[i].ext.trim();
                    sef.classOptions.push({ 
                        value: Number(filteredContents[i].clsId), 
                        text: cleanTitle + " " + cleanExt 
                    });
                }
            })
            .catch(function (error) {
                sef.$loading(false);
                console.error('Error fetching classes:', error);
            });
        },
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
    }

  }
  </script>
  
  <style>
  
  </style>
  