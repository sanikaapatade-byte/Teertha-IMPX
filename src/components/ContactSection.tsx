import { useState, useEffect } from "react";
import { Mail, MapPin, Phone, Building, Landmark, Sparkles } from "lucide-react";
import { Product } from "../types";

interface ContactSectionProps {
  selectedProductForInquiry: Product | null;
}

export default function ContactSection({ selectedProductForInquiry }: ContactSectionProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (selectedProductForInquiry) {
      setSelectedProduct(selectedProductForInquiry);
    }
  }, [selectedProductForInquiry]);

  const emailContacts = [
    { label: "General Inquiries", email: "info@teerthaimpex.com" },
    { label: "Purchase Department", email: "Purchase.Manager@teerthaimpex.com" },
    { label: "Global Sales Manager", email: "Sales.Manager@teerthaimpex.com" },
    { label: "Accounts & Financials (Kiran Sharma)", email: "Kiran.Sharma@teerthaimpex.com" },
    { label: "Logistics Coordination (Rohit Kumar)", email: "Rohit.Kumar@teerthaimpex.com" }
  ];

  // Helper to generate a pre-filled mailto URL for real e-mail client integration
  const getMailtoUrl = (product: Product) => {
    const email = "Sales.Manager@teerthaimpex.com";
    const subject = encodeURIComponent(`Bulk Sourcing Inquiry for ${product.name} - TEERTHA IMPEX`);
    const body = encodeURIComponent(
      `Hello Teertha Impex Sales team,\n\n` +
      `I am interested in placing an import inquiry for "${product.name}" (Ref Model: ${product.originalName || product.name}).\n` +
      `Specification: ${product.specification || "Standard premium quality"}\n` +
      `Packing: ${product.packing || "Bulk Export Grade Pack"}\n\n` +
      `Please provide us:\n` +
      `1. Detailed Technical Specification Sheets / Certificate of Analysis (CoA)\n` +
      `2. FOB/CIF Sea-Freight Price Quotation for bulk volumes\n` +
      `3. Minimum Order Quantity (MOQ)\n` +
      `4. Estimated lead timeline for shipment dispatch from Mumbai port.\n\n` +
      `Sincerely,\n` +
      `[Name / Corporate Firm Name]\n` +
      `[Physical Location / Port of Destination]`
    );
    return `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-widest font-mono">Inquiry Desk</h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
            Contact Mumbai Corporate Headquarters
          </p>
          <div className="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded mb-6"></div>
          <p className="mt-4 text-slate-300 text-sm leading-relaxed font-light">
            Skip the form queues. Contact our specialized category desks directly to procure technical specifications, Certificate of Analysis documents, and expedited container vessel quotes.
          </p>
        </div>

        {/* 3-Column Grid representing high-value company channels */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Postal Location Details */}
          <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800/80 flex flex-col justify-between transition-all hover:border-slate-700/60 shadow-lg">
            <div>
              <h3 className="text-lg font-bold text-white font-display border-b border-slate-800 pb-3 flex items-center gap-2">
                <Building className="w-5 h-5 text-emerald-500" />
                Corporate Office
              </h3>
              
              <div className="mt-6 space-y-4 text-sm text-slate-300 leading-relaxed font-light">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold mb-1 font-display">TEERTHA IMPEX Office</strong>
                    Floor No 29, Second Floor,<br />
                    Plot No: 157/159, SHROFF BHUVAN,<br />
                    Premise Name: CARNIC BRIDGE,<br />
                    Road / Street: P D'Mello Road,<br />
                    Nearby Landmark: <span className="text-emerald-400 font-semibold font-sans">Yellow Gate Police Station</span>,<br />
                    Sub Locality / Location: Mumbai Fort,<br />
                    City: Mumbai, Maharashtra - 400001
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="font-mono font-semibold text-slate-200">+91 85579 05766</span>
                </div>
              </div>
            </div>

          </div>

          {/* Card 2: Strategic Direct Emails */}
          <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800/80 flex flex-col justify-between transition-all hover:border-slate-700/60 shadow-lg">
            <div>
              <h3 className="text-lg font-bold text-white font-display border-b border-slate-800 pb-3 flex items-center gap-2">
                <Mail className="w-5 h-5 text-emerald-500" />
                Category Desks
              </h3>
              <p className="text-xs text-slate-400 mt-3 mb-6 font-light">
                Dispatch your specific lists, target prices, and contract specifications directly to the managers:
              </p>
              
              <div className="space-y-3.5">
                {emailContacts.map((contact, idx) => (
                  <div key={idx} className="bg-slate-900/70 p-3 rounded-xl border border-slate-800/60 hover:border-emerald-500/30 transition-all">
                    <span className="text-slate-400 text-[11px] block font-medium mb-1">{contact.label}</span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-emerald-400 font-mono text-xs hover:underline block font-semibold hover:text-emerald-300"
                    >
                      {contact.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Physical Map Node for visual orientation */}
          <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800/80 flex flex-col justify-between transition-all hover:border-slate-700/60 shadow-lg">
            <div>
              <h3 className="text-lg font-bold text-white font-display border-b border-slate-800 pb-3 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-emerald-500" />
                Port Side Location
              </h3>
              <p className="text-xs text-slate-400 mt-3 mb-5 font-light">
                Situated adjacent to Mumbai Fort customs house gate for immediate freight processing.
              </p>

              {/* Minimalist Visual Vector/Interactive Harbor Mock */}
              <div className="h-44 bg-slate-900 rounded-2xl relative flex items-center justify-center border border-slate-800/80 overflow-hidden">
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                <div className="absolute inset-0 flex items-center justify-center text-slate-800/50 select-none">
                  <span className="text-[72px] font-bold tracking-widest font-mono">ARABIAN SEA</span>
                </div>

                {/* Road vector marks */}
                <div className="absolute w-[2px] h-full bg-emerald-500/10 left-1/3 skew-x-12"></div>
                <div className="absolute w-full h-[2px] bg-emerald-500/10 top-1/2 -skew-y-6"></div>
                
                {/* D'Mello Road line */}
                <div className="absolute top-[20%] left-0 w-full transform rotate-12 text-[8px] font-mono font-bold tracking-[6px] text-slate-800 uppercase">
                  P D'Mello Road
                </div>

                {/* Visual landmark pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                  <div className="relative">
                    <span className="absolute -inset-2 bg-emerald-500/30 rounded-full animate-ping"></span>
                    <Landmark className="relative w-6 h-6 text-emerald-500 bg-slate-950 p-1 rounded-full border border-emerald-500" />
                  </div>
                  <span className="mt-1.5 font-bold text-[9px] text-white bg-slate-950 px-2 py-0.5 rounded border border-slate-800 shadow whitespace-nowrap">
                    Teertha Impex Corp
                  </span>
                  <span className="text-[7px] text-emerald-400/90 font-mono mt-0.5">
                    Near Yellow Gate Stn
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-between text-[11px] text-slate-400 font-mono px-1">
              <span>COORD: 18.9482° N, 72.8427° E</span>
              <span>HIGH PORT ZONE</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
