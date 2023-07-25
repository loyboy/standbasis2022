<template>

    <div> 
       
        <div class="row">

          <b-sidebar
            id="add-new-user-sidebar"
            :visible="isAttendanceSidebarActive"
            bg-variant="white"
            sidebar-class="sidebar-md"
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
                <h5 class="mb-0">Advanced Filter</h5>

                <feather-icon
                  class="ml-1 cursor-pointer"
                  icon="XIcon"
                  size="16"
                  @click="isAttendanceSidebarActive = false"
                />
              </div>

              <b-form
                class="p-2"
                @submit.prevent="handleChange()"
                @reset.prevent="resetForm"
              >
                <b-row>

                  <b-col cols="12" md="12" v-if=" userData.role === 'proprietor'">
                    <b-form-group label="Select school" label-for="school">
                      <b-form-select
                        v-model="filters.schoolId"
                        :options="schoolOptions"
                        @change="loadOtherValues"
                      />
                    </b-form-group>
                  </b-col>

                  <b-col cols="12" md="12" v-if=" userData.role === 'proprietor' ||  userData.role === 'principal' ">
                    <b-form-group label="Select teacher" label-for="teacher">
                      <b-form-select
                        v-model="filters.teacherId"
                        :options="teacherOptions"
                        @change="teacherGrab"
                      />
                    </b-form-group>
                  </b-col>
                  <br/>

                  <b-col cols="12" md="12" v-if=" userData.role === 'proprietor' ||  userData.role === 'principal' ||  userData.role === 'teacher' ">
                    <b-form-group label="Select a class" label-for="classes">
                      <b-form-select
                        v-model="filters.classId"
                        :options="classOptions"
                        @change="classGrab"
                      />
                    </b-form-group>
                  </b-col>
                  <br/>

                  <b-col cols="12" md="12" v-if=" userData.role === 'proprietor' ||  userData.role === 'principal' ||  userData.role === 'teacher' ">
                    <b-form-group label="Select a Calendar Period" label-for="calendar">
                      <b-form-select
                        v-model="filters.calendarId"
                        :options="calendarOptions"
                        @change="calendarGrab"
                      />
                    </b-form-group>
                  </b-col>
                  <br/>

                  <b-col cols="12" md="12" v-if=" userData.role === 'proprietor' ||  userData.role === 'principal' ||  userData.role === 'teacher' ">
                    <b-form-group label="Select a Subject" label-for="subject">
                      <b-form-select
                        v-model="filters.subjectId"
                        :options="subjectOptions"
                        @change="subjectGrab"
                      />
                    </b-form-group>
                  </b-col>
                  <br/>


                  <b-col cols="12" md="12" v-if=" userData.role === 'proprietor' ||  userData.role === 'principal' ||  userData.role === 'teacher' ">
                    <b-form-group label="Select a Status" label-for="status">
                      <b-form-select
                        v-model="filters.status"
                        :options="statusOptions"
                        @change="statusGrab"
                      />
                    </b-form-group>
                  </b-col>
                  <br/>

                  <b-col cols="12" md="12" v-if=" userData.role === 'proprietor' ||  userData.role === 'principal' ||  userData.role === 'teacher' ">
                    <b-form-group label="From" label-for="from">
                      <b-form-datepicker
                        id="from"
                        v-model="filters.dateFrom"
                        placeholder="Choose a date"
                        local="en"
                        initial-date="2023-01-01"
                      />
                    </b-form-group>
                  </b-col>

                  <b-col cols="12" md="12" v-if=" userData.role === 'proprietor' ||  userData.role === 'principal' ||  userData.role === 'teacher' ">
                    <b-form-group label="To" label-for="to">
                      <b-form-datepicker
                        id="to"
                        v-model="filters.dateTo"
                        placeholder="Choose a date"
                        local="en"
                        initial-date="2023-01-01"
                      />
                    </b-form-group>
                  </b-col>
                </b-row>

                <b-row class="filter-padding">
                  <b-button variant="success" class="mr-2 col-md-12" type="submit">
                    Filter Page
                  </b-button>

                  <b-button
                    type="button"
                    class="mr-2 col-md-12"
                    variant="dark"
                    @click="reset"
                  >
                    Reset
                  </b-button>
                </b-row>
              </b-form>

            </template>
          </b-sidebar>
          
          <b-col lg="4" sm="6">
            <statistic-card-horizontal
              icon="UsersIcon"
              color="primary"
              :statistic=" totalAttendances === undefined ? 0 : totalAttendances "
              statistic-title="Total Attendances"
            />
          </b-col>

          <b-col lg="4" sm="6" v-if=" userData.role === 'teacher' ">
            <statistic-card-horizontal
              icon="UserCheckIcon"
              color="success"
              :statistic="
                totalActiveAttendances === undefined ? 0 :totalActiveAttendances
              "
              statistic-title="Done Attendances"
            />
          </b-col>

          <b-col lg="4" sm="6" v-if=" userData.role === 'teacher' ">
            <statistic-card-horizontal
              icon="UserMinusIcon"
              color="danger"
              :statistic="
                totalInactiveAttendances === undefined ? 0 : totalInactiveAttendances
              "
              statistic-title="Not Done Attendances"
            />
          </b-col>

        </div>

        <div class="row mt-2 mb-4"> 
          <b-col lg="12" sm="6">

            <b-form-tags
                input-id="tags-pills"
                v-model="searchValues"
                tag-variant="warning"
                tag-pills
                size="lg"
                placeholder="Search items will appear here...."
                separator=" "
                no-add-on-enter
                :disabled="true"
            >
            </b-form-tags>

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

                  <b-button
                    variant="success"
                    @click="isAttendanceSidebarActive = true"
                  >
                    <span class="text-nowrap">Advanced Filter</span>
                  </b-button>

                  <b-button 
                    variant="danger"
                    @click="reset"
                  >
                    <span class="text-nowrap">Reset</span>
                  </b-button>

                </div>
              </b-col>
            </b-row>

          </div>
    
          <b-table
            v-if=" userData.role === 'teacher' "
            ref="refAttendanceListTable"
            class="position-relative"
            :items="attendanceItems"
            :busy="isLoading"
            responsive
            :fields="tableColumns"
            primary-key="id"
            :sort-by.sync="sortBy"
            show-empty
            empty-text="No matching records found"
            :sort-desc.sync="isSortDirDesc"
          >

              <template #table-busy>
                <div class="text-center text-danger my-2">
                  <b-spinner class="align-middle"></b-spinner>
                  <strong>Loading...</strong>
                </div>
              </template>
    
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
    
             <!-- Column: Date -->
             <template #cell(_date)="data">
               <div>
                {{ String( data.item._date ).replace(".000+00:00","") }}
               </div>               
             </template>

              <!-- Column: Teacher -->
             <template #cell(teacher)="data">
               <div>
                {{ data.item.teacher.fname + " " + data.item.teacher.lname }}
               </div>               
             </template>

           <!-- <template #head(done)="data">
              <th class="vertical-header">{{ data.label }}</th>
            </template>-->

            <!-- Column: Done cc -->
           <template #cell(done)="data">
              <b-badge
                pill
                :variant="`light-${resolveAttendancestatusVariant(data.item.done)}`"
                class="text-capitalize"
              >
                {{ data.item.done === 1 ? "Done" : data.item.done === 0 ? "Not Done" : data.item.done === 2 ? "Late" : data.item.done === -1 ? "Voided" : "Nil"  }}
              </b-badge>
            </template> 
    
            <!-- Column: Actions -->
            <template #cell(actions)="data" >
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

                <b-dropdown-item :to="{ name: 'attendances-home-view', params: { id: data.item.attId } }" v-if=" data.item.done === 1 ">
                  <feather-icon icon="BookOpenIcon" />
                  <span class="align-middle ml-50">View Details</span>
                </b-dropdown-item> 

                <b-dropdown-item :to="{ name: 'attendances-student-home', params: { attendance: data.item.attId } }" v-if=" data.item.done === 1 ">
                  <feather-icon icon="BookOpenIcon" />
                  <span class="align-middle ml-50">View Rowcall</span>
                </b-dropdown-item>  

                <b-dropdown-item :to="{ name: 'attendances-activity-home', params: { attendance: data.item.attId } }" v-if=" data.item.done === 1 ">
                  <feather-icon icon="LayersIcon" />
                  <span class="align-middle ml-50">View Activity</span>
                </b-dropdown-item>           
                
                <b-dropdown-item :to="{ name: 'schools-home-view', params: { id: data.item.teacher.school.schId } }" v-if=" data.item.done === 1 ">
                  <feather-icon icon="Maximize2Icon" />
                  <span class="align-middle ml-50"> View School </span>
                </b-dropdown-item>  

              </b-dropdown>
            </template>
    
          </b-table>

          <b-table
            v-if=" userData.role === 'principal' "
            ref="refAttendanceListTable"
            class="position-relative"
            :items="attendanceItems"
            :busy="isLoading"
            responsive
            :fields="tableColumnsPrincipal"
            primary-key="id"
            :sort-by.sync="sortBy"
            show-empty
            empty-text="No matching records found"
            :sort-desc.sync="isSortDirDesc"
          >

              <template #table-busy>
                <div class="text-center text-danger my-2">
                  <b-spinner class="align-middle"></b-spinner>
                  <strong>Loading...</strong>
                </div>
              </template>
    
                <!-- Column: Date -->
             <template #cell(att_id._date)="data">
               <div>
                <span> <b> {{ String( data.item.att_id._date ).replace(".000+00:00","") }}  </b> </span>
               </div>               
             </template>

             <!-- Column: Teacher -->
             <template #cell(att_id.teacher)="data">
               <div>
                {{ data.item.att_id.teacher.fname + " " + data.item.att_id.teacher.lname }}
               </div>               
             </template>

            <!-- Column: Timing -->
            <template #cell(timing)="data">
             
               <b-badge
                pill
                :variant="`light-${resolveAttendancetimingVariant(data.item.timing)}`"
                class="text-capitalize"
              >
                {{ data.item.timing === 100 ? "Excellent" : data.item.timing === 50 ? "Late" : data.item.action === 0 ? "Absymal" : "Nil"  }}
              </b-badge>
            </template>

            <!-- Column: Class Performance -->
            <template #cell(class_perf)="data">
            
              <b-badge
                pill
                :variant="`light-${resolveAttendanceclassPerfVariant(data.item.class_perf)}`"
                class="text-capitalize"
              >
                {{ data.item.class_perf === 100 ? "Excellent" : data.item.class_perf > 80 ? "Excellent" : ( data.item.class_perf > 50 && data.item.class_perf <= 79 ) ? "Average" : "Nil"  }}
              </b-badge>
            </template>

            <!-- Column: Completeness -->
            <template #cell(completeness)="data">
              
              <b-badge
                pill
                :variant="`light-${resolveAttendancecompleteVariant(data.item.completeness)}`"
                class="text-capitalize"
              >
                {{ data.item.completeness === 100 ? "Complete" : data.item.completeness === 50 ? "Incomplete" : "Nil"  }}
              </b-badge>
            </template>

              <!-- Column: Score -->
            <template #cell(score)="data">
              <span> <b> {{ data.item.score }} </b> </span>
              <b-badge
                pill
                :variant="`light-${resolveAttendancescoreVariant(data.item.score)}`"
                class="text-capitalize"
              >
                 {{ data.item.score === 100 ? "Excellent" : data.item.score > 80 ? "Excellent" : ( data.item.score > 50 && data.item.score <= 79 ) ? "Average" : "Nil"  }}
              </b-badge>
            </template>

             <!-- Column: Action -->
            <template #cell(action)="data">
              <b-badge
                pill
                :variant="`light-${resolveAttendancestatusVariant(data.item.action)}`"
                class="text-capitalize"
              >
                {{ data.item.action === 1 ? "Approved" : data.item.action === 0 ? "Unattended" : data.item.action === 2 ? "Queried" : data.item.done === -1 ? "Voided" : "Nil"  }}
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

             <!--   <b-dropdown-item v-if=" data.item.action === 0 " @click="principalActionApprove(data.item.att_id.attId)">
                  <feather-icon icon="FileTextIcon" />
                  <span class="align-middle">Approve Attendance</span>
                </b-dropdown-item>  

                <b-dropdown-item v-if=" data.item.action === 0 " @click="principalActionDisapprove(data.item.att_id.attId)">
                  <feather-icon icon="FileTextIcon" />
                  <span class="align-middle">Query Attendance</span>
                </b-dropdown-item> -->

                <b-dropdown-item :to="{ name: 'attendances-home-view', params: { id: data.item.att_id.attId } }">
                  <feather-icon icon="BookOpenIcon" />
                  <span class="align-middle">View Details</span>
                </b-dropdown-item> 

                <b-dropdown-item v-if=" data.item.att_id.done === 1 " :to="{ name: 'attendances-student-home', params: { attendance: data.item.att_id.attId } }">
                  <feather-icon icon="BookOpenIcon" />
                  <span class="align-middle ">View Rowcall</span>
                </b-dropdown-item>  

                <b-dropdown-item :to="{ name: 'attendances-activity-home', params: { attendance: data.item.att_id.attId } }">
                  <feather-icon icon="LayersIcon" />
                  <span class="align-middle ">View Activity</span>
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
                  :total-rows="totalAttendances"
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
     //   { value: null, text: "Please select Teacher" }
      ]

      let classOptions = [
    //    { value: null, text: "Please select Class" }
      ]

      let calendarOptions = [
   //    { value: null, text: "Please select Calendar" }
      ]

      let subjectOptions = [
   //     { value: null, text: "Please select a Subject" }
      ]

      let statusOptions = [
     //  { value: null, text: "Please select a Status" }
      ]

      return {  
         teacherOptions,
         classOptions,
         calendarOptions,
         subjectOptions,
         statusOptions,
         searchValuesCurrent: {
            teacher: "nil",
            class: "nil",
            calendar: "nil",
            subject: "nil",
            status: "nil"
         }     
      }
    },

    mounted(){
        if(this.userData.role !== "proprietor"){
            console.log("School id " + this.teacherData.school.schId )
            setTimeout(() => {
                this.loadOtherValues( this.teacherData.school.schId );
            },2000);        
        }
    },

    setup() {
      const { refFormObserver, getValidationState, resetForm } = formValidation(() => {})
      const Attendance_APP_STORE_MODULE_NAME = 'app-Attendance';

      // Register module
      if (!store.hasModule(Attendance_APP_STORE_MODULE_NAME)) store.registerModule(Attendance_APP_STORE_MODULE_NAME, attendanceStoreModule)
  
      // UnRegister on leave
      onUnmounted(() => {
        if (store.hasModule(Attendance_APP_STORE_MODULE_NAME)) store.unregisterModule(Attendance_APP_STORE_MODULE_NAME)
      })  
      
      const userData = ref({});
      const teacherData = ref({});
      const schoolOptions = ref([]);

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
        fetchAttendances,
        tableColumns,
        tableColumnsPrincipal,
        perPage,
        currentPage,
        
        totalAttendances,
        totalActiveAttendances,
        totalInactiveAttendances,

        dataMeta,
        perPageOptions,
        searchQuery,
        sortBy,
        isSortDirDesc,
        refAttendanceListTable,
        isAttendanceSidebarActive,
        isLoading,

        refetchData,
        handlePageChange,
        handleChange,

        // UI       
        resolveAttendancestatusVariant,
        resolveAttendancetimingVariant,
        resolveAttendanceclassPerfVariant,
        resolveAttendancecompleteVariant,
        resolveAttendancescoreVariant,
        filters,
        attendanceItems,

        searchValues

      } = useAttendanceList();

      if( findIfPropisPresent || findIfTeacherisPresent || findIfPrinisPresent ){
          filters.value.teacherId = findIfTeacherisPresent && teacherData.value ? teacherData.value.teaId : null;
          filters.value.schoolId = findIfPrinisPresent && teacherData.value ? teacherData.value.school.schId : null;
          filters.value.schoolgroup = (findIfPropisPresent || findIfPrinisPresent || findIfTeacherisPresent) && teacherData.value ? teacherData.value.school.owner.id : null;
      } 

      (async function () {
        const resp = await store.dispatch(`${Attendance_APP_STORE_MODULE_NAME}/fetchSchools`, { id : filters.value.schoolgroup });
        let myval = resp.data.data;
        myval.forEach(obj => { 
          schoolOptions.value.push( { value: obj.schId , text: obj.name } )
        });
      })();

      onMounted(async () => {
        fetchAttendances();
      })
      
      return {
        // Sidebar
        isAttendanceSidebarActive,
        isLoading,
  
        fetchAttendances,
        tableColumns,
        tableColumnsPrincipal,
        perPage,
        currentPage,

        totalAttendances,
        totalActiveAttendances,
        totalInactiveAttendances,

        dataMeta,
        perPageOptions,
        searchQuery,
        sortBy,
        isSortDirDesc,
        refAttendanceListTable,

        refetchData,
        handlePageChange,
        handleChange,

        resetForm,
  
        // UI
        resolveAttendancestatusVariant,
        resolveAttendancetimingVariant,
        resolveAttendanceclassPerfVariant,
        resolveAttendancecompleteVariant,
        resolveAttendancescoreVariant,

        userData,
        schoolOptions,
        teacherData,
        
        filters,
        attendanceItems,

        searchValues

      }
    },

    methods: {

      reset(){
        this.isAttendanceSidebarActive = false;

        if (this.userData.role !== "teacher"){
          this.teacherOptions = [
            { value: null, text: "Please select Teacher" }
          ]
          this.classOptions = [
            { value: null, text: "Please select Class" }
          ]
          this.calendarOptions = [
            { value: null, text: "Please select Calendar" }
          ]
          this.subjectOptions = [
            { value: null, text: "Please select a Subject" }
          ]
          this.statusOptions = [
            { value: null, text: "Please select a Status" }
          ]
        }        

         this.searchValuesCurrent.teacher = ""
         this.searchValuesCurrent.class = ""
         this.searchValuesCurrent.calendar = ""
         this.searchValuesCurrent.subject = ""
         this.searchValuesCurrent.status = ""

         this.searchValues = []

         this.filters.schoolId = null;
         this.filters.classId = null;
         if (this.userData.role !== "teacher"){
            this.filters.teacherId = null;
         }         
         this.filters.calendarId = null;
         this.filters.subjectId = null;
         this.filters.status = null;
         this.filters.dateFrom = null;
         this.filters.dateTo = null;

         this.fetchAttendances();
      },

      loadOtherValues(value){

            this.searchValues = [];            

            this.filters.classId = null;
            if (this.userData.role !== "teacher"){
              this.filters.teacherId = null;
            } 
            this.filters.calendarId = null;
            this.filters.subjectId = null;
            this.filters.status = null;

            var values = this.schoolOptions.map(function(o) { return o.value })
            var index = values.indexOf(value) 
            let choiceText = this.schoolOptions[index].text          

            const seff = this;
            let foundOlder = this.searchValues.find(function(o) { return String(o).trim() === String(seff.searchValuesCurrent.school).trim() });
            if (foundOlder){
              const index = this.searchValues.findIndex(obj => obj === seff.searchValuesCurrent.school );
              this.searchValues.splice(index, 1);
            }
            
            let found = this.searchValues.find(function(o) { return o === value });
            if (!found){        
              this.searchValuesCurrent.school = choiceText;   
              this.searchValues.push(choiceText);
            }   

            const Attendance_APP_STORE_MODULE_NAME = 'app-Attendance';
            const sef = this;     
            sef.teacherOptions = [];     
            store.dispatch(`${Attendance_APP_STORE_MODULE_NAME}/fetchTeachers`, { id : value })
            .then(response => { 
              let myval = response.data.data;
              myval.forEach(obj => {
                sef.teacherOptions.push( { value: obj.teaId , text: obj.fname + ' ' + obj.lname} )
              });             
            });
//
            sef.classOptions = [];     
            if ( this.userData.role === 'teacher' ){
              store.dispatch(`${Attendance_APP_STORE_MODULE_NAME}/fetchClassrooms`, { id : value, teacher: this.userData.role === 'teacher' ? this.teacherData.teaId : null })
              .then(response => { 
                let myval = response.data.data;
                myval.forEach(obj => {
                  sef.classOptions.push( { value: obj.clsId , text: obj.title + ' ' + obj.ext} )
                });             
              });

              sef.subjectOptions = [];     
              store.dispatch(`${Attendance_APP_STORE_MODULE_NAME}/fetchSubjects`, { teacher: this.userData.role === 'teacher' ? this.teacherData.teaId : null })
              .then(response => { 
                let myval = response.data.data;
                myval.forEach(obj => {
                  sef.subjectOptions.push( { value: obj.subId , text: obj.name } )
                });            
              });
            }
            else if (this.userData.role === 'principal'){
              store.dispatch(`${Attendance_APP_STORE_MODULE_NAME}/fetchClassroomsOther`, { id : value })
              .then(response => { 
                let myval = response.data.data;
                myval.forEach(obj => {
                  sef.classOptions.push( { value: obj.clsId , text: obj.title + ' ' + obj.ext} )
                });             
              });

              sef.subjectOptions = [];     
              store.dispatch(`${Attendance_APP_STORE_MODULE_NAME}/fetchSubjectsOther`, { })
              .then(response => { 
                let myval = response.data.data;
                myval.forEach(obj => {
                  sef.subjectOptions.push( { value: obj.subId , text: obj.name } )
                });            
              });
            }

            sef.statusOptions = [];     
            sef.statusOptions.push( { value: 1 , text: "Done" } )  
            sef.statusOptions.push( { value: 0 , text: "Not Done" } )
            sef.statusOptions.push( { value: -1 , text: "Void" } )
            sef.statusOptions.push( { value: 2 , text: "Late" } ) 

            sef.calendarOptions = [];     
            store.dispatch(`${Attendance_APP_STORE_MODULE_NAME}/fetchCalendars`, { id : value })
            .then(response => { 
              let myval = response.data.data;
              myval.forEach(obj => {
                sef.calendarOptions.push( { value: obj.CalendarId , text: obj.session + ' ' + obj.term + ' Term'} )
              });             
            });

      },

      teacherGrab(value){
          var values = this.teacherOptions.map(function(o) { return o.value })
          var index = values.indexOf(value) 
          let choiceText = this.teacherOptions[index].text          

          const sef = this;
          let foundOlder = this.searchValues.find(function(o) { return String(o).trim().replace("\n","") === String(sef.searchValuesCurrent.teacher).trim().replace("\n","") });
          if (foundOlder){
            const index = this.searchValues.findIndex(obj => String(obj).trim().replace("\n","") === String(sef.searchValuesCurrent.teacher).trim().replace("\n","") );
            this.searchValues.splice(index, 1)
          }
          
          let found = this.searchValues.find(function(o) { return o === value });
          if (!found){        
            this.searchValuesCurrent.teacher = choiceText;   
            this.searchValues.push(choiceText);
          }         
      },

      classGrab(value){
        var values = this.classOptions.map(function(o) { return o.value })
        var index = values.indexOf(value) 
        let choiceText = this.classOptions[index].text

        const sef = this;
        let foundOlder = this.searchValues.find(function(o) { return String(o).trim().replace("\n","") === String(sef.searchValuesCurrent.class).trim().replace("\n","") });
        if (foundOlder){
          const index = this.searchValues.findIndex(obj => String(obj).trim().replace("\n","") === String(sef.searchValuesCurrent.class).trim().replace("\n","") );
          this.searchValues.splice(index, 1)
        }

        let found = this.searchValues.find(function(o) { return o === value });
        if (!found){
          this.searchValuesCurrent.class = choiceText;
          this.searchValues.push(choiceText);
        }
       
      },

      calendarGrab(value){
        var values = this.calendarOptions.map(function(o) { return o.value })
        var index = values.indexOf(value) 
        let choiceText = this.calendarOptions[index].text

        const sef = this;
        let foundOlder = this.searchValues.find(function(o) { return String(o).trim().replace("\n","") === String(sef.searchValuesCurrent.calendar).trim().replace("\n","") });
        if (foundOlder){
          const index = this.searchValues.findIndex(obj => String(obj).trim().replace("\n","") === String(sef.searchValuesCurrent.calendar).trim().replace("\n","") );
          this.searchValues.splice(index, 1)
        }
        
        let found = this.searchValues.find(function(o) { return o === value });
        if (!found){
          this.searchValuesCurrent.calendar = choiceText;
          this.searchValues.push(choiceText);
        }       
      },

      subjectGrab(value){
        var values = this.subjectOptions.map(function(o) { return o.value })
        var index = values.indexOf(value) 
        let choiceText = this.subjectOptions[index].text

        const sef = this;
        let foundOlder = this.searchValues.find(function(o) { return String(o).trim().replace("\n","") === String(sef.searchValuesCurrent.subject).trim().replace("\n","") });
        if (foundOlder){
          const index = this.searchValues.findIndex(obj => String(obj).trim().replace("\n","") === String(sef.searchValuesCurrent.subject).trim().replace("\n","") );
          this.searchValues.splice(index, 1)
        }
        
        let found = this.searchValues.find(function(o) { return o === value });
        if (!found){
          this.searchValuesCurrent.subject = choiceText;
          this.searchValues.push(choiceText);
        }       
      },

      statusGrab(value){
        var values = this.statusOptions.map(function(o) { return o.value })
        var index = values.indexOf(value) 
        let choiceText = this.statusOptions[index].text

        const sef = this;
        let foundOlder = this.searchValues.find(function(o) { return String(o).trim().replace("\n","") === String(sef.searchValuesCurrent.status).trim().replace("\n","") });
        if (foundOlder){
          const index = this.searchValues.findIndex(obj => String(obj).trim().replace("\n","") === String(sef.searchValuesCurrent.status).trim().replace("\n","") );
          this.searchValues.splice(index, 1)
        }
        
        let found = this.searchValues.find(function(o) { return o === value });
        if (!found){
          this.searchValuesCurrent.status = choiceText;
          this.searchValues.push(choiceText);
        }       
      },

      principalActionApprove(attId){
         const Attendance_APP_STORE_MODULE_NAME = 'app-Attendance';
         let confirmApproval = window.confirm("Do you really wish to Approve this Attendance?");
         if (confirmApproval){
            const sef = this;          
            store.dispatch( `${Attendance_APP_STORE_MODULE_NAME}/updateAttendanceManagement`, { id: Number(attId),  management: { action : 1 }, activity: { action: "approved" } } )
            .then(response => { 
                sef.$toast({
                  component: ToastificationContent,
                  props: {
                  title: 'Attendance has been approved.',
                  icon: 'AlertTriangleIcon',
                  variant: 'success',
                  },
                });  
            }).catch((exception) => { 

              sef.$toast({
                component: ToastificationContent,
                props: {
                  title: 'There is an issue with the approval process',
                  icon: 'AlertTriangleIcon',
                  variant: 'danger'
                }
              });

		        }); 
         }
      },

      principalActionDisapprove(attId){
         const Attendance_APP_STORE_MODULE_NAME = 'app-Attendance';
         let confirmQuery = window.prompt("Type in a comment to add to this Query for this Attendance:")
         if (confirmQuery){
            const sef = this;          
            store.dispatch( `${Attendance_APP_STORE_MODULE_NAME}/updateAttendanceManagement`, { id: Number(attId), management: { action : 2, comment: confirmQuery === "" ? "No comment" : confirmQuery }, activity: { action: "queried", comment_query: confirmQuery === "" ? "No comment" : confirmQuery  } } )
            .then(response => { 
                sef.$toast({
                  component: ToastificationContent,
                  props: {
                  title: 'Attendance has been queried.',
                  icon: 'AlertTriangleIcon',
                  variant: 'warning'
                  },
                });  
                sef.fetchAttendances();
            });
         }
       /*  
       else {
            const sef = this;          
            store.dispatch( `${Attendance_APP_STORE_MODULE_NAME}/updateAttendanceManagement`, { id: Number(attId), management: { action : 2, comment: confirmQuery }, activity: { action: "queried", comment_query: "No comment"  } } )
            .then(response => { 
                sef.$toast({
                  component: ToastificationContent,
                  props: {
                  title: 'Attendance has been queried but without any comments.',
                  icon: 'AlertTriangleIcon',
                  variant: 'warning'
                  },
                }); 
                sef.fetchAttendances(); 
            }).catch((exception) => { 
                sef.$toast({
                  component: ToastificationContent,
                  props: {
                    title: 'There is an issue with the disapproval process',
                    icon: 'AlertTriangleIcon',
                    variant: 'danger'
                  }
                });
            }); 
         }*/
      
      }

    }


  }
  </script>
  
  <style lang="scss" scoped>
    .per-page-selector {
      width: 90px;
    }

    .vertical-header{
      writing-mode: vertical-rl;
      white-space: nowrap;
      width: 10px !important; /* Adjust the width as per your requirement */
    }
  </style>
  
  <style lang="scss">
  @import '~@core/scss/vue/libs/vue-select.scss';
  </style>
  