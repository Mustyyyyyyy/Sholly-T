import SectionReveal from "@/components/SectionReveal";
import WhatsAppLink from "@/components/WhatsAppLink";
import { Phone, MapPin, Instagram, Clock } from "lucide-react";
import { brandConfig } from "@/data/brandConfig";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function ContactPage() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(brandConfig.addressFull)}`;

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Hero */}
      <section className="bg-brand-brown py-16 lg:py-20">
        <div className="section-container text-center">
          <SectionReveal>
            <span className="text-brand-orange font-semibold tracking-widest uppercase text-sm mb-3 block">
              Reach Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              CONTACT
            </h1>
            <p className="text-white/60 max-w-lg mx-auto">
              We'd love to hear from you. Reach out via any of the channels below.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Map */}
      <section className="py-8">
        <div className="section-container">
          <SectionReveal>
            <div className="rounded-3xl overflow-hidden bg-brand-cream-dark aspect-[16/9] sm:aspect-[21/9]">
              <iframe
                title={`${brandConfig.name} Location`}
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345!2d4.772!3d7.744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwDTQnNTAuMiJFIDTCsDQ2JzAwLjAiVw!5e0!3m2!1sen!2sng!4v1234567890`}
                className="w-full h-full min-h-[300px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="py-12 lg:py-16">
        <div className="section-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <SectionReveal>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white p-6 rounded-2xl border border-brand-brown/10 hover:border-brand-orange/30 hover:shadow-lg transition-all duration-300 h-full"
              >
                <MapPin className="w-8 h-8 text-brand-orange mb-4" />
                <h3 className="font-display font-bold text-lg text-brand-brown mb-2">
                  Address
                </h3>
                <p className="text-brand-brown/60 text-sm">
                  {brandConfig.addressFull}
                </p>
              </a>
            </SectionReveal>

            {brandConfig.phones.map((phone) => (
              <SectionReveal key={phone} delay={100}>
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="group block bg-white p-6 rounded-2xl border border-brand-brown/10 hover:border-brand-orange/30 hover:shadow-lg transition-all duration-300 h-full"
                >
                  <Phone className="w-8 h-8 text-brand-orange mb-4" />
                  <h3 className="font-display font-bold text-lg text-brand-brown mb-2">
                    Call Us
                  </h3>
                  <p className="text-brand-brown font-semibold text-lg">
                    {phone}
                  </p>
                </a>
              </SectionReveal>
            ))}

            <SectionReveal delay={200}>
              <a
                href={brandConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white p-6 rounded-2xl border border-brand-brown/10 hover:border-brand-orange/30 hover:shadow-lg transition-all duration-300 h-full"
              >
                <Instagram className="w-8 h-8 text-brand-orange mb-4" />
                <h3 className="font-display font-bold text-lg text-brand-brown mb-2">
                  Instagram
                </h3>
                <p className="text-brand-brown font-semibold text-lg">
                  {brandConfig.instagramHandle}
                </p>
              </a>
            </SectionReveal>

            <SectionReveal delay={300}>
              <div className="bg-white p-6 rounded-2xl border border-brand-brown/10 h-full">
                <Clock className="w-8 h-8 text-brand-orange mb-4" />
                <h3 className="font-display font-bold text-lg text-brand-brown mb-2">
                  Opening Hours
                </h3>
                <p className="text-brand-brown/60 text-sm">
                  Mon - Sun: 9:00 AM - 10:00 PM
                </p>
              </div>
            </SectionReveal>
          </div>

          {/* WhatsApp CTA */}
          <SectionReveal delay={400}>
            <div className="text-center bg-brand-brown rounded-3xl p-8 sm:p-12">
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
                Prefer to chat on WhatsApp?
              </h3>
              <p className="text-white/60 mb-8 max-w-md mx-auto">
                Tap below to order, ask questions, or get more information.
              </p>
              <WhatsAppLink className="text-lg px-8 py-4" />
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
