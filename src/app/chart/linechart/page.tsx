"use client";

import { useState, useCallback } from "react";

import {
  LineChart,
  AreaChart,
  Area,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  CartesianAxis,
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
      <div className="flex flex-col justify-center mt-20">
        <div className="flex min-h-48 flex-col mx-auto px-4 md:px-8 xl:px-10 bg-black rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-slate-800 p-11 hover:bg-opacity-25 shadow-xl shadow-blue-700 hover:shadow-blue-500">
          <div className="text-blue-300 ml-7">
            Performance Data Of Ram of 2023
          </div>
          <div className="mt-10">
            <ResponsiveContainer width={650} height={450}>
              <LineChart data={ramData} margin={{ right: 30 }}>
                <XAxis dataKey="name" padding={{ left: 5, right: 20 }} />
                <YAxis width={50} orientation="left" tickCount={5} />

                <CartesianGrid vertical={false} strokeDasharray="6 6" />

                <Tooltip
                  content={
                    <CustomTooltip active={true} payload={[]} label="" />
                  }
                />
                {/* <Legend /> */}
                <Legend
                  width={300}
                  wrapperStyle={{
                    top: -40,
                    right: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    borderRadius: 3,
                  }}
                />

                <Line
                  type="monotone"
                  dataKey="currentPerformance"
                  stroke="#36F097"
                />
                <Line
                  type="monotone"
                  dataKey="expected"
                  stroke="#268AFF"
                  strokeDasharray="7 7"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="flex min-h-48 flex-col mx-auto px-4 md:px-8 xl:px-10 bg-black rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-slate-800 p-11 hover:bg-opacity-25 shadow-xl shadow-blue-700 hover:shadow-blue-500 my-20">
          <div className="text-blue-300 ml-7">
            Performance Data Of Ram of 2023
          </div>
          <div className="mt-10">
            <ResponsiveContainer width={650} height={450}>
              <AreaChart
                width={730}
                height={250}
                data={ramData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#36F097" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#36F097" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#268AFF" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#268AFF" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <XAxis dataKey="name" padding={{ left: 5, right: 20 }} />
                <YAxis />
                <CartesianGrid vertical={false} strokeDasharray="6 6" />
                <Tooltip
                  content={
                    <CustomTooltip active={true} payload={[]} label="" />
                  }
                />
                <Legend
                  width={300}
                  wrapperStyle={{
                    top: -40,
                    right: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    borderRadius: 3,
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="expected"
                  stroke="#36F097"
                  fillOpacity={1}
                  fill="url(#colorUv)"
                />
                <Area
                  type="monotone"
                  dataKey="currentPerformance"
                  stroke="#208AFF"
                  fillOpacity={1}
                  fill="url(#colorPv)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
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
