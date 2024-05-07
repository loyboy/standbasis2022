<template>
    <div>         

      <div class="row"> 
        <b-col lg="12" sm="12">

          <div class="row justify-content-center">
          <div class="col-md-12">

            <!-- Header First Column -->
            <div class="row">
              <div class="col mt-2 mb-4">
                <div class="text-left">             
                  <h2> <b> {{ userData.schName }} </b> </h2>
                  <hr/>
                </div>
              </div>
            </div>

            <!-- Header First Column -->
           <!-- <div class="row">
              <div class="col">
              <div class="text-center">             
                  <h2> School Standards Improvement System </h2>
                  <hr/>
                </div>
              </div>
            </div>-->

            <!-- Header Fourth Column -->
            <div class="row">
              <div class="col">
                <div class="text-center">
                  <hr>
                    <h2> Academic Performance </h2>                 
                  <hr>
                </div>
              </div>
            </div>

            <div class="row" style="max-height: 450px; overflow-y: scroll">
                
                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <td class="p-4 w-25">
                        <button @click="submitAcademic()" class="btn btn-primary">Submit</button>
                      </td>

                      <td class="p-4 w-25"> 
                        <b-form-group label=" Select Year" >
                          <b-form-select
                              v-model="academic._year"
                              :options="academicYear"
                              @change="checkYearAcademic"
                            />
                        </b-form-group>
                      </td>

                      <td class="p-4 w-25"> 
                        <b-form-group label=" Select Term" >
                         <b-form-select
                            v-model="academic._type"
                            :options="academicTerm"                            
                          />
                        </b-form-group>
                      </td>

                    </tr>
                  </tbody>
                </table>

                <br />
                
                <table class="table">
                  <tbody>
                    <tr>
                      <td> Enter Enrollee Count(Number of Students only that wrote exam) </td>
                      <td>
                                         
                          <b-form-input             
                            v-model="academic.enrollee_count"
                            placeholder="Enrollee Count"
                            type="number"
                            autofocus
                            autocomplete="off"/>
                                 
                      </td>
                    </tr>
                    <tr>
                      <td> Enter Enrollment Count(Volume of Students per Subjects that wrote exam) </td>
                      <td>
                         <b-form-input             
                            v-model="academic.enrollment_count"
                            placeholder="Enrollment Count(No. of Students x No. of Subjects)"
                            type="number"
                            autofocus
                            autocomplete="off"/>
                                 
                      </td>
                    </tr>
                    <tr>
                      <td> Enter Number of A1 grades </td>
                      <td>
                          <b-form-input             
                            v-model="academic.a1_grade_count"
                            placeholder="Number of A1 grades Count"
                            type="number"
                            autofocus
                            autocomplete="off"/>                               
                      </td>
                    </tr>
                    <tr>
                      <td> Enter Number of B2 grades </td>
                      <td>
                           <b-form-input             
                            v-model="academic.b2_grade_count"
                            placeholder="Number of B2 grades Count"
                            type="number"
                            autofocus
                            autocomplete="off"/>                           
                      </td>
                    </tr>
                    <tr>
                      <td> Enter Number of B3 grades </td>
                      <td>
                           <b-form-input             
                              v-model="academic.b3_grade_count"
                              placeholder="Number of B3 grades Count"
                              type="number"
                              autofocus
                              autocomplete="off"/>                          
                      </td>
                    </tr>
                    <tr>
                      <td>  Enter Number of C4 grades </td>
                      <td>
                            <b-form-input             
                              v-model="academic.c4_grade_count"
                              placeholder="Number of C4 grades Count"
                              type="number"
                              autofocus
                              autocomplete="off"/>                        
                      </td>
                    </tr>
                    <tr>
                      <td> Enter Number of C5 grades </td>
                      <td>
                           <b-form-input             
                            v-model="academic.c5_grade_count"
                            placeholder="Number of C5 grades Count"
                            type="number"
                            autofocus
                            autocomplete="off"/>                     
                      </td>
                    </tr>
                    <tr>
                      <td> Enter Number of C6 grades </td>
                      <td>
                           <b-form-input             
                              v-model="academic.c6_grade_count"
                              placeholder="Number of C6 grades Count"
                              type="number"
                              autofocus
                              autocomplete="off"/>                 
                      </td>
                    </tr>
                    <tr>
                      <td> Enter Number of D7 grades </td>
                      <td>
                           <b-form-input             
                            v-model="academic.d7_grade_count"
                            placeholder="Number of D7 grades Count"
                            type="number"
                            autofocus
                            autocomplete="off"/>            
                      </td>
                    </tr>
                    <tr>
                      <td> Enter Number of E8 grades </td>
                      <td>
                          <b-form-input             
                            v-model="academic.e8_grade_count"
                            placeholder="Number of E8 grades Count"
                            type="number"
                            autofocus
                            autocomplete="off"/>              
                      </td>
                    </tr>
                    <tr>
                      <td> Enter Number of F9 grades </td>
                      <td>
                          <b-form-input             
                            v-model="academic.f9_grade_count"
                            placeholder="Number of F9 grades Count"
                            type="number"
                            autofocus
                            autocomplete="off"/>            
                      </td>
                    </tr>
                    <tr>
                      <td> Enter Number of Absent students </td>
                      <td>
                           <b-form-input             
                            v-model="academic.absent_count"
                            placeholder="Number of Absent students Count"
                            type="number"
                            autofocus
                            autocomplete="off"/>          
                      </td>
                    </tr>
                    <tr>
                      <td> Enter Number of Students that Passed English Language </td>
                      <td>
                          <b-form-input             
                            v-model="academic.english_pass_count"
                            placeholder="Number of Students that Passed English Language Count"
                            type="number"
                            autofocus
                            autocomplete="off"/>       
                      </td>
                    </tr>
                    <tr>
                      <td> Enter Number of Students that Passed Mathematics </td>
                      <td>
                          <b-form-input             
                            v-model="academic.maths_pass_count"
                            placeholder="Number of Students that Passed Mathematics Count"
                            type="number"
                            autofocus
                            autocomplete="off"/>    
                      </td>
                    </tr>                    
                  </tbody>
                </table>

            </div>

            <!-- Header Second Column -->
            <div class="row">
              <div class="col">
                <!-- Divider with Centralized Header -->
                <div class="text-center">
                  <hr/>
                  <h2> Teacher Quality Evaluator </h2>
                  <hr/>
                </div>
              </div>
            </div>

            <div class="row" style="max-height: 450px; overflow-y: scroll">
                
                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <td class="p-4 w-25">
                        <button @click="submitTeacher()" class="btn btn-primary">Submit</button>
                      </td>
                      <td class="p-4 w-25">
                        <input type="number" class="form-control" @change="handleInputChange" placeholder="Enter number of teachers in your school">
                        <label style="font-size: 8px; font-style: italic;"> Any change here will reset your data table!</label>
                      </td>
                      <td class="p-4 w-25"> 
                         <b-form-select
                            v-model="teacherBase._year"
                            :options="teacherYear"
                            @change="checkYearTeacher"
                          />
                      </td>
                      <td class="p-4 w-25"> 
                         <b-form-select
                            v-model="teacherBase._type"
                            :options="teacherTerm"                            
                          />
                      </td>
                    </tr>
                  </tbody>
                </table>

                <br />
                <br />
                <table class="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Level</th>
                      <th>Teacher Registration Council</th>
                      <th>Academic Background</th>
                      <th>Qualification in Education</th>
                      <th>Type of Engagement</th>
                      <th>Discipline Option</th>
                      <th>Highest experience Option</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(t, index) in teacher" :key="index">
                      <td>{{ t.name }}</td>
                      <td>
                                <select
                                  v-model="t.level_option"
                                  class="form-select form-select-sm rounded bg-light"
                                >
                                  <option value="null">Select Level</option>
                                  <option value="primary">Primary</option>
                                  <option value="secondary">Secondary</option>
                                </select>
                      </td>

                      <td>
                                <select
                                  v-model="t.trcc_option"
                                  class="form-select form-select-sm rounded bg-light"
                                >
                                  <option value="null">Select Teacher Registration Council Certificate</option>
                                  <option value="0">No, He doesn't have this certificate</option>
                                  <option value="1">Yes, He has this certificate</option>
                                </select>
                      </td>

                      <td>
                               <select
                                  v-model="t.academic_option"
                                  class="form-select form-select-sm rounded bg-light"
                                >
                                  <option value="null">Select Academic Certificate</option>
                                  <option value="waec">Waec O' Level</option>
                                  <option value="ttc">TTC</option>
                                  <option value="hnd">HND</option>
                                  <option value="ond">OND</option>
                                  <option value="bsc">Bachelors</option>
                                  <option value="pgd">PGD</option>
                                  <option value="masters">Masters</option>
                                  <option value="doctorate">Doctorate</option>
                                </select>
                      </td>

                       <td>
                              <select
                                  v-model="t.qualification_in_education_option"     
                                  class="form-select form-select-sm rounded bg-light"
                                >
                                  <option value="null">Select Qualification in Education</option>
                                  <option value="edu">Education Certificate</option>
                                  <option value="nce">NCE</option>
                                  <option value="bed">B.Ed</option>
                                  <option value="pgd">P.GD</option>
                                  <option value="med">M.Ed</option>
                                  <option value="phded">PHD. Ed</option>
                                </select>
                      </td>

                      <td>
                              <select
                                  v-model="t.type_of_engagement_option"
                                  class="form-select form-select-sm rounded bg-light"
                                >
                                  <option value="null">Select type of Engagement</option>
                                  <option value="intern">Intern</option>
                                  <option value="parttime">Part Time</option>
                                  <option value="permanent">Permanent</option>
                                </select>
                      </td>

                      <td>
                                <select
                                  v-model="t.discipline_option"
                                  class="form-select form-select-sm rounded bg-light"
                                >
                                  <option value="null">Select type of Discipline</option>
                                  <option value="stem">STEM</option>
                                  <option value="arts">Arts</option>
                                  <option value="social_science">Social Science</option>
                                </select>
                      </td>   

                      <td>
                                <select
                                  v-model="t.highest_experience_option"
                                  class="form-select form-select-sm rounded bg-light"
                                >
                                  <option value="null">Select Highest Years of Experience </option>
                                  <option value="not_available">No experience</option>
                                  <option value="less">Less than Five</option>
                                  <option value="more">More than Five</option>
                                </select>
                      </td>                      
                      
                    </tr>
                  </tbody>
                </table>

            </div>

          </div>
        </div>     

        </b-col>        
      </div>

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
    BFormInput,
    BFormGroup,
    BButton,
    BSpinner,
    BTable,
    BSidebar,
    BModal,
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
    BFormCheckbox
  } from 'bootstrap-vue';
  import StatisticCardHorizontal from "@core/components/statistics-cards/StatisticCardHorizontal.vue";
  import vSelect from 'vue-select'
  import store from '@/store'
  import { ref, onUnmounted ,onMounted, watch } from '@vue/composition-api'
  import { avatarText } from '@core/utils/filter'
  import formValidation from '@core/comp-functions/forms/form-validation'
  import { $themeConfig } from "@themeConfig";
  import analyticsStoreModule from './analyticsStoreModule'
  import VueApexCharts from 'vue-apexcharts'
  import useUserList from './useUserList'

  export default {
    components: {    
      StatisticCardHorizontal,
      BCardHeader, 
      BCardBody,
      BCard,
      BCardTitle,
      BRow,
      BCol,
      BFormInput,
      BFormGroup,
      BButton,
      BSpinner,
      BTable,
      BSidebar,
      BModal,
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
      VueApexCharts,
      vSelect
    },

    data() {   
       
        const yOptions = [ { value: "null", text: "Select a Year to Review" }, { value: "2019", text: "2019" }, { value: "2020", text: "2020" } , { value: "2021", text: "2021" }, { value: "2022", text: "2022" }, { value: "2023", text: "2023" }  ];
        
        const tOptions = [ { value: "null", text: "Select a Term" }, { value: "1st_term", text: "1st Term" }, { value: "2nd_term", text: "2nd Term" } , { value: "3rd_term", text: "3rd term" } ];
        
        return {  

          academicYear:        [],
          teacherYear:         [],
          academicTerm:        [],
          teacherTerm:         [],

          academic:{
            _year:                 null,
            _type:                 null,
            enrollee_count:        null,
            enrollment_count:      null,
            a1_grade_count:        null,
            b2_grade_count:        null,
            b3_grade_count:        null,
            c4_grade_count:        null,
            c5_grade_count:        null,
            c6_grade_count:        null,
            d7_grade_count:        null,
            e8_grade_count:        null,
            f9_grade_count:        null,
            absent_count:          null,
            english_pass_count:    null,
            maths_pass_count:      null,
          },

          yOptions,
          tOptions,

          teacherBase: {
            _year:  null,
            _type:  null,
          },
          
          teacher:[],
        }
    },

    mounted(){
       
    },

    created(){
      this.academicYear = this.yOptions;
      this.teacherYear  = this.yOptions;
      this.academicTerm = this.tOptions;
      this.teacherTerm  = this.tOptions;
    },

    setup() {
      const { refFormObserver, getValidationState, resetForm } = formValidation(() => {})
      const Dashboard_APP_STORE_MODULE_NAME = 'app-dashboard';
   
      const { baseURL, homeURL } = $themeConfig.app; 
      const userData = ref({});

      // Register module
      if (!store.hasModule(Dashboard_APP_STORE_MODULE_NAME)) store.registerModule(Dashboard_APP_STORE_MODULE_NAME, analyticsStoreModule )
  
      // UnRegister on leave
      onUnmounted(() => {
        if (store.hasModule(Dashboard_APP_STORE_MODULE_NAME)) store.unregisterModule(Dashboard_APP_STORE_MODULE_NAME)
      })   
    
      const storedItems = JSON.parse(localStorage.getItem('userData'));
      if (storedItems){
        userData.value = storedItems;
      }

      const findIfDashisPresent = ( userData.value.role === "dashboarduser"  );

      const {

        fetchAcademicInput,

        fetchTeacherInput,
      
        isLoading,

        filters,

        academicInputList,

        teacherInputList

      } = useUserList();

      if( findIfDashisPresent ){
          
          filters.value.schoolId = findIfDashisPresent && userData.value ? userData.value.sch_id : null;
          
      }

      onMounted(() => {
          if ( userData.value.temp_pass === 1 ) {
              window.location.href = homeURL + "/change-password"
          }
          
          fetchAcademicInput();

          setTimeout(() => { academicInputList.value.push({ dashId: null }) }, 1200 );
      })
      
      return {

        Dashboard_APP_STORE_MODULE_NAME,

        baseURL,

        userData,

        fetchAcademicInput,

        fetchTeacherInput,
      
        isLoading,

        filters,

        academicInputList,

        teacherInputList

      }
    },

    watch: {
      /*academicInputList: {
        handler: function (val, oldVal) {
          if (val.length > 0) {
              val.forEach((word,i) => {
                  if( this.yOptions.some(el => Number(el.value) == Number(word._year) ) ){
                      this.academicYear = this.academicYear.filter(e => Number(e.value) != Number(word._year) );
                  }
                  if( this.tOptions.some(el => el.value == word._type) ){
                      this.academicTerm = this.academicTerm.filter(e => e.value != word._type);
                  }
              });
          }
          else{
            this.academicYear = this.yOptions;
            this.academicTerm = this.tOptions;
          }
        },
        deep: true
      },
      teacherInputList: {
        handler: function (val, oldVal) {
          if (val.length > 0) {
              val.forEach((word,i) => {
                  if( this.yOptions.some( el => Number(el.value) == Number(word._year) ) ){
                      this.teacherYear = this.teacherYear.filter(e => Number(e.value) != Number(word._year) );
                  }
                  if( this.tOptions.some(el => el.value == word._type) ){
                      this.teacherTerm = this.teacherTerm.filter(e => e.value != word._type);
                  }
              })
          }
          else{
            this.teacherYear = this.yOptions;
            this.teacherTerm = this.tOptions;
          }
        },
        deep: true
      },**/
      
    },

    methods: {   

        handleInputChange(event) {
            const inputValue = event.target.value;              
            let baseValues =  { 
                _year: "",
                _term: "", 
                name:  "",
                level_option:    "null",
                trcc_option:     "null",
                academic_option: "null",
                qualification_in_education_option: "null",
                type_of_engagement_option:  "null",
                discipline_option:          "null",
                highest_experience_option:  "null",
                sch_id: null
            };
            const teacherArray = [];

            for (let i = 1; i <= Number(inputValue); i++) {
              let teacher = { ...baseValues };
              teacher._year = this.teacherBase._type ? this.teacherBase._type : "";
              teacher._term = this.teacherBase._term ? this.teacherBase._term : "";
              teacher.name = `Teacher ${i}`;
              teacher.sch_id = this.filters.schoolId;
              teacherArray.push(teacher);
            }

            this.teacher = teacherArray;          
        },

        checkYearTeacher(value){
          this.$loading(true);
          const inputValue = value;
          this.teacherInputList.forEach((word,i) => {
              if( Number(word._year) == Number(inputValue) && (this.tOptions.some(el => el.value == word._type)) ){
                this.teacherTerm = this.tOptions.filter(e => e.value != word._type);
              }
              else{
                this.teacherTerm = this.tOptions;
              }
          });
          this.$loading(false);        
        },

        validateArrayOfObjects(arr) {
          for (let obj of arr) {
            for (let key in obj) {
              if ( obj[key] === "" || obj[key] === "null" || obj[key] === null ) {
                return false;
              }
            }
          }
          return true;
        },

        validateObjects(obj) {
          for (let key in obj) {
              if ( obj[key] === "" || obj[key] === "null" || obj[key] === null ) {
                return false;
              }
          }
          return true;
        },

        submitAcademic() {
          let isValid = this.validateObjects(this.academic);
          if (isValid){
              store.dispatch(`${ this.Dashboard_APP_STORE_MODULE_NAME }/updateAcademic`, { ...this.academic, sch_id: this.filters.schoolId } )
              .then(response => { 
                  //console.log("Academic updating: " + response.data.success );    
                  alert("Your teacher academic records have been inserted successfully")
                  window.location.reload();                     
              });
          }
          else{
            alert("Some values are not yet completed. Complete all the values before proceeding.")
          }
        },
 
        submitTeacher() {
          console.log(JSON.stringify(this.teacher));
          let isValid = this.validateArrayOfObjects(this.teacher);
          if (isValid){
              store.dispatch(`${ this.Dashboard_APP_STORE_MODULE_NAME }/updateTeacher`, this.teacher )
              .then(response => { 
                  alert("All your teacher's professional records have been inserted successfully")
                  window.location.reload();                         
              });
          }
          else{
            alert("Some values are not yet completed. Complete all the values before proceeding.")
          }          
        },

        checkYearAcademic(value){               
          this.$loading(true);
          const inputValue = value;
          this.academicInputList.forEach((word,i) => {
              if( Number(word._year) == Number(inputValue) && (this.tOptions.some(el => el.value == word._type)) ){
                this.academicTerm = this.tOptions.filter(e => e.value != word._type);
              }
              else{
                this.academicTerm = this.tOptions;
              }
          });
          this.$loading(false);
        },

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
  