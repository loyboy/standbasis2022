<template>
  <section id="dashboard-ecommerce">

  <!--  <b-row class="match-height flex-right">
      <b-col xl="4" md="12">
        <flat-pickr
          v-model="rangeDate"
          class="form-control"
          placeholder="Select date range to filter dashboard"
          :config="{ mode: 'range' }"
        />
      </b-col>
    </b-row> -->

    <!--<b-row class="match-height">
      <b-col xl="12" md="12">
        <template v-if="stats.statisticsItems">
          <statistics :data="stats.statisticsItems" />
        </template>
        <Skeleton :count="1" v-else />
      </b-col>
    </b-row>-->

    <b-row class="match-height">
      <b-col lg="12">
        <template>
          <b-row class="match-height">
            
            <!-- Bar Chart - Orders -->
            <b-col lg="4" md="4" cols="12">
              <order-chart
                v-if=" userData.role === 'teacher' "
                :data="sampleDataSeries"
                label="Total Attendance Submitted Today"
                :lowIsBad="true"
                :value="att.submitted"
              />
              <order-chart
                v-if=" userData.role === 'principal' "
                :data="sampleDataSeries"
                label='Total Attendance Submitted by Teachers Today'
                :lowIsBad="true"
                :value="att.submitted"
              />
              <order-chart
                v-if=" userData.role === 'proprietor' "
                :data="sampleDataSeries"
                label='Total Attendance Reported by Principal Today'
                :lowIsBad="true"
                :value="att.reported"
              />
            </b-col>
            <!--/ Bar Chart - Orders -->

            <b-col lg="4" md="4" cols="12">
              <profit-chart
                v-if=" userData.role === 'teacher' "
                :data="sampleLineDataSeries"
                label="Total Lessonnote Submitted This Week"
                :lowIsBad="true"
                :value="lsn.submitted"
              />
              <profit-chart
                v-if=" userData.role === 'principal' "
                :data="sampleLineDataSeries"
                label="Total Lessonnote Approved This Week"
                :lowIsBad="true"
                :value="lsn.submitted"
              />
              <profit-chart
               v-if=" userData.role === 'proprietor' "
                :data="sampleLineDataSeries"
                label="Total Lessonnote Approved By Principal This Week"
                :lowIsBad="true"
                :value="lsn.reported"
              />
            </b-col>

            <b-col lg="4" md="4" cols="12">
              <profit-chart
                :data="sampleLineDataSeries"  
                label="M&E Flags Average"
                :lowIsBad="false"
                :value="mne.flags"              
              />
            </b-col>
           
           <!-- <b-col lg="12" md="12">
              <transtions-trend :charts="charts" />
            </b-col> -->

          </b-row>
        </template>

      <!--  <Skeleton :count="1" v-else /> -->

      </b-col>

      <!-- Revenue Report Card -->
     <!-- <b-col lg="6">
        <revenue-report :data="data.revenue" :charts="charts" />
      </b-col> -->
      <!--/ Revenue Report Card -->

      <b-col cols="12">
       <!-- <bottom-table /> -->
        <event-list :teacherId="filters.teacherId" v-if=" userData.role === 'teacher'  "/>
        <event-list :schoolId="filters.schoolId" v-if=" userData.role === 'principal'  "/>
        <event-list :schoolgroupId="filters.schoolgroup" v-if=" userData.role === 'proprietor'  "/>
      </b-col>

    </b-row>
  </section>
</template>

  <script>
  import { BRow, BCol } from "bootstrap-vue";
  import Statistics from "./components/Statistics.vue";
  import OrderChart from "./components/OrderChart.vue";
  import ProfitChart from "./components/ProfitChart.vue";
  import BillComissionCard from "./components/BillComissionCard.vue";
  import TranstionsTrend from "./components/TranstionsTrend.vue";
  import RevenueReport from "./components/RevenueReport.vue";
  import BottomTable from "./components/BottomTable.vue";
  import EventList from '../dashboard/EventList.vue'
  import flatPickr from "vue-flatpickr-component";
  import { Skeleton } from "vue-loading-skeleton";
  import store from '@/store'
  import useHomeList from './useHomeList'
  import homeStoreModule from './homeStoreModule'
  import { ref, onUnmounted ,onMounted, watch } from '@vue/composition-api'

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
      EventList
    },
    data() {
      return {
        rangeDate: null,
        userData: {},
        data: {},
        stats: {},
        charts: {},
        transactions: {},
        sampleDataSeries:{
          series: [
              {
                data: [0, 20, 5, 30, 15, 45],
              }
          ]
        },
        sampleLineDataSeries: {
          series: [
            {
              data: [0, 20, 5, 30, 15, 45],
            },
          ],
        },
      };
    },
    mounted() {
    // this.$store.dispatch("tableData/getVTUProfits");
      const storedItems = JSON.parse(localStorage.getItem('userData'));
      if (storedItems){
        this.userData = storedItems;
      }
    },
  
  /*
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
    },*/

    created() {
      // data
      /*this.$http.get("/ecommerce/data").then((response) => {
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
        });*/
    },

    setup() {
        const Home_APP_STORE_MODULE_NAME = 'app-Home';

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

        const findIfPropisPresent = ( userData.value.role === "proprietor"  );      
        const findIfPrinisPresent = ( userData.value.role === "principal" ); 
        const findIfTeacherisPresent = ( userData.value.role === "teacher" );

        const {  
          isLoading, 
          filters,   
          fetchHomeDetails,
          att,
          lsn,
          mne
        } = useHomeList();

        if( findIfPropisPresent ){        
            filters.value.schoolgroup = teacherData.value ? teacherData.value.school.owner.id : null;
        } 
        if ( findIfPrinisPresent ){         
            filters.value.schoolId = teacherData.value ? teacherData.value.school.schId : null;
        }
        if( findIfTeacherisPresent ){
          filters.value.teacherId = teacherData.value ? teacherData.value.teaId : null;
        }

        onMounted(async () => {
        // fetchHomeDetails();
        })

        return {
          isLoading, 
          filters,   
          fetchHomeDetails,
          att,
          lsn,
          mne
        }
    }


  };
  </script>

  <style lang="scss">
  @import "~@core/scss/vue/pages/dashboard-ecommerce.scss";
  @import "~@core/scss/vue/libs/chart-apex.scss";
  @import "~@core/scss/vue/libs/vue-good-table.scss";
  @import "~@core/scss/vue/libs/vue-flatpicker.scss";
  </style>

