import { siteConfig } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-display text-lg font-bold text-heading">
          NB<span className="text-accent">.</span>
        </p>
        <p className="text-sm text-muted">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Built with Next.js & Framer Motion
        </p>
      </div>
    </footer>
  );
}
