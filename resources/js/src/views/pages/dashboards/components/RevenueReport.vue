<template>
  <b-card
    v-if="data"
    no-body
    class="card-revenue-budget"
  >
    <b-row class="mx-0">
      <b-col
        md="12"
        class="revenue-report-wrapper"
      >
        <div class="d-sm-flex justify-content-between align-items-center mb-3">
          <h4 class="card-title mb-50 mb-sm-0">
            Top earns by store
          </h4>
        </div>
        <!-- chart -->
        <column-drill-down  :chartsData="charts"/>
      </b-col>
    </b-row>
  </b-card>
</template>
<script>
import {
  BCard, BRow, BCol, BDropdown, BDropdownItem, BButton,
} from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import { $themeColors } from '@themeConfig'
import Ripple from 'vue-ripple-directive'
import ColumnDrillDown from '@/views/components/highcharts/ColumnDrillDown.vue'
export default {
  components: {
    VueApexCharts,
    BDropdown,
    BDropdownItem,
    BCard,
    BButton,
    BRow,
    BCol,
    ColumnDrillDown
  },
  directives: {
    Ripple,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    charts: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      dashboardCharts:null,    
    }
  },
}
</script>
