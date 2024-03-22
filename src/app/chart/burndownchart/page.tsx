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
    completed: 4000,
    expected: 0,
    date: 8,
  },
  {
    task: "B",
    uv: 3000,
    date: 9,
  },
  {
    task: "C",
    uv: 2000,
    date: 10,
  },
  {
    task: "D",
    uv: 2780,
    date: 11,
  },
  {
    task: "E",
    uv: 1890,
    date: 12,
  },
  {
    task: "F",
    uv: 2390,
    date: 13,
  },
  {
    task: "G",
    uv: 3490,
    date: 14,
  },
  {
    task: "H",
    uv: 3490,
    date: 14,
  },
];

export default function App() {
  return (
    <LineChart
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
      <CartesianGrid vertical={false} strokeDasharray="3 3" />
      <XAxis type="number" dataKey="date" />
      <YAxis domain={[0, data.length]} />
      <Tooltip />
      <Legend />
      <Line dataKey="" stroke="#8884d8" />
      {/* <Line dataKey="uv" stroke="#82ca9d" /> */}
    </LineChart>
  );
}
