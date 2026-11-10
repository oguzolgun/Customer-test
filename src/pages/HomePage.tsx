import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { SeoHead, trackClaruswayEvent } from "../components/SeoHead";
import { ClaruswayHeroShowpiece } from "../components/ClaruswayHeroShowpiece";
import { HomeFeaturedCourses } from "../components/HomeFeaturedCourses";
import { TrustKeyFactsBar } from "../components/TrustKeyFactsBar";
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
} from "../components/Icons";

const PRIMARY = "#E5254F";
const DARK = "#141B2D";
const SOFT_BG = "#f6f7fb";

function AreaIcon({ type }: { type: string }) {
  if (type === "ai") {
    return (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }
  if (type === "dev") {
    return (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    );
  }
  if (type === "sec") {
    return (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    );
  }
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  );
}

// ============================================================================
// HERO EXACT COPY CONSTANTS (Swappable EN & DE)
// ============================================================================
const HERO_COPY = {
  en: {
    badge: "AZAV-Certified IT School in Germany · 100% Funded with Bildungsgutschein",
    h1Lead: "Start your IT career in Germany, ",
    h1Highlight: "trained in English",
    rating: "4.9/5 — Career Karma Rating",
    desc: "Live online bootcamps for career changers and tech professionals — in English, Turkish & German. All programs are AZAV-certified and 100% fundable with a Bildungsgutschein from the Agentur für Arbeit or Jobcenter.",
    primaryBtn: "Free consultation",
    secondaryBtn: "Compare all IT courses",
    checklist: [
      "0 € tuition with Bildungsgutschein",
      "Instruction in English, Turkish & German",
      "German paperwork prepared for you",
    ],
  },
  de: {
    badge: "AZAV-zertifizierter Bildungsträger · 100 % Förderung mit Bildungsgutschein",
    h1Lead: "IT Weiterbildung mit Bildungsgutschein, ",
    h1Highlight: "online, live und praxisnah",
    rating: "4,9/5 — Career Karma Bewertung",
    desc: "Live-Online-Weiterbildungen für Quereinsteiger und IT-Fachkräfte — auf Deutsch, Englisch oder Türkisch. Alle Programme sind AZAV-zertifiziert und zu 100 % über einen Bildungsgutschein der Agentur für Arbeit oder des Jobcenters förderbar.",
    primaryBtn: "Kostenlose Beratung",
    secondaryBtn: "Alle IT-Kurse vergleichen",
    checklist: [
      "0 € Kursgebühr mit Bildungsgutschein",
      "Unterricht auf Englisch, Türkisch & Deutsch",
      "Förderunterlagen in 24h fertig vorbereitet",
    ],
  },
};

export function HomePage() {
  const { lang } = useLanguage();
  const isEn = lang === "en";
  const consultPath = isEn ? "/application-form/" : "/beratung/";

  // Exact Title from German SEO Plan Page 21 & English SEO Plan Page 13
  const metaTitle = isEn
    ? "IT Training in English for a Career in Germany | Clarusway"
    : "IT Weiterbildung online mit Bildungsgutschein | Clarusway";

  const metaDescription = isEn
    ? "Live online IT bootcamps in Germany: AI Engineering, Full Stack, Cyber Security, AWS & DevOps, and SDET. Instruction in English, Turkish & German. 100% funded with a Bildungsgutschein."
    : "Praxisnahe IT-Weiterbildungen in Cyber Security, Cloud & DevOps, KI & Data Science und Webentwicklung. AZAV-zertifiziert, 100 % förderbar mit Bildungsgutschein.";


  // 4 Areas matching Page 21 Block 4: "Welcher IT-Bereich passt zu dir?"
  const itAreas = isEn
    ? [
        {
          title: "Data and AI",
          desc: "Data analysis, machine learning models, and autonomous AI agents in Python and SQL.",
          to: "/it-courses/ai-engineering/",
          tag: "AI Engineering & Data",
          iconType: "ai",
        },
        {
          title: "Software Development",
          desc: "Modern full-stack web applications with React, TypeScript, Node.js, and AI coding workflows.",
          to: "/it-courses/full-stack-developer/",
          tag: "Full Stack Development",
          iconType: "dev",
        },
        {
          title: "IT Security",
          desc: "Defend networks, detect threats in the SOC, and prepare for CompTIA Security+ certification.",
          to: "/it-courses/cyber-security/",
          tag: "Cyber Security Analyst",
          iconType: "sec",
        },
        {
          title: "Cloud and DevOps",
          desc: "Deploy scalable cloud architectures on AWS and Azure with Docker, Kubernetes, and CI/CD.",
          to: "/it-courses/devops-aws/",
          tag: "Cloud & DevOps Engineering",
          iconType: "cloud",
        },
      ]
    : [
        {
          title: "Daten und KI",
          desc: "Datenanalyse, Machine-Learning-Modelle und autonome KI-Agenten mit Python und SQL.",
          to: "/it-kurse/ai-engineer-weiterbildung/",
          tag: "AI Engineering & Data",
          iconType: "ai",
        },
        {
          title: "Softwareentwicklung",
          desc: "Moderne Full-Stack-Webanwendungen mit React, TypeScript, Node.js und KI-Workflows.",
          to: "/it-kurse/full-stack-entwickler-weiterbildung/",
          tag: "Full Stack Entwickler",
          iconType: "dev",
        },
        {
          title: "IT-Sicherheit",
          desc: "Netzwerke schützen, Angriffe im SOC abwehren und Prüfungsvorbereitung auf CompTIA Security+.",
          to: "/it-kurse/cyber-security-weiterbildung/",
          tag: "Cyber Security Analyst",
          iconType: "sec",
        },
        {
          title: "Cloud und DevOps",
          desc: "Cloud-Infrastrukturen auf AWS und Azure bereitstellen mit Docker, Kubernetes und CI/CD.",
          to: "/it-kurse/aws-devops-weiterbildung/",
          tag: "Cloud & DevOps Engineer",
          iconType: "cloud",
        },
      ];

  // 3 Steps matching Page 22 Block 6: "In 3 Schritten zur IT Weiterbildung"
  const steps3 = isEn
    ? [
        {
          num: "01",
          title: "Free consultation",
          desc: "In a 1-on-1 consultation, we review your background, career goals, and select the right IT program or module combination for you.",
        },
        {
          num: "02",
          title: "Apply for funding",
          desc: "Within 24 hours, Clarusway prepares your official German course offer (Maßnahmeangebot) to present to your Agentur für Arbeit or Jobcenter advisor.",
        },
        {
          num: "03",
          title: "Course start",
          desc: "Your tuition is 100% funded with your Bildungsgutschein or AVGS voucher — you start your live online cohort with 0 € out-of-pocket costs.",
        },
      ]
    : [
        {
          num: "01",
          title: "Kostenlose Beratung",
          desc: "Im persönlichen Gespräch klären wir dein Vorwissen, dein Berufsziel und wählen das passende Weiterbildungsprogramm oder Einzelmodul aus.",
        },
        {
          num: "02",
          title: "Förderung beantragen",
          desc: "Innerhalb von 24 Stunden erstellen wir dein individuelles AZAV-Maßnahmeangebot zur Vorlage bei deiner Vermittlungsfachkraft.",
        },
        {
          num: "03",
          title: "Kursstart",
          desc: "Mit bewilligtem Bildungsgutschein oder AVGS übernimmt der Kostenträger 100 % der Lehrgangsgebühren — du startest kostenfrei in deine Weiterbildung.",
        },
      ];

  // Learning model matching Page 22 Block 7: "So funktioniert das Lernen bei Clarusway"
  const learningPillars = isEn
    ? [
        {
          title: "Live instruction with instructors",
          desc: "Daily interactive classes from 09:00 to 16:45 CET with experienced teachers and real-time guidance instead of pre-recorded videos.",
        },
        {
          title: "Personal mentoring",
          desc: "Dedicated teaching assistants and mentors answer questions daily and provide feedback on your code and architecture.",
        },
        {
          title: "Practical projects for your portfolio",
          desc: "Build real enterprise projects and capstone software to showcase on GitHub to German employers.",
        },
        {
          title: "Career support until employment",
          desc: "Our Career Management team prepares your LinkedIn profile, conducts mock technical interviews, and supports your career transition in Germany.",
        },
      ]
    : [
        {
          title: "Live-Unterricht mit Dozenten",
          desc: "Täglicher interaktiver Unterricht von 09:00 bis 16:45 Uhr mit praxiserfahrenen Dozenten statt isolierter Selbstlernvideos.",
        },
        {
          title: "Persönliches Mentoring",
          desc: "Feste Mentoren und Teaching Assistants begleiten dich bei praktischen Übungen, Code Reviews und täglichen Fragestunden.",
        },
        {
          title: "Praxisprojekte für dein Portfolio",
          desc: "Du entwickelst reale Team- und Abschlussprojekte, die du in deinem GitHub-Portfolio potenziellen Arbeitgebern vorlegen kannst.",
        },
        {
          title: "Karriere-Support bis zur Anstellung",
          desc: "Individuelles Bewerbungstraining, LinkedIn-Optimierung und Simulation von Fachgesprächen speziell für den deutschen Arbeitsmarkt.",
        },
      ];

  // 7 Exact FAQ questions from Page 22 of German SEO Plan
  const faqs = isEn
    ? [
        {
          q: "Which IT training is suitable for career changers?",
          a: "All main Clarusway bootcamps (AI Engineering, Full Stack Development, Cyber Security, AWS & DevOps, and SDET) are specifically designed for career changers without prior programming or IT experience starting at Module 1. Those who want to explore different roles first can take the 4-week IT Orientation Course.",
        },
        {
          q: "Is the IT training funded with a Bildungsgutschein?",
          a: "Yes. All Clarusway programs and modules are AZAV-certified in Germany. With an approved Bildungsgutschein from the Agentur für Arbeit or Jobcenter, 100% of the tuition costs are covered. Employed professionals can receive funding via the Qualifizierungschancengesetz (QCG).",
        },
        {
          q: "Do I need prior IT knowledge?",
          a: "No prior technical or coding experience is required for Module 1. If you already have technical skills, you can take a technical placement assessment to enter directly into advanced modules.",
        },
        {
          q: "How does the online instruction work?",
          a: "Training takes place live online from Monday to Friday between 09:00 and 16:45 CET in interactive virtual classrooms with live instructors, hands-on lab exercises, and mentor support.",
        },
        {
          q: "What language is the instruction taught in?",
          a: "Instruction is offered in English, Turkish, and German cohorts. Our career and funding advisory team also guides you in English, German, or Turkish.",
        },
        {
          q: "Which certificates do I receive?",
          a: "You receive an official Clarusway certificate of completion upon graduation. Depending on your course, the curriculum also prepares you for industry certifications such as CompTIA Security+, AWS Certified Solutions Architect, CNCF CKAD, and Microsoft Azure AZ-900.",
        },
        {
          q: "How long does an IT training at Clarusway take?",
          a: "Program durations vary depending on the chosen track and module combination: from 4 weeks (IT Orientation, Kubernetes CKAD) to 3–8 months (AWS & DevOps, Cyber Security) and up to 32 weeks (AI Engineering).",
        },
      ]
    : [
        {
          q: "Welche IT Weiterbildung eignet sich für Quereinsteiger?",
          a: "Alle Hauptweiterbildungen bei Clarusway (AI Engineering, Full Stack Entwicklung, Cyber Security, AWS & DevOps und SDET) starten in Modul 1 ohne vorausgesetzte IT- oder Programmierkenntnisse und sind ideal für den Quereinstieg geeignet. Unentschlossene können im 4-wöchigen IT-Orientierungskurs alle Fachbereiche testen.",
        },
        {
          q: "Wird die IT Weiterbildung mit Bildungsgutschein gefördert?",
          a: "Ja. Sämtliche Programme sind nach AZAV zugelassen. Mit einem Bildungsgutschein der Agentur für Arbeit oder des Jobcenters werden 100 % der Lehrgangsgebühren übernommen. Für Beschäftigte greift das Qualifizierungschancengesetz (QCG).",
        },
        {
          q: "Brauche ich Vorkenntnisse für eine IT Weiterbildung?",
          a: "Nein. Für den Einstieg in Modul 1 sind keinerlei Vorkenntnisse nötig. Wer bereits Programmier- oder IT-Erfahrung mitbringt, kann über eine Einstufungsprüfung direkt in ein höheres Modul einsteigen.",
        },
        {
          q: "Wie läuft der Online-Unterricht ab?",
          a: "Der Unterricht findet von Montag bis Freitag zwischen 09:00 und 16:45 Uhr im interaktiven Live-Online-Format mit Dozenten, Praxis-Labs und Mentor-Betreuung statt — keine voraufgezeichneten Videos.",
        },
        {
          q: "In welcher Sprache findet der Unterricht statt?",
          a: "Der Unterricht wird in Kohorten auf Deutsch, Englisch oder Türkisch angeboten. Auch die Studien- und Förderberatung begleitet dich in deiner Wunschsprache.",
        },
        {
          q: "Welche Zertifikate erhalte ich?",
          a: "Neben dem anerkannten Clarusway-Abschlusszertifikat bereitest du dich je nach Kurs auf weltweite Branchenzertifizierungen wie CompTIA Security+, AWS Solutions Architect, CNCF CKAD oder Microsoft Azure AZ-900 vor.",
        },
        {
          q: "Wie lange dauert eine IT Weiterbildung bei Clarusway?",
          a: "Die Dauer richtet sich nach Programm und Modulwahl: von 4 Wochen (IT-Orientierung, Kubernetes CKAD) über 3 bis 8 Monate (AWS & DevOps, Cyber Security) bis hin zu 32 Wochen (AI Engineering).",
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
        streetAddress: "Bataverstraße 84",
        addressLocality: "Neuss",
        postalCode: "41462",
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
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", color: DARK }} className="bg-white">
      <SeoHead title={metaTitle} description={metaDescription} path="/" schema={schema} />

      {/* =====================================================================
          B1: HERO SECTION — Balanced Layout with Medium Scale 3D Dotted Globe
          (Strictly adhering to art direction: Globe remains untouched)
          ===================================================================== */}
      {(() => {
        const copy = isEn ? HERO_COPY.en : HERO_COPY.de;
        return (
          <section
            className="relative py-8 sm:py-12 lg:py-14 overflow-hidden"
            style={{
              backgroundColor: "#FFF4F6",
              backgroundImage: `
                radial-gradient(circle at 75% 50%, #FFF4F6 0%, #FAF0F4 45%, #F6F3EE 100%),
                radial-gradient(rgba(20, 27, 45, 0.04) 1px, transparent 1px)
              `,
              backgroundSize: "100% 100%, 24px 24px",
            }}
          >
            <div className="max-w-[1420px] mx-auto px-4 sm:px-8 relative z-10">
              <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-6 xl:gap-8 items-center">
                
                {/* Left Text Column */}
                <div className="lg:col-span-6 max-w-[580px] z-20 flex flex-col justify-center">
                  {/* Pill Badge */}
                  <div className="inline-flex items-center gap-2 self-start bg-[#FDE3E9] text-[#E5254F] text-[11px] sm:text-xs font-medium px-3 sm:px-3.5 py-1.5 rounded-full mb-4 tracking-tight shadow-xs">
                    <ShieldCheckIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E5254F] shrink-0" />
                    <span>{copy.badge}</span>
                  </div>

                  {/* H1 Heading (Exact: no colon in German H1) */}
                  <h1
                    style={{ color: DARK, lineHeight: 1.15 }}
                    className="text-[28px] sm:text-4xl lg:text-[40px] xl:text-[44px] font-semibold tracking-[-0.025em] mb-4"
                  >
                    {copy.h1Lead}
                    <span style={{ color: PRIMARY }}>{copy.h1Highlight}</span>
                  </h1>

                  {/* 5 Crimson Stars + Career Karma Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill={PRIMARY}>
                          <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.13L8 10.5l-3.71 2.05.71-4.13-3-2.92 4.15-.75L8 1z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {copy.rating}
                    </span>
                  </div>

                  {/* Subline */}
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                    {copy.desc}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-3 sm:gap-3.5 items-center mb-5 sm:mb-6">
                    <Link
                      to={consultPath}
                      onClick={() =>
                        trackClaruswayEvent("beratung_angefragt", { source: "home_hero", lang })
                      }
                      style={{ backgroundColor: PRIMARY }}
                      className="inline-flex items-center gap-2 text-white font-medium px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl text-sm shadow-[0_4px_16px_rgba(229,37,79,0.22)] hover:opacity-95 hover:shadow-[0_6px_22px_rgba(229,37,79,0.3)] transition-all"
                    >
                      <span>{copy.primaryBtn}</span>
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>

                    <Link
                      to={isEn ? "/it-courses/" : "/it-kurse/"}
                      className="inline-flex items-center gap-2 border border-[#141B2D]/30 text-[#141B2D] font-medium px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl text-sm hover:border-[#141B2D]/60 hover:bg-[#141B2D]/5 transition-colors"
                    >
                      <span>{copy.secondaryBtn}</span>
                    </Link>
                  </div>

                  {/* 3 Key Checklist Bullets */}
                  <div className="flex flex-wrap gap-y-2 gap-x-4 sm:gap-x-5 text-xs text-gray-600">
                    {copy.checklist.map((item, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1.5 font-medium">
                        <CheckCircleIcon className="w-4 h-4 text-[#E5254F] shrink-0" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column / Centerpiece: Enlarged Particle Globe Showpiece */}
                <div className="lg:col-span-6 flex justify-center lg:justify-end items-center relative overflow-visible z-10 -mt-1 sm:mt-0">
                  <ClaruswayHeroShowpiece isEn={isEn} />
                </div>

              </div>
            </div>
          </section>
        );
      })()}

      {/* =====================================================================
          B2: BILGI ŞERİDİ (Key Facts Trust Strip - Refined Editorial Style)
          ===================================================================== */}
      <TrustKeyFactsBar isEn={isEn} />

      {/* =====================================================================
          B3: GEFÖRDERTE WEITERBILDUNGSPROGRAMME (H2 per Page 21)
          Elevated with Emil Kowalski Micro-Interactions, Impeccable Craft & Taste-Skill Anti-Slop
          ===================================================================== */}
      <HomeFeaturedCourses isEn={isEn} />

      {/* =====================================================================
          B4: WELCHER IT-BEREICH PASST ZU DIR? (H2 per Page 21)
          Interactive Tech Career Explorer Cards with Field Icons
          ===================================================================== */}
      <section style={{ backgroundColor: SOFT_BG }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span
              style={{ color: PRIMARY }}
              className="text-xs font-semibold uppercase tracking-widest block mb-2"
            >
              {isEn ? "Orientation & Fields" : "Orientierung & Fachgebiete"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] text-[#1a1d2e] mb-3">
              {isEn ? "Which IT field is right for you?" : "Welcher IT-Bereich passt zu dir?"}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {isEn
                ? "Discover which technology field matches your interests, strengths, and career ambitions in Germany."
                : "Finde heraus, welcher Technologiebereich am besten zu deinen Interessen, Stärken und Zielen passt."}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {itAreas.map((area, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-2xs hover:shadow-md hover:border-[#e51a59]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top subtle hover accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8a1c4a] to-[#e51a59] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Top Icon + Role Tag Header */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#fde8ef] text-[#e51a59] flex items-center justify-center transition-all duration-300 group-hover:bg-[#e51a59] group-hover:text-white group-hover:scale-105 shadow-2xs">
                      <AreaIcon type={area.iconType} />
                    </div>
                    <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wider bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-full">
                      {area.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-[#1a1d2e] mb-2 group-hover:text-[#e51a59] transition-colors">
                    <Link to={area.to}>{area.title}</Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {area.desc}
                  </p>
                </div>

                <Link
                  to={area.to}
                  className="inline-flex items-center justify-between w-full pt-3.5 border-t border-gray-100 text-xs font-medium text-gray-700 group-hover:text-[#e51a59] transition-colors"
                >
                  <span>{isEn ? "Explore pathway" : "Bereich entdecken"}</span>
                  <div className="w-6 h-6 rounded-full bg-gray-50 group-hover:bg-[#fde8ef] group-hover:text-[#e51a59] flex items-center justify-center transition-colors">
                    <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          B5: FÖRDERUNG MIT BILDUNGSGUTSCHEIN, AVGS ODER QCG (H2 per Page 22)
          Official Statutory Voucher Passes
          ===================================================================== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span
              style={{ color: PRIMARY }}
              className="text-xs font-semibold uppercase tracking-widest block mb-2"
            >
              {isEn ? "Funding Options" : "Finanzierungswege"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] text-[#1a1d2e] mb-3">
              {isEn
                ? "Funding with Bildungsgutschein, AVGS or QCG"
                : "Förderung mit Bildungsgutschein, AVGS oder QCG"}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {isEn
                ? "Over 90% of our participants attend their IT training at 0 € tuition cost using official German public funding vouchers."
                : "Über 90 % unserer Teilnehmenden in Deutschland absolvieren ihre Weiterbildung zu 100 % staatlich gefördert ohne private Kosten."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Card 1: Bildungsgutschein */}
            <div className="bg-[#FCFBFA] rounded-2xl p-6 sm:p-7 border border-[#e51a59]/25 shadow-2xs hover:shadow-md hover:border-[#e51a59]/40 transition-all flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 right-0">
                <span className="text-[9px] font-medium uppercase tracking-wider bg-[#e51a59] text-white px-3 py-1 rounded-bl-xl shadow-xs">
                  {isEn ? "Most Popular" : "Häufigste Förderung"}
                </span>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3 pt-1">
                  <span className="text-[10px] font-medium text-gray-500 uppercase tracking-widest bg-white border border-gray-200 px-2.5 py-0.5 rounded-md">
                    § 81 SGB III
                  </span>
                  <span className="text-xs font-medium text-[#e51a59] bg-[#fde8ef] px-2.5 py-0.5 rounded-full">
                    {isEn ? "100% Covered" : "100 % Kostenübernahme"}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-[#1a1d2e] mb-2 group-hover:text-[#e51a59] transition-colors">
                  <Link to="/bildungsgutschein/">
                    Bildungsgutschein
                  </Link>
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  {isEn
                    ? "For jobseekers, unemployed residents, or people facing unemployment. Tuition is 100% covered by the Agentur für Arbeit or Jobcenter."
                    : "Für Arbeitsuchende, Arbeitslose und von Arbeitslosigkeit Bedrohte. 100 % Kostenübernahme durch Arbeitsagentur oder Jobcenter."}
                </p>

                {/* Voucher Highlight Box */}
                <div className="my-4 py-2.5 px-3 bg-white rounded-xl border border-gray-200/80 flex items-center justify-between text-xs">
                  <span className="text-gray-500">{isEn ? "Your Cost" : "Eigenanteil"}</span>
                  <span className="font-semibold text-[#e51a59] text-sm">0 € ({isEn ? "100% funded" : "100 % gefördert"})</span>
                </div>
              </div>

              <div>
                <div className="border-t border-dashed border-gray-200 my-3" />
                <Link
                  to="/bildungsgutschein/"
                  className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-medium transition-all inline-flex items-center justify-center gap-1.5 bg-[#fde8ef] text-[#e51a59] hover:bg-[#e51a59] hover:text-white"
                >
                  <span>{isEn ? "Bildungsgutschein Guide" : "Bildungsgutschein beantragen"}</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2: AVGS */}
            <div className="bg-[#FCFBFA] rounded-2xl p-6 sm:p-7 border border-gray-200/90 shadow-2xs hover:shadow-md hover:border-[#e51a59]/30 transition-all flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="flex items-center gap-2 mb-3 pt-1">
                  <span className="text-[10px] font-medium text-gray-500 uppercase tracking-widest bg-white border border-gray-200 px-2.5 py-0.5 rounded-md">
                    § 45 SGB III
                  </span>
                  <span className="text-xs font-medium text-[#e51a59] bg-[#fde8ef] px-2.5 py-0.5 rounded-full">
                    {isEn ? "Free Coaching" : "Kostenloses Coaching"}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-[#1a1d2e] mb-2 group-hover:text-[#e51a59] transition-colors">
                  <Link to="/avgs/">
                    AVGS
                  </Link>
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  {isEn
                    ? "The Activation and Placement Voucher (AVGS) funds the 4-week IT Orientation Course and 1-on-1 career coaching at 100% free of charge."
                    : "Der Aktivierungs- und Vermittlungsgutschein ermöglicht den 4-wöchigen IT-Orientierungskurs und individuelles Coaching zu 100 % kostenlos."}
                </p>

                {/* Voucher Highlight Box */}
                <div className="my-4 py-2.5 px-3 bg-white rounded-xl border border-gray-200/80 flex items-center justify-between text-xs">
                  <span className="text-gray-500">{isEn ? "Format" : "Format & Dauer"}</span>
                  <span className="font-semibold text-[#141b2d] text-sm">{isEn ? "4 Weeks · 100% Live" : "4 Wochen · 100 % Live"}</span>
                </div>
              </div>

              <div>
                <div className="border-t border-dashed border-gray-200 my-3" />
                <Link
                  to="/avgs/"
                  className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-medium transition-all inline-flex items-center justify-center gap-1.5 bg-white border border-gray-200 hover:border-[#e51a59] text-gray-800 hover:text-[#e51a59]"
                >
                  <span>{isEn ? "AVGS Coaching Voucher" : "AVGS Gutschein nutzen"}</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3: QCG */}
            <div className="bg-[#FCFBFA] rounded-2xl p-6 sm:p-7 border border-gray-200/90 shadow-2xs hover:shadow-md hover:border-[#e51a59]/30 transition-all flex flex-col justify-between group relative overflow-hidden">
              <div>
                <div className="flex items-center gap-2 mb-3 pt-1">
                  <span className="text-[10px] font-medium text-gray-500 uppercase tracking-widest bg-white border border-gray-200 px-2.5 py-0.5 rounded-md">
                    § 82 SGB III
                  </span>
                  <span className="text-xs font-medium text-[#e51a59] bg-[#fde8ef] px-2.5 py-0.5 rounded-full">
                    {isEn ? "Up to 100% Grant" : "Bis zu 100 % Zuschuss"}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-[#1a1d2e] mb-2 group-hover:text-[#e51a59] transition-colors">
                  <Link to="/qualifizierungschancengesetz/">
                    Qualifizierungschancengesetz
                  </Link>
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  {isEn
                    ? "Subsidized training costs (up to 100%) and wage supplements (up to 75%) for employees undergoing tech upskilling."
                    : "Bis zu 100 % Zuschuss zu den Lehrgangskosten und bis zu 75 % Arbeitsentgeltzuschuss für Mitarbeitende im digitalen Wandel."}
                </p>

                {/* Voucher Highlight Box */}
                <div className="my-4 py-2.5 px-3 bg-white rounded-xl border border-gray-200/80 flex items-center justify-between text-xs">
                  <span className="text-gray-500">{isEn ? "Wage Subsidy" : "Lohnzuschuss"}</span>
                  <span className="font-semibold text-[#141b2d] text-sm">{isEn ? "Up to 75% for employers" : "Bis zu 75 % für Arbeitgeber"}</span>
                </div>
              </div>

              <div>
                <div className="border-t border-dashed border-gray-200 my-3" />
                <Link
                  to="/qualifizierungschancengesetz/"
                  className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-medium transition-all inline-flex items-center justify-center gap-1.5 bg-white border border-gray-200 hover:border-[#e51a59] text-gray-800 hover:text-[#e51a59]"
                >
                  <span>{isEn ? "QCG Employer Funding" : "QCG für Unternehmen"}</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to={isEn ? "/financing-and-tuition/" : "/finanzierung/"}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#e51a59] hover:underline"
            >
              <span>
                {isEn ? "Compare all funding options in detail" : "Alle Finanzierungswege im Vergleich ansehen"}
              </span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================================
          B6: IN 3 SCHRITTEN ZUR IT WEITERBILDUNG (H2 per Page 22)
          Connected Step-by-Step Roadmap / Process Stepper
          ===================================================================== */}
      <section style={{ backgroundColor: SOFT_BG }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span
              style={{ color: PRIMARY }}
              className="text-xs font-semibold uppercase tracking-widest block mb-2"
            >
              {isEn ? "Admission Process" : "Ablauf & Beantragung"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] text-[#1a1d2e] mb-3">
              {isEn ? "In 3 steps to your IT training" : "In 3 Schritten zur IT Weiterbildung"}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {isEn
                ? "From initial guidance to your first day in class — we prepare all German documentation for your advisor."
                : "Vom ersten Kennenlernen bis zum erfolgreichen Start begleiten wir dich durch den gesamten Prozess."}
            </p>
          </div>

          <div className="relative mb-10">
            {/* Desktop horizontal connecting timeline line */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-gray-200 via-[#e51a59]/30 to-gray-200 z-0" />

            <div className="grid md:grid-cols-3 gap-6 relative z-10">
              {steps3.map((step, idx) => (
                <div
                  key={step.num}
                  className="bg-white rounded-2xl p-7 border border-gray-200/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden"
                >
                  <div>
                    {/* Step number node + step pill */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-2xl bg-[#141B2D] text-white flex items-center justify-center font-medium text-base shadow-sm group-hover:bg-[#e51a59] group-hover:scale-105 transition-all">
                        {step.num}
                      </div>
                      <span className="text-[10px] font-medium uppercase tracking-wider text-[#e51a59] bg-[#fde8ef] px-3 py-1 rounded-full">
                        {isEn ? `Step 0${idx + 1}` : `Schritt 0${idx + 1}`}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-[#1a1d2e] mb-2">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 text-[11px] font-medium text-gray-500 flex items-center gap-1.5">
                    <CheckCircleIcon className="w-3.5 h-3.5 text-[#e51a59] shrink-0" />
                    <span>
                      {idx === 0
                        ? isEn ? "30 min consultation via Zoom" : "30 Min. Beratung via Zoom"
                        : idx === 1
                          ? isEn ? "Official offer ready in 24h" : "Maßnahmeangebot in 24 Std."
                          : isEn ? "Live online cohort with instructor" : "Live-Unterricht mit Dozenten"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link
              to={consultPath}
              style={{ backgroundColor: PRIMARY }}
              className="inline-flex items-center gap-2 text-white font-medium px-7 py-3.5 rounded-xl text-sm shadow-md hover:opacity-95 transition-all active:scale-[0.99]"
            >
              <span>{isEn ? "Book free consultation now" : "Jetzt kostenlose Beratung buchen"}</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <p className="text-xs text-gray-500 mt-2.5">
              {isEn
                ? "100% free & non-binding · Personal response within 24 hours"
                : "100 % kostenlos & unverbindlich · Persönliche Rückmeldung in 24 Stunden"}
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================================
          B7: SO FUNKTIONIERT DAS LERNEN BEI CLARUSWAY (H2 per Page 22)
          ===================================================================== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span
              style={{ color: PRIMARY }}
              className="text-xs font-semibold uppercase tracking-widest block mb-2"
            >
              {isEn ? "Our Learning Model" : "Lernmodell"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] text-[#1a1d2e] mb-3">
              {isEn ? "How learning works at Clarusway" : "So funktioniert das Lernen bei Clarusway"}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {isEn
                ? "Live interactive classrooms, daily senior mentor availability, and real team engineering projects simulate a genuine tech work environment."
                : "Live-Interaktion, tägliche Mentor-Sprechstunden und reale Entwicklungsprojekte bereiten dich optimal auf den Berufsalltag vor."}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningPillars.map((pillar, idx) => (
              <div
                key={idx}
                style={{ backgroundColor: SOFT_BG }}
                className="rounded-2xl p-6 border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-[#fde8ef] text-[#e51a59] flex items-center justify-center mb-3">
                    <CheckCircleIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-[#1a1d2e] mb-2">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          B8: ZERTIFIZIERT UND ANERKANNT (H2 per Page 22)
          ===================================================================== */}
      <section style={{ backgroundColor: SOFT_BG }} className="py-14 border-t border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[#1a1d2e] mb-2">
              {isEn ? "Certified and recognized" : "Zertifiziert und anerkannt"}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              {isEn
                ? "State-inspected continuing education provider and verified partner in leading tech ecosystems."
                : "Staatlich geprüfter Bildungsträger und anerkannter Partner führender Technologie-Netzwerke."}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-4 border border-gray-200 text-center shadow-2xs">
              <span className="block font-semibold text-[#e51a59] text-base mb-0.5">AZAV</span>
              <span className="text-xs text-gray-600 font-normal">
                {isEn ? "Certified Provider" : "Zugelassener Träger"}
              </span>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-200 text-center shadow-2xs">
              <span className="block font-semibold text-[#1a1d2e] text-base mb-0.5">AWS Partner</span>
              <span className="text-xs text-gray-600 font-normal">Select Tier Consulting</span>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-200 text-center shadow-2xs">
              <span className="block font-semibold text-[#1a1d2e] text-base mb-0.5">KURSNET</span>
              <span className="text-xs text-gray-600 font-normal">Bundesagentur für Arbeit</span>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-200 text-center shadow-2xs">
              <span className="block font-semibold text-[#1a1d2e] text-base mb-0.5">mein NOW</span>
              <span className="text-xs text-gray-600 font-normal">Nationales Onlineportal</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          B9: ERFAHRUNGEN VON CLARUSWAY ABSOLVENTEN (H2 per Page 22)
          ===================================================================== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span
                style={{ color: PRIMARY }}
                className="text-xs font-semibold uppercase tracking-widest block mb-2"
              >
                {isEn ? "Alumni Reviews" : "Absolventenstimmen"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] text-[#1a1d2e]">
                {isEn ? "What graduates say" : "Erfahrungen von Clarusway Absolventen"}
              </h2>
            </div>

            <Link
              to={isEn ? "/success-stories/" : "/erfolgsgeschichten/"}
              className="text-xs sm:text-sm font-medium text-[#e51a59] hover:underline inline-flex items-center gap-1.5"
            >
              <span>{isEn ? "Read all success stories" : "Alle Erfahrungsberichte lesen"}</span>
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
                  <p className="font-semibold text-sm text-[#1a1d2e]">DH Kim</p>
                  <p className="text-xs text-gray-500">
                    {isEn ? "AWS & DevOps Graduate" : "AWS & DevOps Absolvent"}
                  </p>
                </div>
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-[#e51a59] hover:underline inline-flex items-center gap-1"
                >
                  <span>{isEn ? "Google Reviews" : "Google Rezensionen"}</span>
                  <ExternalLinkIcon className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-gray-200 shadow-2xs flex flex-col justify-between">
              <p className="text-gray-700 text-sm sm:text-base italic leading-relaxed mb-6">
                {isEn
                  ? "“Clarusway helped me transition into IT in Germany without prior coding experience. The live classes and the support with the Bildungsgutschein made the process straightforward.”"
                  : "„Clarusway hat mir geholfen, ohne Vorkenntnisse in die IT einzusteigen. Das Live-Format und die Unterstützung beim Bildungsgutschein haben den Wechsel möglich gemacht.“"}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <p className="font-semibold text-sm text-[#1a1d2e]">Morad</p>
                  <p className="text-xs text-gray-500">
                    {isEn ? "Cyber Security Graduate" : "Cyber Security Absolvent"}
                  </p>
                </div>
                <a
                  href="https://www.coursereport.com/schools/clarusway"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-[#e51a59] hover:underline inline-flex items-center gap-1"
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
          B10: HÄUFIGE FRAGEN ZUR IT WEITERBILDUNG (H2 per Page 22)
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
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] text-[#1a1d2e]">
              {isEn
                ? "Frequently asked questions about IT training"
                : "Häufige Fragen zur IT Weiterbildung"}
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
                  <h3 className="text-sm sm:text-base font-medium text-[#1a1d2e]">{f.q}</h3>
                  <span
                    style={{ color: PRIMARY }}
                    className="w-7 h-7 rounded-full bg-[#fde8ef] flex items-center justify-center shrink-0 font-medium text-sm group-open:rotate-45 transition-transform"
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
          B11 / B16: SON CTA BANDI (H2 per Page 22)
          ===================================================================== */}
      <section
        className="py-16"
        style={{ background: `linear-gradient(135deg, ${DARK} 0%, #2d1b3d 100%)` }}
      >
        <div className="max-w-4xl mx-auto px-5 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] mb-4">
            {isEn
              ? "Ready for your IT career? Book your free consultation now."
              : "Bereit für deine IT-Karriere? Vereinbare jetzt dein kostenloses Beratungsgespräch."}
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
            {isEn
              ? "We review your eligibility for a Bildungsgutschein or AVGS and prepare your official German course offer within 24 hours."
              : "Wir prüfen deinen Anspruch auf einen Bildungsgutschein oder AVGS und erstellen dein offizielles Maßnahmeangebot innerhalb von 24 Stunden."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={consultPath}
              onClick={() =>
                trackClaruswayEvent("beratung_angefragt", { source: "home_bottom_cta", lang })
              }
              style={{ backgroundColor: PRIMARY }}
              className="inline-flex items-center gap-2 text-white font-medium px-7 py-3.5 rounded-xl text-sm shadow-md hover:opacity-95"
            >
              <span>{isEn ? "Free consultation" : "Kostenlose Beratung"}</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <Link
              to={isEn ? "/it-courses/" : "/it-kurse/"}
              className="inline-flex items-center gap-2 border border-white/35 text-white font-medium px-7 py-3.5 rounded-xl text-sm hover:border-white/75 hover:bg-white/5 transition-colors"
            >
              <span>{isEn ? "Compare all IT courses" : "Alle IT-Kurse vergleichen"}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
