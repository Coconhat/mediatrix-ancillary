"use client";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  {
    count: 650,
    fill: "white",
  },
  {
    name: "Laboratory Tests",
    count: 100,
    fill: "#4C6B8C",
  },
  {
    name: "Radiology",
    count: 200,
    fill: "#F4A300",
  },
  {
    name: "Physiotherapy",
    count: 50,
    fill: "#38B2AC",
  },
  {
    name: "Pharmacy Services",
    count: 300,
    fill: "#8884d8",
  },
];

export default function ServiceRequestChart() {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="mb-2">
        <h2 className="text-lg font-semibold">Ancillary Service Requests</h2>
      </div>
      <div className="w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="10%"
            outerRadius="90%"
            barSize={20}
            data={data}
          >
            <Tooltip
              formatter={(value, name, props) => {
                const serviceData = data.find((item) => item.name === name);
                return serviceData ? [value, serviceData.name] : [value, name];
              }}
            />
            <RadialBar background dataKey="count" />
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
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
