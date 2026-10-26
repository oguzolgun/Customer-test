import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { CourseKey, getCourseData } from "../data/coursesData";
import { mapCourseKeyToModularPath } from "../data/modularPathsData";
import { ModularPathHeroVisual } from "../components/ModularPathHeroVisual";
import { SeoHead, trackClaruswayEvent } from "../components/SeoHead";
import { Breadcrumb } from "../components/Breadcrumb";
import { ProgramSelector } from "../components/ProgramSelector";
import {
  CheckCircleIcon,
  ArrowRightIcon,
  DownloadIcon,
  ShieldCheckIcon,
  BriefcaseIcon,
  BookOpenIcon,
  StarIcon,
  SparklesIcon,
  CalendarIcon,
  ClockIcon,
  GlobeIcon,
  ExternalLinkIcon,
} from "../components/Icons";

const PRIMARY = "#e51a59";
const DARK = "#1a1d2e";
const SOFT_BG = "#f6f7fb";

interface CourseTemplatePageProps {
  courseKey: CourseKey;
}

export function CourseTemplatePage({ courseKey }: CourseTemplatePageProps) {
  const { lang } = useLanguage();
  const data = getCourseData(courseKey, lang);

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
      courseMode: "online",
      inLanguage: "en",
      startDate: dateStr,
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

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://clarusway.de/#organization",
        name: "Clarusway GmbH",
        url: "https://clarusway.de",
        logo: "https://clarusway.de/assets/clarusway-logo.png",
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
        name: data.h1,
        alternateName: data.metaTitle,
        description: data.metaDescription,
        url: canonicalPageUrl,
        inLanguage: lang,
        provider: {
          "@id": "https://clarusway.de/#organization",
        },
        syllabusSections: data.modules?.map((m) => ({
          "@type": "Syllabus",
          name: m.title,
          timeRequired: m.duration,
          description: m.topics?.join(", ") || m.project || "",
        })),
        hasCourseInstance: courseInstances,
        offers: {
          "@type": "Offer",
          category: data.isOrientation ? "AVGS" : "Bildungsgutschein",
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
    <div style={{ fontFamily: "'Poppins', sans-serif", color: DARK }} className="bg-white">
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
            {/* Tech Badges at Top (Exact Figma Make position) */}
            <div className="flex flex-wrap gap-2 mb-5">
              {data.heroBadges.map((badge) => (
                <span
                  key={badge}
                  className="text-xs font-bold px-3 py-1 rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm"
                >
                  {badge}
                </span>
              ))}
            </div>

            <h1
              className="font-bold text-3xl sm:text-4xl md:text-5xl leading-[1.15] mb-4"
              style={{ color: DARK }}
            >
              {data.h1}
            </h1>

            {/* 5 Pink Stars + Career Karma Rating (Visual only, no AggregateRating schema) */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill={PRIMARY}>
                    <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.13L8 10.5l-3.71 2.05.71-4.13-3-2.92 4.15-.75L8 1z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold text-gray-700">
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

            {/* Primary & Secondary CTAs (rounded-xl per Figma Make) */}
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm hover:opacity-90 transition-opacity shadow-sm"
              >
                <span>{lang === "en" ? "Free consultation" : "Kostenlose Beratung"}</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>

              <a
                href="#syllabus-download"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border-2 transition-colors hover:bg-gray-50"
                style={{ borderColor: DARK, color: DARK }}
              >
                <DownloadIcon className="w-4 h-4" />
                <span>{lang === "en" ? "Download syllabus" : "Lehrplan herunterladen"}</span>
              </a>
            </div>
          </div>

          {/* Right Column — Modular Animated Curriculum Path or Terminal Mockup */}
          <div className="relative flex justify-center w-full">
            {modularPathConfig ? (
              <div className="relative w-full max-w-[480px]">
                <ModularPathHeroVisual
                  initialCourseId={modularPathConfig.pathId}
                  defaultModuleIndex={modularPathConfig.defaultModuleIndex}
                  lang={lang}
                  loopWithinCourse={true}
                />

                {/* Floating Badge Top-Right (15 Plätze pro Kurs) */}
                <div className="hidden sm:block absolute -top-3 -right-3 bg-white rounded-2xl shadow-lg px-4 py-3 border border-gray-100 z-10 pointer-events-none">
                  <div className="text-2xl font-extrabold" style={{ color: PRIMARY }}>
                    15
                  </div>
                  <div className="text-xs text-gray-500">
                    {lang === "en" ? "Seats per Cohort" : "Plätze pro Kurs"}
                  </div>
                </div>

                {/* Floating Badge Bottom-Left (AZAV zertifiziert & förderfähig) */}
                <div className="hidden sm:block absolute -bottom-3 -left-3 bg-white rounded-2xl shadow-lg px-4 py-3 border border-gray-100 z-10 pointer-events-none">
                  <div className="text-sm font-bold" style={{ color: DARK }}>
                    AZAV
                  </div>
                  <div className="text-xs font-semibold" style={{ color: PRIMARY }}>
                    {lang === "en" ? "certified & 100% funded" : "zertifiziert & förderfähig"}
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative w-full max-w-[440px]">
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

                  {/* Progress Bars inside Terminal Card */}
                  <div className="mt-6 pt-4 border-t border-gray-700 grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-white/5 rounded-xl p-3">
                      <div className="text-gray-400 mb-0.5">
                        {lang === "en" ? "Hands-on Live Labs" : "Praxis-Labs & Projekte"}
                      </div>
                      <div className="text-white font-bold">100% Live</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3">
                      <div className="text-gray-400 mb-0.5">
                        {lang === "en" ? "Voucher Coverage" : "Bildungsgutschein"}
                      </div>
                      <div className="text-emerald-400 font-bold">100% (0 €)</div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge Top-Right (15 Plätze pro Kurs) */}
                <div className="hidden sm:block absolute -top-3 -right-3 bg-white rounded-2xl shadow-lg px-4 py-3 border border-gray-100 z-10 pointer-events-none">
                  <div className="text-2xl font-extrabold" style={{ color: PRIMARY }}>
                    15
                  </div>
                  <div className="text-xs text-gray-500">
                    {lang === "en" ? "Seats per Cohort" : "Plätze pro Kurs"}
                  </div>
                </div>

                {/* Floating Badge Bottom-Left (AZAV zertifiziert & förderfähig) */}
                <div className="hidden sm:block absolute -bottom-3 -left-3 bg-white rounded-2xl shadow-lg px-4 py-3 border border-gray-100 z-10 pointer-events-none">
                  <div className="text-sm font-bold" style={{ color: DARK }}>
                    AZAV
                  </div>
                  <div className="text-xs font-semibold" style={{ color: PRIMARY }}>
                    {lang === "en" ? "certified & 100% funded" : "zertifiziert & förderfähig"}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. STATS BAR / ECKDATEN-LEISTE (Component B2) — Exact Figma Make Bar
          ===================================================================== */}
      <section style={{ background: DARK }} className="py-5">
        <div className="max-w-[1200px] mx-auto px-5 flex flex-wrap justify-between gap-y-3 gap-x-6">
          {data.infoStrip.map(([val, label], idx) => (
            <div key={idx} className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-white">{val}</span>
              <span className="text-sm text-gray-400">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          3. TARGET AUDIENCE (Component B3) — Pure White Section (#ffffff)
          ===================================================================== */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="max-w-3xl mb-10">
            <div
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: PRIMARY }}
            >
              {lang === "en" ? "Target Audience & Prerequisites" : "Zielgruppe & Voraussetzungen"}
            </div>
            <h2 className="font-bold text-2xl sm:text-3xl mb-3" style={{ color: DARK }}>
              {data.audienceH2}
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              {data.audienceIntro}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {data.audienceCards.map((card, i) => (
              <div
                key={i}
                style={{ background: SOFT_BG }}
                className="rounded-2xl p-7 border border-gray-100 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span
                      style={{
                        backgroundColor: i === 0 ? "#fde8ef" : "#e8eaf6",
                        color: i === 0 ? PRIMARY : "#3949ab",
                      }}
                      className="text-xs font-bold px-3 py-1 rounded-full"
                    >
                      {card.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1d2e] mb-3">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{card.desc}</p>
                </div>

                <ul className="space-y-2.5 pt-4 border-t border-gray-200/70">
                  {card.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <CheckCircleIcon className="w-4 h-4 text-[#e51a59] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. PROGRAM SELECTOR (Component B4) — ONLY Section with #f8f5f1 Cream!
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

          {/* Direct Entry / Technical Assessment Box (AI Engineering & Cyber Security) */}
          {data.directEntryInfo && (
            <section className="py-10 bg-white border-b border-gray-100">
              <div className="max-w-[1200px] mx-auto px-5">
                <div className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#e51a59] uppercase tracking-wider mb-2">
                    <SparklesIcon className="w-4 h-4" />
                    <span>
                      {lang === "en"
                        ? "Modular Direct Entry (Technical Assessment)"
                        : "Modularer Direkteinstieg (Einstufungsprüfung)"}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1d2e] mb-2">
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
          5 & 6. CURRICULUM + SYLLABUS PDF DOWNLOAD (Components B5 + B6)
          Exact Figma Make Stacked Module Cards on Pure White (#ffffff)
          ===================================================================== */}
      <section id="curriculum" className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: PRIMARY }}
            >
              {lang === "en" ? "CURRICULUM" : "LEHRPLAN"}
            </div>
            <h2 className="font-bold text-3xl md:text-4xl mb-3" style={{ color: DARK }}>
              {data.curriculumH2}
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              {data.curriculumIntro}
            </p>
          </div>

          {/* Full-Width Stacked Module Bars (Exact Figma Make WasWirstDuLernen Design) */}
          {data.modules.length > 0 && (
            <div className="space-y-5 mb-12">
              {data.modules.map((mod) => (
                <div
                  key={mod.id}
                  className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm bg-white"
                >
                  {/* Tinted Header Bar (mod.color + "18") */}
                  <div
                    className="px-6 py-3.5 flex flex-wrap items-center justify-between gap-3"
                    style={{ background: mod.color + "18", color: mod.color }}
                  >
                    <h3 className="font-bold text-sm sm:text-base" style={{ color: mod.color }}>
                      {mod.title.startsWith("Modul") || mod.title.startsWith("Module")
                        ? mod.title
                        : `${mod.label} — ${mod.title}`}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
                      <span className="inline-flex items-center gap-1 bg-white/80 px-2.5 py-1 rounded-full">
                        <ClockIcon className="w-3.5 h-3.5" />
                        {mod.duration}
                      </span>
                      {mod.prerequisite && (
                        <span className="hidden sm:inline-block bg-white/80 px-2.5 py-1 rounded-full text-gray-700 font-medium">
                          {lang === "en" ? "Entry: " : "Einstieg: "}
                          {mod.prerequisite}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* 2-Column Topic Grid with Colored Dots */}
                  <div className="px-6 py-5 grid grid-cols-1 md:grid-cols-2 gap-y-2.5 gap-x-8 bg-white">
                    {mod.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ background: mod.color }}
                        />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>

                  {/* Capstone Project Footer */}
                  {mod.project && (
                    <div
                      style={{ background: SOFT_BG }}
                      className="px-6 py-3 border-t border-gray-100 flex flex-wrap items-center gap-2 text-xs text-gray-600"
                    >
                      <span className="font-bold uppercase tracking-wider text-[#e51a59]">
                        {lang === "en" ? "Capstone Project:" : "Praxisprojekt:"}
                      </span>
                      <span className="font-medium text-gray-800">{mod.project}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Special Feature Box (AI Tools in Full Stack / KI im SOC / Upgrade Path) */}
          {data.specialFeature && (
            <div
              style={{ background: SOFT_BG }}
              className="rounded-2xl p-7 sm:p-9 border border-gray-100 mb-12"
            >
              {lang === "en" && data.key === "full-stack" ? (
                <h3 className="text-xl sm:text-2xl font-bold text-[#1a1d2e] mb-3">
                  {data.specialFeature.h2}
                </h3>
              ) : (
                <h2 className="text-xl sm:text-2xl font-bold text-[#1a1d2e] mb-3">
                  {data.specialFeature.h2}
                </h2>
              )}
              <p className="text-gray-600 text-sm sm:text-base mb-6 max-w-3xl leading-relaxed">
                {data.specialFeature.intro}
              </p>

              <div className="grid md:grid-cols-3 gap-5">
                {data.specialFeature.cards.map((c, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
                  >
                    <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#fde8ef] text-[#e51a59] mb-2">
                      {c.badge}
                    </span>
                    <p className="font-bold text-[#1a1d2e] text-base mb-1.5">{c.title}</p>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>

              {data.specialFeature.linkTo && data.specialFeature.linkLabel && (
                <div className="mt-6">
                  <Link
                    to={data.specialFeature.linkTo}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#e51a59] hover:underline"
                  >
                    <span>{data.specialFeature.linkLabel}</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* Component B6: Syllabus PDF Download Box (lehrplan_download GA4 event) */}
          <div
            id="syllabus-download"
            style={{ backgroundColor: DARK }}
            className="rounded-2xl p-7 sm:p-9 text-white shadow-xl"
          >
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-2 bg-white/10 text-xs font-semibold px-3 py-1 rounded-full mb-3 text-[#f472b6]">
                  <DownloadIcon className="w-3.5 h-3.5" />
                  <span>
                    {lang === "en"
                      ? `PDF Syllabus (${data.pdfFileName})`
                      : `PDF-Lehrplan (${data.pdfFileName})`}
                  </span>
                </div>
                <p className="text-xl sm:text-2xl font-bold mb-2">
                  {lang === "en"
                    ? "Download the complete weekly syllabus (PDF)"
                    : "Vollständigen Lehrplan als PDF herunterladen"}
                </p>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {lang === "en"
                    ? "Get the detailed week-by-week breakdown, learning objectives, tools, and official AZAV Maßnahme details for your Agentur für Arbeit or Jobcenter advisor."
                    : "Erhalte die detaillierte Wochenübersicht, Lernziele, Tools sowie alle relevanten AZAV-Maßnahmedaten für deine Vermittlungsfachkraft bei der Agentur für Arbeit oder dem Jobcenter."}
                </p>
              </div>

              <div className="lg:col-span-6">
                {syllabusSubmitted ? (
                  <div className="bg-white/10 border border-emerald-400/40 rounded-xl p-5 text-sm">
                    <p className="font-bold text-emerald-300 mb-1">
                      {lang === "en"
                        ? "✓ Your syllabus PDF is ready!"
                        : "✓ Dein Lehrplan-PDF steht bereit!"}
                    </p>
                    <p className="text-gray-300 text-xs mb-3">
                      {lang === "en"
                        ? `File: ${data.pdfFileName} — a copy has also been prepared for ${syllabusEmail}.`
                        : `Datei: ${data.pdfFileName} — eine Kopie wurde zudem für ${syllabusEmail} vorbereitet.`}
                    </p>
                    <Link
                      to={consultPath}
                      style={{ backgroundColor: PRIMARY }}
                      className="inline-flex items-center gap-2 text-white text-xs font-bold px-4 py-2.5 rounded-xl"
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
                  <form onSubmit={handleSyllabusSubmit} className="grid sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      value={syllabusName}
                      onChange={(e) => setSyllabusName(e.target.value)}
                      placeholder={lang === "en" ? "Full name *" : "Vor- und Nachname *"}
                      className="bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#e51a59]"
                    />
                    <input
                      type="email"
                      required
                      value={syllabusEmail}
                      onChange={(e) => setSyllabusEmail(e.target.value)}
                      placeholder={lang === "en" ? "Email address *" : "E-Mail-Adresse *"}
                      className="bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#e51a59]"
                    />
                    <input
                      type="tel"
                      value={syllabusPhone}
                      onChange={(e) => setSyllabusPhone(e.target.value)}
                      placeholder={lang === "en" ? "Phone (optional)" : "Telefon (optional)"}
                      className="bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#e51a59]"
                    />
                    <button
                      type="submit"
                      style={{ backgroundColor: PRIMARY }}
                      className="inline-flex items-center justify-center gap-2 text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:opacity-90 transition-opacity cursor-pointer"
                    >
                      <DownloadIcon className="w-4 h-4" />
                      <span>
                        {lang === "en" ? "Download syllabus" : "Lehrplan herunterladen"}
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. COURSE OVERVIEW & FORMAT (Component B7) — #f6f7fb Soft Cool BG
          Exact Figma Make Kursübersicht 2-Column Layout
          ===================================================================== */}
      <section className="py-16" style={{ background: SOFT_BG }}>
        <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <div
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: PRIMARY }}
            >
              {lang === "en" ? "COURSE OVERVIEW" : "KURSÜBERSICHT"}
            </div>
            <h2 className="font-bold text-3xl mb-4" style={{ color: DARK }}>
              {data.formatH2}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              {data.formatIntro}
            </p>

            <div className="space-y-3">
              {data.formatHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
                >
                  <h3 className="text-sm sm:text-base font-bold text-[#1a1d2e] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Clean White Key-Value Card + Pink Rounded-XL CTA */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <table className="w-full text-left border-collapse mb-6">
              <tbody>
                {data.summaryTable.map(([label, val], idx) => (
                  <tr key={idx} className="border-b border-gray-100 last:border-b-0">
                    <th className="py-2.5 pr-3 text-sm font-semibold text-gray-700 align-top min-w-[140px]">
                      {label}:
                    </th>
                    <td className="py-2.5 text-sm text-gray-600 align-top">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <Link
              to={consultPath}
              onClick={() =>
                trackClaruswayEvent("beratung_angefragt", {
                  source: `overview_${data.key}`,
                  lang,
                })
              }
              style={{ background: PRIMARY }}
              className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-bold text-sm hover:opacity-90 transition-opacity"
            >
              {lang === "en" ? "Free consultation" : "Kostenlose Beratung"}
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================================
          8. CAREER & SALARIES (Component B9) — Pure White (#ffffff)
          ===================================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="max-w-3xl mb-10">
            <div
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: PRIMARY }}
            >
              {lang === "en" ? "CAREER & SALARIES" : "KARRIERE & GEHALT"}
            </div>
            <h2 className="font-bold text-2xl sm:text-3xl mb-3" style={{ color: DARK }}>
              {data.careerH2}
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              {data.careerIntro}
            </p>
          </div>

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
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-[#fde8ef] text-[#e51a59] flex items-center justify-center">
                      <BriefcaseIcon className="w-4 h-4" />
                    </div>
                    <a
                      href={role.salarySourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-gray-400 hover:text-[#e51a59] inline-flex items-center gap-1"
                    >
                      <span>{role.salarySource}</span>
                      <ExternalLinkIcon className="w-3 h-3" />
                    </a>
                  </div>

                  <h3 className="text-lg font-bold text-[#1a1d2e] mb-2">
                    <Link
                      to={role.guideUrl}
                      className="hover:text-[#e51a59] transition-colors"
                    >
                      {role.title}
                    </Link>
                  </h3>

                  <div
                    style={{ background: SOFT_BG }}
                    className="rounded-xl p-3 mb-4 border border-gray-100"
                  >
                    <p className="text-[11px] text-gray-500">
                      {lang === "en" ? "Median Salary (Germany)" : "Median-Gehalt (Deutschland)"}
                    </p>
                    <p style={{ color: PRIMARY }} className="text-xl font-bold">
                      {role.salaryMedian}
                    </p>
                    <p className="text-[11px] text-gray-500">
                      {lang === "en" ? "Range: " : "Spanne: "}
                      {role.salaryRange}
                    </p>
                  </div>

                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4">
                    {role.desc}
                  </p>
                </div>

                <Link
                  to={role.guideUrl}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e51a59] hover:underline pt-3 border-t border-gray-100"
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
          9. FUNDING BOX (Component B8) — #f6f7fb Soft Cool BG
          ===================================================================== */}
      <section style={{ background: SOFT_BG }} className="py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-100 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 bg-[#fde8ef] text-[#e51a59] text-xs font-bold px-3.5 py-1 rounded-full mb-3">
                  <ShieldCheckIcon className="w-4 h-4" />
                  <span>
                    {lang === "en"
                      ? "100% State-Funded in Germany (AZAV)"
                      : "100 % Staatliche Förderung nach AZAV"}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e] mb-3">
                  {data.fundingH2}
                </h2>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                  {data.fundingText}{" "}
                  {lang === "en" ? (
                    <>
                      Read the step-by-step guide on{" "}
                      <Link
                        to={data.fundingLinkTo}
                        className="text-[#e51a59] font-semibold underline hover:opacity-80"
                      >
                        {data.fundingLinkLabel}
                      </Link>{" "}
                      or learn about{" "}
                      <Link
                        to={data.qcgLinkTo}
                        className="text-[#e51a59] font-semibold underline hover:opacity-80"
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
                        className="text-[#e51a59] font-semibold underline hover:opacity-80"
                      >
                        {data.fundingLinkLabel}
                      </Link>{" "}
                      oder informiere dich über das{" "}
                      <Link
                        to={data.qcgLinkTo}
                        className="text-[#e51a59] font-semibold underline hover:opacity-80"
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
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                  {lang === "en" ? "Tuition with Voucher" : "Kursgebühr mit Gutschein"}
                </p>
                <p style={{ color: PRIMARY }} className="text-4xl font-extrabold mb-1">
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
                  className="w-full inline-flex items-center justify-center gap-2 text-white font-bold px-5 py-3 rounded-xl text-sm hover:opacity-90 transition-opacity mb-3"
                >
                  <span>{lang === "en" ? "Free consultation" : "Kostenlose Beratung"}</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
                <Link
                  to={data.fundingLinkTo}
                  className="block text-xs font-semibold text-[#1a1d2e] hover:text-[#e51a59] transition-colors"
                >
                  {lang === "en"
                    ? "→ How to get a Bildungsgutschein"
                    : "→ So beantragst du den Bildungsgutschein"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          10. WHY CLARUSWAY — Pure White (#ffffff) + Clean White Cards
          ===================================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: PRIMARY }}
            >
              {lang === "en" ? "THE CLARUSWAY ADVANTAGE" : "DEINE VORTEILE"}
            </div>
            <h2 className="font-bold text-3xl md:text-4xl mb-3" style={{ color: DARK }}>
              {data.whyH2}
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              {data.whyIntro}
            </p>
          </div>

          {data.partnerHighlight && (
            <div
              style={{ backgroundColor: DARK }}
              className="rounded-2xl p-6 sm:p-8 text-white mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div>
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-[#e51a59] text-white mb-2">
                  {data.partnerHighlight.badge}
                </span>
                <h3 className="text-xl font-bold mb-1">{data.partnerHighlight.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
                  {data.partnerHighlight.desc}
                </p>
              </div>
              <div className="shrink-0 bg-white/10 border border-white/15 rounded-xl px-5 py-3 text-center">
                <p className="text-xs text-gray-300">Amazon Web Services</p>
                <p className="text-sm font-bold text-white">Select Tier Partner</p>
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
                <h3 className="font-bold text-base mb-1.5" style={{ color: DARK }}>
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          11. GRADUATE REVIEWS / ALUMNI (Component B12) — #f6f7fb Soft Cool BG
          ===================================================================== */}
      <section className="py-20" style={{ background: SOFT_BG }}>
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div
                className="text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: PRIMARY }}
              >
                {lang === "en" ? "ALUMNI" : "ALUMNI"}
              </div>
              <h2 className="font-bold text-3xl" style={{ color: DARK }}>
                {data.reviewsH2}
              </h2>
            </div>

            {/* Visual-only rating badge */}
            <div className="inline-flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-4 py-2.5 shadow-sm">
              <div className="flex text-[#e51a59]">
                {[1, 2, 3, 4, 5].map((s) => (
                  <StarIcon key={s} className="w-4 h-4" />
                ))}
              </div>
              <span className="text-xs font-semibold text-[#1a1d2e]">
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
                      className="w-10 h-10 rounded-full text-white font-bold text-sm flex items-center justify-center shrink-0"
                    >
                      {rev.initials}
                    </div>
                    <div>
                      <div className="font-bold text-sm" style={{ color: DARK }}>
                        {rev.name}
                      </div>
                      <div className="text-xs text-gray-400">{rev.role}</div>
                    </div>
                  </div>
                  <a
                    href={rev.platformUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#e51a59] hover:underline inline-flex items-center gap-1"
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
          11b. TOPIC CLUSTER GUIDES (Component B17) — Pure White (#ffffff)
          ===================================================================== */}
      {data.clusterGuides.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-[1200px] mx-auto px-5">
            <div className="max-w-3xl mb-10">
              <div
                className="text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: PRIMARY }}
              >
                {lang === "en" ? "KNOWLEDGE HUB & GUIDES" : "WISSENSDATENBANK & RATGEBER"}
              </div>
              <h2 className="font-bold text-2xl sm:text-3xl mb-3" style={{ color: DARK }}>
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
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1 rounded-full bg-[#fde8ef] text-[#e51a59] mb-3">
                      <BookOpenIcon className="w-3.5 h-3.5" />
                      <span>{g.badge}</span>
                    </span>
                    <h3 className="text-lg font-bold text-[#1a1d2e] mb-2 leading-snug">
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
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e51a59] hover:underline pt-3 border-t border-gray-100"
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
          12. RELATED COURSES (Component B14) — #f6f7fb Soft Cool BG
          Exact Figma Make WeitereKurse Layout
          ===================================================================== */}
      <section className="py-16" style={{ background: SOFT_BG }}>
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <div
                className="text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: PRIMARY }}
              >
                {lang === "en" ? "OTHER COURSES" : "WEITERE KURSE"}
              </div>
              <h2 className="font-bold text-3xl" style={{ color: DARK }}>
                {data.relatedH2}
              </h2>
            </div>
            <Link
              to={coursesHubPath}
              className="text-xs sm:text-sm font-semibold text-[#e51a59] hover:underline inline-flex items-center gap-1.5"
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
                    className="text-xs font-bold px-3 py-1 rounded-full self-start inline-block mb-3"
                    style={{ background: "#fff0f4", color: PRIMARY }}
                  >
                    {rc.badge}
                  </span>
                  <h3 className="font-bold text-base mb-2" style={{ color: DARK }}>
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
                  className="text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all pt-3 border-t border-gray-100"
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
          13. COURSE-SPECIFIC FAQ (Component B13) — Pure White (#ffffff)
          2-Column Figma Make Layout + Semantic <details><summary><h3>
          ===================================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Left Column (4 cols) */}
          <div className="md:col-span-5">
            <div
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: PRIMARY }}
            >
              FAQ
            </div>
            <h2 className="font-bold text-3xl mb-4" style={{ color: DARK }}>
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm hover:opacity-90 transition-opacity"
            >
              <span>{lang === "en" ? "Free consultation" : "Kostenlose Beratung"}</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Column (7 cols): Semantic <details><summary><h3> */}
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
                  <h3 className="text-sm font-semibold text-white text-left">
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
          14. FINAL CTA BANNER (Component B16) — Exact Figma Make CtaBanner
          ===================================================================== */}
      <section
        className="py-14"
        style={{ background: `linear-gradient(135deg, ${DARK} 0%, #2d1b3d 100%)` }}
      >
        <div className="max-w-[800px] mx-auto px-5 text-center">
          <h2 className="font-bold text-3xl text-white mb-4">{data.ctaH2}</h2>
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
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-bold text-sm hover:opacity-90 transition-opacity"
            >
              <span>{lang === "en" ? "Free consultation" : "Kostenlose Beratung"}</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <a
              href="#syllabus-download"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm border-2 border-white/30 text-white hover:border-white/70 transition-colors"
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
