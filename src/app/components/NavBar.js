import Link from "next/link";
import { FaSearch } from "react-icons/fa"; // Importing the search icon from react-icons

const Navbar = () => {
  return (
    <nav className="bg-white text-gray-700 px-6 py-4 font-semibold shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="font-bold">Ancillary Communication and Updates Platform</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 flex justify-center">
          <ul className="flex space-x-10">
            <li>
              <Link href="/" className="hover:text-blue-800">
                Home
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="hover:text-blue-800">
                Dashboard
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-blue-800">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Search Bar */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            className="px-8 py-2 rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
          />
          <button className="bg-blue-800 text-white p-2 rounded-lg hover:bg-blue-900">
            <FaSearch className="text-lg" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
