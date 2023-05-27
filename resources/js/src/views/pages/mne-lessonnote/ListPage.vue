 <template>
    <div>

      <b-form
                class="p-2 myborder"
                @submit.prevent="handleChange()"
                @reset.prevent="resetForm"
              >
        <b-card-body>
          <!-- Fixxx the issue with Propreitor here in Calendar --> 

           <b-row v-if=" userData.role === 'proprietor' ">
                  <b-col cols="12" md="12"  >
                    <b-form-group label=" Select School in View" >
                      <b-form-select
                        v-model="filters.schoolId"
                        :options="schoolOptions"
                        @change="changeSchoolCalendar"
                      />
                    </b-form-group>
                  </b-col>
          </b-row>

          <b-row>
                  <b-col cols="12" md="12"  >
                    <b-form-group label=" Select School Calendar in View" >
                      <b-form-select
                        v-model="filters.typefour"
                        :options="calendarOptions"
                        @change="changeCalendar"
                      />
                    </b-form-group>
                  </b-col>
          </b-row>

          <b-row v-if-=" filters.typefour !== null ">
                  <b-col cols="12" md="12"  >
                    <b-form-group label=" Select Week Period " >
                      <b-form-select
                        v-model="filters.typethree"
                        :options="weekOptions"
                      />
                    </b-form-group>
                  </b-col>
          </b-row>

          <b-row v-if-=" filters.typefour !== null ">
                  <b-col cols="12" md="3">
                    <span> <b> <h3> Choose a Category: </h3> </b> </span>
                  </b-col>

                  <b-col cols="12" md="3">
                    <b-form-group label="Select Student" label-for="studentpick">
                      <b-form-radio v-model="filters.typeone" @change="changeType"  name="studentpick" value="student">Student</b-form-radio>
                    </b-form-group>
                  </b-col>

                  <b-col cols="12" md="3">
                    <b-form-group label="Select Teacher" label-for="teacherpick">
                      <b-form-radio v-model="filters.typeone" @change="changeType" name="teacherpick" value="teahcer">Teacher</b-form-radio>
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
  
      <!-- Table Container Card -->
     <b-card-code title="Filtered M&E Results" class="my-4 mx-1">

            <b-table            
              class="position-relative"
              :items="mnelistItems"
              :busy="isLoading"
              responsive
              :fields="dynamicFields"
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
            { value: null, label: "Please select A User" }
        ]
        let weekOptions = [
            { value: null, label: "Please select A Week Period" },
            { value: 1, label: "Week 1" },
            { value: 2, label: "Week 2" },
            { value: 3, label: "Week 3" },
            { value: 4, label: "Week 4" },
            { value: 5, label: "Week 5" },
            { value: 6, label: "Week 6" },
            { value: 7, label: "Week 7" },
            { value: 8, label: "Week 8" },
            { value: 9, label: "Week 9" },
            { value: 10, label: "Week 10" },
            { value: 11, label: "Week 11" },
            { value: 12, label: "Week 12" }
        ]            
        return {           
           weekOptions,          
           userOptions
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
      const calendarOptions = ref([]);

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

      } = useMne();

      if( findIfPropisPresent || findIfTeacherisPresent || findIfPrinisPresent ){
          filters.value.teacherId = findIfTeacherisPresent && teacherData.value ? teacherData.value.teaId : null;
          filters.value.schoolId = (findIfPrinisPresent || findIfTeacherisPresent) && teacherData.value ? teacherData.value.school.schId : null;
          filters.value.schoolgroup = (findIfPropisPresent || findIfPrinisPresent || findIfTeacherisPresent) && teacherData.value ? teacherData.value.school.owner.id : null;
      } 

      (async function () {
        if ( findIfPropisPresent === false ){
          const resp = await store.dispatch(`${Mne_APP_STORE_MODULE_NAME}/fetchCalendars`, { id : filters.value.schoolId });
          let myval = resp.data.data;
          myval.forEach(obj => { 
            let isActive = obj.status === 1 ? "ACTIVE" : "INACTIVE";
            calendarOptions.value.push( { value: obj.CalendarId , text: obj.session + "---" + "Term " + obj.term + "---" + isActive } )
          });
        }
      })();

      onMounted(() => {
          setTimeout(() => {
           
           //fetchOneRoundInEvaluation(evaluation);   
          
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

        calendarOptions

      }
    },

    methods: {  

        changeType(value){
            const sef = this;  
            let userid = this.userData.id;            
            sef.userOptions = [];

            if (value === "student"){
                sef.isLoading = true;
                store.dispatch(`${this.Mne_APP_STORE_MODULE_NAME}/fetchStudents`, { calendar : this.filters.typefour })
                .then(response => { 
                    let myval = response.data.data;
                    myval.forEach(obj => {
                      sef.userOptions.push( { value: obj.student.pupId , text: obj.classstream.title + "----" + obj.student.name } )
                    }); 
                    sef.isLoading = false;
                });
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
        },

        changeTeacher(value){
            this.filters.teacherId = value;
        },

        changePrincipal(value){
            const sef = this;              
            this.filters.schoolId = value;
        },

        changeSchoolCalendar(value){

            const sef = this;
            sef.isLoading = true;

            store.dispatch(`${this.Mne_APP_STORE_MODULE_NAME}/fetchCalendars`, { school : value })
            .then(response => { 
                    let myval = response.data.data;
                    myval.forEach(obj => {
                      let isActive = obj.status === 1 ? "ACTIVE" : "INACTIVE";
                      sef.calendarOptions.value.push( { value: obj.CalendarId , text: obj.session + "---" + "Term " + obj.term + "---" + isActive } )
                    }); 
                    sef.isLoading = false;
            });

        }
       
    }

  } 
  </script>

  <style lang="scss" scoped>
  .myborder{
    border: 1px darkgray dotted;
  }
  </style>