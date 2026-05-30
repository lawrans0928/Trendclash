"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#0a0a0a]">

      <div className="max-w-5xl mx-auto px-6 py-28 space-y-24">

        {/* HERO */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <h1 className="font-mono text-5xl md:text-6xl leading-tight tracking-tight">
            The internet is full of noise.
            <br />
            <span className="text-[#ff6600]">
              We surface what matters.
            </span>
          </h1>

          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
            TrendClash is a community-powered platform to discover, rank, and share the most valuable tools and resources — without the clutter.
          </p>
        </motion.section>

        {/* PROBLEM */}
        <section className="grid md:grid-cols-2 gap-12 items-start">

          <div>
            <h2 className="font-mono text-xl mb-4">Problem</h2>
          </div>

          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Discovery on the internet is broken.
            </p>

            <p>
              You rely on outdated lists, influencer threads, or algorithmic feeds that prioritize attention — not value.
            </p>

            <p>
              The result: wasted time, missed opportunities, and constant noise.
            </p>
          </div>

        </section>

        {/* SOLUTION */}
        <section className="grid md:grid-cols-2 gap-12 items-start">

          <div>
            <h2 className="font-mono text-xl mb-4">Solution</h2>
          </div>

          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              TrendClash replaces static curation with dynamic, community-driven rankings.
            </p>

            <p>
              Every directory evolves in real-time based on user contributions and votes.
            </p>

            <p className="text-[#ff6600] font-medium">
              The best rises naturally.
            </p>
          </div>

        </section>

        {/* DIFFERENCE */}
        <section className="space-y-8">

          <h2 className="font-mono text-xl">Difference</h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="border border-gray-200 rounded-xl p-6">
              <p className="text-sm text-gray-500 mb-2">Traditional</p>
              <p className="text-gray-700">
                Static lists, biased opinions, slow updates
              </p>
            </div>

            <div className="border border-[#ff6600]/30 rounded-xl p-6 bg-[#fff7f2]">
              <p className="text-sm text-[#ff6600] mb-2">TrendClash</p>
              <p className="text-gray-700">
                Live rankings, community-driven, always relevant
              </p>
            </div>

          </div>

        </section>

        {/* VISION */}
        <section className="grid md:grid-cols-2 gap-12 items-start">

          <div>
            <h2 className="font-mono text-xl mb-4">Vision</h2>
          </div>

          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              We believe discovery should be shaped by people — not algorithms.
            </p>

            <p>
              TrendClash aims to become the global layer for discovering what actually matters across every niche.
            </p>
          </div>

        </section>

        {/* CTA */}
        <section className="pt-12 border-t border-gray-200">

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            <div>
              <h3 className="text-xl font-medium mb-1">
                Explore what’s worth your time
              </h3>
              <p className="text-gray-500 text-sm">
                Start discovering community-ranked tools
              </p>
            </div>

            <Link href="/explore">
              <Button className="bg-[#ff6600] hover:bg-orange-500 shadow-md hover:shadow-orange-400/30">
                Explore
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>

          </div>

        </section>

      </div>
    </div>
  );
}