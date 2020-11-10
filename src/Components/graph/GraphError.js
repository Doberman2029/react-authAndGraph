import React from "react";
import GraphNotFound from "./GraphNotFound";
import GraphServerError from "./GraphServerError";

export default function GraphError({ error }) {
  if (error) {
    return <GraphServerError />;
  }
  return <GraphNotFound />;
}
