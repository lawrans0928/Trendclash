"use client";

import { useState } from "react";
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

export default function AddItemPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [directory, setDirectory] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, description, url, directory, tags });
    router.push("/directory/best-ai-tools-2026");
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-900">

      <div className="max-w-3xl mx-auto px-4 py-12">

        {/* BACK */}
        <Link
          href="/explore"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#ff6600] mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight">
            Add an Item
          </h1>
          <p className="text-gray-500 mt-2">
            Contribute to a directory by adding a useful resource
          </p>
        </div>

        {/* FORM CARD */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
        >
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Directory */}
            <div className="space-y-2">
              <Label>Directory</Label>
              <Select value={directory} onValueChange={setDirectory} required>
                <SelectTrigger className="bg-white border-gray-200 focus:border-[#ff6600]">
                  <SelectValue placeholder="Select a directory" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="best-ai-tools-2026">Best AI Tools 2026</SelectItem>
                  <SelectItem value="top-startup-resources">Startup Resources</SelectItem>
                  <SelectItem value="productivity-apps">Productivity Apps</SelectItem>
                  <SelectItem value="remote-work-tools">Remote Work Tools</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Name */}
            <div className="space-y-2">
              <Label>Item Name</Label>
              <Input
                placeholder="e.g., ChatGPT"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="focus:border-[#ff6600]"
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea
                placeholder="What is it? Why is it useful?"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                rows={4}
                className="resize-none focus:border-[#ff6600]"
              />
            </div>

            {/* URL */}
            <div className="space-y-2">
              <Label>Website URL</Label>
              <Input
                type="url"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="focus:border-[#ff6600]"
              />
            </div>

            {/* Tags */}
            <div className="space-y-2">
              <Label>Tags</Label>
              <Input
                placeholder="AI, Tools, GPT"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="focus:border-[#ff6600]"
              />
              <p className="text-xs text-gray-500">
                Separate with commas
              </p>
            </div>

            {/* ACTIONS */}
            <div className="flex gap-3 pt-4">
              <Button className="bg-[#ff6600] hover:bg-orange-500 shadow-md hover:shadow-orange-400/30">
                Add Item
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
              >
                Cancel
              </Button>
            </div>

          </form>
        </motion.div>

      </div>
    </div>
  );
}