<template>
  <div class="rows">
    <manage-store-side-bar
      @fetchData="fetchData"
      :updateData="isManageStoreSideBarActive"
    />
    <div class="row">
      <b-col lg="4" sm="6">
        <b-link :to="{ name: 'stores' }">
          <statistic-card-horizontal
            icon="AirplayIcon"
            color="primary"
            :statistic="
              stats.total_stores === undefined ? 0 : stats.total_stores
            "
            statistic-title="Total Stores"
          />
        </b-link>
      </b-col>

      <b-col lg="4" sm="6">
        <b-link :to="{ name: 'deals' }">
          <statistic-card-horizontal
            icon="BriefcaseIcon"
            color="success"
            :statistic="stats.total_deals === undefined ? 0 : stats.total_deals"
            statistic-title="Total Deals"
          />
        </b-link>
      </b-col>
      <b-col lg="4" sm="6">
        <b-link :to="{ name: 'transactions' }">
          <statistic-card-horizontal
            icon="TrelloIcon"
            color="danger"
            :statistic="
              stats.total_transactions === undefined
                ? 0
                : stats.total_transactions
            "
            statistic-title="Total Transaction"
          />
        </b-link>
      </b-col>
      <div
        class="col-md-12 mercahnt-welcome top-spacing"
        v-if="stats.total_stores === 0"
      >
        <b-col lg="6 text-center">
          <img
            :src="wellcomeImageUrl"
            alt="logo"
            class=""
            style="width: 200px"
          />
          <h5 class="apply-job-title title-text">Welcome Temiye!.</h5>
          <b-card-text class="mb-2 subtitle-text">
            Let’s get you started with Plenti by creating a store
          </b-card-text>

          <!--/ payment  -->
          <b-button
            class="start-button"
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            v-b-toggle.manage-store-side-bar
          >
            Create to store
          </b-button>
        </b-col>
      </div>

      <b-col
        lg="12"
        md="12"
        v-show="stats.total_stores > 0 && stats.total_transactions > 0"
      >
        <line-chart :chartsData="charts" />
      </b-col>
      <div class="col-md-12 mercahnt-welcome top-spacing" v-if="stats.total_stores > 0  && stats.total_transactions == 0">
        <b-col lg="6 text-center">
          <h5 class="apply-job-title title-text">
            Your transaction history will show here
          </h5>
          <b-card-text class="mb-2 subtitle-text">
            Create a deal to start getting transactions
          </b-card-text>
          <b-link :to="{ name: 'deals' }">
            <b-button
              class="start-button"
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            >
              Create a deal
            </b-button>
          </b-link>
        </b-col>
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
import { Skeleton } from "vue-loading-skeleton";
import LineChart from "@/views/components/highcharts/LineChart.vue";
import Ripple from "vue-ripple-directive";
import ManageStoreSideBar from "@/views/components/sidebar/ManageStoreSideBar.vue";

import axios from "axios";

import {
  BCol,
  BDropdown,
  BDropdownItem,
  BSidebar,
  BFormGroup,
  BFormInput,
  BRow,
  BLink,
  BForm,
  BButton,
  BBadge,
  BFormSelect,
  BCardText,
  VBToggle,
  BFormDatepicker,
} from "bootstrap-vue";
import { ref, onUnmounted } from "@vue/composition-api";

export default {
  directives: {
    Ripple,
    "b-toggle": VBToggle,
  },
  components: {
    datatable: Datatable,
    pagination: Pagination,
    StatisticCardHorizontal,
    ManageStoreSideBar,
    LineChart,
    Skeleton,
    BDropdown,
    BDropdownItem,
    BSidebar,
    BFormGroup,
    BFormInput,
    BRow,
    BLink,
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
    const isManageStoreSideBarActive = ref(null);

    const { baseURL, wellcomeImageUrl } = $themeConfig.app;

    return {
      resolveVerifiedVariant,
      isManageStoreSideBarActive,
      isAddNewUserSidebarActive,
      baseURL,
      wellcomeImageUrl,
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
    return {
      charts: {},
      stats: [],
      selectedStatus,
      statusOptions,
    };
  },
  methods: {
    fetchData() {
      this.getrows();
    },
    getrows(url = this.baseURL + "/merchant-dashboard") {
      //this.tableData.draw++;
      axios
        .get(url, { params: [], headers: jwtHeader() })
        .then((response) => {
          this.stats = response.data.stats;
          this.charts = response;
          console.log(this.charts);
        })
        .catch((errors) => {
          console.log(errors);
        });
    },
  },
};
</script>
<style scoped>
.btn-secondary {
  border-color: #201b33 !important;
  background-color: #201b33 !important;
}
.top-spacing {
  margin-top: 100px;
}
</style>