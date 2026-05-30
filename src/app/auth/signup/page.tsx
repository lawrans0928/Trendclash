"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    setLoading(false);

    if (data.success) {
      router.push("/auth/login");
    } else {
      alert(data.error || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#fffaf5] flex items-center justify-center px-4 relative overflow-hidden">

      {/* 🔥 Ambient Glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-orange-200/40 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-amber-200/40 blur-[120px] rounded-full" />

      <div className="relative w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-10">
          <Link href="/" className="text-2xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-[#ff6600] to-amber-500 bg-clip-text text-transparent">
              TrendClash
            </span>
          </Link>
          <p className="text-gray-600 mt-2">Create your account</p>
        </div>

        {/* 🔥 Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-2xl p-[1px] bg-gradient-to-r from-orange-200/40 to-amber-200/40"
        >
          <div className="rounded-2xl bg-white/80 backdrop-blur-xl border border-orange-100 p-8">

            <h2 className="text-xl font-semibold mb-1">Sign up</h2>
            <p className="text-sm text-gray-500 mb-6">
              Join the community and start ranking
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div className="space-y-2">
                <Label>Name</Label>
                <Input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-white border-orange-100 focus:border-[#ff6600] focus:ring-1 focus:ring-[#ff6600]"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white border-orange-100 focus:border-[#ff6600] focus:ring-1 focus:ring-[#ff6600]"
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label>Password</Label>
                <Input
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-white border-orange-100 focus:border-[#ff6600] focus:ring-1 focus:ring-[#ff6600]"
                />
                <p className="text-xs text-gray-500">
                  Must be at least 8 characters
                </p>
              </div>

              {/* Button */}
              <Button
                className="w-full bg-[#ff6600] hover:bg-orange-500 shadow-md hover:shadow-orange-400/30 transition-all"
                disabled={loading}
              >
                {loading ? "Creating..." : "Create Account"}
              </Button>

            </form>

            {/* Footer */}
            <div className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-[#ff6600] font-medium hover:underline">
                Log in
              </Link>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}