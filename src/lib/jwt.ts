import * as jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET as string;

if (!SECRET) {
  throw new Error("JWT_SECRET is not defined");
}

// ✅ Define user type
type UserPayload = {
  id: number;
  email: string;
};

// ✅ Sign JWT
export function signToken(user: UserPayload): string {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    SECRET,
    { expiresIn: "7d" }
  );
}

// ✅ Verify JWT
export function verifyToken(token: string): UserPayload | null {
  try {
    return jwt.verify(token, SECRET) as UserPayload;
  } catch {
    return null;
  }
}