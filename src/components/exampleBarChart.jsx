import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  color: "rgba(255, 255, 255, 1)",
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Horizontal Bar Chart",
      color: "rgba(255, 255, 255, 1)",
    },
  },
  scales: {
    yAxes: {
      ticks: {
        color: "rgba(255, 255, 255, 1)",
      },
      grid: {
        display: false,
        drawBorder: true,
      },
    },

    xAxes: {
      ticks: {
        color: "rgba(255, 255, 255, 1)",
      },
      grid: {
        circular: true,
        borderColor: "rgba(255, 255, 255, .5)",
        color: "rgba(255, 255, 255, .2)",
        borderDash: [5, 5],
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => Math.round(Math.random() * 100)),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      pointBackgroundColor: "rgba(255, 255, 255, 1)",
      fill: "start",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => Math.round(Math.random() * 100)),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      pointBackgroundColor: "rgba(255, 255, 255, 1)",
      fill: "start",
    },
  ],
};

export default function ExampleBarChart() {
  return (
    <>
      <div
        className="text-white items-center rounded shadow-xl overflow-hidden w-full md:flex bg-indigo-500"
        style={{ maxWidth: "900px" }}>
        <Bar data={data} options={options} />
      </div>
    </>
  );
}
