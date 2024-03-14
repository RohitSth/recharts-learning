"use client";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  Sector,
} from "recharts";

const data_1 = [
  { name: "Fighting", value: 400 },
  { name: "Farming", value: 300 },
  { name: "Pushing", value: 300 },
  { name: "Supporting", value: 200 },
  { name: "Versitility", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;

export default function DonutPage() {
  return (
    <div className="flex justify-center mt-10">
      <ResponsiveContainer width={600} height={450}>
        <PieChart width={800} height={400}>
          <Pie
            data={data_1}
            // cx={200}
            // cy={200}
            innerRadius={80}
            label={true}
            // label={renderCustomizedLabel}
            labelLine={false}
            outerRadius={120}
            paddingAngle={0}
            fill="#8884d8"
            dataKey="value"
          >
            {data_1.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
