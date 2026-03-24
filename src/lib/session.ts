import { cookies } from "next/headers";

export const SESSION_COOKIE = "ts_session";

export function sessionCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  };
}

export async function getSessionTokenFromCookies() {
  return (await cookies()).get(SESSION_COOKIE)?.value ?? null;
}
