"use client";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Fighting", value: 400 },
  { name: "Farming", value: 300 },
  { name: "Pushing", value: 300 },
  { name: "Supporting", value: 200 },
  { name: "Versitility", value: 200 },
];

const colors = ["#3DFFDC", "#1ED6FF", "#268AFF", "#1ED6FF", "#5A3FFF"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
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
    const total = data.reduce((acc, entry) => acc + entry.value, 0);
    const percentage = ((payload[0].payload.value / total) * 100).toFixed(2);

    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-indigo-400">
          <span className="ml-2">{percentage}%</span>
        </p>
      </div>
    );
  }
};

export default function PieChartPage() {
  return (
    <>
      <div className="flex min-h-48 flex-col items-center justify-center px-4 md:px-8 xl:px-10">
        <div className=" bg-black rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-slate-800 flex justify-center p-11 hover:bg-opacity-25 shadow-xl shadow-blue-700 hover:shadow-blue-500">
          <ResponsiveContainer width={600} height={450}>
            <PieChart width={800} height={400}>
              <Pie
                data={data}
                dataKey="value" // Add the dataKey property with a valid value
                // label={renderCustomizedLabel}
                outerRadius={120}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index]} />
                ))}
              </Pie>
              {/* <Legend /> */}
              <Legend
                width={150}
                wrapperStyle={{
                  top: 0,
                  right: -20,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  // border: "1px solid #000FDC",
                  borderRadius: 4,
                }}
              />
              {/* <Tooltip /> */}
              <Tooltip
                content={<CustomTooltip active={true} payload={[]} label="" />}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
