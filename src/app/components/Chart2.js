"use client";
import { useState } from "react";
import { BarChart, Bar, Tooltip, Legend, ResponsiveContainer } from "recharts";

const numberFormatter = new Intl.NumberFormat("en-US");

// Function to generate dummy data for a given week
const generateDummyData = () => {
  const services = ["X-ray", "Laboratory", "Ultrasound", "Pharmacy", "CT Scan"];
  return services.map((service) => ({
    name: service,
    revenue: Math.floor(Math.random() * 50000) + 10000, // Random revenue between 10,000 and 60,000
    fill:
      service === "X-ray"
        ? "#4C6B8C"
        : service === "Laboratory"
        ? "#F4A300"
        : service === "Ultrasound"
        ? "#38B2AC"
        : service === "Pharmacy"
        ? "#8884d8"
        : "#FF6347", // CT Scan
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

export default function Chart2() {
  const [selectedOption, setSelectedOption] = useState("this week");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  // Get the data for the selected week
  const data = dummyDataByWeek[selectedOption];

  return (
    <div className="bg-white rounded-xl w-full h-full p-4 relative">
      <div className="mb-2 flex justify-between items-center">
        <h2 className="text-lg font-semibold capitalize">
          revenue generated {selectedOption}
        </h2>
        <div className="relative">
          {/* "..." Button */}
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-xl focus:outline-none"
          >
            ...
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div
              className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
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
                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
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
