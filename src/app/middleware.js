import { getCookie } from "cookies-next";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // Check if the user is trying to access the homepage
  if (pathname === "/home") {
    const isLoggedIn = getCookie("isLoggedIn", { req });

    // If not logged in, redirect to the login page
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // Allow the request to continueee
  return NextResponse.next();
}
