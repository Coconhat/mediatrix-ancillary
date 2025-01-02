"use client";
import { BarChart, Bar, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "X-ray", revenue: 30000, fill: "#4C6B8C" },
  { name: "Laboratory", revenue: 20000, fill: "#F4A300" },
  { name: "Ultrasound", revenue: 25000, fill: "#38B2AC" },
  { name: "Pharmacy", revenue: 50000, fill: "#8884d8" },
  { name: "CT Scan", revenue: 30000, fill: "#FF6347" },
];

const numberFormatter = new Intl.NumberFormat("en-US");

export default function Chart2() {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="mb-2 flex justify-between items-center">
        <h2 className="text-lg font-semibold capitalize">
          revenue generated this week
        </h2>
        <button className="text-xl">...</button>
      </div>
      <ResponsiveContainer>
        <BarChart data={data}>
          <Tooltip
            content={({ payload }) => {
              if (payload && payload.length) {
                const { name, revenue } = payload[0].payload;
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
                    <p>{`Revenue: ₱${numberFormatter.format(revenue)}`}</p>
                  </div>
                );
              }
              return null;
            }}
          />

          <Bar dataKey="revenue" barSize={35} isAnimationActive={true} />

          <Legend
            payload={data.map((entry) => ({
              id: entry.name,
              type: "square",
              value: `${entry.name}: ₱${numberFormatter.format(entry.revenue)}`,
              color: entry.fill,
            }))}
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{
              paddingTop: 20,
              paddingBottom: 4,
              fontSize: 15,
              gap: 20,
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
