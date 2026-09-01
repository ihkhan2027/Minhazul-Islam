/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black relative selection:bg-emerald-900 selection:text-emerald-50">
      {/* Background subtle micro-grid overlay */}
      <div className="fixed inset-0 bg-grid-delicate pointer-events-none opacity-60 z-0" />

      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1">
          <Hero />
          <AboutSection />
          <ExpertiseSection />
          <ExperienceSection />
          <EducationSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}

