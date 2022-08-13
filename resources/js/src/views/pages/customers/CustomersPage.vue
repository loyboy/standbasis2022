<template>
  <div class="rows">
    <b-sidebar
      id="add-new-user-sidebar"
      :visible="isAddNewUserSidebarActive"
      bg-variant="white"
      sidebar-class="sidebar-lg"
      shadow
      backdrop
      no-header
      right
    >
      <template>
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
          <h5 class="mb-0">Advance Filter</h5>

          <feather-icon
            class="ml-1 cursor-pointer"
            icon="XIcon"
            size="16"
            @click="isAddNewUserSidebarActive = false"
          />
        </div>
        <b-form
          class="p-2"
          @submit.prevent="handleSubmit()"
          @reset.prevent="resetForm"
        >
          <b-row>
            <b-col cols="12" md="12">
              <b-form-group label="Select status" label-for="status">
                <b-form-select
                  v-model="selectedStatus"
                  :options="statusOptions"
                />
              </b-form-group>
            </b-col>
            <b-col cols="12" md="12">
              <b-form-group label="From" label-for="from">
                <b-form-datepicker
                  id="from"
                  v-model="tableData.dateFrom"
                  placeholder="Choose a date"
                  local="en"
                />
              </b-form-group>
            </b-col>
            <b-col cols="12" md="12">
              <b-form-group label="To" label-for="to">
                <b-form-datepicker
                  id="to"
                  v-model="tableData.dateTo"
                  placeholder="Choose a date"
                  local="en"
                
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
              @click="isAddNewUserSidebarActive = false"
            >
              Cancel
            </b-button>
          </b-row>
        </b-form>
      </template>
    </b-sidebar>

    <div class="row">
      <b-col lg="3" sm="6">
        <statistic-card-horizontal
          icon="UsersIcon"
          color="primary"
          :statistic="stats.total_users === undefined ? 0 : stats.total_users"
          statistic-title="Total Users"
        />
      </b-col>

      <b-col lg="3" sm="6">
        <statistic-card-horizontal
          icon="UserCheckIcon"
          color="success"
          :statistic="
            stats.total_users === undefined ? 0 : stats.verified_users
          "
          statistic-title="Verified Users"
        />
      </b-col>
      <b-col lg="3" sm="6">
        <statistic-card-horizontal
          icon="UserMinusIcon"
          color="danger"
          :statistic="
            stats.total_users === undefined ? 0 : stats.unverified_users
          "
          statistic-title="Unverified Users"
        />
      </b-col>
      <b-col lg="3" sm="6">
        <statistic-card-horizontal
          icon="UserXIcon"
          color="warning"
          :statistic="stats.total_users === undefined ? 0 : stats.blocked_users"
          statistic-title="Deactivated Users"
        />
      </b-col>
    </div>

    <div class="card">
      <div class="card-body border-bottom">
        <h4 class="card-title">Search & Filter</h4>
      </div>
      <div class="card-datatable table-responsive pt-0">
        <div
          class="
            d-flex
            justify-content-between
            align-items-center
            header-actions
            mx-2
            row
            mt-75
          "
        >
          <div
            class="
              col-sm-12 col-lg-4
              d-flex
              justify-content-center justify-content-lg-start
            "
          >
            <div class="dataTables_length" id="DataTables_Table_0_length">
              <label
                >Show
                <select
                  name="DataTables_Table_0_length"
                  aria-controls="DataTables_Table_0"
                  class="form-select"
                  v-model="tableData.length"
                  @change="getrows()"
                >
                  <option
                    v-for="(records, index) in perPage"
                    :key="index"
                    :value="records"
                  >
                    {{ records }}
                  </option>
                </select>
                entries</label
              >
            </div>
          </div>
          <div class="col-sm-12 col-lg-8 ps-xl-75 ps-0">
            <div
              class="
                dt-action-buttons
                d-flex
                align-items-center
                justify-content-center justify-content-lg-end
                flex-lg-nowrap flex-wrap
              "
            >
              <div class="me-1">
                <div id="DataTables_Table_0_filter" class="dataTables_filter">
                  <label
                    >Search:<input
                      type="search"
                      class="form-control"
                      v-model="tableData.search"
                      placeholder="Search Table"
                      @input="search()"
                  /></label>
                </div>
              </div>
              <div class="dt-buttons d-inline-flex mt-50">
                <button
                  class="dt-button add-new btn btn-danger"
                  tabindex="0"
                  type="button"
                  @click="reset()"
                >
                  <span>Reset</span>
                </button>
              </div>
              <div class="dt-buttons d-inline-flex mt-50">
                <button
                  class="dt-button add-new btn btn-success"
                  tabindex="0"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#modals-slide-in"
                  @click="isAddNewUserSidebarActive = true"
                >
                  <span>Advance Filter</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <template>
          <datatable
            :columns="columns"
            :sortKey="sortKey"
            :sortOrders="sortOrders"
            @sort="sortBy"
          >
            <tbody>
              <tr>
                <td colspan="9">
                  <div class="me-1 searching" v-if="searching">
                    Please wait... we are searching
                  </div>
                  <div
                    class="me-1 searching"
                    v-show="!rows.length && !searching"
                  >
                    No records found
                  </div>
                </td>
              </tr>
            </tbody>

            <tbody v-if="rows.length > 0">
              <tr v-for="item in rows" :key="item.id">
                <td>{{ item.first_name }}</td>
                <td>{{ item.last_name }}</td>
                <td>{{ item.username }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.mobile }}</td>
                <td>
                  <b-badge
                    pill
                    :variant="`light-${resolveVerifiedVariant(item.verified)}`"
                    class="text-capitalize"
                  >
                    {{ item.verified ? "Verified" : "Unverfied" }}
                  </b-badge>
                </td>
                <td>{{ item.city }}</td>
                <td>{{ item.state }}</td>
                <td>
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
                    <b-dropdown-item
                      :to="{ name: 'customer-view', params: { id: item.id } }"
                    >
                      <feather-icon icon="FileTextIcon" />
                      <span class="align-middle ml-50">Details</span>
                    </b-dropdown-item>

                    <b-dropdown-item
                      :to="{ name: 'customer-edit', params: { id: item.id } }"
                    >
                      <feather-icon icon="EditIcon" />
                      <span class="align-middle ml-50">Edit</span>
                    </b-dropdown-item>

                    <b-dropdown-item>
                      <feather-icon icon="TrashIcon" />
                      <span class="align-middle ml-50">Delete</span>
                    </b-dropdown-item>
                  </b-dropdown>
                </td>
              </tr>
            </tbody>
          </datatable>
          <pagination
            v-if="rows > 0"
            :pagination="pagination"
            @prev="getrows(pagination.prevPageUrl)"
            @next="getrows(pagination.nextPageUrl)"
          >
          </pagination>
        </template>
      </div>
    </div>
  </div>
</template>


<script>
import StatisticCardHorizontal from "@core/components/statistics-cards/StatisticCardHorizontal.vue";
import Datatable from "@/views/components/datatable/Datatable.vue";
import Pagination from "@/views/components/datatable/Pagination.vue";
import useResolverList from "@/useResolverList";
import jwtHeader from "@core/services/jwt-header";
import { $themeConfig } from "@themeConfig";
import axios from "axios";
import { Skeleton } from "vue-loading-skeleton";
import {
  BCol,
  BDropdown,
  BDropdownItem,
  BSidebar,
  BFormGroup,
  BFormInput,
  BRow,
  BForm,
  BButton,
  BBadge,
  BFormSelect,
  BCardText,
  BFormDatepicker,
} from "bootstrap-vue";
import { ref, onUnmounted } from "@vue/composition-api";

export default {
  components: {
    datatable: Datatable,
    pagination: Pagination,
    StatisticCardHorizontal,
    Skeleton,
    BDropdown,
    BDropdownItem,
    BSidebar,
    BFormGroup,
    BFormInput,
    BRow,
    BCol,
    BForm,
    BButton,
    BBadge,
    BFormSelect,
    BCardText,
    BFormDatepicker,
  },
  setup() {
    const { resolveVerifiedVariant } = useResolverList();
    const isAddNewUserSidebarActive = ref(false);
    const { baseURL } = $themeConfig.app;
    return {
      resolveVerifiedVariant,
      isAddNewUserSidebarActive,
      baseURL,
    };
  },
  created() {
    this.getrows();
  },
  data() {
    let searching = false;
    let selectedStatus = null;
    let dateFrom = null;
    let dateTo = null;
    let statusOptions = [
      { value: null, text: "Please select some item" },
      { value: "1", text: "Active" },
      { value: "2", text: "Inactive" },
      { value: "5", text: "Blocked" },
    ];
    let sortOrders = {};
    let columns = [
      { width: "33%", label: "First ANme", name: "first_name" },
      { width: "33%", label: "Last Name", name: "last_name" },
      { width: "33%", label: "Username", name: "username" },
      { width: "33%", label: "Email", name: "email" },
      { width: "33%", label: "Mobile", name: "mobile" },
      { width: "33%", label: "Verified", name: "verified" },
      { width: "33%", label: "City", name: "city" },
      { width: "33%", label: "State", name: "state" },
      { width: "33%", label: "Action", name: "action" },
    ];
    columns.forEach((column) => {
      sortOrders[column.name] = -1;
    });
    return {
      searching,
      rows: [],
      stats: [],
      columns: columns,
      sortKey: "deadline",
      sortOrders: sortOrders,
      perPage: ["10", "20", "30"],
      tableData: {
        draw: 0,
        length: 10,
        search: "",
        column: 0,
        dateFrom: "",
        dateTo: "",
        dir: "desc",
      },
      pagination: {
        lastPage: "",
        currentPage: "",
        total: "",
        lastPageUrl: "",
        nextPageUrl: "",
        prevPageUrl: "",
        from: "",
        to: "",
      },
      selectedStatus,
      statusOptions,
    };
  },
  methods: {
    handleSubmit() {
      this.isAddNewUserSidebarActive = false;
      this.getrows();
      this.tableData.dateFrom = "";
      this.tableData.dateTo = "";
      this.tableData.selectedStatus = null;
    },
    search() {
      if (this.tableData.search.length >= 5) {
        this.searching = true;
        this.getrows();
      }
    },
    reset() {
      this.tableData.search = "";
      this.getrows();
    },
    getrows(url = this.baseURL + "/get-users?role=user") {
      this.searching = true;
      this.tableData.draw++;
      axios
        .get(url, { params: this.tableData, headers: jwtHeader() })
        .then((response) => {
          let data = response.data;
          if (this.tableData.draw == data.draw) {
            this.rows = data.data.data;
            this.searching = false;
            this.stats = response.data.stats;
            this.configPagination(data.data);
          }
        })
        .catch((errors) => {
          console.log(errors);
        });
    },
    configPagination(data) {
      this.pagination.lastPage = data.last_page;
      this.pagination.currentPage = data.current_page;
      this.pagination.total = data.total;
      this.pagination.lastPageUrl = data.last_page_url;
      this.pagination.nextPageUrl = data.next_page_url;
      this.pagination.prevPageUrl = data.prev_page_url;
      this.pagination.from = data.from;
      this.pagination.to = data.to;
    },
    sortBy(key) {
      this.sortKey = key;
      this.sortOrders[key] = this.sortOrders[key] * -1;
      this.tableData.column = this.getIndex(this.columns, "name", key);
      this.tableData.dir = this.sortOrders[key] === 1 ? "asc" : "desc";
      this.getrows();
    },
    getIndex(array, key, value) {
      return array.findIndex((i) => i[key] == value);
    },
  },
};
</script>