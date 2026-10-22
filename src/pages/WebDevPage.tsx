import { useState } from "react";
import ProgramSelector, { type CourseModule, type CourseProgram } from "@/components/ProgramSelector";

const PRIMARY = "#e51a59";
const SECONDARY = "#8a1c4a";
const DARK = "#1a1d2e";

// ── Module & Program data (preserved) ─────────────────────────────────────

const wdModules: CourseModule[] = [
  {
    id: "m1", label: "Modul 1", title: "Frontend-Grundlagen",
    duration: "3 Monate", color: "#b52252",
    topics: ["IT-Grundlagen & HTML/CSS", "JavaScript Core & JS-Plus", "Milestone-Projekt"],
  },
  {
    id: "m2", label: "Modul 2", title: "Frontend-Framework",
    duration: "3 Monate", color: PRIMARY,
    topics: ["TypeScript", "React", "Milestone-Projekt"],
  },
  {
    id: "m3", label: "Modul 3", title: "Backend-Entwicklung",
    duration: "3 Monate", color: SECONDARY,
    topics: ["Node.js & Express.js", "MongoDB (NoSQL)", "Docker & Next.js", "Milestone-Projekt"],
  },
  {
    id: "m4", label: "Modul 4", title: "Projektarbeit",
    duration: "3 Monate", color: "#c73a6a",
    topics: ["Projektmanagement", "Analyse & Vorbereitung", "Workshop-Format"],
  },
];

const wdPrograms: CourseProgram[] = [
  {
    id: "fullstack-anfaenger",
    title: "Full-Stack-Entwicklung für Anfänger",
    badge: "M1 + M2 + M3 + M4",
    moduleIds: ["m1", "m2", "m3", "m4"],
    startsAt: "m1",
    duration: "12 Monate",
    schedule: "09:00–16:45 Uhr (Berlin)",
    capacity: "max. 15 Plätze",
    language: "Deutsch",
    dates: ["27 Jul 2026", "24 Aug 2026", "28 Sep 2026", "26 Okt 2026"],
    recommended: true,
    description: "Das vollständige Paket: Von den ersten HTML-Zeilen bis zum Full-Stack-Portfolio. Keine IT-Vorkenntnisse nötig.",
    curriculumUrl: "https://clarusway.de/it-kurse/webentwicklungskurse/",
    enrollUrl: "https://clarusway.de/application-form/",
  },
  {
    id: "frontend-anfaenger",
    title: "Frontend-Entwicklung für Anfänger",
    badge: "M1 + M2",
    moduleIds: ["m1", "m2"],
    startsAt: "m1",
    duration: "6 Monate",
    schedule: "09:00–16:45 Uhr (Berlin)",
    capacity: "max. 15 Plätze",
    language: "Deutsch",
    dates: ["27 Jul 2026", "24 Aug 2026", "28 Sep 2026", "26 Okt 2026"],
    recommended: false,
    description: "Spezialisierung auf Frontend. Von HTML/CSS bis React — mit Milestone-Projekten nach jedem Modul.",
    curriculumUrl: "https://clarusway.de/it-kurse/webentwicklungskurse/",
    enrollUrl: "https://clarusway.de/application-form/",
  },
  {
    id: "fullstack-pro",
    title: "Full-Stack-Entwicklung für Professionelle",
    badge: "M2 + M3 + M4",
    moduleIds: ["m2", "m3", "m4"],
    startsAt: "m2",
    duration: "9 Monate",
    schedule: "09:00–16:45 Uhr (Berlin)",
    capacity: "max. 15 Plätze",
    language: "Deutsch",
    dates: ["10 Aug 2026", "7 Sep 2026", "12 Okt 2026", "9 Nov 2026"],
    recommended: false,
    description: "Für Teilnehmende mit HTML/CSS/JS-Grundkenntnissen. Einstieg ab Modul 2 — React, Backend und Full-Stack-Projekt.",
    curriculumUrl: "https://clarusway.de/it-kurse/webentwicklungskurse/",
    enrollUrl: "https://clarusway.de/application-form/",
  },
  {
    id: "frontend-pro",
    title: "Frontend-Entwicklung für Professionelle",
    badge: "Modul 2",
    moduleIds: ["m2"],
    startsAt: "m2",
    duration: "3 Monate",
    schedule: "09:00–16:45 Uhr (Berlin)",
    capacity: "max. 15 Plätze",
    language: "Deutsch",
    dates: ["10 Aug 2026", "7 Sep 2026", "12 Okt 2026", "9 Nov 2026"],
    recommended: false,
    description: "Einstieg ab Modul 2 für Professionals mit HTML/CSS/JS-Kenntnissen. Fokus TypeScript und React.",
    curriculumUrl: "https://clarusway.de/it-kurse/webentwicklungskurse/",
    enrollUrl: "https://clarusway.de/application-form/",
  },
  {
    id: "backend-pro",
    title: "Backend-Entwicklung für Professionelle",
    badge: "Modul 3",
    moduleIds: ["m3"],
    startsAt: "m3",
    duration: "3 Monate",
    schedule: "09:00–16:45 Uhr (Berlin)",
    capacity: "max. 15 Plätze",
    language: "Deutsch",
    dates: ["10 Aug 2026", "12 Okt 2026", "30 Nov 2026", "14 Dez 2026"],
    recommended: false,
    description: "Einstieg ab Modul 3 für Professionals mit Frontend-Grundlagen. Node.js, MongoDB, Docker und Next.js.",
    curriculumUrl: "https://clarusway.de/it-kurse/webentwicklungskurse/",
    enrollUrl: "https://clarusway.de/application-form/",
  },
];

// ── SVG Icons ──────────────────────────────────────────────────────────────

function IconCheck() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="9" stroke={PRIMARY} strokeWidth="1.5" />
      <path d="M6 10l3 3 5-5" stroke={PRIMARY} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 7h8M8 4l3 3-3 3" stroke={PRIMARY} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconCalendar() {
  return (
    <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="4" width="14" height="12" rx="2" stroke={PRIMARY} strokeWidth="1.5" />
      <path d="M6 2v3M12 2v3M2 8h14" stroke={PRIMARY} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function IconUsers() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
      <circle cx="7" cy="6" r="3" stroke={PRIMARY} strokeWidth="1.5" />
      <path d="M1 16c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke={PRIMARY} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="13" cy="6" r="2" stroke={PRIMARY} strokeWidth="1.2" />
      <path d="M16 16c0-2-1.5-3.5-3-4" stroke={PRIMARY} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
function IconCode() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
      <path d="M6 5l-4 4 4 4M12 5l4 4-4 4" stroke={PRIMARY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 3l-2 12" stroke={PRIMARY} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
      <path d="M9 2L3 5v5c0 3.5 2.5 6 6 7 3.5-1 6-3.5 6-7V5L9 2z" stroke={PRIMARY} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M6 9l2 2 4-4" stroke={PRIMARY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconClock() {
  return (
    <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="7" stroke={PRIMARY} strokeWidth="1.5" />
      <path d="M9 5.5V9l2.5 2" stroke={PRIMARY} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function IconGraduation() {
  return (
    <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
      <path d="M9 3L1 7l8 4 8-4-8-4z" stroke={PRIMARY} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M5 9v4c0 1.5 1.8 2.5 4 2.5s4-1 4-2.5V9" stroke={PRIMARY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconBriefcase() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="6" width="14" height="10" rx="2" stroke={PRIMARY} strokeWidth="1.5" />
      <path d="M6 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1M2 10h14" stroke={PRIMARY} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function IconChart() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
      <path d="M2 14l4-5 3 3 5-7 2 2" stroke={PRIMARY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 18 18" fill={PRIMARY}>
          <path d="M9 1l2.163 4.38L16.5 6.18l-3.75 3.656.885 5.164L9 12.45l-4.635 2.55.885-5.164L1.5 6.18l5.337-.8z" />
        </svg>
      ))}
    </div>
  );
}

// ── 1. Hero ────────────────────────────────────────────────────────────────

const toolBadges = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js", "MongoDB", "Docker"];

function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #fff8f9 0%, #fff 65%)" }}>
      <div className="max-w-[1200px] mx-auto px-5 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex flex-wrap gap-2 mb-5">
            {toolBadges.map((t) => (
              <span key={t} className="text-xs font-semibold px-3 py-1 rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm">
                {t}
              </span>
            ))}
          </div>
          <h1 className="font-bold text-4xl md:text-[2.7rem] leading-[1.15] mb-4" style={{ color: DARK }}>
            Webentwicklungskurse mit Bildungsgutschein, in 12 Monaten zum Webentwickler
          </h1>
          <p className="text-[13px] font-semibold mb-5" style={{ color: SECONDARY }}>
            Live-Unterricht in Kleingruppen, AZAV-zertifiziert und zu 100 % über die Agentur für Arbeit förderbar, auch ohne IT-Vorkenntnisse.
          </p>
          <div className="flex items-center gap-3 mb-5">
            <Stars />
            <span className="text-sm font-semibold text-gray-700">4,9 / 5 — Career Karma · 381 Bewertungen</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            <strong>Webentwicklungskurse</strong> sind strukturierte Weiterbildungen, in denen Sie{" "}
            <strong>Frontend-, Backend- und Full-Stack-Entwicklung</strong> an echten Projekten erlernen.
            Wir bilden seit Februar 2021 Quereinsteiger und IT-Fachkräfte in Deutschland aus, im
            Live-Unterricht, in Gruppen mit maximal 15 Teilnehmenden und mit einem Portfolio,
            das Sie am Ende vorzeigen können.
          </p>
          <div className="flex flex-wrap gap-3 mb-4">
            <a href="https://clarusway.de/application-form/" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm hover:opacity-90"
              style={{ background: PRIMARY }}>
              <IconArrow />
              Kostenloses Beratungsgespräch sichern
            </a>
            <a href="https://clarusway.de/it-kurse/webentwicklungskurse/" target="_blank" rel="noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-xl font-bold text-sm border-2 hover:opacity-80"
              style={{ borderColor: DARK, color: DARK }}>
              Lehrplan herunterladen
            </a>
          </div>
          <p className="text-xs text-gray-400">
            Kostenlos und unverbindlich, Rückmeldung innerhalb von 24 Stunden, ohne Vorkenntnisse-Test.
          </p>
        </div>

        {/* Right: code mockup */}
        <div className="relative">
          <div className="w-full rounded-2xl overflow-hidden shadow-2xl" style={{ background: "#1e1e2e" }}>
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-3 text-xs text-gray-500 font-mono">App.tsx</span>
            </div>
            <div className="px-6 py-6 font-mono text-sm leading-loose">
              <div className="text-blue-400">import React <span className="text-white">from</span> <span className="text-orange-300">"react"</span></div>
              <div className="text-blue-400">import <span className="text-white">{"{ useState }"}</span> <span className="text-blue-400">from</span> <span className="text-orange-300">"react"</span></div>
              <div className="mt-3 text-yellow-300">export default <span className="text-blue-400">function</span> <span className="text-green-400">App</span>()</div>
              <div className="text-white">{"{"}</div>
              <div className="ml-4 text-blue-400">return <span className="text-white">{"("}</span></div>
              <div className="ml-8 text-pink-400">{"<div className="}<span className="text-orange-300">"portfolio"</span>{">"}</div>
              <div className="ml-12 text-gray-400">{"// Milestone-Projekt ✓"}</div>
              <div className="ml-8 text-pink-400">{"</div>"}</div>
              <div className="ml-4 text-white">{")"}</div>
              <div className="text-white">{"}"}</div>
            </div>
          </div>
          <div className="absolute -top-3 -right-3 bg-white rounded-2xl shadow-lg px-4 py-3 border border-gray-100">
            <div className="text-sm font-bold" style={{ color: PRIMARY }}>AZAV</div>
            <div className="text-[11px] text-gray-500">Zertifiziert</div>
          </div>
          <div className="absolute -bottom-3 -left-3 bg-white rounded-2xl shadow-lg px-4 py-3 border border-gray-100">
            <div className="text-base font-bold" style={{ color: PRIMARY }}>0 €</div>
            <div className="text-[11px] text-gray-500">mit Bildungsgutschein</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 2. Stats bar ───────────────────────────────────────────────────────────

function StatsBar() {
  return (
    <div style={{ background: DARK }} className="py-5">
      <div className="max-w-[1200px] mx-auto px-5 flex flex-wrap justify-between gap-y-3 gap-x-6">
        {[
          ["4,9 / 5", "aus 381 Bewertungen"],
          ["AZAV", "zertifiziert seit 2021"],
          ["5 Programme", "3 bis 12 Monate"],
          ["Max. 15", "Teilnehmende pro Klasse"],
          ["100 %", "Förderung möglich"],
        ].map(([v, l]) => (
          <div key={v} className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-white">{v}</span>
            <span className="text-sm text-gray-400">{l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── 3. Warum scheitert der Einstieg (6c) ─────────────────────────────────

function WarumScheitert() {
  return (
    <section className="py-14 bg-white border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="font-bold text-2xl md:text-3xl mb-5" style={{ color: DARK }}>
            Warum scheitert der Einstieg in die Webentwicklung so oft?
          </h2>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>
              Sie haben Tutorials angefangen, HTML und CSS verstanden und irgendwo zwischen JavaScript
              und dem ersten eigenen Projekt aufgehört. Das Problem ist selten die Motivation. Es fehlt
              eine Reihenfolge, die vom ersten Tag bis zum bewerbungsfähigen Portfolio führt, und
              jemand, der Ihren Code prüft, wenn Sie feststecken.
            </p>
            <p>
              Kostenlose Online-Kurse liefern Wissen, aber keine Struktur. Sie lernen React, ohne zu
              wissen, ob Ihr Code den Standards eines Entwicklungsteams entspricht. Genau an diesem
              Punkt bricht die Mehrheit der Selbstlernenden ab — nicht am Stoff, sondern an der
              fehlenden Rückmeldung.
            </p>
            <p>
              Dazu kommt die finanzielle Frage. Eine Weiterbildung wirkt wie ein Risiko, bis Sie
              wissen, dass <strong>Bildungsgutschein</strong> und{" "}
              <strong>Qualifizierungschancengesetz</strong> die Kosten vollständig abdecken können.
              Die meisten Interessenten erfahren das erst im Beratungsgespräch.
            </p>
          </div>
          <a href="https://clarusway.de/application-form/" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl text-white font-bold text-sm hover:opacity-90"
            style={{ background: PRIMARY }}>
            <IconArrow />
            Kostenloses Beratungsgespräch sichern
          </a>
        </div>
        <div className="grid grid-cols-1 gap-3">
          {[
            { icon: <IconCode />, problem: "Selbstlernkurse ohne Korrekturschleife", loesung: "Täglich Code-Review durch Trainer" },
            { icon: <IconUsers />, problem: "Kein Feedback auf eigene Projekte", loesung: "Jedes Modul endet mit bewertetem Projekt" },
            { icon: <IconShield />, problem: "Finanzierungsunsicherheit", loesung: "100 % Förderung über Bildungsgutschein" },
            { icon: <IconBriefcase />, problem: "Kein Portfolio nach dem Kurs", loesung: "GitHub-Portfolio aus jedem Modul" },
          ].map((row) => (
            <div key={row.problem} className="flex items-start gap-4 rounded-xl border border-gray-100 px-5 py-4 shadow-sm">
              <span className="flex-shrink-0 mt-0.5">{row.icon}</span>
              <div>
                <div className="text-xs text-gray-400 line-through mb-0.5">{row.problem}</div>
                <div className="text-sm font-semibold" style={{ color: DARK }}>{row.loesung}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 4. Vorteile (6d) ──────────────────────────────────────────────────────

function Vorteile() {
  return (
    <section className="py-16" style={{ background: "#f6f7fb" }}>
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-bold text-3xl mb-3" style={{ color: DARK }}>
          Webentwicklungskurse, die Sie systematisch zum Job führen
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-10 max-w-3xl">
          Unsere Webentwicklungskurse führen Sie in 3 bis 12 Monaten vom ersten HTML-Tag bis zur eigenen
          Full-Stack-Anwendung. Sie lernen live mit einem Trainer, arbeiten in jedem Modul an einem
          Projekt und schließen mit einem Zertifikat sowie einem GitHub-Portfolio ab.
          Fünf Programme stehen zur Wahl, je nach Vorkenntnissen und Zeitbudget.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              icon: <IconCheck />,
              title: "Sie starten ohne IT-Vorkenntnisse",
              text: "Sie brauchen weder Studium noch technischen Eingangstest. Vor dem Kursstart führen wir ausschließlich ein Gespräch zur Kommunikations- und Lernbereitschaft. Die Anfängerprogramme beginnen bei den IT-Grundlagen und führen Schritt für Schritt zu HTML, CSS und JavaScript.",
            },
            {
              icon: <IconShield />,
              title: "Zu 100 % gefördert mit Bildungsgutschein",
              text: "Der Bildungsgutschein deckt die vollständigen Kursgebühren ab, inklusive Prüfungsgebühren, Lernmaterial, Fahrt- und gegebenenfalls Kinderbetreuungskosten. Wir sind AZAV-zertifiziert und verfügen über eine gültige Maßnahmenummer. Ihr Arbeitslosengeld oder Bürgergeld läuft weiter.",
            },
            {
              icon: <IconUsers />,
              title: "Sie lernen live, nicht allein vor Videos",
              text: "Jede Klasse umfasst maximal 15 Teilnehmende, unterrichtet täglich von 09:00 bis 16:45 Uhr Berliner Zeit. Sie stellen Fragen in Echtzeit, arbeiten in Lab-Sessions und erhalten Mentoren-Support sowie Einzelcoaching. Ihr Code wird gesehen, bewertet und verbessert.",
            },
            {
              icon: <IconCode />,
              title: "Portfolio, nicht nur Wissen",
              text: "Jedes Modul endet mit einem Milestone-Projekt, das in Ihr GitHub-Repository wandert. Im Abschlussmodul arbeiten Sie an einer vollständigen Projektarbeit inklusive Projektanalyse und agiler Zusammenarbeit. Personalverantwortliche prüfen bei Junior-Webentwicklern zuerst das Portfolio.",
            },
            {
              icon: <IconBriefcase />,
              title: "Karrierebegleitung nach dem Kurs",
              text: "Sie erhalten lebenslange Karriereunterstützung über unser Career Management System. Dazu gehören Bewerbungsunterlagen, Interviewvorbereitung und Zugang zum Alumni-Netzwerk. Deshalb begleiten wir den Bewerbungsprozess über das Kursende hinaus.",
            },
            {
              icon: <IconGraduation />,
              title: "AZAV-Zertifikat nach jedem Modul",
              text: "Nach jedem abgeschlossenen Modul erhalten Sie ein anerkanntes Zertifikat. Die AZAV-Zertifizierung ist die rechtliche Voraussetzung für die Anerkennung durch Agentur für Arbeit und Jobcenter und unterscheidet unsere Programme von reinen Onlinekursen.",
            },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm flex flex-col gap-3">
              <div className="flex items-center gap-2">
                {c.icon}
                <span className="font-bold text-sm" style={{ color: DARK }}>{c.title}</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 5. Programme-Übersichtstabelle ────────────────────────────────────────

function ProgrammeTabelle() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <h3 className="font-bold text-xl mb-5" style={{ color: DARK }}>
          Alle Webentwicklungskurse im Überblick
        </h3>
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm mb-5">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ background: DARK }}>
                <th className="text-left px-5 py-4 text-white font-bold">Programm</th>
                <th className="text-left px-5 py-4 text-white font-bold">Zielgruppe</th>
                <th className="text-left px-5 py-4 text-white font-bold">Dauer</th>
                <th className="text-left px-5 py-4 text-white font-bold">Schwerpunkt</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  prog: "Full Stack für Anfänger",
                  ziel: "Ohne Vorkenntnisse",
                  dauer: "12 Monate",
                  focus: "IT-Grundlagen, HTML/CSS, JavaScript, TypeScript, React, Node.js, Datenbanken, Projektarbeit",
                  color: "#b52252",
                },
                {
                  prog: "Frontend für Anfänger",
                  ziel: "Ohne Vorkenntnisse",
                  dauer: "6 Monate",
                  focus: "IT-Grundlagen, HTML/CSS, JavaScript, TypeScript, React",
                  color: PRIMARY,
                },
                {
                  prog: "Full Stack für Professionelle",
                  ziel: "Mit IT-Basis",
                  dauer: "9 Monate",
                  focus: "JavaScript-Vertiefung, React, Node.js, MongoDB, Docker, Next.js",
                  color: SECONDARY,
                },
                {
                  prog: "Frontend für Professionelle",
                  ziel: "Mit IT-Basis",
                  dauer: "3 Monate",
                  focus: "TypeScript, React, Milestone-Projekt",
                  color: "#c73a6a",
                },
                {
                  prog: "Backend für Professionelle",
                  ziel: "Mit IT-Basis",
                  dauer: "3 Monate",
                  focus: "Node.js, SQL/NoSQL, Express.js, Docker, Next.js",
                  color: "#c73a6a",
                },
              ].map((row, i) => (
                <tr key={row.prog} style={{ background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                  <td className="px-5 py-4 font-semibold" style={{ color: row.color }}>{row.prog}</td>
                  <td className="px-5 py-4 text-gray-600">{row.ziel}</td>
                  <td className="px-5 py-4 font-bold text-gray-900">{row.dauer}</td>
                  <td className="px-5 py-4 text-gray-500 text-xs leading-relaxed">{row.focus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mb-6">
          Alle Programme laufen im Live-Format, in Kleingruppen mit max. 15 Personen und mit monatlichen Startterminen.
        </p>
        <a href="https://clarusway.de/application-form/" target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm hover:opacity-90"
          style={{ background: PRIMARY }}>
          <IconArrow />
          Passenden Kurs im Beratungsgespräch finden
        </a>
      </div>
    </section>
  );
}

// ── 6. 4 Schritte (6e) ────────────────────────────────────────────────────

function VierSchritte() {
  const steps = [
    {
      n: "01",
      title: "Förderfähigkeit prüfen",
      desc: "Sie füllen ein kurzes Formular aus, wir klären Ihren Anspruch auf Bildungsgutschein oder Qualifizierungschancengesetz.",
    },
    {
      n: "02",
      title: "Beratungsgespräch führen",
      desc: "Wir empfehlen anhand Ihrer Vorkenntnisse und Ihres Zeitbudgets eines der 5 Programme.",
    },
    {
      n: "03",
      title: "Angebot einreichen",
      desc: "Sie erhalten ein offizielles Kursangebot mit Maßnahmenummer und legen es Ihrer Vermittlungsfachkraft vor.",
    },
    {
      n: "04",
      title: "Kurs starten",
      desc: "Nach Bewilligung melden Sie sich an und beginnen zum nächsten monatlichen Starttermin.",
    },
  ];
  return (
    <section className="py-20" style={{ background: "#f6f7fb" }}>
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-bold text-3xl mb-3" style={{ color: DARK }}>
          So starten Sie Ihren Webentwicklungskurs in 4 Schritten
        </h2>
        <p className="text-sm text-gray-500 mb-10 max-w-2xl leading-relaxed">
          Der Weg von der ersten Anfrage bis zum Kursstart dauert in der Regel wenige Wochen. Bei
          Förderung über den Bildungsgutschein übernehmen wir die Abstimmung mit Agentur für Arbeit
          oder Jobcenter. Sie führen lediglich das Gespräch mit Ihrer Vermittlungsfachkraft.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm flex flex-col gap-3">
              <div
                className="text-3xl font-bold leading-none"
                style={{ color: PRIMARY, opacity: 0.2 }}
              >
                {s.n}
              </div>
              <div className="font-bold text-sm" style={{ color: DARK }}>{s.title}</div>
              <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a href="https://clarusway.de/application-form/" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm hover:opacity-90"
            style={{ background: PRIMARY }}>
            <IconArrow />
            Förderfähigkeit kostenlos prüfen
          </a>
          <p className="text-xs text-gray-400">
            Kein technischer Eingangstest, keine Vorleistung. Die Prüfung ist kostenlos.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── 7. Warum Clarusway / Trust (6f) ───────────────────────────────────────

function WarumClarusway() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="font-bold text-3xl mb-4" style={{ color: DARK }}>
            Warum Teilnehmende uns ihre Weiterbildung anvertrauen
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-7">
            Wir bilden seit <strong>Februar 2021</strong> in Deutschland aus, sind als{" "}
            <strong>AZAV-zertifizierter Träger</strong> anerkannt und arbeiten mit{" "}
            <strong>28 Partnerstandorten in allen Bundesländern</strong> zusammen. Teilnehmende
            bewerten uns mit 4,9 von 5 Sternen aus 381 Bewertungen. Der Unterricht findet online
            statt, eine Teilnahme vor Ort ist an den Partnerstandorten möglich.
          </p>
          <div className="grid grid-cols-2 gap-3 mb-7">
            {[
              ["4,9 ★", "aus 381 Bewertungen"],
              ["Seit 2021", "in Deutschland aktiv"],
              ["28", "Partnerstandorte bundesweit"],
              ["Max. 15", "Teilnehmende pro Klasse"],
              ["5", "Webentwicklungsprogramme"],
              ["100 %", "Kostenübernahme möglich"],
            ].map(([v, l]) => (
              <div key={v} className="rounded-xl border border-gray-100 px-4 py-3 shadow-sm">
                <div className="font-bold text-lg" style={{ color: PRIMARY }}>{v}</div>
                <div className="text-xs text-gray-500">{l}</div>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-gray-100 p-4 shadow-sm text-xs text-gray-500 leading-relaxed">
            <span className="font-bold text-gray-700">Zertifizierungen: </span>
            AZAV-Trägerzulassung, gültige Maßnahmenummer, Förderfähigkeit nach
            Qualifizierungschancengesetz, EU-Projekterfahrung (ORIENT8, AMIF-Förderung #957978)
          </div>
        </div>
        <div className="space-y-3">
          {[
            {
              initials: "FS",
              name: "Absolvent Full Stack für Anfänger, 2025",
              text: "Die Struktur des Lernpfads hat mir geholfen, konsequent dranzubleiben. Jede Woche gab es greifbare Fortschritte — und die Mentoren haben nie zugelassen, dass ich feststecke.",
            },
            {
              initials: "FD",
              name: "Heute Frontend Developer",
              text: "Drei Monate nach dem Abschluss hatte ich meinen ersten Job als Frontend-Entwicklerin. Das Portfolio aus den Modulen hat im Bewerbungsgespräch den Unterschied gemacht.",
            },
            {
              initials: "QE",
              name: "Quereinsteiger, gefördert über Jobcenter",
              text: "Ich hatte Bedenken wegen der Förderung, aber Clarusway hat den ganzen Prozess mit der Agentur für Arbeit begleitet. Am Ende war der Kurs für mich kostenlos.",
            },
          ].map((a) => (
            <div key={a.name} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                  style={{ background: PRIMARY }}>{a.initials}</div>
                <div>
                  <Stars />
                  <div className="text-xs text-gray-400 mt-0.5">{a.name}</div>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed italic">"{a.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 8. Was Sie lernen (6g) ────────────────────────────────────────────────

function WasLernen() {
  return (
    <section className="py-20" style={{ background: "#f6f7fb" }}>
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-bold text-3xl mb-3" style={{ color: DARK }}>
          Was Sie in einem Webentwicklungskurs lernen
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-8 max-w-3xl">
          Ein vollständiger Webentwicklungskurs vermittelt drei Ebenen: Frontend, Backend und Deployment.
          Der wichtigste Faktor ist die Reihenfolge: JS-Core vor TypeScript, TypeScript vor React,
          React vor Node.js. Jedes Modul schließt mit einem Projekt ab, sodass am Ende ein
          zusammenhängendes Portfolio entsteht.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {[
            {
              layer: "Frontend",
              color: "#b52252",
              tools: [
                ["HTML & CSS", "Struktur und Gestaltung"],
                ["JavaScript", "Interaktivität & Logic"],
                ["TypeScript", "Typsicherheit"],
                ["React", "Komponentenbasierte UIs"],
                ["Git & GitHub", "Versionskontrolle"],
              ],
            },
            {
              layer: "Backend",
              color: PRIMARY,
              tools: [
                ["Node.js", "Server-seitige Logik"],
                ["Express.js", "REST APIs"],
                ["SQL & MongoDB", "Relationale & NoSQL DBs"],
                ["Docker", "Container & Deployment"],
                ["Next.js", "Full-Stack Framework"],
              ],
            },
            {
              layer: "Deployment & Praxis",
              color: SECONDARY,
              tools: [
                ["APIs & Hosting", "Integration & Veröffentlichung"],
                ["Debugging & Testing", "Code-Qualität"],
                ["Performance", "Optimierung & Skalierung"],
                ["Sicherheit", "Auth & Schutz"],
                ["Scrum & Agile", "Teamarbeit & Projektplanung"],
              ],
            },
          ].map((grp) => (
            <div key={grp.layer}
              className="rounded-2xl bg-white border overflow-hidden shadow-sm"
              style={{ borderColor: grp.color + "33" }}>
              <div className="px-5 py-3 text-[10px] font-bold uppercase tracking-widest"
                style={{ background: grp.color + "15", color: grp.color }}>
                {grp.layer}
              </div>
              <ul className="divide-y divide-gray-50">
                {grp.tools.map(([tool, sub]) => (
                  <li key={tool} className="flex items-start gap-3 px-5 py-3">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                      style={{ background: grp.color }} />
                    <div>
                      <div className="text-xs font-semibold text-gray-800">{tool}</div>
                      <div className="text-[11px] text-gray-400">{sub}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <a href="https://clarusway.de/it-kurse/webentwicklungskurse/" target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border-2 hover:opacity-80"
          style={{ borderColor: PRIMARY, color: PRIMARY }}>
          <IconArrow />
          Mehr dazu im Lehrplan zum Download
        </a>
      </div>
    </section>
  );
}

// ── 9. Frontend vs. Backend (6g-2) ────────────────────────────────────────

function FrontendVsBackend() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-bold text-3xl mb-3" style={{ color: DARK }}>
          Welcher Webentwicklungspfad passt zu Ihnen — Frontend oder Backend?
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-7 max-w-3xl">
          Frontend-Entwicklung gestaltet alles, was Nutzer im Browser sehen. Backend-Entwicklung
          verantwortet Server, Datenbanken und Geschäftslogik. Full-Stack-Entwicklung verbindet beides.
          Für Einsteiger ist Frontend der schnellere Weg zu sichtbaren Ergebnissen, Full Stack der
          breitere Weg zu mehr offenen Stellen.
        </p>
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ background: DARK }}>
                <th className="text-left px-5 py-4 text-white font-bold">Kriterium</th>
                <th className="px-5 py-4 text-white font-bold text-center">Frontend</th>
                <th className="px-5 py-4 text-white font-bold text-center">Backend</th>
                <th className="px-5 py-4 text-white font-bold text-center" style={{ color: "#f9a8c0" }}>Full Stack</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Kürzeste Kursdauer",
                  "3 Mo. (Profi) / 6 Mo. (Anfänger)",
                  "3 Monate (Professionelle)",
                  "9 Mo. (Profi) / 12 Mo. (Anfänger)",
                ],
                [
                  "Kerntechnologien",
                  "HTML, CSS, JavaScript, TypeScript, React",
                  "Node.js, Express.js, SQL/NoSQL, Docker",
                  "Frontend + Backend + Next.js",
                ],
                [
                  "Passt zu",
                  "Gestaltungsaffinen mit UI/UX-Interesse",
                  "Logik- und datenaffinen Lernenden",
                  "Quereinsteigern mit maximalen Job-Optionen",
                ],
                [
                  "Typische Rolle",
                  "Frontend Developer",
                  "Backend Developer",
                  "Full-Stack Developer",
                ],
              ].map(([k, a, b, c], i) => (
                <tr key={k} style={{ background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                  <td className="px-5 py-4 font-semibold text-gray-800">{k}</td>
                  <td className="px-5 py-4 text-center text-gray-600 text-xs">{a}</td>
                  <td className="px-5 py-4 text-center text-gray-600 text-xs">{b}</td>
                  <td className="px-5 py-4 text-center text-xs font-semibold" style={{ color: PRIMARY }}>{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mb-5 max-w-2xl leading-relaxed">
          Wenn Sie unsicher sind, beginnen Sie mit Frontend. Die ersten beiden Module sind in beiden
          Anfängerprogrammen identisch — ein Wechsel in Richtung Full Stack bleibt also möglich.
        </p>
        <a href="https://clarusway.de/application-form/" target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm hover:opacity-90"
          style={{ background: PRIMARY }}>
          <IconArrow />
          Pfad im Beratungsgespräch klären
        </a>
      </div>
    </section>
  );
}

// ── 10. Gehalt & Karriere (6g-3) ──────────────────────────────────────────

function GehaltKarriere() {
  return (
    <section className="py-20" style={{ background: "#f6f7fb" }}>
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-bold text-3xl mb-3" style={{ color: DARK }}>
          Berufsaussichten und Gehalt beim Quereinstieg in die Webentwicklung
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-7 max-w-3xl">
          Webentwicklung gehört zu den Berufsfeldern mit dem klarsten Quereinstieg, weil Arbeitgeber
          Projekte und Code höher gewichten als Abschlüsse.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {[
            { label: "Bruttomediangehalt Full Stack", value: "43.200 €", sub: "pro Jahr (StepStone 2026)" },
            { label: "Typische Gehaltsspanne", value: "37.600 – 50.700 €", sub: "Vollzeitstelle Deutschland" },
            { label: "Karrierestufen", value: "3 Stufen", sub: "Junior → Senior → Freelance" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm text-center">
              <div className="text-2xl font-bold mb-1" style={{ color: PRIMARY }}>{s.value}</div>
              <div className="text-sm font-semibold text-gray-800 mb-1">{s.label}</div>
              <div className="text-xs text-gray-400">{s.sub}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="rounded-xl bg-white border border-gray-100 p-5 shadow-sm text-sm text-gray-600 leading-relaxed">
            <div className="flex items-center gap-2 mb-2"><IconChart /><span className="font-bold text-gray-800">Karriereweg</span></div>
            Der Karriereweg verläuft meist in drei Stufen: Junior-Position mit Portfolio,
            Spezialisierung auf ein Framework oder eine Cloud-Umgebung, anschließend Senior- oder
            Freelance-Tätigkeit. Freiberufliche Webentwicklung ist ab dem ersten belegbaren
            Kundenprojekt realistisch.
          </div>
          <div className="rounded-xl bg-white border border-gray-100 p-5 shadow-sm text-sm text-gray-600 leading-relaxed">
            <div className="flex items-center gap-2 mb-2"><IconBriefcase /><span className="font-bold text-gray-800">Was Arbeitgeber prüfen</span></div>
            Am häufigsten unterschätzt wird die Rolle der Zusammenarbeit.{" "}
            <strong>Scrum, agile Entwicklung und Projektmanagement</strong> entscheiden im
            Bewerbungsgespräch oft stärker als eine weitere Programmiersprache. Unser Abschlussmodul
            bildet genau diese Arbeitsweise ab: Projektanalyse, Aufgabenverteilung und Abnahme.
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 11. Format-Vergleich (6g-4) ───────────────────────────────────────────

function FormatVergleich() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-bold text-3xl mb-3" style={{ color: DARK }}>
          Online-Kurs, Bootcamp und Fernstudium im Vergleich
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-7 max-w-3xl">
          Das Format entscheidet über Tempo, Betreuung und Abschlusswahrscheinlichkeit.
          Der entscheidende Unterschied liegt nicht im Stoff, sondern in der Verbindlichkeit:
          feste Uhrzeiten, feste Gruppe, feste Projektabgaben.
        </p>
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm mb-7">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ background: DARK }}>
                <th className="text-left px-5 py-4 text-white font-bold">Format</th>
                <th className="text-left px-5 py-4 text-white font-bold">Betreuung</th>
                <th className="text-left px-5 py-4 text-white font-bold">Typische Dauer</th>
                <th className="text-left px-5 py-4 text-white font-bold">Bildungsgutschein</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Kostenlose Onlinekurse", "Keine", "Offen", "Nein"],
                ["Video-Selbstlernplattform", "Forum", "3 bis 12 Monate", "In der Regel nein"],
                ["Fernstudium", "Tutoriell, asynchron", "12 bis 36 Monate", "Teilweise"],
                ["Live-Weiterbildung (unser Format)", "Trainer, Mentor, Einzelcoaching", "3 bis 12 Monate", "Ja, bei AZAV-Zulassung"],
              ].map((row, i) => (
                <tr key={row[0]} style={{ background: i === 3 ? `${PRIMARY}08` : i % 2 === 0 ? "#fff" : "#fafafa" }}>
                  <td className="px-5 py-4 font-semibold" style={{ color: i === 3 ? PRIMARY : DARK }}>{row[0]}</td>
                  <td className="px-5 py-4 text-gray-600">{row[1]}</td>
                  <td className="px-5 py-4 text-gray-600">{row[2]}</td>
                  <td className="px-5 py-4" style={{ color: i === 3 ? PRIMARY : "#999", fontWeight: i === 3 ? 700 : 400 }}>{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <a href="https://clarusway.de/application-form/" target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm hover:opacity-90"
          style={{ background: PRIMARY }}>
          <IconArrow />
          Termin für die nächste Kohorte anfragen
        </a>
      </div>
    </section>
  );
}

// ── 12. FAQ (6h — 10 Fragen) ──────────────────────────────────────────────

const faqs = [
  {
    q: "Was kostet ein Webentwicklungskurs und wer übernimmt die Kosten?",
    a: "Bei bewilligtem Bildungsgutschein übernimmt die Agentur für Arbeit oder das Jobcenter 100 % der Kosten, also Kursgebühr, Prüfungsgebühren, Lernmaterial sowie Fahrt- und Kinderbetreuungskosten. Beschäftigte ohne Bildungsgutschein können über das Qualifizierungschancengesetz gefördert werden. Selbstzahler wählen zwischen mehreren Ratenmodellen. Die Prüfung Ihrer Förderfähigkeit ist kostenlos und unverbindlich.",
  },
  {
    q: "Wie lange dauert es, Webentwickler zu werden?",
    a: "Mit einem strukturierten Vollzeitprogramm dauert der Einstieg zwischen 3 und 12 Monaten. Ohne Vorkenntnisse benötigen Sie 12 Monate für Full Stack oder 6 Monate für Frontend. Mit vorhandener IT-Basis verkürzt sich der Weg auf 9 Monate für Full Stack beziehungsweise 3 Monate für Frontend oder Backend. Entscheidend ist nicht die Kursdauer, sondern das Portfolio am Ende.",
  },
  {
    q: "Brauche ich ein Studium oder Vorkenntnisse?",
    a: "Nein. Für die Anfängerprogramme ist kein Studium, kein IT-Hintergrund und kein technischer Eingangstest erforderlich. Vor dem Start führen wir lediglich ein Gespräch zu Kommunikation und Lernbereitschaft. Die ersten Module beginnen bei den IT-Grundlagen, HTML und CSS. Der Lehrplan setzt bewusst bei null an.",
  },
  {
    q: "Ist das Zertifikat anerkannt?",
    a: "Sie erhalten nach Abschluss ein Kurszertifikat, und unsere Programme sind AZAV-zertifiziert, die rechtliche Voraussetzung für die Anerkennung durch Agentur für Arbeit und Jobcenter. In der Webentwicklung gewichten Arbeitgeber zusätzlich das GitHub-Portfolio. Deshalb entsteht in jedem Modul ein Projekt, das Sie in Bewerbungen zeigen können.",
  },
  {
    q: "Lohnen sich kostenlose Webentwicklungskurse?",
    a: "Kostenlose Kurse eignen sich hervorragend, um herauszufinden, ob Programmieren zu Ihnen passt. Für den Berufseinstieg fehlen ihnen drei Dinge: eine verbindliche Lernreihenfolge, Code-Feedback durch Trainer und ein bewertetes Abschlussprojekt. Nutzen Sie kostenlose Angebote als Test und ein gefördertes Programm für den tatsächlichen Wechsel.",
  },
  {
    q: "Frontend oder Backend — worauf sollte ich mich spezialisieren?",
    a: "Beginnen Sie mit Frontend, wenn Sie schnelle sichtbare Ergebnisse brauchen. Wählen Sie Backend, wenn Sie Logik und Daten bevorzugen. Full Stack öffnet die meisten Stellen, verlangt aber 9 bis 12 Monate. In unseren Anfängerprogrammen sind die ersten beiden Module identisch, sodass die Entscheidung nicht am ersten Tag fallen muss.",
  },
  {
    q: "Wie hoch ist das Einstiegsgehalt für Webentwickler in Deutschland?",
    a: "Das Bruttomediangehalt für Full-Stack-Webentwickler liegt laut StepStone-Gehaltsdaten (Stand 2026) bei 43.200 € pro Jahr, mit einer typischen Spanne von 37.600 € bis 50.700 €. Regionale Unterschiede sind erheblich, Ballungsräume zahlen deutlich über dem Bundesdurchschnitt. Mit Berufserfahrung und Spezialisierung steigt das Niveau spürbar an.",
  },
  {
    q: "Gibt es eine Jobgarantie nach dem Kurs?",
    a: "Wir geben keine Jobgarantie, sondern lebenslange Karriereunterstützung über unser Career Management System, also Bewerbungsunterlagen, Interviewvorbereitung und Alumni-Netzwerk. Seriöse Anbieter können eine Einstellung nicht garantieren. Entscheidend sind Portfolio, Bewerbungsstrategie und Ausdauer — und genau diese drei Punkte begleiten wir über das Kursende hinaus.",
  },
  {
    q: "Ist es mit 30 oder 40 Jahren zu spät, Webentwicklung zu lernen?",
    a: "Nein, Quereinstieg ist in der Webentwicklung Normalfall, nicht Ausnahme. Arbeitgeber bewerten Projekte, Problemlösung und Zusammenarbeit. Berufserfahrung aus anderen Branchen ist dabei ein Vorteil, kein Nachteil. Unsere Anfängerprogramme sind ausdrücklich für Menschen ohne technischen Hintergrund konzipiert und starten monatlich.",
  },
  {
    q: "Wird Programmieren durch KI ersetzt?",
    a: "KI verändert die Arbeit von Webentwicklern, ersetzt sie aber nicht. Codegenerierung beschleunigt Routineaufgaben. Architektur, Datenmodellierung, Sicherheit, Performance und die Bewertung von generiertem Code bleiben menschliche Aufgaben. Wer Grundlagen versteht, arbeitet mit KI-Werkzeugen schneller. Wer sie nicht versteht, kann deren Ergebnisse nicht prüfen.",
  },
  {
    q: "Kann ich den Kurs berufsbegleitend absolvieren?",
    a: "Unsere Programme laufen im Live-Format von 09:00 bis 16:45 Uhr Berliner Zeit. Für Beschäftigte prüfen wir im Beratungsgespräch Teilzeitoptionen und Fördermöglichkeiten nach dem Qualifizierungschancengesetz. Der passende Starttermin lässt sich planen, neue Kohorten beginnen monatlich.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-20" style={{ background: "#f6f7fb" }}>
      <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: PRIMARY }}>
            Häufige Fragen zu Webentwicklungskursen
          </div>
          <h2 className="font-bold text-3xl mb-4" style={{ color: DARK }}>
            Gib deiner Karriere einen Schub!
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-6">
            Ein gefördertes, live unterrichtetes Webentwicklungsprogramm bringt Sie in 3 bis 12 Monaten
            vom Einsteiger zum Entwickler mit vorzeigbarem Portfolio.
          </p>
          <div className="space-y-2 text-sm text-gray-600 mb-6">
            {[
              { icon: "M9 2C5.13 2 2 5.13 2 9s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm1 10H8V8h2v6z", text: "Bataver Str. 84, 41462 Neuss" },
              { icon: "M2 4l7 5 7-5M2 3h14v12H2z", text: "kontakt@clarusway.de" },
              { icon: "M3 3h4l1.5 3.5-2 1.5a9 9 0 0 0 3.5 3.5l1.5-2L15 11v4a1 1 0 0 1-1 1C7.4 16 2 10.6 2 4a1 1 0 0 1 1-1z", text: "+49 5331 9549998" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
                  <path d={item.icon} stroke={PRIMARY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item.text}
              </div>
            ))}
          </div>
          <a href="https://clarusway.de/application-form/" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm hover:opacity-90"
            style={{ background: PRIMARY }}>
            <IconArrow />
            Kostenloses Beratungsgespräch sichern
          </a>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-gray-200">
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-sm text-white hover:opacity-90 transition-colors"
                style={{ background: PRIMARY, outline: "none" }}>
                {f.q}
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none"
                  style={{ transform: open === i ? "rotate(180deg)" : "rotate(0)", transition: "transform .2s", flexShrink: 0 }}>
                  <path d="M2 4l4 4 4-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {open === i && (
                <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 13. Weitere Kurse ──────────────────────────────────────────────────────

function WeitereKurse() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-10">
          <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: PRIMARY }}>
            Weitere IT-Kurse
          </div>
          <h2 className="font-bold text-3xl" style={{ color: DARK }}>
            Vielleicht interessierst du dich auch für unsere{" "}
            <span style={{ color: PRIMARY }}>IT-Kurse!</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            { title: "Applied AI & Data Science", date: "30 Aug 2026", duration: "10 Monate / 30 Wochen", to: "/data-science" },
            { title: "AWS & DevOps Engineering", date: "24 Aug 2026", duration: "8 Monate", to: "/" },
            { title: "IT-Sicherheit Analyst", date: "27 Jul 2026", duration: "10 Monate", to: "/" },
            { title: "SDET — Software Test", date: "27 Jul 2026", duration: "12 Monate", to: "/" },
          ].map((k) => (
            <div key={k.title} className="rounded-2xl bg-white border border-gray-100 p-5 shadow-sm flex flex-col gap-3">
              <div className="font-bold text-base" style={{ color: DARK }}>{k.title}</div>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1.5"><IconCalendar /> {k.date}</span>
                <span className="flex items-center gap-1.5"><IconClock /> {k.duration}</span>
                <span className="flex items-center gap-1.5"><IconGraduation /> Zertifikat</span>
              </div>
              <a href="https://clarusway.de/application-form/" target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-white font-bold text-sm hover:opacity-90"
                style={{ background: PRIMARY }}>
                Jetzt anmelden
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CTA Banner (6i) ────────────────────────────────────────────────────────

function CtaBanner() {
  return (
    <section className="py-14" style={{ background: `linear-gradient(135deg, ${DARK} 0%, #2d1b3d 100%)` }}>
      <div className="max-w-[700px] mx-auto px-5 text-center">
        <h2 className="font-bold text-3xl text-white mb-4">
          Starten Sie Ihren Weg in die Webentwicklung
        </h2>
        <p className="text-gray-300 text-sm mb-2 leading-relaxed">
          Ein gefördertes, live unterrichtetes Webentwicklungsprogramm bringt Sie in 3 bis 12 Monaten
          vom Einsteiger zum Entwickler mit vorzeigbarem Portfolio.
        </p>
        <p className="text-gray-400 text-xs mb-8">
          Unverbindlich, kostenlos und ohne technischen Test. Neue Kohorten starten monatlich,
          Plätze auf 15 Teilnehmende begrenzt.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://clarusway.de/application-form/" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-bold text-sm hover:opacity-90"
            style={{ background: PRIMARY }}>
            <IconArrow />
            Kostenloses Beratungsgespräch sichern
          </a>
          <a href="https://clarusway.de/it-kurse/webentwicklungskurse/" target="_blank" rel="noreferrer"
            className="inline-flex items-center px-7 py-3.5 rounded-xl font-bold text-sm border-2 border-white/30 text-white hover:border-white/70">
            Lehrplan herunterladen
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Page root ──────────────────────────────────────────────────────────────

export default function WebDevPage() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Hero />
      <StatsBar />
      <WarumScheitert />
      <Vorteile />
      <ProgrammeTabelle />
      <ProgramSelector
        programs={wdPrograms}
        modules={wdModules}
        title="Welches Programm passt zu Ihrem Einstiegsniveau?"
      />
      <VierSchritte />
      <WarumClarusway />
      <WasLernen />
      <FrontendVsBackend />
      <GehaltKarriere />
      <FormatVergleich />
      <FAQ />
      <WeitereKurse />
      <CtaBanner />
    </div>
  );
}
