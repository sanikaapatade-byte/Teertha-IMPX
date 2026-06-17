import { motion } from "motion/react";
import { ShieldCheck, Truck, Users, Award, ShieldAlert, Check } from "lucide-react";

export default function AboutSection() {
  const values = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: "Pristine Quality Controls",
      description: "Every chemical, pharmaceutical, food, or fresh produce lot goes through strict visual inspection and analytical lab validation to meet global APEDA, FSSAI, and international guidelines."
    },
    {
      icon: <Truck className="w-6 h-6 text-emerald-600" />,
      title: "Expedited Global Freight",
      description: "Operating out of Mumbai Fort, we utilize strategic marine channels and climate-controlled freight networks for fast, unbroken shipping routes directly to global ports."
    },
    {
      icon: <Award className="w-6 h-6 text-emerald-600" />,
      title: "Accredited Export Standards",
      description: "Full regulatory compliance and comprehensive custom clearances. All materials are delivered sealed with detailed specifications, and certificate-of-analysis documentation."
    },
    {
      icon: <Users className="w-6 h-6 text-emerald-600" />,
      title: "Dedicated Client Desk",
      description: "Our dedicated regional business heads provide round-the-clock progress updates, customizable packaging solutions, and custom invoice coordination."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest font-mono">Company Profile</h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            TEERTHA IMPX — Your Trusted Global Sourcing House
          </p>
          <div className="w-16 h-1 bg-emerald-600 mx-auto mt-4 rounded"></div>
          <p className="mt-5 text-lg text-slate-600 font-light leading-relaxed">
            Headquartered in the historic, bustling hub of Mumbai Fort, <strong className="text-slate-800 font-semibold">Teertha Impx</strong> has grown to become a cornerstone supplier for worldwide manufacturing, industrial, and agricultural clients. We bridge the gap between high-yield formulations and dynamic consumer markets.
          </p>
        </div>

        {/* Content split card layout */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl filter blur-2xl transform scale-95 translate-x-3 translate-y-3"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white p-2">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=900&h=600"
                alt="Teertha Impx shipping operations"
                className="rounded-xl w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 right-6 bg-slate-900 text-white p-5 rounded-xl shadow-lg border border-slate-800 flex items-center gap-3.5 max-w-[280px]">
                <div className="text-3xl font-extrabold text-emerald-400">100%</div>
                <div className="text-xs leading-snug font-medium text-slate-300">
                  Certified Supply Chains & Regulatory Compliant Documents
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 font-display">
              Uncompromising Quality in Global Supply Chains
            </h3>
            <p className="text-slate-600 leading-relaxed font-light">
              We specialize in the export-import trade of diversified vital product branches. From complex crop-saving chemicals like Chlorantraniliprole and Emamectin Benzoate, biological food additives like Citric Acid and L-Threonine, to premium Indian fresh Alfonso Mangoes and premium farm onions—Teertha Impx maintains stringent compliance and customized batch packing for all cargo.
            </p>

            <ul className="space-y-3">
              {[
                "Compliant with international safety and trade regulations",
                "Advanced batch moisture-lock and air-tight export packing",
                "Direct commercial channels with top global production firms",
                "Comprehensive Certificate of Analysis (CoA) with every dispatch"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm font-semibold text-slate-700">
                  <div className="p-0.5 rounded-full bg-emerald-100 text-emerald-700 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="p-5 rounded-2xl bg-emerald-950 text-white flex items-start gap-4 border border-emerald-900">
              <div className="p-3 rounded-lg bg-emerald-500 text-slate-950 shrink-0">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-emerald-400 text-sm">Regulatory Verified Sourcing</h4>
                <p className="text-xs text-emerald-100/90 mt-1 leading-relaxed">
                  We maintain strict registrations with the Federation of Indian Export Organisations (FIEO) alongside specialized sectoral trade councils to guarantee reliable global cargo.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values grid */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 font-display">Operational Pillars</h3>
            <p className="text-slate-500 text-sm mt-1">Our day-to-day commitments to buyers around the globe</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col items-start hover:shadow-md transition-shadow">
                <div className="p-3 bg-slate-50 rounded-xl mb-4">
                  {val.icon}
                </div>
                <h4 className="font-bold text-slate-900 text-lg font-display">{val.title}</h4>
                <p className="text-slate-500 text-sm mt-2 leading-relaxed font-light">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
