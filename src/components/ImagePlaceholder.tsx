interface ImagePlaceholderProps {
  category?: "food" | "restaurant" | "packaging" | "gallery" | "team" | "hero";
  className?: string;
  label?: string;
}

export default function ImagePlaceholder({
  category = "food",
  className = "",
  label,
}: ImagePlaceholderProps) {
  const categoryIcons: Record<string, string> = {
    food: "🍝",
    restaurant: "🏪",
    packaging: "📦",
    gallery: "📷",
    team: "👥",
    hero: "🥘",
  };

  const categoryColors: Record<string, string> = {
    food: "bg-amber-50 border-amber-200",
    restaurant: "bg-stone-100 border-stone-200",
    packaging: "bg-orange-50 border-orange-200",
    gallery: "bg-gray-100 border-gray-200",
    team: "bg-yellow-50 border-yellow-200",
    hero: "bg-orange-50 border-orange-200",
  };

  return (
    <div
      className={`flex flex-col items-center justify-center w-full h-full ${categoryColors[category]} border-2 border-dashed ${className}`}
    >
      <span className="text-3xl sm:text-4xl mb-1 select-none opacity-50">
        {categoryIcons[category]}
      </span>
      <span className="text-brand-brown/30 text-[10px] sm:text-xs font-medium text-center px-2 leading-tight">
        {label || `Image placeholder - ${category}`}
      </span>
    </div>
  );
}
