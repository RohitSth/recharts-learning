"use client";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

// const data01 = [
//   { x: 100, y: 200, z: 200 },
//   { x: 120, y: 100, z: 260 },
//   { x: 170, y: 300, z: 400 },
//   { x: 140, y: 250, z: 280 },
//   { x: 150, y: 400, z: 500 },
//   { x: 110, y: 280, z: 200 },
// ];

const ramData = [
  { experienceYears: 1, rating: 4.5 },
  { experienceYears: 2, rating: 3.8 },
  { experienceYears: 3, rating: 4.2 },
  { experienceYears: 4, rating: 4.2 },
];

export default function ScatterChartPage() {
  return (
    <>
      <div className="flex min-h-48 flex-col items-center justify-center px-4 md:px-8 xl:px-10">
        <div className=" bg-black rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-slate-800 flex justify-center p-11 hover:bg-opacity-25 shadow-xl shadow-blue-700 hover:shadow-blue-500">
          <ResponsiveContainer width={600} height={400}>
            <ScatterChart
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid />
              <XAxis
                type="number"
                dataKey="experienceYears"
                name="Years of Experience"
              />
              <YAxis type="number" dataKey="rating" name="Performance Rating" />
              <Tooltip cursor={{ strokeDasharray: "5 5" }} />
              <Scatter name="A" data={ramData} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
