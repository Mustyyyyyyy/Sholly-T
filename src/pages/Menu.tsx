import { useState } from "react";
import { brandConfig } from "@/data/brandConfig";
import MenuItemCard from "@/components/MenuItemCard";
import SectionReveal from "@/components/SectionReveal";
import WhatsAppLink from "@/components/WhatsAppLink";
import { Search } from "lucide-react";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "All" },
    ...brandConfig.menuCategories.map((c) => ({ id: c.id, name: c.name })),
  ];

  const filteredItems = brandConfig.menuCategories
    .flatMap((c) => c.items)
    .filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        !searchQuery.trim() ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

  return (
    <div className="min-h-screen bg-brand-cream">
      <section className="bg-brand-brown py-16 lg:py-20">
        <div className="section-container text-center">
          <SectionReveal>
            <span className="text-brand-orange font-semibold tracking-widest uppercase text-sm mb-3 block">
              Our Menu
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              MENU
            </h1>
            <p className="text-white/60 max-w-lg mx-auto">
              Explore our full selection of authentic Nigerian meals.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="sticky top-16 lg:top-20 bg-brand-cream/95 backdrop-blur-sm border-b border-brand-brown/10 z-40 py-4">
        <div className="section-container">
          <div className="relative max-w-md mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-brown/40" />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-2.5 rounded-xl border border-brand-brown/10 bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange/30 text-sm text-brand-brown"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-brand-orange text-white shadow-md shadow-brand-orange/25"
                    : "bg-white text-brand-brown border border-brand-brown/10 hover:border-brand-orange/40 hover:text-brand-orange"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="section-container">
          {filteredItems.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <SectionReveal key={item.id} delay={index * 50}>
                  <MenuItemCard item={item} />
                </SectionReveal>
              ))}
            </div>
          ) : (
            <SectionReveal>
              <div className="text-center py-20">
                <p className="text-brand-brown/50 text-lg">
                  No items found. Try a different category or search.
                </p>
              </div>
            </SectionReveal>
          )}
        </div>
      </section>

      <section className="py-12 bg-brand-brown">
        <div className="section-container text-center">
          <SectionReveal>
            <h3 className="font-display font-bold text-2xl text-white mb-4">
              Can't find what you're looking for?
            </h3>
            <p className="text-white/60 mb-6">
              Ask us about our full menu and daily specials.
            </p>
            <WhatsAppLink className="text-lg px-8 py-4" />
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
