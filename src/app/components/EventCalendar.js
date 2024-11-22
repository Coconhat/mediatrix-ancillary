"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// Temporary events
const events = [
  {
    id: 1,
    title: "Lorem Lorem Lorem",
    time: "7:30AM - 10:00AM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem Lorem Lorem",
    time: "10:30AM - 12:00PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem Lorem Lorem",
    time: "2:00PM - 4:30PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4, // Fixed duplicate id
    title: "Lorem Lorem Lorem",
    time: "7:00PM - 4:30AM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function EventCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <h2>...</h2>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {events.map((event) => (
          <div
            className="border-2 border-[#B5D3F3] p-3 rounded-md shadow-md border-t-4 odd:border-t-[#B5D3F3] even:border-t-[#F3D3B5]"
            key={event.id}
          >
            <div className="flex items-center justify-between mb-2">
              <h1 className="font-semibold text-lg">{event.title}</h1>
              <span className="text-sm text-gray-500">{event.time}</span>
            </div>
            <p className="text-gray-700">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
