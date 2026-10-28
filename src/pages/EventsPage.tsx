const PRIMARY = "#e51a59";
const SECONDARY = "#8a1c4a";
const DARK = "#1a1d2e";

// ── Data ───────────────────────────────────────────────────────────────────

type EventStatus = "upcoming" | "past" | "live";

interface ClarusEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: "Webinar" | "Workshop" | "Info-Abend" | "Karriere-Event" | "Demo-Day";
  status: EventStatus;
  description: string;
  registerUrl: string;
  tags: string[];
}

const events: ClarusEvent[] = [
  {
    id: "1",
    title: "Kostenloses Webinar: Karriere in der Cloud — AWS & DevOps in 8 Monaten",
    date: "15 Sep 2026",
    time: "18:00 – 19:30 Uhr",
    location: "Online (Zoom)",
    type: "Webinar",
    status: "upcoming",
    description:
      "Unser Karriereberater Thomas gibt einen Überblick über den DevOps-Markt, erklärt den Lernpfad und beantwortet alle deine Fragen live. Ideal für Quereinsteiger ohne IT-Vorkenntnisse.",
    registerUrl: "https://clarusway.de/application-form/",
    tags: ["AWS", "DevOps", "Karriere", "Einstieg"],
  },
  {
    id: "2",
    title: "Info-Abend: Data Science & KI — Dein Einstieg in die Datenwelt",
    date: "22 Sep 2026",
    time: "19:00 – 20:30 Uhr",
    location: "Online (Zoom)",
    type: "Info-Abend",
    status: "upcoming",
    description:
      "Was macht ein Data Scientist wirklich? Wie sieht ein Arbeitstag aus? Was verdient man? Unser Team beantwortet alle Fragen und stellt das Applied AI & Data Science Programm vor.",
    registerUrl: "https://clarusway.de/application-form/",
    tags: ["Data Science", "KI", "Python", "Beratung"],
  },
  {
    id: "3",
    title: "Workshop: Hands-on Kubernetes — Container-Orchestrierung live erleben",
    date: "29 Sep 2026",
    time: "10:00 – 13:00 Uhr",
    location: "Online (Zoom) + Aufzeichnung",
    type: "Workshop",
    status: "upcoming",
    description:
      "In diesem 3-stündigen Workshop lernst du Kubernetes-Grundkonzepte direkt am eigenen Rechner anzuwenden — mit Beispiel-Cluster, Deployments und einem Mini-Projekt zum Mitnehmen.",
    registerUrl: "https://clarusway.de/application-form/",
    tags: ["Kubernetes", "Docker", "Hands-on", "DevOps"],
  },
  {
    id: "4",
    title: "Demo Day: Abschlussprojekte Oktober-Kohorte 2026",
    date: "12 Okt 2026",
    time: "15:00 – 18:00 Uhr",
    location: "Clarusway Campus + Live-Stream",
    type: "Demo-Day",
    status: "upcoming",
    description:
      "Unsere frisch ausgebildeten DevOps- und Data-Science-Alumni präsentieren ihre Abschlussprojekte — live vor Hiring-Managern aus der Industrie. Zuschauer herzlich willkommen!",
    registerUrl: "https://clarusway.de/application-form/",
    tags: ["Networking", "Alumni", "Demo", "Karriere"],
  },
  {
    id: "5",
    title: "Karriere-Event: IT-Jobmesse für Bootcamp-Absolventen",
    date: "24 Okt 2026",
    time: "11:00 – 16:00 Uhr",
    location: "Hybrid: Neuss + Online",
    type: "Karriere-Event",
    status: "upcoming",
    description:
      "20+ Partner-Unternehmen suchen direkt nach Clarusway-Absolventen. Bring deinen Lebenslauf mit, präsentiere deine Projekte und knüpfe Kontakte zu Hiring-Managern aus Tech-Unternehmen.",
    registerUrl: "https://clarusway.de/application-form/",
    tags: ["Jobs", "Networking", "Recruiting", "Karriere"],
  },
  {
    id: "6",
    title: "Webinar: Full-Stack-Entwicklung — React, Node.js & mehr in 12 Monaten",
    date: "03 Nov 2026",
    time: "18:00 – 19:30 Uhr",
    location: "Online (Zoom)",
    type: "Webinar",
    status: "upcoming",
    description:
      "Überblick über das Full-Stack-Programm bei Clarusway: Was lernst du, wie ist der Alltag, was verdient man danach — mit Live Q&A und Alumni-Erfahrungsberichten.",
    registerUrl: "https://clarusway.de/application-form/",
    tags: ["Full-Stack", "React", "Node.js", "Webentwicklung"],
  },
  {
    id: "7",
    title: "Webinar: AWS Solutions Architect Zertifizierung — Wege & Strategien",
    date: "17 Aug 2026",
    time: "18:00 – 19:30 Uhr",
    location: "Online (Zoom)",
    type: "Webinar",
    status: "past",
    description:
      "Aufzeichnung verfügbar. Unser AWS-Trainer zeigt, wie du die SAA-C03 Prüfung in 3 Monaten bestehst — Lernplan, Tipps, Prüfungsformat und Live-Q&A.",
    registerUrl: "https://clarusway.de/application-form/",
    tags: ["AWS", "Zertifizierung", "Cloud", "SAA-C03"],
  },
  {
    id: "8",
    title: "Demo Day: Abschlussprojekte August-Kohorte 2026",
    date: "10 Aug 2026",
    time: "15:00 – 18:00 Uhr",
    location: "Clarusway Campus + Live-Stream",
    type: "Demo-Day",
    status: "past",
    description:
      "Alumni der August-Kohorte präsentierten ihre Projekte vor Partnern aus der IT-Industrie. Aufzeichnung auf Anfrage verfügbar.",
    registerUrl: "https://clarusway.de/application-form/",
    tags: ["Alumni", "Demo", "Projekte"],
  },
];

const typeColor: Record<string, string> = {
  Webinar: "#e51a59",
  Workshop: "#8a1c4a",
  "Info-Abend": "#b52252",
  "Karriere-Event": "#c73a6a",
  "Demo-Day": DARK,
};

const statusLabel: Record<EventStatus, string> = {
  upcoming: "Anmeldung offen",
  live: "Jetzt live",
  past: "Aufzeichnung",
};

// ── Components ────────────────────────────────────────────────────────────

function EventCard({ ev }: { ev: ClarusEvent }) {
  const isPast = ev.status === "past";
  const color = typeColor[ev.type] ?? PRIMARY;
  return (
    <div
      className="rounded-2xl border overflow-hidden flex flex-col"
      style={{
        borderColor: isPast ? "#e5e5e5" : color + "33",
        background: isPast ? "#fafafa" : "#fff",
        opacity: isPast ? 0.8 : 1,
      }}
    >
      {/* Color bar */}
      <div className="h-1.5 w-full" style={{ background: isPast ? "#e5e5e5" : color }} />

      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Type + status */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span
            className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
            style={{ background: color + "15", color }}
          >
            {ev.type}
          </span>
          <span
            className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border"
            style={{
              borderColor: isPast ? "#ddd" : color + "44",
              color: isPast ? "#999" : color,
              background: isPast ? "transparent" : color + "08",
            }}
          >
            {statusLabel[ev.status]}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-sm leading-snug" style={{ color: DARK }}>
          {ev.title}
        </h3>

        {/* Meta */}
        <div className="flex flex-col gap-1">
          {[
            { icon: "📅", text: ev.date },
            { icon: "🕐", text: ev.time },
            { icon: "📍", text: ev.location },
          ].map((m) => (
            <div key={m.icon} className="flex items-center gap-2 text-xs text-gray-500">
              <span>{m.icon}</span>
              <span>{m.text}</span>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-xs text-gray-500 leading-relaxed flex-1">{ev.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {ev.tags.map((t) => (
            <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 font-medium">
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={ev.registerUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl font-bold text-xs mt-1 transition-all hover:opacity-90"
          style={
            isPast
              ? { background: "#f0f0f0", color: "#888" }
              : { background: color, color: "#fff" }
          }
        >
          {isPast ? "Aufzeichnung anfragen" : "Kostenlos anmelden"}
        </a>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────

export default function EventsPage() {
  const upcoming = events.filter((e) => e.status === "upcoming" || e.status === "live");
  const past = events.filter((e) => e.status === "past");

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${DARK} 0%, #2d1b3d 100%)` }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 70% 30%, #e51a59 0%, transparent 60%)" }}
        />
        <div className="relative max-w-[1200px] mx-auto px-5 py-20 text-center">
          <div
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5"
            style={{ background: `${PRIMARY}25`, color: "#f9a8c0" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: PRIMARY }} />
            Clarusway Events
          </div>
          <h1 className="font-bold text-4xl md:text-5xl text-white leading-tight mb-5">
            Lerne, vernetze dich,{" "}
            <span style={{ color: "#f9a8c0" }}>wachse mit uns.</span>
          </h1>
          <p className="text-gray-300 text-base max-w-2xl mx-auto leading-relaxed mb-8">
            Clarusway veranstaltet regelmäßig kostenlose Webinare, Workshops und Karriere-Events
            rund um Cloud, DevOps, Data Science und Webentwicklung. Lerne direkt von
            Praktikern, tausch dich mit der Community aus und entdecke deinen nächsten
            Karriereschritt — live oder auf Aufzeichnung.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://clarusway.de/application-form/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-xl text-white font-bold text-sm hover:opacity-90"
              style={{ background: PRIMARY }}
            >
              Kostenlos registrieren
            </a>
            <a
              href="https://clarusway.de/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-xl font-bold text-sm border-2 border-white/25 text-white hover:border-white/60"
            >
              Zur Clarusway Website
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section
        className="relative py-8 sm:py-10 border-t border-b border-white/10"
        style={{
          background:
            "radial-gradient(100% 120% at 50% 0%, rgba(229, 26, 89, 0.16) 0%, rgba(229, 26, 89, 0.04) 50%, transparent 80%), #0c0a14",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6 lg:gap-x-0 items-stretch">
            {[
              ["Kostenlos", "Alle Events"],
              ["Live Q&A", "In jedem Webinar"],
              ["Deutsch", "& Englisch"],
              ["Online", "& Hybrid"],
            ].map(([v, l], i) => (
              <div
                key={v}
                className={`flex flex-col justify-between ${
                  i > 0 ? "lg:border-l lg:border-white/10 lg:pl-8" : ""
                } ${i < 3 ? "lg:pr-8" : ""}`}
              >
                <div>
                  <div className="min-h-[36px] sm:min-h-[44px] flex items-end">
                    <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none">
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

      {/* What to expect */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="font-bold text-2xl mb-6" style={{ color: DARK }}>
            Was dich bei unseren Events erwartet
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                icon: "🎙",
                title: "Webinare",
                desc: "Kostenlose Online-Sessions zu Cloud, DevOps, Data Science & Webentwicklung — mit Live-Q&A.",
              },
              {
                icon: "🛠",
                title: "Workshops",
                desc: "Hands-on Workshops, bei denen du direkt Tools wie Kubernetes, Python oder React ausprobierst.",
              },
              {
                icon: "🎓",
                title: "Demo Days",
                desc: "Unsere Absolventen präsentieren echte Projekte vor Hiring-Managern aus der IT-Industrie.",
              },
              {
                icon: "🤝",
                title: "Karriere-Events",
                desc: "IT-Jobmessen und Networking-Events mit Partnern, die aktiv nach Clarusway-Absolventen suchen.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-gray-100 p-5 flex flex-col gap-2 shadow-sm"
              >
                <div className="text-3xl">{c.icon}</div>
                <div className="font-bold text-sm" style={{ color: DARK }}>
                  {c.title}
                </div>
                <div className="text-xs text-gray-500 leading-relaxed">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming events */}
      <section className="py-16" style={{ background: "#f6f7fb" }}>
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-2 h-6 rounded-full"
              style={{ background: PRIMARY }}
            />
            <h2 className="font-bold text-2xl" style={{ color: DARK }}>
              Kommende Events
            </h2>
            <span
              className="text-xs font-bold px-2.5 py-1 rounded-full text-white ml-1"
              style={{ background: PRIMARY }}
            >
              {upcoming.length}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {upcoming.map((ev) => (
              <EventCard key={ev.id} ev={ev} />
            ))}
          </div>
        </div>
      </section>

      {/* Past events */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-6 rounded-full bg-gray-300" />
            <h2 className="font-bold text-2xl" style={{ color: DARK }}>
              Vergangene Events
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {past.map((ev) => (
              <EventCard key={ev.id} ev={ev} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-14"
        style={{ background: `linear-gradient(135deg, ${DARK} 0%, #2d1b3d 100%)` }}
      >
        <div className="max-w-[700px] mx-auto px-5 text-center">
          <h2 className="font-bold text-3xl text-white mb-4">
            Kein Event verpassen!
          </h2>
          <p className="text-gray-300 text-sm mb-7 leading-relaxed">
            Melde dich für unseren Newsletter an und erhalte frühzeitig Einladungen zu allen
            kommenden Webinaren, Workshops und Karriere-Events von Clarusway.
          </p>
          <a
            href="https://clarusway.de/application-form/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-7 py-3.5 rounded-xl text-white font-bold text-sm hover:opacity-90"
            style={{ background: PRIMARY }}
          >
            Jetzt registrieren
          </a>
        </div>
      </section>
    </div>
  );
}
