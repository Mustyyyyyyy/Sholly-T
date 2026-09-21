import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { brandConfig } from "@/data/brandConfig";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAuto, setIsAuto] = useState(true);
  const slides = brandConfig.heroSlides;

  useEffect(() => {
    if (!isAuto) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAuto, slides.length]);

  const goTo = (index: number) => {
    setCurrent(index);
    setIsAuto(false);
    const timer = setTimeout(() => setIsAuto(true), 10000);
    return () => clearTimeout(timer);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAuto(false);
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setIsAuto(false);
  };

  return (
    <div className="relative w-full overflow-hidden bg-brand-brown">
      {/* Slides */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] lg:h-[580px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background image or placeholder */}
            <div className="absolute inset-0">
              {slide.image ? (
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.parentElement?.classList.add("bg-brand-brown");
                  }}
                />
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 via-brand-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center section-container">
              <div className="max-w-xl">
                <p className="text-brand-orange font-semibold tracking-widest uppercase text-sm mb-3 animate-fade-in">
                  {brandConfig.brandStatement}
                </p>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4 animate-slide-up">
                  {slide.title}
                </h1>
                <p className="text-white/70 text-lg sm:text-xl mb-8 animate-slide-up">
                  {slide.subtitle}
                </p>
                <div className="flex flex-wrap gap-3 animate-slide-up">
                  <a
                    href={`https://wa.me/${brandConfig.whatsappNumber}?text=Hello%20Sholly-T%20Spaghetti%20👋%20I%20would%20like%20to%20place%20an%20order`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    ORDER ON WHATSAPP
                  </a>
                  <a
                    href="/menu"
                    className="btn-secondary text-white border-white/30 hover:bg-white hover:text-brand-brown"
                  >
                    VIEW MENU
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current
                ? "w-8 bg-brand-orange"
                : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
