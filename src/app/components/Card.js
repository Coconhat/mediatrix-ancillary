"use client";

import { MenuIcon } from "lucide-react";
import { useState } from "react";

export default function Card({ type }) {
  const [selectedOption, setSelectedOption] = useState("This week");
  const [isDropDown, setIsDropDown] = useState(false);

  const dataMap = {
    patient: {
      title: "Total Patients",
      values: {
        "This week": "1,234",
        "Last week": "1,200",
        "Last 2 weeks": "1,150",
        "Last 3 weeks": "1,100",
        "Last month": "1,050",
      },
      percentage: {
        "This week": "2%",
        "Last week": "1.5%",
        "Last 2 weeks": "1.2%",
        "Last 3 weeks": "1%",
        "Last month": "0.8%",
      },
    },
    sales: {
      title: "Revenue This Month",
      values: {
        "This week": "₱11,200,000",
        "Last week": "₱10,800,000",
        "Last 2 weeks": "₱10,400,000",
        "Last 3 weeks": "₱10,000,000",
        "Last month": "₱9,600,000",
      },
      percentage: {
        "This week": "3%",
        "Last week": "2.5%",
        "Last 2 weeks": "2%",
        "Last 3 weeks": "1.5%",
        "Last month": "1%",
      },
    },
    appointments: {
      title: "Appointments Today",
      values: {
        "This week": "45",
        "Last week": "40",
        "Last 2 weeks": "35",
        "Last 3 weeks": "30",
        "Last month": "25",
      },
      percentage: {
        "This week": "5%",
        "Last week": "4.5%",
        "Last 2 weeks": "4%",
        "Last 3 weeks": "3.5%",
        "Last month": "3%",
      },
    },
    staff: {
      title: "Staff on Duty",
      values: {
        "This week": "30",
        "Last week": "28",
        "Last 2 weeks": "26",
        "Last 3 weeks": "24",
        "Last month": "22",
      },
      percentage: {
        "This week": "7%",
        "Last week": "6.5%",
        "Last 2 weeks": "6%",
        "Last 3 weeks": "5.5%",
        "Last month": "5%",
      },
    },
  };

  const cardData = dataMap[type] || {
    title: "Unknown",
    values: {},
    percentage: {},
  };

  function handleOptionClick(option) {
    setSelectedOption(option);
    setIsDropDown(false);
  }

  function getDateForOption(option) {
    const today = new Date();
    switch (option) {
      case "This week":
        return today;
      case "Last week":
        return new Date(today.setDate(today.getDate() - 7));
      case "Last 2 weeks":
        return new Date(today.setDate(today.getDate() - 14));
      case "Last 3 weeks":
        return new Date(today.setDate(today.getDate() - 21));
      case "Last month":
        return new Date(today.setDate(today.getDate() - 30));
    }
  }

  return (
    <div className="rounded-2xl bg-white p-4 flex-1 min-w-[130px] relative">
      <div className="flex justify-between">
        <h2 className="capitalize text-lg font-semibold text-gray-800 px-1 py-1 mb-1">
          {cardData.title}
        </h2>
        <button onClick={() => setIsDropDown(!isDropDown)}>
          <MenuIcon size={24} className="text-gray-600" />
        </button>

        {/*dropdown menu */}
        {isDropDown && (
          <div className="absolute right-0 top-12 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-gray-200 z-50">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {Object.keys(cardData.values).map((option) => (
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

      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-blue-700 px-2 py-1 rounded-full text-white">
          {getDateForOption(selectedOption).toLocaleDateString()}
        </span>
      </div>
      <h1 className="text-2xl font-semibold mt-3">
        {cardData.values[selectedOption]}
      </h1>
      <p className="text-gray-500  lowercase">
        {`+${cardData.percentage[selectedOption]} from ${selectedOption}`}
      </p>
    </div>
  );
}
