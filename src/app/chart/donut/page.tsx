"use client";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

const data_1 = [
  { name: "Fighting", value: 400 },
  { name: "Farming", value: 300 },
  { name: "Pushing", value: 300 },
  { name: "Supporting", value: 200 },
  { name: "Versitility", value: 200 },
];

const COLORS = ["#3DFFDC", "#1ED6FF", "#268AFF", "#5A3FFF", "#1ED6FF"];

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
                innerRadius={100}
                // label={true}
                labelLine={false}
                outerRadius={126}
                paddingAngle={3}
                // fill="#8884d8"
                stroke="none"
                dataKey="value"
              >
                {data_1.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              {/* <Legend /> */}
              <Legend
                width={150}
                wrapperStyle={{
                  bottom: 0,
                  right: -20,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  // border: "1px solid #000FDC",
                  borderRadius: 4,
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
