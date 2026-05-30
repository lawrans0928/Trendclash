import { db } from "@/lib/db";
import { verifyToken } from "@/lib/jwt";

export async function POST(req: Request) {
  try {
    // ✅ GET TOKEN FROM COOKIE
    const cookie = req.headers.get("cookie") || "";
    const token = cookie
      .split("; ")
      .find((c) => c.startsWith("token="))
      ?.split("=")[1];

    if (!token) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user: any = verifyToken(token);

    if (!user) {
      return Response.json({ error: "Invalid token" }, { status: 401 });
    }

    const body = await req.json();

    // ✅ INSERT DIRECTORY
    await db.execute(
      "INSERT INTO directories (title, description, category, slug, user_id) VALUES (?, ?, ?, ?, ?)",
      [
        body.title,
        body.description,
        body.category,
        body.slug,
        user.id,
      ]
    );

    return Response.json({ success: true });

  } catch (err) {
    console.error(err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}