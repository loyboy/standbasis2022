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
               <b-form-input v-model="tableData.amount" placeholder="Enter the Amount" type="number"></b-form-input>
            </b-col>
            <br/>
            <b-col cols="12" md="12">
               <b-form-input v-model="tableData.mobile" placeholder="Enter the Mobile number" type="number"></b-form-input>
            </b-col>
             <br/>
             <b-col cols="12" md="12">
               <b-form-input v-model="tableData.customer" placeholder="Enter the Customer Name" type="text"></b-form-input>
            </b-col>
             <br/>
            <b-col cols="12" md="12">
               <b-form-input v-model="tableData.store" placeholder="Enter the Store Name" type="text"></b-form-input>
            </b-col>
             <br/>

            <b-col cols="12" md="12">
              <b-form-group label="Select status" label-for="status">
                <b-form-select
                  v-model="tableData.status"
                  :options="statusOptions"
                />
              </b-form-group>
                <b-form-group label="Select Request Type" label-for="requestType">
                <b-form-select
                  v-model="tableData.requestType"
                  :options="reqOptions"
                />
              </b-form-group>
              <b-form-group label="Select Network" label-for="network">
                <b-form-select
                  v-model="tableData.network"
                  :options="networkOptions"
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
                  initial-date="2020-06-16"
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
                  initial-date="2020-06-16"
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

      <b-col lg="4" sm="6">
        <statistic-card-horizontal
          icon="UsersIcon"
          color="primary"
          :statistic="stats.total_bills === undefined ? 0 : stats.total_bills"
          statistic-title="Total Bills"
        />
      </b-col>

      <b-col lg="4" sm="6">
        <statistic-card-horizontal
          icon="UserCheckIcon"
          color="success"
          :statistic="
            stats.success_bills === undefined ? 0 : stats.success_bills
          "
          statistic-title="Successful Bills Purchase"
        />
      </b-col>
      <b-col lg="4" sm="6">
        <statistic-card-horizontal
          icon="UserMinusIcon"
          color="danger"
          :statistic="
            stats.unsuccess_bills === undefined ? 0 : stats.unsuccess_bills
          "
          statistic-title="UnSuccessful Bills Purchase"
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
                      @input="getrows()"
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

        <datatable
          :columns="columns"
          :sortKey="sortKey"
          :sortOrders="sortOrders"
          @sort="sortBy"
        >
          <tbody>
            <tr v-for="item in rows" :key="item.id">
              <td>{{ item.customer ? item.customer.mobile : "Nil" }}</td>
              <td>{{ item.newtwork }}</td>
              <td>{{ item.amount }}</td>
              <td>{{ item.request_type }}</td>
              <td>  {{ item.customer ? item.customer.first_name : "Nil" }} {{ item.customer ? item.customer.last_name : "Nil" }}</td>
              <td>{{ item.store ? item.store.store_name : "Nil" }}</td>
              <td>{{ item.created_at ? new Date(item.created_at).toISOString().substr(0,10) : "Nil" }}</td>
              <td>
                <b-badge
                  pill
                  :variant="`light-${resolveVerifiedVariant( item.status === 'Success' ? true : false )}`"
                  class="text-capitalize"
                >
                  {{ item.status }}
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
                      :to="{ name: 'bills-view', params: { id: item.id } }"
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

    let statusOptions = [
      { value: null, text: "Please select status" },
      { value: "Fail", text: "Failed" },
      { value: "Success", text: "Success" }
    ];

    let networkOptions = [
        { value: null, text: "Please select network" },
        { value: "MTN", text: "MTN" },
        { value: "AIRTEL", text: "AIRTEL" },
        { value: "9MOBILE", text: "9MOBILE" },
        { value: "GLO", text: "GLO" }
    ];

    let reqOptions = [
        { value: null, text: "Please select request Type" },
        { value: "airtime", text: "airtime" },
        { value: "data", text: "data" }
    ];

    let sortOrders = {};

    let columns = [
      { width: "13%", label: "Mobile No.", name: "mobile" },
      { width: "13%", label: "Network", name: "newtwork" },
      { width: "13%", label: "Amount Spent", name: "amount" },
      { width: "13%", label: "Request Type", name: "requestType" },
      { width: "13%", label: "Customer name", name: "first_name" },
      { width: "13%", label: "Store", name: "store_id" },
      { width: "23%", label: "Date", name: "_date" }, 
      { width: "13%", label: "Status", name: "status" },      
      { width: "13%", label: "Action", name: "action" }
    ];   

    columns.forEach((column) => {
      sortOrders[column.name] = -1;
    });

    return {
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
        column: "",
        dateFrom: "",
        dateTo: "",
        dir: "desc", 

        network: null,
        status: null,
        requestType: null,
        amount: "",
        mobile: "",
        store: "",
        customer: ""
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
      networkOptions: networkOptions,
      reqOptions: reqOptions,
      statusOptions: statusOptions,
    
    };
  },
  methods: {

    onCancel() {
        console.log('User cancelled the loader.');
    },

    reset() {
      this.tableData.search = "";
      this.tableData.network = "";
      this.tableData.status = "";
      this.tableData.requestType = "";
      this.tableData.amount = "";
      this.tableData.mobile = "";
      this.tableData.store = "";
      this.tableData.customer = "";
      this.getrows();
    },

    handleSubmit() {
      
     // console.log(this.tableData);
      // Hide the modal manually
      this.isAddNewUserSidebarActive = false
      this.getrows()
      this.tableData.dateFrom = ""
      this.tableData.dateTo = ""
      this.tableData.status = ""      
    },

    getrows(url = this.baseURL + "/user/bills/dashboard") {
      this.tableData.draw++;
      this.isLoading = true;
      axios
        .get(url, { params: this.tableData, headers: jwtHeader() })
        .then((response) => {
          let data = response.data;
          if (this.tableData.draw == data.draw) {
            this.rows = data.data.data;
            this.stats = response.data.stats;
            //console.log(this.stats);
            this.configPagination(data.data);
            this.isLoading = false;
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