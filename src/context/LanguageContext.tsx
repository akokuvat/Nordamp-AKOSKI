import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { siteContent, type Lang, type Content } from '../config/siteContent';

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: Content;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('nordamp-lang') : null;
    return (saved as Lang) || 'en';
  });

  useEffect(() => {
    try {
      localStorage.setItem('nordamp-lang', lang);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const value: LanguageContextValue = {
    lang,
    setLang,
    toggle: () => setLang(lang === 'en' ? 'sv' : 'en'),
    t: siteContent[lang] as Content,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
