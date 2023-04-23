<template>
  <section id="dashboard-analytics">
    <b-row class="match-height">

      <b-col
        lg="6"
        md="12"
      >
        <analytics-congratulation :data="data.congratulations" v-if=" userData.role === 'admin' || userData.role === 'proprietor' "/>
      </b-col>
 
      <b-col
        lg="3"
        sm="6"
        v-if=" userData.role === 'admin' || userData.role === 'proprietor' "
      >
        <statistic-card-with-area-chart
          v-if="data.groupschoolsGained"
          icon="UserIcon"
          color="danger"
          :statistic="kFormatter(data.groupschoolsGained.analyticsData.groupschools)"
          statistic-title="Group of Schools"
          :chart-data="data.groupschoolsGained.series"
        />
      </b-col>

      <b-col
        lg="3"
        sm="6"
        v-if=" userData.role === 'admin' || userData.role === 'proprietor' "
      >
        <statistic-card-with-area-chart
          v-if="data.schoolsGained"
          icon="UsersIcon"
          color="warning"
          :statistic="kFormatter(data.schoolsGained.analyticsData.schools)"
          statistic-title="Schools Available"
          :chart-data="data.schoolsGained.series"
        />
      </b-col>
    </b-row>

    <!-- Attendance data and M&E -->
    <b-row class="match-height" v-if=" userData.role === 'admin' || userData.role === 'proprietor' ">
      <b-col lg="6">
        <analytics-avg-sessions  :data="data.attendance.avgSessions" :name="data.attendance.name"  />
      </b-col>
      <b-col lg="6">
        <analytics-support-tracker :data="data.attendance.supportTracker" :name="data.attendance.name" />
      </b-col>
    </b-row>

   <!-- Lessonnote data and M&E -->
    <b-row class="match-height" v-if=" userData.role === 'admin' || userData.role === 'proprietor'">
      <b-col lg="6">
        <analytics-avg-sessions :data="data.lessonnote.avgSessions" :name="data.lessonnote.name" />
      </b-col>
      <b-col lg="6">
        <analytics-support-tracker :data="data.lessonnote.supportTracker" :name="data.lessonnote.name" />
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" v-if=" userData.role === 'admin' || userData.role === 'proprietor' || userData.role === 'teacher' ">
        <event-list />
      </b-col>
    </b-row>

    <b-row class="match-height" v-if=" userData.role === 'teacher' ">
      <b-col cols="12"> 
         <chartjs-component-line-chart
            :height="400"
            :data="chartjsData.lineChart.data"
            :options="chartjsData.lineChart.options"
            :plugins="plugins"
          />
      </b-col>
    </b-row>

    
  </section>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import ChartjsComponentLineChart from './ChartjsComponentLineChart.vue'
import chartjsData from './chartjsData'
import StatisticCardWithAreaChart from '@core/components/statistics-cards/StatisticCardWithAreaChart.vue'
import { kFormatter } from '@core/utils/filter'
//import InvoiceList from '@/views/apps/invoice/invoice-list/InvoiceList.vue'
import EventList from './EventList.vue'
import AnalyticsCongratulation from './AnalyticsCongratulation.vue'
import AnalyticsAvgSessions from './AnalyticsAvgSessions.vue'
import AnalyticsSupportTracker from './AnalyticsSupportTracker.vue'
import AnalyticsTimeline from './AnalyticsTimeline.vue'
import AnalyticsSalesRadarChart from './AnalyticsSalesRadarChart.vue'
import AnalyticsAppDesign from './AnalyticsAppDesign.vue'

export default {
  components: {
    BRow,
    BCol,
    EventList,
    chartjsData,
    ChartjsComponentLineChart,
    AnalyticsCongratulation,
    AnalyticsAvgSessions,
    StatisticCardWithAreaChart,
    AnalyticsSupportTracker,
    AnalyticsTimeline,
    AnalyticsSalesRadarChart,
    AnalyticsAppDesign    
  },

  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      data: {},
      plugins: [
        // to add spacing between legends and chart
        {
          beforeInit(chart) {
            /* eslint-disable func-names, no-param-reassign */
            chart.legend.afterFit = function () {
              this.height += 20
            }
            /* eslint-enable */
          },
        },
      ],
    }
  },
 
  created() {
    // data
    this.$http.get('/analytics/data')
      .then(response => { 
        this.data = response.data; 
      })
  },
  methods: {
    kFormatter,
  },
}
</script>
