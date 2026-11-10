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
    ? "About Clarusway | AZAV-Certified IT Training in Germany"
    : "Über Clarusway, AZAV-zertifizierter Bildungsträger | Clarusway";

  const metaDescription = isEn
    ? "Clarusway GmbH (Neuss, Germany) is an AZAV-certified IT training provider and AWS Select Tier Partner offering live online IT bootcamps."
    : "Clarusway GmbH mit Sitz in Neuss ist ein AZAV-zertifizierter Bildungsträger und offizieller AWS Select Tier Partner für praxisnahe IT-Weiterbildungen.";

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", color: DARK }} className="bg-white">
      <SeoHead title={metaTitle} description={metaDescription} path={currentPath} />
      <Breadcrumb items={[{ label: isEn ? "About Us" : "Über uns" }]} />

      <section
        style={{ background: "linear-gradient(135deg, #fff8f9 0%, #fff 60%)" }}
        className="py-14 border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#fde8ef] text-[#e51a59] text-xs font-medium px-3.5 py-1.5 rounded-full mb-4">
              <ShieldCheckIcon className="w-4 h-4" />
              <span>Clarusway GmbH · Neuss, Germany</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-medium tracking-[-0.025em] text-[#1a1d2e] mb-4 leading-tight">
              {isEn ? "About Clarusway" : "Über Clarusway"}
            </h1>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              {isEn
                ? "Clarusway GmbH, headquartered in Neuss, is an officially AZAV-certified continuing education provider in Germany and an Amazon Web Services (AWS) Select Tier Consulting Partner. Clarusway prepares career changers and tech professionals for roles in AI Engineering, Data Analytics, Full Stack Development, Cyber Security, Cloud/DevOps, and Software Testing."
                : "Die Clarusway GmbH mit Sitz in Neuss ist ein staatlich nach AZAV zugelassener Bildungsträger und offizieller AWS Select Tier Consulting Partner. Wir qualifizieren Quereinsteiger und Fachkräfte im Live-Online-Unterricht für gefragte IT-Berufe in Deutschland."}
            </p>
            <Link
              to={consultPath}
              style={{ backgroundColor: PRIMARY }}
              className="inline-flex items-center gap-2 text-white font-medium px-7 py-3.5 rounded-full text-sm hover:opacity-95"
            >
              <span>{isEn ? "Free consultation" : "Kostenlose Beratung"}</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* H2: AZAV certification */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] text-[#1a1d2e] mb-8">
            {isEn ? "AZAV certification" : "AZAV-Zertifizierung"}
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
                <h3 className="text-lg font-medium text-[#1a1d2e] mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* H2: How teaching works (instructors, mentors) */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] text-[#1a1d2e] mb-8">
            {isEn
              ? "How teaching works (instructors, mentors)"
              : "Wie das Lernen funktioniert (Dozenten und Mentoren)"}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: isEn ? "Lead Instructors & Practitioners" : "Lead-Dozenten aus der Praxis",
                desc: isEn
                  ? "Daily live online sessions led by senior engineers, cloud architects, and data scientists actively working in tech."
                  : "Täglicher Live-Online-Unterricht mit praxiserfahrenen Software-Ingenieuren, Cloud-Architekten und Data Scientists.",
              },
              {
                title: isEn ? "Dedicated Mentors & Tutors" : "Persönliche Mentoren & Tutors",
                desc: isEn
                  ? "Continuous technical assistance during hands-on lab hours, milestone project feedback, and troubleshooting."
                  : "Durchgehende Betreuung bei praktischen Coding-Labs, Code Reviews für Meilenstein-Projekte und individuelle Unterstützung.",
              },
              {
                title: isEn ? "Multilingual Cohorts" : "Mehrsprachiger Unterricht",
                desc: isEn
                  ? "Instruction available in English, German, or Turkish cohorts to facilitate deep understanding of complex technical concepts."
                  : "Unterricht in Kohorten auf Deutsch, Englisch oder Türkisch für optimalen Lernerfolg und barrierefreien Wissensaufbau.",
              },
            ].map((card, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs">
                <h3 className="text-base font-medium text-[#1a1d2e] mb-2">{card.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* H2: Clarusway in numbers */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] text-[#1a1d2e] mb-8 text-center">
            {isEn ? "Clarusway in numbers" : "Clarusway in Zahlen"}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { number: "90%+", label: isEn ? "Course Completion Rate" : "Erfolgreiche Abschlussquote" },
              { number: "4.9 / 5", label: isEn ? "Rating on Course Report & Career Karma" : "Bewertung auf Course Report & Career Karma" },
              { number: "100%", label: isEn ? "Funded with Bildungsgutschein" : "Förderung mit Bildungsgutschein" },
              { number: "Max. 15", label: isEn ? "Participants per Live Cohort" : "Teilnehmende pro Live-Klasse" },
            ].map((stat, i) => (
              <div key={i} style={{ backgroundColor: SOFT_BG }} className="rounded-2xl p-7 border border-gray-200">
                <div className="text-3xl sm:text-4xl font-medium tracking-tight text-[#e51a59] mb-2">{stat.number}</div>
                <div className="text-xs sm:text-sm font-medium text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* H2: Location and contact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] text-[#1a1d2e] mb-8">
            {isEn ? "Location and contact" : "Standort und Kontakt"}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs">
              <h3 className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">
                {isEn ? "Campus & Headquarters" : "Hauptsitz Deutschland"}
              </h3>
              <p className="text-sm text-gray-800 font-medium mb-1">Clarusway GmbH</p>
              <p className="text-xs text-gray-600 leading-relaxed">Bataverstraße 84<br />41462 Neuss, Germany</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs">
              <h3 className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">
                {isEn ? "Email & Inquiries" : "E-Mail & Beratung"}
              </h3>
              <a href="mailto:info@clarusway.de" className="text-sm text-[#e51a59] font-medium hover:underline block mb-1">
                info@clarusway.de
              </a>
              <p className="text-xs text-gray-600 leading-relaxed">
                {isEn ? "Official response within 24 hours" : "Antwort und Angebot innerhalb von 24 Stunden"}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs">
              <h3 className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">
                {isEn ? "Phone Support" : "Telefonische Beratung"}
              </h3>
              <a href="tel:+4921317762749" className="text-sm text-[#e51a59] font-medium hover:underline block mb-1">
                +49 2131 7762749
              </a>
              <p className="text-xs text-gray-600 leading-relaxed">
                {isEn ? "Mon – Fri, 09:00 – 18:00 CET" : "Mo – Fr, 09:00 – 18:00 Uhr"}
              </p>
            </div>
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
    ? "Graduate Stories and Reviews | Clarusway"
    : "Clarusway Erfahrungen und Bewertungen | Clarusway";

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

  const programStories = [
    {
      program: isEn ? "AI Engineering Bootcamp" : "AI Engineer Weiterbildung",
      to: isEn ? "/it-courses/ai-engineering/" : "/it-kurse/ai-engineer-weiterbildung/",
      story: isEn
        ? "From marketing analyst to Junior AI Engineer building enterprise RAG pipelines in Frankfurt."
        : "Vom Marketing-Analysten zum Junior AI Engineer für RAG-Systeme in Frankfurt am Main.",
    },
    {
      program: isEn ? "Full Stack Web Development" : "Full Stack Entwickler Weiterbildung",
      to: isEn ? "/it-courses/full-stack-developer/" : "/it-kurse/full-stack-entwickler-weiterbildung/",
      story: isEn
        ? "From non-technical background to frontend and full-stack developer in a Berlin tech scale-up."
        : "Vom Quereinsteiger ohne Vorkenntnisse zum Full Stack Entwickler in einem Berliner Tech-Scaleup.",
    },
    {
      program: isEn ? "Cyber Security Analyst" : "Cyber Security Weiterbildung",
      to: isEn ? "/it-courses/cyber-security/" : "/it-kurse/cyber-security-weiterbildung/",
      story: isEn
        ? "From system support to Tier-1 SOC Analyst in a managed security service provider in Munich."
        : "Vom First-Level-Support zum SOC Analysten bei einem IT-Sicherheitsdienstleister in München.",
    },
    {
      program: isEn ? "AWS Solutions Architect & DevOps" : "AWS & DevOps Weiterbildung",
      to: isEn ? "/it-courses/devops-aws/" : "/it-kurse/aws-devops-weiterbildung/",
      story: isEn
        ? "From IT support technician to Junior DevOps Engineer automating Kubernetes clusters in Cologne."
        : "Vom Systemadministrator zum Junior DevOps Engineer mit Kubernetes-Fokus in Köln.",
    },
  ];

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", color: DARK }} className="bg-white">
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
            <h1 className="text-3xl sm:text-4xl font-medium tracking-[-0.025em] text-[#1a1d2e] mb-4">
              {isEn ? "Clarusway success stories" : "Erfahrungen und Erfolgsgeschichten von Absolventen"}
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
              <span className="text-xs font-medium text-[#1a1d2e]">
                4.9 / 5 · Course Report & Career Karma
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* H2: Reviews on independent platforms */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] text-[#1a1d2e] mb-8">
            {isEn ? "Reviews on independent platforms" : "Bewertungen auf unabhängigen Plattformen"}
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
                    <h3 className="text-sm font-medium text-[#1a1d2e]">{r.name}</h3>
                    <p className="text-xs text-gray-500">{r.track}</p>
                  </div>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-[#e51a59] hover:underline inline-flex items-center gap-1"
                  >
                    <span>{r.platform}</span>
                    <ExternalLinkIcon className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* H2: Graduate stories by program */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] text-[#1a1d2e] mb-8">
            {isEn ? "Graduate stories by program" : "Erfolgsgeschichten nach Kurs"}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {programStories.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-medium text-[#1a1d2e] mb-2">{item.program}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">{item.story}</p>
                </div>
                <Link to={item.to} className="text-xs font-medium text-[#e51a59] hover:underline inline-flex items-center gap-1">
                  <span>{isEn ? "View program" : "Zum Kurs"}</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to={consultPath}
              style={{ backgroundColor: PRIMARY }}
              className="inline-flex items-center gap-2 text-white font-medium px-7 py-3.5 rounded-full text-sm hover:opacity-95"
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
    ? "Career Management for Clarusway Graduates | Clarusway"
    : "Karriere-Management für Clarusway Absolventen | Clarusway";

  const metaDescription = isEn
    ? "Support for Clarusway graduates: Technical interview preparation, project mentoring, and matching with tech employers in Germany."
    : "Unterstützung für Clarusway-Absolventen: Vorbereitung auf Fachgespräche, Portfolio-Mentoring und Vermittlung an IT-Arbeitgeber in Deutschland.";

  const careerFaqs = isEn
    ? [
        {
          q: "When does Career Management support begin?",
          a: "Career coaching starts during your course with portfolio reviews and continues intensively until and throughout your job placement in Germany.",
        },
        {
          q: "What does interview preparation include?",
          a: "Individual 1-on-1 mock interviews, technical coding assessments, whiteboard exercises, and presentation strategies for career transitions.",
        },
        {
          q: "How does matching with employers work?",
          a: "We connect qualified graduates directly with our network of partner companies, recruiters, and hiring managers in Germany.",
        },
      ]
    : [
        {
          q: "Wann beginnt die Unterstützung durch das Karriere-Management?",
          a: "Das Karriere-Coaching startet bereits während der Weiterbildung mit dem Aufbau des Portfolios und begleitet dich bis zum erfolgreichen Arbeitsvertrag.",
        },
        {
          q: "Was umfasst die Vorbereitung auf Fachgespräche?",
          a: "1:1-Simulationen technischer Interviews, Coding-Aufgaben, Whiteboard-Sessions und Strategien zur überzeugenden Präsentation deines Quereinstiegs.",
        },
        {
          q: "Wie funktioniert die Vermittlung an Arbeitgeber?",
          a: "Wir vernetzen Absolventen direkt mit Partnerunternehmen, Personalberatungen und Tech-Arbeitgebern aus unserem deutschen Netzwerk.",
        },
      ];

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", color: DARK }} className="bg-white">
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
            <h1 className="text-3xl sm:text-4xl font-medium tracking-[-0.025em] text-[#1a1d2e] mb-4">
              {isEn ? "Career Management Service" : "Karriere-Management"}
            </h1>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              {isEn
                ? "Every Clarusway bootcamp includes structured Career Management dedicated to preparing graduates for technical hiring processes in Germany."
                : "In jeder Clarusway-Weiterbildung ist unser strukturiertes Karriere-Management integriert — speziell abgestimmt auf Fachgespräche und Anforderungen deutscher IT-Teams."}
            </p>
            <Link
              to={consultPath}
              style={{ backgroundColor: PRIMARY }}
              className="inline-flex items-center gap-2 text-white font-medium px-7 py-3.5 rounded-full text-sm hover:opacity-95"
            >
              <span>{isEn ? "Free consultation" : "Kostenlose Beratung"}</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* H2: Support for graduates */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] text-[#1a1d2e] mb-8">
            {isEn ? "Support for graduates" : "Support für Absolventen"}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: isEn ? "Portfolio & Project Mentoring" : "Portfolio- & Projekt-Mentoring",
                desc: isEn
                  ? "Guidance on documenting real capstone projects with production architecture diagrams and live demos."
                  : "Unterstützung bei der professionellen Dokumentation deiner Capstone-Projekte mit Live-Demos und sauberem Code.",
              },
              {
                title: isEn ? "Professional Profile Positioning" : "Professionelle Profil-Positionierung",
                desc: isEn
                  ? "Optimizing your professional profile for recruiters and talent acquisition specialists across Germany."
                  : "Gezielte Positionierung deines Profils für Tech-Recruiter und Talent-Acquisition-Teams in Deutschland.",
              },
              {
                title: isEn ? "Dedicated Career Advisors" : "Persönliche Karriereberater",
                desc: isEn
                  ? "Continuous 1-on-1 advisory sessions until you successfully sign your employment contract."
                  : "Individuelle 1:1-Beratung durch erfahrene Coaches bis zum erfolgreichen Unterschreiben deines Arbeitsvertrags.",
              },
            ].map((p, i) => (
              <div key={i} style={{ backgroundColor: SOFT_BG }} className="rounded-2xl p-6 border border-gray-200">
                <h3 className="text-base font-medium text-[#1a1d2e] mb-2">{p.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* H2: Interview preparation */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] text-[#1a1d2e] mb-8">
            {isEn ? "Interview preparation" : "Vorbereitung auf Fachgespräche"}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: isEn ? "Technical Coding Challenges" : "Coding-Challenges & Live Coding",
                desc: isEn
                  ? "Practice algorithmic tasks, data structures, and framework-specific problems under realistic conditions."
                  : "Praxisnahes Training typischer Live-Coding-Aufgaben und fachspezifischer Fragestellungen.",
              },
              {
                title: isEn ? "Architecture & Whiteboard Sessions" : "Architektur- & System-Design",
                desc: isEn
                  ? "Learn how to communicate architectural decisions, trade-offs, and scalability during technical rounds."
                  : "Lerne, wie du Architekturentscheidungen, Tool-Auswahl und Systemstrukturen souverän begründest.",
              },
              {
                title: isEn ? "HR & Behavioral Mentoring" : "HR- & Verhaltensfragen",
                desc: isEn
                  ? "Master typical competency-based questions and articulate your transition to tech with confidence."
                  : "Strukturiere deine Antworten auf verhaltensorientierte Fragen und präsentiere deinen Quereinstieg überzeugend.",
              },
            ].map((card, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs">
                <h3 className="text-base font-medium text-[#1a1d2e] mb-2">{card.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* H2: Matching with employers */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] text-[#1a1d2e] mb-8">
            {isEn ? "Matching with employers" : "Vermittlung an Arbeitgeber"}
          </h2>

          <div className="bg-[#f6f7fb] rounded-3xl p-8 sm:p-10 border border-gray-200 max-w-4xl">
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
              {isEn
                ? "Clarusway maintains close partnerships with tech startups, consulting firms, and enterprise organizations across Germany. We introduce verified graduates directly to hiring managers looking for AI Engineers, Full Stack Developers, SOC Analysts, and Cloud Engineers."
                : "Clarusway pflegt direkte Kontakte zu IT-Beratungen, Tech-Startups und mittelständischen Unternehmen in ganz Deutschland. Wir stellen qualifizierte Absolventen direkt bei Teamleitern und Personalverantwortlichen vor."}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to={consultPath}
                style={{ backgroundColor: PRIMARY }}
                className="inline-flex items-center gap-2 text-white font-medium px-6 py-3 rounded-full text-sm hover:opacity-95"
              >
                <span>{isEn ? "Book free consultation" : "Kostenlose Beratung buchen"}</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* H2: Career Management FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] text-[#1a1d2e] text-center mb-8">
            {isEn ? "Career Management FAQ" : "Häufige Fragen zum Karriere-Management"}
          </h2>
          <div className="space-y-3.5">
            {careerFaqs.map((f, idx) => (
              <details
                key={idx}
                open={idx === 0}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                  <h3 className="text-sm sm:text-base font-medium text-[#1a1d2e]">{f.q}</h3>
                  <span style={{ color: PRIMARY }} className="w-7 h-7 rounded-full bg-[#fde8ef] flex items-center justify-center shrink-0 font-medium text-sm group-open:rotate-45 transition-transform">
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
    ? "Events and Info Sessions | Clarusway"
    : "Events und Infoveranstaltungen | Clarusway";

  const metaDescription = isEn
    ? "Join free live online IT workshops, Bildungsgutschein Q&A sessions, and open classes at Clarusway Germany."
    : "Nimm kostenlos an unseren Live-Webinaren zu Bildungsgutschein, AI Engineering, Cyber Security, AWS Cloud und Full Stack teil.";

  const upcomingEvents = isEn
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
          desc: "Explore Cloud Engineer and DevOps career pathways in Germany and how to prepare for the AWS SAA-C03 certification.",
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
          desc: "Berufsbilder, Praxiskompetenzen und Zertifizierungspfade rund um AWS Solutions Architect und DevOps Engineering.",
        },
      ];

  const pastEvents = isEn
    ? [
        {
          title: "Demo Day Winter 2026: AI & Full Stack Capstone Projects",
          date: "May 2026",
          desc: "Graduates presented live multi-agent AI assistants and cloud-native applications to tech hiring partners.",
        },
        {
          title: "Hands-on Kubernetes: Deploying Microservices with Helm",
          date: "April 2026",
          desc: "Live CNCF exam walkthrough and container orchestration troubleshooting workshop.",
        },
      ]
    : [
        {
          title: "Demo Day Winter 2026: Abschluss-Präsentationen der IT-Projekte",
          date: "Mai 2026",
          desc: "Absolventen präsentierten Multi-Agenten-KI-Assistenten und Full-Stack-Web-Apps vor Unternehmenspartnern.",
        },
        {
          title: "Hands-on Kubernetes: Microservices und Helm im Praxistest",
          date: "April 2026",
          desc: "Live-Demonstration realer Cluster-Szenarien und Vorbereitung auf die CKAD-Zertifizierung.",
        },
      ];

  const schema = upcomingEvents.map((ev) => ({
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
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", color: DARK }} className="bg-white">
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
            <h1 className="text-3xl sm:text-4xl font-medium tracking-[-0.025em] text-[#1a1d2e] mb-4">
              {isEn ? "Info sessions and events" : "Events und Infoveranstaltungen"}
            </h1>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              {isEn
                ? "Meet Clarusway instructors and career advisors live online, test the hands-on labs, and get your questions about the Bildungsgutschein answered."
                : "Lerne unsere Dozenten und Studienberater live kennen, erlebe unsere Praxis-Labs und stelle deine Fragen rund um Förderung und Berufseinstieg."}
            </p>
          </div>
        </div>
      </section>

      {/* H2: Upcoming info sessions */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] text-[#1a1d2e] mb-8">
            {isEn ? "Upcoming info sessions" : "Kommende Events"}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((ev) => (
              <div
                key={ev.id}
                style={{ backgroundColor: SOFT_BG }}
                className="rounded-2xl p-6 border border-gray-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-[#fde8ef] text-[#e51a59]">
                      {ev.tag}
                    </span>
                    <span className="text-xs font-medium text-gray-600">
                      {isEn ? "Free · Online" : "Kostenlos · Online"}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-[#1a1d2e] mb-2">{ev.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
                    {ev.desc}
                  </p>
                  <div className="flex flex-wrap gap-4 text-xs text-gray-600 mb-5">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarIcon className="w-4 h-4 text-[#e51a59]" />
                      <span>{ev.displayDate}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <ClockIcon className="w-4 h-4 text-[#e51a59]" />
                      <span>{ev.time}</span>
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
                  className="w-full text-white font-medium py-2.5 px-4 rounded-xl text-xs hover:opacity-95 transition-opacity cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <span>{isEn ? "Register for free" : "Kostenlos anmelden"}</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {selectedEvent && (
            <div className="mt-10 bg-[#1a1d2e] text-white rounded-2xl p-7 max-w-2xl">
              <p className="text-xs font-medium text-[#f472b6] uppercase tracking-wider mb-1">
                {isEn ? "Event Registration" : "Event-Anmeldung"}
              </p>
              <p className="text-lg font-medium mb-4">{selectedEvent}</p>
              {regSuccess ? (
                <p className="text-pink-200 text-sm font-medium">
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
                    className="text-white font-medium px-5 py-2.5 rounded-xl text-sm cursor-pointer"
                  >
                    {isEn ? "Confirm seat" : "Platz sichern"}
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </section>

      {/* H2: Past events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] text-[#1a1d2e] mb-8">
            {isEn ? "Past events" : "Vergangene Events"}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {pastEvents.map((pe, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs">
                <span className="text-xs font-medium text-gray-500 mb-2 block">{pe.date}</span>
                <h3 className="text-base font-medium text-[#1a1d2e] mb-2">{pe.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{pe.desc}</p>
              </div>
            ))}
          </div>
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
    ? "Book a Free Consultation | Clarusway"
    : "Kostenlose Beratung zu Kurs und Förderung | Clarusway";

  const metaDescription = isEn
    ? "Book your free 1-on-1 IT career consultation at Clarusway Germany. Get your official German Maßnahmeangebot for a Bildungsgutschein within 24 hours."
    : "Buche deine kostenlose und unverbindliche Studienberatung bei Clarusway. Wir prüfen deinen Anspruch auf einen Bildungsgutschein und erstellen dein Angebot in 24 Stunden.";

  const consultFaqs = isEn
    ? [
        {
          q: "Is the consultation really 100% free and non-binding?",
          a: "Yes. The consultation is completely free of charge. We discuss your technical background, career goals, and clarify whether you are eligible for 100% funding via Bildungsgutschein, AVGS, or QCG.",
        },
        {
          q: "How fast do I receive the German Maßnahmeangebot for the Agentur für Arbeit?",
          a: "Within 24 hours of your consultation call, we send you your complete official Maßnahmeangebot with all required AZAV numbers and descriptions in German.",
        },
        {
          q: "In which language can the consultation be conducted?",
          a: "Consultations can be held in English, German, or Turkish, whichever language you feel most confident speaking.",
        },
      ]
    : [
        {
          q: "Ist das Beratungsgespräch wirklich kostenlos und unverbindlich?",
          a: "Ja, zu 100 %. Die Beratung verpflichtet dich zu nichts. Wir analysieren deine Situation, beantworten deine Fragen und prüfen deine Förderfähigkeit für Bildungsgutschein, AVGS oder QCG.",
        },
        {
          q: "Wie schnell erhalte ich mein Maßnahmeangebot für die Arbeitsagentur?",
          a: "Innerhalb von 24 Stunden nach dem Gespräch stellen wir dein vollständiges Maßnahmeangebot mit offizieller AZAV-Maßnahmenummer aus.",
        },
        {
          q: "In welcher Sprache findet die Beratung statt?",
          a: "Unsere Bildungsberater sprechen Deutsch, Englisch und Türkisch. Du wählst einfach deine bevorzugte Sprache aus.",
        },
      ];

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
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", color: DARK }} className="bg-white">
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
              <div className="inline-flex items-center gap-2 bg-[#fde8ef] text-[#e51a59] text-xs font-medium px-3.5 py-1.5 rounded-full mb-4">
                <ShieldCheckIcon className="w-4 h-4" />
                <span>
                  {isEn
                    ? "100% Free & Non-Binding · German Paperwork in 24h"
                    : "100 % Kostenlos & Unverbindlich · Maßnahmeangebot in 24h"}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-medium tracking-[-0.025em] text-[#1a1d2e] mb-4 leading-tight">
                {isEn ? "Book a free consultation" : "Kostenlose Beratung zu Kurs und Förderung"}
              </h1>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                {isEn
                  ? "In a personal 1-on-1 call (available in English, Turkish, or German), a Clarusway advisor helps you choose the right IT bootcamp or module combination and prepares all German AZAV documents for your Agentur für Arbeit or Jobcenter appointment."
                  : "Im persönlichen 1:1-Beratungsgespräch finden wir heraus, welcher IT-Kurs oder welches Einzelmodul optimal zu deinem Vorwissen passt, und bereiten alle Unterlagen für deinen Bildungsgutschein vor."}
              </p>

              {/* H2: What happens in the consultation */}
              <h2 className="text-xl font-medium tracking-[-0.02em] text-[#1a1d2e] mb-4">
                {isEn
                  ? "What happens in the consultation"
                  : "So läuft die Beratung ab"}
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
                    <h3 className="text-sm font-medium text-[#1a1d2e] mb-1">{item.title}</h3>
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
                    <div className="w-12 h-12 rounded-full bg-[#fde8ef] text-[#e51a59] flex items-center justify-center mx-auto mb-4">
                      <CheckCircleIcon className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-medium tracking-[-0.02em] text-[#1a1d2e] mb-2">
                      {isEn
                        ? "Thank you for your consultation request!"
                        : "Vielen Dank für deine Anfrage!"}
                    </h2>
                    <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                      {isEn
                        ? `A Clarusway career advisor will contact you at ${email} within 24 hours to schedule your consultation and prepare your German Maßnahmeangebot.`
                        : `Unsere Studienberatung meldet sich innerhalb von 24 Stunden unter ${email} bei dir, um dein persönliches Maßnahmeangebot für den Bildungsgutschein fertigzustellen.`}
                    </p>
                    <Link
                      to={isEn ? "/it-courses/" : "/it-kurse/"}
                      className="text-xs font-medium text-[#e51a59] hover:underline"
                    >
                      {isEn ? "← Browse all courses while you wait" : "← Alle IT-Kurse ansehen"}
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-[#1a1d2e] mb-1.5">
                        {isEn ? "Full Name *" : "Vor- und Nachname *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder={isEn ? "e.g. Alex Miller" : "z. B. Max Mustermann"}
                        className="w-full bg-[#f6f7fb] border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a1d2e] focus:outline-none focus:border-[#e51a59]"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#1a1d2e] mb-1.5">
                          {isEn ? "Email *" : "E-Mail-Adresse *"}
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@example.com"
                          className="w-full bg-[#f6f7fb] border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a1d2e] focus:outline-none focus:border-[#e51a59]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-[#1a1d2e] mb-1.5">
                          {isEn ? "Phone *" : "Telefonnummer *"}
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+49 ..."
                          className="w-full bg-[#f6f7fb] border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a1d2e] focus:outline-none focus:border-[#e51a59]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#1a1d2e] mb-1.5">
                        {isEn ? "Course of Interest" : "Interessierender Fachbereich"}
                      </label>
                      <select
                        value={courseInterest}
                        onChange={(e) => setCourseInterest(e.target.value)}
                        className="w-full bg-[#f6f7fb] border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a1d2e] focus:outline-none focus:border-[#e51a59]"
                      >
                        <option value="ai-engineering">
                          {isEn ? "AI Engineering Bootcamp" : "AI Engineer Weiterbildung"}
                        </option>
                        <option value="full-stack">
                          {isEn ? "Full Stack Web Development" : "Full Stack Entwickler Weiterbildung"}
                        </option>
                        <option value="cyber-security">
                          {isEn ? "Cyber Security Analyst (SOC)" : "Cyber Security Weiterbildung (SOC)"}
                        </option>
                        <option value="aws-devops">
                          {isEn ? "AWS Solutions Architect & DevOps" : "AWS & DevOps Weiterbildung"}
                        </option>
                        <option value="sdet">
                          {isEn ? "Software Testing (SDET)" : "SDET Weiterbildung"}
                        </option>
                        <option value="kubernetes-ckad">
                          {isEn ? "Kubernetes CKAD Certification" : "Kubernetes CKAD Zertifikat Kurs"}
                        </option>
                        <option value="it-orientation">
                          {isEn ? "IT Orientation Course" : "IT-Orientierungskurs (AVGS)"}
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#1a1d2e] mb-1.5">
                        {isEn ? "Funding Status" : "Aktueller Förderstatus"}
                      </label>
                      <select
                        value={fundingStatus}
                        onChange={(e) => setFundingStatus(e.target.value)}
                        className="w-full bg-[#f6f7fb] border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a1d2e] focus:outline-none focus:border-[#e51a59]"
                      >
                        <option value="agentur-jobcenter">
                          {isEn ? "Registered with Agentur für Arbeit or Jobcenter" : "Bei der Agentur für Arbeit oder beim Jobcenter gemeldet"}
                        </option>
                        <option value="has-voucher">
                          {isEn ? "I already have a Bildungsgutschein or AVGS" : "Ich habe bereits einen Bildungsgutschein oder AVGS"}
                        </option>
                        <option value="employed-qcg">
                          {isEn ? "Employed (QCG funding via employer)" : "Beschäftigt (QCG-Förderung über Arbeitgeber)"}
                        </option>
                        <option value="self-payer">
                          {isEn ? "Self-payer / Installments" : "Selbstzahler / Ratenzahlung"}
                        </option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      style={{ backgroundColor: PRIMARY }}
                      className="w-full text-white font-medium py-3.5 px-6 rounded-xl text-sm shadow-md hover:opacity-95 transition-opacity cursor-pointer inline-flex items-center justify-center gap-2"
                    >
                      <span>{isEn ? "Request free consultation & offer" : "Kostenlose Beratung anfordern"}</span>
                      <ArrowRightIcon className="w-4 h-4" />
                    </button>

                    <p className="text-[11px] text-gray-500 text-center leading-relaxed">
                      {isEn
                        ? "100% free & non-binding. We respect your privacy. Data processed according to GDPR."
                        : "100 % kostenlos und unverbindlich. Deine Daten werden streng nach DSGVO verarbeitet."}
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H2: Consultation FAQ */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.02em] text-[#1a1d2e] text-center mb-8">
            {isEn ? "Consultation FAQ" : "Häufige Fragen zur Beratung"}
          </h2>
          <div className="space-y-3.5">
            {consultFaqs.map((f, idx) => (
              <details
                key={idx}
                open={idx === 0}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                  <h3 className="text-sm sm:text-base font-medium text-[#1a1d2e]">{f.q}</h3>
                  <span style={{ color: PRIMARY }} className="w-7 h-7 rounded-full bg-[#fde8ef] flex items-center justify-center shrink-0 font-medium text-sm">
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


/* ============================================================================
   6. THANK YOU PAGE (/danke/ & /thank-you/) — Always noindex!
   ============================================================================ */
export function ThankYouPage() {
  const { lang } = useLanguage();
  const isEn = lang === "en";
  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", color: DARK }} className="bg-white py-20">
      <SeoHead
        title={isEn ? "Thank You | Clarusway" : "Vielen Dank | Clarusway"}
        description="Confirmation page"
        path={isEn ? "/thank-you/" : "/danke/"}
        noindex={true}
      />
      <div className="max-w-xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-medium tracking-[-0.025em] text-[#1a1d2e] mb-3">
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
          className="inline-flex items-center gap-2 text-white font-medium px-6 py-3 rounded-full text-sm"
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
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", color: DARK }} className="bg-white">
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
          <h1 className="text-3xl sm:text-4xl font-medium tracking-[-0.025em] text-[#1a1d2e] mb-4">
            {isEn
              ? "Refer a friend and earn a €250 reward"
              : "Freunde werben und bis zu 250 € Prämie sichern"}
          </h1>
          <p className="text-gray-700 text-base leading-relaxed mb-8">
            {isEn
              ? "Know someone in Germany who wants to launch an IT career with a Bildungsgutschein? Refer them to Clarusway and receive a €250 referral reward after they enroll."
              : "Du kennst jemanden, der mit einem Bildungsgutschein in die IT starten möchte? Empfiehl Clarusway weiter und erhalte nach erfolgreichem Kursstart eine Empfehlungsprämie von 250 €."}
          </p>
          <Link
            to={isEn ? "/contact/" : "/kontakt/"}
            style={{ backgroundColor: PRIMARY }}
            className="inline-flex items-center gap-2 text-white font-medium px-6 py-3 rounded-full text-sm"
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
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", color: DARK }} className="bg-white">
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
          <h1 className="text-3xl sm:text-4xl font-medium tracking-[-0.025em] text-[#1a1d2e] mb-6">
            {isEn ? "Contact Clarusway Germany" : "Kontakt zu Clarusway Deutschland"}
          </h1>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <MapPinIcon className="w-6 h-6 text-[#e51a59] mb-3" />
              <h2 className="text-lg font-medium text-[#1a1d2e] mb-1">
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
              <h2 className="text-lg font-medium text-[#1a1d2e] mb-1">
                {isEn ? "Phone & Advisory Hours" : "Telefon & Beratungszeiten"}
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                <a href="tel:+4921317762749" className="text-[#e51a59] font-medium">
                  +49 2131 776 2749
                </a>
              </p>
              <p className="text-xs text-gray-500">
                {isEn ? "Mon–Fri, 09:00–18:00 CET" : "Mo–Fr, 09:00–18:00 Uhr"}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <MailIcon className="w-6 h-6 text-[#e51a59] mb-3" />
              <h2 className="text-lg font-medium text-[#1a1d2e] mb-1">E-Mail</h2>
              <p className="text-sm text-gray-600 mb-3">
                <a href="mailto:info@clarusway.de" className="text-[#e51a59] font-medium">
                  info@clarusway.de
                </a>
              </p>
              <Link
                to={isEn ? "/application-form/" : "/beratung/"}
                className="text-xs font-medium text-[#1a1d2e] underline hover:text-[#e51a59]"
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
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", color: DARK }} className="bg-white py-14">
      <SeoHead
        title={isEn ? "Imprint (Impressum) | Clarusway" : "Impressum | Clarusway Deutschland"}
        description="Legal disclosure according to § 5 DDG for Clarusway GmbH, Neuss."
        path={isEn ? "/imprint/" : "/impressum/"}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-medium tracking-[-0.025em] mb-6">
          {isEn ? "Imprint (Impressum)" : "Impressum"}
        </h1>
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <h2 className="text-lg font-medium text-[#1a1d2e]">
            {isEn ? "Information pursuant to § 5 DDG" : "Angaben gemäß § 5 DDG"}
          </h2>
          <p>
            <strong className="font-medium text-[#1a1d2e]">Clarusway GmbH</strong>
            <br />
            Bataver Str. 84
            <br />
            41462 Neuss, Deutschland
          </p>
          <p>
            <strong className="font-medium text-[#1a1d2e]">{isEn ? "Contact:" : "Kontakt:"}</strong>
            <br />
            Telefon: +49 2131 776 2749
            <br />
            E-Mail: info@clarusway.de
          </p>
          <p>
            <strong className="font-medium text-[#1a1d2e]">{isEn ? "Certification:" : "Zertifizierung:"}</strong>
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
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", color: DARK }} className="bg-white py-14">
      <SeoHead
        title={isEn ? "Privacy Policy (Datenschutz) | Clarusway" : "Datenschutzerklärung | Clarusway"}
        description="GDPR / DSGVO Privacy Policy of Clarusway GmbH."
        path={isEn ? "/privacy-policy/" : "/datenschutz/"}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-medium tracking-[-0.025em] mb-6">
          {isEn ? "Privacy Policy (GDPR / DSGVO)" : "Datenschutzerklärung"}
        </h1>
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <h2 className="text-lg font-medium text-[#1a1d2e]">
            {isEn ? "1. Controller" : "1. Verantwortliche Stelle"}
          </h2>
          <p>
            Clarusway GmbH, Bataver Str. 84, 41462 Neuss, Deutschland (info@clarusway.de).
          </p>
          <h2 className="text-lg font-medium text-[#1a1d2e]">
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
