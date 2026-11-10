import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { CourseKey, getCourseData } from "../data/coursesData";
import { COURSE_IMAGES } from "../data/pageImagesData";
import { mapCourseKeyToModularPath } from "../data/modularPathsData";
import { ModularPathHeroVisual } from "../components/ModularPathHeroVisual";
import { SeoHead, trackClaruswayEvent } from "../components/SeoHead";
import { Breadcrumb } from "../components/Breadcrumb";
import { ProgramSelector } from "../components/ProgramSelector";
import { TrustKeyFactsBar, getIconForCourseInfoStrip } from "../components/TrustKeyFactsBar";
import {
  CheckCircleIcon,
  ArrowRightIcon,
  DownloadIcon,
  ShieldCheckIcon,
  BriefcaseIcon,
  BookOpenIcon,
  StarIcon,
  AwardIcon,
  CalendarIcon,
  ClockIcon,
  GlobeIcon,
  ExternalLinkIcon,
  LockClosedIcon,
} from "../components/Icons";

const PRIMARY = "#e51a59";
const DARK = "#1a1d2e";
const SOFT_BG = "#f6f7fb";

const MONTH_MAP: Record<string, string> = {
  jan: "01",
  feb: "02",
  mar: "03",
  mär: "03",
  apr: "04",
  may: "05",
  mai: "05",
  jun: "06",
  jul: "07",
  aug: "08",
  sep: "09",
  oct: "10",
  okt: "10",
  nov: "11",
  dec: "12",
  dez: "12",
};

function parseIsoDate(str: string): string {
  if (!str) return "2026-07-27";
  if (/^\d{4}-\d{2}-\d{2}$/.test(str)) return str;
  const match = str.match(/(\d{1,2})\.?\s+([A-Za-zäöüÄÖÜ]+)\s+(\d{4})/);
  if (match) {
    const day = match[1].padStart(2, "0");
    const mKey = match[2].toLowerCase().slice(0, 3);
    const month = MONTH_MAP[mKey] || "07";
    const year = match[3];
    return `${year}-${month}-${day}`;
  }
  return str;
}

function parseIsoDuration(str?: string): string | undefined {
  if (!str) return undefined;
  const mWk = str.match(/(\d+)\s*(?:Wochen|weeks|Wo\.|Wk\.)/i);
  if (mWk) return `P${mWk[1]}W`;
  const mMo = str.match(/(\d+)\s*(?:Monate|months|Mo\.)/i);
  if (mMo) return `P${mMo[1]}M`;
  return undefined;
}

interface CourseTemplatePageProps {
  courseKey: CourseKey;
}

export function CourseTemplatePage({ courseKey }: CourseTemplatePageProps) {
  const { lang } = useLanguage();
  const data = getCourseData(courseKey, lang);
  const courseImages = COURSE_IMAGES[data.key] || COURSE_IMAGES["ai-engineering"];

  const [syllabusName, setSyllabusName] = useState("");
  const [syllabusEmail, setSyllabusEmail] = useState("");
  const [syllabusPhone, setSyllabusPhone] = useState("");
  const [syllabusSubmitted, setSyllabusSubmitted] = useState(false);

  const currentPath = lang === "en" ? data.slugEn : data.slugDe;
  const consultPath = lang === "en" ? "/application-form/" : "/beratung/";
  const coursesHubPath = lang === "en" ? "/it-courses/" : "/it-kurse/";
  const coursesHubLabel = lang === "en" ? "IT Courses" : "IT-Kurse";

  const handleSyllabusSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!syllabusName.trim() || !syllabusEmail.trim()) return;
    trackClaruswayEvent("lehrplan_download", {
      course: data.key,
      pdf: data.pdfFileName,
      lang,
    });
    setSyllabusSubmitted(true);
  };

  // Build JSON-LD Schema: Course + hasCourseInstance, FAQPage, BreadcrumbList
  const origin = lang === "en" ? "https://en.clarusway.de" : "https://clarusway.de";
  const courseInstances = data.programs.flatMap((prog) =>
    prog.dates.slice(0, 2).map((dateStr) => ({
      "@type": "CourseInstance",
      name: `${prog.title} (${dateStr})`,
      courseMode: "Online",
      inLanguage: lang,
      startDate: parseIsoDate(dateStr),
      courseWorkload: prog.duration,
      instructor: {
        "@type": "Organization",
        name: "Clarusway GmbH",
      },
    }))
  );

  const canonicalPageUrl = `${origin}${currentPath}`;
  const breadcrumbListElement = data.isOrientation
    ? [
        {
          "@type": "ListItem",
          position: 1,
          name: lang === "en" ? "Home" : "Startseite",
          item: `${origin}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: data.breadcrumbLabel,
          item: canonicalPageUrl,
        },
      ]
    : [
        {
          "@type": "ListItem",
          position: 1,
          name: lang === "en" ? "Home" : "Startseite",
          item: `${origin}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: coursesHubLabel,
          item: `${origin}${coursesHubPath}`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: data.breadcrumbLabel,
          item: canonicalPageUrl,
        },
      ];

  const schemaOfficialMap: Record<string, { en: { name: string; alt: string; time: string }; de: { name: string; alt: string; time: string } }> = {
    "ai-engineering": {
      en: { name: "AI Engineering", alt: "AI Engineering Bootcamp", time: "P32W" },
      de: { name: "AI Engineering", alt: "AI Engineer Weiterbildung", time: "P32W" },
    },
    "full-stack": {
      en: { name: "AI-Assisted Full Stack Development", alt: "Full Stack Web Development Bootcamp", time: "P9M" },
      de: { name: "AI-Assisted Full Stack Development", alt: "Full Stack Entwickler Weiterbildung", time: "P9M" },
    },
    "cyber-security": {
      en: { name: "AI-Enhanced Cyber Security Analyst (SOC) & Cloud Security", alt: "Cyber Security Course", time: "P9M" },
      de: { name: "AI-Enhanced Cyber Security Analyst (SOC) & Cloud Security", alt: "Cyber Security Weiterbildung", time: "P9M" },
    },
    "aws-devops": {
      en: { name: "AI-Enhanced AWS Solutions Architect/DevOps Engineer", alt: "AWS Solutions Architect & DevOps Training", time: "P8M" },
      de: { name: "AI-Enhanced AWS Solutions Architect/DevOps Engineer", alt: "AWS Solutions Architect & DevOps Weiterbildung", time: "P8M" },
    },
    "sdet": {
      en: { name: "Software Development Engineer in Test (SDET)", alt: "SDET Course", time: "P6M" },
      de: { name: "SDET", alt: "SDET Weiterbildung", time: "P6M" },
    },
    "kubernetes-ckad": {
      en: { name: "Kubernetes CKAD", alt: "Kubernetes CKAD Certification Course", time: "P4W" },
      de: { name: "Kubernetes CKAD", alt: "Kubernetes CKAD Zertifikat Kurs", time: "P4W" },
    },
    "it-orientation": {
      en: { name: "IT Orientation Course", alt: "IT Orientation Course", time: "P4W" },
      de: { name: "IT-Orientierungskurs", alt: "IT-Orientierungskurs mit AVGS", time: "P4W" },
    },
  };

  const courseSchemaEntry = schemaOfficialMap[data.key]?.[lang];
  const officialCourseName = courseSchemaEntry?.name || data.eyebrow?.replace(/^Programm:\s*|^Program:\s*/i, "").trim() || data.h1;
  const officialAlternateName = courseSchemaEntry?.alt || data.breadcrumbLabel;
  const courseDurationIso =
    courseSchemaEntry?.time ||
    parseIsoDuration(data.programs?.[0]?.duration) ||
    parseIsoDuration(data.infoStrip?.find(([k, v]) => v.toLowerCase().includes("dauer") || v.toLowerCase().includes("duration"))?.[0]);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://clarusway.de/#organization",
        name: "Clarusway GmbH",
        url: "https://clarusway.de",
        logo: "https://clarusway.de/assets/clarusway-logo.png",
        telephone: "+4921317762749",
        email: "info@clarusway.de",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Bataverstraße 84",
          addressLocality: "Neuss",
          postalCode: "41462",
          addressCountry: "DE",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${canonicalPageUrl}#webpage`,
        url: canonicalPageUrl,
        name: data.metaTitle,
        description: data.metaDescription,
        inLanguage: lang,
        isPartOf: {
          "@type": "WebSite",
          "@id": `${origin}/#website`,
          name: "Clarusway Germany",
          url: origin,
        },
        breadcrumb: {
          "@id": `${canonicalPageUrl}#breadcrumb`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalPageUrl}#breadcrumb`,
        itemListElement: breadcrumbListElement,
      },
      {
        "@type": "Course",
        "@id": `${canonicalPageUrl}#course`,
        name: officialCourseName,
        alternateName: officialAlternateName,
        description: data.heroIntro,
        url: canonicalPageUrl,
        inLanguage: ["en", "tr", "de"],
        timeRequired: courseDurationIso,
        provider: {
          "@id": "https://clarusway.de/#organization",
        },
        syllabusSections: data.modules?.map((m) => ({
          "@type": "Syllabus",
          name: m.title,
          timeRequired: parseIsoDuration(m.duration) || undefined,
          description: m.topics?.join(", ") || m.project || "",
        })),
        hasCourseInstance: courseInstances,
        offers: {
          "@type": "Offer",
          category: data.isOrientation
            ? "AVGS"
            : "Förderfähig mit Bildungsgutschein (AZAV-zertifiziert)",
          priceCurrency: "EUR",
          url: canonicalPageUrl,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalPageUrl}#faq`,
        mainEntity: data.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ],
  };

  const breadcrumbItems = data.isOrientation
    ? [{ label: data.breadcrumbLabel }]
    : [{ label: coursesHubLabel, to: coursesHubPath }, { label: data.breadcrumbLabel }];

  const modularPathConfig = mapCourseKeyToModularPath(data.key);

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", color: DARK }} className="bg-white">
      <SeoHead
        title={data.metaTitle}
        description={data.metaDescription}
        path={currentPath}
        schema={schema}
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* =====================================================================
          1. HERO (Component B1) — Exact Figma Make Gradient & Layout
          ===================================================================== */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #fff8f9 0%, #fff 60%)" }}
      >
        <div className="max-w-[1200px] mx-auto px-5 py-14 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Column — Hook, Heading, Badges, CTAs */}
          <div>
            <div className="flex flex-wrap gap-2 mb-5">
              {data.heroBadges.map((badge) => (
                <span
                  key={badge}
                  className="text-xs font-medium px-3 py-1 rounded-full border border-gray-200 bg-white text-gray-600 shadow-2xs"
                >
                  {badge}
                </span>
              ))}
            </div>

            <h1
              className="font-semibold text-3xl sm:text-4xl md:text-5xl leading-[1.15] tracking-[-0.025em] mb-4"
              style={{ color: DARK }}
            >
              {data.h1}
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill={PRIMARY}>
                    <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.13L8 10.5l-3.71 2.05.71-4.13-3-2.92 4.15-.75L8 1z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-medium text-gray-700">
                {lang === "en" ? "4.9/5 — Career Karma Rating" : "4,9/5 — Career Karma Bewertung"}
              </span>
            </div>

            <p className="text-gray-500 text-base leading-relaxed mb-4 max-w-[520px]">
              {data.heroIntro}
            </p>

            <p className="text-xs sm:text-sm text-gray-500 mb-7 flex items-center gap-2">
              <ShieldCheckIcon className="w-4 h-4 text-[#e51a59] shrink-0" />
              <span>{data.heroSubnote}</span>
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to={consultPath}
                onClick={() =>
                  trackClaruswayEvent("beratung_angefragt", {
                    source: `hero_${data.key}`,
                    lang,
                  })
                }
                style={{ background: PRIMARY }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium text-sm hover:opacity-90 transition-opacity shadow-sm"
              >
                <span>{lang === "en" ? "Free consultation" : "Kostenlose Beratung"}</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>

              <a
                href="#syllabus-download"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm border border-[#1a1d2e]/30 transition-colors hover:border-[#1a1d2e]/60 hover:bg-gray-50"
                style={{ color: DARK }}
              >
                <DownloadIcon className="w-4 h-4" />
                <span>{lang === "en" ? "Download syllabus" : "Lehrplan herunterladen"}</span>
              </a>
            </div>
          </div>

          {/* Right Column — Modular Animated Curriculum Path or Terminal Mockup */}
          <div className="relative flex justify-center w-full">
            {modularPathConfig ? (
              <div className="w-full max-w-[480px]">
                <ModularPathHeroVisual
                  courseId={modularPathConfig.pathId}
                  defaultModuleIndex={modularPathConfig.defaultModuleIndex}
                  lang={lang}
                />
              </div>
            ) : (
              <div className="w-full max-w-[440px]">
                <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-[#1e1e2e] p-6 text-white">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="ml-2 text-xs text-gray-400 font-mono">
                      {data.terminalTitle}
                    </span>
                  </div>

                  <div className="font-mono text-xs sm:text-sm space-y-2 leading-relaxed">
                    {data.terminalLines.map((line, i) => (
                      <p key={i} style={{ color: line.color }}>
                        {line.text}
                      </p>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-700 grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-white/5 rounded-xl p-3">
                      <div className="text-gray-400 mb-0.5">
                        {lang === "en" ? "Hands-on Live Labs" : "Praxis-Labs & Projekte"}
                      </div>
                      <div className="text-white font-semibold">100% Live</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3">
                      <div className="text-gray-400 mb-0.5">
                        {lang === "en" ? "Voucher Coverage" : "Bildungsgutschein"}
                      </div>
                      <div className="text-[#fde8ef] font-semibold">100% (0 €)</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. STATS BAR / BILGI ŞERİDİ (Component B2 - Refined Editorial Style)
          ===================================================================== */}
      <TrustKeyFactsBar
        items={data.infoStrip.map(([val, label]) => {
          let title = val;
          let subtitle = label;
          if (val.includes("Englisch") || val.includes("English")) {
            title = lang === "en" ? "3 Cohort Languages" : "3 Unterrichtssprachen";
            subtitle =
              lang === "en"
                ? "German, English & Turkish (Live)"
                : "Deutsch, Englisch & Türkisch (Live)";
          } else if (val === "AZAV") {
            title = "AZAV-Zertifiziert";
            subtitle = label.includes("Bildungsgutschein")
              ? lang === "en"
                ? "100% funded with Bildungsgutschein"
                : "100 % Förderung mit Bildungsgutschein"
              : label;
          } else if (val.toLowerCase().startsWith("max. 15")) {
            title = lang === "en" ? "Max. 15 Students" : "Max. 15 Teilnehmende";
            subtitle =
              lang === "en"
                ? "Small cohorts with 1-on-1 mentoring"
                : "Kleine interaktive Live-Klasse";
          }
          return {
            icon: getIconForCourseInfoStrip(val, label),
            title,
            subtitle,
          };
        })}
      />

      {/* =====================================================================
          3. KİME UYGUN / TARGET AUDIENCE (Component B3) — H2: audienceH2
          ===================================================================== */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="max-w-3xl mb-10">
            <div
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: PRIMARY }}
            >
              {lang === "en" ? "Target Audience & Prerequisites" : "Zielgruppe & Voraussetzungen"}
            </div>
            <h2 className="font-semibold tracking-[-0.02em] text-2xl sm:text-3xl mb-3" style={{ color: DARK }}>
              {data.audienceH2}
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              {data.audienceIntro}
            </p>
          </div>

          <div className="space-y-12">
            {data.audienceCards[0] && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div
                  style={{ background: SOFT_BG }}
                  className="rounded-2xl sm:rounded-3xl p-7 sm:p-9 border border-gray-100 shadow-sm"
                >
                  <span
                    style={{ backgroundColor: "#fde8ef", color: PRIMARY }}
                    className="text-xs font-medium px-3 py-1 rounded-full inline-block mb-4"
                  >
                    {data.audienceCards[0].badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#1a1d2e] mb-3">
                    {data.audienceCards[0].title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                    {data.audienceCards[0].desc}
                  </p>

                  <ul className="space-y-3 pt-5 border-t border-gray-200/70">
                    {data.audienceCards[0].bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                        <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                          <CheckCircleIcon className="w-3.5 h-3.5" />
                        </div>
                        <span className="leading-snug">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-center">
                  <img
                    src={courseImages.squareAudience1.src}
                    alt={courseImages.squareAudience1.alt[lang]}
                    className="w-full max-w-[480px] aspect-square object-cover rounded-2xl sm:rounded-3xl shadow-md border border-gray-100/80"
                    loading="lazy"
                  />
                </div>
              </div>
            )}

            {data.audienceCards[1] && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="flex justify-center order-2 lg:order-1">
                  <img
                    src={(courseImages.squareAudience2 || courseImages.squareAudience1).src}
                    alt={(courseImages.squareAudience2 || courseImages.squareAudience1).alt[lang]}
                    className="w-full max-w-[480px] aspect-square object-cover rounded-2xl sm:rounded-3xl shadow-md border border-gray-100/80"
                    loading="lazy"
                  />
                </div>

                <div
                  style={{ background: SOFT_BG }}
                  className="rounded-2xl sm:rounded-3xl p-7 sm:p-9 border border-gray-100 shadow-sm order-1 lg:order-2"
                >
                  <span
                    style={{ backgroundColor: "#e8eaf6", color: "#3949ab" }}
                    className="text-xs font-medium px-3 py-1 rounded-full inline-block mb-4"
                  >
                    {data.audienceCards[1].badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#1a1d2e] mb-3">
                    {data.audienceCards[1].title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                    {data.audienceCards[1].desc}
                  </p>

                  <ul className="space-y-3 pt-5 border-t border-gray-200/70">
                    {data.audienceCards[1].bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                        <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#3949ab]">
                          <CheckCircleIcon className="w-3.5 h-3.5" />
                        </div>
                        <span className="leading-snug">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. PROGRAM SEÇİMİ / PROGRAM SELECTOR (Component B4) — H2: programSelectorH2
          ===================================================================== */}
      {!data.isOrientation ? (
        <>
          <ProgramSelector
            key={`${data.key}-${lang}`}
            title={data.programSelectorH2}
            heading={data.programSelectorH2}
            subtitle={data.programSelectorSubtitle}
            modules={data.modules}
            programs={data.programs}
          />

          {data.directEntryInfo && (
            <section className="py-10 bg-white border-b border-gray-100">
              <div className="max-w-[1200px] mx-auto px-5">
                <div className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#e51a59] uppercase tracking-wider mb-2">
                    <AwardIcon className="w-4 h-4" />
                    <span>
                      {lang === "en"
                        ? "Modular Direct Entry (Technical Assessment)"
                        : "Modularer Direkteinstieg (Einstufungsprüfung)"}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1a1d2e] mb-2">
                    {data.directEntryInfo.h3}
                  </h3>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    {data.directEntryInfo.desc}
                  </p>
                  <ul className="grid md:grid-cols-3 gap-4">
                    {data.directEntryInfo.bullets.map((b, idx) => (
                      <li
                        key={idx}
                        style={{ background: SOFT_BG }}
                        className="rounded-xl p-4 text-xs sm:text-sm text-gray-700 border border-gray-100 flex items-start gap-2.5"
                      >
                        <CheckCircleIcon className="w-4 h-4 text-[#e51a59] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          )}
        </>
      ) : null}

      {/* =====================================================================
          5. MÜFREDAT / CURRICULUM + PDF DOWNLOAD (Components B5 + B6) — H2: curriculumH2
          ===================================================================== */}
      <section id="curriculum" className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: PRIMARY }}
            >
              {lang === "en" ? "CURRICULUM" : "LEHRPLAN"}
            </div>
            <h2 className="font-semibold tracking-[-0.02em] text-3xl md:text-4xl mb-3" style={{ color: DARK }}>
              {data.curriculumH2}
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              {data.curriculumIntro}
            </p>
          </div>

          {/* 2-Column Layout: Modules Stacked Downwards (Left) & Download Syllabus (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-12">
            {/* Left Column: Course Modules in Increasing Order */}
            <div className="lg:col-span-7 xl:col-span-7 space-y-5">
              {data.modules.length > 0 &&
                data.modules.map((mod) => (
                  <div
                    key={mod.id}
                    className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm bg-white hover:border-gray-200 transition-all"
                  >
                    <div
                      className="px-5 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3"
                      style={{ background: mod.color + "14", color: mod.color }}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ background: mod.color }}
                        />
                        <h3 className="font-semibold text-sm sm:text-base text-gray-900">
                          {mod.title.startsWith("Modul") || mod.title.startsWith("Module")
                            ? mod.title
                            : `${mod.label} — ${mod.title}`}
                        </h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
                        <span className="inline-flex items-center gap-1 bg-white/90 px-2.5 py-1 rounded-full text-gray-700 shadow-xs border border-gray-100">
                          <ClockIcon className="w-3.5 h-3.5 text-gray-500" />
                          {mod.duration}
                        </span>
                        {mod.prerequisite && (
                          <span className="hidden sm:inline-block bg-white/90 px-2.5 py-1 rounded-full text-gray-700 font-medium border border-gray-100">
                            {lang === "en" ? "Entry: " : "Einstieg: "}
                            {mod.prerequisite}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="px-5 sm:px-6 py-5 grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-6 bg-white">
                      {mod.topics.map((topic, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-sm text-gray-700">
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{ background: mod.color }}
                          />
                          <span className="leading-snug">{topic}</span>
                        </div>
                      ))}
                    </div>

                    {mod.project && (
                      <div
                        style={{ background: SOFT_BG }}
                        className="px-5 sm:px-6 py-3 border-t border-gray-100 flex flex-wrap items-center gap-2 text-xs text-gray-600"
                      >
                        <span className="font-semibold uppercase tracking-wider text-[#e51a59]">
                          {lang === "en" ? "Capstone Project:" : "Praxisprojekt:"}
                        </span>
                        <span className="font-medium text-gray-800">{mod.project}</span>
                      </div>
                    )}
                  </div>
                ))}
            </div>

            {/* Right Column: Syllabus PDF Download Box (Sticky on Desktop) */}
            <div className="lg:col-span-5 xl:col-span-5 lg:sticky lg:top-28">
              <div
                id="syllabus-download"
                style={{ backgroundColor: DARK }}
                className="rounded-2xl p-6 sm:p-7 text-white shadow-xl border border-white/10 scroll-mt-28"
              >
                <div className="inline-flex items-center gap-2 bg-white/10 text-xs font-medium px-3 py-1 rounded-full mb-3 text-[#f472b6] border border-white/10">
                  <DownloadIcon className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate max-w-[280px]">
                    {lang === "en"
                      ? `PDF Syllabus (${data.pdfFileName})`
                      : `PDF-Lehrplan (${data.pdfFileName})`}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold mb-2 leading-snug">
                  {lang === "en"
                    ? "Download the complete weekly syllabus (PDF)"
                    : "Vollständigen Lehrplan als PDF herunterladen"}
                </h3>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {lang === "en"
                    ? "Get the detailed week-by-week breakdown, learning objectives, tools, and official AZAV Maßnahme details for your Agentur für Arbeit or Jobcenter advisor."
                    : "Erhalte die detaillierte Wochenübersicht, Lernziele, Tools sowie alle relevanten AZAV-Maßnahmedaten für deine Vermittlungsfachkraft bei der Agentur für Arbeit oder dem Jobcenter."}
                </p>

                {/* Trust & Content Highlights */}
                <div className="space-y-2 py-3 my-4 border-y border-white/10 text-xs text-gray-200">
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#e51a59] shrink-0" />
                    <span>
                      {lang === "en"
                        ? "Complete weekly schedule & capstone projects"
                        : "Detaillierter Wochenplan & Praxisprojekte"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#e51a59] shrink-0" />
                    <span>
                      {lang === "en"
                        ? "Official AZAV measure number for 100% funding"
                        : "Offizielle AZAV-Maßnahmenummer für 100% Förderung"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-[#e51a59] shrink-0" />
                    <span>
                      {lang === "en"
                        ? "Direct PDF download + email copy"
                        : "Direkter PDF-Download + Kopie per E-Mail"}
                    </span>
                  </div>
                </div>

                {syllabusSubmitted ? (
                  <div className="bg-white/10 border border-[#e51a59]/40 rounded-xl p-5 text-sm mt-3">
                    <p className="font-semibold text-pink-200 mb-1 flex items-center gap-1.5">
                      <CheckCircleIcon className="w-4 h-4 text-[#e51a59]" />
                      <span>
                        {lang === "en"
                          ? "Your syllabus PDF is ready!"
                          : "Dein Lehrplan-PDF steht bereit!"}
                      </span>
                    </p>
                    <p className="text-gray-300 text-xs mb-4">
                      {lang === "en"
                        ? `File: ${data.pdfFileName} — a copy has also been prepared for ${syllabusEmail}.`
                        : `Datei: ${data.pdfFileName} — eine Kopie wurde zudem für ${syllabusEmail} vorbereitet.`}
                    </p>
                    <Link
                      to={consultPath}
                      style={{ backgroundColor: PRIMARY }}
                      className="w-full inline-flex items-center justify-center gap-2 text-white text-xs font-medium px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
                    >
                      <span>
                        {lang === "en"
                          ? "Request your official Bildungsgutschein offer"
                          : "Jetzt offizielles Angebot für Bildungsgutschein anfordern"}
                      </span>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSyllabusSubmit} className="space-y-3 mt-3">
                    <div>
                      <label className="block text-[11px] font-medium text-gray-300 mb-1">
                        {lang === "en" ? "Full name *" : "Vor- und Nachname *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={syllabusName}
                        onChange={(e) => setSyllabusName(e.target.value)}
                        placeholder={lang === "en" ? "e.g. Alex Miller" : "z. B. Max Mustermann"}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#e51a59] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-gray-300 mb-1">
                        {lang === "en" ? "Email address *" : "E-Mail-Adresse *"}
                      </label>
                      <input
                        type="email"
                        required
                        value={syllabusEmail}
                        onChange={(e) => setSyllabusEmail(e.target.value)}
                        placeholder={lang === "en" ? "alex@example.com" : "max@beispiel.de"}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#e51a59] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-gray-300 mb-1">
                        {lang === "en" ? "Phone (optional)" : "Telefon (optional)"}
                      </label>
                      <input
                        type="tel"
                        value={syllabusPhone}
                        onChange={(e) => setSyllabusPhone(e.target.value)}
                        placeholder={lang === "en" ? "+49 170 1234567" : "+49 170 1234567"}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#e51a59] transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      style={{ backgroundColor: PRIMARY }}
                      className="w-full inline-flex items-center justify-center gap-2 text-white font-medium px-5 py-3 rounded-xl text-sm hover:opacity-95 hover:shadow-lg hover:shadow-[#e51a59]/30 transition-all cursor-pointer mt-1"
                    >
                      <DownloadIcon className="w-4 h-4" />
                      <span>
                        {lang === "en" ? "Download syllabus (PDF)" : "Lehrplan herunterladen (PDF)"}
                      </span>
                    </button>
                    <p className="text-[11px] text-gray-400 text-center pt-0.5 flex items-center justify-center gap-1.5">
                      <LockClosedIcon className="w-3 h-3 text-gray-400 shrink-0" />
                      <span>
                        {lang === "en"
                          ? "100% Free · No spam · Instant PDF download"
                          : "100% Kostenlos · Kein Spam · Sofortiger PDF-Download"}
                      </span>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>

          {data.specialFeature && (
            <div
              style={{ background: SOFT_BG }}
              className="rounded-2xl p-7 sm:p-9 border border-gray-100 mb-12"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-[#1a1d2e] mb-3">
                {data.specialFeature.h2}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-6 max-w-3xl leading-relaxed">
                {data.specialFeature.intro}
              </p>

              <div className="grid md:grid-cols-3 gap-5">
                {data.specialFeature.cards.map((c, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
                  >
                    <span className="inline-block text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#fde8ef] text-[#e51a59] mb-2">
                      {c.badge}
                    </span>
                    <p className="font-semibold text-[#1a1d2e] text-base mb-1.5">{c.title}</p>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>

              {data.specialFeature.linkTo && data.specialFeature.linkLabel && (
                <div className="mt-6">
                  <Link
                    to={data.specialFeature.linkTo}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#e51a59] hover:underline"
                  >
                    <span>{data.specialFeature.linkLabel}</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* =====================================================================
          DATA ANALYST MODULE 1 SECTION (Anchor #data-analyst per SEO Plan)
          ===================================================================== */}
      {data.key === "ai-engineering" && (
        <section id="data-analyst" className="py-16 bg-[#FFF8FA] border-y border-[#F3D3DC]/60 scroll-mt-24">
          <div className="max-w-[1200px] mx-auto px-5">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#e51a59] block mb-2">
                {lang === "en" ? "STANDALONE MODULE 1 OPTION" : "MODUL 1 EIGENSTÄNDIG BUCHBAR"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] text-[#1a1d2e] mb-3">
                {lang === "en"
                  ? "Take Module 1 as a standalone Data Analytics course"
                  : "Data Analyst Weiterbildung als Modul 1 einzeln belegen"}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {lang === "en"
                  ? "Looking to start specifically as a Data Analyst or Business Intelligence Specialist? You can book Module 1 (13 weeks) individually with 100% funding via Bildungsgutschein — and seamlessly continue to AI Engineer later whenever you choose."
                  : "Du möchtest gezielt als Data Analyst oder BI-Spezialist einsteigen? Modul 1 (13 Wochen) kann als eigenständige Weiterbildung über einen Bildungsgutschein belegt werden. Bei Bedarf setzt du deine Ausbildung später nahtlos zum AI Engineer fort."}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 border border-[#F3D3DC] shadow-sm">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#fde8ef] text-[#e51a59] mb-3 inline-block">
                  {lang === "en" ? "Foundation · 7 Weeks" : "Fundament · 7 Wochen"}
                </span>
                <h3 className="text-lg font-semibold text-[#1a1d2e] mb-2">
                  {lang === "en" ? "Data Analysis with Python and SQL" : "Datenanalyse mit Python und SQL"}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {lang === "en"
                    ? "Master relational database querying with complex SQL joins, aggregation, and data cleaning and transformation using Python, Pandas, and NumPy."
                    : "Sichere Beherrung relationaler Datenbanken mit komplexen SQL-Abfragen sowie Datenbereinigung und Transformation mit Python, Pandas und NumPy."}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#F3D3DC] shadow-sm">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#fde8ef] text-[#e51a59] mb-3 inline-block">
                  {lang === "en" ? "BI & Dashboards · 6 Weeks" : "BI & Dashboards · 6 Wochen"}
                </span>
                <h3 className="text-lg font-semibold text-[#1a1d2e] mb-2">
                  {lang === "en" ? "Business Intelligence and Dashboards" : "Business Intelligence und Dashboards"}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {lang === "en"
                    ? "Design executive KPI reports and interactive business intelligence dashboards using Power BI and Tableau, grounded in applied statistics."
                    : "Erstelle interaktive Business-Intelligence-Dashboards und KPI-Reports mit Power BI und Tableau, fundiert durch angewandte deskriptive Statistik."}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#F3D3DC] shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#fde8ef] text-[#e51a59] border border-[#e51a59]/20 mb-3 inline-block">
                    {lang === "en" ? "Upgrade Path" : "Nahtloser Upgrade-Pfad"}
                  </span>
                  <h3 className="text-lg font-semibold text-[#1a1d2e] mb-2">
                    {lang === "en" ? "Continue from Module 1 to AI Engineer" : "Nach Modul 1 weiter zum AI Engineer"}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {lang === "en"
                      ? "Graduates of Module 1 can immediately qualify for Module 2 (Machine Learning) and Module 3 (Agentic AI) without repeating technical onboarding."
                      : "Absolventen von Modul 1 können jederzeit ohne erneuten Einstufungstest in Modul 2 (Machine Learning) und Modul 3 (Agentic AI) weitergehen."}
                  </p>
                </div>
                <Link
                  to={consultPath}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#e51a59] hover:underline"
                >
                  <span>{lang === "en" ? "Consult about Data Analyst track →" : "Zu Modul 1 beraten lassen →"}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =====================================================================
          6. KURS ÖZETİ / ABLAUF UND LERNFORMAT (Component B7) — H2: formatH2
          ===================================================================== */}
      <section className="py-16 border-b border-gray-200/60" style={{ background: SOFT_BG }}>
        <div className="max-w-[1200px] mx-auto px-5">
          {/* Top 2-Column Split: Header + 3 Vertical Highlight Cards (Left) & Matched Photo (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div
                  className="text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: PRIMARY }}
                >
                  {lang === "en" ? "COURSE OVERVIEW" : "KURSÜBERSICHT"}
                </div>
                <h2 className="font-semibold tracking-[-0.02em] text-2xl sm:text-3xl mb-3" style={{ color: DARK }}>
                  {data.formatH2}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {data.formatIntro}
                </p>
              </div>

              <div className="space-y-3">
                {data.formatHighlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-5 border border-gray-200/70 shadow-sm"
                  >
                    <h3 className="text-sm sm:text-base font-semibold text-[#1a1d2e] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-gray-200/70 bg-white lg:min-h-[380px]">
              <img
                src={(courseImages?.squareOverview || courseImages.squareAudience1).src}
                alt={(courseImages?.squareOverview || courseImages.squareAudience1).alt[lang]}
                className="w-full aspect-[4/3] lg:aspect-auto lg:h-full lg:absolute lg:inset-0 object-cover block"
                loading="lazy"
              />
            </div>
          </div>

          {/* Bottom Standardized Key-Facts & Consultation Strip */}
          <div className="mt-8 bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-8 p-6 sm:p-7">
                <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-gray-100">
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: PRIMARY }}
                  >
                    {lang === "en" ? "Program Key Facts" : "Eckdaten auf einen Blick"}
                  </span>
                  <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#fde8ef] text-[#e51a59]">
                    {lang === "en" ? "100% Live Online" : "100 % Live-Online"}
                  </span>
                </div>

                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {data.summaryTable.map(([label, val], idx) => {
                    const spanFull = data.summaryTable.length % 2 === 1 && idx === data.summaryTable.length - 1;
                    return (
                      <div
                        key={idx}
                        className={`flex items-start gap-2.5 ${
                          spanFull ? "sm:col-span-2 pt-3 border-t border-gray-100" : ""
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#e51a59] mt-1.5 shrink-0" />
                        <div className="min-w-0">
                          <dt className="text-[11px] font-medium uppercase tracking-wider text-gray-400 mb-0.5">
                            {label}
                          </dt>
                          <dd className="text-xs sm:text-sm font-medium text-[#1a1d2e] leading-snug">
                            {val}
                          </dd>
                        </div>
                      </div>
                    );
                  })}
                </dl>
              </div>

              <div className="lg:col-span-4 bg-[#FFF8FA] border-t lg:border-t-0 lg:border-l border-gray-100 p-6 sm:p-7 flex flex-col justify-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#e51a59] mb-1.5">
                  {lang === "en" ? "Personal Advisory" : "Persönliche Beratung"}
                </p>
                <p className="text-sm font-medium text-[#1a1d2e] mb-1.5 leading-snug">
                  {lang === "en"
                    ? "Plan your schedule & funding path"
                    : "Ablauf, Einstieg & Förderung klären"}
                </p>
                <p className="text-xs text-gray-600 mb-5 leading-relaxed">
                  {lang === "en"
                    ? "1-on-1 guidance on curriculum, prerequisites, and funding options."
                    : "Individuelle 1:1-Beratung zu Zeitplan, Voraussetzungen und Förderwegen."}
                </p>
                <Link
                  to={consultPath}
                  onClick={() =>
                    trackClaruswayEvent("beratung_angefragt", {
                      source: `overview_${data.key}`,
                      lang,
                    })
                  }
                  style={{ background: PRIMARY }}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-medium text-sm hover:opacity-90 transition-opacity shadow-sm"
                >
                  <span>{lang === "en" ? "Free consultation" : "Kostenlose Beratung"}</span>
                  <ArrowRightIcon className="w-4 h-4 shrink-0" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. FİNANSMAN / WEITERBILDUNG MIT BILDUNGSGUTSCHEIN (Component B8) — H2: fundingH2
          ===================================================================== */}
      <section style={{ background: SOFT_BG }} className="py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-100 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 bg-[#fde8ef] text-[#e51a59] text-xs font-medium px-3.5 py-1 rounded-full mb-3">
                  <ShieldCheckIcon className="w-4 h-4" />
                  <span>
                    {lang === "en"
                      ? "100% State-Funded in Germany (AZAV)"
                      : "100 % Staatliche Förderung nach AZAV"}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] text-[#1a1d2e] mb-3">
                  {data.fundingH2}
                </h2>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                  {data.fundingText}{" "}
                  {lang === "en" ? (
                    <>
                      Read the step-by-step guide on{" "}
                      <Link
                        to={data.fundingLinkTo}
                        className="text-[#e51a59] font-medium underline hover:opacity-80"
                      >
                        {data.fundingLinkLabel}
                      </Link>{" "}
                      or learn about{" "}
                      <Link
                        to={data.qcgLinkTo}
                        className="text-[#e51a59] font-medium underline hover:opacity-80"
                      >
                        {data.qcgLinkLabel}
                      </Link>
                      .
                    </>
                  ) : (
                    <>
                      Erfahre in unserem Leitfaden alles zum Thema{" "}
                      <Link
                        to={data.fundingLinkTo}
                        className="text-[#e51a59] font-medium underline hover:opacity-80"
                      >
                        {data.fundingLinkLabel}
                      </Link>{" "}
                      oder informiere dich über das{" "}
                      <Link
                        to={data.qcgLinkTo}
                        className="text-[#e51a59] font-medium underline hover:opacity-80"
                      >
                        {data.qcgLinkLabel}
                      </Link>
                      .
                    </>
                  )}
                </p>

                <ul className="space-y-2.5">
                  {data.fundingBullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <CheckCircleIcon className="w-4 h-4 text-[#e51a59] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                style={{ background: SOFT_BG }}
                className="lg:col-span-4 rounded-2xl p-6 border border-gray-100 text-center"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-gray-400 mb-1">
                  {lang === "en" ? "Tuition with Voucher" : "Kursgebühr mit Gutschein"}
                </p>
                <p style={{ color: PRIMARY }} className="text-4xl font-semibold tracking-tight mb-1">
                  0 €
                </p>
                <p className="text-xs text-gray-500 mb-5">
                  {lang === "en"
                    ? "100% covered by Agentur für Arbeit / Jobcenter"
                    : "100 % Kostenübernahme durch Arbeitsagentur / Jobcenter"}
                </p>
                <Link
                  to={consultPath}
                  style={{ background: PRIMARY }}
                  className="w-full inline-flex items-center justify-center gap-2 text-white font-medium px-5 py-3 rounded-xl text-sm hover:opacity-90 transition-opacity mb-3"
                >
                  <span>{lang === "en" ? "Free consultation" : "Kostenlose Beratung"}</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
                <Link
                  to={data.fundingLinkTo}
                  className="block text-xs font-medium text-[#1a1d2e] hover:text-[#e51a59] transition-colors"
                >
                  {lang === "en"
                    ? "→ How to get a Bildungsgutschein"
                    : "→ So beantragst du den Bildungsgutschein"}
                </Link>
              </div>
            </div>

            {courseImages?.squareFunding && (
              <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 flex justify-center">
                  <img
                    src={courseImages.squareFunding.src}
                    alt={courseImages.squareFunding.alt[lang]}
                    className="w-full max-w-[420px] aspect-square object-cover rounded-2xl sm:rounded-3xl shadow-md border border-gray-100"
                    loading="lazy"
                  />
                </div>
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 bg-[#fde8ef] text-[#e51a59] text-xs font-medium px-3 py-1 rounded-full mb-3">
                    <ShieldCheckIcon className="w-3.5 h-3.5" />
                    <span>{lang === "en" ? "AZAV Certified Process" : "AZAV-zertifizierter Ablauf"}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#1a1d2e] mb-3">
                    {lang === "en"
                      ? "Your Path to 100% Funding in 3 Simple Steps"
                      : "In 3 einfachen Schritten zu deiner 100 % Förderung"}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                    {lang === "en"
                      ? "Our experienced education advisors assist you throughout every step with your local Agentur für Arbeit or Jobcenter. We provide all the required course registration papers so you can focus entirely on learning."
                      : "Unsere Bildungsberater unterstützen dich bei der Beantragung bei deiner Agentur für Arbeit oder deinem Jobcenter. Wir stellen alle notwendigen AZAV-Unterlagen für dich bereit, damit du dich ganz auf deinen Kurs konzentrieren kannst."}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-[#f6f7fb] p-3.5 rounded-xl border border-gray-100">
                      <span className="text-xs font-medium text-[#e51a59]">1. {lang === "en" ? "Step" : "Schritt"}</span>
                      <p className="text-xs font-semibold text-gray-800 mt-1">
                        {lang === "en" ? "Free Consultation" : "Kostenlose Beratung"}
                      </p>
                    </div>
                    <div className="bg-[#f6f7fb] p-3.5 rounded-xl border border-gray-100">
                      <span className="text-xs font-medium text-[#e51a59]">2. {lang === "en" ? "Step" : "Schritt"}</span>
                      <p className="text-xs font-semibold text-gray-800 mt-1">
                        {lang === "en" ? "Get Voucher" : "Gutschein erhalten"}
                      </p>
                    </div>
                    <div className="bg-[#f6f7fb] p-3.5 rounded-xl border border-gray-100">
                      <span className="text-xs font-medium text-[#e51a59]">3. {lang === "en" ? "Step" : "Schritt"}</span>
                      <p className="text-xs font-semibold text-gray-800 mt-1">
                        {lang === "en" ? "Start Learning" : "Kurs starten"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================================
          8. KARİYER / BERUFE NACH DER WEITERBILDUNG (Component B9) — H2: careerH2
          ===================================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="max-w-3xl mb-10">
            <div
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: PRIMARY }}
            >
              {lang === "en" ? "CAREER PATHS & ROLES" : "BERUFSBILDER & PERSPEKTIVEN"}
            </div>
            <h2 className="font-semibold tracking-[-0.02em] text-2xl sm:text-3xl mb-3" style={{ color: DARK }}>
              {data.careerH2}
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              {data.careerIntro}
            </p>
          </div>

          {courseImages?.landscapeCareer && (
            <div className="mb-10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-gray-100">
              <img
                src={courseImages.landscapeCareer.src}
                alt={courseImages.landscapeCareer.alt[lang]}
                className="w-full max-h-[380px] sm:max-h-[420px] object-cover"
                loading="lazy"
              />
            </div>
          )}

          <div
            className={`grid gap-6 ${
              data.careerRoles.length === 4
                ? "md:grid-cols-2 lg:grid-cols-4"
                : data.careerRoles.length === 3
                ? "md:grid-cols-3"
                : "md:grid-cols-2"
            }`}
          >
            {data.careerRoles.map((role, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-[#fde8ef] text-[#e51a59] flex items-center justify-center">
                      <BriefcaseIcon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-[#1a1d2e] mb-2">
                    <Link
                      to={role.guideUrl}
                      className="hover:text-[#e51a59] transition-colors"
                    >
                      {role.title}
                    </Link>
                  </h3>

                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4">
                    {role.desc}
                  </p>
                </div>

                <Link
                  to={role.guideUrl}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#e51a59] hover:underline pt-3 border-t border-gray-100"
                >
                  <span>{role.guideLabel}</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          8b. KONU KÜMESİ / RATGEBER ZUM THEMA (Component B17) — H2: clusterH2
          (Strictly placed between Career and Why Clarusway per SEO Plan Page 20 & 25)
          ===================================================================== */}
      {data.clusterGuides.length > 0 && (
        <section className="py-16 bg-[#FFF8FA] border-y border-[#F3D3DC]/60">
          <div className="max-w-[1200px] mx-auto px-5">
            <div className="max-w-3xl mb-10">
              <div
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: PRIMARY }}
              >
                {lang === "en" ? "KNOWLEDGE HUB & GUIDES" : "WISSENSDATENBANK & RATGEBER"}
              </div>
              <h2 className="font-semibold tracking-[-0.02em] text-2xl sm:text-3xl mb-3" style={{ color: DARK }}>
                {data.clusterH2}
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                {data.clusterIntro}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.clusterGuides.map((g, i) => (
                <article
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#e51a59]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium px-3 py-1 rounded-full bg-[#fde8ef] text-[#e51a59] mb-3">
                      <BookOpenIcon className="w-3.5 h-3.5" />
                      <span>{g.badge}</span>
                    </span>
                    <h3 className="text-lg font-semibold text-[#1a1d2e] mb-2 leading-snug">
                      <Link to={g.to} className="hover:text-[#e51a59] transition-colors">
                        {g.title}
                      </Link>
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4">
                      {g.desc}
                    </p>
                  </div>

                  <Link
                    to={g.to}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#e51a59] hover:underline pt-3 border-t border-gray-100"
                  >
                    <span>{g.title}</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================================
          9. NEDEN CLARUSWAY / WARUM CLARUSWAY (Component B10) — H2: whyH2
          ===================================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: PRIMARY }}
            >
              {lang === "en" ? "THE CLARUSWAY ADVANTAGE" : "DEINE VORTEILE"}
            </div>
            <h2 className="font-semibold tracking-[-0.02em] text-3xl md:text-4xl mb-3" style={{ color: DARK }}>
              {data.whyH2}
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              {data.whyIntro}
            </p>
          </div>

          {courseImages?.landscapeWhy && (
            <div className="mb-10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-gray-100">
              <img
                src={courseImages.landscapeWhy.src}
                alt={courseImages.landscapeWhy.alt[lang]}
                className="w-full max-h-[380px] sm:max-h-[420px] object-cover"
                loading="lazy"
              />
            </div>
          )}

          {data.partnerHighlight && (
            <div
              style={{ backgroundColor: DARK }}
              className="rounded-2xl p-6 sm:p-8 text-white mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div>
                <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-[#e51a59] text-white mb-2">
                  {data.partnerHighlight.badge}
                </span>
                <h3 className="text-xl font-semibold mb-1">{data.partnerHighlight.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
                  {data.partnerHighlight.desc}
                </p>
              </div>
              <div className="shrink-0 bg-white/10 border border-white/15 rounded-xl px-5 py-3 text-center">
                <p className="text-xs text-gray-300">Amazon Web Services</p>
                <p className="text-sm font-medium text-white">Select Tier Partner</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.whyItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-9 h-9 rounded-xl bg-[#fde8ef] text-[#e51a59] flex items-center justify-center mb-3">
                  <CheckCircleIcon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-base mb-1.5" style={{ color: DARK }}>
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          10. YORUMLAR / ALUMNI ERFAHRUNGEN (Component B12) — H2: reviewsH2
          ===================================================================== */}
      <section className="py-20" style={{ background: SOFT_BG }}>
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: PRIMARY }}
              >
                {lang === "en" ? "ALUMNI" : "ALUMNI"}
              </div>
              <h2 className="font-semibold tracking-[-0.02em] text-3xl" style={{ color: DARK }}>
                {data.reviewsH2}
              </h2>
            </div>

            <div className="inline-flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-4 py-2.5 shadow-sm">
              <div className="flex text-[#e51a59]">
                {[1, 2, 3, 4, 5].map((s) => (
                  <StarIcon key={s} className="w-4 h-4" />
                ))}
              </div>
              <span className="text-xs font-medium text-[#1a1d2e]">
                4.9 / 5 · Course Report & Career Karma
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.reviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex flex-col justify-between"
              >
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  “{rev.quote}”
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div
                      style={{ background: PRIMARY }}
                      className="w-10 h-10 rounded-full text-white font-medium text-sm flex items-center justify-center shrink-0"
                    >
                      {rev.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-sm" style={{ color: DARK }}>
                        {rev.name}
                      </div>
                      <div className="text-xs text-gray-400">{rev.role}</div>
                    </div>
                  </div>
                  <a
                    href={rev.platformUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-[#e51a59] hover:underline inline-flex items-center gap-1"
                  >
                    <span>{rev.platform}</span>
                    <ExternalLinkIcon className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          11. FAQ (Component B13) — H2: faqH2
          ===================================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <div
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: PRIMARY }}
            >
              FAQ
            </div>
            <h2 className="font-semibold tracking-[-0.02em] text-3xl mb-4" style={{ color: DARK }}>
              {data.faqH2}
            </h2>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              {lang === "en"
                ? "Have questions about the curriculum, English live classes, or how to apply for your Bildungsgutschein in Germany? Our advisory team is happy to help."
                : "Hast du Fragen zum Lehrplan, zum Live-Unterricht oder zur Förderung mit Bildungsgutschein? Unsere Studienberatung hilft dir gerne persönlich weiter."}
            </p>
            <div className="space-y-2.5 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#e51a59]" />
                <span>Bataver Str. 84, 41462 Neuss</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#e51a59]" />
                <span>info@clarusway.de</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#e51a59]" />
                <span>+49 2131 776 2749</span>
              </div>
            </div>
            <Link
              to={consultPath}
              style={{ background: PRIMARY }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <span>{lang === "en" ? "Free consultation" : "Kostenlose Beratung"}</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="md:col-span-7 space-y-3">
            {data.faqs.map((faq, idx) => (
              <details
                key={idx}
                open={idx === 0}
                className="group rounded-xl overflow-hidden border border-gray-200 bg-white"
              >
                <summary
                  style={{ background: PRIMARY }}
                  className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none select-none text-white hover:opacity-95 transition-opacity"
                >
                  <h3 className="text-sm font-medium text-white text-left">
                    {faq.q}
                  </h3>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="shrink-0 transition-transform duration-200 group-open:rotate-180"
                  >
                    <path
                      d="M2 4l4 4 4-4"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed bg-white">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          12. WEITERE IT-KURSE (Component B14) — H2: relatedH2
          ===================================================================== */}
      <section className="py-16" style={{ background: SOFT_BG }}>
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <div
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: PRIMARY }}
              >
                {lang === "en" ? "OTHER COURSES" : "WEITERE KURSE"}
              </div>
              <h2 className="font-semibold tracking-[-0.02em] text-3xl" style={{ color: DARK }}>
                {data.relatedH2}
              </h2>
            </div>
            <Link
              to={coursesHubPath}
              className="text-xs sm:text-sm font-medium text-[#e51a59] hover:underline inline-flex items-center gap-1.5"
            >
              <span>
                {lang === "en" ? "Compare all IT courses" : "Alle IT-Kurse vergleichen"}
              </span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.relatedCourses.map((rc, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span
                    className="text-xs font-medium px-3 py-1 rounded-full self-start inline-block mb-3"
                    style={{ background: "#fff0f4", color: PRIMARY }}
                  >
                    {rc.badge}
                  </span>
                  <h3 className="font-semibold text-base mb-2" style={{ color: DARK }}>
                    <Link to={rc.to} className="hover:text-[#e51a59] transition-colors">
                      {rc.title}
                    </Link>
                  </h3>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-5">
                    <span className="inline-flex items-center gap-1">
                      <ClockIcon className="w-3.5 h-3.5 text-[#e51a59]" />
                      {rc.duration}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <CalendarIcon className="w-3.5 h-3.5 text-[#e51a59]" />
                      {rc.nextStart}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <GlobeIcon className="w-3.5 h-3.5 text-[#e51a59]" />
                      {lang === "en" ? "English" : "Englisch"}
                    </span>
                  </div>
                </div>

                <Link
                  to={rc.to}
                  className="text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all pt-3 border-t border-gray-100"
                  style={{ color: PRIMARY }}
                >
                  <span>{rc.title} →</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          13. SON CTA BANDI (Component B16) — H2: ctaH2
          ===================================================================== */}
      <section
        className="py-14"
        style={{ background: `linear-gradient(135deg, ${DARK} 0%, #2d1b3d 100%)` }}
      >
        <div className="max-w-[800px] mx-auto px-5 text-center">
          <h2 className="font-semibold tracking-[-0.02em] text-3xl text-white mb-4">{data.ctaH2}</h2>
          <p className="text-gray-300 text-base mb-8">{data.ctaText}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={consultPath}
              onClick={() =>
                trackClaruswayEvent("beratung_angefragt", {
                  source: `bottom_cta_${data.key}`,
                  lang,
                })
              }
              style={{ background: PRIMARY }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <span>{lang === "en" ? "Free consultation" : "Kostenlose Beratung"}</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <a
              href="#syllabus-download"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium text-sm border border-white/35 text-white hover:border-white/75 hover:bg-white/5 transition-colors"
            >
              <DownloadIcon className="w-4 h-4" />
              <span>{lang === "en" ? "Download syllabus" : "Lehrplan herunterladen"}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
