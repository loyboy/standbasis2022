<template>
  <section id="dashboard-ecommerce">
    <b-row class="match-height flex-right">
      <b-col xl="4" md="12">
        <flat-pickr
          v-model="rangeDate"
          class="form-control"
          placeholder="Select date range to filter dashboard"
          :config="{ mode: 'range' }"
        />
      </b-col>
    </b-row>
    <b-row class="match-height">
      <b-col xl="12" md="12">
        <template v-if="stats.statisticsItems">
          <statistics :data="stats.statisticsItems" />
        </template>
        <Skeleton :count="1" v-else />
      </b-col>
    </b-row>
    <b-row class="match-height">
      <b-col lg="6">
        <template v-if="data.statisticsProfit">
          <b-row class="match-height">
            <!-- Bar Chart - Orders -->
            <b-col lg="4" md="3" cols="12">
              <order-chart
                :data="data.statisticsOrder"
                :stats="$store.state.tableData.profitStats"
              />
            </b-col>
            <!--/ Bar Chart - Orders -->
            <b-col lg="4" md="3" cols="12">
              <profit-chart
                :data="data.statisticsProfit"
                :stats="$store.state.tableData.profitStats"
              />
            </b-col>
            <b-col lg="4" md="3" cols="12">
              <bill-comission-card
                :data="data.statisticsProfit"
                :stats="$store.state.tableData.profitStats"
              />
            </b-col>
            <b-col lg="12" md="12">
              <transtions-trend :charts="charts" />
            </b-col>
          </b-row>
        </template>
        <Skeleton :count="1" v-else />
      </b-col>
      <!-- Revenue Report Card -->
      <b-col lg="6">
        <revenue-report :data="data.revenue" :charts="charts" />
      </b-col>
      <!--/ Revenue Report Card -->

      <b-col cols="12">
        <bottom-table />
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";
import useJwt from "@/auth/jwt/useJwt";

import { getUserData } from "@/auth/utils";
import Statistics from "./components/Statistics.vue";
import OrderChart from "./components/OrderChart.vue";
import ProfitChart from "./components/ProfitChart.vue";
import BillComissionCard from "./components/BillComissionCard.vue";
import TranstionsTrend from "./components/TranstionsTrend.vue";
import RevenueReport from "./components/RevenueReport.vue";
import BottomTable from "./components/BottomTable.vue";
import flatPickr from "vue-flatpickr-component";
import { Skeleton } from "vue-loading-skeleton";

export default {
  components: {
    BRow,
    BCol,
    Skeleton,
    flatPickr,
    Statistics,
    OrderChart,
    ProfitChart,
    BillComissionCard,
    TranstionsTrend,
    RevenueReport,
    BottomTable,
  },
  data() {
    return {
      rangeDate: null,
      data: {},
      stats: {},
      charts: {},
      transactions: {},
    };
  },
  mounted() {
    this.$store.dispatch("tableData/getVTUProfits");
  },
  watch: {
    rangeDate: function (value, mutation) {
      this.$store.dispatch("tableData/getVTUProfits", value);
      useJwt
        .getDashboardCharts(value)
        .then((response) => {
          this.charts = response;
          this.stats = response.data;
        })
        .catch((error) => {
          // TODO
        });
    },
  },
  created() {
    // data
    this.$http.get("/ecommerce/data").then((response) => {
      this.data = response.data;
      const userData = getUserData();
    });

    useJwt
      .getDashboardCharts()
      .then((response) => {
        this.charts = response;
        this.stats = response.data;
      })
      .catch((error) => {
        // TODO
      });
  },
};
</script>

<style lang="scss">
@import "~@core/scss/vue/pages/dashboard-ecommerce.scss";
@import "~@core/scss/vue/libs/chart-apex.scss";
@import "~@core/scss/vue/libs/vue-good-table.scss";
@import "~@core/scss/vue/libs/vue-flatpicker.scss";
</style>

