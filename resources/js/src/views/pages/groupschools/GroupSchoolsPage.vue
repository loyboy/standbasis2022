<template>

  <div>

  <div class="row">
    <b-col lg="12" sm="6">
      <statistic-card-horizontal
        icon="UsersIcon"
        color="primary"
        :statistic=" totalGroupSchools === undefined ? 0 : totalGroupSchools "
        statistic-title="Total Group of Schools"
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

            </div>
          </b-col>
        </b-row>

      </div>

      <b-table
        ref="refSchoolGroupListTable"
        class="position-relative"
        :items="fetchSchoolGroups"
        responsive
        :fields="tableColumns"
        primary-key="id"
        :sort-by.sync="sortBy"
        show-empty
        empty-text="No matching records found"
        :sort-desc.sync="isSortDirDesc"
      >

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
            <b-dropdown-item :to="{ name: 'groupschools-home-view', params: { id: data.item.id } }">
              <feather-icon icon="FileTextIcon" />
              <span class="align-middle ml-50">View Details</span>
            </b-dropdown-item>

            <b-dropdown-item :to="{ name: 'groupschools-home-edit', params: { id: data.item.id } }">
              <feather-icon icon="EditIcon" />
              <span class="align-middle ml-50">Edit SchoolGroup </span>
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
              :total-rows="totalGroupSchools"
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
import store from '@/store'
import { ref, onUnmounted } from '@vue/composition-api'
import { avatarText } from '@core/utils/filter'
import formValidation from '@core/comp-functions/forms/form-validation'

import useGroupSchoolList from './useGroupSchoolList'
import groupschoolStoreModule from './groupschoolStoreModule'


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
    const SCHOOLGROUP_APP_STORE_MODULE_NAME = 'app-schoolgroup'

    // Register module
    if (!store.hasModule(SCHOOLGROUP_APP_STORE_MODULE_NAME)) store.registerModule(SCHOOLGROUP_APP_STORE_MODULE_NAME, groupschoolStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(SCHOOLGROUP_APP_STORE_MODULE_NAME)) store.unregisterModule(SCHOOLGROUP_APP_STORE_MODULE_NAME)
    })

    const isSearchSchoolGroupSidebarActive = ref(false)

    const {
      fetchSchoolGroups,
      handlePageChange,
      totalGroupSchools,
  
      tableColumns,
      perPage,
      currentPage,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refSchoolGroupListTable,

      resolveUserStatusVariant,
      refetchData

    } = useGroupSchoolList()

    return {
      // Sidebar
      isSearchSchoolGroupSidebarActive,

      fetchSchoolGroups,
      tableColumns,
      perPage,
      currentPage,
      totalGroupSchools,
     
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refSchoolGroupListTable,
      refetchData,
      handlePageChange,

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
