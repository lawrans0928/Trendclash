"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CreateDirectoryPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  // 🔒 Check token instead of supabase
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token) router.push("/auth/login");
  // }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/auth/login");
      return;
    }

    const res = await fetch("/api/directories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        title,
        description,
        category,
        slug: title.toLowerCase().replace(/\s+/g, "-"),
      }),
    });

    const data = await res.json();

    if (data.success) {
      router.push("/explore");
    } else {
      alert(data.error || "Failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#fffaf5] text-gray-900 relative overflow-hidden">

      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-orange-200/40 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-amber-200/40 blur-[120px] rounded-full" />

      <div className="relative max-w-2xl mx-auto px-4 py-16">

        <Link href="/explore" className="inline-flex items-center gap-2 text-gray-500 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        <div className="mb-10">
          <h1 className="text-4xl font-semibold mb-2">Create Directory</h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl bg-white border p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <Label>Title</Label>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>

            <div>
              <Label>Description</Label>
              <Textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>

            <div>
              <Label>Category</Label>
              <Select onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="bg-[#ff6600]">Create</Button>

          </form>
        </motion.div>

      </div>
    </div>
  );
}