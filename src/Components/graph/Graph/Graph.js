import React from "react";
import { Line } from "react-chartjs-2";

import "./Graph.css";

export default function Graph({ data }) {
  return (
    <div className="wrapper">
      <Line data={data} />
    </div>
  );
}
