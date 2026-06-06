"use client";
// components/CertificatesSection.tsx

import { useState } from "react";
import { Award, X, ExternalLink, ChevronRight } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { CERTIFICATES } from "../lib/data";
import styles from "./CertificatesSection.module.css";

type Cert = (typeof CERTIFICATES)[0];

// ── PDF Preview Modal ─────────────────────────────────────────────────────────
function CertModal({ cert, onClose }: { cert: Cert; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0d1117]">

        {/* Header */}
        <div
          className={`flex items-center justify-between px-6 py-4 shrink-0 border-b border-white/5 ${styles.modalHeader}`}
          style={{ "--cert-color-10": `${cert.color}10` } as React.CSSProperties}
        >
          <div className="flex items-center gap-3">
            <div
              className={styles.iconBox}
              style={{ "--cert-color": cert.color, "--cert-color-20": `${cert.color}20`, "--cert-color-40": `${cert.color}40` } as React.CSSProperties}
            >
              <Award size={16} style={{ color: cert.color }} />
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-tight">{cert.title}</p>
              <p className="text-white/40 text-xs font-mono mt-0.5">{cert.issuer}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-all"
            >
              <ExternalLink size={12} /> Open
            </a>
            <button
              onClick={onClose}
              aria-label="Close certificate modal"
              className="w-8 h-8 flex items-center justify-center text-white/40 hover:text-white border border-white/10 rounded-lg hover:border-white/30 transition-all"
            >
              <X size={15} />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 overflow-hidden bg-[#080b14]">
          <iframe
            src={`${cert.pdf}#toolbar=0&navpanes=0`}
            className="w-full h-full min-h-[65vh]"
            title={cert.title}
          />
        </div>

        {/* Footer */}
        <div className="px-6 py-3 shrink-0 border-t border-white/5 flex items-center gap-6 bg-[#0d1117]">
          {[
            { label: "Issued", value: cert.date },
            { label: "Expires", value: cert.expires },
            { label: "ID", value: cert.credentialId },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-white/25 text-[10px] font-mono uppercase">{label}</p>
              <p className="text-white/60 text-xs mt-0.5 font-mono">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Certificate Card ──────────────────────────────────────────────────────────
function CertCard({ cert, onClick }: { cert: Cert; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`group relative text-left w-full overflow-hidden rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 bg-white/[0.02] hover:bg-white/[0.04] ${styles.certCard}`}
      style={{ "--cert-color": cert.color } as React.CSSProperties}
    >
      {/* PDF Thumbnail strip */}
      <div
        className={styles.thumbnailHeight}
      >
        {/* Iframe preview (clipped) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-t-2xl">
          <iframe
            src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
            className={styles.iframePreview}
            title={`${cert.title} preview`}
            tabIndex={-1}
          />
        </div>

        {/* Gradient overlay at bottom of thumbnail */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080b14] via-[#080b14]/40 to-transparent" />

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span
            className={styles.categoryBadge}
            style={{ "--cert-color": cert.color, "--cert-color-20": `${cert.color}20`, "--cert-color-30": `${cert.color}30` } as React.CSSProperties}
          >
            {cert.category}
          </span>
        </div>

        {/* View hint */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <div
            className={styles.viewHint}
            style={{ "--cert-color": cert.color, "--cert-color-30": `${cert.color}30`, "--cert-color-50": `${cert.color}50` } as React.CSSProperties}
          >
            <ExternalLink size={11} style={{ color: cert.color }} />
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5">
        <div className="flex items-start gap-3">
          <div
            className={styles.cardIcon}
            style={{ "--cert-color": cert.color, "--cert-color-15": `${cert.color}15`, "--cert-color-30": `${cert.color}30` } as React.CSSProperties}
          >
            <Award size={16} style={{ color: cert.color }} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-white text-sm font-bold leading-snug group-hover:text-white transition-colors line-clamp-2">
              {cert.title}
            </h3>
            <p className="text-white/40 text-xs mt-1 font-mono truncate">{cert.issuer}</p>
          </div>
        </div>

        {/* Dates row */}
        <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
          <div className="flex gap-4">
            <div>
              <p className="text-white/25 text-[10px] font-mono uppercase">Issued</p>
              <p className="text-white/55 text-xs mt-0.5">{cert.date}</p>
            </div>
            <div>
              <p className="text-white/25 text-[10px] font-mono uppercase">Expires</p>
              <p className="text-white/55 text-xs mt-0.5">{cert.expires}</p>
            </div>
          </div>
          <ChevronRight
            size={14}
            className="text-white/20 group-hover:text-white/60 group-hover:translate-x-0.5 transition-all"
          />
        </div>

        {/* Credential ID */}
        {cert.credentialId !== "—" && (
          <p className="text-white/20 text-[10px] font-mono mt-2 truncate">
            ID: {cert.credentialId}
          </p>
        )}
      </div>

      {/* Bottom accent line */}
      <div
        className={styles.bottomAccent}
        style={{ "--cert-color": cert.color } as React.CSSProperties}
      />
    </button>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function CertificatesSection() {
  const [selected, setSelected] = useState<Cert | null>(null);

  return (
    <section id="certificates" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="Certificates" title="Credentials & Badges" />
        <p className="text-white/40 text-sm mt-4 max-w-xl">
          Click any certificate to preview the full document.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {CERTIFICATES.map((c) => (
            <CertCard key={c.title} cert={c} onClick={() => setSelected(c)} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <CertModal cert={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}