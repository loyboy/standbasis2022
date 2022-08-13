<template>
  <div class="rows">
     <manage-store-side-bar
      @fetchData="fetchData"
      :updateData="isManageStoreSideBarActive"
    />
    <template v-if="pageLoadding">
      <div class="card">
        <div class="card-body border-bottom">
          <h4 class="card-title">List of stores</h4>
        </div>
        <div class="card-datatable table-responsive pt-0">
          <div
            class="d-flex justify-content-between align-items-center header-actions mx-2 row mt-75"
          >
            <div
              class="col-sm-12 col-lg-4 d-flex justify-content-center justify-content-lg-start"
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
                class="dt-action-buttons d-flex align-items-center justify-content-center justify-content-lg-end flex-lg-nowrap flex-wrap"
              >
                <div class="me-1">
                  <div id="DataTables_Table_0_filter" class="dataTables_filter">
                    <label
                      >Search:<input
                        type="search"
                        class="form-control"
                        v-model="tableData.search"
                        placeholder="Search Table"
                        @input="getrows()"
                    /></label>
                  </div>
                </div>
                <div class="dt-buttons d-inline-flex mt-50">
                  <button
                    class="dt-button add-new btn btn-danger"
                    tabindex="0"
                    type="button"
                    v-b-toggle.manage-store-side-bar
                  >
                    <span>Add a new store</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <datatable
            :columns="columns"
            :sortKey="sortKey"
            :sortOrders="sortOrders"
            @sort="sortBy"
          >
            <tbody>
              <tr v-for="item in rows" :key="item.id">
                <td>{{ item.store_name }}</td>
                <td>{{ item.daalu_commision }} %</td>
                <td>{{ item.customers_earnings }} %</td>
                <td>{{ item.email }}</td>
                <td>{{ item.mobile }}</td>
                <td>
                  <b-badge
                    pill
                    :variant="`light-${resolveVerifiedVariant(item.status)}`"
                    class="text-capitalize"
                  >
                    {{ item.verified ? "Verified" : "Unverfied" }}
                  </b-badge>
                </td>
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
                        @click="isManageStoreSideBarActive = item"
                        v-b-toggle.manage-store-side-bar
                    >
                      <feather-icon icon="FileTextIcon" />
                      <span class="align-middle ml-50">Details</span>
                    </b-dropdown-item>
                  </b-dropdown>
                </td>
              </tr>
            </tbody>
          </datatable>
          <pagination
            :pagination="pagination"
            @prev="getrows(pagination.prevPageUrl)"
            @next="getrows(pagination.nextPageUrl)"
          >
          </pagination>
        </div>
      </div>
    </template>
    <Skeleton :count="3" v-else />

  </div>
</template>
 
<script>
import StatisticCardHorizontal from "@core/components/statistics-cards/StatisticCardHorizontal.vue";
import ManageStoreSideBar from "@/views/components/sidebar/ManageStoreSideBar.vue";

import Datatable from "@/views/components/datatable/Datatable.vue";
import Pagination from "@/views/components/datatable/Pagination.vue";
import useResolverList from "@/useResolverList";
import jwtHeader from "@core/services/jwt-header";
import { $themeConfig } from "@themeConfig";
import { Skeleton } from "vue-loading-skeleton";
import axios from "axios";
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
  VBToggle,
} from "bootstrap-vue";
import { ref, onUnmounted,watch } from "@vue/composition-api";

export default {
   directives: {
    "b-toggle": VBToggle,
  },
  components: {
    datatable: Datatable,
    pagination: Pagination,
    StatisticCardHorizontal,
    ManageStoreSideBar,
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
    const isManageStoreSideBarActive = ref(null);
    const { baseURL } = $themeConfig.app;    
    return {
      resolveVerifiedVariant,
      isManageStoreSideBarActive,
      baseURL,
    };
  },
  created() {
    this.getrows();
  },
  data() {
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
      { width: "33%", label: "Store name", name: "store_name" },
      { width: "33%", label: "Commission", name: "daalu_commision" },
      { width: "33%", label: "Customer Earning", name: "customers_earnings" },
      { width: "33%", label: "Email", name: "email" },
      { width: "33%", label: "Mobile", name: "mobile" },
      { width: "33%", label: "Verified", name: "status" },
      { width: "33%", label: "Action", name: "action" },
    ];
    columns.forEach((column) => {
      sortOrders[column.name] = -1;
    });
    return {
      rows: [],
      stats: [],
      products:[],
      pageLoadding: false,
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
    fetchData(){
      this.getrows();
    },
    handleSubmit() {
      // Hide the modal manually
      this.tableData.dateFrom = "";
      this.tableData.dateTo = "";
      this.tableData.selectedStatus = null;
    },
    getrows(url = this.baseURL + "/merchant-stores") {
      this.tableData.draw++;
      axios
        .get(url, { params: this.tableData, headers: jwtHeader() })
        .then((response) => {
          this.pageLoadding = true;
          let data = response.data;
          if (this.tableData.draw == data.draw) {
            this.rows = data.data.data;
            console.log(this.rows)
            this.stats = response.data.stats;
            console.log(this.stats);
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
