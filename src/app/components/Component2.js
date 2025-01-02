"use client";
export default function Component2() {
  const handleGoToInbox = () => {
    window.location.href = "/inbox"; // Redirect to /inbox
  };

  return (
    <div className="h-[600px] w-full bg-white flex items-center justify-center">
      <div className="flex w-full h-full">
        
        {/* Left Section with Text and Solid Background */}
        <div className="w-1/2 flex flex-col justify-center p-10 bg-blue space-y-6">
          <h2 className="text-4xl text-black font-bold">Communication</h2>
          <p className="font-sans text-lg text-black">
            Centralized communication enabling department heads to receive accurate and timely updates.
          </p>
          <button
            onClick={handleGoToInbox}
            className="max-w-[566px] mt-4 px-6 py-3 text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-md transition duration-200 font-semibold text-lg"
          >
            Go to Inbox
          </button>
        </div>
        
        {/* Right Section with Background Image */}
        <div
          className="w-1/2 h-full bg-contain bg-center"
          style={{ backgroundImage: "url('/assets/img3.png')" }}
        >
          {/* Image will cover the full height and right side of the component */}
        </div>
      </div>
    </div>
  );
}
