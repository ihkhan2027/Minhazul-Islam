import { ArrowUp } from 'lucide-react';
import { personalData, contactInfo } from '../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-stone-200 bg-[#FAFAF9] text-stone-600 text-xs">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left identity & attribution */}
        <div className="space-y-1 text-center sm:text-left">
          <div className="font-editorial text-xl font-medium text-stone-900">
            Minhajul Islam Tuhin
          </div>
          <p className="font-mono-code text-[11px] text-stone-500">
            Microbiology · Environmental & Resource Management · {contactInfo.location}
          </p>
        </div>

        {/* Right back to top & coordinate stamp */}
        <div className="flex items-center gap-6">
          <span className="font-mono-code text-[11px] text-stone-400 hidden md:inline">
            {contactInfo.coordinates}
          </span>

          <button
            onClick={scrollToTop}
            id="footer-back-to-top"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 hover:bg-emerald-100 hover:border-emerald-300 text-emerald-800 hover:text-emerald-950 text-xs font-mono-code font-medium transition-all shadow-xs"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3 h-3 text-emerald-600" />
          </button>
        </div>

      </div>
    </footer>
  );
}
