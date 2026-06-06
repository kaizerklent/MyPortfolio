"use client";
// components/ContactSection.tsx

import { useState } from "react";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { PERSONAL } from "../lib/data";

const FORMSPREE_ID = "xvznzbwe";

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setFormState("success");
        form.reset();
      } else {
        const json = await res.json();
        setErrorMsg(json?.errors?.[0]?.message ?? "Something went wrong. Please try again.");
        setFormState("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setFormState("error");
    }
  }

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
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block text-white/40 text-xs font-mono mb-2">NAME</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Juan Dela Cruz"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-cyan-400/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white/40 text-xs font-mono mb-2">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="juan@company.com"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-cyan-400/50 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-white/40 text-xs font-mono mb-2">SUBJECT</label>
              <input
                type="text"
                name="subject"
                required
                placeholder="Project inquiry / Job opportunity"
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-cyan-400/50 transition-colors"
              />
            </div>

            <div>
              <label className="block text-white/40 text-xs font-mono mb-2">MESSAGE</label>
              <textarea
                rows={5}
                name="message"
                required
                placeholder="Tell me about your project..."
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-cyan-400/50 transition-colors resize-none"
              />
            </div>

            {/* Success message */}
            {formState === "success" && (
              <div className="px-4 py-3 rounded-xl bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 text-sm font-mono">
                ✓ Message sent! I&apos;ll get back to you soon.
              </div>
            )}

            {/* Error message */}
            {formState === "error" && (
              <div className="px-4 py-3 rounded-xl bg-red-400/10 border border-red-400/30 text-red-400 text-sm font-mono">
                ✕ {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={formState === "sending" || formState === "success"}
              className="w-full py-4 bg-cyan-400 text-[#080b14] font-bold rounded-xl hover:bg-cyan-300 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formState === "sending" ? "Sending..." : formState === "success" ? "Message Sent ✓" : "Send Message →"}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}