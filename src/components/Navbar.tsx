import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import imgLogo from "@/imports/1440WLight-1/cdb5267869f41011e947a0d52b23ac56676c7902.png";
import { useLanguage, normalizePath } from "@/context/LanguageContext";

const PRIMARY = "#e51a59";
const SECONDARY = "#8a1c4a";
const DARK = "#1a1d2e";

const deCoursesGroups = [
  {
    groupLabel: "Daten & KI",
    items: [
      { label: "AI Engineer", sub: "Data Analytics bis Agentic AI", to: "/it-kurse/ai-engineer-weiterbildung/" },
      { label: "Data Analyst", sub: "Datenanalyse & BI (Modul 1)", to: "/it-kurse/data-analyst-weiterbildung/" },
    ],
  },
  {
    groupLabel: "Software & Testing",
    items: [
      { label: "Full Stack Entwickler", sub: "KI-gestützte Webentwicklung", to: "/it-kurse/full-stack-entwickler-weiterbildung/" },
      { label: "SDET", sub: "Testautomatisierung & QA", to: "/it-kurse/sdet-weiterbildung/" },
    ],
  },
  {
    groupLabel: "Cloud & IT-Sicherheit",
    items: [
      { label: "Cyber Security", sub: "SOC Analyst & Cloud Security", to: "/it-kurse/cyber-security-weiterbildung/" },
      { label: "AWS & DevOps", sub: "Cloud & DevOps Engineering", to: "/it-kurse/aws-devops-weiterbildung/" },
      { label: "AWS Solutions Architect", sub: "SAA-C03 Cloud Architektur", to: "/it-kurse/aws-solutions-architect-weiterbildung/" },
      { label: "Kubernetes CKAD", sub: "Zertifikatskurs in 4 Wochen", to: "/it-kurse/kubernetes-ckad-zertifikat-kurs/" },
    ],
  },
  {
    groupLabel: "Orientierung & Übersicht",
    items: [
      { label: "IT-Orientierungskurs", sub: "Den passenden IT-Beruf finden", to: "/it-orientierungskurs/" },
      { label: "Alle IT-Kurse", sub: "Vergleichstabelle & Übersicht", to: "/it-kurse/" },
    ],
  },
];

const enCoursesGroups = [
  {
    groupLabel: "Data & AI",
    items: [
      { label: "AI Engineering", sub: "Data Analytics to Agentic AI", to: "/it-courses/ai-engineering/" },
    ],
  },
  {
    groupLabel: "Software",
    items: [
      { label: "AI-Assisted Full Stack", sub: "React, Next.js, Node & AI Tools", to: "/it-courses/full-stack-developer/" },
      { label: "SDET", sub: "Software Testing & Automation", to: "/it-courses/software-development-engineer-in-test/" },
    ],
  },
  {
    groupLabel: "Cloud & Security",
    items: [
      { label: "AI-Enhanced Cyber Security", sub: "SOC Analyst & Cloud Security", to: "/it-courses/cyber-security/" },
      { label: "AI-Enhanced AWS & DevOps", sub: "AWS Architect & DevOps Engineering", to: "/it-courses/devops-aws/" },
      { label: "Kubernetes CKAD", sub: "4-Week Certification Prep", to: "/it-courses/kubernetes-ckad-certification-course/" },
    ],
  },
  {
    groupLabel: "Not sure yet",
    items: [
      { label: "IT Orientation Course", sub: "Find the IT career that fits you", to: "/it-orientation-course/" },
      { label: "All courses", sub: "Compare all funded IT bootcamps", to: "/it-courses/" },
    ],
  },
];

const deFundingItems = [
  { label: "Bildungsgutschein", sub: "100 % Förderung über Agentur / Jobcenter", to: "/bildungsgutschein/" },
  { label: "AVGS", sub: "Aktivierungs- und Vermittlungsgutschein", to: "/avgs/" },
  { label: "Qualifizierungschancengesetz", sub: "Förderung für Beschäftigte & Arbeitgeber", to: "/qualifizierungschancengesetz/" },
  { label: "Alle Finanzierungswege", sub: "Alle Förderoptionen im Vergleich", to: "/finanzierung/" },
];

const enFundingItems = [
  { label: "Funding overview", sub: "Compare all funding options in Germany", to: "/financing-and-tuition/" },
  { label: "Bildungsgutschein", sub: "100% funded via Agentur für Arbeit / Jobcenter", to: "/bildungsgutschein/" },
  { label: "AVGS", sub: "Free career coaching & orientation voucher", to: "/avgs/" },
  { label: "Qualifizierungschancengesetz", sub: "Employer-funded IT training for employees", to: "/qualifizierungschancengesetz/" },
  { label: "For companies", sub: "Corporate IT training for teams", to: "/enterprise-corporate-training/" },
];

const deRatgeberItems = [
  { label: "Ratgeber-Übersicht", sub: "Alle Leitfäden zu IT-Berufen & Förderung", to: "/ratgeber/" },
  { label: "Weiterbildung über Arbeitsagentur", sub: "So klappt die Förderung Schritt für Schritt", to: "/ratgeber/weiterbildung-arbeitsagentur/" },
  { label: "Quereinstieg in die IT", sub: "Wege, Voraussetzungen und Förderung", to: "/ratgeber/quereinstieg-it/" },
  { label: "SOC Analyst: Aufgaben & Gehalt", sub: "Berufsbild und Einstieg in Cyber Security", to: "/ratgeber/soc-analyst/" },
];

const enGuidesItems = [
  { label: "Guides hub", sub: "All career & certification guides", to: "/guides/" },
  { label: "What does a Data Analyst do?", sub: "Daily tasks, Python, SQL & salary", to: "/guides/data-analyst/" },
  { label: "What is an AI Engineer?", sub: "Production LLMs, RAG & agents", to: "/guides/ai-engineer/" },
  { label: "What is a Full Stack Developer?", sub: "React, TypeScript & AI coding tools", to: "/guides/full-stack-developer/" },
  { label: "What does a SOC Analyst do?", sub: "Incident triage, SIEM & salary", to: "/guides/soc-analyst/" },
];

const deAboutItems = [
  { label: "Über Clarusway", sub: "Mission, AZAV-Zertifizierung & Standort Neuss", to: "/ueber-uns/" },
  { label: "Erfolgsgeschichten", sub: "Erfahrungen und Bewertungen von Absolventen", to: "/erfolgsgeschichten/" },
  { label: "Karriere-Management", sub: "Lebenslauf, Interview-Prep & Job-Matching", to: "/karriere-management/" },
  { label: "Events", sub: "Kostenlose Webinare, Workshops & Demo Days", to: "/events/" },
];

const enAboutItems = [
  { label: "About Clarusway", sub: "AZAV certification, mentors & Neuss campus", to: "/about/" },
  { label: "Success stories", sub: "Graduate stories & independent platform reviews", to: "/success-stories/" },
  { label: "Career Management", sub: "German CV prep, interview coaching & matching", to: "/career-management/" },
  { label: "Events", sub: "Upcoming info sessions, workshops & Demo Days", to: "/events/" },
];

export default function Navbar() {
  const { lang, switchLanguage, counterpartPath } = useLanguage();
  const location = useLocation();
  const normPath = normalizePath(location.pathname);

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string>("courses");
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
  }, [location.pathname]);

  const coursesGroups = lang === "de" ? deCoursesGroups : enCoursesGroups;
  const fundingItems = lang === "de" ? deFundingItems : enFundingItems;
  const guidesItems = lang === "de" ? deRatgeberItems : enGuidesItems;
  const aboutItems = lang === "de" ? deAboutItems : enAboutItems;
  const ctaLink = lang === "de" ? "/beratung/" : "/application-form/";
  const ctaLabel = lang === "de" ? "Kostenlose Beratung" : "Free consultation";

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-[1200px] mx-auto px-5 h-[74px] flex items-center justify-between gap-4">
        {/* Logo (no heading tag) */}
        <Link to="/" className="shrink-0 flex items-center h-[42px]">
          <img
            src={imgLogo}
            alt="Clarusway Germany"
            width={162}
            height={42}
            className="h-full w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation (All links rendered in initial HTML DOM, toggled via CSS) */}
        <nav aria-label={lang === "de" ? "Hauptnavigation" : "Main navigation"} className="hidden lg:flex items-center gap-1">
          {/* 1. Courses Mega Menu */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("courses")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === "courses" ? null : "courses")}
              aria-expanded={openDropdown === "courses"}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-bold tracking-wide transition-colors hover:bg-gray-50"
              style={{
                color:
                  normPath.startsWith("/it-kurse/") ||
                  normPath.startsWith("/it-courses/") ||
                  normPath === "/it-orientierungskurs/" ||
                  normPath === "/it-orientation-course/"
                    ? PRIMARY
                    : DARK,
              }}
            >
              <span>{lang === "de" ? "IT-Kurse" : "Courses"}</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
                style={{
                  transform: openDropdown === "courses" ? "rotate(180deg)" : "rotate(0)",
                  transition: "transform .2s",
                }}
              >
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div
              className={`absolute top-full left-0 pt-2 z-50 transition-all duration-150 ${
                openDropdown === "courses"
                  ? "opacity-100 visible translate-y-0 pointer-events-auto"
                  : "opacity-0 invisible -translate-y-1 pointer-events-none"
              }`}
              style={{ width: 680 }}
            >
              <div className="rounded-2xl border border-gray-100 bg-white shadow-2xl p-5 grid grid-cols-2 gap-5">
                {coursesGroups.map((grp) => (
                  <div key={grp.groupLabel} className="space-y-1.5">
                    <div
                      className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1"
                      style={{ color: SECONDARY }}
                    >
                      {grp.groupLabel}
                    </div>
                    {grp.items.map((item) => {
                      const active = normPath === item.to;
                      return (
                        <Link
                          key={item.to}
                          to={item.to}
                          className="block rounded-xl px-3 py-2 transition-colors hover:bg-pink-50/70"
                          style={{
                            background: active ? `${PRIMARY}10` : undefined,
                            borderLeft: active ? `3px solid ${PRIMARY}` : "3px solid transparent",
                          }}
                        >
                          <div className="text-xs font-bold" style={{ color: active ? PRIMARY : DARK }}>
                            {item.label}
                          </div>
                          <div className="text-[11px] text-gray-500">{item.sub}</div>
                        </Link>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Funding Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("funding")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === "funding" ? null : "funding")}
              aria-expanded={openDropdown === "funding"}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-bold tracking-wide transition-colors hover:bg-gray-50"
              style={{
                color: [
                  "/finanzierung/",
                  "/financing-and-tuition/",
                  "/bildungsgutschein/",
                  "/avgs/",
                  "/qualifizierungschancengesetz/",
                  "/enterprise-corporate-training/",
                ].includes(normPath)
                  ? PRIMARY
                  : DARK,
              }}
            >
              <span>{lang === "de" ? "Finanzierung" : "Funding"}</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
                style={{
                  transform: openDropdown === "funding" ? "rotate(180deg)" : "rotate(0)",
                  transition: "transform .2s",
                }}
              >
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div
              className={`absolute top-full left-0 pt-2 z-50 transition-all duration-150 ${
                openDropdown === "funding"
                  ? "opacity-100 visible translate-y-0 pointer-events-auto"
                  : "opacity-0 invisible -translate-y-1 pointer-events-none"
              }`}
              style={{ width: 340 }}
            >
              <div className="rounded-2xl border border-gray-100 bg-white shadow-2xl p-3 space-y-1">
                {fundingItems.map((item) => {
                  const active = normPath === item.to;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block rounded-xl px-3.5 py-2.5 transition-colors hover:bg-pink-50/70"
                      style={{
                        background: active ? `${PRIMARY}10` : undefined,
                        borderLeft: active ? `3px solid ${PRIMARY}` : "3px solid transparent",
                      }}
                    >
                      <div className="text-xs font-bold" style={{ color: active ? PRIMARY : DARK }}>
                        {item.label}
                      </div>
                      <div className="text-[11px] text-gray-500">{item.sub}</div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 3. Ratgeber / Guides Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("guides")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === "guides" ? null : "guides")}
              aria-expanded={openDropdown === "guides"}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-bold tracking-wide transition-colors hover:bg-gray-50"
              style={{
                color: normPath.startsWith("/ratgeber/") || normPath.startsWith("/guides/") ? PRIMARY : DARK,
              }}
            >
              <span>{lang === "de" ? "Ratgeber" : "Guides"}</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
                style={{
                  transform: openDropdown === "guides" ? "rotate(180deg)" : "rotate(0)",
                  transition: "transform .2s",
                }}
              >
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div
              className={`absolute top-full left-0 pt-2 z-50 transition-all duration-150 ${
                openDropdown === "guides"
                  ? "opacity-100 visible translate-y-0 pointer-events-auto"
                  : "opacity-0 invisible -translate-y-1 pointer-events-none"
              }`}
              style={{ width: 350 }}
            >
              <div className="rounded-2xl border border-gray-100 bg-white shadow-2xl p-3 space-y-1">
                {guidesItems.map((item) => {
                  const active = normPath === item.to;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block rounded-xl px-3.5 py-2.5 transition-colors hover:bg-pink-50/70"
                      style={{
                        background: active ? `${PRIMARY}10` : undefined,
                        borderLeft: active ? `3px solid ${PRIMARY}` : "3px solid transparent",
                      }}
                    >
                      <div className="text-xs font-bold" style={{ color: active ? PRIMARY : DARK }}>
                        {item.label}
                      </div>
                      <div className="text-[11px] text-gray-500">{item.sub}</div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 4. Für Unternehmen (DE top-level item per DE SEO plan) */}
          {lang === "de" && (
            <Link
              to="/fuer-unternehmen/"
              className="px-3 py-2 rounded-lg text-sm font-bold tracking-wide hover:bg-gray-50 transition-colors"
              style={{ color: normPath === "/fuer-unternehmen/" ? PRIMARY : DARK }}
            >
              Für Unternehmen
            </Link>
          )}

          {/* 5. Über uns / About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("about")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === "about" ? null : "about")}
              aria-expanded={openDropdown === "about"}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-bold tracking-wide transition-colors hover:bg-gray-50"
              style={{
                color: [
                  "/ueber-uns/",
                  "/about/",
                  "/erfolgsgeschichten/",
                  "/success-stories/",
                  "/karriere-management/",
                  "/career-management/",
                  "/events/",
                ].includes(normPath)
                  ? PRIMARY
                  : DARK,
              }}
            >
              <span>{lang === "de" ? "Über uns" : "About"}</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
                style={{
                  transform: openDropdown === "about" ? "rotate(180deg)" : "rotate(0)",
                  transition: "transform .2s",
                }}
              >
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div
              className={`absolute top-full right-0 pt-2 z-50 transition-all duration-150 ${
                openDropdown === "about"
                  ? "opacity-100 visible translate-y-0 pointer-events-auto"
                  : "opacity-0 invisible -translate-y-1 pointer-events-none"
              }`}
              style={{ width: 320 }}
            >
              <div className="rounded-2xl border border-gray-100 bg-white shadow-2xl p-3 space-y-1">
                {aboutItems.map((item) => {
                  const active = normPath === item.to;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block rounded-xl px-3.5 py-2.5 transition-colors hover:bg-pink-50/70"
                      style={{
                        background: active ? `${PRIMARY}10` : undefined,
                        borderLeft: active ? `3px solid ${PRIMARY}` : "3px solid transparent",
                      }}
                    >
                      <div className="text-xs font-bold" style={{ color: active ? PRIMARY : DARK }}>
                        {item.label}
                      </div>
                      <div className="text-[11px] text-gray-500">{item.sub}</div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </nav>

        {/* Right CTAs + Language Switcher */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to={ctaLink}
            className="hidden sm:inline-flex items-center px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white transition-all hover:opacity-90 shadow-sm"
            style={{ background: PRIMARY }}
          >
            {ctaLabel}
          </Link>

          {/* Bilateral Language Switcher (DE <-> EN counterpart page) */}
          <div
            className="inline-flex items-center rounded-xl border border-gray-200 p-0.5 bg-gray-50"
            role="group"
            aria-label={lang === "de" ? "Sprachauswahl" : "Language selector"}
          >
            <button
              type="button"
              onClick={() => switchLanguage("de")}
              title={lang === "en" ? `Deutsch (${counterpartPath})` : "Deutsch"}
              className="px-2.5 py-1 rounded-lg text-xs font-bold transition-all"
              style={{
                background: lang === "de" ? PRIMARY : "transparent",
                color: lang === "de" ? "#fff" : DARK,
              }}
            >
              DE
            </button>
            <button
              type="button"
              onClick={() => switchLanguage("en")}
              title={lang === "de" ? `English (${counterpartPath})` : "English"}
              className="px-2.5 py-1 rounded-lg text-xs font-bold transition-all"
              style={{
                background: lang === "en" ? PRIMARY : "transparent",
                color: lang === "en" ? "#fff" : DARK,
              }}
            >
              EN
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {mobileOpen ? (
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Accordion (All links always in HTML DOM, toggled with CSS class) */}
      <div className={`lg:hidden border-t border-gray-100 bg-white ${mobileOpen ? "block" : "hidden"}`}>
        <div className="max-w-[1200px] mx-auto px-5 py-4 space-y-2">
          {/* Courses Accordion */}
          <div className="border border-gray-100 rounded-xl overflow-hidden">
            <button
              type="button"
              onClick={() => setMobileAccordion(mobileAccordion === "courses" ? "" : "courses")}
              className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold bg-gray-50/70"
              style={{ color: DARK }}
            >
              <span>{lang === "de" ? "IT-Kurse" : "Courses"}</span>
              <span>{mobileAccordion === "courses" ? "−" : "+"}</span>
            </button>
            <div className={`p-3 space-y-3 ${mobileAccordion === "courses" ? "block" : "hidden"}`}>
              {coursesGroups.map((grp) => (
                <div key={grp.groupLabel} className="space-y-1">
                  <div className="text-[10px] font-bold uppercase tracking-widest px-2" style={{ color: SECONDARY }}>
                    {grp.groupLabel}
                  </div>
                  {grp.items.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block px-2 py-1.5 rounded-lg text-xs font-semibold hover:bg-pink-50"
                      style={{ color: normPath === item.to ? PRIMARY : DARK }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Funding Accordion */}
          <div className="border border-gray-100 rounded-xl overflow-hidden">
            <button
              type="button"
              onClick={() => setMobileAccordion(mobileAccordion === "funding" ? "" : "funding")}
              className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold bg-gray-50/70"
              style={{ color: DARK }}
            >
              <span>{lang === "de" ? "Finanzierung" : "Funding"}</span>
              <span>{mobileAccordion === "funding" ? "−" : "+"}</span>
            </button>
            <div className={`p-3 space-y-1 ${mobileAccordion === "funding" ? "block" : "hidden"}`}>
              {fundingItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block px-2 py-1.5 rounded-lg text-xs font-semibold hover:bg-pink-50"
                  style={{ color: normPath === item.to ? PRIMARY : DARK }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Guides Accordion */}
          <div className="border border-gray-100 rounded-xl overflow-hidden">
            <button
              type="button"
              onClick={() => setMobileAccordion(mobileAccordion === "guides" ? "" : "guides")}
              className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold bg-gray-50/70"
              style={{ color: DARK }}
            >
              <span>{lang === "de" ? "Ratgeber" : "Guides"}</span>
              <span>{mobileAccordion === "guides" ? "−" : "+"}</span>
            </button>
            <div className={`p-3 space-y-1 ${mobileAccordion === "guides" ? "block" : "hidden"}`}>
              {guidesItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block px-2 py-1.5 rounded-lg text-xs font-semibold hover:bg-pink-50"
                  style={{ color: normPath === item.to ? PRIMARY : DARK }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* About Accordion */}
          <div className="border border-gray-100 rounded-xl overflow-hidden">
            <button
              type="button"
              onClick={() => setMobileAccordion(mobileAccordion === "about" ? "" : "about")}
              className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold bg-gray-50/70"
              style={{ color: DARK }}
            >
              <span>{lang === "de" ? "Über uns" : "About"}</span>
              <span>{mobileAccordion === "about" ? "−" : "+"}</span>
            </button>
            <div className={`p-3 space-y-1 ${mobileAccordion === "about" ? "block" : "hidden"}`}>
              {aboutItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block px-2 py-1.5 rounded-lg text-xs font-semibold hover:bg-pink-50"
                  style={{ color: normPath === item.to ? PRIMARY : DARK }}
                >
                  {item.label}
                </Link>
              ))}
              {lang === "de" && (
                <Link
                  to="/fuer-unternehmen/"
                  className="block px-2 py-1.5 rounded-lg text-xs font-semibold hover:bg-pink-50"
                  style={{ color: normPath === "/fuer-unternehmen/" ? PRIMARY : DARK }}
                >
                  Für Unternehmen
                </Link>
              )}
            </div>
          </div>

          <Link
            to={ctaLink}
            className="flex items-center justify-center w-full py-3 rounded-xl text-white font-bold text-xs uppercase tracking-wider"
            style={{ background: PRIMARY }}
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </header>
  );
}


export { Navbar };
