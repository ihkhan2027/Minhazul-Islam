import { experienceList } from '../data/portfolioData';
import { MapPin, ShieldCheck, Award } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 md:py-28 border-b border-black/15"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 text-xs font-mono-code text-black/80 uppercase tracking-widest mb-8 font-medium">
          <span className="text-emerald-800 font-bold">[ 03 ]</span>
          <span>Industrial Experience</span>
          <div className="h-px bg-black/20 flex-1 max-w-[120px]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Visual context */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[38px] text-black font-semibold leading-[1.18]">
                Pharmaceutical Quality Control & Sterile Assurance.
              </h2>
              <p className="text-sm text-black/85 font-normal leading-relaxed">
                Demonstrated industrial tenure operating within state-of-the-art sterile manufacturing facilities, executing cGMP compliance, environmental trending, and microbiological validation.
              </p>
            </div>

            {/* Industrial cleanroom visual asset */}
            <div className="relative rounded-2xl overflow-hidden border border-black/15 bg-black/[0.03] shadow-md shadow-black/5 group">
              <img
                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80"
                alt="Sterile pharmaceutical cleanroom and quality control microbiology inspection"
                referrerPolicy="no-referrer"
                className="w-full h-56 object-cover contrast-105 filter brightness-95 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-emerald-950/10 mix-blend-multiply" />
              <div className="absolute bottom-0 inset-x-0 bg-black/85 backdrop-blur-xs text-white p-3 flex items-center justify-between text-xs font-mono-code">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Grade A Cleanroom Surveillance
                </span>
                <span className="text-white/80 text-[10px]">Parenteral Release</span>
              </div>
            </div>
          </div>

          {/* Right Column: Minimal Vertical Timeline */}
          <div className="lg:col-span-7 relative border-l border-emerald-300 pl-6 sm:pl-8 space-y-12">
            {experienceList.map((exp) => (
              <div
                key={exp.id}
                id={`experience-${exp.id}`}
                className="relative group"
              >
                {/* Minimal timeline node marker */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-emerald-600 bg-emerald-100 group-hover:bg-emerald-600 group-hover:border-emerald-700 transition-colors shadow-xs" />

                <div className="space-y-3">
                  
                  {/* Period & Location */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono-code text-black/80 font-medium">
                    <span className="text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">{exp.period}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-black/85">
                      <MapPin className="w-3 h-3 text-emerald-700" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Role and Organization */}
                  <div className="space-y-0.5">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-black font-editorial">
                      {exp.company}
                    </h3>
                    <p className="text-sm font-semibold text-emerald-800">
                      {exp.role}
                    </p>
                  </div>

                  {/* Concise Summary */}
                  <p className="text-sm text-black/85 font-normal leading-relaxed max-w-2xl">
                    {exp.summary}
                  </p>

                  {/* Minimal Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block text-[11px] font-mono-code font-medium text-emerald-950 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
