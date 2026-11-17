"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Code2, Palette, Cpu, Server, Zap, Check, Star } from "lucide-react";

export default function SkillsBento() {
  const { language, isRTL, data } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const iconMap: Record<string, React.ElementType> = {
    Code2,
    Palette,
    Cpu,
    Server,
    Zap,
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs uppercase tracking-widest mb-3">
            <span>// TECH ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-100 tracking-tight">
            {isRTL ? "جعبه ابزار فنی و مهارت‌ها" : "Skills & Technical Stack"}
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-sm sm:text-base">
            {isRTL
              ? "مجموعه‌ای از ابزارها و فریم‌ورک‌های مدرن وب که در طول ۴ سال گذشته در پروژه‌های پرچالش و دی‌اپ‌های واقعی پیاده‌سازی کرده‌ام."
              : "Mastery over cutting-edge web technologies, state architectures, and full-stack development honed across 4+ years of production experience."}
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.skills.map((group, groupIdx) => {
            const Icon = iconMap[group.icon] || Code2;
            const isFeatured = groupIdx === 0 || groupIdx === 3;

            return (
              <div
                key={groupIdx}
                className={`cyber-glass rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between ${
                  isFeatured ? "lg:col-span-1 md:col-span-1" : ""
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-800">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-100 text-base">
                        {group.category[language]}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400">
                        {group.items.length} {isRTL ? "مهارت کلیدی" : "Core Technologies"}
                      </span>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3.5">
                    {group.items.map((skill, sIdx) => (
                      <div key={sIdx} className="group/item">
                        <div className="flex items-center justify-between text-xs mb-1.5">
                          <span className="font-medium text-slate-200 flex items-center gap-1.5">
                            {skill.featured && (
                              <Star className="w-3 h-3 text-cyan-400 fill-cyan-400" />
                            )}
                            {skill.name}
                          </span>
                          <span className="font-mono text-cyan-400 text-[11px]">
                            {skill.level}%
                          </span>
                        </div>
                        {/* Progress Bar with glowing fill */}
                        <div className="w-full h-1.5 bg-slate-800/80 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-700 group-hover/item:shadow-[0_0_8px_rgba(0,240,255,0.8)]"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtext info */}
                <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>PRODUCTION READY</span>
                  <span className="text-emerald-400">VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
