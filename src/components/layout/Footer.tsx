import { siteConfig } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>
          <span className="text-heading font-medium">{siteConfig.name}</span>
        </p>
        <p>Built with Next.js & Framer Motion</p>
        <p>&copy; {year}</p>
      </div>
    </footer>
  );
}
