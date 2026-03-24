import { SignJWT } from "jose/jwt/sign";
import { getJwtSecretBytes, type JwtPayload } from "./jwt-secret";

export async function signToken(payload: JwtPayload): Promise<string> {
  return new SignJWT({
    role: payload.role,
    email: payload.email,
    name: payload.name,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(payload.sub)
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(getJwtSecretBytes());
}
