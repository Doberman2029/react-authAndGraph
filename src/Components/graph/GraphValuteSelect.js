import React from "react";
import GraphValuteOptions from "./GraphValuteOptions";

export default function GraphValuteSelect({ valutes, ...rest }) {
  return (
    <select {...rest}>
      {valutes.map((el) => (
        <GraphValuteOptions value={el} key={el} />
      ))}
    </select>
  );
}
