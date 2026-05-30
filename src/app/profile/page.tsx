"use client";

import Link from "next/link";
import { Settings, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";

const userDirectories = [
  { slug: "best-ai-tools-2026", title: "Best AI Tools 2026", category: "Technology", itemCount: 42, votes: 1234 },
  { slug: "productivity-apps", title: "Best Productivity Apps", category: "Productivity", itemCount: 56, votes: 892 },
];

const userContributions = [
  { name: "ChatGPT", directory: "Best AI Tools 2026", date: "2 days ago" },
  { name: "Notion", directory: "Best Productivity Apps", date: "5 days ago" },
  { name: "Figma", directory: "Design Resources", date: "1 week ago" },
];

export default function ProfilePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-900">

      <div className="max-w-5xl mx-auto px-4 py-12">

        {/* HEADER */}
        <div className="flex items-start gap-6 mb-10 pb-8 border-b border-gray-200">

          <Avatar className="w-20 h-20">
            <AvatarFallback className="bg-gray-900 text-white text-xl">
              JD
            </AvatarFallback>
          </Avatar>

          <div className="flex-1">

            <div className="flex justify-between items-start mb-3">
              <div>
                <h1 className="text-2xl font-semibold">John Doe</h1>
                <p className="text-gray-500 text-sm">@johndoe</p>
              </div>

              {/* ✅ FIXED BUTTON */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => router.push("/settings")}
              >
                <Settings className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </div>

            <p className="text-gray-600 text-sm mb-4 max-w-xl">
              Tech enthusiast and curator of useful tools.
            </p>

            <div className="flex gap-6 text-sm">
              <span><b>2</b> Directories</span>
              <span><b>15</b> Contributions</span>
              <span><b>2,126</b> Votes</span>
            </div>

          </div>
        </div>

        {/* TABS */}
        <Tabs defaultValue="directories" className="space-y-6">

          <TabsList className="bg-gray-100 border border-gray-200">
            <TabsTrigger value="directories">Directories</TabsTrigger>
            <TabsTrigger value="contributions">Contributions</TabsTrigger>
            <TabsTrigger value="votes">Votes</TabsTrigger>
          </TabsList>

          {/* DIRECTORIES */}
          <TabsContent value="directories">
            <div className="flex justify-between mb-6">
              <h2 className="text-lg font-semibold">Your Directories</h2>

              <Link href="/create">
                <Button className="bg-[#ff6600] hover:bg-orange-500">
                  <Plus className="w-4 h-4 mr-2" />
                  Create
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              {userDirectories.map((d) => (
                <div key={d.slug} className="rounded-xl border border-gray-200 bg-white p-5 hover:border-gray-300 transition">

                  <Badge className="mb-2 bg-gray-100 text-gray-700">
                    {d.category}
                  </Badge>

                  <h3 className="font-medium text-lg hover:text-[#ff6600] transition">
                    {d.title}
                  </h3>

                  <div className="text-sm text-gray-500 mt-2 flex gap-4">
                    <span>{d.itemCount} items</span>
                    <span>{d.votes} votes</span>
                  </div>

                </div>
              ))}
            </div>
          </TabsContent>

          {/* CONTRIBUTIONS */}
          <TabsContent value="contributions">
            <h2 className="text-lg font-semibold mb-4">Recent Contributions</h2>

            <div className="space-y-3">
              {userContributions.map((c, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-200 bg-white p-4 flex justify-between"
                >
                  <div>
                    <p className="font-medium">{c.name}</p>
                    <p className="text-sm text-gray-500">
                      Added to {c.directory}
                    </p>
                  </div>
                  <span className="text-sm text-gray-400">{c.date}</span>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* VOTES */}
          <TabsContent value="votes">
            <div className="rounded-xl border border-gray-200 bg-white p-10 text-center">
              <p className="text-gray-500">
                Your voting history will appear here
              </p>
            </div>
          </TabsContent>

        </Tabs>

      </div>
    </div>
  );
}