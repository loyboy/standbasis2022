<template>

    <!-- Table Container Card -->
    <b-card-code title="Events in your School">
  
      <div class="mx-2 my-2">
  
        <!-- Table Top -->
        <b-row>
  
          <!-- Per Page -->
          <b-col
            cols="12"
            md="6"
            class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
          >
            <label>Entries</label>
            <v-select
              v-model="perPage"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="perPageOptions"
              :clearable="false"
              class="per-page-selector d-inline-block ml-50 mr-1"
            />           
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
                :disabled="searchStatus"
                placeholder="Search..."
              />

             <v-select
                v-model="moduleFilter"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="moduleOptions"
                :disabled="true"                
                class="Event-filter-select"
                placeholder="Select Module to Search For"
              >
                <template #selected-option="{ label }">
                  <span class="text-truncate overflow-hidden">
                    {{ label }}
                  </span>
                </template>
              </v-select>
            </div>
          </b-col>
        </b-row>
  
      </div>
  
      <b-table
        ref="refEventListTable"
        :items="fetchEvents"
        responsive
        :fields="tableColumns"
        primary-key="id"
        :sort-by.sync="sortBy"
        show-empty
        empty-text="No matching records found"
        :sort-desc.sync="isSortDirDesc"
        class="position-relative"
      >
  
        <template #head(action)>
          <feather-icon
            icon="TrendingUpIcon"
            class="mx-auto"
          />
        </template>
  
        <!-- Column: Id -->
        <template #cell(eventId)="data">
          <b-link
            :to="{ name: 'apps-Event-preview', params: { id: data.item.id }}"
            class="font-weight-bold"
          >
            #{{ data.value }}
          </b-link>
          #{{ data.item.eventId }}
        </template>
  
        <!-- Column: Event Status -->
        <template #cell(action)="data">
          <b-avatar
            :id="`Event-row-${data.item.eventId}`"
            size="32"
            :variant="`light-${resolveEventStatusVariantAndIcon(data.item.action).variant}`"
          >
            <feather-icon
              :icon="resolveEventStatusVariantAndIcon(data.item.action).icon"
            />
          </b-avatar>
          <b-tooltip
            :target="`Event-row-${data.item.eventId}`"
            placement="top"
          >
            <p class="mb-0">
              {{ data.item.action }}
            </p>
            <p class="mb-0">
              Comment: {{ data.item.comment }}
            </p>
            
          </b-tooltip>
        </template>
  
        <!-- Column: Client -->
        <template #cell(user)="data">
          <b-media vertical-align="center">
            <template #aside>
              <b-avatar
                size="32"
                :text="avatarText(data.item.user.role.name)"
                :variant="`light-${resolveClientAvatarVariant(data.item.action)}`"
              />
            </template>
            <span class="font-weight-bold d-block text-nowrap">
              {{ data.item.user.name }}
            </span>
            <small class="text-muted">{{ data.item.user.email }}</small>
          </b-media>
        </template>
  
        <!-- Column: Issued Date -->
        <template #cell(dateofevent)="data">
          <span class="text-nowrap">
            {{ String(data.item.dateofevent).replace(".000+00:00","") }}
          </span>
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
              :total-rows="totalEvents"
              :per-page="perPage"
              first-number
              last-number
              class="mb-0 mt-1 mt-sm-0"
              prev-class="prev-item"
              next-class="next-item"
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

    </b-card-code>
  
  </template>
  
  <script>
  import {
    BCard,
    BRow,
    BCol,
    BFormInput,
    BButton,
    BTable,
    BMedia,
    BAvatar,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,
    BTooltip,
  } from 'bootstrap-vue'
  import { avatarText } from '@core/utils/filter'
  import vSelect from 'vue-select'
  import BCardCode from "@core/components/b-card-code/BCardCode.vue";
  import { onUnmounted, reactive } from '@vue/composition-api'
  import store from '@/store'
  import useEventList from './useEventList'  
  import eventStoreModule from './eventStoreModule'
  
  export default {
    components: {
      BCard,
      BRow,
      BCol,
      BFormInput,
      BButton,
      BTable,
      BMedia,
      BAvatar,
      BLink,
      BBadge,
      BDropdown,
      BDropdownItem,
      BPagination,
      BTooltip,
      BCardCode,
      vSelect,
    },
    props: {
      teacherId: {
        type: Number,
        required: false
      },
      schoolId: {
        type: Number,
        required: false
      },
      schoolgroupId: {
        type: Number,
        required: false
      },
      username: {
        type: String,
        required: false
      },
      module: {
        type: String,
        required: false
      } 
    },
    setup(props) {
      const EVENT_APP_STORE_MODULE_NAME = 'app-event'
      const state = reactive(props);
  
      // Register module
      if (!store.hasModule(EVENT_APP_STORE_MODULE_NAME))
        store.registerModule(EVENT_APP_STORE_MODULE_NAME, eventStoreModule)
  
      // UnRegister on leave
      onUnmounted(() => {
        if (store.hasModule(EVENT_APP_STORE_MODULE_NAME)) store.unregisterModule(EVENT_APP_STORE_MODULE_NAME)
      })
  
      const moduleOptions = ['school', 'schoolgroup', 'teacher', 'student', 'user', 'timetable', 'lessonnoteactivity', 'attendance' ,'lessonnote', 'enrollment', 'classstream', 'calendar', 'attendanceactivity' , 'attendancemanagement' , 'assessment' ]
  
      const {
        fetchEvents,
        tableColumns,
        perPage,
        currentPage,
        totalEvents,
        dataMeta,
        perPageOptions,
        searchQuery,
        sortBy,
        isSortDirDesc,
        refEventListTable,

        teacherVal,
        schoolVal,
        schoolgroupVal,
  
        refetchData,
        moduleFilter,
        searchStatus,
  
        resolveEventStatusVariantAndIcon,
        resolveClientAvatarVariant

      } = useEventList()

      console.log("Event list Teacher seen : " + state.teacherId)
      console.log("Event list School seen : " + state.schoolId)
      
      teacherVal.value = state.teacherId
      schoolVal.value = state.schoolId
      schoolgroupVal.value = state.schoolgroupId
      searchQuery.value = (state.username != null && state.username != "") ? state.username : "";
      searchStatus.value = (state.username != null && state.username != "") ? true : false;
      moduleFilter.value = (state.module != null && state.module != "") ? state.module : null;   
      
      return {
        fetchEvents,
        tableColumns,
        perPage,
        currentPage,
        totalEvents,
        dataMeta,
        perPageOptions,
        searchQuery,
        sortBy,
        isSortDirDesc,
        refEventListTable,
        
        teacherVal,
        schoolVal,
        schoolgroupVal,

        refetchData,
        moduleFilter,
        searchStatus,
        moduleOptions,
  
        avatarText,
        resolveEventStatusVariantAndIcon,
        resolveClientAvatarVariant
      }
    },
  }
  </script>
  
  <style lang="scss" scoped>
  .per-page-selector {
    width: 90px;
  }
  
  .Event-filter-select {
    min-width: 190px;
  
    ::v-deep .vs__selected-options {
      flex-wrap: nowrap;
    }
  
    ::v-deep .vs__selected {
      width: 100px;
    }
  }
  </style>
  
  <style lang="scss">
  @import '~@core/scss/vue/libs/vue-select.scss';
  </style>
  