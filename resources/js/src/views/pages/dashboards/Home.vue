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
     
     <!--
      <b-col lg="12">
        <template>
          <b-row class="match-height">            
            <b-col lg="4" md="6" cols="12">
              <order-chart
                v-if=" userData.role === 'teacher' "
                :data="filters.sampleDataSeries"
                label="Total Attendance Submitted in the Last 7 days"
                :lowIsBad="true"
                :value="filters.att"
              />
              <order-chart
                v-if=" userData.role === 'principal' "
                :data="filters.sampleDataSeries"
                label="Teacher's Performance: Attendance Submission (in the Last 7 days)" 
                :lowIsBad="true"
                :value="filters.att"
              />
              <order-chart
                v-if=" userData.role === 'proprietor' "
                :data="filters.sampleDataSeries"
                label="Teacher's Performance: Attendance Endorsement (in the Last 7 days)"
                :lowIsBad="true"
                :value="filters.att"
              />
            </b-col>
          

            <b-col lg="4" md="6" cols="12">
              <profit-chart
                v-if=" userData.role === 'teacher' "
                :data="filters.sampleLineDataSeries"
                label="Total Lessonnote Submitted in the Last 7 days"
                :lowIsBad="true"
                :value="filters.lsn"
              />
              <profit-chart
                v-if=" userData.role === 'principal' "
                :data="filters.sampleLineDataSeries"
                label="Teacher's Performance: Lessonnote Submission (in the Last 7 days)"
                :lowIsBad="true"
                :value="filters.lsn"
              />
              <profit-chart
               v-if=" userData.role === 'proprietor' "
                :data="filters.sampleLineDataSeries"
                label="Teacher's Performance: Lessonnote Submission (in the Last 7 days)"
                :lowIsBad="true"
                :value="filters.lsn"
              />
            </b-col>
           
           <b-col lg="12" md="12">
              <transtions-trend :charts="charts" />
            </b-col> 

          </b-row>
        </template>      

      </b-col> -->

      <b-col lg="4" v-if=" userData.role === 'teacher' || userData.role === 'principal' ">        
         <b-card bg-variant="primary" no-body>
          <b-card-body class="d-flex justify-content-between align-items-center">
           
              <b-avatar
                :variant="`light-primary`"
                size="65"
              >
                <feather-icon
                  size="26"
                  icon="ClipboardIcon"                  
                />
              </b-avatar>             

            <div class="text-column">
              <h2> <b> Attendance </b> </h2>
              
             <!-- <p><em> Look through today's  attendance list. </em></p> -->
              <router-link v-if=" userData.role === 'principal' " to = "/attendances-principal-home">Administration</router-link>
              <router-link v-if=" userData.role === 'teacher' " to = "/attendances-teacher-single">Administration</router-link>
              <router-link to = "/attendances-list">Review</router-link>
            </div>

          </b-card-body>
        </b-card>
      </b-col>

       <b-col lg="4" v-if=" userData.role === 'proprietor' || userData.role === 'principal' || userData.role === 'supervisor' ">        
         <b-card bg-variant="primary" no-body>
          <b-card-body class="d-flex justify-content-between align-items-center">
           
              <b-avatar
                :variant="`light-primary`"
                size="65"
              >
                <feather-icon
                  size="26"
                  icon="ArchiveIcon"                  
                />
              </b-avatar>             

            <div class="text-column">
              <h2> <b> School Data </b> </h2>             
             
             <b-row class="match-height">
               <b-col lg="6">   
                  <router-link v-if=" userData.role === 'proprietor' " to = "/schools-list">Schools</router-link>
                  <router-link to = "/teachers-list">Teachers</router-link>
                  <router-link to = "/enrollments-list">Enrollments</router-link>
                  <router-link to = "/classrooms-list">Classrooms</router-link>
               </b-col> 
               <b-col lg="6">      
                  <router-link to = "/calendars-list">Calendars</router-link> 
                 
                  <router-link to = "/timetables-list/teacher">Timetables</router-link>  
               </b-col> 
              </b-row>

            </div>

          </b-card-body>
        </b-card>
      </b-col>

      <b-col lg="4" v-if=" userData.role === 'teacher' || userData.role === 'principal' ">        
         <b-card bg-variant="primary" no-body>
          <b-card-body class="d-flex justify-content-between align-items-center">
           
              <b-avatar
                :variant="`light-primary`"
                size="65"
              >
                <feather-icon
                  size="26"
                  icon="ClipboardIcon"                  
                />
              </b-avatar>             

            <div class="text-column">
              <h2> <b> Lessonnote </b> </h2>
                          
               <router-link v-if=" userData.role === 'principal' " to = "/lessonnotes-list">Administration & Review </router-link> 
               <router-link v-if=" userData.role === 'teacher' " to = "/lessonnotes-teacher"> Administration </router-link> 
               <router-link v-if=" userData.role === 'teacher' " to = "/lessonnotes-list"> Review </router-link> 
             
              
            </div>

          </b-card-body>
        </b-card>
      </b-col>

      <b-col lg="4" v-if=" userData.role === 'teacher' || userData.role === 'principal' || userData.role === 'supervisor' || userData.role === 'proprietor' || userData.role === 'guardian' ">        
         <b-card bg-variant="primary" no-body>
          <b-card-body class="d-flex justify-content-between align-items-center">
           
              <b-avatar
                :variant="`light-primary`"
                size="65"
              >
                <feather-icon
                  size="26"
                  icon="ActivityIcon"                  
                />
              </b-avatar>             

            <div class="text-column">
              <h2> <b> School M&E </b> </h2>          
                               
               <router-link v-if=" userData.role === 'guardian' " to = "/attendances-student-list"> Live Attendance</router-link>               
               <router-link v-if=" userData.role !== 'guardian' " to = "/mne-attendances-list"> Attendance</router-link>
               <router-link v-if=" userData.role !== 'guardian' " to="/mne-lessonnotes-list" > Lessonnote </router-link>
               <router-link v-if=" userData.role !== 'guardian' " to = "/mne-assessments-list"> Assessment </router-link> 
              
            </div>

          </b-card-body>
        </b-card>
      </b-col>

      <b-col lg="4" v-if=" userData.role === 'proprietor' || userData.role === 'principal' || userData.role === 'supervisor' || userData.role === 'guardian' ">        
         <b-card bg-variant="primary" no-body>
          <b-card-body class="d-flex justify-content-between align-items-center">
           
              <b-avatar
                :variant="`light-primary`"
                size="65"
              >
                <feather-icon
                  size="26"
                  icon="FlagIcon"                  
                />
              </b-avatar>             

            <div class="text-column">
              <h2> <b> School Flags </b> </h2>           
             
               <router-link v-if=" userData.role === 'principal' || userData.role === 'proprietor' || userData.role === 'supervisor'  " to = "/flag-attendances-list">Attendance</router-link>
               <router-link v-if=" userData.role === 'principal' || userData.role === 'proprietor' || userData.role === 'supervisor'  " to = "/flag-lessonnotes-list">Lessonnote</router-link>
               <router-link v-if=" userData.role === 'principal' || userData.role === 'proprietor' || userData.role === 'supervisor' || userData.role === 'guardian' " to = "#">Standards</router-link>
              
            </div>

          </b-card-body>
        </b-card>
      </b-col>  

      <b-col lg="4" v-if=" userData.role !== 'dashboarduser' && userData.role !== 'proprietor' ">        
         <b-card bg-variant="primary" no-body>
          <b-card-body class="d-flex justify-content-between align-items-center">
           
              <b-avatar
                :variant="`light-primary`"
                size="65"
              >
                <feather-icon
                  size="26"
                  icon="PackageIcon"                  
                />
              </b-avatar>             

            <div class="text-column">
              <h2> <b> Resources </b> </h2>             
             
             <b-row class="match-height">
               <b-col lg="6"> 
                <a 
                  href="#" 
                  @click="handleNoticesClick"
                  v-if=" userData.role !== 'guardian' "
                >
                  Notices
                </a>
                <a 
                  href="#" 
                  @click="handleReportsClick"
                  v-if=" userData.role !== 'guardian' "
                >
                  Reports
                </a>
                <a 
                  href="#" 
                  @click="handleBulletinsClick"
                >
                  Bulletins
                </a>
                 <!-- <router-link  @click="handleNoticesClick" v-if=" userData.role !== 'guardian' " to = "#">Notices</router-link>
                  <router-link  @click="handleReportsClick"  v-if=" userData.role !== 'guardian' " to = "#">Reports</router-link>
                  <router-link @click="handleBulletinsClick" to = "#">Bulletins</router-link> -->
               </b-col> 

               <b-col lg="6">      
                 <!-- <router-link @click="handleTeachingClick" v-if=" userData.role !== 'guardian' " to = "#">Teaching</router-link> 
                  <router-link @click="handleAdminClick" v-if=" userData.role !== 'guardian' " to = "#">Administration</router-link>  --> 
                  <a 
                    href="#" 
                    @click="handleTeachingClick"
                    v-if=" userData.role !== 'guardian' "
                  >
                   Teaching
                  </a>
                  <a 
                    href="#" 
                    @click="handleAdminClick"
                    v-if=" userData.role !== 'guardian' "
                  >
                  Administration
                  </a>                              
               </b-col> 

               <b-col lg="12">
                 <router-link v-if=" userData.role !== 'guardian' " to = "#">Continuous Capacity Development </router-link>
               </b-col>

              </b-row>

            </div>

          </b-card-body>
        </b-card>
      </b-col> 

      <b-col lg="8" v-if=" userData.role === 'proprietor' || userData.role === 'supervisor' || userData.role === 'guardian' ">        
         <b-card bg-variant="primary" no-body>
          <b-card-body class="d-flex justify-content-between align-items-center">
           
              <b-avatar
                :variant="`light-primary`"
                size="65"
              >
                <feather-icon
                  size="26"
                  icon="InfoIcon"                  
                />
              </b-avatar>             

            <div class="text-column">
              <h2> <b> School Evaluation & School Rating </b> </h2>                 
               <div class="d-flex align-items-center px-2 justify-content-between">  <router-link to = "#"> Curriculum Teaching Processes Management </router-link> <span> 0% </span> </div>
               <div class="d-flex align-items-center px-2 justify-content-between">  <router-link to = "#">Instructor Resource  </router-link> <span> 0% </span> </div>
               <div class="d-flex align-items-center px-2 justify-content-between">  <router-link to = "#">Total Student Development </router-link> <span> 0% </span> </div>
               <div class="d-flex align-items-center px-2 justify-content-between">  <router-link to = "#">Learning Environment </router-link> <span> 0% </span> </div>
               <div class="d-flex align-items-center px-2 justify-content-between">  <router-link to = "#">Sustainability </router-link> <span> 0% </span> </div>
               <div class="d-flex align-items-center px-2 justify-content-between">  <router-link to = "#">Academic Performance </router-link> <span> 0% </span> </div>
               <div class="d-flex align-items-center px-2 justify-content-between">  <router-link to = "#">Safety, Health, Environment, Security </router-link> <span> 0% </span> </div>
            </div>

          </b-card-body>
        </b-card>
      </b-col>   

      <!-- Revenue Report Card -->
     <!-- <b-col lg="6">
        <revenue-report :data="data.revenue" :charts="charts" />
      </b-col> -->
      <!--/ Revenue Report Card -->
<!-- <bottom-table /> -->
     <!--   
      <b-col cols="12">       
        <event-list :teacherId="filters.teacherId" v-if=" userData.role === 'teacher'  "/>
        <event-list :schoolId="filters.schoolId" v-if=" userData.role === 'principal'  "/>
        <event-list :schoolgroupId="filters.schoolgroup" v-if=" userData.role === 'proprietor'  "/>
      </b-col>  -->

    </b-row>
  </section>
</template>

  <script>
  import { BRow, BCol, BAvatar, BCard, BCardBody } from "bootstrap-vue";
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
  import { $themeConfig } from '@themeConfig'

  export default {
    components: {
      BRow,
      BCol,
      BAvatar,
      BCard,
      BCardBody,
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
        const { homeURL } = $themeConfig.app; 

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
          fetchAttendances,
          fetchLessonnotes
        } = useHomeList();

        onMounted(() => { 
          //  const route = useRouter();
            if ( userData.value.role === "dashboarduser" ) {
              //route.push({ name: 'data-analytics-user-home' })
              window.location.href = homeURL + "/data-analytics-user"
            }
            else{
              fetchAttendances();
              fetchLessonnotes();
            }
        })

        if( findIfPropisPresent ){        
            filters.value.schoolgroup = teacherData.value ? teacherData.value.school.owner.id : null;
        } 
        if ( findIfPrinisPresent ){         
            filters.value.schoolId = teacherData.value ? teacherData.value.school.schId : null;
        }
        if( findIfTeacherisPresent ){
            filters.value.teacherId = teacherData.value ? teacherData.value.teaId : null;
        }

        return {
          isLoading, 
          filters,
          userData,   
          
          fetchAttendances,
          fetchLessonnotes
        }
    },

    methods: {
      handleNoticesClick() { 
        alert('You are being redirected to Notices File Manager. \n\n Your username is: notice.viewer\nYour Password is: 12345');
        this.$router.push('/filemanager');
      },
      handleReportsClick(){
        alert('You are being redirected to Reports File Manager. \n\n Your username is: reports.viewer\nYour Password is: 23456');
        this.$router.push('/filemanager');
      },
      handleBulletinsClick(){
        alert('You are being redirected to Bulletins File Manager. \n\n Your username is: bulletin.viewer\nYour Password is: 34567');
        this.$router.push('/filemanager');
      },
      handleTeachingClick(){
        alert('You are being redirected to Teaching Documents File Manager. \n\n Your username is: teaching.viewer\nYour Password is: 45678');
        this.$router.push('/filemanager');
      },
      handleAdminClick(){
        alert('You are being redirected to Administration Documents File Manager. \n\n Your username is: administration.viewer\nYour Password is: 56789');
        this.$router.push('/filemanager');
      }
    }
  };
  </script>
  <style scoped>      
    
    .b-avatar{
      background-color: white !important;
    }

    .icon-column i {
      font-size: 48px;
      /* Add any additional styling for the icon here */
    }

    .text-column {
      width: 70%;
      padding-left: 20px; /* Add spacing between the icon and text */
      color: #ffffff;
    }

    .text-column h2 {
      font-size: 24px;
      margin-bottom: 10px;
       color: #ffffff;
    }

    .text-column h3 {
      font-size: 18px;
      margin-bottom: 5px;
      color: #ffffff;
    }

    .text-column p {
      margin-bottom: 5px;
      font-size: 10px;
    }

    .text-column a {
      display: block;
      color: #007bff; /* Change the link color as desired */
    }
  </style>

  <style lang="scss">
  @import "~@core/scss/vue/pages/dashboard-ecommerce.scss";
  @import "~@core/scss/vue/libs/chart-apex.scss";
  @import "~@core/scss/vue/libs/vue-good-table.scss";
  @import "~@core/scss/vue/libs/vue-flatpicker.scss";
  </style>

