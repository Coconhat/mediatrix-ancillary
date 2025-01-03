"use client";
import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Label } from "recharts";
import { TrendingUp } from "lucide-react";

const data = [
  { name: "Laboratory Tests", value: 100, fill: "#1e40af" },
  { name: "Radiology", value: 200, fill: "#2563eb" },
  { name: "Physiotherapy", value: 50, fill: "#3b82f6" },
  { name: "Pharmacy Services", value: 300, fill: "#60a5fa" },
];

const total = data.reduce((acc, curr) => acc + curr.value, 0);

export default function DonutChart() {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="mb-2 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Ancillary Service Requests</h2>
        <button className="text-xl">...</button>
      </div>
      <div className="w-full h-[300px]">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              stroke="none"
            >
              <Label
                content={({ viewBox }) => {
                  const { cx, cy } = viewBox;
                  return (
                    <text
                      x={cx}
                      y={cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="text-3xl font-bold fill-foreground"
                    >
                      {total.toLocaleString()}
                      <tspan
                        x={cx}
                        y={cy + 24}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="text-sm fill-muted-foreground"
                      >
                        requests
                      </tspan>
                    </text>
                  );
                }}
              />
            </Pie>
            <Tooltip
              content={({ payload }) => {
                if (payload && payload.length) {
                  const { name, value } = payload[0].payload;
                  return (
                    <div
                      style={{
                        backgroundColor: "#fff",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        padding: "10px",
                        fontSize: "12px",
                      }}
                    >
                      <p>{`Service: ${name}`}</p>
                      <p>{`Requests: ${value}`}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none mx-auto">
          <TrendingUp className="h-4 w-4 text-blue-500" />
          Trending up by 5.2% this month
        </div>
        <div className="leading-none text-muted-foreground mx-auto">
          Showing total service requests for the last 6 months
        </div>
      </div>
    </div>
  );
}
