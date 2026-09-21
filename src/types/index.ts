export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface OpeningHours {
  day: string;
  hours: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  source?: string;
  date?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface BrandConfig {
  name: string;
  tagline: string;
  brandStatement: string;
  shortDescription: string;
  address: string;
  addressFull: string;
  phones: string[];
  whatsappNumber: string;
  instagramUrl: string;
  instagramHandle: string;
  locationNote: string;
  openingHours: OpeningHours[];
  menuCategories: MenuCategory[];
  galleryImages: GalleryImage[];
  reviews: Review[];
  heroSlides: { image: string; title: string; subtitle: string }[];
}
