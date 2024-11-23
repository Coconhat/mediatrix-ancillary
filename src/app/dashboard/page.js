import Link from "next/link";
import Card from "../components/Card";
import ServiceRequestChart from "../components/ServiceRequestChart";
import Chart2 from "../components/Chart2";
import FinanceChart from "../components/FinanceChart";
import Calendar from "../components/EventCalendar";
import Announcement from "../components/Announcement";

export default function page() {
  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <Link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" />
      <div className="p-4 w-full">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Main Content - Left Side */}
          <div className="w-full lg:w-3/4 flex flex-col gap-6">
            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card type="patient" />
              <Card type="sales" />
              <Card type="appointments" />
              <Card type="staff" />
            </div>

            {/* Charts Section */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="w-full lg:w-2/5 bg-white rounded-lg shadow-sm h-[500px] p-4">
                <ServiceRequestChart />
              </div>
              <div className="w-full lg:w-3/5 bg-white rounded-lg shadow-sm h-[500px] p-4">
                <Chart2 />
              </div>
            </div>

            {/* Finance Chart */}
            <div className="w-full bg-white rounded-lg shadow-sm h-[500px] p-4">
              <FinanceChart />
            </div>
          </div>

          {/* Sidebar - Right Side */}
          <div className="w-full lg:w-1/4 flex flex-col gap-6">
            {/* Calendar Container */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-4 h-full">
                <h3 className="text-lg font-semibold mb-4">Calendar</h3>
                <div className="h-[600px] overflow-y-auto custom-scrollbar">
                  <Calendar />
                </div>
              </div>
            </div>

            {/* Announcement Container */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-4">
                <div className="min-h-[300px] overflow-y-auto custom-scrollbar">
                  <Announcement />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>
  );
}
