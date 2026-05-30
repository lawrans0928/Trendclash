import Link from "next/link";
import { ArrowLeft, ExternalLink, Share2, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VotingButtons } from "@/components/voting-buttons";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ItemPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/directory/best-ai-tools-2026"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Directory
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Voting Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card>
                <CardContent className="p-6 flex flex-col items-center">
                  <VotingButtons itemId="1" initialScore={342} size="lg" />
                  <Button variant="outline" size="sm" className="mt-4 w-full">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h1 className="text-4xl font-medium mb-3">ChatGPT</h1>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge>AI</Badge>
                    <Badge>Chat</Badge>
                    <Badge>GPT</Badge>
                  </div>
                  <p className="text-xl text-muted-foreground">
                    Advanced conversational AI by OpenAI
                  </p>
                </div>
              </div>

              <a
                href="https://chat.openai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="bg-primary hover:bg-primary/90">
                  Visit Website
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  ChatGPT is an advanced AI language model developed by OpenAI. It can engage in
                  natural conversations, answer questions, help with writing, coding, analysis, and
                  much more. The tool has revolutionized how people interact with AI and has become
                  one of the most popular AI applications worldwide.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With its ability to understand context, generate human-like responses, and assist
                  with a wide variety of tasks, ChatGPT has become an essential tool for
                  professionals, students, and anyone looking to boost their productivity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Added by</span>
                  <span className="font-medium">@techexplorer</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Added on</span>
                  <span className="font-medium">March 20, 2026</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Website</span>
                  <a
                    href="https://chat.openai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    chat.openai.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Natural language understanding and generation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Code generation and debugging assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Content creation and editing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Analysis and research support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Multilingual capabilities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
