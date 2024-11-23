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
              content={({ payload }) => {
                if (payload && payload.length) {
                  const { name, count } = payload[0].payload;
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
                      <p>{`Count: ${count}`}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <RadialBar background dataKey="count" />

            <Legend
              iconSize={12}
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{
                paddingTop: 20,
                fontSize: 12,
              }}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
