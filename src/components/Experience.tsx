"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Briefcase, Calendar, MapPin, ExternalLink, CheckCircle } from "lucide-react";

export default function Experience() {
  const { language, isRTL, data } = useLanguage();

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-xs uppercase tracking-widest mb-3">
            <span>// CAREER JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-100 tracking-tight">
            {isRTL ? "سوابق کاری و تجربیات حرفه‌ای" : "Work Experience & History"}
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-sm sm:text-base">
            {isRTL
              ? "مسیر رشد حرفه‌ای من در نقش توسعه‌دهنده فرانت‌اند و راهبر فنی در شرکت‌های وب۳، پروژه‌های فریلنس و سامانه‌های سازمانی."
              : "A four-year trajectory leading frontend architectures, high-performance Web3 solutions, and enterprise products."}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 rtl:border-r-2 rtl:border-l-0 border-slate-800 ml-4 rtl:ml-0 rtl:mr-4 md:ml-8 rtl:md:mr-8 space-y-12">
          {data.experience.map((item, idx) => (
            <div key={idx} className="relative pl-6 rtl:pl-0 rtl:pr-6 group">
              {/* Glowing Node Dot */}
              <div className="absolute -left-[9px] rtl:-left-auto rtl:-right-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:shadow-[0_0_15px_#00f0ff] transition-all" />

              {/* Experience Card */}
              <div className="cyber-glass rounded-2xl p-6 sm:p-8 border border-slate-800 group-hover:border-cyan-500/40 transition-all duration-300">
                {/* Header: Role & Period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {item.role[language]}
                    </h3>
                    <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm mt-1">
                      <span>{item.company[language]}</span>
                      {item.liveUrl && (
                        <a
                          href={item.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-cyan-300 transition-colors"
                          title="Visit Company Website"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                      <Calendar className="w-3 h-3 text-cyan-400" />
                      <span>{item.period[language]}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300">
                      <span>{item.type[language]}</span>
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {item.description[language]}
                </p>

                {/* Bullet Points */}
                <div className="space-y-2.5 mb-6">
                  {item.bulletPoints[language].map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                  {item.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800 group-hover:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
