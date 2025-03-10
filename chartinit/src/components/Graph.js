import React, { Component } from "react";
import Chart from "react-apexcharts";
import "../components/Graph.css";

class Graph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
      size: "250",
      type: "bar"
    };
}

  render() {
    return (
      <div className="chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type={this.state.type}
          width={this.state.size}
        />
      </div>
    );
  }
}

export default Graph;
