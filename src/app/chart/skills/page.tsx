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
    percentage: 76,
  },
  {
    skill: "Java",
    percentage: 78,
  },
  {
    skill: "Django",
    percentage: 56,
  },
  {
    skill: "PHP",
    percentage: 59,
  },
  {
    skill: "HTML",
    percentage: 75,
  },
  {
    skill: "CSS",
    percentage: 65,
  },
  {
    skill: "React",
    percentage: 70,
  },
  {
    skill: "Ok",
    percentage: 70,
  },
];

// Custom tooltip component
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
        <p className="text-sm text-indigo-400">
          <span className="ml-2">{payload[0].payload.percentage}</span>%
        </p>
      </div>
    );
  }
};

export default function Page() {
  return (
    <>
      <div className="flex min-h-48 flex-col items-center justify-center px-4 md:px-8 xl:px-10">
        <div className=" bg-black rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-slate-800 flex justify-center p-11 hover:bg-opacity-25 shadow-xl shadow-blue-700 hover:shadow-blue-500">
          {/* Condition for changing barchart chart and radar chart*/}
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
                <XAxis dataKey="skill" padding={{ left: 20, right: 20 }} />
                <YAxis domain={[0, 100]} />
                <Tooltip
                  content={
                    <CustomTooltip active={false} payload={[]} label="" />
                  }
                />
                <CartesianGrid vertical={false} strokeDasharray="6 6" />
                <Bar
                  name="Ram"
                  dataKey="percentage"
                  fill="#6E29F7"
                  activeBar={<Rectangle fill="#268AFF" stroke="blue" />}
                />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            // Radar chart
            <ResponsiveContainer width={600} height={550}>
              <RadarChart
                // cx={300}
                // cy={250}
                // outerRadius={150}
                width={500}
                height={500}
                data={data}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey="skill" />
                <PolarRadiusAxis opacity={0} domain={[0, 100]} />
                <Radar
                  name="Ram"
                  dataKey="percentage"
                  stroke="#28B5E1"
                  strokeWidth={4}
                  fill="#28B5E1"
                  fillOpacity={0.4}
                />
                {/* <Tooltip /> */}
                {/* <Legend values="100%" /> */}
                <Tooltip
                  content={
                    <CustomTooltip active={false} payload={[]} label="" />
                  }
                />
              </RadarChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </>
  );
}
