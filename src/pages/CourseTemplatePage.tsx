import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { CourseKey, getCourseData } from "../data/coursesData";
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
  AwardIcon,
  ExternalLinkIcon,
} from "../components/Icons";

const PRIMARY = "#e51a59";
const DARK = "#1a1d2e";
const CREAM = "#f8f5f1";
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

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Course",
      name: data.h1,
      description: data.metaDescription,
      url: `${origin}${currentPath}`,
      inLanguage: "en",
      provider: {
        "@type": "EducationalOrganization",
        name: "Clarusway GmbH",
        sameAs: "https://clarusway.de",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Hellersbergstraße 14",
          addressLocality: "Neuss",
          postalCode: "41460",
          addressCountry: "DE",
        },
      },
      hasCourseInstance: courseInstances,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: data.isOrientation
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
              item: `${origin}${currentPath}`,
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
              item: `${origin}${currentPath}`,
            },
          ],
    },
  ];

  const breadcrumbItems = data.isOrientation
    ? [{ label: data.breadcrumbLabel }]
    : [{ label: coursesHubLabel, to: coursesHubPath }, { label: data.breadcrumbLabel }];

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
          1. HERO (Component B1) — Single H1 per page
          ===================================================================== */}
      <section style={{ backgroundColor: CREAM }} className="py-12 md:py-18 border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-[#fde8ef] text-[#e51a59] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-4">
                <span className="w-2 h-2 rounded-full bg-[#e51a59]" />
                <span>{data.eyebrow}</span>
              </div>

              <h1
                style={{ color: DARK, lineHeight: 1.15 }}
                className="text-3xl sm:text-4xl lg:text-[42px] font-bold mb-5 tracking-tight"
              >
                {data.h1}
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                {data.heroIntro}
              </p>

              <p className="text-xs sm:text-sm text-gray-500 mb-6 flex items-center gap-2">
                <ShieldCheckIcon className="w-4 h-4 text-[#e51a59] shrink-0" />
                <span>{data.heroSubnote}</span>
              </p>

              {/* Tech Stack Badges (span, no heading tags) */}
              <div className="flex flex-wrap gap-2 mb-8">
                {data.heroBadges.map((badge) => (
                  <span
                    key={badge}
                    className="bg-white border border-gray-200 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full shadow-2xs"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Primary & Secondary CTAs (Standardized per SEO Plan) */}
              <div className="flex flex-wrap gap-3.5 items-center">
                <Link
                  to={consultPath}
                  onClick={() =>
                    trackClaruswayEvent("beratung_angefragt", {
                      source: `hero_${data.key}`,
                      lang,
                    })
                  }
                  style={{ backgroundColor: PRIMARY }}
                  className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-full text-sm shadow-lg hover:opacity-95 transition-opacity"
                >
                  <span>{lang === "en" ? "Free consultation" : "Kostenlose Beratung"}</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>

                <a
                  href="#syllabus-download"
                  className="inline-flex items-center gap-2 border-2 border-[#1a1d2e] text-[#1a1d2e] font-semibold px-6 py-3.5 rounded-full text-sm hover:bg-[#1a1d2e] hover:text-white transition-colors"
                >
                  <DownloadIcon className="w-4 h-4" />
                  <span>{lang === "en" ? "Download syllabus" : "Lehrplan herunterladen"}</span>
                </a>
              </div>
            </div>

            {/* Right Column (5 cols) — Figma Terminal + Floating Badges */}
            <div className="lg:col-span-5 relative">
              <div
                style={{ backgroundColor: DARK }}
                className="rounded-2xl p-6 text-white shadow-2xl border border-white/10"
              >
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />
                    <span className="text-gray-400 text-xs ml-2 font-mono">
                      {data.terminalTitle}
                    </span>
                  </div>
                  <span className="text-[11px] bg-white/10 text-gray-300 px-2.5 py-0.5 rounded-full">
                    {lang === "en" ? "Live Lab" : "Live-Praxis"}
                  </span>
                </div>

                <div className="font-mono text-xs sm:text-sm space-y-2 mb-6 leading-relaxed">
                  {data.terminalLines.map((line, i) => (
                    <p key={i} style={{ color: line.color }}>
                      {line.text}
                    </p>
                  ))}
                </div>

                {/* Progress Bars inside Terminal Card */}
                <div className="space-y-2.5 pt-3 border-t border-white/10">
                  <div>
                    <div className="flex justify-between text-xs text-gray-300 mb-1">
                      <span>{lang === "en" ? "Hands-on Live Labs & Projects" : "Praxis-Labs & Reale Projekte"}</span>
                      <span className="text-[#4ade80] font-semibold">100%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5">
                      <div style={{ width: "100%", backgroundColor: PRIMARY }} className="h-1.5 rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-gray-300 mb-1">
                      <span>{lang === "en" ? "Bildungsgutschein Coverage" : "Förderung mit Bildungsgutschein"}</span>
                      <span className="text-[#4ade80] font-semibold">100%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5">
                      <div className="bg-emerald-400 h-1.5 rounded-full w-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge Bottom-Left */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-4 sm:-left-4 bg-white rounded-xl px-4 py-3 shadow-lg border border-gray-100 flex items-center gap-3">
                <div
                  style={{ backgroundColor: "#fde8ef", color: PRIMARY }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                >
                  <AwardIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1a1d2e]">
                    {lang === "en" ? "AZAV Certified" : "AZAV-Zertifiziert"}
                  </p>
                  <p className="text-[11px] text-gray-500">
                    {lang === "en"
                      ? "100% funded with Bildungsgutschein"
                      : "100 % Förderung über Arbeitsagentur / Jobcenter"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. INFO STRIP / ECKDATEN-LEISTE (Component B2) — No heading tags!
          ===================================================================== */}
      <section style={{ backgroundColor: DARK }} className="py-7 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {data.infoStrip.map(([val, label], idx) => (
              <div key={idx} className="px-2">
                <p style={{ color: PRIMARY }} className="text-xl sm:text-2xl font-bold mb-0.5">
                  {val}
                </p>
                <p className="text-gray-300 text-xs">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. TARGET AUDIENCE (Component B3) — H2 + 2 H3 Cards
          ===================================================================== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span
              style={{ color: PRIMARY }}
              className="text-xs font-semibold uppercase tracking-widest block mb-2"
            >
              {lang === "en" ? "Target Audience & Prerequisites" : "Zielgruppe & Voraussetzungen"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e] mb-3">
              {data.audienceH2}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {data.audienceIntro}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-7">
            {data.audienceCards.map((card, i) => (
              <div
                key={i}
                style={{ backgroundColor: i === 0 ? CREAM : SOFT_BG }}
                className="rounded-2xl p-7 border border-gray-200/80 flex flex-col justify-between"
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
          4. PROGRAM SELECTOR (Component B4) — Interactive + Initial HTML DOM
          ===================================================================== */}
      {!data.isOrientation ? (
        <>
          <ProgramSelector
            heading={data.programSelectorH2}
            subtitle={data.programSelectorSubtitle}
            modules={data.modules}
            programs={data.programs}
          />

          {/* Direct Entry / Technical Assessment Box (AI Engineering & Cyber Security) */}
          {data.directEntryInfo && (
            <section style={{ backgroundColor: SOFT_BG }} className="pb-14">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl p-7 border-2 border-[#e51a59]/30 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#e51a59] uppercase tracking-wider mb-2">
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
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {data.directEntryInfo.desc}
                  </p>
                  <ul className="grid md:grid-cols-3 gap-4">
                    {data.directEntryInfo.bullets.map((b, idx) => (
                      <li
                        key={idx}
                        className="bg-[#f8f5f1] rounded-xl p-4 text-xs sm:text-sm text-gray-700 border border-gray-200/70 flex items-start gap-2.5"
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
          ===================================================================== */}
      <section id="curriculum" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span
              style={{ color: PRIMARY }}
              className="text-xs font-semibold uppercase tracking-widest block mb-2"
            >
              {lang === "en" ? "Curriculum & Modules" : "Lehrplan & Module"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e] mb-3">
              {data.curriculumH2}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {data.curriculumIntro}
            </p>
          </div>

          {/* Module Cards (H3 per Module — Real HTML text) */}
          {data.modules.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {data.modules.map((mod) => (
                <div
                  key={mod.id}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        style={{ backgroundColor: mod.color }}
                        className="text-white text-xs font-bold px-3 py-1 rounded-full"
                      >
                        {mod.label}
                      </span>
                      <span className="text-xs font-semibold text-gray-500 flex items-center gap-1">
                        <ClockIcon className="w-3.5 h-3.5" />
                        {mod.duration}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#1a1d2e] mb-3 leading-snug">
                      {mod.title.startsWith("Modul") || mod.title.startsWith("Module")
                        ? mod.title
                        : `${mod.label}: ${mod.title}`}
                    </h3>

                    {mod.prerequisite && (
                      <p className="text-xs text-gray-500 bg-gray-50 rounded-lg p-2.5 mb-4 border border-gray-100">
                        <strong className="text-gray-700">
                          {lang === "en" ? "Prerequisite: " : "Voraussetzung: "}
                        </strong>
                        {mod.prerequisite}
                      </p>
                    )}

                    <ul className="space-y-2 mb-5">
                      {mod.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                          <CheckCircleIcon
                            style={{ color: mod.color }}
                            className="w-4 h-4 shrink-0 mt-0.5"
                          />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {mod.project && (
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#e51a59] mb-1">
                        {lang === "en" ? "Capstone Project" : "Praxisprojekt"}
                      </p>
                      <p className="text-xs font-medium text-gray-800">{mod.project}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Special Feature Box (AI Tools in Full Stack / KI im SOC / Upgrade Path) */}
          {data.specialFeature && (
            <div
              style={{ backgroundColor: CREAM }}
              className="rounded-2xl p-7 sm:p-9 border border-gray-200 mb-12"
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
                    className="bg-white rounded-xl p-5 border border-gray-200/80 shadow-2xs"
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
                      className="inline-flex items-center gap-2 text-white text-xs font-semibold px-4 py-2 rounded-full"
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
                      className="inline-flex items-center justify-center gap-2 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:opacity-95 transition-opacity cursor-pointer"
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
          7. COURSE FORMAT & SCHEDULE (Component B7) — H2 + HTML Table
          ===================================================================== */}
      <section style={{ backgroundColor: SOFT_BG }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6">
              <span
                style={{ color: PRIMARY }}
                className="text-xs font-semibold uppercase tracking-widest block mb-2"
              >
                {lang === "en" ? "Schedule & Learning Format" : "Tagesablauf & Format"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e] mb-3">
                {data.formatH2}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
                {data.formatIntro}
              </p>

              <div className="space-y-4">
                {data.formatHighlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-5 border border-gray-200/80 shadow-2xs"
                  >
                    <h3 className="text-base font-bold text-[#1a1d2e] mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Real HTML Table (Course Key Facts) */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs">
                <div style={{ backgroundColor: DARK }} className="px-6 py-4 text-white">
                  <p className="font-bold text-sm">
                    {lang === "en"
                      ? "Program Overview & Key Facts"
                      : "Programm-Eckdaten im Überblick"}
                  </p>
                </div>
                <table className="w-full text-left border-collapse">
                  <tbody>
                    {data.summaryTable.map(([label, val], idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? "bg-white" : "bg-[#f8f5f1]/60"}
                      >
                        <th className="py-3.5 px-6 text-xs sm:text-sm font-semibold text-gray-600 border-b border-gray-100 w-2/5">
                          {label}
                        </th>
                        <td className="py-3.5 px-6 text-xs sm:text-sm font-medium text-[#1a1d2e] border-b border-gray-100">
                          {val}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          8. FUNDING BOX (Component B8) — Bildungsgutschein & QCG
          ===================================================================== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            style={{ backgroundColor: CREAM }}
            className="rounded-3xl p-8 sm:p-11 border-2 border-[#e51a59]/25"
          >
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

                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-5">
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

                <ul className="space-y-2.5 mb-6">
                  {data.fundingBullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-800">
                      <CheckCircleIcon className="w-4 h-4 text-[#e51a59] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm text-center">
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
                  style={{ backgroundColor: PRIMARY }}
                  className="w-full inline-flex items-center justify-center gap-2 text-white font-semibold px-5 py-3 rounded-full text-sm hover:opacity-95 transition-opacity mb-2.5"
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
          9. CAREER & SALARIES (Component B9) — Sourced Salaries + Guide Links
          ===================================================================== */}
      <section style={{ backgroundColor: SOFT_BG }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span
              style={{ color: PRIMARY }}
              className="text-xs font-semibold uppercase tracking-widest block mb-2"
            >
              {lang === "en" ? "Career Outcomes & Salaries" : "Karriereperspektiven & Gehalt"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e] mb-3">
              {data.careerH2}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
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
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-[#fde8ef] text-[#e51a59] flex items-center justify-center">
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

                  <div className="bg-[#f8f5f1] rounded-xl p-3 mb-4 border border-gray-200/60">
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

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
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
          9b. TOPIC CLUSTER GUIDES (Component B17) — Clickable H3<Link> Cards
          ===================================================================== */}
      {data.clusterGuides.length > 0 && (
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <span
                style={{ color: PRIMARY }}
                className="text-xs font-semibold uppercase tracking-widest block mb-2"
              >
                {lang === "en" ? "Knowledge Hub & Career Guides" : "Wissensdatenbank & Ratgeber"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e] mb-3">
                {data.clusterH2}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {data.clusterIntro}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.clusterGuides.map((g, i) => (
                <article
                  key={i}
                  style={{ backgroundColor: CREAM }}
                  className="rounded-2xl p-6 border border-gray-200/80 hover:border-[#e51a59] transition-colors flex flex-col justify-between"
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
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {g.desc}
                    </p>
                  </div>

                  <Link
                    to={g.to}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e51a59] hover:underline"
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
          10. WHY CLARUSWAY — H2 + H3 Cards + Optional AWS Partner Box
          ===================================================================== */}
      <section style={{ backgroundColor: CREAM }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span
              style={{ color: PRIMARY }}
              className="text-xs font-semibold uppercase tracking-widest block mb-2"
            >
              {lang === "en" ? "The Clarusway Advantage" : "Deine Vorteile"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e] mb-3">
              {data.whyH2}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {data.whyIntro}
            </p>
          </div>

          {data.partnerHighlight && (
            <div
              style={{ backgroundColor: DARK }}
              className="rounded-2xl p-6 sm:p-8 text-white mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.whyItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-2xs"
              >
                <div className="w-9 h-9 rounded-lg bg-[#fde8ef] text-[#e51a59] flex items-center justify-center mb-3">
                  <CheckCircleIcon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#1a1d2e] mb-1.5">{item.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          11. GRADUATE REVIEWS (Component B12) — Real Platform Attribution
          ===================================================================== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span
                style={{ color: PRIMARY }}
                className="text-xs font-semibold uppercase tracking-widest block mb-2"
              >
                {lang === "en" ? "Verified Graduate Reviews" : "Verifizierte Bewertungen"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e]">
                {data.reviewsH2}
              </h2>
            </div>

            {/* Visual-only rating badge (Never marked up with AggregateRating schema per SEO rule) */}
            <div className="inline-flex items-center gap-3 bg-[#f8f5f1] border border-gray-200 rounded-xl px-4 py-2.5">
              <div className="flex text-amber-400">
                {[1, 2, 3, 4, 5].map((s) => (
                  <StarIcon key={s} className="w-4 h-4" />
                ))}
              </div>
              <span className="text-xs font-semibold text-[#1a1d2e]">
                4.9 / 5 · Course Report & Career Karma
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {data.reviews.map((rev, idx) => (
              <div
                key={idx}
                style={{ backgroundColor: SOFT_BG }}
                className="rounded-2xl p-7 border border-gray-200/80 flex flex-col justify-between"
              >
                <p className="text-gray-700 text-sm sm:text-base italic leading-relaxed mb-6">
                  “{rev.quote}”
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200/70">
                  <div className="flex items-center gap-3">
                    <div
                      style={{ backgroundColor: PRIMARY }}
                      className="w-10 h-10 rounded-full text-white font-bold text-sm flex items-center justify-center"
                    >
                      {rev.initials}
                    </div>
                    <div>
                      <p className="font-bold text-sm text-[#1a1d2e]">{rev.name}</p>
                      <p className="text-xs text-gray-500">{rev.role}</p>
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
          12. COURSE-SPECIFIC FAQ (Component B13) — <details><summary><h3>
          ===================================================================== */}
      <section style={{ backgroundColor: SOFT_BG }} className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span
              style={{ color: PRIMARY }}
              className="text-xs font-semibold uppercase tracking-widest block mb-2"
            >
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e]">
              {data.faqH2}
            </h2>
          </div>

          <div className="space-y-3.5">
            {data.faqs.map((faq, idx) => (
              <details
                key={idx}
                open={idx === 0}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-2xs"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none">
                  <h3 className="text-sm sm:text-base font-bold text-[#1a1d2e] text-left">
                    {faq.q}
                  </h3>
                  <span
                    style={{ color: PRIMARY }}
                    className="w-7 h-7 rounded-full bg-[#fde8ef] flex items-center justify-center shrink-0 font-bold text-sm group-open:rotate-45 transition-transform"
                  >
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          13. RELATED COURSES & FINAL CTA BANNER (Components B14 + B16)
          ===================================================================== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e]">
              {data.relatedH2}
            </h2>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {data.relatedCourses.map((rc, i) => (
              <div
                key={i}
                style={{ backgroundColor: CREAM }}
                className="rounded-2xl p-6 border border-gray-200 hover:border-[#e51a59] transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-[11px] font-bold px-3 py-1 rounded-full bg-[#fde8ef] text-[#e51a59] mb-3">
                    {rc.badge}
                  </span>
                  <h3 className="text-lg font-bold text-[#1a1d2e] mb-2">
                    <Link to={rc.to} className="hover:text-[#e51a59] transition-colors">
                      {rc.title}
                    </Link>
                  </h3>
                  <div className="flex flex-wrap gap-4 text-xs text-gray-600 mb-4">
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
                      {lang === "en" ? "Taught in English" : "Englisch"}
                    </span>
                  </div>
                </div>

                <Link
                  to={rc.to}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e51a59] hover:underline pt-3 border-t border-gray-200/70"
                >
                  <span>{rc.title}</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

          {/* Component B16: Final CTA Banner */}
          <div
            style={{
              background: "linear-gradient(135deg, #1a1d2e 0%, #2d1b3d 55%, #8a1c4a 100%)",
            }}
            className="rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">{data.ctaH2}</h2>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-7 leading-relaxed">
              {data.ctaText}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to={consultPath}
                onClick={() =>
                  trackClaruswayEvent("beratung_angefragt", {
                    source: `bottom_cta_${data.key}`,
                    lang,
                  })
                }
                style={{ backgroundColor: PRIMARY }}
                className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-full text-sm shadow-lg hover:opacity-95 transition-opacity"
              >
                <span>{lang === "en" ? "Free consultation" : "Kostenlose Beratung"}</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <a
                href="#syllabus-download"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-6 py-3.5 rounded-full text-sm hover:bg-white/10 transition-colors"
              >
                <DownloadIcon className="w-4 h-4" />
                <span>{lang === "en" ? "Download syllabus" : "Lehrplan herunterladen"}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
