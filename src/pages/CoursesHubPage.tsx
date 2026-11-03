import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { SeoHead, trackClaruswayEvent } from "../components/SeoHead";
import { Breadcrumb } from "../components/Breadcrumb";
import { COURSES_HUB_IMAGES } from "../data/pageImagesData";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  ClockIcon,
  CalendarIcon,
  BookOpenIcon,
  SparklesIcon,
} from "../components/Icons";

const PRIMARY = "#e51a59";
const DARK = "#1a1d2e";
const SOFT_BG = "#f6f7fb";

export function CoursesHubPage() {
  const { lang } = useLanguage();
  const isEn = lang === "en";
  const currentPath = isEn ? "/it-courses/" : "/it-kurse/";
  const consultPath = isEn ? "/application-form/" : "/beratung/";

  // Exact Titles from German SEO Plan Page 23 & English SEO Plan Page 13
  // Note: Cannibalization rule strictly prohibits "Weiterbildung" in the Title & H1 of this page
  const metaTitle = isEn
    ? "IT Bootcamps and Courses in English | Clarusway"
    : "IT Kurse mit Bildungsgutschein im Vergleich | Clarusway";

  const metaDescription = isEn
    ? "Compare all AZAV-certified IT bootcamps at Clarusway: AI Engineering, Full Stack Development, Cyber Security, AWS & DevOps, and SDET. Live online, funded with Bildungsgutschein."
    : "Alle IT-Kurse bei Clarusway im Vergleich: AI Engineering, Full Stack, Cyber Security, AWS & DevOps, SDET und Kubernetes. 100 % förderfähig mit Bildungsgutschein.";

  // Comparison table rows (7 courses) matching Page 23–24 of German PDF
  const comparisonRows = isEn
    ? [
        {
          title: "AI Engineering Bootcamp",
          subtitle: "AI Engineer Course with Agentic AI",
          to: "/it-courses/ai-engineering/",
          duration: "32 Weeks (or modular)",
          entry: "No prior knowledge (M1) or Assessment (M2/M3)",
          modules: "3 Modules",
          cert: "Clarusway Certificate, Cert. AI Specialist",
          start: "27 Jul 2026",
          funding: "Bildungsgutschein, QCG",
        },
        {
          title: "AI-Assisted Full Stack Development",
          subtitle: "Full Stack Developer Course",
          to: "/it-courses/full-stack-developer/",
          duration: "3 – 12 Months",
          entry: "No prior programming knowledge",
          modules: "4 Modules",
          cert: "Clarusway Full Stack Engineer Certificate",
          start: "27 Jul 2026",
          funding: "Bildungsgutschein, QCG",
        },
        {
          title: "AI-Enhanced Cyber Security Analyst",
          subtitle: "Cyber Security Analyst Course",
          to: "/it-courses/cyber-security/",
          duration: "4 Modules",
          entry: "No prior knowledge (M1) or Assessment (M2)",
          modules: "4 Modules",
          cert: "CompTIA Security+, SOC Analyst Certificate",
          start: "24 Aug 2026",
          funding: "Bildungsgutschein, QCG",
        },
        {
          title: "AI-Enhanced AWS Solutions Architect/DevOps Engineer",
          subtitle: "AWS & DevOps Training",
          to: "/it-courses/devops-aws/",
          duration: "3 – 8 Months",
          entry: "Beginner or Assessment",
          modules: "3 Modules",
          cert: "AWS Certified Solutions Architect, AZ-900",
          start: "24 Aug 2026",
          funding: "Bildungsgutschein, QCG",
        },
        {
          title: "SDET (Software Testing)",
          subtitle: "Software Development Engineer in Test",
          to: "/it-courses/software-development-engineer-in-test/",
          duration: "Full-Time Track",
          entry: "Beginner friendly",
          modules: "Comprehensive Track",
          cert: "SDET Automation Certificate",
          start: "14 Sep 2026",
          funding: "Bildungsgutschein, QCG",
        },
        {
          title: "Kubernetes CKAD Certification Course",
          subtitle: "Kubernetes CKAD Course",
          to: "/it-courses/kubernetes-ckad-certification-course/",
          duration: "4 Weeks",
          entry: "Linux & Docker Basics",
          modules: "1 Intensive Module",
          cert: "CNCF CKAD Preparation",
          start: "12 Oct 2026",
          funding: "Bildungsgutschein, QCG",
        },
        {
          title: "IT Orientation Course",
          subtitle: "Career Orientation with AVGS",
          to: "/it-orientation-course/",
          duration: "4 Weeks",
          entry: "No prior IT knowledge",
          modules: "4 Exploration Modules",
          cert: "Orientation Certificate",
          start: "03 Aug 2026",
          funding: "AVGS Voucher (100% Free)",
        },
      ]
    : [
        {
          title: "AI Engineering",
          subtitle: "AI Engineer Weiterbildung ansehen",
          to: "/it-kurse/ai-engineer-weiterbildung/",
          duration: "32 Wochen (modular)",
          entry: "Ohne Vorkenntnisse (M1) oder Einstufung (M2/M3)",
          modules: "3 Module",
          cert: "Clarusway Zertifikat, KI-Zertifizierung",
          start: "27 Jul 2026",
          funding: "Bildungsgutschein, QCG",
        },
        {
          title: "AI-Assisted Full Stack Development",
          subtitle: "Full Stack Entwickler Weiterbildung ansehen",
          to: "/it-kurse/full-stack-entwickler-weiterbildung/",
          duration: "3 – 12 Monate",
          entry: "Ohne Programmierkenntnisse",
          modules: "4 Module",
          cert: "Clarusway Full Stack Entwickler Zertifikat",
          start: "27 Jul 2026",
          funding: "Bildungsgutschein, QCG",
        },
        {
          title: "AI-Enhanced Cyber Security Analyst",
          subtitle: "Cyber Security Weiterbildung ansehen",
          to: "/it-kurse/cyber-security-weiterbildung/",
          duration: "4 Module",
          entry: "Ohne Vorkenntnisse (M1) oder Einstufung (M2)",
          modules: "4 Module",
          cert: "CompTIA Security+, SOC Analyst Zertifikat",
          start: "24 Aug 2026",
          funding: "Bildungsgutschein, QCG",
        },
        {
          title: "AI-Enhanced AWS Solutions Architect/DevOps Engineer",
          subtitle: "AWS & DevOps Weiterbildung ansehen",
          to: "/it-kurse/aws-devops-weiterbildung/",
          duration: "3 – 8 Monate",
          entry: "Quereinsteiger oder mit IT-Basis",
          modules: "3 Module",
          cert: "AWS Solutions Architect, AZ-900",
          start: "24 Aug 2026",
          funding: "Bildungsgutschein, QCG",
        },
        {
          title: "SDET",
          subtitle: "SDET Weiterbildung ansehen",
          to: "/it-kurse/sdet-weiterbildung/",
          duration: "Vollzeit-Programm",
          entry: "Ohne Vorkenntnisse",
          modules: "Vollzeit-Track",
          cert: "SDET Automatisierungs-Zertifikat",
          start: "14 Sep 2026",
          funding: "Bildungsgutschein, QCG",
        },
        {
          title: "Kubernetes CKAD",
          subtitle: "Kubernetes CKAD Zertifikat Kurs",
          to: "/it-kurse/kubernetes-ckad-zertifikat-kurs/",
          duration: "4 Wochen",
          entry: "Linux- & Docker-Grundkenntnisse",
          modules: "1 Intensiv-Modul",
          cert: "CNCF CKAD Vorbereitung",
          start: "12 Okt 2026",
          funding: "Bildungsgutschein, QCG",
        },
        {
          title: "IT-Orientierungskurs",
          subtitle: "IT-Orientierungskurs mit AVGS",
          to: "/it-orientierungskurs/",
          duration: "4 Wochen",
          entry: "Ohne Vorkenntnisse",
          modules: "4 Orientierungsmodule",
          cert: "Teilnahmebescheinigung",
          start: "03 Aug 2026",
          funding: "AVGS Gutschein (100 % kostenlos)",
        },
      ];

  // 4 Groups strictly adhering to Page 23 Block 3:
  // "Daten und KI, Softwareentwicklung und Testing, IT-Sicherheit, Cloud und DevOps.
  // Data Analyst ist Modul 1 von AI Engineering, keine separate Kursseite!"
  const groups = isEn
    ? [
        {
          groupH3: "Data and AI",
          desc: "From Python and SQL foundations to Machine Learning and autonomous Agentic AI.",
          items: [
            {
              title: "AI Engineering Bootcamp",
              subtitle: "AI Engineer Course with Agentic AI",
              to: "/it-courses/ai-engineering/",
              meta: "32 Weeks · Modules 1 + 2 + 3",
              summary: "Three modular stages: Data Analytics & BI (Module 1), Data Science & Machine Learning (Module 2), and AI Engineering & Agentic AI (Module 3).",
            },
          ],
        },
        {
          groupH3: "Software Development and Testing",
          desc: "Build modern full-stack web applications or automate end-to-end software quality assurance.",
          items: [
            {
              title: "AI-Assisted Full Stack Development",
              subtitle: "Full Stack Developer Course",
              to: "/it-courses/full-stack-developer/",
              meta: "4 Modules · React, Next.js & Node.js",
              summary: "Full-stack TypeScript web development with Cursor, Claude Code, and GitHub Copilot.",
            },
            {
              title: "SDET (Software Testing)",
              subtitle: "Software Development Engineer in Test",
              to: "/it-courses/software-development-engineer-in-test/",
              meta: "Full-Time Track · QA Automation",
              summary: "Automate web, API, and database testing with Java, Selenium, Playwright, and CI/CD.",
            },
          ],
        },
        {
          groupH3: "Cloud and DevOps",
          desc: "Design resilient cloud architectures on AWS & Azure and automate container deployments.",
          items: [
            {
              title: "AI-Enhanced AWS Solutions Architect/DevOps Engineer",
              subtitle: "AWS & DevOps Training",
              to: "/it-courses/devops-aws/",
              meta: "3 – 8 Months · AWS, DevOps & Azure",
              summary: "Master AWS Cloud Architecture, Docker, Kubernetes, Terraform, and CI/CD pipelines.",
            },
            {
              title: "Kubernetes CKAD Certification Course",
              subtitle: "Kubernetes CKAD Course",
              to: "/it-courses/kubernetes-ckad-certification-course/",
              meta: "4 Weeks · Intensive Exam Prep",
              summary: "Intensive CNCF CKAD certification preparation for developers and DevOps engineers.",
            },
          ],
        },
        {
          groupH3: "IT Security",
          desc: "Protect networks, monitor threats in the SOC, and prepare for CompTIA Security+.",
          items: [
            {
              title: "AI-Enhanced Cyber Security Analyst",
              subtitle: "Cyber Security Analyst Course",
              to: "/it-courses/cyber-security/",
              meta: "4 Modules · SOC, AI & Cloud Security",
              summary: "From CompTIA Security+ to AI-enhanced SOC operations and AWS Cloud Security.",
            },
          ],
        },
      ]
    : [
        {
          groupH3: "Daten und KI",
          desc: "Von den Grundlagen in Python und SQL über Machine Learning bis hin zu Agentic AI.",
          items: [
            {
              title: "AI Engineering",
              subtitle: "AI Engineer Weiterbildung ansehen",
              to: "/it-kurse/ai-engineer-weiterbildung/",
              meta: "32 Wochen · Modul 1 + 2 + 3",
              summary: "Drei modulare Stufen: Data Analytics & BI (Modul 1), Data Science & Machine Learning (Modul 2) sowie AI Engineering & Agentic AI (Modul 3).",
            },
          ],
        },
        {
          groupH3: "Softwareentwicklung und Testing",
          desc: "Entwickle moderne Full-Stack-Webanwendungen oder sichere Softwarequalität durch Testautomatisierung.",
          items: [
            {
              title: "AI-Assisted Full Stack Development",
              subtitle: "Full Stack Entwickler Weiterbildung ansehen",
              to: "/it-kurse/full-stack-entwickler-weiterbildung/",
              meta: "4 Module · React, Next.js & Node.js",
              summary: "Moderne Full-Stack-Webentwicklung mit React, TypeScript, Node.js und KI-Workflows (Cursor, Claude Code).",
            },
            {
              title: "SDET",
              subtitle: "SDET Weiterbildung ansehen",
              to: "/it-kurse/sdet-weiterbildung/",
              meta: "Vollzeit · QA & Testautomatisierung",
              summary: "Automatisierte Softwaretests für Web und APIs mit Java, Selenium, Playwright, Cypress und CI/CD.",
            },
          ],
        },
        {
          groupH3: "Cloud und DevOps",
          desc: "Plane hochverfügbare Cloud-Architekturen auf AWS & Azure und automatisiere Container-Infrastrukturen.",
          items: [
            {
              title: "AI-Enhanced AWS Solutions Architect/DevOps Engineer",
              subtitle: "AWS & DevOps Weiterbildung ansehen",
              to: "/it-kurse/aws-devops-weiterbildung/",
              meta: "3 – 8 Monate · 3 Module",
              summary: "AWS Cloud Architecture, Docker, Kubernetes, Terraform, CI/CD und Azure Fundamentals mit KI.",
            },
            {
              title: "Kubernetes CKAD",
              subtitle: "Kubernetes CKAD Zertifikat Kurs",
              to: "/it-kurse/kubernetes-ckad-zertifikat-kurs/",
              meta: "4 Wochen · Intensivkurs",
              summary: "Praxisorientierte Vorbereitung auf die offizielle CNCF Certified Kubernetes Application Developer Prüfung.",
            },
          ],
        },
        {
          groupH3: "IT-Sicherheit",
          desc: "Überwache Unternehmensnetzwerke im Security Operations Center (SOC) und sichere Cloud-Systeme ab.",
          items: [
            {
              title: "AI-Enhanced Cyber Security Analyst",
              subtitle: "Cyber Security Weiterbildung ansehen",
              to: "/it-kurse/cyber-security-weiterbildung/",
              meta: "4 Module · SOC & Cloud Security",
              summary: "Von der CompTIA Security+ Vorbereitung über praxisnahe SOC-Labs bis hin zu AWS Cloud Security.",
            },
          ],
        },
      ];

  // 6 Exact FAQ questions from Page 24 of German SEO Plan
  const faqs = isEn
    ? [
        {
          q: "Which IT course is suitable for beginners?",
          a: "All main Clarusway programs (AI Engineering, Full Stack Development, Cyber Security, AWS & DevOps, and SDET) start at Module 1 with zero technical or programming experience required. If you are undecided which field suits you best, the 4-week IT Orientation Course is the ideal starting point.",
        },
        {
          q: "Can I book multiple modules individually?",
          a: "Yes. Clarusway's modular system is AZAV-certified, allowing you to book complete tracks or individual modules (for example, Module 1 Data Analytics within AI Engineering, or direct entry into Module 2 of Cyber Security via assessment).",
        },
        {
          q: "How often do new cohorts start?",
          a: "New cohorts start regularly throughout the year, typically every 1 to 2 months depending on the specific program. Upcoming start dates are published in the comparison table above.",
        },
        {
          q: "Are all IT courses eligible for a Bildungsgutschein?",
          a: "Yes. All programs listed are officially AZAV-certified in Germany and can be funded 100% through a Bildungsgutschein from the Agentur für Arbeit or Jobcenter.",
        },
        {
          q: "How many hours per day does instruction take?",
          a: "Full-time programs take place from Monday to Friday, 09:00 to 16:45 CET, including live lectures, hands-on lab sessions, and mentor office hours.",
        },
        {
          q: "What happens after the course (Career Support)?",
          a: "Our Career Management team works with you on technical portfolio presentation, German CV and LinkedIn profile refinement, and mock interviews to prepare you for tech applications in Germany.",
        },
      ]
    : [
        {
          q: "Welcher IT-Kurs ist für Anfänger geeignet?",
          a: "Alle Hauptweiterbildungen bei Clarusway (AI Engineering, Full Stack Entwicklung, Cyber Security, AWS & DevOps und SDET) starten in Modul 1 ohne vorausgesetzte Programmier- oder IT-Kenntnisse. Wer noch unsicher ist, welcher Bereich am besten passt, startet im 4-wöchigen IT-Orientierungskurs.",
        },
        {
          q: "Kann ich mehrere Module einzeln buchen?",
          a: "Ja. Dank unseres modularen, AZAV-zertifizierten Baukastensystems kannst du sowohl die gesamte Weiterbildung als auch einzelne Module belegen — zum Beispiel Modul 1 (Data Analytics) im AI Engineering oder den Direkteinstieg ab Modul 2 in Cyber Security.",
        },
        {
          q: "Wie oft starten neue Kurse?",
          a: "Neue Kurse starten regelmäßig im Abstand von 1 bis 2 Monaten. Die nächsten verbindlichen Starttermine findest du in der obigen Vergleichstabelle.",
        },
        {
          q: "Sind alle IT-Kurse mit Bildungsgutschein förderfähig?",
          a: "Ja. Alle hier aufgeführten Kurse sind staatlich nach AZAV zugelassen und werden bei Bewilligung eines Bildungsgutscheins zu 100 % von der Agentur für Arbeit oder dem Jobcenter übernommen.",
        },
        {
          q: "Wie viele Stunden pro Tag dauert der Unterricht?",
          a: "Der Vollzeit-Unterricht findet von Montag bis Freitag zwischen 09:00 und 16:45 Uhr im Live-Online-Format statt — inklusive interaktiver Dozentenphasen, praktischer Labs und Mentor-Sprechstunden.",
        },
        {
          q: "Was passiert nach dem Kurs (Karriere-Support)?",
          a: "Unser integriertes Karriere-Management unterstützt dich mit individueller Profil- und LinkedIn-Optimierung, GitHub-Portfolio-Reviews sowie praxisnahem Bewerbungs- und Interviewtraining bis zum erfolgreichen Jobeinstieg.",
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
          B1: HERO SECTION — H1 + Tanım Paragrafı + CTA
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
                  : "AZAV-zertifizierte Live-Online-Kurse"}
              </span>
            </div>

            {/* Exact H1: German SEO Plan Page 23 / English SEO Plan Page 13 */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1a1d2e] mb-4 leading-tight">
              {isEn
                ? "IT bootcamps in English, funded with a Bildungsgutschein"
                : "Alle IT Kurse im Vergleich, gefördert mit Bildungsgutschein"}
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              {isEn
                ? "Compare all AZAV-certified IT courses at Clarusway. Every program is taught live online with flexible cohort instruction in English, Turkish, and German (Monday–Friday, 09:00–16:45 CET) and is 100% fundable in Germany with a Bildungsgutschein (education voucher), AVGS, or Qualifizierungschancengesetz."
                : "Vergleiche alle geförderten IT-Kurse von Clarusway. Jedes Programm wird im interaktiven Live-Online-Unterricht durchgeführt und kann dank modularer AZAV-Zulassung flexibel an dein Vorwissen und deine Bildungsförderung angepasst werden."}
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to={consultPath}
                onClick={() =>
                  trackClaruswayEvent("beratung_angefragt", { source: "courses_hub_hero", lang })
                }
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

            <div className="mt-8 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-gray-100">
              <img
                src={COURSES_HUB_IMAGES.landscapeHero.src}
                alt={COURSES_HUB_IMAGES.landscapeHero.alt[lang]}
                className="w-full max-h-[380px] sm:max-h-[440px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          B10: ALLE IT-KURSE IM ÜBERBLICK (HTML Comparison Table per Page 23)
          ===================================================================== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span
              style={{ color: PRIMARY }}
              className="text-xs font-semibold uppercase tracking-widest block mb-2"
            >
              {isEn ? "Direct Comparison" : "Direkter Kursvergleich"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e] mb-2">
              {isEn ? "All IT courses at a glance" : "Alle IT-Kurse im Überblick"}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              {isEn
                ? "Click on any program title to view the full syllabus, module options, and upcoming start dates."
                : "Klicke auf einen Kursnamen, um den vollständigen Lehrplan, die Modulkombinationen und Starttermine einzusehen."}
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-xs">
            <table className="w-full text-left border-collapse min-w-[820px]">
              <thead>
                <tr style={{ backgroundColor: DARK }} className="text-white text-xs uppercase tracking-wider">
                  <th className="py-4 px-5 font-semibold">{isEn ? "Program" : "Kurs"}</th>
                  <th className="py-4 px-5 font-semibold">{isEn ? "Duration" : "Dauer"}</th>
                  <th className="py-4 px-5 font-semibold">{isEn ? "Entry Level" : "Einstieg"}</th>
                  <th className="py-4 px-5 font-semibold">{isEn ? "Modules" : "Module"}</th>
                  <th className="py-4 px-5 font-semibold">{isEn ? "Credential / Certificate" : "Abschluss / Zertifikat"}</th>
                  <th className="py-4 px-5 font-semibold">{isEn ? "Next Cohort" : "Nächster Start"}</th>
                  <th className="py-4 px-5 font-semibold">{isEn ? "Funding" : "Förderung"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-xs sm:text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={row.to}
                    className={idx % 2 === 0 ? "bg-white hover:bg-[#fde8ef]/25" : "bg-[#f6f7fb] hover:bg-[#fde8ef]/25"}
                  >
                    <td className="py-4 px-5">
                      <Link to={row.to} className="font-bold text-[#e51a59] hover:underline block">
                        {row.title}
                      </Link>
                      <Link to={row.to} className="text-[11px] text-gray-500 hover:text-gray-700">
                        {row.subtitle}
                      </Link>
                    </td>
                    <td className="py-4 px-5 text-gray-700 whitespace-nowrap">{row.duration}</td>
                    <td className="py-4 px-5 text-gray-700">{row.entry}</td>
                    <td className="py-4 px-5 text-gray-700 whitespace-nowrap">{row.modules}</td>
                    <td className="py-4 px-5 text-gray-700">{row.cert}</td>
                    <td className="py-4 px-5 font-semibold text-[#1a1d2e] whitespace-nowrap">{row.start}</td>
                    <td className="py-4 px-5 font-medium text-emerald-700 whitespace-nowrap">{row.funding}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =====================================================================
          B14: IT-KURSE NACH FACHGEBIET (4 Groups per Page 23)
          ===================================================================== */}
      <section style={{ backgroundColor: SOFT_BG }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span
              style={{ color: PRIMARY }}
              className="text-xs font-semibold uppercase tracking-widest block mb-2"
            >
              {isEn ? "Subject Areas" : "Fachgebiete"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e] mb-2">
              {isEn ? "IT courses by subject area" : "IT-Kurse nach Fachgebiet"}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              {isEn
                ? "Explore our 4 key disciplines — with modular tracks from complete beginner level to advanced certifications."
                : "Entdecke unsere 4 IT-Schwerpunkte — modular aufgebaut für Quereinsteiger und Fortgeschrittene."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {groups.map((grp) => (
              <div
                key={grp.groupH3}
                className="bg-white rounded-3xl p-7 border border-gray-200 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="mb-5 pb-3 border-b border-gray-100">
                    <h3 className="text-xl font-bold text-[#1a1d2e] mb-1">
                      {grp.groupH3}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">{grp.desc}</p>
                  </div>

                  <div className="space-y-4">
                    {grp.items.map((item) => (
                      <div
                        key={item.to}
                        style={{ backgroundColor: SOFT_BG }}
                        className="rounded-2xl p-5 border border-gray-100 hover:border-[#e51a59] transition-colors"
                      >
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#fde8ef] text-[#e51a59]">
                            {item.meta}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-[#1a1d2e] mb-1.5">
                          <Link to={item.to} className="hover:text-[#e51a59] transition-colors">
                            {item.title}
                          </Link>
                        </h4>
                        <p className="text-xs text-gray-600 leading-relaxed mb-3">
                          {item.summary}
                        </p>
                        <Link
                          to={item.to}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e51a59] hover:underline"
                        >
                          <span>{item.subtitle}</span>
                          <ArrowRightIcon className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Landscape Alumni Banner */}
          <div className="mt-12 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-gray-100">
            <img
              src={COURSES_HUB_IMAGES.landscapeAlumni.src}
              alt={COURSES_HUB_IMAGES.landscapeAlumni.alt[lang]}
              className="w-full max-h-[380px] sm:max-h-[440px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* =====================================================================
          WELCHER IT-KURS PASST ZU WELCHEM ZIEL? (H2 per Page 23)
          ===================================================================== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span
              style={{ color: PRIMARY }}
              className="text-xs font-semibold uppercase tracking-widest block mb-2"
            >
              {isEn ? "Goal-Oriented Pathways" : "Zielgerichtete Orientierung"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e] mb-2">
              {isEn
                ? "Which IT course fits your goal?"
                : "Welcher IT-Kurs passt zu welchem Ziel?"}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              {isEn
                ? "Whether starting fresh with no tech background, upgrading existing IT skills, or training employees — find the ideal route."
                : "Egal ob Quereinstieg ohne Vorkenntnisse, gezielte Vertiefung für IT-Fachkräfte oder Mitarbeiterqualifizierung für Arbeitgeber."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-2xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#fde8ef] text-[#e51a59] mb-3 inline-block">
                  {isEn ? "Complete Beginner" : "Quereinstieg"}
                </span>
                <h3 className="text-lg font-bold text-[#1a1d2e] mb-2">
                  {isEn ? "Without prior knowledge" : "Ohne Vorkenntnisse"}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  {isEn
                    ? "Start directly in Module 1 of AI Engineering, Full Stack, Cyber Security, or SDET. Or test all four IT fields in the 4-week IT Orientation Course."
                    : "Starte in Modul 1 unserer Hauptkurse oder erprobe Programmierung, Cloud, Cyber Security und Daten im 4-wöchigen IT-Orientierungskurs."}
                </p>
              </div>
              <Link
                to={isEn ? "/it-orientation-course/" : "/it-orientierungskurs/"}
                className="text-xs font-bold text-[#e51a59] hover:underline inline-flex items-center gap-1 pt-3 border-t border-gray-100"
              >
                <span>{isEn ? "IT Orientation Course" : "Zum IT-Orientierungskurs"}</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-2xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 mb-3 inline-block">
                  {isEn ? "Experienced Professionals" : "Fachkräfte"}
                </span>
                <h3 className="text-lg font-bold text-[#1a1d2e] mb-2">
                  {isEn ? "With IT experience" : "Mit IT-Erfahrung"}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  {isEn
                    ? "Skip beginner modules via our technical placement assessment (e.g. direct entry into Module 2 for Cyber Security or Module 2/3 for AI Engineering) or earn Kubernetes CKAD in 4 weeks."
                    : "Verkürze deine Weiterbildung über unsere Einstufungsprüfung (z. B. Direkteinstieg ab Modul 2 in Cyber Security oder AI Engineering) oder mache CKAD in 4 Wochen."}
                </p>
              </div>
              <Link
                to={isEn ? "/it-courses/kubernetes-ckad-certification-course/" : "/it-kurse/kubernetes-ckad-zertifikat-kurs/"}
                className="text-xs font-bold text-[#e51a59] hover:underline inline-flex items-center gap-1 pt-3 border-t border-gray-100"
              >
                <span>{isEn ? "Kubernetes CKAD Course" : "Zum Kubernetes CKAD Kurs"}</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-2xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 mb-3 inline-block">
                  {isEn ? "Corporate Upskilling" : "Unternehmen"}
                </span>
                <h3 className="text-lg font-bold text-[#1a1d2e] mb-2">
                  {isEn ? "For employers" : "Als Arbeitgeber"}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  {isEn
                    ? "Upskill your staff with government subsidies through the Qualifizierungschancengesetz (QCG), covering up to 100% of training fees and 75% of employee wages."
                    : "Qualifiziere deine Mitarbeitenden gefördert über das Qualifizierungschancengesetz (QCG) — bis zu 100 % Lehrgangskostenzuschuss und 75 % Lohnfortzahlung."}
                </p>
              </div>
              <Link
                to="/qualifizierungschancengesetz/"
                className="text-xs font-bold text-[#e51a59] hover:underline inline-flex items-center gap-1 pt-3 border-t border-gray-100"
              >
                <span>{isEn ? "QCG for Employers" : "Qualifizierungschancengesetz"}</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          B8: IT-KURSE MIT BILDUNGSGUTSCHEIN (H2 per Page 23)
          ===================================================================== */}
      <section style={{ backgroundColor: SOFT_BG }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-2xs">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#e51a59] block mb-2">
                {isEn ? "100% Public Funding" : "100 % Staatliche Förderung"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e] mb-3">
                {isEn ? "IT courses funded with a Bildungsgutschein" : "IT-Kurse mit Bildungsgutschein"}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {isEn
                  ? "All Clarusway programs are AZAV-certified. When you receive a Bildungsgutschein (education voucher) from the Agentur für Arbeit or Jobcenter, 100% of your tuition costs are covered. Clarusway handles the German administrative paperwork for your advisor."
                  : "Alle IT-Kurse bei Clarusway sind nach der Akkreditierungs- und Zulassungsverordnung Arbeitsförderung (AZAV) zertifiziert. Mit einem Bildungsgutschein der Agentur für Arbeit oder des Jobcenters entstehen für dich 0 € Ausbildungskosten. Wir erstellen dein offizielles Maßnahmeangebot innerhalb von 24 Stunden."}
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-[#f6f7fb] p-5 rounded-xl border border-gray-100">
                <span className="text-2xl font-extrabold text-[#e51a59] block mb-1">0 €</span>
                <span className="text-xs font-bold text-gray-800 block mb-1">
                  {isEn ? "Tuition Cost" : "Eigenanteil"}
                </span>
                <p className="text-[11px] text-gray-500">
                  {isEn ? "100% covered with voucher" : "100 % Kostenübernahme durch Kostenträger"}
                </p>
              </div>

              <div className="bg-[#f6f7fb] p-5 rounded-xl border border-gray-100">
                <span className="text-2xl font-extrabold text-[#1a1d2e] block mb-1">24h</span>
                <span className="text-xs font-bold text-gray-800 block mb-1">
                  {isEn ? "Offer Turnaround" : "Maßnahmeangebot"}
                </span>
                <p className="text-[11px] text-gray-500">
                  {isEn ? "German paperwork prepared fast" : "Fertig vorbereitet für dein Jobcenter"}
                </p>
              </div>

              <div className="bg-[#f6f7fb] p-5 rounded-xl border border-gray-100">
                <span className="text-2xl font-extrabold text-[#1a1d2e] block mb-1">100 %</span>
                <span className="text-xs font-bold text-gray-800 block mb-1">
                  {isEn ? "Live Online" : "Live-Unterricht"}
                </span>
                <p className="text-[11px] text-gray-500">
                  {isEn ? "With real instructors & mentors" : "Echte Dozenten, keine reinen Videos"}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-xs font-bold text-[#e51a59]">
              <Link to="/bildungsgutschein/" className="hover:underline">
                {isEn ? "→ Bildungsgutschein Step-by-Step Guide" : "→ Bildungsgutschein beantragen"}
              </Link>
              <Link to="/finanzierung/" className="hover:underline">
                {isEn ? "→ All Funding Options in Germany" : "→ Alle Finanzierungswege im Überblick"}
              </Link>
              <Link to="/ratgeber/quereinstieg-it/" className="hover:underline">
                {isEn ? "→ IT Career Change Guide" : "→ Ratgeber Quereinstieg in die IT"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          B13: HÄUFIGE FRAGEN ZU DEN IT-KURSEN (6 Exact FAQ Questions per Page 24)
          ===================================================================== */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span
              style={{ color: PRIMARY }}
              className="text-xs font-semibold uppercase tracking-widest block mb-2"
            >
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e]">
              {isEn ? "Frequently asked questions about IT courses" : "Häufige Fragen zu den IT-Kursen"}
            </h2>
          </div>

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

      {/* =====================================================================
          B16: SON CTA BANDI (Final Call to Action Banner per Page 23)
          ===================================================================== */}
      <section
        className="py-16"
        style={{ background: `linear-gradient(135deg, ${DARK} 0%, #2d1b3d 100%)` }}
      >
        <div className="max-w-4xl mx-auto px-5 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            {isEn
              ? "Find the right IT course for your career"
              : "Finde den passenden IT-Kurs für deine Karriere"}
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
            {isEn
              ? "Speak with a Clarusway advisor, explore modular options, and receive your official German course offer within 24 hours."
              : "Sprich mit unserer Studienberatung, kläre Fördermöglichkeiten und erhalte dein offizielles Maßnahmeangebot innerhalb von 24 Stunden."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={consultPath}
              onClick={() =>
                trackClaruswayEvent("beratung_angefragt", { source: "courses_hub_bottom_cta", lang })
              }
              style={{ backgroundColor: PRIMARY }}
              className="inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-xl text-sm shadow-md hover:opacity-95"
            >
              <span>{isEn ? "Free consultation" : "Kostenlose Beratung"}</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <Link
              to={isEn ? "/financing-and-tuition/" : "/finanzierung/"}
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-bold px-7 py-3.5 rounded-xl text-sm hover:border-white/70 transition-colors"
            >
              <span>{isEn ? "Compare all funding options" : "Alle Förderwege im Vergleich"}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
