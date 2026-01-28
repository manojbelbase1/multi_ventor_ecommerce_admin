"use client";

import React, { createContext, useContext, useState } from "react";
import enTranslations from "@/locales/en.json";
import hiTranslations from "@/locales/hi.json";

import { Language } from "@/types";

type TranslationObject = Record<string, unknown>;

interface I18nContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations: Record<Language, TranslationObject> = {
    en: enTranslations,
    hi: hiTranslations,
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

function getNestedValue(obj: TranslationObject, path: string): string {
    const keys = path.split(".");
    let result: unknown = obj;

    for (const key of keys) {
        if (result && typeof result === "object" && key in result) {
            result = (result as Record<string, unknown>)[key];
        } else {
            return path; // Return key if not found
        }
    }

    return typeof result === "string" ? result : path;
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("en");

    const t = (key: string): string => {
        return getNestedValue(translations[language], key);
    };

    return (
        <I18nContext.Provider value={{ language, setLanguage, t }}>
            {children}
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
