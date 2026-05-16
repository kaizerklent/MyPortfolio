"use client";
// components/HeroSection.tsx

import Image from "next/image";
import { Mail, Code2, ChevronDown, MapPin, GitFork, Link2, Globe } from "lucide-react";
import { PERSONAL, EXPERIENCE } from "../lib/data";

const Github = GitFork;
const Linkedin = Link2;
const Facebook = Globe;

export default function HeroSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20"
    >
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left Column ── */}
          <div className="space-y-8">
            {/* Availability badge */}
            {!PERSONAL.available && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-mono">
                <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                Currently interning · Graduating soon
              </div>
            )}

            {/* Name & Title */}
            <div>
              <p className="font-mono text-cyan-400 text-sm mb-3">Hello, I&apos;m</p>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight">
                Kaizer
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                  Klent
                </span>
              </h1>
              <p className="mt-4 text-lg text-white/50 font-mono">{PERSONAL.title}</p>
            </div>

            {/* Tagline */}
            <p className="text-white/60 leading-relaxed max-w-md">{PERSONAL.tagline}</p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-cyan-400 text-[#080b14] font-bold text-sm rounded hover:bg-cyan-300 transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-white/20 text-white/80 text-sm font-mono rounded hover:border-white/40 transition-colors"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5">
              {[
                { icon: Github, href: "https://github.com/kaizerklent" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/kaizer-klent-auceran-2b75b83b9/" },
                { icon: Facebook, href: "https://www.facebook.com/kaizer.klent.cagampang.auceran" },
                { icon: Mail, href: `mailto:${PERSONAL.email}` },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-cyan-400 transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Right Column ── */}
          <div className="flex flex-col gap-6">
            <div className="w-50 h-50 mx-auto rounded-2xl overflow-hidden border border-white/10 relative">
                <Image
                    src="/Profile.png"
                    alt="Kaizer Klent Auceran"
                    fill
                    className="object-cover object-top"
                    priority
                />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Experience", value: PERSONAL.experience },
                { label: "Projects", value: PERSONAL.projects },
                { label: "Certifications", value: PERSONAL.certifications },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="bg-white/[0.03] border border-white/5 rounded-xl p-4 text-center"
                >
                  <div className="text-2xl font-black text-white">{value}</div>
                  <div className="text-xs text-white/40 font-mono mt-1">{label}</div>
                </div>
              ))}
            </div>

            {/* Bio card */}
            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5">
              <p className="text-white/60 text-sm leading-relaxed">{PERSONAL.bio}</p>
              <div className="flex items-center gap-2 text-white/40 text-xs font-mono mt-3">
                <MapPin size={12} /> {PERSONAL.location}
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="space-y-3">
              {EXPERIENCE.map((e, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <div>
                    <p className="text-white text-sm font-bold">
                      {e.role}{" "}
                      <span className="text-cyan-400">@ {e.company}</span>
                    </p>
                    <p className="text-white/30 text-xs font-mono">{e.period}</p>
                    <p className="text-white/50 text-xs mt-1">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-16">
          <a
            href="#skills"
            className="flex flex-col items-center gap-2 text-white/30 hover:text-cyan-400 transition-colors"
          >
            <span className="text-xs font-mono">Scroll</span>
            <ChevronDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}