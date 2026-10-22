import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { SeoHead, trackClaruswayEvent } from "../components/SeoHead";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  AwardIcon,
  StarIcon,
  BookOpenIcon,
  ClockIcon,
  CalendarIcon,
  GlobeIcon,
  ExternalLinkIcon,
  SparklesIcon,
} from "../components/Icons";

const PRIMARY = "#e51a59";
const DARK = "#1a1d2e";
const CREAM = "#f8f5f1";
const SOFT_BG = "#f6f7fb";

export function HomePage() {
  const { lang } = useLanguage();
  const isEn = lang === "en";
  const consultPath = isEn ? "/application-form/" : "/beratung/";

  const metaTitle = isEn
    ? "Clarusway: IT Careers in Germany, Trained in English"
    : "IT Weiterbildung mit Bildungsgutschein | Clarusway";

  const metaDescription = isEn
    ? "Live online IT bootcamps in Germany taught in English: AI Engineering, Full Stack, Cyber Security, AWS & DevOps, and SDET. 100% funded with a Bildungsgutschein."
    : "Praxisnahe IT-Weiterbildungen in Cyber Security, Cloud & DevOps, KI & Data Science und Webentwicklung. AZAV-zertifiziert, 100 % förderbar mit Bildungsgutschein.";

  const courses = isEn
    ? [
        {
          title: "AI Engineering Bootcamp",
          badge: "Data Analytics, ML & Agentic AI",
          duration: "32 Weeks (or 6–19 Wk. Modular)",
          nextStart: "27 Jul 2026",
          desc: "Three modular stages: Data Analytics & BI (Module 1), Data Science & Machine Learning (Module 2), and AI Engineering & Agentic AI (Module 3).",
          to: "/it-courses/ai-engineering/",
          tags: ["Python & SQL", "Power BI", "PyTorch", "RAG & Agentic AI"],
        },
        {
          title: "Data Analytics Course",
          badge: "Module 1 Standalone · 13 Weeks",
          duration: "13 Weeks (520 Units)",
          nextStart: "27 Jul 2026",
          desc: "Fast 13-week qualification as a Data Analyst or BI Analyst in Germany with Python, SQL, Statistics, Power BI, and Tableau.",
          to: "/it-courses/data-analytics/",
          tags: ["Python", "SQL", "Power BI", "Tableau"],
        },
        {
          title: "AI-Assisted Full Stack Developer Course",
          badge: "Web Development + AI Workflows",
          duration: "3 – 12 Months (4 Modules)",
          nextStart: "27 Jul 2026",
          desc: "Build full-stack web apps with React, TypeScript, Next.js, Node.js, and PostgreSQL while mastering Cursor, Claude Code, and GitHub Copilot.",
          to: "/it-courses/full-stack-developer/",
          tags: ["React & Next.js", "TypeScript", "Node.js", "Cursor & Claude Code"],
        },
        {
          title: "Cyber Security Analyst Course",
          badge: "SOC, Agentic AI & Cloud Security",
          duration: "4 Modules (Direct Entry Option)",
          nextStart: "24 Aug 2026",
          desc: "From CompTIA Security+ exam preparation and AI-enhanced SOC Analyst labs to Agentic AI in SecOps and AWS Cloud Security.",
          to: "/it-courses/cyber-security/",
          tags: ["CompTIA Security+", "SIEM & SOC", "Agentic AI", "AWS Security"],
        },
        {
          title: "AWS & DevOps Engineer Course",
          badge: "AWS Select Tier Partner",
          duration: "3 – 8 Months (5 Combinations)",
          nextStart: "24 Aug 2026",
          desc: "Master AWS Cloud Architecture, Docker, Kubernetes, Terraform, CI/CD pipelines, and Microsoft Azure Fundamentals.",
          to: "/it-courses/devops-aws/",
          tags: ["AWS SAA-C03", "Kubernetes", "Terraform", "Azure AZ-900"],
        },
        {
          title: "SDET Course: Software Testing and Automation",
          badge: "QA & Test Automation",
          duration: "Full-Time Track",
          nextStart: "14 Sep 2026",
          desc: "Automate web, API, and database testing with Java, Selenium, Cypress, Playwright, Postman, and Jenkins CI/CD.",
          to: "/it-courses/software-development-engineer-in-test/",
          tags: ["Java", "Selenium & Playwright", "API Testing", "CI/CD"],
        },
      ]
    : [
        {
          title: "AI Engineer Weiterbildung (Data Science & KI)",
          badge: "Data Analytics, ML & Agentic AI",
          duration: "32 Wochen (oder 6–19 Wo. modular)",
          nextStart: "27 Jul 2026",
          desc: "Drei kombinierbare Module: Data Analytics & BI (Modul 1), Data Science & Machine Learning (Modul 2) sowie AI Engineering & Agentic AI (Modul 3).",
          to: "/it-kurse/ai-engineer-weiterbildung/",
          tags: ["Python & SQL", "Power BI", "PyTorch", "RAG & Agentic AI"],
        },
        {
          title: "Data Analytics Weiterbildung",
          badge: "Modul 1 Eigenständig · 13 Wochen",
          duration: "13 Wochen (520 UE)",
          nextStart: "27 Jul 2026",
          desc: "Kompakter 13-Wochen-Einstieg zum Data Analyst und BI-Spezialisten mit Python, SQL, Statistik, Power BI und Tableau.",
          to: "/it-kurse/data-analytics-weiterbildung/",
          tags: ["Python", "SQL", "Power BI", "Tableau"],
        },
        {
          title: "Full Stack Entwickler Weiterbildung",
          badge: "Webentwicklung mit KI-Workflows",
          duration: "3 – 12 Monate (4 Module)",
          nextStart: "27 Jul 2026",
          desc: "Moderne Webentwicklung mit React, TypeScript, Next.js, Node.js und PostgreSQL — unterstützt durch Cursor, Claude Code und GitHub Copilot.",
          to: "/it-kurse/full-stack-entwickler-weiterbildung/",
          tags: ["React & Next.js", "TypeScript", "Node.js", "KI-Coding-Tools"],
        },
        {
          title: "Cyber Security Weiterbildung",
          badge: "SOC Analyst & Cloud Security",
          duration: "4 Module (Direkteinstieg möglich)",
          nextStart: "24 Aug 2026",
          desc: "Von der CompTIA Security+ Vorbereitung über das KI-gestützte Security Operations Center (SOC) bis hin zu AWS Cloud Security.",
          to: "/it-kurse/cyber-security-weiterbildung/",
          tags: ["CompTIA Security+", "SIEM & SOC", "Agentic AI", "AWS Security"],
        },
        {
          title: "AWS & DevOps Weiterbildung",
          badge: "AWS Select Tier Partner",
          duration: "3 – 8 Monate (5 Kombinationen)",
          nextStart: "24 Aug 2026",
          desc: "Qualifiziere dich in drei Modulen (AWS Solutions Architect, DevOps Engineering und Azure Fundamentals) zum Cloud & DevOps Engineer.",
          to: "/it-kurse/aws-devops-weiterbildung/",
          tags: ["AWS SAA-C03", "Kubernetes", "Terraform", "Azure AZ-900"],
        },
        {
          title: "Software Testing (SDET) Weiterbildung",
          badge: "QA & Testautomatisierung",
          duration: "Vollzeit-Programm",
          nextStart: "14 Sep 2026",
          desc: "Qualitätssicherung und automatisierte Softwaretests für Web- und API-Systeme mit Java, Selenium, Cypress, Playwright und CI/CD.",
          to: "/it-kurse/software-testing-weiterbildung/",
          tags: ["Java", "Selenium & Playwright", "API Testing", "ISTQB Basis"],
        },
      ];

  const steps = isEn
    ? [
        {
          num: "01",
          title: "Book a free consultation in English",
          desc: "Speak with a Clarusway career advisor in English to choose the right IT bootcamp or module combination for your background.",
        },
        {
          num: "02",
          title: "Receive your German course offer (Maßnahmeangebot)",
          desc: "Within 24 hours, Clarusway prepares all official AZAV documents in German required by the Agentur für Arbeit or Jobcenter.",
        },
        {
          num: "03",
          title: "Present the offer to your advisor",
          desc: "Submit the course offer at your appointment to receive your Bildungsgutschein (education voucher) or AVGS.",
        },
        {
          num: "04",
          title: "Start your bootcamp at 0 € tuition",
          desc: "Clarusway redeems the voucher directly with the agency — you join your live English cohort with 100% of tuition covered.",
        },
      ]
    : [
        {
          num: "01",
          title: "Kostenlose Beratung buchen",
          desc: "Im persönlichen Gespräch klären wir deine Vorkenntnisse, dein Berufsziel und wählen das passende IT-Programm oder Einzelmodul aus.",
        },
        {
          num: "02",
          title: "Individuelles Maßnahmeangebot erhalten",
          desc: "Innerhalb von 24 Stunden erstellen wir dein offizielles AZAV-Angebot inklusive Maßnahmenummer und Begründungshilfe.",
        },
        {
          num: "03",
          title: "Bildungsgutschein beantragen",
          desc: "Du legst das Angebot deiner Vermittlungsfachkraft bei der Agentur für Arbeit oder dem Jobcenter vor und erhältst den Gutschein.",
        },
        {
          num: "04",
          title: "Weiterbildung zu 100 % gefördert starten",
          desc: "Wir rechnen direkt mit der Behörde ab — für dich fallen 0 € Kursgebühren an.",
        },
      ];

  const guides = isEn
    ? [
        {
          title: "Unemployed in Germany: Step-by-Step Guide for Expats",
          badge: "Expat Guide",
          desc: "How to register with the Agentur für Arbeit, understand ALG I & Bürgergeld, and qualify for funded IT training.",
          to: "/guides/unemployed-in-germany/",
        },
        {
          title: "Agentur für Arbeit & Jobcenter Guide for English Speakers",
          badge: "Funding Guide",
          desc: "How the two agencies work, how to prepare for your appointment, and how to request a Bildungsgutschein.",
          to: "/guides/agentur-fur-arbeit-jobcenter/",
        },
        {
          title: "IT Jobs in Germany for English Speakers: Where to Start",
          badge: "Career Guide",
          desc: "Which IT roles hire in English across Germany and what salaries to expect.",
          to: "/guides/it-jobs-in-germany-english-speakers/",
        },
        {
          title: "German CV Template (Lebenslauf) for IT & Tech Roles",
          badge: "Application Guide",
          desc: "How to format a German-standard tech CV in English that passes ATS filters and convinces HR teams.",
          to: "/guides/german-cv-template/",
        },
      ]
    : [
        {
          title: "Quereinstieg in die IT: Wege, Berufe und Förderung",
          badge: "Karriere-Ratgeber",
          desc: "Welche IT-Berufe sich für Quereinsteiger ohne Studium eignen und wie der Einstieg Schritt für Schritt gelingt.",
          to: "/ratgeber/quereinstieg-it/",
        },
        {
          title: "Weiterbildung über Arbeitsagentur & Jobcenter beantragen",
          badge: "Förder-Ratgeber",
          desc: "Voraussetzungen, Fristen und Tipps für das Gespräch mit deiner Vermittlungsfachkraft.",
          to: "/ratgeber/weiterbildung-arbeitsagentur/",
        },
        {
          title: "AI Engineer: Berufsbild, Aufgaben und Gehalt in Deutschland",
          badge: "Berufsratgeber",
          desc: "Was ein AI Engineer entwickelt, wie er sich vom Data Scientist unterscheidet und was man verdient.",
          to: "/ratgeber/ai-engineer/",
        },
        {
          title: "DevOps Engineer: Aufgaben, Tools und Gehalt",
          badge: "Berufsratgeber",
          desc: "Warum Cloud- und DevOps-Spezialisten zu den gefragtesten IT-Fachkräften gehören.",
          to: "/ratgeber/devops-engineer/",
        },
      ];

  const faqs = isEn
    ? [
        {
          q: "Are Clarusway courses really taught in English?",
          a: "Yes. All live classes, coding labs, projects, and career coaching sessions at Clarusway are conducted 100% in English. At the same time, Clarusway provides all official enrollment paperwork in German for your Agentur für Arbeit or Jobcenter advisor.",
        },
        {
          q: "How can I take a course for free with a Bildungsgutschein?",
          a: "All Clarusway programs are AZAV-certified in Germany. If you are registered with the Agentur für Arbeit (Federal Employment Agency) or Jobcenter, a Bildungsgutschein (education voucher) covers 100% of the tuition fees.",
        },
        {
          q: "Do I need to speak German to get a Bildungsgutschein or an IT job?",
          a: "You do not need German for the classes. For your Agentur für Arbeit or Jobcenter appointment, Clarusway prepares your German course offer (Maßnahmeangebot) and guides you step by step. In the German IT sector, many startups and international companies operate in English.",
        },
        {
          q: "Can I join without an IT or coding background?",
          a: "Yes. Each main bootcamp starts at Module 1 with zero prior coding or IT knowledge required. Applicants who already have technical skills can pass a technical assessment to enter directly into advanced modules.",
        },
        {
          q: "How does Clarusway help me find a job in Germany?",
          a: "Clarusway's Career Management team supports you with German-standard CV (Lebenslauf) optimization, LinkedIn and GitHub portfolio reviews, and mock technical interviews tailored to employers in Germany.",
        },
      ]
    : [
        {
          q: "Welche IT-Weiterbildungen bietet Clarusway an?",
          a: "Clarusway bietet AZAV-zertifizierte Live-Online-Weiterbildungen in den Bereichen AI Engineering & Data Science, Data Analytics, AI-Assisted Full Stack Webentwicklung, Cyber Security (SOC & Cloud Security), AWS & DevOps Engineering, Software Testing (SDET), Kubernetes CKAD sowie einen IT-Orientierungskurs an.",
        },
        {
          q: "Werden die Kurse zu 100 % mit Bildungsgutschein gefördert?",
          a: "Ja. Sämtliche Hauptprogramme und Einzelmodule sind nach AZAV zugelassen. Mit einem Bildungsgutschein der Agentur für Arbeit oder des Jobcenters werden die Lehrgangsgebühren zu 100 % übernommen. Beschäftigte können über das Qualifizierungschancengesetz (QCG) gefördert werden.",
        },
        {
          q: "Brauche ich IT-Vorkenntnisse für den Einstieg?",
          a: "Nein. Der Einstieg in Modul 1 ist in unseren Hauptprogrammen ausdrücklich für Quereinsteiger ohne Programmier- oder IT-Vorkenntnisse konzipiert. Wer bereits Vorwissen mitbringt, kann über eine Einstufungsprüfung direkt in ein höheres Modul einsteigen.",
        },
        {
          q: "In welcher Sprache findet der Unterricht statt?",
          a: "Die Unterrichtssprache in den Live-Kursen ist Englisch — die internationale Arbeitssprache der IT-Branche. Unsere Studien-, Förder- und Karriereberatung begleitet dich auf Wunsch durchgehend auf Deutsch.",
        },
        {
          q: "Wie unterstützt Clarusway bei der Jobsuche?",
          a: "Unser integriertes Karriere-Management begleitet dich mit Lebenslauf- und LinkedIn-Optimierung nach deutschem Standard, GitHub-Portfolio-Reviews sowie individuellem Bewerbungs- und Interviewtraining.",
        },
      ];

  const origin = isEn ? "https://en.clarusway.de" : "https://clarusway.de";
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      name: "Clarusway GmbH",
      url: `${origin}/`,
      telephone: "+4921317762749",
      email: "info@clarusway.de",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Hellersbergstraße 14",
        addressLocality: "Neuss",
        postalCode: "41460",
        addressCountry: "DE",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: isEn ? "Clarusway Germany (English)" : "Clarusway Deutschland",
      url: `${origin}/`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    },
  ];

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: DARK }} className="bg-white">
      <SeoHead title={metaTitle} description={metaDescription} path="/" schema={schema} />

      {/* =====================================================================
          HERO SECTION (Component B1) — Single H1
          ===================================================================== */}
      <section style={{ backgroundColor: CREAM }} className="py-14 md:py-20 border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-[#fde8ef] text-[#e51a59] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5">
                <ShieldCheckIcon className="w-4 h-4" />
                <span>
                  {isEn
                    ? "AZAV-Certified IT School in Germany · 100% Funded with Bildungsgutschein"
                    : "AZAV-zertifizierter Bildungsträger · 100 % Förderung mit Bildungsgutschein"}
                </span>
              </div>

              <h1
                style={{ color: DARK, lineHeight: 1.15 }}
                className="text-3xl sm:text-4xl lg:text-[44px] font-bold mb-5 tracking-tight"
              >
                {isEn
                  ? "Start your IT career in Germany, trained in English"
                  : "IT Weiterbildung mit Bildungsgutschein: online, live und praxisnah"}
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                {isEn
                  ? "Clarusway trains career changers and tech professionals in Germany through live online IT bootcamps in English — covering AI Engineering, Data Analytics, AI-Assisted Full Stack Development, Cyber Security, AWS & DevOps, and Software Testing. All programs are AZAV-certified and 100% fundable with a Bildungsgutschein (education voucher) from the Agentur für Arbeit or Jobcenter."
                  : "Qualifiziere dich im Live-Online-Unterricht für gefragte IT-Berufe in Deutschland: AI Engineering & Data Science, Full Stack Webentwicklung, Cyber Security, AWS & DevOps oder Software Testing. Unsere modularen Programme sind AZAV-zertifiziert und zu 100 % über einen Bildungsgutschein der Agentur für Arbeit oder des Jobcenters förderbar."}
              </p>

              <div className="flex flex-wrap gap-3.5 items-center mb-7">
                <Link
                  to={consultPath}
                  onClick={() =>
                    trackClaruswayEvent("beratung_angefragt", { source: "home_hero", lang })
                  }
                  style={{ backgroundColor: PRIMARY }}
                  className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-full text-sm shadow-lg hover:opacity-95 transition-opacity"
                >
                  <span>{isEn ? "Free consultation" : "Kostenlose Beratung"}</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>

                <Link
                  to={isEn ? "/it-courses/" : "/it-kurse/"}
                  className="inline-flex items-center gap-2 border-2 border-[#1a1d2e] text-[#1a1d2e] font-semibold px-6 py-3.5 rounded-full text-sm hover:bg-[#1a1d2e] hover:text-white transition-colors"
                >
                  <span>{isEn ? "Compare all IT courses" : "Alle IT-Kurse vergleichen"}</span>
                </Link>
              </div>

              <div className="flex flex-wrap gap-5 text-xs text-gray-600">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircleIcon className="w-4 h-4 text-[#e51a59]" />
                  {isEn ? "0 € tuition with Bildungsgutschein" : "0 € Kursgebühr mit Bildungsgutschein"}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircleIcon className="w-4 h-4 text-[#e51a59]" />
                  {isEn ? "Taught live in English (Max. 15)" : "Live-Unterricht in Kleingruppen (max. 15)"}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircleIcon className="w-4 h-4 text-[#e51a59]" />
                  {isEn ? "German paperwork prepared for you" : "Förderunterlagen in 24h fertig"}
                </span>
              </div>
            </div>

            {/* Right Column: Interactive Career Path Overview Card */}
            <div className="lg:col-span-5">
              <div
                style={{ backgroundColor: DARK }}
                className="rounded-3xl p-7 text-white shadow-2xl border border-white/10"
              >
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                  <div>
                    <p className="text-xs font-semibold text-[#f472b6] uppercase tracking-wider">
                      {isEn ? "2026 AI-Integrated Tracks" : "KI-integrierte IT-Pfade 2026"}
                    </p>
                    <p className="text-lg font-bold">
                      {isEn ? "Choose your IT career track" : "Wähle deinen IT-Karrierepfad"}
                    </p>
                  </div>
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 font-semibold px-3 py-1 rounded-full">
                    AZAV 100%
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  {courses.slice(0, 5).map((c) => (
                    <Link
                      key={c.to}
                      to={c.to}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                    >
                      <div>
                        <p className="text-sm font-semibold text-white group-hover:text-[#f472b6] transition-colors">
                          {c.title}
                        </p>
                        <p className="text-[11px] text-gray-400">{c.duration}</p>
                      </div>
                      <ArrowRightIcon className="w-4 h-4 text-gray-400 group-hover:text-white shrink-0" />
                    </Link>
                  ))}
                </div>

                <div className="bg-white/10 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white">
                      {isEn ? "Not sure which path fits you?" : "Noch unsicher bei der Berufswahl?"}
                    </p>
                    <p className="text-[11px] text-gray-300">
                      {isEn
                        ? "Try all fields in the 4-week IT Orientation Course"
                        : "Teste alle Bereiche im 4-wöchigen IT-Orientierungskurs"}
                    </p>
                  </div>
                  <Link
                    to={isEn ? "/it-orientation-course/" : "/it-orientierungskurs/"}
                    style={{ backgroundColor: PRIMARY }}
                    className="text-xs font-semibold text-white px-3.5 py-2 rounded-lg shrink-0 hover:opacity-95"
                  >
                    {isEn ? "IT Orientation" : "Orientierung"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          STATS STRIP (Component B2) — No heading tags
          ===================================================================== */}
      <section style={{ backgroundColor: DARK }} className="py-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {[
              ["100 %", isEn ? "Funded with Bildungsgutschein" : "Förderbar mit Bildungsgutschein"],
              ["Max. 15", isEn ? "Students per Live Cohort" : "Teilnehmende pro Live-Klasse"],
              [isEn ? "English" : "Englisch", isEn ? "Taught in English" : "Unterrichtssprache (mit DE-Beratung)"],
              ["AWS Partner", isEn ? "Select Tier Consulting Partner" : "Select Tier Consulting Partner"],
              ["4.9 / 5", isEn ? "Course Report & Career Karma" : "Course Report & Career Karma"],
            ].map(([val, label], i) => (
              <div key={i}>
                <p style={{ color: PRIMARY }} className="text-xl sm:text-2xl font-bold">
                  {val}
                </p>
                <p className="text-gray-300 text-xs">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 1: COURSES OVERVIEW — H2 + Clickable H3 Cards
          ===================================================================== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div className="max-w-2xl">
              <span
                style={{ color: PRIMARY }}
                className="text-xs font-semibold uppercase tracking-widest block mb-2"
              >
                {isEn ? "AZAV-Certified Bootcamps" : "AZAV-Zertifizierte Programme"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e] mb-2">
                {isEn ? "IT courses in English" : "Unsere geförderten IT-Weiterbildungen"}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                {isEn
                  ? "Every program is taught live online in English and can be taken as a full career track or in modular stages."
                  : "Alle Programme finden im Live-Online-Unterricht statt und können als Gesamtpaket oder in einzelnen Modulen absolviert werden."}
              </p>
            </div>
            <Link
              to={isEn ? "/it-courses/" : "/it-kurse/"}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#e51a59] hover:underline"
            >
              <span>
                {isEn ? "View full course comparison table" : "Zur Kurs-Vergleichstabelle"}
              </span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {courses.map((course) => (
              <article
                key={course.to}
                style={{ backgroundColor: CREAM }}
                className="rounded-2xl p-6 border border-gray-200 hover:border-[#e51a59] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#fde8ef] text-[#e51a59]">
                      {course.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1a1d2e] mb-2 leading-snug">
                    <Link to={course.to} className="hover:text-[#e51a59] transition-colors">
                      {course.title}
                    </Link>
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {course.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {course.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white border border-gray-200 text-gray-700 text-[11px] font-medium px-2.5 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200/80">
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                    <span className="inline-flex items-center gap-1">
                      <ClockIcon className="w-3.5 h-3.5 text-[#e51a59]" />
                      {course.duration}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <CalendarIcon className="w-3.5 h-3.5 text-[#e51a59]" />
                      {course.nextStart}
                    </span>
                  </div>
                  <Link
                    to={course.to}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e51a59] hover:underline"
                  >
                    <span>{course.title}</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Short Specializations Bar (Kubernetes CKAD + IT Orientation) */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-6 bg-[#f6f7fb] border border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 mb-2">
                  {isEn ? "4-Week Specialization" : "4-Wochen-Spezialisierung"}
                </span>
                <h3 className="text-lg font-bold text-[#1a1d2e]">
                  <Link
                    to={
                      isEn
                        ? "/it-courses/kubernetes-ckad-certification-course/"
                        : "/it-kurse/kubernetes-ckad-zertifikat-kurs/"
                    }
                    className="hover:text-[#e51a59]"
                  >
                    {isEn
                      ? "Kubernetes CKAD Certification Course"
                      : "Kubernetes CKAD Zertifikat Kurs"}
                  </Link>
                </h3>
                <p className="text-xs text-gray-600 mt-1">
                  {isEn
                    ? "Intensive CNCF CKAD exam preparation for developers and DevOps engineers."
                    : "Intensive Vorbereitung auf die offizielle CNCF CKAD Zertifizierungsprüfung."}
                </p>
              </div>
              <Link
                to={
                  isEn
                    ? "/it-courses/kubernetes-ckad-certification-course/"
                    : "/it-kurse/kubernetes-ckad-zertifikat-kurs/"
                }
                className="shrink-0 text-xs font-semibold text-[#e51a59] hover:underline inline-flex items-center gap-1"
              >
                <span>{isEn ? "Kubernetes CKAD Course" : "Zum CKAD Kurs"}</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="rounded-2xl p-6 bg-[#fde8ef]/50 border border-[#e51a59]/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#e51a59] text-white mb-2">
                  {isEn ? "Funded with AVGS" : "Gefördert mit AVGS"}
                </span>
                <h3 className="text-lg font-bold text-[#1a1d2e]">
                  <Link
                    to={isEn ? "/it-orientation-course/" : "/it-orientierungskurs/"}
                    className="hover:text-[#e51a59]"
                  >
                    {isEn ? "IT Orientation Course" : "IT-Orientierungskurs"}
                  </Link>
                </h3>
                <p className="text-xs text-gray-600 mt-1">
                  {isEn
                    ? "Not sure yet? Test Data/AI, Web, Cyber Security, and Cloud in 4 weeks."
                    : "Noch unsicher? Erprobe KI, Web, Cyber Security und Cloud in 4 Wochen."}
                </p>
              </div>
              <Link
                to={isEn ? "/it-orientation-course/" : "/it-orientierungskurs/"}
                className="shrink-0 text-xs font-semibold text-[#e51a59] hover:underline inline-flex items-center gap-1"
              >
                <span>{isEn ? "IT Orientation Course" : "Zum Orientierungskurs"}</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: FUNDING & BILDUNGSGUTSCHEIN STEPS (Component B11)
          ===================================================================== */}
      <section style={{ backgroundColor: SOFT_BG }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span
              style={{ color: PRIMARY }}
              className="text-xs font-semibold uppercase tracking-widest block mb-2"
            >
              {isEn ? "State Funding in Germany" : "Staatliche Förderung"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e] mb-3">
              {isEn
                ? "100% funded with a Bildungsgutschein"
                : "100 % Förderung mit Bildungsgutschein, AVGS und QCG"}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {isEn
                ? "If you live in Germany and are registered with the Agentur für Arbeit (Federal Employment Agency) or Jobcenter, your IT bootcamp can be funded 100% through a Bildungsgutschein (education voucher). Clarusway handles the German paperwork for your advisor."
                : "Ob arbeitssuchend, von Arbeitslosigkeit bedroht oder berufstätig: Als AZAV-zertifizierter Bildungsträger unterstützen wir dich bei allen drei staatlichen Förderwegen in Deutschland."}
            </p>
          </div>

          {/* 4 Steps (Component B11) */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-2xs relative"
              >
                <span
                  style={{ color: PRIMARY }}
                  className="text-xs font-extrabold uppercase tracking-wider bg-[#fde8ef] px-3 py-1 rounded-full inline-block mb-3"
                >
                  {isEn ? `Step ${step.num}` : `Schritt ${step.num}`}
                </span>
                <h3 className="text-base font-bold text-[#1a1d2e] mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Funding Pillar Links */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex flex-wrap gap-3">
              <Link
                to="/bildungsgutschein/"
                className="text-xs sm:text-sm font-semibold text-[#1a1d2e] bg-[#f8f5f1] hover:bg-[#fde8ef] hover:text-[#e51a59] px-4 py-2.5 rounded-xl border border-gray-200 transition-colors"
              >
                {isEn
                  ? "→ Bildungsgutschein Guide (100% Tuition)"
                  : "→ Bildungsgutschein (100 % Förderung)"}
              </Link>
              <Link
                to="/avgs/"
                className="text-xs sm:text-sm font-semibold text-[#1a1d2e] bg-[#f8f5f1] hover:bg-[#fde8ef] hover:text-[#e51a59] px-4 py-2.5 rounded-xl border border-gray-200 transition-colors"
              >
                {isEn ? "→ AVGS Voucher (Orientation)" : "→ AVGS Gutschein (Orientierung)"}
              </Link>
              <Link
                to="/qualifizierungschancengesetz/"
                className="text-xs sm:text-sm font-semibold text-[#1a1d2e] bg-[#f8f5f1] hover:bg-[#fde8ef] hover:text-[#e51a59] px-4 py-2.5 rounded-xl border border-gray-200 transition-colors"
              >
                {isEn
                  ? "→ Qualifizierungschancengesetz (Employees)"
                  : "→ Qualifizierungschancengesetz (Beschäftigte)"}
              </Link>
            </div>

            <Link
              to={isEn ? "/financing-and-tuition/" : "/finanzierung/"}
              className="text-xs sm:text-sm font-bold text-[#e51a59] hover:underline inline-flex items-center gap-1.5 shrink-0"
            >
              <span>
                {isEn ? "Compare all financing options" : "Alle Finanzierungsmöglichkeiten im Vergleich"}
              </span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: WHY CLARUSWAY & CAREER MANAGEMENT
          ===================================================================== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <span
                style={{ color: PRIMARY }}
                className="text-xs font-semibold uppercase tracking-widest block mb-2"
              >
                {isEn ? "Why Choose Clarusway" : "Deine Vorteile"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e] mb-4">
                {isEn ? "Why Clarusway" : "Warum eine IT-Weiterbildung bei Clarusway?"}
              </h2>

              <div className="grid sm:grid-cols-2 gap-5">
                {(isEn
                  ? [
                      {
                        title: "Taught 100% in English",
                        desc: "Learn programming, cloud, AI, and cyber security in English — the global language of tech teams across Germany.",
                      },
                      {
                        title: "German Paperwork Handled for Your Advisor",
                        desc: "Clarusway prepares your official Maßnahmeangebot in German so your Agentur für Arbeit or Jobcenter appointment goes smoothly.",
                      },
                      {
                        title: "Live Small-Group Cohorts (Max. 15)",
                        desc: "Daily live classes (09:00–16:45 CET) with real-time mentoring instead of pre-recorded self-study videos.",
                      },
                      {
                        title: "2026 AI-Integrated Curricula",
                        desc: "Every program includes modern AI workflows — from Agentic AI & MCP to Cursor, Claude Code, and AI-enhanced SOC operations.",
                      },
                    ]
                  : [
                      {
                        title: "Live-Unterricht in Kleingruppen (max. 15 Plätze)",
                        desc: "Täglicher Live-Unterricht von 09:00 bis 16:45 Uhr mit echten Dozenten und Mentoren statt einsamer Selbstlernvideos.",
                      },
                      {
                        title: "KI-integrierte Lehrpläne 2026",
                        desc: "Von Agentic AI & MCP über Cursor und Claude Code bis zum KI-gestützten Security Operations Center.",
                      },
                      {
                        title: "AZAV-zertifiziert & AWS Select Tier Partner",
                        desc: "Geprüfte Bildungsqualität mit Sitz in Neuss und offizieller Partnerschaft im Amazon Web Services Partner Network.",
                      },
                      {
                        title: "Modulare Einstiegsmöglichkeiten",
                        desc: "Starte ohne Vorkenntnisse in Modul 1 oder verkürze deine Weiterbildung per Einstufungsprüfung.",
                      },
                    ]
                ).map((item, i) => (
                  <div
                    key={i}
                    style={{ backgroundColor: CREAM }}
                    className="rounded-2xl p-6 border border-gray-200/80"
                  >
                    <h3 className="text-base font-bold text-[#1a1d2e] mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Management Highlight Card */}
            <div className="lg:col-span-5">
              <div
                style={{ backgroundColor: DARK }}
                className="rounded-3xl p-7 sm:p-8 text-white h-full flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-[#e51a59] text-white mb-4">
                    {isEn ? "Included Career Coaching" : "Integriertes Karriere-Coaching"}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold mb-3">
                    {isEn
                      ? "Career support for the German job market"
                      : "Karriere-Management für deinen Einstieg in die IT"}
                  </h2>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-5">
                    {isEn
                      ? "Technical skills are only half the journey. Clarusway's Career Management team prepares you specifically for hiring processes in Germany:"
                      : "Fachwissen ist die Basis — unser Karriere-Team begleitet dich vom ersten Kurstag bis zur Vertragsunterschrift:"}
                  </p>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-gray-200 mb-6">
                    {(isEn
                      ? [
                          "German-standard CV (Lebenslauf) & LinkedIn optimization",
                          "GitHub portfolio & capstone project reviews",
                          "1-on-1 technical & HR mock interviews in English",
                          "Application strategy for English-speaking tech companies in Germany",
                        ]
                      : [
                          "Lebenslauf- & LinkedIn-Optimierung nach deutschem Standard",
                          "Aufbau eines überzeugenden GitHub-Projektportfolios",
                          "Technische Probe-Interviews & Bewerbungstraining",
                          "Individuelle Begleitung beim Jobeinstieg in Deutschland",
                        ]
                    ).map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircleIcon className="w-4 h-4 text-[#e51a59] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={isEn ? "/career-management/" : "/karriere-management/"}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#f472b6] hover:underline"
                >
                  <span>
                    {isEn
                      ? "Explore Career Management services"
                      : "Mehr über unser Karriere-Management erfahren"}
                  </span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: GRADUATE REVIEWS (Component B12)
          ===================================================================== */}
      <section style={{ backgroundColor: CREAM }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span
                style={{ color: PRIMARY }}
                className="text-xs font-semibold uppercase tracking-widest block mb-2"
              >
                {isEn ? "Graduate Stories" : "Absolventenstimmen"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e]">
                {isEn ? "What graduates say" : "Erfahrungen unserer Absolventen"}
              </h2>
            </div>

            <Link
              to={isEn ? "/success-stories/" : "/erfolgsgeschichten/"}
              className="text-xs sm:text-sm font-semibold text-[#e51a59] hover:underline inline-flex items-center gap-1.5"
            >
              <span>{isEn ? "Read all success stories" : "Alle Erfolgsgeschichten lesen"}</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-7 border border-gray-200 shadow-2xs flex flex-col justify-between">
              <p className="text-gray-700 text-sm sm:text-base italic leading-relaxed mb-6">
                {isEn
                  ? "“The mentors are always reachable and genuinely care about every student. In just a few months I learned more about real cloud and DevOps infrastructure than in years of self-study.”"
                  : "„Die Mentoren sind immer erreichbar und gehen wirklich auf jeden einzeln ein. Ich habe in wenigen Monaten mehr über reale IT-Projekte gelernt als in Jahren des Selbststudiums.“"}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <p className="font-bold text-sm text-[#1a1d2e]">DH Kim</p>
                  <p className="text-xs text-gray-500">
                    {isEn ? "Clarusway Graduate" : "Clarusway Absolvent"}
                  </p>
                </div>
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#e51a59] hover:underline inline-flex items-center gap-1"
                >
                  <span>{isEn ? "Google Reviews" : "Google Rezensionen"}</span>
                  <ExternalLinkIcon className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-gray-200 shadow-2xs flex flex-col justify-between">
              <p className="text-gray-700 text-sm sm:text-base italic leading-relaxed mb-6">
                {isEn
                  ? "“Clarusway helped me transition into IT in Germany without prior coding experience. The live classes in English and the support with the Bildungsgutschein made the process straightforward.”"
                  : "„Clarusway hat mir geholfen, ohne Vorkenntnisse in die IT einzusteigen. Das Live-Format und die Unterstützung beim Bildungsgutschein haben den Wechsel möglich gemacht.“"}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <p className="font-bold text-sm text-[#1a1d2e]">Morad</p>
                  <p className="text-xs text-gray-500">
                    {isEn ? "Clarusway Graduate" : "Clarusway Absolvent"}
                  </p>
                </div>
                <a
                  href="https://www.coursereport.com/schools/clarusway"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#e51a59] hover:underline inline-flex items-center gap-1"
                >
                  <span>Course Report</span>
                  <ExternalLinkIcon className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: FEATURED GUIDES (Component B17) — Expat / Career Cluster
          ===================================================================== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span
                style={{ color: PRIMARY }}
                className="text-xs font-semibold uppercase tracking-widest block mb-2"
              >
                {isEn ? "Expat & Career Guides" : "Wissen & Orientierung"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e]">
                {isEn
                  ? "Guides for English speakers in Germany"
                  : "Aktuelle IT-Ratgeber für Quereinsteiger"}
              </h2>
            </div>

            <Link
              to={isEn ? "/guides/" : "/ratgeber/"}
              className="text-xs sm:text-sm font-semibold text-[#e51a59] hover:underline inline-flex items-center gap-1.5"
            >
              <span>{isEn ? "Browse all guides" : "Alle Ratgeber ansehen"}</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guides.map((g) => (
              <article
                key={g.to}
                style={{ backgroundColor: SOFT_BG }}
                className="rounded-2xl p-6 border border-gray-200 hover:border-[#e51a59] transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#fde8ef] text-[#e51a59] mb-3">
                    <BookOpenIcon className="w-3 h-3" />
                    <span>{g.badge}</span>
                  </span>
                  <h3 className="text-base font-bold text-[#1a1d2e] mb-2 leading-snug">
                    <Link to={g.to} className="hover:text-[#e51a59] transition-colors">
                      {g.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">{g.desc}</p>
                </div>

                <Link
                  to={g.to}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#e51a59] hover:underline"
                >
                  <span>{g.title}</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: FAQ (Component B13) — <details><summary><h3>
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
              {isEn
                ? "Frequently asked questions"
                : "Häufige Fragen zur IT-Weiterbildung bei Clarusway"}
            </h2>
          </div>

          <div className="space-y-3.5">
            {faqs.map((f, idx) => (
              <details
                key={idx}
                open={idx === 0}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-2xs"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none">
                  <h3 className="text-sm sm:text-base font-bold text-[#1a1d2e] text-left">
                    {f.q}
                  </h3>
                  <span
                    style={{ color: PRIMARY }}
                    className="w-7 h-7 rounded-full bg-[#fde8ef] flex items-center justify-center shrink-0 font-bold text-sm group-open:rotate-45 transition-transform"
                  >
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          FINAL CTA BANNER (Component B16)
          ===================================================================== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            style={{
              background: "linear-gradient(135deg, #1a1d2e 0%, #2d1b3d 55%, #8a1c4a 100%)",
            }}
            className="rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              {isEn
                ? "Ready to launch your IT career in Germany?"
                : "Bereit für deinen Einstieg in die IT?"}
            </h2>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-7 leading-relaxed">
              {isEn
                ? "Book a free 1-on-1 consultation in English. Clarusway helps you choose the right program and prepares your official Bildungsgutschein offer within 24 hours."
                : "Lass dich kostenlos und unverbindlich beraten. Wir prüfen deinen Förderanspruch und erstellen innerhalb von 24 Stunden dein offizielles Angebot für den Bildungsgutschein."}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to={consultPath}
                style={{ backgroundColor: PRIMARY }}
                className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-full text-sm shadow-lg hover:opacity-95 transition-opacity"
              >
                <span>{isEn ? "Free consultation" : "Kostenlose Beratung"}</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link
                to="/bildungsgutschein/"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-6 py-3.5 rounded-full text-sm hover:bg-white/10 transition-colors"
              >
                <span>
                  {isEn ? "How to get a Bildungsgutschein" : "Bildungsgutschein beantragen"}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
