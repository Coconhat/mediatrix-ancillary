"use client";
export default function Component3() {
  return (
    <div className="min-h-[600px] w-full bg-blue-950 flex items-center justify-center py-10">
      <div className="flex flex-col justify-center items-center w-full h-full text-white p-6 lg:p-10 space-y-4 lg:space-y-6">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-center">
          Search Archives
        </h1>
        <p className="text-base lg:text-lg text-white text-center max-w-xl mb-4 lg:mb-6">
          Maintain a searchable archive of communications for future reference.
        </p>

        {/* Search Bar and Button Section */}
        <div className="w-full max-w-md space-y-4">
          <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
            <input
              type="text"
              placeholder="Type here..."
              className="w-full p-2 lg:p-3 rounded-lg border-2 border-white bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full lg:w-auto p-2 lg:p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Search
            </button>
          </div>
          <p className="text-center text-sm text-white">
            Search for past or present announcements, memos, and other important
            communications.
          </p>
        </div>
      </div>
    </div>
  );
}
