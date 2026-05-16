// components/SkillsSection.tsx

import SectionHeader from "../components/SectionHeader";
import { SKILLS } from "../lib/data";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="Skills" title="What I Work With" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
          {SKILLS.map(({ category, icon: Icon, items, color }) => (
            <div
              key={category}
              className="group bg-white/[0.03] border border-white/5 rounded-2xl p-6 hover:border-white/15 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-lg mb-5 flex items-center justify-center"
                style={{
                  background: `${color}20`,
                  border: `1px solid ${color}30`,
                }}
              >
                <Icon size={18} style={{ color }} />
              </div>

              {/* Category Name */}
              <h3 className="text-white font-bold mb-4">{category}</h3>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-mono px-2 py-1 rounded-md bg-white/5 text-white/60 group-hover:text-white/80 transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}