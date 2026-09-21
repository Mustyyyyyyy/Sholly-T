import SectionReveal from "@/components/SectionReveal";
import { brandConfig } from "@/data/brandConfig";
import { Star } from "lucide-react";

export default function ReviewsSection() {
  const reviews = brandConfig.reviews;

  // Calculate average rating from reviews that have data
  const hasReviews = reviews.some((r) => r.text && r.name);
  const filledReviews = reviews.filter((r) => r.text && r.name);

  return (
    <section className="py-16 lg:py-24 bg-brand-cream">
      <div className="section-container">
        <SectionReveal>
          <div className="text-center mb-12">
            <span className="section-subheading mb-3 block">Reviews</span>
            <h2 className="section-heading mb-4">
              WHAT OUR CUSTOMERS SAY
            </h2>
            {hasReviews && filledReviews.length > 0 && (
              <div className="flex items-center justify-center gap-2 mt-4">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.round(
                          filledReviews.reduce((sum, r) => sum + r.rating, 0) /
                            filledReviews.length
                        )
                          ? "fill-brand-yellow text-brand-yellow"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-brand-brown/60 text-sm">
                  Based on {filledReviews.length} verified reviews
                </span>
              </div>
            )}
          </div>
        </SectionReveal>

        {hasReviews ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filledReviews.map((review, index) => (
              <SectionReveal key={review.id} delay={index * 100}>
                <div className="bg-white p-6 rounded-2xl border border-brand-brown/10 h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "fill-brand-yellow text-brand-yellow"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-brand-brown/80 text-sm mb-4">
                    "{review.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-brand-brown text-sm">
                      {review.name}
                    </span>
                    {review.source && (
                      <span className="text-xs text-brand-brown/40 bg-brand-cream-dark px-2 py-1 rounded-full">
                        {review.source}
                      </span>
                    )}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        ) : (
          <SectionReveal delay={100}>
            <div className="max-w-2xl mx-auto text-center py-12">
              <div className="bg-white rounded-3xl border-2 border-dashed border-brand-brown/20 p-12">
                <p className="text-brand-brown/50 text-lg font-medium mb-2">
                  Customer reviews coming soon
                </p>
                <p className="text-brand-brown/40 text-sm">
                  We're collecting feedback from our customers. Check back soon!
                </p>
              </div>
              {/* Google reviews placeholder area */}
              <div className="mt-6 flex items-center justify-center gap-2 text-brand-brown/30">
                <span className="text-sm">Powered by Google</span>
              </div>
            </div>
          </SectionReveal>
        )}
      </div>
    </section>
  );
}
