import { jwtVerify } from "jose/jwt/verify";
import { getJwtSecretBytes, type JwtPayload } from "./jwt-secret";

export async function verifyToken(token: string): Promise<JwtPayload | null> {
  try {
    const { payload } = await jwtVerify(token, getJwtSecretBytes());
    return {
      sub: payload.sub as string,
      role: payload.role as JwtPayload["role"],
      email: payload.email as string,
      name: payload.name as string,
    };
  } catch {
    return null;
  }
}
