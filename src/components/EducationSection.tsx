import { educationList } from '../data/portfolioData';
import { MapPin, GraduationCap, Dna } from 'lucide-react';

export function EducationSection() {
  return (
    <section
      id="education"
      className="py-20 md:py-28 border-b border-stone-200/70"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 text-xs font-mono-code text-stone-500 uppercase tracking-widest mb-8">
          <span className="text-emerald-800 font-semibold">[ 04 ]</span>
          <span>Academic Background</span>
          <div className="h-px bg-stone-200 flex-1 max-w-[120px]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Visual context */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[38px] text-stone-900 leading-[1.18]">
                Academic foundation in microbiology & resource management.
              </h2>
              <p className="text-sm text-stone-600 font-light leading-relaxed">
                Combining advanced research in European environmental frameworks with deep microbiological laboratory training and pandemic-era molecular diagnostic research.
              </p>
            </div>

            {/* Academic & Molecular Research Visual */}
            <div className="relative rounded-2xl overflow-hidden border border-stone-200/80 bg-stone-100 shadow-[0_2px_8px_rgba(0,0,0,0.03)] group">
              <img
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1000&q=80"
                alt="Molecular diagnostic and environmental microbiology research laboratory"
                referrerPolicy="no-referrer"
                className="w-full h-56 object-cover contrast-105 filter brightness-95 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-emerald-950/10 mix-blend-multiply" />
              <div className="absolute bottom-0 inset-x-0 bg-stone-950/80 backdrop-blur-xs text-white p-3 flex items-center justify-between text-xs font-mono-code">
                <span className="flex items-center gap-1.5">
                  <Dna className="w-3.5 h-3.5 text-emerald-400" />
                  Molecular Diagnostics & Resource Ecology
                </span>
                <span className="text-stone-400 text-[10px]">BTU Cottbus & DU</span>
              </div>
            </div>
          </div>

          {/* Right Column: Minimal Academic Timeline */}
          <div className="lg:col-span-7 relative border-l border-emerald-200/80 pl-6 sm:pl-8 space-y-10">
            {educationList.map((edu) => (
              <div
                key={edu.id}
                id={`education-${edu.id}`}
                className="relative group"
              >
                {/* Minimal timeline node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-emerald-600 bg-emerald-100 group-hover:bg-emerald-600 group-hover:border-emerald-700 transition-colors shadow-xs" />

                <div className="space-y-2">
                  
                  {/* Period & Location */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono-code text-stone-500">
                    <span className="text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">{edu.period}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-700" />
                      {edu.location}
                    </span>
                  </div>

                  {/* Degree title */}
                  <h3 className="text-2xl sm:text-3xl font-normal text-stone-900 font-editorial">
                    {edu.degree}
                  </h3>

                  {/* Institution */}
                  <p className="text-sm font-medium text-emerald-900">
                    {edu.institution}
                  </p>

                  {/* Thesis / Focus Highlight */}
                  {edu.thesis && (
                    <div className="mt-2.5 p-3 rounded-lg bg-emerald-50/70 border border-emerald-200/70 text-xs text-stone-800 font-light leading-relaxed">
                      <span className="font-mono-code text-emerald-800 font-semibold uppercase tracking-wider block mb-1">
                        Thesis Focus
                      </span>
                      {edu.thesis}
                    </div>
                  )}

                  {edu.focus && (
                    <p className="text-xs sm:text-sm text-stone-500 font-light leading-relaxed">
                      {edu.focus}
                    </p>
                  )}

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
