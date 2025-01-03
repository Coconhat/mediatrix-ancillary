"use client";
import Image from "next/image";
import Link from "next/link";

export default function Component1() {
  return (
    <div className="min-h-[600px] w-full bg-[#D3E5FF] flex items-center justify-center py-10">
      <div className="flex flex-col lg:flex-row w-full h-full">
  
        <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-full flex justify-center items-center p-5">
          <div className="relative w-full max-w-[800px] h-full max-h-[400px] sm:max-h-[520px] bg-white border-8 border-white rounded-xl shadow-lg m-2 overflow-hidden">
            <Image
              src="/assets/img1.png"
              alt="Announcements and Memos"
              width={750}
              height={480}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right Section with Text and Solid Background */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 lg:p-10 bg-blue rounded-r-xl space-y-4 lg:space-y-6">
          <h2 className="text-3xl lg:text-4xl text-black font-bold lg:mb-6 leading-tight text-center lg:text-left">
            Announcements and Memos
          </h2>
          <p className="text-base lg:text-lg text-black font-light leading-relaxed text-center lg:text-left">
            Access to memos and announcements on any internet-enabled device.
          </p>
        
          <Link
            href="/news"
            className="w-full lg:max-w-[566px] px-4 py-2 lg:px-6 lg:py-3 text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-md transition duration-200 font-semibold text-base lg:text-lg text-center"
          >
            Go to News and Announcements
          </Link>
        </div>
      </div>
    </div>
  );
}
