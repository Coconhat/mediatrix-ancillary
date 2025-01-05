import Image from "next/image";
import Link from "next/link";

import React from "react";

export default function Header() {
  return (
    <div className="bg-blue-900 text-white flex justify-center items-center text-center relative h-[700px] ">
      <Image
        src="/assets/ancillaryimg.jpg"
        alt="Header Image"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        width={1920}
        height={1080}
      />
      <div className="relative z-10 mt-22">
        <h2 className="text-4xl font-bold mb-4">
          Welcome to ACUP (Ancillary Communication and Updates Platform)
        </h2>
        <p className="text-lg">
          Address Operations. Enhance Compliance and Documentation. Support
          Efficiency.
        </p>
        <Link href="#announcement">
          <button className="mt-6 px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-slate-200 transition-colors shadow-lg">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
}
