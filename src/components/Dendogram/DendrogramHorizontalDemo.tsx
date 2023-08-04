import React from "react";
import { dendodata } from "./dendoData";
import { Dendrogram } from "./Dendrogram";

export const DendrogramHorizontalDemo = ({ width, height }) => (
  <Dendrogram data={dendodata} width={width} height={height} />
);
