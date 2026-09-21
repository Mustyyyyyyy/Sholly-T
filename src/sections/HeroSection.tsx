import { Link } from "react-router-dom";
import WhatsAppLink from "@/components/WhatsAppLink";
import SectionReveal from "@/components/SectionReveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { brandConfig } from "@/data/brandConfig";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-brand-brown overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-brand-orange blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-brand-yellow blur-3xl" />
      </div>

      <div className="relative section-container py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Content */}
          <SectionReveal>
            <div className="text-center lg:text-left">
              {/* Emblem */}
              <div className="flex justify-center lg:justify-start mb-6">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                  <div className="w-full h-full rounded-full border-4 border-brand-orange flex items-center justify-center bg-brand-brown">
                    <img
                      src="/images/logo.jpeg"
                      alt={brandConfig.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                    <span className="absolute text-brand-orange font-display font-bold text-xs">
                      ST
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-brand-orange font-semibold tracking-[0.2em] uppercase text-sm mb-4">
                {brandConfig.brandStatement}
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
                Sholly-T
                <br />
                <span className="text-brand-orange">Spaghetti</span>
              </h1>
              <p className="text-white/70 text-lg sm:text-xl max-w-md mx-auto lg:mx-0 mb-8">
                {brandConfig.tagline}
              </p>
              <p className="text-brand-cream/50 text-sm sm:text-base max-w-md mx-auto lg:mx-0 mb-10">
                {brandConfig.shortDescription}
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <WhatsAppLink />
                <Link
                  to="/menu"
                  className="btn-secondary text-white border-white/30 hover:bg-white hover:text-brand-brown"
                >
                  VIEW MENU
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </SectionReveal>

          {/* Hero Image */}
          <SectionReveal delay={200}>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-square lg:aspect-[4/3]">
                {brandConfig.heroSlides[0].image ? (
                  <img
                    src={brandConfig.heroSlides[0].image}
                    alt="Signature dish"
                    className="w-full h-full object-cover"
                    loading="eager"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                ) : null}
                {!brandConfig.heroSlides[0].image && (
                  <ImagePlaceholder
                    category="hero"
                    className="w-full h-full rounded-none"
                    label="Hero food image"
                  />
                )}
                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/30 to-transparent" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-orange/20 rounded-full blur-2xl hidden lg:block" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-yellow/20 rounded-full blur-2xl hidden lg:block" />
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
