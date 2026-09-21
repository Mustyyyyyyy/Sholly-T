import { Plus, Minus, MessageCircle } from "lucide-react";
import { MenuItem } from "@/types";
import { useCart } from "@/hooks/useCart";
import { brandConfig } from "@/data/brandConfig";
import ImagePlaceholder from "@/components/ImagePlaceholder";

interface MenuItemCardProps {
  item: MenuItem;
  showAddToCart?: boolean;
}

export default function MenuItemCard({
  item,
  showAddToCart = true,
}: MenuItemCardProps) {
  const { addItem, items, decreaseQuantity } = useCart();
  const inCart = items.find((i) => i.id === item.id);

  return (
    <div className="group bg-white rounded-2xl border border-brand-brown/10 overflow-hidden hover:shadow-lg hover:shadow-brand-brown/5 hover:-translate-y-1 transition-all duration-300">
      <div className="relative aspect-square overflow-hidden bg-brand-cream-dark">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        ) : null}
        {!item.image && (
          <ImagePlaceholder category="food" className="w-full h-full rounded-none" label={item.name} />
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display font-bold text-lg text-brand-brown group-hover:text-brand-orange transition-colors">
            {item.name}
          </h3>
          <span className="text-brand-orange font-bold text-lg shrink-0">
            ₦{item.price.toLocaleString("en-NG")}
          </span>
        </div>
        <p className="text-brand-brown/60 text-sm mb-4 line-clamp-2">
          {item.description}
        </p>
        {showAddToCart && (
          <div className="flex items-center gap-2">
            {inCart && inCart.quantity > 0 ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="w-8 h-8 rounded-full bg-brand-cream-dark border border-brand-brown/10 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="w-6 text-center font-bold text-brand-brown text-sm">
                  {inCart.quantity}
                </span>
                <button
                  onClick={() => addItem(item)}
                  className="w-8 h-8 rounded-full bg-brand-cream-dark border border-brand-brown/10 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => addItem(item)}
                className="flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold text-sm px-5 py-2 rounded-full transition-all duration-200 hover:shadow-md"
              >
                <Plus className="w-4 h-4" />
                ADD
              </button>
            )}
            <a
              href={`https://wa.me/${brandConfig.whatsappNumber}?text=${encodeURIComponent(`I'd like to order ${item.name}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto p-2 rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
              title="Quick order on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
