import React from "react";
import {
  CheckCircleIcon,
  VideoCameraIcon,
  UsersIcon,
  GlobeIcon,
  ShieldCheckIcon,
  ClockIcon,
  BookOpenIcon,
  AwardIcon,
  CalendarIcon,
  type SvgIconProps,
} from "./Icons";

export interface KeyFactItem {
  icon?: React.ComponentType<SvgIconProps>;
  title: string;
  subtitle: string;
}

export interface TrustKeyFactsBarProps {
  items?: KeyFactItem[];
  isEn?: boolean;
  className?: string;
}

export function TrustKeyFactsBar({
  items,
  isEn = false,
  className = "",
}: TrustKeyFactsBarProps) {
  const defaultItems: KeyFactItem[] = isEn
    ? [
        {
          icon: CheckCircleIcon,
          title: "0 € Tuition",
          subtitle: "100% funded with Bildungsgutschein",
        },
        {
          icon: VideoCameraIcon,
          title: "100% Live-Online",
          subtitle: "Interactive instructors, no pre-recorded videos",
        },
        {
          icon: UsersIcon,
          title: "Max. 15 Students",
          subtitle: "Small cohorts with 1-on-1 mentoring",
        },
        {
          icon: GlobeIcon,
          title: "3 Cohort Languages",
          subtitle: "German, English & Turkish",
        },
        {
          icon: ShieldCheckIcon,
          title: "AZAV-Certified",
          subtitle: "Recognized by Jobcenter & Agentur für Arbeit",
        },
      ]
    : [
        {
          icon: CheckCircleIcon,
          title: "0 € Kosten",
          subtitle: "100 % förderfähig mit Bildungsgutschein",
        },
        {
          icon: VideoCameraIcon,
          title: "100 % Live-Unterricht",
          subtitle: "Interaktiv mit Dozenten, keine Videos",
        },
        {
          icon: UsersIcon,
          title: "Max. 15 Teilnehmende",
          subtitle: "Kleine Klassen mit 1-zu-1 Mentoring",
        },
        {
          icon: GlobeIcon,
          title: "3 Unterrichtssprachen",
          subtitle: "Deutsch, Englisch & Türkisch",
        },
        {
          icon: ShieldCheckIcon,
          title: "AZAV-Zertifiziert",
          subtitle: "Anerkannt bei Agentur für Arbeit & Jobcenter",
        },
      ];

  const displayItems = items && items.length > 0 ? items : defaultItems;
  const colCount = displayItems.length;

  return (
    <section
      aria-label={isEn ? "Key facts and trust badges" : "Wichtigste Eckdaten und Qualitätsmerkmale"}
      className={`bg-[#FAF8F5] border-y border-stone-200/90 py-5 sm:py-6 relative z-10 ${className}`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${
            colCount === 4 ? "lg:grid-cols-4" : "lg:grid-cols-5"
          } gap-y-4 sm:gap-y-5 gap-x-2 sm:gap-x-4 lg:gap-x-0 items-center`}
        >
          {displayItems.map((item, idx) => {
            const IconComponent = item.icon || CheckCircleIcon;
            return (
              <div
                key={idx}
                className={`flex items-center gap-3.5 sm:gap-4 py-1.5 sm:py-2 ${
                  idx > 0
                    ? "lg:border-l lg:border-stone-300/80 lg:pl-6 xl:pl-8"
                    : ""
                } ${idx < colCount - 1 ? "lg:pr-6 xl:pr-8" : ""}`}
              >
                {/* Refined outline icon */}
                <div className="shrink-0 text-[#E51A59]">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                {/* Text Content */}
                <div className="min-w-0">
                  <div className="text-sm sm:text-[14.5px] font-medium text-[#1a1d2e] tracking-tight leading-snug">
                    {item.title}
                  </div>
                  <p className="text-xs text-slate-500 font-normal leading-normal mt-0.5 truncate sm:whitespace-normal">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/**
 * Helper to automatically pick the most appropriate icon for course infoStrip tuples
 */
export function getIconForCourseInfoStrip(val: string, label: string): React.ComponentType<SvgIconProps> {
  const combined = `${val} ${label}`.toLowerCase();
  if (
    combined.includes("dauer") ||
    combined.includes("duration") ||
    combined.includes("wochen") ||
    combined.includes("weeks") ||
    combined.includes("monate") ||
    combined.includes("months") ||
    combined.includes("vollzeit") ||
    combined.includes("full-time")
  ) {
    return ClockIcon;
  }
  if (
    combined.includes("sprache") ||
    combined.includes("language") ||
    combined.includes("deutsch") ||
    combined.includes("englisch") ||
    combined.includes("türkisch") ||
    combined.includes("german") ||
    combined.includes("english") ||
    combined.includes("turkish")
  ) {
    return GlobeIcon;
  }
  if (
    combined.includes("teilnehmende") ||
    combined.includes("klasse") ||
    combined.includes("students") ||
    combined.includes("cohort") ||
    combined.includes("gruppe")
  ) {
    return UsersIcon;
  }
  if (
    combined.includes("azav") ||
    combined.includes("bildungsgutschein") ||
    combined.includes("avgs") ||
    combined.includes("zertifikat") ||
    combined.includes("förderung")
  ) {
    return ShieldCheckIcon;
  }
  if (
    combined.includes("partner") ||
    combined.includes("aws") ||
    combined.includes("ckad") ||
    combined.includes("security") ||
    combined.includes("ki-") ||
    combined.includes("ai-")
  ) {
    return AwardIcon;
  }
  if (
    combined.includes("online") ||
    combined.includes("live") ||
    combined.includes("unterricht")
  ) {
    return VideoCameraIcon;
  }
  return AwardIcon;
}
