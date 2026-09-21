import { MessageCircle, Phone } from "lucide-react";
import { brandConfig } from "@/data/brandConfig";

interface WhatsAppLinkProps {
  message?: string;
  className?: string;
  children?: React.ReactNode;
  variant?: "default" | "outline";
}

export default function WhatsAppLink({
  message = "Hello Sholly-T Spaghetti 👋 I would like to place an order",
  className = "",
  children,
  variant = "default",
}: WhatsAppLinkProps) {
  const url = `https://wa.me/${brandConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;

  if (variant === "outline") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 border-2 border-green-500 text-green-600 font-semibold px-5 py-2.5 rounded-full hover:bg-green-500 hover:text-white transition-all duration-200 ${className}`}
      >
        <MessageCircle className="w-4 h-4" />
        {children || "ORDER ON WHATSAPP"}
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25 hover:-translate-y-0.5 ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      {children || "ORDER ON WHATSAPP"}
    </a>
  );
}

export function CallLink({ className = "" }: { className?: string }) {
  return (
    <a
      href={`tel:${brandConfig.phones[0].replace(/\s/g, "")}`}
      className={`inline-flex items-center gap-2 text-brand-orange hover:text-brand-orange-dark transition-colors ${className}`}
    >
      <Phone className="w-4 h-4" />
      Call Us
    </a>
  );
}
