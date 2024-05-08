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

                <div class="row" style="max-height: 600px; overflow-y: scroll">
                    <div class="col-6">
                        <figure class="highcharts-figure">
                          <highcharts :options="chartOptionsTaq" class="chart"></highcharts>
                        </figure>
                    </div>
                    <div class="col-6">
                        <figure class="highcharts-figure">
                          <highcharts :options="chartOptionsTaq2" class="chart"></highcharts>
                        </figure>
                    </div>

                    <div class="col-6">
                        <figure class="highcharts-figure">
                          <highcharts :options="chartOptionsTshs" class="chart"></highcharts>
                        </figure>
                    </div>
                    <div class="col-6">
                        <figure class="highcharts-figure">
                          <highcharts :options="chartOptionsTshs2" class="chart"></highcharts>
                        </figure>
                    </div>

                    <div class="col-6">
                        <figure class="highcharts-figure">
                          <highcharts :options="chartOptionsAcademic" class="chart"></highcharts>
                        </figure>
                    </div>
                    <div class="col-6">
                        <figure class="highcharts-figure">
                          <highcharts :options="chartOptionsAcademic2" class="chart"></highcharts>
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
  import analyticsStoreModule from './analyticsStoreModule';
  import { Chart } from 'highcharts-vue'
  export default {
    components: {
      Skeleton,
      highcharts: Chart,
    },
    data() {
      return {
        chartOptionsTaq: {},
        chartOptionsTaq2: {},
        chartOptionsTshs: {},
        chartOptionsTshs2: {},
        chartOptionsAcademic: {},
        chartOptionsAcademic2: {},
      };
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
        this.displayTaqColumn();
        this.displayTaqLine();
        this.displayTshsColumn();
        this.displayTshsLine();
        this.displayAcademicColumn();
        this.displayAcademicLine();
    },
    methods: {
      //Teacher Asset Quality
      displayTaqColumn() {        
        this.chartOptionsTaq = {  
          chart: {
              type: 'column'
          },
          title: {
              text: 'Teacher Asset Quality',
              align: 'center'
          },
          xAxis: {
              categories: ['TQ GEN', 'TQ GEN P', 'TQ SC GEN', 'TQ SC P', 'TQ A&O GEN', 'TQ A&O P'],
              crosshair: true,
              accessibility: {
                  description: 'Teacher asset quality'
              }
          },
          yAxis: {
              min: 0,
              max: 10,
              title: {
                  text: '(Units)'
              }
          },
          tooltip: {
              valueSuffix: ' (Units)'
          },
          plotOptions: {
              column: {
                  pointPadding: 0.1,
                  borderWidth: 0
              }
          },
          series: [
              {
                  name: '2020',
                  data: [4.2, 3.8, 3.8, 4.4, 4.4, 4.2]
              },
              {
                  name: '2021',
                  data: [4.4, 3.6, 4.4, 4.2, 4.2, 4.0]
              },
              {
                  name: '2022',
                  data: [4.6, 4.0, 4.0, 3.4, 3.5, 3.6]
              }
          ]        
        }  
      },
      //Teacher Asset Quality
      displayTaqLine() {        
        this.chartOptionsTaq2 = {

          chart: {
              type: 'line'
          },

          title: {
            text: 'Teacher Asset Quality',
            align: 'center'
          },

          yAxis: {
            title: {
              text: 'Unit'
            }
          },

          xAxis: {
              type: 'category'
          },

          legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
          },

          plotOptions: {
            series: {
              label: {
                connectorAllowed: false
              },
              pointStart: 2020
            }
          },

          series: [{
                  name: '2020',
                  data: [ ['TQ GEN',4.2], ['TQ GEN P',3.8], ['TQ SC GEN',3.8], ['TQ SC P',4.4], ['TQ A&O GEN',4.0], ['TQ A&O P',4.2]]
              },
              {
                  name: '2021',
                  data: [ ['TQ GEN',4.0], ['TQ GEN P',3.4], ['TQ SC GEN',3.6], ['TQ SC P',4.2], ['TQ A&O GEN',4.0], ['TQ A&O P',4.6]]
              },
              {
                  name: '2022',
                  data: [ ['TQ GEN',4.0], ['TQ GEN P',3.4], ['TQ SC GEN',3.6], ['TQ SC P',4.2], ['TQ A&O GEN',4.0], ['TQ A&O P',4.6]]
              }
          ],

          responsive: {
            rules: [{
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                legend: {
                  layout: 'horizontal',
                  align: 'center',
                  verticalAlign: 'center'
                }
              }
            }]
          }


        }
      },
      //Track School Health Status
      displayTshsColumn() {        
        this.chartOptionsTshs = {  
          chart: {
              type: 'column'
          },
          title: {
              text: 'School Health Status',
              align: 'center'
          },
          xAxis: {
              categories: ['2020', '2021', '2022'],
              crosshair: true,
              accessibility: {
                description: 'School Health Status'
              }
          },
          yAxis: {
              min: 0,
              max: 5,
              title: {
                text: '(Units)'
              }
          },
          tooltip: {
              valueSuffix: ' (Units)'
          },
          plotOptions: {
              column: {
                pointPadding: 0.1,
                borderWidth: 0
              }
          },
          series: [
              {
                  name: 'Teaching Processes',
                  data: [4.2, 3.2, 3.8]
              },
              {
                  name: 'Teacher Resources',
                  data: [4.4, 3.3, 4.4]
              },
              {
                  name: 'Learning Environment',
                  data: [2.6, 4.0, 4.3]
              },
              {
                  name: 'Sustainability',
                  data: [4.6, 4.5, 4.0]
              },
              {
                  name: 'Student Development',
                  data: [4.6, 4.0, 3.4]
              },
              {
                  name: 'Academic Performance',
                  data: [4.2, 3.4, 4.4]
              },
              {
                  name: 'SSHE',
                  data: [3.2, 3.4, 3.0]
              }
          ]        
        }  
      },
      //Track School Health Status
      displayTshsLine() {        
        this.chartOptionsTshs2 = {

          chart: {
              type: 'line'
          },

          title: {
            text: 'School Health Status',
            align: 'center'
          },

          yAxis: {
            title: {
              text: '(Units)'
            }
          },

          xAxis: {
              type: 'category'
          },

          legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
          },

          plotOptions: {
            series: {
              label: {
                connectorAllowed: false
              },
            }
          },

          series: [{
                  name: 'Teaching Processes',
                  data: [ ['2020',4.2], ['2021',3.8], ['2022',3.8]]
              },
              {
                  name: 'Teacher Resources',
                  data: [ ['2020',3.4], ['2021',3.0], ['2022',3.6]]
              },
              {
                  name: 'Learning Environment',
                  data: [ ['2020',3.5], ['2021',3.3], ['2022',3.4]]
              },
              {
                  name: 'Sustainability',
                  data: [ ['2020',2.5], ['2021',3.8], ['2022',3.3]]
              },
              {
                  name: 'Student Development',
                  data: [ ['2020',3.2], ['2021',3.4], ['2022',3.0]]
              },
              {
                  name: 'Academic Performance',
                  data: [ ['2020',3.6], ['2021',3.6], ['2022',3.8]]
              },
              {
                  name: 'SSHE',
                  data: [ ['2020',3.1], ['2021',3.1], ['2022',3.9]]
              }
          ],

          responsive: {
            rules: [{
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                legend: {
                  layout: 'horizontal',
                  align: 'center',
                  verticalAlign: 'center'
                }
              }
            }]
          }


        }
      },
      //Track Academic Performance
      displayAcademicColumn() {        
        this.chartOptionsAcademic = {  
          chart: {
              type: 'column'
          },
          title: {
              text: 'Track Academic Performance',
              align: 'center'
          },
          xAxis: {
              categories: ['Term 1', 'Term 2', 'Term 3'],
              crosshair: true,
              accessibility: {
                description: 'Track Academic Performance'
              }
          },
          yAxis: {
              min: 0,
              max: 10,
              title: {
                text: '(Units)'
              }
          },
          tooltip: {
              valueSuffix: ' (Units)'
          },
          plotOptions: {
              column: {
                pointPadding: 0.2,
                borderWidth: 4
              }
          },
          series: [
              {
                  name: 'School Grade',
                  data: [8.2, 8.0, 8.5]
              },
              {
                  name: 'Transition Index',
                  data: [0.65, 0.55, 0.35]
              },
              {
                  name: 'Drag Index',
                  data: [0.1, 0.1, 0.1]
              }
          ]        
        }  
      },
      //Track Academic Performance
      displayAcademicLine() {        
        this.chartOptionsAcademic2 = {

          chart: {
              type: 'line'
          },

          title: {
            text: 'Track Academic Performance',
            align: 'center'
          },

          yAxis: {
            title: {
              text: '(Units)'
            }
          },

          xAxis: {
              type: 'category'
          },

          legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
          },

          plotOptions: {
            series: {
              label: {
                connectorAllowed: false
              },
            }
          },

          series: [{
                  name: 'School Grade',
                  data: [ ['Term 1',8.2], ['Term 2',8.65], ['Term 3',8.45]]
              },
              {
                  name: 'Transition Index',
                  data: [ ['Term 1',0.65], ['Term 2',0.35], ['Term 3',0.45]]
              },
              {
                  name: 'Drag Index',
                  data: [ ['Term 1',0.45], ['Term 2',0.27], ['Term 3',0.16]]
              },
          ],

          responsive: {
            rules: [{
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                legend: {
                  layout: 'horizontal',
                  align: 'center',
                  verticalAlign: 'center'
                }
              }
            }]
          }


        }
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
  