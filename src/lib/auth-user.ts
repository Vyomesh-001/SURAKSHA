import { verifyToken } from "./jwt-verify";
import { getSessionTokenFromCookies } from "./session";

export async function getSessionPayload() {
  const token = await getSessionTokenFromCookies();
  if (!token) return null;
  return verifyToken(token);
}
