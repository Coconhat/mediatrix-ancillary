export default function Component3() {
  return (
    <div className="h-[600px] w-full bg-blue-950 flex items-center justify-center">
      <div className="flex flex-col justify-center items-center w-full h-full text-white p-10 space-y-6">
        <h1 className="text-4xl font-bold mb-6">Search Archives</h1>
        <p className="font-sans text-lg text-white text-center max-w-xl mb-6">
          Maintain a searchable archive of communications for future reference.
        </p>
        
        {/* Search Bar and Button Section */}
        <div className="w-full max-w-md space-y-4">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Type here..."
              className="w-full p-3 rounded-lg border-2 border-white bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Search
            </button>
          </div>
          <p className="text-center text-sm text-white">
            Search for past or present announcements, memos, and other important communications.
          </p>
        </div>
      </div>
    </div>
  );
}
