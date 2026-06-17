import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ProductSection from "./components/ProductSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { Product } from "./types";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Triggered when clicking "Buy / Inquiry" in ProductSection
  const handleBuyClick = (product: Product) => {
    setSelectedProduct(product);
    setActiveSection("contact");
    
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80; // Navbar offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleLearnMore = () => {
    setActiveSection("about");
    const element = document.getElementById("about");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleExploreProducts = () => {
    setActiveSection("products");
    const element = document.getElementById("products");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 relative selection:bg-emerald-500 selection:text-white">
      {/* Persistant sticky Navbar */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main visual segments */}
      <main className="flex-grow">
        {/* Home / Hero Stage */}
        <Hero 
          onLearnMoreClick={handleLearnMore} 
          onExploreProductsClick={handleExploreProducts} 
        />

        {/* Company Profile (About) Segment */}
        <AboutSection />

        {/* Dynamic Categorized Products Portfolio */}
        <ProductSection onBuyClick={handleBuyClick} />

        {/* Active Contact RFQ Desk */}
        <ContactSection selectedProductForInquiry={selectedProduct} />
      </main>

      {/* Styled Footer with backlinks */}
      <Footer />
    </div>
  );
}
