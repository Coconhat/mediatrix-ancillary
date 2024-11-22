import Link from "next/link";
import Card from "../components/Card";
import DashboardHeader from "../components/DashboardHeader";
import ServiceRequestChart from "../components/ServiceRequestChart";
import ServiceEfficiencyChart from "../components/Chart2";
import Chart2 from "../components/Chart2";
import FinanceChart from "../components/FinanceChart";
import Calendar from "../components/EventCalendar";

export default function page() {
  return (
    <div className="h-screen flex">
      <Link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css
"
      />
      <div className="w-1/6 md:[8%] lg:[16%] xl:w-[14%]">left</div>
      <div className="w-5/6 md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA]">
        <div className="p-4 flex gap-4 flex-col md:flex-row">
          <div className="w-full lg:w-2/3 flex flex-col gap-8">
            <div className="flex gap-4 justify-between flex-wrap">
              <Card type="patient" />
              <Card type="sales" />
              <Card type="appointments" />
              <Card type="staff" />
            </div>
            <div className="flex gap-4 flex-col lg:flex-row">
              <div className="w-full lg:w-1/3 h-[450px]">
                <ServiceRequestChart />
              </div>
              <div className="w-full lg:w-2/3 h-[450px]">
                <Chart2 />
              </div>
            </div>
            <div className="w-full h-[500px]">
              <FinanceChart />
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
}
