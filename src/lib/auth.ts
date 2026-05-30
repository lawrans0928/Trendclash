import * as jwt from "jsonwebtoken";
export function getUser(req: Request) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader) return null;

  const token = authHeader.split(" ")[1];

  try {
    return jwt.verify(token, "SECRET_KEY") as { id: number };
  } catch {
    return null;
  }
}