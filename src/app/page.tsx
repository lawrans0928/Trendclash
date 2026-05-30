"use client";


import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const trendingDirectories = [
  {
    slug: "best-ai-tools-2026",
    title: "Best AI Tools 2026",
    description: "Top AI tools ranked by the community",
    category: "Technology",
    itemCount: 42,
  },
  {
    slug: "startup-resources",
    title: "Startup Resources",
    description: "Tools every founder needs",
    category: "Business",
    itemCount: 38,
  },
  {
    slug: "productivity-apps",
    title: "Productivity Apps",
    description: "Apps that actually improve focus",
    category: "Productivity",
    itemCount: 56,
  },
];

export default function Page() {
  const [email, setEmail] = useState("");

  // Typing animation
  const texts = [
    "Powered by real momentum.",
    "Discover, compare, and track what’s truly trending."
  ];

  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 30 : 50);

    setDisplayText(texts[index].substring(0, subIndex));

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <div className="min-h-screen bg-[#fffaf5] text-gray-900 overflow-hidden relative">

      {/* Background */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-orange-300/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-amber-200/40 rounded-full blur-[140px]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ff660010_1px,transparent_1px),linear-gradient(to_bottom,#ff660010_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 py-24 md:py-32">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >

          {/* 🔥 UPDATED FONT STYLE */}
          <h1 className="font-mono text-4xl sm:text-5xl lg:text-10xl font-medium leading-tight tracking-tight mb-6">
            Find the world’s best sources before everyone else.
            <br />
            <span className="bg-gradient-to-r from-[#ff6600] via-orange-500 to-amber-500 bg-clip-text text-transparent">
              Ranked by people.
            </span>
          </h1>

          {/* Typing text */}
          <p className="text-lg text-gray-600 mb-8 font-mono">
            {displayText}
            <span className="animate-pulse text-[#ff6600]">|</span>
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link href="/explore">
              <Button className="w-full sm:w-auto bg-[#ff6600] hover:bg-orange-500 shadow-lg hover:shadow-orange-500/40">
                Explore Trends
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>

            <Link href="/create">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-orange-200 hover:bg-orange-50"
              >
                Create Directory
              </Button>
            </Link>
          </div>

          {/* Newsletter */}
          <div className="max-w-xl p-[1px] rounded-xl bg-gradient-to-r from-orange-300/40 to-amber-300/40">
            <div className="flex flex-col sm:flex-row gap-3 p-4 bg-white/70 backdrop-blur-xl rounded-xl shadow-md border border-orange-100">

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Users className="w-4 h-4 text-[#ff6600]" />
                2,400+ trend hunters
              </div>

              <Input
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Button className="bg-[#ff6600] hover:bg-orange-500">
                Join
              </Button>

            </div>
          </div>

        </motion.div>
      </section>

      {/* TRENDING */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4">

          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold">Trending Now</h2>
            <Link href="/explore" className="text-sm text-[#ff6600] hover:underline">
              View all →
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trendingDirectories.map((d, i) => (
              <motion.div
                key={d.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="relative rounded-2xl p-6 border border-orange-200 bg-white/90"
              >
                <span className="text-xs font-semibold px-2 py-1 rounded-md bg-orange-100 text-[#ff6600]">
                  #{i + 1}
                </span>

                <h3 className="font-semibold text-lg mt-3">{d.title}</h3>

                <p className="text-sm text-gray-600 mt-2 mb-5">
                  {d.description}
                </p>

                <div className="text-sm text-gray-500">
                  ↗ {d.itemCount} items
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 text-center border-t border-orange-100">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Start building your own directory
        </h2>

        <Link href="/create">
          <Button className="bg-[#ff6600] hover:bg-orange-500">
            Create Directory
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </section>

    </div>
  );
}