import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { signToken } from "@/lib/jwt";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // ✅ VALIDATION
    if (!email || !password) {
      return Response.json({ error: "All fields required" }, { status: 400 });
    }

    // ✅ FIND USER
    const [rows]: any = await db.execute(
      "SELECT * FROM users WHERE email = ? LIMIT 1",
      [email]
    );

    const user = rows[0];

    if (!user) {
      return Response.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // ✅ CHECK PASSWORD
    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
      return Response.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // ✅ GENERATE JWT
    const token = signToken(user);

    // ✅ SET COOKIE (VERY IMPORTANT)
    const res = Response.json({ success: true });

    res.headers.set(
      "Set-Cookie",
      `token=${token}; HttpOnly; Path=/; Max-Age=604800`
    );

    return res;

  } catch (err) {
    console.error(err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}