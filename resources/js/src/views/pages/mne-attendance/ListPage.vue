 <template>
    <div>

      <b-form
                 v-if=" userData.role !== 'proprietor' "
                class="p-2 myborder"
                @submit.prevent="handleChange()"
                @reset.prevent="resetForm"
              >
        <b-card-body>
          <!-- Fixxx the issue with Propreitor here in Calendar -->        

          <b-row>
                  <b-col cols="12" md="12"  >
                    <b-form-group label=" Select School Calendar" >
                      <b-form-select
                        v-model="filters.typefour"
                        :options="calendarOptions"
                        @change="changeCalendar"
                      />
                    </b-form-group>
                  </b-col>
          </b-row>

          <b-row v-if=" filters.typefour !== null ">
                  <b-col cols="12" md="12"  >
                    <b-form-group label=" Select Week" >
                      <b-form-select
                        v-model="filters.typethree"
                        :options="weekOptions"
                      />
                    </b-form-group>
                  </b-col>
          </b-row>

          <b-row v-if=" filters.typefour !== null ">
                  <b-col cols="12" md="3">
                    <span> <b> <h3> Choose a Category: </h3> </b> </span>
                  </b-col>

                  <b-col cols="12" md="3">
                    <b-form-group label="Select Student" label-for="studentpick">
                      <b-form-radio v-model="filters.typeone" @change="changeType"  name="studentpick" value="student">Student</b-form-radio>
                    </b-form-group>
                  </b-col> 

                  <b-col cols="12" md="3" v-if="  userData.role === 'principal' ">
                    <b-form-group label="Select Head" >
                      <b-form-radio v-model="filters.typeone" @change="changeType" name="principalpick" value="principal_me">Me</b-form-radio>
                    </b-form-group>
                  </b-col>

                   <b-col cols="12" md="3" v-if="  userData.role === 'teacher' ">
                    <b-form-group label="Select Teacher" label-for="teacherpick2">
                      <b-form-radio v-model="filters.typeone" @change="changeType" name="teacherpick2" value="teacher_me">Me</b-form-radio>
                    </b-form-group>
                  </b-col>

                  <b-col cols="12" md="3" v-else>
                    <b-form-group label="Select Teacher" label-for="teacherpick">
                      <b-form-radio v-model="filters.typeone" @change="changeType" name="teacherpick" value="teacher">Teacher</b-form-radio>
                    </b-form-group>
                  </b-col>

                  <b-col cols="12" md="3">
                    <b-form-group label="Select Head" label-for="principalpick" v-if=" userData.role === 'proprietor' ">
                      <b-form-radio v-model="filters.typeone" @change="changeType" name="principalpick" value="principal">Principal</b-form-radio>
                    </b-form-group>
                  </b-col>
          </b-row>

          <b-row>
                  <b-col cols="12" md="12" v-if=" filters.typeone === 'student' " >
                    <b-form-group label=" Select Student " >
                      <b-form-select
                        v-model="filters.typetwo_student"
                        :options="userOptions"
                        @change="changeStudent"
                      />
                    </b-form-group>
                  </b-col>
          </b-row>

          <b-row>
                  <b-col cols="12" md="12" v-if=" filters.typeone === 'teacher' " >
                    <b-form-group label=" Select A Teacher" >
                      <b-form-select
                        v-model="filters.typetwo_teacher"
                        :options="userOptions"
                        @change="changeTeacher"                       
                      />
                    </b-form-group>
                  </b-col>
          </b-row>

          <b-row>
                  <b-col cols="12" md="12" v-if=" filters.typeone === 'principal' " >
                    <b-form-group label=" Select A Principal" >
                      <b-form-select
                        v-model="filters.typetwo_principal"
                        :options="userOptions"
                        @change="changePrincipal"                       
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
                    Filter M&E Listing
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
                  <b-col cols="10" md="10"  >
                    <b-form-group label=" Select School" >
                      <b-form-select
                        v-model="filters.schoolId"
                        :options="schoolOptions"
                        @change="changeSchoolCalendar"
                      />
                    </b-form-group>
                  </b-col>
              </b-row>

              <b-row>
                
                  <span>  
                    <b-form-checkbox id="drill-down" v-model="cal_drilldown" name="checkbox-1">
                      Drill down From Schools ? 
                    </b-form-checkbox>  
                  </span>

                  <b-col cols="10" md="10"  v-if=" cal_drilldown "  >
                    <b-form-group label=" Select School Calendar" >
                      <b-form-select
                        v-model="filters.typefour"
                        :options="calendarOptions"                       
                      />
                    </b-form-group>
                  </b-col>

              </b-row>

              <b-row>
                  <span>  
                    <b-form-checkbox id="drill-down-two" v-model="week_drilldown" v-if=" cal_drilldown " name="checkbox-1">
                      Drill down From Schools & Calendars ? 
                    </b-form-checkbox>
                  </span>  
                  <b-col cols="10" md="10" v-if=" week_drilldown " >
                    <b-form-group label=" Select Week " >
                      <b-form-select
                        v-model="filters.typethree"
                        :options="weekOptions"
                      />
                    </b-form-group>
                  </b-col>
              </b-row>

              <b-row class="filter-padding" align-h="center" v-if=" cal_drilldown || week_drilldown" >
                <b-col
                  cols="12"
                  md="8"
                  class="mb-md-0 mb-2 align-center"
                >
                      <b-button variant="success" class="mr-2 col-md-12" type="submit">
                        Filter M&E Listing
                      </b-button> 

                </b-col>            
              </b-row>

              <b-row class="mt-2 py-2">
                  <b-col lg="6" sm="6">
                    <statistic-card-horizontal
                      icon="AlertOctagonIcon"
                      color="info"
                      :statistic=" teacherAttTotal === undefined ? 0 : teacherAttTotal "
                      statistic-title="Teacher Attendance (%)"
                    />
                  </b-col>

                  <b-col lg="6" sm="6">
                    <statistic-card-horizontal
                      icon="AlertOctagonIcon"
                      color="success"
                      :statistic="
                        teacherManTotal === undefined ? 0 : teacherManTotal
                      "
                      statistic-title="Attendance Management (%)"
                    />
                  </b-col>

                  <b-col lg="6" sm="6">
                    <statistic-card-horizontal
                      icon="AlertOctagonIcon"
                      color="danger"
                      :statistic=" studentAtt === undefined ? 0 : studentAtt "
                      statistic-title="Student Attendance (%)"
                    />
                  </b-col>

                  <b-col lg="6" sm="6">
                    <statistic-card-horizontal
                      icon="AlertOctagonIcon"
                      color="secondary"
                      :statistic="
                        studentExcusedAtt === undefined ? 0 : studentExcusedAtt
                      "
                      statistic-title="Student Excused Absence (%)"
                    />
                  </b-col>

                  <b-col lg="12" sm="12">
                    <statistic-card-horizontal
                      icon="AlertOctagonIcon"
                      color="warning"
                      :statistic="
                        headTotal === undefined ? 0 : headTotal
                      "
                      statistic-title="Attendance Administration (%)"
                    />
                  </b-col>
              </b-row>

            </b-card-body>
      </b-form>
        
  
      <!-- Table Container Card -->
     <b-card-code title="Filtered M&E Results" class="my-4 mx-1" v-if=" userData.role !== 'proprietor' ">

            <b-table            
              class="position-relative"
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

                <template #cell(performance)="data">
                   <b> {{ data.item.performance }} % </b>
                </template>

                <template #cell(management)="data">
                   <b> {{ data.item.management }} % </b>
                </template>

                <template #cell(d1)="data">
                   <b> {{ data.item.d1 }} % </b>
                </template>

                <template #cell(d2)="data">
                   <b> {{ data.item.d2 }} % </b>
                </template>

                <template #cell(d3)="data">
                   <b> {{ data.item.d3 }} % </b>
                </template>

                <template #cell(d4)="data">
                   <b> {{ data.item.d4 }} % </b>
                </template>

                <template #cell(d5)="data">
                   <b> {{ data.item.d5 }} % </b>
                </template>

                <template #cell(d6)="data">
                   <b> {{ data.item.d6 }} % </b>
                </template>

                <template #cell(d7)="data">
                   <b> {{ data.item.d7 }} % </b>
                </template>

                <template #cell(d8)="data">
                   <b> {{ data.item.d8 }} % </b>
                </template>

                <template #cell(d9)="data">
                   <b> {{ data.item.d9 }} % </b>
                </template>

                <template #cell(d10)="data">
                   <b> {{ data.item.d10 }} % </b>
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
  import useMne from './useMne'
  import mneStoreModule from './mneStoreModule'


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
        let userOptions = [
            { value: null, text: "Please select A User" }
        ]
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
         
        let cal_drilldown = false
        let week_drilldown = false

        return {           
           weekOptions,          
           userOptions,
           cal_drilldown,
           week_drilldown
        }
    },  

    setup() {
      const { refFormObserver, getValidationState, resetForm } = formValidation(() => {})
      const Mne_APP_STORE_MODULE_NAME = 'app-MneAttendance';
      const { baseURL } = $themeConfig.app;      

      // Register module
      if (!store.hasModule(Mne_APP_STORE_MODULE_NAME)) store.registerModule(Mne_APP_STORE_MODULE_NAME, mneStoreModule)
  
      // UnRegister on leave
      onUnmounted(() => {
        if (store.hasModule(Mne_APP_STORE_MODULE_NAME)) store.unregisterModule(Mne_APP_STORE_MODULE_NAME)
      })  
      
      const userData = ref({});   
      const teacherData = ref({}); 
      const calendarOptions = ref([ { value: null, text: "Please select A Calendar" } ]);
      const schoolOptions = ref([ { value: null, text: "All Schools" } ]);

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

      const {     
         
        isLoading,     
        
        filters,

        mnelistItems,

        dynamicFields,

        handleChange,

        teacherManTotal,

        studentAtt,

        studentExcusedAtt,

        headTotal, 

        teacherAttTotal,

        tableKey

      } = useMne();

      if( findIfPropisPresent || findIfTeacherisPresent || findIfPrinisPresent ){
          filters.value.teacherId = findIfTeacherisPresent && teacherData.value ? teacherData.value.teaId : null;
          filters.value.schoolId = (findIfPrinisPresent || findIfTeacherisPresent) && teacherData.value ? teacherData.value.school.schId : null;
          filters.value.schoolgroup = (findIfPropisPresent || findIfPrinisPresent || findIfTeacherisPresent) && teacherData.value ? teacherData.value.school.owner.id : null;
         
      } 

      (async function () {
       
      })();

     onMounted(() => {
          setTimeout( async () => {
           
            if ( findIfPropisPresent === false ){
              const resp = await store.dispatch(`${Mne_APP_STORE_MODULE_NAME}/fetchCalendars`, { id : filters.value.schoolId });
              let myval = resp.data.data;
              myval.forEach(obj => { 
                let isActive = obj.status === 1 ? "ACTIVE" : "INACTIVE";
                
                calendarOptions.value.push( { value: obj.calendarId , text: obj.session + "---" + "Term " + obj.term + "---" + isActive } )
                /* if (Number(obj.term) !== -99){
                    calendarOptions.value.push( { value: obj.CalendarId , text: obj.session + "---" + "Term " + obj.term + "---" + isActive } )
                 } */
              });
            }
            else if( findIfPropisPresent === true ){
              const resp = await store.dispatch(`${Mne_APP_STORE_MODULE_NAME}/fetchSchools`, { group : filters.value.schoolgroup });
              let myval = resp.data.data;
              myval.forEach(obj => { 
                schoolOptions.value.push( { value: obj.schId , text: obj.name } )
              });

              handleChange();
            }
          
          }, 800)       
      })
      
      return {
        
        isLoading,
        
        filters,

        mnelistItems,

        userData,

        Mne_APP_STORE_MODULE_NAME,

        baseURL,

        dynamicFields,

        handleChange,

        calendarOptions,

        schoolOptions,

        teacherManTotal,

        studentAtt,

        studentExcusedAtt,

        headTotal, 

        teacherAttTotal,

        tableKey

      }
    },

    methods: {  

        changeType(value){
            const sef = this;  
                      
            sef.userOptions = [];

            if (value === "student"){
                sef.isLoading = true;
               
                store.dispatch(`${this.Mne_APP_STORE_MODULE_NAME}/fetchStudents`, { calendar : this.filters.typefour })
                .then(response => { 
                    let myval = response.data.data;
                    myval.forEach(obj => {
                   //   console.log("Student found : " + JSON.stringify(obj) )
                      sef.userOptions.push( { value: obj.enrolId , text: obj.classstream.title + "---->" + obj.student.name } )
                    }); 
                    sef.isLoading = false;
                });
            }

            else if (value === "teacher_me"){
                this.filters.typetwo_teacher =  this.filters.teacherId;
            }

            else if (value === "principal_me"){
                this.filters.typetwo_teacher =  null;
            }
            
            else if (value === "teacher"){
                sef.isLoading = true;
                store.dispatch(`${this.Mne_APP_STORE_MODULE_NAME}/fetchTeachers`, { school : this.filters.schoolId })
                .then(response => { 
                    let myval = response.data.data;
                    myval.forEach(obj => {
                      sef.userOptions.push( { value: obj.teaId , text: obj.fname + " " + obj.lname } )
                    }); 
                    sef.isLoading = false;
                });
            } 

            else if (value === "principal"){
                sef.isLoading = true;
                store.dispatch(`${this.Mne_APP_STORE_MODULE_NAME}/fetchSchools`, { group : this.filters.schoolgroup })
                .then(response => { 
                    let myval = response.data.data;
                    myval.forEach(obj => {
                      sef.userOptions.push( { value: obj.schId , text: obj.name + "-" + obj.town } )
                    }); 
                    sef.isLoading = false;
                });
            } 
        },       

        changeStudent(value){
            this.filters.enrolId = value;
            this.filters.typetwo_teacher = null
            this.filters.typetwo_principal = null
        },

        changeTeacher(value){
            this.filters.teacherId = value;
            this.filters.typetwo_student = null
            this.filters.typetwo_principal = null
        },

        changePrincipal(value){
            const sef = this;              
            this.filters.schoolId = value;
            this.filters.typetwo_student = null
            this.filters.typetwo_teacher = null
        },

        changeSchoolCalendar(value){

            const sef = this;
            sef.isLoading = true;

            store.dispatch(`${this.Mne_APP_STORE_MODULE_NAME}/fetchCalendars`, { id : value })
            .then(response => { 
                    sef.calendarOptions = [ { value: null, text: "Select a Calendar for This School" } ]
                    let myval = response.data.data;
                    myval.forEach(obj => {
                      let isActive = obj.status === 1 ? "ACTIVE" : "INACTIVE";
                      sef.calendarOptions.push( { value: obj.calendarId , text: obj.session + "---" + "Term " + obj.term + "---" + isActive } )
                    }); 
                    sef.isLoading = false;
            });

            this.handleChange();

        },

        changeCalendar(value){
          console.log("Value is here: " + value)
        }
       
    }

  } 
  </script>

  <style lang="scss" scoped>
  .myborder{
    border: 1px darkgray dotted;
  }
  </style>