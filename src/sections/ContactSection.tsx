import { brandConfig } from "@/data/brandConfig";
import SectionReveal from "@/components/SectionReveal";
import WhatsAppLink from "@/components/WhatsAppLink";
import { Phone, MapPin, Instagram, ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-brand-cream">
      <div className="section-container">
        <SectionReveal>
          <div className="text-center mb-12">
            <span className="section-subheading mb-3 block">Contact</span>
            <h2 className="section-heading mb-4">GET IN TOUCH</h2>
            <p className="text-brand-brown/60 max-w-lg mx-auto">
              Reach out to us for orders, inquiries, or just to say hello.
            </p>
          </div>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Call buttons */}
          {brandConfig.phones.map((phone, index) => (
            <SectionReveal key={phone} delay={index * 100}>
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="group block bg-white p-6 rounded-2xl border border-brand-brown/10 hover:border-brand-orange/30 hover:shadow-lg hover:shadow-brand-orange/5 transition-all duration-300"
              >
                <Phone className="w-6 h-6 text-brand-orange mb-3" />
                <span className="text-brand-brown/50 text-xs font-medium uppercase tracking-wider block mb-1">
                  Call Us
                </span>
                <span className="font-bold text-brand-brown group-hover:text-brand-orange transition-colors">
                  {phone}
                </span>
              </a>
            </SectionReveal>
          ))}

          {/* WhatsApp */}
          <SectionReveal delay={200}>
            <div className="block bg-white p-6 rounded-2xl border border-brand-brown/10 hover:border-green-400/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 flex items-center justify-center">
                  <span className="text-green-500 font-bold text-lg">W</span>
                </div>
                <span className="text-brand-brown/50 text-xs font-medium uppercase tracking-wider">
                  WhatsApp Us
                </span>
              </div>
              <a
                href={`https://wa.me/${brandConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-brand-brown hover:text-green-600 transition-colors flex items-center gap-1"
              >
                {brandConfig.phones[0]}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </SectionReveal>

          {/* Instagram */}
          <SectionReveal delay={300}>
            <a
              href={brandConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white p-6 rounded-2xl border border-brand-brown/10 hover:border-pink-400/50 transition-all duration-300"
            >
              <Instagram className="w-6 h-6 text-brand-orange mb-3" />
              <span className="text-brand-brown/50 text-xs font-medium uppercase tracking-wider block mb-1">
                Instagram
              </span>
              <span className="font-bold text-brand-brown group-hover:text-brand-orange transition-colors">
                {brandConfig.instagramHandle}
              </span>
            </a>
          </SectionReveal>

          {/* Directions */}
          <SectionReveal delay={400}>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(brandConfig.addressFull)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white p-6 rounded-2xl border border-brand-brown/10 hover:border-brand-orange/30 hover:shadow-lg hover:shadow-brand-orange/5 transition-all duration-300"
            >
              <MapPin className="w-6 h-6 text-brand-orange mb-3" />
              <span className="text-brand-brown/50 text-xs font-medium uppercase tracking-wider block mb-1">
                Get Directions
              </span>
              <span className="font-bold text-brand-brown group-hover:text-brand-orange transition-colors">
                View on Map
              </span>
            </a>
          </SectionReveal>
        </div>

        {/* CTA */}
        <SectionReveal delay={500}>
          <div className="text-center bg-brand-brown rounded-3xl p-8 sm:p-12">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
              Ready to order?
            </h3>
            <p className="text-white/60 mb-8 max-w-md mx-auto">
              Order delicious meals through WhatsApp. We'll get back to you quickly.
            </p>
            <WhatsAppLink className="text-lg px-8 py-4" />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
