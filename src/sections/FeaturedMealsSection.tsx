import { useMemo, useState } from "react";
import { Search, UtensilsCrossed } from "lucide-react";
import { brandConfig } from "@/data/brandConfig";
import MenuItemCard from "@/components/MenuItemCard";
import SectionReveal from "@/components/SectionReveal";
import WhatsAppLink from "@/components/WhatsAppLink";

export default function FeaturedMealsSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const allItems = useMemo(() => {
    const items = brandConfig.menuCategories.flatMap((c) => c.items);
    if (!searchQuery.trim()) return items;
    const q = searchQuery.toLowerCase();
    return items.filter(
      (i) =>
        i.name.toLowerCase().includes(q) ||
        i.description.toLowerCase().includes(q) ||
        i.category.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const featured = allItems.slice(0, 4);

  return (
    <section className="py-16 lg:py-24 bg-brand-cream">
      <div className="section-container">
        <SectionReveal>
          <div className="text-center mb-12">
            <span className="section-subheading mb-3 block">Our Menu</span>
            <h2 className="section-heading mb-4">
              FEATURED MEALS
            </h2>
            <p className="text-brand-brown/60 max-w-lg mx-auto">
              Explore our most popular dishes, crafted with authentic Nigerian flavors and the freshest ingredients.
            </p>
          </div>
        </SectionReveal>

        {/* Search */}
        <SectionReveal delay={100}>
          <div className="relative max-w-lg mx-auto mb-10">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-brown/40" />
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-brand-brown/10 bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange/50 text-brand-brown placeholder:text-brand-brown/40"
            />
          </div>
        </SectionReveal>

        {/* Menu Grid */}
        {featured.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((item, index) => (
              <SectionReveal key={item.id} delay={index * 100}>
                <MenuItemCard item={item} />
              </SectionReveal>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <UtensilsCrossed className="w-12 h-12 text-brand-brown/30 mx-auto mb-4" />
            <p className="text-brand-brown/50">No items found matching your search.</p>
          </div>
        )}

        {/* View Full Menu */}
        <SectionReveal delay={300}>
          <div className="text-center mt-12">
            <a
              href="/menu"
              className="btn-secondary"
            >
              VIEW FULL MENU
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
