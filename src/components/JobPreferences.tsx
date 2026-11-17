"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Zap, Globe, Building2, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";

export default function JobPreferences() {
  const { language, isRTL, data } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const cards = [
    {
      key: "freelance" as const,
      data: data.preferences.freelance,
      icon: Zap,
      accent: "cyan",
      border: "border-cyan-500/40 hover:border-cyan-400",
      glow: "hover:shadow-[0_0_30px_rgba(0,240,255,0.25)]",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
      iconColor: "text-cyan-400",
      iconBg: "bg-cyan-500/20 border-cyan-500/40",
      cta: { en: "Start a Freelance Project", fa: "شروع پروژه فریلنس" },
    },
    {
      key: "remote" as const,
      data: data.preferences.remote,
      icon: Globe,
      accent: "purple",
      border: "border-purple-500/40 hover:border-purple-400",
      glow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
      iconColor: "text-purple-400",
      iconBg: "bg-purple-500/20 border-purple-500/40",
      cta: { en: "Hire for Remote Role", fa: "همکاری دورکاری" },
    },
    {
      key: "hybrid" as const,
      data: data.preferences.hybrid,
      icon: Building2,
      accent: "emerald",
      border: "border-emerald-500/40 hover:border-emerald-400",
      glow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      iconColor: "text-emerald-400",
      iconBg: "bg-emerald-500/20 border-emerald-500/40",
      cta: { en: "Discuss Hybrid Position", fa: "مذاکره همکاری هیبریدی" },
    },
  ];

  return (
    <section id="preferences" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-xs uppercase tracking-widest mb-3">
            <span>// COLLABORATION MODES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-100 tracking-tight">
            {isRTL ? "شیوه‌های همکاری و تمایلات کاری" : "Work Preferences & Availability"}
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-sm sm:text-base">
            {isRTL
              ? "انعطاف‌پذیر در مدل‌های مختلف کاری؛ آماده پیوستن به تیم‌های فنی پیشرو یا اجرای پروژه‌های چالش‌برانگیز."
              : "Flexible across modern engagement models. Ready to integrate into world-class engineering teams or lead specialized client MVPs."}
          </p>
        </div>

        {/* 3 Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.key}
                className={`group relative rounded-2xl cyber-glass p-7 border transition-all duration-300 flex flex-col justify-between ${item.border} ${item.glow}`}
              >
                <div>
                  {/* Top Bar: Icon + Status Badge */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.iconBg}`}
                    >
                      <Icon className={`w-6 h-6 ${item.iconColor}`} />
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${item.badgeColor} ${isRTL ? "font-fa" : "font-mono"}`}
                    >
                      {item.data.badge[language]}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-300 transition-colors">
                    {item.data.title[language]}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {item.data.description[language]}
                  </p>

                  {/* Bullet Perks */}
                  <div className="space-y-2.5 mb-8">
                    {item.data.perks[language].map((perk, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${item.iconColor}`}
                        />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-800 text-xs font-mono font-semibold text-slate-300 group-hover:text-cyan-400 transition-colors"
                >
                  <span>{item.cta[language]}</span>
                  <ArrowIcon className="w-4 h-4 transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
