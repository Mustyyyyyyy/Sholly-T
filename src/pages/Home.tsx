import { useState, useEffect } from "react";
import WhatsAppLink from "@/components/WhatsAppLink";
import SectionReveal from "@/components/SectionReveal";
import HeroSection from "@/sections/HeroSection";
import FeaturedMealsSection from "@/sections/FeaturedMealsSection";
import AboutSection from "@/sections/AboutSection";
import SignatureBrandSection from "@/sections/SignatureBrandSection";
import PackagingSection from "@/sections/PackagingSection";
import RestaurantExperienceSection from "@/sections/RestaurantExperienceSection";
import ReviewsSection from "@/sections/ReviewsSection";
import SocialSection from "@/sections/SocialSection";
import { brandConfig } from "@/data/brandConfig";

export default function HomePage() {
  return (
    <>
      {/* SEO */}
      <meta name="description" content={`${brandConfig.name} serves delicious meals in ${brandConfig.address}. Browse our menu and order for pickup or delivery through WhatsApp.`} />
      
      <HeroSection />
      <FeaturedMealsSection />
      <AboutSection />
      <SignatureBrandSection />
      <PackagingSection />
      <RestaurantExperienceSection />
      <ReviewsSection />
      <SocialSection />
    </>
  );
}
