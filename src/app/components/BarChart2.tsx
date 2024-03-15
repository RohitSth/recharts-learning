"use client";

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const salesData = [
  {
    name: "A",
    revenue: 39,
  },
  {
    name: "B",
    revenue: 75,
  },
  {
    name: "C",
    revenue: 34,
  },
  {
    name: "D",
    revenue: 66,
  },
  {
    name: "E",
    revenue: 87,
  },
  {
    name: "F",
    revenue: 50,
  },
];

const BarChartComponent = () => {
  return (
    <ResponsiveContainer width={350} height={250}>
      <BarChart
        width={400}
        height={400}
        data={salesData}
        margin={{ right: 30 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="5 5" />

        <Tooltip />
        <Legend />

        <Bar dataKey="revenue" fill="#2563eb" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
