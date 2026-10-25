export interface GuideSection {
  id: string;
  h2: string;
  paragraphs: string[];
  bullets?: string[];
  h3Cards?: { title: string; desc: string }[];
}

export interface GuideArticleData {
  slug: string;
  lang: "de" | "en";
  cluster: string;
  badge: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  author: string;
  updatedAt: string;
  readTime: string;
  introParagraph1: string;
  introCourseLinkLabel: string;
  introCourseLinkTo: string;
  introFundingLinkLabel: string;
  introFundingLinkTo: string;
  introParagraph2: string;
  tableTitle: string;
  tableHeaders: string[];
  tableRows: string[][];
  sections: GuideSection[];
  faqs: { q: string; a: string }[];
  ctaCourseTitle: string;
  ctaCourseDesc: string;
  ctaCourseTo: string;
  relatedSlugs: string[];
}

export const DE_GUIDES: Record<string, GuideArticleData> = {
  "quereinstieg-it": {
    slug: "quereinstieg-it",
    lang: "de",
    cluster: "Orientierung & Förderung",
    badge: "Karriere-Ratgeber",
    metaTitle: "Quereinstieg in die IT: Wege, Berufe & Förderung | Clarusway",
    metaDescription:
      "So gelingt der Quereinstieg in die IT ohne Informatikstudium: Die besten Einstiegsberufe, Gehälter und 100 % Förderung mit Bildungsgutschein.",
    h1: "Quereinstieg in die IT: Welche Berufe sich eignen und wie der Einstieg gelingt",
    author: "Clarusway Fachredaktion",
    updatedAt: "22. Oktober 2026",
    readTime: "7 Min. Lesezeit",
    introParagraph1:
      "Ein beruflicher Neustart in der IT ist auch ohne Informatikstudium realistisch — vorausgesetzt, du wählst ein klar abgegrenztes Berufsbild und baust praktische Projekterfahrung auf.",
    introCourseLinkLabel: "IT-Orientierungskurs und unsere geförderten IT-Kurse",
    introCourseLinkTo: "/it-kurse/",
    introFundingLinkLabel: "IT-Weiterbildung mit Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "In diesem Ratgeber vergleichen wir die zugänglichsten IT-Berufe für Quereinsteiger in Deutschland, zeigen aktuelle Einstiegsgehälter nach StepStone 2026 und erklären, wie die Agentur für Arbeit oder das Jobcenter deine Qualifizierung zu 100 % übernimmt.",
    tableTitle: "Die 5 besten IT-Berufe für Quereinsteiger im Vergleich",
    tableHeaders: ["IT-Beruf", "Mathe-Anteil", "Typische Einstiegsdauer", "Einstiegsgehalt (StepStone 2026)"],
    tableRows: [
      ["Data Analyst", "Mittel (Statistik & SQL)", "13 Wochen (Vollzeit)", "41.800 – 54.800 €"],
      ["Full Stack / Frontend Entwickler", "Niedrig (Logik & Code)", "3 – 9 Monate", "43.200 – 58.500 €"],
      ["SOC Analyst (Cyber Security)", "Niedrig (Analyse & Prozesse)", "4 – 6 Monate", "45.000 – 52.400 €"],
      ["Cloud & DevOps Engineer", "Niedrig (Systeme & Automatisierung)", "3 – 8 Monate", "52.000 – 61.500 €"],
      ["Software Tester (SDET)", "Niedrig (Struktur & Qualität)", "4 – 6 Monate", "41.500 – 56.400 €"],
    ],
    sections: [
      {
        id: "warum-quereinstieg",
        h2: "Warum der IT-Arbeitsmarkt Quereinsteiger sucht",
        paragraphs: [
          "Laut Branchenverband Bitkom fehlen in Deutschland zehntausende IT-Fachkräfte quer durch alle Wirtschaftszweige. Arbeitgeber achten bei Junior-Bewerbungen zunehmend auf nachweisbare Praxisprojekte (GitHub-Portfolio), Zertifizierungen (z. B. AWS SAA-C03 oder CompTIA Security+) und die Fähigkeit, sich schnell in moderne KI-gestützte Arbeitsabläufe einzuarbeiten.",
        ],
        bullets: [
          "Branchenwissen aus deinem bisherigen Beruf (z. B. Finanzen, Logistik, Marketing oder Verwaltung) ist in Data- und IT-Projekten ein echter Pluspunkt.",
          "Durch strukturierte Live-Weiterbildungen baust du in wenigen Monaten genau das Portfolio auf, das Personalabteilungen prüfen.",
        ],
      },
      {
        id: "welcher-beruf",
        h2: "Welcher IT-Beruf passt zu deinen Stärken?",
        paragraphs: [
          "Statt blind irgendeine Programmiersprache zu lernen, solltest du deine Wahl an deinen persönlichen Stärken ausrichten:",
        ],
        h3Cards: [
          {
            title: "Analytisch & Zahlenaffin → Data Analytics & AI Engineering",
            desc: "Du arbeitest gerne mit Tabellen, erkennst Muster und möchtest mit Python, SQL und Power BI Geschäftsentscheidungen unterstützen.",
          },
          {
            title: "Kreativ & Produktorientiert → Full Stack Webentwicklung",
            desc: "Du möchtest sichtbare Webanwendungen von der Benutzeroberfläche (React) bis zur Datenbank (Node.js, PostgreSQL) entwickeln.",
          },
          {
            title: "Wachsam & Systematisch → Cyber Security (SOC Analyst)",
            desc: "Du schützt Systeme, untersuchst Sicherheitsvorfälle im SIEM-Labor und wehrst Cyberangriffe ab.",
          },
          {
            title: "Infrastruktur & Automatisierung → AWS Cloud & DevOps",
            desc: "Du baust skalierbare Server- und Container-Umgebungen auf AWS, Docker, Kubernetes und Terraform.",
          },
        ],
      },
      {
        id: "foerderung",
        h2: "100 % Förderung über Bildungsgutschein oder AVGS",
        paragraphs: [
          "Wenn du arbeitssuchend oder arbeitslos gemeldet bist, musst du die Kosten für deinen Quereinstieg nicht selbst tragen. Über einen AVGS kannst du zunächst den 4-wöchigen IT-Orientierungskurs besuchen und anschließend mit einem Bildungsgutschein deine Hauptweiterbildung zu 100 % finanzieren lassen.",
        ],
      },
    ],
    faqs: [
      {
        q: "Bin ich mit 35 oder 45 Jahren zu alt für einen Quereinstieg in die IT?",
        a: "Nein. Viele unserer erfolgreichen Absolventinnen und Absolventen wechseln zwischen 30 und 50 Jahren in die IT. Deine bisherige Berufserfahrung, Zuverlässigkeit und Kommunikationsstärke werden von Arbeitgebern sehr geschätzt.",
      },
      {
        q: "Reicht eine Weiterbildung ohne Informatikstudium für den ersten IT-Job?",
        a: "Ja, sofern die Weiterbildung praxisnah ist und du reale Projekte sowie anerkannte Zertifikate vorweisen kannst.",
      },
    ],
    ctaCourseTitle: "Starte mit dem IT-Orientierungskurs oder deinem Wunschprogramm",
    ctaCourseDesc:
      "Finde im kostenlosen Beratungsgespräch heraus, welcher IT-Pfad zu deinem Profil passt und wie du 100 % Förderung erhältst.",
    ctaCourseTo: "/it-orientierungskurs/",
    relatedSlugs: ["weiterbildung-arbeitsagentur", "data-analyst", "soc-analyst"],
  },

  "weiterbildung-arbeitsagentur": {
    slug: "weiterbildung-arbeitsagentur",
    lang: "de",
    cluster: "Orientierung & Förderung",
    badge: "Förder-Ratgeber",
    metaTitle: "Weiterbildung über Arbeitsagentur & Jobcenter | Clarusway",
    metaDescription:
      "So beantragst du eine geförderte IT-Weiterbildung bei der Agentur für Arbeit oder dem Jobcenter: Voraussetzungen, Ablauf und Argumente für das Gespräch.",
    h1: "Weiterbildung über Arbeitsagentur und Jobcenter: So klappt die Förderung",
    author: "Clarusway Förderberatung",
    updatedAt: "22. Oktober 2026",
    readTime: "6 Min. Lesezeit",
    introParagraph1:
      "Die Agentur für Arbeit und die Jobcenter gehören zu den wichtigsten Förderern beruflicher Weiterbildung in Deutschland. Über den Bildungsgutschein (§ 81 SGB III) werden AZAV-zertifizierte IT-Weiterbildungen zu 100 % finanziert.",
    introCourseLinkLabel: "AZAV-zertifizierten IT-Weiterbildungen",
    introCourseLinkTo: "/it-kurse/",
    introFundingLinkLabel: "Bildungsgutschein Schritt für Schritt beantragen",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "Hier erfährst du, wer für dich zuständig ist, welche Unterlagen deine Vermittlungsfachkraft benötigt und wie du deinen Antrag überzeugend begründest.",
    tableTitle: "Agentur für Arbeit vs. Jobcenter: Wer ist zuständig?",
    tableHeaders: ["Behörde", "Leistungsbezug", "Förderinstrumente", "Gesetzliche Grundlage"],
    tableRows: [
      ["Agentur für Arbeit", "Arbeitslosengeld I (ALG I) oder arbeitssuchend ohne Leistungsbezug", "Bildungsgutschein, AVGS, QCG", "SGB III (§ 45, § 81, § 82)"],
      ["Jobcenter", "Bürgergeld (Grundsicherung für Arbeitsuchende)", "Bildungsgutschein, AVGS, Weiterbildungsgeld", "SGB II i. V. m. SGB III"],
    ],
    sections: [
      {
        id: "vorbereitung",
        h2: "Wie du deine Vermittlungsfachkraft überzeugst",
        paragraphs: [
          "Ein Bildungsgutschein ist eine Kann-Leistung. Deine Chancen steigen erheblich, wenn du gut vorbereitet in den Termin gehst und zeigst, dass du dich intensiv mit dem Arbeitsmarkt beschäftigt hast.",
        ],
        bullets: [
          "Bringe das offizielle Clarusway-Maßnahmeangebot (mit AZAV-Maßnahmenummer) direkt zum Termin mit.",
          "Drucke 5 bis 10 aktuelle Stellenanzeigen für deinen Zielberuf (z. B. Data Analyst, SOC Analyst oder Cloud Engineer) aus.",
          "Erkläre sachlich, warum eine Rückkehr in deinen alten Beruf schwierig ist oder warum dir aktuelle IT-Qualifikationen fehlen.",
        ],
      },
      {
        id: "weiterbildungsgeld",
        h2: "Finanzielle Absicherung während der Weiterbildung",
        paragraphs: [
          "Während einer Vollzeit-Weiterbildung mit Bildungsgutschein läuft dein Arbeitslosengeld I oder Bürgergeld weiter. Zusätzlich kann bei abschlussorientierten oder zertifizierten Maßnahmen ein monatliches Weiterbildungsgeld gezahlt werden.",
        ],
      },
    ],
    faqs: [
      {
        q: "Wie schnell stellt Clarusway das Maßnahmeangebot für meinen Termin aus?",
        a: "Innerhalb von 24 Stunden nach deinem kostenlosen Beratungsgespräch erhältst du dein fertiges PDF-Maßnahmeangebot per E-Mail.",
      },
      {
        q: "Kann ich den Bildungsgutschein auch bei drohender Arbeitslosigkeit erhalten?",
        a: "Ja. Sobald dein befristeter Vertrag ausläuft oder eine Kündigung ausgesprochen wurde und du dich arbeitssuchend meldest, kann eine Förderung geprüft werden.",
      },
    ],
    ctaCourseTitle: "Kostenloses Maßnahmeangebot in 24 Stunden erhalten",
    ctaCourseDesc:
      "Buche dein unverbindliches Beratungsgespräch — wir bereiten alle Unterlagen für deinen Termin bei Arbeitsagentur oder Jobcenter vor.",
    ctaCourseTo: "/bildungsgutschein/",
    relatedSlugs: ["quereinstieg-it", "ai-engineer", "devops-engineer"],
  },

  "ai-engineer": {
    slug: "ai-engineer",
    lang: "de",
    cluster: "KI & Data Science",
    badge: "Berufsratgeber (KI & Data)",
    metaTitle: "AI Engineer: Berufsbild, Aufgaben & Gehalt 2026 | Clarusway",
    metaDescription:
      "Was macht ein AI Engineer? Aufgaben, Unterschied zum Data Scientist, gefragte Skills (LLMs, RAG, Agentic AI) und Gehalt in Deutschland.",
    h1: "AI Engineer werden: Aufgaben, Gehalt und Einstieg in Deutschland",
    author: "Clarusway Data & AI Team",
    updatedAt: "22. Oktober 2026",
    readTime: "7 Min. Lesezeit",
    introParagraph1:
      "Der AI Engineer gehört seit dem Durchbruch großer Sprachmodelle (LLMs) und autonomer KI-Agenten zu den am stärksten nachgefragten IT-Berufen in Deutschland. Während klassische Data Scientists vor allem statistische Modelle trainieren, integriert der AI Engineer moderne KI-Modelle, RAG-Pipelines und Agenten-Systeme direkt in produktive Unternehmenssoftware.",
    introCourseLinkLabel: "AI Engineer Weiterbildung (Data Science & Agentic AI)",
    introCourseLinkTo: "/it-kurse/ai-engineer-weiterbildung/",
    introFundingLinkLabel: "Bildungsgutschein zu 100 % fördern lassen",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "In diesem Leitfaden erfährst du, welche Werkzeuge ein AI Engineer beherrschen muss, wie sich das Berufsbild vom Data Analyst und Data Scientist unterscheidet und welche Gehälter in Deutschland gezahlt werden.",
    tableTitle: "Data Analyst vs. Data Scientist vs. AI Engineer im Vergleich",
    tableHeaders: ["Rolle", "Hauptfokus", "Wichtigste Tools", "Median-Gehalt (StepStone 2026)"],
    tableRows: [
      ["Data Analyst", "Geschäftsdaten auswerten & Dashboards bauen", "SQL, Python (Pandas), Power BI, Tableau", "54.800 €"],
      ["Data Scientist", "Statistische Modelle & Machine Learning trainieren", "Python, Scikit-Learn, XGBoost, Statistik", "62.400 €"],
      ["AI Engineer", "LLMs, RAG-Systeme & Agentic AI in Produktion bringen", "PyTorch, LangChain, LangGraph, MCP, AWS Bedrock", "69.500 €"],
    ],
    sections: [
      {
        id: "aufgaben",
        h2: "Was macht ein AI Engineer im Berufsalltag?",
        paragraphs: [
          "Ein AI Engineer bildet die Brücke zwischen moderner KI-Forschung und stabiler Softwareentwicklung. Typische Aufgaben in deutschen Technologie- und Industrieunternehmen sind:",
        ],
        bullets: [
          "Aufbau von Retrieval-Augmented-Generation-Systemen (RAG) mit Vektordatenbanken (Chroma, Pinecone, Qdrant), damit KI-Assistenten sicher auf internes Unternehmenswissen zugreifen.",
          "Entwicklung mehrstufiger Agentic-AI-Workflows mit LangGraph, CrewAI und dem Model Context Protocol (MCP).",
          "Feinabstimmung (Fine-Tuning mit LoRA/QLoRA), Evaluierung (RAGAS) und Absicherung (Guardrails) von Sprachmodellen.",
          "Bereitstellung skalierbarer KI-Schnittstellen über FastAPI, Docker und Cloud-Plattformen wie AWS Bedrock.",
        ],
      },
      {
        id: "weg-zum-beruf",
        h2: "Wie gelingt der Einstieg als AI Engineer?",
        paragraphs: [
          "Bei Clarusway führt dich die 32-wöchige AI Engineer Weiterbildung in drei aufeinander aufbauenden Modulen (Data Analytics -> Machine Learning -> Agentic AI) ans Ziel. Wer bereits Python- und SQL-Kenntnisse besitzt, kann über eine Einstufungsprüfung direkt in Modul 2 oder Modul 3 starten.",
        ],
      },
    ],
    faqs: [
      {
        q: "Was verdient ein AI Engineer in Deutschland?",
        a: "Laut StepStone Gehaltsdaten 2026 liegt das Median-Gehalt für AI Engineers in Deutschland bei rund 69.500 € brutto pro Jahr (Spanne je nach Erfahrung zwischen 56.000 € und 86.000 €).",
      },
      {
        q: "Kann ich die Weiterbildung zum AI Engineer mit Bildungsgutschein machen?",
        a: "Ja. Sowohl das 32-wöchige Gesamtprogramm als auch der Direkteinstieg in Modul 2 oder Modul 3 sind AZAV-zertifiziert und zu 100 % über einen Bildungsgutschein förderbar.",
      },
    ],
    ctaCourseTitle: "AI Engineer Weiterbildung: Von Data Analytics bis Agentic AI",
    ctaCourseDesc:
      "32 Wochen Vollzeit (oder modularer Direkteinstieg ab Modul 2/3) — 100 % förderbar mit Bildungsgutschein.",
    ctaCourseTo: "/it-kurse/ai-engineer-weiterbildung/",
    relatedSlugs: ["data-analyst", "was-ist-agentic-ai", "data-analyst-gehalt"],
  },

  "data-analyst": {
    slug: "data-analyst",
    lang: "de",
    cluster: "KI & Data Science",
    badge: "Berufsratgeber (Data)",
    metaTitle: "Data Analyst werden: Aufgaben, Gehalt & Einstieg | Clarusway",
    metaDescription:
      "Was macht ein Data Analyst? Alles zu Aufgaben, Skills (SQL, Python, Power BI), Gehalt in Deutschland und dem Einstieg in 13 Wochen mit Bildungsgutschein.",
    h1: "Data Analyst werden: Aufgaben, Gehalt und Quereinstieg in Deutschland",
    author: "Clarusway Data & AI Team",
    updatedAt: "22. Oktober 2026",
    readTime: "6 Min. Lesezeit",
    introParagraph1:
      "Data Analysts übersetzen Rohdaten in verständliche Entscheidungsgrundlagen für Unternehmen. Weil nahezu jede Branche — vom E-Commerce bis zum Mittelstand — datengetrieben arbeitet, eignet sich das Berufsbild hervorragend für den schnellen Quereinstieg in die IT.",
    introCourseLinkLabel: "13-wöchige Data Analytics Weiterbildung",
    introCourseLinkTo: "/it-kurse/data-analytics-weiterbildung/",
    introFundingLinkLabel: "100 % Förderung über einen Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "Erfahre hier, welche Tools im Alltag unverzichtbar sind, wie viel Data Analysts verdienen und wie du dich in 13 Wochen qualifizierst.",
    tableTitle: "Kernkompetenzen eines Data Analysts",
    tableHeaders: ["Kompetenzbereich", "Werkzeuge", "Praxisanwendung"],
    tableRows: [
      ["Datenbankabfragen", "SQL (PostgreSQL)", "Kunden-, Umsatz- und Betriebsdaten aus Datenbanken abfragen"],
      ["Datenanalyse & Automatisierung", "Python (Pandas, NumPy)", "Große Datensätze bereinigen, transformieren und auswerten"],
      ["Business Intelligence", "Power BI (DAX), Tableau", "Interaktive Management-Dashboards und KPI-Berichte erstellen"],
      ["Statistik", "A/B-Testing, Hypothesentests", "Geschäftsentscheidungen statistisch absichern"],
    ],
    sections: [
      {
        id: "alltag",
        h2: "Aufgaben eines Data Analysts im Unternehmen",
        paragraphs: [
          "Ein Data Analyst sammelt Daten aus verschiedenen Quellen, bereinigt fehlerhafte Einträge mit Python und SQL und visualisiert die Ergebnisse in Power BI oder Tableau.",
        ],
      },
      {
        id: "aufstieg",
        h2: "Vom Data Analyst zum Data Scientist und AI Engineer",
        paragraphs: [
          "Bei Clarusway entspricht die 13-wöchige Data Analytics Weiterbildung exakt Modul 1 der großen AI Engineer Weiterbildung. Du kannst also nach 13 Wochen als Data Analyst in den Beruf starten oder nahtlos mit Machine Learning (Modul 2) und Agentic AI (Modul 3) weitermachen.",
        ],
      },
    ],
    faqs: [
      {
        q: "Wie lange dauert die Weiterbildung zum Data Analyst?",
        a: "Die eigenständige Data Analytics Weiterbildung bei Clarusway dauert 13 Wochen in Vollzeit (520 Unterrichtseinheiten).",
      },
      {
        q: "Brauche ich Programmierkenntnisse für den Start?",
        a: "Nein. Du lernst Python, SQL, Statistik und Power BI von Grund auf im Live-Unterricht.",
      },
    ],
    ctaCourseTitle: "Data Analytics Weiterbildung in 13 Wochen",
    ctaCourseDesc: "Lerne Python, SQL, Power BI und Tableau im Live-Unterricht — 100 % förderbar mit Bildungsgutschein.",
    ctaCourseTo: "/it-kurse/data-analytics-weiterbildung/",
    relatedSlugs: ["data-analyst-gehalt", "ai-engineer", "was-ist-agentic-ai"],
  },

  "was-ist-agentic-ai": {
    slug: "was-ist-agentic-ai",
    lang: "de",
    cluster: "KI & Data Science",
    badge: "Technologie-Guide",
    metaTitle: "Was ist Agentic AI? KI-Agenten einfach erklärt | Clarusway",
    metaDescription:
      "Was bedeutet Agentic AI? Wie autonome KI-Agenten mit LangGraph, RAG und Model Context Protocol (MCP) komplexe Aufgaben lösen.",
    h1: "Was ist Agentic AI? Wie autonome KI-Agenten arbeiten",
    author: "Clarusway Data & AI Team",
    updatedAt: "22. Oktober 2026",
    readTime: "6 Min. Lesezeit",
    introParagraph1:
      "Während klassische Chatbots nur auf einzelne Eingaben antworten, plant und erledigt Agentic AI mehrstufige Aufgaben eigenständig: KI-Agenten rufen Schnittstellen (APIs) auf, durchsuchen Datenbanken über RAG und korrigieren ihre eigenen Zwischenschritte.",
    introCourseLinkLabel: "AI Engineer Weiterbildung (Modul 3: Agentic AI)",
    introCourseLinkTo: "/it-kurse/ai-engineer-weiterbildung/",
    introFundingLinkLabel: "Förderung mit Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "Wir zeigen dir den Unterschied zwischen einfachen Sprachmodellen, RAG und echten Multi-Agenten-Architekturen.",
    tableTitle: "Klassische LLMs vs. RAG vs. Agentic AI",
    tableHeaders: ["Stufe", "Fähigkeit", "Typische Frameworks"],
    tableRows: [
      ["Standard-LLM", "Beantwortet Fragen auf Basis statischer Trainingsdaten", "OpenAI API, Claude API"],
      ["RAG-System", "Greift vor der Antwort auf aktuelle Unternehmensdokumente zu", "LangChain, ChromaDB, Qdrant"],
      ["Agentic AI", "Plant Schritte, nutzt externe Tools/Datenbanken und arbeitet im Team", "LangGraph, CrewAI, Model Context Protocol (MCP)"],
    ],
    sections: [
      {
        id: "funktionsweise",
        h2: "Wie funktionieren KI-Agenten in der Praxis?",
        paragraphs: [
          "Ein KI-Agent kombiniert ein Sprachmodell (Reasoning Engine) mit Kurz- und Langzeitgedächtnis sowie klar definierten Werkzeugen (Tool Calling / MCP). Dadurch kann er etwa im Kundenservice, in der Datenanalyse oder im Security Operations Center selbstständig Workflows ausführen.",
        ],
      },
    ],
    faqs: [
      {
        q: "Wo lernt man die Entwicklung von Agentic AI?",
        a: "In Modul 3 unserer AI Engineer Weiterbildung sowie in Modul 3 unserer Cyber Security Weiterbildung (Agentic AI in Security Operations).",
      },
    ],
    ctaCourseTitle: "Agentic AI praxisnah lernen",
    ctaCourseDesc: "Entwickle produktionsreife RAG- und Multi-Agenten-Systeme in der AI Engineer Weiterbildung.",
    ctaCourseTo: "/it-kurse/ai-engineer-weiterbildung/",
    relatedSlugs: ["ai-engineer", "data-analyst", "soc-analyst"],
  },

  "data-analyst-gehalt": {
    slug: "data-analyst-gehalt",
    lang: "de",
    cluster: "KI & Data Science",
    badge: "Gehaltsreport",
    metaTitle: "Data Analyst Gehalt in Deutschland 2026 | Clarusway",
    metaDescription:
      "Was verdient ein Data Analyst in Deutschland? Einstiegsgehalt, Senior-Gehalt und regionale Unterschiede nach StepStone 2026.",
    h1: "Data Analyst Gehalt in Deutschland: Einstieg bis Senior",
    author: "Clarusway Karriere-Team",
    updatedAt: "22. Oktober 2026",
    readTime: "5 Min. Lesezeit",
    introParagraph1:
      "Das Gehalt eines Data Analysts in Deutschland hängt vor allem von deinen technischen Werkzeugen (SQL, Python, Power BI), deiner Branchenerfahrung und dem Standort ab.",
    introCourseLinkLabel: "Data Analytics Weiterbildung",
    introCourseLinkTo: "/it-kurse/data-analytics-weiterbildung/",
    introFundingLinkLabel: "Bildungsgutschein der Arbeitsagentur",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "Die folgende Tabelle zeigt die aktuellen Gehaltsspannen in Deutschland auf Basis des StepStone Gehaltsreports 2026.",
    tableTitle: "Data Analyst Jahresgehalt nach Erfahrungsstufe (StepStone 2026)",
    tableHeaders: ["Erfahrungsstufe", "Berufserfahrung", "Jahresgehalt (Brutto)"],
    tableRows: [
      ["Junior Data Analyst", "0 – 2 Jahre (Einstieg)", "41.800 – 49.500 €"],
      ["Mid-Level Data Analyst", "2 – 5 Jahre", "50.000 – 59.000 €"],
      ["Senior Data Analyst / BI Lead", "ab 5 Jahren", "60.000 – 69.500 €"],
      ["Aufstieg zum Data Scientist / AI Engineer", "Mit ML & Agentic AI Skills", "62.400 – 86.000 €"],
    ],
    sections: [
      {
        id: "gehaltsfaktoren",
        h2: "Welche Skills erhöhen dein Einstiegsgehalt?",
        paragraphs: [
          "Bewerberinnen und Bewerber, die neben Excel und Power BI auch fortgeschrittene SQL-Abfragen und Python-Automatisierung beherrschen, erzielen beim Berufseinstieg spürbar höhere Gehälter.",
        ],
      },
    ],
    faqs: [
      {
        q: "Wie hoch ist das Median-Gehalt für Data Analysts in Deutschland?",
        a: "Laut StepStone Gehaltsdaten 2026 liegt das Median-Gehalt bei rund 54.800 € brutto im Jahr.",
      },
    ],
    ctaCourseTitle: "In 13 Wochen zum Data Analyst qualifizieren",
    ctaCourseDesc: "Starte deine AZAV-zertifizierte Data Analytics Weiterbildung mit 100 % Förderung.",
    ctaCourseTo: "/it-kurse/data-analytics-weiterbildung/",
    relatedSlugs: ["data-analyst", "ai-engineer", "quereinstieg-it"],
  },

  "full-stack-entwickler": {
    slug: "full-stack-entwickler",
    lang: "de",
    cluster: "Webentwicklung & Software",
    badge: "Berufsratgeber (Web)",
    metaTitle: "Full Stack Entwickler werden: Aufgaben & Gehalt | Clarusway",
    metaDescription:
      "Was macht ein Full Stack Entwickler? Tech-Stack (React, TypeScript, Next.js, Node.js), KI-Tools, Gehalt und Quereinstieg mit Bildungsgutschein.",
    h1: "Full Stack Entwickler werden: Aufgaben, Tech-Stack und Gehalt",
    author: "Clarusway Software Engineering Team",
    updatedAt: "22. Oktober 2026",
    readTime: "6 Min. Lesezeit",
    introParagraph1:
      "Full Stack Entwickler beherrschen sowohl die sichtbare Benutzeroberfläche (Frontend) als auch die Serverlogik und Datenbanken (Backend) moderner Webanwendungen. Durch KI-gestützte Entwicklungswerkzeuge wie Cursor, Claude Code und GitHub Copilot hat sich die Produktivität in diesem Berufsfeld enorm beschleunigt.",
    introCourseLinkLabel: "Full Stack Entwickler Weiterbildung",
    introCourseLinkTo: "/it-kurse/full-stack-entwickler-weiterbildung/",
    introFundingLinkLabel: "100 % Förderung mit Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "Hier erfährst du, welche Technologien in deutschen Entwicklerteams gesetzt sind und wie der Einstieg über vier modulare Bausteine gelingt.",
    tableTitle: "Der moderne Full-Stack-Technologie-Baukasten 2026",
    tableHeaders: ["Schicht", "Technologien", "Aufgabe"],
    tableRows: [
      ["Frontend", "HTML5, CSS3, Tailwind, TypeScript, React, Next.js", "Schnelle, interaktive Benutzeroberflächen"],
      ["Backend", "Node.js, Express, REST APIs, Authentifizierung", "Geschäftslogik, Sicherheit & Schnittstellen"],
      ["Datenbanken", "PostgreSQL (Prisma), MongoDB", "Strukturierte und dokumentenbasierte Datenspeicherung"],
      ["KI-Workflow", "Cursor, Claude Code, GitHub Copilot", "KI-gestütztes Refactoring, Testing & Debugging"],
    ],
    sections: [
      {
        id: "ki-workflow",
        h2: "Warum KI-gestützte Webentwicklung heute Standard ist",
        paragraphs: [
          "Arbeitgeber suchen heute Entwicklerinnen und Entwickler, die saubere Softwarearchitektur verstehen und gleichzeitig KI-Assistenten gezielt für Tests, Dokumentation und Code-Reviews einsetzen.",
        ],
      },
    ],
    faqs: [
      {
        q: "Was verdient ein Full Stack Entwickler in Deutschland?",
        a: "Das Median-Gehalt liegt laut StepStone 2026 bei 58.500 € brutto pro Jahr (Spanne von 43.200 € beim Einstieg bis über 72.000 € als Senior).",
      },
    ],
    ctaCourseTitle: "AI-Assisted Full Stack Entwickler Weiterbildung",
    ctaCourseDesc: "Lerne React, TypeScript, Next.js, Node.js und KI-Coding-Tools — 100 % förderbar mit Bildungsgutschein.",
    ctaCourseTo: "/it-kurse/full-stack-entwickler-weiterbildung/",
    relatedSlugs: ["frontend-vs-backend-vs-full-stack", "full-stack-entwickler-gehalt", "software-tester"],
  },

  "frontend-vs-backend-vs-full-stack": {
    slug: "frontend-vs-backend-vs-full-stack",
    lang: "de",
    cluster: "Webentwicklung & Software",
    badge: "Vergleichs-Guide",
    metaTitle: "Frontend vs. Backend vs. Full Stack im Vergleich | Clarusway",
    metaDescription:
      "Was ist der Unterschied zwischen Frontend, Backend und Full Stack Entwicklung? Aufgaben, Programmiersprachen und Gehälter im direkten Vergleich.",
    h1: "Frontend vs. Backend vs. Full Stack: Welcher Pfad passt zu dir?",
    author: "Clarusway Software Engineering Team",
    updatedAt: "22. Oktober 2026",
    readTime: "5 Min. Lesezeit",
    introParagraph1:
      "Wer in die Webentwicklung einsteigen möchte, stößt sofort auf die Begriffe Frontend, Backend und Full Stack. In unserer modularen Weiterbildung kannst du dich gezielt spezialisieren oder alle Schichten kombinieren.",
    introCourseLinkLabel: "Full Stack Entwickler Weiterbildung",
    introCourseLinkTo: "/it-kurse/full-stack-entwickler-weiterbildung/",
    introFundingLinkLabel: "Förderung über Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "Die folgende Übersicht zeigt dir die Unterschiede bei Aufgaben, Tools und Gehalt.",
    tableTitle: "Frontend, Backend und Full Stack im direkten Vergleich",
    tableHeaders: ["Bereich", "Fokus", "Typische Technologien", "Median-Gehalt (DE)"],
    tableRows: [
      ["Frontend", "Design-Umsetzung & Nutzerinteraktion im Browser", "HTML/CSS, TypeScript, React, Next.js", "54.200 €"],
      ["Backend", "Server, APIs, Datenbanken & Sicherheit", "Node.js, PostgreSQL, MongoDB, Docker", "60.100 €"],
      ["Full Stack", "Gesamtsystem von UI bis Datenbank", "React/Next.js + Node.js + SQL/NoSQL", "58.500 €"],
    ],
    sections: [
      {
        id: "empfehlung",
        h2: "Warum sich die Full-Stack-Ausbildung für Einsteiger lohnt",
        paragraphs: [
          "Mit einer Full-Stack-Ausbildung kannst du dich sowohl auf reine Frontend- und Backend-Stellen als auch auf Full-Stack-Positionen bewerben und verdreifachst damit deine Auswahl auf dem Stellenmarkt.",
        ],
      },
    ],
    faqs: [
      {
        q: "Kann ich bei Clarusway auch nur den Frontend-Pfad buchen?",
        a: "Ja. Über die Kombination aus Modul 1 (Web Foundations) und Modul 2 (Frontend Development) kannst du dich gezielt als Frontend Developer qualifizieren.",
      },
    ],
    ctaCourseTitle: "Modulare Webentwicklung bei Clarusway",
    ctaCourseDesc: "Wähle zwischen Frontend-Fokus oder dem kompletten 4-Modul Full-Stack-Pfad.",
    ctaCourseTo: "/it-kurse/full-stack-entwickler-weiterbildung/",
    relatedSlugs: ["full-stack-entwickler", "full-stack-entwickler-gehalt"],
  },

  "full-stack-entwickler-gehalt": {
    slug: "full-stack-entwickler-gehalt",
    lang: "de",
    cluster: "Webentwicklung & Software",
    badge: "Gehaltsreport",
    metaTitle: "Full Stack Entwickler Gehalt in Deutschland 2026 | Clarusway",
    metaDescription:
      "Was verdient ein Full Stack Entwickler in Deutschland? Aktuelle Gehaltstabellen nach Erfahrung für Frontend, Backend und Full Stack.",
    h1: "Full Stack Entwickler Gehalt in Deutschland: Aktuelle Zahlen",
    author: "Clarusway Karriere-Team",
    updatedAt: "22. Oktober 2026",
    readTime: "5 Min. Lesezeit",
    introParagraph1:
      "Softwareentwickler gehören in Deutschland konstant zu den bestbezahlten Fachkräften. Besonders gefragt sind Entwickler, die TypeScript, React/Next.js und Node.js beherrschen.",
    introCourseLinkLabel: "Full Stack Entwickler Weiterbildung",
    introCourseLinkTo: "/it-kurse/full-stack-entwickler-weiterbildung/",
    introFundingLinkLabel: "Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "Hier sind die aktuellen Gehaltsspannen nach StepStone 2026.",
    tableTitle: "Gehalt in der Webentwicklung nach Erfahrung (StepStone 2026)",
    tableHeaders: ["Stufe", "Frontend Developer", "Full Stack Developer", "Backend Developer"],
    tableRows: [
      ["Junior (0–2 Jahre)", "42.000 – 48.000 €", "43.200 – 51.000 €", "46.500 – 53.000 €"],
      ["Mid-Level (2–5 Jahre)", "49.000 – 58.000 €", "52.000 – 63.000 €", "54.000 – 65.000 €"],
      ["Senior (ab 5 Jahren)", "59.000 – 66.000 €", "64.000 – 72.000 €", "66.000 – 74.500 €"],
    ],
    sections: [
      {
        id: "portfolio",
        h2: "Wie du beim Einstiegsgehalt überzeugst",
        paragraphs: [
          "Ein sauberes GitHub-Portfolio inklusive eines realen Team-Projekts (wie in unserem Modul 4) ist in Gehaltsverhandlungen oft entscheidender als formale Abschlüsse.",
        ],
      },
    ],
    faqs: [
      {
        q: "Wie hoch ist das durchschnittliche Einstiegsgehalt?",
        a: "Junior Full Stack Entwickler starten in Deutschland meist zwischen 43.200 € und 51.000 € Jahresbrutto.",
      },
    ],
    ctaCourseTitle: "Starte deine Full Stack Weiterbildung",
    ctaCourseDesc: "100 % förderbar mit Bildungsgutschein.",
    ctaCourseTo: "/it-kurse/full-stack-entwickler-weiterbildung/",
    relatedSlugs: ["full-stack-entwickler", "frontend-vs-backend-vs-full-stack"],
  },

  "soc-analyst": {
    slug: "soc-analyst",
    lang: "de",
    cluster: "Cyber Security",
    badge: "Berufsratgeber (Security)",
    metaTitle: "SOC Analyst werden: Aufgaben, Gehalt & Einstieg | Clarusway",
    metaDescription:
      "Was macht ein SOC Analyst im Security Operations Center? Tier 1–3 Aufgaben, SIEM-Tools, Gehalt in Deutschland und Weiterbildung mit Bildungsgutschein.",
    h1: "SOC Analyst: Aufgaben, Gehalt und Einstieg in die Cyber Security",
    author: "Clarusway Cyber Security Team",
    updatedAt: "22. Oktober 2026",
    readTime: "7 Min. Lesezeit",
    introParagraph1:
      "Der SOC Analyst (Security Operations Center Analyst) ist die zentrale Einstiegsrolle in der IT-Sicherheit. Er überwacht Unternehmensnetzwerke und Cloud-Umgebungen in Echtzeit, untersucht Sicherheitswarnungen im SIEM und wehrt Cyberangriffe ab.",
    introCourseLinkLabel: "Cyber Security Weiterbildung zum SOC Analyst",
    introCourseLinkTo: "/it-kurse/cyber-security-weiterbildung/",
    introFundingLinkLabel: "100 % Förderung mit Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "Durch die verschärfte europäische NIS-2-Richtlinie bauen Unternehmen und IT-Dienstleister ihre Security Operations Centers massiv aus.",
    tableTitle: "SOC Analyst Stufen (Tier 1 bis Tier 3) & Gehalt",
    tableHeaders: ["Stufe", "Hauptaufgabe", "Jahresgehalt (StepStone 2026)"],
    tableRows: [
      ["SOC Analyst Tier 1", "Alert-Monitoring, SIEM-Triage & erste Bewertung", "45.000 – 52.400 €"],
      ["SOC Analyst Tier 2", "Tiefenanalyse, Incident Response & Forensik", "53.000 – 63.000 €"],
      ["SOC Tier 3 / Cloud Security", "Threat Hunting, SOAR-Agenten & AWS Cloud Security", "64.000 – 79.000 €"],
    ],
    sections: [
      {
        id: "ki-im-soc",
        h2: "Wie KI die Arbeit im Security Operations Center verändert",
        paragraphs: [
          "Moderne SOC-Teams nutzen KI-gestützte Alert-Triage und autonome Agenten (SOAR), um Fehlalarme zu reduzieren und Angriffe in Sekunden statt Stunden zu isolieren. Genau darauf bereiten dich Modul 2 und Modul 3 unserer Cyber Security Weiterbildung vor.",
        ],
      },
    ],
    faqs: [
      {
        q: "Welche Zertifizierung ist für angehende SOC Analysts am wichtigsten?",
        a: "CompTIA Security+ (SY0-701) gilt weltweit als der wichtigste herstellerunabhängige Nachweis für den Einstieg ins Security Operations Center.",
      },
    ],
    ctaCourseTitle: "Cyber Security Weiterbildung mit KI-SOC-Training",
    ctaCourseDesc: "4 Module inkl. CompTIA Security+ Vorbereitung — 100 % förderbar mit Bildungsgutschein.",
    ctaCourseTo: "/it-kurse/cyber-security-weiterbildung/",
    relatedSlugs: ["comptia-security-plus", "was-ist-ein-siem", "cyber-security-gehalt"],
  },

  "comptia-security-plus": {
    slug: "comptia-security-plus",
    lang: "de",
    cluster: "Cyber Security",
    badge: "Zertifizierungs-Guide",
    metaTitle: "CompTIA Security+ (SY0-701): Prüfung & Kosten | Clarusway",
    metaDescription:
      "Alles zur CompTIA Security+ Zertifizierung (SY0-701): Prüfungsdomänen, Kosten, Vorbereitung und Kostenübernahme über den Bildungsgutschein.",
    h1: "CompTIA Security+ Zertifizierung: Prüfung, Kosten und Vorbereitung",
    author: "Clarusway Cyber Security Team",
    updatedAt: "22. Oktober 2026",
    readTime: "6 Min. Lesezeit",
    introParagraph1:
      "CompTIA Security+ (aktueller Prüfungscode SY0-701) ist das international bekannteste Grundlagenzertifikat für IT-Sicherheit und wird in zahlreichen Stellenausschreibungen für SOC Analysts und Security Engineers vorausgesetzt.",
    introCourseLinkLabel: "Cyber Security Weiterbildung (Modul 1: CompTIA Security+)",
    introCourseLinkTo: "/it-kurse/cyber-security-weiterbildung/",
    introFundingLinkLabel: "Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "Hier findest du alle Fakten zu Prüfungsformat, Themengebieten und Vorbereitung.",
    tableTitle: "CompTIA Security+ (SY0-701) Prüfungsdomänen",
    tableHeaders: ["Domäne", "Gewichtung", "Schwerpunkte"],
    tableRows: [
      ["1. General Security Concepts", "12 %", "Zero Trust, Kryptografie, Sicherheitskontrollen"],
      ["2. Threats, Vulnerabilities & Mitigations", "22 %", "Malware, Social Engineering, Schwachstellenanalyse"],
      ["3. Security Architecture", "18 %", "Netzwerk-, Cloud- und Endpoint-Architektur"],
      ["4. Security Operations", "28 %", "SIEM, Monitoring, Incident Response, Forensik"],
      ["5. Security Program Management", "20 %", "Governance, Risiko-Management, Compliance (NIS-2, DSGVO)"],
    ],
    sections: [
      {
        id: "vorbereitung",
        h2: "Vorbereitung in Modul 1 bei Clarusway",
        paragraphs: [
          "In Modul 1 unserer Cyber Security Weiterbildung erarbeitest du alle fünf Prüfungsdomänen praktisch im Labor und trainierst mit realistischen Prüfungssimulationen.",
        ],
      },
    ],
    faqs: [
      {
        q: "Kann ich Modul 1 überspringen, wenn ich Security+ bereits habe?",
        a: "Ja. Mit vorhandenem Security+ Zertifikat oder nach bestandener Einstufungsprüfung kannst du direkt in Modul 2 (SOC Analyst) einsteigen.",
      },
    ],
    ctaCourseTitle: "CompTIA Security+ Vorbereitung inklusive",
    ctaCourseDesc: "Starte deine geförderte Cyber Security Weiterbildung bei Clarusway.",
    ctaCourseTo: "/it-kurse/cyber-security-weiterbildung/",
    relatedSlugs: ["soc-analyst", "was-ist-ein-siem", "cyber-security-gehalt"],
  },

  "was-ist-ein-siem": {
    slug: "was-ist-ein-siem",
    lang: "de",
    cluster: "Cyber Security",
    badge: "Technologie-Guide",
    metaTitle: "Was ist ein SIEM? Einfach erklärt | Clarusway",
    metaDescription:
      "Was bedeutet SIEM (Security Information and Event Management)? Wie SOC Analysts mit Splunk und ELK Cyberangriffe in Echtzeit erkennen.",
    h1: "Was ist ein SIEM? Security Information and Event Management erklärt",
    author: "Clarusway Cyber Security Team",
    updatedAt: "22. Oktober 2026",
    readTime: "5 Min. Lesezeit",
    introParagraph1:
      "Ein SIEM (Security Information and Event Management) ist das zentrale Cockpit jedes Security Operations Centers. Es sammelt Log-Daten von Firewalls, Servern, Endgeräten und Cloud-Diensten und schlägt bei verdächtigen Mustern Alarm.",
    introCourseLinkLabel: "Cyber Security Weiterbildung",
    introCourseLinkTo: "/it-kurse/cyber-security-weiterbildung/",
    introFundingLinkLabel: "Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "Erfahre, wie SIEM-Plattformen wie Splunk und der Elastic Stack (ELK) im SOC eingesetzt werden.",
    tableTitle: "Zentrale Funktionen eines SIEM-Systems",
    tableHeaders: ["Funktion", "Beschreibung"],
    tableRows: [
      ["Log-Aggregation", "Sammelt Ereignisdaten aus dem gesamten Netzwerk und der Cloud an einem Ort"],
      ["Korrelation & Erkennung", "Verknüpft einzelne Ereignisse anhand des MITRE ATT&CK Frameworks"],
      ["Alerting & Dashboards", "Priorisiert Warnmeldungen für SOC-Analysten"],
      ["Compliance & Forensik", "Revisionssichere Speicherung zur Aufklärung von Sicherheitsvorfällen"],
    ],
    sections: [
      {
        id: "praxis",
        h2: "Praktisches SIEM-Training im Cyber-Lab",
        paragraphs: [
          "In Modul 2 unserer Cyber Security Weiterbildung analysierst du reale Angriffs-Logs im SIEM und lernst, echte Bedrohungen von Fehlalarmen zu unterscheiden.",
        ],
      },
    ],
    faqs: [
      {
        q: "Welche SIEM-Tools lernt man bei Clarusway?",
        a: "Du arbeitest praxisnah mit führenden SIEM- und Log-Analyse-Werkzeugen wie Splunk und dem ELK-Stack sowie AWS Security Hub.",
      },
    ],
    ctaCourseTitle: "SIEM & SOC Praxis live trainieren",
    ctaCourseDesc: "Zur AZAV-zertifizierten Cyber Security Weiterbildung.",
    ctaCourseTo: "/it-kurse/cyber-security-weiterbildung/",
    relatedSlugs: ["soc-analyst", "comptia-security-plus"],
  },

  "cyber-security-gehalt": {
    slug: "cyber-security-gehalt",
    lang: "de",
    cluster: "Cyber Security",
    badge: "Gehaltsreport",
    metaTitle: "Cyber Security Gehalt in Deutschland 2026 | Clarusway",
    metaDescription:
      "Was verdient man in der Cyber Security in Deutschland? Gehaltstabellen für SOC Analyst, Cyber Security Analyst und Cloud Security Engineer.",
    h1: "Cyber Security Gehalt in Deutschland: Was verdienen IT-Sicherheitsexperten?",
    author: "Clarusway Karriere-Team",
    updatedAt: "22. Oktober 2026",
    readTime: "5 Min. Lesezeit",
    introParagraph1:
      "Die hohe Nachfrage nach IT-Sicherheitsfachkräften spiegelt sich in attraktiven Einstiegs- und Senior-Gehältern wider.",
    introCourseLinkLabel: "Cyber Security Weiterbildung",
    introCourseLinkTo: "/it-kurse/cyber-security-weiterbildung/",
    introFundingLinkLabel: "Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "Hier sind die aktuellen Zahlen aus dem StepStone Gehaltsreport 2026.",
    tableTitle: "Gehalt in der IT-Sicherheit nach Rolle (StepStone 2026)",
    tableHeaders: ["Rolle", "Median-Gehalt", "Gehaltsspanne (Brutto/Jahr)"],
    tableRows: [
      ["SOC Analyst", "52.400 €", "45.000 – 63.000 €"],
      ["Cyber Security Analyst", "58.900 €", "49.500 – 71.000 €"],
      ["Cloud Security Analyst", "65.200 €", "55.000 – 79.000 €"],
    ],
    sections: [
      {
        id: "cloud-bonus",
        h2: "Warum Cloud- und KI-Security-Skills das Gehalt steigern",
        paragraphs: [
          "Wer klassische SOC-Erfahrung mit AWS Cloud Security und KI-gestützter Automatisierung kombiniert, qualifiziert sich schnell für höher dotierte Positionen.",
        ],
      },
    ],
    faqs: [
      {
        q: "Wie hoch ist das Einstiegsgehalt als SOC Analyst?",
        a: "Der Einstieg als Tier-1 SOC Analyst liegt in Deutschland meist zwischen 45.000 € und 52.400 €.",
      },
    ],
    ctaCourseTitle: "Starte deine Karriere in der IT-Sicherheit",
    ctaCourseDesc: "100 % gefördert mit Bildungsgutschein.",
    ctaCourseTo: "/it-kurse/cyber-security-weiterbildung/",
    relatedSlugs: ["soc-analyst", "comptia-security-plus"],
  },

  "devops-engineer": {
    slug: "devops-engineer",
    lang: "de",
    cluster: "Cloud & DevOps",
    badge: "Berufsratgeber (Cloud & DevOps)",
    metaTitle: "DevOps Engineer werden: Aufgaben & Gehalt | Clarusway",
    metaDescription:
      "Was macht ein DevOps Engineer? Alles zu Aufgaben, Tools (AWS, Docker, Kubernetes, Terraform), Gehalt in Deutschland und Weiterbildung mit Bildungsgutschein.",
    h1: "DevOps Engineer: Aufgaben, Gehalt und Einstieg in Deutschland",
    author: "Clarusway Cloud & DevOps Team",
    updatedAt: "22. Oktober 2026",
    readTime: "7 Min. Lesezeit",
    introParagraph1:
      "DevOps Engineers automatisieren den Weg vom Programmcode bis zum stabilen Betrieb in der Cloud. Mit Werkzeugen wie AWS, Docker, Kubernetes, Terraform und CI/CD-Pipelines sorgen sie dafür, dass Software mehrmals täglich sicher aktualisiert werden kann.",
    introCourseLinkLabel: "AWS & DevOps Weiterbildung",
    introCourseLinkTo: "/it-kurse/aws-devops-weiterbildung/",
    introFundingLinkLabel: "100 % Förderung über einen Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "Erfahre hier, welche Aufgaben ein DevOps Engineer übernimmt und warum das Berufsbild zu den bestbezahlten IT-Pfaden zählt.",
    tableTitle: "Wichtigste Werkzeuge eines DevOps Engineers",
    tableHeaders: ["Kategorie", "Standard-Tools", "Zweck"],
    tableRows: [
      ["Cloud-Plattformen", "AWS, Microsoft Azure", "Skalierbare Rechen-, Speicher- und Netzwerk-Infrastruktur"],
      ["Container & Orchestrierung", "Docker, Kubernetes (K8s)", "Portabler und ausfallsicherer Betrieb von Microservices"],
      ["Infrastructure as Code", "Terraform, CloudFormation", "Infrastruktur automatisiert per Code bereitstellen"],
      ["CI/CD & Monitoring", "GitHub Actions, Jenkins, Prometheus, Grafana", "Automatische Tests, Deployments und Überwachung"],
    ],
    sections: [
      {
        id: "gehalt",
        h2: "Was verdient ein DevOps Engineer in Deutschland?",
        paragraphs: [
          "Laut StepStone Gehaltsdaten 2026 liegt das Median-Gehalt für DevOps Engineers in Deutschland bei 64.800 € (Spanne von 55.000 € bis 78.500 €).",
        ],
      },
    ],
    faqs: [
      {
        q: "Kann man ohne Vorwissen DevOps Engineer werden?",
        a: "Ja, über unser 8-monatiges Komplettpaket startest du bei Linux-, Netzwerk- und AWS-Grundlagen in Modul 1 und arbeitest dich bis zu Kubernetes und Terraform vor.",
      },
    ],
    ctaCourseTitle: "AWS & DevOps Weiterbildung zum Cloud Engineer",
    ctaCourseDesc: "5 AZAV-zertifizierte Modulkombinationen — 100 % förderbar mit Bildungsgutschein.",
    ctaCourseTo: "/it-kurse/aws-devops-weiterbildung/",
    relatedSlugs: ["cloud-engineer", "was-ist-devops", "aws-zertifizierungen"],
  },

  "cloud-engineer": {
    slug: "cloud-engineer",
    lang: "de",
    cluster: "Cloud & DevOps",
    badge: "Berufsratgeber (Cloud)",
    metaTitle: "Cloud Engineer werden: Aufgaben, Skills & Gehalt | Clarusway",
    metaDescription:
      "Was macht ein Cloud Engineer? Aufgaben auf AWS und Azure, Gehalt in Deutschland und geförderte Weiterbildung mit Bildungsgutschein.",
    h1: "Cloud Engineer werden: Aufgaben, Gehalt und Einstieg",
    author: "Clarusway Cloud & DevOps Team",
    updatedAt: "22. Oktober 2026",
    readTime: "6 Min. Lesezeit",
    introParagraph1:
      "Cloud Engineers planen, migrieren und verwalten die IT-Infrastruktur von Unternehmen auf Plattformen wie Amazon Web Services (AWS) und Microsoft Azure.",
    introCourseLinkLabel: "AWS & DevOps Weiterbildung",
    introCourseLinkTo: "/it-kurse/aws-devops-weiterbildung/",
    introFundingLinkLabel: "Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "Hier erfährst du, wie sich Cloud Engineer, Solutions Architect und DevOps Engineer ergänzen.",
    tableTitle: "Cloud-Rollen und Gehälter in Deutschland (StepStone 2026)",
    tableHeaders: ["Rolle", "Schwerpunkt", "Median-Gehalt"],
    tableRows: [
      ["Cloud Engineer", "Aufbau & Betrieb von Cloud-Infrastrukturen", "61.500 €"],
      ["DevOps Engineer", "CI/CD, Kubernetes & Automatisierung", "64.800 €"],
      ["AWS Solutions Architect", "Architektur-Design & Kostenoptimierung", "68.400 €"],
    ],
    sections: [
      {
        id: "multi-cloud",
        h2: "Warum AWS + Azure Kenntnisse in Deutschland gefragt sind",
        paragraphs: [
          "Während AWS weltweit Marktführer ist, nutzen viele deutsche Mittelstands- und Industriekonzerne zusätzlich Microsoft Azure. Unser Modul 3 vermittelt dir genau diese Multi-Cloud-Kompetenz.",
        ],
      },
    ],
    faqs: [
      {
        q: "Wie schnell kann ich mich zum Cloud Engineer qualifizieren?",
        a: "Bereits das 3-monatige Modul 1 (AWS Solutions Architect) legt das vollständige Fundament; das 6- oder 8-monatige Programm ergänzt DevOps und Azure.",
      },
    ],
    ctaCourseTitle: "Starte deine Cloud-Karriere bei Clarusway",
    ctaCourseDesc: "Offizieller AWS Select Tier Partner · 100 % förderbar mit Bildungsgutschein.",
    ctaCourseTo: "/it-kurse/aws-devops-weiterbildung/",
    relatedSlugs: ["devops-engineer", "aws-zertifizierungen", "aws-cloud-practitioner"],
  },

  "was-ist-devops": {
    slug: "was-ist-devops",
    lang: "de",
    cluster: "Cloud & DevOps",
    badge: "Grundlagen-Guide",
    metaTitle: "Was ist DevOps? Einfach erklärt (CI/CD & Cloud) | Clarusway",
    metaDescription:
      "Was bedeutet DevOps? Wie Development und Operations über CI/CD, Docker, Kubernetes und Terraform zusammenarbeiten.",
    h1: "Was ist DevOps? Prinzipien, CI/CD-Pipelines und Werkzeuge erklärt",
    author: "Clarusway Cloud & DevOps Team",
    updatedAt: "22. Oktober 2026",
    readTime: "5 Min. Lesezeit",
    introParagraph1:
      "DevOps setzt sich aus Development (Softwareentwicklung) und Operations (IT-Betrieb) zusammen. Statt Software monatelang getrennt zu entwickeln und dann mühsam auf Servern zu installieren, automatisiert DevOps den gesamten Lebenszyklus.",
    introCourseLinkLabel: "AWS & DevOps Weiterbildung",
    introCourseLinkTo: "/it-kurse/aws-devops-weiterbildung/",
    introFundingLinkLabel: "Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "Lerne die wichtigsten Phasen einer modernen DevOps-Pipeline kennen.",
    tableTitle: "Die Phasen des DevOps-Lebenszyklus",
    tableHeaders: ["Phase", "Vorgang", "Typisches Tool"],
    tableRows: [
      ["Plan & Code", "Quellcode gemeinsam verwalten", "Git & GitHub"],
      ["Build & Test", "Automatischer Build und Tests bei jedem Commit", "GitHub Actions, Jenkins"],
      ["Package & Release", "Anwendung als Container verpacken", "Docker"],
      ["Deploy & Operate", "Skalierbarer Betrieb in der Cloud", "Kubernetes, Terraform, AWS"],
      ["Monitor", "Systemgesundheit und Metriken überwachen", "Prometheus & Grafana"],
    ],
    sections: [
      {
        id: "vorteile",
        h2: "Warum jedes moderne Tech-Team DevOps einsetzt",
        paragraphs: [
          "Durch automatisierte Pipelines sinkt die Fehlerrate bei Updates drastisch, während neue Funktionen schneller beim Kunden ankommen.",
        ],
      },
    ],
    faqs: [
      {
        q: "Ist DevOps eine Programmiersprache?",
        a: "Nein. DevOps ist eine Arbeitsmethodik und Ingenieursdisziplin, die Automatisierungstools, Cloud-Infrastruktur und Skriptsprachen (Bash, Python, YAML, HCL) verbindet.",
      },
    ],
    ctaCourseTitle: "DevOps Engineering praxisnah lernen",
    ctaCourseDesc: "Jetzt zur AWS & DevOps Weiterbildung beraten lassen.",
    ctaCourseTo: "/it-kurse/aws-devops-weiterbildung/",
    relatedSlugs: ["devops-engineer", "cloud-engineer"],
  },

  "aws-zertifizierungen": {
    slug: "aws-zertifizierungen",
    lang: "de",
    cluster: "Cloud & DevOps",
    badge: "Zertifizierungs-Guide",
    metaTitle: "AWS Zertifizierungen im Überblick: Welche lohnt sich? | Clarusway",
    metaDescription:
      "Alle wichtigen AWS Zertifizierungen im Vergleich: Cloud Practitioner (CLF-C02), Solutions Architect Associate (SAA-C03) und DevOps Engineer.",
    h1: "AWS Zertifizierungen: Überblick, Kosten und welche Prüfung sich zuerst lohnt",
    author: "Clarusway Cloud & DevOps Team",
    updatedAt: "22. Oktober 2026",
    readTime: "6 Min. Lesezeit",
    introParagraph1:
      "Zertifizierungen von Amazon Web Services (AWS) gehören zu den wertvollsten Nachweisen auf dem deutschen IT-Arbeitsmarkt. Sie belegen objektiv, dass du Cloud-Architekturen sicher planen und betreiben kannst.",
    introCourseLinkLabel: "AWS Solutions Architect & DevOps Weiterbildung",
    introCourseLinkTo: "/it-kurse/aws-devops-weiterbildung/",
    introFundingLinkLabel: "Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "Hier siehst du die wichtigsten AWS-Prüfungsstufen im Vergleich.",
    tableTitle: "Die wichtigsten AWS Zertifizierungen im Vergleich",
    tableHeaders: ["Zertifizierung", "Code", "Stufe", "Empfohlen für"],
    tableRows: [
      ["AWS Certified Cloud Practitioner", "CLF-C02", "Foundational", "Einsteiger & technisches Grundverständnis"],
      ["AWS Certified Solutions Architect – Associate", "SAA-C03", "Associate", "Cloud Engineers, Architekten & DevOps (Top-Empfehlung)"],
      ["AWS Certified SysOps Administrator – Associate", "SOA-C02", "Associate", "Systemadministratoren & Cloud-Betrieb"],
      ["AWS Certified DevOps Engineer – Professional", "DOP-C02", "Professional", "Erfahrene DevOps & Cloud Engineers"],
    ],
    sections: [
      {
        id: "saa-c03",
        h2: "Warum der Solutions Architect Associate (SAA-C03) der beste Türöffner ist",
        paragraphs: [
          "Während der Cloud Practitioner die Grundlagen abfragt, verlangt der Solutions Architect Associate (SAA-C03) echtes Architekturverständnis über VPCs, IAM, EC2, S3 und Datenbanken — und wird deshalb in den meisten Stellenanzeigen explizit genannt.",
        ],
      },
    ],
    faqs: [
      {
        q: "Bereitet Clarusway auf die SAA-C03 Prüfung vor?",
        a: "Ja, sowohl in unserer 3-monatigen AWS Solutions Architect Weiterbildung als auch in Modul 1 der AWS & DevOps Weiterbildung.",
      },
    ],
    ctaCourseTitle: "AWS Zertifizierung mit Bildungsgutschein vorbereiten",
    ctaCourseDesc: "Lerne beim offiziellen AWS Select Tier Partner Clarusway.",
    ctaCourseTo: "/it-kurse/aws-solutions-architect-weiterbildung/",
    relatedSlugs: ["aws-cloud-practitioner", "devops-engineer", "cloud-engineer"],
  },

  "aws-cloud-practitioner": {
    slug: "aws-cloud-practitioner",
    lang: "de",
    cluster: "Cloud & DevOps",
    badge: "Prüfungs-Guide",
    metaTitle: "AWS Cloud Practitioner (CLF-C02): Prüfung & Kosten | Clarusway",
    metaDescription:
      "Leitfaden zur AWS Certified Cloud Practitioner Prüfung (CLF-C02): Themendomänen, Prüfungsdauer, Kosten und Vorbereitung.",
    h1: "AWS Cloud Practitioner (CLF-C02): Prüfung, Kosten und Vorbereitung",
    author: "Clarusway Cloud & DevOps Team",
    updatedAt: "22. Oktober 2026",
    readTime: "5 Min. Lesezeit",
    introParagraph1:
      "Die Prüfung zum AWS Certified Cloud Practitioner (CLF-C02) ist der offizielle Einstieg in die Welt von Amazon Web Services.",
    introCourseLinkLabel: "AWS Solutions Architect & DevOps Kursen",
    introCourseLinkTo: "/it-kurse/aws-devops-weiterbildung/",
    introFundingLinkLabel: "Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "Alle vier Prüfungsdomänen und Eckdaten im Überblick:",
    tableTitle: "AWS Cloud Practitioner (CLF-C02) Prüfungsdomänen",
    tableHeaders: ["Domäne", "Anteil an der Prüfung", "Inhalte"],
    tableRows: [
      ["1. Cloud Concepts", "24 %", "Vorteile der AWS Cloud, Well-Architected Prinzipien"],
      ["2. Security and Compliance", "30 %", "Shared Responsibility Model, IAM, Sicherheit"],
      ["3. Cloud Technology and Services", "34 %", "EC2, S3, VPC, RDS, Lambda"],
      ["4. Billing, Pricing, and Support", "12 %", "Kostenmodelle, Budgets & AWS Support-Pläne"],
    ],
    sections: [
      {
        id: "naechster-schritt",
        h2: "Vom Cloud Practitioner zum Solutions Architect (SAA-C03)",
        paragraphs: [
          "In Modul 1 unserer AWS-Weiterbildung deckst du nicht nur sämtliche Inhalte des Cloud Practitioners ab, sondern gehst direkt weiter bis zur Associate-Stufe (SAA-C03).",
        ],
      },
    ],
    faqs: [
      {
        q: "Wie viele Fragen hat die CLF-C02 Prüfung?",
        a: "Die Prüfung umfasst 65 Multiple-Choice- bzw. Multiple-Response-Fragen bei einer Dauer von 90 Minuten.",
      },
    ],
    ctaCourseTitle: "AWS Cloud von Grund auf lernen",
    ctaCourseDesc: "100 % förderbar mit Bildungsgutschein.",
    ctaCourseTo: "/it-kurse/aws-devops-weiterbildung/",
    relatedSlugs: ["aws-zertifizierungen", "cloud-engineer"],
  },

  "software-tester": {
    slug: "software-tester",
    lang: "de",
    cluster: "Software Testing",
    badge: "Berufsratgeber (QA)",
    metaTitle: "Software Tester (SDET) werden: Aufgaben & Gehalt | Clarusway",
    metaDescription:
      "Was macht ein Software Tester / QA Automation Engineer (SDET)? Aufgaben, Tools (Java, Selenium, Playwright), Gehalt und Quereinstieg.",
    h1: "Software Tester (SDET) werden: Aufgaben, Gehalt und Quereinstieg",
    author: "Clarusway QA & SDET Team",
    updatedAt: "22. Oktober 2026",
    readTime: "6 Min. Lesezeit",
    introParagraph1:
      "Software Tester und Testautomatisierer (SDET) stellen sicher, dass Webanwendungen, Apps und Schnittstellen fehlerfrei funktionieren. Für strukturierte Quereinsteiger bietet das Berufsfeld einen klaren, verlässlichen Einstieg in die Softwarebranche.",
    introCourseLinkLabel: "Software Testing (SDET) Weiterbildung",
    introCourseLinkTo: "/it-kurse/software-testing-weiterbildung/",
    introFundingLinkLabel: "100 % Förderung mit Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "Erfahre, wie sich manuelles Testing und Testautomatisierung unterscheiden und welche Gehälter gezahlt werden.",
    tableTitle: "Manueller QA Tester vs. SDET (Testautomatisierung)",
    tableHeaders: ["Rolle", "Schwerpunkt", "Median-Gehalt (StepStone 2026)"],
    tableRows: [
      ["QA Analyst (Manuell)", "Testplanung, exploratives Testen, Jira/Xray", "49.200 €"],
      ["SDET / QA Automation Engineer", "Automatisierte UI- & API-Tests (Selenium, Playwright, Postman)", "56.400 €"],
    ],
    sections: [
      {
        id: "warum-sdet",
        h2: "Warum Testautomatisierung der Schlüssel für deine Karriere ist",
        paragraphs: [
          "Unternehmen veröffentlichen Software heute im Wochentakt oder täglich. Deshalb suchen sie gezielt nach Fachkräften, die wiederkehrende Tests mit Java, Selenium, Cypress und Playwright automatisieren.",
        ],
      },
    ],
    faqs: [
      {
        q: "Brauche ich Vorkenntnisse für die SDET Weiterbildung?",
        a: "Nein. Wir vermitteln sowohl die Grundlagen des manuellen Testens nach ISTQB-Standard als auch die Programmierung automatisierter Tests von Grund auf.",
      },
    ],
    ctaCourseTitle: "Software Testing (SDET) Weiterbildung",
    ctaCourseDesc: "Werde QA Automation Engineer — 100 % förderbar mit Bildungsgutschein.",
    ctaCourseTo: "/it-kurse/software-testing-weiterbildung/",
    relatedSlugs: ["istqb-zertifizierung", "full-stack-entwickler"],
  },

  "istqb-zertifizierung": {
    slug: "istqb-zertifizierung",
    lang: "de",
    cluster: "Software Testing",
    badge: "Zertifizierungs-Guide",
    metaTitle: "ISTQB Zertifizierung (CTFL): Prüfung & Nutzen | Clarusway",
    metaDescription:
      "Alles zum ISTQB Certified Tester Foundation Level (CTFL): Aufbau, Prüfung, Kosten und Kombination mit moderner Testautomatisierung.",
    h1: "ISTQB Zertifizierung: Was bringt der Certified Tester (CTFL)?",
    author: "Clarusway QA & SDET Team",
    updatedAt: "22. Oktober 2026",
    readTime: "5 Min. Lesezeit",
    introParagraph1:
      "Das ISTQB Certified Tester Foundation Level (CTFL) definiert weltweit die einheitliche Fachsprache und Methodik für Softwaretests und wird in Deutschland besonders häufig in Stellenanzeigen für QA-Rollen genannt.",
    introCourseLinkLabel: "Software Testing (SDET) Weiterbildung",
    introCourseLinkTo: "/it-kurse/software-testing-weiterbildung/",
    introFundingLinkLabel: "Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "Hier siehst du die wichtigsten Kapitel des ISTQB-Lehrplans und warum du die Theorie unbedingt mit praktischer Testautomatisierung verbinden solltest.",
    tableTitle: "ISTQB Foundation Level (CTFL) Kernthemen",
    tableHeaders: ["Kapitel", "Schwerpunkt"],
    tableRows: [
      ["1. Grundlagen des Testens", "Warum Testen notwendig ist & die 7 Grundsätze"],
      ["2. Testen im Softwarelebenszyklus", "Teststufen (Unit, Integration, System, Abnahme) & Agile"],
      ["3. Statischer Test", "Reviews und frühzeitige Fehlererkennung"],
      ["4. Testanalyse & Testentwurf", "Black-Box-, White-Box- und erfahrungsbasierte Verfahren"],
      ["5. Management der Testaktivitäten", "Testplanung, Risikomanagement & Fehlermanagement"],
      ["6. Testwerkzeuge", "Einsatz von Testautomatisierung im Projekt"],
    ],
    sections: [
      {
        id: "kombination",
        h2: "ISTQB-Fundament + praktische Testautomatisierung",
        paragraphs: [
          "Während ISTQB die methodische Basis liefert, entscheidet im Vorstellungsgespräch deine praktische Erfahrung mit Tools wie Selenium, Playwright, Postman und SQL. Unsere SDET-Weiterbildung verbindet beides.",
        ],
      },
    ],
    faqs: [
      {
        q: "Sind ISTQB-Inhalte Teil der Clarusway SDET-Weiterbildung?",
        a: "Ja, in Phase 1 erlernst du die komplette Testmethodik nach ISTQB-Standard gemeinsam mit praktischem Fehlermanagement in Jira.",
      },
    ],
    ctaCourseTitle: "Methodik + Testautomatisierung lernen",
    ctaCourseDesc: "Zur geförderten Software Testing (SDET) Weiterbildung.",
    ctaCourseTo: "/it-kurse/software-testing-weiterbildung/",
    relatedSlugs: ["software-tester", "quereinstieg-it"],
  },
};

/* ============================================================================
   ENGLISH GUIDES & BLOGS (/guides/:slug) — Expat Cluster + Career/Cert Guides
   ============================================================================ */
export const EN_GUIDES: Record<string, GuideArticleData> = {
  "data-analyst": {
    slug: "data-analyst",
    lang: "en",
    cluster: "Data & AI",
    badge: "Career Guide",
    metaTitle: "What Does a Data Analyst Do? Tasks & Salary in Germany | Clarusway",
    metaDescription:
      "What does a data analyst do in Germany? Daily tasks, SQL & Python skills, salary ranges (StepStone 2026), and 100% funded training with a Bildungsgutschein.",
    h1: "What does a data analyst do? Tasks, skills and salary in Germany",
    author: "Clarusway Data & AI Team",
    updatedAt: "October 24, 2026",
    readTime: "6 min read",
    introParagraph1:
      "Data Analysts turn raw company data into actionable business decisions using SQL, Python, Power BI, and Tableau. For English-speaking professionals and career changers in Germany, Data Analytics offers one of the most accessible and in-demand paths into tech.",
    introCourseLinkLabel: "AI Engineering Bootcamp (Module 1: Data Analytics)",
    introCourseLinkTo: "/it-courses/ai-engineering/",
    introFundingLinkLabel: "how to get a Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "Here is a comprehensive breakdown of what Data Analysts actually do day-to-day, what German employers expect, and what salaries you can anticipate.",
    tableTitle: "Core Skills and Tools of a Data Analyst in Germany",
    tableHeaders: ["Skill Area", "Primary Tools", "Business Impact"],
    tableRows: [
      ["Database Querying", "SQL (PostgreSQL, MySQL)", "Extract, filter, and join complex business transactions"],
      ["Data Wrangling & Cleaning", "Python (Pandas, NumPy)", "Automate data pipelines, clean missing values, and transform datasets"],
      ["Business Intelligence (BI)", "Power BI (DAX), Tableau", "Build automated executive KPI dashboards for leadership teams"],
      ["Statistical Analysis", "Hypothesis & A/B Testing", "Validate product features, conversion funnels, and marketing ROI"],
    ],
    sections: [
      {
        id: "daily-tasks",
        h2: "What does a Data Analyst do on a typical day?",
        paragraphs: [
          "A Data Analyst acts as the bridge between technical database architectures and business stakeholders. Daily tasks typically include writing SQL queries to pull customer and sales data, cleaning raw CSV and API feeds in Python, and updating Power BI or Tableau dashboards used by management.",
          "In modern cross-functional teams, Data Analysts also present findings in sprint reviews and advise department leaders on customer retention, pricing experiments, and revenue forecasting.",
        ],
      },
      {
        id: "salaries",
        h2: "Data Analyst salaries in Germany (StepStone 2026)",
        paragraphs: [
          "According to the StepStone Salary Report 2026, the median gross annual salary for Data Analysts in Germany is €54,800. Junior analysts with hands-on portfolio projects start between €42,000 and €49,500, while senior analysts and BI leads earn between €60,000 and €72,000.",
        ],
      },
      {
        id: "entry-path",
        h2: "How to qualify in 13 weeks — or continue into AI Engineering",
        paragraphs: [
          "At Clarusway, the 13-week Data Analytics curriculum forms Module 1 of the 32-week AI Engineering Bootcamp. You can graduate ready for junior Data Analyst roles after 13 weeks, or seamlessly advance into Module 2 (Machine Learning) and Module 3 (Agentic AI).",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need prior coding experience to become a Data Analyst?",
        a: "No. Module 1 of Clarusway's AI Engineering Bootcamp teaches Python, SQL, and Power BI step-by-step from scratch in English.",
      },
      {
        q: "Is Data Analytics training free with a Bildungsgutschein?",
        a: "Yes. All Clarusway programs are AZAV-certified. With a Bildungsgutschein from the Agentur für Arbeit or Jobcenter, 100% of your tuition fees are covered.",
      },
    ],
    ctaCourseTitle: "AI Engineering Bootcamp: Module 1 Data Analytics",
    ctaCourseDesc: "13 weeks live online in English · 100% covered with a Bildungsgutschein.",
    ctaCourseTo: "/it-courses/ai-engineering/",
    relatedSlugs: ["ai-engineer", "full-stack-developer"],
  },

  "ai-engineer": {
    slug: "ai-engineer",
    lang: "en",
    cluster: "Data & AI",
    badge: "Career Guide",
    metaTitle: "What Is an AI Engineer? Role, Skills & Roadmap | Clarusway",
    metaDescription:
      "What is an AI engineer in Germany? Core skills (Python, PyTorch, RAG, Agentic AI, MCP), salary benchmarks, and 32-week bootcamp funded with a Bildungsgutschein.",
    h1: "What is an AI engineer? Role, skills and roadmap in Germany",
    author: "Clarusway Data & AI Team",
    updatedAt: "October 24, 2026",
    readTime: "7 min read",
    introParagraph1:
      "AI Engineers are among the fastest-growing and highest-compensated specialists in the German tech market. While traditional Data Scientists focus on exploratory statistical models, AI Engineers integrate Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and autonomous Agentic AI workflows into scalable production software.",
    introCourseLinkLabel: "AI Engineering Bootcamp in English",
    introCourseLinkTo: "/it-courses/ai-engineering/",
    introFundingLinkLabel: "how to get a Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "Here is what an AI Engineer builds, how the role differs from Data Science, and what skills German engineering teams look for in 2026.",
    tableTitle: "Data Analyst vs. Data Scientist vs. AI Engineer in Germany",
    tableHeaders: ["Role", "Core Responsibility", "Primary Tech Stack", "Median Salary (StepStone 2026)"],
    tableRows: [
      ["Data Analyst", "Business insights & KPI dashboards", "SQL, Python (Pandas), Power BI, Tableau", "€54,800"],
      ["Data Scientist", "Predictive machine learning models", "Python, Scikit-Learn, XGBoost, Statistics", "€62,400"],
      ["AI Engineer", "Production LLMs, RAG & Agentic AI workflows", "PyTorch, LangChain, LangGraph, MCP, AWS Bedrock", "€69,500"],
    ],
    sections: [
      {
        id: "responsibilities",
        h2: "What does an AI Engineer build in production?",
        paragraphs: [
          "An AI Engineer builds software architectures that leverage foundation models. Typical projects include building enterprise RAG systems over internal documentation, orchestrating multi-agent workflows using LangGraph and CrewAI, and implementing Model Context Protocol (MCP) servers to give AI agents access to company databases and APIs.",
        ],
      },
      {
        id: "skills-required",
        h2: "Which skills do German companies expect from an AI Engineer?",
        paragraphs: [
          "Employers look for robust Python engineering (FastAPI, Docker), experience with vector databases (Chroma, Pinecone), prompt optimization, fine-tuning techniques, and deployment on cloud infrastructure such as AWS Bedrock.",
        ],
      },
      {
        id: "salary-outlook",
        h2: "Salary benchmarks for AI Engineers in Germany",
        paragraphs: [
          "According to StepStone 2026 data, AI Engineers command median salaries of €69,500, with experienced practitioners reaching €85,000 or more in hubs like Berlin, Munich, Frankfurt, and remote positions across Germany.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the difference between Data Science and AI Engineering?",
        a: "Data Science focuses on analyzing historical data and training predictive models. AI Engineering focuses on deploying modern generative AI, LLMs, and autonomous agents into production software pipelines.",
      },
      {
        q: "Can I enter the AI Engineering Bootcamp without a math degree?",
        a: "Yes. Clarusway's modular structure starts with foundational Python and data handling in Module 1, progressing systematically to machine learning and agentic AI.",
      },
    ],
    ctaCourseTitle: "AI Engineering Bootcamp: From Data Analytics to Agentic AI",
    ctaCourseDesc: "32 weeks full-time in English · 100% covered with a Bildungsgutschein.",
    ctaCourseTo: "/it-courses/ai-engineering/",
    relatedSlugs: ["data-analyst", "full-stack-developer"],
  },

  "full-stack-developer": {
    slug: "full-stack-developer",
    lang: "en",
    cluster: "Software Development",
    badge: "Career Guide",
    metaTitle: "What Is a Full Stack Developer? Skills & Salary | Clarusway",
    metaDescription:
      "What is a full stack developer in 2026? React, TypeScript, Next.js, Node.js, AI coding tools (Cursor, Claude Code), salaries, and funded English bootcamp.",
    h1: "What is a full stack developer? Skills, salary and tools in 2026",
    author: "Clarusway Software Engineering Team",
    updatedAt: "October 24, 2026",
    readTime: "7 min read",
    introParagraph1:
      "Full Stack Developers build entire web applications from end to end: responsive user interfaces on the frontend, scalable APIs and microservices on the backend, and relational databases for persistent storage. In 2026, German software companies increasingly expect developers to pair solid TypeScript fundamentals with AI-assisted development workflows.",
    introCourseLinkLabel: "AI-Assisted Full Stack Developer Course",
    introCourseLinkTo: "/it-courses/full-stack-developer/",
    introFundingLinkLabel: "how to get a Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "Compare Frontend, Backend, and Full Stack responsibilities and review salary benchmarks across Germany below.",
    tableTitle: "Frontend vs. Backend vs. Full Stack Developer in Germany",
    tableHeaders: ["Role", "Focus", "Primary Technologies", "Median Salary (StepStone 2026)"],
    tableRows: [
      ["Frontend Developer", "User experience, accessibility, browser performance", "HTML, CSS, TypeScript, React, Next.js", "€54,200"],
      ["Full Stack Developer", "Complete web application lifecycle", "TypeScript, React, Next.js, Node.js, PostgreSQL", "€58,500"],
      ["Backend Developer", "APIs, database design, server architecture", "Node.js, Express, PostgreSQL, Redis, Docker", "€60,100"],
    ],
    sections: [
      {
        id: "ai-assisted-coding",
        h2: "Why AI-assisted workflows (Cursor, Claude Code, Copilot) are essential in 2026",
        paragraphs: [
          "Modern developers do not code alone in plain text editors. By combining deep understanding of clean software architecture with AI coding assistants (Cursor, Claude Code, GitHub Copilot), full-stack developers generate boilerplate, scaffold database schemas, and write unit tests dramatically faster while maintaining high software standards.",
        ],
      },
      {
        id: "agile-team-project",
        h2: "The power of an Agile team capstone project",
        paragraphs: [
          "Recruiters in Germany look for team experience. In Module 4 of Clarusway's Full Stack program, students build and deploy a production web app in an Agile Scrum team using Git pull requests, code reviews, and CI/CD pipelines.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can beginners become Full Stack Developers?",
        a: "Yes. Module 1 starts from zero with HTML, CSS, JavaScript, and Git fundamentals before introducing React, TypeScript, and backend architectures.",
      },
      {
        q: "Is the course funded with a Bildungsgutschein?",
        a: "Yes. All 4 modules are AZAV-certified and 100% funded by the Agentur für Arbeit or Jobcenter.",
      },
    ],
    ctaCourseTitle: "AI-Assisted Full Stack Developer Course",
    ctaCourseDesc: "4 modular building blocks in English · 100% funded with a Bildungsgutschein.",
    ctaCourseTo: "/it-courses/full-stack-developer/",
    relatedSlugs: ["devops-engineer", "ai-engineer"],
  },

  "soc-analyst": {
    slug: "soc-analyst",
    lang: "en",
    cluster: "Cyber Security",
    badge: "Career Guide",
    metaTitle: "What Does a SOC Analyst Do? Role, Tools & Salary | Clarusway",
    metaDescription:
      "What does a SOC Analyst do in Germany? Tiers 1–3, SIEM & SOAR tools, NIS-2 compliance, salary ranges, and English course funded with a Bildungsgutschein.",
    h1: "What does a SOC analyst do? Role, tools and salary in Germany",
    author: "Clarusway Cyber Security Team",
    updatedAt: "October 24, 2026",
    readTime: "6 min read",
    introParagraph1:
      "A SOC Analyst (Security Operations Center Analyst) monitors enterprise IT networks, investigates suspicious security alerts in real time, and defends organizations against cyber attacks, data breaches, and ransomware. Due to the European Union's NIS-2 directive, German companies are facing unprecedented regulatory pressure to staff 24/7 security teams.",
    introCourseLinkLabel: "Cyber Security Analyst Course",
    introCourseLinkTo: "/it-courses/cyber-security/",
    introFundingLinkLabel: "how to get a Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "Review the three tiers of SOC Analysts, their core responsibilities, and current compensation in Germany below.",
    tableTitle: "SOC Analyst Tiers & Salaries in Germany (StepStone 2026)",
    tableHeaders: ["SOC Tier", "Key Responsibilities", "Typical Experience", "Annual Salary (Gross)"],
    tableRows: [
      ["Tier 1 Analyst (Triage)", "Alert monitoring, SIEM ticket triage, initial threat verification", "0 – 2 years", "€45,000 – €52,400"],
      ["Tier 2 Analyst (Incident Responder)", "Deep malware forensics, threat containment, root cause analysis", "2 – 4 years", "€53,000 – €63,000"],
      ["Tier 3 / Cloud Security Specialist", "Threat hunting, SOAR automation, AWS/Azure infrastructure hardening", "4+ years", "€64,000 – €79,000"],
    ],
    sections: [
      {
        id: "tools",
        h2: "Which security tools does a SOC Analyst use?",
        paragraphs: [
          "Analysts rely on SIEM platforms (like Microsoft Sentinel, Splunk, or Elastic), endpoint detection and response (EDR) solutions, network packet analyzers (Wireshark), and SOAR playbooks that automate containment actions like revoking compromised tokens or isolating infected hosts.",
        ],
      },
      {
        id: "ai-in-soc",
        h2: "The rise of AI-enhanced Security Operations",
        paragraphs: [
          "Modern SOCs leverage Agentic AI to correlate telemetry from millions of event logs and generate human-readable incident summaries in seconds. Analysts with hands-on AI SecOps experience are among the most valued candidates in German cybersecurity.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need prior IT experience to become a SOC Analyst?",
        a: "No. Module 1 of Clarusway's course provides beginner-friendly training in computer networks, Linux, and CompTIA Security+ concepts.",
      },
      {
        q: "What certifications help land a SOC Analyst job in Germany?",
        a: "CompTIA Security+ is the gold standard entry-level certification, followed by hands-on SIEM and cloud security project verification.",
      },
    ],
    ctaCourseTitle: "Cyber Security Analyst Course in English",
    ctaCourseDesc: "4 modules including CompTIA Security+ prep and AI SOC labs — 100% funded with a Bildungsgutschein.",
    ctaCourseTo: "/it-courses/cyber-security/",
    relatedSlugs: ["comptia-security-plus", "will-ai-replace-cybersecurity-professionals"],
  },

  "comptia-security-plus": {
    slug: "comptia-security-plus",
    lang: "en",
    cluster: "Cyber Security",
    badge: "Certification Guide",
    metaTitle: "CompTIA Security+: Exam, Cost and Preparation | Clarusway",
    metaDescription:
      "Complete guide to the CompTIA Security+ (SY0-701) exam in Germany: domains, exam format, cost, and how to prepare for free with a Bildungsgutschein.",
    h1: "CompTIA Security+ in Germany: exam, cost and preparation",
    author: "Clarusway Cyber Security Team",
    updatedAt: "October 24, 2026",
    readTime: "6 min read",
    introParagraph1:
      "CompTIA Security+ (SY0-701) is the premier vendor-neutral cybersecurity certification worldwide. In Germany, it is the most frequently requested baseline qualification in job postings for Junior SOC Analysts, Cloud Security Technicians, and Systems Security Administrators.",
    introCourseLinkLabel: "Cyber Security Analyst Course (Module 1)",
    introCourseLinkTo: "/it-courses/cyber-security/",
    introFundingLinkLabel: "funded with a Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "Review the exam structure, official domains, and preparation roadmap below.",
    tableTitle: "CompTIA Security+ (SY0-701) Exam Domains & Weighting",
    tableHeaders: ["Domain Number", "Domain Name", "Exam Weight", "Key Focus Areas"],
    tableRows: [
      ["1.0", "General Security Concepts", "12%", "Zero Trust, cryptography basics, CIA triad, security controls"],
      ["2.0", "Threats, Vulnerabilities & Mitigations", "22%", "Malware, social engineering, vulnerability scanning, threat intelligence"],
      ["3.0", "Security Architecture", "18%", "Network topologies, cloud shared responsibility, endpoint hardening"],
      ["4.0", "Security Operations", "28%", "SIEM analysis, log monitoring, incident response steps, digital forensics"],
      ["5.0", "Security Program Management & Oversight", "20%", "Compliance frameworks (NIS-2, GDPR, ISO 27001), risk governance"],
    ],
    sections: [
      {
        id: "exam-format",
        h2: "Exam format and passing score",
        paragraphs: [
          "The SY0-701 exam consists of up to 90 questions (a mix of multiple-choice and performance-based simulation questions) completed in 90 minutes. A passing score is 750 on a scale of 100 to 900.",
        ],
      },
      {
        id: "funded-prep",
        h2: "How to prepare 100% funded via Bildungsgutschein",
        paragraphs: [
          "At Clarusway, Module 1 of the Cyber Security Course covers the entire SY0-701 curriculum with live instructors, lab environments, and mock exams. When funded through the Agentur für Arbeit or Jobcenter, 100% of the training costs are covered.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does the CompTIA Security+ exam cost in Germany?",
        a: "The standard retail exam voucher is approximately €370–€390 plus VAT. When attending Clarusway with a Bildungsgutschein, voucher arrangements are included in your approved measure offer.",
      },
      {
        q: "Can I skip Module 1 if I already have Security+?",
        a: "Yes. Learners who already hold CompTIA Security+ can take a placement assessment to enter directly into Module 2 (AI-Enhanced SOC Analyst Experience).",
      },
    ],
    ctaCourseTitle: "Prepare for CompTIA Security+ & SOC Analyst roles",
    ctaCourseDesc: "AZAV-certified live instruction in English · 100% funded with a Bildungsgutschein.",
    ctaCourseTo: "/it-courses/cyber-security/",
    relatedSlugs: ["soc-analyst", "will-ai-replace-cybersecurity-professionals"],
  },

  "will-ai-replace-cybersecurity-professionals": {
    slug: "will-ai-replace-cybersecurity-professionals",
    lang: "en",
    cluster: "Cyber Security",
    badge: "Industry Trends",
    metaTitle: "Will AI Replace Cybersecurity Professionals? Facts & Trends | Clarusway",
    metaDescription:
      "Will AI replace cybersecurity professionals and SOC analysts? Why AI accelerates attacks and defense, which security skills survive, and how to stay ahead.",
    h1: "Will AI replace cybersecurity professionals? Facts and future trends",
    author: "Clarusway Cyber Security Team",
    updatedAt: "October 24, 2026",
    readTime: "7 min read",
    introParagraph1:
      "As Large Language Models and autonomous agent systems advance, many aspiring and current tech professionals ask: will artificial intelligence automate cybersecurity professionals and SOC analysts out of their jobs? In reality, industry data shows the exact opposite: AI is democratizing sophisticated cyber attacks, triggering an unprecedented shortage of qualified, AI-literate security defenders across Germany and Europe.",
    introCourseLinkLabel: "AI-Enhanced Cyber Security Analyst Course",
    introCourseLinkTo: "/it-courses/cyber-security/",
    introFundingLinkLabel: "100% funded with a Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "Here is why AI will not replace cybersecurity analysts — and why analysts who master AI workflows will replace those who do not.",
    tableTitle: "AI in Cybersecurity: What AI Automates vs. What Human Defenders Must Decide",
    tableHeaders: ["Security Domain", "Automated AI Capability", "Human Analyst Responsibility"],
    tableRows: [
      ["Phishing & Social Engineering", "Detects synthetic speech & linguistic manipulation markers", "Formulates anti-fraud policies, investigates executive spear-phishing"],
      ["SIEM Alert Triage", "Filters 90% of false-positive baseline noise in milliseconds", "Conducts root-cause analysis on high-severity, multi-stage intrusions"],
      ["Incident Containment (SOAR)", "Executes automated playbook actions (quarantine host, block IP)", "Assesses critical business impact and orchestrates cross-team response"],
      ["Vulnerability Remediation", "Identifies known CVEs and patches across cloud code", "Evaluates contextual business risk and approves sensitive deployment changes"],
      ["EU NIS-2 & GDPR Compliance", "Collects telemetry logs and security posture evidence", "Signs legal accountability, liaises with German data protection authorities"],
    ],
    sections: [
      {
        id: "the-ai-threat-reality",
        h2: "Why AI is expanding the cybersecurity talent gap in Germany",
        paragraphs: [
          "Threat actors now use generative AI to write polymorphic malware, craft flawless localized phishing campaigns without grammatical errors, and automate credential stuffing attacks at scale. Defending against AI-driven threats requires human security analysts who understand how both offensive and defensive AI tools operate.",
          "According to industry estimates, Germany faces over 17,000 unfilled cybersecurity positions, compounded by stringent compliance requirements under the EU NIS-2 Directive which penalizes corporate leadership for unmanaged security risks.",
        ],
      },
      {
        id: "skills-that-matter",
        h2: "Which cybersecurity skills are future-proof against AI automation?",
        paragraphs: [
          "The roles most resistant to automation are those requiring contextual risk evaluation, digital forensics, threat hunting, and multi-cloud infrastructure security (AWS and Microsoft Azure). Purely repetitive log review is handled by machines, freeing human analysts to focus on active defense and threat intelligence.",
        ],
      },
      {
        id: "clarusway-approach",
        h2: "How Clarusway prepares you for the AI-driven cybersecurity landscape",
        paragraphs: [
          "Clarusway's 4-module Cyber Security Analyst Course includes a dedicated curriculum on AI-Enhanced Security Operations and Agentic AI SecOps. Students learn to build automated SIEM workflows, leverage AI copilots for alert investigations, and configure cloud security perimeters.",
        ],
      },
    ],
    faqs: [
      {
        q: "Will entry-level Tier 1 SOC Analyst jobs disappear?",
        a: "No. Tier 1 analysts are evolving into AI-assisted investigators. Instead of manually inspecting hundreds of raw log lines, analysts supervise AI triage copilots and verify complex security escalations.",
      },
      {
        q: "How can I prepare for an AI-resilient career in cybersecurity?",
        a: "Start with solid networking and security fundamentals (CompTIA Security+), gain hands-on SIEM and cloud lab experience, and learn how to use SOAR automation and AI security tools.",
      },
      {
        q: "Is the Cyber Security Analyst course funded with a Bildungsgutschein?",
        a: "Yes. The course is officially AZAV-certified and 100% funded by the Agentur für Arbeit or Jobcenter.",
      },
    ],
    ctaCourseTitle: "Future-proof your career with AI-Enhanced Cyber Security",
    ctaCourseDesc: "CompTIA Security+, SOC Analyst experience, and AI SecOps in English · 100% funded with a Bildungsgutschein.",
    ctaCourseTo: "/it-courses/cyber-security/",
    relatedSlugs: ["soc-analyst", "comptia-security-plus"],
  },

  "devops-engineer": {
    slug: "devops-engineer",
    lang: "en",
    cluster: "Cloud & DevOps",
    badge: "Career Guide",
    metaTitle: "What Does a DevOps Engineer Do? Skills, Tools & Salary | Clarusway",
    metaDescription:
      "What does a DevOps Engineer do in Germany? Core skills (AWS, Docker, Kubernetes, Terraform, CI/CD), salary benchmarks (StepStone 2026), and funded training.",
    h1: "What does a DevOps engineer do? Skills, tools and salary",
    author: "Clarusway Cloud & DevOps Team",
    updatedAt: "October 24, 2026",
    readTime: "7 min read",
    introParagraph1:
      "DevOps Engineers bridge the gap between software development and IT operations. They design automated CI/CD deployment pipelines, manage containerized clusters with Docker and Kubernetes, and provision cloud infrastructure on Amazon Web Services (AWS) and Microsoft Azure using Infrastructure-as-Code (Terraform).",
    introCourseLinkLabel: "AWS Solutions Architect and DevOps Engineer Training",
    introCourseLinkTo: "/it-courses/devops-aws/",
    introFundingLinkLabel: "how to get a Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "See the essential tools, core responsibilities, and salary benchmarks for DevOps Engineers in Germany below.",
    tableTitle: "Cloud & DevOps Roles and Salaries in Germany (StepStone 2026)",
    tableHeaders: ["Job Title", "Primary Focus", "Core Tech Stack", "Median Gross Annual Salary"],
    tableRows: [
      ["Cloud Engineer", "Cloud infrastructure & security configuration", "AWS (EC2, S3, VPC), Azure, Linux, Bash", "€61,500"],
      ["DevOps Engineer", "CI/CD pipelines, container orchestration, IaC", "Docker, Kubernetes, Terraform, Jenkins, GitHub Actions", "€64,800"],
      ["AWS Solutions Architect", "High-availability, fault-tolerant cloud architecture", "AWS Well-Architected Framework, Microservices, IAM", "€68,400"],
    ],
    sections: [
      {
        id: "core-tools",
        h2: "Which tools are mandatory for DevOps Engineers in 2026?",
        paragraphs: [
          "A successful DevOps Engineer in Germany must master: Linux and shell scripting, Docker containerization, Kubernetes orchestration, Terraform for declarative cloud provisioning, and Jenkins or GitHub Actions for continuous integration and delivery.",
        ],
      },
      {
        id: "modular-track",
        h2: "Modular qualification from beginner to multi-cloud specialist",
        paragraphs: [
          "Clarusway's AZAV-certified program offers 5 modular combination options: from the full 8-month multi-cloud track (AWS + DevOps + Azure) for beginners, to focused 3-month modules in AWS Solutions Architecture or DevOps Engineering for experienced IT professionals.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I become a DevOps Engineer without prior coding experience?",
        a: "Yes. Module 1 teaches Linux fundamentals, networking, and AWS Cloud Architecture from scratch before introducing containerization and automated pipelines.",
      },
      {
        q: "Is the AWS & DevOps course funded in Germany?",
        a: "Yes. All modular variants are AZAV-certified and 100% covered with a Bildungsgutschein from the Agentur für Arbeit or Jobcenter.",
      },
    ],
    ctaCourseTitle: "AWS Solutions Architect and DevOps Engineer Training",
    ctaCourseDesc: "Official AWS Select Tier Partner · 100% funded with a Bildungsgutschein.",
    ctaCourseTo: "/it-courses/devops-aws/",
    relatedSlugs: ["aws-certifications", "aws-cloud-practitioner"],
  },

  "aws-certifications": {
    slug: "aws-certifications",
    lang: "en",
    cluster: "Cloud & DevOps",
    badge: "Certification Guide",
    metaTitle: "AWS Certifications: Which Exam to Take First | Clarusway",
    metaDescription:
      "AWS certifications guide for 2026: compare Cloud Practitioner (CLF-C02) vs. Solutions Architect Associate (SAA-C03), exam costs, and funded preparation.",
    h1: "AWS certifications: which one to take first in 2026",
    author: "Clarusway Cloud & DevOps Team",
    updatedAt: "October 24, 2026",
    readTime: "6 min read",
    introParagraph1:
      "Amazon Web Services (AWS) is the dominant cloud provider in Germany and Europe. Holding an official AWS certification validates your cloud architectural competence to German hiring managers and significantly increases interview callback rates for cloud and DevOps positions.",
    introCourseLinkLabel: "AWS Solutions Architect and DevOps Engineer Training",
    introCourseLinkTo: "/it-courses/devops-aws/",
    introFundingLinkLabel: "funded with a Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "Compare the most valuable AWS certification credentials and understand which exam to prioritize.",
    tableTitle: "AWS Certification Comparison: Level, Code & Target Audience",
    tableHeaders: ["Certification Name", "Exam Code", "Difficulty Level", "Recommended For"],
    tableRows: [
      ["AWS Certified Cloud Practitioner", "CLF-C02", "Foundational", "Beginners seeking conceptual cloud literacy"],
      ["AWS Certified Solutions Architect – Associate", "SAA-C03", "Associate", "Cloud Engineers & DevOps (Highest industry demand in Germany)"],
      ["AWS Certified SysOps Administrator – Associate", "SOA-C02", "Associate", "System administrators managing cloud workloads"],
      ["AWS Certified DevOps Engineer – Professional", "DOP-C02", "Professional", "Senior practitioners with 2+ years of production cloud experience"],
    ],
    sections: [
      {
        id: "why-saa-first",
        h2: "Why Solutions Architect – Associate (SAA-C03) is the ideal starting point",
        paragraphs: [
          "While the Cloud Practitioner validates basic terminology, the Solutions Architect – Associate (SAA-C03) proves your ability to design secure, resilient, high-performing, and cost-optimized architectures using core AWS services like EC2, S3, VPC, IAM, and Auto Scaling.",
          "In Clarusway's AWS Cloud Engineer module, you master both foundational concepts and Associate-level architecture in a single cohesive curriculum.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Clarusway an official AWS Partner?",
        a: "Yes. Clarusway is an official AWS Select Tier Consulting Partner, ensuring curricula adhere to current AWS Well-Architected guidelines.",
      },
      {
        q: "Can I prepare for the AWS SAA-C03 exam for free?",
        a: "Yes. With a Bildungsgutschein from the Agentur für Arbeit or Jobcenter, 100% of your course fees at Clarusway are covered.",
      },
    ],
    ctaCourseTitle: "Prepare for AWS SAA-C03 in English",
    ctaCourseDesc: "Live online training with official AWS Select Tier Partner · 100% funded with a Bildungsgutschein.",
    ctaCourseTo: "/it-courses/devops-aws/",
    relatedSlugs: ["aws-cloud-practitioner", "devops-engineer"],
  },

  "aws-cloud-practitioner": {
    slug: "aws-cloud-practitioner",
    lang: "en",
    cluster: "Cloud & DevOps",
    badge: "Exam Guide",
    metaTitle: "AWS Cloud Practitioner: Exam and Prep Guide | Clarusway",
    metaDescription:
      "AWS Certified Cloud Practitioner (CLF-C02) exam guide: 4 domains, exam format, costs, and study roadmap in Germany.",
    h1: "AWS Cloud Practitioner (CLF-C02): exam guide, cost and preparation",
    author: "Clarusway Cloud & DevOps Team",
    updatedAt: "October 24, 2026",
    readTime: "5 min read",
    introParagraph1:
      "The AWS Certified Cloud Practitioner (CLF-C02) validates an overall foundational understanding of the Amazon Web Services cloud platform, covering cloud concepts, security, technology, billing, and pricing models.",
    introCourseLinkLabel: "AWS Solutions Architect and DevOps Engineer Training",
    introCourseLinkTo: "/it-courses/devops-aws/",
    introFundingLinkLabel: "how to get a Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "Here is an overview of the four CLF-C02 exam domains and recommended study strategy.",
    tableTitle: "AWS Certified Cloud Practitioner (CLF-C02) Exam Domains",
    tableHeaders: ["Domain", "Domain Title", "Exam Weight", "Primary Topics"],
    tableRows: [
      ["1", "Cloud Concepts", "24%", "AWS Cloud value proposition, cloud economics, Well-Architected Framework"],
      ["2", "Security and Compliance", "30%", "AWS Shared Responsibility Model, IAM, compliance concepts, security groups"],
      ["3", "Cloud Technology and Services", "34%", "Core compute (EC2), storage (S3, EBS), database (RDS), networking (VPC)"],
      ["4", "Billing, Pricing, and Support", "12%", "AWS Pricing models, AWS Cost Explorer, Budgets, support plans"],
    ],
    sections: [
      {
        id: "exam-details",
        h2: "Exam structure and practical details",
        paragraphs: [
          "The CLF-C02 exam has 65 questions (multiple choice or multiple response) to be completed in 90 minutes. The passing score is 700 on a 100–1000 scale, and the exam costs approximately $100 USD (around €95).",
        ],
      },
      {
        id: "path-forward",
        h2: "Progressing from Cloud Practitioner to Solutions Architect",
        paragraphs: [
          "At Clarusway, learners cover all Cloud Practitioner essentials in the first weeks of the AWS training before elevating their hands-on skills directly to the more marketable AWS Certified Solutions Architect – Associate level.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Cloud Practitioner required before taking Solutions Architect Associate?",
        a: "No. AWS does not have mandatory prerequisites — you can take the Solutions Architect Associate (SAA-C03) directly.",
      },
      {
        q: "Is the AWS training eligible for German funding?",
        a: "Yes. Clarusway's AWS training is AZAV-certified and 100% funded with a Bildungsgutschein.",
      },
    ],
    ctaCourseTitle: "Start your AWS Cloud training in English",
    ctaCourseDesc: "100% funded with a Bildungsgutschein.",
    ctaCourseTo: "/it-courses/devops-aws/",
    relatedSlugs: ["aws-certifications", "devops-engineer"],
  },
};

// Aliases for alternate guide slugs
DE_GUIDES["agentic-ai"] = DE_GUIDES["was-ist-agentic-ai"];
DE_GUIDES["siem"] = DE_GUIDES["was-ist-ein-siem"];
