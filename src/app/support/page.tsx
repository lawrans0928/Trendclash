"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white text-[#0a0a0a]">

      <div className="max-w-5xl mx-auto px-6 py-28 space-y-24">

        {/* HERO */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <h1 className="font-mono text-5xl md:text-6xl leading-tight tracking-tight">
            Need help?
            <br />
            <span className="text-[#ff6600]">We’re here.</span>
          </h1>

          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
            Whether you have a question, feedback, or an issue — reach out and we’ll get back to you as soon as possible.
          </p>
        </motion.section>

        {/* OPTIONS */}
        <section className="grid md:grid-cols-2 gap-6">

          <div className="border border-gray-200 rounded-xl p-6">
            <Mail className="w-5 h-5 mb-3 text-[#ff6600]" />
            <h3 className="font-medium mb-1">Email Support</h3>
            <p className="text-sm text-gray-500 mb-3">
              Best for detailed issues or account help
            </p>
            <p className="text-sm font-medium">support@trendclash.com</p>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <MessageCircle className="w-5 h-5 mb-3 text-[#ff6600]" />
            <h3 className="font-medium mb-1">General Feedback</h3>
            <p className="text-sm text-gray-500 mb-3">
              Ideas, suggestions, or feature requests
            </p>
            <p className="text-sm font-medium">feedback@trendclash.com</p>
          </div>

        </section>

        {/* CONTACT FORM */}
        <section className="grid md:grid-cols-2 gap-12 items-start">

          <div>
            <h2 className="font-mono text-xl mb-4">Contact</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Send us a message directly. We typically respond within 24 hours.
            </p>
          </div>

          <form className="space-y-5">

            <div className="space-y-2">
              <Label>Name</Label>
              <Input placeholder="Your name" className="focus:border-[#ff6600]" />
            </div>

            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" placeholder="you@example.com" className="focus:border-[#ff6600]" />
            </div>

            <div className="space-y-2">
              <Label>Message</Label>
              <Textarea
                rows={4}
                placeholder="How can we help?"
                className="resize-none focus:border-[#ff6600]"
              />
            </div>

            <Button className="bg-[#ff6600] hover:bg-orange-500">
              Send Message
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

          </form>

        </section>

        {/* FAQ */}
        <section className="space-y-8">

          <h2 className="font-mono text-xl">Common Questions</h2>

          <div className="space-y-6">

            <div>
              <h3 className="font-medium mb-1">How do rankings work?</h3>
              <p className="text-sm text-gray-500">
                Rankings are based on community votes and update dynamically.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-1">Can I create my own directory?</h3>
              <p className="text-sm text-gray-500">
                Yes — anyone can create and manage directories.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-1">Is TrendClash free?</h3>
              <p className="text-sm text-gray-500">
                Yes, core features are free. Premium features may be added later.
              </p>
            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="pt-12 border-t border-gray-200 flex items-center justify-between">

          <div>
            <h3 className="text-lg font-medium">
              Prefer exploring instead?
            </h3>
            <p className="text-sm text-gray-500">
              Discover top-ranked tools and resources
            </p>
          </div>

          <Button className="bg-[#ff6600] hover:bg-orange-500">
            Explore
          </Button>

        </section>

      </div>
    </div>
  );
}