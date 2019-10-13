import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class RadarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ["P", "E", "S", "T", "E", "L"],
        // title: {
        //   text: " Radar"
        // }
      },
      series: [
        {
          name: "Series 1",
          data: [80, 50, 30, 40, 100, 20]
        }
      ]
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="radar"
          // height={400}
          // width={400}
        />
      </div>
    );
  }
}

export default RadarChart;
