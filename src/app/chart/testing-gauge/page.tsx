"use client";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

const data_1 = [
  { name: "Performance", value: 40 },
  { name: "Performance", value: 180 },
];

const COLORS = ["#00FF33", "#6082B6"];

const RADIAN = Math.PI / 180;

export default function DonutPage() {
  return (
    <>
      <div className="flex min-h-48 flex-col items-center justify-center px-4 md:px-8 xl:px-10">
        <div className=" bg-black rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-slate-800 flex justify-center p-11 hover:bg-opacity-25 shadow-xl shadow-blue-700 hover:shadow-blue-500">
          <ResponsiveContainer width={600} height={450}>
            <PieChart width={800} height={400}>
              <Pie
                data={data_1}
                // cx={200}
                // cy={200}
                innerRadius={80}
                // label={true}
                labelLine={false}
                outerRadius={120}
                paddingAngle={0}
                fill="#8884d8"
                dataKey="value"
                startAngle={180}
                endAngle={0}
              >
                {data_1.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              {/* <Legend /> */}
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
