<template>
  <section class="app-ecommerce-details">

    <!-- Alert: No item found -->
    <b-alert variant="danger" :show="product === undefined">
      <h4 class="alert-heading">Error fetching product data</h4>
      <div class="alert-body">
        No item found with this item slug. Check
        <b-link class="alert-link" :to="{ name: 'apps-e-commerce-shop' }">
          Shop
        </b-link>
        for other items.
      </div>
    </b-alert>

    <!-- Tiles for claims and impressions -->
    <div class="row">
      <b-col lg="3" sm="6">
        <statistic-card-horizontal icon="UsersIcon" color="primary" :statistic="
          stats.total_views === undefined
            ? 0
            : stats.total_views
        " statistic-title="Viewed Deal" />
      </b-col>

      <b-col lg="3" sm="6">
        <statistic-card-horizontal icon="UsersIcon" color="primary" :statistic="
          stats.total_impresions === undefined
            ? 0
            : stats.total_impresions
        " statistic-title="Deal Impressions" />
      </b-col>

      <b-col lg="3" sm="6">
        <statistic-card-horizontal icon="UserCheckIcon" color="success" :statistic="
          stats.total_claimed === undefined ? 0 : stats.total_claimed
        " statistic-title="Claimed Transactions" />
      </b-col>

      <b-col lg="3" sm="6">
        <statistic-card-horizontal icon="UserMinusIcon" color="danger" :statistic="
          stats.total_unclaimed === undefined ? 0 : stats.total_unclaimed
        " statistic-title="Unclaimed Transactions" />
      </b-col>

    </div>
    <!-- end Tiles for claims and impressions -->

    <template v-if="product">

      <b-card-code title="Deal Information">
              <div v-if="
                    isMerchant &&
                    product.status.status != 'Active' &&
                    product.status.status != 'Ended'
                  " class="d-flex flex-column flex-sm-row pt-1"
                  style="float:right">
                    <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="success"
                      class="btn-cart mr-0 mr-sm-1 mb-1 mb-sm-0" v-b-toggle.sidebar-invoice-add-payment>
                      <feather-icon icon="EditIcon" class="mr-50" />
                      <span>Edit Deal</span>
                    </b-button>
                  </div>

        <b-tabs>
          <b-tab active title="Deal Image">
            <b-card-text class="row">
              <b-col cols="7" md="7" class="
                d-flex
                align-items-center
                justify-content-center
                mb-2 mb-md-0
              ">
                <div class="d-flex align-items-center justify-content-center">
                  <b-img :src="`${dealAdThumbnailsURL + product.image}`" :alt="`Image of ${product.image}`"
                    class="product-img" fluid />
                </div>
                
              </b-col>
              <b-col cols="5" md="5">
                  <!-- Product Name -->
                  <h4>{{ product.title }}</h4>

                  <!-- Price And Ratings -->
                  <div class="ecommerce-details-price d-flex flex-wrap mt-1">
                    <h4 class="item-price mr-1">
                      {{ product.point_value }} POINTS
                    </h4>
                  </div>
                  <!-- Product Meta [Free shpping, EMI, etc.] -->
                  <ul class="product-features list-unstyled">
                    <li>
                      <span>Title: {{ product.title }}</span>
                    </li>
                    <li>
                      <span>Subtitle: {{ product.subtitle }}</span>
                    </li>

                    <li>
                      <span>Category: {{ product.category.category }}</span>
                    </li>
                    <li>
                      <span> Merchant Name: {{ product.merchant.merchant_name }}</span>
                    </li>

                    <li>
                      <span> Stores: </span><br />
                      <ul>
                        <li v-for="(store, index) in mStores" :key="store.value">
                          {{ index + 1 }} -- {{ store.text }}
                        </li>
                      </ul>
                    </li>

                    <li>
                      <span>
                        Status:
                        <b class="statusText"> {{ product.status.status }} </b>
                      </span>
                    </li>

                    <li>
                      <span class="badge badge-danger">Deals Date: {{ product.start_date }} -
                        {{ product.end_date }}</span>
                    </li>


                  </ul>

            
                  <div class="d-flex flex-column flex-sm-row pt-1">
                    <b-button v-if="!isMerchant" variant="outline-success"
                      class="btn-wishlist mr-0 mr-sm-1 mb-1 mb-sm-0"
                      @click="updateDealOnce({ id: product.id, status: 1 })" :disabled="
                        product.status.status == 'Active' ||
                        product.status.status == 'Ended'
                      ">
                      <span> Approve Deal </span>
                    </b-button>

                    <b-button v-if="isMerchant" variant="outline-info" class="btn-wishlist mr-0 mr-sm-1 mb-1 mb-sm-0"
                      @click="updateDealOnce({ id: product.id, status: 7 })" :disabled="
                        product.status.status == 'Pending' ||
                        product.status.status == 'Paused' ||
                        product.status.status == 'Ended'
                      ">
                      <span> Pause Deal </span>
                    </b-button>

                    <b-button v-if="isMerchant" variant="outline-warning" class="btn-wishlist mr-0 mr-sm-1 mb-1 mb-sm-0"
                      @click="updateDealOnce({ id: product.id, status: 8 })" :disabled="
                        product.status.status == 'Pending' ||
                        product.status.status == 'Paused' ||
                        product.status.status == 'Ended' ||
                        product.status.status == 'Stopped'
                      ">
                      <span> Stop Deal </span>
                    </b-button>

                    <b-button v-if="isMerchant" variant="outline-danger" class="btn-wishlist mr-0 mr-sm-1 mb-1 mb-sm-0"
                      @click="updateDealOnce({ id: product.id, status: 9 })"
                      :disabled="product.status.status == 'Ended'">
                      <span> End Deal </span>
                    </b-button>

                  </div>
                </b-col>

            </b-card-text>
          </b-tab>
          <b-tab title="Description">
            <b-card-text>
              <b-col cols="12" md="12">
                <!-- Product Description -->
                <b-card-text>{{ product.description }}</b-card-text>
              </b-col>
            </b-card-text>
          </b-tab>

          <b-tab title="Terms and Condition">
            <b-card-text>
              <b-col cols="12" md="12">
                <!-- Product Description -->
                <b-card-text>{{ product.tandc }}</b-card-text>
              </b-col>
            </b-card-text>
          </b-tab>
        </b-tabs>

      </b-card-code>



    </template>

    <Skeleton :count="5" v-else />

    <!-- Claim Table -->
    <template>
      <div class="rows">
        <b-sidebar id="add-new-user-sidebar" :visible="isAddNewUserSidebarActive" bg-variant="white"
          sidebar-class="sidebar-lg" shadow backdrop no-header right>
          <template>
            <!-- Header -->
            <div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
              <h5 class="mb-0">Advance Filter</h5>

              <feather-icon class="ml-1 cursor-pointer" icon="XIcon" size="16"
                @click="isAddNewUserSidebarActive = false" />
            </div>

            <b-form class="p-2" @submit.prevent="handleSubmit()" @reset.prevent="resetForm">
              <b-row>
                <b-col cols="12" md="12" class="filter-padding">
                  <b-form-input v-model="tableData.amount" placeholder="Enter the Amount" type="number"></b-form-input>
                </b-col>
                <br />
                <b-col cols="12" md="12" class="filter-padding">
                  <b-form-input v-model="tableData.mobile" placeholder="Enter the Mobile number" type="number">
                  </b-form-input>
                </b-col>
                <br />
                <b-col cols="12" md="12" class="filter-padding">
                  <b-form-input v-model="tableData.customer" placeholder="Enter the Customer Name" type="text">
                  </b-form-input>
                </b-col>
                <br />
                <b-col cols="12" md="12" class="filter-padding">
                  <b-form-input v-model="tableData.store" placeholder="Enter the Store Name" type="text"></b-form-input>
                </b-col>
                <br />

                <b-col cols="12" md="12" class="filter-padding">
                  <b-form-input v-model="tableData.receiptcode"
                    placeholder="Enter the Receipt Number of this Deal payment" type="text"></b-form-input>
                </b-col>

                <b-col cols="12" md="12" class="filter-padding">
                  <b-form-group label="Select status of Deal Claim" label-for="status">
                    <b-form-select v-model="tableData.claimed" :options="transOptions" />
                  </b-form-group>
                </b-col>

                <b-col cols="12" md="12">
                  <b-form-group label="From" label-for="from">
                    <b-form-datepicker id="from" v-model="tableData.dateFrom" placeholder="Choose a date" local="en"
                      initial-date="2020-06-16" />
                  </b-form-group>
                </b-col>
                <b-col cols="12" md="12">
                  <b-form-group label="To" label-for="to">
                    <b-form-datepicker id="to" v-model="tableData.dateTo" placeholder="Choose a date" local="en"
                      initial-date="2020-06-16" />
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row class="filter-padding">
                <b-button variant="success" class="mr-2 col-md-12" type="submit">
                  Filter Page
                </b-button>

                <b-button type="button" class="mr-2 col-md-12" variant="dark"
                  @click="isAddNewUserSidebarActive = false">
                  Cancel
                </b-button>
              </b-row>
            </b-form>
          </template>
        </b-sidebar>


        <template>
          <div class="card">
            <div class="card-body border-bottom">
              <h4 class="card-title">Search & Filter</h4>
            </div>
            <div class="card-datatable table-responsive pt-0">
              <div class="d-flex justify-content-between align-items-center header-actions mx-2 row mt-75">
                <div class="col-sm-12 col-lg-4 d-flex justify-content-center justify-content-lg-start">
                  <div class="dataTables_length" id="DataTables_Table_0_length">
                    <label>Show
                      <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" class="form-select"
                        v-model="tableData.length" @change="getrows()">
                        <option v-for="(records, index) in perPage" :key="index" :value="records">
                          {{ records }}
                        </option>
                      </select>
                      entries</label>
                  </div>
                </div>
                <div class="col-sm-12 col-lg-8 ps-xl-75 ps-0">
                  <div
                    class="dt-action-buttons d-flex align-items-center justify-content-center justify-content-lg-end flex-lg-nowrap flex-wrap">
                    <div class="me-1">
                      <div id="DataTables_Table_0_filter" class="dataTables_filter">
                        <label>Search:<input type="search" class="form-control" v-model="tableData.search"
                            placeholder="Search Table" @input="getrows()" /></label>
                      </div>
                    </div>

                    <div class="dt-buttons d-inline-flex mt-50">
                      <button class="dt-button add-new btn btn-danger" tabindex="0" type="button" @click="reset()">
                        <span>Reset</span>
                      </button>
                    </div>

                    <div class="dt-buttons d-inline-flex mt-50">
                      <button class="dt-button add-new btn btn-success" tabindex="0" type="button"
                        data-bs-toggle="modal" data-bs-target="#modals-slide-in"
                        @click="isAddNewUserSidebarActive = true">
                        <span>Advance Filter</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <datatable :columns="columns" :sortKey="sortKey" :sortOrders="sortOrders" @sort="sortBy">
                <tbody>
                  <tr v-for="item in rows" :key="item.id">
                    <td>{{ item.customer ? item.customer.mobile : "Nil" }}</td>
                    <td>{{ item.amount }}</td>
                    <td>{{ item.receipt_no }}</td>
                    <td>
                      {{ item.customer ? item.customer.first_name : "Nil" }}
                      {{ item.customer ? item.customer.last_name : "Nil" }}
                    </td>
                    <td>{{ item.store ? item.store.store_name : "Nil" }}</td>
                    <td>
                      {{
                          item.created_at
                            ? new Date(item.created_at).toISOString().substr(0, 10)
                            : "Nil"
                      }}
                    </td>
                    <td>
                      <b-badge pill :variant="`light-${resolveVerifiedVariant(
                        Number(item.status) === 1 ? true : false
                      )}`" class="text-capitalize">
                        {{
                            Number(item.status) === 1
                              ? "Deal Claimed"
                              : "Deal Un-claimed"
                        }}
                      </b-badge>
                    </td>
                    <td>
                      <b-dropdown variant="link" no-caret :right="$store.state.appConfig.isRTL">
                        <template #button-content>
                          <feather-icon icon="MoreVerticalIcon" size="16" class="align-middle text-body" />
                        </template>
                        <b-dropdown-item v-if="Number(item.status) === 0" @click="validateClaimOnDeal(item)">
                          <feather-icon icon="CheckSquareIcon" />
                          <span class="align-middle ml-50">Claim this Deal</span>
                        </b-dropdown-item>
                      </b-dropdown>
                    </td>
                  </tr>
                </tbody>
              </datatable>
              <pagination :pagination="pagination" @prev="getrows(pagination.prevPageUrl)"
                @next="getrows(pagination.nextPageUrl)">
              </pagination>
            </div>
          </div>
        </template>
      </div>
    </template>
    <!-- end Claim Table -->


    <invoice-sidebar-add-payment :is-deal-sidebar-active.sync="isDealSidebarActive" @fetchProduct="fetchProduct"
      :updateData="product" />

  </section>
</template>

<script>
import StatisticCardHorizontal from "@core/components/statistics-cards/StatisticCardHorizontal.vue";
import { useRouter } from "@core/utils/utils";
import store from "@/store";
import { ref, watch } from "@vue/composition-api";
import InvoiceSidebarAddPayment from "./InvoiceSidebarAddPayment.vue";
import { Skeleton } from "vue-loading-skeleton";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import { db } from "@/firebase";
import { doc, setDoc } from "firebase/firestore";
import BCardCode from '@core/components/b-card-code'
import Datatable from "@/views/components/datatable/Datatable.vue";
import vSelect from "vue-select";
import Pagination from "@/views/components/datatable/Pagination.vue";
import useResolverList from "@/useResolverList";
import jwtHeader from "@core/services/jwt-header";
import { $themeConfig } from "@themeConfig";

import {
  BCard,
  BCardBody,
  BRow,
  BCol,
  BImg,
  BCardText,
  BLink,
  BButton,
  BDropdown,
  BDropdownItem,
  BAlert,
  VBToggle,

  BSidebar,
  BFormGroup,
  BFormInput,
  BForm,
  BBadge,
  BFormSelect,
  BFormDatepicker

} from "bootstrap-vue";
import Ripple from "vue-ripple-directive";
import { BTabs, BTab } from 'bootstrap-vue'
import { useEcommerceUi, useEcommerce, useShopRemoteData } from "./useDeals";
import { getUserData } from "@/auth/utils";
import axios from "axios";

export default {
  directives: {
    Ripple,
    "b-toggle": VBToggle,
  },
  components: {
    // BSV
    vSelect,
    datatable: Datatable,
    pagination: Pagination,
    Skeleton,
    BTab,
    BTabs,
    BCard,
    BCardBody,
    BCardCode,
    BRow,
    BCol,
    BImg,
    BCardText,
    BLink,
    BButton,
    BDropdown,
    BDropdownItem,
    BAlert,
    InvoiceSidebarAddPayment,
    StatisticCardHorizontal,
    BSidebar,
    BFormGroup,
    BFormInput,
    BForm,
    BBadge,
    BFormSelect,
    BFormDatepicker
  },

  setup() {
    const isDealSidebarActive = ref(false);
    const isUpdated = ref(false);
    const { dealAdThumbnailsURL } = $themeConfig.app;

    const { resolveVerifiedVariant } = useResolverList();
    const isAddNewUserSidebarActive = ref(false);
    const { baseURL } = $themeConfig.app;

    let dealtranactionData2 = {
      resolveVerifiedVariant,
      isAddNewUserSidebarActive,
      baseURL,
    };

    const product = ref(null);
    const { route, router } = useRouter();
    const productId = route.value.params.id;


    // Remote Data
    const fetchProduct = () => {
      store
        .dispatch("app-ecommerce/fetchProduct", { productId })
        .then((response) => {
          product.value = response.data.data;

          setDoc(
            doc(db, "deals", response.data.data.firebase_id),
            response.data.data
          );
          const userData = getUserData();
          let merchantId = userData.merchantId ? userData.merchantId : null;

          if (merchantId !== null && merchantId !== product.value.merchant.id) {
            alert("This is not your Product, we are redirecting you back!");
            router.push({ name: "deals" });
            return;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };

    // UI
    const selectedColor = ref(null);
    fetchProduct();

    return {
      ...dealtranactionData2,
      // Fetched Product
      productId,
      product,
      // UI
      dealAdThumbnailsURL,
      selectedColor,
      isUpdated,
      isDealSidebarActive,
      fetchProduct,
    };
  },

  data() {

    let sortOrders = {};
    let transOptions = [
      { value: null, text: "Please select transaction Type" },
      { value: 1, text: "Claimed" },
      { value: 0, text: "Un-Claimed" },
    ];

    let columns = [
      { width: "13%", label: "Mobile No.", name: "mobile" },
      { width: "13%", label: "Amount Spent", name: "amount" },
      { width: "15%", label: "Receipt No.", name: "receipt_no" },
      { width: "13%", label: "Customer name", name: "first_name" },
      { width: "18%", label: "Store", name: "store_id" },
      { width: "13%", label: "Date", name: "_date" },
      { width: "13%", label: "Status", name: "status" },
      { width: "23%", label: "Action", name: "action" }
    ];

    columns.forEach((column) => {
      sortOrders[column.name] = -1;
    });
    const userData = getUserData();

    const merchant = userData.merchantId ? userData.merchantId : null;

    let dealtranactionData = {
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

        amount: "",
        mobile: "",
        receiptcode: "",
        customer: "",
        store: "",
        deal: "",
        merchant: merchant
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
      transOptions,
      isLoading: false,
      fullPage: true,
    };

    return {
      ...dealtranactionData,
      mStores: [],
      isMerchant: false,
      // Area charts
      subscribersGained: {},
      revenueGenerated: {},
      quarterlySales: {},
      ordersRecevied: {},
      // Line Charts
      siteTraffic: {},
      activeUsers: {},
      newsletter: {},
    };
  },

  created() {
    this.getrows('',this.productId);
  },

  mounted() {
    const userData = getUserData();

    if (userData.role === "merchant") {
      this.isMerchant = true;
    }

    //  this.tableData.deal = this.product.id;

  },

  watch: {
    product: function (value, mutation) {
      let merchantStores = JSON.parse(value.stores);

      const userData = getUserData();
      const { fetchStoresForMerchant } = useShopRemoteData();
      this.mStores = [];
      fetchStoresForMerchant({
        merchant: "null",
      }).then((response) => {
        if (response.length > 0) {
          if (merchantStores && merchantStores.length > 0) {
            response.forEach((value, index) => {
              let foundIndex = merchantStores.find(
                (m) => Number(m) === Number(value.id)
              );
              if (foundIndex) {
                this.mStores.push({
                  value: value.id,
                  text: value.store_name,
                });
              }
            });
          }
        }
      });

    },
  },

  methods: {
    updateDealOnce(deal) {
      const { updateDeal } = useEcommerce();
      if (deal.status === 9) {
        if (!window.confirm("Are you sure you want to terminate this deal?")) {
          return;
        }
      }

      this.$loading(true);

      updateDeal(deal).then((response) => {
        this.$loading(false);
        this.$toast({
          component: ToastificationContent,
          position: "top-right",
          props: {
            title: "Success",
            icon: "CoffeeIcon",
            variant: "success",
            text: `Status has been updated.`,
          },
        });
      });

      this.fetchProduct();
    },

    handleSubmit() {
      // console.log(this.tableData);
      // Hide the modal manually
      this.isAddNewUserSidebarActive = false;
      this.getrows('',this.productId);
      this.tableData.dateFrom = "";
      this.tableData.dateTo = "";
      this.tableData.status = "";
    },

    reset() {
      this.tableData.search = "";

      this.tableData.receiptcode = "";
      this.tableData.amount = "";
      this.tableData.mobile = "";
      this.tableData.store = "";
      this.tableData.customer = "";

      this.getrows('',this.productId);
    },

    validateClaimOnDeal(item) {
      let isConfirmed = window.confirm(`Claim this Deal with ID: ${item.id} ?`);
      if (isConfirmed) {
        axios.post(this.baseURL + "/deal/update-deal-claim", { id: item.id, status: 1 }, { headers: jwtHeader() }).then((res) => {
          this.getrows('',this.productId);
        });
      }
    },

    getrows(url, dealId) {
      //this.isLoading = true;
      this.tableData.draw++;
      this.tableData.deal = dealId;
      console.log( dealId)
      axios
        .get((url=='')? this.baseURL + "/user/transaction/deals-transactions":"", { params: this.tableData, headers: jwtHeader() })
        .then((response) => {
          // this.isLoading = false;
          let data = response.data;
          if (this.tableData.draw == data.draw) {
            this.rows = data.data.data;
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
      this.getrows('',this.productId);
    },
    getIndex(array, key, value) {
      return array.findIndex((i) => i[key] == value);
    }

  },
};
</script>

<style lang="scss">
@import "~@core/scss/base/pages/app-ecommerce-details.scss";

.statusText {
  font-size: 1.3em;
  font-style: italic;
}

.btn:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
