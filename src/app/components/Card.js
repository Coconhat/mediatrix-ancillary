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
    <div className="rounded-2xl odd:bg-[#F3D3B5] even:bg-blue-500 p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          {new Date().toLocaleDateString()}
        </span>
        <span>...</span>
      </div>
      <h1 className="text-2xl font-semibold my-4">{cardData.value}</h1>
      <h2 className="capitalize text-sm font-medium">{cardData.title}</h2>
    </div>
  );
}
