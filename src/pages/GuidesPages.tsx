import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { DE_GUIDES, EN_GUIDES, GuideArticleData } from "../data/guidesData";
import { SeoHead } from "../components/SeoHead";
import { Breadcrumb } from "../components/Breadcrumb";
import {
  ArrowRightIcon,
  BookOpenIcon,
  CheckCircleIcon,
  ClockIcon,
  CalendarIcon,
  ShieldCheckIcon,
} from "../components/Icons";

const PRIMARY = "#e51a59";
const DARK = "#1a1d2e";
const SOFT_BG = "#f6f7fb";

/* ============================================================================
   1. GUIDES HUB PAGE (/ratgeber/ & /guides/)
   ============================================================================ */
export function GuidesHubPage() {
  const { lang } = useLanguage();
  const isEn = lang === "en";
  const currentPath = isEn ? "/guides/" : "/ratgeber/";
  const guidesMap = isEn ? EN_GUIDES : DE_GUIDES;
  const allGuides = Object.values(guidesMap);

  // Group guides by cluster using modern Object.groupBy
  const clusters = Object.groupBy(allGuides, (g) => g.cluster) as Record<string, GuideArticleData[]>;

  const metaTitle = isEn
    ? "Career Guides: IT Jobs, Certifications and Funding | Clarusway"
    : "Ratgeber zu IT-Berufen, Quereinstieg und Förderung | Clarusway";

  const metaDescription = isEn
    ? "Practical guides in English on IT careers, cloud certifications, and funding with a Bildungsgutschein in Germany."
    : "Ratgeber für den Einstieg in die IT: Berufsbilder, Voraussetzungen, geförderter Quereinstieg und Weiterbildung über Arbeitsagentur und Jobcenter.";

  const breadcrumbItems = [{ label: isEn ? "Guides" : "Ratgeber" }];

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", color: DARK }} className="bg-white">
      <SeoHead
        title={metaTitle}
        description={metaDescription}
        path={currentPath}
        breadcrumbs={breadcrumbItems}
      />
      <Breadcrumb items={breadcrumbItems} />

      <section
        style={{ background: "linear-gradient(135deg, #fff8f9 0%, #fff 60%)" }}
        className="py-14 border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#fde8ef] text-[#e51a59] text-xs font-medium px-3.5 py-1.5 rounded-full mb-4">
              <BookOpenIcon className="w-4 h-4" />
              <span>
                {isEn ? "IT Career & Certification Guides" : "Wissensdatenbank & Karriere-Kompass"}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-[-0.025em] text-[#1a1d2e] mb-4 leading-tight">
              {isEn
                ? "Guides to IT careers, certifications, and funding in Germany"
                : "Ratgeber für den Einstieg in die IT"}
            </h1>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              {isEn
                ? "Explore Clarusway's practical guides on tech roles, certifications (AWS, CompTIA), and in-demand skills in Germany — written for English speakers."
                : "Orientierung für deinen Einstieg und Aufstieg in die IT: Vergleiche Berufsbilder, internationale Zertifizierungen (AWS, CompTIA, ISTQB) und staatliche Förderwege."}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {Object.entries(clusters).map(([clusterName, items]) => (
            <div key={clusterName}>
              <div className="mb-6 pb-3 border-b border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] text-[#1a1d2e]">
                  {clusterName}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((article) => {
                  const url = isEn ? `/guides/${article.slug}/` : `/ratgeber/${article.slug}/`;
                  return (
                    <article
                      key={article.slug}
                      style={{ backgroundColor: SOFT_BG }}
                      className="rounded-2xl p-6 border border-gray-200 hover:border-[#e51a59] transition-colors flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#fde8ef] text-[#e51a59]">
                            {article.badge}
                          </span>
                          <span className="text-[11px] text-gray-500">{article.readTime}</span>
                        </div>

                        <h3 className="text-lg font-medium text-[#1a1d2e] mb-2 leading-snug">
                          <Link to={url} className="hover:text-[#e51a59] transition-colors">
                            {article.h1}
                          </Link>
                        </h3>

                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                          {article.metaDescription}
                        </p>
                      </div>

                      <Link
                        to={url}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-[#e51a59] hover:underline pt-3 border-t border-gray-200/70"
                      >
                        <span>{article.h1}</span>
                        <ArrowRightIcon className="w-3.5 h-3.5" />
                      </Link>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ============================================================================
   2. GUIDE ARTICLE PAGE (/ratgeber/:slug & /guides/:slug)
   ============================================================================ */
export function GuideArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLanguage();
  const isEn = lang === "en";

  const cleanSlug = (slug || "").replace(/\/+$/, "");
  const article = isEn
    ? EN_GUIDES[cleanSlug] || DE_GUIDES[cleanSlug]
    : DE_GUIDES[cleanSlug] || EN_GUIDES[cleanSlug];

  if (!article) {
    return <Navigate to={isEn ? "/guides/" : "/ratgeber/"} replace />;
  }

  const currentPath = isEn ? `/guides/${article.slug}/` : `/ratgeber/${article.slug}/`;
  const hubPath = isEn ? "/guides/" : "/ratgeber/";
  const hubLabel = isEn ? "Guides" : "Ratgeber";
  const consultPath = isEn ? "/application-form/" : "/beratung/";
  const origin = isEn ? "https://en.clarusway.de" : "https://clarusway.de";

  const relatedArticles = article.relatedSlugs
    .map((s) => (isEn ? EN_GUIDES[s] : DE_GUIDES[s]))
    .filter(Boolean);

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.h1,
      description: article.metaDescription,
      datePublished: "2026-10-22",
      dateModified: "2026-10-22",
      author: {
        "@type": "Organization",
        name: article.author,
      },
      publisher: {
        "@type": "EducationalOrganization",
        name: "Clarusway GmbH",
        url: `${origin}/`,
      },
      mainEntityOfPage: `${origin}${currentPath}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: article.faqs.map((f) => ({
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
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: isEn ? "Home" : "Startseite",
          item: `${origin}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: hubLabel,
          item: `${origin}${hubPath}`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: article.h1,
          item: `${origin}${currentPath}`,
        },
      ],
    },
  ];

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", color: DARK }} className="bg-white">
      <SeoHead
        title={article.metaTitle}
        description={article.metaDescription}
        path={currentPath}
        schema={schema}
      />

      <Breadcrumb
        items={[{ label: hubLabel, to: hubPath }, { label: article.h1 }]}
      />

      {/* ARTICLE HERO (Full Site Grid) */}
      <section
        style={{ background: "linear-gradient(135deg, #fff8f9 0%, #fff 60%)" }}
        className="py-12 md:py-14 border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#fde8ef] text-[#e51a59] text-xs font-medium px-3.5 py-1.5 rounded-full mb-4">
              <BookOpenIcon className="w-3.5 h-3.5" />
              <span>{article.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-[-0.025em] text-[#1a1d2e] mb-5 leading-tight">
              {article.h1}
            </h1>

            {/* Component B15: Author, Last Updated & Reading Time */}
            <div className="inline-flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-gray-600 bg-white rounded-xl px-4 py-3 border border-gray-200/80 shadow-2xs">
              <span className="font-medium text-[#1a1d2e]">{article.author}</span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarIcon className="w-3.5 h-3.5 text-[#e51a59]" />
                {isEn ? "Updated: " : "Aktualisiert: "}
                {article.updatedAt}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ClockIcon className="w-3.5 h-3.5 text-[#e51a59]" />
                {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY + STICKY SIDEBAR (Full Site Grid: 8 + 4 cols) */}
      <article className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Main Editorial Column (8 cols) */}
            <div className="lg:col-span-8 min-w-0">
              {/* Mobile Table of Contents */}
              <nav
                aria-label={isEn ? "Table of contents" : "Inhaltsverzeichnis"}
                className="lg:hidden bg-[#f6f7fb] rounded-2xl p-5 border border-gray-200 mb-8"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-[#e51a59] mb-2.5">
                  {isEn ? "Table of contents" : "Inhaltsverzeichnis"}
                </p>
                <ul className="space-y-1.5 text-xs sm:text-sm text-gray-700">
                  <li>
                    <a href="#comparison-table" className="hover:text-[#e51a59] font-medium">
                      1. {article.tableTitle}
                    </a>
                  </li>
                  {article.sections.map((sec, idx) => (
                    <li key={sec.id}>
                      <a href={`#${sec.id}`} className="hover:text-[#e51a59] font-medium">
                        {idx + 2}. {sec.h2}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a href="#guide-faq" className="hover:text-[#e51a59] font-medium">
                      {article.sections.length + 2}. {isEn ? "FAQ" : "Häufige Fragen (FAQ)"}
                    </a>
                  </li>
                </ul>
              </nav>

              {/* First 2 Paragraphs with Mandatory Internal Links to Course + Bildungsgutschein */}
              <div className="space-y-4 text-gray-700 text-base leading-relaxed mb-10">
                <p>
                  {article.introParagraph1}{" "}
                  {isEn ? "In Clarusway's " : "In unserer "}
                  <Link
                    to={article.introCourseLinkTo}
                    className="text-[#e51a59] font-medium underline hover:opacity-80"
                  >
                    {article.introCourseLinkLabel}
                  </Link>
                  {isEn
                    ? " you build these exact skills step by step — and you can read the guide on "
                    : " baust du genau diese Praxis-Skills auf — und erfährst in unserem Leitfaden alles zum Thema "}
                  <Link
                    to={article.introFundingLinkTo}
                    className="text-[#e51a59] font-medium underline hover:opacity-80"
                  >
                    {article.introFundingLinkLabel}
                  </Link>
                  .
                </p>
                <p>{article.introParagraph2}</p>
              </div>

              {/* Component B10: HTML Table */}
              <div id="comparison-table" className="scroll-mt-24 mb-12">
                <h2 className="text-xl sm:text-2xl font-medium tracking-[-0.02em] text-[#1a1d2e] mb-4">
                  {article.tableTitle}
                </h2>
                <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-2xs">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr style={{ backgroundColor: DARK }} className="text-white text-xs uppercase">
                        {article.tableHeaders.map((h, i) => (
                          <th key={i} className="py-3.5 px-5 font-medium">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-xs sm:text-sm">
                      {article.tableRows.map((row, rIdx) => (
                        <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-[#f6f7fb]"}>
                          {row.map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              className={`py-3.5 px-5 ${
                                cIdx === 0 ? "font-medium text-[#1a1d2e]" : "text-gray-700"
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* H2 Sections */}
              <div className="space-y-10 mb-12">
                {article.sections.map((sec) => (
                  <section key={sec.id} id={sec.id} className="scroll-mt-24">
                    <h2 className="text-2xl font-medium tracking-[-0.02em] text-[#1a1d2e] mb-3">{sec.h2}</h2>
                    <div className="space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed">
                      {sec.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>

                    {sec.bullets && (
                      <ul className="mt-4 space-y-2.5">
                        {sec.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                            <CheckCircleIcon className="w-4 h-4 text-[#e51a59] shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {sec.h3Cards && (
                      <div className="grid sm:grid-cols-2 gap-4 mt-5">
                        {sec.h3Cards.map((c, i) => (
                          <div
                            key={i}
                            style={{ backgroundColor: SOFT_BG }}
                            className="rounded-xl p-5 border border-gray-200"
                          >
                            <h3 className="text-base font-medium text-[#1a1d2e] mb-1.5">{c.title}</h3>
                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{c.desc}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </section>
                ))}
              </div>

              {/* Component B14: Owning Course CTA Box */}
              <div
                style={{
                  background: `linear-gradient(135deg, ${DARK} 0%, #24142e 100%)`,
                  boxShadow: "0 10px 30px -10px rgba(20, 27, 45, 0.3)",
                }}
                className="rounded-3xl p-7 sm:p-9 text-white mb-14 border border-white/10 relative overflow-hidden"
              >
                {/* Subtle atmospheric glow */}
                <div
                  className="absolute -top-24 -right-24 w-60 h-60 rounded-full pointer-events-none opacity-20 blur-3xl"
                  style={{ backgroundColor: PRIMARY }}
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-full bg-[#e51a59] text-white shadow-xs">
                      <ShieldCheckIcon className="w-3.5 h-3.5" />
                      <span>{isEn ? "AZAV-Certified Program" : "AZAV-zertifiziertes Programm"}</span>
                    </span>
                    <span className="text-xs text-gray-300 font-medium">
                      {isEn ? "100% funded with Bildungsgutschein" : "100 % mit Bildungsgutschein förderbar"}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight mb-3 text-white leading-snug">
                    <Link to={article.ctaCourseTo} className="hover:text-[#f472b6] transition-colors">
                      {article.ctaCourseTitle}
                    </Link>
                  </h3>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                    {article.ctaCourseDesc}
                  </p>

                  <div className="flex flex-wrap items-center gap-3.5 pt-1">
                    <Link
                      to={article.ctaCourseTo}
                      style={{ backgroundColor: PRIMARY }}
                      className="inline-flex items-center justify-center gap-2 text-white font-medium px-6 py-3 rounded-xl text-sm hover:opacity-95 shadow-sm transition-opacity"
                    >
                      <span>{isEn ? "Explore program & curriculum" : "Zum Kursprogramm & Lehrplan"}</span>
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                    <Link
                      to={consultPath}
                      className="inline-flex items-center justify-center gap-2 border border-white/25 bg-white/5 text-white font-medium px-5 py-3 rounded-xl text-sm hover:bg-white/10 transition-colors"
                    >
                      <span>{isEn ? "Free consultation" : "Kostenlose Beratung"}</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Component B13: FAQ */}
              <div id="guide-faq" className="scroll-mt-24 mb-14">
                <div className="mb-6">
                  <span
                    style={{ color: PRIMARY }}
                    className="text-xs font-medium uppercase tracking-widest block mb-2"
                  >
                    FAQ
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] text-[#1a1d2e] mb-2.5">
                    {isEn ? "Frequently asked questions" : "Häufige Fragen zum Thema"}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {isEn
                      ? "Answers to the most important questions about prerequisites, Bildungsgutschein funding, and career prospects."
                      : "Antworten auf die wichtigsten Fragen zu Voraussetzungen, Bildungsgutschein-Förderung und Berufsaussichten."}
                  </p>
                </div>

                <div className="space-y-3">
                  {article.faqs.map((f, idx) => (
                    <details
                      key={idx}
                      open={idx === 0}
                      className="group rounded-xl overflow-hidden border border-gray-200 bg-white shadow-2xs"
                    >
                      <summary
                        style={{ background: PRIMARY }}
                        className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none select-none text-white hover:opacity-95 transition-opacity"
                      >
                        <span className="text-sm sm:text-base font-medium text-white text-left leading-snug">
                          {f.q}
                        </span>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 12 12"
                          fill="none"
                          aria-hidden="true"
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
                      <div className="px-5 sm:px-6 py-4 sm:py-5 text-sm text-gray-600 leading-relaxed bg-white">
                        {f.a}
                      </div>
                    </details>
                  ))}
                </div>

                {/* Direct Consultation Help Strip */}
                <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-[#f6f7fb] border border-gray-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-[#1a1d2e] mb-1">
                      {isEn
                        ? "Still have questions about your career transition?"
                        : "Noch Fragen zum Quereinstieg oder zur Förderung?"}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {isEn
                        ? "Our education team is happy to review your Bildungsgutschein eligibility personally."
                        : "Unsere Studienberatung prüft deine Fördermöglichkeiten unverbindlich im persönlichen Gespräch."}
                    </p>
                  </div>
                  <Link
                    to={consultPath}
                    style={{ backgroundColor: PRIMARY }}
                    className="inline-flex items-center justify-center gap-2 text-white font-medium px-5 py-2.5 rounded-xl text-xs sm:text-sm hover:opacity-95 shadow-xs shrink-0 transition-opacity"
                  >
                    <span>{isEn ? "Book free consultation" : "Kostenlose Beratung"}</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Sticky Desktop Sidebar (4 cols) */}
            <aside className="hidden lg:block lg:col-span-4 lg:sticky lg:top-24 space-y-6">
              {/* Table of Contents (Component B15) */}
              <nav
                aria-label={isEn ? "Table of contents" : "Inhaltsverzeichnis"}
                className="bg-[#f6f7fb] rounded-2xl p-6 border border-gray-200"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-[#e51a59] mb-3">
                  {isEn ? "Table of contents" : "Inhaltsverzeichnis"}
                </p>
                <ul className="space-y-2.5 text-sm text-gray-700">
                  <li>
                    <a href="#comparison-table" className="hover:text-[#e51a59] font-medium transition-colors block">
                      1. {article.tableTitle}
                    </a>
                  </li>
                  {article.sections.map((sec, idx) => (
                    <li key={sec.id}>
                      <a href={`#${sec.id}`} className="hover:text-[#e51a59] font-medium transition-colors block">
                        {idx + 2}. {sec.h2}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a href="#guide-faq" className="hover:text-[#e51a59] font-medium transition-colors block">
                      {article.sections.length + 2}. {isEn ? "FAQ" : "Häufige Fragen (FAQ)"}
                    </a>
                  </li>
                </ul>
              </nav>

              {/* Quick Consultation & Course Card */}
              <div
                style={{ backgroundColor: DARK }}
                className="rounded-2xl p-6 text-white border border-white/10 shadow-sm"
              >
                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium px-3 py-1 rounded-full bg-[#e51a59] text-white mb-3">
                  <ShieldCheckIcon className="w-3.5 h-3.5" />
                  <span>{isEn ? "100% Bildungsgutschein" : "100 % Bildungsgutschein"}</span>
                </span>
                <h3 className="text-lg font-medium mb-2 leading-snug">
                  {article.ctaCourseTitle}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-5">
                  {article.ctaCourseDesc}
                </p>
                <div className="space-y-2.5">
                  <Link
                    to={article.ctaCourseTo}
                    style={{ backgroundColor: PRIMARY }}
                    className="w-full inline-flex items-center justify-center gap-2 text-white font-medium px-5 py-2.5 rounded-full text-xs hover:opacity-95 transition-opacity"
                  >
                    <span>{isEn ? "Explore program" : "Zum Kursprogramm"}</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to={consultPath}
                    className="w-full inline-flex items-center justify-center gap-2 border border-white/25 text-white font-medium px-5 py-2.5 rounded-full text-xs hover:bg-white/10 transition-colors"
                  >
                    <span>{isEn ? "Book free consultation" : "Kostenlose Beratung"}</span>
                  </Link>
                </div>
              </div>
            </aside>
          </div>

          {/* Component B17: Related Cluster Guides (Full Site Width) */}
          {relatedArticles.length > 0 && (
            <div className="mt-14 pt-10 border-t border-gray-200">
              <h2 className="text-xl sm:text-2xl font-medium tracking-[-0.02em] text-[#1a1d2e] mb-6">
                {isEn ? "Related guides" : "Weitere passende Ratgeber"}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArticles.map((rel) => {
                  const relUrl = isEn ? `/guides/${rel.slug}/` : `/ratgeber/${rel.slug}/`;
                  return (
                    <div
                      key={rel.slug}
                      style={{ backgroundColor: SOFT_BG }}
                      className="rounded-2xl p-6 border border-gray-100 flex flex-col justify-between hover:border-[#e51a59]/30 transition-colors"
                    >
                      <div>
                        <span className="text-[11px] font-medium text-[#e51a59] block mb-1.5">
                          {rel.badge}
                        </span>
                        <h3 className="text-sm sm:text-base font-medium text-[#1a1d2e] mb-3">
                          <Link to={relUrl} className="hover:text-[#e51a59]">
                            {rel.h1}
                          </Link>
                        </h3>
                      </div>
                      <Link
                        to={relUrl}
                        className="text-xs font-medium text-[#e51a59] hover:underline inline-flex items-center gap-1"
                      >
                        <span>{isEn ? "Read guide" : "Ratgeber lesen"}</span>
                        <ArrowRightIcon className="w-3 h-3" />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
