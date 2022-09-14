import React from "react";
// import "./styles.css";

import { Line } from "react-chartjs-2";

const data = {
  labels: ["Aug 22", "Aug 23", "Aug 24", "Aug 25", "Aug 26", "Aug 27", "Aug 28"],
  datasets: [
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774"
    }
  ]
};

const legend = {
  display: true,
  position: "bottom",
  labels: {
    fontColor: "#323130",
    fontSize: 14
  }
};

const options = {
  title: {
    display: true,
    text: "Chart Title"
  },
  scales: {
    yAxes: [
      {
        ticks: {
          suggestedMin: 0,
          suggestedMax: 100
        }
      }
    ]
  }
};

 function Data() {
  return (
    <div className="App">
      <Line data={data} legend={legend} options={options} />
    </div>
  );
}

export default Data