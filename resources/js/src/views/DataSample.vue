<template>
    <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <!-- First Column -->
        <div class="row mb-3 ">

          <div class="col min-vh-50 d-flex">
            <div class="border p-3 flex-grow-1"> 
              <iframe width="550" height="350" frameborder="0" scrolling="no" src="https://onedrive.live.com/embed?resid=25784E9435CEB7C5%211809&authkey=%21AMSOQvqB2XE3hlg&em=2&wdAllowInteractivity=False&Item=Chart%201&wdInConfigurator=True&wdInConfigurator=True"></iframe> </div>
          </div>

          <div class="col min-vh-50 d-flex">
            <div class="row"> 
                <div class="col-8">
                    <table>
                        <tr>
                            <th>Areas</th>
                            <th>Standbasis</th>
                            <th>School</th>
                        </tr>
                        <tr>
                            <td style="background-color: #2e75b6; color: black;">Teaching Processes</td>
                            <td> 100 %</td>
                            <td> 70 % </td>
                        </tr>
                        <tr>
                            <td style="background-color: #c55a11; color: black;">Teacher Resource</td>
                            <td> 100 %</td>
                            <td> 70 % </td>
                        </tr>
                        <tr>
                            <td style="background-color: #afabab; color: black;">Learning Environment</td>
                            <td> 100 %</td>
                            <td> 70 % </td>
                        </tr>
                         <tr>
                            <td style="background-color: #ffc000; color: black;">Sustainability</td>
                            <td> 100 %</td>
                            <td> 70 % </td>
                        </tr>
                         <tr>
                            <td style="background-color: #00b0f0; color: black;">Student Development</td>
                            <td> 100 %</td>
                            <td> 70 % </td>
                        </tr>
                        <tr>
                            <td style="background-color: #92d050; color: black;">Academic Performance</td>
                            <td> 100 %</td>
                            <td> 70 % </td>
                        </tr>
                        <tr>
                            <td style="background-color: #1f4e79; color: black;">Safety Health Environ. Sec.</td>
                            <td> 100 %</td>
                            <td> 70 % </td>
                        </tr>
                    </table>
                </div>

                <div class="col-4">                    
                    <div class="rounded p-4 text-center" style="background-color: #002060; color: #fff;">
                      <p class="align-middle">School Rating and Grading of Schools in the group based on one or more criteria</p>
                    </div>
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

    setup(){  
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
    background-color: #002060; /* Blue background for the first column header */
    color: white; /* White text color */
  }

  td:nth-child(2), td:nth-child(3) {
    background-color: #a6e6a2; /* Light green background for the second and third columns */
    color: black; /* Black text color */
  }
  </style>
  