import { useState, useEffect } from "react";
import { Globe, Menu, X, Mail } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "products", label: "Products" },
    { id: "contact", label: "Contact Us" },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed navbar
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
    <>
      {/* Top micro-banner */}
      <div className="bg-emerald-950 text-emerald-100 text-xs py-2 px-4 border-b border-emerald-900 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-1">
            <Globe className="w-3.5 h-3.5 text-emerald-400 animate-spin-slow" />
            <span className="font-medium tracking-wide">TEERTHA IMPEX — LEADING GLOBAL EXPORT INTEGRATOR</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:Sales.Manager@teerthaimpex.com" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
              <Mail className="w-3.5 h-3.5" /> Sales.Manager@teerthaimpex.com
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-emerald-900 text-white shadow-md py-3 border-b border-emerald-800"
            : "bg-emerald-900/95 backdrop-blur-md text-white py-4 border-b border-emerald-800/55"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div
              onClick={() => handleNavClick("home")}
              className="flex items-center gap-3 cursor-pointer"
            >
              <img
                src="/logo.jpg"
                alt="Teertha Impex"
                className="h-14 w-auto object-contain rounded-lg bg-white px-1.5 py-1 shadow-sm"
              />
              <span className="text-xl font-extrabold tracking-widest text-white font-display leading-none hidden sm:block">
                TEERTHA<span className="text-emerald-400">IMPEX</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 text-sm font-semibold tracking-wide rounded-lg transition-all duration-200 cursor-pointer ${
                    activeSection === item.id
                      ? "text-emerald-300 bg-white/10"
                      : "text-emerald-100 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="w-[1px] h-6 bg-emerald-800 mx-3"></div>
              <button
                onClick={() => handleNavClick("contact")}
                className="px-4 py-2 text-sm font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-sm transition-all duration-300 transform active:scale-95"
              >
                Inquire Now
              </button>
            </nav>

            {/* Mobile menu toggle */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-emerald-100 hover:text-white hover:bg-emerald-800 rounded-lg focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {isOpen && (
          <div className="md:hidden border-t border-emerald-800 bg-emerald-950 absolute top-full left-0 w-full shadow-lg transition-all duration-300">
            <div className="px-4 pt-3 pb-6 space-y-1.5 sm:px-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    activeSection === item.id
                      ? "text-emerald-300 bg-white/10 font-semibold"
                      : "text-emerald-100 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3 border-t border-emerald-800">
                <button
                  onClick={() => handleNavClick("contact")}
                  className="w-full text-center px-4 py-3 text-base font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow transition-all duration-300"
                >
                  Inquire Now
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
