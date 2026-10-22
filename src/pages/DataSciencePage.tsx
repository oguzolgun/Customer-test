import { useState } from "react";
import ProgramSelector, { type CourseModule, type CourseProgram } from "@/components/ProgramSelector";

const PRIMARY = "#e51a59";
const SECONDARY = "#8a1c4a";
const DARK = "#1a1d2e";

// ── Module & Program data (preserved) ─────────────────────────────────────

const dsModules: CourseModule[] = [
  {
    id: "itg",
    label: "ITG",
    title: "IT-Grundlagen & Data Analytics",
    duration: "13 Wochen",
    color: "#b52252",
    topics: ["Python & Pandas", "SQL & Statistik", "Datenvisualisierung", "Linux & Git", "Abschlussprojekt"],
  },
  {
    id: "m1",
    label: "Modul 1",
    title: "Data Scientist",
    duration: "6 Wochen",
    color: PRIMARY,
    topics: ["Maschinelles Lernen", "scikit-learn", "Modellvalidierung", "NLP & Transformer", "Abschlussprojekt"],
  },
  {
    id: "m2",
    label: "Modul 2",
    title: "AI Engineer",
    duration: "11 Wochen",
    color: SECONDARY,
    topics: ["Deep Learning", "TensorFlow & PyTorch", "Modellbereitstellung", "APIs & Cloud für ML", "Abschlussprojekte"],
  },
];

const dsPrograms: CourseProgram[] = [
  {
    id: "anfaenger-full",
    title: "Data Analytics → Data Scientist → AI Engineer",
    subtitle: "Vollständiger Lernpfad",
    badge: "3 Zertifikate · 30 Wochen",
    moduleIds: ["itg", "m1", "m2"],
    startsAt: "itg",
    duration: "30 Wochen",
    schedule: "09:00–16:45 Uhr Berlin",
    capacity: "Max. 15 Plätze",
    language: "Deutsch",
    dates: ["27 Jul 2026", "30 Aug 2026", "28 Sep 2026", "26 Okt 2026"],
    recommended: true,
    description:
      "Der vollständige Weg vom Einstieg ohne Vorkenntnisse bis zur Modellauslieferung als AI Engineer — 150 Sessions, 3 Zertifikate, 1 Bildungsgutschein.",
    curriculumUrl: "https://clarusway.de/it-kurse/",
    enrollUrl: "https://clarusway.de/application-form/",
  },
  {
    id: "data-scientist",
    title: "Data Analytics + Data Scientist",
    subtitle: "Bis Modul 1",
    badge: "2 Zertifikate · 19 Wochen",
    moduleIds: ["itg", "m1"],
    startsAt: "itg",
    duration: "19 Wochen",
    schedule: "09:00–16:45 Uhr Berlin",
    capacity: "Max. 15 Plätze",
    language: "Deutsch",
    dates: ["27 Jul 2026", "30 Aug 2026", "28 Sep 2026"],
    recommended: false,
    description:
      "Vom Einstieg bis zum Data Scientist — mit Python, SQL, Statistik, maschinellem Lernen und eigenem Modell-Portfolio.",
    curriculumUrl: "https://clarusway.de/it-kurse/",
    enrollUrl: "https://clarusway.de/application-form/",
  },
  {
    id: "ki-meisterung",
    title: "AI Engineer — Direkteinstieg",
    subtitle: "Ab Modul 2",
    badge: "1 Zertifikat · 11 Wochen",
    moduleIds: ["m2"],
    startsAt: "m2",
    duration: "11 Wochen",
    schedule: "09:00–16:45 Uhr Berlin",
    capacity: "Max. 15 Plätze",
    language: "Deutsch",
    dates: ["30 Aug 2026", "28 Sep 2026", "26 Okt 2026"],
    recommended: false,
    description:
      "Für Professionals mit Python-, ML- und NLP-Grundlagen. Deep Learning, Deployment und produktive KI-Systeme in 11 Wochen.",
    curriculumUrl: "https://clarusway.de/it-kurse/",
    enrollUrl: "https://clarusway.de/application-form/",
  },
];

// ── SVG Icons (professional, no emojis) ───────────────────────────────────

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
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
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
function IconChart() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
      <path d="M2 14l4-5 3 3 5-7 2 2" stroke={PRIMARY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="7" stroke={PRIMARY} strokeWidth="1.5" />
      <path d="M9 5.5V9l2.5 2" stroke={PRIMARY} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function IconGraduation() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
      <path d="M9 3L1 7l8 4 8-4-8-4z" stroke={PRIMARY} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M5 9v4c0 1.5 1.8 2.5 4 2.5s4-1 4-2.5V9" stroke={PRIMARY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 7v4" stroke={PRIMARY} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// ── 1. Hero ────────────────────────────────────────────────────────────────

const toolBadges = ["Python", "scikit-learn", "TensorFlow", "PyTorch", "Tableau", "SQL", "Power BI"];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 18 18" fill={PRIMARY}>
          <path d="M9 1l2.163 4.38L16.5 6.18l-3.75 3.656.885 5.164L9 12.45l-4.635 2.55.885-5.164L1.5 6.18l5.337-.8z" />
        </svg>
      ))}
    </div>
  );
}

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
            Data Science Weiterbildung mit Bildungsgutschein, in 30 Wochen zum AI Engineer
          </h1>
          <p className="text-[13px] font-semibold mb-2" style={{ color: SECONDARY }}>
            Drei aufeinander aufbauende Module — vom Data Analyst über den Data Scientist bis zum AI Engineer, live unterrichtet in Gruppen von maximal 15 Personen.
          </p>
          <div className="flex items-center gap-3 mb-5 mt-4">
            <Stars />
            <span className="text-sm font-semibold text-gray-700">4,9 / 5 — Career Karma · 381 Bewertungen</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Bei bewilligtem Bildungsgutschein kostet Sie eine Data Science Weiterbildung nichts, während
            vergleichbare Zertifikatslehrgänge am Markt zwischen 1.500 und 1.890 Euro liegen. Unser Programm
            dauert 30 Wochen, besteht aus drei Modulen und endet mit drei eigenständigen Berufsbildern.
            Wir bilden seit Februar 2021 in Deutschland aus und sind AZAV-zertifiziert.
          </p>
          <div className="flex flex-wrap gap-3 mb-4">
            <a
              href="https://clarusway.de/application-form/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-xl text-white font-bold text-sm hover:opacity-90"
              style={{ background: PRIMARY }}
            >
              Kostenloses Beratungsgespräch sichern
            </a>
            <a
              href="https://clarusway.de/it-kurse/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-xl font-bold text-sm border-2 hover:opacity-80"
              style={{ borderColor: DARK, color: DARK }}
            >
              Lehrplan herunterladen
            </a>
          </div>
          <p className="text-xs text-gray-400">
            Kostenlos und unverbindlich. Für Modul 1 ohne technischen Eingangstest. Rückmeldung innerhalb von 24 Stunden.
          </p>
        </div>

        {/* Right: code + credential badges */}
        <div className="relative">
          <div className="w-full rounded-2xl overflow-hidden shadow-2xl" style={{ background: "#1e1e2e" }}>
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-3 text-xs text-gray-500 font-mono">data_science.py</span>
            </div>
            <div className="px-6 py-6 font-mono text-sm leading-loose">
              <div className="text-blue-400">import pandas <span className="text-white">as</span> pd</div>
              <div className="text-blue-400">import sklearn</div>
              <div className="text-blue-400">import tensorflow <span className="text-white">as</span> tf</div>
              <div className="mt-3 text-yellow-300">model = train(data)</div>
              <div className="text-yellow-300">model.validate(X_test)</div>
              <div className="mt-3 text-green-400">deploy(model, target=<span className="text-orange-300">"production"</span>)</div>
              <div className="text-gray-500 mt-1"># AI Engineer Abschlussprojekt ✓</div>
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
          ["150", "Live-Sessions"],
          ["30 Wochen", "Gesamtdauer"],
          ["3", "Zertifikate & Berufsbilder"],
          ["Max. 15", "Teilnehmende pro Gruppe"],
          ["Seit 2021", "AZAV-zertifiziert in Deutschland"],
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

// ── 3. Das Wichtigste in Kürze ─────────────────────────────────────────────

function DasWichtigste() {
  return (
    <section className="py-14 bg-white border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-bold text-2xl mb-7" style={{ color: DARK }}>
          Das Wichtigste in Kürze
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "Drei Module mit zusammen 150 Sessions über 30 Wochen, jedes Modul schließt mit einem eigenen Berufsbild ab.",
            "Bei bewilligtem Bildungsgutschein trägt die Agentur für Arbeit 100 Prozent der Kosten. Beschäftigte werden über das Qualifizierungschancengesetz gefördert.",
            "Data Scientists verdienen in Deutschland im Median 57.200 Euro brutto im Jahr, Junior Data Analysts 41.800 Euro (StepStone, Stand 2026).",
            "Der Einstieg ist auf jeder Stufe möglich: ohne Vorkenntnisse in Modul 1, mit Vorkenntnissen nach technischem Assessment direkt in Modul 2 oder 3.",
          ].map((text, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-xl border border-gray-100 px-5 py-4 shadow-sm"
              style={{ background: i % 2 === 0 ? "#fff" : "#fafafa" }}
            >
              <span className="flex-shrink-0 mt-0.5"><IconCheck /></span>
              <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 4. ProgramSelector (reusable component) ────────────────────────────────
// → imported above

// ── 5. Wie aufgebaut — 3 Rollen ───────────────────────────────────────────

function WieAufgebaut() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-bold text-3xl md:text-4xl mb-4" style={{ color: DARK }}>
          Wie die Data Science Weiterbildung aufgebaut ist
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-7 max-w-3xl">
          Die Weiterbildung besteht aus <strong>drei Modulen mit 150 Sessions</strong> über 30 Wochen. Jedes
          Modul endet mit einem eigenen Berufsbild — und jedes Modul steht für sich. Wer alle drei
          durchläuft, kommt vom Einstieg ohne Vorkenntnisse bis zur Auslieferung produktiver KI-Modelle.
        </p>

        {/* Modul-Übersichtstabelle */}
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ background: DARK }}>
                <th className="text-left px-5 py-4 text-white font-bold">Modul</th>
                <th className="text-left px-5 py-4 text-white font-bold">Umfang</th>
                <th className="text-left px-5 py-4 text-white font-bold">Dauer</th>
                <th className="text-left px-5 py-4 text-white font-bold">Abschlussprofil</th>
              </tr>
            </thead>
            <tbody>
              {[
                { modul: "Modul 1, Data Analytics", sessions: "65 Sessions", dauer: "13 Wochen", profil: "Data Analyst", color: "#b52252" },
                { modul: "Modul 2, Data Science", sessions: "30 Sessions", dauer: "6 Wochen", profil: "Data Scientist", color: PRIMARY },
                { modul: "Modul 3, AI Engineering", sessions: "55 Sessions", dauer: "11 Wochen", profil: "AI Engineer", color: SECONDARY },
              ].map((row, i) => (
                <tr key={row.modul} style={{ background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                  <td className="px-5 py-4 font-semibold" style={{ color: row.color }}>{row.modul}</td>
                  <td className="px-5 py-4 text-gray-700">{row.sessions}</td>
                  <td className="px-5 py-4 text-gray-700">{row.dauer}</td>
                  <td className="px-5 py-4 font-semibold text-gray-900">{row.profil}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-3 mb-10 max-w-3xl">
          <p className="text-sm text-gray-600 leading-relaxed">
            Die drei Rollen unterscheiden sich darin, was am Ende der Arbeit steht. Ein Data Analyst
            beantwortet Fragen aus vorhandenen Daten und liefert Auswertungen. Ein Data Scientist
            baut Modelle, die Vorhersagen treffen. Ein AI Engineer bringt diese Modelle in laufende
            Systeme und hält sie dort am Laufen.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Modul 3 ist der Punkt, an dem sich das Programm vom Markt löst. In den Top-Ergebnissen
            zu dieser Suchanfrage endet jedes Angebot beim Data Scientist oder bei einzelnen
            Spezialkursen für Fortgeschrittene. Ein durchgehender Weg bis zur Modellauslieferung
            existiert dort nicht.
          </p>
        </div>

        {/* 3 Rollen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {[
            {
              weeks: "13 Wochen",
              role: "Data Analyst",
              module: "IT-Grundlagen",
              color: "#b52252",
              desc: "Beantwortet Fragen aus vorhandenen Daten und liefert Auswertungen. Abschluss nach Modul 1.",
              tools: ["Python", "Pandas", "SQL", "Tableau", "Statistik"],
            },
            {
              weeks: "6 Wochen",
              role: "Data Scientist",
              module: "Modul 1",
              color: PRIMARY,
              desc: "Baut Modelle, die Vorhersagen treffen und Muster in Daten erkennen. Abschluss nach Modul 2.",
              tools: ["scikit-learn", "ML-Algorithmen", "Modellvalidierung", "NLP"],
            },
            {
              weeks: "11 Wochen",
              role: "AI Engineer",
              module: "Modul 2",
              color: SECONDARY,
              desc: "Bringt Modelle in laufende Systeme und hält sie am Laufen — der Punkt, an dem sich das Programm vom Markt löst.",
              tools: ["TensorFlow", "PyTorch", "APIs", "Cloud für ML", "Deployment"],
            },
          ].map((r) => (
            <div
              key={r.role}
              className="rounded-2xl border overflow-hidden shadow-sm"
              style={{ borderColor: r.color + "33" }}
            >
              <div className="px-5 pt-5 pb-4" style={{ borderBottom: `2px solid ${r.color}22` }}>
                <div
                  className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-3"
                  style={{ background: r.color + "15", color: r.color }}
                >
                  {r.module} · {r.weeks}
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: DARK }}>{r.role}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{r.desc}</p>
              </div>
              <div className="px-5 py-4">
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Werkzeuge</div>
                <div className="flex flex-wrap gap-1.5">
                  {r.tools.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-medium px-2 py-0.5 rounded-full"
                      style={{ background: r.color + "12", color: r.color }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Format / Ablauf */}
        <div className="rounded-2xl border border-gray-100 p-7 shadow-sm bg-white mb-8">
          <h3 className="font-bold text-xl mb-5" style={{ color: DARK }}>Ablauf, Dauer und Format des Unterrichts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-start gap-3 mb-4">
                <span className="flex-shrink-0 mt-1"><IconClock /></span>
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>Live-Unterricht</strong> von 09:00 bis 16:45 Uhr Berliner Zeit, in Gruppen mit
                  höchstens 15 Teilnehmenden, mit monatlichen Startterminen. Die volle Strecke dauert
                  30 Wochen, aufgeteilt in <strong>13 / 6 / 11 Wochen</strong> je Modul.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1"><IconUsers /></span>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Fragen werden im Moment des Steckenbleibens beantwortet, eingereichter Code wird von
                  einem Trainer bewertet, und jedes Modul endet mit einem Projekt. Aufgezeichnete Kurse
                  liefern denselben Stoff ohne diese Rückmeldung.
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-start gap-3 mb-4">
                <span className="flex-shrink-0 mt-1"><IconShield /></span>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Eine Teilnahme vor Ort ist an <strong>28 Partnerstandorten</strong> in allen Bundesländern
                  möglich. Den Starttermin stimmen wir auf Ihren Förderbescheid ab.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1"><IconCalendar /></span>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Für Berufstätige prüfen wir im Beratungsgespräch Teilzeitmodelle und die Förderung über
                  das Qualifizierungschancengesetz. Neue Kohorten starten monatlich.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 6. Gehaltstabelle ──────────────────────────────────────────────────────

function Gehaltstabelle() {
  return (
    <section className="py-16" style={{ background: "#f6f7fb" }}>
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-bold text-3xl mb-3" style={{ color: DARK }}>
          Was Sie nach der Weiterbildung verdienen
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-7 max-w-3xl">
          Der Verdienst steigt mit jeder Modulstufe. Junior Data Analysts liegen im Median bei{" "}
          <strong>41.800 Euro</strong> brutto im Jahr, Data Scientists bei <strong>57.200 Euro</strong>,
          Machine Learning Engineers bei 57.800 Euro. Zwischen Modul 1 und Modul 2 liegen damit rund{" "}
          <strong>15.000 Euro Jahresgehalt</strong>.
        </p>
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm mb-5">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ background: DARK }}>
                <th className="text-left px-5 py-4 text-white font-bold">Rolle</th>
                <th className="text-left px-5 py-4 text-white font-bold">Median brutto pro Jahr</th>
                <th className="text-left px-5 py-4 text-white font-bold">Typische Spanne</th>
                <th className="text-left px-5 py-4 text-white font-bold">Modul</th>
              </tr>
            </thead>
            <tbody>
              {[
                { role: "Junior Data Analyst", median: "41.800 Euro", spanne: "38.300 bis 47.100 Euro", modul: "Modul 1" },
                { role: "Data Scientist", median: "57.200 Euro", spanne: "49.200 bis 68.100 Euro", modul: "Modul 2" },
                { role: "Machine Learning Engineer", median: "57.800 Euro", spanne: "49.600 bis 66.600 Euro", modul: "Modul 3" },
              ].map((row, i) => (
                <tr key={row.role} style={{ background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                  <td className="px-5 py-4 font-semibold text-gray-900">{row.role}</td>
                  <td className="px-5 py-4 font-bold" style={{ color: PRIMARY }}>{row.median}</td>
                  <td className="px-5 py-4 text-gray-500">{row.spanne}</td>
                  <td className="px-5 py-4 text-gray-700 font-medium">{row.modul}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mb-7 max-w-3xl leading-relaxed">
          Die Werte stammen aus den StepStone-Gehaltsdaten mit Stand 2026 und gelten für Vollzeitstellen
          in Deutschland. Das Einstiegsgehalt für Data Scientists gibt StepStone mit rund 54.000 Euro an.
          Ballungsräume zahlen über dem Bundesschnitt.
        </p>
        <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm max-w-2xl">
          <span className="flex-shrink-0 mt-0.5"><IconChart /></span>
          <p className="text-sm text-gray-700 leading-relaxed">
            Für die Jobchancen zählt weniger der Titel als der Nachweis. Unternehmen prüfen zuerst,
            ob eine Bewerberin ein Modell selbst gebaut, validiert und ausgeliefert hat. Darauf zielt
            der Modulaufbau.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── 7. Abschluss & IHK-Vergleich ──────────────────────────────────────────

function AbschlussVergleich() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-bold text-3xl mb-3" style={{ color: DARK }}>
          Welchen Abschluss Sie erhalten und wie er zur IHK-Variante steht
        </h2>
        <p className="text-sm text-gray-500 mb-8 max-w-2xl">
          Nach jedem abgeschlossenen Modul erhalten Sie ein Zertifikat, und alle Programme sind
          AZAV-zertifiziert — die rechtliche Voraussetzung für eine Förderung durch Agentur für Arbeit und Jobcenter.
        </p>
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ background: DARK }}>
                <th className="text-left px-5 py-4 text-white font-bold">Kriterium</th>
                <th className="px-5 py-4 text-white font-bold text-center">IHK-Zertifikatslehrgang</th>
                <th className="px-5 py-4 text-white font-bold text-center">Clarusway AZAV-Weiterbildung</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Dauer", "ca. 10 Wochen", "30 Wochen (3 Module)"],
                ["Unterrichtseinheiten", "ca. 78 UE", "150 Live-Sessions"],
                ["Format", "Blended Learning", "Live-Unterricht, täglich"],
                ["Kosten ohne Förderung", "ca. 1.890 €", "vergleichbar / Selbstzahler-Raten"],
                ["Mit Bildungsgutschein", "teilweise förderbar", "100 % der Kursgebühren"],
                ["Projekttiefe", "gering", "Milestone-Projekte je Modul"],
                ["Zertifikate", "1", "bis zu 3"],
                ["Zielgruppe", "Ergänzung zum bestehenden Beruf", "Berufswechsel & Quereinstieg"],
              ].map(([k, a, b], i) => (
                <tr key={k} style={{ background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                  <td className="px-5 py-3 font-semibold text-gray-800">{k}</td>
                  <td className="px-5 py-3 text-center text-gray-500">{a}</td>
                  <td className="px-5 py-3 text-center font-semibold" style={{ color: SECONDARY }}>{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 max-w-2xl leading-relaxed">
          Wer eine kompakte Ergänzung zum bestehenden Beruf sucht, ist mit einem Zertifikatslehrgang gut
          bedient. Wer den Beruf wechselt, braucht Projekttiefe und ein Portfolio — und beides entsteht
          erst über die volle Strecke.
        </p>
      </div>
    </section>
  );
}

// ── 8. Kosten & Förderung ──────────────────────────────────────────────────

function KostenFoerderung() {
  return (
    <section className="py-20" style={{ background: "#f6f7fb" }}>
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-bold text-3xl mb-3" style={{ color: DARK }}>
          Was die Weiterbildung kostet und wer sie bezahlt
        </h2>
        <p className="text-sm text-gray-500 mb-8 max-w-2xl">
          Bei bewilligtem Bildungsgutschein übernimmt die Agentur für Arbeit oder das Jobcenter
          100 Prozent der Kursgebühren, dazu Prüfungsgebühren, Lernmaterial, Fahrtkosten und
          bei Bedarf die Kinderbetreuung. Arbeitslosengeld oder Bürgergeld laufen weiter.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {[
            {
              title: "Bildungsgutschein",
              icon: <IconShield />,
              lines: [
                "100 % der Kursgebühren",
                "Lernmaterial & Prüfungsgebühren",
                "Fahrtkosten inklusive",
                "Kinderbetreuung auf Antrag",
                "Bürgergeld / ALG läuft weiter",
              ],
              note: "Für Arbeitsuchende und von Arbeitslosigkeit Bedrohte",
            },
            {
              title: "Qualifizierungschancengesetz (§ 82 SGB III)",
              icon: <IconChart />,
              lines: [
                "Zuschuss zu Lehrgangskosten",
                "Zuschuss zum Arbeitsentgelt",
                "Antrag stellt der Arbeitgeber",
                "Bis 100 % bei Betrieben unter 50 Beschäftigten",
              ],
              note: "Für Berufstätige, die sich weiterqualifizieren",
            },
            {
              title: "Selbstzahler",
              icon: <IconCalendar />,
              lines: [
                "Mehrere Ratenmodelle verfügbar",
                "Keine Zinsen auf Ratenzahlung",
                "Beratung zu Förderwegen inklusive",
              ],
              note: "Für alle anderen Situationen",
            },
          ].map((card) => (
            <div key={card.title} className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm flex flex-col gap-3">
              <div className="flex items-center gap-2">
                {card.icon}
                <span className="font-bold text-sm" style={{ color: DARK }}>{card.title}</span>
              </div>
              <ul className="space-y-1.5">
                {card.lines.map((l) => (
                  <li key={l} className="flex items-start gap-2 text-xs text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: PRIMARY }} />
                    {l}
                  </li>
                ))}
              </ul>
              <p className="text-[11px] text-gray-400 mt-auto">{card.note}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://clarusway.de/application-form/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm hover:opacity-90"
            style={{ background: PRIMARY }}
          >
            <IconArrow />
            Förderfähigkeit kostenlos prüfen lassen
          </a>
          <a
            href="https://clarusway.de/finanzierung-studiengebuehren/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border-2 hover:opacity-80"
            style={{ borderColor: SECONDARY, color: SECONDARY }}
          >
            Finanzierung & Förderung
          </a>
        </div>
      </div>
    </section>
  );
}

// ── 9. Quereinstieg ───────────────────────────────────────────────────────

function Quereinstieg() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="font-bold text-3xl mb-4" style={{ color: DARK }}>
            Quereinstieg ohne IT-Hintergrund
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            Modul 1 setzt keine Programmier- oder Datenkenntnisse voraus und richtet sich ausdrücklich
            an vollständige Anfänger. Einen technischen Eingangstest gibt es dafür nicht — wir führen
            lediglich ein Gespräch zu Lernbereitschaft und Kommunikation.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            <strong>Zur Mathematik gehört eine klare Antwort:</strong> Ein Mathematikstudium brauchen
            Sie nicht. Mit Statistik, Wahrscheinlichkeitsrechnung und Modellbewertung arbeiten Sie
            dagegen durchgehend — Modul 1 baut diese Grundlagen von null auf.
          </p>
          <div
            className="rounded-xl p-4 border text-sm text-gray-700 leading-relaxed"
            style={{ borderColor: `${PRIMARY}22`, background: `${PRIMARY}06` }}
          >
            Damit steht der Weg auch Menschen offen, die im Ergebnisfeld dieser Suchanfrage sonst kein
            Angebot finden: Hochschulkurse verlangen einen Abschluss, geförderte Vollzeitprogramme
            richten sich häufig ausschließlich an Arbeitsuchende.
          </div>
        </div>
        <div className="space-y-3">
          {[
            {
              trigger: "Ohne Vorkenntnisse",
              desc: "Start in Modul 1 — 13 Wochen Data Analytics. Kein technischer Eingangstest.",
              color: "#b52252",
            },
            {
              trigger: "Mit Python, Pandas, NumPy, Statistik & SQL",
              desc: "Direkteinstieg in Modul 2 nach technischem Assessment.",
              color: PRIMARY,
            },
            {
              trigger: "Mit Git, APIs sowie ML- und NLP-Grundlagen",
              desc: "Direkteinstieg in Modul 3 — AI Engineering in 11 Wochen.",
              color: SECONDARY,
            },
          ].map((row) => (
            <div
              key={row.trigger}
              className="flex items-start gap-3 rounded-xl border px-5 py-4 shadow-sm bg-white"
              style={{ borderColor: row.color + "33" }}
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
                style={{ background: row.color }}
              />
              <div>
                <div className="font-bold text-sm mb-0.5" style={{ color: row.color }}>{row.trigger}</div>
                <div className="text-xs text-gray-600 leading-relaxed">{row.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 10. Werkzeuge im Lehrplan ──────────────────────────────────────────────

function Werkzeuge() {
  return (
    <section className="py-16" style={{ background: "#f6f7fb" }}>
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-bold text-3xl mb-3" style={{ color: DARK }}>
          Welche Werkzeuge im Lehrplan stehen
        </h2>
        <p className="text-sm text-gray-500 mb-8 max-w-2xl leading-relaxed">
          Python ist die durchgehende Arbeitssprache aller drei Module. Die Reihenfolge ist im Modulaufbau
          festgelegt: Datenbereinigung und explorative Datenanalyse kommen vor jedem Modell,
          Modellvalidierung vor jedem Deployment.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              module: "IT-Grundlagen & Modul 1",
              color: "#b52252",
              tools: [
                ["Python", "Durchgehende Arbeitssprache"],
                ["Pandas & NumPy", "Datenverarbeitung"],
                ["SQL", "Relationale Datenbanken"],
                ["Statistik", "Wahrscheinlichkeit & Korrelation"],
                ["Jupyter Notebook", "Exploration & Analyse"],
                ["Git", "Versionskontrolle"],
              ],
            },
            {
              module: "Modul 1 — Data Scientist",
              color: PRIMARY,
              tools: [
                ["scikit-learn", "Klassisches maschinelles Lernen"],
                ["Transformer-Architekturen", "Grundlagen NLP"],
                ["Power BI", "Datenvisualisierung"],
                ["Tableau", "Datenvisualisierung"],
                ["Modellvalidierung", "Cross-Validation & Metriken"],
              ],
            },
            {
              module: "Modul 2 — AI Engineer",
              color: SECONDARY,
              tools: [
                ["TensorFlow", "Deep Learning"],
                ["PyTorch", "Deep Learning"],
                ["APIs & HTTP/JSON", "Systemintegration"],
                ["Cloud für ML", "Modellbereitstellung"],
                ["NLP & Transformer", "Erweitert"],
              ],
            },
          ].map((grp) => (
            <div
              key={grp.module}
              className="rounded-2xl bg-white border overflow-hidden shadow-sm"
              style={{ borderColor: grp.color + "33" }}
            >
              <div
                className="px-5 py-3 text-[10px] font-bold uppercase tracking-widest"
                style={{ background: grp.color + "15", color: grp.color }}
              >
                {grp.module}
              </div>
              <ul className="divide-y divide-gray-50">
                {grp.tools.map(([tool, sub]) => (
                  <li key={tool} className="flex items-start gap-3 px-5 py-3">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                      style={{ background: grp.color }}
                    />
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
      </div>
    </section>
  );
}

// ── 11. Warum Clarusway ────────────────────────────────────────────────────

function WarumClarusway() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="font-bold text-3xl mb-4" style={{ color: DARK }}>
            Warum Weiterbildung mit Clarusway?
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            Wir bilden seit Februar 2021 in Deutschland aus, sind AZAV-zertifiziert und partner
            von 28 Standorten in allen Bundesländern. Unsere Programme sind auf maximale
            Nachvollziehbarkeit für Förderstellen ausgelegt.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "AZAV-zertifiziert seit 2021",
              "Live-Unterricht, max. 15 Plätze",
              "28 Partnerstandorte bundesweit",
              "Lebenslange Karriereunterstützung",
              "Monatliche Startkohorten",
              "Bildungsgutschein-Abwicklung",
              "Milestone-Projekte je Modul",
              "4,9 / 5 auf Career Karma",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-sm text-gray-700 py-1.5">
                <span className="flex-shrink-0"><IconCheck /></span>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-gray-100 p-7 shadow-sm bg-white">
          <div className="flex items-center gap-3 mb-5">
            <IconGraduation />
            <span className="font-bold text-sm" style={{ color: DARK }}>Kostenlose Beratung & Förderfähigkeitsprüfung</span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-5">
            Im kostenlosen Erstgespräch ordnen wir Ihren Hintergrund einer der drei Stufen zu, prüfen
            die Förderfähigkeit und nennen Ihnen den nächsten Starttermin. Kostenlos, unverbindlich,
            für Modul 1 ohne technischen Test. Neue Kohorten starten monatlich, die Plätze sind auf
            15 Teilnehmende begrenzt.
          </p>
          <a
            href="https://clarusway.de/application-form/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm hover:opacity-90 w-full justify-center"
            style={{ background: PRIMARY }}
          >
            Kostenloses Beratungsgespräch sichern
          </a>
        </div>
      </div>
    </section>
  );
}

// ── 12. Alumni ────────────────────────────────────────────────────────────

const alumni = [
  {
    initials: "CC",
    name: "Cagri C.",
    platform: "Career Karma",
    text: "Der Besuch des Data Science Bootcamps bei Clarusway ist eine meiner besten Entscheidungen. Sie lassen dich nicht aufgeben und helfen dir die ganze Zeit, bis du einen Job bekommst. Das Beste ist das Mentoring — sie lehren nicht nur, sondern begleiten dich wirklich.",
  },
  {
    initials: "IW",
    name: "Iden W.",
    platform: "Google",
    text: "Clarusway hat ein innovatives Lehrmodell. Die Phasen vor, während und nach dem Unterricht sorgen dafür, dass du lernst. Es gibt keinen Weg, das Curriculum zu verpassen. Du lernst die Lektionen nacheinander — Clarusway nutzt die neuesten Bildungstools.",
  },
];

function Alumni() {
  return (
    <section className="py-20" style={{ background: "#f6f7fb" }}>
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-bold text-3xl mb-10" style={{ color: DARK }}>
          Was haben unsere Alumni gesagt?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {alumni.map((a) => (
            <div key={a.name} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                  style={{ background: PRIMARY }}
                >
                  {a.initials}
                </div>
                <div>
                  <div className="font-bold text-sm" style={{ color: DARK }}>{a.name}</div>
                  <Stars />
                  <div className="text-xs text-gray-400">{a.platform}</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed italic">"{a.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 13. FAQ (8 Fragen aus dem SEO-Briefing) ───────────────────────────────

const faqs = [
  {
    q: "Was kostet eine Data Science Weiterbildung?",
    a: "Bei bewilligtem Bildungsgutschein zahlen Sie nichts — die Agentur für Arbeit oder das Jobcenter übernimmt 100 Prozent. Ohne Förderung liegen vergleichbare Angebote am Markt zwischen 1.500 Euro je Hochschulmodul und rund 1.890 Euro für einen IHK-Zertifikatslehrgang. Beschäftigte werden über das Qualifizierungschancengesetz gefördert, hier stellt der Arbeitgeber den Antrag.",
  },
  {
    q: "Wie lange dauert eine Data Science Weiterbildung?",
    a: "Die volle Strecke dauert 30 Wochen und umfasst 150 Sessions. Bis zum Profil Data Scientist brauchen Sie IT-Grundlagen und Modul 1, zusammen 19 Wochen. Wer mit Python, SQL und Statistik einsteigt, schließt Modul 2 in 6 Wochen ab. Zertifikatslehrgänge am Markt dauern rund 10 Wochen bei entsprechend geringerer Projekttiefe.",
  },
  {
    q: "Kann ich die Weiterbildung berufsbegleitend machen?",
    a: "Der Unterricht läuft im Vollzeitformat von 09:00 bis 16:45 Uhr Berliner Zeit. Für Berufstätige prüfen wir im Beratungsgespräch Teilzeitmodelle und die Förderung nach dem Qualifizierungschancengesetz, bei der Ihr Arbeitgeber einen Zuschuss zu Kurskosten und Arbeitsentgelt erhält. Neue Kohorten starten monatlich.",
  },
  {
    q: "Ist eine IHK-Weiterbildung besser als eine AZAV-geförderte?",
    a: "Beide führen zu einem anerkannten Zertifikat, sie zielen aber auf unterschiedliche Situationen. Ein IHK-Zertifikatslehrgang ergänzt einen bestehenden Beruf in rund zehn Wochen und kostet knapp 1.900 Euro ohne Förderung. Eine AZAV-zertifizierte Weiterbildung ist förderfähig, dauert deutlich länger und ist auf den Berufswechsel ausgelegt.",
  },
  {
    q: "Kann man als Quereinsteiger ohne IT-Hintergrund einsteigen?",
    a: "Ja, Modul 1 verlangt keine Programmier- oder Datenerfahrung. Vor dem Start führen wir ein Gespräch zu Lernbereitschaft und Kommunikation, einen technischen Test gibt es für Modul 1 nicht. Wer direkt in Modul 2 oder 3 einsteigen möchte, absolviert stattdessen ein technisches Assessment.",
  },
  {
    q: "Muss ich Mathematik studiert haben?",
    a: "Nein, ein Mathematikstudium ist keine Voraussetzung. Sie brauchen ein sicheres Grundverständnis für Verteilungen, Korrelation und Modellbewertung — und genau das baut Modul 1 von null auf. Wer Formeln grundsätzlich meiden möchte, wird spätestens in Modul 2 an Grenzen stoßen.",
  },
  {
    q: "Welche Gehaltsaussichten habe ich nach der Weiterbildung?",
    a: "Junior Data Analysts verdienen in Deutschland im Median 41.800 Euro brutto im Jahr, Data Scientists 57.200 Euro und Machine Learning Engineers 57.800 Euro. Die Werte stammen aus den StepStone-Gehaltsdaten mit Stand 2026. Entscheidend für die Bewerbung ist neben dem Zertifikat das Projektportfolio aus den Modulen.",
  },
  {
    q: "Bekomme ich für die Weiterbildung einen Bildungsgutschein?",
    a: "Den Bildungsgutschein stellt die Agentur für Arbeit oder das Jobcenter aus, wenn Sie arbeitsuchend, von Arbeitslosigkeit bedroht oder ohne Berufsabschluss beschäftigt sind. Voraussetzung auf Anbieterseite ist eine AZAV-Zulassung mit gültiger Maßnahmenummer, die wir vorweisen. Die Vorprüfung Ihrer Förderfähigkeit übernehmen wir kostenlos.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: PRIMARY }}>
            Häufige Fragen zur Data Science Weiterbildung
          </div>
          <h2 className="font-bold text-3xl mb-4" style={{ color: DARK }}>
            Gib deiner Karriere einen Schub!
          </h2>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            Wer die Data Science Weiterbildung vollständig durchläuft, verlässt sie mit drei Zertifikaten,
            einem Projektportfolio und dem Profil eines AI Engineers.
          </p>
          <div className="space-y-2 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <span style={{ color: PRIMARY }}>
                <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2C5.13 2 2 5.13 2 9s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm1 10H8V8h2v6z" fill={PRIMARY} />
                </svg>
              </span>
              Bataver Str. 84, 41462 Neuss
            </div>
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
                <path d="M2 4l7 5 7-5" stroke={PRIMARY} strokeWidth="1.5" strokeLinecap="round" />
                <rect x="2" y="3" width="14" height="12" rx="2" stroke={PRIMARY} strokeWidth="1.5" />
              </svg>
              kontakt@clarusway.de
            </div>
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
                <path d="M3 3h4l1.5 3.5-2 1.5a9 9 0 0 0 3.5 3.5l1.5-2L15 11v4a1 1 0 0 1-1 1C7.4 16 2 10.6 2 4a1 1 0 0 1 1-1z" stroke={PRIMARY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              +49 5331 9549998
            </div>
          </div>
          <a
            href="https://clarusway.de/application-form/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm hover:opacity-90"
            style={{ background: PRIMARY }}
          >
            <IconArrow />
            Kostenloses Beratungsgespräch sichern
          </a>
        </div>
        <div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-gray-200">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-sm text-white hover:opacity-90 transition-colors"
                  style={{ background: PRIMARY, outline: "none" }}
                >
                  {f.q}
                  <svg
                    width="14" height="14" viewBox="0 0 12 12" fill="none"
                    style={{ transform: open === i ? "rotate(180deg)" : "rotate(0)", transition: "transform .2s", flexShrink: 0 }}
                  >
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
      </div>
    </section>
  );
}

// ── 14. Weitere Kurse ──────────────────────────────────────────────────────

function WeitereKurse() {
  return (
    <section className="py-20" style={{ background: "#f6f7fb" }}>
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-10">
          <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: PRIMARY }}>
            Weitere Kurse
          </div>
          <h2 className="font-bold text-3xl" style={{ color: DARK }}>
            Vielleicht interessierst du dich auch für unsere{" "}
            <span style={{ color: PRIMARY }}>IT-Kurse!</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            { title: "AWS & DevOps Engineering Programme", date: "24 Aug 2026", duration: "8 Monate", to: "/" },
            { title: "Full-Stack-Entwicklung Kurs", date: "27 Jul 2026", duration: "12 Monate", to: "/webentwicklung" },
            { title: "IT-Sicherheit Analyst", date: "27 Jul 2026", duration: "10 Monate", to: "/" },
            { title: "SDET", date: "27 Jul 2026", duration: "12 Monate", to: "/" },
          ].map((k) => (
            <div key={k.title} className="rounded-2xl bg-white border border-gray-100 p-5 shadow-sm flex flex-col gap-3">
              <div className="font-bold text-base" style={{ color: DARK }}>{k.title}</div>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1.5"><IconCalendar /> {k.date}</span>
                <span className="flex items-center gap-1.5"><IconClock /> {k.duration}</span>
                <span className="flex items-center gap-1.5"><IconGraduation /> Zertifikat</span>
              </div>
              <a
                href="https://clarusway.de/application-form/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-white font-bold text-sm hover:opacity-90"
                style={{ background: PRIMARY }}
              >
                Jetzt anmelden
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CTA Banner ─────────────────────────────────────────────────────────────

function CtaBanner() {
  return (
    <section className="py-14" style={{ background: `linear-gradient(135deg, ${DARK} 0%, #2d1b3d 100%)` }}>
      <div className="max-w-[700px] mx-auto px-5 text-center">
        <h2 className="font-bold text-3xl text-white mb-4">
          Starte deine Data-Science-Karriere
        </h2>
        <p className="text-gray-300 text-sm mb-2 leading-relaxed">
          Wer die Data Science Weiterbildung vollständig durchläuft, verlässt sie mit drei Zertifikaten,
          einem Projektportfolio und dem Profil eines AI Engineers.
        </p>
        <p className="text-gray-400 text-xs mb-8">
          Kostenlos, unverbindlich, für Modul 1 ohne technischen Test. Plätze auf 15 Teilnehmende begrenzt.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://clarusway.de/application-form/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-bold text-sm hover:opacity-90"
            style={{ background: PRIMARY }}
          >
            <IconArrow />
            Kostenloses Beratungsgespräch
          </a>
          <a
            href="https://clarusway.de/it-kurse/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-7 py-3.5 rounded-xl font-bold text-sm border-2 border-white/30 text-white hover:border-white/70"
          >
            Lehrplan herunterladen
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Page root ──────────────────────────────────────────────────────────────

export default function DataSciencePage() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Preserved: Hero + StatsBar + ProgramSelector */}
      <Hero />
      <StatsBar />
      <DasWichtigste />
      <ProgramSelector
        programs={dsPrograms}
        modules={dsModules}
        title="Welches Programm passt zu Ihrem Einstiegsniveau?"
      />
      {/* New SEO sections */}
      <WieAufgebaut />
      <Gehaltstabelle />
      <AbschlussVergleich />
      <KostenFoerderung />
      <Quereinstieg />
      <Werkzeuge />
      <WarumClarusway />
      <Alumni />
      <FAQ />
      <WeitereKurse />
      <CtaBanner />
    </div>
  );
}
