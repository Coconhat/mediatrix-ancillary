"use client";
import Image from "next/image";
import Link from "next/link";

export default function Component2() {
  return (
    <div className="min-h-[600px] w-full bg-white flex items-center justify-center py-10">
      <div className="flex flex-col lg:flex-row w-full h-full">
        {/* Left Section with Text and Solid Background */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 lg:p-10 bg-blue space-y-4 lg:space-y-6">
          <h2 className="text-3xl lg:text-4xl text-black font-bold text-center lg:text-left">
            Communication
          </h2>
          <p className="text-base lg:text-lg text-black text-center lg:text-left">
            Centralized communication enabling department heads to receive
            accurate and timely updates.
          </p>
          <Link
            href="/directory/inbox"
            className="w-full lg:max-w-[566px] mt-4 px-4 py-2 lg:px-6 lg:py-3 text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-md transition duration-200 font-semibold text-base lg:text-lg"
          >
            Go to Inbox
          </Link>
        </div>

        {/* Right Section with Background Image */}
        <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] relative">
          <Image
            src="/assets/img3.png"
            alt="Communication"
            layout="fill" 
            objectFit="cover" 
            className="rounded-r-xl"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
}
