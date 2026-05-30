"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Plus, Share2, ArrowUp, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const mockItems = [
  { id: "1", name: "ChatGPT", description: "Advanced conversational AI", votes: 342, status: "verified", url: "https://chat.openai.com" },
  { id: "2", name: "Midjourney", description: "AI image generation", votes: 298, status: "verified", url: "https://midjourney.com" },
  { id: "3", name: "Claude", description: "AI assistant", votes: 276, status: "pending", url: "https://claude.ai" },
  { id: "4", name: "Stable Diffusion", description: "Open-source AI model", votes: 245, status: "verified", url: "https://stability.ai" },
];

export default function DirectoryPage() {
  const [items, setItems] = useState(mockItems);

  const upvote = (id: string) => {
    setItems((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, votes: i.votes + 1 } : i
      )
    );
  };

  return (
    <div className="min-h-screen bg-white text-[#0a0a0a]">

      <div className="max-w-5xl mx-auto px-6 py-20">

        {/* BACK */}
        <Link
          href="/explore"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#ff6600] mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        {/* HEADER */}
        <div className="mb-12">

          <div className="flex items-start justify-between gap-4 mb-4">

            <div>
              <h1 className="font-mono text-4xl tracking-tight mb-2">
                Best AI Tools 2026
              </h1>

              <p className="text-gray-500 max-w-2xl">
                Community-ranked AI tools. The best rises based on real votes.
              </p>
            </div>

            <Button variant="outline">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>

          </div>

          <div className="flex gap-4 text-sm text-gray-500">
            <span>42 items</span>
            <span>•</span>
            <span>1,234 votes</span>
          </div>

        </div>

        {/* ADD BUTTON */}
        <div className="mb-8">
          <Link href="/add-item">
            <Button className="bg-[#ff6600] hover:bg-orange-500 shadow-md">
              <Plus className="w-4 h-4 mr-2" />
              Add Item
            </Button>
          </Link>
        </div>

        {/* ITEMS */}
        <div className="space-y-4">

          {items
            .sort((a, b) => b.votes - a.votes)
            .map((item, index) => (

              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -3 }}
                className="relative flex items-center justify-between border border-gray-200 rounded-xl p-5 bg-white hover:border-[#ff6600]/40 transition-all"
              >

                {/* 🔗 OPEN LIVE ICON (TOP RIGHT) */}
                <a
                  href={item.url}
                  target="_blank"
                  className="absolute top-4 right-4 text-gray-400 hover:text-[#ff6600]"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                {/* LEFT */}
                <div className="flex items-center gap-4">

                  {/* RANK */}
                  <div className="font-mono text-sm text-gray-400 w-6">
                    #{index + 1}
                  </div>

                  {/* INFO */}
                  <div>
                    <h3 className="font-medium text-lg">
                      {item.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {item.description}
                    </p>

                    {/* STATUS */}
                    <div className="mt-1">
                      {item.status === "verified" ? (
                        <Badge className="bg-green-100 text-green-600 text-xs">
                          Verified
                        </Badge>
                      ) : (
                        <Badge className="bg-orange-100 text-orange-600 text-xs">
                          Under Review
                        </Badge>
                      )}
                    </div>

                  </div>

                </div>

                {/* RIGHT (UPVOTE) */}
                <Button
                  variant="outline"
                  onClick={() => upvote(item.id)}
                  className="flex items-center gap-2 hover:border-[#ff6600]"
                >
                  <ArrowUp className="w-4 h-4" />
                  {item.votes}
                </Button>

              </motion.div>
            ))}

        </div>

      </div>
    </div>
  );
}