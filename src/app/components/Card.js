"use client";

import { MenuIcon } from "lucide-react";
import { useState } from "react";

export default function Card({ type, department }) {
  const [selectedOption, setSelectedOption] = useState("This week");
  const [isDropDown, setIsDropDown] = useState(false);

  // Dynamic data based on department and type
  const dataMap = {
    All: {
      patient: {
        title: "Total Patients",
        values: {
          "This week": "10,000",
          "Last week": "13,200",
          "Last 2 weeks": "14,150",
          "Last 3 weeks": "12,100",
          "Last month": "13,050",
        },
        percentage: {
          "This week": "3%",
          "Last week": "1.5%",
          "Last 2 weeks": "1.2%",
          "Last 3 weeks": "1%",
          "Last month": "0.8%",
        },
      },
      sales: {
        title: "Revenue This Month",
        values: {
          "This week": "₱111,200,000",
          "Last week": "₱101,800,000",
          "Last 2 weeks": "₱101,400,000",
          "Last 3 weeks": "₱101,000,000",
          "Last month": "₱91,600,000",
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
          "This week": "300",
          "Last week": "200",
          "Last 2 weeks": "100",
          "Last 3 weeks": "200",
          "Last month": "250",
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
          "This week": "100",
          "Last week": "89",
          "Last 2 weeks": "99",
          "Last 3 weeks": "90",
          "Last month": "80",
        },
        percentage: {
          "This week": "7%",
          "Last week": "6.5%",
          "Last 2 weeks": "6%",
          "Last 3 weeks": "5.5%",
          "Last month": "5%",
        },
      },
    },
    BreastCenter: {
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
    },
    CardiovascularUnit: {
      patient: {
        title: "Total Patients",
        values: {
          "This week": "1,500",
          "Last week": "1,450",
          "Last 2 weeks": "1,400",
          "Last 3 weeks": "1,350",
          "Last month": "1,300",
        },
        percentage: {
          "This week": "2.5%",
          "Last week": "2%",
          "Last 2 weeks": "1.8%",
          "Last 3 weeks": "1.5%",
          "Last month": "1.2%",
        },
      },
      sales: {
        title: "Revenue This Month",
        values: {
          "This week": "₱15,000,000",
          "Last week": "₱14,500,000",
          "Last 2 weeks": "₱14,000,000",
          "Last 3 weeks": "₱13,500,000",
          "Last month": "₱13,000,000",
        },
        percentage: {
          "This week": "4%",
          "Last week": "3.5%",
          "Last 2 weeks": "3%",
          "Last 3 weeks": "2.5%",
          "Last month": "2%",
        },
      },
      appointments: {
        title: "Appointments Today",
        values: {
          "This week": "60",
          "Last week": "55",
          "Last 2 weeks": "50",
          "Last 3 weeks": "45",
          "Last month": "40",
        },
        percentage: {
          "This week": "6%",
          "Last week": "5.5%",
          "Last 2 weeks": "5%",
          "Last 3 weeks": "4.5%",
          "Last month": "4%",
        },
      },
      staff: {
        title: "Staff on Duty",
        values: {
          "This week": "40",
          "Last week": "38",
          "Last 2 weeks": "36",
          "Last 3 weeks": "34",
          "Last month": "32",
        },
        percentage: {
          "This week": "8%",
          "Last week": "7.5%",
          "Last 2 weeks": "7%",
          "Last 3 weeks": "6.5%",
          "Last month": "6%",
        },
      },
    },
    ChildDevelopmentandWellnessCenter: {
      patient: {
        title: "Total Patients",
        values: {
          "This week": "800",
          "Last week": "780",
          "Last 2 weeks": "760",
          "Last 3 weeks": "740",
          "Last month": "720",
        },
        percentage: {
          "This week": "1.8%",
          "Last week": "1.6%",
          "Last 2 weeks": "1.4%",
          "Last 3 weeks": "1.2%",
          "Last month": "1%",
        },
      },
      sales: {
        title: "Revenue This Month",
        values: {
          "This week": "₱8,500,000",
          "Last week": "₱8,200,000",
          "Last 2 weeks": "₱8,000,000",
          "Last 3 weeks": "₱7,800,000",
          "Last month": "₱7,500,000",
        },
        percentage: {
          "This week": "2.2%",
          "Last week": "2%",
          "Last 2 weeks": "1.8%",
          "Last 3 weeks": "1.6%",
          "Last month": "1.4%",
        },
      },
      appointments: {
        title: "Appointments Today",
        values: {
          "This week": "30",
          "Last week": "28",
          "Last 2 weeks": "26",
          "Last 3 weeks": "24",
          "Last month": "22",
        },
        percentage: {
          "This week": "3.5%",
          "Last week": "3.2%",
          "Last 2 weeks": "3%",
          "Last 3 weeks": "2.8%",
          "Last month": "2.5%",
        },
      },
      staff: {
        title: "Staff on Duty",
        values: {
          "This week": "20",
          "Last week": "19",
          "Last 2 weeks": "18",
          "Last 3 weeks": "17",
          "Last month": "16",
        },
        percentage: {
          "This week": "4%",
          "Last week": "3.8%",
          "Last 2 weeks": "3.6%",
          "Last 3 weeks": "3.4%",
          "Last month": "3.2%",
        },
      },
    },
    ClinicalPharmacyDepartment: {
      patient: {
        title: "Total Patients",
        values: {
          "This week": "600",
          "Last week": "580",
          "Last 2 weeks": "560",
          "Last 3 weeks": "540",
          "Last month": "520",
        },
        percentage: {
          "This week": "1.5%",
          "Last week": "1.4%",
          "Last 2 weeks": "1.3%",
          "Last 3 weeks": "1.2%",
          "Last month": "1.1%",
        },
      },
      sales: {
        title: "Revenue This Month",
        values: {
          "This week": "₱6,000,000",
          "Last week": "₱5,800,000",
          "Last 2 weeks": "₱5,600,000",
          "Last 3 weeks": "₱5,400,000",
          "Last month": "₱5,200,000",
        },
        percentage: {
          "This week": "1.8%",
          "Last week": "1.7%",
          "Last 2 weeks": "1.6%",
          "Last 3 weeks": "1.5%",
          "Last month": "1.4%",
        },
      },
      appointments: {
        title: "Appointments Today",
        values: {
          "This week": "25",
          "Last week": "24",
          "Last 2 weeks": "23",
          "Last 3 weeks": "22",
          "Last month": "21",
        },
        percentage: {
          "This week": "2.5%",
          "Last week": "2.4%",
          "Last 2 weeks": "2.3%",
          "Last 3 weeks": "2.2%",
          "Last month": "2.1%",
        },
      },
      staff: {
        title: "Staff on Duty",
        values: {
          "This week": "15",
          "Last week": "14",
          "Last 2 weeks": "13",
          "Last 3 weeks": "12",
          "Last month": "11",
        },
        percentage: {
          "This week": "3%",
          "Last week": "2.9%",
          "Last 2 weeks": "2.8%",
          "Last 3 weeks": "2.7%",
          "Last month": "2.6%",
        },
      },
    },
    ClinicalNutritionandWeightManagementCenter: {
      patient: {
        title: "Total Patients",
        values: {
          "This week": "123",
          "Last week": "321",
          "Last 2 weeks": "432",
          "Last 3 weeks": "123",
          "Last month": "333",
        },
        percentage: {
          "This week": "1.5%",
          "Last week": "2.3%",
          "Last 2 weeks": "5.3%",
          "Last 3 weeks": "6.2%",
          "Last month": "4.1%",
        },
      },
      sales: {
        title: "Revenue This Month",
        values: {
          "This week": "₱7,000,000",
          "Last week": "₱6,800,000",
          "Last 2 weeks": "₱5,600,000",
          "Last 3 weeks": "₱5,400,000",
          "Last month": "₱5,200,000",
        },
        percentage: {
          "This week": "3.8%",
          "Last week": "4.7%",
          "Last 2 weeks": "5.6%",
          "Last 3 weeks": "1.5%",
          "Last month": "1.4%",
        },
      },
      appointments: {
        title: "Appointments Today",
        values: {
          "This week": "34",
          "Last week": "54",
          "Last 2 weeks": "56",
          "Last 3 weeks": "43",
          "Last month": "23",
        },
        percentage: {
          "This week": "4.5%",
          "Last week": "6.4%",
          "Last 2 weeks": "2.3%",
          "Last 3 weeks": "2.2%",
          "Last month": "2.1%",
        },
      },
      staff: {
        title: "Staff on Duty",
        values: {
          "This week": "20",
          "Last week": "14",
          "Last 2 weeks": "13",
          "Last 3 weeks": "12",
          "Last month": "11",
        },
        percentage: {
          "This week": "6%",
          "Last week": "2.9%",
          "Last 2 weeks": "2.8%",
          "Last 3 weeks": "2.7%",
          "Last month": "2.6%",
        },
      },
    },
    IndustrialCorporateCenter: {
      patient: {
        title: "Total Patients",
        values: {
          "This week": "150",
          "Last week": "140",
          "Last 2 weeks": "130",
          "Last 3 weeks": "120",
          "Last month": "110",
        },
        percentage: {
          "This week": "1.2%",
          "Last week": "1.1%",
          "Last 2 weeks": "1.0%",
          "Last 3 weeks": "0.9%",
          "Last month": "0.8%",
        },
      },
      sales: {
        title: "Revenue This Month",
        values: {
          "This week": "₱5,000,000",
          "Last week": "₱4,800,000",
          "Last 2 weeks": "₱4,600,000",
          "Last 3 weeks": "₱4,400,000",
          "Last month": "₱4,200,000",
        },
        percentage: {
          "This week": "2.5%",
          "Last week": "2.4%",
          "Last 2 weeks": "2.3%",
          "Last 3 weeks": "2.2%",
          "Last month": "2.1%",
        },
      },
      appointments: {
        title: "Appointments Today",
        values: {
          "This week": "20",
          "Last week": "18",
          "Last 2 weeks": "16",
          "Last 3 weeks": "14",
          "Last month": "12",
        },
        percentage: {
          "This week": "2.0%",
          "Last week": "1.9%",
          "Last 2 weeks": "1.8%",
          "Last 3 weeks": "1.7%",
          "Last month": "1.6%",
        },
      },
      staff: {
        title: "Staff on Duty",
        values: {
          "This week": "10",
          "Last week": "9",
          "Last 2 weeks": "8",
          "Last 3 weeks": "7",
          "Last month": "6",
        },
        percentage: {
          "This week": "1.5%",
          "Last week": "1.4%",
          "Last 2 weeks": "1.3%",
          "Last 3 weeks": "1.2%",
          "Last month": "1.1%",
        },
      },
    },
    MedicalRecordsDepartment: {
      patient: {
        title: "Total Patients",
        values: {
          "This week": "200",
          "Last week": "190",
          "Last 2 weeks": "180",
          "Last 3 weeks": "170",
          "Last month": "160",
        },
        percentage: {
          "This week": "1.5%",
          "Last week": "1.4%",
          "Last 2 weeks": "1.3%",
          "Last 3 weeks": "1.2%",
          "Last month": "1.1%",
        },
      },
      sales: {
        title: "Revenue This Month",
        values: {
          "This week": "₱3,000,000",
          "Last week": "₱2,900,000",
          "Last 2 weeks": "₱2,800,000",
          "Last 3 weeks": "₱2,700,000",
          "Last month": "₱2,600,000",
        },
        percentage: {
          "This week": "1.8%",
          "Last week": "1.7%",
          "Last 2 weeks": "1.6%",
          "Last 3 weeks": "1.5%",
          "Last month": "1.4%",
        },
      },
      appointments: {
        title: "Appointments Today",
        values: {
          "This week": "15",
          "Last week": "14",
          "Last 2 weeks": "13",
          "Last 3 weeks": "12",
          "Last month": "11",
        },
        percentage: {
          "This week": "1.2%",
          "Last week": "1.1%",
          "Last 2 weeks": "1.0%",
          "Last 3 weeks": "0.9%",
          "Last month": "0.8%",
        },
      },
      staff: {
        title: "Staff on Duty",
        values: {
          "This week": "8",
          "Last week": "7",
          "Last 2 weeks": "6",
          "Last 3 weeks": "5",
          "Last month": "4",
        },
        percentage: {
          "This week": "1.0%",
          "Last week": "0.9%",
          "Last 2 weeks": "0.8%",
          "Last 3 weeks": "0.7%",
          "Last month": "0.6%",
        },
      },
    },
    NuclearMedicineDepartment: {
      patient: {
        title: "Total Patients",
        values: {
          "This week": "300",
          "Last week": "290",
          "Last 2 weeks": "280",
          "Last 3 weeks": "270",
          "Last month": "260",
        },
        percentage: {
          "This week": "2.0%",
          "Last week": "1.9%",
          "Last 2 weeks": "1.8%",
          "Last 3 weeks": "1.7%",
          "Last month": "1.6%",
        },
      },
      sales: {
        title: "Revenue This Month",
        values: {
          "This week": "₱4,500,000",
          "Last week": "₱4,400,000",
          "Last 2 weeks": "₱4,300,000",
          "Last 3 weeks": "₱4,200,000",
          "Last month": "₱4,100,000",
        },
        percentage: {
          "This week": "2.2%",
          "Last week": "2.1%",
          "Last 2 weeks": "2.0%",
          "Last 3 weeks": "1.9%",
          "Last month": "1.8%",
        },
      },
      appointments: {
        title: "Appointments Today",
        values: {
          "This week": "25",
          "Last week": "24",
          "Last 2 weeks": "23",
          "Last 3 weeks": "22",
          "Last month": "21",
        },
        percentage: {
          "This week": "2.5%",
          "Last week": "2.4%",
          "Last 2 weeks": "2.3%",
          "Last 3 weeks": "2.2%",
          "Last month": "2.1%",
        },
      },
      staff: {
        title: "Staff on Duty",
        values: {
          "This week": "12",
          "Last week": "11",
          "Last 2 weeks": "10",
          "Last 3 weeks": "9",
          "Last month": "8",
        },
        percentage: {
          "This week": "1.8%",
          "Last week": "1.7%",
          "Last 2 weeks": "1.6%",
          "Last 3 weeks": "1.5%",
          "Last month": "1.4%",
        },
      },
    },
    PathologyAndLaboratoryDepartment: {
      patient: {
        title: "Total Patients",
        values: {
          "This week": "400",
          "Last week": "390",
          "Last 2 weeks": "380",
          "Last 3 weeks": "370",
          "Last month": "360",
        },
        percentage: {
          "This week": "2.5%",
          "Last week": "2.4%",
          "Last 2 weeks": "2.3%",
          "Last 3 weeks": "2.2%",
          "Last month": "2.1%",
        },
      },
      sales: {
        title: "Revenue This Month",
        values: {
          "This week": "₱6,000,000",
          "Last week": "₱5,900,000",
          "Last 2 weeks": "₱5,800,000",
          "Last 3 weeks": "₱5,700,000",
          "Last month": "₱5,600,000",
        },
        percentage: {
          "This week": "3.0%",
          "Last week": "2.9%",
          "Last 2 weeks": "2.8%",
          "Last 3 weeks": "2.7%",
          "Last month": "2.6%",
        },
      },
      appointments: {
        title: "Appointments Today",
        values: {
          "This week": "30",
          "Last week": "29",
          "Last 2 weeks": "28",
          "Last 3 weeks": "27",
          "Last month": "26",
        },
        percentage: {
          "This week": "3.5%",
          "Last week": "3.4%",
          "Last 2 weeks": "3.3%",
          "Last 3 weeks": "3.2%",
          "Last month": "3.1%",
        },
      },
      staff: {
        title: "Staff on Duty",
        values: {
          "This week": "15",
          "Last week": "14",
          "Last 2 weeks": "13",
          "Last 3 weeks": "12",
          "Last month": "11",
        },
        percentage: {
          "This week": "2.0%",
          "Last week": "1.9%",
          "Last 2 weeks": "1.8%",
          "Last 3 weeks": "1.7%",
          "Last month": "1.6%",
        },
      },
    },
    PharmacyDepartment: {
      patient: {
        title: "Total Patients",
        values: {
          "This week": "500",
          "Last week": "490",
          "Last 2 weeks": "480",
          "Last 3 weeks": "470",
          "Last month": "460",
        },
        percentage: {
          "This week": "2.8%",
          "Last week": "2.7%",
          "Last 2 weeks": "2.6%",
          "Last 3 weeks": "2.5%",
          "Last month": "2.4%",
        },
      },
      sales: {
        title: "Revenue This Month",
        values: {
          "This week": "₱7,500,000",
          "Last week": "₱7,400,000",
          "Last 2 weeks": "₱7,300,000",
          "Last 3 weeks": "₱7,200,000",
          "Last month": "₱7,100,000",
        },
        percentage: {
          "This week": "3.5%",
          "Last week": "3.4%",
          "Last 2 weeks": "3.3%",
          "Last 3 weeks": "3.2%",
          "Last month": "3.1%",
        },
      },
      appointments: {
        title: "Appointments Today",
        values: {
          "This week": "35",
          "Last week": "34",
          "Last 2 weeks": "33",
          "Last 3 weeks": "32",
          "Last month": "31",
        },
        percentage: {
          "This week": "4.0%",
          "Last week": "3.9%",
          "Last 2 weeks": "3.8%",
          "Last 3 weeks": "3.7%",
          "Last month": "3.6%",
        },
      },
      staff: {
        title: "Staff on Duty",
        values: {
          "This week": "18",
          "Last week": "17",
          "Last 2 weeks": "16",
          "Last 3 weeks": "15",
          "Last month": "14",
        },
        percentage: {
          "This week": "2.5%",
          "Last week": "2.4%",
          "Last 2 weeks": "2.3%",
          "Last 3 weeks": "2.2%",
          "Last month": "2.1%",
        },
      },
    },
    PhysicalAndRehabilitationDepartment: {
      patient: {
        title: "Total Patients",
        values: {
          "This week": "600",
          "Last week": "590",
          "Last 2 weeks": "580",
          "Last 3 weeks": "570",
          "Last month": "560",
        },
        percentage: {
          "This week": "3.0%",
          "Last week": "2.9%",
          "Last 2 weeks": "2.8%",
          "Last 3 weeks": "2.7%",
          "Last month": "2.6%",
        },
      },
      sales: {
        title: "Revenue This Month",
        values: {
          "This week": "₱8,000,000",
          "Last week": "₱7,900,000",
          "Last 2 weeks": "₱7,800,000",
          "Last 3 weeks": "₱7,700,000",
          "Last month": "₱7,600,000",
        },
        percentage: {
          "This week": "4.0%",
          "Last week": "3.9%",
          "Last 2 weeks": "3.8%",
          "Last 3 weeks": "3.7%",
          "Last month": "3.6%",
        },
      },
      appointments: {
        title: "Appointments Today",
        values: {
          "This week": "40",
          "Last week": "39",
          "Last 2 weeks": "38",
          "Last 3 weeks": "37",
          "Last month": "36",
        },
        percentage: {
          "This week": "4.5%",
          "Last week": "4.4%",
          "Last 2 weeks": "4.3%",
          "Last 3 weeks": "4.2%",
          "Last month": "4.1%",
        },
      },
      staff: {
        title: "Staff on Duty",
        values: {
          "This week": "20",
          "Last week": "19",
          "Last 2 weeks": "18",
          "Last 3 weeks": "17",
          "Last month": "16",
        },
        percentage: {
          "This week": "3.0%",
          "Last week": "2.9%",
          "Last 2 weeks": "2.8%",
          "Last 3 weeks": "2.7%",
          "Last month": "2.6%",
        },
      },
    },
    PulmonaryDepartment: {
      patient: {
        title: "Total Patients",
        values: {
          "This week": "700",
          "Last week": "690",
          "Last 2 weeks": "680",
          "Last 3 weeks": "670",
          "Last month": "660",
        },
        percentage: {
          "This week": "3.5%",
          "Last week": "3.4%",
          "Last 2 weeks": "3.3%",
          "Last 3 weeks": "3.2%",
          "Last month": "3.1%",
        },
      },
      sales: {
        title: "Revenue This Month",
        values: {
          "This week": "₱9,000,000",
          "Last week": "₱8,900,000",
          "Last 2 weeks": "₱8,800,000",
          "Last 3 weeks": "₱8,700,000",
          "Last month": "₱8,600,000",
        },
        percentage: {
          "This week": "4.5%",
          "Last week": "4.4%",
          "Last 2 weeks": "4.3%",
          "Last 3 weeks": "4.2%",
          "Last month": "4.1%",
        },
      },
      appointments: {
        title: "Appointments Today",
        values: {
          "This week": "45",
          "Last week": "44",
          "Last 2 weeks": "43",
          "Last 3 weeks": "42",
          "Last month": "41",
        },
        percentage: {
          "This week": "5.0%",
          "Last week": "4.9%",
          "Last 2 weeks": "4.8%",
          "Last 3 weeks": "4.7%",
          "Last month": "4.6%",
        },
      },
      staff: {
        title: "Staff on Duty",
        values: {
          "This week": "22",
          "Last week": "21",
          "Last 2 weeks": "20",
          "Last 3 weeks": "19",
          "Last month": "18",
        },
        percentage: {
          "This week": "3.5%",
          "Last week": "3.4%",
          "Last 2 weeks": "3.3%",
          "Last 3 weeks": "3.2%",
          "Last month": "3.1%",
        },
      },
    },
    RadiologyDepartment: {
      patient: {
        title: "Total Patients",
        values: {
          "This week": "800",
          "Last week": "790",
          "Last 2 weeks": "780",
          "Last 3 weeks": "770",
          "Last month": "760",
        },
        percentage: {
          "This week": "4.0%",
          "Last week": "3.9%",
          "Last 2 weeks": "3.8%",
          "Last 3 weeks": "3.7%",
          "Last month": "3.6%",
        },
      },
      sales: {
        title: "Revenue This Month",
        values: {
          "This week": "₱10,000,000",
          "Last week": "₱9,900,000",
          "Last 2 weeks": "₱9,800,000",
          "Last 3 weeks": "₱9,700,000",
          "Last month": "₱9,600,000",
        },
        percentage: {
          "This week": "5.0%",
          "Last week": "4.9%",
          "Last 2 weeks": "4.8%",
          "Last 3 weeks": "4.7%",
          "Last month": "4.6%",
        },
      },
      appointments: {
        title: "Appointments Today",
        values: {
          "This week": "50",
          "Last week": "49",
          "Last 2 weeks": "48",
          "Last 3 weeks": "47",
          "Last month": "46",
        },
        percentage: {
          "This week": "5.5%",
          "Last week": "5.4%",
          "Last 2 weeks": "5.3%",
          "Last 3 weeks": "5.2%",
          "Last month": "5.1%",
        },
      },
      staff: {
        title: "Staff on Duty",
        values: {
          "This week": "25",
          "Last week": "24",
          "Last 2 weeks": "23",
          "Last 3 weeks": "22",
          "Last month": "21",
        },
        percentage: {
          "This week": "4.0%",
          "Last week": "3.9%",
          "Last 2 weeks": "3.8%",
          "Last 3 weeks": "3.7%",
          "Last month": "3.6%",
        },
      },
    },
    SatelliteBranches: {
      patient: {
        title: "Total Patients",
        values: {
          "This week": "900",
          "Last week": "890",
          "Last 2 weeks": "880",
          "Last 3 weeks": "870",
          "Last month": "860",
        },
        percentage: {
          "This week": "4.5%",
          "Last week": "4.4%",
          "Last 2 weeks": "4.3%",
          "Last 3 weeks": "4.2%",
          "Last month": "4.1%",
        },
      },
      sales: {
        title: "Revenue This Month",
        values: {
          "This week": "₱11,000,000",
          "Last week": "₱10,900,000",
          "Last 2 weeks": "₱10,800,000",
          "Last 3 weeks": "₱10,700,000",
          "Last month": "₱10,600,000",
        },
        percentage: {
          "This week": "5.5%",
          "Last week": "5.4%",
          "Last 2 weeks": "5.3%",
          "Last 3 weeks": "5.2%",
          "Last month": "5.1%",
        },
      },
      appointments: {
        title: "Appointments Today",
        values: {
          "This week": "55",
          "Last week": "54",
          "Last 2 weeks": "53",
          "Last 3 weeks": "52",
          "Last month": "51",
        },
        percentage: {
          "This week": "6.0%",
          "Last week": "5.9%",
          "Last 2 weeks": "5.8%",
          "Last 3 weeks": "5.7%",
          "Last month": "5.6%",
        },
      },
      staff: {
        title: "Staff on Duty",
        values: {
          "This week": "30",
          "Last week": "29",
          "Last 2 weeks": "28",
          "Last 3 weeks": "27",
          "Last month": "26",
        },
        percentage: {
          "This week": "4.5%",
          "Last week": "4.4%",
          "Last 2 weeks": "4.3%",
          "Last 3 weeks": "4.2%",
          "Last month": "4.1%",
        },
      },
    },
    SpecialtyClinics: {
      patient: {
        title: "Total Patients",
        values: {
          "This week": "1,000",
          "Last week": "990",
          "Last 2 weeks": "980",
          "Last 3 weeks": "970",
          "Last month": "960",
        },
        percentage: {
          "This week": "5.0%",
          "Last week": "4.9%",
          "Last 2 weeks": "4.8%",
          "Last 3 weeks": "4.7%",
          "Last month": "4.6%",
        },
      },
      sales: {
        title: "Revenue This Month",
        values: {
          "This week": "₱12,000,000",
          "Last week": "₱11,900,000",
          "Last 2 weeks": "₱11,800,000",
          "Last 3 weeks": "₱11,700,000",
          "Last month": "₱11,600,000",
        },
        percentage: {
          "This week": "6.0%",
          "Last week": "5.9%",
          "Last 2 weeks": "5.8%",
          "Last 3 weeks": "5.7%",
          "Last month": "5.6%",
        },
      },
      appointments: {
        title: "Appointments Today",
        values: {
          "This week": "60",
          "Last week": "59",
          "Last 2 weeks": "58",
          "Last 3 weeks": "57",
          "Last month": "56",
        },
        percentage: {
          "This week": "6.5%",
          "Last week": "6.4%",
          "Last 2 weeks": "6.3%",
          "Last 3 weeks": "6.2%",
          "Last month": "6.1%",
        },
      },
      staff: {
        title: "Staff on Duty",
        values: {
          "This week": "35",
          "Last week": "34",
          "Last 2 weeks": "33",
          "Last 3 weeks": "32",
          "Last month": "31",
        },
        percentage: {
          "This week": "5.0%",
          "Last week": "4.9%",
          "Last 2 weeks": "4.8%",
          "Last 3 weeks": "4.7%",
          "Last month": "4.6%",
        },
      },
    },
    // Add more departments here...
  };
  const cardData = dataMap[department.replace(/\s+/g, "")]?.[type] || {
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
      default:
        return today;
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

        {/* Dropdown menu */}
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
        <span className="text-xs bg-blue-700 px-2 py-1 rounded-full text-white">
          {getDateForOption(selectedOption).toLocaleDateString()}
        </span>
      </div>
      <h1 className="text-2xl font-semibold mt-3">
        {cardData.values[selectedOption]}
      </h1>
      <p className="text-gray-500 lowercase">
        {`+${cardData.percentage[selectedOption]} from ${selectedOption}`}
      </p>
    </div>
  );
}
