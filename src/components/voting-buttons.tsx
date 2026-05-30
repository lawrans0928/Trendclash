"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VotingButtonsProps {
  itemId: string;
  initialScore: number;
  size?: "sm" | "default" | "lg";
  vertical?: boolean;
}

export function VotingButtons({
  itemId,
  initialScore,
  size = "default",
  vertical = true,
}: VotingButtonsProps) {
  const [score, setScore] = useState(initialScore);
  const [voted, setVoted] = useState<"up" | "down" | null>(null);

  const handleUpvote = () => {
    if (voted === "up") {
      setScore(score - 1);
      setVoted(null);
    } else if (voted === "down") {
      setScore(score + 2);
      setVoted("up");
    } else {
      setScore(score + 1);
      setVoted("up");
    }
  };

  const handleDownvote = () => {
    if (voted === "down") {
      setScore(score + 1);
      setVoted(null);
    } else if (voted === "up") {
      setScore(score - 2);
      setVoted("down");
    } else {
      setScore(score - 1);
      setVoted("down");
    }
  };

  const buttonSize = size === "sm" ? "icon" : "icon";
  const iconSize = size === "sm" ? "w-4 h-4" : "w-5 h-5";

  if (vertical) {
    return (
      <div className="flex flex-col items-center gap-0.5 bg-beige border border-border rounded-lg p-1 shadow-sm">
        <Button
          variant="ghost"
          size={buttonSize}
          onClick={handleUpvote}
          className={`h-7 w-7 rounded transition-all ${
            voted === "up"
              ? "text-primary bg-primary/10 hover:bg-primary/20"
              : "text-muted-foreground hover:text-primary hover:bg-primary/5"
          }`}
        >
          <ChevronUp className={iconSize} />
        </Button>
        <span className="text-sm font-medium py-1 min-w-[2ch] text-center">{score}</span>
        <Button
          variant="ghost"
          size={buttonSize}
          onClick={handleDownvote}
          className={`h-7 w-7 rounded transition-all ${
            voted === "down"
              ? "text-destructive bg-destructive/10 hover:bg-destructive/20"
              : "text-muted-foreground hover:text-destructive hover:bg-destructive/5"
          }`}
        >
          <ChevronDown className={iconSize} />
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1 bg-beige border border-border rounded-lg p-1 shadow-sm">
      <Button
        variant="ghost"
        size={buttonSize}
        onClick={handleUpvote}
        className={`h-7 w-7 rounded transition-all ${
          voted === "up"
            ? "text-primary bg-primary/10 hover:bg-primary/20"
            : "text-muted-foreground hover:text-primary hover:bg-primary/5"
        }`}
      >
        <ChevronUp className={iconSize} />
      </Button>
      <span className="text-sm font-medium px-2 min-w-[3ch] text-center">{score}</span>
      <Button
        variant="ghost"
        size={buttonSize}
        onClick={handleDownvote}
        className={`h-7 w-7 rounded transition-all ${
          voted === "down"
            ? "text-destructive bg-destructive/10 hover:bg-destructive/20"
            : "text-muted-foreground hover:text-destructive hover:bg-destructive/5"
        }`}
      >
        <ChevronDown className={iconSize} />
      </Button>
    </div>
  );
}
