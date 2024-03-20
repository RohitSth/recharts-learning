"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    task: "A",
    uv: 4000,
    time: 2400,
  },
  {
    task: "B",
    uv: 3000,
    time: 1398,
  },
  {
    task: "C",
    uv: 2000,
    time: 2800,
  },
  {
    task: "D",
    uv: 2780,
    time: 3908,
  },
  {
    task: "E",
    uv: 1890,
    time: 4800,
  },
  {
    task: "F",
    uv: 2390,
    time: 3800,
  },
  {
    task: "G",
    uv: 3490,
    time: 4300,
  },
];

export default function App() {
  return (
    <LineChart
      layout="vertical"
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" />
      <YAxis dataKey="task" type="category" />
      <Tooltip />
      <Legend />
      <Line dataKey="time" stroke="#8884d8" />
      <Line dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
}
