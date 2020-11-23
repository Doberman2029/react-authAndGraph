import React from "react";
import GraphError from "./GraphError";

import { Line } from "react-chartjs-2";

import "../../styles/GraphData.css";

export default function GraphData({
  dataUSD,
  dataEUR,
  err,
  data,
  valuteArray,
  valuteHandler,
  valute,
}) {
  return dataUSD.length === 0 || dataEUR.length === 0 || err ? (
    <GraphError error={err} />
  ) : (
    <>
      <select className="custom-select" onChange={valuteHandler} value={valute}>
        {valuteArray.map((el, index) => (
          <option value={el} key={index}>
            {el}
          </option>
        ))}
      </select>

      <div className="custom-line">
        <Line data={data} />
      </div>
    </>
  );
}
