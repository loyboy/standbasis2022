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

            <!-- Header Fourth Column -->
            <div class="row">
              <div class="col">
                <!-- Divider with Centralized Header -->
                <div class="text-center">
                  <hr>
                  <h2> Academic Performance </h2>
                  <br>
                  <button @click="triggerTeacher()" class="btn btn-info">Add new Academic Analysis</button>
                  <hr>
                </div>
              </div>
            </div>
            
            <!-- Fourth Column -->
            <div class="row mb-3 ">
              
              <div class="col min-vh-50 d-flex">
                <div class="border flex-grow-1">
                 <!-- <img width="600" height="400" :src="academicItem.graph_link != '' && academicItem.graph_link != null ? academicItem.graph_link : 'https://drive.google.com/uc?export=download&id=1ffc9V6zFMm1zdPQPupubVX2UdV5tR-RQ' " alt="Academic Performance"/>-->

                </div>
              </div>

              <div class="col min-vh-50">
                <div class="row"> 
                    <div class="col-8">

                        <table style="margin-bottom: 10px;">
                            <tr>
                              <td>  
                                <b-form-group label=" Select Year" >
                                  <b-form-select
                                    v-model="filters.yearOptionAcademic"
                                    :options="yearOptions"
                                    @change="changeAcademic"
                                  />
                                </b-form-group>
                              </td>                        
                            </tr>
                        </table>

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
                                <td style="background-color: #cfd5ea; color: black;">  {{ academicItem._grade_term_one ? "Grade " +  academicItem._grade_term_one : "Not available" }}  </td>
                                <td style="background-color: #cfd5ea; color: black;">  {{ academicItem._grade_term_two ? "Grade " +  academicItem._grade_term_two : "Not available" }}  </td>
                                <td style="background-color: #cfd5ea; color: black;">  {{ academicItem._grade_term_three ? "Grade " +  academicItem._grade_term_three : "Not available" }}  </td>
                                <td style="background-color: #cfd5ea; color: black;">  {{ academicItem._grade_external ? "Grade " +  academicItem._grade_external : "Not available" }}"  </td>                           
                            </tr>
                            <tr>
                                <td style="background-color: #cfd5ea; color: black;">Transition Index</td>
                                <td style="background-color: #cfd5ea; color: black;"> {{ academicItem._transition_index_term_one }}   </td>
                                <td style="background-color: #cfd5ea; color: black;"> {{ academicItem._transition_index_term_two }}  </td>
                                <td style="background-color: #cfd5ea; color: black;"> {{ academicItem._transition_index_term_three }}  </td>
                                <td style="background-color: #cfd5ea; color: black;"> {{ academicItem._transition_index_term_external }} </td>  
                              
                            </tr>
                            <tr>
                                <td style="background-color: #cfd5ea; color: black;">Drag Index</td>
                                <td style="background-color: #cfd5ea; color: black;"> {{ academicItem._drag_index_term_one }}  </td>
                                <td style="background-color: #cfd5ea; color: black;"> {{ academicItem._drag_index_term_two }}  </td>
                                <td style="background-color: #cfd5ea; color: black;"> {{ academicItem._drag_index_term_three }}  </td>
                                <td style="background-color: #cfd5ea; color: black;"> {{ academicItem._drag_index_external }} </td>  
                              
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

            <div class="row" style="max-height: 300px; overflow-y: scroll">
                
                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <td class="p-4 w-25">
                        <button @click="submit()" class="btn btn-primary">Submit</button>
                      </td>
                      <td class="p-4 w-25">
                        <input type="text" class="form-control" @change="handleInputChange" placeholder="Enter number of teachers in your school">
                      </td>
                      <td class="p-4 w-25"> 
                         <b-form-select
                            v-model="teacherBase._year"
                            :options="yOptions"
                          />
                      </td>
                      <td class="p-4 w-25"> 
                         <b-form-select
                            v-model="teacherBase._type"
                            :options="tOptions"
                          />
                      </td>
                    </tr>
                  </tbody>
                </table>

                <br />
                <br />
                <ve-table
                    rowKeyFieldName="rowKey"
                    :fixed-header="true"
                    :columns="columns"
                    :table-data="teacher"
                    :cell-selection-option="cellSelectionOption"
                    :row-style-option="rowStyleOption"
                />
            </div>

            <!-- Second Column -->
            <div class="row mb-3 ">
              <div class="col min-vh-50 d-flex align-self-stretch">
                <div class="border flex-grow-1"> 
                   <!-- <iframe width="640" height="400" frameborder="0" scrolling="no" :src="teacherItem.graph_link"></iframe>-->
                    <img width="600" height="400" :src=" teacherItem.graph_link != '' && teacherItem.graph_link != null ? teacherItem.graph_link : 'https://drive.google.com/uc?export=download&id=1xIp5-yisO5UHu7yYKSvDUJjMQyPOMTPE' " alt="Teacher Quality Evaluator"/>
                </div>
              </div>

              <div class="col min-vh-50">
                <div class="row"> 
                    <div class="col-8">

                         <table style="margin-bottom: 10px;">
                            <tr>
                              <td>  
                                <b-form-group label=" Select Year" >
                                  <b-form-select
                                    v-model="filters.yearOptionTeacher"
                                    :options="yearOptions"
                                    @change="changeTeacher"
                                  />
                                </b-form-group>
                              </td>                        
                            </tr>
                        </table>

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

          </div>
        </div>     

        </b-col>        
      </div>

      <!-- modal Academic -->
      <b-modal
          ref="my-modal-add-academic"
          hide-footer
          :title="modalTitleAcademic"
          no-close-on-backdrop
          content-class="shadow"
        >      
          <b-form>

            <div class="row p-4">
              <div class="col-6 mt-2">
                  <b-form-group label="year" label-for="year" label-class="mb-1">
                    <b-form-select
                            v-model="academic._year"
                            :options="yOptions"
                          />
                  </b-form-group>
              </div>
              <div class="col-6 mt-2">
                  <b-form-group label="type" label-for="type" label-class="mb-1">
                     <b-form-select
                            v-model="academic._type"
                            :options="tOptions"
                          />
                  </b-form-group>
              </div>
            </div>  

            <b-form-group
              label="Enter Enrollee Count(Number of Students only that wrote exam)"
              label-for="max-input"
            >             
              <b-form-input             
                v-model="academic.enrollee_count"
                placeholder="Enrollee Count"
                type="number"
                autofocus
                autocomplete="off"/>
            </b-form-group>

            <b-form-group
              label="Enter Enrollment Count(Volume of Students per Subjects that wrote exam)"
              label-for="actual-input"
            >
            <b-form-input             
                v-model="academic.enrollment_count"
                placeholder="Enrollment Count(No. of Students x No. of Subjects)"
                type="number"
                autofocus
                autocomplete="off"/>
            </b-form-group>

            <b-form-group
              label="Enter Number of A1 grades"
              label-for="actual-input"
            >
            <b-form-input             
                v-model="academic.a1_grade_count"
                placeholder="Number of A1 grades Count"
                type="number"
                autofocus
                autocomplete="off"/>
            </b-form-group>

            <b-form-group
              label="Enter Number of B2 grades"
              label-for="actual-input"
            >
            <b-form-input             
                v-model="academic.b2_grade_count"
                placeholder="Number of B2 grades Count"
                type="number"
                autofocus
                autocomplete="off"/>
            </b-form-group>

            <b-form-group
              label="Enter Number of B3 grades"
              label-for="actual-input"
            >
            <b-form-input             
                v-model="academic.b3_grade_count"
                placeholder="Number of B3 grades Count"
                type="number"
                autofocus
                autocomplete="off"/>
            </b-form-group>

            <b-form-group
              label="Enter Number of C4 grades"
              label-for="actual-input"
            >
            <b-form-input             
                v-model="academic.c4_grade_count"
                placeholder="Number of C4 grades Count"
                type="number"
                autofocus
                autocomplete="off"/>
            </b-form-group>

            <b-form-group
              label="Enter Number of C5 grades"
              label-for="actual-input"
            >
            <b-form-input             
                v-model="academic.c5_grade_count"
                placeholder="Number of C5 grades Count"
                type="number"
                autofocus
                autocomplete="off"/>
            </b-form-group>

            <b-form-group
              label="Enter Number of C6 grades"
              label-for="actual-input"
            >
            <b-form-input             
                v-model="academic.c6_grade_count"
                placeholder="Number of C6 grades Count"
                type="number"
                autofocus
                autocomplete="off"/>
            </b-form-group>

            <b-form-group
              label="Enter Number of D7 grades"
              label-for="actual-input"
            >
            <b-form-input             
                v-model="academic.d7_grade_count"
                placeholder="Number of D7 grades Count"
                type="number"
                autofocus
                autocomplete="off"/>
            </b-form-group>

            <b-form-group
              label="Enter Number of E8 grades"
              label-for="actual-input"
            >
            <b-form-input             
                v-model="academic.e8_grade_count"
                placeholder="Number of E8 grades Count"
                type="number"
                autofocus
                autocomplete="off"/>
            </b-form-group>

            <b-form-group
              label="Enter Number of F9 grades"
              label-for="actual-input"
            >
            <b-form-input             
                v-model="academic.f9_grade_count"
                placeholder="Number of F9 grades Count"
                type="number"
                autofocus
                autocomplete="off"/>
            </b-form-group>

            <b-form-group
              label="Enter Number of Absent students"
              label-for="actual-input"
            >
            <b-form-input             
                v-model="academic.absent_count"
                placeholder="Number of Absent students Count"
                type="number"
                autofocus
                autocomplete="off"/>
            </b-form-group>

            <b-form-group
              label="Enter Number of Students that Passed English Language"
              label-for="actual-input"
            >
            <b-form-input             
                v-model="academic.english_pass_count"
                placeholder="Number of Students that Passed English Language Count"
                type="number"
                autofocus
                autocomplete="off"/>
            </b-form-group>

            <b-form-group
              label="Enter Number of Students that Passed Mathematics"
              label-for="actual-input"
            >
            <b-form-input             
                v-model="academic.maths_pass_count"
                placeholder="Number of Students that Passed Mathematics Count"
                type="number"
                autofocus
                autocomplete="off"/>
            </b-form-group>
          </b-form>

          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            class="mt-3"
            variant="outline-secondary"
            block
            @click="hideModalAcademic"
          >
            Cancel
          </b-button>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            class="mt-2"
            variant="outline-success"
            block
            @click="addAcademic"
          >
            Add Academic Details For Your School
          </b-button>

      </b-modal>

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

  // Notification
  import useUserList from './useUserList'
  import analyticsStoreModule from './analyticsStoreModule'
  import VueApexCharts from 'vue-apexcharts'
  import { lineChartOptions } from './chartOptions'

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
       
        const yOptions = [ { value: "null", label: "Select a Year to Review" }, { value: "2019", label: "2019" }, { value: "2020", label: "2020" } , { value: "2021", label: "2021" }, { value: "2022", label: "2022" }, { value: "2023", label: "2023" }  ];
        
        const tOptions = [ { value: "null", label: "Select a Term" }, { value: "1st_term", label: "1st Term" }, { value: "2nd_term", label: "2nd Term" } , { value: "3rd_term", label: "3rd term" } ];
        
        return {  
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

          modalTitleAcademic: "",

          teacherBase: {
            _year:  null,
            _type:  null,
          },
          teacher:[],

          rowStyleOption: {
            clickHighlight: false,
            hoverHighlight: false,
          },

          cellSelectionOption: {
            enable: false,
          },

          columns: [],

          submitData: []

        }
    },

    mounted(){
        this.columns = [
           {
                        field: "",
                        key: "a",
                        title: "",
                        width: 50,
                        align: "center",
                        operationColumn: true,
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            return ++rowIndex;
                        },
                    },
                    {
                        field: "name",
                        key: "name",
                        title: "Name",
                        align: "left",
                        width: "15%",
                    },
                    {
                        field: "level_option",
                        key: "level_option",
                        title: "What level are you practising in?",
                        align: "center",
                        width: "10%",
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            return (
                                <el-select
                                    size="small"
                                    value={row["level_option"]}
                                    on-input={(val) => {
                                        row["level_option"] = val;
                                        this.cellDataChange(row, column, val);
                                    }}
                                    placeholder=""
                                >
                                    <el-option label="Select Level" value="null"></el-option>
                                    <el-option label="Primary" value="primary"></el-option>
                                    <el-option label="Secondary" value="secondary"></el-option>
                                </el-select>
                            );
                        },
                    },
                    {
                        field: "trcc_option",
                        key: "trcc_option",
                        title: "Do you have the Teacher Registration Council Certificate?",
                        align: "center",
                        width: "10%",
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            return (
                                <el-select
                                    size="small"
                                    value={row["trcc_option"]}
                                    on-input={(val) => {
                                        row["trcc_option"] = val;
                                        this.cellDataChange(row, column, val);
                                    }}
                                    placeholder=""
                                >
                                    <el-option label="Select Teacher Registration Council Certificate" value="null"></el-option>
                                    <el-option label="No, He doesn't have this certificate" value="0"></el-option>
                                    <el-option label="Yes, He has this certificate" value="1"></el-option>
                                </el-select>
                            );
                        },
                    },
                    {
                        field: "academic_option",
                        key: "academic_option",
                        title: "What is your highest Academic Certificate?",
                        align: "center",
                        width: "10%",
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            return (
                                <el-select
                                    size="small"
                                    value={row["academic_option"]}
                                    on-input={(val) => {
                                        row["academic_option"] = val;
                                        this.cellDataChange(row, column, val);
                                    }}
                                    placeholder=""
                                >
                                    <el-option label="Select Academic Certificate" value="null"></el-option>
                                    <el-option label="Waec O' Level" value="waec"></el-option>
                                    <el-option label="TTC" value="ttc"></el-option>
                                    <el-option label="HND" value="hnd"></el-option>
                                    <el-option label="OND" value="ond"></el-option>
                                    <el-option label="Bachelors" value="bsc"></el-option>
                                    <el-option label="PGD" value="pgd"></el-option>
                                    <el-option label="Masters" value="masters"></el-option>
                                    <el-option label="Doctorate" value="doctorate"></el-option>
                                </el-select>
                            );
                        },
                    },
                    {
                        field: "qualification_in_education_option",
                        key: "qualification_in_education_option",
                        title: "What is your highest Qualification in Education?",
                        align: "center",
                        width: "10%",
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            return (
                                <el-select
                                    size="small"
                                    value={row["qualification_in_education_option"]}
                                    on-input={(val) => {
                                        row["qualification_in_education_option"] = val;
                                        this.cellDataChange(row, column, val);
                                    }}
                                    placeholder=""
                                >
                               
                                    <el-option label="Select Qualification in Education" value="null"></el-option>
                                    <el-option label="Education Certificate" value="edu"></el-option>
                                    <el-option label="NCE" value="nce"></el-option>
                                    <el-option label="B.Ed" value="bed"></el-option>
                                    <el-option label="P.GD" value="pgd"></el-option>
                                    <el-option label="M.Ed" value="med"></el-option>
                                    <el-option label="PHD. Ed" value="phded"></el-option>
                                </el-select>
                            );
                        },
                    },
                    {
                        field: "type_of_engagement_option",
                        key: "type_of_engagement_option",
                        title: "What type of Engagement do you have?",
                        align: "center",
                        width: "10%",
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            return (
                                <el-select
                                    size="small"
                                    value={row["type_of_engagement_option"]}
                                    on-input={(val) => {
                                        row["type_of_engagement_option"] = val;
                                        this.cellDataChange(row, column, val);
                                    }}
                                    placeholder=""
                                >      
                                    <el-option label="Select type of Engagement" value="null"></el-option>
                                    <el-option label="Intern" value="intern"></el-option>
                                    <el-option label="Part Time" value="parttime"></el-option>
                                    <el-option label="Permanent" value="permanent"></el-option>
                                </el-select>
                            );
                        },
                    },

                    {
                        field: "discipline_option",
                        key: "discipline_option",
                        title: "What discipline do you have?",
                        align: "center",
                        width: "10%",
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            return (
                                <el-select
                                    size="small"
                                    value={row["discipline_option"]}
                                    on-input={(val) => {
                                        row["discipline_option"] = val;
                                        this.cellDataChange(row, column, val);
                                    }}
                                    placeholder=""
                                >      
                                
                                    <el-option label="Select type of Discipline" value="null"></el-option>
                                    <el-option label="STEM" value="stem"></el-option>
                                    <el-option label="Arts" value="arts"></el-option>
                                    <el-option label="Social Science" value="social_science"></el-option>
                                </el-select>
                            );
                        },
                    },

                    {
                        field: "highest_experience_option",
                        key: "highest_experience_option",
                        title: "What years of experience do you have?",
                        align: "center",
                        width: "10%",
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            return (
                                <el-select
                                    size="small"
                                    value={row["highest_experience_option"]}
                                    on-input={(val) => {
                                        row["highest_experience_option"] = val;
                                        this.cellDataChange(row, column, val);
                                    }}
                                    placeholder=""
                                >      
                                    <el-option label="Select type of Discipline" value="null"></el-option>
                                    <el-option label="No experience" value="not_available"></el-option>
                                    <el-option label="Less than Five years" value="less"></el-option>
                                    <el-option label="More than Five years" value="more"></el-option>
                                </el-select>
                            );
                        },
                    },
        ]
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

      const yearOptions = ref([ { value: null, label: "Select a Year to Review" }, { value: "2019", label: "2019" }, { value: "2020", label: "2020" } , { value: "2021", label: "2021" }, { value: "2022", label: "2022" }, { value: "2023", label: "2023" }  ]);

      const findIfDashisPresent = ( userData.value.role === "dashboarduser"  );

      const {
      
        handleChange,

        fetchStandards,

        fetchTeachers,

        fetchCurriculum,

        fetchAcademic,
      
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
          if ( userData.value.temp_pass === 1 ) {
              window.location.href = homeURL + "/change-password"
          }
          else{
            handleChange()
          }          
      })
      
      return {

        Dashboard_APP_STORE_MODULE_NAME,

        baseURL,

        filters,
      
        handleChange,

        fetchStandards,

        fetchTeachers,

        fetchCurriculum,

        fetchAcademic,
      
        isLoading,

        standardItem,
        teacherItem,
        curriculumItem,
        academicItem,

        yearOptions,

        userData

      }
    },

    methods: {   
        changeAcademic(value){
            const sef = this;
            sef.isLoading = true;

            this.fetchAcademic();
        },


        changeTeacher(value){
            const sef = this;
            sef.isLoading = true;

            this.fetchTeachers();
        },

        changeStandard(value){
            const sef = this;
            sef.isLoading = true;

            this.fetchStandards();
        },

        changeCurricullum(value){
            const sef = this;
            sef.isLoading = true;

            this.fetchCurriculum();
        },

        triggerAcademic(){
            this.modalTitleAcademic = "Enter your School's academic result and view your school chart trending."
            this.showModalAcademic();
        },

        showModalAcademic() {
            this.$refs['my-modal-add-academic'].show()
        },

        hideModalAcademic() {
            this.$refs['my-modal-add-academic'].hide()
        },

        triggerTeacher(){
            this.modalTitleTeacher = "Enter your School's teacher result and view your school chart trending."
            this.showModalTeacher();
        },

        showModalTeacher() {
            this.$refs['my-modal-add-teacher'].show()
        },

        hideModalTeacher() {
            this.$refs['my-modal-add-teacher'].hide()
        },

        handleInputChange(event) {
          // Access the input value using event.target.value
          const inputValue = event.target.value;
              
            let baseValues =  {  
                name:  "",
                level_option:    null,
                trcc_option:     null,
                academic_option: null,
                qualification_in_education_option: null,
                type_of_engagement_option:  null,
                discipline_option:          null,
                highest_experience_option:  null,
                rowKey: null
            };
            const teacherArray = [];

            for (let i = 1; i <= Number(inputValue); i++) {
              const teacher = { ...baseValues };
              teacher.name = `Teacher ${i}`;
              teacher.rowKey = i - 1;
              teacherArray.push(teacher);
            }

            this.teacher = teacherArray;
          
        },

        // cell data change
        cellDataChange(row, column, cellValue) {
            const { submitData } = this;

            let currentCell = submitData.find(
                    (x) => x.rowKey === row["rowKey"] && x.field === column.field,
            );

            if (currentCell) {
                currentCell.value = cellValue;
            } else {
                let newCell = {
                  rowKey: row["rowKey"],
                  field: column.field,
                  value: cellValue,
                };
                this.submitData.push(newCell);
            }
        },

        submit() {
          alert(JSON.stringify(this.submitData));
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
  