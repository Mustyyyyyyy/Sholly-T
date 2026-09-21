import { brandConfig } from "@/data/brandConfig";
import GalleryLightbox from "@/components/GalleryLightbox";
import SectionReveal from "@/components/SectionReveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Hero */}
      <section className="bg-brand-brown py-16 lg:py-20">
        <div className="section-container text-center">
          <SectionReveal>
            <span className="text-brand-orange font-semibold tracking-widest uppercase text-sm mb-3 block">
              Visuals
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              GALLERY
            </h1>
            <p className="text-white/60 max-w-lg mx-auto">
              A glimpse into the Sholly-T experience — our food, packaging and space.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 lg:py-16">
        <div className="section-container">
          <GalleryLightbox />
        </div>
      </section>

      {/* More images placeholders */}
      <section className="py-12 lg:py-16 bg-brand-cream-dark">
        <div className="section-container">
          <SectionReveal>
            <div className="text-center mb-12">
              <h2 className="section-heading mb-4">
                MORE TO EXPLORE
              </h2>
              <p className="text-brand-brown/60">
                More photos coming soon. Visit us or follow us on Instagram for updates.
              </p>
            </div>
          </SectionReveal>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Customer experience",
              "Food preparation",
              "Team at work",
              "Delivery moments",
            ].map((label, index) => (
              <SectionReveal key={label} delay={index * 100}>
                <div className="rounded-2xl overflow-hidden aspect-square bg-brand-cream-dark border-2 border-dashed border-brand-brown/20">
                  <ImagePlaceholder
                    category="gallery"
                    className="w-full h-full rounded-none border-none"
                    label={label}
                  />
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
