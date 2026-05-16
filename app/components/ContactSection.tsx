// components/ContactSection.tsx

import { Mail, Phone, MapPin, Globe } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { PERSONAL } from "../lib/data";

export default function ContactSection() {
  return (
    <section id="contact" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="Contact" title="Let's Work Together" />

        <div className="grid lg:grid-cols-2 gap-16 mt-16">

          {/* ── Left: Contact Info ── */}
          <div className="space-y-6">
            <p className="text-white/50 leading-relaxed">
              I&apos;m open to conversations about internship extensions, part-time work,
              or freelance projects. My inbox is always open — feel free to reach out!
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: PERSONAL.email,
                  href: `mailto:${PERSONAL.email}`,
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: PERSONAL.phone,
                  href: "#",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: PERSONAL.location,
                  href: "#",
                },
                {
                  icon: Globe,
                  label: "Facebook",
                  value: PERSONAL.facebook,
                  href: "https://www.facebook.com/kaizer.klent.cagampang.auceran",
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400/20 transition-colors">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-white/30 text-xs font-mono">{label}</p>
                    <p className="text-white/70 text-sm group-hover:text-white transition-colors">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: Contact Form ── */}
          {/* TODO: Wire up form submission (e.g. Formspree, EmailJS, or API route) */}
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block text-white/40 text-xs font-mono mb-2">NAME</label>
                <input
                  type="text"
                  placeholder="Juan Dela Cruz"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-cyan-400/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white/40 text-xs font-mono mb-2">EMAIL</label>
                <input
                  type="email"
                  placeholder="juan@company.com"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-cyan-400/50 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-white/40 text-xs font-mono mb-2">SUBJECT</label>
              <input
                type="text"
                placeholder="Project inquiry / Job opportunity"
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-cyan-400/50 transition-colors"
              />
            </div>

            <div>
              <label className="block text-white/40 text-xs font-mono mb-2">MESSAGE</label>
              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-cyan-400/50 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-cyan-400 text-[#080b14] font-bold rounded-xl hover:bg-cyan-300 transition-colors text-sm"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}