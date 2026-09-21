import { brandConfig } from "@/data/brandConfig";
import SectionReveal from "@/components/SectionReveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import WhatsAppLink from "@/components/WhatsAppLink";

export default function SignatureBrandSection() {
  return (
    <section className="py-16 lg:py-24 bg-brand-brown relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="relative section-container text-center">
        <SectionReveal>
          <div className="mb-8">
            <div className="w-20 h-20 rounded-full border-4 border-brand-orange flex items-center justify-center mx-auto mb-6 bg-brand-brown">
              <span className="text-brand-orange font-display font-bold text-2xl">
                ST
              </span>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={100}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
            TASTE LIKE YOU'VE
            <br />
            <span className="text-brand-orange">NEVER HAD.</span>
          </h2>
        </SectionReveal>

        <SectionReveal delay={200}>
          <p className="text-white/60 text-lg sm:text-xl max-w-xl mx-auto mb-10">
            Every meal at {brandConfig.name} is crafted to bring you bold, authentic flavors and unforgettable moments.
          </p>
        </SectionReveal>

        <SectionReveal delay={300}>
          <WhatsAppLink className="text-lg px-8 py-4" />
        </SectionReveal>
      </div>
    </section>
  );
}
