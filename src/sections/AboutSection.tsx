import { brandConfig } from "@/data/brandConfig";
import SectionReveal from "@/components/SectionReveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-brand-cream-dark">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <SectionReveal>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/3]">
                <div className="w-full h-full bg-brand-cream-dark border-2 border-dashed border-brand-brown/20 rounded-3xl flex items-center justify-center">
                  <ImagePlaceholder
                    category="restaurant"
                    className="w-full h-full rounded-none"
                    label="Restaurant / Food preparation"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-orange/10 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-brand-yellow/20 rounded-xl -z-10" />
            </div>
          </SectionReveal>

          {/* Content */}
          <SectionReveal delay={200}>
            <div>
              <span className="section-subheading mb-3 block">About Us</span>
              <h2 className="section-heading mb-6">
                GOOD FOOD.
                <br />
                <span className="text-brand-orange">GREAT MOMENTS.</span>
              </h2>
              <p className="text-brand-brown/70 text-lg mb-4">
                {brandConfig.name}
              </p>
              <p className="text-brand-brown/70 mb-6">
                {brandConfig.shortDescription}
              </p>
              <p className="text-brand-brown/60 text-sm mb-8">
                We serve authentic Nigerian meals made with fresh ingredients, bold flavors, and the warmth of home cooking. Every dish is prepared with care to bring you the taste you deserve.
              </p>

              {/* Stats placeholder */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Menu Items", value: "—" },
                  { label: "Served Daily", value: "—" },
                  { label: "Years of Taste", value: "—" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 bg-white rounded-2xl border border-brand-brown/10"
                  >
                    <span className="font-display font-bold text-2xl text-brand-orange block">
                      {stat.value}
                    </span>
                    <span className="text-brand-brown/60 text-xs">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
