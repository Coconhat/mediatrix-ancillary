"use client";
import Link from "next/link";
import Card from "../components/Card";
import ServiceRequestChart from "../components/ServiceRequestChart";
import Chart2 from "../components/Chart2";
import FinanceChart from "../components/FinanceChart";
import DashboardNav from "../components/DashboardNav";
import { useState } from "react";

export default function Page() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const departments = [
    "All",
    "Breast Center",
    "Cardiovascular Unit",
    "Child Development and Wellness Center",
    "Clinical Pharmacy Department",
    "Clinical Nutrition and Weight Management Center",
    "Industrial Corporate Center",
    "Medical Records Department",
    "Nuclear Medicine Department",
    "Pathology and Laboratory Department",
    "Pharmacy Department",
    "Physical and Rehabilitation Department",
    "Pulmonary Department",
    "Radiology Department",
    "Satellite Branches",
    "Specialty Clinics",
  ];

  return (
    <div className="min-h-screen bg-[#F7F8FA] pt-1">
      <Link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" />
      <div className="mt-5">
        <DashboardNav
          selectedDepartment={selectedDepartment}
          setSelectedDepartment={setSelectedDepartment}
          departments={departments}
        />
      </div>
      <div className="p-4 w-full">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 mt-8">
          <Card type="patient" department={selectedDepartment} />
          <Card type="sales" department={selectedDepartment} />
          <Card type="appointments" department={selectedDepartment} />
          <Card type="staff" department={selectedDepartment} />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-sm h-[500px] p-4">
            <ServiceRequestChart department={selectedDepartment} />
          </div>
          <div className="bg-white rounded-lg shadow-sm h-[500px] p-4">
            <Chart2 department={selectedDepartment} />
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
