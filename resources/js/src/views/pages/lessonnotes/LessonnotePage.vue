<template>
    <div>  
        <div class="row">

          <b-sidebar
            id="add-new-user-sidebar-2"
            :visible="isManagementSidebarActive"
            bg-variant="white"
            sidebar-class="sidebar-md"
            shadow
            backdrop
            no-header
            right
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
                <h5 class="mb-0">Management Details</h5>

                <feather-icon
                  class="ml-1 cursor-pointer"
                  icon="XIcon"
                  size="16"
                  @click="isManagementSidebarActive = false"
                />
              </div>

              <b-form
                class="p-2"
                @reset.prevent="resetForm"
              >
                  <b-row>

                    <b-col cols="12" md="12" >
                      <b-form-group label="Quality Percentage Performance" label-for="quality">
                        <b-form-input v-model="quality"  type="number" disabled></b-form-input>
                      </b-form-group>
                    </b-col>

                    <b-col cols="12" md="12" >
                      <b-form-group label="Classwork Percentage Performance" label-for="sub_perf_classwork">
                        <b-form-input v-model="sub_perf_classwork" type="number" disabled></b-form-input>
                      </b-form-group>                    
                    </b-col>                 

                    <b-col cols="12" md="12">
                      <b-form-group label="Homework Percentage Performance" label-for="sub_perf_homework">
                        <b-form-input v-model="sub_perf_homework" type="number" disabled></b-form-input>
                      </b-form-group>                    
                    </b-col>

                    <b-col cols="12" md="12">
                      <b-form-group label="Test Percentage Performance" label-for="sub_perf_test">
                        <b-form-input v-model="sub_perf_test" type="number" disabled></b-form-input>
                      </b-form-group>                    
                    </b-col>

                    <b-col cols="12" md="12">
                      <b-form-group label="Total Average Percentage Performance" label-for="sub_perf_test">
                        <b-form-input v-model="score" type="number" disabled></b-form-input>
                      </b-form-group>                    
                    </b-col>
                  
                  </b-row>

                  <b-row class="filter-padding">               
                    <b-button
                      type="button"
                      class="mr-2 col-md-12"
                      variant="dark"
                      @click="isManagementSidebarActive = false"
                    >
                      Cancel
                    </b-button>
                  </b-row>

              </b-form>

            </template>
          </b-sidebar>

          <b-sidebar
            id="add-new-user-sidebar"
            :visible="isLessonnoteSidebarActive"
            bg-variant="white"
            sidebar-class="sidebar-md"
            shadow
            backdrop
            no-header
            right
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
                  @click="isLessonnoteSidebarActive = false"
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
                        v-model="filters.classIndex"
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
                    <b-form-group label="Select a Week" label-for="week">
                      <b-form-select
                        v-model="filters.week"
                        :options="weekOptions"
                        @change="weekGrab"
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
              :statistic=" totalLessonnotes === undefined ? 0 : totalLessonnotes "
              statistic-title="Total Lessonnotes"
            />
          </b-col>

          <b-col lg="4" sm="6">
            <statistic-card-horizontal
              icon="UserCheckIcon"
              color="success"
              :statistic="
                totalActiveLessonnotes === undefined ? 0 :totalActiveLessonnotes
              "
              statistic-title="Done Lessonnotes"
            />
          </b-col>

          <b-col lg="4" sm="6">
            <statistic-card-horizontal
              icon="UserMinusIcon"
              color="danger"
              :statistic="
                totalInactiveLessonnotes === undefined ? 0 : totalInactiveLessonnotes
              "
              statistic-title="Not Done Lessonnotes"
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
                    @click="isLessonnoteSidebarActive = true"
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
            ref="refLessonnoteListTable"
            class="position-relative"
            :items="LessonnoteItems"
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
             <template #cell(submission)="data">
               <div>
                {{ String( data.item.submission ).replace(".000+00:00","") }}
               </div>               
             </template>

              <!-- Column: Status -->
              <template #cell(status)="data">
                <b-badge
                pill
                :variant="`light-${resolveLessonnotestatusVariant( data.item.resubmission != null ? 2 : data.item.revert != null ? -1 : data.item.approval != null ? 1 : data.item.closure != null ? 3 : data.item.launch != null ? 0 : 2  )}`"
                class="text-capitalize"
                >      
                   {{  data.item.submission != null && data.item.approval == null ? "Submitted" : data.item.resubmission != null ? "Re-Submitted" : data.item.revert != null ? "Reverted" : data.item.approval != null ? "Approved" : data.item.closure != null ? "Closed" : data.item.launch != null ? "Launched" : "Queued" }}
                </b-badge>
             </template>

              <!-- Column: Class -->
              <template #cell(class_index)="data">
               <div>
                <b> {{   data.item.class_index === 7 ? "JSS1" : data.item.class_index === 8 ? "JSS2" : data.item.class_index === 9 ? "JSS3" : data.item.class_index === 10 ? "SS1" : data.item.class_index === 11 ? "SS2" : data.item.class_index === 12 ? "SS3" : "Nil"  }} </b>
               </div>               
             </template>

            <!-- Column: Done -->
            <template #cell(calendar.term)="data">
              <b-badge
                pill
                :variant="`light-${resolveLessonnotestatusVariant(data.item.calendar.term)}`"
                class="text-capitalize"
              >
                {{ data.item.calendar.term === 1 ? "1st Term" : data.item.calendar.term === 2 ? "2nd Term" : data.item.calendar.term === 3 ? "3rd Term" : " "  }}
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

                <b-dropdown-item :to="{ name: 'lessonnotes-home-view', params: { id: data.item.lessonnoteId } }">
                  <feather-icon icon="FileTextIcon" />
                  <span class="align-middle ml-50">View Details</span>
                </b-dropdown-item>   

                <b-dropdown-item :to="{ name: 'lessonnotes-student-home', params: { id: data.item.lessonnoteId } }">
                  <feather-icon icon="FileTextIcon" />
                  <span class="align-middle ml-50">View Student Performance</span>
                </b-dropdown-item> 

                <b-dropdown-item @click="isManagementSidebarActive = true; loadManagement(data.item); ">
                  <feather-icon icon="FileTextIcon" />
                  <span class="align-middle ml-50">View Management Details</span>
                </b-dropdown-item>
                
                <b-dropdown-item :to="{ name: 'lessonnotes-activity-home', params: { id: data.item.lessonnoteId } }">
                  <feather-icon icon="FileTextIcon" />
                  <span class="align-middle ml-50"> View Activities </span>
                </b-dropdown-item> 

                <b-dropdown-item @click="openfile(data.item.lessonnoteId, data.item._file)" >
                  <feather-icon icon="FileTextIcon"  />
                  <span class="align-middle ml-50">View Lessonnote File</span>
                </b-dropdown-item>  
                
                <b-dropdown-item  @click= " triggerApprove( data.item.title , data.item.lessonnoteId, data.item.teacher.teaId  ) "   >
                  <feather-icon icon="FileTextIcon" />
                  <span class="align-middle ml-50">Approve lessonnote</span>
                </b-dropdown-item>   

                <b-dropdown-item @click= " triggerDisapprove( data.item.title, data.item.lessonnoteId  ) "   >
                  <feather-icon icon="FileTextIcon" />
                  <span class="align-middle ml-50">Revert lessonnote</span>
                </b-dropdown-item>   
                
                <b-dropdown-item :to="{ name: 'schools-home-view', params: { id: data.item.teacher.school.schId } }">
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
                  :total-rows="totalLessonnotes"
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

        <!-- modal Approve -->
        <b-modal
          ref="my-modal-approve-lessonnote"
          hide-footer
          :title="modalTitle"
          no-close-on-backdrop
          content-class="shadow"
        >      
          <b-form>      

            <b-form-group
              label="Choose The Grammar Percentage"
              label-for="grammar-select"
            >             
              <b-form-select
                        v-model="grammar"
                        :options="grammarOptions"
                        id="grammar-select"
                      />
            </b-form-group>
            <b-form-group
              label="Choose The Arrangement Percentage"
              label-for="arrangement-select"
            >
              <b-form-select
                        id="arrangement-select"
                        v-model="arrangement"
                        :options="arrangementOptions"                       
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
            @click="principalActionApprove( LessonnotePicked )"
          >
            Approve Lessonnote
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
    BModal,
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
  import Ripple from 'vue-ripple-directive'
  import StatisticCardHorizontal from "@core/components/statistics-cards/StatisticCardHorizontal.vue";
  import vSelect from 'vue-select'
  //import router from '@/router'
  import store from '@/store'
  import { ref, onUnmounted ,onMounted, watch } from '@vue/composition-api'
  import { $themeConfig } from "@themeConfig";
  //import { avatarText } from '@core/utils/filter'
  import formValidation from '@core/comp-functions/forms/form-validation'
  // Notification
  import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
  import useLessonnoteList from './useLessonnoteList'
  import lessonnoteStoreModule from './lessonnoteStoreModule'
  
  export default {
    components: {
    
      StatisticCardHorizontal,
      BCard,
      BRow,
      BCol,
      BFormInput,
      BFormGroup,
      BModal,
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

    directives: {
      Ripple
    },

    data() {
      
      let teacherOptions = [
        { value: null, text: "Please select Teacher" }
      ]

      let classOptions = [
        { value: null, text: "Please select Class" }
      ]

      let calendarOptions = [
        { value: null, text: "Please select Calendar" }
      ]

      let weekOptions = [
        { value: null, text: "Please select a Week" }
      ]

      let subjectOptions = [
        { value: null, text: "Please select a Subject" }
      ]

      let statusOptions = [
        { value: null, text: "Please select a Status" }
      ]

      let grammarOptions = [
        { value: null, text: "Please select a Grade for Grammar" },
        { value: 10, text: "10%" },
        { value: 20, text: "20%" },
        { value: 30, text: "30%" },
        { value: 40, text: "40%" },
        { value: 50, text: "50%" },
        { value: 60, text: "60%" },
        { value: 70, text: "70%" },
        { value: 80, text: "80%" },
        { value: 90, text: "90%" },
        { value: 100, text: "100%" }
      ]

      let arrangementOptions = [
        { value: null, text: "Please select a Grade for Arrangement" },
        { value: 10, text: "10%" },
        { value: 20, text: "20%" },
        { value: 30, text: "30%" },
        { value: 40, text: "40%" },
        { value: 50, text: "50%" },
        { value: 60, text: "60%" },
        { value: 70, text: "70%" },
        { value: 80, text: "80%" },
        { value: 90, text: "90%" },
        { value: 100, text: "100%" }
      ]

      let modalTitle = "";

      let grammar, arrangement = 0;

      let teacherPicked , LessonnotePicked = null;

      return {  
         quality: "",
         sub_perf_classwork: "",
         sub_perf_homework: "",
         sub_perf_test: "",
         score: "",

         grammar,
         arrangement,

         modalTitle,
         teacherOptions,
         classOptions,
         calendarOptions,
         weekOptions,
         subjectOptions,
         statusOptions,
         grammarOptions,
         arrangementOptions,
         teacherPicked,
         LessonnotePicked,

         searchValuesCurrent: {
            teacher: "nil",
            class: "nil",
            calendar: "nil",
            week: "nil",
            subject: "nil",
            status: "nil"
         }     
      }
    },

    setup() {
      const { refFormObserver, getValidationState, resetForm } = formValidation(() => {})
      const Lessonnote_APP_STORE_MODULE_NAME = 'app-lessonnote';
      const { backendURL } = $themeConfig.app;

      // Register module
      if (!store.hasModule(Lessonnote_APP_STORE_MODULE_NAME)) store.registerModule(Lessonnote_APP_STORE_MODULE_NAME, lessonnoteStoreModule)
  
      // UnRegister on leave
      onUnmounted(() => {
        if (store.hasModule(Lessonnote_APP_STORE_MODULE_NAME)) store.unregisterModule(Lessonnote_APP_STORE_MODULE_NAME)
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
        fetchLessonnotes,
        tableColumns,
        perPage,
        currentPage,
        
        totalLessonnotes,
        totalActiveLessonnotes,
        totalInactiveLessonnotes,

        dataMeta,
        perPageOptions,
        searchQuery,
        sortBy,
        isSortDirDesc,
        refLessonnoteListTable,
        isLessonnoteSidebarActive,
        isManagementSidebarActive,
        isLoading,

        refetchData,
        handlePageChange,
        handleChange,

        // UI       
        resolveLessonnotestatusVariant,

        filters,
        LessonnoteItems,

        searchValues

      } = useLessonnoteList();

      if( findIfPropisPresent || findIfTeacherisPresent || findIfPrinisPresent ){
          filters.value.teacherid = findIfTeacherisPresent && teacherData.value ? teacherData.value.teaId : null;
          filters.value.school = findIfPrinisPresent && teacherData.value ? teacherData.value.school.schId : null;
          filters.value.schoolgroup = (findIfPropisPresent || findIfPrinisPresent || findIfTeacherisPresent) && teacherData.value ? teacherData.value.school.owner.id : null;
      }

      (async function () {
        const resp = await store.dispatch(`${Lessonnote_APP_STORE_MODULE_NAME}/fetchSchools`, { id : filters.value.schoolgroup });
        let myval = resp.data.data;
        myval.forEach(obj => {
          schoolOptions.value.push( { value: obj.schId , text: obj.name } )
        });
      })();

      onMounted(async () => {
        fetchLessonnotes();
        if (!findIfPropisPresent){
           await loadOtherValues( teacherData.value.school.schId );
        }
      })
      
      return {
        // Sidebar
        isLessonnoteSidebarActive,
        isManagementSidebarActive,
        isLoading,
  
        fetchLessonnotes,
        tableColumns,
        perPage,
        currentPage,

        totalLessonnotes,
        totalActiveLessonnotes,
        totalInactiveLessonnotes,

        dataMeta,
        perPageOptions,
        searchQuery,
        sortBy,
        isSortDirDesc,
        refLessonnoteListTable,

        refetchData,
        handlePageChange,
        handleChange,

        resetForm,
  
        // UI
        resolveLessonnotestatusVariant,

        userData,
        schoolOptions,
        
        filters,
        LessonnoteItems,

        searchValues,
        backendURL

      }
    },
    methods: {
      reset(){
         this.isLessonnoteSidebarActive = false;

        this.teacherOptions = [
          { value: null, text: "Please select Teacher" }
        ]

        this.classOptions = [
          { value: null, text: "Please select Class Type" }
        ]

        this.calendarOptions = [
          { value: null, text: "Please select Calendar" }
        ]

        this.weekOptions = [
          { value: null, text: "Please select a Week" }
        ]

        this.subjectOptions = [
          { value: null, text: "Please select a Subject" }
        ]

        this.statusOptions = [
          { value: null, text: "Please select a Status" }
        ]

         this.searchValuesCurrent.teacher = ""
         this.searchValuesCurrent.class = ""
         this.searchValuesCurrent.calendar = ""
         this.searchValuesCurrent.subject = ""
         this.searchValuesCurrent.week = ""
         this.searchValuesCurrent.status = ""

         this.searchValues = []

         this.filters.schoolId = null;
         this.filters.classIndex = null;
         this.filters.teacherId = null;
         this.filters.calendarId = null;
         this.filters.subjectId = null;
         this.filters.week = null;
         this.filters.status = null;
         this.filters.dateFrom = null;
         this.filters.dateTo = null;

         this.fetchLessonnotes();
      },
      async loadOtherValues(value){
            this.searchValues = [];

            this.filters.classIndex = null; 
            this.filters.teacherId = null;
            this.filters.calendarId = null;
            this.filters.subjectId = null;
            this.filters.week = null;
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

            const Lessonnote_APP_STORE_MODULE_NAME = 'app-lessonnote';
            const sef = this;     
            sef.teacherOptions = [];     
            store.dispatch(`${Lessonnote_APP_STORE_MODULE_NAME}/fetchTeachers`, { id : value })
            .then(response => { 
              let myval = response.data.data;
              myval.forEach(obj => {
                sef.teacherOptions.push( { value: obj.teaId , text: obj.fname + ' ' + obj.lname} )
              });            
            });

            sef.subjectOptions = [];     
            store.dispatch(`${Lessonnote_APP_STORE_MODULE_NAME}/fetchSubjects`)
            .then(response => { 
              let myval = response.data.data;
              myval.forEach(obj => {
                sef.subjectOptions.push( { value: obj.subId , text: obj.name } )
              });            
            });

              sef.classOptions = [];     
              sef.classOptions.push( { value: 7 , text: "JSS1" } )            
              sef.classOptions.push( { value: 8 , text: "JSS2" } )
              sef.classOptions.push( { value: 9 , text: "JSS3" } )
              sef.classOptions.push( { value: 10 , text: "SS1" } )  
              sef.classOptions.push( { value: 11 , text: "SS2" } )
              sef.classOptions.push( { value: 12 , text: "SS3" } )


              sef.weekOptions = [];     
              sef.weekOptions.push( { value: 1 , text: "Week 1" } )  
              sef.weekOptions.push( { value: 2 , text: "Week 2" } ) 
              sef.weekOptions.push( { value: 3, text: "Week 3" } ) 
              sef.weekOptions.push( { value: 4, text: "Week 4" } ) 
              sef.weekOptions.push( { value: 5, text: "Week 5" } ) 
              sef.weekOptions.push( { value: 6, text: "Week 6" } )
              sef.weekOptions.push( { value: 7, text: "Week 7" } ) 
              sef.weekOptions.push( { value: 8, text: "Week 8" } )
              sef.weekOptions.push( { value: 9, text: "Week 9" } )
              sef.weekOptions.push( { value: 10, text: "Week 10" } )
              sef.weekOptions.push( { value: 11, text: "Week 11" } )
              sef.weekOptions.push( { value: 12, text: "Week 12" } )

              sef.statusOptions = [];     
              sef.statusOptions.push( { value: "queued" , text: "Queued" } )  
              sef.statusOptions.push( { value: "submitted" , text: "Submitted" } )
              sef.statusOptions.push( { value: "re-submitted" , text: "Re-Submitted" } )
              sef.statusOptions.push( { value: "revert" , text: "Revert" } ) 
              sef.statusOptions.push( { value: "approved" , text: "Approved" } ) 

            /*store.dispatch(`${Lessonnote_APP_STORE_MODULE_NAME}/fetchClassrooms`, { id : value })
            .then(response => { 
              let myval = response.data.data;
              myval.forEach(obj => {
                sef.classOptions.push( { value: obj.clsId , text: obj.title + ' ' + obj.ext} )
              });         
            });*/

            sef.calendarOptions = [];     
            store.dispatch(`${Lessonnote_APP_STORE_MODULE_NAME}/fetchCalendars`, { id : value })
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

         // console.log( "Teacher Grabbed : " + JSON.stringify(this.searchValues) )
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
          this.searchValues.value.splice(index, 1)
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

      weekGrab(value){
        var values = this.weekOptions.map(function(o) { return o.value })
        var index = values.indexOf(value) 
        let choiceText = this.weekOptions[index].text

        const sef = this;
        let foundOlder = this.searchValues.find(function(o) { return String(o).trim().replace("\n","") === String(sef.searchValuesCurrent.week).trim().replace("\n","") });
        if (foundOlder){
          const index = this.searchValues.findIndex(obj => String(obj).trim().replace("\n","") === String(sef.searchValuesCurrent.week).trim().replace("\n","") );
          this.searchValues.splice(index, 1)
        }
        
        let found = this.searchValues.find(function(o) { return o === value });
        if (!found){
          this.searchValuesCurrent.week = choiceText;
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

      principalActionApprove(id){
         if (this.grammar == 0 || this.grammar == null){
          alert("Please pick the score Grammar for this lessonnote ");
          return;
         }

         if (this.arrangement == 0 || this.arrangement == null){
          alert("Please pick the score Arrangement for this lessonnote ");
          return;
         }
         const Lessonnote_APP_STORE_MODULE_NAME = 'app-lessonnote';
         
            const sef = this;          
            store.dispatch( `${Lessonnote_APP_STORE_MODULE_NAME}/updateLessonnoteManagement`, { lessonnote: { arrangement: this.arrangement, grammar: this.grammar, action: "approval", lessonnoteId: id  },  management: { action : "approved" }, activity: { action: "approved", owner: this.teacherPicked  } } )
            .then(response => { 
                sef.modalTitle = "";
                sef.grammar = 0;
                sef.arrangement = 0;
                sef.teacherPicked = null;
                sef.LessonnotePicked = null;
                sef.$toast({
                  component: ToastificationContent,
                  props: {
                  title: 'Lessonnote has been approved.',
                  icon: 'AlertTriangleIcon',
                  variant: 'success',
                  },
                });  
            }).catch((exception) => { 
                sef.modalTitle = "";
                sef.grammar = 0;
                sef.arrangement = 0;
                sef.teacherPicked = null;
                sef.LessonnotePicked = null;
                sef.$toast({
                  component: ToastificationContent,
                  props: {
                    title: 'There is an issue with the approval process',
                    icon: 'AlertTriangleIcon',
                    variant: 'danger'
                  }
                }); 
		        }); 
         
      },

      principalActionDisapprove(id, name){
         const Lessonnote_APP_STORE_MODULE_NAME = 'app-lessonnote';
         let confirmQuery = window.prompt("Type in a comment to add to this Query for this Lessonnote with Name: " + name)
         if (confirmQuery){
            const sef = this;          
            store.dispatch( `${Lessonnote_APP_STORE_MODULE_NAME}/updateLessonnoteManagement`, { lessonnote: { action: "revert", lessonnoteId: id }, management: { action : "revert" }, activity: { action: "revert", comment_query: confirmQuery, owner: this.teacherPicked } } )
            .then(response => { 
                sef.teacherPicked = null;
                sef.LessonnotePicked = null;
                sef.$toast({
                  component: ToastificationContent,
                  props: {
                  title: 'Lessonnote has been reverted.',
                  icon: 'AlertTriangleIcon',
                  variant: 'warning'
                  },
                });  
                sef.fetchLessonnotes();
            });
         }
         else {
            const sef = this;          
            store.dispatch( `${Lessonnote_APP_STORE_MODULE_NAME}/updateLessonnoteManagement`, { lessonnote: { action: "revert", lessonnoteId: id }, management: { action : "revert" }, activity: { action: "revert", comment_query: "No comment", owner: this.teacherPicked  } } )
            .then(response => { 
                sef.teacherPicked = null;
                sef.LessonnotePicked = null;
                sef.$toast({
                  component: ToastificationContent,
                  props: {
                  title: 'Lessonnote has been queried but without any comments.',
                  icon: 'AlertTriangleIcon',
                  variant: 'warning'
                  },
                }); 
                sef.fetchLessonnotes(); 
            }).catch((exception) => { 
                sef.teacherPicked = null;
                sef.LessonnotePicked = null;
                sef.$toast({
                  component: ToastificationContent,
                  props: {
                    title: 'There is an issue with the disapproval process',
                    icon: 'AlertTriangleIcon',
                    variant: 'danger'
                  }
                });
            }); 
         }
      
      },

      openfile(id, name){          
        window.open( this.backendURL + "/teacher-lessonnote/" + id + "/" + name , '_blank');
      },

      showModal() {
        this.$refs['my-modal-approve-lessonnote'].show()
      },
      hideModal() {
        this.$refs['my-modal-approve-lessonnote'].hide()
      },
      triggerApprove(name, lsn, teacher){
        this.modalTitle = "Approve this Lessonnote: "+ name;
        this.teacherPicked = teacher;
        this.LessonnotePicked = lsn;
        this.showModal();
      },
      triggerDisapprove(name, lsn){
        principalActionDisapprove(lsn, name)       
      },
      loadManagement(item){
            const sef = this;    
            const Lessonnote_APP_STORE_MODULE_NAME = 'app-lessonnote';      
            store.dispatch(`${Lessonnote_APP_STORE_MODULE_NAME}/fetchLessonnoteManagement`, { id : item.lessonnoteId })
            .then(response => { 
              let myval = response.data.data;
              sef.quality = myval.quality;
              sef.sub_perf_classwork = myval.sub_perf_homework;
              sef.sub_perf_test = myval.sub_perf_test;
              sef.score = myval.score;
            });
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
  