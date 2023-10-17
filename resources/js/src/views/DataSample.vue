<template>
    <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <!-- First Column -->
        <div class="row mb-3 ">
          <div class="col min-vh-50 d-flex">
            <div class="border p-3 flex-grow-1"> <iframe width="500" height="350" frameborder="0" scrolling="no" src="https://onedrive.live.com/embed?resid=25784E9435CEB7C5%211809&authkey=%21AMSOQvqB2XE3hlg&em=2&wdAllowInteractivity=False&Item=Chart%201&wdInConfigurator=True&wdInConfigurator=True"></iframe> </div>
          </div>
          <div class="col min-vh-50 d-flex">
            <div class="row"> 
                <div class="col-6">
                    <table>
                        <tr>
                            <th>Areas</th>
                            <th>Standbasis</th>
                            <th>School</th>
                        </tr>
                        <tr>
                            <td style="background-color: #e74c3c; color: white;">Red Area</td>
                            <td>Value 1</td>
                            <td>Value A</td>
                        </tr>
                        <tr>
                            <td style="background-color: #f1c40f; color: white;">Yellow Area</td>
                            <td>Value 2</td>
                            <td>Value B</td>
                        </tr>
                        <tr>
                            <td style="background-color: #27ae60; color: white;">Green Area</td>
                            <td>Value 3</td>
                            <td>Value C</td>
                        </tr>
                    </table>
                </div>
                <div class="col-6">
                    <div> School Rating and Grading of Schools in the group baed on one or more criteria </div>
                </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col min-vh-50 d-flex">
            <div class="border p-3">Row 2, Column 1</div>
          </div>
          <div class="col min-vh-50 d-flex">
            <div class="border p-3">Row 2, Column 2</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 
  
  <script>
  import {
    BCard,
    BRow,
    BCol,
    BFormInput,
    BButton,
    BTable,
    BSidebar,
    BForm,
    BMedia,
    BAvatar,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,
  } from 'bootstrap-vue';
  import StatisticCardHorizontal from "@core/components/statistics-cards/StatisticCardHorizontal.vue";
  import vSelect from 'vue-select'
  import * as d3 from 'd3'
  
  export default {
    components: {
    
      StatisticCardHorizontal,
      BCard,
      BRow,
      BCol,
      BFormInput,
      BButton,
      BTable,
      BSidebar,
      BForm,
      BMedia,
      BAvatar,
      BLink,
      BBadge,
      BDropdown,
      BDropdownItem,
      BPagination,
  
      vSelect,
    },

    data() {

      const chartdata = [
    { date: "24-Apr-07", amount: 93.24 },
    { date: "25-Apr-07", amount: 95.35 },
    { date: "26-Apr-07", amount: 98.84 },
    { date: "27-Apr-07", amount: 99.92 },
    { date: "30-Apr-07", amount: 99.8 },
    { date: "1-May-07", amount: 99.47 },
    { date: "2-May-07", amount: 100.39 },
    { date: "3-May-07", amount: 100.4 },
    { date: "4-May-07", amount: 100.81 },
    { date: "7-May-07", amount: 103.92 },
    { date: "8-May-07", amount: 105.06 },
    { date: "9-May-07", amount: 106.88 },
    { date: "10-May-07", amount: 107.34 },
  ];  
      return {  
        chartdata
      }
    },

    mounted(){
        const width = 500;
        const height = 300;
        const svg = d3.select("#num1").attr("width", width).attr("height", height);
        const g = svg.append("g");

        //2. Parse the dates
        const parseTime = d3.timeParse("%d-%b-%y");

        //3. Creating the Chart Axes
        const x = d3
        .scaleTime()
        .domain(
            d3.extent(this.chartdata, function (d) {
            return parseTime(d.date);
            })
        )
        .rangeRound([0, width]);

        const y = d3
        .scaleLinear()
        .domain(
            d3.extent(this.chartdata, function (d) {
            return d.amount;
            })
        )
        .rangeRound([height, 0]);

        //4. Creating a Line
        const line = d3
        .line()
        .x(function (d) {
            return x(parseTime(d.date));
        })
        .y(function (d) {
            return y(d.amount);
        });

        //5. Appending the Axes to the Chart
        g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

        g.append("g")
        .call(d3.axisLeft(y))
        .append("text")
        .attr("fill", "#000")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Price ($)");    

        //6. Appending a path to the Chart
        g.append("path")
        .datum(this.chartdata)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("d", line);
    },

    setup() {   

     
      return { 
       
      }
    },
    methods: {
      handleSubmit() { 

      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .per-page-selector {
    width: 90px;
  }
  </style>
  
  <style lang="scss">
  @import '~@core/scss/vue/libs/vue-select.scss';
  /* CSS to style the table */
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 10px; /* Adjust this for spacing */
    border: 1px solid white; /* White border */
  }

  th, td {
    padding: 10px;
    text-align: center;
  }

  th {
    background-color: #3498db; /* Blue background for the first column header */
    color: white; /* White text color */
  }

  td:nth-child(2), td:nth-child(3) {
    background-color: #c3e6c1; /* Light green background for the second and third columns */
    color: black; /* Black text color */
  }
  </style>
  