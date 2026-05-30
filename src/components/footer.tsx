import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-medium mb-4">
              <span className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">
                TrendClash
              </span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Discover and rank what&apos;s trending across the internet.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/explore" className="text-muted-foreground hover:text-primary transition-colors">
                  Explore
                </Link>
              </li>
              <li>
                <Link href="/create" className="text-muted-foreground hover:text-primary transition-colors">
                  Create Directory
                </Link>
              </li>
              <li>
                <Link href="/add-item" className="text-muted-foreground hover:text-primary transition-colors">
                  Add Item
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/joinwithus" className="text-muted-foreground hover:text-primary transition-colors">
                  Join With Us
                </a>
              </li>
              <li>
                <a href="/support" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © 2026 TrendClash. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
