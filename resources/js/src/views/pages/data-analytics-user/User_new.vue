<template>
    <div>
        <div class="row justify-content-center">

            <div class="col-md-12">
                <div class="row">
                    <div class="col mt-2 mb-4">
                        <div class="text-left">             
                        <h2> <b> {{ userData.schName }} </b> </h2>
                        <hr/>
                        </div>
                    </div>
                </div>

                <div class="row" style="max-height: 450px; overflow-y: scroll">
                    <div class="col-6">
                        <figure class="highcharts-figure">
                            <div id="taq"></div>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </div>    
    <!--  <figure class="highcharts-figure">
      <div id="line" v-show="showChart"></div>
      <Skeleton :count="7" v-show="!showChart" />
    </figure>-->
</template>
  <script>
  import { Skeleton } from "vue-loading-skeleton";
  import store from '@/store'
  import { ref, onUnmounted ,onMounted, watch } from '@vue/composition-api'
  import { $themeConfig } from "@themeConfig";
  import useUserList from './useUserList';
  import analyticsStoreModule from './analyticsStoreModule'
  export default {
    components: {
      Skeleton,
    },
    data() {
      return { };
    },
    setup() {
        const Dashboard_APP_STORE_MODULE_NAME = 'app-dashboard';
        const { baseURL, homeURL } = $themeConfig.app; 
        const userData = ref({});

        // Register module
        if (!store.hasModule(Dashboard_APP_STORE_MODULE_NAME)) store.registerModule(Dashboard_APP_STORE_MODULE_NAME, analyticsStoreModule )
  
        // UnRegister on leave
        onUnmounted(() => {
            if (store.hasModule(Dashboard_APP_STORE_MODULE_NAME)) store.unregisterModule(Dashboard_APP_STORE_MODULE_NAME)
        })   

        const storedItems = JSON.parse(localStorage.getItem('userData'));
        if (storedItems){
            userData.value = storedItems;
        }

        const findIfDashisPresent = ( userData.value.role === "dashboarduser"  );

        const {

            filters,

        } = useUserList();

        if( findIfDashisPresent ){
          
          filters.value.schoolId = findIfDashisPresent && userData.value ? userData.value.sch_id : null;
          
        }

        return {

            Dashboard_APP_STORE_MODULE_NAME,

            baseURL,

            userData,

            filters,

        }
    },
    mounted(){
        this.displayTaq();
    },
    methods: {
      //Teacher Asset Quality
      displayTaq() {
        
        Highcharts.chart("taq", {          
            chart: {
                type: 'bar',
            },
            title: {
                text: 'Teacher Asset Quality',
            },
            xAxis: {
                categories: ['Variable 1', 'Variable 2', 'Variable 3', 'Variable 4', 'Variable 5', 'Variable 6'],
            },
            yAxis: {
                min: 0,
                max: 10,
                title: {
                    text: 'Units',
                },
            },
            plotOptions: {
                series: {
                    stacking: 'normal',
                },
            },
            series: [
            {
                name: '2020',
                data: [5, 3, 4, 7, 2, 6],
                color: '#4CAF50', // Green
            },
            {
                name: '2021',
                data: [2, 6, 3, 5, 4, 7],
                color: '#FF9800', // Orange
            },
            {
                name: '2022',
                data: [4, 5, 6, 3, 7, 5],
                color: '#2196F3', // Blue
            },
            ],
        });
      },
    },
  };
  </script>
  <style scoped>
  .highcharts-figure,.highcharts-data-table table {
    min-width: 310px;
    max-width: 100%;
    margin: 1em auto;
  }  
  .highcharts-data-table  {
   margin: 0 !important;
  }  
  #container {
   height: 400px;
  }  
  .highcharts-data-table table {
    font-family: Verdana, sans-serif;
    border-collapse: collapse;
    border: 1px solid #ebebeb;
    margin: 10px auto;
    text-align: center;
    width: 100%;
    max-width: 500px;
  }
  .highcharts-data-table caption {
    padding: 1em 0;
    font-size: 1.2em;
    color: #555;
  }
  .highcharts-data-table th {
    font-weight: 600;
    padding: 0.5em;
  }
  .highcharts-data-table td,
  .highcharts-data-table th,
  .highcharts-data-table caption {
    padding: 0.5em;
  }
  .highcharts-data-table thead tr,
  .highcharts-data-table tr:nth-child(even) {
    background: #f8f8f8;
  }
  .highcharts-data-table tr:hover {
    background: #f1f7ff;
  }
  </style>
  