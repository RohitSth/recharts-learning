"use client";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    skill: "Python",
    percentage: 90,
  },
  {
    skill: "Java",
    percentage: 98,
  },
  {
    skill: "Django",
    percentage: 86,
  },
  {
    skill: "PHP",
    percentage: 99,
  },
  {
    skill: "HTML",
    percentage: 25,
  },
  {
    skill: "CSS",
    percentage: 65,
  },
  {
    skill: "React",
    percentage: 75,
  },
  {
    skill: "Angular",
    percentage: 55,
  },
];

export default function Page() {
  return (
    <>
      <div className="flex min-h-48 flex-col items-center justify-center px-4 md:px-8 xl:px-10">
        <div className=" bg-black rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-slate-800 flex justify-center p-11 hover:bg-opacity-25 shadow-xl shadow-blue-700 hover:shadow-blue-500">
          {data.length < 6 ? (
            <ResponsiveContainer width={600} height={450}>
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="skill" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  name="Ram"
                  dataKey="percentage"
                  fill="#6E29F7"
                  activeBar={<Rectangle fill="#509BF5" stroke="blue" />}
                />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <ResponsiveContainer width={600} height={450}>
              <RadarChart
                cx={300}
                cy={250}
                outerRadius={150}
                width={500}
                height={500}
                data={data}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey="skill" />
                <PolarRadiusAxis />
                <Radar
                  name="Ram"
                  dataKey="percentage"
                  stroke="#6E29F7"
                  fill="#6E29F7"
                  fillOpacity={0.6}
                />
                <Tooltip />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </>
  );
}
