<template>

    <div>  
        <div class="row">

          <b-col lg="3" sm="6">
            <statistic-card-horizontal
              icon="UsersIcon"
              color="primary"
              :statistic=" totalClassrooms === undefined ? 0 : totalClassrooms "
              statistic-title="Total"
            />
          </b-col>

          <b-col lg="3" sm="6">
            <statistic-card-horizontal
              icon="UserCheckIcon"
              color="success"
              :statistic="
                totalActiveClassrooms === undefined ? 0 :totalActiveClassrooms
              "
              statistic-title="Primary"
            />
          </b-col>

          <b-col lg="3" sm="6">
            <statistic-card-horizontal
              icon="UserCheckIcon"
              color="danger"
              :statistic="
                totalInactiveClassrooms === undefined ? 0 : totalInactiveClassrooms
              "
              statistic-title="JSS"
            />
          </b-col>

           <b-col lg="3" sm="6">
            <statistic-card-horizontal
              icon="UserCheckIcon"
              color="success"
              :statistic="
                totalActiveClassrooms === undefined ? 0 :totalActiveClassrooms
              "
              statistic-title="SSS"
            />
          </b-col>

          <b-col lg="3" sm="6">
            <statistic-card-horizontal
              icon="UserCheckIcon"
              color="danger"
              :statistic="
                totalInactiveClassrooms === undefined ? 0 : totalInactiveClassrooms
              "
              statistic-title="UnDeployed Secondary"
            />
          </b-col>

          <b-col lg="3" sm="6">
            <statistic-card-horizontal
              icon="UserCheckIcon"
              color="success"
              :statistic="
                totalInactiveClassrooms === undefined ? 0 : totalInactiveClassrooms
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

                </div>
              </b-col>
            </b-row>
    
          </div>
    
          <b-table
            ref="refClassroomListTable"
            class="position-relative"
            :items="fetchClassrooms"
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
                <b-dropdown-item :to="{ name: 'classrooms-home-view', params: { id: data.item.clsId } }">
                  <feather-icon icon="FileTextIcon" />
                  <span class="align-middle ml-50">View Details</span>
                </b-dropdown-item>
    
                <b-dropdown-item :to="{ name: 'classrooms-home-edit', params: { id: data.item.clsId } }">
                  <feather-icon icon="EditIcon" />
                  <span class="align-middle ml-50">Edit Classroom </span>
                </b-dropdown-item>
                
                <b-dropdown-item :to="{ name: 'schools-home-view', params: { id: data.item.school.schId } }">
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
                  :total-rows="totalClassrooms"
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
  import useClassroomList from './useClassroomList'
  import classroomStoreModule from './classroomStoreModule'
  
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

    data() {
      return {  
        userData: JSON.parse(localStorage.getItem('userData'))
      }
    },

    setup() {
      const { refFormObserver, getValidationState, resetForm } = formValidation(() => {})
      const CLASSROOM_APP_STORE_MODULE_NAME = 'app-classroom';
      const school =  router.currentRoute.params.school ? router.currentRoute.params.school : null;
  
      // Register module
      if (!store.hasModule(CLASSROOM_APP_STORE_MODULE_NAME)) store.registerModule(CLASSROOM_APP_STORE_MODULE_NAME, classroomStoreModule)
  
      // UnRegister on leave
      onUnmounted(() => {
        if (store.hasModule(CLASSROOM_APP_STORE_MODULE_NAME)) store.unregisterModule(CLASSROOM_APP_STORE_MODULE_NAME)
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
        fetchClassrooms,
        tableColumns,
        perPage,
        currentPage,
        
        totalClassrooms,
        totalActiveClassrooms,
        totalInactiveClassrooms,

        dataMeta,
        perPageOptions,
        searchQuery,
        sortBy,
        isSortDirDesc,
        refClassroomListTable,
        refetchData,
        handlePageChange,
        filters,

        // UI       
        resolveUserStatusVariant

      } = useClassroomList( school );

      if( findIfPropisPresent || findIfTeacherisPresent || findIfPrinisPresent ){
          filters.value.schoolid = (findIfPrinisPresent || findIfTeacherisPresent) && teacherData.value ? teacherData.value.school.schId : null;
          filters.value.schoolgroup = (findIfPropisPresent) && teacherData.value ? teacherData.value.school.owner.id : null;
      }
  
      return {
        // Sidebar
        isSearchSchoolSidebarActive,
  
        fetchClassrooms,
        tableColumns,
        perPage,
        currentPage,

        totalClassrooms,
        totalActiveClassrooms,
        totalInactiveClassrooms,

        dataMeta,
        perPageOptions,
        searchQuery,
        sortBy,
        isSortDirDesc,
        refClassroomListTable,

        refetchData,
        handlePageChange,
        resetForm,
        filters,
  
        // UI
        resolveUserStatusVariant
      
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
  