import * as React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { HERO_SLIDES, BRAND } from "@/data/menu";
import { img } from "@/data/menu";
import { Instagram, Facebook, MapPin, Clock } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

export function Hero() {
  const [current, setCurrent] = React.useState(0);
  const [api, setApi] = React.useState<any>();

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  React.useEffect(() => {
    if (!api) return;
    
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative h-[60vh] w-full overflow-hidden bg-black">
      {/* Top Header Overlay */}
      <div className="absolute top-4 left-0 right-0 z-20 flex items-center justify-between px-6">
        <div className="flex items-center gap-3 rounded-xl bg-black/60 px-4 py-2 backdrop-blur-md border border-white/10">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/20">
             <div className="h-6 w-6 rounded-full border-2 border-amber-500 border-t-transparent animate-spin-slow" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-white uppercase">
            {BRAND.name}
          </span>
        </div>
        
        <div className="flex gap-2">
          <a href={BRAND.instagram} target="_blank" className="flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md border border-white/10 hover:bg-amber-500 hover:text-black transition-all">
            <Instagram size={16} />
          </a>
          <a href={BRAND.facebook} target="_blank" className="flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md border border-white/10 hover:bg-amber-500 hover:text-black transition-all">
            <Facebook size={16} />
          </a>
          <a href={BRAND.tiktok} target="_blank" className="flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md border border-white/10 hover:bg-amber-500 hover:text-black transition-all font-bold text-[10px]">
            Tik
          </a>
        </div>
      </div>

      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="h-full w-full"
      >
        <CarouselContent className="h-full w-full -ml-0">
          {HERO_SLIDES.map((slide, index) => (
            <CarouselItem key={index} className="relative h-full w-full pl-0">
              <div className="relative h-[60vh] w-full bg-black">
                {/* Image background - Using object-contain to ensure the full image is visible as requested */}
                <img
                  src={img(slide.image, 1200)}
                  alt={slide.title}
                  className="absolute inset-0 h-full w-full object-contain"
                />
                
                {/* Overlay - Adjusted to be more subtle with object-contain */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end pb-20 px-6">
                  {/* Open Now Badge */}
                  <div className="mb-4 flex items-center gap-2 w-fit rounded-full bg-black/60 px-4 py-1.5 backdrop-blur-md border border-white/10">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-bold tracking-[0.1em] text-white uppercase">
                      {slide.eyebrow}
                    </span>
                  </div>

                  <h1 className="font-sans text-3xl font-black text-white md:text-6xl">
                    {slide.title} <span className="font-display italic text-amber-500">{slide.titleAccent}</span>
                  </h1>
                  
                  <p className="mt-1 max-w-md text-xs text-white/70 font-medium">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Carousel Dots */}
      <div className="absolute bottom-16 right-6 z-20 flex gap-1.5">
        {HERO_SLIDES.map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 rounded-full transition-all duration-300 ${current === i ? 'w-6 bg-amber-500' : 'w-1.5 bg-white/40'}`}
          />
        ))}
      </div>

      {/* Info Bar at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 grid grid-cols-2 border-t border-white/10 bg-black/90 backdrop-blur-xl">
        <div className="flex items-center gap-3 border-r border-white/10 py-3 px-6">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
            <MapPin size={16} />
          </div>
          <div>
            <p className="text-[8px] font-bold uppercase tracking-wider text-white/40 leading-none mb-1">Location</p>
            <p className="text-[10px] font-bold text-white leading-tight">{BRAND.location}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 py-3 px-6">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
            <Clock size={16} />
          </div>
          <div>
            <p className="text-[8px] font-bold uppercase tracking-wider text-white/40 leading-none mb-1">Hours</p>
            <p className="text-[10px] font-bold text-white leading-tight">{BRAND.hours}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
