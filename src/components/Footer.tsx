import { Landmark, ArrowUp, Mail, Phone, ChevronRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
       behavior: "smooth"
    });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core elements grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Column 1: Company details */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-slate-900 text-emerald-500 rounded-lg border border-slate-800">
                <Landmark className="w-5 h-5" />
              </div>
              <span className="text-lg font-extrabold tracking-tight text-white font-display">
                TEERTHA <span className="text-emerald-500 font-semibold text-sm font-mono tracking-[3px] block">IMPEX</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400 font-light max-w-sm">
              Teertha Impex is an accredited global trade integrator with ISO, FIEO, and sector-specific clearances. Based in Mumbai Fort, we export agrochemicals, additives, industrial solutions, home utensils, pharmaceuticals, and fresh produce lines to every major regional sea terminal.
            </p>
            <div className="text-slate-500 font-mono text-[10px]">
              © {new Date().getFullYear()} Teertha Impex Ltd. All Rights Reserved.
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-display">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: "Back to Home", href: "#home" },
                { label: "Company Profile", href: "#about" },
                { label: "Explore Products", href: "#products" },
                { label: "Inquiry Desk", href: "#contact" }
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-emerald-400 transition-colors flex items-center gap-1 group">
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-emerald-400" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Support */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-display">Active Customer Desk</h4>
            <div className="space-y-3 text-xs leading-5">
              <p className="font-light">
                For prompt replies, mail directly to our Global Sales Manager:
              </p>
              <a
                href="mailto:Sales.Manager@teerthaimpex.com"
                className="text-emerald-400 font-mono font-semibold hover:underline flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5" /> Sales.Manager@teerthaimpex.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom divider strip */}
        <div className="mt-12 pt-8 border-t border-slate-900/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>Corporate Registration No: TEER-MUM-7729-A</span>
            <span>|</span>
            <span>IEC Code: 0316499815</span>
          </div>
          
          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            title="Scroll to Top"
            className="p-3 rounded-full bg-slate-900 hover:bg-emerald-500 text-slate-400 hover:text-white transition-colors border border-slate-800 shadow cursor-pointer focus:outline-none"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
