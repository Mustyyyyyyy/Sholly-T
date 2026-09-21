import { brandConfig } from "@/data/brandConfig";
import SectionReveal from "@/components/SectionReveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function SocialSection() {
  return (
    <section className="py-16 lg:py-24 bg-brand-cream-dark">
      <div className="section-container">
        <SectionReveal>
          <div className="text-center mb-12">
            <span className="section-subheading mb-3 block">Follow Us</span>
            <h2 className="section-heading mb-4">
              ON INSTAGRAM
            </h2>
            <a
              href={brandConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-orange font-semibold text-sm hover:underline inline-flex items-center gap-1 mt-2"
            >
              @shollytspaghettii
              <span>→</span>
            </a>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {brandConfig.galleryImages.map((img, index) => (
            <SectionReveal key={img.id} delay={index * 75}>
              <a
                href={brandConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative rounded-2xl overflow-hidden aspect-square bg-brand-cream-dark border border-brand-brown/10"
              >
                {img.src ? (
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                ) : (
                  <ImagePlaceholder
                    category="gallery"
                    className="w-full h-full rounded-none border-none"
                    label={img.alt}
                  />
                )}
                {/* Instagram-style overlay */}
                <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs font-semibold uppercase">
                    View on Instagram
                  </span>
                </div>
              </a>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={500}>
          <div className="text-center mt-8">
            <a
              href={brandConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              FOLLOW ON INSTAGRAM
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
