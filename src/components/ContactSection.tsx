import { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight, Linkedin } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
    } catch (err) {
      console.warn('Clipboard write fallback error:', err);
    }
  };

  const handleCopyEmail = async () => {
    await copyToClipboard(contactInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = async () => {
    if (contactInfo.phone) {
      await copyToClipboard(contactInfo.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-[#F5F5F3]/50"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 text-xs font-mono-code text-stone-500 uppercase tracking-widest mb-8">
          <span className="text-emerald-800 font-semibold">[ 05 ]</span>
          <span>Inquiries & Communication</span>
          <div className="h-px bg-stone-200 flex-1 max-w-[120px]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="font-editorial text-4xl sm:text-5xl text-stone-900 leading-[1.12]">
              Let’s Connect.
            </h2>
            <p className="text-base text-stone-600 font-light leading-relaxed">
              Open for professional scientific collaboration, quality control consultancy, environmental research discussions, and academic inquiries.
            </p>

            <div className="pt-4 flex items-center gap-2 text-xs font-mono-code text-stone-500">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Available for scientific roles in Germany & Europe</span>
            </div>
          </div>

          {/* Right Column: Clean, Direct Contact Information */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Email Card / Block */}
            <div className="p-6 rounded-xl bg-white border border-stone-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-mono-code uppercase tracking-wider text-stone-400">
                  Electronic Mail
                </span>
                <div className="text-lg font-medium text-stone-900">
                  {contactInfo.email}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  id="contact-copy-email-btn"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border-2 border-emerald-600/30 hover:border-emerald-600 bg-emerald-50/50 hover:bg-emerald-100/60 text-xs font-semibold text-emerald-900 transition-all shadow-xs"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Copy</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${contactInfo.email}`}
                  id="contact-mailto-btn"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-semibold shadow-md shadow-emerald-600/30 hover:shadow-lg hover:shadow-emerald-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
                >
                  <span>Compose</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Direct details grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phone info */}
              {contactInfo.phone && (
                <div className="p-5 rounded-xl bg-white border border-stone-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between space-y-2">
                  <div className="space-y-1">
                    <span className="text-xs font-mono-code uppercase tracking-wider text-stone-400">
                      Telephone
                    </span>
                    <div className="text-sm font-medium text-stone-800">
                      {contactInfo.phone}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={handleCopyPhone}
                      className="text-xs text-emerald-700 hover:text-emerald-900 font-medium inline-flex items-center gap-1 bg-emerald-50/70 hover:bg-emerald-100/80 px-2.5 py-1 rounded-md border border-emerald-200/60 transition-colors"
                    >
                      {copiedPhone ? <Check className="w-3 h-3 text-emerald-700" /> : <Copy className="w-3 h-3" />}
                      {copiedPhone ? 'Copied' : 'Copy number'}
                    </button>
                  </div>
                </div>
              )}

              {/* Location info */}
              <div className="p-5 rounded-xl bg-white border border-stone-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-2">
                <span className="text-xs font-mono-code uppercase tracking-wider text-stone-400">
                  Location & Base
                </span>
                <div className="text-sm font-medium text-stone-800 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-800" />
                  <span>{contactInfo.location}</span>
                </div>
                <p className="text-xs text-stone-500 font-mono-code">
                  Coords: {contactInfo.coordinates}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
