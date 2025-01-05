"use client";

import { usePathname } from "next/navigation";
import Navbar from "./NavBar";

export default function ClientNavbarWrapper() {
  const pathname = usePathname();

  // Conditionally render Navbar
  if (pathname === "/") {
    return null;
  }

  return (
    <>
      <Navbar />

      <div className="pt-20"></div>
    </>
  );
}
