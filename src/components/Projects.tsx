"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ProjectItem } from "@/data/portfolioData";
import { ExternalLink, Sparkles, Layers, Cpu, Globe, ArrowUpRight } from "lucide-react";

export default function Projects() {
  const { language, isRTL, data } = useLanguage();
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: { en: "All Projects", fa: "همه پروژه‌ها" } },
    { id: "fullstack", label: { en: "Full-Stack SaaS", fa: "فول‌استک" } },
    { id: "web3", label: { en: "Web3 & DApps", fa: "وب۳ و دی‌اپ" } },
    { id: "client", label: { en: "Client & Enterprise", fa: "سازمانی و تجاری" } },
  ];

  const filteredProjects =
    filter === "all"
      ? data.projects
      : data.projects.filter((p) => p.category === filter);

  const getAccentStyles = (accent: ProjectItem["accentColor"]) => {
    switch (accent) {
      case "cyan":
        return {
          border: "border-cyan-500/30 hover:border-cyan-400",
          glow: "hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]",
          badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
          button: "bg-cyan-400 text-black hover:bg-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.4)]",
          titleHover: "group-hover:text-cyan-300",
        };
      case "purple":
        return {
          border: "border-purple-500/30 hover:border-purple-400",
          glow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
          badge: "bg-purple-500/10 text-purple-400 border-purple-500/30",
          button: "bg-purple-500 text-white hover:bg-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.4)]",
          titleHover: "group-hover:text-purple-300",
        };
      case "emerald":
        return {
          border: "border-emerald-500/30 hover:border-emerald-400",
          glow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]",
          badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
          button: "bg-emerald-400 text-black hover:bg-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.4)]",
          titleHover: "group-hover:text-emerald-300",
        };
      case "amber":
      default:
        return {
          border: "border-amber-500/30 hover:border-amber-400",
          glow: "hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]",
          badge: "bg-amber-500/10 text-amber-400 border-amber-500/30",
          button: "bg-amber-400 text-black hover:bg-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.4)]",
          titleHover: "group-hover:text-amber-300",
        };
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs uppercase tracking-widest mb-3">
            <span>// PROVEN TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-100 tracking-tight">
            {isRTL ? "پروژه‌ها و نمونه کارهای زنده" : "Featured Works & Live Projects"}
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-sm sm:text-base">
            {isRTL
              ? "مجموعه‌ای از سامانه‌های زنده و پروداکشن، از وب‌اپلیکیشن‌های فول‌استک تا دی‌اپ‌های وب۳ و پلتفرم‌های پزشکی و سازمانی."
              : "Real production applications currently deployed and serving users, ranging from full-stack solo architectures to high-traffic Web3 systems."}
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl cyber-glass border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  filter === cat.id
                    ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 shadow-[0_0_12px_rgba(0,240,255,0.3)]"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                }`}
              >
                {cat.label[language]}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const styles = getAccentStyles(project.accentColor);

            return (
              <div
                key={project.id}
                className={`group relative rounded-2xl cyber-glass p-7 border transition-all duration-300 flex flex-col justify-between ${styles.border} ${styles.glow}`}
              >
                <div>
                  {/* Top Bar: Role & Period */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${styles.badge} ${isRTL ? "font-fa" : "font-mono"}`}
                    >
                      {project.role[language]}
                    </span>
                    <span className={`text-xs text-slate-500 ${isRTL ? "font-fa" : "font-mono"}`}>
                      {project.period}
                    </span>
                  </div>

                  {/* Title & Live Link Button */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3
                      className={`text-xl sm:text-2xl font-bold text-slate-100 transition-colors ${styles.titleHover}`}
                    >
                      {project.title[language]}
                    </h3>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold font-mono uppercase shrink-0 transition-all hover:scale-105 active:scale-95 bg-slate-800 text-cyan-400 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                      title="Open Live Website"
                    >
                      <span>LIVE</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {project.description[language]}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-6 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                      {isRTL ? "// نکات کلیدی پیاده‌سازی:" : "// ARCHITECTURAL HIGHLIGHTS:"}
                    </div>
                    {project.highlights[language].map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="text-cyan-400 font-mono mt-0.5">›</span>
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tags Strip & Direct Action */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:underline"
                  >
                    <span>{isRTL ? "مشاهده آنلاین" : "Launch App"}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
