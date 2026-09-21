import { brandConfig } from "@/data/brandConfig";
import SectionReveal from "@/components/SectionReveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import WhatsAppLink from "@/components/WhatsAppLink";

export default function PackagingSection() {
  const packagingImages = [
    { id: "p1", label: "Branded paper bag", category: "packaging" },
    { id: "p2", label: "Branded food container", category: "packaging" },
    { id: "p3", label: "Takeaway packaging", category: "packaging" },
    { id: "p4", label: "Close-up logo packaging", category: "packaging" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-brand-cream">
      <div className="section-container">
        <SectionReveal>
          <div className="text-center mb-12">
            <span className="section-subheading mb-3 block">Packaging</span>
            <h2 className="section-heading mb-4">
              SAME GREAT TASTE.
              <br />
              <span className="text-brand-orange">
                NOW IN A PACK YOU CAN TRUST.
              </span>
            </h2>
            <p className="text-brand-brown/60 max-w-lg mx-auto">
              Every order comes in branded packaging that keeps your food fresh and makes a statement.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {packagingImages.map((img, index) => (
            <SectionReveal key={img.id} delay={index * 100}>
              <div className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-brand-cream-dark border-2 border-dashed border-brand-brown/20 hover:border-brand-orange/40 transition-colors">
                <ImagePlaceholder
                  category="packaging"
                  className="w-full h-full rounded-none border-none"
                  label={img.label}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-semibold">
                    {img.label}
                  </span>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={400}>
          <div className="text-center mt-12">
            <WhatsAppLink />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
