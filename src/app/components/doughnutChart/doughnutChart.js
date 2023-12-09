import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
import styles from "./doughnutChart.module.css";

const DoughnutChart = ({ data }) => {
  const maleCount = data.filter((user) => user.sex === "male").length;
  const femaleCount = data.filter((user) => user.sex === "female").length;

  const doughnutData = {
    labels: ["Male", "Female"],
    datasets: [
      {
        data: [maleCount, femaleCount],
        backgroundColor: ["blue", "yellow"],
        hoverOffset: 4,
      },
    ],
  };

  Chart.defaults.font.size = 20;

  return (
    <div className={styles.chart}>
      <Doughnut data={doughnutData} />
      <span className={styles.chart__center}>{maleCount + femaleCount}</span>
    </div>
  );
};

export default DoughnutChart;
