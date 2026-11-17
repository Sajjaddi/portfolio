"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, Globe, Terminal, Sparkles, Send, Download } from "lucide-react";

export default function Navbar() {
  const { language, toggleLanguage, isRTL, data } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: { en: "About", fa: "درباره من" } },
    { href: "#preferences", label: { en: "Preferences", fa: "شیوه همکاری" } },
    { href: "#skills", label: { en: "Skills", fa: "مهارت‌ها" } },
    { href: "#projects", label: { en: "Projects", fa: "پروژه‌ها" } },
    { href: "#experience", label: { en: "Experience", fa: "سوابق کاری" } },
    { href: "#contact", label: { en: "Contact", fa: "ارتباط با من" } },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#040711]/85 backdrop-blur-md border-b border-cyan-500/15 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Terminal Monogram */}
          <a
            href="#"
            className="group flex items-center gap-2.5 font-mono text-lg font-bold tracking-wider text-slate-100 hover:text-cyan-400 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
              <Terminal className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="flex flex-col">
              <span className="flex items-center gap-1.5">
                <span className="text-cyan-400">&lt;</span>
                <span className="gradient-text-cyan font-extrabold tracking-wide">
                  SJ
                </span>
                <span className="text-cyan-400">/&gt;</span>
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-sans">
                {isRTL ? "مهندس نرم‌افزار" : "Software Engineer"}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
              >
                {link.label[language]}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-700/80 bg-slate-900/60 text-xs font-semibold text-slate-200 hover:border-cyan-500/60 hover:text-cyan-400 hover:shadow-[0_0_12px_rgba(0,240,255,0.25)] transition-all"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>{language === "en" ? "فارسی" : "English"}</span>
            </button>

            {/* Download CV CTA */}
            <a
              href="/Sajjad_Jahani_CV.pdf"
              download="Sajjad_Jahani_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-cyan-300 cyber-glass border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(0,240,255,0.25)] transition-all"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>{isRTL ? "دانلود رزومه" : "Download CV"}</span>
            </a>

            {/* Quick Contact CTA */}
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 shadow-[0_0_20px_rgba(0,240,255,0.35)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] transition-all active:scale-95"
            >
              <Send className="w-3.5 h-3.5 text-black" />
              <span>{isRTL ? "همکاری با من" : "Hire Me"}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className="px-2.5 py-1 rounded-md border border-slate-700 bg-slate-900 text-xs font-semibold text-cyan-400"
            >
              {language === "en" ? "FA" : "EN"}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-800/80"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden cyber-glass border-b border-cyan-500/30 px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-cyan-500/10"
              >
                {link.label[language]}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800 mt-2 flex flex-col gap-2">
              <a
                href="/Sajjad_Jahani_CV.pdf"
                download="Sajjad_Jahani_CV.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold text-cyan-300 cyber-glass border border-cyan-500/40"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>{isRTL ? "دانلود رزومه (PDF)" : "Download CV"}</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-lg text-sm font-bold text-black bg-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.4)]"
              >
                {isRTL ? "همکاری با من" : "Hire Me"}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
