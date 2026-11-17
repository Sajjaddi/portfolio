"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Copy,
  Check,
  Send,
  ExternalLink,
  Code2,
  Layers,
  Database,
  ShieldCheck,
  Download,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TelegramIcon } from "./SocialIcons";

export default function Hero() {
  const { language, isRTL, data } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Neon Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/15 via-purple-600/15 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Intro */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-start">
            {/* Live Availability Tag */}
            <div className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-xs font-medium shadow-[0_0_15px_rgba(16,185,129,0.2)] mb-6 ${isRTL ? "font-fa" : "font-mono"}`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{data.personal.status[language]}</span>
            </div>

            {/* Name & Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4">
              <span className="block text-slate-100">{data.personal.name[language]}</span>
            </h1>

            {/* Subtitle / Role Tag */}
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm sm:text-base font-semibold mb-6">
              <span className="text-purple-400">&gt;</span>
              <span>{data.personal.title[language]}</span>
            </div>

            {/* Bio summary */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              {data.personal.bio[language]}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 hover:from-cyan-300 hover:to-cyan-200 shadow-[0_0_25px_rgba(0,240,255,0.45)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{isRTL ? "مشاهده پروژه‌ها" : "View Live Projects"}</span>
                <ArrowIcon className="w-4 h-4" />
              </a>

              <a
                href="/Sajjad_Jahani_CV.pdf"
                download="Sajjad_Jahani_CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-cyan-300 cyber-glass border border-cyan-500/40 hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>{isRTL ? "دانلود رزومه (PDF)" : "Download CV"}</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-medium text-sm text-slate-200 cyber-glass border border-slate-700 hover:border-cyan-500/50 hover:text-cyan-400 transition-all transform hover:-translate-y-0.5"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 text-xs">
                      {isRTL ? "کپی شد!" : "Email Copied!"}
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span className="text-xs">{data.personal.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links Strip */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80 w-full justify-center lg:justify-start">
              <span className="text-xs font-mono text-slate-400">
                {isRTL ? "راه‌های ارتباطی:" : "Connect:"}
              </span>

              <a
                href={data.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg cyber-glass border border-slate-700/60 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_12px_rgba(0,240,255,0.3)] transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={data.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg cyber-glass border border-slate-700/60 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_12px_rgba(0,240,255,0.3)] transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={data.personal.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg cyber-glass border border-slate-700/60 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_12px_rgba(0,240,255,0.3)] transition-all"
                aria-label="Telegram"
              >
                <TelegramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Photo in Cyberpunk Frame & Floating Badges */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-72 sm:w-84 md:w-96 aspect-[3/4]">
              {/* Animated Glowing Outer Ring */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-cyan-500 via-purple-600 to-pink-500 opacity-60 blur-xl animate-cyber-pulse" />

              {/* Futuristic Cyber Frame Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden p-1.5 bg-gradient-to-b from-cyan-500/40 via-purple-500/30 to-slate-900 border border-cyan-500/40 shadow-[0_0_40px_rgba(0,240,255,0.25)]">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-950">
                  <Image
                    src="/sajjad.jpg"
                    alt="Sajjad Jahani - Front-End & Full-Stack Developer"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040711] via-transparent to-transparent opacity-50" />

                  {/* Corner Tech Brackets */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />

                  {/* Terminal Status pill */}
                  <div className="absolute bottom-3 left-3 right-3 cyber-glass py-2 px-3 rounded-lg border border-cyan-500/30 text-center font-mono text-[11px] text-cyan-300">
                    <span className="text-emerald-400 mr-1 font-bold">●</span>
                    <span>ONLINE // READY TO BUILD</span>
                  </div>
                </div>
              </div>

              {/* Floating Tech Chips */}
              <div className="absolute -top-3 -right-3 cyber-glass px-3 py-1.5 rounded-xl border border-cyan-500/50 shadow-[0_0_15px_rgba(0,240,255,0.3)] flex items-center gap-1.5 text-xs font-mono text-cyan-300">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Next.js 16</span>
              </div>

              <div className="absolute top-1/2 -left-6 cyber-glass px-3 py-1.5 rounded-xl border border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.3)] flex items-center gap-1.5 text-xs font-mono text-purple-300">
                <Layers className="w-3.5 h-3.5 text-purple-400" />
                <span>20+ DApps</span>
              </div>

              <div className="absolute -bottom-3 -right-4 cyber-glass px-3 py-1.5 rounded-xl border border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.3)] flex items-center gap-1.5 text-xs font-mono text-emerald-300">
                <Database className="w-3.5 h-3.5 text-emerald-400" />
                <span>NestJS + Postgres</span>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Highlights Bar / Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-slate-800/80">
          <div className="cyber-glass p-5 rounded-2xl border border-cyan-500/20 text-center hover:border-cyan-500/50 transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-cyan-400 cyber-glow-cyan mb-1">
              4+
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium">
              {isRTL ? "سال تجربه حرفه‌ای" : "Years Experience"}
            </div>
            <div className="text-[11px] text-slate-500 font-mono mt-1">
              {isRTL ? "توسعه وب و فرانت‌اند" : "Frontend & Web3"}
            </div>
          </div>

          <div className="cyber-glass p-5 rounded-2xl border border-purple-500/20 text-center hover:border-purple-500/50 transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-purple-400 cyber-glow-purple mb-1">
              20+
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium">
              {isRTL ? "دی‌اپ و سامانه منتشر شده" : "DApps & Web Apps"}
            </div>
            <div className="text-[11px] text-slate-500 font-mono mt-1">
              {isRTL ? "روی وب و تلگرام" : "Production Shipped"}
            </div>
          </div>

          <div className="cyber-glass p-5 rounded-2xl border border-emerald-500/20 text-center hover:border-emerald-500/50 transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-400 mb-1">
              10k+
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium">
              {isRTL ? "کاربر پلتفرم سرمایه‌گذاری" : "Active Platform Users"}
            </div>
            <div className="text-[11px] text-slate-500 font-mono mt-1">
              {isRTL ? "سیستم‌های مقیاس بالا" : "High-Concurrency UI"}
            </div>
          </div>

          <div className="cyber-glass p-5 rounded-2xl border border-amber-500/20 text-center hover:border-amber-500/50 transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-amber-400 mb-1">
              Full-Stack
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium">
              {isRTL ? "سازنده مستقل فول‌استک" : "End-to-End Solo Builder"}
            </div>
            <div className="text-[11px] text-slate-500 font-mono mt-1">
              {isRTL ? "Next.js + NestJS" : "CalFit SaaS & APIs"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
