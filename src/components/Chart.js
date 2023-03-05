import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <div className="shadow-[0px_1px_9px_-1px_#000000] p-5">
      <h3 className="font-bold">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd"></XAxis>
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd"></Line>
          <Tooltip></Tooltip>
          {grid && (
            <CartesianGrid
              stroke="#e0dfdf"
              strokeDasharray="5 5"
            ></CartesianGrid>
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
