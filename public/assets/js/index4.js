$(function() {
    "use strict";
    $.ajax({
        type: "GET",
        url: topEarnurl,
        data: {
            states: '',
            lga: '',
            facilities: '',
            report_type: ''
        },
        dataType: "json",
        encode: true,
    }).done(function(data) {
        console.log(data.series[0]);
        Highcharts.chart('top-earn', {
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            accessibility: {
                announceNewData: {
                    enabled: true
                }
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: 'Total percent market share'
                }

            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y}'
                    }
                }
            },

            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> of total earns<br/>'
            },

            series: [{
                name: "Browsers",
                colorByPoint: true,
                data: data.parentData
            }],
            drilldown: {
                series: data.series
            }
        });

    });

    $.ajax({
        type: "GET",
        url: trends,
        data: {
            states: '',
            lga: '',
            facilities: '',
            report_type: ''
        },
        dataType: "json",
        encode: true,
    }).done(function(data) {

        Highcharts.chart('trend', {
            chart: {
                type: 'line'
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: data.months
            },
            yAxis: {
                title: {
                    text: 'NUmber of Transactions'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> transactions<br/>'
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: false
                    },
                    enableMouseTracking: true
                }
            },
            series: data.plots
        });

    });

    $.ajax({
        type: "GET",
        url: transactionBySex,
        data: {
            states: '',
            lga: '',
            facilities: '',
            report_type: ''
        },
        dataType: "json",
        encode: true,
    }).done(function(data) {
        Highcharts.chart('gender_chart', {
            chart: {
                type: 'pie'
            },
            title: {
                text: 'Transaction by sex'
            },
            subtitle: {
                text: ''
            },

            accessibility: {
                announceNewData: {
                    enabled: true
                },
                point: {
                    valueSuffix: '%'
                }
            },

            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}: {point.y}'
                    }
                }
            },

            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> of total<br/>'
            },

            series: [{
                name: "Browsers",
                colorByPoint: true,
                data: data.parentData
            }],
            drilldown: {
                series: data.series
            }
        });
    });

});