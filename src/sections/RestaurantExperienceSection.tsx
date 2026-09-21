import SectionReveal from "@/components/SectionReveal";
import { MapPin, Clock, MessageCircle } from "lucide-react";
import WhatsAppLink from "@/components/WhatsAppLink";

export default function RestaurantExperienceSection() {
  return (
    <section className="py-16 lg:py-24 bg-brand-cream-dark">
      <div className="section-container">
        <SectionReveal>
          <div className="text-center mb-12">
            <span className="section-subheading mb-3 block">Experience</span>
            <h2 className="section-heading mb-4">VISIT US</h2>
            <p className="text-brand-brown/60 max-w-lg mx-auto">
              Whether you're dining in, grabbing takeaway, or ordering for delivery — we're here for you.
            </p>
          </div>
        </SectionReveal>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: MapPin,
              title: "Dine In",
              description: "Enjoy your meal at our restaurant in Osogbo.",
              color: "bg-brand-orange/10 text-brand-orange",
            },
            {
              icon: Clock,
              title: "Take Away",
              description: "Order ahead and pick up at your convenience.",
              color: "bg-brand-yellow/20 text-brand-brown",
            },
            {
              icon: MessageCircle,
              title: "Delivery",
              description: "Order on WhatsApp and we'll bring it to you.",
              color: "bg-green-100 text-green-600",
            },
          ].map((service, index) => (
            <SectionReveal key={service.title} delay={index * 100}>
              <div className="bg-white p-8 rounded-3xl border border-brand-brown/10 hover:shadow-lg hover:shadow-brand-brown/5 hover:-translate-y-1 transition-all duration-300 text-center h-full">
                <div
                  className={`w-14 h-14 rounded-full ${service.color} flex items-center justify-center mx-auto mb-5`}
                >
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-xl text-brand-brown mb-2">
                  {service.title}
                </h3>
                <p className="text-brand-brown/60 text-sm">
                  {service.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={200}>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-3xl overflow-hidden aspect-[16/10] bg-brand-cream-dark border border-brand-brown/10">
              <img
                src="/images/restaurant-interior.jpeg"
                alt="Restaurant interior"
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <div className="rounded-3xl overflow-hidden aspect-[16/10] bg-brand-cream-dark border border-brand-brown/10">
              <img
                src="/images/restaurant-exterior.jpeg"
                alt="Restaurant exterior"
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={300}>
          <div className="text-center mt-12">
            <WhatsAppLink />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
