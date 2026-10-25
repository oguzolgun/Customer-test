import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { SeoHead, trackClaruswayEvent } from "../components/SeoHead";
import { Breadcrumb } from "../components/Breadcrumb";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  AwardIcon,
  CalendarIcon,
  ClockIcon,
  GlobeIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ExternalLinkIcon,
  StarIcon,
} from "../components/Icons";

const PRIMARY = "#e51a59";
const DARK = "#1a1d2e";
const SOFT_BG = "#f6f7fb";

/* ============================================================================
   1. ABOUT US PAGE (/ueber-uns/ & /about/)
   ============================================================================ */
export function AboutPage() {
  const { lang } = useLanguage();
  const isEn = lang === "en";
  const currentPath = isEn ? "/about/" : "/ueber-uns/";
  const consultPath = isEn ? "/application-form/" : "/beratung/";

  const metaTitle = isEn
    ? "About Clarusway Germany: AZAV-Certified IT School | Clarusway"
    : "Über Clarusway Deutschland: AZAV-zertifizierte IT-Schule | Clarusway";

  const metaDescription = isEn
    ? "Clarusway GmbH (Neuss, Germany) is an AZAV-certified IT training provider and AWS Select Tier Partner offering live online IT bootcamps in English."
    : "Clarusway GmbH mit Sitz in Neuss ist ein AZAV-zertifizierter Bildungsträger und offizieller AWS Select Tier Partner für praxisnahe IT-Weiterbildungen.";

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: DARK }} className="bg-white">
      <SeoHead title={metaTitle} description={metaDescription} path={currentPath} />
      <Breadcrumb items={[{ label: isEn ? "About Us" : "Über uns" }]} />

      <section
        style={{ background: "linear-gradient(135deg, #fff8f9 0%, #fff 60%)" }}
        className="py-14 border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#fde8ef] text-[#e51a59] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-4">
              <ShieldCheckIcon className="w-4 h-4" />
              <span>Clarusway GmbH · Neuss, Germany</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1a1d2e] mb-4 leading-tight">
              {isEn
                ? "About Clarusway Germany: IT education in English"
                : "Über Clarusway Deutschland: Dein Partner für den IT-Einstieg"}
            </h1>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              {isEn
                ? "Clarusway GmbH, headquartered in Neuss, is an officially AZAV-certified continuing education provider in Germany and an Amazon Web Services (AWS) Select Tier Consulting Partner. Clarusway prepares career changers and tech professionals for roles in AI Engineering, Data Analytics, Full Stack Development, Cyber Security, Cloud/DevOps, and Software Testing."
                : "Die Clarusway GmbH mit Sitz in Neuss ist ein staatlich nach AZAV zugelassener Bildungsträger und offizieller AWS Select Tier Consulting Partner. Wir qualifizieren Quereinsteiger und Fachkräfte im Live-Online-Unterricht für gefragte IT-Berufe in Deutschland."}
            </p>
            <Link
              to={consultPath}
              style={{ backgroundColor: PRIMARY }}
              className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-full text-sm"
            >
              <span>{isEn ? "Free consultation" : "Kostenlose Beratung"}</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e] mb-8">
            {isEn
              ? "Official certifications and quality standards"
              : "Zertifizierungen und Qualitätsstandards"}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: isEn ? "AZAV Certified in Germany" : "AZAV-Zertifizierung",
                desc: isEn
                  ? "Audited and certified according to the German Accreditation and Licensing Ordinance for Employment Promotion (AZAV) — eligible for 100% funding via Bildungsgutschein, AVGS, and QCG."
                  : "Zugelassener Träger nach dem Recht der Arbeitsförderung (AZAV) — 100 % förderfähig über Bildungsgutschein, AVGS und Qualifizierungschancengesetz.",
              },
              {
                title: "AWS Select Tier Consulting Partner",
                desc: isEn
                  ? "Official partner in the Amazon Web Services Partner Network. Curricula align directly with current cloud and security architecture standards."
                  : "Offizieller Partner im Amazon Web Services Partner Network. Unsere Cloud- und Security-Lehrpläne orientieren sich direkt an aktuellen Industriestandards.",
              },
              {
                title: isEn ? "Live Small-Group Instruction" : "Live-Unterricht in Kleingruppen",
                desc: isEn
                  ? "Maximum 15 students per cohort, daily live instruction (09:00–16:45 CET), real capstone projects, and 1-on-1 career coaching."
                  : "Maximal 15 Teilnehmende pro Klasse, täglicher Live-Unterricht (09:00–16:45 Uhr), reale Praxisprojekte und individuelles Karriere-Coaching.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{ backgroundColor: SOFT_BG }}
                className="rounded-2xl p-6 border border-gray-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#fde8ef] text-[#e51a59] flex items-center justify-center mb-4">
                  <AwardIcon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#1a1d2e] mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ============================================================================
   2. SUCCESS STORIES PAGE (/erfolgsgeschichten/ & /success-stories/)
   ============================================================================ */
export function SuccessStoriesPage() {
  const { lang } = useLanguage();
  const isEn = lang === "en";
  const currentPath = isEn ? "/success-stories/" : "/erfolgsgeschichten/";
  const consultPath = isEn ? "/application-form/" : "/beratung/";

  const metaTitle = isEn
    ? "Graduate Success Stories & Reviews | Clarusway"
    : "Erfolgsgeschichten & Erfahrungen unserer Absolventen | Clarusway";

  const metaDescription = isEn
    ? "Read verified reviews from Clarusway graduates in Germany across Google Reviews, Course Report, SwitchUp, and Career Karma."
    : "Echte Erfahrungen und Bewertungen von Clarusway-Absolventen auf Google, Course Report, SwitchUp und Career Karma.";

  const reviews = isEn
    ? [
        {
          name: "DH Kim",
          track: "AWS & DevOps Track",
          platform: "Google Reviews",
          url: "https://www.google.com/maps",
          quote:
            "The mentors are always reachable and genuinely invest time in every student. The live cloud labs prepared me directly for my role in Germany.",
        },
        {
          name: "Morad",
          track: "IT Career Changer",
          platform: "Course Report",
          url: "https://www.coursereport.com/schools/clarusway",
          quote:
            "Clarusway helped me enter the IT field without prior experience. From the Bildungsgutschein paperwork to the technical interview coaching, the support was outstanding.",
        },
        {
          name: "Elif K.",
          track: "Data Analytics & AI Track",
          platform: "Career Karma",
          url: "https://careerkarma.com/schools/clarusway/",
          quote:
            "Building real SQL, Python, and Power BI projects in English gave me a portfolio that convinced recruiters in Berlin.",
        },
        {
          name: "Sami A.",
          track: "Cyber Security Track",
          platform: "SwitchUp",
          url: "https://www.switchup.org/bootcamps/clarusway",
          quote:
            "The combination of CompTIA Security+ exam preparation and hands-on SIEM labs in the SOC module was exactly what employers asked for in interviews.",
        },
      ]
    : [
        {
          name: "DH Kim",
          track: "AWS & DevOps Weiterbildung",
          platform: "Google Rezensionen",
          url: "https://www.google.com/maps",
          quote:
            "Die Mentoren sind immer erreichbar und gehen wirklich auf jeden einzeln ein. Ich habe in wenigen Monaten mehr über reale Cloud-Infrastruktur gelernt als im gesamten Studium.",
        },
        {
          name: "Morad",
          track: "Quereinsteiger in die IT",
          platform: "Course Report",
          url: "https://www.coursereport.com/schools/clarusway",
          quote:
            "Clarusway hat mir geholfen, ohne Vorkenntnisse in die IT einzusteigen. Sowohl die Hilfe beim Bildungsgutschein als auch das Live-Format waren erstklassig.",
        },
        {
          name: "Elif K.",
          track: "Data Analytics & AI Track",
          platform: "Career Karma",
          url: "https://careerkarma.com/schools/clarusway/",
          quote:
            "Durch die praktischen Projekte mit Python, SQL und Power BI hatte ich bei meinen Bewerbungen ein starkes Portfolio vorzuweisen.",
        },
        {
          name: "Sami A.",
          track: "Cyber Security Weiterbildung",
          platform: "SwitchUp",
          url: "https://www.switchup.org/bootcamps/clarusway",
          quote:
            "Die Kombination aus CompTIA Security+ Vorbereitung und echten SIEM-Übungen im SOC-Labor hat mich optimal auf die Vorstellungsgespräche vorbereitet.",
        },
      ];

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: DARK }} className="bg-white">
      <SeoHead title={metaTitle} description={metaDescription} path={currentPath} />
      <Breadcrumb
        items={[{ label: isEn ? "Success Stories" : "Erfolgsgeschichten" }]}
      />

      <section
        style={{ background: "linear-gradient(135deg, #fff8f9 0%, #fff 60%)" }}
        className="py-14 border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1a1d2e] mb-4">
              {isEn
                ? "Graduate success stories and reviews"
                : "Erfolgsgeschichten und Erfahrungen unserer Absolventen"}
            </h1>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              {isEn
                ? "Read verified reviews from Clarusway graduates on independent review platforms (Google, Course Report, Career Karma, and SwitchUp)."
                : "Lies verifizierte Bewertungen unserer Absolventinnen und Absolventen auf unabhängigen Bewertungsplattformen wie Google, Course Report, Career Karma und SwitchUp."}
            </p>
            <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-2.5">
              <div className="flex text-amber-400">
                {[1, 2, 3, 4, 5].map((s) => (
                  <StarIcon key={s} className="w-4 h-4" />
                ))}
              </div>
              <span className="text-xs font-bold text-[#1a1d2e]">
                4.9 / 5 · Course Report & Career Karma
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e] mb-8">
            {isEn ? "Verified graduate testimonials" : "Verifizierte Erfahrungsberichte"}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {reviews.map((r, i) => (
              <div
                key={i}
                style={{ backgroundColor: SOFT_BG }}
                className="rounded-2xl p-7 border border-gray-200 flex flex-col justify-between"
              >
                <p className="text-gray-700 text-sm sm:text-base italic leading-relaxed mb-6">
                  “{r.quote}”
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <h3 className="text-sm font-bold text-[#1a1d2e]">{r.name}</h3>
                    <p className="text-xs text-gray-500">{r.track}</p>
                  </div>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#e51a59] hover:underline inline-flex items-center gap-1"
                  >
                    <span>{r.platform}</span>
                    <ExternalLinkIcon className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to={consultPath}
              style={{ backgroundColor: PRIMARY }}
              className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-full text-sm"
            >
              <span>{isEn ? "Start your own IT story — Free consultation" : "Kostenlose Beratung buchen"}</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ============================================================================
   3. CAREER MANAGEMENT PAGE (/karriere-management/ & /career-management/)
   ============================================================================ */
export function CareerManagementPage() {
  const { lang } = useLanguage();
  const isEn = lang === "en";
  const currentPath = isEn ? "/career-management/" : "/karriere-management/";
  const consultPath = isEn ? "/application-form/" : "/beratung/";

  const metaTitle = isEn
    ? "Career Management & Job Coaching in Germany | Clarusway"
    : "Karriere-Management & Bewerbungscoaching | Clarusway";

  const metaDescription = isEn
    ? "How Clarusway prepares you for the German IT job market: German-standard CV (Lebenslauf), LinkedIn, GitHub portfolio, and 1-on-1 mock interviews."
    : "So begleitet dich unser Karriere-Management bis zum IT-Job: Lebenslauf nach deutschem Standard, LinkedIn, GitHub-Portfolio und Interviewtraining.";

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: DARK }} className="bg-white">
      <SeoHead title={metaTitle} description={metaDescription} path={currentPath} />
      <Breadcrumb
        items={[{ label: isEn ? "Career Management" : "Karriere-Management" }]}
      />

      <section
        style={{ background: "linear-gradient(135deg, #fff8f9 0%, #fff 60%)" }}
        className="py-14 border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1a1d2e] mb-4">
              {isEn
                ? "Career management: job preparation for the German tech market"
                : "Karriere-Management: Deine Begleitung bis zum IT-Job"}
            </h1>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              {isEn
                ? "Every Clarusway bootcamp includes comprehensive Career Management tailored specifically to hiring processes at startups, scale-ups, and enterprises in Germany."
                : "In jeder Clarusway-Weiterbildung ist unser strukturiertes Karriere-Management integriert — speziell abgestimmt auf die Anforderungen deutscher Personalabteilungen und IT-Teams."}
            </p>
            <Link
              to={consultPath}
              style={{ backgroundColor: PRIMARY }}
              className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-full text-sm"
            >
              <span>{isEn ? "Free consultation" : "Kostenlose Beratung"}</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e] mb-8">
            {isEn
              ? "4 pillars of Clarusway Career Management"
              : "Die 4 Säulen unseres Karriere-Coachings"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(isEn
              ? [
                  {
                    title: "1. German-Standard Tech CV",
                    desc: "ATS-friendly tabular CV (Lebenslauf) highlighting your capstone projects, certifications, and German work authorization.",
                  },
                  {
                    title: "2. LinkedIn & XING Profile",
                    desc: "Keyword optimization so tech recruiters in Berlin, Munich, Frankfurt, and remote teams find your profile.",
                  },
                  {
                    title: "3. GitHub Project Portfolio",
                    desc: "Clean, documented repositories with READMEs, live demos, and architecture diagrams.",
                  },
                  {
                    title: "4. 1-on-1 Mock Interviews",
                    desc: "Realistic technical coding/whiteboard interviews and HR behavioral coaching in English.",
                  },
                ]
              : [
                  {
                    title: "1. Lebenslauf nach deutschem Standard",
                    desc: "ATS-optimierter tabellarischer Lebenslauf mit Fokus auf deine Praxisprojekte und Zertifizierungen.",
                  },
                  {
                    title: "2. LinkedIn- & XING-Optimierung",
                    desc: "Gezielte Positionierung für Recruiter und Personalberatungen im deutschsprachigen Raum.",
                  },
                  {
                    title: "3. GitHub-Projektportfolio",
                    desc: "Sauber dokumentierte Capstone-Projekte, die deine praktischen Fähigkeiten belegen.",
                  },
                  {
                    title: "4. 1:1-Interviewtraining",
                    desc: "Simulation von technischen Fachgesprächen und HR-Interviews mit individuellem Feedback.",
                  },
                ]
            ).map((step, i) => (
              <div
                key={i}
                style={{ backgroundColor: SOFT_BG }}
                className="rounded-2xl p-6 border border-gray-200"
              >
                <h3 className="text-base font-bold text-[#1a1d2e] mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ============================================================================
   4. EVENTS PAGE (/events/ in DE & EN) — Upgraded with SVG Icons & Event Schema
   ============================================================================ */
export function EventsPage() {
  const { lang } = useLanguage();
  const isEn = lang === "en";
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regSuccess, setRegSuccess] = useState(false);

  const metaTitle = isEn
    ? "Free IT Webinars, Workshops & Info Sessions | Clarusway"
    : "Kostenlose IT-Webinare, Workshops & Info-Events | Clarusway";

  const metaDescription = isEn
    ? "Join free live online IT workshops, Bildungsgutschein Q&A sessions, and open classes in English at Clarusway Germany."
    : "Nimm kostenlos an unseren Live-Webinaren zu Bildungsgutschein, AI Engineering, Cyber Security, AWS Cloud und Full Stack teil.";

  const events = isEn
    ? [
        {
          id: "bgs-qa",
          title: "Bildungsgutschein Q&A for Expats: How to Get 100% Funding",
          date: "2026-07-23",
          displayDate: "July 23, 2026",
          time: "18:00 – 19:15 CET",
          tag: "Funding Info Session",
          desc: "Learn step by step how to prepare for your Agentur für Arbeit or Jobcenter appointment and receive your German Maßnahmeangebot.",
        },
        {
          id: "ai-workshop",
          title: "Hands-On Workshop: Building Your First Agentic AI Workflow",
          date: "2026-07-30",
          displayDate: "July 30, 2026",
          time: "18:30 – 20:00 CET",
          tag: "Live Workshop",
          desc: "Discover how Python, RAG, and autonomous AI agents work in practice and meet the instructors of the AI Engineering Bootcamp.",
        },
        {
          id: "cyber-soc",
          title: "Inside a Security Operations Center (SOC): Live SIEM Demo",
          date: "2026-08-06",
          displayDate: "August 6, 2026",
          time: "18:00 – 19:30 CET",
          tag: "Live Demo",
          desc: "Watch how SOC Analysts detect and contain a live cyber attack and learn about the 4-module Cyber Security Course.",
        },
        {
          id: "aws-cloud",
          title: "Cloud & DevOps Career Night: AWS, Kubernetes & Terraform",
          date: "2026-08-13",
          displayDate: "August 13, 2026",
          time: "18:00 – 19:30 CET",
          tag: "Career Night",
          desc: "Explore Cloud Engineer and DevOps salaries in Germany and how to prepare for the AWS SAA-C03 certification.",
        },
      ]
    : [
        {
          id: "bgs-qa",
          title: "Info-Abend: In 5 Schritten zum Bildungsgutschein",
          date: "2026-07-23",
          displayDate: "23. Juli 2026",
          time: "18:00 – 19:15 Uhr",
          tag: "Förder-Infoabend",
          desc: "Erfahre Schritt für Schritt, wie du deinen Antrag bei Agentur für Arbeit oder Jobcenter optimal vorbereitest.",
        },
        {
          id: "ai-workshop",
          title: "Praxis-Workshop: Einstieg in Data Science & Agentic AI",
          date: "2026-07-30",
          displayDate: "30. Juli 2026",
          time: "18:30 – 20:00 Uhr",
          tag: "Live-Workshop",
          desc: "Erlebe live, wie Python, RAG und moderne KI-Agenten zusammenarbeiten und lerne die Dozenten kennen.",
        },
        {
          id: "cyber-soc",
          title: "Live-Einblick ins Security Operations Center (SOC)",
          date: "2026-08-06",
          displayDate: "06. August 2026",
          time: "18:00 – 19:30 Uhr",
          tag: "Cyber-Lab Demo",
          desc: "Sieh live, wie SOC Analysts Angriffe im SIEM erkennen, und informiere dich über die Cyber Security Weiterbildung.",
        },
        {
          id: "aws-cloud",
          title: "Cloud & DevOps Karriere-Abend: AWS, Kubernetes & Terraform",
          date: "2026-08-13",
          displayDate: "13. August 2026",
          time: "18:00 – 19:30 Uhr",
          tag: "Karriere-Abend",
          desc: "Berufsbilder, Gehälter und Zertifizierungspfade rund um AWS Solutions Architect und DevOps Engineering.",
        },
      ];

  const schema = events.map((ev) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    name: ev.title,
    startDate: `${ev.date}T18:00:00+02:00`,
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "VirtualLocation",
      url: isEn ? "https://en.clarusway.de/events/" : "https://clarusway.de/events/",
    },
    organizer: {
      "@type": "EducationalOrganization",
      name: "Clarusway GmbH",
    },
    description: ev.desc,
  }));

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: DARK }} className="bg-white">
      <SeoHead
        title={metaTitle}
        description={metaDescription}
        path="/events/"
        schema={schema}
      />
      <Breadcrumb items={[{ label: "Events" }]} />

      <section
        style={{ background: "linear-gradient(135deg, #fff8f9 0%, #fff 60%)" }}
        className="py-14 border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1a1d2e] mb-4">
              {isEn
                ? "Free IT webinars, workshops and info sessions in English"
                : "Kostenlose IT-Webinare, Workshops & Info-Events"}
            </h1>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              {isEn
                ? "Meet Clarusway instructors and career advisors live online, test the hands-on labs, and get your questions about the Bildungsgutschein answered."
                : "Lerne unsere Dozenten und Studienberater live kennen, erlebe unsere Praxis-Labs und stelle deine Fragen rund um Förderung und Berufseinstieg."}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e] mb-8">
            {isEn ? "Upcoming live online events" : "Kommende Online-Veranstaltungen"}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {events.map((ev) => (
              <div
                key={ev.id}
                style={{ backgroundColor: SOFT_BG }}
                className="rounded-2xl p-6 border border-gray-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#fde8ef] text-[#e51a59]">
                      {ev.tag}
                    </span>
                    <span className="text-xs font-semibold text-emerald-700">
                      {isEn ? "Free · Online" : "Kostenlos · Online"}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1d2e] mb-2">{ev.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
                    {ev.desc}
                  </p>
                  <div className="flex flex-wrap gap-4 text-xs text-gray-600 mb-5">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarIcon className="w-3.5 h-3.5 text-[#e51a59]" />
                      {ev.displayDate}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <ClockIcon className="w-3.5 h-3.5 text-[#e51a59]" />
                      {ev.time}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedEvent(ev.title);
                    setRegSuccess(false);
                  }}
                  style={{ backgroundColor: PRIMARY }}
                  className="inline-flex items-center justify-center gap-2 text-white font-semibold px-5 py-2.5 rounded-xl text-xs sm:text-sm hover:opacity-95 cursor-pointer"
                >
                  <span>{isEn ? "Register for free" : "Kostenlos anmelden"}</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {selectedEvent && (
            <div className="mt-10 bg-[#1a1d2e] text-white rounded-2xl p-7 max-w-2xl">
              <p className="text-xs font-bold text-[#f472b6] uppercase mb-1">
                {isEn ? "Event Registration" : "Event-Anmeldung"}
              </p>
              <p className="text-lg font-bold mb-4">{selectedEvent}</p>
              {regSuccess ? (
                <p className="text-emerald-300 text-sm font-semibold">
                  {isEn
                    ? "✓ You are registered! Check your email for the Zoom link."
                    : "✓ Du bist angemeldet! Der Zugangslink wurde an deine E-Mail gesendet."}
                </p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setRegSuccess(true);
                  }}
                  className="grid sm:grid-cols-3 gap-3"
                >
                  <input
                    type="text"
                    required
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    placeholder={isEn ? "Your name *" : "Dein Name *"}
                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white"
                  />
                  <input
                    type="email"
                    required
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    placeholder={isEn ? "Email *" : "E-Mail *"}
                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white"
                  />
                  <button
                    type="submit"
                    style={{ backgroundColor: PRIMARY }}
                    className="text-white font-semibold px-5 py-2.5 rounded-xl text-sm cursor-pointer"
                  >
                    {isEn ? "Confirm seat" : "Platz sichern"}
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

/* ============================================================================
   5. CONSULTATION / APPLICATION PAGE (/beratung/ & /application-form/)
   ============================================================================ */
export function ConsultationPage() {
  const { lang } = useLanguage();
  const isEn = lang === "en";
  const currentPath = isEn ? "/application-form/" : "/beratung/";

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [courseInterest, setCourseInterest] = useState("ai-engineering");
  const [fundingStatus, setFundingStatus] = useState("agentur-jobcenter");
  const [submitted, setSubmitted] = useState(false);

  const metaTitle = isEn
    ? "Free IT Career Consultation in English | Clarusway"
    : "Kostenlose Beratung zur IT-Weiterbildung | Clarusway";

  const metaDescription = isEn
    ? "Book your free 1-on-1 IT career consultation in English at Clarusway Germany. Get your official German Maßnahmeangebot for a Bildungsgutschein within 24 hours."
    : "Buche deine kostenlose und unverbindliche Studienberatung bei Clarusway. Wir prüfen deinen Anspruch auf einen Bildungsgutschein und erstellen dein Angebot in 24 Stunden.";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) return;
    trackClaruswayEvent("beratung_angefragt", {
      course: courseInterest,
      funding: fundingStatus,
      lang,
    });
    setSubmitted(true);
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: DARK }} className="bg-white">
      <SeoHead
        title={metaTitle}
        description={metaDescription}
        path={currentPath}
        noindex={submitted}
      />
      <Breadcrumb
        items={[
          { label: isEn ? "Free Consultation" : "Kostenlose Beratung" },
        ]}
      />

      <section
        style={{ background: "linear-gradient(135deg, #fff8f9 0%, #fff 60%)" }}
        className="py-14 border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left Info */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 bg-[#fde8ef] text-[#e51a59] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-4">
                <ShieldCheckIcon className="w-4 h-4" />
                <span>
                  {isEn
                    ? "100% Free & Non-Binding · German Paperwork in 24h"
                    : "100 % Kostenlos & Unverbindlich · Maßnahmeangebot in 24h"}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-[#1a1d2e] mb-4 leading-tight">
                {isEn
                  ? "Book your free IT career consultation in English"
                  : "Kostenlose Beratung buchen: Dein Weg in die IT"}
              </h1>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                {isEn
                  ? "In a personal 1-on-1 call in English, a Clarusway advisor helps you choose the right IT bootcamp or module combination and prepares all German AZAV documents for your Agentur für Arbeit or Jobcenter appointment."
                  : "Im persönlichen 1:1-Beratungsgespräch finden wir heraus, welcher IT-Kurs oder welches Einzelmodul optimal zu deinem Vorwissen passt, und bereiten alle Unterlagen für deinen Bildungsgutschein vor."}
              </p>

              <h2 className="text-xl font-bold text-[#1a1d2e] mb-4">
                {isEn
                  ? "What happens during the consultation?"
                  : "Was passiert im Beratungsgespräch?"}
              </h2>

              <div className="space-y-4">
                {(isEn
                  ? [
                      {
                        title: "1. Career & Background Check",
                        desc: "Assess your goals and whether you should start at Module 1 or take a direct-entry technical assessment.",
                      },
                      {
                        title: "2. Bildungsgutschein & AVGS Check",
                        desc: "Verify your funding eligibility with the Agentur für Arbeit, Jobcenter, or QCG.",
                      },
                      {
                        title: "3. Official German Maßnahmeangebot in 24h",
                        desc: "Receive the complete AZAV course offer in German ready to hand to your caseworker.",
                      },
                    ]
                  : [
                      {
                        title: "1. Individuelle Potenzial- & Kurswahl",
                        desc: "Wir klären, ob du bei Modul 1 startest oder mit Vorkenntnissen direkt in ein höheres Modul einsteigst.",
                      },
                      {
                        title: "2. Prüfung deiner Fördermöglichkeiten",
                        desc: "Bildungsgutschein (Arbeitsagentur / Jobcenter), AVGS oder Qualifizierungschancengesetz.",
                      },
                      {
                        title: "3. Offizielles Maßnahmeangebot innerhalb von 24h",
                        desc: "Du erhältst alle AZAV-Unterlagen und Argumentationshilfen für deinen Beratungstermin.",
                      },
                    ]
                ).map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-4 border border-gray-200/80 shadow-2xs"
                  >
                    <h3 className="text-sm font-bold text-[#1a1d2e] mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-7 sm:p-9 border border-gray-200 shadow-xl">
                {submitted ? (
                  <div className="text-center py-6">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                      <CheckCircleIcon className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#1a1d2e] mb-2">
                      {isEn
                        ? "Thank you for your consultation request!"
                        : "Vielen Dank für deine Anfrage!"}
                    </h2>
                    <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                      {isEn
                        ? `A Clarusway career advisor will contact you at ${email} within 24 hours to schedule your English consultation and prepare your German Maßnahmeangebot.`
                        : `Unsere Studienberatung meldet sich innerhalb von 24 Stunden unter ${email} bei dir, um dein persönliches Maßnahmeangebot für den Bildungsgutschein fertigzustellen.`}
                    </p>
                    <Link
                      to="/bildungsgutschein/"
                      style={{ backgroundColor: PRIMARY }}
                      className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full text-xs sm:text-sm"
                    >
                      <span>
                        {isEn
                          ? "Read the Bildungsgutschein preparation guide"
                          : "Zum Bildungsgutschein-Leitfaden"}
                      </span>
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <p className="text-lg font-bold text-[#1a1d2e] mb-1">
                      {isEn
                        ? "Request your free consultation & course offer"
                        : "Jetzt kostenloses Beratungsgespräch anfragen"}
                    </p>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        {isEn ? "Full Name *" : "Vor- und Nachname *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder={isEn ? "e.g., Alex Morgan" : "z. B. Max Mustermann"}
                        className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#e51a59]"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          {isEn ? "Email Address *" : "E-Mail-Adresse *"}
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@example.com"
                          className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#e51a59]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          {isEn ? "Phone Number *" : "Telefonnummer *"}
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+49 170 ..."
                          className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#e51a59]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        {isEn ? "Program of Interest" : "Gewünschter IT-Fachbereich"}
                      </label>
                      <select
                        value={courseInterest}
                        onChange={(e) => setCourseInterest(e.target.value)}
                        className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-[#e51a59]"
                      >
                        <option value="ai-engineering">
                          AI Engineering & Data Science (32 {isEn ? "Weeks" : "Wochen"})
                        </option>
                        <option value="data-analytics">
                          Data Analytics & BI (13 {isEn ? "Weeks" : "Wochen"})
                        </option>
                        <option value="full-stack">
                          AI-Assisted Full Stack Web Development
                        </option>
                        <option value="cyber-security">
                          Cyber Security (SOC & Cloud Security)
                        </option>
                        <option value="aws-devops">AWS & DevOps Engineering</option>
                        <option value="sdet">Software Testing (SDET)</option>
                        <option value="kubernetes-ckad">Kubernetes CKAD (4 {isEn ? "Weeks" : "Wochen"})</option>
                        <option value="it-orientation">
                          {isEn ? "Not sure yet — IT Orientation Course" : "Noch unsicher — IT-Orientierungskurs"}
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        {isEn ? "Preferred Funding Option" : "Geplante Finanzierung"}
                      </label>
                      <select
                        value={fundingStatus}
                        onChange={(e) => setFundingStatus(e.target.value)}
                        className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-[#e51a59]"
                      >
                        <option value="agentur-jobcenter">
                          {isEn
                            ? "Bildungsgutschein / AVGS (Agentur für Arbeit or Jobcenter)"
                            : "Bildungsgutschein / AVGS (Agentur für Arbeit oder Jobcenter)"}
                        </option>
                        <option value="qcg">
                          {isEn
                            ? "Qualifizierungschancengesetz (Employed)"
                            : "Qualifizierungschancengesetz (Berufstätig)"}
                        </option>
                        <option value="self-pay">
                          {isEn ? "Self-Pay / Installments" : "Selbstzahler / Ratenzahlung"}
                        </option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      style={{ backgroundColor: PRIMARY }}
                      className="w-full inline-flex items-center justify-center gap-2 text-white font-semibold px-6 py-3.5 rounded-full text-sm shadow-lg hover:opacity-95 cursor-pointer"
                    >
                      <span>
                        {isEn ? "Book free consultation" : "Kostenlose Beratung anfordern"}
                      </span>
                      <ArrowRightIcon className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ============================================================================
   6. THANK YOU PAGE (/danke/ & /thank-you/) — Always noindex!
   ============================================================================ */
export function ThankYouPage() {
  const { lang } = useLanguage();
  const isEn = lang === "en";
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: DARK }} className="bg-white py-20">
      <SeoHead
        title={isEn ? "Thank You | Clarusway" : "Vielen Dank | Clarusway"}
        description="Confirmation page"
        path={isEn ? "/thank-you/" : "/danke/"}
        noindex={true}
      />
      <div className="max-w-xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold text-[#1a1d2e] mb-3">
          {isEn ? "Thank you for your request!" : "Vielen Dank für deine Anfrage!"}
        </h1>
        <p className="text-gray-600 text-sm sm:text-base mb-6">
          {isEn
            ? "A Clarusway advisor will contact you within 24 hours."
            : "Unsere Studienberatung meldet sich innerhalb von 24 Stunden bei dir."}
        </p>
        <Link
          to="/"
          style={{ backgroundColor: PRIMARY }}
          className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full text-sm"
        >
          <span>{isEn ? "Back to homepage" : "Zurück zur Startseite"}</span>
        </Link>
      </div>
    </div>
  );
}

/* ============================================================================
   7. REFER A FRIEND PAGE (/freunde-werben/ & /refer-a-friend/)
   ============================================================================ */
export function ReferFriendPage() {
  const { lang } = useLanguage();
  const isEn = lang === "en";
  const currentPath = isEn ? "/refer-a-friend/" : "/freunde-werben/";

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: DARK }} className="bg-white">
      <SeoHead
        title={
          isEn
            ? "Refer a Friend & Earn €250 | Clarusway"
            : "Freunde werben & 250 € Prämie sichern | Clarusway"
        }
        description={
          isEn
            ? "Recommend Clarusway to friends in Germany and receive a €250 referral bonus once they start their IT course."
            : "Empfiehl Clarusway weiter und sichere dir 250 € Prämie für jede erfolgreiche Kursteilnahme."
        }
        path={currentPath}
      />
      <Breadcrumb
        items={[{ label: isEn ? "Refer a Friend" : "Freunde werben" }]}
      />
      <section style={{ backgroundColor: SOFT_BG }} className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1a1d2e] mb-4">
            {isEn
              ? "Refer a friend and earn a €250 reward"
              : "Freunde werben und bis zu 250 € Prämie sichern"}
          </h1>
          <p className="text-gray-700 text-base leading-relaxed mb-8">
            {isEn
              ? "Know someone in Germany who wants to launch an IT career in English with a Bildungsgutschein? Refer them to Clarusway and receive a €250 referral reward after they enroll."
              : "Du kennst jemanden, der mit einem Bildungsgutschein in die IT starten möchte? Empfiehl Clarusway weiter und erhalte nach erfolgreichem Kursstart eine Empfehlungsprämie von 250 €."}
          </p>
          <Link
            to={isEn ? "/contact/" : "/kontakt/"}
            style={{ backgroundColor: PRIMARY }}
            className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full text-sm"
          >
            <span>{isEn ? "Submit a referral" : "Jetzt Empfehlung einreichen"}</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

/* ============================================================================
   8. CONTACT PAGE (/kontakt/ & /contact/)
   ============================================================================ */
export function ContactPage() {
  const { lang } = useLanguage();
  const isEn = lang === "en";
  const currentPath = isEn ? "/contact/" : "/kontakt/";

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: DARK }} className="bg-white">
      <SeoHead
        title={isEn ? "Contact Clarusway Germany | Clarusway" : "Kontakt | Clarusway Deutschland"}
        description={
          isEn
            ? "Contact Clarusway GmbH in Neuss, Germany: phone +49 2131 776 2749, email info@clarusway.de, or book a free consultation."
            : "Kontaktiere die Clarusway GmbH in Neuss: Telefon +49 2131 776 2749, E-Mail info@clarusway.de oder kostenlose Studienberatung."
        }
        path={currentPath}
      />
      <Breadcrumb items={[{ label: isEn ? "Contact" : "Kontakt" }]} />

      <section style={{ backgroundColor: SOFT_BG }} className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1a1d2e] mb-6">
            {isEn ? "Contact Clarusway Germany" : "Kontakt zu Clarusway Deutschland"}
          </h1>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <MapPinIcon className="w-6 h-6 text-[#e51a59] mb-3" />
              <h2 className="text-lg font-bold text-[#1a1d2e] mb-1">
                {isEn ? "Office Address" : "Standort Deutschland"}
              </h2>
              <p className="text-sm text-gray-600">
                Clarusway GmbH
                <br />
                Bataver Str. 84
                <br />
                41462 Neuss, Germany
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <PhoneIcon className="w-6 h-6 text-[#e51a59] mb-3" />
              <h2 className="text-lg font-bold text-[#1a1d2e] mb-1">
                {isEn ? "Phone & Advisory Hours" : "Telefon & Beratungszeiten"}
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                <a href="tel:+4921317762749" className="text-[#e51a59] font-semibold">
                  +49 2131 776 2749
                </a>
              </p>
              <p className="text-xs text-gray-500">
                {isEn ? "Mon–Fri, 09:00–18:00 CET" : "Mo–Fr, 09:00–18:00 Uhr"}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <MailIcon className="w-6 h-6 text-[#e51a59] mb-3" />
              <h2 className="text-lg font-bold text-[#1a1d2e] mb-1">E-Mail</h2>
              <p className="text-sm text-gray-600 mb-3">
                <a href="mailto:info@clarusway.de" className="text-[#e51a59] font-semibold">
                  info@clarusway.de
                </a>
              </p>
              <Link
                to={isEn ? "/application-form/" : "/beratung/"}
                className="text-xs font-semibold text-[#1a1d2e] underline hover:text-[#e51a59]"
              >
                {isEn ? "→ Book a free consultation" : "→ Kostenlose Beratung buchen"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ============================================================================
   9. IMPRINT & PRIVACY POLICY (/impressum/, /imprint/, /datenschutz/, /privacy-policy/)
   ============================================================================ */
export function ImprintPage() {
  const { lang } = useLanguage();
  const isEn = lang === "en";
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: DARK }} className="bg-white py-14">
      <SeoHead
        title={isEn ? "Imprint (Impressum) | Clarusway" : "Impressum | Clarusway Deutschland"}
        description="Legal disclosure according to § 5 DDG for Clarusway GmbH, Neuss."
        path={isEn ? "/imprint/" : "/impressum/"}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold mb-6">
          {isEn ? "Imprint (Impressum)" : "Impressum"}
        </h1>
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <h2 className="text-lg font-bold text-[#1a1d2e]">
            {isEn ? "Information pursuant to § 5 DDG" : "Angaben gemäß § 5 DDG"}
          </h2>
          <p>
            <strong>Clarusway GmbH</strong>
            <br />
            Bataver Str. 84
            <br />
            41462 Neuss, Deutschland
          </p>
          <p>
            <strong>{isEn ? "Contact:" : "Kontakt:"}</strong>
            <br />
            Telefon: +49 2131 776 2749
            <br />
            E-Mail: info@clarusway.de
          </p>
          <p>
            <strong>{isEn ? "Certification:" : "Zertifizierung:"}</strong>
            <br />
            {isEn
              ? "AZAV-certified continuing education provider in Germany."
              : "Nach AZAV zugelassener Träger für die Förderung der beruflichen Weiterbildung."}
          </p>
        </div>
      </div>
    </div>
  );
}

export function PrivacyPage() {
  const { lang } = useLanguage();
  const isEn = lang === "en";
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: DARK }} className="bg-white py-14">
      <SeoHead
        title={isEn ? "Privacy Policy (Datenschutz) | Clarusway" : "Datenschutzerklärung | Clarusway"}
        description="GDPR / DSGVO Privacy Policy of Clarusway GmbH."
        path={isEn ? "/privacy-policy/" : "/datenschutz/"}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold mb-6">
          {isEn ? "Privacy Policy (GDPR / DSGVO)" : "Datenschutzerklärung"}
        </h1>
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <h2 className="text-lg font-bold text-[#1a1d2e]">
            {isEn ? "1. Controller" : "1. Verantwortliche Stelle"}
          </h2>
          <p>
            Clarusway GmbH, Bataver Str. 84, 41462 Neuss, Deutschland (info@clarusway.de).
          </p>
          <h2 className="text-lg font-bold text-[#1a1d2e]">
            {isEn
              ? "2. Consultation & Syllabus Requests"
              : "2. Beratungsanfragen und Lehrplan-Downloads"}
          </h2>
          <p>
            {isEn
              ? "Personal data submitted through consultation or syllabus forms is processed in accordance with Art. 6(1)(b) GDPR exclusively to prepare your course offer and advise you on state funding."
              : "Die im Rahmen einer Beratungsanfrage oder eines Lehrplan-Downloads eingegebenen Daten werden gemäß Art. 6 Abs. 1 lit. b DSGVO ausschließlich zur Erstellung deines Maßnahmeangebots und zur Studienberatung verarbeitet."}
          </p>
        </div>
      </div>
    </div>
  );
}
