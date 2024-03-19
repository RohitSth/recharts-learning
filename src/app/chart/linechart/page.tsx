"use client";

import { useState, useCallback } from "react";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const ramData = [
  {
    name: "Jan",
    currentPerformance: 20,
    expected: 10,
  },
  {
    name: "Feb",
    currentPerformance: 40,
    expected: 20,
  },
  {
    name: "Mar",
    currentPerformance: 60,
    expected: 30,
  },
  {
    name: "Apr",
    currentPerformance: 63,
    expected: 35,
  },
  {
    name: "May",
    currentPerformance: 40,
    expected: 40,
  },
  {
    name: "Jun",
    currentPerformance: 60,
    expected: 55,
  },
  {
    name: "Jul",
    currentPerformance: 65,
    expected: 65,
  },
  {
    name: "Aug",
    currentPerformance: 55,
    expected: 70,
  },
  {
    name: "Sept",
    currentPerformance: 66,
    expected: 75,
  },
  {
    name: "Oct",
    currentPerformance: 80,
    expected: 80,
  },
  {
    name: "Nov",
    currentPerformance: 78,
    expected: 85,
  },
  {
    name: "Dec",
    currentPerformance: 82,
    expected: 90,
  },
];

const LineChartComponent = () => {
  return (
    <>
      <div className="flex min-h-48 flex-col items-center justify-center px-4 md:px-8 xl:px-10">
        <div className=" bg-black rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-slate-800 flex justify-center p-11 hover:bg-opacity-25 shadow-xl shadow-blue-700 hover:shadow-blue-500">
          <ResponsiveContainer width={650} height={450}>
            <LineChart data={ramData} margin={{ right: 30 }}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />

              <Tooltip
                content={<CustomTooltip active={false} payload={[]} label="" />}
              />
              <Legend />

              <Line
                type="monotone"
                dataKey="currentPerformance"
                stroke="#3b82f6"
              />
              <Line
                type="monotone"
                dataKey="expected"
                stroke="#8b5cf6"
                strokeDasharray="5 5"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active: boolean;
  payload: any[];
  label: string;
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-blue-400">
          currentPerformance:
          <span className="ml-2">${payload[0].value}</span>
        </p>
        <p className="text-sm text-indigo-400">
          expected:
          <span className="ml-2">${payload[1].value}</span>
        </p>
      </div>
    );
  }
};

export default LineChartComponent;
