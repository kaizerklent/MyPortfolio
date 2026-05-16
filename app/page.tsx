"use client";
// app/page.tsx
// ─────────────────────────────────────────────────────────────────────────────
// This file is the entry point. It only handles scroll-spy state and
// assembles all section components. Edit each component file individually.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect } from "react";
import { NAV_LINKS } from "./lib/data";

import Navbar            from "./components/Navbar";
import HeroSection       from "./components/HeroSection";
import SkillsSection     from "./components/SkillsSection";
import ProjectsSection   from "./components/ProjectsSection";
import CertificatesSection from "./components/CertificatesSection";
import ContactSection    from "./components/ContactSection";
import Footer            from "./components/Footer";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");

  // Scroll-spy: highlights the active nav link as you scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.3 }
    );

    NAV_LINKS.forEach((l) => {
      const el = document.getElementById(l.toLowerCase());
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-[#080b14] min-h-screen text-white selection:bg-cyan-400/20 selection:text-cyan-300">

      {/* Subtle grid background */}
      <div className="fixed inset-0 opacity-[0.025] pointer-events-none bg-[image:linear-gradient(rgba(0,229,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,1)_1px,transparent_1px)] bg-[length:60px_60px]" />

      <Navbar activeSection={activeSection} />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
      <Footer />

    </main>
  );
}