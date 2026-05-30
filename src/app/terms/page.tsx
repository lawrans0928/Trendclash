"use client";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-[#0a0a0a]">

      <div className="max-w-4xl mx-auto px-6 py-28">

        {/* HEADER */}
        <div className="mb-16">
          <h1 className="font-mono text-5xl tracking-tight mb-3">
            Terms
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
              TrendClash is a community-driven platform for discovering and ranking tools, products, and resources.
            </p>
            <p className="mt-3">
              By accessing or using the platform, you agree to these terms.
            </p>
          </section>

          {/* USE */}
          <section className="grid md:grid-cols-3 gap-8">
            <h2 className="font-mono text-black">Use</h2>

            <div className="md:col-span-2 space-y-3">
              <p>
                You may use TrendClash only for lawful purposes.
              </p>
              <p>
                You agree not to:
              </p>
              <ul className="space-y-1">
                <li>• Manipulate rankings or voting systems</li>
                <li>• Post misleading or harmful content</li>
                <li>• Attempt to disrupt or abuse the platform</li>
              </ul>
            </div>
          </section>

          {/* CONTENT */}
          <section className="grid md:grid-cols-3 gap-8">
            <h2 className="font-mono text-black">Content</h2>

            <div className="md:col-span-2 space-y-3">
              <p>
                You retain ownership of content you submit.
              </p>
              <p>
                By submitting content, you grant TrendClash a license to display,
                distribute, and promote it within the platform.
              </p>
              <p>
                We may remove content that violates these terms.
              </p>
            </div>
          </section>

          {/* RANKING SYSTEM */}
          <section className="grid md:grid-cols-3 gap-8">
            <h2 className="font-mono text-black">RANKING</h2>

            <div className="md:col-span-2 space-y-3">
              <p>
                Rankings are determined by community interaction.
              </p>
              <p>
                Any attempt to artificially influence rankings (fake votes, bots, spam)
                may result in removal or suspension.
              </p>
            </div>
          </section>

          {/* ACCOUNTS */}
          <section className="grid md:grid-cols-3 gap-8">
            <h2 className="font-mono text-black">Accounts</h2>

            <div className="md:col-span-2 space-y-3">
              <p>
                You are responsible for maintaining your account security.
              </p>
              <p>
                We are not liable for unauthorized access resulting from your actions.
              </p>
            </div>
          </section>

          {/* TERMINATION */}
          <section className="grid md:grid-cols-3 gap-8">
            <h2 className="font-mono text-black">Termination</h2>

            <div className="md:col-span-2 space-y-3">
              <p>
                We may suspend or terminate access if these terms are violated.
              </p>
            </div>
          </section>

          {/* DISCLAIMER */}
          <section className="grid md:grid-cols-3 gap-8">
            <h2 className="font-mono text-black">Disclaimer</h2>

            <div className="md:col-span-2 space-y-3">
              <p>
                TrendClash is provided “as is” without warranties of any kind.
              </p>
              <p>
                We do not guarantee accuracy of user-submitted content.
              </p>
            </div>
          </section>

          {/* CHANGES */}
          <section className="grid md:grid-cols-3 gap-8">
            <h2 className="font-mono text-black">Changes</h2>

            <div className="md:col-span-2 space-y-3">
              <p>
                These terms may be updated at any time.
              </p>
              <p>
                Continued use of the platform indicates acceptance.
              </p>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}