<template>
  <figure class="highcharts-figure">
    <div id="line" v-show="showChart"></div>
    <Skeleton :count="7" v-show="!showChart" />
  </figure>
</template>
<script>
import { Skeleton } from "vue-loading-skeleton";
export default {
  components: {
    Skeleton,
  },
  props: {
    chartsData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return { showChart: false };
  },
  watch: {
    // It listens to the change in prop name
    chartsData: function () {
      this.displayHighCharts(
        this.chartsData.data.trend_charts.months,
        this.chartsData.data.trend_charts.plots
      );
    },
  },
  methods: {
    displayHighCharts(categoriesData, seriesData) {
      this.showChart = true;
      Highcharts.chart("line", {
        chart: {
          type: "line",
        },
        title: {
          text: "",
        },
        subtitle: {
          text: "",
        },
        xAxis: {
          categories: categoriesData,
        },
        yAxis: {
          title: {
            text: "Number of Transactions",
          },
        },
        colors: [
          "#5843be",
          "#ef8e54",
          "#56ad9c",
          "#759f18",
          "#5b958a",
          "#d22d3d",
        ],
        tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat:
            '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> transactions<br/>',
        },
        plotOptions: {
          line: {
            dataLabels: {
              enabled: true,
            },
            enableMouseTracking: true,
          },
        },
        series: seriesData,
      });
    },
  },
};
</script>
<style scoped>
.highcharts-figure,
.highcharts-data-table table {
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