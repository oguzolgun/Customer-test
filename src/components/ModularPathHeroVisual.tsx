import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  MODULAR_PATHS_DE,
  MODULAR_PATHS_EN,
  MODULAR_STRINGS,
  ModularPathId,
  PathCourse,
} from "../data/modularPathsData";

interface ModularPathHeroVisualProps {
  initialCourseId?: ModularPathId;
  defaultModuleIndex?: number;
  lang?: "de" | "en";
  className?: string;
  loopWithinCourse?: boolean;
}

const STEP_DURATION_MS = 4200;

function computeBezierPoints(count: number) {
  const pts = Array.from({ length: count }, (_, o) => ({
    x: count === 1 ? 50 : 9 + (82 * o) / (count - 1),
    y: count === 2 ? (o === 0 ? 68 : 24) : o % 2 === 0 ? 68 : 24,
  }));
  const scaled = pts.map((l) => [l.x * 3, l.y * 1.1]);
  let d = `M${scaled[0][0]} ${scaled[0][1]}`;
  for (let l = 1; l < scaled.length; l++) {
    const [prevX, prevY] = scaled[l - 1];
    const [currX, currY] = scaled[l];
    const dx = currX - prevX;
    d += ` C ${prevX + dx * 0.45} ${prevY}, ${currX - dx * 0.45} ${currY}, ${currX} ${currY}`;
  }
  return { pts, d };
}

export function ModularPathHeroVisual({
  initialCourseId = "ai",
  defaultModuleIndex = 0,
  lang = "de",
  className = "",
  loopWithinCourse = true,
}: ModularPathHeroVisualProps) {
  const courses: PathCourse[] = lang === "en" ? MODULAR_PATHS_EN : MODULAR_PATHS_DE;
  const strings = MODULAR_STRINGS[lang] || MODULAR_STRINGS.de;

  // Find initial course index matching initialCourseId
  const foundIndex = courses.findIndex((c) => c.id === initialCourseId);
  const initialIndex = foundIndex >= 0 ? foundIndex : 0;

  const [selection, setSelection] = useState<{ c: number; m: number }>({
    c: initialIndex,
    m: Math.min(defaultModuleIndex, courses[initialIndex]?.modules.length - 1 || 0),
  });
  const [isPaused, setIsPaused] = useState(false);
  const [elapsedMs, setElapsedMs] = useState(0);

  // Sync if initialCourseId changes externally (e.g. route change)
  useEffect(() => {
    const idx = courses.findIndex((c) => c.id === initialCourseId);
    if (idx >= 0) {
      setSelection({
        c: idx,
        m: Math.min(defaultModuleIndex, courses[idx]?.modules.length - 1 || 0),
      });
      elapsedRef.current = 0;
      setElapsedMs(0);
    }
  }, [initialCourseId, defaultModuleIndex, lang]);

  const elapsedRef = useRef(0);
  const lastTimeRef = useRef(0);
  const isPausedRef = useRef(isPaused);
  isPausedRef.current = isPaused;

  const currentCourseIndex = selection.c;
  const currentModuleIndex = selection.m;
  const activeCourse = courses[currentCourseIndex] || courses[0];
  const numModules = activeCourse.modules.length;

  const { pts, d } = useMemo(() => computeBezierPoints(numModules), [numModules]);
  const activeModule = activeCourse.modules[currentModuleIndex] || activeCourse.modules[0];

  useEffect(() => {
    let animId: number;

    const tick = (now: number) => {
      const delta = lastTimeRef.current ? Math.min(now - lastTimeRef.current, 100) : 0;
      lastTimeRef.current = now;

      if (!isPausedRef.current && !document.hidden) {
        elapsedRef.current += delta;
        if (elapsedRef.current >= STEP_DURATION_MS) {
          elapsedRef.current = 0;
          setSelection((prev) => {
            const courseModCount = courses[prev.c]?.modules.length || 1;
            if (prev.m + 1 < courseModCount) {
              return { c: prev.c, m: prev.m + 1 };
            }
            // End of modules for current course
            if (loopWithinCourse) {
              return { c: prev.c, m: 0 };
            }
            return { c: (prev.c + 1) % courses.length, m: 0 };
          });
        }
        setElapsedMs(elapsedRef.current);
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [courses, loopWithinCourse]);

  const handleSelectCourse = (index: number) => {
    elapsedRef.current = 0;
    setElapsedMs(0);
    setSelection({ c: index, m: 0 });
  };

  const handleSelectModule = (index: number) => {
    elapsedRef.current = 0;
    setElapsedMs(0);
    setSelection((prev) => ({ c: prev.c, m: index }));
  };

  // Course progress calculation (0 to 1)
  const courseProgress = (currentModuleIndex + elapsedMs / STEP_DURATION_MS) / numModules;

  // SVG stroke-dashoffset: 0 when fully completed, 1 when empty
  const strokeOffset = numModules > 1 ? 1 - currentModuleIndex / (numModules - 1) : 0;

  const coursePageUrl = lang === "en" ? activeCourse.slugEn : activeCourse.slugDe;

  return (
    <div
      className={`relative overflow-hidden rounded-[28px] bg-[#14151f] p-6 text-white shadow-[0_40px_90px_-40px_rgba(16,24,40,0.6)] sm:p-7 border border-white/10 ${className}`}
      style={{ fontFamily: "'Poppins', -apple-system, sans-serif" }}
    >
      <style>{`
        @keyframes cwmpIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: none; }
        }
        .cwmp-in {
          animation: cwmpIn .45s cubic-bezier(.22,1,.36,1) both;
        }
      `}</style>

      {/* Ambient background glows matching Figma design */}
      <div
        className="pointer-events-none absolute -right-24 -top-28 h-64 w-64 rounded-full blur-[90px]"
        style={{ background: "rgba(224, 21, 75, 0.35)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-20 h-64 w-64 rounded-full blur-[90px]"
        style={{ background: "rgba(108, 28, 255, 0.20)" }}
        aria-hidden="true"
      />

      <div className="relative">
        {/* Header Row: Eyebrow + Title + Pause/Play button */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p
              className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] font-semibold"
              style={{ color: "#e0154b" }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full"
                  style={{ background: "rgba(224, 21, 75, 0.7)" }}
                />
                <span
                  className="relative inline-flex h-1.5 w-1.5 rounded-full"
                  style={{ background: "#e0154b" }}
                />
              </span>
              {strings.eyebrow}
            </p>
            <div
              className="mt-2.5 font-extrabold text-[22px] sm:text-[24px] leading-[1.15] tracking-[-0.03em] text-white"
              style={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
            >
              {strings.title}
            </div>
          </div>

          <button
            type="button"
            aria-label={isPaused ? strings.play : strings.pause}
            title={isPaused ? strings.play : strings.pause}
            onClick={() => setIsPaused((prev) => !prev)}
            className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:border-[#e0154b]/60 hover:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#e0154b]/50"
          >
            {isPaused ? (
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
                <path d="M7 4.5v15l12-7.5z" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="14" y="4" width="4" height="16" rx="1" />
                <rect x="6" y="4" width="4" height="16" rx="1" />
              </svg>
            )}
          </button>
        </div>

        {/* Course Name & Tagline */}
        <p
          key={`t-${currentCourseIndex}`}
          className="cwmp-in mt-2 min-h-[38px] max-w-[36ch] text-[13px] leading-relaxed text-white/60"
        >
          <span className="font-semibold text-white/95">{activeCourse.name}.</span>{" "}
          {activeCourse.tagline}
        </p>

        {/* Curved Path Animation */}
        <div
          key={`p-${currentCourseIndex}`}
          className="cwmp-in relative mt-4 h-[104px] w-full sm:h-[112px]"
        >
          <svg
            viewBox="0 0 300 110"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="cwmpGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#E11456" />
                <stop offset="100%" stopColor="#FF8FB0" />
              </linearGradient>
            </defs>

            {/* Background dashed guideline */}
            <path
              d={d}
              fill="none"
              stroke="rgba(255,255,255,0.14)"
              strokeWidth="1.5"
              strokeDasharray="3 5"
            />

            {/* Glowing animated gradient track */}
            <path
              d={d}
              fill="none"
              stroke="url(#cwmpGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              pathLength="1"
              strokeDasharray="1"
              style={{
                strokeDashoffset: strokeOffset,
                transition: "stroke-dashoffset 900ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            />
          </svg>

          {/* Interactive Module Step Nodes */}
          {pts.map((pt, idx) => {
            const isActive = idx === currentModuleIndex;
            const isCompleted = idx < currentModuleIndex;
            const mod = activeCourse.modules[idx];

            return (
              <button
                key={idx}
                type="button"
                aria-pressed={isActive}
                aria-label={mod?.title || `Module ${idx + 1}`}
                onClick={() => handleSelectModule(idx)}
                className="absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e0154b] focus-visible:ring-offset-4 focus-visible:ring-offset-[#14151f] cursor-pointer"
                style={{ left: `${pt.x}%`, top: `${pt.y}%` }}
              >
                {isActive && (
                  <span
                    className="absolute inset-0 -m-2 animate-pulse rounded-full ring-1"
                    style={{ ringColor: "rgba(224, 21, 75, 0.5)" }}
                  />
                )}
                <span
                  className={`relative grid h-10 w-10 place-items-center rounded-full border font-mono text-xs transition-all duration-300 ${
                    isActive
                      ? "border-[#e0154b] bg-[#e0154b] text-white shadow-[0_0_28px_rgba(225,20,86,0.55)] scale-105"
                      : isCompleted
                      ? "border-[#e0154b]/50 bg-[#e0154b]/15 text-white"
                      : "border-white/15 bg-white/5 text-white/45 hover:border-white/30 hover:text-white/80"
                  }`}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>

                {/* Node Label Below Circle */}
                <span
                  className={`absolute top-[calc(100%+8px)] w-24 text-[10px] leading-tight transition-colors duration-300 font-medium ${
                    idx === 0
                      ? "left-0 text-left"
                      : idx === numModules - 1
                      ? "right-0 text-right"
                      : "left-1/2 -translate-x-1/2 text-center"
                  } ${isActive ? "text-white/95" : "text-white/40"}`}
                >
                  {mod?.node}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Module Details Card */}
        <div className="mt-6 min-h-[160px] rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm sm:p-5">
          <div key={`m-${currentCourseIndex}-${currentModuleIndex}`} className="cwmp-in">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p
                  className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold"
                  style={{ color: "#e0154b" }}
                >
                  {activeModule?.eyebrow}
                </p>
                <div
                  className="mt-1 font-bold text-[16px] sm:text-[17px] leading-snug tracking-[-0.01em] text-white"
                  style={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
                >
                  {activeModule?.title}
                </div>
              </div>

              {activeModule?.badge && (
                <span className="shrink-0 rounded-full border border-white/15 px-2.5 py-1 font-mono text-[10px] text-white/60">
                  {activeModule.badge}
                </span>
              )}
            </div>

            {/* Topic Badges with Staggered Entrance */}
            <div className="mt-3.5 flex flex-wrap gap-1.5">
              {activeModule?.topics.map((topic, tIdx) => (
                <span
                  key={topic}
                  className="cwmp-in rounded-full bg-white/[0.07] px-2.5 py-1 text-[11px] text-white/80 ring-1 ring-inset ring-white/10"
                  style={{ animationDelay: `${100 + tIdx * 60}ms` }}
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Course Switcher Tabs with Animated Progress Bars */}
        <div className="mt-4">
          <div
            className="flex gap-1.5"
            role="tablist"
            aria-label={strings.choose}
          >
            {courses.map((courseItem, idx) => {
              const isSelected = idx === currentCourseIndex;
              const progressWidth =
                idx < currentCourseIndex
                  ? 100
                  : idx === currentCourseIndex
                  ? Math.min(100, courseProgress * 100)
                  : 0;

              return (
                <button
                  key={courseItem.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-label={courseItem.name}
                  title={courseItem.name}
                  onClick={() => handleSelectCourse(idx)}
                  className="group relative h-6 flex-1 focus:outline-none cursor-pointer"
                >
                  <span className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 overflow-hidden rounded-full bg-white/10 transition group-hover:bg-white/20">
                    <span
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{
                        background: "#e0154b",
                        width: `${progressWidth}%`,
                        transition: "width 120ms linear",
                      }}
                    />
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick labels for 5 tracks on desktop */}
          <div className="hidden sm:flex justify-between items-center text-[10px] text-white/40 px-1 -mt-0.5">
            {courses.map((c, i) => (
              <button
                key={c.id}
                type="button"
                onClick={() => handleSelectCourse(i)}
                className={`truncate max-w-[72px] text-left transition-colors cursor-pointer ${
                  i === currentCourseIndex
                    ? "text-[#e0154b] font-semibold"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                {c.name.replace("AI ", "").replace("AWS & ", "")}
              </button>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-3 flex items-center justify-between text-[11px] leading-relaxed text-white/45">
          <p className="flex items-start gap-2">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-0.5 h-3 w-3 shrink-0"
              style={{ color: "#e0154b" }}
              aria-hidden="true"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
            </svg>
            <span>{strings.note}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
