import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/hooks/useCart";

interface FloatingCartButtonProps {
  onOpenCart: () => void;
}

export default function FloatingCartButton({
  onOpenCart,
}: FloatingCartButtonProps) {
  const { totalItems, totalPrice } = useCart();

  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 sm:max-w-md sm:left-1/2 sm:-translate-x-1/2 sm:bottom-6">
      <button
        onClick={onOpenCart}
        className="flex items-center justify-between w-full bg-brand-brown hover:bg-brand-brown-light text-brand-cream rounded-2xl px-5 py-4 shadow-2xl shadow-brand-brown/30 transition-all duration-200 hover:-translate-y-1"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center">
            <ShoppingCart className="w-5 h-5" />
          </div>
          <div className="text-left">
            <span className="font-bold text-sm block">
              {totalItems} ITEM{totalItems !== 1 && "S"}
            </span>
            <span className="text-brand-orange font-bold text-sm">
              ₦{totalPrice.toLocaleString("en-NG")}
            </span>
          </div>
        </div>
        <span className="bg-brand-orange text-white font-bold text-sm px-5 py-2.5 rounded-full">
          ORDER NOW
        </span>
      </button>
    </div>
  );
}
