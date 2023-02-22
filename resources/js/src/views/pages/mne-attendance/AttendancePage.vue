<template>
    <div>

      <b-form
                class="p-2"
                @submit.prevent="handleChange()"
                @reset.prevent="resetForm"
              >
        <b-card-body> 
          <b-row>
                  <b-col cols="12" md="12" v-if=" userData.role === 'supervisor' ">
                    <b-form-group label="Select School Group" label-for="schoolgroup">
                      <b-form-select
                        v-model="filters.schoolgroup"
                        :options="schoolGroupOptions"
                        @change="loadOtherValuesGroup"
                      />
                    </b-form-group>
                  </b-col>
          </b-row>

          <b-row>

            <b-col
              cols="12"
              md="4"
              class="mb-md-0 mb-2"
              v-if=" userData.role === 'proprietor' || userData.role === 'supervisor' "
            >
              <label>School</label>
              <v-select
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                v-model="filters.schoolId"
                :options="schoolOptions"
                @input="loadOtherValues"
                class="w-100"
                :reduce="(val) => val.value"            
              />
            </b-col>

            <b-col
              cols="12"
              md="4"
              class="mb-md-0 mb-2"
              v-if=" userData.role === 'proprietor' ||  userData.role === 'principal' || userData.role === 'supervisor' "
            >
              <label>Teacher</label>
              <v-select
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                v-model="filters.teacherId"
                :options="teacherOptions"
                class="w-100"
                :reduce="(val) => val.value"
              />
            </b-col>

            <b-col
              cols="12"
              md="4"
              class="mb-md-0 mb-2"
              v-if=" userData.role === 'proprietor' ||  userData.role === 'principal' ||  userData.role === 'teacher' || userData.role === 'supervisor' "
            >
              <label>Class</label>
              <v-select
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                v-model="filters.classId"
                :options="classOptions"
                class="w-100"      
                :reduce="(val) => val.value"        
              />
            </b-col>

            <hr /> <!-------------------------->

            <b-col
              cols="12"
              md="4"
              class="mb-md-0 mb-2"
              v-if=" userData.role === 'proprietor' ||  userData.role === 'principal' ||  userData.role === 'teacher' || userData.role === 'supervisor' "
            >
              <label>Calendar</label>
              <v-select
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                v-model="filters.calendarId"
                :options="calendarOptions"               
                class="w-100" 
                :reduce="(val) => val.value"                            
              />
            </b-col>

            <b-col
              cols="12"
              md="4"
              class="mb-md-0 mb-2"
              v-if=" userData.role === 'proprietor' ||  userData.role === 'principal' ||  userData.role === 'teacher' || userData.role === 'supervisor' "
            >
              <label>Subject</label>
              <v-select
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                v-model="filters.subjectId"
                :options="subjectOptions"
                class="w-100"  
                :reduce="(val) => val.value"             
              />
            </b-col>

            <b-col
              cols="12"
              md="6"
              class="mb-md-0 mb-2"
              v-if=" userData.role === 'proprietor' ||  userData.role === 'principal' ||  userData.role === 'teacher' || userData.role === 'supervisor' "
            >
              <label>Date To</label>
              <b-form-datepicker
                        id="to"
                        v-model="filters.dateTo"
                        placeholder="Choose a date"
                        local="en"
                        initial-date="2023-01-01"
                      />
            </b-col> 

            <b-col
              cols="12"
              md="6"
              class="mb-md-0 mb-2"
              v-if=" userData.role === 'proprietor' ||  userData.role === 'principal' ||  userData.role === 'teacher' || userData.role === 'supervisor' "
            >
              <label>Date From </label>
              <b-form-datepicker
                        id="to"
                        v-model="filters.dateFrom"
                        placeholder="Choose a date"
                        local="en"
                        initial-date="2023-01-01"
                      />
            </b-col>

          </b-row>        

          <b-row class="filter-padding">
            <b-col
              cols="12"
              md="6"
              class="mb-md-0 mb-2"
            >
                  <b-button variant="success" class="mr-2 col-md-12" type="submit">
                    Filter M & E Page
                  </b-button>                  
            </b-col>

            <b-col
              cols="12"
              md="6"
              class="mb-md-0 mb-2"
            >
                  <b-button
                        type="button"
                        class="mr-2 col-md-12"
                        variant="dark"
                        @click="reset"
                      >
                        Reset
                  </b-button>

            </b-col>
          </b-row>

        </b-card-body>

      </b-form>
  
        <!-- Table Container Card -->
        <b-card
          no-body
          class="mb-0"
        >  
        
          <b-table
            ref="refAttendanceListTable"
            class="position-relative"
            :items="attendanceItems"
            :busy="isLoading"
            responsive
            :fields="tableColumns"
          >

              <template #table-busy>
                <div class="text-center text-danger my-2">
                  <b-spinner class="align-middle"></b-spinner>
                  <strong>Loading...</strong>
                </div>
              </template>
    
              <!-- Column: Value -->
              <template #cell(value)="data">
                <div>
                  {{ String( data.item.value ) }} %
                </div>               
              </template>

              <!-- Column: Parameter -->
              <template #cell(parameter)="data">
                <div>
                  <b style=" font-size: 16px; "  > {{ String( data.item.parameter ) }} : </b>
                </div> 
              </template>
    
          </b-table>

        </b-card>

    </div>

</template>
  
<script>
  import {
    BCardHeader, 
    BCardBody,
    BCard,
    BRow,
    BCol,
    BFormInput,
    BFormGroup,
    BButton,
    BSpinner,
    BTable,
    BSidebar,
    BForm,
    BMedia,
    BAvatar,
    BFormSelect,
    BFormTags,
    BCardText,
    BFormDatepicker,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,
  } from 'bootstrap-vue';
  import StatisticCardHorizontal from "@core/components/statistics-cards/StatisticCardHorizontal.vue";
  import vSelect from 'vue-select'
  import router from '@/router'
  import store from '@/store'
  import { ref, onUnmounted ,onMounted, watch } from '@vue/composition-api'
  import { avatarText } from '@core/utils/filter'
  import formValidation from '@core/comp-functions/forms/form-validation'
  // Notification
  import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
  import useAttendanceList from './useAttendanceList'
  import attendanceStoreModule from './attendanceStoreModule'


  export default {
    components: {    
      StatisticCardHorizontal,
      BCardHeader, 
      BCardBody,
      BCard,
      BRow,
      BCol,
      BFormInput,
      BFormGroup,
      BButton,
      BSpinner,
      BTable,
      BSidebar,
      BForm,
      BFormTags,
      BMedia,
      BAvatar,
      BFormSelect,
      BCardText,
      BFormDatepicker,
      BLink,
      BBadge,
      BDropdown,
      BDropdownItem,
      BPagination,
  
      vSelect
    },

    data() {

      let teacherOptions = [
        { value: null, label: "Please select Teacher" }
      ]

      let classOptions = [
        { value: null, label: "Please select Class" }
      ]

      let calendarOptions = [
        { value: null, label: "Please select Calendar" }
      ]

      let subjectOptions = [
        { value: null, label: "Please select a Subject" }
      ]

      return {  
         teacherOptions,
         classOptions,
         calendarOptions,
         subjectOptions
      }
    },

    setup() {
      const { refFormObserver, getValidationState, resetForm } = formValidation(() => {})
      const Attendance_APP_STORE_MODULE_NAME = 'app-AttendanceMNE';

      // Register module
      if (!store.hasModule(Attendance_APP_STORE_MODULE_NAME)) store.registerModule(Attendance_APP_STORE_MODULE_NAME, attendanceStoreModule)
  
      // UnRegister on leave
      onUnmounted(() => {
        if (store.hasModule(Attendance_APP_STORE_MODULE_NAME)) store.unregisterModule(Attendance_APP_STORE_MODULE_NAME)
      })  
      
      const userData = ref({});
      const teacherData = ref({});
      const schoolOptions = ref([]);
      const schoolGroupOptions = ref([]);

      const storedItems = JSON.parse(localStorage.getItem('userData'));
      if (storedItems){
        userData.value = storedItems;
      }

      const storedItems2 = JSON.parse(localStorage.getItem('teacherData'));
      if (storedItems2){
        teacherData.value = storedItems2;
      }

      const findIfPropisPresent = ( userData.value.role === "proprietor"  );
      const findIfTeacherisPresent = ( userData.value.role === "teacher" );
      const findIfPrinisPresent = ( userData.value.role === "principal" ); 
      const findIfSupervisorisPresent = ( userData.value.role === "supervisor" );       
      
      const {
        fetchAttendances,
        tableColumns,
    
        refAttendanceListTable,
        
        isLoading,
        
        handleChange,

        filters,

        attendanceItems

      } = useAttendanceList();

      if( findIfPropisPresent || findIfTeacherisPresent || findIfPrinisPresent ){
          filters.value.teacherId = findIfTeacherisPresent && teacherData.value ? teacherData.value.teaId : null;
          filters.value.schoolId = findIfPrinisPresent && teacherData.value ? teacherData.value.school.schId : null;
          filters.value.schoolgroup = (findIfPropisPresent || findIfPrinisPresent || findIfTeacherisPresent) && teacherData.value ? teacherData.value.school.owner.id : null;
      }

      (async function () {
        if( findIfPropisPresent || findIfTeacherisPresent || findIfPrinisPresent ){
          const resp = await store.dispatch(`${Attendance_APP_STORE_MODULE_NAME}/fetchSchools`, { id : filters.value.schoolgroup });
          let myval = resp.data.data;
          myval.forEach(obj => {
            schoolOptions.value.push( { value: obj.schId , label: obj.name } )
          });
        }
        else if( findIfSupervisorisPresent ){
          const resp = await store.dispatch(`${Attendance_APP_STORE_MODULE_NAME}/fetchSchoolGroups`);
          let myval = resp.data.data;
          myval.forEach(obj => {
            schoolGroupOptions.value.push( { value: obj.id , label: obj.name } )
          });
        }
      })();

      onMounted(async () => {
        fetchAttendances();

        if (!findIfPropisPresent){
           await loadOtherValues( teacherData.value.school.schId );
        }
      })
      
      return {
        
        isLoading,
  
        fetchAttendances,
        tableColumns,
      
        refAttendanceListTable,

        handleChange,
        
        filters,
        schoolOptions,
        schoolGroupOptions,

        attendanceItems,

        userData

      }
    },

    methods: {

      reset(){

        this.teacherOptions = [
          { value: null, label: "Please select Teacher" }
        ]

        this.classOptions = [
          { value: null, label: "Please select Class" }
        ]

        this.calendarOptions = [
          { value: null, label: "Please select Calendar" }
        ]

        this.subjectOptions = [
          { value: null, label: "Please select a Subject" }
        ]

         this.filters.schoolgroup = null;
         this.filters.schoolId = null;
         this.filters.classId = null;
         this.filters.teacherId = null;
         this.filters.calendarId = null;
         this.filters.subjectId = null;        
         this.filters.dateFrom = null;
         this.filters.dateTo = null;

         this.fetchAttendances();
      },

      loadOtherValues(value){

            this.filters.classId = null;
            this.filters.teacherId = null;
            this.filters.calendarId = null;
            this.filters.subjectId = null;           

            const Attendance_APP_STORE_MODULE_NAME = 'app-AttendanceMNE';
            const sef = this;     
            sef.teacherOptions = [];     
            store.dispatch(`${Attendance_APP_STORE_MODULE_NAME}/fetchTeachers`, { id : value })
            .then(response => { 
              let myval = response.data.data;
              myval.forEach(obj => {
                sef.teacherOptions.push( { value: obj.teaId , label: obj.fname + ' ' + obj.lname} )
              });             
            });

            sef.classOptions = [];     
            store.dispatch(`${Attendance_APP_STORE_MODULE_NAME}/fetchClassrooms`, { id : value })
            .then(response => { 
              let myval = response.data.data;
              myval.forEach(obj => {
                sef.classOptions.push( { value: obj.clsId , label: obj.title + ' ' + obj.ext} )
              });             
            });

            sef.subjectOptions = [];     
            store.dispatch(`${Attendance_APP_STORE_MODULE_NAME}/fetchSubjects`)
            .then(response => { 
              let myval = response.data.data;
              myval.forEach(obj => {
                sef.subjectOptions.push( { value: obj.subId , label: obj.name } )
              });            
            });

            sef.calendarOptions = [];     
            store.dispatch(`${Attendance_APP_STORE_MODULE_NAME}/fetchCalendars`, { id : value })
            .then(response => { 
              let myval = response.data.data;
              myval.forEach(obj => {
                sef.calendarOptions.push( { value: obj.CalendarId , label: obj.session + ' ' + obj.term + ' Term'} )
              });             
            });
    
      },

      loadOtherValuesGroup(value){

        this.filters.schoolId = null;
        this.filters.classId = null;
        this.filters.teacherId = null;
        this.filters.calendarId = null;
        this.filters.subjectId = null;           

        const Attendance_APP_STORE_MODULE_NAME = 'app-AttendanceMNE';
        const sef = this;  

        sef.schoolOptions = [];     
        store.dispatch(`${Attendance_APP_STORE_MODULE_NAME}/fetchSchools`, { id : value })
        .then(response => { 
          let myval = response.data.data;
          myval.forEach(obj => {
            sef.schoolOptions.push( { value: obj.schId , label: obj.name } )
          });             
        });

      }
    }


  }
  </script>
  
  <style lang="scss" scoped>
  .per-page-selector {
    width: 90px;
  }
  </style>
  
  <style lang="scss">
  @import '~@core/scss/vue/libs/vue-select.scss';
  </style>
  