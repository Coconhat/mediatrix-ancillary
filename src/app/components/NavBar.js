import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="text-gray-700 p-4 font-semibold">
      <div className="flex justify-between items-center pb-5">
        <h1 className="text-xl font-bold px-4">Mediatrix</h1>
        <ul className="flex space-x-6 mx-auto font-semibold">
          <li>
            <Link href="/" className="hover:text-blue-800">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-blue-800">
              Services
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-800">
              About
            </Link>
          </li>
        </ul>
        <ul className="ml-6 mr-9 flex items-center hover:text-blue-800">
          <i className="fa-regular fa-heart text-gray-700  mr-2"></i>
          <li>Help</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
