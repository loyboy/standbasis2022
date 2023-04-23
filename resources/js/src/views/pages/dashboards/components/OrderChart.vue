<template>
  <b-card body-class="pb-50">
    <h6> {{ label }}</h6>
    
    <h2 class="font-weight-bolder mb-1">
       <!-- ₦{{ vueNumberFormat(airTimeProfit, {}) }} -->
       
      <span class="green" v-if=" Number(value) >= 70 && lowIsBad === true "> {{ value }} % </span>
      <span class="red" v-if=" Number(value) >= 70 && lowIsBad === false "> {{ value }} % </span>

      <span class="orange" v-if=" Number(value) <= 70 && Number(value) >= 50  && lowIsBad === true "> {{ value }}  % </span>
      <span class="orange" v-if=" Number(value) <= 70 && Number(value) >= 50 && lowIsBad === false "> {{ value }}  % </span>

       <span class="red" v-if="  Number(value) < 50  && lowIsBad === true "> {{ value }}  % </span>
      <span class="green" v-if=" Number(value) < 50 && lowIsBad === false "> {{ value }}  % </span>

    </h2>
    <!-- chart -->

    <vue-apex-charts
      height="70"
      :options="statisticsOrder.chartOptions"
      :series="data.series"
    />

  </b-card>
</template>

<script>
import { BCard } from "bootstrap-vue";
import VueApexCharts from "vue-apexcharts";
import { $themeColors } from "@themeConfig";
const $barColor = "#f3f3f3";

export default {
  components: {
    BCard,
    VueApexCharts
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    value: {
      type: Number,
      default: () => 0,
    },
    label: {
      type: String,
      default: () => "",
    },
    lowIsBad: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      statisticsOrder: {
        chartOptions: {
          chart: {
            type: "bar",
            stacked: true,
            toolbar: {
              show: false,
            },
          },
          grid: {
            show: false,
            padding: {
              left: 0,
              right: 0,
              top: -15,
              bottom: -15,
            },
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "20%",
              startingShape: "rounded",
              colors: {
                backgroundBarColors: [
                  $barColor,
                  $barColor,
                  $barColor,
                  $barColor,
                  $barColor,
                ],
                backgroundBarRadius: 5,
              },
            },
          },
          legend: {
            show: false,
          },
          dataLabels: {
            enabled: false,
          },
          colors: [$themeColors.warning],

          xaxis: {
            labels: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          yaxis: {
            show: false,
          },
          tooltip: {
            x: {
              show: false,
            },
          },
        }
      },
    };
  },
};
</script>

<style lang="scss">
.green{
  color: green;
}
.red{
  color: red;
}
.orange{
  color: orange
}
</style>
