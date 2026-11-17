"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { en } from "./locales/en";
import { fa } from "./locales/fa";

export type Locale = "en" | "fa";

const dictionaries = {
  en,
  fa,
};

type DeepNestedKeys<T> = T extends object
  ? {
      [K in keyof T & string]: T[K] extends object
        ? `${K}.${DeepNestedKeys<T[K]>}` | K
        : K;
    }[keyof T & string]
  : never;

export type TranslationKey = DeepNestedKeys<typeof en>;

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  isRTL: boolean;
  dir: "ltr" | "rtl";
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

function getNestedValue(obj: any, path: string): string {
  const parts = path.split(".");
  let current = obj;
  for (const part of parts) {
    if (current && typeof current === "object" && part in current) {
      current = current[part];
    } else {
      return path; // Fallback to key itself
    }
  }
  return typeof current === "string" ? current : path;
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("app_locale") as Locale | null;
    if (saved === "en" || saved === "fa") {
      setLocaleState(saved);
      document.documentElement.setAttribute("dir", saved === "fa" ? "rtl" : "ltr");
      document.documentElement.setAttribute("lang", saved);
    } else {
      const navLang = navigator.language.toLowerCase();
      if (navLang.includes("fa") || navLang.includes("ir")) {
        setLocaleState("fa");
        document.documentElement.setAttribute("dir", "rtl");
        document.documentElement.setAttribute("lang", "fa");
      }
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== "undefined") {
      localStorage.setItem("app_locale", newLocale);
      document.documentElement.setAttribute("dir", newLocale === "fa" ? "rtl" : "ltr");
      document.documentElement.setAttribute("lang", newLocale);
    }
  };

  const toggleLocale = () => {
    const next = locale === "en" ? "fa" : "en";
    setLocale(next);
  };

  const isRTL = locale === "fa";
  const dir = isRTL ? "rtl" : "ltr";

  const t = (key: string): string => {
    const dict = dictionaries[locale] || dictionaries.en;
    const value = getNestedValue(dict, key);
    if (value === key && locale !== "en") {
      // Fallback to English if translation is missing
      return getNestedValue(dictionaries.en, key);
    }
    return value;
  };

  return (
    <I18nContext.Provider
      value={{
        locale,
        setLocale,
        toggleLocale,
        isRTL,
        dir,
        t,
      }}
    >
      <div className={isRTL ? "font-fa" : "font-sans"} dir={dir}>
        {children}
      </div>
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
