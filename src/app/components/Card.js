import { MenuIcon } from "lucide-react";

export default function Card({ type }) {
  const dataMap = {
    patient: {
      title: "Total Patients",
      value: "1,234",
    },
    sales: {
      title: "Revenue This Month",
      value: "₱1,200,000",
    },
    appointments: {
      title: "Appointments Today",
      value: "45",
    },
    staff: {
      title: "Staff on Duty",
      value: "30",
    },
  };

  const cardData = dataMap[type] || { title: "Unknown", value: "-" };

  return (
    <div className="rounded-2xl odd:bg-[#F3D3B5] even:bg-[#B5D3F3] p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between">
        <h2 className="capitalize text-lg font-semibold text-gray-800 px-1 py-1 mb-1">
          {cardData.title}
        </h2>
        <MenuIcon
          size={24}
          className="text-gray-600" />
      </div>

      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          {new Date().toLocaleDateString()}
        </span>
      </div>
      <h1 className="text-2xl font-semibold my-4">{cardData.value}</h1>
    </div>
  );
}
