import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    // ✅ 1. VALIDATION
    if (!name || !email || !password) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (name.length < 2) {
      return Response.json(
        { error: "Name must be at least 2 characters" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return Response.json(
        { error: "Password must be at least 6 characters" },
        { status: 400 }
      );
    }

    // ✅ 2. CHECK EXISTING USER
    const [existing]: any = await db.execute(
      "SELECT id FROM users WHERE email = ? LIMIT 1",
      [email]
    );

    if (existing.length > 0) {
      return Response.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // ✅ 3. HASH PASSWORD
    const hash = await bcrypt.hash(password, 10);

    // ✅ 4. INSERT USER (NOW WITH NAME)
    await db.execute(
      "INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)",
      [name, email, hash]
    );

    return Response.json({ success: true });

  } catch (err) {
    console.error(err); // 🔥 important for debugging
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}