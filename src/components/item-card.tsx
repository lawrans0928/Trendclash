import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { VotingButtons } from "@/components/voting-buttons";
import { Badge } from "@/components/ui/badge";

interface ItemCardProps {
  id: string;
  rank: number;
  name: string;
  description: string;
  score: number;
  url?: string;
  tags?: string[];
}

const getRankBadge = (rank: number) => {
  if (rank === 1)
    return {
      emoji: "🥇",
      color: "bg-gradient-to-br from-amber-100 to-amber-50 text-amber-900 border-amber-300",
      label: "#1",
    };
  if (rank === 2)
    return {
      emoji: "🥈",
      color: "bg-gradient-to-br from-gray-100 to-gray-50 text-gray-900 border-gray-300",
      label: "#2",
    };
  if (rank === 3)
    return {
      emoji: "🥉",
      color: "bg-gradient-to-br from-orange-100 to-orange-50 text-orange-900 border-orange-300",
      label: "#3",
    };
  return null;
};

const tagColors = [
  "bg-blue-500/10 text-blue-700 border-blue-200",
  "bg-purple-500/10 text-purple-700 border-purple-200",
  "bg-pink-500/10 text-pink-700 border-pink-200",
  "bg-green-500/10 text-green-700 border-green-200",
  "bg-amber-500/10 text-amber-700 border-amber-200",
  "bg-indigo-500/10 text-indigo-700 border-indigo-200",
];

export function ItemCard({ id, rank, name, description, score, url, tags }: ItemCardProps) {
  const rankBadge = getRankBadge(rank);
  const isTopRanked = rank <= 3;

  return (
    <Card
      className={`hover:border-primary/40 transition-all hover:shadow-md shadow-sm ${
        isTopRanked ? "border-l-4 border-l-primary" : ""
      }`}
    >
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="flex flex-col items-center gap-2 min-w-[70px]">
            {rankBadge ? (
              <div
                className={`flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg border shadow-sm ${rankBadge.color}`}
              >
                <span className="text-lg">{rankBadge.emoji}</span>
              </div>
            ) : (
              <span className="text-2xl font-medium text-muted-foreground">#{rank}</span>
            )}
            <VotingButtons itemId={id} initialScore={score} size="sm" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <Link href={`/item/${id}`}>
                <CardTitle className="hover:text-primary transition-colors line-clamp-1">
                  {name}
                </CardTitle>
              </Link>
              {url && (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-1"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
            <CardDescription className="line-clamp-2 leading-relaxed">
              {description}
            </CardDescription>
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-3">
                {tags.map((tag, index) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className={`text-xs font-medium border ${tagColors[index % tagColors.length]}`}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
