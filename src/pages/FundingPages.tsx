import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { SeoHead, trackClaruswayEvent } from "../components/SeoHead";
import { Breadcrumb } from "../components/Breadcrumb";
import {
  FUNDING_OVERVIEW_IMAGES,
  BILDUNGSGUTSCHEIN_IMAGES,
  AVGS_IMAGES,
  QCG_IMAGES,
  CORPORATE_TRAINING_IMAGES,
} from "../data/pageImagesData";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  BuildingIcon,
  ClockIcon,
  CalendarIcon,
} from "../components/Icons";

const PRIMARY = "#e51a59";
const DARK = "#1a1d2e";
const SOFT_BG = "#f6f7fb";

/* ============================================================================
   1. FINANCING HUB (/finanzierung/ & /financing-and-tuition/)
   ============================================================================ */
export function FinancingHubPage() {
  const { lang } = useLanguage();
  const isEn = lang === "en";
  const currentPath = isEn ? "/financing-and-tuition/" : "/finanzierung/";
  const consultPath = isEn ? "/application-form/" : "/beratung/";

  const metaTitle = isEn
    ? "Financing and Tuition: 100% Funded IT Courses | Clarusway"
    : "Finanzierung & Förderung deiner IT-Weiterbildung | Clarusway";

  const metaDescription = isEn
    ? "Learn how to finance your Clarusway IT bootcamp in Germany: 100% funded with a Bildungsgutschein, AVGS voucher, Qualifizierungschancengesetz, or flexible installments."
    : "Alle Förderwege für deine IT-Weiterbildung bei Clarusway: 100 % Kostenübernahme mit Bildungsgutschein, AVGS, Qualifizierungschancengesetz (QCG) oder Ratenzahlung.";

  const faqs = isEn
    ? [
        {
          q: "Which funding option covers 100% of the tuition?",
          a: "Both the Bildungsgutschein (for main IT bootcamps) and the AVGS voucher (for the 4-week IT Orientation Course) cover 100% of tuition fees through the Agentur für Arbeit or Jobcenter.",
        },
        {
          q: "Can employed people get state funding in Germany?",
          a: "Yes. Through the Qualifizierungschancengesetz (Qualification Opportunities Act), the Agentur für Arbeit subsidizes up to 100% of training costs and up to 75% of wages during training depending on company size.",
        },
        {
          q: "Does Clarusway help with the German application forms?",
          a: "Yes. Clarusway prepares your official course offer (Maßnahmeangebot) in German within 24 hours and coaches you in your preferred language (English, Turkish, or German) on how to present it to your advisor.",
        },
      ]
    : [
        {
          q: "Welche Förderung übernimmt 100 % der Kurskosten?",
          a: "Mit einem Bildungsgutschein (für alle Hauptweiterbildungen) oder einem AVGS (für den IT-Orientierungskurs) übernehmen die Agentur für Arbeit oder das Jobcenter 100 % der Lehrgangsgebühren.",
        },
        {
          q: "Gibt es eine Förderung für Berufstätige?",
          a: "Ja. Über das Qualifizierungschancengesetz (QCG) bezuschusst die Agentur für Arbeit die Weiterbildungskosten von Beschäftigten (bis zu 100 %) sowie das Arbeitsentgelt während der Schulungszeit (bis zu 75 %).",
        },
        {
          q: "Wie schnell erhalte ich das Angebot für mein Jobcenter?",
          a: "Nach deinem kostenlosen Beratungsgespräch erstellen wir dein individuelles Maßnahmeangebot inklusive Maßnahmenummer innerhalb von 24 Stunden.",
        },
      ];

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: DARK }} className="bg-white">
      <SeoHead title={metaTitle} description={metaDescription} path={currentPath} />
      <Breadcrumb items={[{ label: isEn ? "Financing & Tuition" : "Finanzierung" }]} />

      <section
        style={{ background: "linear-gradient(135deg, #fff8f9 0%, #fff 60%)" }}
        className="py-14 border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-[#fde8ef] text-[#e51a59] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-4">
                <ShieldCheckIcon className="w-4 h-4" />
                <span>
                  {isEn ? "AZAV-Certified State Funding" : "AZAV-zertifizierte Fördermöglichkeiten"}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1a1d2e] mb-4 leading-tight">
                {isEn
                  ? "Financing and tuition: take your IT course for free"
                  : "Finanzierung deiner IT-Weiterbildung: 100 % Förderung möglich"}
              </h1>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                {isEn
                  ? "Over 90% of Clarusway students in Germany attend their bootcamp at 0 € out-of-pocket cost using state funding from the Agentur für Arbeit (Federal Employment Agency) or Jobcenter. Compare all financing paths below."
                  : "Über 90 % unserer Teilnehmenden in Deutschland absolvieren ihre IT-Weiterbildung kostenfrei über staatliche Förderprogramme der Agentur für Arbeit oder des Jobcenters. Hier findest du alle Wege im Vergleich."}
              </p>
              <Link
                to={consultPath}
                style={{ backgroundColor: PRIMARY }}
                className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-full text-sm shadow-md hover:opacity-95"
              >
                <span>{isEn ? "Free consultation" : "Kostenlose Beratung"}</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-gray-100">
                <img
                  src={FUNDING_OVERVIEW_IMAGES.landscapeHero.src}
                  alt={FUNDING_OVERVIEW_IMAGES.landscapeHero.alt[lang]}
                  className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Component B10: Comparison Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e] mb-6">
            {isEn
              ? "Compare all financing options in Germany"
              : "Alle Förder- und Finanzierungswege im Vergleich"}
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-xs mb-12">
            <table className="w-full text-left border-collapse min-w-[720px]">
              <thead>
                <tr style={{ backgroundColor: DARK }} className="text-white text-xs uppercase tracking-wider">
                  <th className="py-4 px-5">{isEn ? "Funding Program" : "Förderprogramm"}</th>
                  <th className="py-4 px-5">{isEn ? "Target Group" : "Zielgruppe"}</th>
                  <th className="py-4 px-5">{isEn ? "Coverage" : "Kostenübernahme"}</th>
                  <th className="py-4 px-5">{isEn ? "Eligible Courses" : "Geeignete Kurse"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-xs sm:text-sm">
                <tr className="bg-white">
                  <td className="py-4 px-5 font-bold">
                    <Link to="/bildungsgutschein/" className="text-[#e51a59] hover:underline">
                      Bildungsgutschein
                    </Link>
                  </td>
                  <td className="py-4 px-5">
                    {isEn
                      ? "Unemployed or job-seeking residents registered in Germany"
                      : "Arbeitsuchende & von Arbeitslosigkeit Bedrohte"}
                  </td>
                  <td className="py-4 px-5 font-bold text-emerald-700">100 %</td>
                  <td className="py-4 px-5">
                    {isEn ? "All main IT bootcamps & modules" : "Alle IT-Weiterbildungen & Module"}
                  </td>
                </tr>
                <tr className="bg-[#f6f7fb]">
                  <td className="py-4 px-5 font-bold">
                    <Link to="/avgs/" className="text-[#e51a59] hover:underline">
                      AVGS Voucher
                    </Link>
                  </td>
                  <td className="py-4 px-5">
                    {isEn
                      ? "Undecided job seekers needing IT career orientation"
                      : "Unentschlossene Arbeitsuchende vor der Kurswahl"}
                  </td>
                  <td className="py-4 px-5 font-bold text-emerald-700">100 %</td>
                  <td className="py-4 px-5">
                    <Link
                      to={isEn ? "/it-orientation-course/" : "/it-orientierungskurs/"}
                      className="text-[#e51a59] hover:underline"
                    >
                      {isEn ? "IT Orientation Course" : "IT-Orientierungskurs"}
                    </Link>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="py-4 px-5 font-bold">
                    <Link to="/qualifizierungschancengesetz/" className="text-[#e51a59] hover:underline">
                      Qualifizierungschancengesetz (QCG)
                    </Link>
                  </td>
                  <td className="py-4 px-5">
                    {isEn ? "Employed professionals & companies" : "Beschäftigte & Unternehmen"}
                  </td>
                  <td className="py-4 px-5 font-bold text-emerald-700">
                    {isEn ? "Up to 100% tuition + 75% wage" : "Bis zu 100 % Kurs + 75 % Lohn"}
                  </td>
                  <td className="py-4 px-5">
                    {isEn ? "All bootcamps & short courses (CKAD)" : "Alle Haupt- & Kurzkurse (z. B. CKAD)"}
                  </td>
                </tr>
                <tr className="bg-[#f6f7fb]">
                  <td className="py-4 px-5 font-bold">
                    {isEn ? "Self-Pay & Installments" : "Selbstzahler & Ratenzahlung"}
                  </td>
                  <td className="py-4 px-5">
                    {isEn ? "Learners without agency funding" : "Teilnehmende ohne Behördenförderung"}
                  </td>
                  <td className="py-4 px-5">
                    {isEn ? "Flexible monthly installments (0% interest)" : "Flexible Monatsraten & Steuervorteil"}
                  </td>
                  <td className="py-4 px-5">{isEn ? "All programs" : "Alle Programme"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 4 Alternating Financing Pillar Blocks */}
          <div className="space-y-16">
            {/* Block 1: Bildungsgutschein — Text Left, Square Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div
                style={{ backgroundColor: SOFT_BG }}
                className="rounded-2xl sm:rounded-3xl p-7 sm:p-9 border border-gray-100 shadow-sm"
              >
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-[#fde8ef] text-[#e51a59] mb-4">
                  {isEn ? "Option 1: Job Seekers & Career Changers" : "Weg 1: Arbeitsuchende & Quereinsteiger"}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1a1d2e] mb-3">
                  <Link to="/bildungsgutschein/" className="hover:text-[#e51a59]">
                    {isEn ? "Bildungsgutschein (100% Tuition Coverage)" : "Bildungsgutschein (100 % Kostenübernahme)"}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {isEn
                    ? "The primary state education voucher issued by the Agentur für Arbeit or Jobcenter under § 81 SGB III. It covers 100% of your tuition fees, exam fees, and course materials for all Clarusway IT bootcamps."
                    : "Der offizielle Bildungsgutschein nach § 81 SGB III übernimmt 100 % der Lehrgangsgebühren, Prüfungsgebühren und Lernmittel für alle AZAV-zertifizierten Clarusway IT-Weiterbildungen."}
                </p>

                <ul className="space-y-3 pt-5 border-t border-gray-200/70 mb-6">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "0 € out-of-pocket tuition with official voucher" : "0 € Eigenanteil bei Bewilligung"}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Monthly Weiterbildungsgeld allowance (150 €/mo for ALG I recipients)" : "Weiterzahlung von ALG I / Bürgergeld plus 150 € Weiterbildungsgeld"}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Free advisory and Maßnahmeangebot in 24 hours" : "Individuelles Maßnahmeangebot innerhalb von 24 Stunden"}</span>
                  </li>
                </ul>

                <Link
                  to="/bildungsgutschein/"
                  className="inline-flex items-center gap-2 text-[#e51a59] font-bold text-sm hover:underline"
                >
                  <span>{isEn ? "Explore Bildungsgutschein Guide" : "Zum Bildungsgutschein-Leitfaden"}</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>

              <div className="flex justify-center">
                <img
                  src={FUNDING_OVERVIEW_IMAGES.squareAdvisor.src}
                  alt={FUNDING_OVERVIEW_IMAGES.squareAdvisor.alt[lang]}
                  className="w-full max-w-[480px] aspect-square object-cover rounded-2xl sm:rounded-3xl shadow-md border border-gray-100"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Block 2: AVGS — Square Image Left, Text Right (Alternating!) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="flex justify-center order-2 lg:order-1">
                <img
                  src={FUNDING_OVERVIEW_IMAGES.squareDocuments.src}
                  alt={FUNDING_OVERVIEW_IMAGES.squareDocuments.alt[lang]}
                  className="w-full max-w-[480px] aspect-square object-cover rounded-2xl sm:rounded-3xl shadow-md border border-gray-100"
                  loading="lazy"
                />
              </div>

              <div
                style={{ backgroundColor: SOFT_BG }}
                className="rounded-2xl sm:rounded-3xl p-7 sm:p-9 border border-gray-100 shadow-sm order-1 lg:order-2"
              >
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-[#e8eaf6] text-[#3949ab] mb-4">
                  {isEn ? "Option 2: Orientation & Career Coaching" : "Weg 2: Orientierung & Coaching"}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1a1d2e] mb-3">
                  <Link to="/avgs/" className="hover:text-[#e51a59]">
                    {isEn ? "AVGS Voucher (Aktivierungs- und Vermittlungsgutschein)" : "AVGS Gutschein (Berufliche Orientierung)"}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {isEn
                    ? "If you want to test whether IT suits your skills before committing, the AVGS voucher covers 100% of the 4-week IT Orientation Course without reducing your later Bildungsgutschein entitlement."
                    : "Wenn du noch unsicher bist, welcher IT-Zweig zu dir passt, fördert der AVGS-Gutschein den 4-wöchigen IT-Orientierungskurs zu 100 % — dein späterer Anspruch auf einen Bildungsgutschein bleibt voll erhalten."}
                </p>

                <ul className="space-y-3 pt-5 border-t border-gray-200/70 mb-6">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#3949ab]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "4-week hands-on orientation in Coding, Cloud & AI" : "4 Wochen praktische Einblicke in Coding, Cloud & KI"}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#3949ab]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "1-on-1 coaching session with certified career mentors" : "1-zu-1 Karrierecoaching und persönliche Potenzialanalyse"}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#3949ab]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Seamless transition to a fully funded main bootcamp" : "Nahtloser Übergang in deine geförderte Hauptweiterbildung"}</span>
                  </li>
                </ul>

                <Link
                  to="/avgs/"
                  className="inline-flex items-center gap-2 text-[#3949ab] font-bold text-sm hover:underline"
                >
                  <span>{isEn ? "Learn more about AVGS" : "Mehr zum AVGS Gutschein"}</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Block 3: QCG — Text Left, Square Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div
                style={{ backgroundColor: SOFT_BG }}
                className="rounded-2xl sm:rounded-3xl p-7 sm:p-9 border border-gray-100 shadow-sm"
              >
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-[#fde8ef] text-[#e51a59] mb-4">
                  {isEn ? "Option 3: Employed Professionals & Companies" : "Weg 3: Beschäftigte & Unternehmen"}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1a1d2e] mb-3">
                  <Link to="/qualifizierungschancengesetz/" className="hover:text-[#e51a59]">
                    {isEn ? "Qualifizierungschancengesetz (QCG § 82 SGB III)" : "Qualifizierungschancengesetz (QCG)"}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {isEn
                    ? "Employed professionals whose jobs are transformed by digitalization can receive up to 100% course cost subsidies and employers receive up to 75% wage subsidies through the Agentur für Arbeit."
                    : "Beschäftigte, deren Arbeitsplätze durch Automatisierung und Digitalisierung gefährdet sind, erhalten bis zu 100 % Zuschuss zu den Weiterbildungskosten und Arbeitgeber bis zu 75 % Lohnkostenzuschuss."}
                </p>

                <ul className="space-y-3 pt-5 border-t border-gray-200/70 mb-6">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Subsidized training during regular working hours" : "Geförderte Schulungen während der regulären Arbeitszeit"}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Up to 100% tuition coverage depending on company size" : "Staffelung nach Betriebsgröße: bis zu 100 % Kostenübernahme"}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Clarusway handles Arbeitgeber-Service coordination" : "Clarusway koordiniert die Anträge beim Arbeitgeber-Service"}</span>
                  </li>
                </ul>

                <Link
                  to="/qualifizierungschancengesetz/"
                  className="inline-flex items-center gap-2 text-[#e51a59] font-bold text-sm hover:underline"
                >
                  <span>{isEn ? "Check QCG details" : "Details zum QCG erfahren"}</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>

              <div className="flex justify-center">
                <img
                  src={FUNDING_OVERVIEW_IMAGES.squareCareerChange.src}
                  alt={FUNDING_OVERVIEW_IMAGES.squareCareerChange.alt[lang]}
                  className="w-full max-w-[480px] aspect-square object-cover rounded-2xl sm:rounded-3xl shadow-md border border-gray-100"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Block 4: Application Checklist — Square Image Left, Text Right (Alternating!) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="flex justify-center order-2 lg:order-1">
                <img
                  src={FUNDING_OVERVIEW_IMAGES.squareApplication.src}
                  alt={FUNDING_OVERVIEW_IMAGES.squareApplication.alt[lang]}
                  className="w-full max-w-[480px] aspect-square object-cover rounded-2xl sm:rounded-3xl shadow-md border border-gray-100"
                  loading="lazy"
                />
              </div>

              <div
                style={{ backgroundColor: SOFT_BG }}
                className="rounded-2xl sm:rounded-3xl p-7 sm:p-9 border border-gray-100 shadow-sm order-1 lg:order-2"
              >
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-[#fde8ef] text-[#e51a59] mb-4">
                  {isEn ? "Application Assistance" : "Kostenlose Antragshilfe"}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1a1d2e] mb-3">
                  {isEn
                    ? "Full Consultation & Document Prep"
                    : "Rundum-Begleitung bei deiner Antragstellung"}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {isEn
                    ? "Navigating German bureaucratic processes can be overwhelming. Our multilingual advisory team supports you in English, Turkish, or German with all required paperwork, justifications, and preparation."
                    : "Wir lassen dich mit den Behörden nicht allein: Unser erfahrenes Beratungsteam erstellt alle Bescheinigungen und bereitet dich optimal auf dein Gespräch beim Kostenträger vor."}
                </p>

                <ul className="space-y-3 pt-5 border-t border-gray-200/70 mb-6">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Fast 24-hour turnaround for official course offers" : "Schnelle Ausstellung des Maßnahmeangebots in 24 Std."}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Tailored labor-market justifications in German" : "Individuelle arbeitsmarktliche Begründung auf Deutsch"}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Support until your official voucher approval arrives" : "Persönliche Unterstützung bis zur Gutscheinbewilligung"}</span>
                  </li>
                </ul>

                <Link
                  to={consultPath}
                  style={{ backgroundColor: PRIMARY }}
                  className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-xl text-sm hover:opacity-90 transition-opacity"
                >
                  <span>{isEn ? "Book Free Consultation" : "Kostenlose Beratung anfragen"}</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Landscape Success Banner */}
          <div className="mt-16 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-gray-100">
            <img
              src={FUNDING_OVERVIEW_IMAGES.landscapeSuccess.src}
              alt={FUNDING_OVERVIEW_IMAGES.landscapeSuccess.alt[lang]}
              className="w-full max-h-[380px] sm:max-h-[440px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: SOFT_BG }} className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e] text-center mb-8">
            {isEn ? "Financing FAQ" : "Häufige Fragen zur Finanzierung"}
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
                  <span style={{ color: PRIMARY }} className="w-7 h-7 rounded-full bg-[#fde8ef] flex items-center justify-center shrink-0 font-bold text-sm">
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
   2. BILDUNGSGUTSCHEIN PILLAR PAGE (/bildungsgutschein/)
   ============================================================================ */
export function BildungsgutscheinPage() {
  const { lang } = useLanguage();
  const isEn = lang === "en";
  const consultPath = isEn ? "/application-form/" : "/beratung/";

  const metaTitle = isEn
    ? "Bildungsgutschein Guide: How to Get 100% Funding for IT Training | Clarusway"
    : "Bildungsgutschein beantragen: Voraussetzungen & Ablauf | Clarusway";

  const metaDescription = isEn
    ? "Step-by-step guide on how to get a Bildungsgutschein from the Agentur für Arbeit or Jobcenter in Germany for 100% funded IT training at Clarusway."
    : "So beantragst du deinen Bildungsgutschein bei Agentur für Arbeit oder Jobcenter: Voraussetzungen, 5 Schritte, Tipps für das Beratungsgespräch und geförderte IT-Kurse.";

  const steps = isEn
    ? [
        {
          title: "Step 1: Register with the Agentur für Arbeit or Jobcenter",
          desc: "Register as job-seeking (arbeitssuchend) or unemployed (arbeitslos) online or at your local office as soon as you know your employment is ending.",
        },
        {
          title: "Step 2: Book your free consultation at Clarusway",
          desc: "Speak with a Clarusway advisor (available in English, Turkish, or German) to select the IT bootcamp or module combination that fits your background and the German job market.",
        },
        {
          title: "Step 3: Receive your German course offer (Maßnahmeangebot)",
          desc: "Clarusway prepares your official AZAV Maßnahmeangebot in German (including Maßnahmenummer, syllabus, and job market justification) within 24 hours.",
        },
        {
          title: "Step 4: Present the offer at your advisor appointment",
          desc: "Bring your Maßnahmeangebot and sample job listings to your Agentur für Arbeit or Jobcenter appointment and request your Bildungsgutschein.",
        },
        {
          title: "Step 5: Redeem your voucher and start your IT course",
          desc: "Once approved, submit the Bildungsgutschein to Clarusway. Clarusway handles the billing directly with the agency and you start your live cohort.",
        },
      ]
    : [
        {
          title: "Schritt 1: Arbeitssuchend oder arbeitslos melden",
          desc: "Melde dich online oder persönlich bei deiner zuständigen Agentur für Arbeit oder dem Jobcenter und vereinbare einen Beratungstermin zur beruflichen Weiterbildung.",
        },
        {
          title: "Schritt 2: Kostenlose Beratung bei Clarusway buchen",
          desc: "Wir prüfen gemeinsam dein Vorwissen und wählen den passenden IT-Lernpfad (z. B. AI Engineering, Full Stack, Cyber Security oder AWS & DevOps).",
        },
        {
          title: "Schritt 3: Individuelles Maßnahmeangebot erhalten",
          desc: "Innerhalb von 24 Stunden senden wir dir dein offizielles AZAV-Angebot mit Maßnahmenummer, Lehrplan und Argumentationshilfe für deine Vermittlungsfachkraft.",
        },
        {
          title: "Schritt 4: Gespräch bei Arbeitsagentur oder Jobcenter",
          desc: "Lege das Maßnahmeangebot im Gespräch vor und begründe, warum die IT-Weiterbildung deine Integrationschancen auf dem Arbeitsmarkt nachhaltig erhöht.",
        },
        {
          title: "Schritt 5: Bildungsgutschein einlösen und starten",
          desc: "Nach Bewilligung reichst du den Bildungsgutschein bei Clarusway ein — wir rechnen direkt mit der Behörde ab und du startest kostenfrei.",
        },
      ];

  const faqs = isEn
    ? [
        {
          q: "What is a Bildungsgutschein and who is eligible?",
          a: "A Bildungsgutschein (education voucher) is a training voucher issued under § 81 SGB III by the Agentur für Arbeit or Jobcenter. It is designed for residents in Germany who are currently unemployed, employees facing impending layoffs or contract expirations, or career changers whose skills need modernizing to maintain employment.",
        },
        {
          q: "Does a Bildungsgutschein cover 100% of the tuition?",
          a: "Yes. When approved, 100% of your course tuition, required software licenses, learning materials, and approved certification exam vouchers are paid directly to Clarusway by the government agency. There are 0 € out-of-pocket costs for you.",
        },
        {
          q: "Can I get a Bildungsgutschein without fluent German?",
          a: "Yes. Clarusway bootcamps offer instruction in English and Turkish (German cohorts expanding) and are officially AZAV-certified in Germany. Clarusway prepares all official German documentation (Maßnahmeangebot) for your advisor appointment and guides you step by step.",
        },
        {
          q: "What is the difference between Agentur für Arbeit and Jobcenter?",
          a: "The Agentur für Arbeit handles individuals who have contributed to German unemployment insurance and receive Arbeitslosengeld I (ALG I), or employees seeking qualifications. The Jobcenter supports recipients of Bürgergeld (Citizen's Benefit). Both agencies can issue a Bildungsgutschein for Clarusway courses.",
        },
        {
          q: "How long does it take to get a Bildungsgutschein approved?",
          a: "The process typically takes 2 to 4 weeks: you book a free consultation at Clarusway, receive your customized German course offer within 24 hours, schedule your appointment with your agency caseworker, and submit the voucher to start your cohort.",
        },
        {
          q: "What documents does Clarusway provide for my appointment?",
          a: "Clarusway provides an official German course offer (Maßnahmeangebot) containing the AZAV Maßnahmenummer, detailed module breakdown, start dates, and written labor market justification demonstrating high demand for your chosen IT role.",
        },
      ]
    : [
        {
          q: "Welche Kosten übernimmt der Bildungsgutschein?",
          a: "Der Bildungsgutschein übernimmt 100 % der zugelassenen Lehrgangsgebühren und Lernmittel sowie ggf. anfallende Fahr- oder Kinderbetreuungskosten.",
        },
        {
          q: "Wer hat Anspruch auf einen Bildungsgutschein?",
          a: "Gefördert werden können Arbeitslose (ALG I oder Bürgergeld), Arbeitssuchende, denen eine Kündigung droht oder deren Vertrag ausläuft, sowie Berufsrückkehrende.",
        },
        {
          q: "Wie lange ist ein Bildungsgutschein gültig?",
          a: "In der Regel ist der Bildungsgutschein bis zu 3 Monate ab Ausstellungsdatum gültig und auf ein bestimmtes Bildungsziel sowie eine maximale Dauer festgelegt.",
        },
        {
          q: "Erhalte ich während der Weiterbildung weiter Arbeitslosengeld?",
          a: "Ja. Während einer mit Bildungsgutschein geförderten Weiterbildung wird dein Arbeitslosengeld I (ALG I) oder Bürgergeld weitergezahlt; zudem gibt es das monatliche Weiterbildungsgeld in Höhe von 150 Euro.",
        },
        {
          q: "Was tun, wenn der Bildungsgutschein abgelehnt wird?",
          a: "Sprich uns direkt an: Häufig lässt sich die Vermittlungsfachkraft durch ein kompakteres Einzelmodul (z. B. 3 Monate AWS oder 13 Wochen Data Analytics) oder einen vorgeschalteten AVGS-Orientierungskurs überzeugen.",
        },
      ];

  const schema = [
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
        path="/bildungsgutschein/"
        schema={schema}
      />

      <Breadcrumb
        items={[
          {
            label: isEn ? "Financing & Tuition" : "Finanzierung",
            to: isEn ? "/financing-and-tuition/" : "/finanzierung/",
          },
          { label: "Bildungsgutschein" },
        ]}
      />

      {/* HERO */}
      <section
        style={{ background: "linear-gradient(135deg, #fff8f9 0%, #fff 60%)" }}
        className="py-14 border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-[#fde8ef] text-[#e51a59] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-4">
                <ShieldCheckIcon className="w-4 h-4" />
                <span>
                  {isEn
                    ? "100% Tuition Coverage · § 81 SGB III (AZAV)"
                    : "100 % Kostenübernahme nach § 81 SGB III (AZAV)"}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1a1d2e] mb-4 leading-tight">
                {isEn
                  ? "Bildungsgutschein: how to get 100% funding for your IT course in Germany"
                  : "IT-Weiterbildung mit Bildungsgutschein: 100 % Kostenübernahme"}
              </h1>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                {isEn
                  ? "A Bildungsgutschein (education voucher) is an official funding commitment issued by the Agentur für Arbeit (Federal Employment Agency) or Jobcenter in Germany. It covers 100% of the tuition fees for AZAV-certified Clarusway IT bootcamps."
                  : "Mit einem Bildungsgutschein der Agentur für Arbeit oder des Jobcenters werden die Kosten deiner AZAV-zertifizierten IT-Weiterbildung bei Clarusway zu 100 % übernommen. Hier erfährst du alles zu Voraussetzungen, Antragstellung und Vorbereitung."}
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  to={consultPath}
                  style={{ backgroundColor: PRIMARY }}
                  className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-full text-sm shadow-md hover:opacity-95"
                >
                  <span>{isEn ? "Free consultation" : "Kostenlose Beratung"}</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
                <Link
                  to={isEn ? "/it-courses/" : "/it-kurse/"}
                  className="inline-flex items-center gap-2 border-2 border-[#1a1d2e] text-[#1a1d2e] font-semibold px-6 py-3.5 rounded-full text-sm hover:bg-[#1a1d2e] hover:text-white transition-colors"
                >
                  <span>
                    {isEn ? "View eligible IT courses" : "Geförderte IT-Kurse ansehen"}
                  </span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-gray-100">
                <img
                  src={BILDUNGSGUTSCHEIN_IMAGES.landscapeHero.src}
                  alt={BILDUNGSGUTSCHEIN_IMAGES.landscapeHero.alt[lang]}
                  className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: What is a Bildungsgutschein & Who is eligible */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e] mb-3">
                {isEn ? "What is a Bildungsgutschein?" : "Was ist ein Bildungsgutschein?"}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                {isEn
                  ? "The Bildungsgutschein (education voucher) is Germany's primary state funding instrument for continuing professional education (berufliche Weiterbildung). It guarantees that the Agentur für Arbeit or Jobcenter will pay 100% of your tuition directly to an AZAV-certified school like Clarusway."
                  : "Der Bildungsgutschein ist ein staatliches Förderinstrument der Bundesagentur für Arbeit und der Jobcenter. Er garantiert, dass der Kostenträger die Lehrgangsgebühren einer nach AZAV zugelassenen Weiterbildung direkt und zu 100 % übernimmt."}
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {isEn ? (
                  <>
                    To explore our approved IT training curricula and career outcomes, read our{" "}
                    <Link
                      to="/guides/"
                      className="text-[#e51a59] font-semibold underline"
                    >
                      IT career and certification guides
                    </Link>{" "}
                    or speak with an advisor.
                  </>
                ) : (
                  <>
                    Vertiefende Tipps zur Antragstellung findest du auch in unserem Ratgeber{" "}
                    <Link
                      to="/ratgeber/weiterbildung-arbeitsagentur/"
                      className="text-[#e51a59] font-semibold underline"
                    >
                      Weiterbildung über Arbeitsagentur und Jobcenter
                    </Link>
                    .
                  </>
                )}
              </p>
            </div>

            <div style={{ backgroundColor: SOFT_BG }} className="rounded-2xl p-7 border border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1a1d2e] mb-3">
                {isEn
                  ? "Who is eligible for a Bildungsgutschein?"
                  : "Voraussetzungen: Wer erhält einen Bildungsgutschein?"}
              </h2>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-700">
                {(isEn
                  ? [
                      "You are registered as unemployed (receiving ALG I or Bürgergeld) in Germany.",
                      "Or you are registered as job-seeking because your fixed-term contract is ending or your role is at risk.",
                      "Or you are returning to the job market (e.g., after parental leave) and need updated tech skills.",
                      "An IT qualification measurably improves your chances of sustainable employment in Germany.",
                    ]
                  : [
                      "Du bist arbeitslos gemeldet (Bezug von Arbeitslosengeld I oder Bürgergeld).",
                      "Oder du bist arbeitssuchend gemeldet, weil dein befristeter Vertrag ausläuft oder eine Kündigung droht.",
                      "Oder du kehrst nach einer Familien- oder Pflegephase zurück in den Beruf.",
                      "Die Weiterbildung verbessert deine Chancen auf eine nachhaltige Einstellung auf dem IT-Arbeitsmarkt.",
                    ]
                ).map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircleIcon className="w-4 h-4 text-[#e51a59] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: 4-Step Application Walkthrough (Alternating Blocks) */}
      <section style={{ backgroundColor: SOFT_BG }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span
              style={{ color: PRIMARY }}
              className="text-xs font-semibold uppercase tracking-widest block mb-2"
            >
              {isEn ? "Application Process" : "Der Weg zum Gutschein"}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1d2e] mb-3">
              {isEn
                ? "How to Apply for a Bildungsgutschein in 4 Steps"
                : "In 4 Schritten zum bewilligten Bildungsgutschein"}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {isEn
                ? "From initial counselling appointment to voucher approval and your first day in class."
                : "Von der ersten Terminvereinbarung über das Maßnahmeangebot bis zu deinem ersten Kurstag."}
            </p>
          </div>

          <div className="space-y-16">
            {/* Step 1: Text Left, Square Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-9 border border-gray-100 shadow-sm">
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-[#fde8ef] text-[#e51a59] mb-4">
                  {isEn ? "Step 1: Agency Appointment" : "Schritt 1: Beratungstermin vereinbaren"}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1a1d2e] mb-3">
                  {isEn
                    ? "Appointment at Agentur für Arbeit or Jobcenter"
                    : "Gespräch bei der Agentur für Arbeit oder dem Jobcenter"}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {isEn
                    ? "Schedule your appointment as soon as you are registered as job-seeking or unemployed. Inform your caseworker that you want to upskill in IT to significantly improve your employment opportunities in Germany."
                    : "Vereinbare deinen Termin, sobald du arbeitssuchend oder arbeitslos gemeldet bist. Teile deiner Vermittlungsfachkraft mit, dass eine IT-Weiterbildung deine Chancen auf dem deutschen Arbeitsmarkt nachhaltig sichert."}
                </p>

                <ul className="space-y-3 pt-5 border-t border-gray-100">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Register online via Arbeitsagentur portal or phone" : "Online-Meldung über das Arbeitsagentur-Portal oder telefonisch"}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Request a consultation regarding continuing professional training" : "Beratungswunsch zur beruflichen Weiterbildung angeben"}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Clarusway advisor coaches you beforehand on all key questions" : "Kostenlose Vorbereitung auf das Gespräch durch Clarusway-Berater"}</span>
                  </li>
                </ul>
              </div>

              <div className="flex justify-center">
                <img
                  src={BILDUNGSGUTSCHEIN_IMAGES.squareStep1.src}
                  alt={BILDUNGSGUTSCHEIN_IMAGES.squareStep1.alt[lang]}
                  className="w-full max-w-[480px] aspect-square object-cover rounded-2xl sm:rounded-3xl shadow-md border border-gray-100"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Step 2: Square Image Left, Text Right (Alternating!) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="flex justify-center order-2 lg:order-1">
                <img
                  src={BILDUNGSGUTSCHEIN_IMAGES.squareStep2.src}
                  alt={BILDUNGSGUTSCHEIN_IMAGES.squareStep2.alt[lang]}
                  className="w-full max-w-[480px] aspect-square object-cover rounded-2xl sm:rounded-3xl shadow-md border border-gray-100"
                  loading="lazy"
                />
              </div>

              <div className="bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-9 border border-gray-100 shadow-sm order-1 lg:order-2">
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-[#e8eaf6] text-[#3949ab] mb-4">
                  {isEn ? "Step 2: German Documentation" : "Schritt 2: AZAV-Maßnahmeangebot"}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1a1d2e] mb-3">
                  {isEn
                    ? "Official Course Offer & Certification Details"
                    : "Offizielles Maßnahmeangebot mit Zulassungsnummer"}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {isEn
                    ? "Clarusway generates your official German Maßnahmeangebot in accordance with § 81 SGB III. It includes the exact AZAV certification number, daily timetable, and labor market justification for your caseworker."
                    : "Clarusway erstellt dein offizielles deutsches Maßnahmeangebot nach § 81 SGB III mit zertifizierter Maßnahmenummer, detailliertem Modulplan und schriftlicher Arbeitsmarkt-Begründung."}
                </p>

                <ul className="space-y-3 pt-5 border-t border-gray-100">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#3949ab]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Delivered within 24 hours of your initial consultation" : "Zustellung innerhalb von 24 Stunden nach deinem Erstgespräch"}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#3949ab]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "100% compliant with Bundesagentur für Arbeit requirements" : "Vollständig konform mit den Richtlinien der Bundesagentur für Arbeit"}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#3949ab]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Flexible cohorts and modular paths suited to your background" : "Modulare Lehrgangswahl passend zu deinen Vorkenntnissen"}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3: Text Left, Square Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-9 border border-gray-100 shadow-sm">
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-[#fde8ef] text-[#e51a59] mb-4">
                  {isEn ? "Step 3: Approval & Voucher" : "Schritt 3: Bewilligung & Gutschein"}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1a1d2e] mb-3">
                  {isEn
                    ? "Approval Letter & 100% Tuition Coverage"
                    : "Gutscheinbewilligung & Kostenübernahme"}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {isEn
                    ? "Present the Maßnahmeangebot at your appointment. Once approved, your advisor issues your Bildungsgutschein voucher. All tuition fees and exam costs are transferred directly from the agency to Clarusway."
                    : "Nach Vorlage deines Angebots stellt deine Vermittlungsfachkraft den Bildungsgutschein aus. Alle Kurs- und Prüfungskosten rechnet Clarusway direkt mit der Arbeitsagentur ab."}
                </p>

                <ul className="space-y-3 pt-5 border-t border-gray-100">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "0 € financial burden: 100% covered by the government" : "0 € Eigenanteil: Vollständige Übernahme aller Lehrgangskosten"}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Weiterbildungsgeld bonus (150 €/month) during the course" : "Monatlicher Weiterbildungsbonus von 150 € zusätzlich zum ALG I"}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Fast redemption within the 3-month voucher validity window" : "Schnelle Einlösung und Registrierung für deine Wunschkohorte"}</span>
                  </li>
                </ul>
              </div>

              <div className="flex justify-center">
                <img
                  src={BILDUNGSGUTSCHEIN_IMAGES.squareStep3.src}
                  alt={BILDUNGSGUTSCHEIN_IMAGES.squareStep3.alt[lang]}
                  className="w-full max-w-[480px] aspect-square object-cover rounded-2xl sm:rounded-3xl shadow-md border border-gray-100"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Step 4: Square Image Left, Text Right (Alternating!) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="flex justify-center order-2 lg:order-1">
                <img
                  src={BILDUNGSGUTSCHEIN_IMAGES.squareStep4.src}
                  alt={BILDUNGSGUTSCHEIN_IMAGES.squareStep4.alt[lang]}
                  className="w-full max-w-[480px] aspect-square object-cover rounded-2xl sm:rounded-3xl shadow-md border border-gray-100"
                  loading="lazy"
                />
              </div>

              <div className="bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-9 border border-gray-100 shadow-sm order-1 lg:order-2">
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-[#fde8ef] text-[#e51a59] mb-4">
                  {isEn ? "Step 4: Start Learning" : "Schritt 4: Kursstart & Karriere"}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1a1d2e] mb-3">
                  {isEn
                    ? "First Day of Live Online IT Bootcamp"
                    : "Erster Kurstag & Einstieg in deine IT-Zukunft"}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {isEn
                    ? "Log in from home, meet your cohort peers and senior instructors, and begin hands-on technical labs. From day one, you develop portfolio projects and receive structured career mentorship."
                    : "Starte bequem von zu Hause in deiner Live-Online-Klasse, lerne deine Dozenten kennen und entwickle praxisnahe Portfolio-Projekte mit kontinuierlicher Karrierebegleitung."}
                </p>

                <ul className="space-y-3 pt-5 border-t border-gray-100">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Full-time cohort instruction Monday–Friday 09:00–16:45 CET" : "Vollzeit-Unterricht montags bis freitags von 09:00 bis 16:45 Uhr"}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Daily mentorship, interactive coding exercises, and real Git projects" : "Tägliche Mentoren-Sprechstunden und praxisorientierte GitHub-Projekte"}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Dedicated career coaching and introduction to German hiring partners" : "Gezieltes Bewerbungstraining und Vermittlung an Partnerunternehmen"}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Preparing for your appointment + German language question */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div style={{ backgroundColor: SOFT_BG }} className="rounded-2xl p-7 border border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1a1d2e] mb-3">
                {isEn
                  ? "How to prepare for your appointment with the Agentur für Arbeit or Jobcenter"
                  : "Vorbereitung auf das Gespräch mit deiner Vermittlungsfachkraft"}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
                {isEn
                  ? "Advisors approve a Bildungsgutschein fastest when they see a realistic, well-researched career plan. Bring these four items to your meeting:"
                  : "Vermittlungsfachkräfte bewilligen einen Bildungsgutschein am schnellsten, wenn sie einen durchdachten Plan sehen. Bringe diese vier Unterlagen mit:"}
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
                {(isEn
                  ? [
                      "Clarusway's official German Maßnahmeangebot (including AZAV Maßnahmenummer and start date)",
                      "5 to 10 current English-speaking job postings in Germany matching your target role",
                      "An updated CV (Lebenslauf) and a brief explanation of why your previous role has limited prospects",
                      "Proof of your English proficiency and motivation for full-time online training",
                    ]
                  : [
                      "Das offizielle Clarusway-Maßnahmeangebot (mit AZAV-Maßnahmenummer, Dauer und Startdatum)",
                      "5 bis 10 aktuelle Stellenanzeigen aus deiner Region oder für Remote-Positionen im Zielberuf",
                      "Deinen aktuellen Lebenslauf und eine kurze schriftliche Begründung für deinen Weiterbildungswunsch",
                      "Bei Unsicherheit über das Berufsziel: Vorschlag für einen vorgeschalteten AVGS-Orientierungskurs",
                    ]
                ).map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircleIcon className="w-4 h-4 text-[#e51a59] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ backgroundColor: DARK }} className="rounded-2xl p-7 text-white flex flex-col justify-between">
              <div>
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-[#e51a59] text-white mb-3">
                  {isEn ? "Instruction Languages & Support" : "Unterrichtssprachen & Förderung"}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold mb-3">
                  {isEn
                    ? "Do I need to speak German to get a Bildungsgutschein?"
                    : "Flexible Unterrichtssprachen: Englisch, Türkisch & Deutsch"}
                </h2>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {isEn
                    ? "Clarusway offers live online IT training with instruction in English and Turkish, with German cohort options available. For your appointment at the Agentur für Arbeit or Jobcenter, Clarusway provides your complete application package in German so your advisor has every required AZAV number and justification."
                    : "Unsere Weiterbildungen werden flexibel auf Englisch und Türkisch angeboten (weitere Kohorten auf Deutsch in Planung). Unsere Förderberatung vorab und während des Kurses begleitet dich selbstverständlich auch durchgehend auf Deutsch."}
                </p>
              </div>
              <Link
                to={consultPath}
                style={{ backgroundColor: PRIMARY }}
                className="inline-flex items-center justify-center gap-2 text-white font-semibold px-6 py-3 rounded-full text-xs sm:text-sm hover:opacity-95"
              >
                <span>
                  {isEn
                    ? "Request your German Maßnahmeangebot now"
                    : "Jetzt individuelles Maßnahmeangebot anfordern"}
                </span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Eligible Courses (Component B14) */}
      <section style={{ backgroundColor: SOFT_BG }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e] mb-6">
            {isEn
              ? "IT courses you can take with a Bildungsgutschein"
              : "Geförderte IT-Kurse mit Bildungsgutschein"}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {(isEn
              ? [
                  { title: "AI Engineering Bootcamp", to: "/it-courses/ai-engineering/", meta: "32 Weeks · Data, ML & Agentic AI" },
                  { title: "AI-Assisted Full Stack Developer Course", to: "/it-courses/full-stack-developer/", meta: "4 Modules · React, Next.js & Node.js" },
                  { title: "AI-Enhanced Cyber Security Analyst Course", to: "/it-courses/cyber-security/", meta: "4 Modules · Security+, SOC & Cloud" },
                  { title: "AWS Solutions Architect & DevOps Training", to: "/it-courses/devops-aws/", meta: "3–8 Months · AWS, K8s & Terraform" },
                  { title: "SDET Course: Software Testing", to: "/it-courses/software-development-engineer-in-test/", meta: "Full-Time · QA & Test Automation" },
                  { title: "Kubernetes CKAD Certification Course", to: "/it-courses/kubernetes-ckad-certification-course/", meta: "4 Weeks · CNCF CKAD Prep" },
                ]
              : [
                  { title: "AI Engineer Weiterbildung", to: "/it-kurse/ai-engineer-weiterbildung/", meta: "32 Wochen · Data, ML & Agentic AI" },
                  { title: "Data Analytics Weiterbildung", to: "/it-kurse/data-analytics-weiterbildung/", meta: "13 Wochen · Python, SQL & Power BI" },
                  { title: "Full Stack Entwickler Weiterbildung", to: "/it-kurse/full-stack-entwickler-weiterbildung/", meta: "4 Module · React, Next.js & Node.js" },
                  { title: "Cyber Security Weiterbildung", to: "/it-kurse/cyber-security-weiterbildung/", meta: "4 Module · Security+, SOC & Cloud" },
                  { title: "AWS & DevOps Weiterbildung", to: "/it-kurse/aws-devops-weiterbildung/", meta: "3–8 Monate · AWS, K8s & Terraform" },
                  { title: "Software Testing (SDET) Weiterbildung", to: "/it-kurse/software-testing-weiterbildung/", meta: "Vollzeit · QA & Testautomatisierung" },
                ]
            ).map((c) => (
              <div
                key={c.to}
                className="bg-white rounded-2xl p-5 border border-gray-200 hover:border-[#e51a59] transition-colors"
              >
                <span className="text-[11px] font-bold text-[#e51a59] block mb-1">{c.meta}</span>
                <h3 className="text-base font-bold text-[#1a1d2e] mb-2">
                  <Link to={c.to} className="hover:text-[#e51a59]">
                    {c.title}
                  </Link>
                </h3>
                <Link
                  to={c.to}
                  className="text-xs font-semibold text-[#e51a59] hover:underline inline-flex items-center gap-1"
                >
                  <span>{c.title}</span>
                  <ArrowRightIcon className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>

          {/* Landscape Fresh Start Banner */}
          <div className="mt-14 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-gray-100">
            <img
              src={BILDUNGSGUTSCHEIN_IMAGES.landscapeFreshStart.src}
              alt={BILDUNGSGUTSCHEIN_IMAGES.landscapeFreshStart.alt[lang]}
              className="w-full max-h-[380px] sm:max-h-[440px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQ */}
      <section style={{ backgroundColor: SOFT_BG }} className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e] text-center mb-8">
            {isEn ? "Bildungsgutschein FAQ" : "Häufige Fragen zum Bildungsgutschein"}
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
                  <span style={{ color: PRIMARY }} className="w-7 h-7 rounded-full bg-[#fde8ef] flex items-center justify-center shrink-0 font-bold text-sm">
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
   3. AVGS PAGE (/avgs/)
   ============================================================================ */
export function AvgsPage() {
  const { lang } = useLanguage();
  const isEn = lang === "en";
  const consultPath = isEn ? "/application-form/" : "/beratung/";

  const metaTitle = isEn
    ? "AVGS Voucher in Germany: Free IT Career Coaching | Clarusway"
    : "AVGS Gutschein: Aktivierungs- und Vermittlungsgutschein | Clarusway";

  const metaDescription = isEn
    ? "What is an AVGS (Aktivierungs- und Vermittlungsgutschein)? Learn how to use an AVGS voucher for 100% funded IT career orientation at Clarusway."
    : "Alles zum AVGS (Aktivierungs- und Vermittlungsgutschein): Unterschied zum Bildungsgutschein, Voraussetzungen und 100 % Förderung für den IT-Orientierungskurs.";

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: DARK }} className="bg-white">
      <SeoHead title={metaTitle} description={metaDescription} path="/avgs/" />
      <Breadcrumb
        items={[
          {
            label: isEn ? "Financing & Tuition" : "Finanzierung",
            to: isEn ? "/financing-and-tuition/" : "/finanzierung/",
          },
          { label: "AVGS" },
        ]}
      />

      <section
        style={{ background: "linear-gradient(135deg, #fff8f9 0%, #fff 60%)" }}
        className="py-14 border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-[#fde8ef] text-[#e51a59] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-4">
                <ShieldCheckIcon className="w-4 h-4" />
                <span>
                  {isEn
                    ? "100% Free Career Coaching · § 45 SGB III"
                    : "100 % Kostenübernahme nach § 45 SGB III"}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1a1d2e] mb-4 leading-tight">
                {isEn
                  ? "AVGS voucher: free career orientation and coaching in Germany"
                  : "AVGS: Aktivierungs- und Vermittlungsgutschein für deine IT-Orientierung"}
              </h1>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                {isEn
                  ? "An AVGS (Aktivierungs- und Vermittlungsgutschein — activation and placement voucher) under § 45 SGB III covers 100% of career orientation, aptitude testing, and coaching — without using up your subsequent Bildungsgutschein for a full IT bootcamp."
                  : "Mit dem Aktivierungs- und Vermittlungsgutschein (AVGS) nach § 45 SGB III fördern die Agentur für Arbeit und das Jobcenter berufliche Orientierung, Eignungsfeststellung und Bewerbungscoaching zu 100 % — ohne deinen späteren Anspruch auf einen Bildungsgutschein zu schmälern."}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to={isEn ? "/it-orientation-course/" : "/it-orientierungskurs/"}
                  style={{ backgroundColor: PRIMARY }}
                  className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-full text-sm shadow-md hover:opacity-95"
                >
                  <span>
                    {isEn ? "Explore the IT Orientation Course" : "Zum IT-Orientierungskurs"}
                  </span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
                <Link
                  to={consultPath}
                  className="inline-flex items-center gap-2 border-2 border-[#1a1d2e] text-[#1a1d2e] font-semibold px-6 py-3.5 rounded-full text-sm hover:bg-[#1a1d2e] hover:text-white transition-colors"
                >
                  <span>{isEn ? "Free consultation" : "Kostenlose Beratung"}</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-gray-100">
                <img
                  src={AVGS_IMAGES.landscapeHero.src}
                  alt={AVGS_IMAGES.landscapeHero.alt[lang]}
                  className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e] mb-6">
            {isEn
              ? "AVGS vs. Bildungsgutschein: what is the difference?"
              : "Unterschied zwischen AVGS und Bildungsgutschein"}
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr style={{ backgroundColor: DARK }} className="text-white text-xs uppercase">
                  <th className="py-3.5 px-5">{isEn ? "Feature" : "Merkmal"}</th>
                  <th className="py-3.5 px-5">AVGS (§ 45 SGB III)</th>
                  <th className="py-3.5 px-5">Bildungsgutschein (§ 81 SGB III)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-xs sm:text-sm">
                <tr>
                  <th className="py-3.5 px-5 font-semibold">{isEn ? "Purpose" : "Ziel"}</th>
                  <td className="py-3.5 px-5">
                    {isEn ? "Career orientation, coaching & aptitude check" : "Orientierung, Eignungsfeststellung & Coaching"}
                  </td>
                  <td className="py-3.5 px-5">
                    {isEn ? "Full vocational qualification (IT Bootcamp)" : "Fachliche Qualifizierung (IT-Weiterbildung)"}
                  </td>
                </tr>
                <tr className="bg-[#f6f7fb]">
                  <th className="py-3.5 px-5 font-semibold">{isEn ? "Clarusway Program" : "Clarusway Kurs"}</th>
                  <td className="py-3.5 px-5">
                    <Link
                      to={isEn ? "/it-orientation-course/" : "/it-orientierungskurs/"}
                      className="text-[#e51a59] font-semibold underline"
                    >
                      {isEn ? "4-Week IT Orientation Course" : "4-Wochen IT-Orientierungskurs"}
                    </Link>
                  </td>
                  <td className="py-3.5 px-5">
                    <Link
                      to={isEn ? "/it-courses/" : "/it-kurse/"}
                      className="text-[#e51a59] font-semibold underline"
                    >
                      {isEn ? "All main IT bootcamps (3–8 months)" : "Alle IT-Hauptweiterbildungen (3–8 Monate)"}
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th className="py-3.5 px-5 font-semibold">{isEn ? "Can both be combined?" : "Kombinierbar?"}</th>
                  <td colSpan={2} className="py-3.5 px-5 font-medium text-emerald-700">
                    {isEn
                      ? "Yes — you can first discover your IT path with an AVGS and then fund the main bootcamp with a Bildungsgutschein."
                      : "Ja — erst mit AVGS orientieren und danach nahtlos mit Bildungsgutschein die Hauptweiterbildung starten."}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 4 Alternating Coaching Blocks */}
          <div className="mt-16 space-y-16">
            {/* Block 1: Text Left, Square Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div
                style={{ backgroundColor: SOFT_BG }}
                className="rounded-2xl sm:rounded-3xl p-7 sm:p-9 border border-gray-100 shadow-sm"
              >
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-[#fde8ef] text-[#e51a59] mb-4">
                  {isEn ? "Step 1: Individual Guidance" : "Schritt 1: Individuelle Orientierung"}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1a1d2e] mb-3">
                  {isEn
                    ? "1-on-1 Career Coaching via Video Call"
                    : "Persönliches 1-zu-1 Video-Coaching"}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {isEn
                    ? "Work directly with a certified IT career coach. Together, you analyze your previous professional experience, strengths, and language skills to map out a clear roadmap into Germany's tech sector."
                    : "Gemeinsam mit deinem persönlichen Karrierecoach analysierst du deine Vorkenntnisse, Stärken und Sprachkenntnisse, um deinen idealen Fahrplan in die IT-Branche zu erstellen."}
                </p>

                <ul className="space-y-3 pt-5 border-t border-gray-200/70">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Flexible 1-on-1 remote video sessions from home" : "Flexible Termine bequem per Video-Call von zu Hause"}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Comprehensive IT skill and aptitude assessment" : "Gezielte Kompetenzanalyse und Potenzialdiagnostik"}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "100% funded through your AVGS voucher" : "100 % Kostenübernahme mit deinem AVGS-Gutschein"}</span>
                  </li>
                </ul>
              </div>

              <div className="flex justify-center">
                <img
                  src={AVGS_IMAGES.squareVideoCall.src}
                  alt={AVGS_IMAGES.squareVideoCall.alt[lang]}
                  className="w-full max-w-[480px] aspect-square object-cover rounded-2xl sm:rounded-3xl shadow-md border border-gray-100"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Block 2: Square Image Left, Text Right (Alternating!) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="flex justify-center order-2 lg:order-1">
                <img
                  src={AVGS_IMAGES.squareCvReview.src}
                  alt={AVGS_IMAGES.squareCvReview.alt[lang]}
                  className="w-full max-w-[480px] aspect-square object-cover rounded-2xl sm:rounded-3xl shadow-md border border-gray-100"
                  loading="lazy"
                />
              </div>

              <div
                style={{ backgroundColor: SOFT_BG }}
                className="rounded-2xl sm:rounded-3xl p-7 sm:p-9 border border-gray-100 shadow-sm order-1 lg:order-2"
              >
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-[#e8eaf6] text-[#3949ab] mb-4">
                  {isEn ? "Step 2: Profile Optimization" : "Schritt 2: Profil & Unterlagen"}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1a1d2e] mb-3">
                  {isEn
                    ? "German CV & Portfolio Optimization"
                    : "Deutscher Lebenslauf & LinkedIn-Präsenz"}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {isEn
                    ? "German hiring standards differ significantly from other countries. We help you transform your CV, cover letter, and LinkedIn profile into an ATS-friendly, recruiter-ready package."
                    : "Wir optimieren deinen Lebenslauf, dein Anschreiben und dein LinkedIn-Profil nach aktuellen deutschen Bewerbungsstandards und ATS-Anforderungen."}
                </p>

                <ul className="space-y-3 pt-5 border-t border-gray-200/70">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#3949ab]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "ATS-compliant German and English CV formats" : "ATS-optimierte deutsche und englische Lebensläufe"}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#3949ab]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Highlighting transferable skills and tech certifications" : "Hervorhebung übertragbarer Stärken und IT-Zertifikate"}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#3949ab]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Polished GitHub profile and project showcases" : "Aussagekräftiges GitHub-Profil und Portfolio-Projekte"}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Block 3: Text Left, Square Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div
                style={{ backgroundColor: SOFT_BG }}
                className="rounded-2xl sm:rounded-3xl p-7 sm:p-9 border border-gray-100 shadow-sm"
              >
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-[#fde8ef] text-[#e51a59] mb-4">
                  {isEn ? "Step 3: Interview Training" : "Schritt 3: Interview-Training"}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1a1d2e] mb-3">
                  {isEn
                    ? "Mock Technical & HR Interviews"
                    : "Simulation von Vorstellungsgesprächen"}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {isEn
                    ? "Simulate real behavioral and technical interview scenarios. Learn how to explain career changes positively, solve whiteboard tasks, and negotiate competitive salaries."
                    : "Trainiere reale Bewerbungssituationen: Lerne, wie du deinen Quereinstieg überzeugend präsentierst, Fachfragen beantwortest und Gehaltsverhandlungen führst."}
                </p>

                <ul className="space-y-3 pt-5 border-t border-gray-200/70">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Realistic technical challenges and coding tasks" : "Realistische Coding-Challenges und Fachfragen"}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Actionable feedback to overcome interview anxiety" : "Konstruktives Feedback für mehr Sicherheit im Gespräch"}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Salary negotiation strategies for German tech companies" : "Gehaltsstrategien für den deutschen IT-Markt"}</span>
                  </li>
                </ul>
              </div>

              <div className="flex justify-center">
                <img
                  src={AVGS_IMAGES.squareMockInterview.src}
                  alt={AVGS_IMAGES.squareMockInterview.alt[lang]}
                  className="w-full max-w-[480px] aspect-square object-cover rounded-2xl sm:rounded-3xl shadow-md border border-gray-100"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Block 4: Square Image Left, Text Right (Alternating!) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="flex justify-center order-2 lg:order-1">
                <img
                  src={AVGS_IMAGES.squareHandshake.src}
                  alt={AVGS_IMAGES.squareHandshake.alt[lang]}
                  className="w-full max-w-[480px] aspect-square object-cover rounded-2xl sm:rounded-3xl shadow-md border border-gray-100"
                  loading="lazy"
                />
              </div>

              <div
                style={{ backgroundColor: SOFT_BG }}
                className="rounded-2xl sm:rounded-3xl p-7 sm:p-9 border border-gray-100 shadow-sm order-1 lg:order-2"
              >
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-[#fde8ef] text-[#e51a59] mb-4">
                  {isEn ? "Step 4: Job Placement" : "Schritt 4: Jobeinstieg"}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1a1d2e] mb-3">
                  {isEn
                    ? "Career Placement & Contract Signing"
                    : "Erfolgreicher Arbeitsvertrag in der Tech-Branche"}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {isEn
                    ? "Over 90% of our graduates land sustainable positions in Germany. We introduce you directly to our network of corporate hiring partners actively seeking junior and mid-level talent."
                    : "Über 90 % unserer betreuten Teilnehmer finden eine zukunftssichere Anstellung in Deutschland. Wir vernetzen dich mit Arbeitgebern aus unserem Partnernetzwerk."}
                </p>

                <ul className="space-y-3 pt-5 border-t border-gray-200/70 mb-6">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Direct referrals to vetted German hiring partners" : "Direkte Empfehlungen an geprüfte IT-Arbeitgeber in Deutschland"}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Support during probationary period (Probezeit)" : "Begleitung während der Probezeit für nachhaltigen Erfolg"}</span>
                  </li>
                </ul>

                <Link
                  to={consultPath}
                  style={{ backgroundColor: PRIMARY }}
                  className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-xl text-sm hover:opacity-90 transition-opacity"
                >
                  <span>{isEn ? "Request AVGS Coaching" : "AVGS-Coaching anfragen"}</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Landscape Career Banner */}
          <div className="mt-16 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-gray-100">
            <img
              src={AVGS_IMAGES.landscapeLandJob.src}
              alt={AVGS_IMAGES.landscapeLandJob.alt[lang]}
              className="w-full max-h-[380px] sm:max-h-[440px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

/* ============================================================================
   4. QUALIFIZIERUNGSCHANCENGESETZ PAGE (/qualifizierungschancengesetz/)
   ============================================================================ */
export function QcgPage() {
  const { lang } = useLanguage();
  const isEn = lang === "en";
  const [company, setCompany] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const metaTitle = isEn
    ? "Qualifizierungschancengesetz: Funded IT Training for Employees | Clarusway"
    : "Qualifizierungschancengesetz (QCG): Förderung für Beschäftigte | Clarusway";

  const metaDescription = isEn
    ? "Up to 100% tuition subsidy and 75% wage subsidy for employed staff in Germany under § 82 SGB III (Qualifizierungschancengesetz)."
    : "Staatliche Weiterbildungsförderung für Beschäftigte und Unternehmen nach § 82 SGB III (Qualifizierungschancengesetz): Bis zu 100 % Kurskosten & 75 % Arbeitsentgeltzuschuss.";

  const handleQcgSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !email.trim()) return;
    trackClaruswayEvent("Form_donusumu_qcg_de", { company, lang });
    setSubmitted(true);
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: DARK }} className="bg-white">
      <SeoHead
        title={metaTitle}
        description={metaDescription}
        path="/qualifizierungschancengesetz/"
      />
      <Breadcrumb
        items={[
          {
            label: isEn ? "Financing & Tuition" : "Finanzierung",
            to: isEn ? "/financing-and-tuition/" : "/finanzierung/",
          },
          { label: "Qualifizierungschancengesetz" },
        ]}
      />

      <section
        style={{ background: "linear-gradient(135deg, #fff8f9 0%, #fff 60%)" }}
        className="py-14 border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-[#fde8ef] text-[#e51a59] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-4">
                <ShieldCheckIcon className="w-4 h-4" />
                <span>
                  {isEn
                    ? "State Subsidies for Employers · § 82 SGB III"
                    : "Staatliche Förderung für Arbeitgeber · § 82 SGB III"}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1a1d2e] mb-4 leading-tight">
                {isEn
                  ? "Qualifizierungschancengesetz: state-funded IT training for employees in Germany"
                  : "Qualifizierungschancengesetz: Staatliche Förderung für Beschäftigte und Unternehmen"}
              </h1>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                {isEn
                  ? "Under the Qualifizierungschancengesetz (§ 82 SGB III), the Agentur für Arbeit supports companies in Germany that upskill their employees in AI, Cloud, Cyber Security, or Software Development — covering up to 100% of course fees and up to 75% of employee wages during training."
                  : "Über das Qualifizierungschancengesetz (§ 82 SGB III) bezuschusst die Agentur für Arbeit die Weiterbildung von Beschäftigten in Zukunftsfeldern wie KI, Cloud, Cyber Security und Softwareentwicklung mit bis zu 100 % der Lehrgangskosten und bis zu 75 % Arbeitsentgeltzuschuss."}
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#qcg-form"
                  style={{ backgroundColor: PRIMARY }}
                  className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-full text-sm shadow-md hover:opacity-95"
                >
                  <span>{isEn ? "Request QCG consultation" : "QCG-Förderung prüfen"}</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
                <Link
                  to={isEn ? "/enterprise-corporate-training/" : "/unternehmen/"}
                  className="inline-flex items-center gap-2 border-2 border-[#1a1d2e] text-[#1a1d2e] font-semibold px-6 py-3.5 rounded-full text-sm hover:bg-[#1a1d2e] hover:text-white transition-colors"
                >
                  <span>{isEn ? "Corporate IT training" : "B2B-Weiterbildung"}</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-gray-100">
                <img
                  src={QCG_IMAGES.landscapeHero.src}
                  alt={QCG_IMAGES.landscapeHero.alt[lang]}
                  className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e] mb-6">
            {isEn
              ? "Funding rates by company size (§ 82 SGB III)"
              : "Förderquoten nach Unternehmensgröße (§ 82 SGB III)"}
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-14">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr style={{ backgroundColor: DARK }} className="text-white text-xs uppercase">
                  <th className="py-4 px-5">{isEn ? "Company Size" : "Unternehmensgröße"}</th>
                  <th className="py-4 px-5">{isEn ? "Tuition Subsidy" : "Zuschuss Lehrgangskosten"}</th>
                  <th className="py-4 px-5">{isEn ? "Wage Subsidy (AEZ)" : "Arbeitsentgeltzuschuss"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-xs sm:text-sm">
                <tr>
                  <td className="py-4 px-5 font-semibold">
                    {isEn ? "Under 50 employees (Small)" : "Unter 50 Mitarbeitende (Kleinunternehmen)"}
                  </td>
                  <td className="py-4 px-5 font-bold text-emerald-700">100 %</td>
                  <td className="py-4 px-5 font-bold text-emerald-700">75 %</td>
                </tr>
                <tr className="bg-[#f6f7fb]">
                  <td className="py-4 px-5 font-semibold">
                    {isEn ? "50 to 499 employees (Medium)" : "50 bis 499 Mitarbeitende (Mittelstand)"}
                  </td>
                  <td className="py-4 px-5 font-bold text-emerald-700">50 %</td>
                  <td className="py-4 px-5 font-bold text-emerald-700">50 %</td>
                </tr>
                <tr>
                  <td className="py-4 px-5 font-semibold">
                    {isEn ? "500+ employees (Large)" : "Ab 500 Mitarbeitende (Großunternehmen)"}
                  </td>
                  <td className="py-4 px-5 font-bold text-emerald-700">25 %</td>
                  <td className="py-4 px-5 font-bold text-emerald-700">25 %</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 4 Alternating Corporate Upskilling Blocks */}
          <div className="mb-16 space-y-16">
            {/* Block 1: Text Left, Square Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div
                style={{ backgroundColor: SOFT_BG }}
                className="rounded-2xl sm:rounded-3xl p-7 sm:p-9 border border-gray-100 shadow-sm"
              >
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-[#fde8ef] text-[#e51a59] mb-4">
                  {isEn ? "Step 1: Strategic Planning" : "Schritt 1: Strategische Weiterbildungsplanung"}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1a1d2e] mb-3">
                  {isEn
                    ? "HR Upskilling Roadmap & Subsidies Plan"
                    : "HR-Weiterbildungsplan & Förderberatung"}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {isEn
                    ? "Our corporate advisors calculate your exact QCG subsidy eligibility according to company size. We prepare the complete documentation required by the Arbeitgeber-Service of the Agentur für Arbeit."
                    : "Unsere B2B-Berater berechnen die genaue Förderhöhe nach Unternehmensgröße und erstellen alle Antragsunterlagen für den Arbeitgeber-Service der Bundesagentur für Arbeit."}
                </p>

                <ul className="space-y-3 pt-5 border-t border-gray-200/70">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Up to 100% course cost coverage for small enterprises" : "Bis zu 100 % Lehrgangskostenzuschuss für KMU"}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Up to 75% wage reimbursement during training hours" : "Bis zu 75 % Arbeitsentgeltzuschuss (AEZ)"}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Complete turnkey handling of bureaucratic paperwork" : "Entlastung der internen Personalabteilung"}</span>
                  </li>
                </ul>
              </div>

              <div className="flex justify-center">
                <img
                  src={QCG_IMAGES.squareHrPlan.src}
                  alt={QCG_IMAGES.squareHrPlan.alt[lang]}
                  className="w-full max-w-[480px] aspect-square object-cover rounded-2xl sm:rounded-3xl shadow-md border border-gray-100"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Block 2: Square Image Left, Text Right (Alternating!) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="flex justify-center order-2 lg:order-1">
                <img
                  src={QCG_IMAGES.squareColleagues.src}
                  alt={QCG_IMAGES.squareColleagues.alt[lang]}
                  className="w-full max-w-[480px] aspect-square object-cover rounded-2xl sm:rounded-3xl shadow-md border border-gray-100"
                  loading="lazy"
                />
              </div>

              <div
                style={{ backgroundColor: SOFT_BG }}
                className="rounded-2xl sm:rounded-3xl p-7 sm:p-9 border border-gray-100 shadow-sm order-1 lg:order-2"
              >
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-[#e8eaf6] text-[#3949ab] mb-4">
                  {isEn ? "Step 2: Team Needs" : "Schritt 2: Teamanalyse & Skills"}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1a1d2e] mb-3">
                  {isEn
                    ? "Cross-Functional Team Skill Gap Analysis"
                    : "Bedarfsorientierte IT-Qualifizierung für Teams"}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {isEn
                    ? "Identify critical skills in Cloud Architecture, AI Automation, Kubernetes, and Data Analytics needed to keep your business competitive and innovative."
                    : "Identifizieren Sie gezielt die technologischen Lücken in Cloud Architecture, KI-Automatisierung, Kubernetes und Datenanalyse für Ihre Teams."}
                </p>

                <ul className="space-y-3 pt-5 border-t border-gray-200/70">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#3949ab]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Custom modular learning paths tailored to your stack" : "Maßgeschneiderte Lernpfade abgestimmt auf Ihren Tech-Stack"}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#3949ab]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Training in English, Turkish, or German for international workforces" : "Schulung auf Englisch, Türkisch oder Deutsch für internationale Teams"}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#3949ab]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "AZAV-certified course structures with accredited milestones" : "AZAV-zertifizierte Lehrpläne mit anerkannten Meilensteinen"}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Block 3: Text Left, Square Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div
                style={{ backgroundColor: SOFT_BG }}
                className="rounded-2xl sm:rounded-3xl p-7 sm:p-9 border border-gray-100 shadow-sm"
              >
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-[#fde8ef] text-[#e51a59] mb-4">
                  {isEn ? "Step 3: Training Format" : "Schritt 3: Praxisnaher Unterricht"}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1a1d2e] mb-3">
                  {isEn
                    ? "Live Online Classes During Working Hours"
                    : "Berufsbegleitendes Live-Online-Lernen"}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {isEn
                    ? "Employees join interactive classes remotely without travel overhead. Hands-on labs and real-world project simulations ensure immediate transfer of knowledge into daily company workflows."
                    : "Ihre Mitarbeitenden nehmen ohne Reiseaufwand am interaktiven Live-Online-Unterricht teil. Praktische Hands-on-Labs stellen den direkten Transfer in den Arbeitsalltag sicher."}
                </p>

                <ul className="space-y-3 pt-5 border-t border-gray-200/70">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Interactive live sessions led by industry veteran instructors" : "Interaktiver Unterricht mit erfahrenen Branchen-Dozenten"}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Real cloud environments and container deployments" : "Echte Cloud-Umgebungen und Container-Workloads"}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Continuous progress tracking and mentor office hours" : "Laufendes Leistungsfeedback und Betreuung"}</span>
                  </li>
                </ul>
              </div>

              <div className="flex justify-center">
                <img
                  src={QCG_IMAGES.squareOnlineClass.src}
                  alt={QCG_IMAGES.squareOnlineClass.alt[lang]}
                  className="w-full max-w-[480px] aspect-square object-cover rounded-2xl sm:rounded-3xl shadow-md border border-gray-100"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Block 4: Square Image Left, Text Right (Alternating!) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="flex justify-center order-2 lg:order-1">
                <img
                  src={QCG_IMAGES.squareTeamLead.src}
                  alt={QCG_IMAGES.squareTeamLead.alt[lang]}
                  className="w-full max-w-[480px] aspect-square object-cover rounded-2xl sm:rounded-3xl shadow-md border border-gray-100"
                  loading="lazy"
                />
              </div>

              <div
                style={{ backgroundColor: SOFT_BG }}
                className="rounded-2xl sm:rounded-3xl p-7 sm:p-9 border border-gray-100 shadow-sm order-1 lg:order-2"
              >
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-[#fde8ef] text-[#e51a59] mb-4">
                  {isEn ? "Step 4: Measurable Value" : "Schritt 4: Mehrwert & Zertifikat"}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1a1d2e] mb-3">
                  {isEn
                    ? "Certified Skills & Business Impact"
                    : "Zertifizierter Projekterfolg & ROI"}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {isEn
                    ? "Employees complete training with recognized industry certifications (AWS, CKAD, CompTIA) and present capstone projects directly addressing internal operational challenges."
                    : "Teilnehmende schließen mit anerkannten Branchenzertifikaten ab (AWS, CKAD, CompTIA) und setzen ihre neuen Fähigkeiten unmittelbar in Unternehmensprojekten um."}
                </p>

                <ul className="space-y-3 pt-5 border-t border-gray-200/70">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Industry-recognized credentials from AWS, Linux Foundation, etc." : "Anerkannte Zertifizierungen von AWS, Linux Foundation u.a."}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Increased employee retention and modernization of legacy systems" : "Höhere Mitarbeiterbindung und zukunftssichere IT-Systeme"}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Measurable ROI through reduced external agency dependencies" : "Messbare Kosteneinsparung durch internes IT-Know-how"}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Landscape Handshake Banner */}
          <div className="mb-14 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-gray-100">
            <img
              src={QCG_IMAGES.landscapeHandshake.src}
              alt={QCG_IMAGES.landscapeHandshake.alt[lang]}
              className="w-full max-h-[380px] sm:max-h-[440px] object-cover"
              loading="lazy"
            />
          </div>

          {/* QCG Inquiry Form (Form_donusumu_qcg_de) */}
          <div id="qcg-form" style={{ backgroundColor: DARK }} className="rounded-3xl p-8 sm:p-10 text-white max-w-3xl">
            <h2 className="text-2xl font-bold mb-2">
              {isEn
                ? "Request a QCG funding calculation for your team"
                : "Unverbindliche QCG-Förderprüfung anfordern"}
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm mb-6">
              {isEn
                ? "Clarusway prepares the complete Arbeitgeber-Service documentation for your HR department."
                : "Wir unterstützen Personalabteilungen und Beschäftigte bei der Antragstellung über den Arbeitgeber-Service der Agentur für Arbeit."}
            </p>

            {submitted ? (
              <div className="bg-white/10 border border-emerald-400/40 rounded-xl p-5 text-sm text-emerald-300 font-semibold">
                {isEn
                  ? "✓ Thank you! A Clarusway corporate QCG advisor will contact you within 24 hours."
                  : "✓ Vielen Dank! Unser QCG-Unternehmensberater meldet sich innerhalb von 24 Stunden bei Ihnen."}
              </div>
            ) : (
              <form onSubmit={handleQcgSubmit} className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder={isEn ? "Your name *" : "Ihr Name *"}
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-400"
                />
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder={isEn ? "Company name" : "Unternehmen"}
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-400"
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={isEn ? "Work email *" : "Geschäftliche E-Mail *"}
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-400"
                />
                <button
                  type="submit"
                  style={{ backgroundColor: PRIMARY }}
                  className="text-white font-semibold px-6 py-3 rounded-xl text-sm hover:opacity-95 cursor-pointer"
                >
                  {isEn ? "Request QCG consultation" : "QCG-Beratung anfordern"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ============================================================================
   5. CORPORATE TRAINING PAGE (/fuer-unternehmen/ & /enterprise-corporate-training/)
   ============================================================================ */
export function CorporateTrainingPage() {
  const { lang } = useLanguage();
  const isEn = lang === "en";
  const currentPath = isEn ? "/enterprise-corporate-training/" : "/fuer-unternehmen/";
  const consultPath = isEn ? "/application-form/" : "/beratung/";

  const metaTitle = isEn
    ? "Corporate IT Training in Germany | Clarusway"
    : "IT-Weiterbildung für Unternehmen & Teams | Clarusway";

  const metaDescription = isEn
    ? "Upskill your engineering and data teams in Germany with AZAV-certified training in AI Engineering, Cloud/DevOps, Cyber Security, and Kubernetes — subsidized via QCG."
    : "Praxisnahe IT-Weiterbildungen für Unternehmen in KI, Cloud, Cyber Security und Softwareentwicklung — förderbar über das Qualifizierungschancengesetz (QCG).";

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: DARK }} className="bg-white">
      <SeoHead title={metaTitle} description={metaDescription} path={currentPath} />
      <Breadcrumb
        items={[{ label: isEn ? "For Companies" : "Für Unternehmen" }]}
      />

      <section
        style={{ background: "linear-gradient(135deg, #fff8f9 0%, #fff 60%)" }}
        className="py-14 border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-[#fde8ef] text-[#e51a59] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-4">
                <BuildingIcon className="w-4 h-4" />
                <span>{isEn ? "B2B Upskilling & Talent Hiring" : "B2B-Qualifizierung & IT-Talente"}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1a1d2e] mb-4 leading-tight">
                {isEn
                  ? "Corporate IT training for companies in Germany"
                  : "IT-Weiterbildung für Unternehmen: Fachkräfte entwickeln und fördern"}
              </h1>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                {isEn
                  ? "Train your existing workforce in Agentic AI, AWS/Azure Cloud, Kubernetes CKAD, Cyber Security, or AI-Assisted Software Development — or hire job-ready English-speaking Clarusway graduates in Germany."
                  : "Qualifizieren Sie Ihre bestehenden Teams in Agentic AI, AWS/Azure Cloud, Kubernetes CKAD, Cyber Security oder moderner Softwareentwicklung — oder gewinnen Sie praxiserprobte Clarusway-Absolventen für Ihre offenen IT-Vakanzen."}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/qualifizierungschancengesetz/"
                  style={{ backgroundColor: PRIMARY }}
                  className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-full text-sm shadow-md hover:opacity-95"
                >
                  <span>
                    {isEn ? "Check QCG state subsidies" : "QCG-Förderung für Unternehmen prüfen"}
                  </span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
                <Link
                  to={consultPath}
                  className="inline-flex items-center gap-2 border-2 border-[#1a1d2e] text-[#1a1d2e] font-semibold px-6 py-3.5 rounded-full text-sm hover:bg-[#1a1d2e] hover:text-white transition-colors"
                >
                  <span>{isEn ? "Contact corporate team" : "Unternehmensberatung buchen"}</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-gray-100">
                <img
                  src={CORPORATE_TRAINING_IMAGES.landscapeHero.src}
                  alt={CORPORATE_TRAINING_IMAGES.landscapeHero.alt[lang]}
                  className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d2e] mb-8">
            {isEn
              ? "Popular corporate upskilling modules"
              : "Gefragte Weiterbildungsmodule für Unternehmen"}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: isEn
                  ? "AI Engineering & Agentic AI (13 Weeks)"
                  : "AI Engineering & Agentic AI (Modul 3 · 13 Wochen)",
                desc: isEn
                  ? "Equip developers and analysts to build production RAG pipelines, LLM integrations, and autonomous agents."
                  : "Befähigen Sie Entwickler und Analysten, produktionsreife RAG-Systeme und autonome KI-Agenten zu entwickeln.",
                to: isEn ? "/it-courses/ai-engineering/" : "/it-kurse/ai-engineer-weiterbildung/",
              },
              {
                title: isEn
                  ? "Kubernetes CKAD Certification (4 Weeks)"
                  : "Kubernetes CKAD Zertifikat Kurs (4 Wochen)",
                desc: isEn
                  ? "Compact 4-week hands-on Kubernetes container orchestration and CNCF CKAD exam prep."
                  : "Kompaktes 4-Wochen-Praxistraining für Cloud-Native-Teams inklusive CNCF CKAD Prüfungsvorbereitung.",
                to: isEn
                  ? "/it-courses/kubernetes-ckad-certification-course/"
                  : "/it-kurse/kubernetes-ckad-zertifikat-kurs/",
              },
              {
                title: isEn
                  ? "AI-Enhanced SOC & Cloud Security"
                  : "KI-gestütztes SOC & AWS Cloud Security",
                desc: isEn
                  ? "Train IT administrators in SIEM incident response, SOAR automation, and NIS-2 cloud security."
                  : "Qualifizieren Sie Ihr IT-Team in SIEM-Überwachung, Incident Response und AWS Cloud Security.",
                to: isEn ? "/it-courses/cyber-security/" : "/it-kurse/cyber-security-weiterbildung/",
              },
            ].map((item) => (
              <div
                key={item.to}
                style={{ backgroundColor: SOFT_BG }}
                className="rounded-2xl p-6 border border-gray-200 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-[#1a1d2e] mb-2">
                    <Link to={item.to} className="hover:text-[#e51a59]">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <Link
                  to={item.to}
                  className="text-xs font-semibold text-[#e51a59] hover:underline inline-flex items-center gap-1"
                >
                  <span>{item.title}</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

          {/* 4 Alternating B2B Training Blocks */}
          <div className="mt-16 space-y-16">
            {/* Block 1: Text Left, Square Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div
                style={{ backgroundColor: SOFT_BG }}
                className="rounded-2xl sm:rounded-3xl p-7 sm:p-9 border border-gray-100 shadow-sm"
              >
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-[#fde8ef] text-[#e51a59] mb-4">
                  {isEn ? "Format 1: Tailored Bootcamps" : "Format 1: Maßgeschneiderte Bootcamps"}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1a1d2e] mb-3">
                  {isEn
                    ? "Interactive Corporate Workshops & Intensive Bootcamps"
                    : "Interaktive Firmen-Workshops & Intensiv-Bootcamps"}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {isEn
                    ? "Upskill whole squads or cross-functional departments with intensive live workshops led by industry practitioners. Custom curricula cover Agentic AI, Cloud Platforms (AWS, Azure), Cyber Defense, and Test Automation."
                    : "Qualifizieren Sie ganze Teams mit praxisorientierten Live-Workshops erfahrener Lead-Trainer. Unsere Lehrpläne decken Agentic AI, Cloud-Plattformen, Cyber Defense und moderne Testautomatisierung ab."}
                </p>

                <ul className="space-y-3 pt-5 border-t border-gray-200/70">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Hands-on coding labs aligned to company architecture" : "Praxisnahe Labs abgestimmt auf Ihre Systemarchitektur"}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Live cohort instruction in English, German, or Turkish" : "Live-Unterricht auf Englisch, Deutsch oder Türkisch"}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Measurable skills validation with capstone projects" : "Messbarer Lernerfolg durch reale Abschlussprojekte"}</span>
                  </li>
                </ul>
              </div>

              <div className="flex justify-center">
                <img
                  src={CORPORATE_TRAINING_IMAGES.squareWorkshop.src}
                  alt={CORPORATE_TRAINING_IMAGES.squareWorkshop.alt[lang]}
                  className="w-full max-w-[480px] aspect-square object-cover rounded-2xl sm:rounded-3xl shadow-md border border-gray-100"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Block 2: Square Image Left, Text Right (Alternating!) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="flex justify-center order-2 lg:order-1">
                <img
                  src={CORPORATE_TRAINING_IMAGES.squareOnline.src}
                  alt={CORPORATE_TRAINING_IMAGES.squareOnline.alt[lang]}
                  className="w-full max-w-[480px] aspect-square object-cover rounded-2xl sm:rounded-3xl shadow-md border border-gray-100"
                  loading="lazy"
                />
              </div>

              <div
                style={{ backgroundColor: SOFT_BG }}
                className="rounded-2xl sm:rounded-3xl p-7 sm:p-9 border border-gray-100 shadow-sm order-1 lg:order-2"
              >
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-[#e8eaf6] text-[#3949ab] mb-4">
                  {isEn ? "Format 2: Remote & Hybrid" : "Format 2: International & Flexibel"}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1a1d2e] mb-3">
                  {isEn
                    ? "Global Teams & Seamless Hybrid Training"
                    : "Internationale Teams & Hybrides Lernen"}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {isEn
                    ? "Train distributed remote teams across time zones with recorded sessions, interactive breakout rooms, and cloud-hosted development sandboxes."
                    : "Schulen Sie verteilte Teams standortübergreifend: Mit aufgezeichneten Live-Sessions, interaktiven Breakout-Rooms und cloudbasierten Übungsumgebungen."}
                </p>

                <ul className="space-y-3 pt-5 border-t border-gray-200/70">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#3949ab]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Pre-configured cloud sandboxes: zero local installation setup" : "Vorkonfigurierte Cloud-Sandboxes ohne lokalen Installationsaufwand"}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#3949ab]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Flexible part-time and full-time schedules around sprints" : "Flexible Schulungszeiten passend zu Ihren Sprint-Zyklen"}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#3949ab]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Enterprise attendance tracking and certification records" : "Detailliertes Reporting für HR und Management"}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Block 3: Text Left, Square Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div
                style={{ backgroundColor: SOFT_BG }}
                className="rounded-2xl sm:rounded-3xl p-7 sm:p-9 border border-gray-100 shadow-sm"
              >
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-[#fde8ef] text-[#e51a59] mb-4">
                  {isEn ? "Format 3: Mentorship" : "Format 3: Senior Mentoring"}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1a1d2e] mb-3">
                  {isEn
                    ? "Senior Engineering Mentorship & Practical Labs"
                    : "Senior Coaching & Praxis-Labs"}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {isEn
                    ? "Our principal instructors mentor your developers through code reviews, architectural decisions, and production-grade CI/CD and security best practices."
                    : "Unsere Lead-Dozenten begleiten Ihre Entwickler bei Code Reviews, Architekturentscheidungen und Best Practices für CI/CD und Sicherheit."}
                </p>

                <ul className="space-y-3 pt-5 border-t border-gray-200/70">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "1-on-1 and small-group architectural coaching" : "1-zu-1 und Kleingruppen-Architektur-Coaching"}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Real production scenarios and disaster recovery labs" : "Reale Produktionsszenarien und Ausfalltests"}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Security, compliance, and NIS-2 audit preparation" : "NIS-2 Compliance und Sicherheits-Audits"}</span>
                  </li>
                </ul>
              </div>

              <div className="flex justify-center">
                <img
                  src={CORPORATE_TRAINING_IMAGES.squareCoaching.src}
                  alt={CORPORATE_TRAINING_IMAGES.squareCoaching.alt[lang]}
                  className="w-full max-w-[480px] aspect-square object-cover rounded-2xl sm:rounded-3xl shadow-md border border-gray-100"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Block 4: Square Image Left, Text Right (Alternating!) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="flex justify-center order-2 lg:order-1">
                <img
                  src={CORPORATE_TRAINING_IMAGES.squareRoadmap.src}
                  alt={CORPORATE_TRAINING_IMAGES.squareRoadmap.alt[lang]}
                  className="w-full max-w-[480px] aspect-square object-cover rounded-2xl sm:rounded-3xl shadow-md border border-gray-100"
                  loading="lazy"
                />
              </div>

              <div
                style={{ backgroundColor: SOFT_BG }}
                className="rounded-2xl sm:rounded-3xl p-7 sm:p-9 border border-gray-100 shadow-sm order-1 lg:order-2"
              >
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-[#fde8ef] text-[#e51a59] mb-4">
                  {isEn ? "Format 4: Strategic Roadmap" : "Format 4: Zukunfts-Roadmap"}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1a1d2e] mb-3">
                  {isEn
                    ? "Custom Agile Curriculum & Enterprise Tech Roadmap"
                    : "Agile Trainings-Roadmap für Ihre Organisation"}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {isEn
                    ? "We work closely with engineering leadership and HR directors to design long-term training plans that future-proof your organization and support talent retention."
                    : "Gemeinsam mit Engineering Leads und Personalverantwortlichen entwickeln wir nachhaltige Qualifizierungs-Roadmaps zur langfristigen Mitarbeiterbindung."}
                </p>

                <ul className="space-y-3 pt-5 border-t border-gray-200/70 mb-6">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Customized modules based on your tools (AWS, GCP, K8s, Python)" : "Individuelle Module für Ihre Toolchain (AWS, K8s, Python)"}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Full eligibility for German state subsidies (QCG § 82 SGB III)" : "Volle Förderfähigkeit über das QCG (§ 82 SGB III)"}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-md bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#e51a59]">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                    </div>
                    <span>{isEn ? "Direct access to hire vetted Clarusway bootcamp graduates" : "Direkter Zugriff auf qualifizierte Absolventen für offene Stellen"}</span>
                  </li>
                </ul>

                <Link
                  to={consultPath}
                  style={{ backgroundColor: PRIMARY }}
                  className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-xl text-sm hover:opacity-90 transition-opacity"
                >
                  <span>{isEn ? "Request Corporate Roadmap" : "Unternehmensberatung anfragen"}</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Landscape Team Leader Banner */}
          <div className="mt-16 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-gray-100">
            <img
              src={CORPORATE_TRAINING_IMAGES.landscapeTeamLeader.src}
              alt={CORPORATE_TRAINING_IMAGES.landscapeTeamLeader.alt[lang]}
              className="w-full max-h-[380px] sm:max-h-[440px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
