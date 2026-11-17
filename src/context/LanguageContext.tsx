"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language, portfolioData } from "@/data/portfolioData";
import { en } from "@/i18n/locales/en";
import { fa } from "@/i18n/locales/fa";

export type { Language };

const dictionaries = {
  en,
  fa,
};

function getNestedValue(obj: any, path: string): string {
  const parts = path.split(".");
  let current = obj;
  for (const part of parts) {
    if (current && typeof current === "object" && part in current) {
      current = current[part];
    } else {
      return path;
    }
  }
  return typeof current === "string" ? current : path;
}

interface LanguageContextType {
  language: Language;
  locale: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isRTL: boolean;
  dir: "rtl" | "ltr";
  t: (key: string) => string;
  data: typeof portfolioData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("preferred_lang") as Language | null;
    if (saved === "fa" || saved === "en") {
      setLanguageState(saved);
      document.documentElement.setAttribute("dir", saved === "fa" ? "rtl" : "ltr");
      document.documentElement.setAttribute("lang", saved);
    } else {
      const navLang = navigator.language.toLowerCase();
      if (navLang.includes("fa") || navLang.includes("ir")) {
        setLanguageState("fa");
        document.documentElement.setAttribute("dir", "rtl");
        document.documentElement.setAttribute("lang", "fa");
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred_lang", lang);
      document.documentElement.setAttribute("dir", lang === "fa" ? "rtl" : "ltr");
      document.documentElement.setAttribute("lang", lang);
    }
  };

  const toggleLanguage = () => {
    const next = language === "en" ? "fa" : "en";
    setLanguage(next);
  };

  const isRTL = language === "fa";
  const dir = isRTL ? "rtl" : "ltr";

  const t = (key: string): string => {
    const dict = dictionaries[language] || dictionaries.en;
    const value = getNestedValue(dict, key);
    if (value === key && language !== "en") {
      return getNestedValue(dictionaries.en, key);
    }
    return value;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        locale: language,
        setLanguage,
        toggleLanguage,
        isRTL,
        dir,
        t,
        data: portfolioData,
      }}
    >
      <div className={isRTL ? "font-fa" : "font-sans"} dir={dir}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export const useI18n = useLanguage;
