"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { GraduationCap, Award, Calendar } from "lucide-react";

export default function Education() {
  const { language, isRTL, data } = useLanguage();

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs uppercase tracking-widest mb-3">
            <span>// ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-100 tracking-tight">
            {isRTL ? "تحصیلات دانشگاهی" : "Education & Academic Credentials"}
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-sm sm:text-base">
            {isRTL
              ? "تحصیلات دانشگاهی در رشته مهندسی نرم‌افزار و فناوری اطلاعات."
              : "Academic foundation in software engineering, computational algorithms, and computer systems."}
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.education.map((edu, idx) => (
            <div
              key={idx}
              className="cyber-glass rounded-2xl p-7 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <GraduationCap className="w-6 h-6 text-cyan-400" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    <span>{edu.period}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-100 mb-2">
                  {edu.degree[language]}
                </h3>
                <div className="text-cyan-400 font-mono text-xs sm:text-sm mb-4">
                  {edu.institution[language]}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {edu.description[language]}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>VERIFIED DEGREE</span>
                <span className="text-emerald-400">GRADUATED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
