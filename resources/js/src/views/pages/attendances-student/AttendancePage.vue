<template>

    <div>  
        <div class="row">
          <!-- Sidebar for the  Advanced Filter -->         

          <div @click.stop="">
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
                <!-- Header xxx -->
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
          </div>

          <b-col lg="3" sm="6">
            <statistic-card-horizontal
              icon="UsersIcon"
              color="primary"
              :statistic=" totalAttendances === undefined ? 0 : totalAttendances "
              statistic-title="Total"
            />
          </b-col> 

          <b-col lg="3" sm="6">
            <statistic-card-horizontal
              icon="UserCheckIcon"
              color="success"
              :statistic="
                totalPresentAttendances === undefined ? 0 :totalPresentAttendances
              "
              statistic-title="Present"
            />
          </b-col>

          <b-col lg="3" sm="6">
            <statistic-card-horizontal
              icon="UserMinusIcon"
              color="danger"
              :statistic="
                totalAbsentAttendances === undefined ? 0 : totalAbsentAttendances
              "
              statistic-title="Absent"
            />
          </b-col>

          <b-col lg="3" sm="6">
            <statistic-card-horizontal
              icon="UserMinusIcon"
              color="warning"
              :statistic="
                totalExcusedAttendances === undefined ? 0 : totalExcusedAttendances
              "
              statistic-title="Excused"
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
                  <strong>Loading...,,</strong>
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
            <template #cell(attendance._date)="data">
               <div>
                {{ String( data.item.attendance._date ).replace(".000+00:00","") }}
               </div>               
            </template>

             <!-- Column: Status -->
            <template #cell(status)="data">
              <b-badge
                pill
                :variant="`light-${resolveVariant(data.item.status)}`"
                class="text-capitalize"
              >
                {{ data.item.status === 1 ? "Present" : data.item.status === 0 ? "Absent" : "Excused"  }}
              </b-badge>
            </template>

              <!-- Column: Observation -->
            <template #cell(observation)="data">
              <b-badge
                pill
                :variant="`light-${resolveVariantObs(data.item.observation)}`"
                class="text-capitalize"
              >
                {{ (data.item.observation === null || data.item.observation === "") ? "Normal" : data.item.observation }}
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

                <b-dropdown-item :to="{ name: 'attendances-student-home-view', params: { id: data.item.rowcallId } }">
                  <feather-icon icon="FileTextIcon" />
                  <span class="align-middle ml-50">View Details</span>
                </b-dropdown-item>

                <b-dropdown-item @click= " triggerModal( data.item.rowcallId, data.item.student.name ) " >
                  <feather-icon icon="CornerLeftUpIcon"   />
                  <span class="align-middle ml-50">Add observations</span>
                </b-dropdown-item>              
                
                <b-dropdown-item :to="{ name: 'schools-home-view', params: { id: data.item.student.school.schId } }">
                  <feather-icon icon="Maximize2Icon" />
                  <span class="align-middle ml-50"> View School </span>
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

         <!-- modal  -->
         <b-modal
          ref="my-modal-add-obs"
          hide-footer
          :title="modalTitle"
          no-close-on-backdrop
          content-class="shadow"
        >      
          <b-form>

            <b-form-group
              label="Add an Observation:"
              label-for="max-input"
            >             
                    <b-form-select
                          v-model="addObservation"
                          :options="obsOptions"
                        />
                     
            </b-form-group>
                      
          </b-form>

          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            class="mt-3"
            variant="outline-secondary"
            block
            @click="hideModal"
          >
            Cancel
          </b-button>

          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            class="mt-2"
            variant="outline-success"
            block
            @click=" addObservations( modalAttendance ) "
          >
            Add An Observation
          </b-button>

        </b-modal>


    </div>
  </template>
  
  <script>
  import {
    BCard,
    BRow,
    BCol,
    BFormInput,
    BFormGroup,
    BFormSelect,
    BModal,
    BButton,
    BSpinner,
    BTable,
    BSidebar,
    BForm,
    BFormTags,
    BMedia,
    BAvatar,
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
  import { ref, onUnmounted, onMounted } from '@vue/composition-api'
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
      BFormSelect,
      BModal,
      BButton,
      BSpinner,
      BTable, 
      BSidebar,
      BForm, 
      BFormTags,
      BMedia,
      BAvatar,
      BFormDatepicker,
      BLink,
      BBadge,
      BDropdown,
      BDropdownItem,
      BPagination,
  
      vSelect,
    },

    data() {

      let teacherOptions = [
     //   { value: null, text: "Please select a Teacher" }
      ]

      let classOptions = [
      //  { value: null, text: "Please select a Class" }
      ]

      let calendarOptions = [
     //   { value: null, text: "Please select a Calendar" }
      ]

      let subjectOptions = [
     //   { value: null, text: "Please select A Subject" }
      ]

      let statusOptions = [
      //  { value: null, text: "Please select A Status" }
      ]

      let studentOptions = [
      //  { value: null, text: "Please select A Student" }
      ]

      let obsOptions = [
        { value: null, text: "Please select An Observation" },
        { value: "uncomfortable", text: "Student is uncomfortable." },
        { value: "distracted", text: "Student is always distracted." },
        { value: "unhappy", text: "Student is really unhappy." }
      ]

      return {         
        teacherOptions,
         classOptions,
         calendarOptions,
         subjectOptions,
         statusOptions,
         studentOptions,
         searchValuesCurrent: {
            teacher: "nil",
            class: "nil",
            calendar: "nil",
            subject: "nil",
            status: "nil",
            student: "nil"
         },
         addObservation: "" ,
         modalTitle: "" ,
         modalAttendance: null,
         obsOptions
      } 

    },

    mounted(){
        if(this.userData.role !== "proprietor"){
            setTimeout(() => {
                        this.loadOtherValues( this.teacherData.school.schId );
            },2000);        
        }
    },

    setup() {
      const { refFormObserver, getValidationState, resetForm } = formValidation(() => {})
      const Attendance_APP_STORE_MODULE_NAME = 'app-AttendanceStudent';
      const attendance =  router.currentRoute.params.attendance ? router.currentRoute.params.attendance : null;
     
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
        perPage,
        currentPage,
        
        totalAttendances,
        totalAbsentAttendances,
        totalPresentAttendances,
        totalExcusedAttendances,

        dataMeta,
        perPageOptions,
        searchQuery,
        sortBy,
        isSortDirDesc,
        refAttendanceListTable,
        refetchData,
        handlePageChange,
        handleChange,

        // UI       
        resolveVariant,
        resolveVariantObs,
        isAttendanceSidebarActive, 
        isLoading,

        filters,
        attendanceItems,
        searchValues

      } = useAttendanceList(  );

      if( findIfPropisPresent || findIfTeacherisPresent || findIfPrinisPresent ){
          filters.value.teacherId = findIfTeacherisPresent && teacherData.value ? teacherData.value.teaId : null;
          filters.value.schoolId = findIfPrinisPresent && teacherData.value ? teacherData.value.school.schId : null;
          filters.value.schoolgroup = (findIfPropisPresent || findIfPrinisPresent || findIfTeacherisPresent)  && teacherData.value ? teacherData.value.school.owner.id : null;
          filters.value.calendarId = (findIfPrinisPresent || findIfTeacherisPresent) && userData.value ? userData.value.cal_id : null;
      }

      if (attendance){
        filters.value.attId = attendance;
      }

      (async function () {
        const resp = await store.dispatch(`${Attendance_APP_STORE_MODULE_NAME}/fetchSchools`, { id : filters.value.schoolgroup });
        let myval = resp.data.data;
        myval.forEach(obj => {
          schoolOptions.value.push( { value: obj.schId , text: obj.name } )
        });
      })();

      onMounted(() => {
        fetchAttendances();
      })
  
      return {
        // Sidebar
        isAttendanceSidebarActive,
        isLoading,

        fetchAttendances,
        tableColumns,
        perPage,
        currentPage,

        totalAttendances,
        totalPresentAttendances,
        totalAbsentAttendances,
        totalExcusedAttendances,

        dataMeta,
        perPageOptions,
        searchQuery,
        sortBy,
        isSortDirDesc,
        refAttendanceListTable,

        refetchData,
        handlePageChange,
        handleChange,
        
        filters,
        attendanceItems,
        searchValues,
        schoolOptions,

        userData,
        teacherData,
  
        // UI
        resolveVariant,
        resolveVariantObs,
        Attendance_APP_STORE_MODULE_NAME       
      
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
              { value: null, text: "Please select A Subject" }
            ]

            this.statusOptions = [
              { value: null, text: "Please select A Status" }
            ]

            this.studentOptions = [
              { value: null, text: "Please select A Student" }
            ]
        }

         this.searchValuesCurrent.teacher = ""
         this.searchValuesCurrent.class = ""
         this.searchValuesCurrent.calendar = ""
         this.searchValuesCurrent.subject = ""
         this.searchValuesCurrent.status = ""
         this.searchValuesCurrent.student = ""
       
         this.searchValues = []

      //   this.filters.schoolId = null;
         this.filters.classId = null;
         if (this.userData.role !== "teacher"){
            this.filters.teacherId = null;
         }
       //  this.filters.calendarId = null;
         this.filters.subjectId = null;
         this.filters.status = null;
         this.filters.studentId = null;

         this.filters.dateFrom = null;
         this.filters.dateTo = null;
         console.log("Calendar tins: " +  this.filters.calendarId );
         this.filters.calendarId = this.userData.cal_id;
         this.fetchAttendances();
      },
      async loadOtherValues(value){
            this.searchValues = []; 

            this.filters.classId = null;
            if (this.userData.role !== "teacher"){
              this.filters.teacherId = null;
            }
          //  this.filters.calendarId = null;
            this.filters.subjectId = null;
            this.filters.status = null;
            this.filters.studentId = null;

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

            const Attendance_APP_STORE_MODULE_NAME = 'app-AttendanceStudent';
            const sef = this;     
            sef.teacherOptions = [];     
            store.dispatch(`${Attendance_APP_STORE_MODULE_NAME}/fetchTeachers`, { id : value })
            .then(response => { 
              let myval = response.data.data;
              myval.forEach(obj => {
                sef.teacherOptions.push( { value: obj.teaId , text: obj.fname + ' ' + obj.lname} )
              });             
            });

            sef.classOptions = [];     
            store.dispatch(`${Attendance_APP_STORE_MODULE_NAME}/fetchClassrooms`, { id : value, teacher: this.userData.role === 'teacher' ? this.teacherData.teaId : null } )
            .then(response => { 
              let myval = response.data.data;
              myval.forEach(obj => {
                sef.classOptions.push( { value: obj.clsId , text: obj.title + ' ' + obj.ext} )
              });            
            });

            sef.calendarOptions = [];     
            store.dispatch(`${Attendance_APP_STORE_MODULE_NAME}/fetchCalendars`, { id : value })
            .then(response => { 
              let myval = response.data.data;
              myval.forEach(obj => {
                //sef.calendarOptions.push( { value: obj.CalendarId , text: obj.session + ' ' + obj.term + ' Term'} )
                let isActive = obj.status === 1 ? "ACTIVE" : "INACTIVE";
                sef.calendarOptions.push( { value: obj.CalendarId , text: obj.session + "---" + "Term " + obj.term + "---" + isActive } )
              });          
            });

            sef.subjectOptions = [];     
            store.dispatch(`${Attendance_APP_STORE_MODULE_NAME}/fetchSubjects`, { teacher: this.userData.role === 'teacher' ? this.teacherData.teaId : null } )
            .then(response => { 
              let myval = response.data.data;
              myval.forEach(obj => {
                sef.subjectOptions.push( { value: obj.subId , text: obj.name } )
              });            
            });

            sef.statusOptions = [];     
            sef.statusOptions.push( { value: 1 , text: "Present" } )  
            sef.statusOptions.push( { value: 0 , text: "Absent" } )
            sef.statusOptions.push( { value: 2 , text: "Excused" } )
            
            sef.studentOptions = [];    
            store.dispatch(`${Attendance_APP_STORE_MODULE_NAME}/fetchStudents`, { id : value })
            .then(response => { 
              let myval = response.data.data;
              myval.forEach(obj => {
                sef.studentOptions.push( { value: obj.pupId , text: obj.name } )
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

      studentGrab(value){
        var values = this.studentOptions.map(function(o) { return o.value })
        var index = values.indexOf(value) 
        let choiceText = this.studentOptions[index].text

        const sef = this;
        let foundOlder = this.searchValues.find(function(o) { return String(o).trim().replace("\n","") === String(sef.searchValuesCurrent.student).trim().replace("\n","") });
        if (foundOlder){
          const index = this.searchValues.findIndex(obj => String(obj).trim().replace("\n","") === String(sef.searchValuesCurrent.student).trim().replace("\n","") );
          this.searchValues.splice(index, 1)
        }
        
        let found = this.searchValues.find(function(o) { return o === value });
        if (!found){
          this.searchValuesCurrent.student = choiceText;
          this.searchValues.push(choiceText);
        }       
      },

      showModal() {
        this.$refs['my-modal-add-obs'].show()
      },
      hideModal() {
        this.$refs['my-modal-add-obs'].hide()
      },
      triggerModal(id, student){
        console.log("trigger xxx");
        this.modalTitle = "Add Observation to this student: "+ student ;
        this.modalAttendance = id;
        this.showModal();
      },

      addObservations(rowcallid){
        
            const sef = this;          
            store.dispatch( `${this.Attendance_APP_STORE_MODULE_NAME}/updateAttendanceRowcall`, { observation: this.addObservation, id: rowcallid  } )
            .then(response => { 
                sef.modalTitle = "";
                      
                sef.$toast({
                  component: ToastificationContent,
                  props: {
                  title: 'Observation has been added.',
                  icon: 'AlertTriangleIcon',
                  variant: 'success'
                },
                });  

                sef.hideModal();
                sef.addObservation = "";

                sef.handleChange();

            }).catch((exception) => { 
                sef.modalTitle = "";              
                
                sef.$toast({
                  component: ToastificationContent,
                  props: {
                    title: 'There is an issue with the adding of observation.',
                    icon: 'AlertTriangleIcon',
                    variant: 'danger'
                  }
                }); 
                sef.addObservation = "";
                sef.hideModal();

		        }); 
         
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
  