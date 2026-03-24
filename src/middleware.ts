import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "@/lib/jwt-verify";
import { SESSION_COOKIE } from "@/lib/session";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(SESSION_COOKIE)?.value;

  if (pathname.startsWith("/dashboard/admin")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login/admin", request.url));
    }
    const p = await verifyToken(token);
    if (!p || p.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/login/admin", request.url));
    }
  }

  if (pathname.startsWith("/dashboard/user")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login/user", request.url));
    }
    const p = await verifyToken(token);
    if (!p || p.role !== "TOURIST") {
      return NextResponse.redirect(new URL("/login/user", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/admin/:path*", "/dashboard/user/:path*"],
};
