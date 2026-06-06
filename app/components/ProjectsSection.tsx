// components/ProjectsSection.tsx

import { GitFork, ArrowUpRight,} from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { PROJECTS } from "../lib/data";

const Github = GitFork;

// ── Types ─────────────────────────────────────────────────────────────────────
type Project = (typeof PROJECTS)[0];

// ── ProjectCard ───────────────────────────────────────────────────────────────
function ProjectCard({ project: p }: { project: Project }) {
  return (
    <div
      className={`group relative bg-gradient-to-br ${p.gradient} border border-white/5 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 flex flex-col gap-4 overflow-hidden`}
    >
      {/* Title & Links */}
      <div className="flex items-start justify-between">
        <h3 className="text-white font-bold text-lg">{p.title}</h3>
        <div className="flex gap-2">
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white transition-colors"
              aria-label={`View ${p.title} on GitHub`}
            >
              <Github size={16} />
            </a>
          )}
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white transition-colors"
              aria-label={`Open ${p.title} live`}
            >
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-white/50 text-sm leading-relaxed flex-1">{p.description}</p>

      {/* Tags & Stars */}
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {p.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/50"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── ProjectsSection ───────────────────────────────────────────────────────────
export default function ProjectsSection() {
  const featured = PROJECTS.filter((p) => p.featured);
  const more = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="Projects" title="Things I've Built" />
        <p className="text-white/40 text-sm mt-4 max-w-xl">
          A curated selection of projects — from open-source tools to production apps.
        </p>

        {/* Featured */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {featured.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

        {/* More */}
        <h3 className="text-white/40 text-xs font-mono uppercase tracking-widest mt-16 mb-6">
          More Projects
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {more.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}