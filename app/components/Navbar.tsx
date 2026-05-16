"use client";
// components/Navbar.tsx

import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { NAV_LINKS } from "../lib/data";

type NavbarProps = {
  activeSection: string;
};

export default function Navbar({ activeSection }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#080b14]/90 backdrop-blur-xl border-b border-white/5"
          : "py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#about"
          className="font-mono text-cyan-400 text-lg font-bold tracking-tight"
        >
          KK<span className="text-white/30">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l: string) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className={`text-sm font-mono transition-colors duration-200 ${
                activeSection === l.toLowerCase()
                  ? "text-cyan-400"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {l}
            </a>
          ))}
          {/* TODO: Replace href="#" with your actual resume PDF link */}
          <a
            href="#"
            className="ml-4 px-4 py-2 border border-cyan-400/50 text-cyan-400 text-sm font-mono rounded hover:bg-cyan-400/10 transition-colors flex items-center gap-2"
          >
            <Download size={14} /> Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white/70"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#080b14]/95 backdrop-blur-xl border-b border-white/5 px-6 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-white/70 font-mono text-sm hover:text-cyan-400 transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}