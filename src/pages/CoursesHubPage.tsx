import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { SeoHead } from "../components/SeoHead";
import { Breadcrumb } from "../components/Breadcrumb";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  ClockIcon,
  CalendarIcon,
} from "../components/Icons";

const PRIMARY = "#e51a59";
const DARK = "#1a1d2e";
const SOFT_BG = "#f6f7fb";

export function CoursesHubPage() {
  const { lang } = useLanguage();
  const isEn = lang === "en";
  const currentPath = isEn ? "/it-courses/" : "/it-kurse/";
  const consultPath = isEn ? "/application-form/" : "/beratung/";

  const metaTitle = isEn
    ? "IT Bootcamps and Courses in Germany | Clarusway"
    : "IT-Kurse & Weiterbildungen mit Bildungsgutschein | Clarusway";

  const metaDescription = isEn
    ? "Compare Clarusway's live online IT bootcamps in Germany: AI Engineering, Data Analytics, Full Stack, Cyber Security, AWS & DevOps, and SDET. English, Turkish & German instruction. 100% funded with a Bildungsgutschein."
    : "Vergleiche alle geförderten IT-Weiterbildungen bei Clarusway: AI Engineering, Data Analytics, Full Stack, Cyber Security, AWS & DevOps und Software Testing.";

  const comparisonRows = isEn
    ? [
        {
          title: "AI Engineering Bootcamp",
          to: "/it-courses/ai-engineering/",
          duration: "32 Weeks (or 6–19 Wk.)",
          entry: "Beginner (M1) or Assessment (M2/M3)",
          roles: "Data Analyst, Data Scientist, ML / AI Engineer",
          funding: "100% Bildungsgutschein / QCG",
          start: "27 Jul 2026",
        },
        {
          title: "AI-Assisted Full Stack Developer Course",
          to: "/it-courses/full-stack-developer/",
          duration: "3 – 12 Months (4 Modules)",
          entry: "Beginner (M1) or JS Basics (M2)",
          roles: "Full Stack, Frontend, Backend Developer",
          funding: "100% Bildungsgutschein / QCG",
          start: "27 Jul 2026",
        },
        {
          title: "AI-Enhanced Cyber Security Analyst Course",
          to: "/it-courses/cyber-security/",
          duration: "4 Modules (Full or M2+)",
          entry: "Beginner (M1) or Assessment (M2)",
          roles: "SOC Analyst, Cyber / Cloud Security Analyst",
          funding: "100% Bildungsgutschein / QCG",
          start: "24 Aug 2026",
        },
        {
          title: "AWS Solutions Architect & DevOps Training",
          to: "/it-courses/devops-aws/",
          duration: "3 – 8 Months (5 Options)",
          entry: "Beginner (M1) or Cloud Basics (M2/M3)",
          roles: "DevOps Engineer, Cloud Engineer, AWS Architect",
          funding: "100% Bildungsgutschein / QCG",
          start: "24 Aug 2026",
        },
        {
          title: "SDET Course: Software Testing & Automation",
          to: "/it-courses/software-development-engineer-in-test/",
          duration: "Full-Time Track",
          entry: "Beginner Friendly",
          roles: "QA Automation Engineer, SDET",
          funding: "100% Bildungsgutschein / QCG",
          start: "14 Sep 2026",
        },
        {
          title: "Kubernetes CKAD Certification Course",
          to: "/it-courses/kubernetes-ckad-certification-course/",
          duration: "4 Weeks Intensive",
          entry: "Linux & Docker Basics",
          roles: "Kubernetes / DevOps Engineer",
          funding: "100% Bildungsgutschein / QCG",
          start: "12 Oct 2026",
        },
        {
          title: "IT Orientation Course",
          to: "/it-orientation-course/",
          duration: "4 Weeks",
          entry: "No Prior IT Knowledge",
          roles: "Career Discovery Across All IT Tracks",
          funding: "100% AVGS Voucher / Free",
          start: "03 Aug 2026",
        },
      ]
    : [
        {
          title: "AI Engineer Weiterbildung",
          to: "/it-kurse/ai-engineer-weiterbildung/",
          duration: "32 Wochen (oder 6–19 Wo.)",
          entry: "Ohne Vorwissen (M1) oder per Assessment (M2/M3)",
          roles: "Data Analyst, Data Scientist, ML / AI Engineer",
          funding: "100 % Bildungsgutschein / QCG",
          start: "27 Jul 2026",
        },
        {
          title: "Data Analytics Weiterbildung",
          to: "/it-kurse/data-analytics-weiterbildung/",
          duration: "13 Wochen (520 UE)",
          entry: "Ohne Vorkenntnisse",
          roles: "Data Analyst, Business Intelligence Analyst",
          funding: "100 % Bildungsgutschein / QCG",
          start: "27 Jul 2026",
        },
        {
          title: "Full Stack Entwickler Weiterbildung",
          to: "/it-kurse/full-stack-entwickler-weiterbildung/",
          duration: "3 – 12 Monate (4 Module)",
          entry: "Ohne Vorwissen (M1) oder mit JS-Basis (M2)",
          roles: "Full Stack, Frontend, Backend Entwickler",
          funding: "100 % Bildungsgutschein / QCG",
          start: "27 Jul 2026",
        },
        {
          title: "Cyber Security Weiterbildung",
          to: "/it-kurse/cyber-security-weiterbildung/",
          duration: "4 Module (Komplett oder ab M2)",
          entry: "Ohne Vorwissen (M1) oder per Assessment (M2)",
          roles: "SOC Analyst, Cyber / Cloud Security Analyst",
          funding: "100 % Bildungsgutschein / QCG",
          start: "24 Aug 2026",
        },
        {
          title: "AWS & DevOps Weiterbildung",
          to: "/it-kurse/aws-devops-weiterbildung/",
          duration: "3 – 8 Monate (5 Optionen)",
          entry: "Ohne Vorwissen (M1) oder Cloud-Basis (M2/M3)",
          roles: "Cloud Engineer, DevOps Engineer, AWS Architect",
          funding: "100 % Bildungsgutschein / QCG",
          start: "24 Aug 2026",
        },
        {
          title: "AWS Solutions Architect Weiterbildung",
          to: "/it-kurse/aws-solutions-architect-weiterbildung/",
          duration: "3 Monate (Modul 1)",
          entry: "Ohne Vorkenntnisse",
          roles: "AWS Solutions Architect, Cloud Engineer",
          funding: "100 % Bildungsgutschein / QCG",
          start: "24 Aug 2026",
        },
        {
          title: "Software Testing (SDET) Weiterbildung",
          to: "/it-kurse/software-testing-weiterbildung/",
          duration: "Vollzeit-Programm",
          entry: "Ohne Vorkenntnisse",
          roles: "QA Automation Engineer, SDET",
          funding: "100 % Bildungsgutschein / QCG",
          start: "14 Sep 2026",
        },
        {
          title: "Kubernetes CKAD Zertifikat Kurs",
          to: "/it-kurse/kubernetes-ckad-zertifikat-kurs/",
          duration: "4 Wochen Intensiv",
          entry: "Linux- & Docker-Grundkenntnisse",
          roles: "Kubernetes / DevOps Engineer",
          funding: "100 % Bildungsgutschein / QCG",
          start: "12 Okt 2026",
        },
        {
          title: "IT-Orientierungskurs",
          to: "/it-orientierungskurs/",
          duration: "4 Wochen",
          entry: "Ohne Vorkenntnisse",
          roles: "Berufsorientierung für alle IT-Pfade",
          funding: "100 % AVGS / Kostenlos",
          start: "03 Aug 2026",
        },
      ];

  const groups = isEn
    ? [
        {
          groupH3: "Data & AI",
          desc: "From SQL and Power BI dashboards to Machine Learning and autonomous Agentic AI systems.",
          items: [
            {
              title: "AI Engineering Bootcamp",
              to: "/it-courses/ai-engineering/",
              meta: "32 Weeks · Modules 1 + 2 + 3",
              summary: "Python, SQL, Power BI (13-Wk M1), Classical ML, PyTorch, RAG, LangGraph & MCP.",
            },
          ],
        },
        {
          groupH3: "Software Development & Testing",
          desc: "Build modern full-stack web applications or automate end-to-end software quality assurance.",
          items: [
            {
              title: "AI-Assisted Full Stack Developer Course",
              to: "/it-courses/full-stack-developer/",
              meta: "4 Modules · React, Next.js & Node.js",
              summary: "Full-stack TypeScript web engineering with Cursor, Claude Code & Copilot.",
            },
            {
              title: "SDET Course: Software Testing and Automation",
              to: "/it-courses/software-development-engineer-in-test/",
              meta: "Full-Time · UI & API Automation",
              summary: "Java, Selenium, Cypress, Playwright, Postman, SQL, and CI/CD testing.",
            },
          ],
        },
        {
          groupH3: "Cloud, DevOps & Kubernetes",
          desc: "Design resilient cloud infrastructure on AWS & Azure and automate container deployments.",
          items: [
            {
              title: "AWS Solutions Architect & DevOps Training",
              to: "/it-courses/devops-aws/",
              meta: "3 – 8 Months · AWS, DevOps & Azure",
              summary: "AI-Enhanced AWS Cloud Engineer, DevOps Engineer & Azure Basics.",
            },
            {
              title: "Kubernetes CKAD Certification Course",
              to: "/it-courses/kubernetes-ckad-certification-course/",
              meta: "4 Weeks · Intensive CLI Labs",
              summary: "Prepare for the official CNCF Certified Kubernetes Application Developer exam.",
            },
          ],
        },
        {
          groupH3: "Cyber Security",
          desc: "Protect enterprise networks, investigate incidents in the SIEM lab, and secure cloud workloads.",
          items: [
            {
              title: "AI-Enhanced Cyber Security Analyst Course",
              to: "/it-courses/cyber-security/",
              meta: "4 Modules · Beginner or Direct Entry (M2)",
              summary: "CompTIA Security+, AI-Enhanced SOC Analyst, Agentic AI SecOps & AWS Security.",
            },
          ],
        },
      ]
    : [
        {
          groupH3: "KI & Data Science",
          desc: "Von Datenanalyse und Business Intelligence bis zu Machine Learning und autonomen Agentic-AI-Systemen.",
          items: [
            {
              title: "AI Engineer Weiterbildung",
              to: "/it-kurse/ai-engineer-weiterbildung/",
              meta: "32 Wochen · Modul 1 + 2 + 3",
              summary: "Python, SQL, Power BI, Machine Learning, PyTorch, RAG, LangGraph & MCP.",
            },
            {
              title: "Data Analytics Weiterbildung",
              to: "/it-kurse/data-analytics-weiterbildung/",
              meta: "13 Wochen · Modul 1 Eigenständig",
              summary: "Python, SQL, Statistik, Power BI und Tableau für den schnellen Einstieg.",
            },
          ],
        },
        {
          groupH3: "Webentwicklung & Software Testing",
          desc: "Entwickle moderne Full-Stack-Webanwendungen oder sichere Softwarequalität durch Testautomatisierung.",
          items: [
            {
              title: "Full Stack Entwickler Weiterbildung",
              to: "/it-kurse/full-stack-entwickler-weiterbildung/",
              meta: "4 Module · React, Next.js & Node.js",
              summary: "TypeScript-Webentwicklung inklusive Cursor, Claude Code und GitHub Copilot.",
            },
            {
              title: "Software Testing (SDET) Weiterbildung",
              to: "/it-kurse/software-testing-weiterbildung/",
              meta: "Vollzeit · UI & API Testautomatisierung",
              summary: "Java, Selenium, Cypress, Playwright, Postman, SQL und CI/CD.",
            },
          ],
        },
        {
          groupH3: "Cloud, DevOps & Kubernetes",
          desc: "Plane hochverfügbare Cloud-Architekturen auf AWS & Azure und automatisiere Container-Plattformen.",
          items: [
            {
              title: "AWS & DevOps Weiterbildung",
              to: "/it-kurse/aws-devops-weiterbildung/",
              meta: "3 – 8 Monate · 5 Modulkombinationen",
              summary: "AWS Solutions Architect, Docker, Kubernetes, Terraform, CI/CD & Azure.",
            },
            {
              title: "AWS Solutions Architect Weiterbildung",
              to: "/it-kurse/aws-solutions-architect-weiterbildung/",
              meta: "3 Monate · Modul 1 Fokus",
              summary: "AWS Cloud-Infrastruktur und gezielte Vorbereitung auf die SAA-C03 Prüfung.",
            },
            {
              title: "Kubernetes CKAD Zertifikat Kurs",
              to: "/it-kurse/kubernetes-ckad-zertifikat-kurs/",
              meta: "4 Wochen · Intensive Terminal-Labs",
              summary: "Vorbereitung auf die offizielle CNCF Kubernetes CKAD Zertifizierung.",
            },
          ],
        },
        {
          groupH3: "Cyber Security",
          desc: "Überwache Unternehmensnetzwerke im Security Operations Center (SOC) und sichere Cloud-Systeme ab.",
          items: [
            {
              title: "Cyber Security Weiterbildung",
              to: "/it-kurse/cyber-security-weiterbildung/",
              meta: "4 Module · Einstieg ab M1 oder M2",
              summary: "CompTIA Security+, KI-gestütztes SOC, Agentic AI SecOps & AWS Security.",
            },
          ],
        },
      ];

  const faqs = isEn
    ? [
        {
          q: "Which IT course is best for complete beginners?",
          a: "All main Clarusway tracks (AI Engineering, Data Analytics, Full Stack Developer, Cyber Security, AWS & DevOps, and SDET) begin at Module 1 with zero prior coding or IT knowledge required. If you want a compact 13-week entry, Data Analytics is a popular choice; if you are undecided, start with the 4-week IT Orientation Course.",
        },
        {
          q: "Can I book individual modules instead of a full bootcamp?",
          a: "Yes. Clarusway's modular system is AZAV-certified so you can book either the full career track or individual modules (for example, direct entry into Module 2 of Cyber Security or Module 2/3 of AI Engineering after passing a technical assessment).",
        },
        {
          q: "Are all courses 100% funded with a Bildungsgutschein?",
          a: "Yes. Every program listed on this page is AZAV-certified and eligible for 100% funding via a Bildungsgutschein (education voucher) from the Agentur für Arbeit or Jobcenter, or via the Qualifizierungschancengesetz (QCG) for employees.",
        },
        {
          q: "Do I need to speak German?",
          a: "No. Courses are offered with flexible instruction in English and Turkish (German cohorts expanding). Clarusway provides all official German enrollment documents required by your Agentur für Arbeit or Jobcenter advisor.",
        },
      ]
    : [
        {
          q: "Welcher IT-Kurs eignet sich am besten für Quereinsteiger ohne Vorkenntnisse?",
          a: "Alle Hauptprogramme starten in Modul 1 ohne vorausgesetzte Programmier- oder IT-Kenntnisse. Wer besonders kompakt in 13 Wochen starten möchte, wählt häufig die Data Analytics Weiterbildung oder die 3-monatige AWS Solutions Architect Weiterbildung. Unentschlossene testen alle Pfade im 4-wöchigen IT-Orientierungskurs.",
        },
        {
          q: "Kann ich auch einzelne Module statt des gesamten Programms buchen?",
          a: "Ja. Unser modulares Baukastensystem ermöglicht sowohl die Buchung des kompletten Lernpfads als auch einzelner AZAV-zertifizierter Module — etwa über eine Einstufungsprüfung ab Modul 2 in Cyber Security oder AI Engineering.",
        },
        {
          q: "Werden alle aufgeführten Kurse mit Bildungsgutschein gefördert?",
          a: "Ja. Alle IT-Weiterbildungen sind nach AZAV zugelassen und werden bei Vorliegen eines Bildungsgutscheins zu 100 % von der Agentur für Arbeit oder dem Jobcenter übernommen.",
        },
        {
          q: "In welcher Sprache findet der Unterricht statt?",
          a: "Der Unterricht wird flexibel auf Englisch und Türkisch angeboten (weitere Kohorten auf Deutsch in Planung). Unsere Förder- und Karriereberatung begleitet dich auf Deutsch, Englisch oder Türkisch.",
        },
      ];

  const origin = isEn ? "https://en.clarusway.de" : "https://clarusway.de";
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: metaTitle,
      itemListElement: comparisonRows.map((row, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: row.title,
        url: `${origin}${row.to}`,
      })),
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
      <SeoHead
        title={metaTitle}
        description={metaDescription}
        path={currentPath}
        schema={schema}
      />

      <Breadcrumb items={[{ label: isEn ? "IT Courses" : "IT-Kurse" }]} />

      {/* =====================================================================
          HERO SECTION — Single H1 · Exact Figma Make Gradient
          ===================================================================== */}
      <section
        style={{ background: "linear-gradient(135deg, #fff8f9 0%, #fff 60%)" }}
        className="py-14 md:py-18"
      >
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#fde8ef] text-[#e51a59] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-4">
              <ShieldCheckIcon className="w-4 h-4" />
              <span>
                {isEn
                  ? "AZAV-Certified IT Bootcamps in Germany"
                  : "AZAV-zertifizierte Live-Online-Weiterbildungen"}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1a1d2e] mb-4 leading-tight">
              {isEn
                ? "IT bootcamps in Germany, funded with a Bildungsgutschein"
                : "IT-Kurse mit Bildungsgutschein im Überblick"}
            </h1>

            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-6">
              {isEn
                ? "Compare all AZAV-certified IT courses at Clarusway. Every program is taught live online with flexible cohort instruction in English, Turkish, and German (Monday–Friday, 09:00–16:45 CET) and is 100% fundable in Germany with a Bildungsgutschein (education voucher), AVGS, or Qualifizierungschancengesetz."
                : "Vergleiche alle geförderten IT-Weiterbildungen von Clarusway. Jedes Programm wird im Live-Online-Unterricht durchgeführt und kann dank modularer AZAV-Zulassung individuell an dein Vorwissen und deinen Bildungsgutschein angepasst werden."}
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to={consultPath}
                style={{ backgroundColor: PRIMARY }}
                className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-xl text-sm shadow-sm hover:opacity-90"
              >
                <span>{isEn ? "Free consultation" : "Kostenlose Beratung"}</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link
                to={isEn ? "/it-orientation-course/" : "/it-orientierungskurs/"}
                className="inline-flex items-center gap-2 border-2 border-[#1a1d2e] text-[#1a1d2e] font-bold px-6 py-3 rounded-xl text-sm hover:bg-gray-50 transition-colors"
              >
                <span>
                  {isEn ? "Not sure yet? IT Orientation Course" : "Noch unsicher? IT-Orientierungskurs"}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 1: COURSE COMPARISON TABLE (Component B10 — Real HTML Table)
          ===================================================================== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span
              style={{ color: PRIMARY }}
              className="text-xs font-semibold uppercase tracking-widest block mb-2"
            >
              {isEn ? "Direct Comparison" : "Direkter Programmvergleich"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e] mb-2">
              {isEn ? "Compare all IT courses" : "Alle IT-Weiterbildungen im Vergleich"}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              {isEn
                ? "Click on any program title to view the full syllabus, module options, and upcoming start dates."
                : "Klicke auf einen Kursnamen, um den detaillierten Lehrplan, die Modulkombinationen und Starttermine einzusehen."}
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-xs">
            <table className="w-full text-left border-collapse min-w-[780px]">
              <thead>
                <tr style={{ backgroundColor: DARK }} className="text-white text-xs uppercase tracking-wider">
                  <th className="py-4 px-5 font-semibold">{isEn ? "Program" : "Kurs"}</th>
                  <th className="py-4 px-5 font-semibold">{isEn ? "Duration" : "Dauer"}</th>
                  <th className="py-4 px-5 font-semibold">{isEn ? "Entry Level" : "Einstieg"}</th>
                  <th className="py-4 px-5 font-semibold">{isEn ? "Target Roles" : "Zielberufe"}</th>
                  <th className="py-4 px-5 font-semibold">{isEn ? "Funding" : "Förderung"}</th>
                  <th className="py-4 px-5 font-semibold">{isEn ? "Next Cohort" : "Nächster Start"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-xs sm:text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={row.to}
                    className={idx % 2 === 0 ? "bg-white hover:bg-[#fde8ef]/25" : "bg-[#f6f7fb] hover:bg-[#fde8ef]/25"}
                  >
                    <td className="py-4 px-5 font-bold text-[#1a1d2e]">
                      <Link to={row.to} className="text-[#e51a59] hover:underline">
                        {row.title}
                      </Link>
                    </td>
                    <td className="py-4 px-5 text-gray-700">{row.duration}</td>
                    <td className="py-4 px-5 text-gray-700">{row.entry}</td>
                    <td className="py-4 px-5 text-gray-700">{row.roles}</td>
                    <td className="py-4 px-5 font-medium text-emerald-700">{row.funding}</td>
                    <td className="py-4 px-5 font-semibold text-[#1a1d2e]">{row.start}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: PROGRAMS BY CAREER TRACK — H2 + 4 H3 Track Sections
          ===================================================================== */}
      <section style={{ backgroundColor: SOFT_BG }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span
              style={{ color: PRIMARY }}
              className="text-xs font-semibold uppercase tracking-widest block mb-2"
            >
              {isEn ? "Career Specializations" : "Fachrichtungen"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e] mb-2">
              {isEn ? "Programs by career track" : "Unsere IT-Fachbereiche"}
            </h2>
          </div>

          <div className="space-y-10">
            {groups.map((grp) => (
              <div
                key={grp.groupH3}
                className="bg-white rounded-3xl p-7 sm:p-9 border border-gray-200 shadow-2xs"
              >
                <div className="mb-6 pb-4 border-b border-gray-100">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1a1d2e] mb-1">
                    {grp.groupH3}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">{grp.desc}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {grp.items.map((item) => (
                    <div
                      key={item.to}
                      style={{ backgroundColor: SOFT_BG }}
                      className="rounded-2xl p-6 border border-gray-100 hover:border-[#e51a59] transition-colors flex flex-col justify-between"
                    >
                      <div>
                        <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#fde8ef] text-[#e51a59] mb-2.5">
                          {item.meta}
                        </span>
                        <p className="text-lg font-bold text-[#1a1d2e] mb-2">
                          <Link to={item.to} className="hover:text-[#e51a59] transition-colors">
                            {item.title}
                          </Link>
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                          {item.summary}
                        </p>
                      </div>
                      <Link
                        to={item.to}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e51a59] hover:underline"
                      >
                        <span>{item.title}</span>
                        <ArrowRightIcon className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: WHICH COURSE FITS YOU? + FUNDING BOX
          ===================================================================== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e] mb-3">
                {isEn
                  ? "Which IT course fits your background?"
                  : "Welcher IT-Kurs passt zu dir?"}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-5 leading-relaxed">
                {isEn
                  ? "Not sure whether Data & AI, Web Development, Cyber Security, or Cloud Engineering matches your strengths? Take the 4-week IT Orientation Course (100% funded with an AVGS voucher) or book a free career consultation."
                  : "Du bist noch unsicher, ob KI & Data, Webentwicklung, Cyber Security oder Cloud am besten zu deinen Stärken passt? Im 4-wöchigen IT-Orientierungskurs (100 % förderbar mit AVGS) probierst du alle Bereiche praktisch aus."}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to={isEn ? "/it-orientation-course/" : "/it-orientierungskurs/"}
                  style={{ backgroundColor: PRIMARY }}
                  className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full text-xs sm:text-sm"
                >
                  <span>
                    {isEn ? "Explore the IT Orientation Course" : "Zum IT-Orientierungskurs"}
                  </span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
                <Link
                  to={consultPath}
                  className="inline-flex items-center gap-2 border border-gray-300 text-[#1a1d2e] font-semibold px-6 py-3 rounded-full text-xs sm:text-sm hover:border-[#e51a59]"
                >
                  <span>{isEn ? "Free consultation" : "Kostenlose Beratung"}</span>
                </Link>
              </div>
            </div>

            <div
              style={{ backgroundColor: SOFT_BG }}
              className="lg:col-span-6 rounded-2xl p-7 border border-gray-100"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-[#1a1d2e] mb-2">
                {isEn
                  ? "100% funded with a Bildungsgutschein"
                  : "Förderung mit Bildungsgutschein, AVGS und QCG"}
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-4 leading-relaxed">
                {isEn
                  ? "All Clarusway courses are AZAV-certified in Germany. Clarusway prepares your German course offer (Maßnahmeangebot) within 24 hours so you can apply for your Bildungsgutschein at the Agentur für Arbeit or Jobcenter."
                  : "Alle Clarusway-Programme sind nach AZAV zugelassen. Wir erstellen innerhalb von 24 Stunden dein individuelles Maßnahmeangebot für die Agentur für Arbeit oder das Jobcenter."}
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-[#e51a59]">
                <Link to="/bildungsgutschein/" className="hover:underline">
                  {isEn ? "→ How to get a Bildungsgutschein" : "→ Bildungsgutschein beantragen"}
                </Link>
                <Link to="/avgs/" className="hover:underline">
                  {isEn ? "→ AVGS Voucher Guide" : "→ AVGS Gutschein"}
                </Link>
                <Link to="/qualifizierungschancengesetz/" className="hover:underline">
                  {isEn ? "→ QCG Employee Funding" : "→ Qualifizierungschancengesetz"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: FAQ (Component B13)
          ===================================================================== */}
      <section style={{ backgroundColor: SOFT_BG }} className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e] text-center mb-8">
            {isEn ? "IT Courses FAQ" : "Häufige Fragen zur Kurswahl"}
          </h2>
          <div className="space-y-3.5">
            {faqs.map((f, idx) => (
              <details
                key={idx}
                open={idx === 0}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                  <h3 className="text-sm sm:text-base font-bold text-[#1a1d2e]">{f.q}</h3>
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
    </div>
  );
}
