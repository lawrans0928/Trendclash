"use client";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-[#0a0a0a]">

      <div className="max-w-4xl mx-auto px-6 py-28">

        {/* HEADER */}
        <div className="mb-16">
          <h1 className="font-mono text-5xl tracking-tight mb-3">
            Privacy
          </h1>
          <p className="text-sm text-gray-500">
            Last updated: April 2026
          </p>
        </div>

        {/* CONTENT */}
        <div className="space-y-14 text-[15px] leading-relaxed text-gray-600">

          {/* INTRO */}
          <section className="max-w-2xl">
            <p>
              We respect your privacy and are committed to protecting your data.
            </p>
            <p className="mt-3">
              This policy explains what we collect and how it is used.
            </p>
          </section>

          {/* DATA COLLECTION */}
          <section className="grid md:grid-cols-3 gap-8">
            <h2 className="font-mono text-black">Data</h2>

            <div className="md:col-span-2 space-y-3">
              <p>
                We collect basic information such as your name, email, and activity on the platform.
              </p>
              <p>
                This includes actions like creating directories, voting, and browsing.
              </p>
            </div>
          </section>

          {/* USAGE */}
          <section className="grid md:grid-cols-3 gap-8">
            <h2 className="font-mono text-black">Usage</h2>

            <div className="md:col-span-2 space-y-3">
              <p>
                Your data is used to operate and improve TrendClash.
              </p>
              <p>
                This includes ranking systems, personalization, and feature improvements.
              </p>
            </div>
          </section>

          {/* SHARING */}
          <section className="grid md:grid-cols-3 gap-8">
            <h2 className="font-mono text-black">Sharing</h2>

            <div className="md:col-span-2 space-y-3">
              <p>
                We do not sell your personal data.
              </p>
              <p>
                We may share data with trusted services required to run the platform.
              </p>
            </div>
          </section>

          {/* COOKIES */}
          <section className="grid md:grid-cols-3 gap-8">
            <h2 className="font-mono text-black">Cookies</h2>

            <div className="md:col-span-2 space-y-3">
              <p>
                We use cookies to improve performance and user experience.
              </p>
            </div>
          </section>

          {/* SECURITY */}
          <section className="grid md:grid-cols-3 gap-8">
            <h2 className="font-mono text-black">Security</h2>

            <div className="md:col-span-2 space-y-3">
              <p>
                We take reasonable steps to protect your data.
              </p>
              <p>
                However, no system is completely secure.
              </p>
            </div>
          </section>

          {/* USER RIGHTS */}
          <section className="grid md:grid-cols-3 gap-8">
            <h2 className="font-mono text-black">Your Rights</h2>

            <div className="md:col-span-2 space-y-3">
              <p>
                You may request access, update, or deletion of your data.
              </p>
              <p>
                Contact us to make a request.
              </p>
            </div>
          </section>

          {/* UPDATES */}
          <section className="grid md:grid-cols-3 gap-8">
            <h2 className="font-mono text-black">Updates</h2>

            <div className="md:col-span-2 space-y-3">
              <p>
                This policy may change over time.
              </p>
              <p>
                Continued use means acceptance of updates.
              </p>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}