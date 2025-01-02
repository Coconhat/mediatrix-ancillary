import React from "react";

export default function Header() {
  return (
    <div className="bg-blue-900 text-white flex justify-center items-center text-center relative h-[700px] mt-28">
      <img
        src="/assets/ancillaryimg.jpg" // Replace with the correct path to your image in the public/assets folder
        alt="Header Image"
        className="absolute inset-0 w-full h-full object-cover opacity-30" // Cover the header with the image and adjust opacity for text visibility
      />
      <div className="relative z-10 mt-22">
        <h2 className="text-4xl font-bold mb-4">
          Welcome to ACUP (Ancillary Communication and Updates Platform)
        </h2>
        <p className="text-lg">
          Address Operations. Enhance Compliance and Documentation. Support Efficiency.
        </p>
      </div>
    </div>
  );
}
