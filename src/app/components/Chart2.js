"use client";
import { BarChart, Bar, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Page A", count: 1234, fill: "#4C6B8C" },
  { name: "Page B", count: 4321, fill: "#F4A300" },
  { name: "Page C", count: 2345, fill: "#38B2AC" },
  { name: "Page D", count: 2000, fill: "#8884d8" },
  { name: "Page E", count: 1111, fill: "#FF6347" },
  { name: "Page F", count: 3874, fill: "#FF6347" },
];

export default function Chart2() {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="mb-2">
        <h2 className="text-lg font-semibold">Tentative chart</h2>
      </div>
      <ResponsiveContainer>
        <BarChart data={data}>
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />

          <Bar dataKey="count" barSize={50} fill="#8884d8" />

          <Legend
            iconSize={10}
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{
              paddingTop: 20,
              fontSize: 12,
              color: "#666",
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
