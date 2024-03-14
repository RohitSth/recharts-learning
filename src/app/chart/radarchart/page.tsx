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
  Legend,
} from "recharts";

const data = [
  {
    subject: "Math",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Chinese",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "English",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Geography",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Physics",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "History",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export default function RadarChartPage() {
  return (
    <div className="flex justify-center mt-10">
      <ResponsiveContainer width={600} height={450}>
        <RadarChart
          // cx={300}
          // cy={250}
          outerRadius={180}
          data={data}
        >
          <PolarGrid radialLines={true} gridType="polygon" />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={0} domain={[0, 150]} />
          <Radar
            name="Shyam"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Radar
            name="Ram"
            dataKey="B"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
          />
          <Legend />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
