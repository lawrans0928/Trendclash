import Link from "next/link";
import { TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";

interface DirectoryCardProps {
  slug: string;
  title: string;
  description: string;
  category: string;
  itemCount: number;
  isFeatured?: boolean;
}

const categoryColors: Record<string, string> = {
  Technology: "bg-blue-50 text-blue-600",
  Business: "bg-purple-50 text-purple-600",
  Design: "bg-pink-50 text-pink-600",
  Productivity: "bg-green-50 text-green-600",
  Education: "bg-amber-50 text-amber-600",
  Work: "bg-indigo-50 text-indigo-600",
};

export function DirectoryCard({
  slug,
  title,
  description,
  category,
  itemCount,
  isFeatured,
}: DirectoryCardProps) {
  return (
    <Link href={`/directory/${slug}`} className="block group">

      <motion.div
        whileHover={{
          y: -6,
          scale: 1.02,
          boxShadow: "0px 25px 50px rgba(255,102,0,0.15)"
        }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="relative rounded-2xl p-[1px] bg-gradient-to-r from-orange-200/40 to-amber-200/40"
      >
        {/* Inner Card */}
        <div className="h-full rounded-2xl bg-white/80 backdrop-blur-xl border border-orange-100 p-6 transition-all">

          {/* Top */}
          <div className="flex items-start justify-between mb-3">

            <span className={`text-xs px-2 py-1 rounded-md font-medium ${categoryColors[category]}`}>
              {category}
            </span>

            {isFeatured && (
              <span className="text-xs px-2 py-1 rounded-md bg-[#ff6600] text-white font-medium shadow-sm">
                Featured
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold tracking-tight group-hover:text-[#ff6600] transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 mt-2 mb-5 line-clamp-2 leading-relaxed">
            {description}
          </p>

          {/* Bottom */}
          <div className="flex items-center justify-between text-xs text-gray-500">

            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#ff6600]" />
              <span className="font-medium">{itemCount}</span>
              <span>items</span>
            </div>

            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Active</span>
            </div>

          </div>

        </div>
      </motion.div>

    </Link>
  );
}