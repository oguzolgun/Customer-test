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
  SparklesIcon,
} from "../components/Icons";

const PRIMARY = "#E5254F";
const DARK = "#141B2D";
const SOFT_BG = "#f6f7fb";

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
        },
        {
          title: "Software Development",
          desc: "Modern full-stack web applications with React, TypeScript, Node.js, and AI coding workflows.",
          to: "/it-courses/full-stack-developer/",
          tag: "Full Stack Development",
        },
        {
          title: "IT Security",
          desc: "Defend networks, detect threats in the SOC, and prepare for CompTIA Security+ certification.",
          to: "/it-courses/cyber-security/",
          tag: "Cyber Security Analyst",
        },
        {
          title: "Cloud and DevOps",
          desc: "Deploy scalable cloud architectures on AWS and Azure with Docker, Kubernetes, and CI/CD.",
          to: "/it-courses/devops-aws/",
          tag: "Cloud & DevOps Engineering",
        },
      ]
    : [
        {
          title: "Daten und KI",
          desc: "Datenanalyse, Machine-Learning-Modelle und autonome KI-Agenten mit Python und SQL.",
          to: "/it-kurse/ai-engineer-weiterbildung/",
          tag: "AI Engineering & Data",
        },
        {
          title: "Softwareentwicklung",
          desc: "Moderne Full-Stack-Webanwendungen mit React, TypeScript, Node.js und KI-Workflows.",
          to: "/it-kurse/full-stack-entwickler-weiterbildung/",
          tag: "Full Stack Entwickler",
        },
        {
          title: "IT-Sicherheit",
          desc: "Netzwerke schützen, Angriffe im SOC abwehren und Prüfungsvorbereitung auf CompTIA Security+.",
          to: "/it-kurse/cyber-security-weiterbildung/",
          tag: "Cyber Security Analyst",
        },
        {
          title: "Cloud und DevOps",
          desc: "Cloud-Infrastrukturen auf AWS und Azure bereitstellen mit Docker, Kubernetes und CI/CD.",
          to: "/it-kurse/aws-devops-weiterbildung/",
          tag: "Cloud & DevOps Engineer",
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
    <div style={{ fontFamily: "'Poppins', sans-serif", color: DARK }} className="bg-white">
      <SeoHead title={metaTitle} description={metaDescription} path="/" schema={schema} />

      {/* =====================================================================
          B1: HERO SECTION — Balanced Layout with Medium Scale 3D Dotted Globe
          (Strictly adhering to art direction: Globe remains untouched)
          ===================================================================== */}
      {(() => {
        const copy = isEn ? HERO_COPY.en : HERO_COPY.de;
        return (
          <section
            className="relative py-10 sm:py-14 lg:py-16 overflow-hidden"
            style={{
              backgroundColor: "#FFF4F6",
              backgroundImage: `
                radial-gradient(circle at 75% 50%, #FFF4F6 0%, #FAF0F4 45%, #F6F3EE 100%),
                radial-gradient(rgba(20, 27, 45, 0.04) 1px, transparent 1px)
              `,
              backgroundSize: "100% 100%, 24px 24px",
            }}
          >
            <div className="max-w-[1360px] mx-auto px-5 sm:px-8 relative z-10">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
                
                {/* Left Text Column */}
                <div className="lg:col-span-7 xl:col-span-6 max-w-[620px] z-20 flex flex-col justify-center">
                  {/* Pill Badge */}
                  <div className="inline-flex items-center gap-2 self-start bg-[#FDE3E9] text-[#E5254F] text-xs font-bold px-3.5 py-1.5 rounded-full mb-4 tracking-tight shadow-xs">
                    <ShieldCheckIcon className="w-4 h-4 text-[#E5254F]" />
                    <span>{copy.badge}</span>
                  </div>

                  {/* H1 Heading (Exact: no colon in German H1) */}
                  <h1
                    style={{ color: DARK, lineHeight: 1.15 }}
                    className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-extrabold tracking-tight mb-4"
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
                    <span className="text-sm font-semibold text-gray-700">
                      {copy.rating}
                    </span>
                  </div>

                  {/* Subline */}
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                    {copy.desc}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-3.5 items-center mb-6">
                    <Link
                      to={consultPath}
                      onClick={() =>
                        trackClaruswayEvent("beratung_angefragt", { source: "home_hero", lang })
                      }
                      style={{ backgroundColor: PRIMARY }}
                      className="inline-flex items-center gap-2 text-white font-bold px-6 py-3.5 rounded-xl text-sm shadow-[0_4px_16px_rgba(229,37,79,0.25)] hover:opacity-95 hover:shadow-[0_6px_22px_rgba(229,37,79,0.35)] transition-all"
                    >
                      <span>{copy.primaryBtn}</span>
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>

                    <Link
                      to={isEn ? "/it-courses/" : "/it-kurse/"}
                      className="inline-flex items-center gap-2 border-2 border-[#141B2D] text-[#141B2D] font-bold px-6 py-3.5 rounded-xl text-sm hover:bg-[#141B2D]/5 transition-colors"
                    >
                      <span>{copy.secondaryBtn}</span>
                    </Link>
                  </div>

                  {/* 3 Key Checklist Bullets */}
                  <div className="flex flex-wrap gap-y-2.5 gap-x-5 text-xs text-gray-600">
                    {copy.checklist.map((item, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1.5 font-medium">
                        <CheckCircleIcon className="w-4 h-4 text-[#E5254F] shrink-0" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column / Centerpiece: Globe Showpiece (Unchanged) */}
                <div className="lg:col-span-5 xl:col-span-6 flex justify-center lg:justify-end items-center relative overflow-visible z-10 pt-4 lg:pt-0">
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
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e] mb-3">
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
                className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-2xs hover:border-[#e51a59] transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#fde8ef] text-[#e51a59] inline-block mb-3">
                    {area.tag}
                  </span>
                  <h3 className="text-lg font-bold text-[#1a1d2e] mb-2">
                    <Link to={area.to} className="hover:text-[#e51a59] transition-colors">
                      {area.title}
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {area.desc}
                  </p>
                </div>
                <Link
                  to={area.to}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e51a59] hover:underline pt-3 border-t border-gray-100"
                >
                  <span>{area.title}</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          B5: FÖRDERUNG MIT BILDUNGSGUTSCHEIN, AVGS ODER QCG (H2 per Page 22)
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
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e] mb-3">
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
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-2xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full inline-block mb-3">
                  100 % {isEn ? "Tuition Coverage" : "Kostenübernahme"}
                </span>
                <h3 className="text-xl font-bold text-[#1a1d2e] mb-2">
                  <Link to="/bildungsgutschein/" className="hover:text-[#e51a59]">
                    Bildungsgutschein
                  </Link>
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  {isEn
                    ? "For jobseekers, unemployed residents, or people facing unemployment. Tuition is 100% covered by the Agentur für Arbeit or Jobcenter."
                    : "Für Arbeitsuchende, Arbeitslose und von Arbeitslosigkeit Bedrohte. 100 % Kostenübernahme durch Arbeitsagentur oder Jobcenter."}
                </p>
              </div>
              <Link
                to="/bildungsgutschein/"
                className="text-xs font-bold text-[#e51a59] hover:underline inline-flex items-center gap-1 pt-3 border-t border-gray-100"
              >
                <span>{isEn ? "Bildungsgutschein Guide" : "Bildungsgutschein beantragen"}</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-2xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#e51a59] bg-[#fde8ef] px-2.5 py-1 rounded-full inline-block mb-3">
                  {isEn ? "Free Orientation" : "Kostenloses Coaching"}
                </span>
                <h3 className="text-xl font-bold text-[#1a1d2e] mb-2">
                  <Link to="/avgs/" className="hover:text-[#e51a59]">
                    AVGS
                  </Link>
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  {isEn
                    ? "The Activation and Placement Voucher (AVGS) funds the 4-week IT Orientation Course and 1-on-1 career coaching at 100% free of charge."
                    : "Der Aktivierungs- und Vermittlungsgutschein ermöglicht den 4-wöchigen IT-Orientierungskurs und individuelles Coaching zu 100 % kostenlos."}
                </p>
              </div>
              <Link
                to="/avgs/"
                className="text-xs font-bold text-[#e51a59] hover:underline inline-flex items-center gap-1 pt-3 border-t border-gray-100"
              >
                <span>{isEn ? "AVGS Coaching Voucher" : "AVGS Gutschein nutzen"}</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-2xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full inline-block mb-3">
                  {isEn ? "For Employees & Employers" : "Für Beschäftigte & Arbeitgeber"}
                </span>
                <h3 className="text-xl font-bold text-[#1a1d2e] mb-2">
                  <Link to="/qualifizierungschancengesetz/" className="hover:text-[#e51a59]">
                    Qualifizierungschancengesetz
                  </Link>
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  {isEn
                    ? "Subsidized training costs (up to 100%) and wage supplements (up to 75%) for employees undergoing tech upskilling."
                    : "Bis zu 100 % Zuschuss zu den Lehrgangskosten und bis zu 75 % Arbeitsentgeltzuschuss für Mitarbeitende im digitalen Wandel."}
                </p>
              </div>
              <Link
                to="/qualifizierungschancengesetz/"
                className="text-xs font-bold text-[#e51a59] hover:underline inline-flex items-center gap-1 pt-3 border-t border-gray-100"
              >
                <span>{isEn ? "QCG Employer Funding" : "QCG für Unternehmen"}</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link
              to={isEn ? "/financing-and-tuition/" : "/finanzierung/"}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#e51a59] hover:underline"
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
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e] mb-3">
              {isEn ? "In 3 steps to your IT training" : "In 3 Schritten zur IT Weiterbildung"}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {isEn
                ? "From initial guidance to your first day in class — we prepare all German documentation for your advisor."
                : "Vom ersten Kennenlernen bis zum erfolgreichen Start begleiten wir dich durch den gesamten Prozess."}
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {steps3.map((step) => (
              <div
                key={step.num}
                className="bg-white rounded-2xl p-7 border border-gray-200/80 shadow-2xs relative"
              >
                <span
                  style={{ color: PRIMARY }}
                  className="text-xs font-extrabold uppercase tracking-wider bg-[#fde8ef] px-3 py-1 rounded-full inline-block mb-3"
                >
                  {isEn ? `Step ${step.num}` : `Schritt ${step.num}`}
                </span>
                <h3 className="text-lg font-bold text-[#1a1d2e] mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to={consultPath}
              style={{ backgroundColor: PRIMARY }}
              className="inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-xl text-sm shadow-md hover:opacity-95"
            >
              <span>{isEn ? "Book free consultation now" : "Jetzt kostenlose Beratung buchen"}</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e] mb-3">
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
                  <h3 className="text-base font-bold text-[#1a1d2e] mb-2">{pillar.title}</h3>
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
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a1d2e] mb-2">
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
              <span className="block font-extrabold text-[#e51a59] text-base mb-0.5">AZAV</span>
              <span className="text-xs text-gray-600 font-medium">
                {isEn ? "Certified Provider" : "Zugelassener Träger"}
              </span>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-200 text-center shadow-2xs">
              <span className="block font-extrabold text-[#1a1d2e] text-base mb-0.5">AWS Partner</span>
              <span className="text-xs text-gray-600 font-medium">Select Tier Consulting</span>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-200 text-center shadow-2xs">
              <span className="block font-extrabold text-[#1a1d2e] text-base mb-0.5">KURSNET</span>
              <span className="text-xs text-gray-600 font-medium">Bundesagentur für Arbeit</span>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-200 text-center shadow-2xs">
              <span className="block font-extrabold text-[#1a1d2e] text-base mb-0.5">mein NOW</span>
              <span className="text-xs text-gray-600 font-medium">Nationales Onlineportal</span>
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
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e]">
                {isEn ? "What graduates say" : "Erfahrungen von Clarusway Absolventen"}
              </h2>
            </div>

            <Link
              to={isEn ? "/success-stories/" : "/erfolgsgeschichten/"}
              className="text-xs sm:text-sm font-semibold text-[#e51a59] hover:underline inline-flex items-center gap-1.5"
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
                  <p className="font-bold text-sm text-[#1a1d2e]">DH Kim</p>
                  <p className="text-xs text-gray-500">
                    {isEn ? "AWS & DevOps Graduate" : "AWS & DevOps Absolvent"}
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
                  ? "“Clarusway helped me transition into IT in Germany without prior coding experience. The live classes and the support with the Bildungsgutschein made the process straightforward.”"
                  : "„Clarusway hat mir geholfen, ohne Vorkenntnisse in die IT einzusteigen. Das Live-Format und die Unterstützung beim Bildungsgutschein haben den Wechsel möglich gemacht.“"}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <p className="font-bold text-sm text-[#1a1d2e]">Morad</p>
                  <p className="text-xs text-gray-500">
                    {isEn ? "Cyber Security Graduate" : "Cyber Security Absolvent"}
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
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e]">
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
          B11 / B16: SON CTA BANDI (H2 per Page 22)
          ===================================================================== */}
      <section
        className="py-16"
        style={{ background: `linear-gradient(135deg, ${DARK} 0%, #2d1b3d 100%)` }}
      >
        <div className="max-w-4xl mx-auto px-5 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
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
              className="inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-xl text-sm shadow-md hover:opacity-95"
            >
              <span>{isEn ? "Free consultation" : "Kostenlose Beratung"}</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <Link
              to={isEn ? "/it-courses/" : "/it-kurse/"}
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-bold px-7 py-3.5 rounded-xl text-sm hover:border-white/70 transition-colors"
            >
              <span>{isEn ? "Compare all IT courses" : "Alle IT-Kurse vergleichen"}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
