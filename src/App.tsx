import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppOrder from "@/components/WhatsAppOrder";
import FloatingCartButton from "@/components/FloatingCartButton";
import HomePage from "@/pages/Home";
import MenuPage from "@/pages/Menu";
import GalleryPage from "@/pages/Gallery";
import DeliveryPage from "@/pages/Delivery";
import ContactPage from "@/pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/delivery" element={<DeliveryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppOrder isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <FloatingCartButton onOpenCart={() => setCartOpen(true)} />
    </div>
  );
}
