<template>

    <div v-if=" userData.role === 'proprietor' || userData.role === 'admin' " >
  
        <div class="row">
          <b-col lg="4" sm="6">
            <statistic-card-horizontal
              icon="UsersIcon"
              color="primary"
              :statistic=" totalSchools === undefined ? 0 : totalSchools "
              statistic-title="Total"
            />
          </b-col>
          <b-col lg="4" sm="6">
            <statistic-card-horizontal
              icon="UserCheckIcon"
              color="success"
              :statistic="
                totalSecondarySchools === undefined ? 0 : totalSecondarySchools 
              "
              statistic-title="Secondary"
            />
          </b-col>
          <b-col lg="4" sm="6">
            <statistic-card-horizontal
              icon="UserCheckIcon"
              color="success"
              :statistic="totalPrimarySchools === undefined ? 0 : totalPrimarySchools"
              statistic-title="Junior Secondary"
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

                </div>
              </b-col>
            </b-row>
    
          </div>
    
          <b-table
            ref="refSchoolListTable"
            class="position-relative"
            :items="fetchSchools"
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
    
           <!-- Column: Status -->
            <template #cell(status)="data">
              <b-badge
                pill
                :variant="`light-${resolveUserStatusVariant(data.item.status)}`"
                class="text-capitalize"
              >
                {{ data.item.status === 1 ? "Active" : data.item.status === 0 ? "Inactive" : "Deleted"  }}
              </b-badge>
            </template>       

            <!-- Column: Dashboard -->
            <template #cell(dashboarduser)="data">
              <b-badge
                pill
                :variant="`light-${resolveDashboardVariant(data.item.dashboarduser)}`"
                class="text-capitalize"
              >
                {{ data.item.dashboarduser === 1 ? "Active" : data.item.dashboarduser === 0 ? "Inactive" : data.item.dashboarduser === null ? "Unspecified" : "Inactive"  }}
              </b-badge>
            </template>

              <!-- Column: Password -->
            <template #cell(passwordchange)="data">
              <b-badge
                pill
                :variant="`light-${resolvePasswordVariant(data.item.passwordchange)}`"
                class="text-capitalize"
              >
                {{ data.item.dashboarduser === 1 && data.item.passwordchange === true ? "Changed" : data.item.dashboarduser === 1 && data.item.passwordchange === false ? "Not Yet" : "Not A Dashboard User Yet"  }}
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
                <b-dropdown-item :to="{ name: 'schools-home-view', params: { id: data.item.schId } }">
                  <feather-icon icon="FileTextIcon" />
                  <span class="align-middle ml-50">View Details</span>
                </b-dropdown-item>
    
                <b-dropdown-item v-if=" userData.role !== 'proprietor' " :to="{ name: 'schools-home-edit', params: { id: data.item.schId } }">
                  <feather-icon icon="EditIcon" />
                  <span class="align-middle ml-50"> Edit School </span>
                </b-dropdown-item>
    
                <b-dropdown-item :to="{ name: 'teachers-home', params: { school: data.item.schId } }">
                  <feather-icon icon="Maximize2Icon" />
                  <span class="align-middle ml-50">View Teachers</span>
                </b-dropdown-item>

                <b-dropdown-item :to="{ name: 'enrollments-home', params: { school: data.item.schId } }">
                  <feather-icon icon="Maximize2Icon" />
                  <span class="align-middle ml-50">View Enrollments</span>
                </b-dropdown-item>

                <b-dropdown-item :to="{ name: 'classrooms-home', params: { school: data.item.schId } }">
                  <feather-icon icon="Maximize2Icon" />
                  <span class="align-middle ml-50">View Classrooms</span>
                </b-dropdown-item>

                <b-dropdown-item :to="{ name: 'calendars-home', params: { school: data.item.schId } }">
                  <feather-icon icon="CalendarIcon" />
                  <span class="align-middle ml-50">View Calendar</span>
                </b-dropdown-item>

              <!--  <b-dropdown-item :to="{ name: 'proprietor-view', params: { id: data.item.schId } }">
                  <feather-icon icon="SunIcon" />
                  <span class="align-middle ml-50">View Proprietor Details</span>
                </b-dropdown-item>-->

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
                  :total-rows="totalSchools"
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
  import router from '@/router'
  import store from '@/store'
  import { ref, onUnmounted } from '@vue/composition-api'
  import { avatarText } from '@core/utils/filter'
  import formValidation from '@core/comp-functions/forms/form-validation'

  import useSchoolList from './useSchoolList'
  import schoolStoreModule from './schoolStoreModule'

  
  export default {
    components: {
    
      StatisticCardHorizontal,
      BCard,
      BRow,
      BCol,
      BFormInput,
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
    setup() {
      const { refFormObserver, getValidationState, resetForm } = formValidation(() => {})
      const SCHOOL_APP_STORE_MODULE_NAME = 'app-school';
      const schoolOwner =  router.currentRoute.params.owner ? router.currentRoute.params.owner : null;
  
      // Register module
      if (!store.hasModule(SCHOOL_APP_STORE_MODULE_NAME)) store.registerModule(SCHOOL_APP_STORE_MODULE_NAME, schoolStoreModule)
  
      // UnRegister on leave
      onUnmounted(() => {
        if (store.hasModule(SCHOOL_APP_STORE_MODULE_NAME)) store.unregisterModule(SCHOOL_APP_STORE_MODULE_NAME)
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
  
      const {
        fetchSchools,
        tableColumns,
        perPage,
        currentPage,
        totalSchools,
        totalSecondarySchools,
        totalPrimarySchools,
        
        dataMeta,
        perPageOptions,
        searchQuery,
        sortBy,
        isSortDirDesc,
        refSchoolListTable,
        refetchData, 
        handlePageChange,
        filters,

        // UI       
        resolveUserStatusVariant,
        resolveDashboardVariant,
        resolvePasswordVariant,

      } = useSchoolList( schoolOwner );

      if( findIfPropisPresent || findIfTeacherisPresent || findIfPrinisPresent ){
          //filters.value.schoolgroup = findIfTeacherisPresent && teacherData.value ? null : null;
          filters.value.schoolid = findIfPrinisPresent && teacherData.value ? teacherData.value.school.schId : null;
          filters.value.schoolgroup = (findIfPropisPresent) && teacherData.value ? teacherData.value.school.owner.id : null;
      }
  
      return {
        // Sidebar
        isSearchSchoolSidebarActive,
        userData,
  
        fetchSchools,
        tableColumns,
        perPage,
        currentPage,
        totalSchools,
        totalSecondarySchools,
        totalPrimarySchools,
        
        dataMeta,
        perPageOptions,
        searchQuery,
        sortBy,
        isSortDirDesc,
        refSchoolListTable,
        refetchData,
        handlePageChange,
        resetForm,
        filters,
  
        // UI
        resolveUserStatusVariant,
        resolveDashboardVariant,
        resolvePasswordVariant
      
      }
    },
    methods: {
      handleSubmit() { 

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
  