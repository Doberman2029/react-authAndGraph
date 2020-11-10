import React from "react";
import GraphError from "../GraphError";
import GraphValuteSelect from "../GraphValuteSelect";
import Graph from "./Graph";

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
      <GraphValuteSelect
        value={valute}
        onChange={valuteHandler}
        className="custom-select"
        valutes={valuteArray}
      />

      <Graph data={data} />
    </>
  );
}
