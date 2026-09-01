import { Compass, ShieldCheck, Microscope, Layers } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 border-b border-black/15"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Section Marker */}
        <div className="flex items-center gap-3 text-xs font-mono-code text-black/80 uppercase tracking-widest mb-8 font-medium">
          <span className="text-emerald-800 font-bold">[ 01 ]</span>
          <span>Profile Overview</span>
          <div className="h-px bg-black/20 flex-1 max-w-[120px]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Key Metrics */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[40px] text-black font-semibold leading-[1.18]">
              Microbiological precision applied to pharmaceutical assurance & environmental systems.
            </h2>
            <p className="text-sm text-black/80 font-mono-code font-medium">
              OPERATIONAL COMPLIANCE: EU-GMP · WHO-TRS · ISO 14644-1
            </p>

            {/* High-quality relative scientific photography */}
            <div className="relative rounded-2xl overflow-hidden border border-black/15 bg-black/[0.03] shadow-md shadow-black/5 group">
              <img
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=80"
                alt="Microbiology laboratory and analytical quality control research"
                referrerPolicy="no-referrer"
                className="w-full h-64 sm:h-72 object-cover contrast-105 filter brightness-95 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-emerald-950/10 mix-blend-multiply" />
              <div className="absolute bottom-0 inset-x-0 bg-black/85 backdrop-blur-xs text-white p-3.5 flex items-center justify-between text-xs font-mono-code">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Sterile Analytical QC & Biosafety
                </span>
                <span className="text-white/80 text-[11px]">BSL-2 Lab Protocol</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Content & Key Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-black/85 font-normal leading-relaxed">
                Minhajul Islam Tuhin is a professional microbiologist with proven industry experience in pharmaceutical quality control, sterile injectable assurance, and cleanroom environmental surveillance.
              </p>

              <p className="text-base sm:text-lg text-black/85 font-normal leading-relaxed">
                Currently based in Germany, he is pursuing a Master of Science in <strong className="font-semibold text-black">Environmental and Resource Management</strong> at <strong className="font-semibold text-black">Brandenburg University of Technology (BTU Cottbus-Senftenberg)</strong>, bridging laboratory-grade diagnostic rigor with sustainable resource stewardship.
              </p>
            </div>

            {/* Core Competency Highlights in minimal editorial format */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-black/15">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-black text-sm font-semibold">
                  <Microscope className="w-4 h-4 text-emerald-800 shrink-0" />
                  <span>QC & Sterility</span>
                </div>
                <p className="text-xs text-black/80 font-normal leading-relaxed">
                  Aseptic cleanrooms, bioburden analysis, and microbial limits.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-black text-sm font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-800 shrink-0" />
                  <span>GMP & Biosafety</span>
                </div>
                <p className="text-xs text-black/80 font-normal leading-relaxed">
                  Strict compliance with cGMP, GLP, and BSL-2 laboratory protocols.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-black text-sm font-semibold">
                  <Compass className="w-4 h-4 text-emerald-800 shrink-0" />
                  <span>Resource Research</span>
                </div>
                <p className="text-xs text-black/80 font-normal leading-relaxed">
                  Environmental monitoring and sustainable resource ecology in Germany.
                </p>
              </div>
            </div>

            {/* Scientific discipline statement banner */}
            <div className="p-4 rounded-xl bg-black/[0.03] border border-black/15 flex items-start gap-3">
              <Layers className="w-4 h-4 text-emerald-800 mt-0.5 shrink-0" />
              <p className="text-xs text-black/85 font-normal leading-relaxed">
                Operating with strict adherence to Data Integrity, ALCOA+ principles, standard operating procedures (SOPs), and environmental impact assessment criteria.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
