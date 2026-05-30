"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut, User, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SettingsPage() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("profile");

  const [name, setName] = useState("John Doe");
  const [bio, setBio] = useState("Tech enthusiast and curator");

  const handleLogout = () => {
    console.log("logout");
    router.push("/auth/login");
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-900">

      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-2xl font-semibold">Settings</h1>
          <p className="text-gray-500 text-sm">
            Manage your account and preferences
          </p>
        </div>

        <div className="grid md:grid-cols-[220px_1fr] gap-10">

          {/* 🔥 SIDEBAR */}
          <div className="space-y-2">

            <button
              onClick={() => setActiveTab("profile")}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
                activeTab === "profile"
                  ? "bg-gray-200 font-medium"
                  : "hover:bg-gray-100 text-gray-600"
              }`}
            >
              <User className="w-4 h-4" />
              Profile
            </button>

            <button
              onClick={() => setActiveTab("theme")}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
                activeTab === "theme"
                  ? "bg-gray-200 font-medium"
                  : "hover:bg-gray-100 text-gray-600"
              }`}
            >
              <Palette className="w-4 h-4" />
              Appearance
            </button>

            <button
              onClick={() => setActiveTab("danger")}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
                activeTab === "danger"
                  ? "bg-red-100 text-red-600 font-medium"
                  : "hover:bg-red-50 text-gray-600"
              }`}
            >
              <LogOut className="w-4 h-4" />
              Account
            </button>

          </div>

          {/* 🔥 CONTENT */}
          <div className="space-y-6">

            {/* PROFILE */}
            {activeTab === "profile" && (
              <div className="rounded-xl border border-gray-200 bg-white p-6 space-y-5">

                <div>
                  <h2 className="font-semibold text-lg">Profile</h2>
                  <p className="text-sm text-gray-500">
                    Update your personal information
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Name</Label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="focus:border-[#ff6600]"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Bio</Label>
                  <Input
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="focus:border-[#ff6600]"
                  />
                </div>

                <Button className="bg-[#ff6600] hover:bg-orange-500">
                  Save Changes
                </Button>

              </div>
            )}

            {/* THEME */}
            {activeTab === "theme" && (
              <div className="rounded-xl border border-gray-200 bg-white p-6 space-y-5">

                <div>
                  <h2 className="font-semibold text-lg">Appearance</h2>
                  <p className="text-sm text-gray-500">
                    Customize how TrendClash looks
                  </p>
                </div>

                <div className="flex gap-3">

                  <Button variant="outline" size="sm">
                    Light
                  </Button>

                  <Button variant="outline" size="sm">
                    Dark
                  </Button>

                  <Button variant="outline" size="sm">
                    System
                  </Button>

                </div>

              </div>
            )}

            {/* DANGER ZONE */}
            {activeTab === "danger" && (
              <div className="rounded-xl border border-red-200 bg-white p-6 space-y-5">

                <div>
                  <h2 className="font-semibold text-lg text-red-500">
                    Account
                  </h2>
                  <p className="text-sm text-gray-500">
                    Manage your account actions
                  </p>
                </div>

                <Button
                  variant="destructive"
                  className="w-full"
                  onClick={handleLogout}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Log out
                </Button>

              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}