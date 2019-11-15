import Highcharts from "highcharts";
import React, { Component } from "react";
import Theme from "./theme";

import addDrilldownModule from 'highcharts/modules/drilldown';
import applyExporting from 'highcharts/modules/exporting';
import applyOffline from 'highcharts/modules/offline-exporting';
import applyDrilldown from 'highcharts/modules/drilldown';

applyDrilldown(Highcharts);
applyExporting(Highcharts);
applyOffline(Highcharts);
addDrilldownModule(Highcharts)

class barInteractiveHighcharts extends Component {

    constructor( props) {
        super( props);
        this.state = {
            major:props.major,
            minor:props.minor,
            series: [
                {
                    name: "Browsers",
                    colorByPoint: true,
                    data: [
                        {
                            name: "Chrome",
                            y: 62.74,
                            drilldown: "Chrome"
                        },
                        {
                            name: "Other",
                            y: 7.62,
                            drilldown: null
                        }
                    ]
                }
            ],
            drilldown: {
                series: [
                    {
                        name: "Chrome",
                        id: "Chrome",
                        data: [
                            [
                                "v65.0",
                                0.1
                            ],
                            [
                                "v29.0",
                                0.26
                            ]
                        ]
                    }
                ]
            }
        };
    }

    highChartsRender() {
        let chart;
        const options = {
            chart: {
                type: "column",
                renderTo: "container_interactive"
            },
            title: {
                text: ''
            },
            // subtitle: {
            //     text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
            // },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: 'Total umber of threats'
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
                        // format: '{point.y:.1f}%'
                    }
                }
            },

            tooltip: {
                // headerFormat: '<span style="font-size:12px">{series.name}: </span>',
                headerFormat: '<span style="font-size:12px"/>',
                pointFormat: '<span style="color:{"#FFF"}">{point.name}</span><br/><span style="color:{"#FFF"}">{point.y}</span> '
            },

            series: this.state.series,
            drilldown:this.state.drilldown,
            credits: {
                enabled: false
            }
        };
        let expBtnVisible = true;
        Highcharts.theme = Theme();
        Highcharts.setOptions(Highcharts.theme);
        chart = new Highcharts.chart(options);

        chart.update({
            series: this.state.major,
            drilldown:this.state.minor
        });

        chart.reflow();
        // chart.reflowNow = function(){
        //     this.containerHeight = this.options.chart.height || window.window.HighchartsAdapter.adapterRun(this.renderTo, 'height');
        //     this.containerWidth = this.options.chart.width || window.window.HighchartsAdapter.adapterRun(this.renderTo, 'width');
        //     this.setSize(this.containerWidth, this.containerHeight, false);
        //     this.hasUserSize = null;
        // }
        // chart.setSize(this.width(), this.height(), true);
        // window.addEventListener("container_interactive", function() {
        //     Highcharts.charts[0].update({
        //         exporting: {
        //             buttons: {
        //                 contextButton: {
        //                     enabled: expBtnVisible ? false : true
        //                 }
        //             }
        //         }
        //     })
        //     expBtnVisible = !expBtnVisible;
        // })
    }

    componentDidMount() {
        this.highChartsRender();

    }
    render() {

        return <div id="container_interactive"></div>;
    }
}
export default barInteractiveHighcharts;
