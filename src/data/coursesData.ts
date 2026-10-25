import type { CourseModule, CourseProgram, DirectEntryInfo } from "@/components/ProgramSelector";
import type { FaqItem } from "@/components/SeoHead";

export interface AudienceCard {
  title: string;
  badge: string;
  desc: string;
  bullets: string[];
}

export interface CareerRoleCard {
  title: string;
  salaryMedian: string;
  salaryRange: string;
  salarySource: string;
  salarySourceUrl: string;
  desc: string;
  guideLabel: string;
  guideUrl: string;
}

export interface ClusterGuideLink {
  title: string;
  badge: string;
  desc: string;
  to: string;
}

export interface GraduateReview {
  initials: string;
  name: string;
  role: string;
  platform: string;
  platformUrl: string;
  quote: string;
}

export interface RelatedCourseCard {
  title: string;
  to: string;
  duration: string;
  nextStart: string;
  badge: string;
}

export interface CoursePageData {
  key: string;
  isShortTemplate?: boolean;
  isOrientation?: boolean;
  slugDe: string;
  slugEn: string;
  pdfFileName: string;
  metaTitle: string;
  metaDescription: string;
  breadcrumbLabel: string;
  eyebrow: string;
  h1: string;
  heroIntro: string;
  heroSubnote: string;
  heroBadges: string[];
  terminalTitle: string;
  terminalLines: { text: string; color: string }[];
  infoStrip: [string, string][];
  audienceH2: string;
  audienceIntro: string;
  audienceCards: AudienceCard[];
  programSelectorH2: string;
  programSelectorSubtitle: string;
  modules: CourseModule[];
  programs: CourseProgram[];
  directEntry?: DirectEntryInfo;
  curriculumH2: string;
  curriculumIntro: string;
  specialFeature?: {
    h2: string;
    isH3InsideCurriculum?: boolean;
    intro: string;
    cards: { title: string; badge: string; desc: string }[];
    linkLabel?: string;
    linkTo?: string;
  };
  techStackSection?: {
    h2: string;
    intro: string;
    tools: { name: string; category: string }[];
  };
  formatH2: string;
  formatIntro: string;
  formatHighlights: { title: string; desc: string }[];
  summaryTable: [string, string][];
  fundingH2: string;
  fundingText: string;
  fundingBullets: string[];
  fundingLinkLabel: string;
  fundingLinkTo: string;
  qcgLinkLabel: string;
  qcgLinkTo: string;
  careerH2: string;
  careerIntro: string;
  careerRoles: CareerRoleCard[];
  clusterH2: string;
  clusterIntro: string;
  clusterGuides: ClusterGuideLink[];
  whyH2: string;
  whyIntro: string;
  whyItems: { title: string; desc: string }[];
  partnerHighlight?: { badge: string; title: string; desc: string };
  reviewsH2: string;
  reviews: GraduateReview[];
  faqH2: string;
  faqs: FaqItem[];
  relatedH2: string;
  relatedCourses: RelatedCourseCard[];
  ctaH2: string;
  ctaText: string;
}

const PRIMARY = "#e51a59";
const SECONDARY = "#8a1c4a";
const ACCENT = "#b52252";
const SOFT_ROSE = "#c73a6a";

export const DE_COURSES: Record<string, CoursePageData> = {
  "ai-engineering": {
    key: "ai-engineering",
    slugDe: "/it-kurse/ai-engineer-weiterbildung/",
    slugEn: "/it-courses/ai-engineering/",
    pdfFileName: "clarusway-ai-engineer-weiterbildung-lehrplan.pdf",
    metaTitle: "AI Engineer Weiterbildung mit Bildungsgutschein | Clarusway",
    metaDescription:
      "Werde in 3 Modulen zum AI Engineer: Datenanalyse, Data Science & Machine Learning, Agentic AI. Förderfähig mit Bildungsgutschein. Jetzt beraten lassen.",
    breadcrumbLabel: "AI Engineer Weiterbildung",
    eyebrow: "Programm: AI Engineering Weiterbildungsprogramm",
    h1: "AI Engineer Weiterbildung: Von Data Analytics bis Agentic AI",
    heroIntro:
      "Die AI Engineer Weiterbildung bei Clarusway ist ein 32-wöchiges Live-Online-Programm in drei aufeinander aufbauenden Modulen: von Datenanalyse und Business Intelligence über Data Science und Machine Learning bis zu produktiven KI-Systemen und Agentic AI. AZAV-zertifiziert und zu 100 % über einen Bildungsgutschein förderfähig.",
    heroSubnote:
      "Kostenlose Beratung · Für Modul 1 ohne technischen Eingangstest · Direkteinstieg in Modul 2 oder 3 möglich.",
    heroBadges: ["Python", "Pandas & SQL", "scikit-learn", "PyTorch", "LLMs & RAG", "Agentic AI"],
    terminalTitle: "agentic_ai_pipeline.py",
    terminalLines: [
      { text: "import pandas as pd", color: "#60a5fa" },
      { text: "from clarusway_ai import RAGPipeline, AgentOrchestrator", color: "#60a5fa" },
      { text: "dataset = pd.read_parquet('enterprise_metrics.parquet')", color: "#e5e7eb" },
      { text: "rag = RAGPipeline(embeddings='text-embedding-3', vector_db='qdrant')", color: "#fde047" },
      { text: "agent = AgentOrchestrator(tools=[rag, 'sql_query', 'api_client'])", color: "#fde047" },
      { text: "✓ Production AI Agent deployed (Latency: 140ms)", color: "#4ade80" },
    ],
    infoStrip: [
      ["32 Wochen", "Gesamtdauer (13 + 6 + 13 Wo.)"],
      ["Englisch", "Unterrichtssprache (Live)"],
      ["100 % Online", "Mo–Fr · 09:00–16:45 Uhr"],
      ["Max. 15", "Teilnehmende pro Klasse"],
      ["AZAV", "100 % Bildungsgutschein"],
    ],
    audienceH2: "Für wen eignet sich die AI Engineer Weiterbildung?",
    audienceIntro:
      "Das modulare Programm holt Teilnehmende genau auf ihrem aktuellen Kenntnisstand ab — vom kompletten Neueinstieg bis zur Spezialisierung auf Agentic AI.",
    audienceCards: [
      {
        title: "Quereinsteiger ohne Vorkenntnisse",
        badge: "Start ab Modul 1",
        desc: "Für Modul 1 sind keine Vorkenntnisse in der Programmierung oder im Umgang mit Daten erforderlich. Du baust Python, SQL und Statistik Schritt für Schritt von null auf.",
        bullets: [
          "Kein technischer Eingangstest für Modul 1",
          "Mathematik- und Statistikgrundlagen im Lehrplan integriert",
          "3 Berufsabschlüsse in einem durchgehenden Lernpfad",
        ],
      },
      {
        title: "Fachkräfte mit Daten- oder IT-Erfahrung",
        badge: "Direkteinstieg Modul 2 / 3",
        desc: "Bewerberinnen und Bewerber mit bestehenden Kenntnissen in Python, SQL oder Softwareentwicklung steigen nach einer fachlichen Einstufungsprüfung direkt in Modul 2 oder Modul 3 ein.",
        bullets: [
          "Modul 2 Einstieg mit Python, Pandas, NumPy, Statistik & SQL",
          "Modul 3 Einstieg für Data Scientists, ML & Software Engineers",
          "Kompakte Weiterqualifizierung in 6 bis 19 Wochen",
        ],
      },
      {
        title: "Arbeitgeber & Teams (QCG)",
        badge: "Beschäftigtenförderung",
        desc: "Unternehmen qualifizieren bestehende Analyse- oder Entwicklerteams gezielt für Machine Learning, RAG-Architekturen und Agentic AI weiter.",
        bullets: [
          "Bis zu 100 % Zuschuss über das Qualifizierungschancengesetz",
          "Praxisnahe Capstone-Projekte mit realen Unternehmensdaten",
          "Einzelne Module gezielt buchbar",
        ],
      },
    ],
    programSelectorH2: "AI Engineer Weiterbildung: Programme und Dauer",
    programSelectorSubtitle:
      "Wähle den vollständigen 32-Wochen-Pfad oder steige mit Vorwissen direkt in Modul 2 oder Modul 3 ein.",
    modules: [
      {
        id: 1,
        label: "Modul 1",
        title: "Datenanalyse und Business Intelligence",
        duration: "13 Wochen",
        color: ACCENT,
        prerequisite: "Keine Programmier- oder Datenkenntnisse erforderlich.",
        project: "BI-Dashboard & Explorative Datenanalyse",
        topics: [
          "Python Programmierung & Git",
          "Pandas & NumPy Datenverarbeitung",
          "SQL & Relationale Datenbanken",
          "Statistik & Wahrscheinlichkeitsrechnung",
          "Power BI & Tableau Visualisierung",
        ],
      },
      {
        id: 2,
        label: "Modul 2",
        title: "Data Science und Machine Learning",
        duration: "6 Wochen",
        color: PRIMARY,
        prerequisite: "Modul 1 oder Einstufungsprüfung (Python, Pandas/NumPy, SQL, Statistik).",
        project: "End-to-End Machine Learning Vorhersagemodell",
        topics: [
          "Klassisches Machine Learning (scikit-learn)",
          "Feature Engineering & Modellvalidierung",
          "Neuronale Netze & Deep Learning Basics",
          "NLP & Transformer-Grundlagen",
          "ML-Milestone-Projekt",
        ],
      },
      {
        id: 3,
        label: "Modul 3",
        title: "AI Engineering und Agentic AI",
        duration: "13 Wochen",
        color: SECONDARY,
        prerequisite: "Modul 2 oder Einstufungsprüfung (Python, Git, APIs, ML, Deep Learning, NLP).",
        project: "Produktives Multi-Agent- & RAG-System in der Cloud",
        topics: [
          "Large Language Models (LLMs) & Prompt Engineering",
          "RAG-Architekturen & Vektordatenbanken",
          "Agentic AI Workflows & Tool-Calling",
          "APIs, HTTP/JSON, FastAPI & Docker",
          "Cloud Deployment & MLOps Monitoring",
        ],
      },
    ],
    programs: [
      {
        id: "ai-full",
        anchorId: "ds-for-beginner",
        title: "AI Engineering (Modul 1 bis 3)",
        subtitle: "Vollständiger Lernpfad ohne Vorkenntnisse",
        badge: "Alle 3 Module · 32 Wochen",
        moduleIds: [1, 2, 3],
        startsAt: 1,
        duration: "32 Wochen",
        schedule: "09:00–16:45 Uhr Berlin (Vollzeit)",
        capacity: "Max. 15 Plätze",
        language: "Unterrichtssprache: Englisch",
        dates: ["27 Jul 2026", "30 Aug 2026", "28 Sep 2026", "26 Okt 2026"],
        recommended: true,
        description:
          "Der durchgehende Weg vom Einstieg ohne Vorkenntnisse über Data Analytics und Machine Learning bis zum AI Engineer für Agentic AI. 3 Zertifikate, 1 Bildungsgutschein.",
        curriculumPdfName: "clarusway-ai-engineer-weiterbildung-lehrplan.pdf",
      },
      {
        id: "ds-ai-mod23",
        anchorId: "ds-for-pro",
        title: "Data Science und AI Engineering (Modul 2 und 3)",
        subtitle: "Mit Daten-Vorkenntnissen",
        badge: "Modul 2 + 3 · 19 Wochen",
        moduleIds: [2, 3],
        startsAt: 2,
        duration: "19 Wochen",
        schedule: "09:00–16:45 Uhr Berlin (Vollzeit)",
        capacity: "Max. 15 Plätze",
        language: "Unterrichtssprache: Englisch",
        dates: ["30 Aug 2026", "28 Sep 2026", "26 Okt 2026"],
        recommended: false,
        description:
          "Direkteinstieg ab Modul 2 nach fachlicher Einstufungsprüfung (Python, Pandas, NumPy, SQL, Statistik). Kombiniert Machine Learning mit produktivem AI Engineering.",
        curriculumPdfName: "clarusway-ai-engineer-weiterbildung-lehrplan.pdf",
      },
      {
        id: "agentic-ai-mod3",
        anchorId: "ai-mastery",
        title: "AI Engineering und Agentic AI (Modul 3)",
        subtitle: "Direkteinstieg für Fachkräfte",
        badge: "Modul 3 · 13 Wochen",
        moduleIds: [3],
        startsAt: 3,
        duration: "13 Wochen",
        schedule: "09:00–16:45 Uhr Berlin (Vollzeit)",
        capacity: "Max. 15 Plätze",
        language: "Unterrichtssprache: Englisch",
        dates: ["28 Sep 2026", "26 Okt 2026", "30 Nov 2026"],
        recommended: false,
        description:
          "Spezialisierung für Data Scientists, ML Engineers und erfahrene Software Engineers: LLMs, RAG, Agentic AI Systeme und produktives Cloud-Deployment in 13 Wochen.",
        curriculumPdfName: "clarusway-ai-engineer-weiterbildung-lehrplan.pdf",
      },
    ],
    curriculumH2: "Inhalte der AI Engineer Weiterbildung",
    curriculumIntro:
      "Drei klar abgegrenzte Module über insgesamt 32 Wochen (13 + 6 + 13 Wochen). Jedes Modul schließt mit einem eigenen Praxisprojekt und Zertifikat ab.",
    specialFeature: {
      h2: "Direkter Einstieg in Modul 2 oder Modul 3",
      intro:
        "Anders als starre Standardkurse erlaubt Clarusway externen Bewerberinnen und Bewerbern mit Vorwissen über eine fachliche Einstufungsprüfung (Technical Assessment) den direkten Einstieg in höhere Module.",
      cards: [
        {
          badge: "Modul 1 · 13 Wochen",
          title: "Start ohne Vorkenntnisse",
          desc: "Keine Programmier- oder Datenerfahrung nötig. Fokus auf Python, Pandas, NumPy, SQL, Statistik und Business Intelligence.",
        },
        {
          badge: "Modul 2 · 6 Wochen",
          title: "Einstieg mit Daten-Fundament",
          desc: "Voraussetzungen für die Einstufungsprüfung: Python, Pandas und NumPy, Datenanalyse, Statistik sowie SQL.",
        },
        {
          badge: "Modul 3 · 13 Wochen",
          title: "Einstieg für Data Scientists & Engineers",
          desc: "Voraussetzungen: Python, Git, APIs / HTTP / JSON, Grundlagen Machine Learning, Neuronale Netze (Deep Learning) sowie NLP & Transformer-Modelle.",
        },
      ],
    },
    formatH2: "Ablauf und Lernformat",
    formatIntro:
      "Täglicher Live-Unterricht statt vorproduzierter Videos: Du lernst in kleinen Gruppen von maximal 15 Personen mit direktem Code-Review und Mentoring.",
    formatHighlights: [
      {
        title: "Live-Unterricht & Lab-Sessions",
        desc: "Montag bis Freitag von 09:00 bis 16:45 Uhr Berliner Zeit. Konzepte werden live erklärt und sofort in betreuten Coding-Labs umgesetzt.",
      },
      {
        title: "Unterrichtssprache: Englisch",
        desc: "Das Training findet auf Englisch statt — der Arbeitssprache internationaler Daten- und KI-Teams in Deutschland — begleitet durch deutsch- und englischsprachige Karriereberatung.",
      },
      {
        title: "28 Partnerstandorte & Online",
        desc: "100 % online von überall in Deutschland teilnehmen oder auf Wunsch Arbeitsplätze an einem unserer 28 Partnerstandorte nutzen.",
      },
    ],
    summaryTable: [
      ["Zeitplan", "Mo–Fr, 09:00–16:45 Uhr (Berlin)"],
      ["Dauer", "32 Wochen (Vollpaket) · 19 Wo. (ab M2) · 13 Wo. (ab M3)"],
      ["Lehrplan", "Modul 1 (13 Wo.) + Modul 2 (6 Wo.) + Modul 3 (13 Wo.)"],
      ["Kapazität", "Max. 15 Plätze pro Kohorte"],
      ["Sprache", "Unterrichtssprache: Englisch"],
      ["Zertifikat", "AZAV-zertifiziert (bis zu 3 Modul-Zertifikate)"],
    ],
    fundingH2: "KI Weiterbildung mit Bildungsgutschein",
    fundingText:
      "Die AI Engineer Weiterbildung ist nach AZAV zertifiziert. Bei bewilligtem Bildungsgutschein übernehmen die Agentur für Arbeit oder das Jobcenter 100 % der Lehrgangsgebühren. Berufstätige und Unternehmen nutzen die Förderung über das Qualifizierungschancengesetz (§ 82 SGB III).",
    fundingBullets: [
      "100 % Übernahme der Kursgebühren mit Bildungsgutschein",
      "Arbeitslosengeld oder Bürgergeld läuft während der Weiterbildung weiter",
      "Offizielles Angebot mit Maßnahmenummer innerhalb von 24 Stunden",
    ],
    fundingLinkLabel: "Bildungsgutschein beantragen",
    fundingLinkTo: "/bildungsgutschein/",
    qcgLinkLabel: "Förderung über das Qualifizierungschancengesetz",
    qcgLinkTo: "/qualifizierungschancengesetz/",
    careerH2: "Berufe nach der AI Engineer Weiterbildung",
    careerIntro:
      "Jedes Modul qualifiziert für ein klares Berufsbild auf dem deutschen Arbeitsmarkt. Die Gehaltsangaben basieren auf dem StepStone Gehaltsreport 2026 für Vollzeitstellen in Deutschland.",
    careerRoles: [
      {
        title: "AI Engineer",
        salaryMedian: "64.500 €",
        salaryRange: "55.000 – 78.000 €",
        salarySource: "StepStone Gehaltsdaten 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Entwickelt und integriert LLM-Anwendungen, RAG-Pipelines und autonome KI-Agenten in produktive Unternehmenssysteme.",
        guideLabel: "Berufsbild & Gehalt: AI Engineer",
        guideUrl: "/ratgeber/ai-engineer/",
      },
      {
        title: "Data Scientist",
        salaryMedian: "57.200 €",
        salaryRange: "49.200 – 68.100 €",
        salarySource: "StepStone Gehaltsdaten 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Trainiert und validiert Machine-Learning-Modelle, erkennt komplexe Muster in Unternehmensdaten und erstellt Prognosen.",
        guideLabel: "Ratgeber: Agentic AI & KI-Systeme",
        guideUrl: "/ratgeber/agentic-ai/",
      },
      {
        title: "Data Analyst",
        salaryMedian: "41.800 €",
        salaryRange: "38.300 – 47.100 €",
        salarySource: "StepStone Gehaltsdaten 2026 (Junior)",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Bereitet Geschäftsdaten mit Python und SQL auf, erstellt interaktive Power-BI- und Tableau-Dashboards und beantwortet Fachfragen.",
        guideLabel: "Data Analyst werden: Aufgaben & Gehalt",
        guideUrl: "/ratgeber/data-analyst-werden/",
      },
      {
        title: "Machine Learning Engineer",
        salaryMedian: "57.800 €",
        salaryRange: "49.600 – 66.600 €",
        salarySource: "StepStone Gehaltsdaten 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Verbindet Data Science mit Software Engineering: stellt ML-Modelle über APIs, Container und Cloud-Pipelines skalierbar bereit.",
        guideLabel: "Berufsbild: AI & ML Engineering",
        guideUrl: "/ratgeber/ai-engineer/",
      },
    ],
    clusterH2: "Ratgeber zum Thema",
    clusterIntro:
      "Vertiefe dein Wissen rund um Berufsbilder, Gehälter und Schlüsseltechnologien im Bereich Künstliche Intelligenz und Datenanalyse.",
    clusterGuides: [
      {
        title: "AI Engineer: Aufgaben, Gehalt und Einstieg",
        badge: "Berufsratgeber (Empfohlen)",
        desc: "Was ein AI Engineer im Alltag baut, welche Vorkenntnisse zählen und wie hoch das Gehalt in Deutschland ausfällt.",
        to: "/ratgeber/ai-engineer/",
      },
      {
        title: "Agentic AI: Was KI-Agenten sind und wie sie arbeiten",
        badge: "Technologie-Ratgeber",
        desc: "Wie autonome KI-Agenten Werkzeuge nutzen, sich von generativer KI unterscheiden und in Unternehmen eingesetzt werden.",
        to: "/ratgeber/agentic-ai/",
      },
      {
        title: "Data Analyst werden: Aufgaben, Gehalt und Quereinstieg",
        badge: "Berufsratgeber",
        desc: "Schritt-für-Schritt-Leitfaden für den Einstieg in die Datenanalyse mit aktuellen StepStone-Gehaltszahlen.",
        to: "/ratgeber/data-analyst-werden/",
      },
      {
        title: "RAG einfach erklärt: Retrieval-Augmented Generation",
        badge: "Fachartikel",
        desc: "Wie Unternehmen Sprachmodelle mit eigenen Wissensdatenbanken verbinden, um Halluzinationen zu vermeiden.",
        to: "/ratgeber/rag-einfach-erklaert/",
      },
    ],
    whyH2: "Warum Clarusway für die AI Engineer Weiterbildung?",
    whyIntro:
      "Seit Februar 2021 begleitet Clarusway Quereinsteiger und Fachkräfte in Deutschland mit AZAV-zertifizierten Live-Programmen in den IT-Arbeitsmarkt.",
    whyItems: [
      {
        title: "Durchgehender Pfad bis Agentic AI",
        desc: "Während viele Kurse bei klassischem Data Science enden, führt unser Modul 3 bis zu LLMs, RAG-Pipelines und produktiven KI-Agenten.",
      },
      {
        title: "Direkteinstieg über Einstufungsprüfung",
        desc: "Mit Vorkenntnissen in Python und SQL oder Machine Learning steigst du direkt in Modul 2 oder Modul 3 ein und sparst wertvolle Zeit.",
      },
      {
        title: "Live-Unterricht in 15er-Kleingruppen",
        desc: "Täglicher Live-Unterricht mit sofortigem Code-Review durch erfahrene Trainer statt isoliertem Selbststudium vor Videos.",
      },
      {
        title: "AZAV-zertifiziert & 100 % förderfähig",
        desc: "Offizielle Maßnahmenummer für Bildungsgutschein (Agentur für Arbeit & Jobcenter) und Qualifizierungschancengesetz.",
      },
      {
        title: "Drei reale Capstone-Projekte",
        desc: "Du schließt jedes Modul mit einem vorzeigbaren GitHub-Projekt ab — von BI-Dashboards bis zum deployed AI-Agent.",
      },
      {
        title: "Karriere-Management für den deutschen Markt",
        desc: "Individuelles CV-Coaching, LinkedIn-Optimierung und Interview-Training bis zum erfolgreichen Berufseinstieg.",
      },
    ],
    reviewsH2: "Erfahrungen von Absolventen",
    reviews: [
      {
        initials: "CC",
        name: "Cagri C.",
        role: "Absolvent Data Science & AI Bootcamp",
        platform: "Career Karma",
        platformUrl: "https://careerkarma.com/schools/clarusway/",
        quote:
          "Der Besuch des Data Science und AI Programms bei Clarusway war eine meiner besten Entscheidungen. Das Mentoring und die strukturierten Projekte begleiten dich konsequent bis zum Job.",
      },
      {
        initials: "IW",
        name: "Iden W.",
        role: "Absolventin Data & AI Track",
        platform: "Google Rezensionen",
        platformUrl: "https://www.google.com/maps",
        quote:
          "Die Phasen vor, während und nach dem Live-Unterricht sorgen dafür, dass man jedes Modul wirklich durchdringt. Die Projekte im Portfolio haben im Bewerbungsgespräch überzeugt.",
      },
    ],
    faqH2: "Häufige Fragen zur AI Engineer Weiterbildung",
    faqs: [
      {
        q: "Was macht ein AI Engineer?",
        a: "Ein AI Engineer entwickelt produktive KI-Anwendungen und bringt Machine-Learning- sowie Large-Language-Modelle (LLMs) in laufende Softwaresysteme. Dazu gehören RAG-Pipelines, Vektordatenbanken, API-Integrationen und autonome KI-Agenten (Agentic AI).",
      },
      {
        q: "Brauche ich Vorkenntnisse für die AI Engineer Weiterbildung?",
        a: "Nein. Wenn du im vollständigen Programm mit Modul 1 startest, sind keinerlei Programmier- oder Datenkenntnisse erforderlich. Python, SQL und Statistik werden von Grund auf vermittelt.",
      },
      {
        q: "Wie lange dauert die Weiterbildung zum AI Engineer?",
        a: "Das Gesamtprogramm umfasst 32 Wochen in Vollzeit: 13 Wochen für Modul 1 (Datenanalyse & BI), 6 Wochen für Modul 2 (Data Science & Machine Learning) und 13 Wochen für Modul 3 (AI Engineering & Agentic AI).",
      },
      {
        q: "Wird die KI Weiterbildung von der Arbeitsagentur gefördert?",
        a: "Ja. Das Programm ist nach AZAV zertifiziert und kann mit einem Bildungsgutschein der Agentur für Arbeit oder des Jobcenters zu 100 % gefördert werden. Für Beschäftigte ist eine Förderung über das Qualifizierungschancengesetz möglich.",
      },
      {
        q: "Kann ich direkt in Modul 2 oder Modul 3 einsteigen?",
        a: "Ja. Externe Bewerberinnen und Bewerber können über eine fachliche Einstufungsprüfung direkt in Modul 2 (mit Python-, Pandas-, NumPy-, Statistik- und SQL-Kenntnissen) oder in Modul 3 (mit Python, Git, APIs, ML-, Deep-Learning- und NLP-Grundlagen) einsteigen.",
      },
      {
        q: "Was ist der Unterschied zwischen Data Scientist und AI Engineer?",
        a: "Ein Data Scientist analysiert komplexe Daten und trainiert Vorhersagemodelle. Ein AI Engineer baut darauf auf und integriert ML-Modelle, Sprachmodelle (LLMs) und KI-Agenten über APIs und Cloud-Infrastrukturen in produktive Anwendungen.",
      },
      {
        q: "In welcher Sprache findet der Unterricht statt?",
        a: "Die Unterrichtssprache ist Englisch, da sämtliche KI-Frameworks, Dokumentationen und internationalen Entwicklerteams in Deutschland auf Englisch arbeiten. Unsere Kurs- und Förderberatung steht dir auf Deutsch und Englisch zur Seite.",
      },
      {
        q: "Welches Zertifikat erhalte ich?",
        a: "Nach jedem erfolgreich abgeschlossenen Modul erhältst du ein anerkanntes AZAV-Trägerzertifikat von Clarusway (insgesamt bis zu drei Zertifikate: Data Analyst, Data Scientist und AI Engineer) sowie dein dokumentiertes GitHub-Projektportfolio.",
      },
    ],
    relatedH2: "Weitere IT-Kurse",
    relatedCourses: [
      {
        title: "Data Analyst Weiterbildung",
        to: "/it-kurse/data-analyst-weiterbildung/",
        duration: "13 Wochen",
        nextStart: "27 Jul 2026",
        badge: "Modul 1 Einstieg",
      },
      {
        title: "Full Stack Entwickler Weiterbildung",
        to: "/it-kurse/full-stack-entwickler-weiterbildung/",
        duration: "3 – 12 Monate",
        nextStart: "27 Jul 2026",
        badge: "Mit KI-Workflows",
      },
      {
        title: "Cyber Security Weiterbildung",
        to: "/it-kurse/cyber-security-weiterbildung/",
        duration: "4 Module",
        nextStart: "24 Aug 2026",
        badge: "SOC & Cloud Security",
      },
    ],
    ctaH2: "Starte deine AI Engineer Weiterbildung",
    ctaText:
      "Lass deine Förderfähigkeit für den Bildungsgutschein kostenlos prüfen und finde heraus, mit welchem Modul du startest.",
  },

  "data-analytics": {
    key: "data-analytics",
    slugDe: "/it-kurse/data-analyst-weiterbildung/",
    slugEn: "/it-courses/data-analytics/",
    pdfFileName: "clarusway-data-analyst-weiterbildung-lehrplan.pdf",
    metaTitle: "Data Analyst Weiterbildung & Business Intelligence | Clarusway",
    metaDescription:
      "In 13 Wochen zum Data Analyst: Python, SQL, Pandas, Statistik, Power BI und Tableau. Ohne Vorkenntnisse, 100 % förderfähig mit Bildungsgutschein.",
    breadcrumbLabel: "Data Analyst Weiterbildung",
    eyebrow: "Programm: Data Analytics & Business Intelligence (Modul 1)",
    h1: "Data Analyst Weiterbildung: Datenanalyse und Business Intelligence ohne Vorkenntnisse",
    heroIntro:
      "Die Data Analyst Weiterbildung bei Clarusway ist ein 13-wöchiges Live-Online-Programm für den direkten Berufseinstieg in Datenanalyse und Business Intelligence. Du lernst Python, Pandas, SQL, Statistik sowie Power BI und Tableau von Grund auf — ohne Vorkenntnisse und zu 100 % förderbar mit Bildungsgutschein.",
    heroSubnote:
      "13 Wochen Vollzeit · Keine Vorkenntnisse nötig · Nahtloser Übergang zum AI Engineer möglich.",
    heroBadges: ["Python", "SQL", "Pandas & NumPy", "Power BI", "Tableau", "Statistik"],
    terminalTitle: "sales_analytics.sql",
    terminalLines: [
      { text: "SELECT region, SUM(revenue) AS total_rev", color: "#60a5fa" },
      { text: "FROM enterprise_orders WHERE order_year = 2026", color: "#e5e7eb" },
      { text: "GROUP BY region ORDER BY total_rev DESC;", color: "#fde047" },
      { text: "✓ Dashboard synced to Power BI & Tableau", color: "#4ade80" },
    ],
    infoStrip: [
      ["13 Wochen", "Kompakte Kursdauer (65 Sessions)"],
      ["Englisch", "Unterrichtssprache (Live)"],
      ["Ohne Vorwissen", "Kein technischer Eingangstest"],
      ["Max. 15", "Teilnehmende pro Klasse"],
      ["AZAV", "100 % Bildungsgutschein"],
    ],
    audienceH2: "Für wen eignet sich die Data Analyst Weiterbildung?",
    audienceIntro:
      "Ideal für alle, die in kurzer Zeit datengetriebene Entscheidungen, SQL-Datenbanken und moderne BI-Dashboards beherrschen wollen.",
    audienceCards: [
      {
        title: "Quereinsteiger ohne Vorkenntnisse",
        badge: "Direktstart",
        desc: "Du benötigst weder Programmiererfahrung noch ein Mathematikstudium. Alle Grundlagen werden ab Tag 1 praxisnah aufgebaut.",
        bullets: ["Kein technischer Aufnahmetest", "Tägliche Betreuung durch Live-Mentoren", "Praxisprojekt für dein Bewerbungsportfolio"],
      },
      {
        title: "Kaufmännische & Fachkräfte im Wandel",
        badge: "Karriere-Upgrade",
        desc: "Fachkräfte aus BWL, Controlling, Marketing oder Logistik erweitern ihr Profil um Python, SQL und professionelle Business Intelligence.",
        bullets: ["Von Excel zu Python, SQL und Power BI", "Gefragtes Profil in allen Branchen", "100 % Förderung über Bildungsgutschein oder QCG"],
      },
      {
        title: "Angehende Data Scientists & AI Engineers",
        badge: "Modul 1 Fundament",
        desc: "Nutze das 13-wöchige Programm als solides Fundament und entscheide danach, ob du direkt in den Job gehst oder mit Modul 2 & 3 weitermachst.",
        bullets: ["Anerkannt als Modul 1 des AI Engineering Pfads", "Nahtloser Anschluss an Machine Learning", "Zertifizierter Abschluss nach 13 Wochen"],
      },
    ],
    programSelectorH2: "Data Analyst Weiterbildung: Programme und Dauer",
    programSelectorSubtitle:
      "Buche das 13-wöchige Data Analytics Modul einzeln oder kombiniere es mit Data Science und AI Engineering.",
    modules: [
      {
        id: 1,
        label: "Modul 1",
        title: "Datenanalyse & Business Intelligence",
        duration: "13 Wochen",
        color: PRIMARY,
        topics: ["Python & Pandas / NumPy", "SQL & Datenbanken", "Statistik & EDA", "Power BI & Tableau Dashboards"],
      },
      {
        id: 2,
        label: "Modul 2 (Optional)",
        title: "Data Science & Machine Learning",
        duration: "6 Wochen",
        color: SECONDARY,
        topics: ["scikit-learn & ML-Modelle", "Feature Engineering", "Neuronale Netze & NLP"],
      },
    ],
    programs: [
      {
        id: "da-standalone",
        title: "Data Analytics & Business Intelligence",
        subtitle: "Eigenständiger Abschluss (Modul 1)",
        badge: "Modul 1 · 13 Wochen",
        moduleIds: [1],
        startsAt: 1,
        duration: "13 Wochen",
        schedule: "09:00–16:45 Uhr Berlin",
        capacity: "Max. 15 Plätze",
        language: "Unterrichtssprache: Englisch",
        dates: ["27 Jul 2026", "30 Aug 2026", "28 Sep 2026", "26 Okt 2026"],
        recommended: true,
        description:
          "In 13 Wochen (65 Live-Sessions) vom Einstieg ohne Vorkenntnisse zum zertifizierten Data Analyst mit Python, SQL, Power BI und Tableau.",
      },
      {
        id: "da-plus-ds",
        title: "Data Analytics + Data Science",
        subtitle: "Kombinierter Pfad (Modul 1 + 2)",
        badge: "Modul 1 + 2 · 19 Wochen",
        moduleIds: [1, 2],
        startsAt: 1,
        duration: "19 Wochen",
        schedule: "09:00–16:45 Uhr Berlin",
        capacity: "Max. 15 Plätze",
        language: "Unterrichtssprache: Englisch",
        dates: ["27 Jul 2026", "30 Aug 2026", "28 Sep 2026"],
        recommended: false,
        description:
          "Kombiniere Datenanalyse mit Machine Learning und schließe nach 19 Wochen mit zwei Zertifikaten (Data Analyst & Data Scientist) ab.",
      },
    ],
    curriculumH2: "Inhalte der Data Analyst Weiterbildung",
    curriculumIntro:
      "65 intensiv betreute Live-Sessions vermitteln dir die Werkzeuge, die in deutschen Stellenanzeigen für Data Analysts am häufigsten gefordert werden.",
    specialFeature: {
      h2: "Nächster Schritt: Weiter zum AI Engineer",
      intro:
        "Die Data Analyst Weiterbildung bildet zugleich das Modul 1 unseres großen AI Engineering Programms. Nach deinem Abschluss stehen dir zwei Wege offen: der direkte Berufseinstieg als Junior Data Analyst oder der nahtlose Aufstieg in Modul 2 (Data Science) und Modul 3 (AI Engineering & Agentic AI).",
      cards: [
        {
          badge: "Stufe 1 · 13 Wochen",
          title: "Data Analyst (Dein Start)",
          desc: "Python, Pandas, SQL, Statistik, Power BI & Tableau — vollständiges BI-Portfolio ohne Vorkenntnisse.",
        },
        {
          badge: "Stufe 2 · +6 Wochen",
          title: "Upgrade zum Data Scientist",
          desc: "Ergänze klassisches Machine Learning, scikit-learn, Deep Learning und NLP-Grundlagen.",
        },
        {
          badge: "Stufe 3 · +13 Wochen",
          title: "Aufstieg zum AI Engineer",
          desc: "Baue produktive LLM-Applikationen, RAG-Systeme und autonome KI-Agenten in der Cloud.",
        },
      ],
      linkLabel: "Zur AI Engineer Weiterbildung",
      linkTo: "/it-kurse/ai-engineer-weiterbildung/",
    },
    formatH2: "Ablauf und Lernformat",
    formatIntro:
      "Strukturierter Vollzeit-Live-Unterricht in Kleingruppen von maximal 15 Teilnehmenden.",
    formatHighlights: [
      {
        title: "Täglich Live statt Video-Selbststudium",
        desc: "Mo–Fr von 09:00 bis 16:45 Uhr Berliner Zeit mit erfahrenen Trainern und täglichen Praxis-Labs.",
      },
      {
        title: "Unterrichtssprache: Englisch",
        desc: "Alle Fachbegriffe, Datenbank-Abfragen und BI-Tools lernst du direkt im internationalen Branchenstandard.",
      },
      {
        title: "Echtes BI-Abschlussprojekt",
        desc: "Du analysierst reale Datensätze und präsentierst dein interaktives Dashboard am Ende des Moduls.",
      },
    ],
    summaryTable: [
      ["Zeitplan", "Mo–Fr, 09:00–16:45 Uhr (Berlin)"],
      ["Dauer", "13 Wochen (65 Live-Sessions)"],
      ["Lehrplan", "Python, Pandas, SQL, Statistik, Power BI, Tableau"],
      ["Kapazität", "Max. 15 Plätze"],
      ["Sprache", "Unterrichtssprache: Englisch"],
      ["Förderung", "100 % über Bildungsgutschein / QCG"],
    ],
    fundingH2: "Data Analyst Weiterbildung mit Bildungsgutschein",
    fundingText:
      "Als AZAV-zertifizierte Maßnahme wird die Data Analyst Weiterbildung zu 100 % über den Bildungsgutschein der Agentur für Arbeit oder des Jobcenters sowie über das Qualifizierungschancengesetz gefördert.",
    fundingBullets: [
      "100 % Übernahme von Kursgebühren und Lernmaterial",
      "Individuelle Unterstützung beim Förderantrag",
      "Monatliche Starttermine passend zu deinem Bewilligungszeitraum",
    ],
    fundingLinkLabel: "Bildungsgutschein beantragen",
    fundingLinkTo: "/bildungsgutschein/",
    qcgLinkLabel: "Qualifizierungschancengesetz für Beschäftigte",
    qcgLinkTo: "/qualifizierungschancengesetz/",
    careerH2: "Berufe nach der Data Analyst Weiterbildung",
    careerIntro:
      "Datenanalysten werden branchenübergreifend in Banken, E-Commerce, Industrie und Beratung gesucht.",
    careerRoles: [
      {
        title: "Data Analyst",
        salaryMedian: "41.800 €",
        salaryRange: "38.300 – 47.100 € (Junior)",
        salarySource: "StepStone Gehaltsdaten 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Wertet Unternehmensdaten mit SQL und Python aus, identifiziert Trends und liefert Entscheidungsgrundlagen für Fachabteilungen.",
        guideLabel: "Data Analyst werden: Aufgaben & Gehalt",
        guideUrl: "/ratgeber/data-analyst-werden/",
      },
      {
        title: "Business Intelligence (BI) Analyst",
        salaryMedian: "48.500 €",
        salaryRange: "42.000 – 56.000 €",
        salarySource: "StepStone Gehaltsdaten 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Entwickelt automatisierte KPI-Dashboards und Berichte in Power BI und Tableau für das Management.",
        guideLabel: "Ratgeber: Data Analyst werden",
        guideUrl: "/ratgeber/data-analyst-werden/",
      },
    ],
    clusterH2: "Ratgeber zum Thema",
    clusterIntro:
      "Erfahre mehr über den Einstieg in die Datenanalyse, Gehaltsstufen und den Unterschied zu Data Science.",
    clusterGuides: [
      {
        title: "Data Analyst werden: Aufgaben, Gehalt und Quereinstieg",
        badge: "Berufsratgeber (Empfohlen)",
        desc: "Wie der Quereinstieg als Data Analyst gelingt und welche Fähigkeiten Arbeitgeber wirklich prüfen.",
        to: "/ratgeber/data-analyst-werden/",
      },
      {
        title: "Data Science vs. Data Analytics: Der Vergleich",
        badge: "Fachartikel",
        desc: "Welche Aufgaben, Tools und Gehälter Data Analysts und Data Scientists unterscheiden.",
        to: "/ratgeber/data-science-vs-data-analytics/",
      },
      {
        title: "SQL lernen für Einsteiger: Warum Datenbanken Pflicht sind",
        badge: "Praxis-Guide",
        desc: "Warum SQL in fast jeder Daten-Stellenanzeige an erster Stelle steht und wie du schnell einsteigst.",
        to: "/ratgeber/sql-lernen/",
      },
    ],
    whyH2: "Warum Clarusway für die Data Analyst Weiterbildung?",
    whyIntro:
      "Praxisnahes Training in kleinen Live-Klassen mit direkter Anschlussfähigkeit an unser AI Engineering Programm.",
    whyItems: [
      { title: "Kompakter Abschluss in 13 Wochen", desc: "65 strukturierte Live-Sessions bringen dich ohne Umwege zum bewerbungsfähigen Daten-Portfolio." },
      { title: "Keine Vorkenntnisse nötig", desc: "Wir starten bei den absoluten Grundlagen in Python, Statistik und Datenbanken." },
      { title: "100 % Förderung mit Bildungsgutschein", desc: "AZAV-zertifiziert für eine vollständige Kostenübernahme über Agentur für Arbeit oder Jobcenter." },
      { title: "Power BI, Tableau, SQL & Python", desc: "Du beherrschst genau den Tool-Stack, den deutsche Arbeitgeber suchen." },
      { title: "Aufstiegsoption zum AI Engineer", desc: "Dein Abschluss wird vollständig als Modul 1 für das AI Engineering Programm angerechnet." },
      { title: "Karriere-Coaching inklusive", desc: "Bewerbungstraining, GitHub-Portfolio-Review und Interviewvorbereitung." },
    ],
    reviewsH2: "Erfahrungen von Absolventen",
    reviews: [
      {
        initials: "DK",
        name: "DH Kim",
        role: "Absolvent Data Analytics",
        platform: "Google Rezensionen",
        platformUrl: "https://www.google.com/maps",
        quote:
          "Die Mentoren sind immer erreichbar und gehen auf jeden einzeln ein. Die Kombination aus Python, SQL und Dashboards war perfekt für meinen Berufseinstieg.",
      },
      {
        initials: "CC",
        name: "Cagri C.",
        role: "Absolvent Data Track",
        platform: "Career Karma",
        platformUrl: "https://careerkarma.com/schools/clarusway/",
        quote:
          "Selbst ohne IT-Vorwissen konnte ich in wenigen Wochen eigene Datenanalysen und Visualisierungen bauen.",
      },
    ],
    faqH2: "Häufige Fragen zur Data Analyst Weiterbildung",
    faqs: [
      {
        q: "Was macht ein Data Analyst?",
        a: "Ein Data Analyst sammelt, bereinigt und untersucht Geschäftsdaten mit Werkzeugen wie SQL, Python, Power BI und Tableau, um konkrete Fragen von Fachabteilungen zu beantworten und Dashboards bereitzustellen.",
      },
      {
        q: "Brauche ich Vorkenntnisse?",
        a: "Nein. Für die Data Analyst Weiterbildung sind keine Vorkenntnisse in der Programmierung oder Datenanalyse erforderlich.",
      },
      {
        q: "Wie lange dauert die Weiterbildung?",
        a: "Die Weiterbildung dauert 13 Wochen im Vollzeit-Live-Format und umfasst 65 Unterrichtssessions inklusive Praxisprojekt.",
      },
      {
        q: "Kann ich danach zum AI Engineer weitermachen?",
        a: "Ja. Das Programm entspricht exakt Modul 1 unserer AI Engineer Weiterbildung. Nach Abschluss kannst du nahtlos in Modul 2 (Data Science) und Modul 3 (AI Engineering & Agentic AI) übergehen.",
      },
      {
        q: "Wird die Weiterbildung gefördert?",
        a: "Ja, der Kurs ist AZAV-zertifiziert und zu 100 % über einen Bildungsgutschein der Agentur für Arbeit oder des Jobcenters sowie über das Qualifizierungschancengesetz förderfähig.",
      },
      {
        q: "In welcher Sprache findet der Unterricht statt?",
        a: "Die Unterrichtssprache ist Englisch. Unsere Beratung zur Förderung und Karriereplanung erfolgt auf Deutsch und Englisch.",
      },
    ],
    relatedH2: "Weitere IT-Kurse",
    relatedCourses: [
      {
        title: "AI Engineer Weiterbildung",
        to: "/it-kurse/ai-engineer-weiterbildung/",
        duration: "32 Wochen",
        nextStart: "27 Jul 2026",
        badge: "Modul 1 bis 3 Komplettpfad",
      },
      {
        title: "Full Stack Entwickler Weiterbildung",
        to: "/it-kurse/full-stack-entwickler-weiterbildung/",
        duration: "3 – 12 Monate",
        nextStart: "27 Jul 2026",
        badge: "Webentwicklung mit KI",
      },
    ],
    ctaH2: "Starte deine Data Analyst Weiterbildung",
    ctaText:
      "Prüfe jetzt kostenlos deine Förderfähigkeit mit Bildungsgutschein und sichere dir deinen Platz in der nächsten 13-Wochen-Kohorte.",
  },

  "full-stack": {
    key: "full-stack",
    slugDe: "/it-kurse/full-stack-entwickler-weiterbildung/",
    slugEn: "/it-courses/full-stack-developer/",
    pdfFileName: "clarusway-full-stack-entwickler-weiterbildung-lehrplan.pdf",
    metaTitle: "Full Stack Entwickler Weiterbildung mit KI | Clarusway",
    metaDescription:
      "Lerne React, TypeScript, Next.js und Node.js mit Cursor, Claude Code und Copilot. Weiterbildung zum Full-Stack-Entwickler, förderfähig mit Bildungsgutschein.",
    breadcrumbLabel: "Full Stack Entwickler Weiterbildung",
    eyebrow: "Programm: AI-Assisted Full Stack Development",
    h1: "Full Stack Entwickler Weiterbildung mit KI-gestützten Workflows",
    heroIntro:
      "Die Full Stack Entwickler Weiterbildung bei Clarusway ist ein praxisnahes Live-Online-Programm, in dem du moderne Webanwendungen mit React, TypeScript, Next.js, Node.js und Datenbanken entwickelst — vom ersten Tag an unterstützt durch professionelle KI-Coding-Tools wie Cursor, Claude Code und GitHub Copilot. AZAV-zertifiziert und zu 100 % mit Bildungsgutschein förderbar.",
    heroSubnote:
      "Keine Programmierkenntnisse für Modul 1 erforderlich · Live-Unterricht in 15er-Gruppen · 100 % Förderung möglich.",
    heroBadges: ["React & Next.js", "TypeScript", "Node.js", "PostgreSQL & MongoDB", "Cursor & Claude Code", "GitHub Copilot"],
    terminalTitle: "fullstack_ai_workflow.tsx",
    terminalLines: [
      { text: "import { NextRequest, NextResponse } from 'next/server'", color: "#60a5fa" },
      { text: "import { prisma } from '@/lib/db'", color: "#60a5fa" },
      { text: "// AI-Assisted Workflow: Cursor + Claude Code verified", color: "#9ca3af" },
      { text: "export async function POST(req: NextRequest) {", color: "#fde047" },
      { text: "  const project = await prisma.portfolio.create({ data })", color: "#e5e7eb" },
      { text: "  return NextResponse.json({ status: 'Deployed ✓', project })", color: "#4ade80" },
      { text: "}", color: "#fde047" },
    ],
    infoStrip: [
      ["4 Module", "Strukturierter Full-Stack-Pfad"],
      ["Englisch", "Unterrichtssprache (Live)"],
      ["KI-Workflows", "Cursor, Claude Code & Copilot"],
      ["Max. 15", "Teilnehmende pro Klasse"],
      ["AZAV", "100 % Bildungsgutschein"],
    ],
    audienceH2: "Für wen eignet sich die Full Stack Entwickler Weiterbildung?",
    audienceIntro:
      "Ob du deine erste Codezeile schreibst oder bereits mit HTML/JavaScript gearbeitet hast: unsere Module holen dich auf deinem Niveau ab.",
    audienceCards: [
      {
        title: "Quereinsteiger ohne Programmierkenntnisse",
        badge: "Start ab Modul 1",
        desc: "Für den Einstieg brauchst du weder ein Informatikstudium noch einen technischen Eingangstest. Modul 1 baut Web-Grundlagen und den Umgang mit KI-Entwicklungswerkzeugen von null auf.",
        bullets: [
          "Schrittweiser Aufbau von HTML/CSS/JS über TypeScript bis React & Node.js",
          "Tägliches Live-Code-Review verhindert das Steckenbleiben",
          "Vollständiges GitHub-Portfolio für deine ersten Bewerbungen",
        ],
      },
      {
        title: "Entwickler mit Vorkenntnissen",
        badge: "Direkteinstieg Modul 2 / 3",
        desc: "Wenn du HTML, CSS und JavaScript bereits beherrschst, kannst du gezielt in Frontend-Frameworks (React, Next.js) oder die Backend-Entwicklung einsteigen und deinen Workflow mit KI modernisieren.",
        bullets: [
          "KI-gestützte Entwicklung mit Cursor, Claude Code und GitHub Copilot",
          "Moderne Full-Stack-Architektur mit Next.js, PostgreSQL, MongoDB & Docker",
          "Reales agiles Teamprojekt mit Demo Day",
        ],
      },
    ],
    programSelectorH2: "Full Stack Entwickler Weiterbildung: Programme und Dauer",
    programSelectorSubtitle:
      "Wähle den kompletten 4-Module-Pfad für Einsteiger oder fokussiere dich mit Vorwissen auf Frontend-, Backend- oder Profi-Kombinationen.",
    modules: [
      {
        id: "m1",
        label: "Modul 1",
        title: "IT- und Web-Grundlagen und AI-Native Developer Toolkit",
        duration: "3 Monate",
        color: ACCENT,
        prerequisite: "Keine Vorkenntnisse erforderlich.",
        project: "Interaktive Web-Applikation mit Git & AI-Toolkit",
        topics: [
          "HTML5, CSS3 & Responsive Design",
          "JavaScript Core & Moderne ES6+ Syntax",
          "Git, GitHub & Terminal-Workflows",
          "AI-Native Developer Toolkit (Prompting & Debugging)",
        ],
      },
      {
        id: "m2",
        label: "Modul 2",
        title: "KI-gestützte Frontend-Entwicklung mit React, TypeScript und Next.js",
        duration: "3 Monate",
        color: PRIMARY,
        prerequisite: "Modul 1 oder fundierte HTML/CSS/JS-Kenntnisse.",
        project: "TypeScript & Next.js Frontend-Plattform",
        topics: [
          "TypeScript für typsichere Anwendungen",
          "React Komponenten, Hooks & State Management",
          "Next.js App Router & Server Components",
          "UI-Entwicklung mit Cursor & GitHub Copilot",
        ],
      },
      {
        id: "m3",
        label: "Modul 3",
        title: "KI-gestützte Backend-Entwicklung mit Node.js und Datenbanken",
        duration: "3 Monate",
        color: SECONDARY,
        prerequisite: "Modul 2 oder vergleichbare Frontend-/JS-Kenntnisse.",
        project: "Skalierbare REST-API mit PostgreSQL, MongoDB & Docker",
        topics: [
          "Node.js & Express.js Server-Architektur",
          "Relationale Datenbanken (PostgreSQL & Prisma)",
          "NoSQL-Datenbanken (MongoDB)",
          "Docker Container, Auth & API-Sicherheit",
        ],
      },
      {
        id: "m4",
        label: "Modul 4",
        title: "Full-Stack Teamprojekt und Demo Day",
        duration: "3 Monate",
        color: SOFT_ROSE,
        prerequisite: "Abschluss von Modul 2 und Modul 3.",
        project: "Produktionsreife Full-Stack-Anwendung im Scrum-Team",
        topics: [
          "Agile Zusammenarbeit mit Scrum & Jira",
          "End-to-End Architektur, Testing & CI/CD",
          "Code-Reviews mit Claude Code & Copilot",
          "Abschlusspräsentation am Demo Day vor Arbeitgebern",
        ],
      },
    ],
    programs: [
      {
        id: "fullstack-complete",
        anchorId: "fs-for-beginner",
        title: "AI-Assisted Full Stack Development (Modul 1 bis 4)",
        subtitle: "Für Einsteiger ohne Vorkenntnisse",
        badge: "Alle 4 Module · 12 Monate",
        moduleIds: ["m1", "m2", "m3", "m4"],
        startsAt: "m1",
        duration: "12 Monate",
        schedule: "09:00–16:45 Uhr Berlin (Vollzeit)",
        capacity: "Max. 15 Plätze",
        language: "Unterrichtssprache: Englisch",
        dates: ["27 Jul 2026", "24 Aug 2026", "28 Sep 2026", "26 Okt 2026"],
        recommended: true,
        description:
          "Das vollständige Paket: Von den ersten HTML- und JavaScript-Zeilen über React, Next.js und Node.js bis zum agilen Full-Stack-Teamprojekt mit KI-Workflows.",
      },
      {
        id: "fullstack-pro",
        anchorId: "fs-for-pro",
        title: "Full-Stack-Entwicklung für Fortgeschrittene (Modul 2 bis 4)",
        subtitle: "Mit HTML/CSS/JS-Grundkenntnissen",
        badge: "Modul 2 + 3 + 4 · 9 Monate",
        moduleIds: ["m2", "m3", "m4"],
        startsAt: "m2",
        duration: "9 Monate",
        schedule: "09:00–16:45 Uhr Berlin (Vollzeit)",
        capacity: "Max. 15 Plätze",
        language: "Unterrichtssprache: Englisch",
        dates: ["10 Aug 2026", "7 Sep 2026", "12 Okt 2026", "9 Nov 2026"],
        recommended: false,
        description:
          "Einstieg ab Modul 2 für Teilnehmende mit bestehenden Web-Grundlagen: Fokus auf TypeScript, React, Next.js, Node.js, Datenbanken und das Abschlussprojekt.",
      },
      {
        id: "frontend-track",
        title: "KI-gestützte Frontend-Entwicklung (Modul 1 und 2)",
        subtitle: "Fokus UI, React & Next.js",
        badge: "Modul 1 + 2 · 6 Monate",
        moduleIds: ["m1", "m2"],
        startsAt: "m1",
        duration: "6 Monate",
        schedule: "09:00–16:45 Uhr Berlin (Vollzeit)",
        capacity: "Max. 15 Plätze",
        language: "Unterrichtssprache: Englisch",
        dates: ["27 Jul 2026", "24 Aug 2026", "28 Sep 2026"],
        recommended: false,
        description:
          "Spezialisierung auf moderne Benutzeroberflächen: Von Web-Grundlagen bis zu professionellen React-, TypeScript- und Next.js-Applikationen.",
      },
      {
        id: "backend-track",
        title: "KI-gestützte Backend-Entwicklung (Modul 3)",
        subtitle: "Fokus Node.js, Datenbanken & Docker",
        badge: "Modul 3 · 3 Monate",
        moduleIds: ["m3"],
        startsAt: "m3",
        duration: "3 Monate",
        schedule: "09:00–16:45 Uhr Berlin (Vollzeit)",
        capacity: "Max. 15 Plätze",
        language: "Unterrichtssprache: Englisch",
        dates: ["10 Aug 2026", "12 Okt 2026", "30 Nov 2026"],
        recommended: false,
        description:
          "Kompakter Einstieg ab Modul 3 für Entwickler mit Frontend-Basis: Node.js, Express, PostgreSQL, MongoDB, Prisma und Container-Deployment.",
      },
    ],
    curriculumH2: "Inhalte der Full Stack Entwickler Weiterbildung",
    curriculumIntro:
      "Vier aufeinander aufbauende Module verbinden solide Software-Architektur mit KI-gestützter Produktivität. Jedes Modul endet mit einem Milestone-Projekt für dein GitHub-Portfolio.",
    specialFeature: {
      h2: "Programmieren mit KI: Cursor, Claude Code und GitHub Copilot",
      intro:
        "Moderne Entwicklerteams schreiben Code nicht mehr isoliert von Hand. In dieser Weiterbildung lernst du zuerst die sauberen Grundlagen und setzt anschließend KI-Coding-Assistenten professionell für Architektur, Refactoring, Tests und Debugging ein.",
      cards: [
        {
          badge: "AI-First IDE",
          title: "Cursor",
          desc: "Kontextbewusste Code-Generierung über gesamte Projektordner hinweg, schnelle Komponenten-Erstellung und gezieltes Multi-File-Refactoring.",
        },
        {
          badge: "Agentic Coding",
          title: "Claude Code",
          desc: "Architektur-Analyse, komplexe Fehlerdiagnose im Terminal, automatisierte Unit-Tests und strukturierte Code-Reviews.",
        },
        {
          badge: "Pair Programmer",
          title: "GitHub Copilot",
          desc: "Echtzeit-Autovervollständigung für TypeScript, React-Hooks, SQL-Schemas und API-Endpunkte direkt im täglichen Entwicklungsfluss.",
        },
      ],
      linkLabel: "Ratgeber: KI in der Softwareentwicklung",
      linkTo: "/ratgeber/ki-in-der-softwareentwicklung/",
    },
    techStackSection: {
      h2: "Technologien und Tools",
      intro:
        "Du arbeitest mit dem modernen Produktions-Stack, der in aktuellen deutschen Stellenanzeigen für Full-Stack-Entwickler gefordert wird:",
      tools: [
        { name: "React", category: "Frontend UI" },
        { name: "TypeScript", category: "Typsicherheit" },
        { name: "Next.js", category: "Full-Stack Framework" },
        { name: "Node.js", category: "Backend Runtime" },
        { name: "Express", category: "REST APIs" },
        { name: "PostgreSQL", category: "SQL Datenbank" },
        { name: "MongoDB", category: "NoSQL Datenbank" },
        { name: "Prisma", category: "ORM & Datenmodell" },
        { name: "Docker", category: "Container & Deployment" },
        { name: "GitHub", category: "Git & CI/CD" },
        { name: "Jira", category: "Agiles Scrum-Management" },
      ],
    },
    formatH2: "Ablauf und Lernformat",
    formatIntro:
      "Feste Unterrichtszeiten, feste Kleingruppe und tägliches Code-Feedback sorgen für hohe Abschlussquoten.",
    formatHighlights: [
      {
        title: "Täglicher Live-Unterricht (09:00–16:45 Uhr)",
        desc: "Du lernst live mit erfahrenen Senior-Entwicklern, stellst Fragen in Echtzeit und löst Aufgaben gemeinsam in betreuten Coding-Labs.",
      },
      {
        title: "Unterrichtssprache: Englisch",
        desc: "Du trainierst von Beginn an mit englischer Fachdokumentation, Git-Commits und agilen Stand-ups — begleitet von deutscher Förder- und Karriereberatung.",
      },
      {
        title: "Teamprojekt & Demo Day",
        desc: "Im vierten Modul entwickelst du im agilen Scrum-Team eine vollständige Full-Stack-Anwendung und präsentierst sie am Demo Day.",
      },
    ],
    summaryTable: [
      ["Zeitplan", "Mo–Fr, 09:00–16:45 Uhr (Berlin)"],
      ["Dauer", "12 Monate (Vollpaket) · 9 Mo. (ab M2) · 6 Mo. (Frontend) · 3 Mo. (Einzelmodul)"],
      ["Lehrplan", "Modul 1 + Modul 2 + Modul 3 + Modul 4"],
      ["Kapazität", "Max. 15 Plätze pro Klasse"],
      ["Sprache", "Unterrichtssprache: Englisch"],
      ["Zertifikat", "AZAV-zertifiziert + GitHub-Portfolio"],
    ],
    fundingH2: "Full Stack Entwickler Weiterbildung mit Bildungsgutschein",
    fundingText:
      "Unsere Full-Stack-Programme sind AZAV-zertifiziert und verfügen über eine gültige Maßnahmenummer. Mit einem Bildungsgutschein der Agentur für Arbeit oder des Jobcenters werden 100 % der Kursgebühren übernommen.",
    fundingBullets: [
      "100 % Kostenübernahme für Kursgebühren und Lernmaterial",
      "Arbeitslosengeld oder Bürgergeld läuft während der gesamten Kursdauer weiter",
      "Förderung für Beschäftigte über das Qualifizierungschancengesetz möglich",
    ],
    fundingLinkLabel: "Bildungsgutschein beantragen",
    fundingLinkTo: "/bildungsgutschein/",
    qcgLinkLabel: "Förderung über das Qualifizierungschancengesetz",
    qcgLinkTo: "/qualifizierungschancengesetz/",
    careerH2: "Berufe nach der Weiterbildung",
    careerIntro:
      "In der Softwareentwicklung zählt das nachweisbare Projektportfolio stärker als formale Abschlüsse. Die folgenden Mediangehälter stammen aus den StepStone-Gehaltsdaten (Stand 2026).",
    careerRoles: [
      {
        title: "Full-Stack-Entwickler",
        salaryMedian: "43.200 € (Einstieg) / 58.500 €",
        salaryRange: "37.600 – 68.000 €",
        salarySource: "StepStone Gehaltsdaten 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Verantwortet sowohl Benutzeroberfläche (React, Next.js) als auch Serverlogik und Datenbanken (Node.js, PostgreSQL, MongoDB).",
        guideLabel: "Berufsbild: Full-Stack-Entwickler",
        guideUrl: "/ratgeber/full-stack-entwickler/",
      },
      {
        title: "Frontend-Entwickler",
        salaryMedian: "42.500 € (Einstieg) / 55.000 €",
        salaryRange: "37.000 – 64.000 €",
        salarySource: "StepStone Gehaltsdaten 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Entwickelt schnelle, barrierefreie und interaktive Web-Interfaces mit TypeScript, React und modernen Design-Systemen.",
        guideLabel: "Ratgeber: Frontend vs. Backend",
        guideUrl: "/ratgeber/frontend-vs-backend/",
      },
      {
        title: "Backend-Entwickler",
        salaryMedian: "45.000 € (Einstieg) / 60.000 €",
        salaryRange: "39.500 – 70.000 €",
        salarySource: "StepStone Gehaltsdaten 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Entwirft skalierbare APIs, Datenbankschemata, Authentifizierung und Container-Deployments mit Node.js, Prisma und Docker.",
        guideLabel: "Ratgeber: KI in der Softwareentwicklung",
        guideUrl: "/ratgeber/ki-in-der-softwareentwicklung/",
      },
    ],
    clusterH2: "Ratgeber zum Thema",
    clusterIntro:
      "Lies unsere Leitfäden zu Berufsbild, Gehalt und dem Einsatz von KI-Werkzeugen in der modernen Webentwicklung.",
    clusterGuides: [
      {
        title: "Full-Stack-Entwickler: Was ist das und wie wird man es?",
        badge: "Berufsratgeber (Empfohlen)",
        desc: "Aufgaben, Gehalt in Deutschland und der realistische Weg für Quereinsteiger ohne Informatikstudium.",
        to: "/ratgeber/full-stack-entwickler/",
      },
      {
        title: "KI in der Softwareentwicklung: Wie sich der Beruf verändert",
        badge: "Technologie-Ratgeber",
        desc: "Warum KI-Assistenten Entwickler nicht ersetzen, sondern produktiver machen — und worauf Arbeitgeber achten.",
        to: "/ratgeber/ki-in-der-softwareentwicklung/",
      },
      {
        title: "Cursor, GitHub Copilot und Claude Code im Vergleich",
        badge: "Tool-Vergleich",
        desc: "Welches KI-Coding-Tool sich für welche Entwicklungsaufgabe am besten eignet.",
        to: "/ratgeber/cursor-copilot-claude-code/",
      },
      {
        title: "Frontend vs. Backend: Welcher Entwicklungspfad passt zu dir?",
        badge: "Entscheidungshilfe",
        desc: "Technologien, Arbeitsalltag und Jobchancen von Frontend, Backend und Full Stack im direkten Vergleich.",
        to: "/ratgeber/frontend-vs-backend/",
      },
    ],
    whyH2: "Warum Clarusway für die Full Stack Entwickler Weiterbildung?",
    whyIntro:
      "Wir kombinieren fundiertes Software-Handwerk mit den neuesten KI-Entwicklungsworkflows.",
    whyItems: [
      { title: "KI-Workflows ab Tag 1 integriert", desc: "Du lernst nicht nur Syntax, sondern den professionellen Einsatz von Cursor, Claude Code und GitHub Copilot." },
      { title: "Echtes GitHub-Portfolio statt Übungsdateien", desc: "Jedes Modul endet mit einem bewerteten Milestone-Projekt plus agilem Teamprojekt in Modul 4." },
      { title: "Tägliches Code-Review im Live-Unterricht", desc: "Maximal 15 Teilnehmende pro Gruppe garantieren persönliche Betreuung durch erfahrene Entwickler." },
      { title: "100 % Förderung über Bildungsgutschein", desc: "AZAV-zertifizierter Träger mit persönlicher Begleitung beim Antrag bei Arbeitsagentur oder Jobcenter." },
      { title: "Agiles Arbeiten mit Scrum & Jira", desc: "Im Abschlussmodul arbeitest du exakt so wie in einem realen Produktteam inklusive Sprints und Demo Day." },
      { title: "Lebenslanger Karriere-Support", desc: "CV-Review, technisches Interview-Training und Zugang zu unserem deutschlandweiten Alumni-Netzwerk." },
    ],
    reviewsH2: "Erfahrungen von Absolventen",
    reviews: [
      {
        initials: "M",
        name: "Morad",
        role: "Absolvent Full Stack Development",
        platform: "Course Report",
        platformUrl: "https://www.coursereport.com/schools/clarusway",
        quote:
          "Clarusway hat mir geholfen, ohne Vorkenntnisse in die Softwareentwicklung einzusteigen. Das Live-Format und das Feedback auf meinen Code haben den entscheidenden Unterschied gemacht.",
      },
      {
        initials: "DK",
        name: "DH Kim",
        role: "Absolvent Software Engineering",
        platform: "Google Rezensionen",
        platformUrl: "https://www.google.com/maps",
        quote:
          "Die Struktur des Lernpfads und die praxisnahen Teamprojekte haben mir genau das Portfolio gegeben, nach dem im Vorstellungsgespräch gefragt wurde.",
      },
    ],
    faqH2: "Häufige Fragen zur Full Stack Entwickler Weiterbildung",
    faqs: [
      {
        q: "Was ist ein Full-Stack-Entwickler?",
        a: "Ein Full-Stack-Entwickler beherrscht sowohl die sichtbare Benutzeroberfläche einer Webanwendung (Frontend mit React, TypeScript, Next.js) als auch die dahinterliegende Serverlogik, Schnittstellen und Datenbanken (Backend mit Node.js, PostgreSQL, MongoDB).",
      },
      {
        q: "Brauche ich Programmierkenntnisse?",
        a: "Nein. Für den Einstieg in Modul 1 sind keine Programmierkenntnisse und kein technischer Eingangstest erforderlich. Wenn du bereits HTML, CSS und JavaScript beherrschst, kannst du direkt in Modul 2 starten.",
      },
      {
        q: "Ersetzt KI bald Softwareentwickler?",
        a: "KI ersetzt keine fundiert ausgebildeten Entwickler, verändert aber deren Arbeitsweise grundlegend. KI-Tools beschleunigen Routine-Code, während Systemarchitektur, Sicherheit, Datenbankdesign und die Qualitätsprüfung von KI-generiertem Code menschliche Kernaufgaben bleiben.",
      },
      {
        q: "Mit welchen KI-Tools arbeite ich in der Weiterbildung?",
        a: "Du arbeitest im täglichen Entwicklungsworkflow mit Cursor, Claude Code und GitHub Copilot für Code-Generierung, Refactoring, Testautomatisierung und Debugging.",
      },
      {
        q: "Wie viele Stunden pro Woche sollte ich einplanen?",
        a: "Im Vollzeitformat findet der Live-Unterricht Montag bis Freitag von 09:00 bis 16:45 Uhr Berliner Zeit statt (ca. 35–40 Unterrichtsstunden pro Woche inklusive betreuter Lab-Sessions).",
      },
      {
        q: "Wird die Weiterbildung vom Jobcenter oder der Arbeitsagentur gefördert?",
        a: "Ja. Alle unsere Programme sind nach AZAV zertifiziert und können mit einem Bildungsgutschein der Agentur für Arbeit oder des Jobcenters zu 100 % gefördert werden.",
      },
      {
        q: "Wie lange dauert die Weiterbildung?",
        a: "Das vollständige Programm für Einsteiger (Modul 1 bis 4) dauert 12 Monate. Mit Vorkenntnissen dauert der Einstieg ab Modul 2 9 Monate, der reine Frontend-Pfad 6 Monate und einzelne Module jeweils 3 Monate.",
      },
      {
        q: "In welcher Sprache findet der Unterricht statt?",
        a: "Die Unterrichtssprache ist Englisch, damit du Programmierkonzepte, Dokumentation und Team-Workflows im internationalen Branchenstandard beherrschst. Die Beratung vor und während des Kurses ist auch auf Deutsch verfügbar.",
      },
    ],
    relatedH2: "Weitere IT-Kurse",
    relatedCourses: [
      {
        title: "AI Engineer Weiterbildung",
        to: "/it-kurse/ai-engineer-weiterbildung/",
        duration: "32 Wochen",
        nextStart: "27 Jul 2026",
        badge: "Data Science & Agentic AI",
      },
      {
        title: "SDET Weiterbildung",
        to: "/it-kurse/sdet-weiterbildung/",
        duration: "6 – 12 Monate",
        nextStart: "27 Jul 2026",
        badge: "Testautomatisierung",
      },
      {
        title: "AWS & DevOps Weiterbildung",
        to: "/it-kurse/aws-devops-weiterbildung/",
        duration: "3 – 8 Monate",
        nextStart: "24 Aug 2026",
        badge: "Cloud Engineer Pfad",
      },
    ],
    ctaH2: "Starte deine Full Stack Entwickler Weiterbildung",
    ctaText:
      "Vereinbare jetzt deine kostenlose Beratung — wir prüfen deine Förderfähigkeit für den Bildungsgutschein und finden das passende Einstiegsmodul.",
  },

  "cyber-security": {
    key: "cyber-security",
    slugDe: "/it-kurse/cyber-security-weiterbildung/",
    slugEn: "/it-courses/cyber-security/",
    pdfFileName: "clarusway-cyber-security-weiterbildung-lehrplan.pdf",
    metaTitle: "Cyber Security Weiterbildung zum SOC Analyst | Clarusway",
    metaDescription:
      "In 4 Modulen zum SOC Analyst: CompTIA Security+, KI-gestützte Security Operations und Cloud Security auf AWS. Förderfähig mit Bildungsgutschein.",
    breadcrumbLabel: "Cyber Security Weiterbildung",
    eyebrow: "Programm: AI-Enhanced Cyber Security Analyst (SOC) & Cloud Security",
    h1: "Cyber Security Weiterbildung zum SOC Analyst mit KI und Cloud Security",
    heroIntro:
      "Die Cyber Security Weiterbildung bei Clarusway bildet dich in vier praxisorientierten Modulen zum SOC Analyst und Cloud Security Specialist aus: von der CompTIA Security+ Prüfungsvorbereitung über KI-gestützte Security Operations und Agentic AI bis zur AWS Cloud-Sicherheit. AZAV-zertifiziert und zu 100 % über einen Bildungsgutschein förderfähig.",
    heroSubnote:
      "Start ohne IT-Vorkenntnisse in Modul 1 · Direkteinstieg ab Modul 2 möglich · Inklusive CompTIA Security+ Vorbereitung.",
    heroBadges: ["CompTIA Security+", "SIEM & Splunk", "SOC Operations", "Agentic AI Security", "AWS Cloud Security", "Incident Response"],
    terminalTitle: "soc_threat_hunter.sh",
    terminalLines: [
      { text: "$ siem-agent --monitor --stream cloudtrail-eu-central-1", color: "#60a5fa" },
      { text: "[INFO] Analyzing 14,820 security events/sec...", color: "#9ca3af" },
      { text: "[ALERT] Anomaly detected: IAM Privilege Escalation attempt", color: "#f87171" },
      { text: "$ ai-soc-playbook --isolate-role --notify-tier2", color: "#fde047" },
      { text: "✓ Threat contained · Incident Report #SOC-2026-89 generated", color: "#4ade80" },
    ],
    infoStrip: [
      ["4 Module", "SOC, Agentic AI & Cloud Security"],
      ["Englisch", "Unterrichtssprache (Live)"],
      ["Security+", "Prüfungsvorbereitung in Modul 1"],
      ["Max. 15", "Teilnehmende pro Klasse"],
      ["AZAV", "100 % Bildungsgutschein"],
    ],
    audienceH2: "Für wen eignet sich die Cyber Security Weiterbildung?",
    audienceIntro:
      "Während allgemeine IT-Sicherheitskurse nur Theorie vermitteln, bereitet dich dieses Programm gezielt auf die Rolle im modernen Security Operations Center (SOC) vor.",
    audienceCards: [
      {
        title: "Quereinsteiger in die IT-Sicherheit",
        badge: "Start ab Modul 1",
        desc: "Für Modul 1 sind keine Programmier- oder IT-Vorkenntnisse erforderlich. Du baust Netzwerk-, Betriebssystem- und Sicherheitsgrundlagen für CompTIA Security+ strukturiert auf.",
        bullets: [
          "Kein technischer Aufnahmetest für Modul 1",
          "Gezielte Vorbereitung auf CompTIA Security+ (SY0-701)",
          "Praxisnahes Training in virtuellen Cyber-Range-Labs",
        ],
      },
      {
        title: "IT-Fachkräfte mit Vorkenntnissen",
        badge: "Direkteinstieg ab Modul 2",
        desc: "Systemadministratoren, Netzwerktechniker oder Bewerber mit bestehenden Security-Grundlagen steigen nach einer Einstufungsprüfung direkt in die KI-unterstützte SOC-Praxis ein.",
        bullets: [
          "Direkteinstieg in Modul 2 über fachliches Assessment",
          "Fokus auf SIEM, EDR, Threat Hunting und Agentic AI",
          "Cloud Security Spezialisierung auf AWS in Modul 4",
        ],
      },
    ],
    programSelectorH2: "Cyber Security Weiterbildung: Programme und Dauer",
    programSelectorSubtitle:
      "Durchlaufe alle 4 Module als Quereinsteiger oder steige mit IT-Vorkenntnissen über ein technisches Assessment direkt in Modul 2 ein.",
    modules: [
      {
        id: 1,
        label: "Modul 1",
        title: "CompTIA Security+ Zertifizierung und Prüfungsvorbereitung",
        duration: "Modul 1",
        color: ACCENT,
        prerequisite: "Keine Programmier- oder IT-Vorkenntnisse erforderlich.",
        project: "Enterprise Network & Security Baseline Audit",
        topics: [
          "Netzwerksicherheit, Protokolle & Firewalls",
          "Linux & Windows System-Hardening",
          "Kryptographie, IAM & Zero-Trust-Prinzipien",
          "Bedrohungsanalyse & Schwachstellenmanagement",
          "CompTIA Security+ (SY0-701) Prüfungsvorbereitung",
        ],
      },
      {
        id: 2,
        label: "Modul 2",
        title: "KI-unterstützte SOC Analyst Praxis",
        duration: "Modul 2",
        color: PRIMARY,
        prerequisite: "Abschluss von Modul 1 oder Einstufungsprüfung (Netzwerk-, OS- & Security-Grundlagen).",
        project: "Live SOC Incident Detection & Triage Playbook",
        topics: [
          "Security Operations Center (SOC) Workflows (Tier 1 & Tier 2)",
          "SIEM-Monitoring & Log-Analyse (Splunk / ELK)",
          "Endpoint Detection & Response (EDR) & Traffic-Analyse",
          "KI-gestützte Alert-Triage & Threat Intelligence",
          "Incident Response nach MITRE ATT&CK Framework",
        ],
      },
      {
        id: 3,
        label: "Modul 3",
        title: "Agentic AI in Security Operations",
        duration: "Modul 3",
        color: SECONDARY,
        prerequisite: "Abschluss von Modul 2 oder gleichwertige SOC-/SIEM-Erfahrung.",
        project: "Automatisierter SOAR- & AI-Agent für Bedrohungsabwehr",
        topics: [
          "Automatisierte Bedrohungserkennung mit KI-Agenten",
          "SOAR-Playbooks & Agentic Workflows im SOC",
          "LLM-gestützte Log-Korrelation & Forensik-Berichte",
          "Erkennung KI-generierter Phishing- & Angriffsvektoren",
        ],
      },
      {
        id: 4,
        label: "Modul 4",
        title: "Cloud Security (AWS) und KI-Sicherheitsgrundlagen",
        duration: "Modul 4",
        color: SOFT_ROSE,
        prerequisite: "Abschluss von Modul 3 oder entsprechender Security-Hintergrund.",
        project: "Abgesicherte AWS-Cloud-Architektur & AI-Security-Audit",
        topics: [
          "AWS Identity & Access Management (IAM) & VPC Security",
          "AWS GuardDuty, Security Hub, CloudTrail & Config",
          "Container- & Cloud-Workload-Schutz",
          "AI Security Basics: Absicherung von KI-Modellen (OWASP LLM Top 10)",
        ],
      },
    ],
    programs: [
      {
        id: "cyber-full",
        anchorId: "cs-for-beginner",
        title: "AI-Enhanced Cyber Security Analyst (Modul 1 bis 4)",
        subtitle: "Vollständiger Lernpfad ohne Vorkenntnisse",
        badge: "Alle 4 Module · Komplettpaket",
        moduleIds: [1, 2, 3, 4],
        startsAt: 1,
        duration: "4 Module (Vollzeit)",
        schedule: "09:00–16:45 Uhr Berlin",
        capacity: "Max. 15 Plätze",
        language: "Unterrichtssprache: Englisch",
        dates: ["24 Aug 2026", "28 Sep 2026", "26 Okt 2026", "30 Nov 2026"],
        recommended: true,
        description:
          "Vom Einstieg ohne IT-Vorwissen über CompTIA Security+ bis zum KI-gestützten SOC Analyst und Cloud Security Specialist auf AWS.",
      },
      {
        id: "cyber-pro-mod2",
        anchorId: "cs-for-pro",
        title: "SOC Analyst, Agentic AI & Cloud Security (Modul 2 bis 4)",
        subtitle: "Direkteinstieg mit Vorkenntnissen",
        badge: "Modul 2 + 3 + 4",
        moduleIds: [2, 3, 4],
        startsAt: 2,
        duration: "3 Module (Vollzeit)",
        schedule: "09:00–16:45 Uhr Berlin",
        capacity: "Max. 15 Plätze",
        language: "Unterrichtssprache: Englisch",
        dates: ["28 Sep 2026", "26 Okt 2026", "30 Nov 2026"],
        recommended: false,
        description:
          "Externe Bewerberinnen und Bewerber mit Netzwerk- und Security-Grundlagen qualifizieren sich über eine technische Einstufungsprüfung direkt für Modul 2.",
      },
      {
        id: "cyber-secplus",
        title: "CompTIA Security+ & SOC Foundations (Modul 1 und 2)",
        subtitle: "Kompakter Einstieg in Security Operations",
        badge: "Modul 1 + 2",
        moduleIds: [1, 2],
        startsAt: 1,
        duration: "2 Module (Vollzeit)",
        schedule: "09:00–16:45 Uhr Berlin",
        capacity: "Max. 15 Plätze",
        language: "Unterrichtssprache: Englisch",
        dates: ["24 Aug 2026", "28 Sep 2026", "26 Okt 2026"],
        recommended: false,
        description:
          "Kombiniert die CompTIA Security+ Prüfungsvorbereitung mit praktischer SOC-Analyst-Erfahrung im SIEM-Labor.",
      },
    ],
    curriculumH2: "Inhalte der Cyber Security Weiterbildung",
    curriculumIntro:
      "Vier praxisorientierte Module verbinden internationale Sicherheitsstandards (CompTIA Security+, MITRE ATT&CK) mit KI-gestützten SOC-Prozessen und AWS Cloud Security.",
    specialFeature: {
      h2: "KI im Security Operations Center",
      intro:
        "Moderne Sicherheitszentren verarbeiten täglich Millionen Log-Einträge. Unser Lehrplan bereitet dich darauf vor, KI sowohl zur Verteidigung einzusetzen als auch KI-Systeme selbst abzusichern.",
      cards: [
        {
          badge: "Modul 2",
          title: "KI-unterstützte Alert-Triage",
          desc: "Reduziere Fehlalarme (False Positives) im SIEM durch intelligente Log-Korrelation und automatisierte Bedrohungsanalyse.",
        },
        {
          badge: "Modul 3",
          title: "Agentic AI & SOAR Playbooks",
          desc: "Entwickle autonome Sicherheits-Agenten, die Vorfälle analysieren, betroffene Endpunkte isolieren und Vorfallsberichte erstellen.",
        },
        {
          badge: "Modul 4",
          title: "AWS Cloud & AI Security",
          desc: "Schütze Cloud-Infrastrukturen mit AWS GuardDuty & Security Hub und sichere KI-Anwendungen gegen Prompt-Injection und Datenlecks ab.",
        },
      ],
    },
    formatH2: "Ablauf und Lernformat",
    formatIntro:
      "Du trainierst im Live-Unterricht an realen Angriffsszenarien und Sicherheits-Logs in einer geschützten Laborumgebung.",
    formatHighlights: [
      {
        title: "Hands-on Cyber-Labs statt trockener Theorie",
        desc: "Täglicher Live-Unterricht von 09:00 bis 16:45 Uhr mit praktischen SIEM-, Firewall- und Incident-Response-Übungen.",
      },
      {
        title: "Unterrichtssprache: Englisch",
        desc: "In der IT-Sicherheit sind sämtliche Tools, CVE-Datenbanken und SOC-Berichte auf Englisch — du lernst direkt in der Fachsprache.",
      },
      {
        title: "Direkteinstieg über Einstufungsprüfung",
        desc: "Bewerber mit IT- oder Netzwerk-Hintergrund können Modul 1 überspringen und direkt in Modul 2 starten.",
      },
    ],
    summaryTable: [
      ["Zeitplan", "Mo–Fr, 09:00–16:45 Uhr (Berlin)"],
      ["Lehrplan", "4 Module: Security+, SOC Praxis, Agentic AI, AWS Cloud Security"],
      ["Einstieg", "Ohne Vorkenntnisse (M1) oder per Assessment (ab M2)"],
      ["Kapazität", "Max. 15 Plätze pro Klasse"],
      ["Sprache", "Unterrichtssprache: Englisch"],
      ["Förderung", "AZAV-zertifiziert · 100 % Bildungsgutschein"],
    ],
    fundingH2: "Cyber Security Weiterbildung mit Bildungsgutschein",
    fundingText:
      "Die Cyber Security Weiterbildung bei Clarusway ist AZAV-zertifiziert. Mit einem Bildungsgutschein der Agentur für Arbeit oder des Jobcenters werden die Kurskosten zu 100 % übernommen. Beschäftigte können über das Qualifizierungschancengesetz gefördert werden.",
    fundingBullets: [
      "100 % Kostenübernahme über Bildungsgutschein",
      "Vorbereitung auf international gefragte Sicherheitszertifizierungen",
      "Persönliche Beratung und Maßnahmenummer für deine Vermittlungsfachkraft",
    ],
    fundingLinkLabel: "Bildungsgutschein beantragen",
    fundingLinkTo: "/bildungsgutschein/",
    qcgLinkLabel: "Qualifizierungschancengesetz (QCG)",
    qcgLinkTo: "/qualifizierungschancengesetz/",
    careerH2: "Berufe nach der Cyber Security Weiterbildung",
    careerIntro:
      "Durch strengere EU-Richtlinien (NIS-2) und zunehmende Cloud-Nutzung gehört IT-Sicherheit zu den am stärksten wachsenden Arbeitsmärkten in Deutschland.",
    careerRoles: [
      {
        title: "SOC Analyst",
        salaryMedian: "52.400 €",
        salaryRange: "45.000 – 63.000 €",
        salarySource: "StepStone Gehaltsdaten 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Überwacht Sicherheitsereignisse im Security Operations Center, analysiert Alarme im SIEM und leitet Gegenmaßnahmen bei Cyberangriffen ein.",
        guideLabel: "Was macht ein SOC Analyst? Aufgaben & Gehalt",
        guideUrl: "/ratgeber/soc-analyst/",
      },
      {
        title: "Cyber Security Analyst",
        salaryMedian: "58.900 €",
        salaryRange: "49.500 – 71.000 €",
        salarySource: "StepStone Gehaltsdaten 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Prüft Netzwerke und Systeme auf Schwachstellen, härtet IT-Infrastrukturen ab und setzt Sicherheitsrichtlinien im Unternehmen um.",
        guideLabel: "Ratgeber: Cyber Security Gehalt in Deutschland",
        guideUrl: "/ratgeber/cyber-security-gehalt/",
      },
      {
        title: "Cloud Security Analyst",
        salaryMedian: "65.200 €",
        salaryRange: "55.000 – 79.000 €",
        salarySource: "StepStone Gehaltsdaten 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Sichert AWS-Cloud-Umgebungen, IAM-Berechtigungen, Container-Workloads und KI-Applikationen gegen moderne Angriffsvektoren ab.",
        guideLabel: "Berufsbild: SOC & Cloud Security",
        guideUrl: "/ratgeber/soc-analyst/",
      },
    ],
    clusterH2: "Ratgeber zum Thema",
    clusterIntro:
      "Alles Wissenswerte über den Beruf des SOC Analysts, SIEM-Systeme, Zertifizierungen und Gehälter in der IT-Sicherheit.",
    clusterGuides: [
      {
        title: "SOC Analyst: Aufgaben, Gehalt und Einstieg",
        badge: "Berufsratgeber (Empfohlen)",
        desc: "Wie ein Security Operations Center arbeitet, was Tier-1- und Tier-2-Analysten verdienen und wie der Quereinstieg gelingt.",
        to: "/ratgeber/soc-analyst/",
      },
      {
        title: "CompTIA Security+: Prüfung, Kosten und Vorbereitung",
        badge: "Zertifizierungs-Guide",
        desc: "Warum CompTIA Security+ (SY0-701) das wichtigste Einstiegszertifikat in der Cyber Security ist.",
        to: "/ratgeber/comptia-security-plus/",
      },
      {
        title: "Was ist ein SIEM? Security Information & Event Management erklärt",
        badge: "Technologie-Guide",
        desc: "Wie SIEM-Systeme wie Splunk und ELK Sicherheitsdaten in Echtzeit korrelieren.",
        to: "/ratgeber/was-ist-ein-siem/",
      },
      {
        title: "Cyber Security Gehalt in Deutschland nach Erfahrungsstufe",
        badge: "Gehaltsreport",
        desc: "Aktuelle Gehaltsspannen für IT-Sicherheitsberufe in Deutschland im Überblick.",
        to: "/ratgeber/cyber-security-gehalt/",
      },
    ],
    whyH2: "Warum Clarusway für die Cyber Security Weiterbildung?",
    whyIntro:
      "Einzigartige Kombination aus CompTIA Security+ Fundament, KI-gestütztem SOC-Training und AWS Cloud Security.",
    whyItems: [
      { title: "Fokus auf SOC Analyst & Cloud Security", desc: "Gezielte Ausbildung für die Rollen mit den meisten offenen Einstiegspositionen in der IT-Sicherheit." },
      { title: "Agentic AI in Security Operations", desc: "Ein eigenes Modul widmet sich dem Einsatz autonomer KI-Agenten und SOAR-Automatisierung im SOC." },
      { title: "CompTIA Security+ Vorbereitung integriert", desc: "Modul 1 bereitet dich systematisch auf die international anerkannte Security+ Zertifizierungsprüfung vor." },
      { title: "AZAV-zertifiziert & 100 % förderfähig", desc: "Vollständige Kostenübernahme über Bildungsgutschein (Agentur für Arbeit / Jobcenter) oder QCG." },
      { title: "Direkteinstieg ab Modul 2 möglich", desc: "Mit bestehenden IT- oder Netzwerkkenntnissen steigst du nach einem technischen Assessment direkt in Modul 2 ein." },
      { title: "Live-Labs in 15er-Kleingruppen", desc: "Du übst täglich live mit erfahrenen Security-Trainern an realen SIEM- und Cloud-Szenarien." },
    ],
    reviewsH2: "Erfahrungen von Absolventen",
    reviews: [
      {
        initials: "DK",
        name: "DH Kim",
        role: "Absolvent Cyber Security Track",
        platform: "Google Rezensionen",
        platformUrl: "https://www.google.com/maps",
        quote:
          "Die praxisnahen SOC-Labs und die Vorbereitung auf Security+ haben mir das Selbstvertrauen gegeben, mich erfolgreich auf Analysten-Stellen zu bewerben.",
      },
      {
        initials: "M",
        name: "Morad",
        role: "Absolvent IT-Weiterbildung",
        platform: "Course Report",
        platformUrl: "https://www.coursereport.com/schools/clarusway",
        quote:
          "Das Live-Format macht einen riesigen Unterschied. Wenn man in einem Lab nicht weiterkommt, hilft sofort ein Mentor weiter.",
      },
    ],
    faqH2: "Häufige Fragen zur Cyber Security Weiterbildung",
    faqs: [
      {
        q: "Was macht ein SOC Analyst?",
        a: "Ein SOC Analyst arbeitet im Security Operations Center eines Unternehmens oder IT-Dienstleisters. Er überwacht Netzwerke, Server und Cloud-Systeme mithilfe von SIEM-Tools, untersucht Sicherheitswarnungen und reagiert auf Cyberangriffe.",
      },
      {
        q: "Brauche ich IT-Vorkenntnisse für die Cyber Security Weiterbildung?",
        a: "Nein. Modul 1 ist speziell für Einsteigerinnen und Einsteiger ohne IT- oder Programmiererfahrung konzipiert. Wer bereits über IT-Grundkenntnisse verfügt, kann über eine Einstufungsprüfung direkt in Modul 2 starten.",
      },
      {
        q: "Ist die CompTIA Security+ Prüfung im Kurs enthalten?",
        a: "Modul 1 beinhaltet die vollständige fachliche Vorbereitung und Prüfungssimulationen für die CompTIA Security+ Zertifizierung. Bei Förderung über einen Bildungsgutschein klären wir die Übernahme der Prüfungsgebühren direkt im Beratungsgespräch.",
      },
      {
        q: "Welche Zertifikate erhalte ich nach der Weiterbildung?",
        a: "Du erhältst das AZAV-zertifizierte Abschlusszertifikat von Clarusway für die absolvierten Module (SOC Analyst, Agentic AI in Security Operations & Cloud Security) und bist optimal auf die externe CompTIA Security+ Prüfung vorbereitet.",
      },
      {
        q: "Wird die Weiterbildung mit Bildungsgutschein gefördert?",
        a: "Ja. Die Cyber Security Weiterbildung ist nach AZAV zugelassen und wird bei Vorliegen eines Bildungsgutscheins zu 100 % von der Agentur für Arbeit oder dem Jobcenter übernommen.",
      },
      {
        q: "Wie wird KI im Security Operations Center eingesetzt?",
        a: "KI-Systeme und autonome Agenten helfen SOC-Teams dabei, große Mengen an Sicherheits-Logs in Echtzeit auszuwerten, Fehlalarme herauszufiltern, Bedrohungsmuster zu erkennen und Incident-Response-Schritte automatisiert vorzubereiten.",
      },
      {
        q: "In welcher Sprache findet der Unterricht statt?",
        a: "Die Unterrichtssprache ist Englisch, da sämtliche Sicherheitswerkzeuge, Bedrohungsdatenbanken und die CompTIA-Prüfung international auf Englisch geführt werden. Unsere Förder- und Karriereberatung begleitet dich auf Deutsch und Englisch.",
      },
    ],
    relatedH2: "Weitere IT-Kurse",
    relatedCourses: [
      {
        title: "AWS & DevOps Weiterbildung",
        to: "/it-kurse/aws-devops-weiterbildung/",
        duration: "3 – 8 Monate",
        nextStart: "24 Aug 2026",
        badge: "Cloud & DevOps Engineer",
      },
      {
        title: "AI Engineer Weiterbildung",
        to: "/it-kurse/ai-engineer-weiterbildung/",
        duration: "32 Wochen",
        nextStart: "27 Jul 2026",
        badge: "Data Science & Agentic AI",
      },
    ],
    ctaH2: "Starte deine Cyber Security Weiterbildung",
    ctaText:
      "Lass dich kostenlos beraten und erfahre, wie du deine Weiterbildung zum SOC Analyst zu 100 % über einen Bildungsgutschein finanzierst.",
  },

  "aws-devops": {
    key: "aws-devops",
    slugDe: "/it-kurse/aws-devops-weiterbildung/",
    slugEn: "/it-courses/devops-aws/",
    pdfFileName: "clarusway-aws-devops-weiterbildung-lehrplan.pdf",
    metaTitle: "AWS DevOps Weiterbildung zum Cloud Engineer | Clarusway",
    metaDescription:
      "AWS Solutions Architect, DevOps Engineering und Azure Fundamentals: Weiterbildung zum Cloud und DevOps Engineer, förderfähig mit Bildungsgutschein.",
    breadcrumbLabel: "AWS & DevOps Weiterbildung",
    eyebrow: "Programm: AWS & DevOps Engineering",
    h1: "AWS & DevOps Weiterbildung zum Cloud Engineer",
    heroIntro:
      "Die AWS & DevOps Weiterbildung bei Clarusway ist ein 3- bis 8-monatiges Live-Online-Programm, das dich in drei aufeinander aufbauenden Modulen (AWS Solutions Architect, DevOps Engineering und Azure Fundamentals) zum Cloud und DevOps Engineer qualifiziert. AZAV-zertifiziert, offizieller AWS Select Tier Partner und zu 100 % mit Bildungsgutschein förderbar.",
    heroSubnote:
      "Einstieg für Quereinsteiger & IT-Profis · Vorbereitung auf AWS SAA-C03 & Azure AZ-900 · Max. 15 Plätze pro Kurs.",
    heroBadges: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins & CI/CD", "Azure"],
    terminalTitle: "terraform_apply.sh",
    terminalLines: [
      { text: "$ aws configure --profile production-eu", color: "#4ade80" },
      { text: "Region: eu-central-1 (Frankfurt)", color: "#9ca3af" },
      { text: "$ kubectl get pods -n production", color: "#60a5fa" },
      { text: "Running — 3/3 pods healthy", color: "#4ade80" },
      { text: "$ terraform apply -auto-approve", color: "#fde047" },
      { text: "✓ Infrastructure deployed (12 added, 0 destroyed)", color: "#4ade80" },
    ],
    infoStrip: [
      ["3 – 8 Monate", "Flexible Modulkombinationen"],
      ["Englisch", "Unterrichtssprache (Live)"],
      ["AWS Partner", "Select Tier Consulting Partner"],
      ["Max. 15", "Teilnehmende pro Kurs"],
      ["AZAV", "100 % Bildungsgutschein"],
    ],
    audienceH2: "Für wen eignet sich die AWS & DevOps Weiterbildung?",
    audienceIntro:
      "Unser modulares Baukastensystem bietet sowohl Quereinsteigern als auch erfahrenen Systemadministratoren und Entwicklern den passenden Einstieg.",
    audienceCards: [
      {
        title: "Quereinsteiger ohne Vorkenntnisse",
        badge: "Komplettpaket (8 Monate)",
        desc: "Du startest mit den Linux-, Netzwerk- und AWS-Cloud-Grundlagen in Modul 1 und entwickelst dich Schritt für Schritt zum Cloud & DevOps Engineer.",
        bullets: [
          "Kein technischer Eingangstest für den Einstieg in Modul 1",
          "Tägliches Live-Mentoring und geführte Cloud-Labs",
          "Reale Milestone-Projekte für dein Bewerbungsportfolio",
        ],
      },
      {
        title: "Fachkräfte mit IT-Erfahrung",
        badge: "Gezielte Spezialisierung",
        desc: "Systemadministratoren, Entwickler oder IT-Spezialisten buchen gezielt einzelne Module wie DevOps Engineering (CI/CD, Kubernetes, Terraform) oder Azure Fundamentals.",
        bullets: [
          "Direkteinstieg in Modul 2 (DevOps) oder Modul 3 (Azure)",
          "Kompakte Weiterbildung in 2 bis 6 Monaten",
          "Gezielte Vorbereitung auf AWS- und Azure-Zertifizierungen",
        ],
      },
    ],
    programSelectorH2: "AWS & DevOps Weiterbildung: Programme und Dauer",
    programSelectorSubtitle:
      "Wähle zwischen dem 8-monatigen Komplettpaket oder einzelnen Modul-Kombinationen je nach deinem Vorwissen.",
    modules: [
      {
        id: 1,
        label: "Modul 1",
        title: "AWS Solutions Architect",
        duration: "3 Monate",
        color: PRIMARY,
        prerequisite: "Keine IT-Vorkenntnisse erforderlich (inkl. Linux & Netzwerk-Grundlagen).",
        project: "Hochverfügbare Multi-Tier AWS Cloud-Architektur",
        topics: [
          "AWS Cloud Grundlagen & Linux/Netzwerk-Basis",
          "EC2, S3, VPC, IAM, Route 53 & RDS",
          "Cloud Architecture Best Practices (Well-Architected)",
          "High Availability, Auto Scaling & CloudFormation",
          "AWS SAA-C03 Zertifizierungsvorbereitung",
        ],
      },
      {
        id: 2,
        label: "Modul 2",
        title: "DevOps Engineering",
        duration: "3 Monate",
        color: SECONDARY,
        prerequisite: "Modul 1 oder fundierte Cloud- und Linux-Grundkenntnisse.",
        project: "Vollautomatisierte CI/CD-Pipeline auf Kubernetes mit Terraform",
        topics: [
          "CI/CD Pipelines mit GitHub Actions & Jenkins",
          "Docker Containerisierung & Image-Management",
          "Kubernetes Orchestrierung & Cluster-Betrieb",
          "Terraform & Infrastructure as Code (IaC)",
          "Monitoring & Logging mit Prometheus, Grafana & CloudWatch",
        ],
      },
      {
        id: 3,
        label: "Modul 3",
        title: "Azure Fundamentals",
        duration: "2 Monate",
        color: ACCENT,
        prerequisite: "Cloud-Grundverständnis (empfohlen nach Modul 1 oder 2).",
        project: "Multi-Cloud & Hybrid-Cloud Deployment (AWS + Azure)",
        topics: [
          "Azure Core Services (VMs, Storage, Virtual Networks)",
          "Microsoft Entra ID (Azure AD) & Governance",
          "Azure DevOps & Azure Kubernetes Service (AKS)",
          "Hybrid-Cloud-Strategien & Cost Management",
          "Microsoft Azure AZ-900 Prüfungsvorbereitung",
        ],
      },
    ],
    programs: [
      {
        id: "full",
        anchorId: "aws-eng-for-beginner",
        title: "AWS/DevOps Engineering + Azure Fundamentals",
        subtitle: "Vollständiger Lernpfad (Alle 3 Module)",
        badge: "Modul 1 + 2 + 3 · 8 Monate",
        moduleIds: [1, 2, 3],
        startsAt: 1,
        duration: "8 Monate",
        schedule: "09:00–16:45 Uhr Berlin",
        capacity: "Max. 15 Plätze",
        language: "Unterrichtssprache: Englisch",
        dates: ["24 Aug 2026", "12 Okt 2026", "30 Nov 2026", "28 Dez 2026"],
        recommended: true,
        description:
          "Das komplette Paket — von AWS Cloud Architektur über DevOps Engineering bis Azure Fundamentals. Ideal für Quereinsteiger und angehende Multi-Cloud-Engineers.",
      },
      {
        id: "aws-devops",
        anchorId: "aws-eng-for-pro",
        title: "AWS/DevOps Engineering",
        subtitle: "Fokus AWS & CI/CD",
        badge: "Modul 1 + 2 · 6 Monate",
        moduleIds: [1, 2],
        startsAt: 1,
        duration: "6 Monate",
        schedule: "09:00–16:45 Uhr Berlin",
        capacity: "Max. 15 Plätze",
        language: "Unterrichtssprache: Englisch",
        dates: ["24 Aug 2026", "12 Okt 2026", "30 Nov 2026"],
        recommended: false,
        description:
          "AWS Cloud Architektur und DevOps Engineering in einem 6-monatigen Programm — inklusive Docker, Kubernetes, Terraform und CI/CD-Pipelines.",
      },
      {
        id: "architect",
        title: "AWS Solutions Architect",
        subtitle: "Fokus Cloud Architektur",
        badge: "Modul 1 · 3 Monate",
        moduleIds: [1],
        startsAt: 1,
        duration: "3 Monate",
        schedule: "09:00–16:45 Uhr Berlin",
        capacity: "Max. 15 Plätze",
        language: "Unterrichtssprache: Englisch",
        dates: ["24 Aug 2026", "12 Okt 2026"],
        recommended: false,
        description:
          "Spezialisierung auf AWS Cloud-Infrastruktur und gezielte Vorbereitung auf die AWS Certified Solutions Architect – Associate (SAA-C03) Prüfung.",
      },
      {
        id: "devops",
        title: "DevOps Engineering",
        subtitle: "Einstieg mit Cloud-Vorwissen",
        badge: "Modul 2 · 3 Monate",
        moduleIds: [2],
        startsAt: 2,
        duration: "3 Monate",
        schedule: "09:00–16:45 Uhr Berlin",
        capacity: "Max. 15 Plätze",
        language: "Unterrichtssprache: Englisch",
        dates: ["12 Okt 2026", "30 Nov 2026"],
        recommended: false,
        description:
          "Direkteinstieg in Modul 2 für Teilnehmende mit AWS- und Linux-Grundkenntnissen: Fokus auf Docker, Kubernetes, Terraform, Jenkins und Monitoring.",
      },
      {
        id: "azure",
        title: "Azure Fundamentals",
        subtitle: "Multi-Cloud Erweiterung",
        badge: "Modul 3 · 2 Monate",
        moduleIds: [3],
        startsAt: 3,
        duration: "2 Monate",
        schedule: "09:00–16:45 Uhr Berlin",
        capacity: "Max. 15 Plätze",
        language: "Unterrichtssprache: Englisch",
        dates: ["30 Nov 2026", "28 Dez 2026"],
        recommended: false,
        description:
          "2-monatiges Aufbaumodul für Microsoft Azure Services, Hybrid-Cloud-Konzepte und die Vorbereitung auf die AZ-900 Zertifizierung.",
      },
    ],
    curriculumH2: "Inhalte der AWS & DevOps Weiterbildung",
    curriculumIntro:
      "Drei aufeinander aufbauende Module führen dich von den AWS-Grundlagen über automatisierte Container-Pipelines bis in Multi-Cloud-Umgebungen mit Microsoft Azure.",
    formatH2: "Ablauf und Lernformat",
    formatIntro:
      "Unsere AWS & DevOps Programme finden im strukturierten Vollzeit-Live-Format statt: Vorbereitung, täglicher Live-Unterricht und betreute Hands-on-Labs.",
    formatHighlights: [
      {
        title: "Tägliche Cloud- & DevOps-Labs",
        desc: "Montag bis Freitag von 09:00 bis 16:45 Uhr Berliner Zeit. Du arbeitest direkt in echten AWS-Accounts, Kubernetes-Clustern und Terraform-Umgebungen.",
      },
      {
        title: "Unterrichtssprache: Englisch",
        desc: "Cloud-Konsolen, CLI-Tools und Zertifizierungsprüfungen sind international auf Englisch standardisiert — unsere Mentoren begleiten dich auf Englisch und Deutsch.",
      },
      {
        title: "Reale Milestone-Projekte",
        desc: "Nach jedem Modul stellst du ein dokumentiertes Infrastruktur- und CI/CD-Projekt in dein GitHub-Portfolio.",
      },
    ],
    summaryTable: [
      ["Zeitplan", "Mo–Fr, 09:00–16:45 Uhr (Berlin)"],
      ["Dauer", "8 Monate (Vollpaket) · 6 Mo. (M1+M2) · 2–3 Mo. (Einzelmodul)"],
      ["Lehrplan", "Modul 1 (AWS) + Modul 2 (DevOps) + Modul 3 (Azure)"],
      ["Kapazität", "Max. 15 Plätze pro Kurs"],
      ["Sprache", "Unterrichtssprache: Englisch"],
      ["Zertifikat", "AZAV-Zertifikat + Vorbereitung auf AWS SAA-C03 & AZ-900"],
    ],
    fundingH2: "AWS & DevOps Weiterbildung mit Bildungsgutschein",
    fundingText:
      "Alle 5 Modulkombinationen sind nach AZAV zertifiziert. Mit einem Bildungsgutschein der Agentur für Arbeit oder des Jobcenters werden die Studiengebühren zu 100 % übernommen. Für Unternehmen und Beschäftigte steht die Förderung nach dem Qualifizierungschancengesetz bereit.",
    fundingBullets: [
      "100 % Übernahme der Lehrgangsgebühren über Bildungsgutschein",
      "Einzelmodule und Gesamtpaket flexibel förderbar",
      "Persönliche Unterstützung bei der Antragstellung innerhalb von 24 Stunden",
    ],
    fundingLinkLabel: "Bildungsgutschein beantragen",
    fundingLinkTo: "/bildungsgutschein/",
    qcgLinkLabel: "Qualifizierungschancengesetz (QCG)",
    qcgLinkTo: "/qualifizierungschancengesetz/",
    careerH2: "Berufe nach der AWS & DevOps Weiterbildung",
    careerIntro:
      "Unternehmen jeder Größe verlagern ihre Infrastruktur in die Cloud. Die folgenden Gehaltsdaten stammen aus dem StepStone Gehaltsreport 2026 für Deutschland.",
    careerRoles: [
      {
        title: "Cloud Engineer",
        salaryMedian: "61.500 €",
        salaryRange: "52.000 – 74.000 €",
        salarySource: "StepStone Gehaltsdaten 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Plant, migriert und betreibt sichere, hochverfügbare Cloud-Infrastrukturen auf Amazon Web Services (AWS) und Microsoft Azure.",
        guideLabel: "Berufsbild & Gehalt: Cloud Engineer",
        guideUrl: "/ratgeber/cloud-engineer/",
      },
      {
        title: "DevOps Engineer",
        salaryMedian: "64.800 €",
        salaryRange: "55.000 – 78.500 €",
        salarySource: "StepStone Gehaltsdaten 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Automatisiert Software-Bereitstellungen mit CI/CD-Pipelines, Docker, Kubernetes und Infrastructure as Code (Terraform).",
        guideLabel: "Was macht ein DevOps Engineer? Aufgaben & Gehalt",
        guideUrl: "/ratgeber/devops-engineer/",
      },
      {
        title: "AWS Solutions Architect",
        salaryMedian: "68.400 €",
        salaryRange: "58.000 – 84.000 €",
        salarySource: "StepStone Gehaltsdaten 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Entwirft skalierbare, kosteneffiziente und ausfallsichere Cloud-Architekturen nach dem AWS Well-Architected Framework.",
        guideLabel: "Ratgeber: AWS Zertifizierungen im Überblick",
        guideUrl: "/ratgeber/aws-zertifizierungen/",
      },
    ],
    clusterH2: "Ratgeber zum Thema",
    clusterIntro:
      "Vertiefe dein Wissen über DevOps-Berufe, Cloud-Gehälter und die wichtigsten AWS-Zertifizierungen.",
    clusterGuides: [
      {
        title: "DevOps Engineer: Aufgaben, Gehalt und Einstieg",
        badge: "Berufsratgeber (Empfohlen)",
        desc: "Was ein DevOps Engineer im Alltag verantwortet, welche Tools Pflicht sind und was man in Deutschland verdient.",
        to: "/ratgeber/devops-engineer/",
      },
      {
        title: "Was ist DevOps? Prinzipien, CI/CD und Kultur einfach erklärt",
        badge: "Grundlagen-Ratgeber",
        desc: "Wie DevOps die Zusammenarbeit zwischen Softwareentwicklung und IT-Betrieb revolutioniert.",
        to: "/ratgeber/was-ist-devops/",
      },
      {
        title: "AWS Zertifizierungen: Welche Prüfung sich zuerst lohnt",
        badge: "Zertifizierungs-Guide",
        desc: "Von Cloud Practitioner bis Solutions Architect Associate: Der klare Fahrplan für deine AWS-Prüfungen.",
        to: "/ratgeber/aws-zertifizierungen/",
      },
      {
        title: "AWS Cloud Practitioner (CLF-C02): Prüfungsleitfaden",
        badge: "Prüfungs-Guide",
        desc: "Aufbau, Themengebiete und Vorbereitungstipps für das Einstiegszertifikat von Amazon Web Services.",
        to: "/ratgeber/aws-cloud-practitioner/",
      },
    ],
    whyH2: "Warum Clarusway für die AWS & DevOps Weiterbildung?",
    whyIntro:
      "Als offizieller AWS Partner verbinden wir anerkannte Zertifizierungspfade mit täglicher Infrastruktur-Praxis.",
    whyItems: [
      { title: "AWS Select Tier Consulting Partner", desc: "Du lernst mit aktuellen AWS-Architekturstandards und Mentoren aus der realen Cloud-Praxis." },
      { title: "Multi-Cloud-Kompetenz (AWS + Azure)", desc: "Neben AWS und DevOps lernst du in Modul 3 auch Microsoft Azure — ein starker Vorteil im deutschen Mittelstand." },
      { title: "Infrastructure as Code & Kubernetes", desc: "Intensives Hands-on-Training mit Docker, Kubernetes, Terraform und automatisierten CI/CD-Pipelines." },
      { title: "AZAV-zertifiziert & 100 % förderbar", desc: "Alle 5 Programmvarianten können über einen Bildungsgutschein oder QCG gefördert werden." },
      { title: "Live-Klassen mit max. 15 Plätzen", desc: "Direkte Unterstützung beim Debugging von Cloud-Deployments und Pipelines in Echtzeit." },
      { title: "Karriere-Coaching bis zum Job", desc: "Optimierung von Lebenslauf, GitHub-Portfolio und Vorbereitung auf technische Cloud-Interviews." },
    ],
    partnerHighlight: {
      badge: "Offizielle Partnerschaft",
      title: "AWS Select Tier Consulting Partner",
      desc: "Clarusway ist offizieller Partner im Amazon Web Services Partner Network. Unsere Teilnehmenden trainieren an praxiserprobten Cloud-Szenarien und bereiten sich gezielt auf offizielle AWS-Zertifizierungen vor.",
    },
    reviewsH2: "Erfahrungen von Absolventen",
    reviews: [
      {
        initials: "DK",
        name: "DH Kim",
        role: "Absolvent AWS & DevOps",
        platform: "Google Rezensionen",
        platformUrl: "https://www.google.com/maps",
        quote:
          "Die Mentoren sind immer erreichbar und gehen wirklich auf jeden einzeln ein. Ich habe in wenigen Monaten mehr über reale Cloud-Infrastruktur gelernt als im gesamten Studium.",
      },
      {
        initials: "M",
        name: "Morad",
        role: "Absolvent Cloud & DevOps Track",
        platform: "Course Report",
        platformUrl: "https://www.coursereport.com/schools/clarusway",
        quote:
          "Clarusway hat mir geholfen, ohne Vorkenntnisse in die Cloud-IT einzusteigen. Das Live-Format und die echten Terraform- und Kubernetes-Projekte machen den Unterschied.",
      },
    ],
    faqH2: "Häufige Fragen zur AWS & DevOps Weiterbildung",
    faqs: [
      {
        q: "Was macht ein DevOps Engineer?",
        a: "Ein DevOps Engineer verbindet Softwareentwicklung und IT-Betrieb. Er automatisiert Build-, Test- und Deployment-Prozesse über CI/CD-Pipelines, verwaltet Container mit Docker und Kubernetes und stellt Cloud-Infrastrukturen über Code (Terraform) bereit.",
      },
      {
        q: "Brauche ich Vorkenntnisse für die AWS & DevOps Weiterbildung?",
        a: "Für das 8-monatige Komplettpaket und den Einstieg in Modul 1 sind keine IT-Vorkenntnisse erforderlich — Linux- und Netzwerkgrundlagen sind integriert. Für den Direkteinstieg in Modul 2 (DevOps) oder Modul 3 (Azure) werden entsprechende Cloud-Grundkenntnisse vorausgesetzt.",
      },
      {
        q: "Auf welche AWS-Zertifizierung bereitet der Kurs vor?",
        a: "Modul 1 bereitet gezielt auf die Prüfung zum AWS Certified Solutions Architect – Associate (SAA-C03) vor. Modul 2 legt das Fundament für DevOps-Zertifizierungen, und Modul 3 bereitet auf Microsoft Azure Fundamentals (AZ-900) vor.",
      },
      {
        q: "Sind die Prüfungsgebühren enthalten?",
        a: "Bei einer Förderung über den Bildungsgutschein klären wir die Übernahme der offiziellen Zertifizierungsprüfungen und Lernmaterialien direkt im Rahmen deines individuellen Förderangebots.",
      },
      {
        q: "Wird die Weiterbildung mit Bildungsgutschein gefördert?",
        a: "Ja. Alle fünf Programmvarianten sind nach AZAV zertifiziert und zu 100 % über einen Bildungsgutschein der Agentur für Arbeit oder des Jobcenters sowie über das Qualifizierungschancengesetz förderfähig.",
      },
      {
        q: "Wann startet die nächste Gruppe?",
        a: "Neue Kohorten starten regelmäßig (nächste Termine u. a. 24. August 2026, 12. Oktober 2026, 30. November 2026 und 28. Dezember 2026). Den passenden Termin stimmen wir im Beratungsgespräch auf deinen Bildungsgutschein ab.",
      },
      {
        q: "In welcher Sprache findet der Unterricht statt?",
        a: "Die Unterrichtssprache ist Englisch, da AWS, Azure, Kubernetes und Terraform weltweit auf Englisch dokumentiert und geprüft werden. Unsere Beratung vor und während der Weiterbildung steht dir auf Deutsch und Englisch zur Verfügung.",
      },
    ],
    relatedH2: "Weitere IT-Kurse",
    relatedCourses: [
      {
        title: "Kubernetes CKAD Zertifikat Kurs",
        to: "/it-kurse/kubernetes-ckad-zertifikat-kurs/",
        duration: "4 Wochen",
        nextStart: "12 Okt 2026",
        badge: "Kubernetes Spezialisierung",
      },
      {
        title: "Cyber Security Weiterbildung",
        to: "/it-kurse/cyber-security-weiterbildung/",
        duration: "4 Module",
        nextStart: "24 Aug 2026",
        badge: "SOC & AWS Cloud Security",
      },
      {
        title: "AWS Solutions Architect Weiterbildung",
        to: "/it-kurse/aws-solutions-architect-weiterbildung/",
        duration: "3 Monate",
        nextStart: "24 Aug 2026",
        badge: "Modul 1 Fokus",
      },
    ],
    ctaH2: "Starte deine AWS & DevOps Weiterbildung",
    ctaText:
      "Lass dich kostenlos beraten — wir prüfen deinen Anspruch auf einen Bildungsgutschein und stellen dein passendes Cloud-Programm zusammen.",
  },

  "aws-solutions-architect": {
    key: "aws-solutions-architect",
    slugDe: "/it-kurse/aws-solutions-architect-weiterbildung/",
    slugEn: "/it-courses/aws-solutions-architect/",
    pdfFileName: "clarusway-aws-solutions-architect-lehrplan.pdf",
    metaTitle: "AWS Solutions Architect Weiterbildung | Clarusway",
    metaDescription:
      "In 3 Monaten zum AWS Solutions Architect: EC2, S3, VPC, IAM, Hochverfügbarkeit und SAA-C03 Prüfungsvorbereitung. 100 % förderbar mit Bildungsgutschein.",
    breadcrumbLabel: "AWS Solutions Architect Weiterbildung",
    eyebrow: "Programm: AWS Solutions Architect (Modul 1)",
    h1: "AWS Solutions Architect Weiterbildung mit Bildungsgutschein",
    heroIntro:
      "Die AWS Solutions Architect Weiterbildung bei Clarusway ist ein 3-monatiges Vollzeit-Online-Programm, in dem du lernst, sichere, skalierbare und hochverfügbare Cloud-Architekturen auf Amazon Web Services zu entwerfen — inklusive gezielter Vorbereitung auf die AWS Solutions Architect Associate (SAA-C03) Prüfung und 100 % Förderung mit Bildungsgutschein.",
    heroSubnote:
      "3 Monate Vollzeit · Offizieller AWS Select Tier Partner · Nahtlos erweiterbar um DevOps Engineering.",
    heroBadges: ["AWS SAA-C03", "EC2 & S3", "VPC & IAM", "RDS & DynamoDB", "CloudFormation", "Auto Scaling"],
    terminalTitle: "aws_well_architected.yaml",
    terminalLines: [
      { text: "AWSTemplateFormatVersion: '2010-09-09'", color: "#60a5fa" },
      { text: "Resources: MultiAZProductionVPC & AutoScalingGroup", color: "#e5e7eb" },
      { text: "$ aws cloudformation deploy --stack-name prod-arch", color: "#fde047" },
      { text: "✓ Stack CREATE_COMPLETE · SAA-C03 Ready", color: "#4ade80" },
    ],
    infoStrip: [
      ["3 Monate", "Kompakte Vollzeit-Dauer"],
      ["Englisch", "Unterrichtssprache (Live)"],
      ["SAA-C03", "Prüfungsvorbereitung inklusive"],
      ["Max. 15", "Teilnehmende pro Klasse"],
      ["AZAV", "100 % Bildungsgutschein"],
    ],
    audienceH2: "Für wen eignet sich die AWS Solutions Architect Weiterbildung?",
    audienceIntro:
      "Das Programm richtet sich an Einsteiger und IT-Fachkräfte, die in drei Monaten ein anerkanntes Cloud-Fundament aufbauen möchten.",
    audienceCards: [
      {
        title: "Quereinsteiger in Cloud Computing",
        badge: "Mit Linux- & Netzwerk-Basis",
        desc: "Du startest bei den Grundlagen von Linux, Netzwerken und Cloud Computing und baust in 12 Wochen eigene AWS-Architekturen auf.",
        bullets: ["Kein Vorwissen in der Cloud nötig", "Tägliche Hands-on-Labs in der AWS Console", "Architektur-Abschlussprojekt"],
      },
      {
        title: "IT-Administratoren & Entwickler",
        badge: "Zertifizierungs-Upgrade",
        desc: "Systemadministratoren und Softwareentwickler qualifizieren sich gezielt für Cloud-Migrationen und die SAA-C03 Zertifizierung.",
        bullets: ["Well-Architected Framework in der Praxis", "Infrastructure as Code mit CloudFormation", "Optional erweiterbar um DevOps (Modul 2)"],
      },
    ],
    programSelectorH2: "AWS Solutions Architect Weiterbildung: Programme und Dauer",
    programSelectorSubtitle:
      "Absolviere das 3-monatige AWS Solutions Architect Programm einzeln oder erweitere es um DevOps Engineering.",
    modules: [
      {
        id: 1,
        label: "Modul 1",
        title: "AWS Solutions Architect",
        duration: "3 Monate",
        color: PRIMARY,
        topics: ["Linux & Netzwerk-Grundlagen", "IAM, VPC, EC2, S3, Route 53", "RDS, DynamoDB & Caching", "High Availability & SAA-C03 Prep"],
      },
      {
        id: 2,
        label: "Modul 2 (Optional)",
        title: "DevOps Engineering",
        duration: "3 Monate",
        color: SECONDARY,
        topics: ["Docker & Kubernetes", "CI/CD mit Jenkins & GitHub Actions", "Terraform & Monitoring"],
      },
    ],
    programs: [
      {
        id: "saa-only",
        title: "AWS Solutions Architect (Modul 1)",
        subtitle: "Eigenständiger 3-Monats-Kurs",
        badge: "Modul 1 · 3 Monate",
        moduleIds: [1],
        startsAt: 1,
        duration: "3 Monate",
        schedule: "09:00–16:45 Uhr Berlin",
        capacity: "Max. 15 Plätze",
        language: "Unterrichtssprache: Englisch",
        dates: ["24 Aug 2026", "12 Okt 2026", "30 Nov 2026"],
        recommended: true,
        description:
          "Fokussierte 3-monatige Weiterbildung zur Planung und Bereitstellung sicherer AWS-Cloud-Infrastrukturen inklusive SAA-C03 Prüfungsvorbereitung.",
      },
      {
        id: "saa-plus-devops",
        title: "AWS Solutions Architect + DevOps Engineering",
        subtitle: "Kombinierter Pfad (Modul 1 + 2)",
        badge: "Modul 1 + 2 · 6 Monate",
        moduleIds: [1, 2],
        startsAt: 1,
        duration: "6 Monate",
        schedule: "09:00–16:45 Uhr Berlin",
        capacity: "Max. 15 Plätze",
        language: "Unterrichtssprache: Englisch",
        dates: ["24 Aug 2026", "12 Okt 2026"],
        recommended: false,
        description:
          "Kombiniere AWS Cloud Architektur direkt mit Docker, Kubernetes, Terraform und CI/CD-Automatisierung.",
      },
    ],
    curriculumH2: "Inhalte der AWS Solutions Architect Weiterbildung",
    curriculumIntro:
      "Alle Kernservices von Amazon Web Services praxisnah an realen Infrastruktur-Szenarien trainiert.",
    specialFeature: {
      h2: "Vorbereitung auf die AWS Solutions Architect Associate Prüfung",
      intro:
        "Die Zertifizierung AWS Certified Solutions Architect – Associate (SAA-C03) gehört zu den weltweit am stärksten nachgefragten Cloud-Nachweisen. Unser Lehrplan deckt alle vier offiziellen Prüfungsdomänen vollständig ab:",
      cards: [
        {
          badge: "Domäne 1 & 2",
          title: "Sichere & Resiliente Architekturen",
          desc: "IAM-Richtlinien, VPC-Netzwerksegmentierung, Multi-AZ-Design, Load Balancing und Auto Scaling.",
        },
        {
          badge: "Domäne 3",
          title: "Hochleistungsfähige Systeme",
          desc: "Auswahl optimaler Compute-, Datenbank- (RDS, Aurora, DynamoDB) und Storage-Lösungen (S3, EBS, EFS).",
        },
        {
          badge: "Domäne 4",
          title: "Kostenoptimierte Cloud-Umgebungen",
          desc: "Ressourcenplanung, Serverless-Architekturen mit AWS Lambda und kontinuierliche Kostenkontrolle.",
        },
      ],
      linkLabel: "Ratgeber: AWS Zertifizierungen im Vergleich",
      linkTo: "/ratgeber/aws-zertifizierungen/",
    },
    formatH2: "Ablauf und Lernformat",
    formatIntro: "3 Monate intensiver Vollzeit-Live-Unterricht in 15er-Kleingruppen.",
    formatHighlights: [
      { title: "Live-Labs in der AWS Console", desc: "Tägliches praktisches Aufsetzen von VPCs, Load Balancern, Datenbanken und CloudFormation-Stacks." },
      { title: "Unterrichtssprache: Englisch", desc: "Optimale Vorbereitung auf die englischsprachige AWS-Prüfung und internationale Cloud-Teams." },
      { title: "Prüfungssimulationen inklusive", desc: "Regelmäßige Mock-Exams und Architektur-Reviews mit zertifizierten AWS-Trainern." },
    ],
    summaryTable: [
      ["Zeitplan", "Mo–Fr, 09:00–16:45 Uhr (Berlin)"],
      ["Dauer", "3 Monate"],
      ["Zertifizierungsziel", "AWS Certified Solutions Architect – Associate (SAA-C03)"],
      ["Kapazität", "Max. 15 Plätze"],
      ["Sprache", "Unterrichtssprache: Englisch"],
      ["Förderung", "AZAV-zertifiziert · 100 % Bildungsgutschein"],
    ],
    fundingH2: "AWS Solutions Architect Weiterbildung mit Bildungsgutschein",
    fundingText:
      "Der 3-monatige Kurs ist nach AZAV zertifiziert und kann zu 100 % über einen Bildungsgutschein der Agentur für Arbeit oder des Jobcenters sowie über das Qualifizierungschancengesetz gefördert werden.",
    fundingBullets: [
      "100 % Kostenübernahme mit Bildungsgutschein",
      "Kompakte 3-Monats-Maßnahme für schnellen Jobeinstieg",
      "Anschlussförderung für DevOps Engineering möglich",
    ],
    fundingLinkLabel: "Bildungsgutschein beantragen",
    fundingLinkTo: "/bildungsgutschein/",
    qcgLinkLabel: "Qualifizierungschancengesetz (QCG)",
    qcgLinkTo: "/qualifizierungschancengesetz/",
    careerH2: "Berufe nach der AWS Solutions Architect Weiterbildung",
    careerIntro: "Mit fundierten AWS-Kenntnissen qualifizierst du dich für zentrale Rollen in der Cloud-Transformation.",
    careerRoles: [
      {
        title: "AWS Solutions Architect",
        salaryMedian: "68.400 €",
        salaryRange: "58.000 – 84.000 €",
        salarySource: "StepStone Gehaltsdaten 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Konzipiert sichere, skalierbare Cloud-Infrastrukturen und begleitet Unternehmen bei der Migration in die AWS Cloud.",
        guideLabel: "Ratgeber: AWS Zertifizierungen",
        guideUrl: "/ratgeber/aws-zertifizierungen/",
      },
      {
        title: "Cloud Engineer",
        salaryMedian: "61.500 €",
        salaryRange: "52.000 – 74.000 €",
        salarySource: "StepStone Gehaltsdaten 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Implementiert, überwacht und optimiert Cloud-Ressourcen, Netzwerke und Datenbanken im täglichen Betrieb.",
        guideLabel: "Berufsbild: Cloud Engineer",
        guideUrl: "/ratgeber/cloud-engineer/",
      },
    ],
    clusterH2: "Ratgeber zum Thema",
    clusterIntro: "Erfahre mehr über AWS-Zertifizierungen, Prüfungsanforderungen und Karrierewege in der Cloud.",
    clusterGuides: [
      {
        title: "AWS Zertifizierungen: Welche Prüfung sich zuerst lohnt",
        badge: "Zertifizierungs-Guide (Empfohlen)",
        desc: "Vergleich von Cloud Practitioner, Solutions Architect Associate und DevOps Professional.",
        to: "/ratgeber/aws-zertifizierungen/",
      },
      {
        title: "Cloud Engineer: Aufgaben, Gehalt und Einstieg",
        badge: "Berufsratgeber",
        desc: "Welche Kompetenzen Arbeitgeber von angehenden Cloud Engineers erwarten.",
        to: "/ratgeber/cloud-engineer/",
      },
      {
        title: "AWS Cloud Practitioner: Prüfungsleitfaden",
        badge: "Prüfungs-Guide",
        desc: "Alles zur Grundlagenprüfung CLF-C02 und wann sich der direkte Einstieg in SAA-C03 lohnt.",
        to: "/ratgeber/aws-cloud-practitioner/",
      },
    ],
    whyH2: "Warum Clarusway für die AWS Solutions Architect Weiterbildung?",
    whyIntro: "Lerne direkt bei einem offiziellen AWS Select Tier Partner mit Fokus auf echte Architektur-Projekte.",
    whyItems: [
      { title: "Offizieller AWS Select Tier Partner", desc: "Lehrplan nach aktuellen AWS Well-Architected Standards." },
      { title: "Gezielte SAA-C03 Prüfungsvorbereitung", desc: "Inklusive Praxis-Labs, Architektur-Szenarien und Prüfungssimulationen." },
      { title: "Kompakt in 3 Monaten", desc: "Ideal für einen schnellen, zertifizierten Einstieg in den Cloud-Arbeitsmarkt." },
      { title: "100 % Förderung mit Bildungsgutschein", desc: "AZAV-zertifiziert für Agentur für Arbeit, Jobcenter und QCG." },
      { title: "Erweiterbar zum DevOps Engineer", desc: "Nahtloser Übergang in Modul 2 (Docker, Kubernetes, Terraform) möglich." },
      { title: "Live-Unterricht in 15er-Gruppen", desc: "Persönliches Mentoring statt vorproduzierter Videokurse." },
    ],
    reviewsH2: "Erfahrungen von Absolventen",
    reviews: [
      {
        initials: "DK",
        name: "DH Kim",
        role: "Absolvent AWS Programm",
        platform: "Google Rezensionen",
        platformUrl: "https://www.google.com/maps",
        quote: "Durch die täglichen AWS-Labs und Mock-Prüfungen habe ich die Solutions Architect Zertifizierung beim ersten Versuch bestanden.",
      },
    ],
    faqH2: "Häufige Fragen zur AWS Solutions Architect Weiterbildung",
    faqs: [
      {
        q: "Was macht ein AWS Solutions Architect?",
        a: "Ein AWS Solutions Architect entwirft Cloud-Infrastrukturen auf Amazon Web Services. Er wählt passende Compute-, Netzwerk-, Speicher- und Datenbankdienste aus, damit Anwendungen sicher, ausfallsicher und kosteneffizient laufen.",
      },
      {
        q: "Ist die Prüfungsgebühr enthalten?",
        a: "Bei Förderung über einen Bildungsgutschein prüfen wir die Übernahme der offiziellen AWS SAA-C03 Prüfungsgebühr direkt im Rahmen deines Maßnahmeangebots.",
      },
      {
        q: "Brauche ich Vorkenntnisse?",
        a: "Nein, das Modul beginnt mit den notwendigen Grundlagen in Linux, Netzwerken und Cloud Computing, bevor die fortgeschrittenen AWS-Services behandelt werden.",
      },
      {
        q: "Wird der Kurs gefördert?",
        a: "Ja, die Weiterbildung ist AZAV-zertifiziert und zu 100 % über einen Bildungsgutschein oder das Qualifizierungschancengesetz förderfähig.",
      },
      {
        q: "In welcher Sprache findet der Unterricht statt?",
        a: "Die Unterrichtssprache ist Englisch. Unsere Beratung zur Förderung steht dir auf Deutsch und Englisch zur Verfügung.",
      },
    ],
    relatedH2: "Weitere IT-Kurse",
    relatedCourses: [
      {
        title: "AWS & DevOps Weiterbildung",
        to: "/it-kurse/aws-devops-weiterbildung/",
        duration: "8 Monate",
        nextStart: "24 Aug 2026",
        badge: "Alle 3 Cloud-Module",
      },
      {
        title: "Kubernetes CKAD Zertifikat Kurs",
        to: "/it-kurse/kubernetes-ckad-zertifikat-kurs/",
        duration: "4 Wochen",
        nextStart: "12 Okt 2026",
        badge: "Container-Spezialisierung",
      },
    ],
    ctaH2: "Starte deine AWS Solutions Architect Weiterbildung",
    ctaText: "Sichere dir jetzt dein kostenloses Beratungsgespräch zur Förderung mit Bildungsgutschein.",
  },

  sdet: {
    key: "sdet",
    isShortTemplate: true,
    slugDe: "/it-kurse/sdet-weiterbildung/",
    slugEn: "/it-courses/software-development-engineer-in-test/",
    pdfFileName: "clarusway-sdet-weiterbildung-lehrplan.pdf",
    metaTitle: "SDET Weiterbildung: Testautomatisierung | Clarusway",
    metaDescription:
      "SDET Weiterbildung in Testautomatisierung & QA Engineering: Java, Selenium, Cypress, API-Testing und CI/CD. AZAV-zertifiziert, 100 % mit Bildungsgutschein.",
    breadcrumbLabel: "SDET Weiterbildung",
    eyebrow: "Programm: Software Development Engineer in Test (SDET)",
    h1: "SDET Weiterbildung: Software Development Engineer in Test",
    heroIntro:
      "Die SDET Weiterbildung bei Clarusway bildet dich im Live-Online-Unterricht zum Software Development Engineer in Test und Test Automation Engineer aus. Du lernst Java, SQL, Selenium, Cypress, API-Testing und CI/CD-Pipelines von Grund auf — AZAV-zertifiziert und zu 100 % über einen Bildungsgutschein förderfähig.",
    heroSubnote:
      "Ohne Vorkenntnisse startbar · Live-Unterricht in 15er-Kleingruppen · Hohe Nachfrage in der Qualitätssicherung.",
    heroBadges: ["Java", "Selenium", "Cypress", "REST API Testing", "SQL & JDBC", "Jenkins & CI/CD"],
    terminalTitle: "e2e_test_suite.java",
    terminalLines: [
      { text: "@Test public void verifyCheckoutFlow() {", color: "#60a5fa" },
      { text: "  driver.findElement(By.id('submit-order')).click();", color: "#e5e7eb" },
      { text: "  assertEquals(200, apiResponse.getStatusCode());", color: "#fde047" },
      { text: "}", color: "#60a5fa" },
      { text: "✓ 142 Automated Tests Passed in CI/CD Pipeline", color: "#4ade80" },
    ],
    infoStrip: [
      ["Vollzeit Live", "Mo–Fr · 09:00–16:45 Uhr"],
      ["Englisch", "Unterrichtssprache"],
      ["Ohne Vorwissen", "Einstieg für Quereinsteiger"],
      ["Max. 15", "Teilnehmende pro Klasse"],
      ["AZAV", "100 % Bildungsgutschein"],
    ],
    audienceH2: "Für wen eignet sich die SDET Weiterbildung?",
    audienceIntro:
      "Testautomatisierung ist einer der attraktivsten Einstiegswege in die Softwarebranche für strukturierte, analytisch denkende Quereinsteiger.",
    audienceCards: [
      {
        title: "Quereinsteiger ohne Programmierkenntnisse",
        badge: "Strukturierter Einstieg",
        desc: "Du lernst Programmierung (Java & SQL) gezielt für den Aufbau automatisierter Tests — ein fokussierterer Einstieg als die vollständige App-Entwicklung.",
        bullets: ["Kein technischer Eingangstest erforderlich", "Klare, wiederholbare Prüf- und Testmuster", "Hoher Bedarf an QA-Automatisierung in Deutschland"],
      },
      {
        title: "Manuelle Softwaretester & QA-Fachkräfte",
        badge: "Upgrade auf Automatisierung",
        desc: "Manuelle Tester erweitern ihr Profil um Programmierkenntnisse, Selenium-, Cypress- und API-Testframeworks für deutlich höhere Gehaltsstufen.",
        bullets: ["Vom manuellen Testen zum Automation Engineer", "Integration von Tests in GitHub & Jenkins Pipelines", "Praxisnahes Test-Framework-Portfolio"],
      },
    ],
    programSelectorH2: "SDET Weiterbildung: Programme und Dauer",
    programSelectorSubtitle: "Strukturierter Lernpfad von den IT- und Java-Grundlagen bis zum kompletten Testautomatisierungs-Framework.",
    modules: [
      {
        id: 1,
        label: "Modul 1",
        title: "IT-Grundlagen, Java Programmierung & SQL",
        duration: "Modul 1",
        color: PRIMARY,
        prerequisite: "Keine Vorkenntnisse erforderlich.",
        project: "Objektorientiertes Java- & Datenbank-Testprojekt",
        topics: [
          "IT-Fundamentals, Git & GitHub Versionskontrolle",
          "Core Java & Objektorientierte Programmierung (OOP)",
          "Relationale Datenbanken, SQL & JDBC",
          "Grundlagen der Software-Qualitätssicherung (ISTQB-Konzepte)",
        ],
      },
      {
        id: 2,
        label: "Modul 2",
        title: "UI-, API- & CI/CD-Testautomatisierung",
        duration: "Modul 2",
        color: SECONDARY,
        prerequisite: "Abschluss von Modul 1 oder Java-/SQL-Grundkenntnisse.",
        project: "End-to-End Testautomatisierungs-Framework (BDD / Cucumber)",
        topics: [
          "Web-UI-Automatisierung mit Selenium WebDriver & Cypress",
          "Behavior Driven Development (BDD) mit Cucumber, JUnit & TestNG",
          "REST-API-Testing mit Postman & RestAssured",
          "Kontinuierliche Testausführung in Jenkins & CI/CD-Pipelines",
        ],
      },
    ],
    programs: [],
    curriculumH2: "Inhalte der SDET Weiterbildung",
    curriculumIntro:
      "Du baust sowohl das Programmierfundament in Java und SQL als auch moderne End-to-End-Testframeworks für Web-Oberflächen und Backend-APIs auf.",
    specialFeature: {
      h2: "Was ist ein SDET?",
      intro:
        "SDET steht für Software Development Engineer in Test. Während klassische Tester Software manuell durchklicken, entwickelt ein SDET automatisierte Prüfprogramme, die jeden neuen Code-Bestandteil vor der Veröffentlichung automatisch auf Fehler, Leistung und Sicherheit testen.",
      cards: [
        {
          badge: "Rolle",
          title: "Entwickler + Qualitätsingenieur",
          desc: "Ein SDET schreibt echten Programmcode in Java oder JavaScript, um Test-Frameworks für Web-Apps, Datenbanken und APIs zu bauen.",
        },
        {
          badge: "Marktvorteil",
          title: "Idealer Einstieg in Tech-Teams",
          desc: "Da der Code-Umfang klar abgegrenzt ist, gelingt Quereinsteigern über Testautomatisierung oft ein besonders schneller Einstieg in Entwicklungsteams.",
        },
        {
          badge: "Gehalt",
          title: "51.500 € Mediangehalt",
          desc: "Automatisiertes Testing wird laut StepStone Gehaltsdaten (2026) deutlich höher vergütet als rein manuelles Software-Testing.",
        },
      ],
      linkLabel: "Ratgeber: Software Tester & Testautomatisierung",
      linkTo: "/ratgeber/software-tester/",
    },
    formatH2: "Ablauf und Lernformat",
    formatIntro: "Vollzeit-Live-Unterricht mit täglicher Praxis an realen Webanwendungen und APIs.",
    formatHighlights: [
      { title: "Live-Unterricht (09:00–16:45 Uhr)", desc: "Tägliche Betreuung in Kleingruppen von maximal 15 Teilnehmenden." },
      { title: "Unterrichtssprache: Englisch", desc: "Alle Test-Frameworks, Bug-Reports und Scrum-Prozesse im internationalen Standard." },
      { title: "Eigenes Test-Framework auf GitHub", desc: "Du präsentierst Arbeitgebern ein fertiges, lauffähiges Automatisierungs-Repository." },
    ],
    summaryTable: [
      ["Zeitplan", "Mo–Fr, 09:00–16:45 Uhr (Berlin)"],
      ["Lehrplan", "Java, SQL, Selenium, Cucumber, RestAssured, Jenkins"],
      ["Einstieg", "Ohne Vorkenntnisse möglich"],
      ["Kapazität", "Max. 15 Plätze"],
      ["Sprache", "Unterrichtssprache: Englisch"],
      ["Förderung", "AZAV-zertifiziert · 100 % Bildungsgutschein"],
    ],
    fundingH2: "SDET Weiterbildung mit Bildungsgutschein",
    fundingText:
      "Die SDET Weiterbildung ist nach AZAV zertifiziert. Mit einem Bildungsgutschein der Agentur für Arbeit oder des Jobcenters werden 100 % der Lehrgangskosten übernommen.",
    fundingBullets: [
      "100 % Übernahme der Kursgebühren mit Bildungsgutschein",
      "Förderung für Beschäftigte über das Qualifizierungschancengesetz",
      "Persönliche Unterstützung beim Förderantrag",
    ],
    fundingLinkLabel: "Bildungsgutschein beantragen",
    fundingLinkTo: "/bildungsgutschein/",
    qcgLinkLabel: "Qualifizierungschancengesetz (QCG)",
    qcgLinkTo: "/qualifizierungschancengesetz/",
    careerH2: "Berufe nach der SDET Weiterbildung",
    careerIntro: "Mit Testautomatisierung qualifizierst du dich für gefragte Rollen in der Software-Qualitätssicherung.",
    careerRoles: [
      {
        title: "SDET / Test Automation Engineer",
        salaryMedian: "51.500 €",
        salaryRange: "44.000 – 62.000 €",
        salarySource: "StepStone Gehaltsdaten 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Entwickelt automatisierte UI-, API- und Datenbanktests und integriert diese in CI/CD-Pipelines.",
        guideLabel: "Berufsbild: Software Tester & Gehalt",
        guideUrl: "/ratgeber/software-tester/",
      },
      {
        title: "QA Engineer",
        salaryMedian: "47.800 €",
        salaryRange: "41.500 – 56.000 €",
        salarySource: "StepStone Gehaltsdaten 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Verantwortet Teststrategien, Testpläne und die Freigabequalität von Software-Releases in agilen Scrum-Teams.",
        guideLabel: "Ratgeber: Testautomatisierung",
        guideUrl: "/ratgeber/testautomatisierung/",
      },
    ],
    clusterH2: "Ratgeber zum Thema",
    clusterIntro: "Erfahre mehr über Berufsbild, Gehalt und Werkzeuge in der Software-Qualitätssicherung.",
    clusterGuides: [
      {
        title: "Software Tester: Aufgaben, Gehalt und Einstieg",
        badge: "Berufsratgeber",
        desc: "Was Software Tester und QA Engineers in Deutschland verdienen und wie der Quereinstieg gelingt.",
        to: "/ratgeber/software-tester/",
      },
      {
        title: "Testautomatisierung: Werkzeuge und Karrierechancen",
        badge: "Fachartikel",
        desc: "Warum Unternehmen manuelle Tests durch Selenium, Cypress und API-Automatisierung ersetzen.",
        to: "/ratgeber/testautomatisierung/",
      },
    ],
    whyH2: "Warum Clarusway für die SDET Weiterbildung?",
    whyIntro: "Praxiserprobte Ausbildung in Testautomatisierung mit echtem Code-Portfolio.",
    whyItems: [
      { title: "Echte Testautomatisierung statt Klick-Theorie", desc: "Du lernst Java, SQL, Selenium, Cucumber und API-Testing im Praxiseinsatz." },
      { title: "Keine IT-Vorkenntnisse nötig", desc: "Schrittweiser Aufbau ab den Grundlagen." },
      { title: "AZAV-zertifiziert & 100 % förderbar", desc: "Kostenlose Teilnahme mit Bildungsgutschein möglich." },
      { title: "Agiles Arbeiten im Scrum-Prozess", desc: "Training mit Jira, Git, GitHub und CI/CD-Pipelines." },
      { title: "Maximal 15 Teilnehmende", desc: "Intensives Live-Mentoring und tägliches Code-Review." },
      { title: "Karriere-Support inklusive", desc: "Unterstützung bei Lebenslauf, Portfolio und technischen Interviews." },
    ],
    reviewsH2: "Erfahrungen von Absolventen",
    reviews: [
      {
        initials: "M",
        name: "Morad",
        role: "Absolvent QA & Automation",
        platform: "Course Report",
        platformUrl: "https://www.coursereport.com/schools/clarusway",
        quote: "Über den SDET-Pfad konnte ich ohne vorherigen IT-Hintergrund den Einstieg in ein Software-Team schaffen.",
      },
    ],
    faqH2: "Häufige Fragen zur SDET Weiterbildung",
    faqs: [
      {
        q: "Was ist der Unterschied zwischen Software Tester und SDET?",
        a: "Ein klassischer Software Tester prüft Anwendungen häufig manuell anhand von Testfällen. Ein SDET (Software Development Engineer in Test) beherrscht Programmierung und schreibt automatisierte Testskripte und Frameworks, die in der CI/CD-Pipeline automatisch ausgeführt werden.",
      },
      {
        q: "Welche Programmiersprache lerne ich?",
        a: "Du lernst im Kern Java und SQL sowie den Umgang mit Test-Frameworks wie Selenium WebDriver, Cucumber (BDD), JUnit/TestNG und RestAssured für API-Tests.",
      },
      {
        q: "Brauche ich Vorkenntnisse?",
        a: "Nein, das Programm startet bei den IT- und Programmiergrundlagen und erfordert keine Vorkenntnisse.",
      },
      {
        q: "Wird der Kurs gefördert?",
        a: "Ja, die SDET Weiterbildung ist nach AZAV zertifiziert und kann zu 100 % über einen Bildungsgutschein oder das Qualifizierungschancengesetz gefördert werden.",
      },
      {
        q: "In welcher Sprache findet der Unterricht statt?",
        a: "Die Unterrichtssprache ist Englisch. Unsere Förder- und Karriereberatung begleitet dich auf Deutsch und Englisch.",
      },
    ],
    relatedH2: "Weitere IT-Kurse",
    relatedCourses: [
      {
        title: "Full Stack Entwickler Weiterbildung",
        to: "/it-kurse/full-stack-entwickler-weiterbildung/",
        duration: "3 – 12 Monate",
        nextStart: "27 Jul 2026",
        badge: "Webentwicklung mit KI",
      },
      {
        title: "AWS & DevOps Weiterbildung",
        to: "/it-kurse/aws-devops-weiterbildung/",
        duration: "3 – 8 Monate",
        nextStart: "24 Aug 2026",
        badge: "Cloud & CI/CD",
      },
    ],
    ctaH2: "Starte deine SDET Weiterbildung",
    ctaText: "Prüfe jetzt kostenlos deine Förderfähigkeit für den Bildungsgutschein.",
  },

  "kubernetes-ckad": {
    key: "kubernetes-ckad",
    isShortTemplate: true,
    slugDe: "/it-kurse/kubernetes-ckad-zertifikat-kurs/",
    slugEn: "/it-courses/kubernetes-ckad-certification-course/",
    pdfFileName: "clarusway-kubernetes-ckad-lehrplan.pdf",
    metaTitle: "Kubernetes CKAD Zertifikat Kurs | Clarusway",
    metaDescription:
      "Kubernetes CKAD Zertifikat Kurs: In 4 Wochen zur Certified Kubernetes Application Developer Zertifizierung. Live-Online-Training mit Hands-on-Cluster-Labs.",
    breadcrumbLabel: "Kubernetes CKAD Zertifikat Kurs",
    eyebrow: "Programm: Kubernetes CKAD Zertifizierungskurs",
    h1: "Kubernetes CKAD Zertifikat Kurs: Vorbereitung in 4 Wochen",
    heroIntro:
      "Der Kubernetes CKAD Zertifikat Kurs bei Clarusway bereitet Entwickler, DevOps- und Cloud-Fachkräfte in 4 Wochen gezielt auf die praxisorientierte Prüfung zum Certified Kubernetes Application Developer (CKAD) der Cloud Native Computing Foundation (CNCF) vor — mit Live-Cluster-Labs und realen Prüfungsszenarien.",
    heroSubnote:
      "4 Wochen Intensivkurs · Für Teilnehmende mit Linux- & Container-Vorkenntnissen · Hands-on-Labs.",
    heroBadges: ["Kubernetes (K8s)", "CKAD Exam Prep", "Helm & Kustomize", "Pods & Deployments", "NetworkPolicies", "Observability"],
    terminalTitle: "ckad_exam_lab.sh",
    terminalLines: [
      { text: "$ kubectl create deployment api-gateway --image=nginx:alpine --replicas=3", color: "#60a5fa" },
      { text: "$ kubectl expose deployment api-gateway --port=80 --type=ClusterIP", color: "#e5e7eb" },
      { text: "$ kubectl apply -f network-policy-strict.yaml", color: "#fde047" },
      { text: "✓ CKAD Domain Verification Passed (100%)", color: "#4ade80" },
    ],
    infoStrip: [
      ["4 Wochen", "Kompaktes Intensivtraining"],
      ["Englisch", "Unterrichtssprache (Live)"],
      ["CKAD", "CNCF Prüfungsvorbereitung"],
      ["Max. 15", "Teilnehmende pro Klasse"],
      ["Hands-on", "Reale Kubernetes-Cluster"],
    ],
    audienceH2: "Für wen eignet sich die Kubernetes CKAD Weiterbildung?",
    audienceIntro:
      "Dieser 4-wöchige Spezialkurs richtet sich an Fachkräfte, die Cloud-native Anwendungen auf Kubernetes entwickeln, paketieren und betreiben.",
    audienceCards: [
      {
        title: "DevOps & Cloud Engineers",
        badge: "Zertifizierungs-Fokus",
        desc: "Vertiefe deine Container-Orchestrierung und bereite dich systematisch auf die kommandobasierte CKAD-Performance-Prüfung vor.",
        bullets: ["Schnelle CLI-Routinen mit kubectl", "Helm Charts, ConfigMaps, Secrets & SecurityContexts", "Zeitmanagement für die 2-stündige Live-Prüfung"],
      },
      {
        title: "Backend- & Full-Stack-Entwickler",
        badge: "Cloud-Native Skills",
        desc: "Lerne, wie eigene Microservices als Container in Kubernetes bereitgestellt, skaliert, überwacht und abgesichert werden.",
        bullets: ["Multi-Container-Pods, Jobs & CronJobs", "Services, Ingress & NetworkPolicies", "Troubleshooting laufender Workloads"],
      },
    ],
    programSelectorH2: "Kubernetes CKAD: Programm und Dauer",
    programSelectorSubtitle: "4-wöchiger Intensivkurs mit täglichen Kubernetes-Lab-Szenarien.",
    modules: [
      {
        id: 1,
        label: "Woche 1–2",
        title: "Application Design, Build & Deployment",
        duration: "2 Wochen",
        color: PRIMARY,
        prerequisite: "Linux-CLI, Docker-Container und YAML-Grundkenntnisse.",
        project: "Multi-Container Microservice Deployment mit Helm",
        topics: [
          "Container-Images, Multi-Container-Pods (Sidecar, Init)",
          "Deployments, Rolling Updates, Rollbacks & Scaling",
          "Helm Package Management & Kustomize",
          "ConfigMaps, Secrets, ServiceAccounts & SecurityContexts",
        ],
      },
      {
        id: 2,
        label: "Woche 3–4",
        title: "Services, Networking, Observability & CKAD Exam Simulator",
        duration: "2 Wochen",
        color: SECONDARY,
        prerequisite: "Abschluss von Woche 1–2.",
        project: "Vollständige CKAD-Prüfungssimulation unter Echtzeitbedingungen",
        topics: [
          "Services (ClusterIP, NodePort, LoadBalancer) & Ingress",
          "NetworkPolicies zur Absicherung des Pod-Traffics",
          "Liveness-, Readiness- & Startup-Probes, Logging & Debugging",
          "PersistentVolumes (PV), PersistentVolumeClaims (PVC) & Mock-Exams",
        ],
      },
    ],
    programs: [],
    curriculumH2: "Inhalte der Kubernetes CKAD Weiterbildung",
    curriculumIntro:
      "Der Lehrplan orientiert sich zu 100 % an den fünf offiziellen Prüfungsdomänen der Cloud Native Computing Foundation (CNCF) für CKAD.",
    specialFeature: {
      h2: "Voraussetzungen",
      intro:
        "Da es sich beim Kubernetes CKAD Kurs um ein 4-wöchiges Spezialtraining handelt, sollten Teilnehmende folgende Vorkenntnisse mitbringen (falls diese noch fehlen, empfehlen wir vorab unsere AWS & DevOps Weiterbildung):",
      cards: [
        {
          badge: "Voraussetzung 1",
          title: "Linux Kommandozeile & Texteditoren",
          desc: "Sicherer Umgang mit dem Linux-Terminal sowie Editoren wie vim oder nano, da die CKAD-Prüfung vollständig im Terminal stattfindet.",
        },
        {
          badge: "Voraussetzung 2",
          title: "Docker & Container-Grundlagen",
          desc: "Verständnis von Container-Images, Dockerfiles, Ports, Umgebungsvariablen und Container-Laufzeiten.",
        },
        {
          badge: "Voraussetzung 3",
          title: "YAML-Syntax & Git Basics",
          desc: "Lesen und Bearbeiten von strukturierten YAML-Manifestdateien für Kubernetes-Ressourcen.",
        },
      ],
      linkLabel: "Zur AWS & DevOps Weiterbildung (mit Vorkurs)",
      linkTo: "/it-kurse/aws-devops-weiterbildung/",
    },
    formatH2: "Ablauf und Lernformat",
    formatIntro: "Die CKAD-Prüfung ist kein Multiple-Choice-Test, sondern eine praktische 2-Stunden-Aufgabe im Terminal — genau darauf ist unser Format ausgelegt.",
    formatHighlights: [
      { title: "100 % Hands-on im Cluster", desc: "Du löst ab dem ersten Tag reale kubectl-Aufgaben in eigenen Übungsclustern." },
      { title: "Unterrichtssprache: Englisch", desc: "Die offizielle CNCF CKAD-Prüfung und die Kubernetes-Dokumentation sind auf Englisch." },
      { title: "Prüfungs-Geschwindigkeitstraining", desc: "Du lernst Imperative Commands, Aliases und YAML-Shortcuts für maximale Zeitersparnis." },
    ],
    summaryTable: [
      ["Dauer", "4 Wochen"],
      ["Einstieg", "Mit Vorkenntnissen (Linux, Docker, YAML)"],
      ["Zertifizierungsziel", "Certified Kubernetes Application Developer (CKAD)"],
      ["Kapazität", "Max. 15 Plätze"],
      ["Sprache", "Unterrichtssprache: Englisch"],
      ["Förderung", "Fördermöglichkeiten & QCG im Beratungsgespräch"],
    ],
    fundingH2: "Kubernetes CKAD Kurs finanzieren",
    fundingText:
      "Im kostenlosen Beratungsgespräch prüfen wir deine individuellen Fördermöglichkeiten (z. B. über Arbeitgeber-Förderung nach dem Qualifizierungschancengesetz oder in Kombination mit unserem AZAV-zertifizierten DevOps-Pfad).",
    fundingBullets: [
      "Individuelle Prüfung von Förderwegen und Arbeitgeber-Zuschüssen",
      "Kombinierbar mit dem geförderten AWS & DevOps Programm",
      "Transparente Konditionen für Selbstzahler und Unternehmen",
    ],
    fundingLinkLabel: "Finanzierungswege ansehen",
    fundingLinkTo: "/finanzierung/",
    qcgLinkLabel: "Qualifizierungschancengesetz für Teams",
    qcgLinkTo: "/qualifizierungschancengesetz/",
    careerH2: "Berufe nach dem Kubernetes CKAD Kurs",
    careerIntro: "Kubernetes ist der De-facto-Standard für Container-Orchestrierung in deutschen Technologie- und Industrieunternehmen.",
    careerRoles: [
      {
        title: "DevOps / Platform Engineer",
        salaryMedian: "64.800 €",
        salaryRange: "55.000 – 78.500 €",
        salarySource: "StepStone Gehaltsdaten 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Betreibt produktive Kubernetes-Cluster und unterstützt Entwicklerteams beim Cloud-Native-Deployment.",
        guideLabel: "Berufsbild: DevOps Engineer",
        guideUrl: "/ratgeber/devops-engineer/",
      },
    ],
    clusterH2: "Ratgeber zum Thema",
    clusterIntro: "Weiterführende Artikel zu DevOps, Cloud-Architektur und Zertifizierungen.",
    clusterGuides: [
      {
        title: "Was ist DevOps? Prinzipien, CI/CD und Container",
        badge: "Grundlagen-Ratgeber",
        desc: "Wie Docker und Kubernetes moderne Deployment-Pipelines antreiben.",
        to: "/ratgeber/was-ist-devops/",
      },
      {
        title: "DevOps Engineer: Aufgaben, Gehalt und Einstieg",
        badge: "Berufsratgeber",
        desc: "Gehaltsspannen und geforderte Zertifizierungen für DevOps Engineers in Deutschland.",
        to: "/ratgeber/devops-engineer/",
      },
    ],
    whyH2: "Warum Clarusway für den Kubernetes CKAD Kurs?",
    whyIntro: "Praxisnahe Prüfungsvorbereitung mit erfahrenen Cloud- und Kubernetes-Architekten.",
    whyItems: [
      { title: "Fokus auf die praktische Terminal-Prüfung", desc: "Wir trainieren genau die Aufgabenstellungen, die in der 2-stündigen CKAD-Prüfung drankommen." },
      { title: "Eigene Übungscluster für jeden Teilnehmer", desc: "Keine bloßen Folien — du konfigurierst Pods, Deployments und NetworkPolicies selbst." },
      { title: "Kleine Live-Gruppen (max. 15 Plätze)", desc: "Direkte Fehleranalyse und Unterstützung durch erfahrene DevOps-Trainer." },
      { title: "Realistische Prüfungs-Simulatoren", desc: "Zeitgesteuerte Mock-Prüfungen bereiten dich optimal auf den Prüfungstag vor." },
    ],
    reviewsH2: "Erfahrungen von Absolventen",
    reviews: [
      {
        initials: "DK",
        name: "DH Kim",
        role: "Absolvent Cloud & Kubernetes",
        platform: "Google Rezensionen",
        platformUrl: "https://www.google.com/maps",
        quote: "Die praktischen Übungen im Cluster und die kubectl-Tipps haben mir in der CKAD-Prüfung enorm viel Zeit gespart.",
      },
    ],
    faqH2: "Häufige Fragen zum Kubernetes CKAD Kurs",
    faqs: [
      {
        q: "Für wen ist der Kurs geeignet?",
        a: "Der Kurs richtet sich an Softwareentwickler, DevOps Engineers, Cloud Engineers und Systemadministratoren, die ihre Kubernetes-Kenntnisse zertifizieren lassen möchten.",
      },
      {
        q: "Welche Vorkenntnisse brauche ich?",
        a: "Du solltest grundlegende Erfahrung mit der Linux-Kommandozeile, Docker-Containern und YAML-Dateien mitbringen.",
      },
      {
        q: "Ist die Prüfung enthalten?",
        a: "Der Kurs umfasst die vollständige fachliche und praktische Vorbereitung inklusive Prüfungssimulationen. Details zur Prüfungsanmeldung bei der Linux Foundation / CNCF besprechen wir im Beratungsgespräch.",
      },
      {
        q: "Wie läuft der Kurs ab?",
        a: "Über 4 Wochen trainierst du im Live-Online-Unterricht alle fünf offiziellen CKAD-Prüfungsdomänen direkt im Kubernetes-Cluster.",
      },
      {
        q: "In welcher Sprache findet der Unterricht statt?",
        a: "Die Unterrichtssprache ist Englisch, passend zur offiziellen CNCF CKAD-Prüfung.",
      },
    ],
    relatedH2: "Weitere IT-Kurse",
    relatedCourses: [
      {
        title: "AWS & DevOps Weiterbildung",
        to: "/it-kurse/aws-devops-weiterbildung/",
        duration: "3 – 8 Monate",
        nextStart: "24 Aug 2026",
        badge: "Vollständiger Cloud & DevOps Pfad",
      },
    ],
    ctaH2: "Starte deinen Kubernetes CKAD Kurs",
    ctaText: "Lass dich jetzt kostenlos zu Startterminen, Voraussetzungen und Fördermöglichkeiten beraten.",
  },

  "it-orientation": {
    key: "it-orientation",
    isShortTemplate: true,
    isOrientation: true,
    slugDe: "/it-orientierungskurs/",
    slugEn: "/it-orientation-course/",
    pdfFileName: "clarusway-it-orientierungskurs-lehrplan.pdf",
    metaTitle: "IT-Orientierungskurs mit AVGS | Clarusway",
    metaDescription:
      "IT-Orientierungskurs bei Clarusway: Finde heraus, welcher IT-Beruf (KI, Full Stack, Cyber Security oder Cloud) zu dir passt. Gefördert mit AVGS oder kostenloser Beratung.",
    breadcrumbLabel: "IT-Orientierungskurs",
    eyebrow: "Programm: IT-Orientierungskurs & Berufswahl",
    h1: "IT-Orientierungskurs: Den passenden IT-Beruf finden",
    heroIntro:
      "Du möchtest in die IT wechseln, weißt aber noch nicht, ob Datenanalyse & KI, Softwareentwicklung, Cyber Security oder Cloud & DevOps am besten zu deinen Stärken passt? Im IT-Orientierungskurs von Clarusway erprobst du alle Fachbereiche praktisch und entwickelst gemeinsam mit unseren Mentoren deinen individuellen Lern- und Förderplan.",
    heroSubnote:
      "Ideal für unentschlossene Quereinsteiger · Praktische Einblicke in alle IT-Pfade · Vorbereitung auf den Bildungsgutschein.",
    heroBadges: ["Berufsorientierung", "Data & KI Einblick", "Web Coding Einblick", "Cyber Security Einblick", "Cloud Einblick", "AVGS / Beratung"],
    terminalTitle: "it_career_compass.sh",
    terminalLines: [
      { text: "$ clarusway-compass --analyze-strengths", color: "#60a5fa" },
      { text: "1. Analytical & Data-driven  -> AI Engineering / Data Analyst", color: "#e5e7eb" },
      { text: "2. Creative & Product-focused -> AI-Assisted Full Stack", color: "#e5e7eb" },
      { text: "3. Investigative & Protective -> Cyber Security (SOC)", color: "#e5e7eb" },
      { text: "4. Systems & Automation      -> AWS & DevOps Engineering", color: "#e5e7eb" },
      { text: "✓ Personal IT Career Roadmap created", color: "#4ade80" },
    ],
    infoStrip: [
      ["4 Wochen", "Kompakte Orientierungsphase"],
      ["Englisch", "Unterrichtssprache (mit DE-Beratung)"],
      ["Ohne Vorwissen", "Speziell für Einsteiger"],
      ["Max. 15", "Teilnehmende pro Gruppe"],
      ["AVGS / Beratung", "Geförderte Orientierung"],
    ],
    audienceH2: "Für wen eignet sich der IT-Orientierungskurs?",
    audienceIntro:
      "Bevor du dich für eine mehrmonatige Weiterbildung entscheidest, gibt dir der Orientierungskurs Sicherheit bei der Berufswahl.",
    audienceCards: [
      {
        title: "Unentschlossene Quereinsteiger",
        badge: "Klarheit gewinnen",
        desc: "Du lernst die echten Tagesaufgaben von Data Analysts, Full-Stack-Entwicklern, SOC Analysts und Cloud Engineers kennen, bevor du dich festlegst.",
        bullets: ["Praktische Mini-Projekte in jedem IT-Bereich", "Persönliche Potenzialanalyse mit Karriereberatern", "Vermeidung einer falschen Kurswahl"],
      },
      {
        title: "Arbeitsuchende vor dem Bildungsgutschein",
        badge: "Überzeugender Förderantrag",
        desc: "Mit einem klaren Eignungsprofil und einer fundierten Begründung überzeugst du deine Vermittlungsfachkraft bei Agentur für Arbeit oder Jobcenter deutlich leichter.",
        bullets: ["Klares Berufsziel für das Gespräch beim Jobcenter", "Fördermöglichkeit über AVGS (Aktivierungs- und Vermittlungsgutschein)", "Nahtloser Übergang in deine Hauptweiterbildung"],
      },
    ],
    programSelectorH2: "Welche IT-Kurse folgen danach?",
    programSelectorSubtitle:
      "Im Orientierungskurs lernst du diese fünf geförderten Hauptprogramme kennen und wählst deinen Favoriten:",
    modules: [],
    programs: [],
    curriculumH2: "Inhalte im IT-Orientierungskurs",
    curriculumIntro:
      "Vier kompakte Themenblöcke geben dir einen echten Praxiseinblick in die wichtigsten Wachstumsfelder der IT.",
    specialFeature: {
      h2: "Finanzierung mit AVGS",
      intro:
        "Der Aktivierungs- und Vermittlungsgutschein (AVGS) der Agentur für Arbeit oder des Jobcenters ermöglicht eine 100 % kostenfreie Teilnahme an Maßnahmen zur beruflichen Orientierung und Eignungsfeststellung — ohne deinen späteren Anspruch auf einen Bildungsgutschein für die Hauptweiterbildung zu verbrauchen.",
      cards: [
        {
          badge: "Schritt 1",
          title: "AVGS beim Berater ansprechen",
          desc: "Arbeitsuchende können bei ihrer Vermittlungsfachkraft einen AVGS für berufliche Orientierung und Eignungsfeststellung in der IT beantragen.",
        },
        {
          badge: "Schritt 2",
          title: "IT-Fachbereiche praktisch testen",
          desc: "Du probierst Programmierung, Datenanalyse, Cloud und IT-Sicherheit live aus und erhältst eine individuelle Eignungsempfehlung.",
        },
        {
          badge: "Schritt 3",
          title: "Nahtlos mit Bildungsgutschein starten",
          desc: "Mit deinem Ergebnisbericht beantragst du gezielt den Bildungsgutschein für deine gewählte IT-Weiterbildung.",
        },
      ],
      linkLabel: "Mehr zum AVGS Gutschein erfahren",
      linkTo: "/avgs/",
    },
    formatH2: "Ablauf und Lernformat",
    formatIntro: "Interaktive Live-Workshops kombiniert mit individuellem 1:1-Karrierecoaching.",
    formatHighlights: [
      { title: "Praktisches Ausprobieren", desc: "Schreibe deine ersten Zeilen Python und HTML, analysiere einen Datensatz und blicke in ein Security-Dashboard." },
      { title: "Individuelles Eignungsgespräch", desc: "Unsere Karriereberater werten deine Ergebnisse aus und empfehlen dir den optimalen Lernpfad." },
      { title: "Vorbereitung auf das Jobcenter-Gespräch", desc: "Du erhältst alle Unterlagen und Argumente für deinen anschließenden Bildungsgutschein-Antrag." },
    ],
    summaryTable: [
      ["Dauer", "4 Wochen (Orientierung)"],
      ["Einstieg", "Ohne jegliche IT-Vorkenntnisse"],
      ["Inhalte", "Data & KI, Webentwicklung, Cyber Security, Cloud & DevOps, QA"],
      ["Sprache", "Englisch (mit deutschsprachiger Beratung)"],
      ["Förderung", "AVGS Gutschein / Kostenlose Einstiegsberatung"],
    ],
    fundingH2: "IT-Orientierungskurs kostenlos nutzen",
    fundingText:
      "Du kannst deine Orientierung über einen AVGS (Aktivierungs- und Vermittlungsgutschein) fördern lassen oder direkt mit unserer kostenlosen 1:1-Studienberatung starten.",
    fundingBullets: [
      "100 % kostenfrei mit AVGS über Agentur für Arbeit oder Jobcenter",
      "Berührt nicht deinen späteren Anspruch auf einen Bildungsgutschein",
      "Kostenloses Erstgespräch zur direkten Kurswahl jederzeit möglich",
    ],
    fundingLinkLabel: "AVGS Gutschein erklärt",
    fundingLinkTo: "/avgs/",
    qcgLinkLabel: "Alle Finanzierungswege",
    qcgLinkTo: "/finanzierung/",
    careerH2: "Welche IT-Kurse folgen danach?",
    careerIntro:
      "Nach dem Orientierungskurs wechselst du direkt in eines unserer AZAV-zertifizierten Hauptprogramme:",
    careerRoles: [
      {
        title: "AI Engineer & Data Analyst Pfad",
        salaryMedian: "41.800 – 64.500 €",
        salaryRange: "Je nach Modulstufe",
        salarySource: "StepStone Gehaltsdaten 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Für analytische Köpfe: Python, SQL, Power BI, Machine Learning und Agentic AI.",
        guideLabel: "Zur AI Engineer Weiterbildung",
        guideUrl: "/it-kurse/ai-engineer-weiterbildung/",
      },
      {
        title: "Full Stack Entwickler Pfad",
        salaryMedian: "43.200 – 58.500 €",
        salaryRange: "Frontend, Backend & Full Stack",
        salarySource: "StepStone Gehaltsdaten 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Für kreative Problemlöser: Webanwendungen bauen mit React, TypeScript, Node.js und KI-Tools.",
        guideLabel: "Zur Full Stack Weiterbildung",
        guideUrl: "/it-kurse/full-stack-entwickler-weiterbildung/",
      },
      {
        title: "Cyber Security (SOC) Pfad",
        salaryMedian: "52.400 – 65.200 €",
        salaryRange: "SOC & Cloud Security",
        salarySource: "StepStone Gehaltsdaten 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Für Beschützer und Detektive: CompTIA Security+, SIEM, Incident Response und AWS Security.",
        guideLabel: "Zur Cyber Security Weiterbildung",
        guideUrl: "/it-kurse/cyber-security-weiterbildung/",
      },
      {
        title: "AWS & DevOps Engineer Pfad",
        salaryMedian: "61.500 – 68.400 €",
        salaryRange: "Cloud & Automatisierung",
        salarySource: "StepStone Gehaltsdaten 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Für Systemarchitekten: AWS, Docker, Kubernetes, Terraform, CI/CD und Microsoft Azure.",
        guideLabel: "Zur AWS & DevOps Weiterbildung",
        guideUrl: "/it-kurse/aws-devops-weiterbildung/",
      },
    ],
    clusterH2: "Ratgeber zum Thema",
    clusterIntro: "Unsere wichtigsten Leitfäden für den erfolgreichen Quereinstieg in die IT.",
    clusterGuides: [
      {
        title: "Quereinstieg in die IT: Wege, Voraussetzungen und Förderung",
        badge: "Orientierungs-Ratgeber (Empfohlen)",
        desc: "Welche IT-Berufe ohne Informatikstudium zugänglich sind und wie du den Einstieg planst.",
        to: "/ratgeber/quereinstieg-it/",
      },
      {
        title: "Weiterbildung über Arbeitsagentur und Jobcenter: So klappt die Förderung",
        badge: "Förder-Ratgeber",
        desc: "In 5 Schritten zum Bildungsgutschein oder AVGS.",
        to: "/ratgeber/weiterbildung-arbeitsagentur/",
      },
    ],
    whyH2: "Warum der IT-Orientierungskurs bei Clarusway?",
    whyIntro: "Triff deine Kurswahl auf Basis echter eigener Erfahrung statt nur anhand von Broschüren.",
    whyItems: [
      { title: "Alle 5 IT-Bereiche live erleben", desc: "Einblicke in Data/KI, Webentwicklung, Cyber Security, Cloud/DevOps und Software Testing." },
      { title: "Persönliche Eignungsanalyse", desc: "1:1-Feedback durch erfahrene Mentoren und Karriereberater." },
      { title: "Optimale Vorbereitung für das Jobcenter", desc: "Du gehst mit einem fundierten Lernplan in das Gespräch zum Bildungsgutschein." },
      { title: "Kein Vorwissen erforderlich", desc: "Speziell für Menschen ohne bisherigen IT-Hintergrund entwickelt." },
    ],
    reviewsH2: "Erfahrungen von Absolventen",
    reviews: [
      {
        initials: "M",
        name: "Morad",
        role: "Quereinsteiger in die IT",
        platform: "Course Report",
        platformUrl: "https://www.coursereport.com/schools/clarusway",
        quote: "Die Orientierung hat mir genau gezeigt, welcher IT-Pfad zu meinen Stärken passt — und mir bei der Bewilligung beim Jobcenter sehr geholfen.",
      },
    ],
    faqH2: "Häufige Fragen zum IT-Orientierungskurs",
    faqs: [
      {
        q: "Was ist ein AVGS?",
        a: "AVGS steht für Aktivierungs- und Vermittlungsgutschein. Er wird von der Agentur für Arbeit oder dem Jobcenter ausgestellt und deckt die Kosten für Berufsorientierung, Coaching und Eignungsfeststellung zu 100 % ab.",
      },
      {
        q: "Für wen ist der Orientierungskurs?",
        a: "Für alle Quereinsteigerinnen und Quereinsteiger, die in die IT wechseln möchten, aber noch unsicher sind, welches Fachgebiet (KI & Data, Full Stack, Cyber Security, Cloud/DevOps oder Testing) am besten zu ihnen passt.",
      },
      {
        q: "Was passiert nach dem Kurs?",
        a: "Am Ende erhältst du eine persönliche Kursempfehlung und das offizielle Maßnahmeangebot für deine gewählte Hauptweiterbildung, um damit den Bildungsgutschein zu beantragen.",
      },
    ],
    relatedH2: "Alle IT-Weiterbildungen im Überblick",
    relatedCourses: [
      {
        title: "AI Engineer Weiterbildung",
        to: "/it-kurse/ai-engineer-weiterbildung/",
        duration: "32 Wochen",
        nextStart: "27 Jul 2026",
        badge: "Data & Agentic AI",
      },
      {
        title: "Full Stack Entwickler Weiterbildung",
        to: "/it-kurse/full-stack-entwickler-weiterbildung/",
        duration: "3 – 12 Monate",
        nextStart: "27 Jul 2026",
        badge: "Webentwicklung mit KI",
      },
      {
        title: "Cyber Security Weiterbildung",
        to: "/it-kurse/cyber-security-weiterbildung/",
        duration: "4 Module",
        nextStart: "24 Aug 2026",
        badge: "SOC & Cloud Security",
      },
      {
        title: "AWS & DevOps Weiterbildung",
        to: "/it-kurse/aws-devops-weiterbildung/",
        duration: "3 – 8 Monate",
        nextStart: "24 Aug 2026",
        badge: "Cloud Engineer",
      },
    ],
    ctaH2: "Finde deinen passenden IT-Pfad",
    ctaText: "Buche jetzt deine kostenlose Beratung und starte deine Orientierung in die IT.",
  },
};


export const EN_COURSES: Record<CourseKey, CoursePageData> = {
  "ai-engineering": {
    key: "ai-engineering",
    slugDe: "/it-kurse/ai-engineer-weiterbildung/",
    slugEn: "/it-courses/ai-engineering/",
    pdfFileName: "clarusway-ai-engineering-bootcamp-syllabus.pdf",
    metaTitle: "AI Engineering Bootcamp: Data Science & Agentic AI | Clarusway",
    metaDescription:
      "Learn Python, SQL, Power BI, Machine Learning, LLMs and Agentic AI in 32 weeks. Taught in English in Germany and 100% funded with a Bildungsgutschein.",
    breadcrumbLabel: "AI Engineering Bootcamp",
    eyebrow: "Program: AI Engineering (Data Analytics, Data Science & Agentic AI)",
    h1: "AI Engineering Bootcamp: From Data Analytics to Agentic AI",
    heroIntro:
      "The AI Engineering Bootcamp at Clarusway is a 32-week live online program in English that takes you from Python, SQL, and Power BI through Classical Machine Learning to building production LLM applications, RAG pipelines, and autonomous Agentic AI systems — 100% funded in Germany with a Bildungsgutschein (education voucher).",
    heroSubnote:
      "Beginner-friendly starting at Module 1 or direct entry into Module 2 / Module 3 via technical assessment.",
    heroBadges: [
      "Python & SQL",
      "Power BI & Tableau",
      "Scikit-Learn & ML",
      "PyTorch & LLMs",
      "RAG & LangChain",
      "Agentic AI & MCP",
    ],
    terminalTitle: "agentic_ai_pipeline.py",
    terminalLines: [
      { text: "$ python -m venv ai-eng && source ai-eng/bin/activate", color: "#4ade80" },
      { text: ">>> from langgraph.prebuilt import create_react_agent", color: "#60a5fa" },
      { text: ">>> agent = create_react_agent(model='gpt-4o', tools=[sql_db, rag_retriever])", color: "#e5e7eb" },
      { text: "Indexing enterprise knowledge base (ChromaDB)...", color: "#fde047" },
      { text: "✓ RAG + MCP Multi-Agent workflow deployed to AWS Bedrock", color: "#4ade80" },
    ],
    infoStrip: [
      ["32 Weeks", "Full-Time (1,280 Units)"],
      ["Taught in English", "Live Online Instruction"],
      ["3 Modules", "Flexible Entry Points"],
      ["Max. 15", "Students per Cohort"],
      ["AZAV Certified", "100% Bildungsgutschein"],
    ],
    audienceH2: "Who is the AI Engineering bootcamp for?",
    audienceIntro:
      "Thanks to its three-module structure, the AI Engineering Bootcamp accommodates both complete career changers and technical professionals looking to specialize in AI.",
    audienceCards: [
      {
        title: "Career Changers Starting from Scratch",
        badge: "Start at Module 1 (32 Weeks)",
        desc: "You do not need prior coding experience. Module 1 builds a rock-solid foundation in Python, SQL, statistics, and Business Intelligence before you advance to Machine Learning and Agentic AI.",
        bullets: [
          "No technical entrance exam required for Module 1",
          "Step-by-step live instruction in English",
          "Graduate with a complete Data & AI project portfolio",
        ],
      },
      {
        title: "STEM Graduates, Analysts & Developers",
        badge: "Direct Entry via Assessment",
        desc: "Already comfortable with Python and SQL or classical Machine Learning? Pass the technical assessment to enter directly into Module 2 (Data Science & ML) or Module 3 (AI Engineering & Agentic AI).",
        bullets: [
          "Skip foundational weeks you have already mastered",
          "Focus on Deep Learning, RAG, LangGraph, and Agentic AI",
          "Targeted preparation for AI Engineer roles in Germany",
        ],
      },
    ],
    programSelectorH2: "AI Engineering bootcamp: modules, duration and start dates",
    programSelectorSubtitle:
      "Choose the full 32-week AI Engineering track or select a modular combination matching your technical background and career goal.",
    directEntryInfo: {
      h3: "Direct entry to Module 2 or 3 with a technical assessment",
      desc: "Applicants with prior experience do not need to repeat basics. Clarusway offers a structured technical assessment so you can start at the module that matches your skill level:",
      bullets: [
        "Module 1 (Data Analytics & BI, 13 weeks): Open to all beginners — no coding experience required.",
        "Module 2 (Data Science & Machine Learning, 6 weeks): Direct entry via assessment in Python (NumPy, Pandas), SQL, and foundational statistics.",
        "Module 3 (AI Engineering & Agentic AI, 13 weeks): Direct entry via assessment in Python, Machine Learning fundamentals, and REST APIs.",
      ],
    },
    modules: [
      {
        id: 1,
        label: "Module 1",
        title: "Data Analytics & Business Intelligence (13 weeks)",
        duration: "13 Weeks (520 Units)",
        color: PRIMARY,
        prerequisite: "No prior programming knowledge required.",
        project: "End-to-End Business Intelligence Dashboard & Automated ETL Pipeline",
        topics: [
          "IT Fundamentals, Git/GitHub, Linux & Agile Scrum",
          "Python Programming for Data Analysis (NumPy, Pandas)",
          "Exploratory Data Analysis (EDA) & Data Visualization",
          "Relational Databases & Advanced SQL (PostgreSQL)",
          "Descriptive & Inferential Statistics, A/B Testing",
          "Power BI (DAX, Power Query) & Tableau Dashboards",
        ],
      },
      {
        id: 2,
        label: "Module 2",
        title: "Data Science & Machine Learning (6 weeks)",
        duration: "6 Weeks (240 Units)",
        color: SECONDARY,
        prerequisite: "Completion of Module 1 or passing the Python/SQL/Statistics technical assessment.",
        project: "Predictive Customer Churn & Credit Risk ML Service (FastAPI + Docker)",
        topics: [
          "Feature Engineering, Preprocessing & Data Pipelines",
          "Supervised Learning (Regression, Random Forest, XGBoost, LightGBM)",
          "Unsupervised Learning (K-Means, DBSCAN, PCA)",
          "Model Evaluation, Cross-Validation & Hyperparameter Tuning (Optuna)",
          "Time Series Forecasting & Explainable AI (SHAP)",
          "ML Deployment Fundamentals with FastAPI, Streamlit & Docker",
        ],
      },
      {
        id: 3,
        label: "Module 3",
        title: "AI Engineering & Agentic AI (13 weeks)",
        duration: "13 Weeks (520 Units)",
        color: ACCENT,
        prerequisite: "Completion of Module 2 or passing the Python & Machine Learning technical assessment.",
        project: "Autonomous Multi-Agent Enterprise Copilot with RAG, MCP & LangGraph",
        topics: [
          "Deep Learning with PyTorch, Neural Networks & Transformers",
          "NLP, Embeddings & Vector Databases (Pinecone, Chroma, Qdrant)",
          "Large Language Models (LLMs), Advanced Prompt Engineering & Fine-Tuning (LoRA/QLoRA)",
          "Advanced RAG (Retrieval-Augmented Generation) & GraphRAG",
          "Agentic AI Workflows: LangChain, LangGraph, CrewAI & Model Context Protocol (MCP)",
          "LLMOps, Guardrails, Evaluation (RAGAS) & Cloud Deployment (AWS Bedrock)",
        ],
      },
    ],
    programs: [
      {
        id: "ai-full",
        anchorId: "ds-for-beginner",
        title: "AI Engineering Bootcamp (Full Track)",
        subtitle: "Module 1 + Module 2 + Module 3",
        badge: "All 3 Modules · 32 Weeks",
        moduleIds: [1, 2, 3],
        startsAt: 1,
        duration: "32 Weeks",
        schedule: "Mon–Fri, 09:00–16:45 CET",
        capacity: "Max. 15 Students",
        language: "Taught in English",
        dates: ["27 Jul 2026", "14 Sep 2026", "02 Nov 2026"],
        recommended: true,
        description:
          "The complete 32-week journey from Python and SQL fundamentals to Machine Learning and production Agentic AI systems. Ideal for career changers aiming for Data Scientist or AI Engineer roles.",
      },
      {
        id: "data-analytics-only",
        title: "Data Analytics & Business Intelligence",
        subtitle: "Module 1 Standalone",
        badge: "Module 1 · 13 Weeks",
        moduleIds: [1],
        startsAt: 1,
        duration: "13 Weeks",
        schedule: "Mon–Fri, 09:00–16:45 CET",
        capacity: "Max. 15 Students",
        language: "Taught in English",
        dates: ["27 Jul 2026", "14 Sep 2026", "02 Nov 2026"],
        recommended: false,
        description:
          "Focused 13-week program preparing you for Data Analyst and BI Analyst positions with Python, SQL, Statistics, Power BI, and Tableau.",
      },
      {
        id: "data-scientist-track",
        title: "Data Analytics + Data Science & ML",
        subtitle: "Module 1 + Module 2",
        badge: "Module 1 + 2 · 19 Weeks",
        moduleIds: [1, 2],
        startsAt: 1,
        duration: "19 Weeks",
        schedule: "Mon–Fri, 09:00–16:45 CET",
        capacity: "Max. 15 Students",
        language: "Taught in English",
        dates: ["27 Jul 2026", "14 Sep 2026", "02 Nov 2026"],
        recommended: false,
        description:
          "Combines Data Analytics with Classical Machine Learning so you can build, evaluate, and deploy predictive models.",
      },
      {
        id: "ds-ai-pro",
        anchorId: "ds-for-pro",
        title: "Data Science & AI Engineering (Direct Entry)",
        subtitle: "Module 2 + Module 3 (With Assessment)",
        badge: "Module 2 + 3 · 19 Weeks",
        moduleIds: [2, 3],
        startsAt: 2,
        duration: "19 Weeks",
        schedule: "Mon–Fri, 09:00–16:45 CET",
        capacity: "Max. 15 Students",
        language: "Taught in English",
        dates: ["24 Aug 2026", "12 Oct 2026", "30 Nov 2026"],
        recommended: false,
        description:
          "For applicants with existing Python and SQL proficiency: jump straight into Machine Learning, Deep Learning, RAG, and Agentic AI.",
      },
      {
        id: "ai-eng-only",
        title: "AI Engineering & Agentic AI (Direct Entry)",
        subtitle: "Module 3 Standalone (With Assessment)",
        badge: "Module 3 · 13 Weeks",
        moduleIds: [3],
        startsAt: 3,
        duration: "13 Weeks",
        schedule: "Mon–Fri, 09:00–16:45 CET",
        capacity: "Max. 15 Students",
        language: "Taught in English",
        dates: ["05 Oct 2026", "23 Nov 2026"],
        recommended: false,
        description:
          "Specialized 13-week module for software engineers and data professionals: PyTorch, LLMs, RAG, LangGraph, MCP, and AWS Bedrock.",
      },
    ],
    curriculumH2: "What you learn in the AI Engineering bootcamp",
    curriculumIntro:
      "Each module concludes with a real-world capstone project published to your GitHub portfolio so employers in Germany can verify your skills.",
    formatH2: "How the course works",
    formatIntro:
      "Live full-time instruction in English combined with daily coding labs, 1-on-1 mentoring, and dedicated career coaching for the German job market.",
    formatHighlights: [
      {
        title: "Daily Live Classes & Coding Labs",
        desc: "Monday to Friday from 09:00 to 16:45 CET. You write code live with instructors and build production-grade data pipelines and AI agents.",
      },
      {
        title: "Taught in English",
        desc: "All classes, projects, and technical mentoring are conducted in English — the working language of international tech teams across Germany.",
      },
      {
        title: "Career Coaching for Expats in Germany",
        desc: "German-standard CV optimization, LinkedIn positioning, GitHub portfolio reviews, and technical interview preparation.",
      },
    ],
    summaryTable: [
      ["Schedule", "Mon–Fri, 09:00–16:45 CET (Full-Time)"],
      ["Total Duration", "32 Weeks (1,280 Units) or 6–19 Weeks modular"],
      ["Curriculum", "Module 1 (Analytics/BI) + Module 2 (ML) + Module 3 (Agentic AI)"],
      ["Class Size", "Max. 15 students per cohort"],
      ["Instruction Language", "Taught in English"],
      ["Funding", "AZAV-certified · 100% funded with a Bildungsgutschein"],
    ],
    fundingH2: "Take the AI Engineering bootcamp for free with a Bildungsgutschein",
    fundingText:
      "The AI Engineering Bootcamp and all modular entry options are AZAV-certified in Germany. If you are registered as unemployed or seeking work with the Agentur für Arbeit (Federal Employment Agency) or Jobcenter, a Bildungsgutschein (education voucher) covers 100% of the tuition fees. Employed professionals can apply for funding through the Qualifizierungschancengesetz (Qualification Opportunities Act).",
    fundingBullets: [
      "100% coverage of tuition fees with a Bildungsgutschein",
      "Full 32-week track and individual modules are eligible for funding",
      "Clarusway prepares your official course offer (Maßnahmeangebot) in German for your advisor",
    ],
    fundingLinkLabel: "how to get a Bildungsgutschein",
    fundingLinkTo: "/bildungsgutschein/",
    qcgLinkLabel: "Qualifizierungschancengesetz funding for employees",
    qcgLinkTo: "/qualifizierungschancengesetz/",
    careerH2: "Jobs after the AI Engineering bootcamp",
    careerIntro:
      "Depending on which modules you complete, you qualify for four high-demand data and AI roles in Germany. Salary benchmarks are sourced from the StepStone Germany Salary Report 2026.",
    careerRoles: [
      {
        title: "Data Analyst",
        salaryMedian: "€54,800",
        salaryRange: "€41,800 – €66,500",
        salarySource: "StepStone Salary Report 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Analyzes business datasets using Python and SQL, uncovers trends, and builds interactive Power BI and Tableau dashboards for decision-makers.",
        guideLabel: "Data Analyst Career & Salary Guide in Germany",
        guideUrl: "/guides/data-analyst/",
      },
      {
        title: "Data Scientist",
        salaryMedian: "€62,400",
        salaryRange: "€49,000 – €76,000",
        salarySource: "StepStone Salary Report 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Develops statistical models and machine learning algorithms for forecasting, classification, and automated decision systems.",
        guideLabel: "Data Analyst vs. Data Scientist Comparison",
        guideUrl: "/guides/data-analyst/",
      },
      {
        title: "Machine Learning Engineer",
        salaryMedian: "€67,200",
        salaryRange: "€54,000 – €82,000",
        salarySource: "StepStone Salary Report 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Brings machine learning models into reliable production environments using FastAPI, Docker, MLflow, and cloud infrastructure.",
        guideLabel: "AI Engineer & ML Career Guide",
        guideUrl: "/guides/ai-engineer/",
      },
      {
        title: "AI Engineer",
        salaryMedian: "€69,500",
        salaryRange: "€56,000 – €86,000",
        salarySource: "StepStone Salary Report 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Architects and deploys LLM applications, RAG knowledge systems, and autonomous multi-agent workflows (LangGraph, MCP, AWS Bedrock).",
        guideLabel: "How to Become an AI Engineer in Germany",
        guideUrl: "/guides/ai-engineer/",
      },
    ],
    clusterH2: "Guides on AI, data science and data analytics",
    clusterIntro:
      "Explore in-depth career guides, salary benchmarks, and technical overviews for the German data and AI market.",
    clusterGuides: [
      {
        title: "What is an AI engineer? Role, skills and roadmap in Germany",
        badge: "Career Guide (Featured)",
        desc: "What an AI Engineer builds, how the role differs from traditional Data Science, and which skills German employers expect.",
        to: "/guides/ai-engineer/",
      },
      {
        title: "What does a data analyst do? Tasks, skills and salary in Germany",
        badge: "Career Guide",
        desc: "How to launch a career as a Data Analyst in Germany — including SQL, Python, Power BI, and entry-level salaries.",
        to: "/guides/data-analyst/",
      },
    ],
    whyH2: "Why learn AI and data science with Clarusway",
    whyIntro:
      "Clarusway combines live instruction in English with an up-to-date 2026 AI Engineering syllabus and official German state funding.",
    whyItems: [
      { title: "Production Agentic AI Syllabus", desc: "Go beyond basic notebooks: build RAG pipelines, LangGraph agents, and MCP integrations." },
      { title: "Modular Entry with Assessment", desc: "Start from zero in Module 1 or test directly into Module 2 or Module 3." },
      { title: "AZAV-Certified & 100% Funded", desc: "Eligible for full funding via a Bildungsgutschein from the Agentur für Arbeit or Jobcenter." },
      { title: "Small Live Classes (Max. 15)", desc: "Interactive live instruction in English with immediate support from senior data & AI mentors." },
      { title: "3 Capstone Portfolio Projects", desc: "Graduate with verifiable BI dashboards, ML APIs, and multi-agent systems on GitHub." },
      { title: "Expat-Focused Career Coaching", desc: "Tailored support for English-speaking job seekers applying to tech companies in Germany." },
    ],
    reviewsH2: "What graduates say",
    reviews: [
      {
        initials: "DK",
        name: "DH Kim",
        role: "Clarusway Graduate in Germany",
        platform: "Google Reviews",
        platformUrl: "https://www.google.com/maps",
        quote:
          "The structured live sessions and hands-on capstone projects helped me transition into the German tech market with confidence.",
      },
      {
        initials: "M",
        name: "Morad",
        role: "Data & AI Track Graduate",
        platform: "Course Report",
        platformUrl: "https://www.coursereport.com/schools/clarusway",
        quote:
          "Studying in English while getting full support with my Bildungsgutschein paperwork made the entire journey smooth and practical.",
      },
    ],
    faqH2: "AI Engineering Bootcamp FAQ",
    faqs: [
      {
        q: "Do I need programming experience to start?",
        a: "No. If you start with Module 1 (Data Analytics & Business Intelligence), no prior coding or IT experience is required. Clarusway teaches Python, SQL, and analytical thinking from the ground up.",
      },
      {
        q: "Can I start directly with Module 2 or Module 3?",
        a: "Yes. Applicants who already know Python, SQL, and statistics can take a free technical assessment to enter directly into Module 2 (Data Science & Machine Learning) or Module 3 (AI Engineering & Agentic AI).",
      },
      {
        q: "How long is the AI Engineering bootcamp?",
        a: "The complete 3-module bootcamp takes 32 weeks full-time (1,280 instructional units of 45 minutes). You can also take Module 1 alone (13 weeks), Module 1+2 (19 weeks), Module 2+3 (19 weeks), or Module 3 alone (13 weeks).",
      },
      {
        q: "What is the difference between data science and AI engineering?",
        a: "Data science focuses on statistical analysis and training predictive machine learning models (Module 2). AI engineering focuses on integrating Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), vector databases, and autonomous AI agents into production software systems (Module 3).",
      },
      {
        q: "Which tools and languages do I learn?",
        a: "You learn Python (NumPy, Pandas, Scikit-Learn, PyTorch), SQL (PostgreSQL), Power BI, Tableau, Git/GitHub, FastAPI, Docker, LangChain, LangGraph, CrewAI, Model Context Protocol (MCP), vector databases, and AWS Bedrock.",
      },
      {
        q: "Is the bootcamp free with a Bildungsgutschein?",
        a: "Yes. The AI Engineering Bootcamp is AZAV-certified. With a Bildungsgutschein (education voucher) from the Agentur für Arbeit or Jobcenter, 100% of the course fees are covered.",
      },
      {
        q: "Do I need to speak German?",
        a: "No German is required for the classes — the entire bootcamp, learning materials, and career coaching are in English. For your appointment at the Agentur für Arbeit or Jobcenter, Clarusway provides all required enrollment documents in German and guides you through the application process.",
      },
    ],
    relatedH2: "More IT courses",
    relatedCourses: [
      {
        title: "AI-Assisted Full Stack Developer Course",
        to: "/it-courses/full-stack-developer/",
        duration: "3 – 12 Months",
        nextStart: "27 Jul 2026",
        badge: "Web Development + AI Tools",
      },
      {
        title: "Cyber Security Analyst Course",
        to: "/it-courses/cyber-security/",
        duration: "4 Modules",
        nextStart: "24 Aug 2026",
        badge: "SOC & Cloud Security",
      },
      {
        title: "AWS Solutions Architect and DevOps Engineer Training",
        to: "/it-courses/devops-aws/",
        duration: "3 – 8 Months",
        nextStart: "24 Aug 2026",
        badge: "Cloud & Infrastructure",
      },
    ],
    ctaH2: "Start your AI Engineering career in Germany",
    ctaText:
      "Book a free consultation in English — Clarusway helps you choose the right module entry and prepares your Bildungsgutschein paperwork.",
  },

  "data-analytics": {
    key: "data-analytics",
    slugDe: "/it-kurse/data-analytics-weiterbildung/",
    slugEn: "/it-courses/data-analytics/",
    pdfFileName: "clarusway-data-analytics-course-syllabus.pdf",
    metaTitle: "Data Analytics Course in English | Clarusway",
    metaDescription:
      "Become a Data Analyst in Germany in 13 weeks: Python, SQL, Statistics, Power BI and Tableau taught in English. 100% funded with a Bildungsgutschein.",
    breadcrumbLabel: "Data Analytics Course",
    eyebrow: "Program: Data Analytics & Business Intelligence (Module 1)",
    h1: "Data Analytics Course: Data Analysis and Business Intelligence",
    heroIntro:
      "The Data Analytics Course at Clarusway is a 13-week full-time live online program in English (520 units) that prepares you for Data Analyst and Business Intelligence Analyst roles in Germany using Python, SQL, Statistics, Power BI, and Tableau — 100% funded with a Bildungsgutschein (education voucher).",
    heroSubnote:
      "No prior coding experience required · Standalone 13-week program · Expandable to Data Science & AI Engineering.",
    heroBadges: ["Python (Pandas)", "Advanced SQL", "Power BI & DAX", "Tableau", "Statistics & A/B Tests", "Git & ETL"],
    terminalTitle: "kpi_dashboard_query.sql",
    terminalLines: [
      { text: "SELECT region, DATE_TRUNC('month', order_date) AS month,", color: "#60a5fa" },
      { text: "       SUM(revenue) AS mrr, COUNT(DISTINCT customer_id) AS users", color: "#e5e7eb" },
      { text: "FROM analytics.orders GROUP BY 1, 2 ORDER BY 2 DESC;", color: "#60a5fa" },
      { text: "✓ 24 rows returned — synced to Power BI Executive Dashboard", color: "#4ade80" },
    ],
    infoStrip: [
      ["13 Weeks", "Full-Time (520 Units)"],
      ["Taught in English", "Live Online Instruction"],
      ["Beginner Friendly", "No Coding Experience Needed"],
      ["Max. 15", "Students per Cohort"],
      ["AZAV Certified", "100% Bildungsgutschein"],
    ],
    audienceH2: "Who is the Data Analytics course for?",
    audienceIntro:
      "Designed for analytical thinkers who want a fast, structured 13-week entry into the German tech market without prior programming knowledge.",
    audienceCards: [
      {
        title: "Career Changers from Business, Finance & Marketing",
        badge: "Fast 13-Week Entry",
        desc: "Upgrade from spreadsheets to professional data pipelines using SQL, Python, and interactive Power BI and Tableau dashboards.",
        bullets: [
          "Starts from zero — no prior coding experience needed",
          "High demand for English-speaking analysts across Germany",
          "Complete a capstone BI portfolio project in 13 weeks",
        ],
      },
      {
        title: "Future Data Scientists & AI Engineers",
        badge: "Module 1 Foundation",
        desc: "This course serves as Module 1 of the AI Engineering Bootcamp. After graduating, you can seamlessly continue into Module 2 (Machine Learning) and Module 3 (Agentic AI).",
        bullets: [
          "100% compatible with the 32-week AI Engineering Bootcamp",
          "Master Python, SQL, and exploratory data analysis",
          "Modular Bildungsgutschein funding options",
        ],
      },
    ],
    programSelectorH2: "Data Analytics course: modules, duration and start dates",
    programSelectorSubtitle:
      "Take the 13-week Data Analytics & BI course as a standalone program or combine it with Data Science & AI Engineering.",
    modules: [
      {
        id: 1,
        label: "Module 1",
        title: "Data Analytics & Business Intelligence (13 weeks)",
        duration: "13 Weeks (520 Units)",
        color: PRIMARY,
        prerequisite: "No prior coding experience required.",
        project: "Executive KPI Dashboard in Power BI & Automated Python/SQL Pipeline",
        topics: [
          "Python for Data Analytics (NumPy, Pandas, Matplotlib, Seaborn)",
          "Relational Databases & Advanced SQL (PostgreSQL)",
          "Descriptive & Inferential Statistics, Hypothesis Testing",
          "Power BI (Power Query, Data Modeling, DAX) & Tableau",
          "Data Storytelling & Capstone BI Project",
        ],
      },
      {
        id: 2,
        label: "Module 2 (Optional Upgrade)",
        title: "Data Science & Machine Learning (6 weeks)",
        duration: "6 Weeks (240 Units)",
        color: SECONDARY,
        prerequisite: "Completion of Module 1.",
        project: "End-to-End Predictive Machine Learning Model",
        topics: [
          "Feature Engineering & Scikit-Learn Pipelines",
          "Supervised & Unsupervised Machine Learning",
          "Model Deployment with FastAPI & Streamlit",
        ],
      },
    ],
    programs: [
      {
        id: "da-standalone",
        title: "Data Analytics & Business Intelligence (Module 1)",
        subtitle: "Standalone 13-Week Course",
        badge: "Module 1 · 13 Weeks",
        moduleIds: [1],
        startsAt: 1,
        duration: "13 Weeks",
        schedule: "Mon–Fri, 09:00–16:45 CET",
        capacity: "Max. 15 Students",
        language: "Taught in English",
        dates: ["27 Jul 2026", "14 Sep 2026", "02 Nov 2026"],
        recommended: true,
        description:
          "Qualify as a Data Analyst or BI Analyst in 13 weeks with Python, SQL, Statistics, Power BI, and Tableau.",
      },
      {
        id: "da-plus-ml",
        title: "Data Analytics + Data Science & ML",
        subtitle: "Combined Track (Module 1 + Module 2)",
        badge: "Module 1 + 2 · 19 Weeks",
        moduleIds: [1, 2],
        startsAt: 1,
        duration: "19 Weeks",
        schedule: "Mon–Fri, 09:00–16:45 CET",
        capacity: "Max. 15 Students",
        language: "Taught in English",
        dates: ["27 Jul 2026", "14 Sep 2026", "02 Nov 2026"],
        recommended: false,
        description:
          "Extend your Data Analytics foundation with 6 weeks of Machine Learning and predictive modeling.",
      },
    ],
    curriculumH2: "What you learn in the Data Analytics course",
    curriculumIntro:
      "Every week combines live technical instruction with real-world datasets from e-commerce, finance, and operations.",
    specialFeature: {
      h2: "Want to continue to Data Science and AI Engineering?",
      intro:
        "The 13-week Data Analytics Course is identical to Module 1 of the Clarusway AI Engineering Bootcamp. You can start with this 13-week program and later add Module 2 (Data Science & Machine Learning) and Module 3 (AI Engineering & Agentic AI).",
      cards: [
        {
          badge: "Step 1 (13 Weeks)",
          title: "Data Analytics & BI",
          desc: "Master Python, SQL, Statistics, Power BI, and Tableau to qualify for Data Analyst roles.",
        },
        {
          badge: "Step 2 (+6 Weeks)",
          title: "Data Science & Machine Learning",
          desc: "Build predictive models with Scikit-Learn, XGBoost, and FastAPI.",
        },
        {
          badge: "Step 3 (+13 Weeks)",
          title: "AI Engineering & Agentic AI",
          desc: "Develop LLM applications, RAG pipelines, and autonomous multi-agent systems.",
        },
      ],
      linkLabel: "Explore the full AI Engineering Bootcamp",
      linkTo: "/it-courses/ai-engineering/",
    },
    formatH2: "How the course works",
    formatIntro: "Structured full-time live classes in English with daily hands-on data labs.",
    formatHighlights: [
      { title: "Live Practice with Real Datasets", desc: "Write SQL queries, clean data in Pandas, and design interactive Power BI dashboards every day." },
      { title: "Taught in English", desc: "Ideal for expats and international professionals targeting English-speaking roles in Germany." },
      { title: "1-on-1 Career Support", desc: "CV optimization, portfolio reviews, and interview preparation tailored to the German job market." },
    ],
    summaryTable: [
      ["Schedule", "Mon–Fri, 09:00–16:45 CET"],
      ["Duration", "13 Weeks (520 Units)"],
      ["Core Stack", "Python, SQL, Statistics, Power BI, Tableau, Git"],
      ["Class Size", "Max. 15 students"],
      ["Instruction Language", "Taught in English"],
      ["Funding", "AZAV-certified · 100% funded with a Bildungsgutschein"],
    ],
    fundingH2: "Take the Data Analytics course for free with a Bildungsgutschein",
    fundingText:
      "The 13-week Data Analytics Course is AZAV-certified. With a Bildungsgutschein (education voucher) from the Agentur für Arbeit or Jobcenter, 100% of the tuition is covered.",
    fundingBullets: [
      "100% tuition coverage with a Bildungsgutschein",
      "Compact 13-week duration — often approved quickly by advisors",
      "German enrollment documents prepared within 24 hours",
    ],
    fundingLinkLabel: "how to get a Bildungsgutschein",
    fundingLinkTo: "/bildungsgutschein/",
    qcgLinkLabel: "Qualifizierungschancengesetz funding",
    qcgLinkTo: "/qualifizierungschancengesetz/",
    careerH2: "Jobs after the Data Analytics course",
    careerIntro: "Data Analysts are needed across every industry in Germany — from Berlin tech startups to international corporations.",
    careerRoles: [
      {
        title: "Data Analyst",
        salaryMedian: "€54,800",
        salaryRange: "€41,800 – €66,500",
        salarySource: "StepStone Salary Report 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Queries databases with SQL, analyzes trends with Python, and presents actionable business insights.",
        guideLabel: "Data Analyst Career & Salary Guide",
        guideUrl: "/guides/data-analyst/",
      },
      {
        title: "Business Intelligence Analyst",
        salaryMedian: "€57,200",
        salaryRange: "€46,000 – €69,000",
        salarySource: "StepStone Salary Report 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Designs automated Power BI and Tableau reporting systems and KPI data models for management teams.",
        guideLabel: "What does a Data Analyst do?",
        guideUrl: "/guides/data-analyst/",
      },
    ],
    clusterH2: "Guides on data analytics",
    clusterIntro: "Read more about Data Analyst skills, daily responsibilities, and career paths in Germany.",
    clusterGuides: [
      {
        title: "What does a data analyst do? Tasks, skills and salary in Germany",
        badge: "Career Guide (Featured)",
        desc: "Everything you need to know about becoming a Data Analyst in Germany as an English speaker.",
        to: "/guides/data-analyst/",
      },
      {
        title: "What is an AI engineer? Role, skills and roadmap in Germany",
        badge: "Career Guide",
        desc: "Learn how Data Analytics foundations lead into Machine Learning and Agentic AI engineering.",
        to: "/guides/ai-engineer/",
      },
    ],
    whyH2: "Why learn data analytics with Clarusway",
    whyIntro: "Practical SQL, Python, and BI training designed for fast employability in Germany.",
    whyItems: [
      { title: "Job-Ready in 13 Weeks", desc: "Focused full-time curriculum covering the exact tools listed in German Data Analyst job posts." },
      { title: "Python + SQL + Power BI + Tableau", desc: "Master both coding-based data analysis and enterprise BI dashboarding." },
      { title: "Seamless Upgrade Path to AI", desc: "Counts as Module 1 of the 32-week AI Engineering Bootcamp." },
      { title: "AZAV-Certified & 100% Funded", desc: "Full tuition coverage via Bildungsgutschein or Qualifizierungschancengesetz." },
    ],
    reviewsH2: "What graduates say",
    reviews: [
      {
        initials: "M",
        name: "Morad",
        role: "Data Analytics Graduate",
        platform: "Course Report",
        platformUrl: "https://www.coursereport.com/schools/clarusway",
        quote: "In 13 weeks I went from zero coding experience to building full SQL and Power BI dashboards.",
      },
    ],
    faqH2: "Data Analytics Course FAQ",
    faqs: [
      {
        q: "Do I need prior coding or math experience?",
        a: "No. The course begins with the fundamentals of Python, SQL, and applied statistics so beginners can follow every step.",
      },
      {
        q: "How long is the Data Analytics course?",
        a: "The course takes 13 weeks full-time (520 instructional units), Monday to Friday from 09:00 to 16:45 CET.",
      },
      {
        q: "Is the course free with a Bildungsgutschein?",
        a: "Yes. The Data Analytics Course is AZAV-certified and 100% covered with a Bildungsgutschein from the Agentur für Arbeit or Jobcenter.",
      },
      {
        q: "Can I continue with Data Science and AI Engineering afterwards?",
        a: "Yes. Because this course is Module 1 of the AI Engineering Bootcamp, graduates can seamlessly continue into Module 2 (Machine Learning) and Module 3 (Agentic AI).",
      },
      {
        q: "Do I need to speak German?",
        a: "No. All classes, projects, and mentoring are taught in English. Clarusway also provides all German documentation needed for your Agentur für Arbeit or Jobcenter advisor.",
      },
    ],
    relatedH2: "More IT courses",
    relatedCourses: [
      {
        title: "AI Engineering Bootcamp (32 Weeks)",
        to: "/it-courses/ai-engineering/",
        duration: "32 Weeks",
        nextStart: "27 Jul 2026",
        badge: "Module 1 + 2 + 3",
      },
      {
        title: "AI-Assisted Full Stack Developer Course",
        to: "/it-courses/full-stack-developer/",
        duration: "3 – 12 Months",
        nextStart: "27 Jul 2026",
        badge: "Web Development",
      },
    ],
    ctaH2: "Start your Data Analytics course in Germany",
    ctaText: "Book a free consultation in English and get your personalized Bildungsgutschein offer.",
  },

  "full-stack": {
    key: "full-stack",
    slugDe: "/it-kurse/full-stack-entwickler-weiterbildung/",
    slugEn: "/it-courses/full-stack-developer/",
    pdfFileName: "clarusway-full-stack-developer-syllabus.pdf",
    metaTitle: "AI-Assisted Full Stack Developer Course | Clarusway",
    metaDescription:
      "Learn React, TypeScript, Next.js, Node.js, PostgreSQL and AI coding workflows (Cursor, Claude Code, GitHub Copilot) in English. Funded with a Bildungsgutschein.",
    breadcrumbLabel: "Full Stack Developer Course",
    eyebrow: "Program: AI-Assisted Full Stack Development",
    h1: "Full Stack Developer Course with AI-Assisted Workflows",
    heroIntro:
      "The AI-Assisted Full Stack Developer Course at Clarusway trains you in English to build modern web applications using React, TypeScript, Next.js, Node.js, PostgreSQL, and MongoDB while integrating AI-native development tools (Cursor, Claude Code, and GitHub Copilot) into your daily engineering workflow — 100% funded with a Bildungsgutschein (education voucher).",
    heroSubnote:
      "4 modular building blocks · Beginner-friendly · Real Agile team project in Module 4.",
    heroBadges: ["React & TypeScript", "Next.js", "Node.js & Express", "PostgreSQL & MongoDB", "Cursor & Claude Code", "GitHub Copilot"],
    terminalTitle: "fullstack_ai_workflow.tsx",
    terminalLines: [
      { text: "$ npx create-next-app@latest portal --ts --tailwind", color: "#4ade80" },
      { text: "✓ TypeScript + Next.js App Router initialized", color: "#60a5fa" },
      { text: "$ claude 'Generate Prisma schema & REST endpoints for bookings'", color: "#fde047" },
      { text: "✓ 18 unit & Playwright E2E tests passing — deployed", color: "#4ade80" },
    ],
    infoStrip: [
      ["4 Modules", "Flexible Combinations"],
      ["Taught in English", "Live Online Instruction"],
      ["AI-Assisted", "Cursor, Claude Code & Copilot"],
      ["Max. 15", "Students per Cohort"],
      ["AZAV Certified", "100% Bildungsgutschein"],
    ],
    audienceH2: "Who is the Full Stack Developer course for?",
    audienceIntro:
      "Whether you are writing your very first line of code or upgrading existing web skills with modern TypeScript and AI workflows, the 4-module system adapts to your goal.",
    audienceCards: [
      {
        title: "Career Changers without Coding Experience",
        badge: "Start at Module 1",
        desc: "Module 1 covers HTML5, CSS3, JavaScript, Git, and AI-native developer workflows from scratch before guiding you into React, Node.js, and the team capstone.",
        bullets: [
          "No prior programming knowledge required",
          "Build real web apps from the very first weeks",
          "Graduate with a complete full-stack GitHub portfolio",
        ],
      },
      {
        title: "Junior Developers, Designers & QA Engineers",
        badge: "Modular Specialization",
        desc: "Already know HTML/CSS/JS? Combine Frontend (React, TypeScript, Next.js), Backend (Node.js, SQL/NoSQL), and the AI-Powered Full Stack Team Project.",
        bullets: [
          "Learn professional AI-assisted coding with Cursor & Claude Code",
          "Master production TypeScript, Next.js, and Docker",
          "Gain real Agile Scrum experience in Module 4",
        ],
      },
    ],
    programSelectorH2: "Full Stack Developer course: modules, duration and start dates",
    programSelectorSubtitle:
      "Select the complete 4-module Full Stack Developer track or choose a focused Frontend or Backend specialization.",
    modules: [
      {
        id: 1,
        label: "Module 1",
        title: "IT & Web Foundations and AI-Native Developer Toolkit",
        duration: "Module 1",
        color: PRIMARY,
        prerequisite: "No prior coding experience required.",
        project: "Responsive Interactive Web Application with Git CI Workflow",
        topics: [
          "HTML5, Semantic Web, Modern CSS3, Flexbox, Grid & Tailwind CSS",
          "JavaScript (ES6+) Fundamentals, DOM Manipulation & Async/Await",
          "Git, GitHub, Linux CLI & Agile Scrum Fundamentals",
          "AI-Native Developer Toolkit: Prompting for Code, Debugging & Docs",
        ],
      },
      {
        id: 2,
        label: "Module 2",
        title: "AI-Assisted Frontend Development (React, TypeScript, Next.js)",
        duration: "Module 2",
        color: SECONDARY,
        prerequisite: "Module 1 or solid HTML, CSS, and JavaScript foundations.",
        project: "Production E-Commerce / SaaS Frontend in Next.js & TypeScript",
        topics: [
          "TypeScript for Modern Frontend Engineering",
          "React 19, Hooks, State Management (Redux Toolkit / Zustand)",
          "Next.js App Router, Server Components & SSR",
          "Automated UI Testing (Vitest, Testing Library, Playwright) with AI tools",
        ],
      },
      {
        id: 3,
        label: "Module 3",
        title: "AI-Assisted Backend Development (Node.js, PostgreSQL, MongoDB)",
        duration: "Module 3",
        color: ACCENT,
        prerequisite: "JavaScript/TypeScript fundamentals.",
        project: "Scalable REST API with Authentication, PostgreSQL, Docker & AI Endpoint",
        topics: [
          "Node.js, Express.js & Scalable RESTful API Architecture",
          "Relational Databases (PostgreSQL, Prisma ORM) & NoSQL (MongoDB)",
          "Authentication, JWT, OAuth2 & Web Application Security (OWASP)",
          "Docker Containers, CI/CD Pipelines & LLM API Integration",
        ],
      },
      {
        id: 4,
        label: "Module 4",
        title: "AI-Powered Full Stack Team Project",
        duration: "Module 4",
        color: "#0f766e",
        prerequisite: "Completion of Frontend and Backend modules.",
        project: "Full-Stack Enterprise Web Platform Built in an Agile Scrum Team",
        topics: [
          "Agile Sprint Planning, Code Reviews & Git Branching Strategies",
          "End-to-End Architecture (Next.js + Node.js + PostgreSQL + AI Features)",
          "Cloud Deployment, Monitoring & Technical Interview Preparation",
        ],
      },
    ],
    programs: [
      {
        id: "fs-complete",
        title: "AI-Assisted Full Stack Developer (All 4 Modules)",
        subtitle: "Complete Track: Foundations + Frontend + Backend + Team Project",
        badge: "Modules 1 + 2 + 3 + 4",
        moduleIds: [1, 2, 3, 4],
        startsAt: 1,
        duration: "Full Track",
        schedule: "Mon–Fri, 09:00–16:45 CET",
        capacity: "Max. 15 Students",
        language: "Taught in English",
        dates: ["27 Jul 2026", "14 Sep 2026", "02 Nov 2026"],
        recommended: true,
        description:
          "The complete Full Stack Developer program from web fundamentals to React/Next.js, Node.js/PostgreSQL, and an Agile team project.",
      },
      {
        id: "fs-frontend",
        title: "Frontend Developer Track",
        subtitle: "Web Foundations + AI-Assisted Frontend Development",
        badge: "Modules 1 + 2",
        moduleIds: [1, 2],
        startsAt: 1,
        duration: "Frontend Focus",
        schedule: "Mon–Fri, 09:00–16:45 CET",
        capacity: "Max. 15 Students",
        language: "Taught in English",
        dates: ["27 Jul 2026", "14 Sep 2026"],
        recommended: false,
        description:
          "Focused path for Frontend Developer roles mastering HTML, CSS, JavaScript, TypeScript, React, and Next.js.",
      },
      {
        id: "fs-backend-pro",
        title: "Full Stack Core & Team Project (With Prior JS Skills)",
        subtitle: "Frontend + Backend + Team Project",
        badge: "Modules 2 + 3 + 4",
        moduleIds: [2, 3, 4],
        startsAt: 2,
        duration: "Advanced Track",
        schedule: "Mon–Fri, 09:00–16:45 CET",
        capacity: "Max. 15 Students",
        language: "Taught in English",
        dates: ["24 Aug 2026", "12 Oct 2026"],
        recommended: false,
        description:
          "For learners who already know HTML, CSS, and JavaScript basics: jump directly into React, TypeScript, Node.js, and the capstone team project.",
      },
    ],
    curriculumH2: "What you learn in the Full Stack Developer course",
    curriculumIntro:
      "You master the complete JavaScript/TypeScript web stack first — and then use AI coding assistants to ship cleaner, well-tested software faster.",
    specialFeature: {
      h2: "The AI tools you use every day: Cursor, Claude Code, GitHub Copilot",
      intro:
        "Modern software teams in Germany expect developers to understand every line of code they ship while leveraging AI assistants for speed and quality. Throughout the course you practice with:",
      cards: [
        {
          badge: "Cursor IDE",
          title: "Context-Aware Refactoring",
          desc: "Navigate multi-file TypeScript codebases, refactor components, and maintain strict type safety.",
        },
        {
          badge: "Claude Code",
          title: "Architecture, Tests & Debugging",
          desc: "Generate unit and E2E test suites, analyze stack traces, and validate API edge cases.",
        },
        {
          badge: "GitHub Copilot",
          title: "Daily Coding Acceleration",
          desc: "Speed up boilerplate, SQL migrations, and API documentation while maintaining full code ownership.",
        },
      ],
    },
    formatH2: "How the course works",
    formatIntro: "Daily live coding sessions in English paired with hands-on labs and Agile teamwork.",
    formatHighlights: [
      { title: "Live Coding & Code Reviews", desc: "Mon–Fri from 09:00 to 16:45 CET with experienced senior full-stack instructors." },
      { title: "Taught in English", desc: "Practice technical communication, sprint standups, and Git workflows in English." },
      { title: "Real Team Project in Module 4", desc: "Work in an Agile Scrum team with pull requests, CI/CD checks, and production deployment." },
    ],
    summaryTable: [
      ["Schedule", "Mon–Fri, 09:00–16:45 CET"],
      ["Structure", "4 Modules (Foundations, Frontend, Backend, Team Project)"],
      ["Tech Stack", "HTML/CSS, JS/TS, React, Next.js, Node.js, PostgreSQL, MongoDB"],
      ["AI Workflow", "Cursor, Claude Code, GitHub Copilot & LLM APIs"],
      ["Instruction Language", "Taught in English"],
      ["Funding", "AZAV-certified · 100% funded with a Bildungsgutschein"],
    ],
    fundingH2: "Take the Full Stack Developer course for free with a Bildungsgutschein",
    fundingText:
      "The AI-Assisted Full Stack Developer Course is AZAV-certified. With a Bildungsgutschein (education voucher) from the Agentur für Arbeit or Jobcenter, 100% of the tuition is covered.",
    fundingBullets: [
      "100% tuition coverage with a Bildungsgutschein",
      "Full 4-module track and modular combinations eligible",
      "German documentation prepared for your Agentur für Arbeit or Jobcenter advisor",
    ],
    fundingLinkLabel: "how to get a Bildungsgutschein",
    fundingLinkTo: "/bildungsgutschein/",
    qcgLinkLabel: "Qualifizierungschancengesetz funding",
    qcgLinkTo: "/qualifizierungschancengesetz/",
    careerH2: "Jobs after the Full Stack Developer course",
    careerIntro: "Graduates qualify for three core software engineering roles across Germany.",
    careerRoles: [
      {
        title: "Full Stack Developer",
        salaryMedian: "€58,500",
        salaryRange: "€43,200 – €72,000",
        salarySource: "StepStone Salary Report 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Develops complete web applications across React/Next.js frontends, Node.js APIs, and relational databases.",
        guideLabel: "Full Stack Developer Career & Salary Guide",
        guideUrl: "/guides/full-stack-developer/",
      },
      {
        title: "Frontend Developer",
        salaryMedian: "€54,200",
        salaryRange: "€42,000 – €66,000",
        salarySource: "StepStone Salary Report 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Builds fast, accessible user interfaces with React, TypeScript, Next.js, and Tailwind CSS.",
        guideLabel: "Frontend vs. Backend vs. Full Stack Guide",
        guideUrl: "/guides/full-stack-developer/",
      },
      {
        title: "Backend Developer",
        salaryMedian: "€60,100",
        salaryRange: "€46,500 – €74,500",
        salarySource: "StepStone Salary Report 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Designs secure REST APIs, database schemas (PostgreSQL, MongoDB), authentication, and cloud deployments.",
        guideLabel: "What is a Full Stack Developer?",
        guideUrl: "/guides/full-stack-developer/",
      },
    ],
    clusterH2: "Guides on web development",
    clusterIntro: "Learn more about Full Stack Developer career paths and modern developer tools in Germany.",
    clusterGuides: [
      {
        title: "What is a full stack developer? Skills, salary and tools in 2026",
        badge: "Career Guide (Featured)",
        desc: "What Full Stack Developers build, which technologies German companies hire for, and how to break into the field.",
        to: "/guides/full-stack-developer/",
      },
    ],
    whyH2: "Why learn web development with Clarusway",
    whyIntro: "Modern TypeScript & Next.js engineering combined with daily AI-assisted workflows.",
    whyItems: [
      { title: "AI-Native Workflow Included", desc: "Learn how to use Cursor, Claude Code, and GitHub Copilot responsibly in production." },
      { title: "TypeScript, React & Next.js Focus", desc: "Train on the exact frontend and backend stack demanded by employers in Germany." },
      { title: "Agile Team Project (Module 4)", desc: "Graduate with real team collaboration experience on GitHub." },
      { title: "AZAV-Certified & 100% Funded", desc: "Covered 100% with a Bildungsgutschein from Agentur für Arbeit or Jobcenter." },
    ],
    reviewsH2: "What graduates say",
    reviews: [
      {
        initials: "DK",
        name: "DH Kim",
        role: "Software Development Graduate",
        platform: "Google Reviews",
        platformUrl: "https://www.google.com/maps",
        quote: "Building a full-stack application in an Agile team during the final module prepared me directly for real developer interviews.",
      },
    ],
    faqH2: "Full Stack Developer Course FAQ",
    faqs: [
      {
        q: "Do I need coding experience?",
        a: "No. If you begin with Module 1, you learn HTML, CSS, JavaScript, and Git from scratch before moving on to React, TypeScript, and Node.js.",
      },
      {
        q: "What does AI-assisted development mean in this course?",
        a: "You first learn solid programming fundamentals and software architecture, and then integrate AI coding assistants to speed up debugging, test writing, refactoring, and documentation — just like modern engineering teams do.",
      },
      {
        q: "Which AI coding tools do I learn?",
        a: "You work hands-on with Cursor, Claude Code, and GitHub Copilot, and you also learn how to integrate LLM APIs into your own Node.js and Next.js applications.",
      },
      {
        q: "What do I build in the team project?",
        a: "In Module 4, you work in an Agile Scrum team to design, build, test, and deploy a full-stack web application with a Next.js frontend, Node.js/PostgreSQL backend, authentication, and AI-powered features.",
      },
      {
        q: "How long is the course?",
        a: "Depending on whether you take individual modules or the complete 4-module full-stack track, the program runs full-time from 3 to 12 months (Monday to Friday, 09:00–16:45 CET).",
      },
      {
        q: "Is the course free with a Bildungsgutschein?",
        a: "Yes. The course is AZAV-certified and 100% covered with a Bildungsgutschein from the Agentur für Arbeit or Jobcenter.",
      },
      {
        q: "Do I need to speak German?",
        a: "No. Classes, coding labs, and career mentoring are 100% in English. Clarusway provides all official documents in German for your Agentur für Arbeit or Jobcenter advisor.",
      },
    ],
    relatedH2: "More IT courses",
    relatedCourses: [
      {
        title: "AI Engineering Bootcamp",
        to: "/it-courses/ai-engineering/",
        duration: "32 Weeks",
        nextStart: "27 Jul 2026",
        badge: "Data Science & Agentic AI",
      },
      {
        title: "SDET Course: Software Testing and Automation",
        to: "/it-courses/software-development-engineer-in-test/",
        duration: "Full-Time",
        nextStart: "14 Sep 2026",
        badge: "QA & Test Automation",
      },
      {
        title: "AWS Solutions Architect and DevOps Engineer Training",
        to: "/it-courses/devops-aws/",
        duration: "3 – 8 Months",
        nextStart: "24 Aug 2026",
        badge: "Cloud & Infrastructure",
      },
    ],
    ctaH2: "Start your Full Stack Developer course in Germany",
    ctaText: "Book a free consultation in English and receive your tailored Bildungsgutschein offer.",
  },

  "cyber-security": {
    key: "cyber-security",
    slugDe: "/it-kurse/cyber-security-weiterbildung/",
    slugEn: "/it-courses/cyber-security/",
    pdfFileName: "clarusway-cyber-security-course-syllabus.pdf",
    metaTitle: "Cyber Security Course: SOC & Cloud Security | Clarusway",
    metaDescription:
      "Cyber Security Analyst Course in English: CompTIA Security+, AI-Enhanced SOC Analyst, Agentic AI in SecOps & AWS Cloud Security. Funded with a Bildungsgutschein.",
    breadcrumbLabel: "Cyber Security Course",
    eyebrow: "Program: AI-Enhanced Cyber Security Analyst (SOC & Cloud Security)",
    h1: "Cyber Security Analyst Course with AI-Enhanced SOC Training",
    heroIntro:
      "The Cyber Security Analyst Course at Clarusway prepares you in four modules for roles in Security Operations Centers (SOC) and Cloud Security: from CompTIA Security+ Exam Prep (Module 1) and AI-Enhanced SOC Analyst Experience (Module 2) to Agentic AI in Security Operations (Module 3) and AWS Cloud Security (Module 4) — taught in English and 100% funded with a Bildungsgutschein (education voucher).",
    heroSubnote:
      "Beginner entry in Module 1 or direct entry to Module 2 via technical assessment · Live SIEM & Incident Response labs.",
    heroBadges: ["CompTIA Security+", "SIEM & Splunk", "MITRE ATT&CK", "Agentic AI SecOps", "SOAR Playbooks", "AWS Cloud Security"],
    terminalTitle: "soc_incident_triage.sh",
    terminalLines: [
      { text: "$ siem-agent --monitor --ruleset mitre-attack-v15", color: "#4ade80" },
      { text: "[ALERT] Suspicious IAM AssumeRole in eu-central-1", color: "#f87171" },
      { text: ">>> AI SecOps Agent correlating CloudTrail & GuardDuty logs...", color: "#fde047" },
      { text: "✓ Session isolated · Incident report #SOC-409 generated", color: "#4ade80" },
    ],
    infoStrip: [
      ["4 Modules", "Modular Structure"],
      ["Taught in English", "Live Online Instruction"],
      ["Security+ Prep", "Integrated in Module 1"],
      ["Max. 15", "Students per Cohort"],
      ["AZAV Certified", "100% Bildungsgutschein"],
    ],
    audienceH2: "Who is the Cyber Security course for?",
    audienceIntro:
      "Whether you are entering IT from another career or already have networking and system administration experience, the course provides two clear entry points.",
    audienceCards: [
      {
        title: "Career Changers without an IT Background",
        badge: "Start at Module 1",
        desc: "Module 1 teaches networking, Linux, Windows security, cryptography, and threat analysis from scratch while preparing you for the CompTIA Security+ certification.",
        bullets: [
          "No prior IT or coding experience required for Module 1",
          "Systematic preparation for CompTIA Security+ (SY0-701)",
          "Step-by-step progression into hands-on SOC labs",
        ],
      },
      {
        title: "IT Support, Network & System Administrators",
        badge: "Direct Entry to Module 2",
        desc: "Already have CompTIA Security+ or solid networking and Linux skills? Pass the technical assessment to start directly in Module 2 (AI-Enhanced SOC Analyst Experience).",
        bullets: [
          "Skip Module 1 via technical placement assessment",
          "Focus on SIEM, EDR, Threat Hunting, Agentic AI & AWS Security",
          "Ideal upskilling path for IT professionals in Germany",
        ],
      },
    ],
    programSelectorH2: "Cyber Security course: modules, duration and start dates",
    programSelectorSubtitle:
      "Choose the complete 4-module Cyber Security Analyst track or start directly in Module 2 with prior IT knowledge.",
    directEntryInfo: {
      h3: "Direct entry to Module 2 with a technical assessment",
      desc: "Applicants with existing IT, Linux, and networking knowledge (or an active CompTIA Security+ certification) can take Clarusway's technical assessment to enter directly into Module 2 (AI-Enhanced SOC Analyst Experience).",
      bullets: [
        "Module 1: Open to beginners without an IT background.",
        "Module 2 + 3 + 4: Direct entry available after passing the networking, Linux, and security fundamentals assessment.",
      ],
    },
    modules: [
      {
        id: 1,
        label: "Module 1",
        title: "CompTIA Security+ Certification and Exam Prep",
        duration: "Module 1",
        color: PRIMARY,
        prerequisite: "No prior IT knowledge required.",
        project: "Enterprise Network Hardening & Vulnerability Assessment Lab",
        topics: [
          "Networking Fundamentals (TCP/IP, OSI, DNS, Firewalls, VPN)",
          "Linux & Windows Administration and System Hardening",
          "Threats, Vulnerabilities, Cryptography & Identity Management (IAM)",
          "Full CompTIA Security+ (SY0-701) Exam Preparation & Mock Tests",
        ],
      },
      {
        id: 2,
        label: "Module 2",
        title: "AI-Enhanced SOC Analyst Experience",
        duration: "Module 2",
        color: SECONDARY,
        prerequisite: "Module 1 or passing the technical assessment.",
        project: "Live Incident Investigation & Threat Hunting in the SIEM Lab",
        topics: [
          "SOC Operations (Tier 1 & Tier 2), Log Analysis & SIEM (Splunk / ELK)",
          "Endpoint Detection & Response (EDR) & MITRE ATT&CK Framework",
          "Digital Forensics, Incident Response (DFIR) & Malware Triage",
          "AI-Assisted Alert Triage & False-Positive Reduction",
        ],
      },
      {
        id: 3,
        label: "Module 3",
        title: "Agentic AI in Security Operations",
        duration: "Module 3",
        color: ACCENT,
        prerequisite: "Module 2 (SOC Analyst foundations).",
        project: "Automated SOAR Playbook & Autonomous Threat-Enrichment AI Agent",
        topics: [
          "Security Orchestration, Automation and Response (SOAR)",
          "Building Autonomous AI Agents for Log Correlation & Threat Intel",
          "Automated Incident Reporting & Playbook Execution with Python",
        ],
      },
      {
        id: 4,
        label: "Module 4",
        title: "Cloud Security (AWS) and AI Security Basics",
        duration: "Module 4",
        color: "#0f766e",
        prerequisite: "Module 2.",
        project: "Securing an AWS Production Environment & LLM Application Audit",
        topics: [
          "AWS Cloud Security (IAM, VPC Security, GuardDuty, CloudTrail, Security Hub)",
          "Container & Kubernetes Security Fundamentals",
          "AI Security Basics: OWASP Top 10 for LLMs & Prompt Injection Defense",
        ],
      },
    ],
    programs: [
      {
        id: "cs-complete",
        anchorId: "cs-for-beginner",
        title: "AI-Enhanced Cyber Security Analyst (All 4 Modules)",
        subtitle: "Security+ Prep + SOC Analyst + Agentic AI + AWS Cloud Security",
        badge: "Modules 1 + 2 + 3 + 4",
        moduleIds: [1, 2, 3, 4],
        startsAt: 1,
        duration: "Full Track",
        schedule: "Mon–Fri, 09:00–16:45 CET",
        capacity: "Max. 15 Students",
        language: "Taught in English",
        dates: ["24 Aug 2026", "28 Sep 2026", "26 Oct 2026"],
        recommended: true,
        description:
          "The complete Cyber Security program from CompTIA Security+ foundations to AI-Enhanced SOC Analyst, Agentic AI in SecOps, and AWS Cloud Security.",
      },
      {
        id: "cs-pro-direct",
        anchorId: "cs-for-pro",
        title: "SOC, Agentic AI & Cloud Security (Direct Entry)",
        subtitle: "Direct Entry at Module 2 (With Technical Assessment)",
        badge: "Modules 2 + 3 + 4",
        moduleIds: [2, 3, 4],
        startsAt: 2,
        duration: "Advanced Track",
        schedule: "Mon–Fri, 09:00–16:45 CET",
        capacity: "Max. 15 Students",
        language: "Taught in English",
        dates: ["28 Sep 2026", "26 Oct 2026", "30 Nov 2026"],
        recommended: false,
        description:
          "For learners with existing IT/network knowledge: skip Module 1 via assessment and focus on SOC, Agentic AI, and AWS Cloud Security.",
      },
      {
        id: "cs-secplus-soc",
        title: "CompTIA Security+ & SOC Analyst Foundation",
        subtitle: "Module 1 + Module 2",
        badge: "Modules 1 + 2",
        moduleIds: [1, 2],
        startsAt: 1,
        duration: "Compact Track",
        schedule: "Mon–Fri, 09:00–16:45 CET",
        capacity: "Max. 15 Students",
        language: "Taught in English",
        dates: ["24 Aug 2026", "28 Sep 2026"],
        recommended: false,
        description:
          "Combines CompTIA Security+ exam preparation with hands-on SOC Analyst training in the SIEM lab.",
      },
    ],
    curriculumH2: "What you learn in the Cyber Security course",
    curriculumIntro:
      "Four hands-on modules align international security frameworks (CompTIA Security+, MITRE ATT&CK, OWASP) with AI-driven SOC operations and AWS Cloud Security.",
    formatH2: "How the course works",
    formatIntro: "Live online instruction in English paired with daily cyber range and SIEM lab exercises.",
    formatHighlights: [
      { title: "Hands-On Cyber Range & SIEM Labs", desc: "Investigate real attack scenarios, analyze logs in Splunk/ELK, and execute incident response playbooks." },
      { title: "Taught in English", desc: "Cyber security tools, CVE databases, and the CompTIA Security+ exam operate globally in English." },
      { title: "Direct Entry Option", desc: "Test straight into Module 2 if you already have networking and Linux foundations." },
    ],
    summaryTable: [
      ["Schedule", "Mon–Fri, 09:00–16:45 CET"],
      ["Curriculum", "4 Modules: Security+, SOC Analyst, Agentic AI, AWS Cloud Security"],
      ["Entry", "Beginner (Module 1) or Direct Entry via Assessment (Module 2)"],
      ["Class Size", "Max. 15 students per cohort"],
      ["Instruction Language", "Taught in English"],
      ["Funding", "AZAV-certified · 100% funded with a Bildungsgutschein"],
    ],
    fundingH2: "Take the Cyber Security course for free with a Bildungsgutschein",
    fundingText:
      "The Cyber Security Analyst Course at Clarusway is AZAV-certified. With a Bildungsgutschein (education voucher) from the Agentur für Arbeit or Jobcenter, 100% of your tuition is covered.",
    fundingBullets: [
      "100% tuition coverage with a Bildungsgutschein",
      "Includes structured CompTIA Security+ exam preparation",
      "German enrollment documents prepared for your advisor",
    ],
    fundingLinkLabel: "how to get a Bildungsgutschein",
    fundingLinkTo: "/bildungsgutschein/",
    qcgLinkLabel: "Qualifizierungschancengesetz funding",
    qcgLinkTo: "/qualifizierungschancengesetz/",
    careerH2: "Jobs after the Cyber Security course",
    careerIntro: "Stricter EU directives (NIS-2) and growing cloud adoption make cyber security one of the most resilient job markets in Germany.",
    careerRoles: [
      {
        title: "SOC Analyst",
        salaryMedian: "€52,400",
        salaryRange: "€45,000 – €63,000",
        salarySource: "StepStone Salary Report 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Monitors security events in the Security Operations Center, investigates SIEM alerts, and contains cyber incidents.",
        guideLabel: "SOC Analyst Career & Salary Guide in Germany",
        guideUrl: "/guides/soc-analyst/",
      },
      {
        title: "Cyber Security Analyst",
        salaryMedian: "€58,900",
        salaryRange: "€49,500 – €71,000",
        salarySource: "StepStone Salary Report 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Assesses network and system vulnerabilities, hardens IT infrastructure, and enforces enterprise security policies.",
        guideLabel: "CompTIA Security+ Certification Guide",
        guideUrl: "/guides/comptia-security-plus/",
      },
      {
        title: "Cloud Security Analyst",
        salaryMedian: "€65,200",
        salaryRange: "€55,000 – €79,000",
        salarySource: "StepStone Salary Report 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Secures AWS cloud environments, IAM permissions, container workloads, and AI applications against modern threats.",
        guideLabel: "SOC & Cloud Security Career Guide",
        guideUrl: "/guides/soc-analyst/",
      },
    ],
    clusterH2: "Guides on cyber security",
    clusterIntro: "Read Clarusway's guides on SOC Analyst careers, the CompTIA Security+ certification, and AI security trends in Germany.",
    clusterGuides: [
      {
        title: "What does a SOC analyst do? Role, tools and salary in Germany",
        badge: "Career Guide (Featured)",
        desc: "How a Security Operations Center works, what Tier 1 and Tier 2 analysts earn, and how to enter the field.",
        to: "/guides/soc-analyst/",
      },
      {
        title: "CompTIA Security+ in Germany: exam, cost and preparation",
        badge: "Certification Guide",
        desc: "Why CompTIA Security+ is the leading entry-level certification in cyber security and how to pass it.",
        to: "/guides/comptia-security-plus/",
      },
      {
        title: "Will AI replace cybersecurity professionals? Facts and trends",
        badge: "Industry Trends",
        desc: "Why AI increases rather than decreases the demand for skilled SOC analysts and cloud security specialists.",
        to: "/guides/will-ai-replace-cybersecurity-professionals/",
      },
    ],
    whyH2: "Why learn cyber security with Clarusway",
    whyIntro: "Combines CompTIA Security+ preparation, AI-enhanced SOC labs, and AWS Cloud Security.",
    whyItems: [
      { title: "SOC Analyst & Cloud Security Focus", desc: "Targeted training for the cyber security roles with the highest entry-level demand." },
      { title: "Agentic AI in Security Operations", desc: "Dedicated module on autonomous AI agents and SOAR automation in the SOC." },
      { title: "CompTIA Security+ Prep Integrated", desc: "Module 1 systematically prepares you for the international Security+ exam." },
      { title: "AZAV-Certified & 100% Funded", desc: "Full tuition coverage via a Bildungsgutschein from Agentur für Arbeit or Jobcenter." },
    ],
    reviewsH2: "What graduates say",
    reviews: [
      {
        initials: "DK",
        name: "DH Kim",
        role: "Cyber Security Track Graduate",
        platform: "Google Reviews",
        platformUrl: "https://www.google.com/maps",
        quote: "The hands-on SOC labs and Security+ preparation gave me the practical skills to pass technical security interviews.",
      },
    ],
    faqH2: "Cyber Security Course FAQ",
    faqs: [
      {
        q: "Can I join without an IT background?",
        a: "Yes. Module 1 is designed specifically for beginners without prior IT or coding experience. It builds your foundation in networking, Linux, Windows administration, and security fundamentals.",
      },
      {
        q: "Is the CompTIA Security+ exam fee included?",
        a: "Module 1 includes full exam preparation and practice tests for CompTIA Security+ (SY0-701). When funded through a Bildungsgutschein, exam voucher details are confirmed during your consultation.",
      },
      {
        q: "Can I start directly with Module 2?",
        a: "Yes. If you already have IT, networking, and Linux fundamentals (or hold CompTIA Security+), you can pass a technical assessment to start directly with Module 2.",
      },
      {
        q: "How long is the course?",
        a: "The full 4-module program runs full-time (Monday to Friday, 09:00–16:45 CET). Modular entry options starting at Module 2 have a shorter duration.",
      },
      {
        q: "Is the course free with a Bildungsgutschein?",
        a: "Yes. All module combinations are AZAV-certified and 100% covered with a Bildungsgutschein from the Agentur für Arbeit or Jobcenter.",
      },
      {
        q: "Do I get a laptop?",
        a: "Equipment support depends on the approved measure and funding conditions. During your free consultation, Clarusway clarifies all hardware and learning resource details with you.",
      },
      {
        q: "Do I need to speak German?",
        a: "No. All classes, labs, and career coaching are conducted in English. Clarusway provides all required German paperwork for your Agentur für Arbeit or Jobcenter advisor.",
      },
    ],
    relatedH2: "More IT courses",
    relatedCourses: [
      {
        title: "AWS Solutions Architect and DevOps Engineer Training",
        to: "/it-courses/devops-aws/",
        duration: "3 – 8 Months",
        nextStart: "24 Aug 2026",
        badge: "Cloud & DevOps",
      },
      {
        title: "AI Engineering Bootcamp",
        to: "/it-courses/ai-engineering/",
        duration: "32 Weeks",
        nextStart: "27 Jul 2026",
        badge: "Data Science & Agentic AI",
      },
      {
        title: "AI-Assisted Full Stack Developer Course",
        to: "/it-courses/full-stack-developer/",
        duration: "3 – 12 Months",
        nextStart: "27 Jul 2026",
        badge: "Web Development",
      },
    ],
    ctaH2: "Start your Cyber Security career in Germany",
    ctaText: "Book a free consultation in English and learn how to fund your course 100% with a Bildungsgutschein.",
  },

  "aws-devops": {
    key: "aws-devops",
    slugDe: "/it-kurse/aws-devops-weiterbildung/",
    slugEn: "/it-courses/devops-aws/",
    pdfFileName: "clarusway-aws-devops-course-syllabus.pdf",
    metaTitle: "AWS Solutions Architect and DevOps Engineer Training | Clarusway",
    metaDescription:
      "Become an AWS Cloud & DevOps Engineer: AI-enhanced AWS Solutions Architect, Docker, Kubernetes, Terraform, CI/CD & Azure in English. Funded with a Bildungsgutschein.",
    breadcrumbLabel: "AWS Solutions Architect & DevOps Training",
    eyebrow: "Program: AI-Enhanced AWS Solutions Architect/DevOps Engineer",
    h1: "AWS Solutions Architect and DevOps Engineer Training with AI",
    heroIntro:
      "The AWS Solutions Architect and DevOps Engineer Training at Clarusway is an intensive live online program in English that qualifies you across three AI-enhanced building blocks (AWS Cloud Engineer, DevOps Engineer, and Azure Basics). Clarusway is an official AWS Select Tier Partner and AZAV-certified — 100% funded with a Bildungsgutschein (education voucher).",
    heroSubnote:
      "Entry for beginners & IT professionals · Prepares for AWS SAA-C03 & Azure AZ-900 · Max. 15 students per cohort.",
    heroBadges: ["AWS SAA-C03", "Docker", "Kubernetes", "Terraform", "Jenkins & CI/CD", "Microsoft Azure"],
    terminalTitle: "terraform_apply.sh",
    terminalLines: [
      { text: "$ aws configure --profile production-eu", color: "#4ade80" },
      { text: "Region: eu-central-1 (Frankfurt)", color: "#9ca3af" },
      { text: "$ kubectl get pods -n production", color: "#60a5fa" },
      { text: "Running — 3/3 pods healthy", color: "#4ade80" },
      { text: "$ terraform apply -auto-approve", color: "#fde047" },
      { text: "✓ Infrastructure deployed (12 added, 0 destroyed)", color: "#4ade80" },
    ],
    infoStrip: [
      ["3 – 8 Months", "5 Modular Combinations"],
      ["Taught in English", "Live Online Instruction"],
      ["AWS Partner", "Select Tier Consulting Partner"],
      ["Max. 15", "Students per Cohort"],
      ["AZAV Certified", "100% Bildungsgutschein"],
    ],
    audienceH2: "Who is the AWS & DevOps course for?",
    audienceIntro:
      "The modular structure offers tailored entry points for both complete beginners and experienced system administrators or software developers.",
    audienceCards: [
      {
        title: "Career Changers Starting from Scratch",
        badge: "Full 8-Month Track",
        desc: "Begin in Module 1 with Linux, networking, and AWS Cloud foundations before advancing to Docker, Kubernetes, Terraform, and Microsoft Azure.",
        bullets: [
          "No technical entrance exam required for Module 1",
          "Daily live mentoring and guided AWS cloud labs",
          "Real infrastructure milestone projects for your GitHub portfolio",
        ],
      },
      {
        title: "IT Professionals, SysAdmins & Developers",
        badge: "Modular Specialization (2–6 Months)",
        desc: "System administrators and developers can book individual modules such as DevOps Engineering (Module 2) or Azure Fundamentals (Module 3).",
        bullets: [
          "Direct entry into Module 2 (DevOps) or Module 3 (Azure)",
          "Compact full-time training in 2 to 6 months",
          "Targeted preparation for AWS SAA-C03 and Azure AZ-900 exams",
        ],
      },
    ],
    programSelectorH2: "AWS & DevOps course: modules, duration and start dates",
    programSelectorSubtitle:
      "Select the complete 8-month multi-cloud package or choose one of five AZAV-certified module combinations.",
    modules: [
      {
        id: 1,
        label: "Module 1",
        title: "AI-Enhanced AWS Cloud Engineer",
        duration: "Module 1",
        color: PRIMARY,
        prerequisite: "No prior IT knowledge required (includes Linux & networking foundations).",
        project: "Highly Available Multi-Tier AWS Cloud Architecture",
        topics: [
          "AWS Cloud Foundations & Linux/Networking Basics",
          "EC2, S3, VPC, IAM, Route 53 & RDS",
          "Cloud Architecture Best Practices (Well-Architected Framework)",
          "High Availability, Auto Scaling & CloudFormation",
          "AWS Certified Solutions Architect – Associate (SAA-C03) Exam Prep",
        ],
      },
      {
        id: 2,
        label: "Module 2",
        title: "AI-Enhanced DevOps Engineer",
        duration: "Module 2",
        color: SECONDARY,
        prerequisite: "Module 1 or solid cloud and Linux fundamentals.",
        project: "Automated CI/CD Pipeline on Kubernetes Provisioned with Terraform",
        topics: [
          "CI/CD Pipelines with GitHub Actions & Jenkins",
          "Docker Containerization & Image Management",
          "Kubernetes Orchestration & Cluster Operations",
          "Terraform & Infrastructure as Code (IaC)",
          "Monitoring & Logging with Prometheus, Grafana & CloudWatch",
        ],
      },
      {
        id: 3,
        label: "Module 3",
        title: "AI-Enhanced Azure Basics",
        duration: "Module 3",
        color: ACCENT,
        prerequisite: "Cloud fundamentals (recommended after Module 1 or Module 2).",
        project: "Multi-Cloud & Hybrid-Cloud Deployment (AWS + Azure)",
        topics: [
          "Azure Core Services (VMs, Storage, Virtual Networks)",
          "Microsoft Entra ID (Azure AD) & Governance",
          "Azure DevOps & Azure Kubernetes Service (AKS)",
          "Hybrid-Cloud Strategies & Cost Management",
          "Microsoft Azure Fundamentals (AZ-900) Exam Prep",
        ],
      },
    ],
    programs: [
      {
        id: "full",
        anchorId: "aws-eng-for-beginner",
        title: "AWS/DevOps Engineering + Azure Fundamentals",
        subtitle: "Complete Multi-Cloud Path (All 3 Modules)",
        badge: "Module 1 + 2 + 3 · 8 Months",
        moduleIds: [1, 2, 3],
        startsAt: 1,
        duration: "8 Months",
        schedule: "Mon–Fri, 09:00–16:45 CET",
        capacity: "Max. 15 Students",
        language: "Taught in English",
        dates: ["24 Aug 2026", "12 Oct 2026", "30 Nov 2026", "28 Dec 2026"],
        recommended: true,
        description:
          "The complete 8-month package — from AWS Cloud Architecture and DevOps Engineering to Azure Fundamentals. Ideal for beginners and aspiring multi-cloud engineers.",
      },
      {
        id: "aws-devops",
        anchorId: "aws-eng-for-pro",
        title: "AWS/DevOps Engineering",
        subtitle: "AWS & CI/CD Focus",
        badge: "Module 1 + 2 · 6 Months",
        moduleIds: [1, 2],
        startsAt: 1,
        duration: "6 Months",
        schedule: "Mon–Fri, 09:00–16:45 CET",
        capacity: "Max. 15 Students",
        language: "Taught in English",
        dates: ["24 Aug 2026", "12 Oct 2026", "30 Nov 2026"],
        recommended: false,
        description:
          "Combines AWS Solutions Architect and DevOps Engineering in a 6-month program covering AWS, Docker, Kubernetes, Terraform, and CI/CD pipelines.",
      },
      {
        id: "architect",
        title: "AWS Solutions Architect",
        subtitle: "Cloud Architecture Focus",
        badge: "Module 1 · 3 Months",
        moduleIds: [1],
        startsAt: 1,
        duration: "3 Months",
        schedule: "Mon–Fri, 09:00–16:45 CET",
        capacity: "Max. 15 Students",
        language: "Taught in English",
        dates: ["24 Aug 2026", "12 Oct 2026"],
        recommended: false,
        description:
          "Focused 3-month specialization in AWS Cloud infrastructure and preparation for the AWS Certified Solutions Architect – Associate (SAA-C03) exam.",
      },
      {
        id: "devops",
        title: "DevOps Engineering",
        subtitle: "Direct Entry with Cloud Basics",
        badge: "Module 2 · 3 Months",
        moduleIds: [2],
        startsAt: 2,
        duration: "3 Months",
        schedule: "Mon–Fri, 09:00–16:45 CET",
        capacity: "Max. 15 Students",
        language: "Taught in English",
        dates: ["12 Oct 2026", "30 Nov 2026"],
        recommended: false,
        description:
          "Direct entry into Module 2 for learners with existing AWS and Linux skills: Docker, Kubernetes, Terraform, Jenkins, and Prometheus/Grafana.",
      },
      {
        id: "azure",
        title: "Azure Fundamentals",
        subtitle: "Multi-Cloud Add-On",
        badge: "Module 3 · 2 Months",
        moduleIds: [3],
        startsAt: 3,
        duration: "2 Months",
        schedule: "Mon–Fri, 09:00–16:45 CET",
        capacity: "Max. 15 Students",
        language: "Taught in English",
        dates: ["30 Nov 2026", "28 Dec 2026"],
        recommended: false,
        description:
          "2-month expansion module covering Microsoft Azure services, hybrid cloud operations, and AZ-900 exam preparation.",
      },
    ],
    curriculumH2: "What you learn in the AWS & DevOps course",
    curriculumIntro:
      "Three progressive modules take you from Linux and AWS fundamentals to automated Kubernetes pipelines and multi-cloud architectures with Microsoft Azure.",
    formatH2: "How the course works",
    formatIntro: "Full-time live online instruction in English combined with daily cloud and DevOps lab sessions.",
    formatHighlights: [
      { title: "Daily Hands-On Cloud Labs", desc: "Mon–Fri from 09:00 to 16:45 CET. Provision real AWS resources, Kubernetes clusters, and Terraform stacks." },
      { title: "Taught in English", desc: "AWS, Azure, Kubernetes, and Terraform documentation and exams operate globally in English." },
      { title: "Real Milestone Projects", desc: "Publish documented infrastructure-as-code and CI/CD projects to your GitHub portfolio after every module." },
    ],
    summaryTable: [
      ["Schedule", "Mon–Fri, 09:00–16:45 CET"],
      ["Duration", "8 Months (Full) · 6 Mo. (M1+M2) · 2–3 Mo. (Single Module)"],
      ["Curriculum", "Module 1 (AWS) + Module 2 (DevOps) + Module 3 (Azure)"],
      ["Class Size", "Max. 15 students per cohort"],
      ["Instruction Language", "Taught in English"],
      ["Certifications", "AZAV Certificate + Prep for AWS SAA-C03 & Azure AZ-900"],
    ],
    fundingH2: "Take the AWS & DevOps course for free with a Bildungsgutschein",
    fundingText:
      "All five module combinations are AZAV-certified. With a Bildungsgutschein (education voucher) from the Agentur für Arbeit or Jobcenter, 100% of the tuition is covered.",
    fundingBullets: [
      "100% coverage of tuition fees with a Bildungsgutschein",
      "Both single modules and the 8-month package are eligible",
      "German enrollment documents prepared within 24 hours",
    ],
    fundingLinkLabel: "how to get a Bildungsgutschein",
    fundingLinkTo: "/bildungsgutschein/",
    qcgLinkLabel: "Qualifizierungschancengesetz funding",
    qcgLinkTo: "/qualifizierungschancengesetz/",
    careerH2: "Jobs after the AWS & DevOps course",
    careerIntro: "Companies across Germany rely on English-speaking cloud and DevOps engineers to run their infrastructure.",
    careerRoles: [
      {
        title: "DevOps Engineer",
        salaryMedian: "€64,800",
        salaryRange: "€55,000 – €78,500",
        salarySource: "StepStone Salary Report 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Automates software delivery with CI/CD pipelines, Docker, Kubernetes, and Infrastructure as Code (Terraform).",
        guideLabel: "DevOps Engineer Career & Salary Guide in Germany",
        guideUrl: "/guides/devops-engineer/",
      },
      {
        title: "Cloud Engineer",
        salaryMedian: "€61,500",
        salaryRange: "€52,000 – €74,000",
        salarySource: "StepStone Salary Report 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Plans, migrates, and operates secure, high-availability cloud infrastructures on AWS and Microsoft Azure.",
        guideLabel: "AWS Certifications Overview",
        guideUrl: "/guides/aws-certifications/",
      },
      {
        title: "AWS Solutions Architect",
        salaryMedian: "€68,400",
        salaryRange: "€58,000 – €84,000",
        salarySource: "StepStone Salary Report 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Designs scalable, cost-optimized, and resilient cloud architectures following the AWS Well-Architected Framework.",
        guideLabel: "AWS Cloud Practitioner & SAA Guide",
        guideUrl: "/guides/aws-cloud-practitioner/",
      },
    ],
    clusterH2: "Guides on AWS and DevOps",
    clusterIntro: "Explore Clarusway's guides on DevOps careers and AWS certifications in Germany.",
    clusterGuides: [
      {
        title: "What does a DevOps engineer do? Skills, tools and salary",
        badge: "Career Guide (Featured)",
        desc: "What a DevOps Engineer does, which tools are mandatory, and what you can earn in Germany.",
        to: "/guides/devops-engineer/",
      },
      {
        title: "AWS certifications: which one to take first in 2026",
        badge: "Certification Guide",
        desc: "From Cloud Practitioner to Solutions Architect Associate: how to plan your AWS certification path.",
        to: "/guides/aws-certifications/",
      },
      {
        title: "AWS Cloud Practitioner (CLF-C02): exam guide, cost and preparation",
        badge: "Exam Guide",
        desc: "Domains, study tips, and preparation roadmap for Amazon Web Services' foundational certification.",
        to: "/guides/aws-cloud-practitioner/",
      },
    ],
    whyH2: "Why learn AWS and DevOps with Clarusway",
    whyIntro: "Official AWS Partner training combined with daily infrastructure practice.",
    whyItems: [
      { title: "AWS Select Tier Consulting Partner", desc: "Learn with up-to-date AWS architecture standards and experienced cloud instructors." },
      { title: "Multi-Cloud Skills (AWS + Azure)", desc: "Module 3 adds Microsoft Azure — highly valued by German enterprise employers." },
      { title: "Kubernetes & Terraform Focus", desc: "Intensive hands-on practice with Docker, Kubernetes, Terraform, and CI/CD automation." },
      { title: "AZAV-Certified & 100% Funded", desc: "All 5 program variants are eligible for a Bildungsgutschein." },
    ],
    partnerHighlight: {
      badge: "Official Partnership",
      title: "AWS Select Tier Consulting Partner",
      desc: "Clarusway is an official partner in the Amazon Web Services Partner Network. Students train on real-world cloud scenarios and prepare systematically for official AWS certifications.",
    },
    reviewsH2: "What graduates say",
    reviews: [
      {
        initials: "DK",
        name: "DH Kim",
        role: "AWS & DevOps Graduate",
        platform: "Google Reviews",
        platformUrl: "https://www.google.com/maps",
        quote: "The instructors are always available and walk you through real AWS, Terraform, and Kubernetes deployments step by step.",
      },
      {
        initials: "M",
        name: "Morad",
        role: "Cloud & DevOps Track Graduate",
        platform: "Course Report",
        platformUrl: "https://www.coursereport.com/schools/clarusway",
        quote: "Clarusway helped me enter cloud engineering without prior experience. The live labs make all the difference.",
      },
    ],
    faqH2: "AWS & DevOps Course FAQ",
    faqs: [
      {
        q: "Which AWS certifications does the course prepare me for?",
        a: "Module 1 prepares you for the AWS Certified Solutions Architect – Associate (SAA-C03) exam, and also covers the foundations for AWS Cloud Practitioner (CLF-C02). Module 3 prepares you for Microsoft Azure Fundamentals (AZ-900).",
      },
      {
        q: "Are exam fees included?",
        a: "When funded via a Bildungsgutschein, certification exam arrangements and study resources are clarified as part of your individual course offer.",
      },
      {
        q: "Can I join as a beginner?",
        a: "Yes. Module 1 and the 8-month full package require no prior IT or coding knowledge — Linux and networking fundamentals are taught at the start of the course.",
      },
      {
        q: "What is the difference between the beginner and professional entry?",
        a: "Beginners start at Module 1 (AWS Solutions Architect, 6 or 8 months total). Applicants who already have AWS and Linux experience can enter directly into Module 2 (DevOps Engineering, 3 months) or Module 3 (Azure Fundamentals, 2 months).",
      },
      {
        q: "Is the course free with a Bildungsgutschein?",
        a: "Yes. All five module combinations are AZAV-certified and 100% covered with a Bildungsgutschein from the Agentur für Arbeit or Jobcenter.",
      },
      {
        q: "Do I need to speak German?",
        a: "No. All classes, cloud labs, and career coaching are taught in English. Clarusway provides all official German documentation for your Agentur für Arbeit or Jobcenter advisor.",
      },
    ],
    relatedH2: "More IT courses",
    relatedCourses: [
      {
        title: "AI Engineering Bootcamp",
        to: "/it-courses/ai-engineering/",
        duration: "32 Weeks",
        nextStart: "27 Jul 2026",
        badge: "Data Science & Agentic AI",
      },
      {
        title: "Cyber Security Analyst Course",
        to: "/it-courses/cyber-security/",
        duration: "4 Modules",
        nextStart: "24 Aug 2026",
        badge: "SOC & Cloud Security",
      },
      {
        title: "Kubernetes CKAD Certification Course",
        to: "/it-courses/kubernetes-ckad-certification-course/",
        duration: "4 Weeks",
        nextStart: "12 Oct 2026",
        badge: "Kubernetes Specialization",
      },
    ],
    ctaH2: "Start your AWS & DevOps course in Germany",
    ctaText: "Book a free consultation in English — Clarusway helps you select the right module combination and apply for your Bildungsgutschein.",
  },

  "aws-solutions-architect": {
    key: "aws-solutions-architect",
    slugDe: "/it-kurse/aws-solutions-architect-weiterbildung/",
    slugEn: "/it-courses/aws-solutions-architect/",
    pdfFileName: "clarusway-aws-solutions-architect-syllabus.pdf",
    metaTitle: "AWS Solutions Architect Course | Clarusway",
    metaDescription:
      "3-month AWS Solutions Architect Course in English: EC2, S3, VPC, IAM, High Availability & AWS SAA-C03 exam prep. 100% funded with a Bildungsgutschein.",
    breadcrumbLabel: "AWS Solutions Architect Course",
    eyebrow: "Program: AWS Solutions Architect (Module 1)",
    h1: "AWS Solutions Architect Course with Certification Prep",
    heroIntro:
      "The AWS Solutions Architect Course at Clarusway is a 3-month full-time live online program in English where you learn to design secure, scalable, and highly available cloud infrastructures on Amazon Web Services — including targeted preparation for the AWS Solutions Architect Associate (SAA-C03) exam and 100% funding with a Bildungsgutschein (education voucher).",
    heroSubnote:
      "3 months full-time · Official AWS Select Tier Partner · Expandable to DevOps Engineering.",
    heroBadges: ["AWS SAA-C03", "EC2 & S3", "VPC & IAM", "RDS & DynamoDB", "CloudFormation", "Auto Scaling"],
    terminalTitle: "aws_well_architected.yaml",
    terminalLines: [
      { text: "AWSTemplateFormatVersion: '2010-09-09'", color: "#60a5fa" },
      { text: "Resources: MultiAZProductionVPC & AutoScalingGroup", color: "#e5e7eb" },
      { text: "$ aws cloudformation deploy --stack-name prod-arch", color: "#fde047" },
      { text: "✓ Stack CREATE_COMPLETE · SAA-C03 Ready", color: "#4ade80" },
    ],
    infoStrip: [
      ["3 Months", "Compact Full-Time Duration"],
      ["Taught in English", "Live Online Instruction"],
      ["SAA-C03", "Exam Prep Included"],
      ["Max. 15", "Students per Cohort"],
      ["AZAV Certified", "100% Bildungsgutschein"],
    ],
    audienceH2: "Who is the AWS Solutions Architect course for?",
    audienceIntro: "Ideal for career changers and IT specialists who want to build a strong AWS cloud foundation in 3 months.",
    audienceCards: [
      {
        title: "Beginners Entering Cloud Computing",
        badge: "Includes Linux & Networking Basics",
        desc: "Start with Linux, networking, and cloud fundamentals and build production-ready AWS architectures within 12 weeks.",
        bullets: ["No prior cloud knowledge needed", "Daily hands-on labs in the AWS Console", "Capstone cloud architecture project"],
      },
      {
        title: "System Administrators & Developers",
        badge: "AWS Certification Upgrade",
        desc: "Qualify for cloud migration projects and the AWS Certified Solutions Architect – Associate (SAA-C03) certification.",
        bullets: ["AWS Well-Architected Framework in practice", "Infrastructure as Code with CloudFormation", "Can be combined with DevOps (Module 2)"],
      },
    ],
    programSelectorH2: "AWS Solutions Architect course: modules, duration and start dates",
    programSelectorSubtitle: "Take the 3-month AWS Solutions Architect program standalone or combine it with DevOps Engineering.",
    modules: [
      {
        id: 1,
        label: "Module 1",
        title: "AWS Solutions Architect",
        duration: "3 Months",
        color: PRIMARY,
        topics: ["Linux & Networking Foundations", "IAM, VPC, EC2, S3, Route 53", "RDS, DynamoDB & Caching", "High Availability & SAA-C03 Prep"],
      },
      {
        id: 2,
        label: "Module 2 (Optional)",
        title: "DevOps Engineering",
        duration: "3 Months",
        color: SECONDARY,
        topics: ["Docker & Kubernetes", "CI/CD with Jenkins & GitHub Actions", "Terraform & Monitoring"],
      },
    ],
    programs: [
      {
        id: "saa-only",
        title: "AWS Solutions Architect (Module 1)",
        subtitle: "Standalone 3-Month Course",
        badge: "Module 1 · 3 Months",
        moduleIds: [1],
        startsAt: 1,
        duration: "3 Months",
        schedule: "Mon–Fri, 09:00–16:45 CET",
        capacity: "Max. 15 Students",
        language: "Taught in English",
        dates: ["24 Aug 2026", "12 Oct 2026", "30 Nov 2026"],
        recommended: true,
        description: "Focused 3-month training on AWS cloud infrastructure and preparation for the AWS SAA-C03 certification.",
      },
      {
        id: "saa-plus-devops",
        title: "AWS Solutions Architect + DevOps Engineering",
        subtitle: "Combined Track (Module 1 + Module 2)",
        badge: "Module 1 + 2 · 6 Months",
        moduleIds: [1, 2],
        startsAt: 1,
        duration: "6 Months",
        schedule: "Mon–Fri, 09:00–16:45 CET",
        capacity: "Max. 15 Students",
        language: "Taught in English",
        dates: ["24 Aug 2026", "12 Oct 2026"],
        recommended: false,
        description: "Combine AWS Cloud Architecture with Docker, Kubernetes, Terraform, and CI/CD automation.",
      },
    ],
    curriculumH2: "What you learn in the AWS Solutions Architect course",
    curriculumIntro: "Hands-on practice across all core Amazon Web Services domains.",
    formatH2: "How the course works",
    formatIntro: "3 months of intensive full-time live classes in English.",
    formatHighlights: [
      { title: "Live AWS Console Labs", desc: "Configure VPCs, Load Balancers, RDS databases, and CloudFormation stacks every day." },
      { title: "Taught in English", desc: "Direct preparation for the English AWS SAA-C03 exam and international cloud teams." },
      { title: "Mock Exams Included", desc: "Regular practice tests and architecture reviews with AWS-certified instructors." },
    ],
    summaryTable: [
      ["Schedule", "Mon–Fri, 09:00–16:45 CET"],
      ["Duration", "3 Months"],
      ["Certification Goal", "AWS Certified Solutions Architect – Associate (SAA-C03)"],
      ["Class Size", "Max. 15 students"],
      ["Instruction Language", "Taught in English"],
      ["Funding", "AZAV-certified · 100% funded with a Bildungsgutschein"],
    ],
    fundingH2: "Take the AWS Solutions Architect course for free with a Bildungsgutschein",
    fundingText:
      "This 3-month course is AZAV-certified and 100% covered with a Bildungsgutschein (education voucher) from the Agentur für Arbeit or Jobcenter.",
    fundingBullets: [
      "100% tuition coverage with a Bildungsgutschein",
      "Compact 3-month duration for rapid cloud qualification",
      "Can be extended with DevOps Engineering",
    ],
    fundingLinkLabel: "how to get a Bildungsgutschein",
    fundingLinkTo: "/bildungsgutschein/",
    qcgLinkLabel: "Qualifizierungschancengesetz funding",
    qcgLinkTo: "/qualifizierungschancengesetz/",
    careerH2: "Jobs after the AWS Solutions Architect course",
    careerIntro: "Strong AWS architecture skills qualify you for cloud roles across Germany.",
    careerRoles: [
      {
        title: "AWS Solutions Architect",
        salaryMedian: "€68,400",
        salaryRange: "€58,000 – €84,000",
        salarySource: "StepStone Salary Report 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Designs secure, scalable AWS cloud infrastructures and guides cloud migrations.",
        guideLabel: "AWS Certifications Guide",
        guideUrl: "/guides/aws-certifications/",
      },
      {
        title: "Cloud Engineer",
        salaryMedian: "€61,500",
        salaryRange: "€52,000 – €74,000",
        salarySource: "StepStone Salary Report 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Implements, monitors, and optimizes AWS cloud resources.",
        guideLabel: "DevOps & Cloud Engineer Guide",
        guideUrl: "/guides/devops-engineer/",
      },
    ],
    clusterH2: "Guides on AWS",
    clusterIntro: "Read more about AWS certifications and exams.",
    clusterGuides: [
      {
        title: "AWS Certifications: Which Exam to Take First",
        badge: "Certification Guide",
        desc: "Compare AWS Cloud Practitioner, Solutions Architect Associate, and DevOps certifications.",
        to: "/guides/aws-certifications/",
      },
      {
        title: "AWS Cloud Practitioner (CLF-C02): Exam & Study Guide",
        badge: "Exam Guide",
        desc: "How to prepare for the foundational AWS certification.",
        to: "/guides/aws-cloud-practitioner/",
      },
    ],
    whyH2: "Why learn AWS with Clarusway",
    whyIntro: "Official AWS Partner training in small live cohorts.",
    whyItems: [
      { title: "AWS Select Tier Partner", desc: "Curriculum aligned with official AWS Well-Architected standards." },
      { title: "Compact 3-Month Format", desc: "Fast qualification for cloud roles or a stepping stone into DevOps." },
      { title: "AZAV-Certified & 100% Funded", desc: "100% covered with a Bildungsgutschein." },
    ],
    reviewsH2: "What graduates say",
    reviews: [
      {
        initials: "DK",
        name: "DH Kim",
        role: "AWS Track Graduate",
        platform: "Google Reviews",
        platformUrl: "https://www.google.com/maps",
        quote: "The daily AWS labs prepared me thoroughly for the Solutions Architect Associate exam.",
      },
    ],
    faqH2: "AWS Solutions Architect Course FAQ",
    faqs: [
      {
        q: "Do I need prior cloud experience?",
        a: "No. The course starts with Linux, networking, and cloud fundamentals before diving into AWS core services.",
      },
      {
        q: "Which certification does the course prepare me for?",
        a: "It prepares you directly for the AWS Certified Solutions Architect – Associate (SAA-C03) exam.",
      },
      {
        q: "Is the course free with a Bildungsgutschein?",
        a: "Yes. It is AZAV-certified and 100% funded with a Bildungsgutschein from the Agentur für Arbeit or Jobcenter.",
      },
      {
        q: "Do I need to speak German?",
        a: "No. Classes and labs are taught in English, and Clarusway provides all German documents required for your advisor.",
      },
    ],
    relatedH2: "More IT courses",
    relatedCourses: [
      {
        title: "AWS & DevOps Engineer Course (8 Months)",
        to: "/it-courses/devops-aws/",
        duration: "3 – 8 Months",
        nextStart: "24 Aug 2026",
        badge: "AWS + DevOps + Azure",
      },
      {
        title: "Kubernetes CKAD Certification Course",
        to: "/it-courses/kubernetes-ckad-certification-course/",
        duration: "4 Weeks",
        nextStart: "12 Oct 2026",
        badge: "Kubernetes",
      },
    ],
    ctaH2: "Start your AWS Solutions Architect course",
    ctaText: "Book a free consultation in English and secure 100% funding with a Bildungsgutschein.",
  },

  sdet: {
    key: "sdet",
    slugDe: "/it-kurse/software-testing-weiterbildung/",
    slugEn: "/it-courses/software-development-engineer-in-test/",
    pdfFileName: "clarusway-sdet-course-syllabus.pdf",
    metaTitle: "SDET Course: Software Testing and Automation | Clarusway",
    metaDescription:
      "Become a Software Development Engineer in Test (SDET): Java, Selenium, Cypress, Playwright, API Testing & CI/CD in English. Funded with a Bildungsgutschein.",
    breadcrumbLabel: "SDET Course",
    eyebrow: "Program: Quality Assurance & Test Automation (SDET)",
    h1: "Software Development Engineer in Test (SDET) Course",
    heroIntro:
      "The Software Development Engineer in Test (SDET) Course at Clarusway trains you in English to design automated software test frameworks for web applications, REST APIs, and databases using Java, Selenium, Cypress, Playwright, Postman, and Jenkins CI/CD — 100% funded in Germany with a Bildungsgutschein (education voucher).",
    heroSubnote:
      "Ideal entry into IT without heavy math · Manual QA + Test Automation + ISTQB foundation.",
    heroBadges: ["Java & OOP", "Selenium & Cypress", "Playwright", "API Testing (Postman)", "SQL & Databases", "Jenkins CI/CD"],
    terminalTitle: "e2e_regression_suite.spec.ts",
    terminalLines: [
      { text: "$ npx playwright test --project=chromium", color: "#4ade80" },
      { text: "Running 64 end-to-end & API contract tests...", color: "#60a5fa" },
      { text: "✓ Checkout flow & OAuth2 API verified (64 passed)", color: "#4ade80" },
    ],
    infoStrip: [
      ["Full-Time", "Structured Live Program"],
      ["Taught in English", "Live Online Instruction"],
      ["Beginner Friendly", "No Prior Coding Needed"],
      ["Max. 15", "Students per Cohort"],
      ["AZAV Certified", "100% Bildungsgutschein"],
    ],
    audienceH2: "Who is the SDET course for?",
    audienceIntro: "Quality Assurance and Test Automation offer one of the most structured, accessible paths into software engineering.",
    audienceCards: [
      {
        title: "Detail-Oriented Career Changers",
        badge: "Accessible Entry into Tech",
        desc: "Learn Java programming, SQL, and automated testing step by step without needing advanced mathematics.",
        bullets: ["Starts from zero coding knowledge", "Combines analytical thinking with clean test code", "High demand across German software companies"],
      },
      {
        title: "Manual Testers Moving to Automation",
        badge: "Upgrade to SDET",
        desc: "Upgrade from manual test execution to writing scalable UI and API automation frameworks integrated into CI/CD pipelines.",
        bullets: ["Selenium, Cypress & Playwright frameworks", "REST API testing with Postman & RestAssured", "Continuous Testing with Jenkins & GitHub Actions"],
      },
    ],
    programSelectorH2: "SDET course: modules, duration and start dates",
    programSelectorSubtitle: "Two seamlessly connected modules take you from programming fundamentals to enterprise test automation.",
    modules: [
      {
        id: 1,
        label: "Phase 1",
        title: "Programming Foundations, SQL & Manual QA (ISTQB)",
        duration: "Phase 1",
        color: PRIMARY,
        topics: ["Java Programming & Object-Oriented Design", "HTML, CSS & Web Architecture for Testers", "SQL & Database Validation", "Manual QA, Agile Scrum, Jira/Xray & ISTQB Concepts"],
      },
      {
        id: 2,
        label: "Phase 2",
        title: "UI & API Test Automation (SDET) and CI/CD",
        duration: "Phase 2",
        color: SECONDARY,
        topics: ["Selenium WebDriver, TestNG, Cucumber BDD & Page Object Model", "Modern End-to-End Testing with Cypress & Playwright", "API Automation with Postman & RestAssured", "CI/CD Integration with Git, Jenkins & Docker"],
      },
    ],
    programs: [
      {
        id: "sdet-full",
        title: "SDET: QA & Test Automation (Full Track)",
        subtitle: "Manual QA + Java + UI/API Automation + CI/CD",
        badge: "Complete SDET Program",
        moduleIds: [1, 2],
        startsAt: 1,
        duration: "Full Track",
        schedule: "Mon–Fri, 09:00–16:45 CET",
        capacity: "Max. 15 Students",
        language: "Taught in English",
        dates: ["14 Sep 2026", "02 Nov 2026"],
        recommended: true,
        description: "Complete qualification as a QA Engineer and Software Development Engineer in Test (SDET).",
      },
    ],
    curriculumH2: "What you learn in the SDET course",
    curriculumIntro: "Write clean, maintainable automated tests for real web platforms and microservices.",
    formatH2: "How the course works",
    formatIntro: "Daily live instruction in English combined with hands-on test automation labs.",
    formatHighlights: [
      { title: "Daily Automation Labs", desc: "Build real Page Object Model and BDD test suites on GitHub." },
      { title: "Taught in English", desc: "Learn industry-standard QA terminology, Jira workflows, and test reporting in English." },
      { title: "Agile Sprint Practice", desc: "Participate in sprint ceremonies, bug triage, and automated regression runs." },
    ],
    summaryTable: [
      ["Schedule", "Mon–Fri, 09:00–16:45 CET"],
      ["Tech Stack", "Java, Selenium, Cucumber, Cypress, Playwright, Postman, SQL, Jenkins"],
      ["Class Size", "Max. 15 students"],
      ["Instruction Language", "Taught in English"],
      ["Funding", "AZAV-certified · 100% funded with a Bildungsgutschein"],
    ],
    fundingH2: "Take the SDET course for free with a Bildungsgutschein",
    fundingText:
      "The SDET Course at Clarusway is AZAV-certified and 100% covered with a Bildungsgutschein (education voucher) from the Agentur für Arbeit or Jobcenter.",
    fundingBullets: [
      "100% tuition coverage with a Bildungsgutschein",
      "Strong job market demand for automated software testers",
      "German enrollment documents prepared for your advisor",
    ],
    fundingLinkLabel: "how to get a Bildungsgutschein",
    fundingLinkTo: "/bildungsgutschein/",
    qcgLinkLabel: "Qualifizierungschancengesetz funding",
    qcgLinkTo: "/qualifizierungschancengesetz/",
    careerH2: "Jobs after the SDET course",
    careerIntro: "Every software release requires reliable automated testing — creating steady demand for QA and SDET specialists.",
    careerRoles: [
      {
        title: "QA Automation Engineer / SDET",
        salaryMedian: "€56,400",
        salaryRange: "€46,000 – €68,500",
        salarySource: "StepStone Salary Report 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Develops automated end-to-end and API test frameworks and integrates them into CI/CD pipelines.",
        guideLabel: "Full Stack & Software Engineering Guides",
        guideUrl: "/guides/full-stack-developer/",
      },
      {
        title: "Quality Assurance (QA) Analyst",
        salaryMedian: "€49,200",
        salaryRange: "€41,500 – €58,000",
        salarySource: "StepStone Salary Report 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Plans test strategies, executes exploratory and database tests, and manages release quality.",
        guideLabel: "What is a Full Stack Developer?",
        guideUrl: "/guides/full-stack-developer/",
      },
    ],
    clusterH2: "Guides on software careers in Germany",
    clusterIntro: "Explore developer roles, testing frameworks, and IT career paths in Germany.",
    clusterGuides: [
      {
        title: "What is a full stack developer? Skills, salary and tools in 2026",
        badge: "Career Guide",
        desc: "Learn about software engineering roles, development tools, and career paths in Germany.",
        to: "/guides/full-stack-developer/",
      },
    ],
    whyH2: "Why learn software testing with Clarusway",
    whyIntro: "Practical UI, API, and database test automation from day one.",
    whyItems: [
      { title: "Automation First", desc: "Learn Java, Selenium, Playwright, and RestAssured instead of manual-only theory." },
      { title: "Beginner Friendly", desc: "No prior coding experience required." },
      { title: "AZAV-Certified & 100% Funded", desc: "Full tuition coverage via Bildungsgutschein." },
    ],
    reviewsH2: "What graduates say",
    reviews: [
      {
        initials: "M",
        name: "Morad",
        role: "Clarusway Graduate",
        platform: "Course Report",
        platformUrl: "https://www.coursereport.com/schools/clarusway",
        quote: "The SDET program gave me a clear, structured entry into the software industry.",
      },
    ],
    faqH2: "SDET Course FAQ",
    faqs: [
      {
        q: "What is an SDET?",
        a: "SDET stands for Software Development Engineer in Test — a professional who writes code to automatically test web applications, APIs, and databases within CI/CD pipelines.",
      },
      {
        q: "Do I need programming experience to join?",
        a: "No. Phase 1 teaches Java, SQL, and web fundamentals from scratch.",
      },
      {
        q: "Is the course free with a Bildungsgutschein?",
        a: "Yes. The course is AZAV-certified and 100% funded with a Bildungsgutschein from the Agentur für Arbeit or Jobcenter.",
      },
      {
        q: "Do I need to speak German?",
        a: "No. All classes and career coaching are taught in English, and Clarusway prepares all German documents for your advisor.",
      },
    ],
    relatedH2: "More IT courses",
    relatedCourses: [
      {
        title: "AI-Assisted Full Stack Developer Course",
        to: "/it-courses/full-stack-developer/",
        duration: "3 – 12 Months",
        nextStart: "27 Jul 2026",
        badge: "Web Development",
      },
      {
        title: "AWS Solutions Architect and DevOps Engineer Training",
        to: "/it-courses/devops-aws/",
        duration: "3 – 8 Months",
        nextStart: "24 Aug 2026",
        badge: "Cloud & CI/CD",
      },
    ],
    ctaH2: "Start your SDET course in Germany",
    ctaText: "Book a free consultation in English and get your personalized Bildungsgutschein offer.",
  },

  "kubernetes-ckad": {
    key: "kubernetes-ckad",
    isShortTemplate: true,
    slugDe: "/it-kurse/kubernetes-ckad-zertifikat-kurs/",
    slugEn: "/it-courses/kubernetes-ckad-certification-course/",
    pdfFileName: "clarusway-kubernetes-ckad-syllabus.pdf",
    metaTitle: "Kubernetes CKAD Certification Course | Clarusway",
    metaDescription:
      "Intensive Kubernetes CKAD Certification Course in English: Pods, Deployments, Helm, Services, NetworkPolicies & CKAD exam simulations. Funded with a Bildungsgutschein.",
    breadcrumbLabel: "Kubernetes CKAD Course",
    eyebrow: "Short Specialization: Certified Kubernetes Application Developer (CKAD)",
    h1: "Kubernetes CKAD Certification Course",
    heroIntro:
      "The Kubernetes CKAD Certification Course at Clarusway is an intensive 4-week hands-on program in English that prepares developers, DevOps engineers, and cloud administrators for the official CNCF Certified Kubernetes Application Developer (CKAD) performance-based exam — AZAV-certified and 100% funded with a Bildungsgutschein or Qualifizierungschancengesetz.",
    heroSubnote:
      "4 weeks intensive · 100% CLI & YAML labs · Designed for learners with Linux & Docker basics.",
    heroBadges: ["Kubernetes (K8s)", "CKAD Exam Prep", "Helm Charts", "NetworkPolicies", "ConfigMaps & Secrets", "Observability"],
    terminalTitle: "ckad_exam_lab.sh",
    terminalLines: [
      { text: "$ kubectl create deployment payments --image=nginx:alpine --replicas=3", color: "#4ade80" },
      { text: "$ kubectl expose deployment payments --port=80 --target-port=8080", color: "#60a5fa" },
      { text: "✓ NetworkPolicy & LivenessProbe applied — CKAD Lab #14 passed", color: "#4ade80" },
    ],
    infoStrip: [
      ["4 Weeks", "Intensive Specialization"],
      ["Taught in English", "Live Online Instruction"],
      ["CKAD", "CNCF Exam Preparation"],
      ["Max. 15", "Students per Cohort"],
      ["AZAV Certified", "Bildungsgutschein / QCG"],
    ],
    audienceH2: "Who is the Kubernetes CKAD course for?",
    audienceIntro: "A targeted 4-week specialization for developers and system engineers who already know Linux and Docker basics.",
    audienceCards: [
      {
        title: "Cloud, DevOps & System Engineers",
        badge: "CNCF Certification",
        desc: "Master container orchestration on Kubernetes and prepare for the hands-on CKAD terminal exam.",
        bullets: ["All 5 official CNCF CKAD exam domains covered", "Timed CLI mock exams", "Eligible for Bildungsgutschein and QCG funding"],
      },
      {
        title: "Backend & Full Stack Developers",
        badge: "Cloud-Native Deployment",
        desc: "Package, configure, and troubleshoot microservices on Kubernetes clusters.",
        bullets: ["Multi-Container Pods, Helm & Kustomize", "ConfigMaps, Secrets & PersistentVolumes", "Probes, ResourceQuotas & NetworkPolicies"],
      },
    ],
    programSelectorH2: "Kubernetes CKAD course: duration and start dates",
    programSelectorSubtitle: "Compact 4-week full-time program with daily live Kubernetes cluster labs.",
    modules: [
      {
        id: 1,
        label: "Weeks 1–2",
        title: "Application Design, Build & Deployment",
        duration: "2 Weeks",
        color: PRIMARY,
        topics: ["Container Images, Pods, Init & Sidecar Containers", "Deployments, Rolling Updates, Rollbacks & CronJobs", "Helm Charts & Kustomize"],
      },
      {
        id: 2,
        label: "Weeks 3–4",
        title: "Configuration, Networking, Observability & CKAD Exam Sims",
        duration: "2 Weeks",
        color: SECONDARY,
        topics: ["ConfigMaps, Secrets, ServiceAccounts & SecurityContexts", "Services, Ingress & NetworkPolicies", "Liveness/Readiness Probes & Timed CKAD Mock Exams"],
      },
    ],
    programs: [
      {
        id: "ckad-intensive",
        title: "Kubernetes CKAD Certification Course",
        subtitle: "4-Week Intensive Course",
        badge: "4 Weeks · Full-Time",
        moduleIds: [1, 2],
        startsAt: 1,
        duration: "4 Weeks",
        schedule: "Mon–Fri, 09:00–16:45 CET",
        capacity: "Max. 15 Students",
        language: "Taught in English",
        dates: ["12 Oct 2026", "30 Nov 2026"],
        recommended: true,
        description: "Hands-on preparation for the Certified Kubernetes Application Developer (CKAD) exam.",
      },
    ],
    curriculumH2: "What you learn in the Kubernetes CKAD course",
    curriculumIntro: "100% aligned with the official CNCF CKAD curriculum.",
    formatH2: "How the course works",
    formatIntro: "Because the CKAD exam is 100% performance-based in the terminal, you train every day on live Kubernetes clusters.",
    formatHighlights: [
      { title: "Real Kubernetes Clusters", desc: "Daily kubectl and YAML labs under real exam conditions." },
      { title: "Taught in English", desc: "Matches the English-language CNCF CKAD exam environment." },
      { title: "Timed Mock Exams", desc: "Build speed and accuracy for the 2-hour hands-on exam." },
    ],
    summaryTable: [
      ["Duration", "4 Weeks (Full-Time)"],
      ["Prerequisites", "Basic Linux CLI & Docker container knowledge"],
      ["Exam Goal", "Certified Kubernetes Application Developer (CKAD)"],
      ["Instruction Language", "Taught in English"],
      ["Funding", "AZAV-certified · Bildungsgutschein & QCG"],
    ],
    fundingH2: "Take the Kubernetes CKAD course for free with a Bildungsgutschein",
    fundingText:
      "The 4-week Kubernetes CKAD Course is AZAV-certified and can be funded 100% with a Bildungsgutschein or through the Qualifizierungschancengesetz (QCG) for employees.",
    fundingBullets: [
      "100% tuition coverage with a Bildungsgutschein",
      "Ideal 4-week upskilling module between jobs",
      "QCG funding available for corporate engineering teams",
    ],
    fundingLinkLabel: "how to get a Bildungsgutschein",
    fundingLinkTo: "/bildungsgutschein/",
    qcgLinkLabel: "Qualifizierungschancengesetz funding",
    qcgLinkTo: "/qualifizierungschancengesetz/",
    careerH2: "Jobs after the Kubernetes CKAD course",
    careerIntro: "Kubernetes is the industry standard for cloud-native infrastructure.",
    careerRoles: [
      {
        title: "DevOps / Kubernetes Engineer",
        salaryMedian: "€64,800",
        salaryRange: "€55,000 – €78,500",
        salarySource: "StepStone Salary Report 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "Operates Kubernetes clusters and automates container deployments.",
        guideLabel: "DevOps Engineer Career Guide",
        guideUrl: "/guides/devops-engineer/",
      },
    ],
    clusterH2: "Guides on Cloud and DevOps",
    clusterIntro: "Learn more about DevOps roles and cloud certifications.",
    clusterGuides: [
      {
        title: "What does a DevOps engineer do? Skills, tools and salary",
        badge: "Career Guide",
        desc: "Why Docker and Kubernetes are core requirements for DevOps roles in Germany.",
        to: "/guides/devops-engineer/",
      },
    ],
    whyH2: "Why prepare for CKAD with Clarusway",
    whyIntro: "Hands-on terminal speed training in small live classes.",
    whyItems: [
      { title: "100% Hands-On CLI Labs", desc: "Practice real CKAD scenarios instead of passive slides." },
      { title: "4-Week Compact Format", desc: "Earn an internationally recognized cloud-native specialization quickly." },
      { title: "AZAV-Certified", desc: "Eligible for Bildungsgutschein and QCG funding." },
    ],
    reviewsH2: "What graduates say",
    reviews: [
      {
        initials: "DK",
        name: "DH Kim",
        role: "Cloud & DevOps Graduate",
        platform: "Google Reviews",
        platformUrl: "https://www.google.com/maps",
        quote: "The intensive kubectl labs made passing the performance-based Kubernetes scenarios straightforward.",
      },
    ],
    faqH2: "Kubernetes CKAD Course FAQ",
    faqs: [
      {
        q: "What is the CKAD certification?",
        a: "CKAD (Certified Kubernetes Application Developer) is an official certification from the Cloud Native Computing Foundation (CNCF) that tests your ability to design, build, and deploy cloud-native applications on Kubernetes in a live terminal exam.",
      },
      {
        q: "Do I need prior knowledge?",
        a: "Yes, basic familiarity with the Linux command line and Docker containers is recommended. If you are a complete beginner, Clarusway recommends starting with the AWS & DevOps Course.",
      },
      {
        q: "Is the course free with a Bildungsgutschein?",
        a: "Yes. The course is AZAV-certified and 100% covered with a Bildungsgutschein or eligible for QCG employee funding.",
      },
      {
        q: "Do I need to speak German?",
        a: "No. All classes and labs are taught in English, and Clarusway prepares all German documents for your advisor.",
      },
    ],
    relatedH2: "More IT courses",
    relatedCourses: [
      {
        title: "AWS Solutions Architect and DevOps Engineer Training",
        to: "/it-courses/devops-aws/",
        duration: "3 – 8 Months",
        nextStart: "24 Aug 2026",
        badge: "Complete Cloud & DevOps Track",
      },
    ],
    ctaH2: "Start your Kubernetes CKAD course",
    ctaText: "Book a free consultation in English to check your Bildungsgutschein or QCG funding.",
  },

  "it-orientation": {
    key: "it-orientation",
    isShortTemplate: true,
    isOrientation: true,
    slugDe: "/it-orientierungskurs/",
    slugEn: "/it-orientation-course/",
    pdfFileName: "clarusway-it-orientation-course-syllabus.pdf",
    metaTitle: "IT Orientation Course: Find Your IT Path | Clarusway",
    metaDescription:
      "Not sure which IT career fits you? Try Data & AI, Full Stack Web Development, Cyber Security and Cloud/DevOps in English. Funded with AVGS or free consultation.",
    breadcrumbLabel: "IT Orientation Course",
    eyebrow: "Program: IT Career Orientation in English",
    h1: "IT Orientation Course: find the IT career that fits you",
    heroIntro:
      "Want to start an IT career in Germany, but not sure whether Data & AI, Full Stack Development, Cyber Security, or Cloud & DevOps matches your strengths? In the Clarusway IT Orientation Course, you explore all core IT fields hands-on in English and build a personalized learning and funding roadmap for your Bildungsgutschein application.",
    heroSubnote:
      "Ideal for undecided career changers · Hands-on intro to all IT tracks · Funded via AVGS or free career consultation.",
    heroBadges: ["Career Orientation", "Data & AI Intro", "Web Coding Intro", "Cyber Security Intro", "Cloud Intro", "AVGS / Consultation"],
    terminalTitle: "it_career_compass.sh",
    terminalLines: [
      { text: "$ clarusway-compass --analyze-strengths", color: "#60a5fa" },
      { text: "1. Analytical & Data-driven  -> AI Engineering / Data Analytics", color: "#e5e7eb" },
      { text: "2. Creative & Product-focused -> AI-Assisted Full Stack", color: "#e5e7eb" },
      { text: "3. Investigative & Protective -> Cyber Security (SOC)", color: "#e5e7eb" },
      { text: "4. Systems & Automation      -> AWS & DevOps Engineering", color: "#e5e7eb" },
      { text: "✓ Personal IT Career Roadmap ready for your advisor", color: "#4ade80" },
    ],
    infoStrip: [
      ["4 Weeks", "Orientation Phase"],
      ["Taught in English", "With German Paperwork Support"],
      ["Beginner Friendly", "No Prior IT Knowledge Needed"],
      ["Max. 15", "Students per Group"],
      ["AVGS / Free", "Funded Orientation"],
    ],
    audienceH2: "Who is the IT Orientation course for?",
    audienceIntro: "Before committing to a multi-month bootcamp, gain clarity on which IT career fits your strengths.",
    audienceCards: [
      {
        title: "Undecided Career Changers",
        badge: "Test Every IT Field",
        desc: "Experience the real daily tasks of a Data Analyst, Full Stack Developer, SOC Analyst, and Cloud Engineer before choosing your main bootcamp.",
        bullets: ["Hands-on mini projects in each IT domain", "1-on-1 aptitude review with a career advisor", "Avoid choosing the wrong program"],
      },
      {
        title: "Job Seekers Preparing for a Bildungsgutschein",
        badge: "Stronger Advisor Pitch",
        desc: "Walk into your appointment at the Agentur für Arbeit or Jobcenter with a clear career goal and an aptitude recommendation.",
        bullets: ["Funded with an AVGS (Aktivierungs- und Vermittlungsgutschein)", "Does not use up your later Bildungsgutschein entitlement", "Includes German documentation for your advisor"],
      },
    ],
    programSelectorH2: "Which IT career fits you?",
    programSelectorSubtitle: "During the orientation course, you explore and compare all Clarusway main programs:",
    modules: [],
    programs: [],
    curriculumH2: "What you learn in the IT Orientation course",
    curriculumIntro: "Four practical discovery blocks introduce the fastest-growing IT fields in Germany.",
    specialFeature: {
      h2: "Funded with an AVGS voucher",
      intro:
        "An AVGS (Aktivierungs- und Vermittlungsgutschein — activation and placement voucher) from the Agentur für Arbeit or Jobcenter covers 100% of career orientation and aptitude assessment — without affecting your subsequent Bildungsgutschein for the main bootcamp.",
      cards: [
        {
          badge: "Step 1",
          title: "Request an AVGS from Your Advisor",
          desc: "Ask your Agentur für Arbeit or Jobcenter advisor for an AVGS for IT career orientation.",
        },
        {
          badge: "Step 2",
          title: "Try Data, Coding, Cyber & Cloud Live",
          desc: "Write your first lines of Python and HTML, explore a SIEM dashboard, and receive an individual recommendation.",
        },
        {
          badge: "Step 3",
          title: "Continue with a Bildungsgutschein",
          desc: "Use your orientation report to apply for a Bildungsgutschein for your chosen main bootcamp.",
        },
      ],
      linkLabel: "Learn how the AVGS voucher works",
      linkTo: "/avgs/",
    },
    formatH2: "How the course works",
    formatIntro: "Interactive live workshops in English paired with 1-on-1 career coaching.",
    formatHighlights: [
      { title: "Hands-On Mini Labs", desc: "Test Python, web development, cloud consoles, and security tools in a beginner-friendly setting." },
      { title: "Personal Aptitude Assessment", desc: "Receive a structured recommendation matching your background to the German IT job market." },
      { title: "Advisor Preparation", desc: "Get all German documents needed for your subsequent Bildungsgutschein request." },
    ],
    summaryTable: [
      ["Duration", "4 Weeks (Orientation)"],
      ["Prerequisites", "No prior IT knowledge required"],
      ["Domains Covered", "Data & AI, Web Development, Cyber Security, Cloud & DevOps, QA"],
      ["Instruction Language", "Taught in English"],
      ["Funding", "AVGS Voucher / Free Initial Consultation"],
    ],
    fundingH2: "Take the IT Orientation course for free with an AVGS",
    fundingText:
      "You can attend the orientation course 100% free with an AVGS (activation and placement voucher) from the Agentur für Arbeit or Jobcenter, or start directly with a free 1-on-1 career consultation.",
    fundingBullets: [
      "100% covered with an AVGS from Agentur für Arbeit or Jobcenter",
      "Preserves your full Bildungsgutschein entitlement for your main bootcamp",
      "Free 1-on-1 consultation available anytime",
    ],
    fundingLinkLabel: "AVGS voucher guide",
    fundingLinkTo: "/avgs/",
    qcgLinkLabel: "All financing options",
    qcgLinkTo: "/financing-and-tuition/",
    careerH2: "Which IT career fits you?",
    careerIntro: "After orientation, you transition seamlessly into one of Clarusway's AZAV-certified main programs:",
    careerRoles: [
      {
        title: "AI Engineering & Data Analytics Track",
        salaryMedian: "€54,800 – €69,500",
        salaryRange: "Depending on module level",
        salarySource: "StepStone Salary Report 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "For analytical thinkers: Python, SQL, Power BI, Machine Learning, and Agentic AI.",
        guideLabel: "Explore the AI Engineering Bootcamp",
        guideUrl: "/it-courses/ai-engineering/",
      },
      {
        title: "AI-Assisted Full Stack Developer Track",
        salaryMedian: "€54,200 – €60,100",
        salaryRange: "Frontend, Backend & Full Stack",
        salarySource: "StepStone Salary Report 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "For creative builders: React, TypeScript, Next.js, Node.js, and AI coding workflows.",
        guideLabel: "Explore the Full Stack Developer Course",
        guideUrl: "/it-courses/full-stack-developer/",
      },
      {
        title: "Cyber Security Analyst (SOC) Track",
        salaryMedian: "€52,400 – €65,200",
        salaryRange: "SOC & Cloud Security",
        salarySource: "StepStone Salary Report 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "For defenders & investigators: CompTIA Security+, SIEM, Incident Response, and AWS Security.",
        guideLabel: "Explore the Cyber Security Course",
        guideUrl: "/it-courses/cyber-security/",
      },
      {
        title: "AWS & DevOps Engineer Track",
        salaryMedian: "€61,500 – €68,400",
        salaryRange: "Cloud & Automation",
        salarySource: "StepStone Salary Report 2026",
        salarySourceUrl: "https://www.stepstone.de/gehalt/",
        desc: "For system architects: AWS, Docker, Kubernetes, Terraform, CI/CD, and Microsoft Azure.",
        guideLabel: "Explore the AWS & DevOps Course",
        guideUrl: "/it-courses/devops-aws/",
      },
    ],
    clusterH2: "Guides on IT careers in Germany",
    clusterIntro: "Explore in-depth role guides for the primary IT tracks in Germany.",
    clusterGuides: [
      {
        title: "What does a data analyst do? Tasks, skills and salary in Germany",
        badge: "Data & AI",
        desc: "Daily tasks, Python and SQL requirements, and salary ranges in Germany.",
        to: "/guides/data-analyst/",
      },
      {
        title: "What is an AI engineer? Role, skills and roadmap in Germany",
        badge: "Data & AI",
        desc: "Production LLMs, RAG, and agent orchestration skills expected by German employers.",
        to: "/guides/ai-engineer/",
      },
      {
        title: "What is a full stack developer? Skills, salary and tools in 2026",
        badge: "Software",
        desc: "React, Next.js, TypeScript, and modern AI coding workflows.",
        to: "/guides/full-stack-developer/",
      },
      {
        title: "What does a SOC analyst do? Role, tools and salary in Germany",
        badge: "Cyber Security",
        desc: "Monitoring SIEM alerts, incident containment, and German security demand.",
        to: "/guides/soc-analyst/",
      },
    ],
    whyH2: "Why take the IT Orientation course with Clarusway",
    whyIntro: "Choose your IT career based on real hands-on experience.",
    whyItems: [
      { title: "Test All 5 IT Domains", desc: "Try Data/AI, Web Development, Cyber Security, Cloud/DevOps, and QA." },
      { title: "Personal Career Roadmap", desc: "1-on-1 feedback from experienced mentors in English." },
      { title: "Stronger Jobcenter Application", desc: "Present a documented study plan for your Bildungsgutschein." },
    ],
    reviewsH2: "What graduates say",
    reviews: [
      {
        initials: "M",
        name: "Morad",
        role: "Career Changer into IT",
        platform: "Course Report",
        platformUrl: "https://www.coursereport.com/schools/clarusway",
        quote: "The orientation showed me which IT path matched my strengths and helped me get my Bildungsgutschein approved.",
      },
    ],
    faqH2: "IT Orientation Course FAQ",
    faqs: [
      {
        q: "What is an AVGS?",
        a: "AVGS stands for Aktivierungs- und Vermittlungsgutschein (activation and placement voucher). Issued by the Agentur für Arbeit or Jobcenter, it covers 100% of career orientation and coaching costs.",
      },
      {
        q: "Who is the orientation course for?",
        a: "It is designed for career changers in Germany who want to enter IT in English but are not yet sure whether Data & AI, Full Stack Development, Cyber Security, Cloud/DevOps, or Software Testing is the right fit.",
      },
      {
        q: "Do I need to speak German?",
        a: "No. The course and career coaching are conducted in English, and Clarusway prepares all German documents for your Agentur für Arbeit or Jobcenter advisor.",
      },
    ],
    relatedH2: "More IT courses",
    relatedCourses: [
      {
        title: "AI Engineering Bootcamp",
        to: "/it-courses/ai-engineering/",
        duration: "32 Weeks",
        nextStart: "27 Jul 2026",
        badge: "Data & Agentic AI",
      },
      {
        title: "AI-Assisted Full Stack Developer Course",
        to: "/it-courses/full-stack-developer/",
        duration: "3 – 12 Months",
        nextStart: "27 Jul 2026",
        badge: "Web Development",
      },
      {
        title: "Cyber Security Analyst Course",
        to: "/it-courses/cyber-security/",
        duration: "4 Modules",
        nextStart: "24 Aug 2026",
        badge: "SOC & Cloud Security",
      },
      {
        title: "AWS Solutions Architect and DevOps Engineer Training",
        to: "/it-courses/devops-aws/",
        duration: "3 – 8 Months",
        nextStart: "24 Aug 2026",
        badge: "Cloud & DevOps",
      },
    ],
    ctaH2: "Find the IT career that fits you",
    ctaText: "Book a free consultation in English and start your orientation into the German tech market.",
  },
};

export function getCourseData(key: CourseKey, lang: "de" | "en"): CoursePageData {
  return lang === "en" ? EN_COURSES[key] : DE_COURSES[key];
}
