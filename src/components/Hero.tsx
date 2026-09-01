import { ArrowDown, Mail, FileText, CheckCircle2 } from 'lucide-react';
import { MicroscopyVisual } from './MicroscopyVisual';
import { personalData, contactInfo } from '../data/portfolioData';

export function Hero() {
  return (
    <section
      id="hero-section"
      className="relative min-h-[88vh] flex flex-col justify-center pt-28 pb-16 md:pt-36 md:pb-24 border-b border-black/15"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 w-full">
        {/* Editorial Layout: Asymmetric 2-column with ample negative space */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Typographic Statement */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Status metadata pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-950 text-xs font-mono-code shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse ring-4 ring-emerald-400/20" />
              <span className="font-semibold">{personalData.status}</span>
            </div>

            {/* Main Headline with new editorial Newsreader styling */}
            <div className="space-y-3">
              <h1 className="font-editorial text-5xl sm:text-6xl lg:text-7xl font-semibold text-black tracking-tight leading-[1.06]">
                Minhajul Islam Tuhin
              </h1>
              <div className="flex flex-wrap items-center gap-2.5 text-lg sm:text-xl font-light text-black/90">
                <span className="font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">Microbiologist</span>
                <span className="text-black/40">/</span>
                <span className="text-black font-medium">Environmental & Resource Management</span>
              </div>
            </div>

            {/* Concise 1-2 line intro strictly grounded */}
            <p className="text-base sm:text-lg text-black/85 leading-relaxed max-w-xl font-normal">
              Specialized in pharmaceutical microbiological quality control and sterile cleanroom assurance, currently advancing postgraduate research in Environmental and Resource Management in Germany.
            </p>

            {/* Simple CTAs & Contact triggers */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#experience"
                id="hero-cta-explore"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-sm font-semibold shadow-md shadow-emerald-600/30 hover:shadow-lg hover:shadow-emerald-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <span>View Background</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                id="hero-cta-contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border-2 border-emerald-600/30 hover:border-emerald-600 text-emerald-950 text-sm font-semibold hover:bg-emerald-50/70 shadow-xs hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <Mail className="w-4 h-4 text-emerald-600" />
                <span>Contact Directly</span>
              </a>
            </div>

            {/* Micro scientific tags */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-black/80 font-mono-code border-t border-black/15 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                Pharmaceutical cGMP / GLP
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                Sterile Process Validation
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                Environmental Monitoring
              </span>
            </div>

          </div>

          {/* Right: Abstract Microscopy & Cellular Visual */}
          <div className="lg:col-span-5 w-full">
            <MicroscopyVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
