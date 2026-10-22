import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export type SiteLang = "de" | "en";

export interface HreflangPair {
  deNew: string;
  deLegacy: string;
  en: string;
  hasCounterpart: boolean;
}

export const HREFLANG_PAIRS: HreflangPair[] = [
  { deNew: "/", deLegacy: "/", en: "/", hasCounterpart: true },
  { deNew: "/it-kurse/", deLegacy: "/it-kurse/", en: "/it-courses/", hasCounterpart: true },
  {
    deNew: "/it-kurse/ai-engineer-weiterbildung/",
    deLegacy: "/it-kurse/data-science/",
    en: "/it-courses/ai-engineering/",
    hasCounterpart: true,
  },
  {
    deNew: "/it-kurse/data-analyst-weiterbildung/",
    deLegacy: "/it-kurse/data-science/",
    en: "/it-courses/data-analytics/",
    hasCounterpart: true,
  },
  {
    deNew: "/it-kurse/full-stack-entwickler-weiterbildung/",
    deLegacy: "/it-kurse/webentwicklungskurse/",
    en: "/it-courses/full-stack-developer/",
    hasCounterpart: true,
  },
  {
    deNew: "/it-kurse/cyber-security-weiterbildung/",
    deLegacy: "/it-kurse/it-sicherheit-kurse/",
    en: "/it-courses/cyber-security/",
    hasCounterpart: true,
  },
  {
    deNew: "/it-kurse/aws-devops-weiterbildung/",
    deLegacy: "/it-kurse/devops-aws/",
    en: "/it-courses/devops-aws/",
    hasCounterpart: true,
  },
  {
    deNew: "/it-kurse/aws-solutions-architect-weiterbildung/",
    deLegacy: "/it-kurse/devops-aws/",
    en: "/it-courses/aws-solutions-architect/",
    hasCounterpart: true,
  },
  {
    deNew: "/it-kurse/sdet-weiterbildung/",
    deLegacy: "/it-kurse/software-development-engineer-in-test/",
    en: "/it-courses/software-development-engineer-in-test/",
    hasCounterpart: true,
  },
  {
    deNew: "/it-kurse/kubernetes-ckad-zertifikat-kurs/",
    deLegacy: "/it-kurse/kubernetes-ckad-zertifikat-kurs/",
    en: "/it-courses/kubernetes-ckad-certification-course/",
    hasCounterpart: true,
  },
  {
    deNew: "/it-orientierungskurs/",
    deLegacy: "/it-orientierungskurs-2/",
    en: "/it-orientation-course/",
    hasCounterpart: true,
  },
  {
    deNew: "/finanzierung/",
    deLegacy: "/finanzierung-studiengebuehren/",
    en: "/financing-and-tuition/",
    hasCounterpart: true,
  },
  {
    deNew: "/bildungsgutschein/",
    deLegacy: "/bildungsgutschein/",
    en: "/bildungsgutschein/",
    hasCounterpart: true,
  },
  {
    deNew: "/avgs/",
    deLegacy: "/avgs/",
    en: "/avgs/",
    hasCounterpart: true,
  },
  {
    deNew: "/qualifizierungschancengesetz/",
    deLegacy: "/qualifizierungschancengesetz/",
    en: "/qualifizierungschancengesetz/",
    hasCounterpart: true,
  },
  {
    deNew: "/fuer-unternehmen/",
    deLegacy: "/it-fortbildung-enterprise/",
    en: "/enterprise-corporate-training/",
    hasCounterpart: true,
  },
  {
    deNew: "/ratgeber/",
    deLegacy: "/blog/",
    en: "/guides/",
    hasCounterpart: true,
  },
  {
    deNew: "/ratgeber/data-analyst-werden/",
    deLegacy: "/blog/",
    en: "/guides/data-analyst/",
    hasCounterpart: true,
  },
  {
    deNew: "/ratgeber/ai-engineer/",
    deLegacy: "/blog/",
    en: "/guides/ai-engineer/",
    hasCounterpart: true,
  },
  {
    deNew: "/ratgeber/full-stack-entwickler/",
    deLegacy: "/blog/",
    en: "/guides/full-stack-developer/",
    hasCounterpart: true,
  },
  {
    deNew: "/ratgeber/soc-analyst/",
    deLegacy: "/blog/",
    en: "/guides/soc-analyst/",
    hasCounterpart: true,
  },
  {
    deNew: "/ratgeber/devops-engineer/",
    deLegacy: "/blog/",
    en: "/guides/devops-engineer/",
    hasCounterpart: true,
  },
  {
    deNew: "/ratgeber/comptia-security-plus/",
    deLegacy: "/blog/",
    en: "/guides/comptia-security-plus/",
    hasCounterpart: true,
  },
  {
    deNew: "/ratgeber/aws-zertifizierungen/",
    deLegacy: "/blog/",
    en: "/guides/aws-certifications/",
    hasCounterpart: true,
  },
  {
    deNew: "/ratgeber/aws-cloud-practitioner/",
    deLegacy: "/blog/",
    en: "/guides/aws-cloud-practitioner/",
    hasCounterpart: true,
  },
  {
    deNew: "/ueber-uns/",
    deLegacy: "/uber-uns/",
    en: "/about/",
    hasCounterpart: true,
  },
  {
    deNew: "/erfolgsgeschichten/",
    deLegacy: "/erfolgsgeschichten/",
    en: "/success-stories/",
    hasCounterpart: false,
  },
  {
    deNew: "/karriere-management/",
    deLegacy: "/karriere-management/",
    en: "/career-management/",
    hasCounterpart: true,
  },
  {
    deNew: "/events/",
    deLegacy: "/events/",
    en: "/events/",
    hasCounterpart: false,
  },
  {
    deNew: "/beratung/",
    deLegacy: "/application-form/",
    en: "/application-form/",
    hasCounterpart: true,
  },
  {
    deNew: "/freunde-werben/",
    deLegacy: "/freunde-werben/",
    en: "/refer-a-friend/",
    hasCounterpart: true,
  },
  {
    deNew: "/kontakt/",
    deLegacy: "/kontakt/",
    en: "/contact/",
    hasCounterpart: true,
  },
  {
    deNew: "/impressum/",
    deLegacy: "/impressum/",
    en: "/imprint/",
    hasCounterpart: true,
  },
  {
    deNew: "/datenschutz/",
    deLegacy: "/datenschutz/",
    en: "/privacy-policy/",
    hasCounterpart: true,
  },
];

export function normalizePath(p: string): string {
  if (!p || p === "/") return "/";
  const clean = p.split("?")[0].split("#")[0];
  return clean.endsWith("/") ? clean : `${clean}/`;
}

export function detectLangFromPath(pathname: string): SiteLang | null {
  const norm = normalizePath(pathname);
  if (
    norm.startsWith("/it-courses/") ||
    norm === "/it-orientation-course/" ||
    norm === "/financing-and-tuition/" ||
    norm === "/enterprise-corporate-training/" ||
    norm.startsWith("/guides/") ||
    norm === "/about/" ||
    norm === "/success-stories/" ||
    norm === "/career-management/" ||
    norm === "/application-form/" ||
    norm === "/refer-a-friend/" ||
    norm === "/contact/" ||
    norm === "/imprint/" ||
    norm === "/privacy-policy/"
  ) {
    return "en";
  }
  if (
    norm.startsWith("/it-kurse/") ||
    norm === "/it-orientierungskurs/" ||
    norm === "/finanzierung/" ||
    norm === "/fuer-unternehmen/" ||
    norm.startsWith("/ratgeber/") ||
    norm === "/ueber-uns/" ||
    norm === "/erfolgsgeschichten/" ||
    norm === "/karriere-management/" ||
    norm === "/beratung/" ||
    norm === "/freunde-werben/" ||
    norm === "/kontakt/" ||
    norm === "/impressum/" ||
    norm === "/datenschutz/"
  ) {
    return "de";
  }
  return null;
}

export function findHreflangPair(pathname: string): HreflangPair | undefined {
  const norm = normalizePath(pathname);
  return HREFLANG_PAIRS.find((pair) => pair.deNew === norm || pair.en === norm);
}

export function getCounterpartPath(pathname: string, targetLang: SiteLang): string {
  const norm = normalizePath(pathname);
  const pair = HREFLANG_PAIRS.find((p) => p.deNew === norm || p.en === norm);
  if (pair) {
    return targetLang === "en" ? pair.en : pair.deNew;
  }
  return "/";
}

interface LanguageContextValue {
  lang: SiteLang;
  setLang: (l: SiteLang) => void;
  switchLanguage: (targetLang: SiteLang) => void;
  counterpartPath: string;
  hreflangPair?: HreflangPair;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "de",
  setLang: () => {},
  switchLanguage: () => {},
  counterpartPath: "/",
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [lang, setLang] = useState<SiteLang>(() => {
    const detected = detectLangFromPath(window.location.pathname);
    return detected ?? "de";
  });

  useEffect(() => {
    const detected = detectLangFromPath(location.pathname);
    if (detected && detected !== lang) {
      setLang(detected);
    }
  }, [location.pathname, lang]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  const counterpartPath = getCounterpartPath(location.pathname, lang === "de" ? "en" : "de");
  const hreflangPair = findHreflangPair(location.pathname);

  function switchLanguage(targetLang: SiteLang) {
    const targetPath = getCounterpartPath(location.pathname, targetLang);
    setLang(targetLang);
    navigate(targetPath);
  }

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        switchLanguage,
        counterpartPath,
        hreflangPair,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}


export function getHreflangPair(pathname: string): { de: string; en: string } | undefined {
  const pair = findHreflangPair(pathname);
  if (pair && pair.hasCounterpart) {
    return { de: pair.deNew, en: pair.en };
  }
  return undefined;
}
