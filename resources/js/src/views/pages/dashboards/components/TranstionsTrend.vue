<template>
  <b-card
    v-if="charts"
    class="earnings-card"
  >
    <b-row>
      <b-col cols="12">
        <b-card-title class="mb-1">
          Earnings
        </b-card-title>
      </b-col>
      <b-col cols="12">
        <!-- chart -->
        <line-chart  :chartsData="charts"/>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import {
  BCard, BRow, BCol, BCardTitle, BCardText,
} from 'bootstrap-vue'
import LineChart from '@/views/components/highcharts/LineChart.vue'
export default {
  components: {
    BCard,
    BRow,
    BCol,
    BCardTitle,
    BCardText,
    LineChart  },
  props: {
     charts: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
    }
  },
}
</script>
