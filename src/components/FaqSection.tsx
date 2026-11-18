import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "./Icons";
import { useLanguage } from "../context/LanguageContext";
import { trackClaruswayEvent } from "./SeoHead";

const PRIMARY = "#e51a59";
const DARK = "#1a1d2e";

export interface FaqItem {
  q: string;
  a: React.ReactNode;
}

export interface FaqSectionProps {
  badge?: string;
  title: string;
  description?: string;
  items: FaqItem[];
  consultPath?: string;
  consultText?: string;
  showContactInfo?: boolean;
  contactAddress?: string;
  contactEmail?: string;
  contactPhone?: string;
  className?: string;
  id?: string;
  trackingSource?: string;
}

/**
 * Standard 2-column FAQ section with branded pink accordion triggers,
 * advisory contact card, and consultation CTA.
 * Matches Clarusway Germany Design System (Component B13).
 */
export const FaqSection: React.FC<FaqSectionProps> = ({
  badge = "FAQ",
  title,
  description,
  items,
  consultPath,
  consultText,
  showContactInfo = true,
  contactAddress = "Bataver Str. 84, 41462 Neuss",
  contactEmail = "info@clarusway.de",
  contactPhone = "+49 2131 776 2749",
  className = "py-16 bg-white",
  id = "faq",
  trackingSource,
}) => {
  const { language } = useLanguage();
  const isEn = language === "en";

  const defaultDesc = isEn
    ? "Have questions about the curriculum, English live classes, or how to apply for your Bildungsgutschein in Germany? Our advisory team is happy to help."
    : "Hast du Fragen zum Lehrplan, zum Live-Unterricht oder zur Förderung mit Bildungsgutschein? Unsere Studienberatung hilft dir gerne persönlich weiter.";

  const resolvedConsultPath = consultPath || (isEn ? "/application-form/" : "/beratung/");
  const resolvedConsultText = consultText || (isEn ? "Free consultation" : "Kostenlose Beratung");

  return (
    <section id={id} className={className} aria-labelledby={`${id}-heading`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        {/* Left Column: Title, Advisory Intro, Direct Contact & CTA */}
        <div className="md:col-span-5">
          {badge && (
            <div
              className="text-xs font-medium uppercase tracking-widest mb-2"
              style={{ color: PRIMARY }}
            >
              {badge}
            </div>
          )}
          <h2
            id={`${id}-heading`}
            className="font-medium tracking-[-0.02em] text-2xl sm:text-3xl mb-4 leading-tight"
            style={{ color: DARK }}
          >
            {title}
          </h2>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            {description || defaultDesc}
          </p>

          {showContactInfo && (
            <div className="space-y-2.5 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#e51a59] shrink-0" aria-hidden="true" />
                <span>{contactAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#e51a59] shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${contactEmail}`}
                  className="hover:underline focus:outline-none focus:ring-1 focus:ring-[#e51a59] rounded"
                >
                  {contactEmail}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#e51a59] shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${contactPhone.replace(/\s+/g, "")}`}
                  className="hover:underline focus:outline-none focus:ring-1 focus:ring-[#e51a59] rounded"
                >
                  {contactPhone}
                </a>
              </div>
            </div>
          )}

          <Link
            to={resolvedConsultPath}
            onClick={() => {
              if (trackingSource) {
                trackClaruswayEvent("beratung_angefragt", { source: trackingSource, lang: language });
              }
            }}
            style={{ background: PRIMARY }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium text-sm hover:opacity-90 transition-opacity shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e51a59] focus:ring-offset-2"
          >
            <span>{resolvedConsultText}</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

        {/* Right Column: Pink Trigger Accordion List */}
        <div className="md:col-span-7 space-y-3">
          {items.map((faq, idx) => (
            <details
              key={idx}
              open={idx === 0}
              className="group rounded-xl overflow-hidden border border-gray-200 bg-white"
            >
              <summary
                style={{ background: PRIMARY }}
                className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none select-none text-white hover:opacity-95 transition-opacity"
              >
                <span className="text-sm font-medium text-white text-left leading-snug">
                  {faq.q}
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
              <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed bg-white">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
