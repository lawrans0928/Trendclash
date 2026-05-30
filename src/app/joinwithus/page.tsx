"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const roles = [
  { title: "Frontend Builder", desc: "Build clean, fast UI with strong UX sense." },
  { title: "Backend Builder", desc: "Design scalable APIs and ranking systems." },
  { title: "Product Designer", desc: "Craft premium UX like Apple / YC products." },
  { title: "Growth / Marketing", desc: "Help TrendClash reach real users globally." },
];

export default function JoinPage() {
  const [activeRole, setActiveRole] = useState<number | null>(null);
  const [submittedRole, setSubmittedRole] = useState<number | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    github: "",
    why: "",
    build: "",
  });

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent, roleIndex: number) => {
    e.preventDefault();

    console.log({ role: roleIndex, ...form });

    setSubmittedRole(roleIndex);

    setForm({
      name: "",
      email: "",
      github: "",
      why: "",
      build: "",
    });

    setTimeout(() => {
      setSubmittedRole(null);
      setActiveRole(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white text-[#0a0a0a] overflow-x-hidden relative">

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-orange-200/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-amber-200/30 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-24 space-y-20">

        {/* HERO */}
        <div className="max-w-3xl">
          <h1 className="font-mono text-4xl md:text-5xl tracking-tight leading-tight mb-6">
            We’re not hiring.
            <br />
            <span className="bg-gradient-to-r from-[#ff6600] to-amber-500 bg-clip-text text-transparent">
              We’re building.
            </span>
          </h1>

          <p className="text-lg text-gray-600">
            No salary. No hierarchy. Just builders.
          </p>
        </div>

        {/* ROLES */}
        <div className="space-y-4">
          {roles.map((role, i) => (
            <div key={i} className="border border-gray-200 rounded-xl bg-white">

              <div
                onClick={() => setActiveRole(activeRole === i ? null : i)}
                className="flex items-center justify-between p-6 cursor-pointer hover:border-orange-300 transition"
              >
                <div>
                  <h3 className="font-medium text-lg">{role.title}</h3>
                  <p className="text-sm text-gray-600">{role.desc}</p>
                </div>

                <span className="text-sm text-orange-500 font-medium">
                  {activeRole === i ? "Close" : "Open"}
                </span>
              </div>

              <AnimatePresence>
                {activeRole === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6"
                  >

                    {submittedRole === i ? (
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex flex-col items-center justify-center text-center py-10"
                      >
                        <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
                        <h3 className="text-lg font-medium mb-1">
                          Application Submitted
                        </h3>
                        <p className="text-sm text-gray-500">
                          We’ll review and get back to you.
                        </p>
                      </motion.div>
                    ) : (
                      <form
                        onSubmit={(e) => handleSubmit(e, i)}
                        className="mt-4 border border-gray-200 rounded-xl p-6 space-y-5 bg-[#fffaf5]"
                      >

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label>Name</Label>
                            <Input
                              value={form.name}
                              onChange={(e) => handleChange("name", e.target.value)}
                              required
                            />
                          </div>

                          <div>
                            <Label>Email</Label>
                            <Input
                              type="email"
                              value={form.email}
                              onChange={(e) => handleChange("email", e.target.value)}
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <Label>GitHub / Portfolio</Label>
                          <Input
                            placeholder="https://..."
                            value={form.github}
                            onChange={(e) => handleChange("github", e.target.value)}
                          />
                        </div>

                        <div>
                          <Label>Why do you want to join?</Label>
                          <Textarea
                            rows={3}
                            value={form.why}
                            onChange={(e) => handleChange("why", e.target.value)}
                            required
                          />
                        </div>

                        <div>
                          <Label>What would you build first?</Label>
                          <Textarea
                            rows={3}
                            value={form.build}
                            onChange={(e) => handleChange("build", e.target.value)}
                            required
                          />
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-[#ff6600] hover:bg-orange-500 shadow-md"
                        >
                          Submit Application
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>

                      </form>
                    )}

                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))}
        </div>

        {/* 🔥 NEW CTA */}
        <div className="text-center pt-10 border-t border-gray-200">
          <h3 className="text-xl font-medium mb-2">
            Can’t find your role?
          </h3>

          <p className="text-gray-600 mb-5">
            If you believe you can contribute, we want to hear from you.
          </p>

          <Link href="/support">
            <Button
              variant="outline"
              className="border-orange-200 text-orange-600 hover:bg-orange-50"
            >
              Contact Us
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}