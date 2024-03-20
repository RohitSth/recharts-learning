"use client";

import { PieChart, Pie, Cell } from "recharts";

const RADIAN = Math.PI / 180;
const data = [{ name: "A", value: 180, colors: ["#ff0000", "#00ff00"] }];
const cx = 150;
const cy = 200;
const iR = 60;
const oR = 100;
const value = 120;

const needle = (
  value: number,
  data: any[],
  cx: number,
  cy: number,
  iR: number,
  oR: number,
  colors: string[]
) => {
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle
      key="circle"
      cx={x0}
      cy={y0}
      r={r}
      fill={colors[0]}
      stroke="none"
    />,
    <path
      key="path"
      d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
      stroke="#none"
      fill={`url(#grad${data[0].name})`}
    />,
    <defs key="defs">
      <linearGradient
        id={`grad${data[0].name}`}
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        {colors.map((color, index) => (
          <stop
            key={index}
            offset={`${(index * 100) / (colors.length - 1)}%`}
            stopColor={color}
          />
        ))}
      </linearGradient>
    </defs>,
  ];
};

const Page = () => {
  return (
    <>
      <div className="flex min-h-48 flex-col items-center justify-center px-4 md:px-8 xl:px-10">
        <div className=" bg-black rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-slate-800 flex justify-center p-11 hover:bg-opacity-25 shadow-xl shadow-blue-700 hover:shadow-blue-500">
          <PieChart width={400} height={500}>
            <Pie
              dataKey="value"
              startAngle={180}
              endAngle={0}
              data={data}
              cx={cx}
              cy={cy}
              innerRadius={iR}
              outerRadius={oR}
              fill="#8884d8"
              stroke="#8884d8"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={`url(#grad${entry.name})`} />
              ))}
            </Pie>
            {needle(value, data, cx, cy, iR, oR, data[0].colors)}
          </PieChart>
        </div>
      </div>
    </>
  );
};

export default Page;
