"use client";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data_2 = [
  {
    subject: "Fighting",
    A: 100,

    fullMark: 150,
  },
  {
    subject: "Farming",
    A: 120,

    fullMark: 150,
  },
  {
    subject: "Supporting",
    A: 86,

    fullMark: 150,
  },
  {
    subject: "Pushing",
    A: 99,

    fullMark: 150,
  },
  {
    subject: "Versitility",
    A: 20,
    fullMark: 150,
  },
];
export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="h-96 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data_2}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar
              name="Mike"
              dataKey="A"
              stroke="#2563eb"
              fill="#3b82f6"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
