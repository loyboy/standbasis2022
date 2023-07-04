<template>
  <section id="dashboard-analytics">
    <b-row class="match-height">

      <b-col
        lg="6"
        md="12"
      >
        <analytics-congratulation :data="filters.congratulations" v-if=" userData.role === 'admin' "/>
      </b-col>
 
      <b-col
        lg="3"
        sm="6"
        v-if=" userData.role === 'admin' || userData.role === 'proprietor' "
      >
        <statistic-card-with-area-chart
          v-if="filters.teachersGained"
          icon="UserIcon"
          color="danger"
          :statistic="kFormatter(filters.teachersGained.analyticsData.teachers)"
          statistic-title="Added Teachers (Last 7 days)"
          :chart-data="filters.teachersGained.series"
        />
      </b-col>

      <b-col
        lg="3"
        sm="6"
        v-if=" userData.role === 'admin' || userData.role === 'proprietor' "
      >
        <statistic-card-with-area-chart
          v-if="filters.schoolsGained"
          icon="UsersIcon" 
          color="warning"
          :statistic="kFormatter(filters.schoolsGained.analyticsData.schools)"
          statistic-title="Added Schools (Last 7 days)"
          :chart-data="filters.schoolsGained.series"
        />
      </b-col>
    </b-row>

    <!-- Attendance data and M&E -->
    <b-row class="match-height" v-if=" userData.role === 'admin' || userData.role === 'proprietor' ">
      <b-col lg="6">
        <analytics-avg-sessions  :data="filters.attendance.avgSessions" :name="filters.attendance.name"  />
      </b-col>
      <b-col lg="6">
        <analytics-support-tracker :data="filters.attendance.supportTracker" :name="filters.attendance.name" />
      </b-col>
    </b-row>

   <!-- Lessonnote data and M&E -->
    <b-row class="match-height" v-if=" userData.role === 'admin' || userData.role === 'proprietor'">
      <b-col lg="6">
        <analytics-avg-sessions :data="filters.lessonnote.avgSessions" :name="filters.lessonnote.name" />
      </b-col>
      <b-col lg="6">
        <analytics-support-tracker :data="filters.lessonnote.supportTracker" :name="filters.lessonnote.name" />
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
import homeStoreModule from './homeStoreModule'
import store from '@/store'
import { ref, onUnmounted ,onMounted, watch } from '@vue/composition-api'
import useHomeList from './useHomeList'

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

     setup() {
        const Home_APP_STORE_MODULE_NAME = 'app-AdminHome';

        // Register module
        if (!store.hasModule(Home_APP_STORE_MODULE_NAME)) store.registerModule(Home_APP_STORE_MODULE_NAME, homeStoreModule)
    
        // UnRegister on leave
        onUnmounted(() => {
          if (store.hasModule(Home_APP_STORE_MODULE_NAME)) store.unregisterModule(Home_APP_STORE_MODULE_NAME)
        })  
        
        const userData = ref({});
        const teacherData = ref({});

        const storedItems = JSON.parse(localStorage.getItem('userData'));
        if (storedItems){
          userData.value = storedItems;
        }

        const storedItems2 = JSON.parse(localStorage.getItem('teacherData'));
        if (storedItems2){
          teacherData.value = storedItems2;
        }

        const findIfAdminisPresent = ( userData.value.role === "admin"  );     
        const findIfPropisPresent  = ( userData.value.role === "proprietor" );      
        
        const {  
          isLoading, 
          filters,   
          fetchTeacher,
          fetchSchool,
          fetchAttendances,
          fetchAttendanceManagements,
          fetchLessonnotes,
          fetchLessonnoteManagements
        } = useHomeList();

        if( findIfPropisPresent ){        
            filters.value.schoolgroup = teacherData.value ? teacherData.value.school.owner.id : null;
        }    
        
        onMounted(() => {
            fetchTeacher();
            fetchSchool();
            fetchAttendances();
            fetchAttendanceManagements();
            fetchLessonnotes();
            fetchLessonnoteManagements();
        })           

        return {
          isLoading, 
          filters,   
          fetchTeacher,
          fetchSchool,
          fetchAttendances,
          fetchAttendanceManagements,
          fetchLessonnotes,
          fetchLessonnoteManagements
        }
    },

  methods: {
    kFormatter,
  },
}
</script>
