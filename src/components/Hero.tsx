import { useEffect, useState } from "react";
import { HERO_SLIDES, BRAND, img } from "@/data/menu";
import { Instagram, Facebook, Tiktok } from "lucide-react";

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % HERO_SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);
  const s = HERO_SLIDES[i];

  return (
    <section className="relative h-[320px] w-full overflow-hidden bg-black">
      {/* Background Image */}
      {HERO_SLIDES.map((slide, idx) => (
        <div key={idx} className="absolute inset-0 transition-opacity duration-1000" style={{ opacity: i === idx ? 1 : 0 }}>
          <img src={img(slide.image, 800)} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/90" />
        </div>
      ))}

      {/* Top Header */}
      <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between p-4">
        <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/40 px-3 py-1.5 backdrop-blur-md">
          <span className="text-xl">🍔</span>
          <span className="font-display font-bold text-amber-500 text-sm tracking-widest">SPICY FOODS</span>
        </div>
        <div className="flex gap-2 text-white">
          <a href={BRAND.instagram} className="rounded-full bg-black/40 p-1.5"><Instagram size={18} /></a>
          <a href={BRAND.facebook} className="rounded-full bg-black/40 p-1.5"><Facebook size={18} /></a>
          <a href={BRAND.tiktok} className="rounded-full bg-black/40 p-1.5"><Tiktok size={18} /></a>
        </div>
      </div>

      {/* Main Content */}
      <div className="absolute inset-x-0 bottom-14 z-20 px-4 text-center">
        <h1 className="font-display text-3xl font-bold text-white leading-tight">
          {s.title} <span className="italic text-amber-500">{s.titleAccent}</span>
        </h1>
        <p className="text-gray-300 text-[10px] mt-0.5">{s.subtitle}</p>
        
        {/* Indicators */}
        <div className="mt-2 flex justify-center gap-1.5">
          {HERO_SLIDES.map((_, idx) => (
            <div key={idx} className={`h-1 rounded-full ${i === idx ? 'w-6 bg-amber-500' : 'w-2 bg-gray-600'}`} />
          ))}
        </div>
      </div>

      {/* Info Strip */}
      <div className="absolute inset-x-0 bottom-0 z-20 grid grid-cols-2 divide-x divide-white/10 border-t border-white/10 bg-black/90 text-[10px] text-gray-300">
        <div className="flex items-center justify-center gap-1 py-2">📍 Husainabad, Karachi</div>
        <div className="flex items-center justify-center gap-1 py-2">🕒 3 PM — 3 AM</div>
      </div>
    </section>
  );
}
