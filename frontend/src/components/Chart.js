import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function ChartComp({ data }) {
  const chartData = {
    labels: data.map((d) => `${d.developer} (${d.date})`),
    datasets: [
      {
        label: "Hours Worked",
        data: data.map((d) => d.hours),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <div style={{ width: "70%", margin: "0 auto" }}>
      <Bar data={chartData} />
    </div>
  );
}

export default ChartComp;
