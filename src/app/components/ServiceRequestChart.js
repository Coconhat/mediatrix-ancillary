"use client";
import React, { useState } from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Label } from "recharts";
import { TrendingUp, TrendingDown, MenuIcon } from "lucide-react"; 

// Function to generate dummy data for a given week
const generateDummyData = () => {
  const services = [
    "Laboratory Tests",
    "Radiology",
    "Physiotherapy",
    "Pharmacy Services",
  ];
  return services.map((service) => ({
    name: service,
    value: Math.floor(Math.random() * 500) + 100, // Random requests between 100 and 600
    fill:
      service === "Laboratory Tests"
        ? "#4a8bfa" // Dark Blue
        : service === "Radiology"
        ? "#2e69ef" // Medium Blue
        : service === "Physiotherapy"
        ? "#c6dfff" // Light Blue
        : "#9ac9ff", // Very Light Blue
  }));
};

// Predefined dummy data for each week
const dummyDataByWeek = {
  "this week": generateDummyData(),
  "last week": generateDummyData(),
  "last 2 weeks": generateDummyData(),
  "last 3 weeks": generateDummyData(),
  "last month": generateDummyData(),
};

export default function DonutChart() {
  const [selectedOption, setSelectedOption] = useState("this week");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  // Get the data for the selected week
  const data = dummyDataByWeek[selectedOption];
  const total = data.reduce((acc, curr) => acc + curr.value, 0);

  // Calculate trending percentage (example logic)
  const previousWeekData = dummyDataByWeek["last week"];
  const currentWeekTotal = data.reduce((sum, item) => sum + item.value, 0);
  const previousWeekTotal = previousWeekData.reduce(
    (sum, item) => sum + item.value,
    0
  );
  const trendingPercentage =
    ((currentWeekTotal - previousWeekTotal) / previousWeekTotal) * 100;

  const isPositive = trendingPercentage >= 0; // Check if the trend is positive
  const arrow = isPositive ? (
    <TrendingUp className="h-4 w-4" />
  ) : (
    <TrendingDown className="h-4 w-4" />
  ); // Use appropriate arrow
  const color = isPositive ? "green" : "red"; // Set color based on trend
  const backgroundColor = isPositive ? "#e6f4ea" : "#fce8e6"; // Set background color based on trend

  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="mb-2 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Ancillary Service Requests</h2>
        <div className="relative">
          {/* "..." Button */}
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-xl focus:outline-none hover:bg-gray-100 rounded-full p-1 transition-colors duration-200"
          >
           <MenuIcon
              size={24}
              className="text-gray-600"
            />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div
              className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-gray-200 z-50"
              style={{ zIndex: 1000 }}
            >
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                {Object.keys(dummyDataByWeek).map((option) => (
                  <button
                    key={option}
                    onClick={() => handleOptionClick(option)}
                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
                    role="menuitem"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
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
              {/* Custom Label for Total and "requests" */}
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
                        y={cy + 24} // Adjust the vertical position for "requests"
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
      {/* Hospital-related text below the chart */}
      <div className="mt-4 flex flex-col gap-2 text-sm">
        <div
          className="flex items-center gap-2 font-medium leading-none mx-auto px-3 py-1 rounded-full"
          style={{
            backgroundColor: backgroundColor,
            color: color,
          }}
        >
          {arrow} Trending {isPositive ? "up" : "down"} by{" "}
          {Math.abs(trendingPercentage).toFixed(2)}% compared to last week.
        </div>
        <div className="leading-none text-muted-foreground mx-auto">
          Showing total service requests for {selectedOption}
        </div>
      </div>
    </div>
  ); 
}
