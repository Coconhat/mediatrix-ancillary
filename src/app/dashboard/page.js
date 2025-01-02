import Link from "next/link";
import Card from "../components/Card";
import ServiceRequestChart from "../components/ServiceRequestChart";
import Chart2 from "../components/Chart2";
import FinanceChart from "../components/FinanceChart";

export const metadata = {
  title: "Dashboard",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F7F8FA] pt-24">
      {" "}
      <Link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" />
      <div className="p-4 w-full">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 mt-8">
          {" "}
          {/* Added mt-8 for top margin */}
          <Card type="patient" />
          <Card type="sales" />
          <Card type="appointments" />
          <Card type="staff" />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-sm h-[500px] p-4">
            <ServiceRequestChart />
          </div>
          <div className="bg-white rounded-lg shadow-sm h-[500px] p-4">
            <Chart2 />
          </div>
        </div>

        {/* Finance Chart */}
        <div className="bg-white rounded-lg shadow-sm h-[500px] p-4">
          <FinanceChart />
        </div>
      </div>
    </div>
  );
}
