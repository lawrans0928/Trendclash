"use client";

import { useState, useMemo } from "react";
import { Filter } from "lucide-react";
import { motion } from "framer-motion";
import { DirectoryCard } from "@/components/directory-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ITEMS_PER_PAGE = 6;

const allDirectories = [
  { slug: "best-ai-tools-2026", title: "Best AI Tools 2026", description: "Top AI tools ranked by the community", category: "Technology", itemCount: 42 },
  { slug: "startup-resources", title: "Startup Resources", description: "Tools every founder needs", category: "Business", itemCount: 38 },
  { slug: "productivity-apps", title: "Productivity Apps", description: "Apps that improve focus", category: "Productivity", itemCount: 56 },
  { slug: "remote-work-tools", title: "Remote Work Tools", description: "Tools for remote teams", category: "Work", itemCount: 29, isFeatured: true },
  { slug: "learning-platforms", title: "Learning Platforms", description: "Best platforms to learn skills", category: "Education", itemCount: 31 },
  { slug: "design-resources", title: "Design Resources", description: "Tools for designers", category: "Design", itemCount: 44 },
];

export default function ExplorePage() {
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("trending");
  const [page, setPage] = useState(1);

  const filtered =
    category === "all"
      ? allDirectories
      : allDirectories.filter((d) => d.category === category);

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      if (sortBy === "most-items") return b.itemCount - a.itemCount;
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [filtered, sortBy]);

  const totalPages = Math.ceil(sorted.length / ITEMS_PER_PAGE);

  const paginated = sorted.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-[#fffaf5] text-gray-900 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-orange-200/40 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-amber-200/40 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 py-14">

        {/* Header */}
        <div className="mb-14">
          <h1 className="font-mono text-4xl font-medium tracking-tight">
            Explore Directories
          </h1>
          <p className="text-gray-600 mt-2">
            Discover curated collections ranked by the community
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-12 p-5 bg-white/70 backdrop-blur-xl rounded-xl border border-orange-100">

          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-orange-100 flex items-center justify-center">
              <Filter className="w-4 h-4 text-orange-500" />
            </div>
            <span className="text-sm font-medium text-gray-700">
              Filters
            </span>
          </div>

          <Select value={category} onValueChange={(v) => { setCategory(v); setPage(1); }}>
            <SelectTrigger className="w-[180px] bg-white border-orange-100">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="Technology">Technology</SelectItem>
              <SelectItem value="Business">Business</SelectItem>
              <SelectItem value="Productivity">Productivity</SelectItem>
              <SelectItem value="Work">Work</SelectItem>
              <SelectItem value="Education">Education</SelectItem>
              <SelectItem value="Design">Design</SelectItem>
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={(v) => { setSortBy(v); setPage(1); }}>
            <SelectTrigger className="w-[180px] bg-white border-orange-100">
              <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="trending">Trending</SelectItem>
              <SelectItem value="most-items">Most Items</SelectItem>
            </SelectContent>
          </Select>

        </div>

        {/* Count */}
        <p className="text-sm text-gray-500 mb-8">
          Showing {filtered.length} directories
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {paginated.map((d, i) => (
            <motion.div
              key={d.slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <DirectoryCard {...d} />
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <Pagination>
          <PaginationContent>
            <PaginationPrevious onClick={() => setPage((p) => Math.max(1, p - 1))} />

            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  isActive={page === i + 1}
                  onClick={() => setPage(i + 1)}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationNext onClick={() => setPage((p) => Math.min(totalPages, p + 1))} />
          </PaginationContent>
        </Pagination>

      </div>
    </div>
  );
}