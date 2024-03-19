"use client";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { x: 100, y: 200, z: 10 },
  { x: 150, y: 400, z: 20 },
  { x: 200, y: 600, z: 30 },
  { x: 250, y: 800, z: 40 },
  { x: 300, y: 1000, z: 50 },
];

const ram_sunday = [
  { hour: "12a", index: 1, value: 70 }, // x = 12a, y = 1, z = 70
  { hour: "1a", index: 1, value: 20 },
  { hour: "2a", index: 1, value: 50 },
  { hour: "3a", index: 1, value: 20 },
  { hour: "4a", index: 1, value: 60 },
  { hour: "5a", index: 1, value: 80 },
  { hour: "6a", index: 1, value: 0 },
  { hour: "7a", index: 1, value: 20 },
  { hour: "8a", index: 1, value: 80 },
  { hour: "9a", index: 1, value: 70 },
  { hour: "10a", index: 1, value: 60 },
  { hour: "11a", index: 1, value: 70 },
  { hour: "12a", index: 1, value: 80 },
  { hour: "1p", index: 1, value: 44 },
  { hour: "2p", index: 1, value: 66 },
  { hour: "3p", index: 1, value: 4 },
  { hour: "4p", index: 1, value: 5 },
  { hour: "5p", index: 1, value: 7 },
  { hour: "6p", index: 1, value: 8 },
  { hour: "7p", index: 1, value: 65 },
  { hour: "8p", index: 1, value: 40 },
  { hour: "9p", index: 1, value: 30 },
  { hour: "10p", index: 1, value: 60 },
  { hour: "11p", index: 1, value: 44 },
];

const ram_monday = [
  { hour: "12a", index: 1, value: 0 }, // x = 12a, y = 1, z = 70
  { hour: "1a", index: 1, value: 20 },
  { hour: "2a", index: 1, value: 0 },
  { hour: "3a", index: 1, value: 20 },
  { hour: "4a", index: 1, value: 60 },
  { hour: "5a", index: 1, value: 30 },
  { hour: "6a", index: 1, value: 50 },
  { hour: "7a", index: 1, value: 20 },
  { hour: "8a", index: 1, value: 60 },
  { hour: "9a", index: 1, value: 10 },
  { hour: "10a", index: 1, value: 56 },
  { hour: "11a", index: 1, value: 40 },
  { hour: "12a", index: 1, value: 0 },
  { hour: "1p", index: 1, value: 4 },
  { hour: "2p", index: 1, value: 66 },
  { hour: "3p", index: 1, value: 5 },
  { hour: "4p", index: 1, value: 50 },
  { hour: "5p", index: 1, value: 0 },
  { hour: "6p", index: 1, value: 70 },
  { hour: "7p", index: 1, value: 65 },
  { hour: "8p", index: 1, value: 60 },
  { hour: "9p", index: 1, value: 30 },
  { hour: "10p", index: 1, value: 40 },
  { hour: "11p", index: 1, value: 60 },
];

const ram_tuesday = [
  { hour: "12a", index: 1, value: 0 }, // x = 12a, y = 1, z = 70
  { hour: "1a", index: 1, value: 0 },
  { hour: "2a", index: 1, value: 0 },
  { hour: "3a", index: 1, value: 0 },
  { hour: "4a", index: 1, value: 0 },
  { hour: "5a", index: 1, value: 0 },
  { hour: "6a", index: 1, value: 0 },
  { hour: "7a", index: 1, value: 10 },
  { hour: "8a", index: 1, value: 20 },
  { hour: "9a", index: 1, value: 40 },
  { hour: "10a", index: 1, value: 0 },
  { hour: "11a", index: 1, value: 80 },
  { hour: "12a", index: 1, value: 100 },
  { hour: "1p", index: 1, value: 100 },
  { hour: "2p", index: 1, value: 90 },
  { hour: "3p", index: 1, value: 80 },
  { hour: "4p", index: 1, value: 0 },
  { hour: "5p", index: 1, value: 90 },
  { hour: "6p", index: 1, value: 80 },
  { hour: "7p", index: 1, value: 65 },
  { hour: "8p", index: 1, value: 0 },
  { hour: "9p", index: 1, value: 0 },
  { hour: "10p", index: 1, value: 0 },
  { hour: "11p", index: 1, value: 0 },
];

const ram_wednesday = [
  { hour: "12a", index: 1, value: 0 }, // x = 12a, y = 1, z = 70
  { hour: "1a", index: 1, value: 0 },
  { hour: "2a", index: 1, value: 0 },
  { hour: "3a", index: 1, value: 0 },
  { hour: "4a", index: 1, value: 60 },
  { hour: "5a", index: 1, value: 80 },
  { hour: "6a", index: 1, value: 50 },
  { hour: "7a", index: 1, value: 20 },
  { hour: "8a", index: 1, value: 80 },
  { hour: "9a", index: 1, value: 0 },
  { hour: "10a", index: 1, value: 60 },
  { hour: "11a", index: 1, value: 72 },
  { hour: "12a", index: 1, value: 38 },
  { hour: "1p", index: 1, value: 44 },
  { hour: "2p", index: 1, value: 66 },
  { hour: "3p", index: 1, value: 45 },
  { hour: "4p", index: 1, value: 5 },
  { hour: "5p", index: 1, value: 0 },
  { hour: "6p", index: 1, value: 20 },
  { hour: "7p", index: 1, value: 65 },
  { hour: "8p", index: 1, value: 23 },
  { hour: "9p", index: 1, value: 0 },
  { hour: "10p", index: 1, value: 0 },
  { hour: "11p", index: 1, value: 0 },
];

const ram_thursday = [
  { hour: "12a", index: 1, value: 70 }, // x = 12a, y = 1, z = 70
  { hour: "1a", index: 1, value: 20 },
  { hour: "2a", index: 1, value: 50 },
  { hour: "3a", index: 1, value: 20 },
  { hour: "4a", index: 1, value: 60 },
  { hour: "5a", index: 1, value: 80 },
  { hour: "6a", index: 1, value: 0 },
  { hour: "7a", index: 1, value: 20 },
  { hour: "8a", index: 1, value: 80 },
  { hour: "9a", index: 1, value: 70 },
  { hour: "10a", index: 1, value: 60 },
  { hour: "11a", index: 1, value: 70 },
  { hour: "12a", index: 1, value: 80 },
  { hour: "1p", index: 1, value: 44 },
  { hour: "2p", index: 1, value: 66 },
  { hour: "3p", index: 1, value: 45 },
  { hour: "4p", index: 1, value: 50 },
  { hour: "5p", index: 1, value: 70 },
  { hour: "6p", index: 1, value: 80 },
  { hour: "7p", index: 1, value: 65 },
  { hour: "8p", index: 1, value: 0 },
  { hour: "9p", index: 1, value: 40 },
  { hour: "10p", index: 1, value: 70 },
  { hour: "11p", index: 1, value: 80 },
];

const ram_friday = [
  { hour: "12a", index: 1, value: 70 }, // x = 12a, y = 1, z = 70
  { hour: "1a", index: 1, value: 20 },
  { hour: "2a", index: 1, value: 50 },
  { hour: "3a", index: 1, value: 20 },
  { hour: "4a", index: 1, value: 60 },
  { hour: "5a", index: 1, value: 80 },
  { hour: "6a", index: 1, value: 0 },
  { hour: "7a", index: 1, value: 20 },
  { hour: "8a", index: 1, value: 80 },
  { hour: "9a", index: 1, value: 70 },
  { hour: "10a", index: 1, value: 60 },
  { hour: "11a", index: 1, value: 70 },
  { hour: "12a", index: 1, value: 80 },
  { hour: "1p", index: 1, value: 44 },
  { hour: "2p", index: 1, value: 66 },
  { hour: "3p", index: 1, value: 45 },
  { hour: "4p", index: 1, value: 50 },
  { hour: "5p", index: 1, value: 70 },
  { hour: "6p", index: 1, value: 80 },
  { hour: "7p", index: 1, value: 65 },
  { hour: "8p", index: 1, value: 0 },
  { hour: "9p", index: 1, value: 40 },
  { hour: "10p", index: 1, value: 70 },
  { hour: "11p", index: 1, value: 80 },
];

const ram_saturday = [
  { hour: "12a", index: 1, value: 16 },
  { hour: "1a", index: 1, value: 18 },
  { hour: "2a", index: 1, value: 0 },
  { hour: "3a", index: 1, value: 20 },
  { hour: "4a", index: 1, value: 0 },
  { hour: "5a", index: 1, value: 30 },
  { hour: "6a", index: 1, value: 10 },
  { hour: "7a", index: 1, value: 20 },
  { hour: "8a", index: 1, value: 10 },
  { hour: "9a", index: 1, value: 15 },
  { hour: "10a", index: 1, value: 16 },
  { hour: "11a", index: 1, value: 16 },
  { hour: "12a", index: 1, value: 18 },
  { hour: "1p", index: 1, value: 14 },
  { hour: "2p", index: 1, value: 16 },
  { hour: "3p", index: 1, value: 45 },
  { hour: "4p", index: 1, value: 50 },
  { hour: "5p", index: 1, value: 60 },
  { hour: "6p", index: 1, value: 80 },
  { hour: "7p", index: 1, value: 65 },
  { hour: "8p", index: 1, value: 0 },
  { hour: "9p", index: 1, value: 40 },
  { hour: "10p", index: 1, value: 60 },
  { hour: "11p", index: 1, value: 20 },
];

const parseDomain = () => [
  0,
  Math.max(
    Math.max.apply(
      null,
      ram_sunday.map((entry) => entry.value)
    ),
    Math.max.apply(
      null,
      ram_saturday.map((entry) => entry.value)
    )
  ),
];

const renderTooltip = (props: any) => {
  const { active, payload } = props;

  if (active && payload && payload.length) {
    const data = payload[0] && payload[0].payload;

    return (
      <div
        style={{
          backgroundColor: "#000",
          border: "1px solid #999",
          margin: 0,
          padding: 10,
        }}
      >
        <p>{data.hour}</p>
        <p>
          <span>value: </span>
          {data.value}
        </p>
      </div>
    );
  }

  return null;
};

export default function BubbleChartPage() {
  const domain = parseDomain();
  const range = [16, 225];
  return (
    <>
      <div className="flex min-h-48 flex-col items-center justify-center px-4 md:px-8 xl:px-10">
        <div className=" bg-black rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-slate-800 flex justify-center p-11 hover:bg-opacity-25 shadow-xl shadow-blue-700 hover:shadow-blue-500">
          <ResponsiveContainer width="100%" height={400}>
            <div>
              <ScatterChart
                width={800}
                height={60}
                margin={{
                  top: 10,
                  right: 0,
                  bottom: 0,
                  left: 0,
                }}
              >
                <XAxis
                  type="category"
                  dataKey="hour"
                  interval={0}
                  tick={{ fontSize: 0 }}
                  tickLine={{ transform: "translate(0, -6)" }}
                />
                <YAxis
                  type="number"
                  dataKey="index"
                  name="sunday"
                  height={10}
                  width={80}
                  tick={false}
                  tickLine={false}
                  axisLine={false}
                  label={{ value: "Sunday", position: "insideRight" }}
                />
                <ZAxis
                  type="number"
                  dataKey="value"
                  domain={domain}
                  range={range}
                />
                <Tooltip
                  cursor={{ strokeDasharray: "3 3" }}
                  wrapperStyle={{ zIndex: 100 }}
                  content={renderTooltip}
                />
                <Scatter data={ram_sunday} fill="#8884d8" />
              </ScatterChart>

              <ScatterChart
                width={800}
                height={60}
                margin={{
                  top: 10,
                  right: 0,
                  bottom: 0,
                  left: 0,
                }}
              >
                <XAxis
                  type="category"
                  dataKey="hour"
                  name="hour"
                  interval={0}
                  tick={{ fontSize: 0 }}
                  tickLine={{ transform: "translate(0, -6)" }}
                />
                <YAxis
                  type="number"
                  dataKey="index"
                  height={10}
                  width={80}
                  tick={false}
                  tickLine={false}
                  axisLine={false}
                  label={{ value: "Monday", position: "insideRight" }}
                />
                <ZAxis
                  type="number"
                  dataKey="value"
                  domain={domain}
                  range={range}
                />
                <Tooltip
                  cursor={{ strokeDasharray: "3 3" }}
                  wrapperStyle={{ zIndex: 100 }}
                  content={renderTooltip}
                />
                <Scatter data={ram_monday} fill="#8884d8" stroke="#black" />
              </ScatterChart>

              <ScatterChart
                width={800}
                height={60}
                margin={{
                  top: 10,
                  right: 0,
                  bottom: 0,
                  left: 0,
                }}
              >
                <XAxis
                  type="category"
                  dataKey="hour"
                  name="hour"
                  interval={0}
                  tick={{ fontSize: 0 }}
                  tickLine={{ transform: "translate(0, -6)" }}
                />
                <YAxis
                  type="number"
                  dataKey="index"
                  height={10}
                  width={80}
                  tick={false}
                  tickLine={false}
                  axisLine={false}
                  label={{ value: "Tuesday", position: "insideRight" }}
                />
                <ZAxis
                  type="number"
                  dataKey="value"
                  domain={domain}
                  range={range}
                />
                <Tooltip
                  cursor={{ strokeDasharray: "3 3" }}
                  wrapperStyle={{ zIndex: 100 }}
                  content={renderTooltip}
                />
                <Scatter data={ram_tuesday} fill="#8884d8" stroke="#8884d8" />
              </ScatterChart>

              <ScatterChart
                width={800}
                height={60}
                margin={{
                  top: 10,
                  right: 0,
                  bottom: 0,
                  left: 0,
                }}
              >
                <XAxis
                  type="category"
                  dataKey="hour"
                  name="hour"
                  interval={0}
                  tick={{ fontSize: 0 }}
                  tickLine={{ transform: "translate(0, -6)" }}
                />
                <YAxis
                  type="number"
                  dataKey="index"
                  height={10}
                  width={80}
                  tick={false}
                  tickLine={false}
                  axisLine={false}
                  label={{ value: "Wednesday", position: "insideRight" }}
                />
                <ZAxis
                  type="number"
                  dataKey="value"
                  domain={domain}
                  range={range}
                />
                <Tooltip
                  cursor={{ strokeDasharray: "3 3" }}
                  wrapperStyle={{ zIndex: 100 }}
                  content={renderTooltip}
                />
                <Scatter data={ram_wednesday} fill="#8884d8" />
              </ScatterChart>

              <ScatterChart
                width={800}
                height={60}
                margin={{
                  top: 10,
                  right: 0,
                  bottom: 0,
                  left: 0,
                }}
              >
                <XAxis
                  type="category"
                  dataKey="hour"
                  name="hour"
                  interval={0}
                  tick={{ fontSize: 0 }}
                  tickLine={{ transform: "translate(0, -6)" }}
                />
                <YAxis
                  type="number"
                  dataKey="index"
                  height={10}
                  width={80}
                  tick={false}
                  tickLine={false}
                  axisLine={false}
                  label={{ value: "Thursday", position: "insideRight" }}
                />
                <ZAxis
                  type="number"
                  dataKey="value"
                  domain={domain}
                  range={range}
                />
                <Tooltip
                  cursor={{ strokeDasharray: "3 3" }}
                  wrapperStyle={{ zIndex: 100 }}
                  content={renderTooltip}
                />
                <Scatter data={ram_thursday} fill="#8884d8" />
              </ScatterChart>

              <ScatterChart
                width={800}
                height={60}
                margin={{
                  top: 10,
                  right: 0,
                  bottom: 0,
                  left: 0,
                }}
              >
                <XAxis
                  type="category"
                  dataKey="hour"
                  name="hour"
                  interval={0}
                  tick={{ fontSize: 0 }}
                  tickLine={{ transform: "translate(0, -6)" }}
                />
                <YAxis
                  type="number"
                  dataKey="index"
                  height={10}
                  width={80}
                  tick={false}
                  tickLine={false}
                  axisLine={false}
                  label={{ value: "Friday", position: "insideRight" }}
                />
                <ZAxis
                  type="number"
                  dataKey="value"
                  domain={domain}
                  range={range}
                />
                <Tooltip
                  cursor={{ strokeDasharray: "3 3" }}
                  wrapperStyle={{ zIndex: 100 }}
                  content={renderTooltip}
                />
                <Scatter data={ram_friday} fill="#8884d8" />
              </ScatterChart>

              <ScatterChart
                width={800}
                height={60}
                margin={{
                  top: 10,
                  right: 0,
                  bottom: 0,
                  left: 0,
                }}
              >
                <XAxis
                  type="category"
                  dataKey="hour"
                  name="hour"
                  interval={0}
                  tickLine={{ transform: "translate(0, -6)" }}
                />
                <YAxis
                  type="number"
                  dataKey="index"
                  height={10}
                  width={80}
                  tick={false}
                  tickLine={false}
                  axisLine={false}
                  label={{ value: "Saturday", position: "insideRight" }}
                />
                <ZAxis
                  type="number"
                  dataKey="value"
                  domain={domain}
                  range={range}
                />
                <Tooltip
                  cursor={{ strokeDasharray: "3 3" }}
                  wrapperStyle={{ zIndex: 100 }}
                  content={renderTooltip}
                />
                <Scatter data={ram_saturday} fill="#8884d8" />
              </ScatterChart>
            </div>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
