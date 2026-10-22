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
const CREAM = "#f8f5f1";
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

  // Group guides by cluster
  const clusters: Record<string, GuideArticleData[]> = {};
  for (const g of allGuides) {
    if (!clusters[g.cluster]) clusters[g.cluster] = [];
    clusters[g.cluster].push(g);
  }

  const metaTitle = isEn
    ? "IT Career, Expat & Funding Guides in Germany | Clarusway"
    : "IT-Ratgeber: Berufsbilder, Gehälter & Förderung | Clarusway";

  const metaDescription = isEn
    ? "Guides in English on IT careers in Germany, salaries, AWS & CompTIA certifications, Agentur für Arbeit, Jobcenter, and Bildungsgutschein funding."
    : "Alle Clarusway IT-Ratgeber im Überblick: Berufsbilder (AI Engineer, Data Analyst, Full Stack, SOC Analyst, DevOps), Gehälter, Zertifizierungen und Förderung.";

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: DARK }} className="bg-white">
      <SeoHead title={metaTitle} description={metaDescription} path={currentPath} />
      <Breadcrumb items={[{ label: isEn ? "Guides" : "Ratgeber" }]} />

      <section style={{ backgroundColor: CREAM }} className="py-14 border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#fde8ef] text-[#e51a59] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-4">
              <BookOpenIcon className="w-4 h-4" />
              <span>
                {isEn ? "Knowledge Hub for Expats & Career Changers" : "Wissensdatenbank & Karriere-Kompass"}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1a1d2e] mb-4 leading-tight">
              {isEn
                ? "IT career, certification and funding guides for Germany"
                : "IT-Ratgeber: Berufsbilder, Gehälter und Förderung in Deutschland"}
            </h1>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              {isEn
                ? "Explore Clarusway's in-depth guides on navigating the Agentur für Arbeit and Jobcenter, applying for a Bildungsgutschein, formatting a German tech CV, and comparing IT roles, salaries, and certifications."
                : "Orientierung für deinen Einstieg und Aufstieg in die IT: Vergleiche Berufsbilder, aktuelle Gehälter nach StepStone 2026, internationale Zertifizierungen (AWS, CompTIA, ISTQB) und staatliche Förderwege."}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {Object.entries(clusters).map(([clusterName, items]) => (
            <div key={clusterName}>
              <div className="mb-6 pb-3 border-b border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e]">
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
                          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#fde8ef] text-[#e51a59]">
                            {article.badge}
                          </span>
                          <span className="text-[11px] text-gray-500">{article.readTime}</span>
                        </div>

                        <h3 className="text-lg font-bold text-[#1a1d2e] mb-2 leading-snug">
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
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e51a59] hover:underline pt-3 border-t border-gray-200/70"
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
    <div style={{ fontFamily: "'Poppins', sans-serif", color: DARK }} className="bg-white">
      <SeoHead
        title={article.metaTitle}
        description={article.metaDescription}
        path={currentPath}
        schema={schema}
      />

      <Breadcrumb
        items={[{ label: hubLabel, to: hubPath }, { label: article.h1 }]}
      />

      {/* ARTICLE HERO + AUTHOR/DATE/TOC BOX (Component B15) */}
      <section style={{ backgroundColor: CREAM }} className="py-12 border-b border-gray-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-[#fde8ef] text-[#e51a59] text-xs font-semibold px-3.5 py-1 rounded-full mb-4">
            <BookOpenIcon className="w-3.5 h-3.5" />
            <span>{article.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-[#1a1d2e] mb-5 leading-tight">
            {article.h1}
          </h1>

          {/* Component B15: Author, Last Updated & Reading Time */}
          <div className="flex flex-wrap items-center gap-5 text-xs text-gray-600 bg-white rounded-xl px-4 py-3 border border-gray-200/80 mb-6">
            <span className="font-semibold text-[#1a1d2e]">{article.author}</span>
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

          {/* Table of Contents (Component B15) */}
          <nav
            aria-label={isEn ? "Table of contents" : "Inhaltsverzeichnis"}
            className="bg-white rounded-2xl p-5 border border-gray-200"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-[#e51a59] mb-2.5">
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
        </div>
      </section>

      {/* ARTICLE BODY */}
      <article className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* First 2 Paragraphs with Mandatory Internal Links to Course + Bildungsgutschein */}
          <div className="space-y-4 text-gray-700 text-base leading-relaxed mb-10">
            <p>
              {article.introParagraph1}{" "}
              {isEn ? "In Clarusway's " : "In unserer "}
              <Link
                to={article.introCourseLinkTo}
                className="text-[#e51a59] font-semibold underline hover:opacity-80"
              >
                {article.introCourseLinkLabel}
              </Link>
              {isEn
                ? " you build these exact skills step by step — and you can read the guide on "
                : " baust du genau diese Praxis-Skills auf — und erfährst in unserem Leitfaden alles zum Thema "}
              <Link
                to={article.introFundingLinkTo}
                className="text-[#e51a59] font-semibold underline hover:opacity-80"
              >
                {article.introFundingLinkLabel}
              </Link>
              .
            </p>
            <p>{article.introParagraph2}</p>
          </div>

          {/* Component B10: HTML Table */}
          <div id="comparison-table" className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a1d2e] mb-4">
              {article.tableTitle}
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-2xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr style={{ backgroundColor: DARK }} className="text-white text-xs uppercase">
                    {article.tableHeaders.map((h, i) => (
                      <th key={i} className="py-3.5 px-5 font-semibold">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-xs sm:text-sm">
                  {article.tableRows.map((row, rIdx) => (
                    <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-[#f8f5f1]/60"}>
                      {row.map((cell, cIdx) => (
                        <td
                          key={cIdx}
                          className={`py-3.5 px-5 ${
                            cIdx === 0 ? "font-bold text-[#1a1d2e]" : "text-gray-700"
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
              <section key={sec.id} id={sec.id}>
                <h2 className="text-2xl font-bold text-[#1a1d2e] mb-3">{sec.h2}</h2>
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
                        style={{ backgroundColor: CREAM }}
                        className="rounded-xl p-5 border border-gray-200"
                      >
                        <h3 className="text-base font-bold text-[#1a1d2e] mb-1.5">{c.title}</h3>
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
            style={{ backgroundColor: DARK }}
            className="rounded-3xl p-7 sm:p-9 text-white mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-[#e51a59] text-white mb-3">
                <ShieldCheckIcon className="w-3.5 h-3.5" />
                <span>{isEn ? "AZAV-Certified Program" : "AZAV-zertifiziertes Programm"}</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                <Link to={article.ctaCourseTo} className="hover:text-[#f472b6]">
                  {article.ctaCourseTitle}
                </Link>
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm max-w-xl leading-relaxed">
                {article.ctaCourseDesc}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                to={article.ctaCourseTo}
                style={{ backgroundColor: PRIMARY }}
                className="inline-flex items-center justify-center gap-2 text-white font-semibold px-6 py-3 rounded-full text-xs sm:text-sm hover:opacity-95"
              >
                <span>{article.ctaCourseTitle}</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link
                to={consultPath}
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-5 py-3 rounded-full text-xs sm:text-sm hover:bg-white/10"
              >
                <span>{isEn ? "Free consultation" : "Kostenlose Beratung"}</span>
              </Link>
            </div>
          </div>

          {/* Component B13: FAQ */}
          <div id="guide-faq" className="mb-12">
            <h2 className="text-2xl font-bold text-[#1a1d2e] mb-5">
              {isEn ? "Frequently asked questions" : "Häufige Fragen zum Thema"}
            </h2>
            <div className="space-y-3">
              {article.faqs.map((f, idx) => (
                <details
                  key={idx}
                  open={idx === 0}
                  className="group bg-[#f6f7fb] rounded-2xl border border-gray-200 overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none">
                    <h3 className="text-sm sm:text-base font-bold text-[#1a1d2e]">{f.q}</h3>
                    <span style={{ color: PRIMARY }} className="w-7 h-7 rounded-full bg-[#fde8ef] flex items-center justify-center shrink-0 font-bold text-sm">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-4 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-200/70">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Component B17: Related Cluster Guides */}
          {relatedArticles.length > 0 && (
            <div className="pt-8 border-t border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1a1d2e] mb-5">
                {isEn ? "Related guides" : "Weitere passende Ratgeber"}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {relatedArticles.map((rel) => {
                  const relUrl = isEn ? `/guides/${rel.slug}/` : `/ratgeber/${rel.slug}/`;
                  return (
                    <div
                      key={rel.slug}
                      style={{ backgroundColor: CREAM }}
                      className="rounded-2xl p-5 border border-gray-200 flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-[11px] font-bold text-[#e51a59] block mb-1">
                          {rel.badge}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-[#1a1d2e] mb-2">
                          <Link to={relUrl} className="hover:text-[#e51a59]">
                            {rel.h1}
                          </Link>
                        </h3>
                      </div>
                      <Link
                        to={relUrl}
                        className="text-xs font-semibold text-[#e51a59] hover:underline inline-flex items-center gap-1"
                      >
                        <span>{rel.h1}</span>
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
