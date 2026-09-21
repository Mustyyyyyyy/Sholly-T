import { useEffect, useRef, useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { brandConfig } from "@/data/brandConfig";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function GalleryLightbox() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const images = brandConfig.galleryImages;

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const currentImage = activeIndex !== null ? images[activeIndex] : null;

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <button
            key={img.id}
            onClick={() => setActiveIndex(index)}
            className={`relative group overflow-hidden rounded-2xl cursor-pointer ${
              index === 0 ? "col-span-2 sm:col-span-2 lg:col-span-2 row-span-2" : ""
            }`}
          >
            <div className={`w-full ${index === 0 ? "aspect-square sm:aspect-auto sm:h-full" : "aspect-square"} overflow-hidden`}>
              {img.src ? (
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
              ) : null}
              {!img.src && (
                <ImagePlaceholder
                  category="gallery"
                  className="w-full h-full rounded-none"
                  label={img.alt}
                />
              )}
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/30 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                <ZoomIn className="w-5 h-5 text-brand-brown" />
              </div>
            </div>
            {/* Label */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-brand-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-semibold text-sm">
                {img.category}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {currentImage && (
        <div
          className="fixed inset-0 z-[70] bg-brand-black/95 flex items-center justify-center p-4"
          onClick={() => setActiveIndex(null)}
        >
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div
            className="max-w-4xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {currentImage.src ? (
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="w-full h-full object-contain max-h-[85vh] rounded-2xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
            ) : (
              <ImagePlaceholder
                category="gallery"
                className="w-full aspect-video rounded-2xl"
                label={currentImage.alt}
              />
            )}
            <p className="text-white text-center mt-4 font-medium">
              {currentImage.alt}
            </p>
            <p className="text-white/50 text-center text-sm">
              {currentImage.category}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
