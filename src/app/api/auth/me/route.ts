import { verifyToken } from "@/lib/jwt";

export async function GET(req: Request) {
  const cookie = req.headers.get("cookie") || "";

  const token = cookie
    .split("; ")
    .find((c) => c.startsWith("token="))
    ?.split("=")[1];

  if (!token) {
    return Response.json({ user: null });
  }

  const user = verifyToken(token);

  if (!user) {
    return Response.json({ user: null });
  }

  return Response.json({ user });
}