 <template>
    <div>

       <b-row class="filter-padding mb-2" align-h="left" >           
            <b-col
              cols="12"
              md="10"
              class="mb-md-0 mb-2 align-center"
            >
              <b-form-group label=" Toggle Between Attendance and Assessment" >
                  <b-form-checkbox
                      id="parent-status"
                      v-model="showAttendance"
                      @change="getResult"
                      class="custom-control-primary"               
                      
                      switch
                    /> 
              </b-form-group>
            </b-col>            
      </b-row>

      <b-form
                v-if=" showAttendance === true "
                @submit.prevent="handleChange()"
                class="p-2 myborder"                
                @reset.prevent="resetForm"
              >
        <b-card-body>    
          <b-row>
                  <b-col cols="12" md="12"  >
                    <b-form-group label=" Select Date of Attendance" >
                      <b-form-datepicker
                          id="to"
                          v-model="filters.dateTo"
                          placeholder="Choose a date"
                          
                          :dropright="showRight"
                          local="en"
                          initial-date="2023-01-01"
                      />
                    </b-form-group>
                  </b-col>
          </b-row>

          <b-row>
                  <b-col cols="12" md="12" >
                    <b-form-group label=" Select Child's Calendar Year " >
                      <b-form-select
                        v-model="filters.typetwo_student"
                        :options="userOptions"
                      />
                    </b-form-group>
                  </b-col>
          </b-row>              

          <b-row class="filter-padding" align-h="center" >
            <b-col
              cols="12"
              md="8"
              class="mb-md-0 mb-2 align-center"
            >
                  <b-button variant="success" class="mr-2 col-md-12" type="submit">
                    Get Result Of Attendance
                  </b-button> 

            </b-col>            
          </b-row>
        </b-card-body>

      </b-form>

      <!-- Proprietor screen-->
      <b-form class="p-2 myborder" 
        @submit.prevent="handleChange()"
        @reset.prevent="resetForm"
        v-else>
            <b-card-body>
              
              <b-row>
                  <b-col cols="10" md="10">
                    <b-form-group label=" Select Week " >
                      <b-form-select
                        v-model="filters.typethree"
                        :options="weekOptions"
                      />
                    </b-form-group>
                  </b-col>
              </b-row>

              <b-row>
                  <b-col cols="12" md="12" >
                    <b-form-group label=" Select Child's Calendar Year " >
                      <b-form-select
                        v-model="filters.typetwo_student"
                        :options="userOptions"
                      />
                    </b-form-group>
                  </b-col>
              </b-row> 

              <b-row class="filter-padding" align-h="center">
                <b-col
                  cols="12"
                  md="8"
                  class="mb-md-0 mb-2 align-center"
                >
                      <b-button variant="primary" class="mr-2 col-md-12" type="submit">
                        Get Result of Assessment
                      </b-button> 

                </b-col>            
              </b-row>

              <b-row class="mt-2 py-2">
                <b-col lg="4" sm="6">
                  <statistic-card-horizontal
                    icon="AlertOctagonIcon"
                    color="info"
                    :statistic=" clwTotal === undefined ? 0 : clwTotal "
                    statistic-title=" Classwork Performance Average "
                  />
                </b-col>

                <b-col lg="4" sm="6">
                  <statistic-card-horizontal
                    icon="AlertOctagonIcon"
                    color="success"
                    :statistic="
                      hwkTotal === undefined ? 0 : hwkTotal
                    "
                    statistic-title=" Homework Performance Average "
                  />
                </b-col>

                <b-col lg="4" sm="6">
                  <statistic-card-horizontal
                    icon="AlertOctagonIcon"
                    color="primary"
                    :statistic="
                      tstTotal === undefined ? 0 : tstTotal
                    "
                    statistic-title=" Test Performance Average "
                  />
                </b-col>
              </b-row>

            </b-card-body>
      </b-form>
        
  
      <!-- Table Container Card -->
     <b-card-code title="Rowcall Results" class="my-2 mx-4" v-if=" showAttendance === true ">

            <b-table            
              class="position-relative"
              table-variant="custom-table"
              :items="mnelistItems"
              :busy="isLoading"
              responsive
              :fields="dynamicFields"
              :key="tableKey"
            >
                <template #table-busy>
                  <div class="text-center text-danger my-2">
                    <b-spinner class="align-middle"></b-spinner>
                    <strong>Loading...</strong>
                  </div>
                </template>

                <template #cell(present)="data">
                   <b> {{ data.item.present }}  </b>
                </template>

                 <template #cell(date)="data">
                   <b> {{ data.item.date }} </b>
                </template>

            </b-table>

      </b-card-code>

      <!-- Create a Printable Form for Teachers, Student, School, Class, Principal -->
 



    </div>

</template>

<script>
  import {
    BCardHeader, 
    BCardBody,
    BCard,
    BCardTitle,
    BRow,
    BCol,
    BCollapse,
    BFormInput,
    BFormGroup,
    BButton,
    BSpinner,
    BTable,
    BSidebar,
    BForm,
    BFormText,
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
    BFormCheckbox,
    BFormRadio,
    BFormRadioGroup,
    VBToggle
  } from 'bootstrap-vue';

  import BCardCode from '@core/components/b-card-code'
  import StatisticCardHorizontal from "@core/components/statistics-cards/StatisticCardHorizontal.vue";
  import vSelect from 'vue-select'
  import router from '@/router'
  import axios from "axios";
  import store from '@/store'
  import { ref, onUnmounted ,onMounted, watch } from '@vue/composition-api'
  import { avatarText } from '@core/utils/filter'
  import formValidation from '@core/comp-functions/forms/form-validation'
  import { $themeConfig } from "@themeConfig";
  import useMne from './useParent'
  import mneStoreModule from './parentStoreModule'


  export default {
    directives: {
      'b-toggle': VBToggle
    },
    components: {    
      StatisticCardHorizontal,
      BCardHeader, 
      BCardBody,
      BCard,
      BCardCode,
      BCardTitle,
      BRow,
      BCol,
      BCollapse,
      BFormInput,
      BFormGroup,
      BButton,
      BSpinner,
      BTable,
      BSidebar,
      BForm,
      BFormText,
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
      BFormCheckbox,
      BFormRadio,
      BFormRadioGroup,
      vSelect
    },

    data() {    
       
        let weekOptions = [
            { value: null, text: "Up until today...." },
            { value: 1, text: "Week 1" },
            { value: 2, text: "Week 2" },
            { value: 3, text: "Week 3" },
            { value: 4, text: "Week 4" },
            { value: 5, text: "Week 5" },
            { value: 6, text: "Week 6" },
            { value: 7, text: "Week 7" },
            { value: 8, text: "Week 8" },
            { value: 9, text: "Week 9" },
            { value: 10, text: "Week 10" },
            { value: 11, text: "Week 11" },
            { value: 12, text: "Week 12" }
        ]   

        let showRight = true
        let showAttendance = true
        let showAssessment = false

        return {           
           weekOptions,          
           showRight,
           showAttendance,
           showAssessment
        }
    },  

    setup() {
      const { refFormObserver, getValidationState, resetForm } = formValidation(() => {})
      const Parent_APP_STORE_MODULE_NAME = 'app-Parent';
      const { baseURL } = $themeConfig.app;      

      // Register module
      if (!store.hasModule(Parent_APP_STORE_MODULE_NAME)) store.registerModule(Parent_APP_STORE_MODULE_NAME, mneStoreModule)
  
      // UnRegister on leave
      onUnmounted(() => {
        if (store.hasModule(Parent_APP_STORE_MODULE_NAME)) store.unregisterModule(Parent_APP_STORE_MODULE_NAME)
      })  
      
      const userData = ref({});   
      const teacherData = ref({}); 
      const calendarOptions = ref([ { value: null, text: "Please select A Calendar" } ]);     
      const userOptions = ref([
        { value: null, text: "Please select A Student" }
      ]);

      const storedItems = JSON.parse(localStorage.getItem('userData'));
      if (storedItems){
        userData.value = storedItems;
      }   
 
      const findIfGuardianisPresent = ( userData.value.role === "guardian"  ); 

      const {     
         
        isLoading,     
        
        filters,

        mnelistItems,

        dynamicFields,

        handleChange,

        tableKey,

        clwTotal,

        hwkTotal,

        tstTotal

      } = useMne();

      if( findIfGuardianisPresent ){
          
          filters.value.guardianId = userData.value ? userData.value.code : null;
         
      } 

      (async function () {
       
      })();

     onMounted(() => {
          setTimeout( async () => {
           
            if ( filters.value.guardianId ){

               let idsplit = String( filters.value.guardianId ).split("-");
               delete idsplit[0];
               idsplit.forEach( async (i) => { 
                
                const resp = await store.dispatch(`${Parent_APP_STORE_MODULE_NAME}/fetchEnrollment`, { id : Number(i) });
                let myval = resp.data.data;
                myval.forEach(obj => { 
                  let isActive = obj.calendar.status === 1 ? "ACTIVE" : "INACTIVE";                
                  userOptions.value.push( { value: obj.enrolId , text: obj.student.name + "---" + obj.calendar.session + "---" + "Term " + obj.calendar.term + "---" + isActive } )              
                });
               
               })
              
            }          
          
          }, 2000)       
      })
      
      return {
        
        isLoading,
        
        filters,

        mnelistItems,

        userData,

        Parent_APP_STORE_MODULE_NAME,

        baseURL,

        dynamicFields,

        handleChange,

        calendarOptions,       

        tableKey,

        clwTotal,

        hwkTotal,

        tstTotal,

        userOptions

      }
    },

    methods: {  

        changeType(value){
            const sef = this;  
                      
            sef.userOptions = [];

            if (value === "student"){
                sef.isLoading = true;
               
                store.dispatch(`${this.Parent_APP_STORE_MODULE_NAME}/fetchStudents`, { calendar : this.filters.typefour })
                .then(response => { 
                    let myval = response.data.data;
                    myval.forEach(obj => {
                      sef.userOptions.push( { value: obj.enrolId , text: obj.classstream.title + "---->" + obj.student.name } )
                    }); 
                    sef.isLoading = false;
                });
            }  
            
        }     
       
    }

  } 
  </script>

  <style lang="scss" scoped>
  .myborder{
    border: 1px darkgray dotted;
  }

  .custom-table {
    /* Adjust padding and cellspacing as needed */
    padding: 20px;
    border-collapse: separate;
    border-spacing: 15px;
  }

  </style>