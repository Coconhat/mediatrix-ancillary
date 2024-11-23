export default function Announcement() {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-sm text-gray-400 cursor-pointer">View All</span>
      </div>

      <div className="flex flex-col gap-4 mt-1">
        <div className="bg-[#F3D3B5]/50 p-4 rounded-md">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-semibold">Lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-2 py-1">
              11-22-2024
            </span>
          </div>
          <p className="text-sm text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="bg-[#B5D3F3]/70 p-4 rounded-md">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-semibold">Lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-2 py-1">
              11-22-2024
            </span>
          </div>
          <p className="text-sm text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="bg-[#F3D3B5]/50 p-4 rounded-md">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-semibold">Lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-2 py-1">
              11-22-2024
            </span>
          </div>
          <p className="text-sm text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="bg-[#B5D3F3]/70  p-4 rounded-md">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-semibold">Lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-2 py-1">
              11-22-2024
            </span>
          </div>
          <p className="text-sm text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}
