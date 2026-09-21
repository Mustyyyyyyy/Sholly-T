import { Link } from "react-router-dom";
import { Phone, MapPin, Instagram, ArrowUp } from "lucide-react";
import { brandConfig } from "@/data/brandConfig";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-brown text-brand-cream">
      <div className="section-container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center overflow-hidden">
                <img
                  src="/images/logo.jpeg"
                  alt={brandConfig.name}
                  className="w-full h-full object-contain p-1"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <span className="absolute text-white font-display font-bold text-xs">
                  S-T
                </span>
              </div>
              <div>
                <span className="font-display font-bold text-lg block">
                  {brandConfig.name}
                </span>
              </div>
            </div>
            <p className="text-brand-cream/70 text-sm mb-4">
              {brandConfig.brandStatement}
            </p>
            <p className="text-brand-cream/50 text-sm italic">
              {brandConfig.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-brand-orange">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "Menu", path: "/menu" },
                { label: "Gallery", path: "/gallery" },
                { label: "Delivery", path: "/delivery" },
                { label: "Contact", path: "/#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-brand-cream/70 text-sm hover:text-brand-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-brand-orange">
              Contact Us
            </h4>
            <ul className="space-y-3">
              {brandConfig.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-brand-cream/70 text-sm hover:text-brand-orange transition-colors"
                  >
                    <Phone className="w-4 h-4 shrink-0" />
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={brandConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-brand-cream/70 text-sm hover:text-brand-orange transition-colors"
                >
                  <Instagram className="w-4 h-4 shrink-0" />
                  {brandConfig.instagramHandle}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-brand-cream/70 text-sm">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                  Ofatedo Road, Osogbo, Osun State
                </span>
              </li>
            </ul>
          </div>

          {/* Order CTA */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-brand-orange">
              Order Now
            </h4>
            <a
              href={`https://wa.me/${brandConfig.whatsappNumber}?text=Hello%20Sholly-T%20Spaghetti%20👋%20I%20would%20like%20to%20place%20an%20order`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-brand-orange/30 hover:-translate-y-0.5 w-full"
            >
              ORDER ON WHATSAPP
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-brand-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-cream/40 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} {brandConfig.name}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-brand-cream/40 text-xs hover:text-brand-orange transition-colors"
          >
            Back to top
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
