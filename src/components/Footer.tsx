import { BRAND } from "@/data/menu";
import { Instagram, Facebook } from "lucide-react";

function TiktokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.5a8.16 8.16 0 0 0 4.77 1.52V6.69a4.78 4.78 0 0 1-1.84 0Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 px-4 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-fire shadow-glow">
              <span>🌶️</span>
            </div>
            <span className="font-display text-lg font-bold text-foreground">
              SPICY <span className="text-primary">FOODS</span>
            </span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Karachi's hottest cafe — fire-grilled burgers, pizza, rolls and more, served fresh from
            3 PM to 3 AM.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <a href={BRAND.instagram} target="_blank" rel="noreferrer noopener" aria-label="Instagram" className="rounded-full border border-border p-2 text-foreground transition hover:bg-primary hover:text-primary-foreground">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={BRAND.facebook} target="_blank" rel="noreferrer noopener" aria-label="Facebook" className="rounded-full border border-border p-2 text-foreground transition hover:bg-primary hover:text-primary-foreground">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={BRAND.tiktok} target="_blank" rel="noreferrer noopener" aria-label="TikTok" className="rounded-full border border-border p-2 text-foreground transition hover:bg-primary hover:text-primary-foreground">
              <TiktokIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
            Visit
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>📍 {BRAND.location}</li>
            <li>🕒 {BRAND.hours}</li>
            <li>
              📞{" "}
              <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                {BRAND.phone}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
            Order
          </h4>
          <a
            href={`https://wa.me/${BRAND.whatsapp}`}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-3 inline-flex rounded-xl bg-gradient-fire px-5 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-glow transition hover:opacity-90"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
      </p>
    </footer>
  );
}
