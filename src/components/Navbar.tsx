import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart, Phone, MapPin } from "lucide-react";
import { brandConfig } from "@/data/brandConfig";
import { useCart } from "@/hooks/useCart";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Menu", path: "/menu" },
  { label: "About", path: "/#about" },
  { label: "Gallery", path: "/gallery" },
  { label: "Delivery", path: "/delivery" },
  { label: "Contact", path: "/#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();

  const isActive = (path: string) => {
    if (path.startsWith("/#")) return location.pathname === "/";
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 bg-brand-cream/95 backdrop-blur-sm border-b border-brand-brown/10">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-orange flex items-center justify-center overflow-hidden">
              <img
                src="/images/logo.jpeg"
                alt={brandConfig.name}
                className="w-full h-full object-contain p-1"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <span className="absolute text-white font-display font-bold text-xs sm:text-sm">
                S-T
              </span>
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-brand-brown text-lg leading-none block">
                {brandConfig.name}
              </span>
              <span className="text-brand-orange text-[10px] font-semibold tracking-wider uppercase">
                {brandConfig.brandStatement}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-brand-orange bg-brand-orange/10"
                    : "text-brand-brown hover:text-brand-orange hover:bg-brand-orange/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${brandConfig.whatsappNumber}?text=Hello%20Sholly-T%20Spaghetti%20👋%20I%20would%20like%20to%20place%20an%20order`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              ORDER ON WHATSAPP
            </a>

            {/* Cart (when has items) */}
            {totalItems > 0 && (
              <Link
                to="/menu"
                className="relative flex items-center gap-2 bg-brand-brown text-brand-cream px-4 py-2.5 rounded-full hover:bg-brand-brown-light transition-colors"
              >
                <ShoppingCart className="w-4 h-4" />
                <span className="hidden sm:inline text-sm font-semibold">
                  {totalItems} ITEMS
                </span>
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-orange text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              </Link>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-brand-orange/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6 text-brand-brown" />
              ) : (
                <Menu className="w-6 h-6 text-brand-brown" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-brand-cream border-t border-brand-brown/10 animate-slide-down">
          <div className="section-container py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-brand-orange bg-brand-orange/10"
                    : "text-brand-brown hover:text-brand-orange hover:bg-brand-orange/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`https://wa.me/${brandConfig.whatsappNumber}?text=Hello%20Sholly-T%20Spaghetti%20👋%20I%20would%20like%20to%20place%20an%20order`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-colors w-full"
              onClick={() => setMobileOpen(false)}
            >
              <Phone className="w-5 h-5" />
              ORDER ON WHATSAPP
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
