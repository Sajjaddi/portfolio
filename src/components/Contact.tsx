"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Mail,
  Send,
  Copy,
  Check,
  MessageSquare,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Download,
  FileText,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TelegramIcon } from "./SocialIcons";

export default function Contact() {
  const { language, isRTL, data } = useLanguage();
  const [copiedType, setCopiedType] = useState<string | null>(null);

  // Quick form state
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    type: "Freelance",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Collaboration Inquiry: ${formData.type} - ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Sajjad,\n\nName: ${formData.name}\nContact: ${formData.contact}\nInterest: ${formData.type}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:${data.personal.email}?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-t from-cyan-500/15 via-purple-600/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs uppercase tracking-widest mb-3">
            <span>// LET&apos;S BUILD SOMETHING GREAT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-100 tracking-tight">
            {isRTL ? "ارتباط و شروع همکاری" : "Get In Touch & Collaborate"}
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-sm sm:text-base">
            {isRTL
              ? "برای بررسی پروژه‌های جدید، موقعیت‌های شغلی تمام‌وقت یا مشاوره فنی، از طریق راه‌های زیر با من در ارتباط باشید."
              : "Have an exciting project, full-time remote opportunity, or frontend challenge? Reach out directly via email, Telegram, or message."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Methods */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="cyber-glass rounded-2xl p-5 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">EMAIL</div>
                  <a
                    href={`mailto:${data.personal.email}`}
                    className="text-sm font-semibold text-slate-100 hover:text-cyan-400 transition-colors"
                  >
                    {data.personal.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(data.personal.email, "email")}
                className="p-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 transition-all"
                title="Copy Email"
              >
                {copiedType === "email" ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Download Resume Card */}
            <a
              href="/Sajjad_Jahani_CV.pdf"
              download="Sajjad_Jahani_CV.pdf"
              className="cyber-glass rounded-2xl p-5 border border-slate-800 hover:border-emerald-500/40 transition-all flex items-center justify-between group block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className={`text-xs text-slate-400 ${isRTL ? "font-fa" : "font-mono"}`}>
                    {isRTL ? "رزومه رسمی" : "CURRICULUM VITAE"}
                  </div>
                  <div className="text-sm font-semibold text-slate-100 group-hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                    <span>{isRTL ? "دانلود فایل رزومه (PDF)" : "Download Resume PDF"}</span>
                  </div>
                </div>
              </div>
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 group-hover:border-emerald-400 group-hover:text-emerald-400 transition-all">
                <Download className="w-4 h-4" />
              </div>
            </a>

            {/* Telegram Card */}
            <a
              href={data.personal.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-glass rounded-2xl p-5 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-between group block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
                  <TelegramIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">TELEGRAM</div>
                  <div className="text-sm font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {data.personal.telegramUsername}
                  </div>
                </div>
              </div>
              <ArrowIcon className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-all" />
            </a>

            {/* LinkedIn & GitHub Double Card */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={data.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-glass rounded-2xl p-5 border border-slate-800 hover:border-purple-500/40 transition-all text-center group"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mx-auto mb-2 group-hover:scale-105 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono text-slate-400">LINKEDIN</div>
                <div className="text-xs font-semibold text-slate-200 mt-1 truncate">
                  /in/sajjad-jahani
                </div>
              </a>

              <a
                href={data.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-glass rounded-2xl p-5 border border-slate-800 hover:border-cyan-500/40 transition-all text-center group"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto mb-2 group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono text-slate-400">GITHUB</div>
                <div className="text-xs font-semibold text-slate-200 mt-1 truncate">
                  @Sajjaddi
                </div>
              </a>
            </div>
          </div>

          {/* Right: Direct Quick Message Form */}
          <div className="lg:col-span-7 cyber-glass rounded-2xl p-7 sm:p-9 border border-cyan-500/30 shadow-[0_0_30px_rgba(0,240,255,0.15)]">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="w-5 h-5 text-cyan-400" />
              <h3 className="text-xl font-bold text-slate-100">
                {isRTL ? "ارسال پیام سریع" : "Send a Direct Message"}
              </h3>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs text-slate-300 mb-1.5 ${isRTL ? "font-sans font-medium" : "font-mono"}`}>
                    {isRTL ? "نام شما *" : "Your Name *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={isRTL ? "مثلاً علی محمدی" : "e.g. Alex Morgan"}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all"
                  />
                </div>

                <div>
                  <label className={`block text-xs text-slate-300 mb-1.5 ${isRTL ? "font-sans font-medium" : "font-mono"}`}>
                    {isRTL ? "ایمیل یا آیدی تلگرام *" : "Email / Telegram *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder={isRTL ? "ایمیل یا آیدی شما" : "alex@company.com or @telegram"}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className={`block text-xs text-slate-300 mb-1.5 ${isRTL ? "font-sans font-medium" : "font-mono"}`}>
                  {isRTL ? "نوع همکاری مورد نظر" : "Project / Role Type"}
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-400 transition-all"
                >
                  <option value="Freelance Project">
                    {isRTL ? "پروژه فریلنس (MVP / وب‌سایت / پنل)" : "Freelance / MVP Build"}
                  </option>
                  <option value="Full-Time Remote">
                    {isRTL ? "همکاری تمام‌وقت دورکاری" : "Full-Time Remote Engineer"}
                  </option>
                  <option value="Hybrid Position">
                    {isRTL ? "همکاری هیبریدی (تهران)" : "Hybrid Role (Tehran)"}
                  </option>
                  <option value="Technical Consultation">
                    {isRTL ? "مشاوره فنی و معماری فرانت‌اند" : "Consultation / Advisory"}
                  </option>
                </select>
              </div>

              <div>
                <label className={`block text-xs text-slate-300 mb-1.5 ${isRTL ? "font-sans font-medium" : "font-mono"}`}>
                  {isRTL ? "پیام شما *" : "Your Message *"}
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={
                    isRTL
                      ? "توضیحات مختصر در مورد پروژه، نیازها یا پیشنهاد کاری..."
                      : "Tell me about your project, timeline, or position requirements..."
                  }
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 hover:from-cyan-300 hover:to-cyan-200 shadow-[0_0_25px_rgba(0,240,255,0.45)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Send className="w-4 h-4 text-black" />
                <span>{isRTL ? "ارسال مستقیم ایمیل" : "Launch In Email Client"}</span>
              </button>

              {submitted && (
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono text-center">
                  {isRTL
                    ? "ایمیل شما در کلاینت باز شد! در اولین فرصت پاسخ خواهم داد."
                    : "Email client launched! I will respond promptly."}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
