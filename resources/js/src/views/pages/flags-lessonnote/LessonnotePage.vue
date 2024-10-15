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
              md="12"
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

            <hr /> 

          <!--  <b-col
              cols="12"
              md="12"
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
            </b-col>-->

            <b-col
              cols="12"
              md="12"
              class="mb-md-0 mb-2"
              v-if=" userData.role === 'proprietor' ||  userData.role === 'principal' ||  userData.role === 'teacher' || userData.role === 'supervisor' "
            >
              <label>School Year</label>
              <v-select
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                v-model="filters.schoolyear"
                :options="schoolyearOptions"               
                class="w-100"
                :reduce="(val) => val.value"            
              />
            </b-col>

            <hr /> 

            <b-col
              cols="12"
              md="12"
              class="mb-md-0 mb-2"
              v-if=" userData.role === 'proprietor' ||  userData.role === 'principal' ||  userData.role === 'teacher' || userData.role === 'supervisor' "
            >
              <label>School Term</label>
              <v-select
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                v-model="filters.schoolterm"
                :options="schooltermOptions"               
                class="w-100"
                :reduce="(val) => val.value"            
              />
            </b-col>

            <b-col
              cols="12"
              md="12"
              class="mb-md-0 mb-2"
              v-if=" userData.role === 'proprietor' ||  userData.role === 'principal' ||  userData.role === 'teacher' || userData.role === 'supervisor' "
            >
              <label>Week</label>
              <v-select
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                v-model="filters.week"
                :options="weekOptions"
                class="w-100"
                :reduce="(val) => val.value"
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
                    Filter Flags Page
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
            ref="refLessonnoteListTable"
            class="position-relative"
            :items="lessonnoteItems"
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
                  {{ String( data.item.value ) }} 
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
  import useLessonnoteList from './useLessonnoteList'
  import lessonnoteStoreModule from './lessonnoteStoreModule'

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
     
        let weekOptions = [
          { value: null, label: "Please select a Week" },
          { value: 1 , label: "Week 1" },  
          { value: 2 , label: "Week 2" }, 
          { value: 3,  label: "Week 3" }, 
          { value: 4,  label: "Week 4" }, 
          { value: 5,  label: "Week 5" },
          { value: 6,  label: "Week 6" },
          { value: 7,  label: "Week 7" },
          { value: 8,  label: "Week 8" },
          { value: 9,  label: "Week 9" },
          { value: 10, label: "Week 10" },
          { value: 11, label: "Week 11" },
          { value: 12, label: "Week 12" },
        ]

      return {  
         teacherOptions,
         classOptions,
         calendarOptions,
         subjectOptions,
         weekOptions
      }
    },

    mounted(){
        if(this.userData.role !== "proprietor"){
            setTimeout(() => {
                this.loadOtherValues( this.teacherData.school.schId );              
            },800);  
            
            setTimeout(() => {
               let cal_obj             =   this.calendarOptions.filter(c => c.value === this.calendarId )  
               const regexPattern = /(\d{4}\/\d{4})---Term (\d+)/;
               const match = cal_obj[0].label.match(regexPattern);
               this.filters.week       =   this.weekOptions[0].value; 
               this.filters.schoolyear =   match[1];
               this.filters.schoolterm =   Number(match[2]);
               this.handleChange()               
            },1700); 
              
        }
    },

    setup() {
      const { refFormObserver, getValidationState, resetForm } = formValidation(() => {})
      const Lessonnote_APP_STORE_MODULE_NAME = 'app-LessonnoteMNE';

      // Register module
      if (!store.hasModule(Lessonnote_APP_STORE_MODULE_NAME)) store.registerModule(Lessonnote_APP_STORE_MODULE_NAME, lessonnoteStoreModule)
  
      // UnRegister on leave
      onUnmounted(() => {
        if (store.hasModule(Lessonnote_APP_STORE_MODULE_NAME)) store.unregisterModule(Lessonnote_APP_STORE_MODULE_NAME)
      })  
      
      const userData = ref({});
      const teacherData = ref({});
      const schoolOptions = ref([ { value: null, label: "All Schools" } ]);
      const schoolGroupOptions = ref([ { value: null, label: "Select a School Group" } ]);
      const schoolyearOptions = ref([ { value: null, label: "Select a School Year" } ]);
      const schooltermOptions = ref([ { value: null, label: "Select a School Term" } ]);

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
        fetchLessonnotes,
        tableColumns,
    
        refLessonnoteListTable,
        
        isLoading,
        
        handleChange,

        filters,

        lessonnoteItems

      } = useLessonnoteList();

      if( findIfPropisPresent || findIfTeacherisPresent || findIfPrinisPresent ){
          filters.value.teacherId = findIfTeacherisPresent && teacherData.value ? teacherData.value.teaId : null;
          filters.value.schoolId = findIfPrinisPresent && teacherData.value ? teacherData.value.school.schId : null;
          filters.value.schoolgroup = (findIfPropisPresent || findIfPrinisPresent || findIfTeacherisPresent) && teacherData.value ? teacherData.value.school.owner.id : null;
          filters.value.calendarId = (findIfPrinisPresent || findIfTeacherisPresent) && userData.value ? userData.value.cal_id : null;
      }

      (async function () {
        schoolyearOptions.value.push({ value: "2022/2023" , label: "2022/2023" });
        schoolyearOptions.value.push({ value: "2023/2024" , label: "2023/2024" });
        schoolyearOptions.value.push({ value: "2024/2025" , label: "2024/2025" });
        
        schooltermOptions.value.push({ value: 1 , label: "1st Term" });
        schooltermOptions.value.push({ value: 2 , label: "2nd Term" });
        schooltermOptions.value.push({ value: 3 , label: "3rd Term" });

        if( findIfPropisPresent || findIfTeacherisPresent || findIfPrinisPresent ){
          const resp = await store.dispatch(`${Lessonnote_APP_STORE_MODULE_NAME}/fetchSchools`, { id : filters.value.schoolgroup });
          let myval = resp.data.data;
          myval.forEach(obj => {
            schoolOptions.value.push( { value: obj.schId , label: obj.name } )
          });
        }
        else if( findIfSupervisorisPresent ){
          const resp = await store.dispatch(`${Lessonnote_APP_STORE_MODULE_NAME}/fetchSchoolGroups`);
          let myval = resp.data.data;
          myval.forEach(obj => {
            schoolGroupOptions.value.push( { value: obj.id , label: obj.name } )
          });
        }
      })();

      onMounted(async () => {
        fetchLessonnotes();
      })
      
      return {
        
        isLoading,
  
        fetchLessonnotes,
        tableColumns,
      
        refLessonnoteListTable,

        handleChange,
        
        filters,
        schoolOptions,
        schoolGroupOptions,

        schoolyearOptions,
        schooltermOptions,

        userData,
        teacherData,

        lessonnoteItems

      }
    },

    methods: {

      reset(){       

        this.classOptions = [
          { value: null, label: "Please select Class" }
        ]

        this.calendarOptions = [
          { value: null, label: "Please select Calendar" }
        ]

        this.subjectOptions = [
          { value: null, label: "Please select a Subject" }
        ]

        this.weekOptions = [
          { value: null, label: "Please select a Week" }
        ]

       //  this.filters.schoolgroup = null;
         this.filters.schoolId = null;
         this.filters.classId = null;
       
        // this.filters.calendarId = null;
         this.filters.subjectId = null;
         this.filters.week = null;        
         this.filters.dateFrom = null;
         this.filters.dateTo = null;

         this.fetchLessonnotes();
      },

      loadOtherValues(value){

            this.filters.classId = null;
            this.filters.teacherId = null;
            this.filters.calendarId = null;
            this.filters.subjectId = null; 
            this.filters.week = null;                

            const Lessonnote_APP_STORE_MODULE_NAME = 'app-LessonnoteMNE';
            const sef = this;  

            sef.teacherOptions = [];     
            store.dispatch(`${Lessonnote_APP_STORE_MODULE_NAME}/fetchTeachers`, { id : value })
            .then(response => { 
              let myval = response.data.data;
              myval.forEach(obj => {
                sef.teacherOptions.push( { value: obj.teaId , label: obj.fname + ' ' + obj.lname} )
              });             
            });

            sef.subjectOptions = [];     
            store.dispatch(`${Lessonnote_APP_STORE_MODULE_NAME}/fetchSubjects`)
            .then(response => { 
              let myval = response.data.data;
              myval.forEach(obj => {
                sef.subjectOptions.push( { value: obj.subId , label: obj.name } )
              });            
            });

            sef.classOptions = [];     
            sef.classOptions.push( { value: 7 , label: "JSS1" } )            
            sef.classOptions.push( { value: 8 , label: "JSS2" } )
            sef.classOptions.push( { value: 9 , label: "JSS3" } )
            sef.classOptions.push( { value: 10 , label: "SS1" } )  
            sef.classOptions.push( { value: 11 , label: "SS2" } )
            sef.classOptions.push( { value: 12 , label: "SS3" } )   
           

            sef.calendarOptions = [];     
            store.dispatch(`${Lessonnote_APP_STORE_MODULE_NAME}/fetchCalendars`, { id : value })
            .then(response => { 
              let myval = response.data.data;
              myval.forEach(obj => {                
                  let isActive = obj.status === 1 ? "ACTIVE" : "INACTIVE";
                  sef.calendarOptions.push( { value: obj.CalendarId , label: obj.session + "---" + "Term " + obj.term + "---" + isActive } )
              });             
            });    
      },

      loadOtherValuesGroup(value){

        this.filters.schoolId = null;
        this.filters.classId = null;
        this.filters.teacherId = null;
        this.filters.calendarId = null;
        this.filters.subjectId = null; 
        this.filters.week = null;                

        const Lessonnote_APP_STORE_MODULE_NAME = 'app-LessonnoteMNE';
        const sef = this;  

        sef.schoolOptions = [];     
        store.dispatch(`${Lessonnote_APP_STORE_MODULE_NAME}/fetchSchools`, { id : value })
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
  
  <style lang="scss">
  .per-page-selector {
    width: 90px;
  }

  .tdBlue {
    background: #17375e repeat;
    width: 40%;
    color: #fff;
    text-align: center;
  }
  </style>
  
  <style lang="scss">
  @import '~@core/scss/vue/libs/vue-select.scss';
  </style>
  