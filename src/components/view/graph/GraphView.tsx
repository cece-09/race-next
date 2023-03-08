import { useEffect, useRef } from "react";
import data from "./sampleDataStructure.json";
import { Line } from "react-chartjs-2";

// * Define Types
export interface IGraphView {
  textProp: string;
}

// * Define Styles
const STYLE_BASE = "";

export function toTimeData(s: string) {
  const ts = s.split(":");
  const min = +ts[0] * 60000;
  const sec = +ts[1].replace(".", "");

  return min + sec;
}

// * Component
export const GraphView = ({ textProp }: IGraphView) => {
  // aY: position, aX: lap, line: driver

  return (
    <div className={`${STYLE_BASE}`}>
      <Line data={data} />
    </div>
  );
};
