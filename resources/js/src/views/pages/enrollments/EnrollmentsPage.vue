<template>

    <div>  
        <div class="row">

          <b-sidebar
            id="add-new-user-sidebar"
            :visible="isEnollmentAdditionSidebarActive"
            bg-variant="white"
            sidebar-class="sidebar-lg"
            shadow
            backdrop
            no-header
            right
            no-close-on-backdrop
          >
            <template >
              <!-- Header -->
              <div
                class="
                  d-flex 
                  justify-content-between
                  align-items-center
                  content-sidebar-header
                  px-2
                  py-1
                "
              >
                <h5 class="mb-0"> Enroll new student(s)</h5>

                <feather-icon
                  class="ml-1 cursor-pointer"
                  icon="XIcon"
                  size="16"
                  @click="isEnollmentAdditionSidebarActive = false"
                />
              </div>

              <b-col lg="12" class="m-3">
                  <b-card-code title="Student Data">
                      <b-card-text class="mb-2 bolden">
                          Upload your School's Student Data in the format we had instructed you to arrange it in.
                      </b-card-text>

                      <div>
                          <!-- Styled -->
                          <b-form-file v-model="fileT" placeholder="Choose a file or drop it here..."
                              drop-placeholder="Drop file here..." @change="handleOnChange" />

                          <b-card-text class="my-1 bolden">
                              Selected file: <strong>{{ fileT ? fileT.name : '' }}</strong>
                          </b-card-text>

                      </div>
                  </b-card-code>
              </b-col>


              <b-col lg="12" class="mt-3">
                <b-card-code title="Uploaded Student Data Display" no-body class="d-flex flex-column h-100">
                      
                      <!-- sort and filter-->
                      <b-card-body>
                          <div class="d-flex justify-content-between  flex-wrap">

                              <!-- sorting  -->
                              <b-form-group label="Sort" label-size="sm" label-align-sm="left" label-cols-sm="2"
                                  label-for="sortBySelect" class="mr-1 mb-md-0 bolden">
                                  <b-input-group size="sm">
                                      <b-form-select id="sortBySelect" v-model="sortByT" :options="sortOptionsT">
                                          <template #first>
                                              <option value="">
                                                  none
                                              </option>
                                          </template>
                                      </b-form-select>
                                      <b-form-select v-model="sortDescT" size="sm" :disabled="!sortByT">
                                          <option :value="false">
                                              Asc
                                          </option>
                                          <option :value="true">
                                              Desc
                                          </option>
                                      </b-form-select>
                                  </b-input-group>
                              </b-form-group>

                              <!-- filter -->
                              <b-form-group label="Filter" label-cols-sm="2" label-align-sm="left" label-size="sm"
                                  label-for="filterInput" class="mb-0">
                                  <b-input-group size="sm">
                                      <b-form-input id="filterInput" v-model="filterT" type="search"
                                          placeholder="Type to Search" />
                                      <b-input-group-append>
                                          <b-button :disabled="!filterT" @click="filter = ''">
                                              Clear
                                          </b-button>
                                      </b-input-group-append>
                                  </b-input-group>
                              </b-form-group>
                          </div>
                      </b-card-body>

                      <b-table striped hover responsive class="position-relative" :per-page="perPageT"
                          :current-page="currentPageT" :items="itemsT" :fields="fieldsT" :sort-by.sync="sortByT"
                          :sort-desc.sync="sortDescT" :sort-direction="sortDirectionT" :filter="filterT"
                          :filter-included-fields="filterOnT" @filtered="onFilteredT">
                      
                      </b-table>

                      <!--- Pagination -->
                      <b-card-body class="d-flex justify-content-between flex-wrap pt-0">

                          <!-- page length -->
                          <b-form-group label="Per Page" label-cols="6" label-align="left" label-size="sm"
                              label-for="sortBySelect" class="text-nowrap mb-md-0 mr-1">
                              <b-form-select id="perPageSelect" v-model="perPageT" size="sm" inline :options="pageOptionsT" />
                          </b-form-group>

                          <!-- pagination -->
                          <div>
                              <b-pagination v-model="currentPageT" :total-rows="totalRowsT" :per-page="perPageT" first-number
                                  last-number prev-class="prev-item" next-class="next-item" class="mb-0">
                                  <template #prev-text>
                                      <feather-icon icon="ChevronLeftIcon" size="18" />
                                  </template>
                                  <template #next-text>
                                      <feather-icon icon="ChevronRightIcon" size="18" />
                                  </template>
                              </b-pagination>
                          </div>
                      </b-card-body> 

                       <!-- Form Actions -->
                      <div class="d-flex mt-2">
                        <b-button
                          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                          variant="primary"
                          class="mr-2"
                          @click="finish"
                        >
                          Upload students
                        </b-button>
                        <b-button
                          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                          type="button"
                          variant="outline-secondary"
                          @click="isEnollmentAdditionSidebarActive = false"
                        >
                          Cancel
                        </b-button>
                      </div>  

                </b-card-code>
              </b-col>

            </template>
          </b-sidebar>

          <b-col lg="4" sm="6">
            <statistic-card-horizontal
              icon="UsersIcon"
              color="primary"
              :statistic=" totalEnrollments === undefined ? 0 : totalEnrollments "
              statistic-title="Total"
            />
          </b-col>

          <b-col lg="4" sm="6" v-if=" ( teacherData.school && (teacherData.school.type_of === 'both' || teacherData.school.type_of === 'primary')) || 
                                      ( userData.role === 'supervisor' && String(userData.code).split('-').length === 1 ) ||
                                      ( userData.role === 'supervisor' && String(userData.code).split('-').length > 1 && ( String(String(userData.code).split('-')[1]).toLowerCase() === 'subeb' || String(String(userData.code).split('-')[1]).toLowerCase() === 'fctubeb' || String(String(userData.code).split('-')[1]).toLowerCase() === 'subeb+semb' ) )
          ">
            <statistic-card-horizontal
              icon="UserCheckIcon"
              color="danger"
              :statistic="
                totalPrimaryEnrollmentsMale === undefined ? 0 :totalPrimaryEnrollmentsMale
              "
              statistic-title="Primary(F)"
            />
          </b-col>

          <b-col lg="4" sm="6" v-if=" (teacherData.school !== undefined && (teacherData.school.type_of === 'both' || teacherData.school.type_of === 'primary')) ||
                                      ( userData.role === 'supervisor' && String(userData.code).split('-').length === 1 ) || 
                                      ( userData.role === 'supervisor' && String(userData.code).split('-').length > 1 && ( String(String(userData.code).split('-')[1]).toLowerCase() === 'subeb' || String(String(userData.code).split('-')[1]).toLowerCase() === 'fctubeb' || String(String(userData.code).split('-')[1]).toLowerCase() === 'subeb+semb' ) )
          ">
            <statistic-card-horizontal
              icon="UserCheckIcon"
              color="success"
              :statistic="
                totalPrimaryEnrollmentsFemale === undefined ? 0 : totalPrimaryEnrollmentsFemale
              "
              statistic-title="Primary(M)"
            />
          </b-col>

          <b-col lg="3" sm="6" v-if=" ( teacherData.school !== undefined && (teacherData.school.type_of === 'both' || teacherData.school.type_of === 'secondary')) ||
                                      ( userData.role === 'supervisor' && String(userData.code).split('-').length === 1 ) ||
                                      ( userData.role === 'supervisor' && String(userData.code).split('-').length > 1 && ( String(String(userData.code).split('-')[1]).toLowerCase() === 'subeb' || String(String(userData.code).split('-')[1]).toLowerCase() === 'fctubeb' || String(String(userData.code).split('-')[1]).toLowerCase() === 'subeb+semb' ) )
          ">
            <statistic-card-horizontal
              icon="UserCheckIcon"
              color="danger"
              :statistic="
                totalSecEnrollmentsJuniorFemale === undefined ? 0 :totalSecEnrollmentsJuniorFemale
              "
              statistic-title="JSS(F)"
            />
          </b-col>

          <b-col lg="3" sm="6" v-if="( teacherData.school !== undefined && (teacherData.school.type_of === 'both' || teacherData.school.type_of === 'secondary')) || 
                                     ( userData.role === 'supervisor' && String(userData.code).split('-').length === 1 ) ||
                                     ( userData.role === 'supervisor' && String(userData.code).split('-').length > 1 && ( String(String(userData.code).split('-')[1]).toLowerCase() === 'subeb' || String(String(userData.code).split('-')[1]).toLowerCase() === 'fctubeb' || String(String(userData.code).split('-')[1]).toLowerCase() === 'subeb+semb' ) )
          ">
            <statistic-card-horizontal
              icon="UserCheckIcon"
              color="success"
              :statistic="
                totalSecEnrollmentsJuniorMale === undefined ? 0 : totalSecEnrollmentsJuniorMale
              "
              statistic-title="JSS(M)"
            />
          </b-col>

            <b-col lg="3" sm="6" v-if=" ( teacherData.school !== undefined && (teacherData.school.type_of === 'both' || teacherData.school.type_of === 'secondary')) ||
                                        ( userData.role === 'supervisor' && String(userData.code).split('-').length === 1 ) ||
                                        ( userData.role === 'supervisor' && String(userData.code).split('-').length > 1 && ( String(String(userData.code).split('-')[1]).toLowerCase() === 'semb' || String(String(userData.code).split('-')[1]).toLowerCase() === 'fctseb' || String(String(userData.code).split('-')[1]).toLowerCase() === 'subeb+semb' ) )
            ">
            <statistic-card-horizontal
              icon="UserCheckIcon"
              color="danger"
              :statistic="
                totalSecEnrollmentsSeniorFemale === undefined ? 0 :totalSecEnrollmentsSeniorFemale
              "
              statistic-title="SSS(F)"
            />
          </b-col>

          <b-col lg="3" sm="6" v-if=" ( teacherData.school !== undefined && (teacherData.school.type_of === 'both' || teacherData.school.type_of === 'secondary')) ||
                                      ( userData.role === 'supervisor' && String(userData.code).split('-').length === 1 ) ||
                                      ( userData.role === 'supervisor' && String(userData.code).split('-').length > 1 && ( String(String(userData.code).split('-')[1]).toLowerCase() === 'semb' || String(String(userData.code).split('-')[1]).toLowerCase() === 'fctseb' || String(String(userData.code).split('-')[1]).toLowerCase() === 'subeb+semb' ) )
          ">
            <statistic-card-horizontal
              icon="UserCheckIcon"
              color="success"
              :statistic="
                totalSecEnrollmentsSeniorMale === undefined ? 0 : totalSecEnrollmentsSeniorMale
              "
              statistic-title="SSS(M)"
            />
          </b-col>

          <b-col lg="3" sm="6" v-if=" ( teacherData.school && (teacherData.school.type_of === 'both' || teacherData.school.type_of === 'secondary')) ||
                                      ( userData.role === 'supervisor' && String(userData.code).split('-').length === 1 ) ||
                                      ( userData.role === 'supervisor' && String(userData.code).split('-').length > 1 && ( String(String(userData.code).split('-')[1]).toLowerCase() === 'semb' || String(String(userData.code).split('-')[1]).toLowerCase() === 'fctseb' || String(String(userData.code).split('-')[1]).toLowerCase() === 'subeb+semb'  ) )
          ">
            <statistic-card-horizontal              
              icon="UserCheckIcon"
              color="danger"
              :statistic="
                totalSecondaryUndeployed === undefined ? 0 : totalSecondaryUndeployed
              "
              statistic-title="UnDeployed Secondary"
            />
          </b-col>

          <b-col lg="3" sm="6" v-if="( teacherData.school &&  (teacherData.school.type_of === 'both' || teacherData.school.type_of === 'primary')) ||
                                     ( userData.role === 'supervisor' && String(userData.code).split('-').length === 1 ) ||
                                     ( userData.role === 'supervisor' && String(userData.code).split('-').length > 1 && ( String(String(userData.code).split('-')[1]).toLowerCase() === 'subeb' || String(String(userData.code).split('-')[1]).toLowerCase() === 'fctubeb' || String(String(userData.code).split('-')[1]).toLowerCase() === 'subeb+semb'  ))
          ">
            <statistic-card-horizontal               
              icon="UserCheckIcon"
              color="success"
              :statistic="
                totalPrimaryUndeployed === undefined ? 0 : totalPrimaryUndeployed
              "
              statistic-title="UnDeployed Primary"
            />
          </b-col>

        </div>
  
        <!-- Table Container Card -->
        <b-card
          no-body
          class="mb-0"
        >
    
          <div class="m-2">
    
            <!-- Table Top -->
            <b-row>
    
              <!-- Per Page -->
              <b-col
                cols="12"
                md="6"
                class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
              >
                <label>Show</label>
                <v-select
                  v-model="perPage"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  :options="perPageOptions"
                  :clearable="false"
                  class="per-page-selector d-inline-block mx-50"
                />
                <label>entries</label>
              </b-col>
    
              <!-- Search -->
              <b-col
                cols="12"
                md="6"
              >
                <div class="d-flex align-items-center justify-content-end">
                  <b-form-input
                    v-model="searchQuery"
                    class="d-inline-block mr-1"
                    placeholder="Search..."
                  />

                  <!--<b-button
                    variant="primary"
                    @click="isAddNewUserSidebarActive = true"
                  >
                    <span class="text-nowrap">Add User</span>
                  </b-button>-->

                  <b-button
                    variant="success"
                    @click="isEnollmentAdditionSidebarActive = true"
                  >
                    <span class="text-nowrap">Upload New students</span>
                  </b-button>             

                </div>
              </b-col>
            </b-row>
    
          </div>
    
          <b-table
            ref="refEnrollmentListTable"
            class="position-relative"
            :items="fetchEnrollments"
            responsive
            :fields="tableColumns"
            primary-key="id"
            :sort-by.sync="sortBy"
            show-empty
            empty-text="No matching records found"
            :sort-desc.sync="isSortDirDesc"
          >
    
            <!-- Column: User -->
          <!-- <template #cell(user)="data">
              <b-media vertical-align="center">
                <template #aside>
                  <b-avatar
                    size="32"
                    :src="data.item.avatar"
                    :text="avatarText(data.item.fullName)"
                    :variant="`light-${resolveUserRoleVariant(data.item.role)}`"
                    :to="{ name: 'apps-users-view', params: { id: data.item.id } }"
                  />
                </template>
                <b-link
                  :to="{ name: 'apps-users-view', params: { id: data.item.id } }"
                  class="font-weight-bold d-block text-nowrap"
                >
                  {{ data.item.fullName }}
                </b-link>
                <small class="text-muted">@{{ data.item.username }}</small>
              </b-media>
            </template>-->
    
            <!-- Column: Role -->
          <!-- <template #cell(role)="data">
              <div class="text-nowrap">
                <feather-icon
                  :icon="resolveUserRoleIcon(data.item.role)"
                  size="18"
                  class="mr-50"
                  :class="`text-${resolveUserRoleVariant(data.item.role)}`"
                />
                <span class="align-text-top text-capitalize">{{ data.item.role }}</span>
              </div>
            </template>-->
    
              <!-- Column: term -->
              <template #cell(calendar.term)="data">
              <b-badge
                pill
                :variant="`light-${resolveUserStatusVariant(data.item.calendar.term)}`"
                class="text-capitalize"
              >
                {{ data.item.calendar.term === 1 ? "1st Term" : data.item.calendar.term === 2 ? "2nd Term" : data.item.calendar.term === 3 ? "3rd Term" : "Nil"  }}
              </b-badge>
            </template>

             <!-- Column: Status -->
            <template #cell(student.status)="data">
              <b-badge
                pill
                :variant="`light-${resolveUserStatusVariant(data.item.student.status)}`"
                class="text-capitalize"
              >
                {{ data.item.status === 1 ? "Active" : data.item.status === 0 ? "Inactive" : data.item.status === -99 ? "Rolled Over" : "Deleted"  }}
              </b-badge>
            </template>
    
            <!-- Column: Actions -->
            <template #cell(actions)="data">
              <b-dropdown
                variant="link"
                no-caret
                :right="$store.state.appConfig.isRTL"
              >
    
                <template #button-content>
                  <feather-icon
                    icon="MoreVerticalIcon"
                    size="16"
                    class="align-middle text-body"
                  />
                </template>
                <b-dropdown-item :to="{ name: 'enrollments-home-view', params: { id: data.item.enrolId } }">
                  <feather-icon icon="FileTextIcon" />
                  <span class="align-middle ml-50">View Details</span>
                </b-dropdown-item>
    
                <b-dropdown-item v-if=" userData.role === 'principal' " :to="{ name: 'enrollments-home-edit', params: { id: data.item.enrolId } }">
                  <feather-icon icon="EditIcon" />
                  <span class="align-middle ml-50">Edit Enrollment </span>
                </b-dropdown-item>
                
                <b-dropdown-item :to="{ name: 'schools-home-view', params: { id: data.item.student.school.schId } }">
                  <feather-icon icon="Maximize2Icon" />
                  <span class="align-middle ml-50">View School</span>
                </b-dropdown-item>  

              </b-dropdown>
            </template>
    
          </b-table>

          <div class="mx-2 mb-2">
            <b-row>
    
              <b-col
                cols="12"
                sm="6"
                class="d-flex align-items-center justify-content-center justify-content-sm-start"
              >
                <span class="text-muted">Showing {{ dataMeta.from }} to {{ dataMeta.to }} of {{ dataMeta.of }} entries</span>
              </b-col>
              <!-- Pagination -->
              <b-col
                cols="12"
                sm="6"
                class="d-flex align-items-center justify-content-center justify-content-sm-end"
              >
    
                <b-pagination
                  v-model="currentPage"
                  :total-rows="totalEnrollments"
                  :per-page="perPage"
                  first-number
                  last-number
                  class="mb-0 mt-1 mt-sm-0"
                  prev-class="prev-item"
                  next-class="next-item"
                  @change="handlePageChange"
                >
                  <template #prev-text>
                    <feather-icon
                      icon="ChevronLeftIcon"
                      size="18"
                    />
                  </template>
                  <template #next-text>
                    <feather-icon
                      icon="ChevronRightIcon"
                      size="18"
                    />
                  </template>
                </b-pagination>
    
              </b-col>
    
            </b-row>
          </div>
        </b-card>

    </div>
  </template>
  
  <script>
  import {
    BCard,
    BRow,
    BCol,
    BFormInput,
    BFormFile,
    BButton,
    BTable,
    BSidebar,
    BForm,
    BMedia,
    BAvatar,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,
  } from 'bootstrap-vue';
  import StatisticCardHorizontal from "@core/components/statistics-cards/StatisticCardHorizontal.vue";
  import vSelect from 'vue-select'
  import { $themeConfig } from "@themeConfig";
  import router from '@/router'
  import store from '@/store'
  import { ref, onUnmounted } from '@vue/composition-api'
  import { avatarText } from '@core/utils/filter'
  import formValidation from '@core/comp-functions/forms/form-validation'

  import useEnrollmentList from './useEnrollmentList'
  import enrollmentStoreModule from './enrollmentStoreModule'

  
  export default {
    components: {
    
      StatisticCardHorizontal,
      BCard,
      BRow,
      BCol,
      BFormInput,
      BFormFile,
      BButton,
      BTable,
      BSidebar,
      BForm,
      BMedia,
      BAvatar,
      BLink,
      BBadge,
      BDropdown,
      BDropdownItem,
      BPagination,
  
      vSelect,
    },

    computed: {
      sortOptionsT() {
        // Create an options list from our fields
        return this.fieldsT
          .filter(f => f.sortable)
          .map(f => ({ text: f.label, value: f.key }))
      },
    },

    methods:{
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRowsT = filteredItems.length
        this.currentPageT = 1
      },
      arraysEqual(a,b) { 
          return Array.isArray(a) &&
          Array.isArray(b) &&
          a.length === b.length &&
          a.every((val, index) => val === b[index]);
      },
      loadData(file) {
        this.itemsT = [];
        let reader = new FileReader();
         reader.readAsText(file);
         reader.onload = (evt) => {
           
            let csvHeaders = [ 'Student Name', 'Student Class','Class Arm', 'Gender of Student', 'Registration Number' ];
            var content = evt.target.result;
            //split csv file using "\n" for new line ( each row)
            let lines = content.split("\r");
            let firstRow = lines[0].split(",");
            
            //loop all rows except the firt row
            if ( this.arraysEqual( csvHeaders.sort() , firstRow.sort() ) === false ) {
                alert("Please make sure the Column names are exactly as the Template for Teacher we gave is.")
                return false;
            }

            delete lines[0];

            this.itemsT = lines.map((line,index) => {
                    var rowContent = line.split(","); 
                    let innerContent = {};
                    innerContent[ 'id' ] = index;
                    innerContent[ "student_name" ] = rowContent[0]; 
                    innerContent[ "student_class" ] = rowContent[1];
                    innerContent[ "class_arm" ] = rowContent[2];
                    innerContent[ "student_gender" ] = rowContent[3];
                    innerContent[ "student_reg_no" ] = rowContent[4];

                    return innerContent
            });

            this.itemsT = this.itemsT.filter(n => n && n['student_class'] );

            let classTitleExpected = [];

            let the_type_of_school = this.userData.schType;
            
            if(the_type_of_school == 'subeb' || the_type_of_school == 'fctubeb'){
                classTitleExpected = [ "jss1", "jss2", "jss3" ];
            }
            else if(the_type_of_school == 'semb' || the_type_of_school == 'fctseb'){
                classTitleExpected = [ "ss1", "ss2", "ss3" ];
            }
            else if(the_type_of_school == 'subeb+semb'){
                classTitleExpected = [ "jss1", "jss2", "jss3", "ss1", "ss2", "ss3" ];
            }   
            else if(the_type_of_school == 'tveb'){
                classTitleExpected = [ "jss1", "jss2", "jss3", "ss1", "ss2", "ss3" ];
            }  

            let genderExpected = [ "m", "f" ];
            let classTitleError, genderError = false;

            for (let i = 0; i < this.itemsT.length; ++i) {
                let tempLine = this.itemsT[i];
                let rc =  String(tempLine["student_class"]).toLowerCase().trim();
                let rc2 =  String(tempLine["student_gender"]).toLowerCase().trim();

                if ( genderExpected.indexOf(rc2) === -1 ) {
                   // console.log(" Gender >>> " + rc2 + " >>" + genderExpected.indexOf(rc2) ) 
                    this.itemsT = [];
                    genderError = true; 
                    break;                   
                }

                if ( classTitleExpected.indexOf(rc) === -1 ) {
                    this.itemsT = [];
                    classTitleError = true;    
                    break;                
                }               
            }

            if (classTitleError) {
                this.file = null;
                alert("Check that the Student Class column has the correct values/correct spelling.");
                return;
            }

            if (genderError) {
                this.file = null;
                alert("Check that the Gender column has the correct values i.e 'M' / 'F' ");
                return;
            }

            this.totalRowsT = this.itemsT.length;

           
          };
    },

    handleOnChange(e) {
      this.file = e.target.files[0];
      if (!this.file || this.file.type.indexOf("text/csv") !== 0) { alert("This is not a CSV file."); return; };  
      this.loadData(this.file);    
    },

    finish(){
      if (this.itemsT.length > 0){
              let transformStudent = this.itemsT.map( (o) => {
                  return {
                    "name": o.student_name,
                    "class_name": o.student_class,
                    "arm": o.class_arm,
                    "gender": o.student_gender,
                    "regno": o.student_reg_no
                  }
              }).filter((o) => {
                return o && o.class_name
              });
            
              const pupRequest = transformStudent;

              const sef = this;
              const { baseURL } = $themeConfig.app;
              const formPayload = { pupRequest };
              this.$loading(true);
              axios.post( baseURL + "/auth/onboardnewstudents/"+ this.userData.cal_id, formPayload)
              .then(function (response) {         
                sef.$loading(false);                
                sef.isEnollmentAdditionSidebarActive = false;
                sef.$toast({
                  component: ToastificationContent,
                  props: {
                    title: 'Thank you for onboarding some new Students.',
                    icon: 'AlertTriangleIcon',
                    variant: 'success',
                  },
                }); 

                }).catch((exception) => { 
                  sef.isEnollmentAdditionSidebarActive = false;
                  sef.$toast({
                    component: ToastificationContent,
                    props: {
                    title: 'There is an issue with the Onboarding process, please check your form details',
                    icon: 'AlertTriangleIcon',
                    variant: 'danger',
                  },
                  });
              });
      }
      else {
         this.$toast({
                    component: ToastificationContent,
                    props: {
                    title: 'You have not uploaded any Student template file yet',
                    icon: 'AlertTriangleIcon',
                    variant: 'danger',
                  },
          });
      }
    }

    },

    data() {
      return {  
          file: null,
          isFilled: false,
          perPageT: 5,
          pageOptionsT: [3, 5, 10],
          totalRowsT: 1,
          currentPageT: 1,
          sortByT: '',
          sortDescT: false,
          sortDirectionT: 'asc',
          filterT: null,
          filterOnT: [],
          infoModalT: {
            id: 'info-modal-student',
            title: '',
            content: ''
          },
          fieldsT: [
            { key: 'id', label: 'Id' },
            { key: 'student_name', label: 'Student Name' },
            { key: 'student_class', label: 'Student Class', sortable: true },
            { key: 'class_arm', label: 'Class Arm', sortable: true },
            { key: 'student_gender', label: 'Gender of Student', sortable: true },       
            { key: 'student_reg_no', label: 'Registration Number', sortable: true }
          ],

          itemsT: []
      }
    },

    setup() {
      const { refFormObserver, getValidationState, resetForm } = formValidation(() => {})
      const ENROLLMENT_APP_STORE_MODULE_NAME = 'app-enrollment';
      const school =  router.currentRoute.params.school ? router.currentRoute.params.school : null;
  
      // Register module
      if (!store.hasModule(ENROLLMENT_APP_STORE_MODULE_NAME)) store.registerModule(ENROLLMENT_APP_STORE_MODULE_NAME, enrollmentStoreModule)
  
      // UnRegister on leave
      onUnmounted(() => {
        if (store.hasModule(ENROLLMENT_APP_STORE_MODULE_NAME)) store.unregisterModule(ENROLLMENT_APP_STORE_MODULE_NAME)
      })
  
      const isSearchSchoolSidebarActive = ref(false)

      const userData = ref({});
      const teacherData = ref({});

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
      const findIfAdminisPresent = ( userData.value.role === "admin"  ); 
  
      const {
        fetchEnrollments,
        tableColumns,
        perPage,
        currentPage,
        
        totalEnrollments,
        totalPrimaryEnrollmentsMale,
        totalPrimaryEnrollmentsFemale,
        totalSecEnrollmentsJuniorFemale,
        totalSecEnrollmentsJuniorMale,
        totalSecEnrollmentsSeniorFemale,
        totalSecEnrollmentsSeniorMale,

        dataMeta,
        perPageOptions,
        searchQuery,
        sortBy,
        isSortDirDesc,
        refEnrollmentListTable,
        refetchData,
        handlePageChange,
        isEnollmentAdditionSidebarActive,
        filters,
        // UI       
        resolveUserStatusVariant,
        resolveUserTermVariant,

      } = useEnrollmentList( school );

      if( findIfPropisPresent || findIfTeacherisPresent || findIfPrinisPresent || findIfSupervisorisPresent || findIfAdminisPresent){
          filters.value.teacherid = findIfTeacherisPresent && teacherData.value ? teacherData.value.teaId : null;
          filters.value.schoolid = findIfPrinisPresent && teacherData.value ? teacherData.value.school.schId : null;
          filters.value.schoolgroup = (findIfPropisPresent || findIfPrinisPresent || findIfTeacherisPresent) && teacherData.value ? teacherData.value.school.owner.id : null;
          filters.value.supervisor = (findIfSupervisorisPresent) && userData.value ? userData.value.code : null;
          filters.value.admin = (findIfAdminisPresent) && userData.value ? userData.value.code : null; 
      }
  
      return { 
        // Sidebar 
        isSearchSchoolSidebarActive,
        userData,
        teacherData,
  
        fetchEnrollments,
        tableColumns,
        perPage,
        currentPage,

        totalEnrollments,
        totalPrimaryEnrollmentsMale,
        totalPrimaryEnrollmentsFemale,
        totalSecEnrollmentsJuniorFemale,
        totalSecEnrollmentsJuniorMale,
        totalSecEnrollmentsSeniorFemale,
        totalSecEnrollmentsSeniorMale,

        dataMeta,
        perPageOptions,
        searchQuery,
        sortBy,
        isSortDirDesc,
        refEnrollmentListTable,
        isEnollmentAdditionSidebarActive,

        refetchData,
        handlePageChange,
        resetForm,
        filters,
        
        // UI
        resolveUserStatusVariant,
        resolveUserTermVariant
      
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
  