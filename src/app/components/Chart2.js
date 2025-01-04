"use client";
import { useState } from "react";
import { BarChart, Bar, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { MenuIcon, TrendingDown, TrendingUp } from "lucide-react";

const numberFormatter = new Intl.NumberFormat("en-US");

// Function to generate dummy data for a given week
const generateDummyData = () => {
  const services = ["X-ray", "Laboratory", "Ultrasound", "Pharmacy", "CT Scan"];
  return services.map((service) => ({
    name: service,
    revenue: Math.floor(Math.random() * 50000) + 10000,
    fill:
      service === "X-ray"
        ? "#2e69ef"
        : service === "Laboratory"
        ? "#4a8bfa"
        : service === "Ultrasound"
        ? "#c6dfff"
        : service === "Pharmacy"
        ? "#6cacfe"
        : "#9ac9ff",
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

// Function to calculate percentage change
const calculatePercentageChange = (currentWeek, previousWeek) => {
  const currentTotal = currentWeek.reduce((sum, item) => sum + item.revenue, 0);
  const previousTotal = previousWeek.reduce(
    (sum, item) => sum + item.revenue,
    0
  );
  if (previousTotal === 0) return 0; // Avoid division by zero
  return ((currentTotal - previousTotal) / previousTotal) * 100;
};

export default function Chart2() {
  const [selectedOption, setSelectedOption] = useState("this week");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoveredBarIndex, setHoveredBarIndex] = useState(null); // Track hovered bar index

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  // Get the data for the selected week
  const data = dummyDataByWeek[selectedOption];

  // Calculate percentage change
  const previousWeekData = dummyDataByWeek["last week"];
  const percentageChange = calculatePercentageChange(data, previousWeekData);

  // Determine the color and arrow based on the percentage change
  const isPositive = percentageChange >= 0;
  const arrow = isPositive ? (
    <TrendingUp className="h-4 w-4" />
  ) : (
    <TrendingDown className="h-4 w-4" />
  );
  const color = isPositive ? "green" : "red";
  const displayPercentage = Math.abs(percentageChange).toFixed(2);

  return (
    <div className="bg-white rounded-xl w-full h-full p-4 relative shadow-sm">
      <div className="mb-2 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold capitalize">
            Revenue generated {selectedOption}
          </h2>

          <p
            className={`text-sm flex mx-auto items-center rounded-full px-3 py-1`}
            style={{
              backgroundColor: isPositive ? "#e6f4ea" : "#fce8e6",
              color: color,
            }}
          >
            {arrow} {displayPercentage}% compared to last week
          </p>
        </div>
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-xl focus:outline-none hover:bg-gray-100 rounded-full p-1 transition-colors duration-200"
          >
            <MenuIcon size={24} />
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
      <ResponsiveContainer width="100%" height={400}>
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
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
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

          <Bar
            dataKey="revenue"
            barSize={35}
            isAnimationActive={true}
            radius={[4, 4, 0, 0]} // Rounded corners for bars
            stroke="none" // Remove black stroke
            onMouseEnter={(_, index) => setHoveredBarIndex(index)} // Set hovered bar index
            onMouseLeave={() => setHoveredBarIndex(null)} // Reset hovered bar index
            style={{
              filter:
                hoveredBarIndex !== null
                  ? "drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1))"
                  : "none", // Add shadow on hover
            }}
          />

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
