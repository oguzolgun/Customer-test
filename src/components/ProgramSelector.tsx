import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { trackGa4Event } from "@/components/SeoHead";

const PRIMARY = "#e51a59";
const SECONDARY = "#8a1c4a";
const CREAM = "#f8f5f1";

export interface CourseModule {
  id: string | number;
  label: string;
  title: string;
  duration: string;
  color: string;
  topics: string[];
  prerequisite?: string;
  project?: string;
}

export interface CourseProgram {
  id: string;
  anchorId?: string;
  title: string;
  subtitle?: string;
  badge: string;
  moduleIds: (string | number)[];
  startsAt: string | number;
  duration: string;
  schedule: string;
  capacity: string;
  language: string;
  dates: string[];
  recommended?: boolean;
  description: string;
  curriculumPdfName?: string;
  enrollUrl?: string;
}

export interface DirectEntryInfo {
  heading: string;
  items: { badge: string; title: string; prereqs: string }[];
}

function CalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M14.25 2.25H13.5V.75a.75.75 0 0 0-1.5 0v1.5h-6V.75a.75.75 0 0 0-1.5 0v1.5H3.75A2.25 2.25 0 0 0 1.5 4.5v10.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.5a2.25 2.25 0 0 0-2.25-2.25Zm.75 12.75a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V7.5h12v7.5Zm0-9H3V4.5a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 .75.75v1.5Z"
        fill={PRIMARY}
      />
    </svg>
  );
}

function ModuleChip({
  mod,
  active,
  dark = false,
}: {
  mod: CourseModule;
  active: boolean;
  dark?: boolean;
}) {
  if (dark) {
    return (
      <div
        className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold"
        style={{
          background: active ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.06)",
          color: active ? "#fff" : "rgba(255,255,255,0.35)",
          border: `1.5px solid ${active ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.12)"}`,
        }}
      >
        <span
          className="w-3.5 h-3.5 rounded-full flex items-center justify-center text-[9px] font-bold"
          style={{ background: active ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.05)" }}
        >
          {String(mod.id).slice(0, 2).toUpperCase()}
        </span>
        {mod.label}
      </div>
    );
  }
  return (
    <div
      className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold"
      style={{
        background: active ? mod.color : "#eee",
        color: active ? "#fff" : "#888",
        border: `1.5px solid ${active ? mod.color : "#ddd"}`,
      }}
    >
      <span
        className="w-3.5 h-3.5 rounded-full flex items-center justify-center text-[9px] font-bold"
        style={{
          background: active ? "rgba(255,255,255,0.25)" : "#ccc",
          color: active ? "#fff" : "#666",
        }}
      >
        {String(mod.id).slice(0, 2).toUpperCase()}
      </span>
      {mod.label}
    </div>
  );
}

function ProgramDetail({
  program,
  modules,
  onOpenPdfModal,
}: {
  program: CourseProgram;
  modules: CourseModule[];
  onOpenPdfModal?: (programTitle: string, pdfName: string) => void;
}) {
  const { lang } = useLanguage();
  const consultPath = lang === "de" ? "/beratung/" : "/application-form/";
  const pdfFileName =
    program.curriculumPdfName ||
    `clarusway-${program.id.toLowerCase()}-${lang === "de" ? "lehrplan" : "curriculum"}.pdf`;

  return (
    <div className="flex flex-col gap-4" id={program.anchorId}>
      {/* Gradient header — contains the single H3 for this program variant */}
      <div
        className="rounded-2xl p-5 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${SECONDARY} 0%, ${PRIMARY} 100%)` }}
      >
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 80% 20%, white 0%, transparent 60%)" }}
        />
        <div className="relative z-10">
          <div className="flex items-start justify-between gap-3 flex-wrap">
            <div className="flex-1 min-w-0">
              <div className="text-white/70 text-[10px] font-semibold uppercase tracking-widest mb-1">
                {program.language} · {program.badge}
              </div>
              <h3 className="text-white font-bold text-base md:text-lg leading-snug">
                {program.title}
                {program.subtitle && (
                  <span className="font-normal text-white/75"> — {program.subtitle}</span>
                )}
              </h3>
              <p className="text-white/80 text-xs mt-2 leading-relaxed">{program.description}</p>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="text-white font-bold text-xl">{program.duration}</div>
              <div className="text-white/70 text-[11px] mt-0.5">{program.schedule}</div>
              <div className="text-white/70 text-[11px]">{program.capacity}</div>
            </div>
          </div>

          {/* Learning path */}
          <div className="mt-4 pt-4 border-t border-white/20">
            <div className="text-white/60 text-[10px] font-semibold uppercase tracking-widest mb-2">
              {lang === "de" ? "Lernpfad" : "Learning path"}
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {modules.map((mod, i) => {
                const included = program.moduleIds.includes(mod.id);
                const isStart = mod.id === program.startsAt;
                return (
                  <div key={String(mod.id)} className="flex items-center gap-2">
                    {i > 0 && (
                      <div
                        className="w-4 h-0.5 rounded-full"
                        style={{
                          background: included
                            ? "rgba(255,255,255,0.45)"
                            : "rgba(255,255,255,0.12)",
                        }}
                      />
                    )}
                    <div className="relative">
                      <ModuleChip mod={mod} active={included} dark />
                      {isStart && program.startsAt !== modules[0]?.id && (
                        <span
                          className="absolute -top-2 -right-1 text-[8px] bg-white font-bold px-1 rounded-full"
                          style={{ color: PRIMARY }}
                        >
                          START
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
              <div className="text-white/60 text-[10px] ml-1">
                {program.startsAt === modules[0]?.id
                  ? lang === "de"
                    ? "· Keine Vorkenntnisse nötig"
                    : "· No prior experience required"
                  : lang === "de"
                    ? "· Einstieg mit Einstufungstest"
                    : "· Direct entry via technical assessment"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Module cards */}
      <div
        className={`grid grid-cols-1 gap-3 ${
          modules.length === 3
            ? "sm:grid-cols-3"
            : modules.length === 4
              ? "sm:grid-cols-4"
              : "sm:grid-cols-2"
        }`}
      >
        {modules.map((mod) => {
          const included = program.moduleIds.includes(mod.id);
          return (
            <div
              key={String(mod.id)}
              className="rounded-xl p-4 border transition-all duration-200 relative overflow-hidden"
              style={{
                borderColor: included ? mod.color + "44" : "#e5e5e5",
                background: included ? "#fff" : "#fafafa",
                opacity: included ? 1 : 0.45,
              }}
            >
              {!included && (
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <span
                    className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                    style={{ background: "#e5e5e5", color: "#666" }}
                  >
                    {lang === "de" ? "Nicht enthalten" : "Not included"}
                  </span>
                </div>
              )}
              <div className="flex items-center gap-2 mb-2.5">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                  style={{ background: included ? mod.color : "#ccc" }}
                >
                  {String(mod.id).slice(0, 2).toUpperCase()}
                </div>
                <div className="min-w-0">
                  <div
                    className="text-[9px] font-bold uppercase tracking-widest"
                    style={{ color: included ? mod.color : "#999" }}
                  >
                    {mod.label} · {mod.duration}
                  </div>
                  <div className="font-bold text-xs text-gray-900 leading-tight">{mod.title}</div>
                </div>
              </div>
              <ul className="space-y-1">
                {mod.topics.map((t) => (
                  <li key={t} className="flex items-center gap-1.5 text-[11px] text-gray-600">
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: included ? mod.color : "#ccc" }}
                    />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Dates + Actions (No heading tags for short labels per SEO rule) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div
          className="rounded-xl p-4 border"
          style={{ borderColor: `${PRIMARY}22`, background: "#fff" }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div
              className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: `${PRIMARY}15` }}
            >
              <CalIcon />
            </div>
            <span className="font-bold text-sm text-gray-900">
              {lang === "de" ? "Nächste Starttermine" : "Upcoming start dates"}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {program.dates.map((d) => {
              const parts = d.split(" ");
              return (
                <div
                  key={d}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-medium"
                  style={{ borderColor: `${PRIMARY}33`, background: `${PRIMARY}08` }}
                >
                  <CalIcon />
                  <span style={{ color: SECONDARY }}>
                    {parts[0]} {parts[1]}
                  </span>
                  <span className="text-gray-500">{parts[2]}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="rounded-xl p-4 border flex flex-col gap-2.5"
          style={{ borderColor: "#e5e5e5", background: "#fff" }}
        >
          <span className="font-bold text-sm text-gray-900 mb-0.5">
            {lang === "de" ? "Jetzt starten" : "Start your application"}
          </span>
          <Link
            to={consultPath}
            onClick={() => trackGa4Event("beratung_angefragt", { course: program.title })}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-white font-bold text-sm transition-all hover:opacity-90"
            style={{ background: PRIMARY }}
          >
            {lang === "de" ? "Jetzt anmelden" : "Apply now"}
          </Link>
          <button
            type="button"
            onClick={() => {
              trackGa4Event("lehrplan_download", { course: program.title, file: pdfFileName });
              if (onOpenPdfModal) {
                onOpenPdfModal(program.title, pdfFileName);
              } else {
                const el = document.getElementById("curriculum-download");
                el?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm border-2 transition-all hover:bg-pink-50"
            style={{ borderColor: PRIMARY, color: PRIMARY }}
          >
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M8.75 1.25a.75.75 0 0 0-1.5 0v6.44L5.03 5.47a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 7.69V1.25ZM2 9.25a.75.75 0 0 1 .75.75v2.5h10.5V10a.75.75 0 0 1 1.5 0v2.75A1.25 1.25 0 0 1 13.5 14h-11A1.25 1.25 0 0 1 1.25 12.75V10a.75.75 0 0 1 .75-.75Z"
                fill={PRIMARY}
              />
            </svg>
            {lang === "de" ? "Lehrplan herunterladen" : "Download curriculum PDF"}
          </button>
          <div className="text-center text-xs text-gray-500">
            <Link
              to={consultPath}
              className="font-semibold hover:underline"
              style={{ color: SECONDARY }}
            >
              {lang === "de" ? "Kostenlose Beratung vereinbaren →" : "Book a free consultation →"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarCard({
  program,
  modules,
  selected,
  onSelect,
}: {
  program: CourseProgram;
  modules: CourseModule[];
  selected: boolean;
  onSelect: () => void;
}) {
  const { lang } = useLanguage();
  return (
    <button
      type="button"
      onClick={onSelect}
      className="w-full text-left transition-all duration-150"
      style={{ outline: "none" }}
    >
      <div
        className="rounded-2xl p-4 border-2 transition-all duration-200"
        style={{
          borderColor: selected ? PRIMARY : "transparent",
          background: selected ? "#fff" : CREAM,
          boxShadow: selected ? `0 4px 20px ${PRIMARY}20` : "none",
        }}
      >
        <div className="flex items-start gap-3">
          <div
            className="w-1 self-stretch rounded-full flex-shrink-0 mt-0.5"
            style={{
              background: selected
                ? PRIMARY
                : `linear-gradient(to bottom, ${PRIMARY}, ${SECONDARY})`,
              opacity: selected ? 1 : 0.25,
              minHeight: "36px",
            }}
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-start gap-2">
              <span className="font-bold text-sm text-gray-900 leading-snug flex-1">
                {program.title}
              </span>
              {program.recommended && (
                <span
                  className="text-[9px] font-bold px-2 py-0.5 rounded-full text-white flex-shrink-0 mt-0.5"
                  style={{ background: PRIMARY }}
                >
                  {lang === "de" ? "EMPFOHLEN" : "RECOMMENDED"}
                </span>
              )}
            </div>
            {program.subtitle && (
              <div className="text-xs text-gray-500 mt-0.5">{program.subtitle}</div>
            )}
            <div className="flex items-center gap-1.5 mt-2 flex-wrap">
              {modules.map((mod) => (
                <ModuleChip
                  key={String(mod.id)}
                  mod={mod}
                  active={program.moduleIds.includes(mod.id) && selected}
                />
              ))}
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs font-semibold" style={{ color: SECONDARY }}>
                {program.duration}
              </span>
              {program.startsAt !== modules[0]?.id && (
                <span
                  className="text-[9px] px-2 py-0.5 rounded-full font-bold"
                  style={{ background: `${SECONDARY}15`, color: SECONDARY }}
                >
                  {lang === "de" ? "ab " : "from "}
                  {modules.find((m) => m.id === program.startsAt)?.label ?? "Module 2"}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

export default function ProgramSelector({
  programs,
  modules,
  title,
  heading,
  subtitle,
  directEntry,
  onOpenPdfModal,
}: {
  programs: CourseProgram[];
  modules: CourseModule[];
  title?: string;
  heading?: string;
  subtitle?: string;
  directEntry?: DirectEntryInfo;
  onOpenPdfModal?: (programTitle: string, pdfName: string) => void;
}) {
  const { lang } = useLanguage();
  const location = useLocation();
  const [selectedId, setSelectedId] = useState(programs[0]?.id ?? "");

  // Always guarantee the first program is active if selectedId is not in the current programs list
  const activeId = programs.some((p) => p.id === selectedId)
    ? selectedId
    : programs[0]?.id ?? "";

  // Support legacy anchor links (#cs-for-beginner, #aws-eng-for-pro, #ds-for-pro, etc.)
  // and reset to first program when switching between course pages
  useEffect(() => {
    if (location.hash) {
      const hashId = location.hash.replace("#", "");
      const matched = programs.find((p) => p.anchorId === hashId || p.id === hashId);
      if (matched) {
        setSelectedId(matched.id);
        return;
      }
    }
    if (programs.length > 0 && !programs.some((p) => p.id === selectedId)) {
      setSelectedId(programs[0].id);
    }
  }, [location.hash, programs, selectedId]);

  const resolvedTitle = title || heading || "";

  return (
    <section
      className="w-full"
      style={{ fontFamily: "'Poppins', sans-serif", background: CREAM }}
    >
      {/* Header */}
      <div className="max-w-[1200px] mx-auto px-5 pt-14 pb-7 text-center">
        <div
          className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
          style={{ background: `${PRIMARY}15`, color: PRIMARY }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: PRIMARY }} />
          {lang === "de" ? "Programmübersicht" : "Program variants & start dates"}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3">
          {resolvedTitle}
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          {subtitle ||
            (lang === "de"
              ? "Starte dort, wo du stehst — flexibler Einstieg ohne Vorkenntnisse oder direkt in höhere Module mit Einstufungstest."
              : "Start at the level that matches your background — join from Module 1 as a beginner or enter higher modules directly via a technical assessment.")}
        </p>
      </div>

      {/* Responsive Layout: Sidebar selector + All ProgramDetail blocks in initial HTML DOM (CSS hidden when inactive) */}
      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 max-w-[1200px] mx-auto px-5 pb-12">
        <div className="flex flex-col gap-3">
          <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 px-1 mb-0.5">
            {lang === "de" ? "Verfügbare Kombinationen" : "Available tracks"}
          </div>
          {programs.map((p) => (
            <SidebarCard
              key={p.id}
              program={p}
              modules={modules}
              selected={activeId === p.id}
              onSelect={() => setSelectedId(p.id)}
            />
          ))}
        </div>

        <div className="flex flex-col gap-1">
          <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 px-1 mb-2">
            {lang === "de" ? "Programmdetails & Termine" : "Program details & schedule"}
          </div>
          {/* B4 SEO Requirement: All programs rendered in initial HTML DOM; non-selected hidden via CSS */}
          {programs.map((p) => (
            <div
              key={p.id}
              className={activeId === p.id ? "block" : "hidden"}
              aria-hidden={activeId !== p.id}
            >
              <ProgramDetail
                program={p}
                modules={modules}
                onOpenPdfModal={onOpenPdfModal}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Optional Direct Entry / Technical Assessment H3 subsection inside B4 */}
      {directEntry && (
        <div className="max-w-[1200px] mx-auto px-5 pb-14">
          <div className="rounded-2xl bg-white border border-gray-200/80 p-6 md:p-7 shadow-sm">
            <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-4">
              {directEntry.heading}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {directEntry.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-gray-100 p-4 bg-gray-50/60"
                >
                  <span
                    className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2"
                    style={{ background: `${PRIMARY}15`, color: PRIMARY }}
                  >
                    {item.badge}
                  </span>
                  <div className="font-bold text-sm text-gray-900 mb-1">{item.title}</div>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.prereqs}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


export { ProgramSelector };
