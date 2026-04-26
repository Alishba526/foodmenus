import { useEffect, useState } from "react";
import { HERO_SLIDES, BRAND, img } from "@/data/menu";
import { Instagram, Facebook } from "lucide-react";

// Tiktok inline icon (lucide doesn't ship one consistently)
function TiktokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.5a8.16 8.16 0 0 0 4.77 1.52V6.69a4.78 4.78 0 0 1-1.84 0Z" />
    </svg>
  );
}

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % HERO_SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);
  const s = HERO_SLIDES[i];

  return (
    <section className="relative h-[85vh] min-h-[560px] w-full overflow-hidden">
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={idx}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === idx ? 1 : 0 }}
          aria-hidden={i !== idx}
        >
          <img
            src={img(slide.image, 1600)}
            alt=""
            loading={idx === 0 ? "eager" : "lazy"}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />
        </div>
      ))}

      {/* Top bar */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 py-5 md:px-10">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-fire shadow-glow">
            <span className="text-lg">🌶️</span>
          </div>
          <span className="font-display text-lg font-bold tracking-wide text-foreground">
            SPICY <span className="text-primary">FOODS</span>
          </span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={BRAND.instagram}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram"
            className="rounded-full border border-border bg-card/40 p-2 text-foreground backdrop-blur transition hover:bg-primary hover:text-primary-foreground"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href={BRAND.facebook}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Facebook"
            className="rounded-full border border-border bg-card/40 p-2 text-foreground backdrop-blur transition hover:bg-primary hover:text-primary-foreground"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            href={BRAND.tiktok}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="TikTok"
            className="rounded-full border border-border bg-card/40 p-2 text-foreground backdrop-blur transition hover:bg-primary hover:text-primary-foreground"
          >
            <TiktokIcon className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-20 z-10 px-6 md:px-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background/40 px-3 py-1 text-xs font-medium text-primary backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          {s.eyebrow}
        </div>
        <h1 className="mt-4 font-display text-5xl font-bold leading-none text-foreground md:text-7xl lg:text-8xl">
          {s.title} <em className="not-italic text-gradient-fire">{s.titleAccent}</em>
        </h1>
        <p className="mt-3 max-w-2xl text-base text-muted-foreground md:text-lg">{s.subtitle}</p>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-6 z-10 flex gap-2 md:left-10">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`h-1 rounded-full transition-all ${
              i === idx ? "w-10 bg-primary" : "w-5 bg-muted"
            }`}
          />
        ))}
      </div>

      {/* Info strip */}
      <div className="absolute inset-x-0 bottom-10 z-10 hidden px-6 md:block md:px-10">
        <div className="mx-auto grid max-w-6xl grid-cols-4 gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-card">
          <InfoCell icon="📍" label={BRAND.location} />
          <InfoCell icon="🕒" label={BRAND.hours} />
          <InfoCell icon="📞" label={BRAND.phone} href={`tel:${BRAND.phone.replace(/\s/g, "")}`} />
          <InfoCell
            icon="📲"
            label="WhatsApp Order"
            href={`https://wa.me/${BRAND.whatsapp}`}
            accent
          />
        </div>
      </div>
    </section>
  );
}

function InfoCell({
  icon,
  label,
  href,
  accent,
}: {
  icon: string;
  label: string;
  href?: string;
  accent?: boolean;
}) {
  const cls = `flex items-center justify-center gap-2 px-4 py-4 text-sm font-medium transition ${
    accent
      ? "bg-gradient-fire text-primary-foreground hover:opacity-90"
      : "bg-card text-foreground hover:bg-muted"
  }`;
  if (href)
    return (
      <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
        <span>{icon}</span>
        <span>{label}</span>
      </a>
    );
  return (
    <div className={cls}>
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
}
