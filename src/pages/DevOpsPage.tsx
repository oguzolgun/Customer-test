import { useState } from "react";
import ProgramSelector, { type CourseModule, type CourseProgram } from "@/components/ProgramSelector";

const PRIMARY = "#e51a59";
const SECONDARY = "#8a1c4a";
const DARK = "#1a1d2e";
const CREAM = "#f8f5f1";

// ── Data ───────────────────────────────────────────────────────────────────

const devopsModules: CourseModule[] = [
  {
    id: 1,
    label: "Modul 1",
    title: "AWS Solutions Architect",
    duration: "3 Monate",
    color: PRIMARY,
    topics: [
      "AWS Cloud Grundlagen",
      "EC2, S3, VPC, IAM",
      "Cloud Architecture",
      "High Availability & Skalierung",
      "AWS Certifications Vorbereitung",
    ],
  },
  {
    id: 2,
    label: "Modul 2",
    title: "DevOps Engineering",
    duration: "3 Monate",
    color: SECONDARY,
    topics: [
      "CI/CD Pipelines",
      "Docker & Kubernetes",
      "Terraform & IaC",
      "Monitoring & Logging",
      "AWS DevOps Tools",
    ],
  },
  {
    id: 3,
    label: "Modul 3",
    title: "Azure Fundamentals",
    duration: "2 Monate",
    color: "#b52252",
    topics: [
      "Azure Core Services",
      "Azure DevOps",
      "Hybrid Cloud Strategien",
      "Azure Governance",
      "AZ-900 Zertifizierung",
    ],
  },
];

const devopsPrograms: CourseProgram[] = [
  {
    id: "full",
    title: "AWS/DevOps Engineering + Azure Fundamentals",
    subtitle: "für Professionelle",
    badge: "Alle 3 Module",
    moduleIds: [1, 2, 3],
    startsAt: 1,
    duration: "8 Monate",
    schedule: "09:00–16:45 Uhr Berlin",
    capacity: "Max. 15 Plätze",
    language: "Englisch",
    dates: ["24 Aug 2026", "12 Okt 2026", "30 Nov 2026", "28 Dez 2026"],
    recommended: true,
    description:
      "Das komplette Paket — von AWS Cloud Architektur bis Azure Fundamentals. Ideal für Quereinsteiger ohne IT-Vorkenntnisse, die in 8 Monaten vollständig in die Cloud-Karriere einsteigen wollen.",
    curriculumUrl: "https://clarusway.de/it-kurse/devops-aws-fur-professionelle/",
    enrollUrl: "https://clarusway.de/application-form/",
  },
  {
    id: "aws-devops",
    title: "AWS/DevOps Engineering",
    subtitle: "für Professionelle",
    badge: "Modul 1 + 2",
    moduleIds: [1, 2],
    startsAt: 1,
    duration: "6 Monate",
    schedule: "09:00–16:45 Uhr Berlin",
    capacity: "Max. 15 Plätze",
    language: "Englisch",
    dates: ["24 Aug 2026", "12 Okt 2026", "30 Nov 2026"],
    recommended: false,
    description:
      "AWS Cloud Architektur und DevOps Engineering in einem Paket. Für Professionals, die AWS und CI/CD beherrschen möchten — ohne Azure-Modul.",
    curriculumUrl: "https://clarusway.de/it-kurse/devops-aws-fur-professionelle/",
    enrollUrl: "https://clarusway.de/application-form/",
  },
  {
    id: "architect",
    title: "AWS Solutions Architect",
    subtitle: "für Professionelle",
    badge: "Modul 1",
    moduleIds: [1],
    startsAt: 1,
    duration: "3 Monate",
    schedule: "09:00–16:45 Uhr Berlin",
    capacity: "Max. 15 Plätze",
    language: "Englisch",
    dates: ["24 Aug 2026", "12 Okt 2026"],
    recommended: false,
    description:
      "Spezialisierung auf AWS Cloud Architektur und SAA-C03 Zertifizierung. Für Professionals mit DevOps-Vorkenntnissen.",
    curriculumUrl: "https://clarusway.de/it-kurse/devops-aws-fur-professionelle/",
    enrollUrl: "https://clarusway.de/application-form/",
  },
  {
    id: "devops",
    title: "DevOps Engineering",
    subtitle: "für Professionelle",
    badge: "Modul 2",
    moduleIds: [2],
    startsAt: 2,
    duration: "3 Monate",
    schedule: "09:00–16:45 Uhr Berlin",
    capacity: "Max. 15 Plätze",
    language: "Englisch",
    dates: ["12 Okt 2026", "30 Nov 2026"],
    recommended: false,
    description:
      "Einstieg ab Modul 2 für Professionals mit AWS-Grundkenntnissen. CI/CD, Docker, Kubernetes, Terraform und mehr.",
    curriculumUrl: "https://clarusway.de/it-kurse/devops-aws-fur-professionelle/",
    enrollUrl: "https://clarusway.de/application-form/",
  },
  {
    id: "azure",
    title: "Azure Fundamentals",
    subtitle: "",
    badge: "Modul 3",
    moduleIds: [3],
    startsAt: 3,
    duration: "2 Monate",
    schedule: "09:00–16:45 Uhr Berlin",
    capacity: "Max. 15 Plätze",
    language: "Englisch",
    dates: ["30 Nov 2026", "28 Dez 2026"],
    recommended: false,
    description:
      "Einstieg ab Modul 3 für erfahrene AWS & DevOps Professionals. Azure-Zertifizierung und Hybrid-Cloud-Strategien.",
    curriculumUrl: "https://clarusway.de/it-kurse/devops-aws-fur-professionelle/",
    enrollUrl: "https://clarusway.de/application-form/",
  },
];

// ── 1. Hero ────────────────────────────────────────────────────────────────

const tools = ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Azure"];

function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #fff8f9 0%, #fff 60%)" }}
    >
      <div className="max-w-[1200px] mx-auto px-5 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <div className="flex flex-wrap gap-2 mb-5">
            {tools.map((t) => (
              <span
                key={t}
                className="text-xs font-bold px-3 py-1 rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm"
              >
                {t}
              </span>
            ))}
          </div>
          <h1
            className="font-bold text-4xl md:text-5xl leading-[1.15] mb-4"
            style={{ color: DARK }}
          >
            AWS & DevOps Engineer Programme für Professionelle
          </h1>
          <div className="flex items-center gap-2 mb-5">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="17" height="17" viewBox="0 0 18 18" fill={PRIMARY}>
                  <path d="M9 1l2.163 4.38L16.5 6.18l-3.75 3.656.885 5.164L9 12.45l-4.635 2.55.885-5.164L1.5 6.18l5.337-.8z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-700">4,9/5 — Career Karma Bewertung</span>
          </div>
          <p className="text-gray-600 text-base leading-relaxed mb-5">
            Die Fähigkeiten, die du in unserem AWS- und DevOps-Lernpfad erlernst, werden deine
            Qualifikationen verbessern und dir größere Chancen bieten, dein Einkommen als gefragter
            Profi auf dem stark nachgefragten IT-Arbeitsmarkt erheblich zu steigern.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-7">
            Ein <strong>AWS & DevOps Bootcamp</strong> bei Clarusway ist ein praxisorientiertes
            Programm, das dich in 3 bis 8 Monaten zum zertifizierten Cloud- und DevOps-Engineer
            ausbildet — mit Live-Mentoring, AZAV-Zertifizierung und echten Praxisprojekten.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://clarusway.de/application-form/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-xl text-white font-bold text-sm hover:opacity-90"
              style={{ background: PRIMARY }}
            >
              Jetzt anmelden!
            </a>
            <a
              href="https://clarusway.de/it-kurse/devops-aws-fur-professionelle/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-xl font-bold text-sm border-2 hover:opacity-80"
              style={{ borderColor: DARK, color: DARK }}
            >
              Lehrplan herunterladen
            </a>
          </div>
        </div>

        {/* Right — terminal mockup */}
        <div className="relative">
          <div
            className="w-full rounded-2xl overflow-hidden shadow-2xl"
            style={{ background: "#1e1e2e" }}
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-3 text-xs text-gray-500 font-mono">terraform apply</span>
            </div>
            <div className="px-6 py-6 font-mono text-sm leading-loose">
              <div className="text-green-400">$ aws configure</div>
              <div className="text-gray-400 mt-2">AWS Access Key: ••••••••</div>
              <div className="text-gray-400">Region: eu-central-1</div>
              <div className="mt-3 text-blue-400">$ kubectl get pods</div>
              <div className="text-white mt-1">
                <span className="text-green-400">Running</span>
                <span className="text-gray-400"> — 3/3 pods healthy</span>
              </div>
              <div className="mt-3 text-yellow-300">$ terraform apply</div>
              <div className="text-green-400">✓ Infrastructure deployed</div>
              <div className="text-gray-500 mt-1">Plan: 12 to add, 0 to destroy</div>
            </div>
          </div>
          <div className="absolute -top-3 -right-3 bg-white rounded-2xl shadow-lg px-4 py-3 border border-gray-100">
            <div className="text-2xl font-bold" style={{ color: PRIMARY }}>15</div>
            <div className="text-xs text-gray-500">Plätze pro Kurs</div>
          </div>
          <div className="absolute -bottom-3 -left-3 bg-white rounded-2xl shadow-lg px-4 py-3 border border-gray-100">
            <div className="text-base font-bold" style={{ color: PRIMARY }}>AZAV</div>
            <div className="text-xs text-gray-500">zertifiziert & förderfähig</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 2. Stats bar ───────────────────────────────────────────────────────────

function StatsBar() {
  const stats = [
    ["4,9/5", "Career Karma Bewertung"],
    ["AZAV", "zertifizierte Kurse"],
    ["5", "AWS & DevOps Programme"],
    ["15", "Teilnehmende pro Kurs, max."],
    ["2–8", "Monate bis zum Abschluss"],
  ];

  return (
    <section
      className="relative py-8 sm:py-10 border-t border-b border-white/10"
      style={{
        background:
          "radial-gradient(100% 120% at 50% 0%, rgba(229, 26, 89, 0.16) 0%, rgba(229, 26, 89, 0.04) 50%, transparent 80%), #0c0a14",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-6 lg:gap-x-0 items-stretch">
          {stats.map(([v, l], i) => (
            <div
              key={v}
              className={`flex flex-col justify-between ${
                i > 0 ? "lg:border-l lg:border-white/10 lg:pl-8" : ""
              } ${i < stats.length - 1 ? "lg:pr-8" : ""}`}
            >
              <div>
                <div className="min-h-[36px] sm:min-h-[44px] flex items-end">
                  <span
                    className={`${
                      v.length > 12 ? "text-lg sm:text-2xl" : "text-3xl sm:text-4xl"
                    } font-extrabold text-white tracking-tight leading-none`}
                  >
                    {v}
                  </span>
                </div>
                {/* Pink Accent Line under the Value */}
                <div className="w-7 h-[2.5px] bg-[#e51a59] rounded-full mt-2.5 mb-2.5" />
                {/* Stat Description */}
                <p className="text-xs sm:text-sm text-gray-400 font-normal leading-snug max-w-[200px]">
                  {l}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 3. Was wirst du lernen? ────────────────────────────────────────────────

const curriculum = [
  {
    label: "Modul 1 — AWS Solutions Architect",
    color: PRIMARY,
    items: [
      "AWS Cloud Grundlagen & Grundkonzepte",
      "EC2, S3, VPC, IAM, Route 53",
      "Cloud Architecture Best Practices",
      "High Availability & Auto Scaling",
      "RDS, DynamoDB, ElastiCache",
      "CloudFormation & Infrastructure as Code",
      "AWS SAA-C03 Zertifizierungsvorbereitung",
      "Milestone-Projekt: Cloud-Architektur Design",
    ],
  },
  {
    label: "Modul 2 — DevOps Engineering",
    color: SECONDARY,
    items: [
      "CI/CD Pipelines (GitHub Actions, Jenkins)",
      "Docker: Container & Images",
      "Kubernetes: Orchestrierung & Cluster",
      "Terraform & Infrastructure as Code",
      "Monitoring mit CloudWatch & Grafana",
      "AWS CodePipeline, CodeBuild, CodeDeploy",
      "Security & Compliance in DevOps",
      "Milestone-Projekt: Vollständige CI/CD-Pipeline",
    ],
  },
  {
    label: "Modul 3 — Azure Fundamentals",
    color: "#b52252",
    items: [
      "Azure Core Services (VMs, Storage, Networking)",
      "Azure Active Directory & IAM",
      "Azure DevOps & Pipelines",
      "Hybrid Cloud Strategien (AWS + Azure)",
      "Azure Kubernetes Service (AKS)",
      "Azure Monitor & Cost Management",
      "AZ-900 Zertifizierungsvorbereitung",
      "Abschlussprojekt: Multi-Cloud Deployment",
    ],
  },
];

function WasWirstDuLernen() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-bold text-3xl md:text-4xl mb-3" style={{ color: DARK }}>
          Was wirst du lernen?
        </h2>
        <p className="text-gray-500 text-base mb-10 max-w-2xl">
          3 aufeinander aufbauende Module — von AWS Cloud Grundlagen bis zur Azure-Zertifizierung.
          Jedes Modul endet mit einem realen Milestone-Projekt.
        </p>
        <div className="space-y-5">
          {curriculum.map((sec) => (
            <div key={sec.label} className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <div
                className="px-6 py-3 font-bold text-sm"
                style={{ background: sec.color + "18", color: sec.color }}
              >
                {sec.label}
              </div>
              <div className="px-6 py-5 grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8">
                {sec.items.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: sec.color }}
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 4. Kursübersicht ───────────────────────────────────────────────────────

function Kursuebersicht() {
  return (
    <section className="py-16" style={{ background: "#f6f7fb" }}>
      <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="font-bold text-3xl mb-4" style={{ color: DARK }}>Kursübersicht</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Cloud Computing und DevOps sind zwei der gefragtesten Technologiebereiche weltweit.
            AWS ist mit über 32 % Marktanteil der führende Cloud-Anbieter — und DevOps-Engineers
            gehören zu den bestbezahlten IT-Professionals auf dem Markt.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Clarusways AWS & DevOps Programme werden als Vollzeitprogramme angeboten (Mo–Fr,
            09:00–16:45 Uhr Berliner Zeit) mit täglich strukturierten Lernphasen: Vorbereitung,
            Live-Unterricht und Nachbereitung in Mentoring-Sitzungen.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Am Ende bist du in der Lage, Cloud-Infrastrukturen zu entwerfen, CI/CD-Pipelines
            aufzubauen und dich für AWS- und Azure-Zertifizierungen zu qualifizieren.
          </p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: PRIMARY }}>
            8 Monate — Full Package
          </div>
          <h3 className="font-bold text-xl mb-3" style={{ color: DARK }}>
            AWS/DevOps Engineering + Azure Fundamentals
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-5">
            Das vollständige Programm deckt alle drei Module ab: AWS Solutions Architect,
            DevOps Engineering und Azure Fundamentals — mit anerkannten Zertifizierungen.
          </p>
          <div className="space-y-2 mb-5">
            {[
              ["Zeitplan", "09:00–16:45 Uhr Berlin"],
              ["Dauer", "8 Monate"],
              ["Lehrplan", "Modul 1 + Modul 2 + Modul 3"],
              ["Kapazität", "Max. 15 Plätze"],
              ["Sprache", "Englisch"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-baseline gap-2 text-sm">
                <span className="font-bold text-gray-900">{k}:</span>
                <span className="text-gray-500">{v}</span>
              </div>
            ))}
          </div>
          <a
            href="https://clarusway.de/application-form/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-5 py-2.5 rounded-xl text-white font-bold text-sm hover:opacity-90"
            style={{ background: PRIMARY }}
          >
            Jetzt anmelden!
          </a>
        </div>
      </div>
    </section>
  );
}

// ── 5. Wieso Cloud & DevOps? ──────────────────────────────────────────────

function WiesoCloudDevOps() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-bold text-3xl md:text-4xl mb-10" style={{ color: DARK }}>
          Wieso Cloud & DevOps Engineer?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {[
            {
              icon: "☁️",
              title: "Markt & Nachfrage",
              text: "Über 1 Million offene Cloud-Stellen in Europa — DevOps-Engineers gehören zur Top-3 der gefragtesten IT-Berufe.",
            },
            {
              icon: "💰",
              title: "Gehalt",
              text: "Durchschnittsgehalt für AWS-zertifizierte Engineers: 95.000–130.000 € — einer der höchsten Gehaltskorridore in der IT.",
            },
            {
              icon: "🌍",
              title: "Remote & Flexibilität",
              text: "Cloud-Kenntnisse ermöglichen vollständig remote zu arbeiten — standortunabhängig in ganz Europa und weltweit.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
            >
              <div className="py-6 text-center text-4xl">{c.icon}</div>
              <div
                className="font-bold text-center text-base pb-2"
                style={{ color: DARK }}
              >
                {c.title}
              </div>
              <div
                className="mx-4 mb-5 px-4 py-3 rounded-xl text-white text-sm text-center font-medium leading-relaxed"
                style={{ background: PRIMARY }}
              >
                {c.text}
              </div>
            </div>
          ))}
        </div>
        <div className="prose prose-sm max-w-none text-gray-600 space-y-4">
          <p>
            Unternehmen aller Branchen — von Start-ups bis Fortune-500-Konzernen — verlagern
            ihre Infrastruktur in die Cloud. AWS ist dabei der Marktführer mit einem Ökosystem,
            das Tausende von Services umfasst.
          </p>
          <p>
            DevOps schließt die Lücke zwischen Entwicklung und Betrieb: Wer CI/CD-Pipelines,
            Container-Orchestrierung und Infrastructure-as-Code beherrscht, ist in jedem
            modernen Tech-Team unverzichtbar. Infolgedessen suchen Unternehmen aus allen
            Branchen aktiv nach AWS- und DevOps-qualifizierten Fachkräften.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── 6. Hast du eine Frage? + Warum Clarusway ──────────────────────────────

function HastDuEineFrage() {
  return (
    <section className="py-20" style={{ background: "#f6f7fb" }}>
      <div className="max-w-[1200px] mx-auto px-5 space-y-6">
        <div className="rounded-2xl bg-white border border-gray-100 p-8 flex items-center justify-between gap-6 flex-wrap shadow-sm">
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-2xl mb-2" style={{ color: DARK }}>Hast du eine Frage?</h3>
            <p className="font-semibold text-sm text-gray-700 mb-1">Vereinbare einen kostenlosen Anruf</p>
            <p className="text-sm text-gray-500">
              Du kannst einen Videoanruf (Zoom-Session) mit einem unserer Kursberater buchen,
              um dein Programm, den Starttermin und die Finanzierung zu besprechen.
            </p>
            <a
              href="https://clarusway.de/application-form/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center mt-4 px-5 py-2.5 rounded-xl text-white font-bold text-sm hover:opacity-90"
              style={{ background: PRIMARY }}
            >
              Gespräch planen
            </a>
          </div>
          <div className="text-6xl">🙋</div>
        </div>

        <div className="rounded-2xl bg-white border border-gray-100 p-8 shadow-sm">
          <h3 className="font-bold text-2xl mb-6" style={{ color: DARK }}>
            Warum Weiterbildung mit Clarusway?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
            {[
              "Bewährte Marke und Erfahrung",
              "Innovatives Lehrmodell",
              "Praktische Projekterfahrung",
              "Keine IT-Vorkenntnisse erforderlich",
              "Lebenslange Karriereunterstützung",
              "AZAV-zertifizierte Programme",
              "Einfache Zahlungsoption",
              "Live Mentor Unterstützung",
              "Risikofrei ausprobieren",
              "Karriere-Management-System",
              "IT-Netzwerk mit 29 Standorten",
              "Live-Klassen (max. 15 Plätze)",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: PRIMARY }}
                />
                {item}
              </div>
            ))}
          </div>
          <div className="rounded-xl bg-gray-50 p-5 border border-gray-100">
            <p className="font-bold text-sm mb-3" style={{ color: DARK }}>
              AWS Select Tier Consulting Partner
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Clarusway ist offizieller AWS-Partner. Das bedeutet: Du lernst direkt mit
              aktuellen AWS-Inhalten, anerkannten Zertifizierungspfaden und Mentoren mit
              echter Praxiserfahrung in der Cloud-Industrie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 7. Alumni ─────────────────────────────────────────────────────────────

const alumni = [
  {
    initials: "DK",
    name: "DH Kim",
    platform: "Google",
    text: "Die Mentoren sind immer erreichbar und gehen wirklich auf jeden einzeln ein. Ich habe in 9 Monaten mehr gelernt als in meinem Bachelor-Studium.",
  },
  {
    initials: "M",
    name: "Morad",
    platform: "Course Report",
    text: "Clarusway hat mir geholfen, ohne Vorkenntnisse in die IT einzusteigen. Das Live-Format macht einen riesigen Unterschied — kein Video auf Vorrat.",
  },
];

function Alumni() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-bold text-3xl md:text-4xl mb-10" style={{ color: DARK }}>
          Was haben unsere Alumni gesagt?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {alumni.map((a) => (
            <div
              key={a.name}
              className="rounded-2xl border border-gray-100 p-6 shadow-sm flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                  style={{ background: PRIMARY }}
                >
                  {a.initials}
                </div>
                <div>
                  <div className="font-bold text-sm" style={{ color: DARK }}>{a.name}</div>
                  <div className="flex gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="12" height="12" viewBox="0 0 18 18" fill={PRIMARY}>
                        <path d="M9 1l2.163 4.38L16.5 6.18l-3.75 3.656.885 5.164L9 12.45l-4.635 2.55.885-5.164L1.5 6.18l5.337-.8z" />
                      </svg>
                    ))}
                  </div>
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

// ── 8. Weitere Kurse ──────────────────────────────────────────────────────

function WeitereKurse() {
  return (
    <section className="py-20" style={{ background: "#f6f7fb" }}>
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-10">
          <div
            className="text-xs font-bold uppercase tracking-widest mb-2"
            style={{ color: PRIMARY }}
          >
            Weitere Kurse
          </div>
          <h2 className="font-bold text-3xl" style={{ color: DARK }}>
            Vielleicht interessierst du dich auch für unsere{" "}
            <span style={{ color: PRIMARY }}>IT-Kurse!</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            { title: "Applied AI & Data Science", date: "30 Aug 2026", duration: "10 Monate", to: "/data-science" },
            { title: "Full Stack Entwicklung Kurs", date: "27 Jul 2026", duration: "12 Monate", to: "/webentwicklung" },
            { title: "IT-Sicherheit Analyst", date: "27 Jul 2026", duration: "10 Monate", to: "/" },
            { title: "SDET", date: "27 Jul 2026", duration: "12 Monate", to: "/" },
          ].map((k) => (
            <div
              key={k.title}
              className="rounded-2xl bg-white border border-gray-100 p-5 shadow-sm flex flex-col gap-3"
            >
              <div className="font-bold text-base" style={{ color: DARK }}>{k.title}</div>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>📅 {k.date}</span>
                <span>⏱ {k.duration}</span>
                <span>🏛 Zertifikat</span>
              </div>
              <a
                href="https://clarusway.de/application-form/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-white font-bold text-sm hover:opacity-90"
                style={{ background: PRIMARY }}
              >
                Jetzt anmelden!
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 9. FAQ ────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "Wer kann an den AWS & DevOps Programmen teilnehmen?",
    a: "Alle mit Motivation und Kommunikationsfähigkeit. Für Anfänger-Einstiege sind keine IT-Vorkenntnisse erforderlich. Professionelle Programme setzen erste Grundkenntnisse (z.B. Linux-Basics) voraus.",
  },
  {
    q: "Welche Zahlungsoptionen bietet Clarusway an?",
    a: "Bildungsgutschein (AZAV-zertifiziert über Jobcenter/Agentur für Arbeit), Ratenzahlung sowie 15-tägige kostenlose Testphase für Selbstzahler.",
  },
  {
    q: "Wann startet die nächste Gruppe?",
    a: "Nächste Starts: 24 Aug 2026, 12 Okt 2026, 30 Nov 2026 und 28 Dez 2026. Den passenden Termin wählst du im Beratungsgespräch.",
  },
  {
    q: "Welche Zertifizierungen kann ich nach dem Kurs ablegen?",
    a: "AWS Certified Solutions Architect – Associate (SAA-C03), AWS Certified DevOps Engineer – Professional (DOP-C02) und Microsoft Azure AZ-900 Fundamentals.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <div
            className="text-xs font-bold uppercase tracking-widest mb-2"
            style={{ color: PRIMARY }}
          >
            FAQ
          </div>
          <h2 className="font-bold text-3xl mb-4" style={{ color: DARK }}>
            Gib deiner Karriere einen Schub!
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Erhalte dein Ticket zu unseren Karriere verändernden Programmen — von der ersten
            Anfrage bis zum Job-Einstieg als Cloud-Engineer.
          </p>
          <div className="space-y-2 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <span style={{ color: PRIMARY }}>📍</span> Bataver Str. 84, 41462 Neuss
            </div>
            <div className="flex items-center gap-2">
              <span style={{ color: PRIMARY }}>✉️</span> kontakt@clarusway.de
            </div>
            <div className="flex items-center gap-2">
              <span style={{ color: PRIMARY }}>📞</span> +49 5331 9549998
            </div>
          </div>
          <a
            href="https://clarusway.de/application-form/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-xl text-white font-bold text-sm hover:opacity-90"
            style={{ background: PRIMARY }}
          >
            Gespräch vereinbaren
          </a>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4" style={{ color: DARK }}>
            Häufig gestellte Fragen.
          </h3>
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
                  <div className="px-5 py-4 text-sm text-gray-600 leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── CTA Banner ─────────────────────────────────────────────────────────────

function CtaBanner() {
  return (
    <section
      className="py-14"
      style={{ background: `linear-gradient(135deg, ${DARK} 0%, #2d1b3d 100%)` }}
    >
      <div className="max-w-[800px] mx-auto px-5 text-center">
        <h2 className="font-bold text-3xl text-white mb-4">
          Starte deine Cloud & DevOps Karriere
        </h2>
        <p className="text-gray-300 text-base mb-8">
          Lass dich kostenlos beraten — finde heraus, welches Programm zu dir passt.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://clarusway.de/application-form/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-7 py-3.5 rounded-xl text-white font-bold text-sm hover:opacity-90"
            style={{ background: PRIMARY }}
          >
            Kostenloses Beratungsgespräch
          </a>
          <a
            href="https://clarusway.de/it-kurse/devops-aws-fur-professionelle/"
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

export default function DevOpsPage() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Hero />
      <StatsBar />
      <ProgramSelector
        programs={devopsPrograms}
        modules={devopsModules}
        title="Wähle die beste Kombination für dich!"
      />
      <WasWirstDuLernen />
      <Kursuebersicht />
      <WiesoCloudDevOps />
      <HastDuEineFrage />
      <Alumni />
      <WeitereKurse />
      <FAQ />
      <CtaBanner />
    </div>
  );
}
