"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Search, User, LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Navbar() {
  const pathname = usePathname();

  // ✅ REAL AUTH STATE
  const [user, setUser] = useState<any>(null);
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/explore", label: "Explore" },
    { href: "/create", label: "Create Directory" },
  ];

  // 🔥 GET CURRENT USER
  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => setUser(data.user));
  }, []);

  // 🔥 LOGOUT
  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/"; // force refresh
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* LEFT */}
          <div className="flex items-center gap-10">

            <Link href="/" className="text-xl font-semibold tracking-tight">
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                TrendClash
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm font-medium transition ${
                      isActive ? "text-black" : "text-gray-600 hover:text-black"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute left-0 -bottom-2 h-[2px] bg-orange-500 transition-all ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            {/* Search */}
            <div className="hidden sm:flex items-center relative">
              <Search className="absolute left-3 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search..."
                className="pl-9 w-48 focus:w-64 transition-all h-9 bg-gray-50 border rounded-lg"
              />
            </div>

            {/* 🔥 AUTH LOGIC FIXED */}
            {!user ? (
              <>
                <Link href="/auth/login">
                  <Button variant="ghost" size="sm">
                    Login
                  </Button>
                </Link>

                <Link href="/auth/signup">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    Sign Up
                  </Button>
                </Link>
              </>
            ) : (
              <div className="relative">

                {/* AVATAR */}
                <button
                  onClick={() => setOpen(!open)}
                  className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-sm font-semibold hover:scale-105 transition"
                >
                  {user.email?.charAt(0).toUpperCase()}
                </button>

                {/* DROPDOWN */}
                {open && (
                  <div className="absolute right-0 mt-3 w-44 bg-white border border-gray-200 rounded-xl shadow-lg p-2 space-y-1">

                    <Link href="/profile">
                      <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2 text-sm">
                        <User className="w-4 h-4" />
                        Profile
                      </button>
                    </Link>

                    <Link href="/settings">
                      <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2 text-sm">
                        <Settings className="w-4 h-4" />
                        Settings
                      </button>
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-red-50 flex items-center gap-2 text-sm text-red-500"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>

                  </div>
                )}
              </div>
            )}

          </div>
        </div>
      </div>
    </nav>
  );
}