import { ArrowDown, Mail, FileText, CheckCircle2 } from 'lucide-react';
import { MicroscopyVisual } from './MicroscopyVisual';
import { personalData, contactInfo } from '../data/portfolioData';

export function Hero() {
  return (
    <section
      id="hero-section"
      className="relative min-h-[88vh] flex flex-col justify-center pt-28 pb-16 md:pt-36 md:pb-24 border-b border-stone-200/70"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 w-full">
        {/* Editorial Layout: Asymmetric 2-column with ample negative space */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Typographic Statement */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Status metadata pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-stone-100/90 border border-stone-200/80 text-stone-600 text-xs font-mono-code">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>{personalData.status}</span>
            </div>

            {/* Main Headline with new editorial Newsreader styling */}
            <div className="space-y-3">
              <h1 className="font-editorial text-5xl sm:text-6xl lg:text-7xl font-normal text-stone-950 tracking-tight leading-[1.06]">
                Minhajul Islam Tuhin
              </h1>
              <div className="flex flex-wrap items-center gap-2.5 text-lg sm:text-xl font-light text-stone-600">
                <span className="font-medium text-emerald-900">Microbiologist</span>
                <span className="text-stone-300">/</span>
                <span className="text-stone-700">Environmental & Resource Management</span>
              </div>
            </div>

            {/* Concise 1-2 line intro strictly grounded */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl font-light">
              Specialized in pharmaceutical microbiological quality control and sterile cleanroom assurance, currently advancing postgraduate research in Environmental and Resource Management in Germany.
            </p>

            {/* Simple CTAs & Contact triggers */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#experience"
                id="hero-cta-explore"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-stone-900 text-stone-50 hover:bg-emerald-900 text-sm font-medium transition-all shadow-sm"
              >
                <span>View Background</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                id="hero-cta-contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-stone-300 hover:border-stone-400 text-stone-800 text-sm font-medium hover:bg-stone-50 transition-all"
              >
                <Mail className="w-4 h-4 text-emerald-800" />
                <span>Contact Directly</span>
              </a>
            </div>

            {/* Micro scientific tags */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-stone-500 font-mono-code border-t border-stone-200/60">
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
