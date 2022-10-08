import React from "react";
// import "./styles.css";

import { Line } from "react-chartjs-2";

const data = {
  labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
  datasets: [
    {
      label: "Primeras muestras",
      data: [2, 100, 2, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Muestras aleatorias",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774"
    }
  ]
};

export default function Graficos() {
  return (
    <div className="App">
      <Line data={data} />
    </div>
  );
}