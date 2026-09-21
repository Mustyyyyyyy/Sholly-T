import { useMemo, useState } from "react";
import { MessageCircle, X, Plus, Minus, Trash2 } from "lucide-react";
import { brandConfig } from "@/data/brandConfig";
import { useCart, type CartItem } from "@/hooks/useCart";

interface WhatsAppOrderProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WhatsAppOrder({ isOpen, onClose }: WhatsAppOrderProps) {
  const { items, increaseQuantity, decreaseQuantity, removeItem, totalPrice, clearCart } =
    useCart();
  const [customerName, setCustomerName] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [orderType, setOrderType] = useState<"Delivery" | "Pickup">("Delivery");

  const orderMessage = useMemo(() => {
    if (items.length === 0) return "";

    let msg = "Hello Sholly-T Spaghetti 👋\n\n";
    msg += "I would like to place an order:\n\n";

    items.forEach((item: CartItem, index: number) => {
      msg += `${index + 1}. ${item.name} x${item.quantity}\n`;
    });

    msg += `\nTotal: ₦${totalPrice.toLocaleString("en-NG")}\n\n`;
    msg += `Order type: ${orderType}\n`;
    msg += `Name: ${customerName || "[Customer name]"}\n`;
    if (orderType === "Delivery") {
      msg += `Delivery address: ${deliveryAddress || "[Address]"}\n`;
    }
    msg += "\nThank you.";

    return msg;
  }, [items, totalPrice, customerName, deliveryAddress, orderType]);

  const whatsappUrl = useMemo(() => {
    if (!orderMessage) return "";
    return `https://wa.me/${brandConfig.whatsappNumber}?text=${encodeURIComponent(orderMessage)}`;
  }, [orderMessage]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-brand-cream w-full sm:max-w-lg sm:rounded-3xl rounded-t-3xl max-h-[90vh] overflow-y-auto animate-slide-up shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b border-brand-brown/10 sticky top-0 bg-brand-cream z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-brand-brown">
                Your Order
              </h3>
              <p className="text-xs text-brand-brown/60">
                {items.length} item{items.length !== 1 && "s"} · ₦
                {totalPrice.toLocaleString("en-NG")}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-brand-brown/10 transition-colors"
          >
            <X className="w-5 h-5 text-brand-brown" />
          </button>
        </div>

        <div className="p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 rounded-full bg-brand-orange/10 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-brand-orange" />
              </div>
              <h4 className="font-display font-bold text-xl text-brand-brown mb-2">
                Your cart is empty
              </h4>
              <p className="text-brand-brown/60 text-sm mb-6">
                Browse our menu and add some delicious items!
              </p>
              <button onClick={onClose} className="btn-primary">
                View Menu
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-3 mb-6">
                {items.map((item: CartItem) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 p-3 bg-white rounded-2xl border border-brand-brown/10"
                  >
                    <div className="w-14 h-14 rounded-xl bg-brand-cream-dark border border-brand-brown/10 flex items-center justify-center shrink-0 overflow-hidden">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none";
                          }}
                        />
                      ) : null}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-brand-brown text-sm truncate">
                        {item.name}
                      </h4>
                      <p className="text-brand-orange font-bold text-sm">
                        ₦{item.price.toLocaleString("en-NG")}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="w-7 h-7 rounded-full bg-brand-cream-dark border border-brand-brown/10 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center font-bold text-brand-brown text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="w-7 h-7 rounded-full bg-brand-cream-dark border border-brand-brown/10 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1.5 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors shrink-0"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-4">
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-4 py-2.5 rounded-xl border border-brand-brown/10 bg-white text-sm text-brand-brown placeholder:text-brand-brown/40 focus:outline-none focus:ring-2 focus:ring-brand-orange/30"
                />
                {orderType === "Delivery" && (
                  <input
                    type="text"
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    placeholder="Delivery address"
                    className="w-full px-4 py-2.5 rounded-xl border border-brand-brown/10 bg-white text-sm text-brand-brown placeholder:text-brand-brown/40 focus:outline-none focus:ring-2 focus:ring-brand-orange/30"
                  />
                )}
                <div className="flex gap-2">
                  {(["Delivery", "Pickup"] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setOrderType(type)}
                      className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all ${
                        orderType === type
                          ? "bg-brand-brown text-white"
                          : "bg-brand-cream-dark text-brand-brown border border-brand-brown/10"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-4 rounded-2xl transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25 w-full"
                onClick={clearCart}
              >
                <MessageCircle className="w-5 h-5" />
                ORDER ON WHATSAPP
              </a>
              <p className="text-center text-xs text-brand-brown/40 mt-2">
                Your order will be sent via WhatsApp
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
