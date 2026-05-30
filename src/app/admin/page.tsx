"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface Applicant {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  created_at: string;
}

export default function AdminPage() {
  const [data, setData] = useState<Applicant[]>([]);

  useEffect(() => {
    fetch("/api/admin")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  const updateStatus = async (id: string, status: string) => {
    await fetch("/api/admin", {
      method: "PATCH",
      body: JSON.stringify({ id, status }),
    });

    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-white px-6 py-16">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-mono mb-8">
          Applications
        </h1>

        <div className="border border-gray-200 rounded-xl overflow-hidden">

          {data.map((user) => (
            <div
              key={user.id}
              className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 border-b"
            >

              <div>
                <h3 className="font-medium">{user.name}</h3>
                <p className="text-sm text-gray-500">{user.email}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {user.role}
                </p>
              </div>

              <div className="flex items-center gap-2">

                <span className="text-xs px-2 py-1 rounded bg-gray-100">
                  {user.status}
                </span>

                <Button
                  size="sm"
                  className="bg-green-500 hover:bg-green-600"
                  onClick={() => updateStatus(user.id, "approved")}
                >
                  Approve
                </Button>

                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => updateStatus(user.id, "rejected")}
                >
                  Reject
                </Button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}