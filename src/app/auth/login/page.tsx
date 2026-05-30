"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const res = await fetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (data.error) {
    alert(data.error);
    return;
  }

  // 🔥 IMPORTANT FIX
  window.location.href = "/";   // force full reload (cookie applied)
};

  return (
    <div className="min-h-screen bg-[#fffaf5] flex items-center justify-center px-4 relative overflow-hidden">

      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-orange-200/40 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-amber-200/40 blur-[120px] rounded-full" />

      <div className="relative w-full max-w-md">

        <div className="text-center mb-10">
          <Link href="/" className="text-2xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-[#ff6600] to-amber-500 bg-clip-text text-transparent">
              TrendClash
            </span>
          </Link>
          <p className="text-gray-600 mt-2">Welcome back</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-2xl p-[1px] bg-gradient-to-r from-orange-200/40 to-amber-200/40"
        >
          <div className="rounded-2xl bg-white/80 backdrop-blur-xl border border-orange-100 p-8">

            <h2 className="text-xl font-semibold mb-1">Log in</h2>
            <p className="text-sm text-gray-500 mb-6">
              Enter your credentials to continue
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="space-y-2">
                <Label>Email</Label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Password</Label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button className="w-full bg-[#ff6600] hover:bg-orange-500">
                Log In
              </Button>

            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link href="/auth/signup" className="text-[#ff6600] font-medium hover:underline">
                Sign up
              </Link>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}