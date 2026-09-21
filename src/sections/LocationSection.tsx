import { brandConfig } from "@/data/brandConfig";
import SectionReveal from "@/components/SectionReveal";
import WhatsAppLink from "@/components/WhatsAppLink";
import { Phone, MapPin, Instagram, ExternalLink } from "lucide-react";

export default function LocationSection() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(brandConfig.addressFull)}`;

  return (
    <section id="location" className="py-16 lg:py-24 bg-brand-brown">
      <div className="section-container">
        <SectionReveal>
          <div className="text-center mb-12">
            <span className="text-brand-orange font-semibold tracking-widest uppercase text-sm mb-3 block">
              Find Us
            </span>
            <h2 className="section-heading text-white mb-4">
              LOCATION
            </h2>
            <p className="text-white/60 max-w-lg mx-auto">
              {brandConfig.locationNote}
            </p>
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <SectionReveal>
            <div className="rounded-3xl overflow-hidden bg-brand-cream/10 aspect-[4/3] lg:aspect-auto lg:h-full">
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

          {/* Location Info */}
          <SectionReveal delay={200}>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-2xl text-white mb-2">
                  {brandConfig.name}
                </h3>
                <div className="flex items-start gap-3 text-white/70 mb-8">
                  <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-brand-orange" />
                  <p className="text-sm">{brandConfig.addressFull}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {brandConfig.phones.map((phone) => (
                    <div key={phone} className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-brand-orange shrink-0" />
                      <a
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="text-white/70 hover:text-brand-orange transition-colors text-sm"
                      >
                        {phone}
                      </a>
                    </div>
                  ))}
                  <a
                    href={brandConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/70 hover:text-brand-orange transition-colors text-sm"
                  >
                    <Instagram className="w-5 h-5 text-brand-orange shrink-0" />
                    {brandConfig.instagramHandle}
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1"
                >
                  <MapPin className="w-4 h-4" />
                  GET DIRECTIONS
                </a>
                <WhatsAppLink className="flex-1">ORDER ON WHATSAPP</WhatsAppLink>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
