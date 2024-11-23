"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", revenue: 40000, expense: 24900, profit: 16070 },
  { name: "Feb", revenue: 45200, expense: 25200, profit: 20200 },
  { name: "Mar", revenue: 50300, expense: 28300, profit: 22300 },
  { name: "Apr", revenue: 55400, expense: 29400, profit: 26400 },
  { name: "May", revenue: 60400, expense: 31400, profit: 29400 },
  { name: "Jun", revenue: 65400, expense: 34200, profit: 33040 },
  { name: "Jul", revenue: 68400, expense: 34300, profit: 35400 },
  { name: "Aug", revenue: 74100, expense: 34400, profit: 37400 },
  { name: "Sep", revenue: 74400, expense: 35400, profit: 39400 },
  { name: "Oct", revenue: 77400, expense: 36400, profit: 41400 },
  { name: "Nov", revenue: 80500, expense: 37500, profit: 43500 },
  { name: "Dec", revenue: 85500, expense: 35800, profit: 47050 },
];

export default function FinanceChart() {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="mb-2">
        <h2 className="text-lg font-semibold">Finance Overview (2024)</h2>
      </div>
      <div className="w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" tick={{ fontSize: 12, fontWeight: "600" }} />

            <YAxis tick={{ fontSize: 12 }} />

            <Tooltip />

            <Legend
              wrapperStyle={{
                paddingTop: 10,
                fontSize: 12,
              }}
            />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#4C6B8C"
              strokeWidth={3}
              activeDot={{ r: 8 }}
              dot={{ stroke: "#4C6B8C", strokeWidth: 2, fill: "#fff" }}
            />

            <Line
              type="monotone"
              dataKey="expense"
              stroke="#F4A300"
              strokeWidth={3}
              activeDot={{ r: 8 }}
              dot={{ stroke: "#F4A300", strokeWidth: 2, fill: "#fff" }}
            />

            <Line
              type="monotone"
              dataKey="profit"
              stroke="#38B2AC"
              strokeWidth={3}
              activeDot={{ r: 8 }}
              dot={{ stroke: "#38B2AC", strokeWidth: 2, fill: "#fff" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
