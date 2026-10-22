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
  "unemployed-in-germany": {
    slug: "unemployed-in-germany",
    lang: "en",
    cluster: "Expat Jobs & Funding in Germany",
    badge: "Expat Guide (Essential)",
    metaTitle: "Unemployed in Germany: A Guide for Expats | Clarusway",
    metaDescription:
      "Lost your job in Germany or contract ending? Step-by-step guide in English to registering with Agentur für Arbeit, ALG I benefits, and free IT training with a Bildungsgutschein.",
    h1: "Unemployed in Germany: step-by-step guide for expats",
    author: "Clarusway Germany Advisory Team",
    updatedAt: "October 22, 2026",
    readTime: "8 min read",
    introParagraph1:
      "Losing a job or facing the end of a fixed-term contract in Germany as an expat can feel overwhelming — especially when official letters arrive in German. However, Germany's social security system offers strong financial protection and 100% funded professional training to help you transition into high-demand English-speaking tech roles.",
    introCourseLinkLabel: "English-taught IT bootcamps in Germany",
    introCourseLinkTo: "/it-courses/",
    introFundingLinkLabel: "how to get a Bildungsgutschein (education voucher)",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "This guide walks you through the exact deadlines, the difference between Arbeitslosengeld I (ALG I) and Bürgergeld, how unemployment affects your visa or EU Blue Card, and how to use your time between jobs to complete an AZAV-certified IT course for free.",
    tableTitle: "Key Deadlines & Benefits When Becoming Unemployed in Germany",
    tableHeaders: ["Step / Benefit", "Official German Term", "Rule & Deadline"],
    tableRows: [
      ["1. Register as Job-Seeking", "Arbeitssuchend melden", "At least 3 months before contract ends (or within 3 days of receiving notice)"],
      ["2. Register as Unemployed", "Arbeitslos melden", "No later than your first day without employment"],
      ["3. Unemployment Benefit I", "Arbeitslosengeld I (ALG I)", "60% of net salary (67% with children) if you paid in for 12+ months in the last 30 months"],
      ["4. Citizen's Benefit", "Bürgergeld (Jobcenter)", "Basic income support if you do not qualify for ALG I or after ALG I expires"],
      ["5. Education Voucher", "Bildungsgutschein", "100% tuition coverage for AZAV-certified IT training while continuing to receive benefits"],
    ],
    sections: [
      {
        id: "deadlines",
        h2: "Step 1: Meet the mandatory 3-day / 3-month registration deadline",
        paragraphs: [
          "As soon as you receive a termination letter (Kündigung), sign a mutual termination agreement, or are 3 months away from the end of a fixed-term contract, you must register as job-seeking (arbeitssuchend) with the Agentur für Arbeit (Federal Employment Agency). If you learn about the termination less than 3 months in advance, you have exactly 3 calendar days to register online or by phone.",
        ],
        bullets: [
          "Registering on time prevents a blocking period (Sperrzeit) on your unemployment benefits.",
          "You can complete the initial registration online via the official Bundesagentur für Arbeit portal.",
        ],
      },
      {
        id: "residence-permit",
        h2: "Step 2: Check your EU Blue Card or residence permit rules",
        paragraphs: [
          "If you live in Germany on an EU Blue Card or skilled worker residence permit (§ 18a / § 18b AufenthG), you are generally required to notify the local Foreigners' Authority (Ausländerbehörde) within two weeks of job loss. The authority typically grants a job-search period of 3 to 6 months — and receiving Arbeitslosengeld I (which you earned through your social security contributions) does not jeopardize an EU Blue Card.",
        ],
      },
      {
        id: "free-it-training",
        h2: "Step 3: Turn unemployment into a funded IT career upgrade",
        paragraphs: [
          "Instead of sending hundreds of applications to shrinking roles, you can request a Bildungsgutschein (education voucher) from your advisor. With a Bildungsgutschein, the Agentur für Arbeit or Jobcenter pays 100% of your tuition at Clarusway while your monthly unemployment benefits continue.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I get a Bildungsgutschein if I don't speak fluent German?",
        a: "Yes. Clarusway's IT bootcamps are taught 100% in English, and Clarusway provides the official German Maßnahmeangebot and justification documents required by your Agentur für Arbeit or Jobcenter advisor.",
      },
      {
        q: "Does taking a full-time course with a Bildungsgutschein stop my ALG I payments?",
        a: "No. During an approved full-time Weiterbildung with a Bildungsgutschein, your ALG I or Bürgergeld continues to be paid in full.",
      },
    ],
    ctaCourseTitle: "Get your German Bildungsgutschein offer in 24 hours",
    ctaCourseDesc:
      "Book a free consultation in English — Clarusway helps you choose the right IT bootcamp and prepares all documents for your Agentur für Arbeit advisor.",
    ctaCourseTo: "/bildungsgutschein/",
    relatedSlugs: ["agentur-fur-arbeit-jobcenter", "it-jobs-in-germany-english-speakers", "german-cv-template"],
  },

  "agentur-fur-arbeit-jobcenter": {
    slug: "agentur-fur-arbeit-jobcenter",
    lang: "en",
    cluster: "Expat Jobs & Funding in Germany",
    badge: "Funding Guide",
    metaTitle: "Agentur für Arbeit & Jobcenter Guide for Expats | Clarusway",
    metaDescription:
      "How the Agentur für Arbeit and Jobcenter work in Germany: difference between the two agencies, how to prepare for your appointment, and how to get a Bildungsgutschein.",
    h1: "Agentur für Arbeit and Jobcenter: a guide for English speakers in Germany",
    author: "Clarusway Germany Advisory Team",
    updatedAt: "October 22, 2026",
    readTime: "7 min read",
    introParagraph1:
      "In Germany, two public agencies support job seekers and fund career training: the Agentur für Arbeit (Federal Employment Agency) and the local Jobcenter. Both agencies issue the Bildungsgutschein (education voucher) and the AVGS voucher to cover 100% of approved IT courses.",
    introCourseLinkLabel: "AZAV-certified IT courses in English",
    introCourseLinkTo: "/it-courses/",
    introFundingLinkLabel: "how to get a Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "Here is how to know which agency is responsible for you and how to prepare for your advisor appointment.",
    tableTitle: "Agentur für Arbeit vs. Jobcenter: Which Agency Handles Your Case?",
    tableHeaders: ["Criterion", "Agentur für Arbeit", "Jobcenter"],
    tableRows: [
      ["Who is covered?", "Employees who paid unemployment insurance for 12+ months (or job seekers without benefits)", "Residents eligible for Bürgergeld (Citizen's Benefit)"],
      ["Financial benefit", "Arbeitslosengeld I (ALG I)", "Bürgergeld (basic living & housing support)"],
      ["Education vouchers issued", "Bildungsgutschein, AVGS & QCG", "Bildungsgutschein & AVGS"],
      ["Coverage for Clarusway courses", "100% of tuition fees", "100% of tuition fees"],
    ],
    sections: [
      {
        id: "appointment-prep",
        h2: "How to prepare for your advisor appointment (Beratungsgespräch)",
        paragraphs: [
          "Caseworkers (Vermittlungsfachkräfte) evaluate whether a training program will help you find stable employment faster. Come prepared with:",
        ],
        bullets: [
          "Your official German course offer (Maßnahmeangebot) from Clarusway, which includes the AZAV certification number (Maßnahmenummer).",
          "5 to 10 English-language job ads from LinkedIn or StepStone showing strong demand in Germany for your target IT role.",
          "If your German is limited, you are allowed to bring a German-speaking friend or interpreter to the appointment.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do both the Agentur für Arbeit and the Jobcenter fund English-taught IT courses?",
        a: "Yes. Because Clarusway's English-taught programs are officially AZAV-certified in Germany, both the Agentur für Arbeit and all Jobcenters can fund them 100% with a Bildungsgutschein.",
      },
    ],
    ctaCourseTitle: "Need a German Maßnahmeangebot for your appointment?",
    ctaCourseDesc: "Book a free consultation in English and receive your personalized advisor package within 24 hours.",
    ctaCourseTo: "/bildungsgutschein/",
    relatedSlugs: ["unemployed-in-germany", "it-jobs-in-germany-english-speakers", "german-cv-template"],
  },

  "it-jobs-in-germany-english-speakers": {
    slug: "it-jobs-in-germany-english-speakers",
    lang: "en",
    cluster: "Expat Jobs & Funding in Germany",
    badge: "Expat Career Guide",
    metaTitle: "IT Jobs in Germany for English Speakers | Clarusway",
    metaDescription:
      "Which IT jobs in Germany hire English speakers? Compare salaries, demand, and career paths in Data Analytics, AI Engineering, Web Development, Cloud/DevOps, and Cyber Security.",
    h1: "IT jobs in Germany for English speakers: where to start",
    author: "Clarusway Career Services",
    updatedAt: "October 22, 2026",
    readTime: "7 min read",
    introParagraph1:
      "While many traditional professions in Germany require C1 German, the technology sector operates differently: international startups, scale-ups, and global engineering hubs in Berlin, Munich, Frankfurt, Hamburg, and remote teams across Germany use English as their daily working language.",
    introCourseLinkLabel: "IT bootcamps in English",
    introCourseLinkTo: "/it-courses/",
    introFundingLinkLabel: "funded 100% with a Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "Compare the five most accessible English-speaking IT career tracks in Germany below.",
    tableTitle: "Top 5 English-Speaking IT Roles in Germany (StepStone 2026)",
    tableHeaders: ["IT Role", "English Job Share", "Median Salary (Germany)", "Clarusway Program"],
    tableRows: [
      ["AI Engineer / Data Scientist", "Very High", "€62,400 – €69,500", "AI Engineering Bootcamp (32 Weeks)"],
      ["Data Analyst", "High", "€54,800", "Data Analytics Course (13 Weeks)"],
      ["Full Stack Developer", "Very High", "€58,500", "AI-Assisted Full Stack Course"],
      ["DevOps / Cloud Engineer", "Very High", "€61,500 – €64,800", "AWS & DevOps Engineer Course"],
      ["SOC / Cyber Security Analyst", "High", "€52,400 – €65,200", "Cyber Security Analyst Course"],
    ],
    sections: [
      {
        id: "how-to-choose",
        h2: "How to choose the right IT career track as an expat",
        paragraphs: [
          "Leverage your existing background: if you worked in finance, operations, or marketing, Data Analytics and AI Engineering build naturally on your domain knowledge. If you enjoy building products, choose Full Stack Development; if you prefer infrastructure or defense, choose AWS & DevOps or Cyber Security.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I really find an IT job in Germany with only English?",
        a: "Yes. Technical teams in international companies and startups across Germany conduct code reviews, standups, and documentation in English. Basic German (A2/B1) is helpful for everyday life, while strong technical skills and a GitHub portfolio get you hired.",
      },
    ],
    ctaCourseTitle: "Not sure which IT career fits you best?",
    ctaCourseDesc: "Compare all English-taught Clarusway bootcamps or try the 4-week IT Orientation Course.",
    ctaCourseTo: "/it-courses/",
    relatedSlugs: ["unemployed-in-germany", "german-cv-template", "ai-engineer"],
  },

  "german-cv-template": {
    slug: "german-cv-template",
    lang: "en",
    cluster: "Expat Jobs & Funding in Germany",
    badge: "Application Guide",
    metaTitle: "German CV Template & Format in English | Clarusway",
    metaDescription:
      "How to write a German-style CV (Lebenslauf) in English for IT and tech jobs in Germany: structure, ATS rules, photo rules, and portfolio tips.",
    h1: "German CV format and template in English (for tech jobs)",
    author: "Clarusway Career Services",
    updatedAt: "October 22, 2026",
    readTime: "6 min read",
    introParagraph1:
      "Applying to tech companies in Germany requires a clean, reverse-chronological tabular CV (tabellarischer Lebenslauf) in English that highlights verifiable technical projects, GitHub links, and certifications without unexplained gaps.",
    introCourseLinkLabel: "IT bootcamps with included Career Coaching",
    introCourseLinkTo: "/it-courses/",
    introFundingLinkLabel: "100% funded with a Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "Here is how German tech recruiters and Applicant Tracking Systems (ATS) evaluate your English CV.",
    tableTitle: "German Tech CV (Lebenslauf) Checklist for English Speakers",
    tableHeaders: ["Section", "German Recruiter Expectation"],
    tableRows: [
      ["Header & Contact", "Name, city in Germany, phone, email, LinkedIn, GitHub portfolio link, work permit / EU Blue Card status"],
      ["Professional Summary", "3 concise lines stating your target role, core tech stack, and domain strengths"],
      ["Technical Skills & Certs", "Grouped clearly (e.g., Languages, Frameworks, Cloud/DevOps, Certifications like AWS SAA-C03 or Security+)"],
      ["Capstone Projects", "2–3 hands-on projects with live/GitHub links and measurable technical outcomes"],
      ["Work Experience & Education", "Reverse-chronological (MM/YYYY – MM/YYYY) with no unexplained timeline gaps"],
    ],
    sections: [
      {
        id: "work-permit-line",
        h2: "Always state your German work authorization clearly",
        paragraphs: [
          "One of the most effective ways for expats to increase interview callbacks in Germany is to include a single line in the CV header confirming your work status (e.g., 'EU Citizen', 'Permanent Residence / Niederlassungserlaubnis', or 'Valid German Work Permit — No Sponsorship Required').",
        ],
      },
    ],
    faqs: [
      {
        q: "Should I include a photo on an English tech CV in Germany?",
        a: "For international tech companies in Germany, a photo is optional. If you include one, use a modern, professional headshot.",
      },
    ],
    ctaCourseTitle: "Build a job-ready German tech CV & GitHub portfolio",
    ctaCourseDesc: "Every Clarusway bootcamp includes 1-on-1 Career Management for the German job market.",
    ctaCourseTo: "/career-management/",
    relatedSlugs: ["it-jobs-in-germany-english-speakers", "unemployed-in-germany"],
  },

  "ai-engineer": {
    slug: "ai-engineer",
    lang: "en",
    cluster: "Data & AI",
    badge: "Career Guide (AI)",
    metaTitle: "AI Engineer: Role, Skills and Salary in Germany | Clarusway",
    metaDescription:
      "How to become an AI Engineer in Germany: daily tasks, required skills (Python, PyTorch, LLMs, RAG, Agentic AI), salary benchmarks, and funded bootcamp.",
    h1: "AI Engineer in Germany: role, skills and salary",
    author: "Clarusway Data & AI Team",
    updatedAt: "October 22, 2026",
    readTime: "7 min read",
    introParagraph1:
      "AI Engineers are among the most sought-after tech specialists in Germany. While traditional Data Scientists focus on statistical modeling, AI Engineers build production software powered by Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and autonomous Agentic AI workflows.",
    introCourseLinkLabel: "AI Engineering Bootcamp in English",
    introCourseLinkTo: "/it-courses/ai-engineering/",
    introFundingLinkLabel: "how to get a Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "Compare Data Analyst, Data Scientist, and AI Engineer roles and salaries in Germany below.",
    tableTitle: "Data Analyst vs. Data Scientist vs. AI Engineer in Germany",
    tableHeaders: ["Role", "Core Focus", "Key Stack", "Median Salary (StepStone 2026)"],
    tableRows: [
      ["Data Analyst", "Business data analysis & BI dashboards", "SQL, Python (Pandas), Power BI, Tableau", "€54,800"],
      ["Data Scientist", "Predictive machine learning models", "Python, Scikit-Learn, XGBoost, Statistics", "€62,400"],
      ["AI Engineer", "Production LLMs, RAG & Agentic AI systems", "PyTorch, LangChain, LangGraph, MCP, AWS Bedrock", "€69,500"],
    ],
    sections: [
      {
        id: "skills",
        h2: "Which skills do German employers expect from an AI Engineer?",
        paragraphs: [
          "Companies hiring AI Engineers look for strong Python skills, experience with vector databases and RAG pipelines, agent orchestration frameworks (LangGraph, CrewAI, MCP), and API deployment with FastAPI and Docker.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does an AI Engineer earn in Germany?",
        a: "According to the StepStone Salary Report 2026, the median salary for AI Engineers in Germany is €69,500 (ranging from €56,000 to €86,000).",
      },
    ],
    ctaCourseTitle: "AI Engineering Bootcamp: From Data Analytics to Agentic AI",
    ctaCourseDesc: "32 weeks full-time in English (or direct entry to Module 2/3) — 100% funded with a Bildungsgutschein.",
    ctaCourseTo: "/it-courses/ai-engineering/",
    relatedSlugs: ["data-analyst", "what-is-agentic-ai", "data-analyst-salary-germany"],
  },

  "data-analyst": {
    slug: "data-analyst",
    lang: "en",
    cluster: "Data & AI",
    badge: "Career Guide (Data)",
    metaTitle: "Data Analyst: Tasks, Salary and How to Start | Clarusway",
    metaDescription:
      "How to become a Data Analyst in Germany as an English speaker: SQL, Python, Power BI, salary ranges, and 13-week course funded with a Bildungsgutschein.",
    h1: "Data Analyst in Germany: tasks, salary and how to start",
    author: "Clarusway Data & AI Team",
    updatedAt: "October 22, 2026",
    readTime: "6 min read",
    introParagraph1:
      "Data Analysts turn raw company data into clear insights using SQL, Python, Power BI, and Tableau. For English-speaking career changers in Germany, Data Analytics offers one of the fastest 13-week paths into tech.",
    introCourseLinkLabel: "13-week Data Analytics Course",
    introCourseLinkTo: "/it-courses/data-analytics/",
    introFundingLinkLabel: "how to get a Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "Here are the essential skills and career progression paths for Data Analysts in Germany.",
    tableTitle: "Core Skills of a Data Analyst in Germany",
    tableHeaders: ["Skill Area", "Tools", "Business Impact"],
    tableRows: [
      ["Database Querying", "SQL (PostgreSQL)", "Extract and join millions of customer and revenue records"],
      ["Data Wrangling", "Python (Pandas, NumPy)", "Automate data cleaning and exploratory analysis"],
      ["Business Intelligence", "Power BI (DAX) & Tableau", "Build interactive KPI dashboards for leadership teams"],
      ["Statistics", "Hypothesis & A/B Testing", "Validate product and marketing decisions"],
    ],
    sections: [
      {
        id: "upgrade-path",
        h2: "Start in 13 weeks — or continue to Data Science & AI Engineering",
        paragraphs: [
          "At Clarusway, the 13-week Data Analytics Course is Module 1 of the 32-week AI Engineering Bootcamp. You can enter the job market after 13 weeks or seamlessly add Machine Learning (Module 2) and Agentic AI (Module 3).",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need prior coding experience to become a Data Analyst?",
        a: "No. Clarusway's 13-week Data Analytics Course teaches Python, SQL, and Power BI from scratch in English.",
      },
    ],
    ctaCourseTitle: "Data Analytics Course in English (13 Weeks)",
    ctaCourseDesc: "100% funded in Germany with a Bildungsgutschein.",
    ctaCourseTo: "/it-courses/data-analytics/",
    relatedSlugs: ["data-analyst-salary-germany", "ai-engineer", "what-is-agentic-ai"],
  },

  "what-is-agentic-ai": {
    slug: "what-is-agentic-ai",
    lang: "en",
    cluster: "Data & AI",
    badge: "Tech Explainer",
    metaTitle: "What Is Agentic AI? Simply Explained | Clarusway",
    metaDescription:
      "What is Agentic AI and how do autonomous AI agents work? Understand RAG, tool calling, LangGraph, and Model Context Protocol (MCP).",
    h1: "What is Agentic AI? How AI agents work",
    author: "Clarusway Data & AI Team",
    updatedAt: "October 22, 2026",
    readTime: "6 min read",
    introParagraph1:
      "Unlike standard chatbots that only respond to single prompts, Agentic AI systems break down complex goals, query databases via RAG, call external APIs, and collaborate across multi-agent workflows.",
    introCourseLinkLabel: "AI Engineering Bootcamp (Module 3: Agentic AI)",
    introCourseLinkTo: "/it-courses/ai-engineering/",
    introFundingLinkLabel: "funded with a Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "See how standard LLMs, RAG, and Agentic AI compare in production engineering.",
    tableTitle: "Standard LLMs vs. RAG vs. Agentic AI",
    tableHeaders: ["Architecture", "Capability", "Core Frameworks"],
    tableRows: [
      ["Standard LLM", "Generates text from static training weights", "OpenAI / Anthropic APIs"],
      ["RAG Pipeline", "Retrieves live company documents before answering", "LangChain, Chroma, Pinecone"],
      ["Agentic AI", "Plans multi-step tasks, calls tools/APIs, and self-corrects", "LangGraph, CrewAI, Model Context Protocol (MCP)"],
    ],
    sections: [
      {
        id: "where-used",
        h2: "Where companies in Germany deploy Agentic AI",
        paragraphs: [
          "Engineering and security teams use autonomous agents for automated data pipelines, enterprise knowledge copilots, and incident triage in Security Operations Centers (SOC).",
        ],
      },
    ],
    faqs: [
      {
        q: "Which Clarusway courses teach Agentic AI?",
        a: "Module 3 of the AI Engineering Bootcamp and Module 3 of the Cyber Security Analyst Course (Agentic AI in Security Operations).",
      },
    ],
    ctaCourseTitle: "Learn to build Agentic AI systems in English",
    ctaCourseDesc: "Explore the AZAV-certified AI Engineering Bootcamp.",
    ctaCourseTo: "/it-courses/ai-engineering/",
    relatedSlugs: ["ai-engineer", "data-analyst"],
  },

  "data-analyst-salary-germany": {
    slug: "data-analyst-salary-germany",
    lang: "en",
    cluster: "Data & AI",
    badge: "Salary Guide",
    metaTitle: "Data Analyst Salary in Germany | Clarusway",
    metaDescription:
      "How much does a Data Analyst earn in Germany? Entry-level, mid-level, and senior salary ranges from the StepStone 2026 report.",
    h1: "Data Analyst salary in Germany: entry-level to senior",
    author: "Clarusway Career Services",
    updatedAt: "October 22, 2026",
    readTime: "5 min read",
    introParagraph1:
      "Data Analysts enjoy strong salaries across German tech hubs and industrial companies, especially when combining SQL and Power BI with Python automation.",
    introCourseLinkLabel: "Data Analytics Course in English",
    introCourseLinkTo: "/it-courses/data-analytics/",
    introFundingLinkLabel: "how to get a Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "Below are the current gross annual salary ranges in Germany based on StepStone 2026 data.",
    tableTitle: "Data Analyst Gross Annual Salary in Germany (StepStone 2026)",
    tableHeaders: ["Experience Level", "Years of Experience", "Annual Salary Range (Gross)"],
    tableRows: [
      ["Junior Data Analyst", "0 – 2 years", "€41,800 – €49,500"],
      ["Mid-Level Data Analyst", "2 – 5 years", "€50,000 – €59,000"],
      ["Senior Data Analyst / BI Lead", "5+ years", "€60,000 – €69,500"],
    ],
    sections: [
      {
        id: "boost-salary",
        h2: "How to maximize your starting salary as an expat",
        paragraphs: [
          "Publishing end-to-end SQL, Python, and Power BI projects on GitHub gives hiring managers concrete proof of your analytical capability.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the median Data Analyst salary in Germany?",
        a: "The median gross annual salary is €54,800 according to the StepStone Salary Report 2026.",
      },
    ],
    ctaCourseTitle: "Qualify as a Data Analyst in 13 weeks",
    ctaCourseDesc: "Taught in English · 100% funded with a Bildungsgutschein.",
    ctaCourseTo: "/it-courses/data-analytics/",
    relatedSlugs: ["data-analyst", "ai-engineer"],
  },

  "full-stack-developer": {
    slug: "full-stack-developer",
    lang: "en",
    cluster: "Software Development",
    badge: "Career Guide (Web)",
    metaTitle: "Full Stack Developer: Role, Skills and Salary | Clarusway",
    metaDescription:
      "How to become a Full Stack Developer in Germany: React, TypeScript, Next.js, Node.js, AI coding tools, salary ranges, and funded English bootcamp.",
    h1: "Full Stack Developer in Germany: role, skills and salary",
    author: "Clarusway Software Engineering Team",
    updatedAt: "October 22, 2026",
    readTime: "6 min read",
    introParagraph1:
      "Full Stack Developers build complete web applications across React/Next.js frontends, Node.js backends, and relational databases. In 2026, German engineering teams expect developers to pair strong TypeScript fundamentals with AI-assisted coding workflows.",
    introCourseLinkLabel: "AI-Assisted Full Stack Developer Course",
    introCourseLinkTo: "/it-courses/full-stack-developer/",
    introFundingLinkLabel: "how to get a Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "Compare Frontend, Backend, and Full Stack roles and salaries in Germany below.",
    tableTitle: "Frontend vs. Backend vs. Full Stack in Germany (StepStone 2026)",
    tableHeaders: ["Role", "Primary Stack", "Median Salary (Germany)"],
    tableRows: [
      ["Frontend Developer", "HTML/CSS, TypeScript, React, Next.js", "€54,200"],
      ["Full Stack Developer", "React, Next.js, Node.js, PostgreSQL, Docker", "€58,500"],
      ["Backend Developer", "Node.js, Express, PostgreSQL, MongoDB, APIs", "€60,100"],
    ],
    sections: [
      {
        id: "ai-tools",
        h2: "Why AI-assisted workflows (Cursor, Claude Code, Copilot) matter",
        paragraphs: [
          "By learning how to use Cursor, Claude Code, and GitHub Copilot on top of solid JavaScript and TypeScript architecture, you ship well-tested features at the speed of modern product teams.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can beginners become Full Stack Developers?",
        a: "Yes. Module 1 of Clarusway's Full Stack Developer Course starts with HTML, CSS, JavaScript, and Git from zero.",
      },
    ],
    ctaCourseTitle: "AI-Assisted Full Stack Developer Course",
    ctaCourseDesc: "4 modules in English · 100% funded with a Bildungsgutschein.",
    ctaCourseTo: "/it-courses/full-stack-developer/",
    relatedSlugs: ["software-developer-salary-germany", "it-jobs-in-germany-english-speakers"],
  },

  "software-developer-salary-germany": {
    slug: "software-developer-salary-germany",
    lang: "en",
    cluster: "Software Development",
    badge: "Salary Guide",
    metaTitle: "Software Developer Salary in Germany | Clarusway",
    metaDescription:
      "Software Developer salary in Germany from Junior to Senior: Frontend, Backend, Full Stack, and QA Automation (SDET) benchmarks.",
    h1: "Software Developer salary in Germany: entry-level to senior",
    author: "Clarusway Career Services",
    updatedAt: "October 22, 2026",
    readTime: "5 min read",
    introParagraph1:
      "Software engineering remains one of the best-compensated English-speaking career paths in Germany.",
    introCourseLinkLabel: "AI-Assisted Full Stack Developer Course",
    introCourseLinkTo: "/it-courses/full-stack-developer/",
    introFundingLinkLabel: "funded with a Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "Compare gross annual salaries by experience level below.",
    tableTitle: "Software Engineering Salaries in Germany (StepStone 2026)",
    tableHeaders: ["Level", "Frontend Developer", "Full Stack Developer", "Backend Developer"],
    tableRows: [
      ["Junior (0–2 yrs)", "€42,000 – €48,000", "€43,200 – €51,000", "€46,500 – €53,000"],
      ["Mid-Level (2–5 yrs)", "€49,000 – €58,000", "€52,000 – €63,000", "€54,000 – €65,000"],
      ["Senior (5+ yrs)", "€59,000 – €66,000", "€64,000 – €72,000", "€66,000 – €74,500"],
    ],
    sections: [
      {
        id: "team-project",
        h2: "How Agile team projects increase your starting offer",
        paragraphs: [
          "Graduating with a full-stack team capstone project (Module 4) proves you can work with Git pull requests, CI/CD pipelines, and Agile sprints from day one.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the median Full Stack Developer salary in Germany?",
        a: "€58,500 gross per year according to StepStone 2026.",
      },
    ],
    ctaCourseTitle: "Start your Full Stack Developer Course in English",
    ctaCourseDesc: "100% funded with a Bildungsgutschein.",
    ctaCourseTo: "/it-courses/full-stack-developer/",
    relatedSlugs: ["full-stack-developer", "german-cv-template"],
  },

  "soc-analyst": {
    slug: "soc-analyst",
    lang: "en",
    cluster: "Cyber Security",
    badge: "Career Guide (Security)",
    metaTitle: "SOC Analyst: Role, Skills and Salary in Germany | Clarusway",
    metaDescription:
      "What does a SOC Analyst do in Germany? Tier 1–3 responsibilities, SIEM & SOAR tools, salary ranges, and English course funded with a Bildungsgutschein.",
    h1: "SOC Analyst in Germany: role, skills and salary",
    author: "Clarusway Cyber Security Team",
    updatedAt: "October 22, 2026",
    readTime: "6 min read",
    introParagraph1:
      "A SOC Analyst (Security Operations Center Analyst) monitors enterprise networks and cloud infrastructure, investigates SIEM alerts, and contains cyber attacks. Due to the EU NIS-2 directive, demand for English-speaking SOC Analysts in Germany is growing rapidly.",
    introCourseLinkLabel: "Cyber Security Analyst Course",
    introCourseLinkTo: "/it-courses/cyber-security/",
    introFundingLinkLabel: "how to get a Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "Explore SOC Analyst tiers and salary ranges in Germany below.",
    tableTitle: "SOC Analyst Tiers & Salaries in Germany (StepStone 2026)",
    tableHeaders: ["Role / Tier", "Core Responsibility", "Gross Annual Salary"],
    tableRows: [
      ["SOC Analyst Tier 1", "Alert monitoring, SIEM triage & initial escalation", "€45,000 – €52,400"],
      ["SOC Analyst Tier 2", "Deep incident investigation, forensics & containment", "€53,000 – €63,000"],
      ["Cloud Security / Tier 3", "Threat hunting, Agentic AI SOAR & AWS Cloud Security", "€64,000 – €79,000"],
    ],
    sections: [
      {
        id: "ai-soc",
        h2: "AI-Enhanced SOC & Agentic AI in Security Operations",
        paragraphs: [
          "Clarusway's 4-module Cyber Security Course combines CompTIA Security+ prep with AI-assisted alert triage, autonomous SOAR playbooks, and AWS Cloud Security.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I enter directly into Module 2 if I already have IT experience?",
        a: "Yes. Applicants with networking and Linux fundamentals can pass Clarusway's technical assessment to start directly in Module 2.",
      },
    ],
    ctaCourseTitle: "Cyber Security Analyst Course in English",
    ctaCourseDesc: "4 modules (or direct entry at Module 2) — 100% funded with a Bildungsgutschein.",
    ctaCourseTo: "/it-courses/cyber-security/",
    relatedSlugs: ["comptia-security-plus", "it-jobs-in-germany-english-speakers"],
  },

  "comptia-security-plus": {
    slug: "comptia-security-plus",
    lang: "en",
    cluster: "Cyber Security",
    badge: "Certification Guide",
    metaTitle: "CompTIA Security+: Exam, Cost and Preparation | Clarusway",
    metaDescription:
      "Complete guide to the CompTIA Security+ (SY0-701) exam in Germany: domains, exam format, and how to prepare for free with a Bildungsgutschein.",
    h1: "CompTIA Security+ in Germany: exam, cost and preparation",
    author: "Clarusway Cyber Security Team",
    updatedAt: "October 22, 2026",
    readTime: "6 min read",
    introParagraph1:
      "CompTIA Security+ (SY0-701) is the global benchmark certification for entry-level cyber security professionals and is frequently requested in German SOC Analyst job descriptions.",
    introCourseLinkLabel: "Cyber Security Analyst Course (Module 1: Security+ Prep)",
    introCourseLinkTo: "/it-courses/cyber-security/",
    introFundingLinkLabel: "funded with a Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "Review the five official SY0-701 exam domains below.",
    tableTitle: "CompTIA Security+ (SY0-701) Exam Domains",
    tableHeaders: ["Domain", "Weight", "Key Topics"],
    tableRows: [
      ["1. General Security Concepts", "12%", "Zero Trust, cryptography, security controls"],
      ["2. Threats, Vulnerabilities & Mitigations", "22%", "Malware, social engineering, vulnerability scanning"],
      ["3. Security Architecture", "18%", "Network, cloud, and endpoint security design"],
      ["4. Security Operations", "28%", "SIEM, log analysis, incident response, forensics"],
      ["5. Security Program Management", "20%", "Governance, risk management, compliance (NIS-2, GDPR)"],
    ],
    sections: [
      {
        id: "module1",
        h2: "Integrated exam prep in Module 1 at Clarusway",
        paragraphs: [
          "Module 1 of the Clarusway Cyber Security Course covers all five CompTIA Security+ domains with live hands-on labs and practice exams.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I skip Module 1 if I already hold CompTIA Security+?",
        a: "Yes. You can take a technical placement assessment to start directly in Module 2 (AI-Enhanced SOC Analyst Experience).",
      },
    ],
    ctaCourseTitle: "Prepare for CompTIA Security+ & SOC Analyst roles",
    ctaCourseDesc: "100% funded with a Bildungsgutschein.",
    ctaCourseTo: "/it-courses/cyber-security/",
    relatedSlugs: ["soc-analyst", "aws-certifications"],
  },

  "devops-engineer": {
    slug: "devops-engineer",
    lang: "en",
    cluster: "Cloud & DevOps",
    badge: "Career Guide (Cloud & DevOps)",
    metaTitle: "DevOps Engineer: Role, Skills and Salary | Clarusway",
    metaDescription:
      "How to become a DevOps Engineer in Germany: AWS, Docker, Kubernetes, Terraform, CI/CD, salary ranges, and English course funded with a Bildungsgutschein.",
    h1: "DevOps Engineer in Germany: role, skills and salary",
    author: "Clarusway Cloud & DevOps Team",
    updatedAt: "October 22, 2026",
    readTime: "7 min read",
    introParagraph1:
      "DevOps Engineers bridge software development and cloud operations by automating CI/CD pipelines, Kubernetes clusters, and cloud infrastructure using Terraform on AWS and Microsoft Azure.",
    introCourseLinkLabel: "AWS & DevOps Engineer Course",
    introCourseLinkTo: "/it-courses/devops-aws/",
    introFundingLinkLabel: "how to get a Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "See the essential toolset and salary ranges for DevOps Engineers in Germany.",
    tableTitle: "Core DevOps & Cloud Roles in Germany (StepStone 2026)",
    tableHeaders: ["Role", "Focus Area", "Median Gross Annual Salary"],
    tableRows: [
      ["Cloud Engineer", "AWS & Azure infrastructure provisioning", "€61,500"],
      ["DevOps Engineer", "CI/CD, Docker, Kubernetes & Terraform automation", "€64,800"],
      ["AWS Solutions Architect", "High-availability cloud architecture design", "€68,400"],
    ],
    sections: [
      {
        id: "modular-entry",
        h2: "5 AZAV-certified modular entry options",
        paragraphs: [
          "At Clarusway, you can complete the full 8-month multi-cloud track (AWS + DevOps + Azure) as a beginner, or book individual modules (3-month AWS Solutions Architect, 3-month DevOps Engineering, or 2-month Azure Fundamentals).",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I become a DevOps Engineer without prior IT experience?",
        a: "Yes. Module 1 of the AWS & DevOps Course teaches Linux, networking, and AWS Cloud from the ground up.",
      },
    ],
    ctaCourseTitle: "AWS & DevOps Engineer Course in English",
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
      "Compare AWS Cloud Practitioner (CLF-C02), Solutions Architect Associate (SAA-C03), and DevOps certifications in Germany.",
    h1: "AWS certifications in Germany: overview, cost and which to choose",
    author: "Clarusway Cloud & DevOps Team",
    updatedAt: "October 22, 2026",
    readTime: "6 min read",
    introParagraph1:
      "Amazon Web Services (AWS) certifications are the most widely recognized cloud credentials in Germany's job market.",
    introCourseLinkLabel: "AWS & DevOps Engineer Course",
    introCourseLinkTo: "/it-courses/devops-aws/",
    introFundingLinkLabel: "funded with a Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "Compare the primary AWS certification exams below.",
    tableTitle: "AWS Certification Comparison",
    tableHeaders: ["Certification", "Exam Code", "Level", "Best For"],
    tableRows: [
      ["AWS Certified Cloud Practitioner", "CLF-C02", "Foundational", "Beginners & cloud fundamentals"],
      ["AWS Certified Solutions Architect – Associate", "SAA-C03", "Associate", "Cloud & DevOps Engineers (Highest employer demand)"],
      ["AWS Certified SysOps Administrator – Associate", "SOA-C02", "Associate", "Cloud operations & system administration"],
    ],
    sections: [
      {
        id: "saa",
        h2: "Why Solutions Architect Associate (SAA-C03) is the gold standard",
        paragraphs: [
          "Module 1 of Clarusway's AWS & DevOps Course (and the standalone 3-month AWS Solutions Architect Course) prepares you directly for the SAA-C03 exam.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Clarusway an official AWS Partner?",
        a: "Yes. Clarusway is an AWS Select Tier Consulting Partner.",
      },
    ],
    ctaCourseTitle: "Prepare for AWS SAA-C03 in English",
    ctaCourseDesc: "3-month AWS Solutions Architect or 8-month AWS & DevOps Course.",
    ctaCourseTo: "/it-courses/aws-solutions-architect/",
    relatedSlugs: ["aws-cloud-practitioner", "devops-engineer"],
  },

  "aws-cloud-practitioner": {
    slug: "aws-cloud-practitioner",
    lang: "en",
    cluster: "Cloud & DevOps",
    badge: "Exam Guide",
    metaTitle: "AWS Cloud Practitioner: Exam and Prep Guide | Clarusway",
    metaDescription:
      "AWS Certified Cloud Practitioner (CLF-C02) exam domains, format, and study roadmap in Germany.",
    h1: "AWS Cloud Practitioner (CLF-C02): exam, cost and preparation",
    author: "Clarusway Cloud & DevOps Team",
    updatedAt: "October 22, 2026",
    readTime: "5 min read",
    introParagraph1:
      "The AWS Certified Cloud Practitioner (CLF-C02) validates your foundational understanding of Amazon Web Services.",
    introCourseLinkLabel: "AWS & DevOps Engineer Course",
    introCourseLinkTo: "/it-courses/devops-aws/",
    introFundingLinkLabel: "how to get a Bildungsgutschein",
    introFundingLinkTo: "/bildungsgutschein/",
    introParagraph2:
      "Review the four exam domains below.",
    tableTitle: "AWS Cloud Practitioner (CLF-C02) Domains",
    tableHeaders: ["Domain", "Exam Weight", "Focus"],
    tableRows: [
      ["1. Cloud Concepts", "24%", "Cloud economics & AWS Well-Architected principles"],
      ["2. Security and Compliance", "30%", "Shared Responsibility Model, IAM, compliance"],
      ["3. Cloud Technology and Services", "34%", "EC2, S3, VPC, RDS, Lambda"],
      ["4. Billing, Pricing, and Support", "12%", "Pricing models, cost control & support tiers"],
    ],
    sections: [
      {
        id: "beyond-clf",
        h2: "Go from Cloud Practitioner to Solutions Architect Associate",
        paragraphs: [
          "In Clarusway's AWS Solutions Architect module, you master all CLF-C02 foundations in the first weeks and continue all the way to the Associate-level SAA-C03 standard.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long is the CLF-C02 exam?",
        a: "90 minutes for 65 multiple-choice and multiple-response questions.",
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
EN_GUIDES["agentic-ai"] = EN_GUIDES["what-is-agentic-ai"];
