"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUp, Terminal, Heart } from "lucide-react";

export default function Footer() {
  const { language, isRTL, data } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-900 bg-[#02050c] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Terminal status & Monogram */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="font-mono text-xs font-bold text-slate-200">
                SAJJAD JAHANI
              </div>
              <div className="font-mono text-[11px] text-cyan-400 flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>SYSTEM STATUS // DEPLOYED</span>
              </div>
            </div>
          </div>

          {/* Middle: Tech Note */}
          <div className="text-center text-xs text-slate-400 font-mono">
            {isRTL
              ? "طراحی و توسعه با Next.js 16، تایپ‌اسکریپت و Tailwind CSS"
              : "Engineered with Next.js 16, TypeScript & Tailwind CSS"}
          </div>

          {/* Right: Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl cyber-glass border border-slate-800 text-xs font-mono text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
          >
            <span>{isRTL ? "بازگشت به بالا" : "Back to top"}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-900/80 text-center text-xs text-slate-400 font-mono">
          © 2026 Sajjad Jahani. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
