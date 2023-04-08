import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ dataPoints }) => {
  console.log(dataPoints);
  
    const dataPointValues = dataPoints.map((point) => point.value);
  const totalMaximum = Math.max(...dataPointValues);
  console.log(totalMaximum);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;

// can use "..."dataPointValues to pull array values out into single chars.
