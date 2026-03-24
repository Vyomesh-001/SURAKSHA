export type JwtPayload = {
  sub: string;
  role: "ADMIN" | "TOURIST";
  email: string;
  name: string;
};

export function getJwtSecretBytes() {
  const s = process.env.JWT_SECRET;
  if (!s || s.length < 16) {
    throw new Error("JWT_SECRET must be set (min 16 characters)");
  }
  return new TextEncoder().encode(s);
}
