import { brandConfig } from "@/data/brandConfig";
import SectionReveal from "@/components/SectionReveal";
import { Clock } from "lucide-react";

export default function OpeningHoursSection() {
  return (
    <section className="py-16 lg:py-24 bg-brand-cream-dark">
      <div className="section-container">
        <SectionReveal>
          <div className="text-center mb-12">
            <span className="section-subheading mb-3 block">Hours</span>
            <h2 className="section-heading mb-4">OPENING HOURS</h2>
          </div>
        </SectionReveal>

        <SectionReveal delay={100}>
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-3xl border border-brand-brown/10 overflow-hidden">
              {brandConfig.openingHours.map((day, index) => (
                <div
                  key={day.day}
                  className={`flex items-center justify-between px-6 py-4 ${
                    index !== brandConfig.openingHours.length - 1
                      ? "border-b border-brand-brown/10"
                      : ""
                  }`}
                >
                  <span className="font-medium text-brand-brown text-sm">
                    {day.day}
                  </span>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-orange" />
                    <span className="text-brand-brown/70 text-sm font-medium">
                      {day.hours}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
