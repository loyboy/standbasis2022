<template>
    <div>         

      <div class="row"> 
        <b-col lg="12" sm="12">

          <div class="row justify-content-center">
          <div class="col-md-12">

            <!-- Header First Column -->
            <div class="row">
              <div class="col mt-2 mb-4">
                <!-- Divider with Centralized Header -->
                <div class="text-left">             
                  <h2> <b> {{ userData.schName }} </b> </h2>
                  <hr/>
                </div>
              </div>
            </div>

            <!-- Header First Column -->
            <div class="row">
              <div class="col">
                <!-- Divider with Centralized Header -->
                <div class="text-center">             
                  <h2> School Standards Improvement System </h2>
                  <hr/>
                </div>
              </div>
            </div>

            <!-- First Column -->
            <div class="row mb-3">

              <div class="col min-vh-50 d-flex">
                <div class="border flex-grow-1 align-self-stretch"> 
                  <!-- https://onedrive.live.com/embed?resid=25784E9435CEB7C5%211809&authkey=%21AMSOQvqB2XE3hlg&em=2&wdAllowInteractivity=False&Item=Chart%201&wdInConfigurator=True&wdInConfigurator=True -->
                  <iframe width="640" height="400" frameborder="0" scrolling="no" :src="standardItem.graph_link"></iframe> 
                </div>
              </div>

              <div class="col min-vh-50">
                <div class="row"> 
                    <div class="col-8">
                        <table>
                            <tr>
                                <th>Areas</th>
                                <th>Standbasis</th>
                                <th>School</th>
                            </tr>
                            <tr>
                                <td style="background-color: #2e75b6; color: black;">Teaching Processes</td>
                                <td v-if=" standardItem._one >= standardItem._one_min "> {{ standardItem._one }} % </td>
                                <td v-else style="background-color: #e55152;" > {{ standardItem._one }} % </td>
                                <td  > {{ standardItem._one_min }} % </td>
                            </tr>
                            <tr>
                                <td style="background-color: #c55a11; color: black;">Teacher Resource</td>
                                <td v-if=" standardItem._two >= standardItem._two_min "> {{ standardItem._two }} % </td>
                                <td v-else style="background-color: #e55152;" > {{ standardItem._two }} % </td>
                                <td> {{ standardItem._two_min }} % </td>
                            </tr>
                            <tr>
                                <td style="background-color: #afabab; color: black;">Learning Environment</td>
                                <td v-if=" standardItem._three >= standardItem._three_min "> {{ standardItem._three }} % </td>
                                <td v-else style="background-color: #e55152;" > {{ standardItem._three }} % </td>
                                <td> {{ standardItem._three_min }} %  </td>
                            </tr>
                            <tr>
                                <td style="background-color: #ffc000; color: black;">Sustainability</td>
                                <td v-if=" standardItem._four >= standardItem._four_min "> {{ standardItem._four }} % </td>
                                <td v-else style="background-color: #e55152;" > {{ standardItem._four }} % </td>
                                <td> {{ standardItem._four_min }} % </td>
                            </tr>
                            <tr>
                                <td style="background-color: #00b0f0; color: black;">Student Development</td>
                                <td v-if=" standardItem._five >= standardItem._five_min "> {{ standardItem._five }} % </td>
                                <td v-else style="background-color: #e55152;" > {{ standardItem._five }} % </td>
                                <td> {{ standardItem._five_min }} % </td>
                            </tr>
                            <tr>
                                <td style="background-color: #92d050; color: black;">Academic Performance</td>
                                <td v-if=" standardItem._six >= standardItem._six_min "> {{ standardItem._six }} % </td>
                                <td v-else style="background-color: #e55152;" > {{ standardItem._six }} % </td>
                                <td> {{ standardItem._six_min }} % </td>
                            </tr>
                            <tr>
                                <td style="background-color: #1f4e79; color: black;">Safety Health Environ. Sec.</td>
                                <td v-if=" standardItem._seven >= standardItem._seven_min "> {{ standardItem._seven }} % </td>
                                <td v-else style="background-color: #e55152;" > {{ standardItem._seven }} % </td>
                                <td> {{ standardItem._seven_min }} % </td>
                            </tr>
                        </table>
                    </div>

                    <div class="col-4 h-100">                    
                        <div class="rounded p-2 text-left" style="background-color: #002060; color: #fff;">
                          <p class="text-left" style="font-size: 11px;">
                            <ul style=" list-style-type: square; "> 
                                <li> School Evaluation  </li>
                                <li> School Rating  </li>
                                <li> School Grading  </li>
                                <li> Budget Planning  </li>
                                <li> Impact Evaluation  </li>
                                <li> Marketing Pitch  </li>
                            </ul>
                          </p>
                        </div>
                    </div>

                </div>
              </div>
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
            <!-- Second Column -->
            <div class="row mb-3 ">

              <div class="col min-vh-50 d-flex align-self-stretch">
                <div class="border flex-grow-1"> 
                    <iframe width="640" height="400" frameborder="0" scrolling="no" :src="teacherItem.graph_link"></iframe>
                </div>
              </div>

              <div class="col min-vh-50">
                <div class="row"> 
                    <div class="col-8">
                        <table>
                            <tr>
                                <th colspan="2" >Areas</th>                            
                                <th>Quality</th>
                            </tr>
                            <tr>
                                <td colspan="2" style="background-color: #2e75b6; color: black;">Teacher Quality Asset General (TQ GEN)</td>
                                
                                <td> {{ teacherItem._one }} % </td>
                            </tr>
                            <tr>
                                <td colspan="2" style="background-color: #c55a11; color: black;">Teacher Quality Asset Premium (TQ GEN P)</td>
                                
                                <td> {{ teacherItem._two }} % </td>
                            </tr>
                            <tr>
                                <td colspan="2" style="background-color: #afabab; color: black;">Teacher Quality Asset Science / General (TQ SC GEN)</td>
                                
                                <td> {{ teacherItem._three }} % </td>
                            </tr>
                            <tr>
                                <td colspan="2" style="background-color: #ffc000; color: black;">Teacher Quality Asset Science / Premium (TQ SC P)</td>
                                
                                <td> {{ teacherItem._four }} % </td>
                            </tr>
                            <tr>
                                <td colspan="2" style="background-color: #00b0f0; color: black;">Arts and Social Science / General (TQ A&O GEN)</td>
                                
                                <td> {{ teacherItem._five }} % </td>
                            </tr>
                            <tr>
                                <td colspan="2" style="background-color: #92d050; color: black;">Arts and Social Science / Premium (TQ A&O P)</td>
                                
                                <td> {{ teacherItem._six }} % </td>
                            </tr>
                          
                        </table>
                    </div>

                    <div class="col-4 h-100">                    
                        <div class="rounded p-2 text-left" style="background-color: #002060; color: #fff;">
                          <p class="text-left" style="line-height: 16px; font-size: 11px;">
                                                Is my teacher asset quality up to standard? <br/>  <br/>
                                                  What is my premium performance? <br/>  <br/>
                                                  In which direction are they changing? <br/>  <br/>
                                                  Is the change planned?
                          </p>
                        </div>
                    </div>

                </div>
              </div>

            </div>

            <!-- Header Third Column -->
            <div class="row">
              <div class="col">
                <!-- Divider with Centralized Header -->
                <div class="text-center">
                  <hr>
                  <h2> Curriculum Teaching Processes Management </h2>
                  <hr>
                </div>
              </div>
            </div>
            <!-- Third Column -->
            <div class="row mb-3 ">
              <div class="col min-vh-50 d-flex">
                <div class="border flex-grow-1"> 
                    <iframe width="640" height="400" frameborder="0" scrolling="no" :src="curriculumItem.graph_link"> </iframe>
                </div>
              </div>

              <div class="col min-vh-50">
                <div class="row"> 
                    <div class="col-8">
                        <table>
                            <tr>
                                <th colspan="3">Live Teaching Processes Management Indicators</th>
                                
                            </tr>
                            <tr>
                                <td colspan="2" style="background-color: #cfd5ea; color: black;">Teaching Processes Compliance</td>
                                <td style="background-color: #e9ebf5; color: black;"> {{ curriculumItem._one }} % </td>
                              
                            </tr>
                            <tr>
                                <td colspan="2" style="background-color: #cfd5ea; color: black;">Teaching Processes Administration</td>
                                <td style="background-color: #e9ebf5; color: black;"> {{ curriculumItem._two }} %  </td>
                              
                            </tr>
                            <tr>
                                <td colspan="2" style="background-color: #cfd5ea; color: black;">Asssessment Performance</td>
                                <td style="background-color: #e9ebf5; color: black;"> {{ curriculumItem._three }} %  </td>
                              
                            </tr>
                            <tr>
                                <td colspan="2" style="background-color: #cfd5ea; color: black;">Student Socio-Motor Indicators</td>
                                <td style="background-color: #e9ebf5; color: black;"> {{ curriculumItem._four }} %  </td>
                              
                            </tr>
                            <tr>
                                <td colspan="2" style="background-color: #cfd5ea; color: black;">Quality assurance interventions</td>
                                <td style="background-color: #e9ebf5; color: black;"> {{ curriculumItem._five }} %  </td>
                              
                            </tr>
                            <tr>
                                <td colspan="2" style="background-color: #cfd5ea; color: black;">Teaching resources capacity utilization</td>
                                <td style="background-color: #e9ebf5; color: black;"> {{ curriculumItem._six }} %  </td>
                              
                            </tr>
                          
                        </table>
                    </div>

                    <div class="col-4 h-100">                    
                        <div class="rounded p-2 text-left" style="background-color: #002060; color: #fff;">
                          <p class="text-left" style="line-height: 20px; font-size: 11px;">
                                              Curriculum teaching is the core business of schools.
                                              Standards-based-operation, real-time monitoring, near real-time quality assurance administration are key. <br/>
                                              Acquire quantitative insights and dashboard management
                          </p>
                        </div>
                    </div>

                </div>
              </div>

            </div>

            <!-- Header Fourth Column -->
            <div class="row">
              <div class="col">
                <!-- Divider with Centralized Header -->
                <div class="text-center">
                  <hr>
                  <h2> Academic Performance </h2>
                  <hr>
                </div>
              </div>
            </div>
            
            <!-- Fourth Column -->
            <div class="row mb-3 ">
              
              <div class="col min-vh-50 d-flex">
                <div class="border flex-grow-1">
                  <!-- <iframe width="620" height="400" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSRK6k8lAzX4wKmc_ZnfTb-Y3BJU9d3cMS7OSTm43QDa0vNF1gAIqrD7ssqKOJKyu0xnxCLW-IgDsPJ/pubchart?oid=542621565&amp;format=interactive"></iframe>-->
                    <iframe width="640" height="400" frameborder="0" scrolling="no" :src="academicItem.graph_link"> </iframe>
                </div>
              </div>

              <div class="col min-vh-50">
                <div class="row"> 
                    <div class="col-8">
                        <table>
                            <tr>
                                <th> &nbsp;&nbsp;&nbsp;&nbsp;</th>
                                <th>Term 1</th>
                                <th>Term 2</th>
                                <th>Term 3</th>
                                <th>WAEC</th>                            
                            </tr>
                            <tr>
                                <td style="background-color: #cfd5ea; color: black;">School</td>
                                <td style="background-color: #cfd5ea; color: black;"> Grade "{{ academicItem._grade_term_one }}"  </td>
                                <td style="background-color: #cfd5ea; color: black;"> Grade "{{ academicItem._grade_term_two }}"  </td>
                                <td style="background-color: #cfd5ea; color: black;"> Grade "{{ academicItem._grade_term_three }}"  </td>
                                <td style="background-color: #cfd5ea; color: black;"> Grade "{{ academicItem._grade_external }}"  </td>                           
                            </tr>
                            <tr>
                                <td style="background-color: #cfd5ea; color: black;">Transition Index</td>
                                <td style="background-color: #cfd5ea; color: black;"> {{ academicItem._transitionIndex_term_one }}   </td>
                                <td style="background-color: #cfd5ea; color: black;"> {{ academicItem._transitionIndex_term_two }}  </td>
                                <td style="background-color: #cfd5ea; color: black;"> {{ academicItem._transitionIndex_term_three }}  </td>
                                <td style="background-color: #cfd5ea; color: black;"> {{ academicItem._transitionIndex_term_external }} </td>  
                              
                            </tr>
                            <tr>
                                <td style="background-color: #cfd5ea; color: black;">Drag Index</td>
                                <td style="background-color: #cfd5ea; color: black;"> {{ academicItem._dragIndex_term_one }}  </td>
                                <td style="background-color: #cfd5ea; color: black;"> {{ academicItem._dragIndex_term_two }}  </td>
                                <td style="background-color: #cfd5ea; color: black;"> {{ academicItem._dragIndex_term_three }}  </td>
                                <td style="background-color: #cfd5ea; color: black;"> {{ academicItem._dragIndex_external }} </td>  
                              
                            </tr>
                          
                        </table>
                    </div>

                    <div class="col-4 h-100">                    
                        <div class="rounded p-2 text-left" style="background-color: #002060; color: #fff;">
                          <p class="text-left" style="line-height: 18px; font-size: 11px;">
                                          <ul>
                                              <li> Track your school’s academic performance every term and session. </li>
                                              <li> Track the gap between internal and external examination performance yearly. </li>
                                              <li> Flaunt your improved or sustained academic grade to parents. </li>
                                              <li>  Watch for Hints of decline or ominous gap between internal and external performance. </li>
                                          </ul>
                          </p>
                        </div>
                    </div>

                </div>
              </div>

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
  import router from '@/router'
  import axios from "axios";
  import store from '@/store'
  import { ref, onUnmounted ,onMounted, watch } from '@vue/composition-api'
  import { avatarText } from '@core/utils/filter'
  import formValidation from '@core/comp-functions/forms/form-validation'
  import { $themeConfig } from "@themeConfig";

  // Notification
  import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
  import jwtHeader from "@core/services/jwt-header";
  import useUserList from './useUserList'
  import analyticsStoreModule from './analyticsStoreModule'


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
      vSelect
    },

    data() {

        return {  
        
        }
    },

    setup() {
      const { refFormObserver, getValidationState, resetForm } = formValidation(() => {})
      const Dashboard_APP_STORE_MODULE_NAME = 'app-dashboard';
   
      const { baseURL } = $themeConfig.app; 
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
      
        handleChange,
      
        isLoading,

        filters,

        standardItem,
        teacherItem,
        curriculumItem,
        academicItem

      } = useUserList();

      if( findIfDashisPresent ){
          
          filters.value.schoolId = findIfDashisPresent && userData.value ? userData.value.sch_id : null;
          
      }

      onMounted(() => {
          handleChange()
      })
      
      return {

        Dashboard_APP_STORE_MODULE_NAME,

        baseURL,

        filters,
      
        handleChange,
      
        isLoading,

        standardItem,
        teacherItem,
        curriculumItem,
        academicItem,

        userData

      }
    },

    methods: {   

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
  /* CSS to style the table */
  table {
    width: 100%;
    border-collapse: separate;
    
    border-spacing: 5px; /* Adjust this for spacing */
    border: 1px solid white; /* White border */
  }

  th, td {
    padding: 10px;
    text-align: center;
  }                

  th {
    background-color: #002060; /* Blue background for the first column header */
    color: white; /* White text color */
  }

  td:nth-child(2), td:nth-child(3) {
    background-color: #a6e6a2; /* Light green background for the second and third columns */
    color: black; /* Black text color */
  }
  </style>
  