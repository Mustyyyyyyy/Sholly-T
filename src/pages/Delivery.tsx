import { useState } from "react";
import { brandConfig } from "@/data/brandConfig";
import SectionReveal from "@/components/SectionReveal";
import WhatsAppLink from "@/components/WhatsAppLink";
import { MapPin, Phone, Clock, Truck, Package, User, CheckCircle } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";

type OrderType = "delivery" | "pickup";

export default function DeliveryPage() {
  const [orderType, setOrderType] = useState<OrderType>("delivery");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    landmark: "",
    pickupTime: "",
    orderDetails: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const generateWhatsAppMessage = () => {
    let msg = "Hello Sholly-T Spaghetti 👋\n\n";
    msg += "I would like to place an order:\n";
    if (formData.orderDetails.trim()) {
      msg += formData.orderDetails.trim() + "\n";
    }
    msg += `\nTotal: ₦--\n`;
    msg += `Order type: ${orderType === "delivery" ? "Delivery" : "Pickup"}\n`;
    msg += `Name: ${formData.name}\n`;
    msg += `Phone: ${formData.phone}\n`;
    if (orderType === "delivery") {
      msg += `Delivery address: ${formData.address}\n`;
      if (formData.landmark.trim()) {
        msg += `Nearest landmark: ${formData.landmark}\n`;
      }
    } else {
      msg += `Preferred pickup time: ${formData.pickupTime || "As soon as possible"}\n`;
    }
    msg += "\nThank you.";
    return msg;
  };

  const whatsappUrl = `https://wa.me/${brandConfig.whatsappNumber}?text=${encodeURIComponent(
    generateWhatsAppMessage()
  )}`;

  if (submitted) {
    return (
      <div className="min-h-screen bg-brand-cream flex items-center justify-center px-4">
        <SectionReveal>
          <div className="max-w-md mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-brand-brown/10 text-center">
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-display font-bold text-2xl text-brand-brown mb-3">
              Order Request Sent!
            </h2>
            <p className="text-brand-brown/60 mb-6">
              We've received your order request. We'll reach out on WhatsApp shortly to confirm.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Open WhatsApp
            </a>
          </div>
        </SectionReveal>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Hero */}
      <section className="bg-brand-brown py-16 lg:py-20">
        <div className="section-container text-center">
          <SectionReveal>
            <span className="text-brand-orange font-semibold tracking-widest uppercase text-sm mb-3 block">
              Order
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              DELIVERY & PICKUP
            </h1>
            <p className="text-white/60 max-w-lg mx-auto">
              Choose how you'd like to receive your Sholly-T meals.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Order Type Selector */}
      <section className="py-8 bg-brand-cream">
        <div className="section-container">
          <SectionReveal>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setOrderType("delivery")}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  orderType === "delivery"
                    ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/25"
                    : "bg-white text-brand-brown border border-brand-brown/10 hover:border-brand-orange/40"
                }`}
              >
                <Truck className="w-5 h-5" />
                Delivery
              </button>
              <button
                onClick={() => setOrderType("pickup")}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  orderType === "pickup"
                    ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/25"
                    : "bg-white text-brand-brown border border-brand-brown/10 hover:border-brand-orange/40"
                }`}
              >
                <Package className="w-5 h-5" />
                Pickup
              </button>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Form */}
      <section className="py-8 pb-24">
        <div className="section-container max-w-2xl">
          <SectionReveal delay={100}>
            <div className="bg-white rounded-3xl border border-brand-brown/10 p-6 sm:p-8">
              {/* Info cards */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="text-center p-3 bg-brand-cream-dark rounded-xl">
                  <MapPin className="w-5 h-5 text-brand-orange mx-auto mb-1" />
                  <span className="text-[10px] text-brand-brown/60 font-medium block">
                    Location
                  </span>
                </div>
                <div className="text-center p-3 bg-brand-cream-dark rounded-xl">
                  <Phone className="w-5 h-5 text-brand-orange mx-auto mb-1" />
                  <span className="text-[10px] text-brand-brown/60 font-medium block">
                    Contact
                  </span>
                </div>
                <div className="text-center p-3 bg-brand-cream-dark rounded-xl">
                  <Clock className="w-5 h-5 text-brand-orange mx-auto mb-1" />
                  <span className="text-[10px] text-brand-brown/60 font-medium block">
                    Hours
                  </span>
                </div>
              </div>

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-brand-brown mb-1.5">
                    <User className="w-4 h-4 inline mr-1" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl border border-brand-brown/10 bg-brand-cream/50 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange/50 text-brand-brown placeholder:text-brand-brown/40"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-brand-brown mb-1.5">
                    <Phone className="w-4 h-4 inline mr-1" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="e.g. 0911 816 9456"
                    className="w-full px-4 py-3 rounded-xl border border-brand-brown/10 bg-brand-cream/50 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange/50 text-brand-brown placeholder:text-brand-brown/40"
                  />
                </div>

                {/* Delivery fields */}
                {orderType === "delivery" && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-brand-brown mb-1.5">
                        <MapPin className="w-4 h-4 inline mr-1" />
                        Delivery Address
                      </label>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        placeholder="Enter your delivery address"
                        className="w-full px-4 py-3 rounded-xl border border-brand-brown/10 bg-brand-cream/50 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange/50 text-brand-brown placeholder:text-brand-brown/40"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-brown mb-1.5">
                        Nearest Landmark
                      </label>
                      <input
                        type="text"
                        value={formData.landmark}
                        onChange={(e) => handleInputChange("landmark", e.target.value)}
                        placeholder="e.g. Near [landmark]"
                        className="w-full px-4 py-3 rounded-xl border border-brand-brown/10 bg-brand-cream/50 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange/50 text-brand-brown placeholder:text-brand-brown/40"
                      />
                    </div>
                  </>
                )}

                {/* Pickup time */}
                {orderType === "pickup" && (
                  <div>
                    <label className="block text-sm font-medium text-brand-brown mb-1.5">
                      <Clock className="w-4 h-4 inline mr-1" />
                      Preferred Pickup Time
                    </label>
                    <input
                      type="text"
                      value={formData.pickupTime}
                      onChange={(e) => handleInputChange("pickupTime", e.target.value)}
                      placeholder="e.g. Today, 2:00 PM"
                      className="w-full px-4 py-3 rounded-xl border border-brand-brown/10 bg-brand-cream/50 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange/50 text-brand-brown placeholder:text-brand-brown/40"
                    />
                  </div>
                )}

                {/* Order Details */}
                <div>
                  <label className="block text-sm font-medium text-brand-brown mb-1.5">
                    Order Details
                  </label>
                  <textarea
                    value={formData.orderDetails}
                    onChange={(e) => handleInputChange("orderDetails", e.target.value)}
                    placeholder="List the items you'd like to order (e.g. 2x Signature Spaghetti, 1x Grilled Chicken)"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-brand-brown/10 bg-brand-cream/50 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange/50 text-brand-brown placeholder:text-brand-brown/40 resize-none"
                  />
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Submit */}
          <SectionReveal delay={200}>
            <div className="mt-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-lg py-4"
              >
                <Phone className="w-5 h-5" />
                SEND ORDER ON WHATSAPP
              </a>
              <p className="text-center text-xs text-brand-brown/40 mt-3">
                This will open WhatsApp with your order details pre-filled.
              </p>
            </div>
          </SectionReveal>

          {/* Info */}
          <SectionReveal delay={300}>
            <div className="mt-10 bg-brand-cream-dark rounded-2xl p-6">
              <h4 className="font-display font-bold text-brand-brown mb-3">
                {orderType === "delivery" ? "Delivery" : "Pickup"} Information
              </h4>
              <ul className="space-y-2 text-sm text-brand-brown/70">
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange mt-0.5">•</span>
                  {orderType === "delivery"
                    ? "We deliver within Osogbo and surrounding areas. Contact us for details."
                    : "Visit us at QGQ4+7QM, Ofatedo Road, Osogbo."}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange mt-0.5">•</span>
                  Orders are confirmed via WhatsApp.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange mt-0.5">•</span>
                  Opening hours: 9:00 AM - 10:00 PM daily.
                </li>
              </ul>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
