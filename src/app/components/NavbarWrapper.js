"use client";

import { usePathname } from "next/navigation";
import Navbar from "./NavBar";

export default function ClientNavbarWrapper() {
  const pathname = usePathname();

  // Conditionally render Navbar
  if (pathname === "/login") {
    return null;
  }

  return <Navbar />;
}
