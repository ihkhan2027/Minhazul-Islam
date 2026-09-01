import { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenContactModal?: () => void;
}

export function Navbar({ onOpenContactModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAFAF9]/95 backdrop-blur-md border-b border-stone-200/80 py-3 shadow-md shadow-stone-900/10'
          : 'bg-[#FAFAF9]/80 backdrop-blur-sm py-4 border-b border-stone-200/50 shadow-sm shadow-stone-900/5'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand identity */}
        <a
          href="#"
          id="nav-brand-link"
          className="group flex items-baseline gap-2.5 focus:outline-none"
        >
          <span className="font-editorial text-2xl sm:text-3xl font-medium tracking-tight text-stone-900 group-hover:text-emerald-900 transition-colors">
            Minhajul Islam Tuhin
          </span>
          <span className="hidden sm:inline-block text-[11px] font-mono-code text-stone-500 uppercase tracking-widest pl-2 border-l border-stone-300">
            Microbiologist
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              id={`nav-link-${item.label.toLowerCase()}`}
              className="text-[13px] font-medium text-stone-600 hover:text-stone-900 transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[1.5px] after:bg-emerald-800 after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            id="nav-connect-button"
            className="ml-2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-sm shadow-emerald-600/30 hover:shadow-md hover:shadow-emerald-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="nav-mobile-toggle"
            aria-label="Toggle Navigation Menu"
            className="p-2 text-stone-700 hover:text-emerald-700 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAFAF9] border-b border-stone-200 px-6 py-6 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-stone-700 hover:text-emerald-700 py-1.5 border-b border-stone-100"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 w-full mt-2 py-2.5 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-sm font-semibold shadow-md shadow-emerald-600/25"
            >
              Let's Connect
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
