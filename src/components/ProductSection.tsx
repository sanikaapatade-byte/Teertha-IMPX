import { useState, useMemo } from "react";
import { Search, ShoppingBag, Sprout, ChefHat, Factory, Home, Pill, Grape, Layers, Sparkles, CheckCircle } from "lucide-react";
import { Product, Category } from "../types";
import { CATEGORIES, PRODUCTS } from "../data";

interface ProductSectionProps {
  onBuyClick: (product: Product) => void;
}

export default function ProductSection({ onBuyClick }: ProductSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  // Map category icons dynamically
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Sprout":
        return <Sprout className="w-4 h-4" />;
      case "ChefHat":
        return <ChefHat className="w-4 h-4" />;
      case "Factory":
        return <Factory className="w-4 h-4" />;
      case "Home":
        return <Home className="w-4 h-4" />;
      case "Pill":
        return <Pill className="w-4 h-4" />;
      case "Grape":
        return <Grape className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  // Filter products based on category and search query
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      const cleanSearch = searchQuery.toLowerCase().trim();
      const matchesSearch =
        cleanSearch === "" ||
        product.name.toLowerCase().includes(cleanSearch) ||
        (product.originalName && product.originalName.toLowerCase().includes(cleanSearch)) ||
        product.description.toLowerCase().includes(cleanSearch) ||
        (product.specification && product.specification.toLowerCase().includes(cleanSearch));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Count items for badges
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: PRODUCTS.length };
    CATEGORIES.forEach((cat) => {
      counts[cat.id] = PRODUCTS.filter((p) => p.category === cat.id).length;
    });
    return counts;
  }, []);

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest font-mono">Export Catalog</h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            Our Certified Global Product Portfolios
          </p>
          <div className="w-16 h-1 bg-emerald-600 mx-auto mt-4 rounded"></div>
          <p className="mt-4 text-slate-500 text-base leading-relaxed font-light">
            Each product is manufactured and processed under rigid visual and regulatory standards, packed in heavy-duty export containers, and dispatched with dedicated test certifications.
          </p>
        </div>

        {/* Search and Filters Hub */}
        <div className="mt-12 bg-slate-50 p-5 rounded-2xl border border-slate-200/70 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products (e.g. Chlorpyrifos, Citric, Vitamin A)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-600 transition-all font-medium placeholder-slate-400 text-slate-800 shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-medium bg-slate-100 px-1.5 py-0.5 rounded cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick status indicator */}
            <div className="text-xs font-semibold text-slate-500 flex items-center gap-1.5 self-start md:self-auto">
              <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
              <span>Showing {filteredProducts.length} premium products</span>
            </div>
          </div>

          {/* Horizontal Category Switcher */}
          <div className="flex flex-wrap gap-1.5 pt-1.5 border-t border-slate-200/50">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                selectedCategory === "all"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              All Sectors
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${selectedCategory === "all" ? "bg-emerald-500 text-slate-950 animate-pulse" : "bg-slate-100 text-slate-500"}`}>
                {categoryCounts.all}
              </span>
            </button>

            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200"
                }`}
              >
                {getCategoryIcon(cat.icon)}
                {cat.name}
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${selectedCategory === cat.id ? "bg-emerald-500 text-slate-950" : "bg-slate-100 text-slate-500"}`}>
                  {categoryCounts[cat.id]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Category Description Banner */}
        {selectedCategory !== "all" && (
          <div className="mt-8 p-6 bg-emerald-50/50 border border-emerald-500/20 rounded-2xl flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-emerald-800 font-bold text-xs uppercase tracking-wider font-mono">Currently Viewing Verticals</span>
              <h3 className="text-xl font-extrabold text-slate-900 font-display">
                {CATEGORIES.find((c) => c.id === selectedCategory)?.name}
              </h3>
              <p className="text-slate-600 text-sm max-w-2xl font-light">
                {CATEGORIES.find((c) => c.id === selectedCategory)?.description}
              </p>
            </div>
          </div>
        )}

        {/* Empty state handles */}
        {filteredProducts.length === 0 && (
          <div className="mt-16 text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <p className="text-lg font-bold text-slate-700">No matching cargo found</p>
            <p className="text-slate-500 text-sm mt-1">Try resetting the keyword or switching the category filter.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-6 px-4 py-2 bg-slate-900 hover:bg-emerald-500 hover:text-white text-xs font-bold rounded-lg transition-all"
            >
              Reset Search & Filters
            </button>
          </div>
        )}

        {/* Product Grid - 4 Columns in a row mapped dynamically */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col overflow-hidden gradient-card-hover group"
            >
              {/* Product Image Stage */}
              <div className="relative aspect-square w-full overflow-hidden bg-slate-50 border-b border-slate-100 flex items-center justify-center">
                {!failedImages[product.id] ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={() => {
                      setFailedImages((prev) => ({ ...prev, [product.id]: true }));
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-emerald-50/20 p-4 text-center select-none group">
                    <div className="p-3.5 rounded-full bg-emerald-500/10 text-emerald-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {getCategoryIcon(CATEGORIES.find((cat) => cat.id === product.category)?.icon || "Layers")}
                    </div>
                    <span className="text-[10px] max-w-[90%] uppercase font-bold tracking-widest text-emerald-700 font-mono text-center overflow-hidden text-nowrap text-ellipsis">
                      {CATEGORIES.find((cat) => cat.id === product.category)?.name.split(" ")[0]} sector
                    </span>
                    <span className="text-[9px] text-slate-400 font-mono mt-0.5">
                      Premium Quality Assured
                    </span>
                  </div>
                )}
                
                {/* Category visual badge pill */}
                <span className="absolute top-3 left-3 bg-emerald-950/90 backdrop-blur-sm shadow-sm text-white font-semibold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {CATEGORIES.find((cat) => cat.id === product.category)?.name.split(" ")[0]}
                </span>
              </div>

              {/* Product Descriptive Specs */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-extrabold text-[#0f172a] text-base group-hover:text-emerald-600 transition-colors tracking-tight font-display">
                    {product.name}
                  </h4>
                  
                  {/* Shows original requested prompt spell if applicable */}
                  {product.originalName && product.originalName.toLowerCase() !== product.name.toLowerCase() && (
                    <span className="text-[10px] text-slate-400 font-mono block mt-0.5" title="Sourcing code">
                      Ref: {product.originalName}
                    </span>
                  )}

                  <p className="text-slate-500 text-xs mt-2.5 leading-relaxed font-light line-clamp-3">
                    {product.description}
                  </p>

                  {/* Specifications & Packaging blocks */}
                  {(product.specification || product.packing) && (
                    <div className="mt-4 pt-3.5 border-t border-slate-100 space-y-1.5 text-slate-600">
                      {product.specification && (
                        <div className="flex items-start justify-between text-[11px] gap-2">
                          <span className="text-slate-400 font-medium shrink-0">Grade / Spec:</span>
                          <span className="font-medium text-slate-800 text-right line-clamp-1">{product.specification}</span>
                        </div>
                      )}
                      {product.packing && (
                        <div className="flex items-start justify-between text-[11px] gap-2">
                          <span className="text-slate-400 font-medium shrink-0">Export Packing:</span>
                          <span className="font-mono text-slate-800 text-right line-clamp-1">{product.packing}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Buy / Inquire CTA Button */}
                <div className="mt-5 pt-3 border-t border-slate-50">
                  <button
                    onClick={() => onBuyClick(product)}
                    className="w-full py-2.5 px-4 bg-slate-50 hover:bg-emerald-600 text-slate-800 hover:text-white font-bold text-xs rounded-xl transition-all duration-300 shadow-sm border border-slate-200/60 group-hover:border-transparent flex items-center justify-center gap-1.5 transform active:scale-[0.98] cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Buy / Inquiry
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality assurance footer banner */}
        <div className="mt-16 bg-gradient-to-r from-emerald-950 to-emerald-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-lg border border-emerald-800">
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-10 translate-y-10 scale-125">
            <CheckCircle className="w-96 h-96" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="space-y-2">
              <h4 className="text-xl font-bold font-display text-emerald-400">Need Specialized Technical Packing or Chemical Formulations?</h4>
              <p className="text-emerald-100/90 text-sm max-w-2xl font-light">
                Our facilities in Mumbai offer fully customizable bulk packaging, special chemical concentration ratios, and specialized cold storage for delicate fresh cargo dispatches.
              </p>
            </div>
            <a
              href="#contact"
              className="px-6 py-3 bg-emerald-400 text-emerald-950 font-bold rounded-xl hover:bg-emerald-300 transition-colors shadow-md text-xs uppercase tracking-wider text-nowrap"
            >
              Request Custom Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
