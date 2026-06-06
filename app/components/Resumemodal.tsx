"use client";
// components/ResumeModal.tsx
//
// HOW TO USE:
// 1. Put your resume file in the /public folder:
//      - PDF  → /public/resume.pdf
//      - Image → /public/resume.png  (or .jpg / .webp)
// 2. Set RESUME_FILE and RESUME_TYPE below to match your file.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect } from "react";
import { X, Download, Printer } from "lucide-react";
import Image from "next/image";

// ── CONFIG — change these two lines to match your file ───────────────────────
const RESUME_FILE = "/CV.pdf";       // path inside /public
const RESUME_TYPE: "pdf" | "image" = "pdf"; // "pdf" or "image"
// ─────────────────────────────────────────────────────────────────────────────

type ResumeModalProps = {
  onClose: () => void;
};

export default function ResumeModal({ onClose }: ResumeModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    // Prevent background scroll while modal is open
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handlePrint = () => {
    const printWindow = window.open(RESUME_FILE, "_blank");
    printWindow?.addEventListener("load", () => printWindow.print());
  };

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={(e) => {
        // Close when clicking outside the modal box
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Modal Box */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0d1117] border border-white/10 rounded-2xl flex flex-col overflow-hidden shadow-2xl">

        {/* ── Header ── */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 shrink-0">
          <div>
            <p className="text-cyan-400 font-mono text-xs uppercase tracking-widest">
              Resume
            </p>
            <h2 className="text-white font-bold text-lg mt-0.5">
              Kaizer Klent Auceran
            </h2>
          </div>

          {/* Close Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="w-9 h-9 flex items-center justify-center text-white/40 hover:text-white border border-white/10 rounded-lg hover:border-white/30 transition-all"
              aria-label="Close resume"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* ── Content ── */}
        <div className="flex-1 overflow-auto bg-[#080b14] rounded-b-2xl">
          {RESUME_TYPE === "pdf" ? (
            // PDF viewer using native browser <iframe>
            <iframe
              src={`${RESUME_FILE}#toolbar=0&navpanes=0`}
              className="w-full h-full min-h-[70vh]"
              title="Resume PDF"
            />
          ) : (
            // Image viewer (PNG / JPG / WEBP)
            <div className="flex items-center justify-center p-6">
              <div className="relative w-full max-w-2xl">
                <Image
                  src={RESUME_FILE}
                  alt="Kaizer Klent Auceran Resume"
                  width={800}
                  height={1100}
                  className="w-full h-auto rounded-lg shadow-xl border border-white/5"
                  priority
                />
              </div>
            </div>
          )}
        </div>

        {/* ── Footer Actions (after preview) ── */}
        <div className="px-6 py-4 border-t border-white/5 shrink-0 flex items-center justify-end gap-3 bg-[#0d1117]">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 text-sm font-mono text-white/60 border border-white/10 rounded-lg hover:border-white/30 hover:text-white transition-all"
          >
            <Printer size={14} />
            <span className="hidden sm:inline">Print</span>
          </button>

          <a
            href={RESUME_FILE}
            download="Kaizer_Klent_Auceran_Resume"
            className="flex items-center gap-2 px-4 py-2 text-sm font-mono bg-cyan-400 text-[#080b14] font-bold rounded-lg hover:bg-cyan-300 transition-colors"
          >
            <Download size={14} />
            <span className="hidden sm:inline">Download</span>
          </a>
        </div>

      </div>
    </div>
  );
}