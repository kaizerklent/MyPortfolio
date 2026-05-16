// components/CertificatesSection.tsx

import { Award } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { CERTIFICATES } from "../lib/data";

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="Certificates" title="Credentials & Badges" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {CERTIFICATES.map((c) => (
            <div
              key={c.title}
              className="group bg-white/[0.03] border border-white/5 rounded-2xl p-6 hover:border-white/15 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: `${c.color}15`,
                    border: `1px solid ${c.color}30`,
                  }}
                >
                  <Award size={20} style={{ color: c.color }} />
                </div>
                <div>
                  <h3 className="text-white text-sm font-bold leading-tight">{c.title}</h3>
                  <p className="text-white/40 text-xs mt-1">{c.issuer}</p>
                </div>
              </div>

              {/* Dates */}
              <div className="mt-4 pt-4 border-t border-white/5 grid grid-cols-2 gap-3">
                <div>
                  <p className="text-white/30 text-[10px] font-mono uppercase">Issued</p>
                  <p className="text-white/60 text-xs mt-0.5">{c.date}</p>
                </div>
                <div>
                  <p className="text-white/30 text-[10px] font-mono uppercase">Expires</p>
                  <p className="text-white/60 text-xs mt-0.5">{c.expires}</p>
                </div>
              </div>

              {/* Credential ID */}
              <p className="text-white/20 text-[10px] font-mono mt-3">
                ID: {c.credentialId}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}