import { expertiseList } from '../data/portfolioData';
import { Sparkles, ArrowRight } from 'lucide-react';

export function ExpertiseSection() {
  return (
    <section
      id="expertise"
      className="py-20 md:py-28 border-b border-black/15"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 text-xs font-mono-code text-black/80 uppercase tracking-widest mb-8 font-medium">
          <span className="text-emerald-800 font-bold">[ 02 ]</span>
          <span>Core Expertise</span>
          <div className="h-px bg-black/20 flex-1 max-w-[120px]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left: Lead text */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[38px] text-black font-semibold leading-[1.18]">
              Specialized domains of practice and laboratory discipline.
            </h2>
            <p className="text-sm text-black/85 font-normal leading-relaxed">
              Targeted expertise across industrial pharmaceutical quality control, biosafety compliance, cleanroom sterility testing, and environmental monitoring.
            </p>
          </div>

          {/* Right: Elegant typography list instead of bulky cards */}
          <div className="lg:col-span-8 divide-y divide-black/10 border-y border-black/15">
            {expertiseList.map((item) => (
              <div
                key={item.id}
                id={`expertise-item-${item.id}`}
                className="group py-5 sm:py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 transition-colors hover:bg-black/[0.03] px-3 -mx-3 rounded-lg"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono-code text-xs text-emerald-800 font-bold">
                    {item.code}
                  </span>
                  <h3 className="text-lg sm:text-xl font-semibold text-black group-hover:text-emerald-800 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-black/80 font-normal max-w-md sm:text-right">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
