import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Globe2, Ship, Leaf } from "lucide-react";

interface HeroProps {
  onLearnMoreClick: () => void;
  onExploreProductsClick: () => void;
}

export default function Hero({ onLearnMoreClick, onExploreProductsClick }: HeroProps) {
  return (
    <section id="home" className="relative bg-slate-950 overflow-hidden min-h-[85vh] flex items-center">
      {/* Decorative background visual overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=1920"
          alt="Global Cargo Shipping Logistics"
          className="w-full h-full object-cover object-center opacity-30 select-none pointer-events-none scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950/40"></div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main heading column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6"
            >
              <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
              Trusted Multi-Sector Merchant Exporter
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.1]"
            >
              Bridging Continents with Outstanding <span className="text-emerald-400 underline decoration-emerald-400/30 decoration-wavy">Global Goods</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl font-light leading-relaxed"
            >
              <strong className="text-white font-semibold">TEERTHA IMPX</strong> is a premium, premier trading house based out of Mumbai Fort. We deliver precision-certified Agro Chemicals, Food Additives, Industrial Grade polymers, home utilities, vital pharmaceuticals, and fresh high-grade fruits and veggies straight to world ports.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <button
                onClick={onExploreProductsClick}
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-white bg-emerald-600 hover:bg-emerald-500 hover:shadow-lg rounded-xl transition-all duration-300 transform active:scale-95 cursor-pointer shadow-emerald-500/20 shadow-md"
              >
                Explore Catalog
                <ArrowRight className="w-4.5 h-4.5" />
              </button>
              <button
                onClick={onLearnMoreClick}
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl hover:shadow-lg transition-all duration-300 transform active:scale-95 cursor-pointer hover:border-slate-600"
              >
                Our Legacy
              </button>
            </motion.div>

            {/* Quick credentials badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-12 pt-10 border-t border-slate-800 flex flex-wrap gap-6 text-slate-400 text-sm"
            >
              <div className="flex items-center gap-2 bg-slate-900/50 p-2.5 rounded-lg border border-slate-800/60">
                <ShieldCheck className="w-4.5 h-4.5 text-emerald-400" />
                <span>RCMC & Chemexcil Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/50 p-2.5 rounded-lg border border-slate-800/60">
                <Ship className="w-4.5 h-4.5 text-emerald-400" />
                <span>Global Multi-Port Sea Freight</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/50 p-2.5 rounded-lg border border-slate-800/60">
                <Leaf className="w-4.5 h-4.5 text-emerald-400" />
                <span>100% Retained Freshness</span>
              </div>
            </motion.div>
          </div>

          {/* Interactive Bento Right preview column */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-square"
            >
              {/* Outer decorative ring */}
              <div className="absolute inset-0 bg-emerald-500/10 rounded-3xl blur-2xl animate-pulse"></div>

              {/* Grid block of trade sectors */}
              <div className="relative grid grid-cols-2 gap-4 h-full">
                <div className="rounded-2xl overflow-hidden shadow-2xl relative group h-[220px]">
                  <img
                    src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=400&h=400"
                    alt="Agro Chemicals"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent flex items-bottom p-5">
                    <span className="text-sm font-semibold text-white tracking-wide">Agrochemical Protection</span>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-2xl relative group h-[220px] mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1610970881699-44a5587caa9a?auto=format&fit=crop&q=80&w=400&h=400"
                    alt="Food Ingredients"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent flex items-bottom p-5">
                    <span className="text-sm font-semibold text-white tracking-wide">Food Additive Ingredients</span>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-2xl relative group h-[220px] -mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&q=80&w=400&h=400"
                    alt="Vitamins and Pharma"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent flex items-bottom p-5">
                    <span className="text-sm font-semibold text-white tracking-wide">Vitamin & Pharma Actives</span>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-2xl relative group h-[220px]">
                  <img
                    src="https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=400&h=400"
                    alt="Fresh Produce"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent flex items-bottom p-5">
                    <span className="text-sm font-semibold text-white tracking-wide">Fresh Fruits & Veggies</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
