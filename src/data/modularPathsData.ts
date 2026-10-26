export interface PathModule {
  node: string;
  eyebrow: string;
  title: string;
  topics: string[];
  badge?: string;
}

export interface PathCourse {
  id: "ai" | "aws" | "cyber" | "fullstack" | "testing";
  name: string;
  tagline: string;
  slugDe: string;
  slugEn: string;
  modules: PathModule[];
}

export const MODULAR_PATHS_DE: PathCourse[] = [
  {
    id: "ai",
    name: "AI Engineering",
    tagline: "Von Python bis zu eigenen KI-Agenten.",
    slugDe: "/it-kurse/ai-engineer-weiterbildung/",
    slugEn: "/it-courses/ai-engineering/",
    modules: [
      {
        node: "Data Analytics",
        eyebrow: "Modul 1 von 3",
        title: "Data Analytics & BI",
        topics: ["Python & SQL", "Datenanalyse", "Power BI", "Tableau"],
      },
      {
        node: "Data Science",
        eyebrow: "Modul 2 von 3",
        title: "Data Science & Machine Learning",
        topics: [
          "Feature Engineering",
          "Supervised Learning",
          "Time Series",
          "ML-Deployment",
        ],
      },
      {
        node: "AI Engineering",
        eyebrow: "Modul 3 von 3",
        title: "AI Engineering & Agentic AI",
        topics: ["LLMs & Prompting", "RAG", "LangChain & CrewAI", "LLMOps"],
      },
    ],
  },
  {
    id: "aws",
    name: "AWS & DevOps",
    tagline: "Cloud bauen und mit KI automatisieren.",
    slugDe: "/it-kurse/aws-devops-weiterbildung/",
    slugEn: "/it-courses/devops-aws/",
    modules: [
      {
        node: "AWS",
        eyebrow: "Modul 1 von 3",
        title: "AI-Enhanced AWS Cloud Engineer",
        topics: [
          "Amazon Q",
          "AWS FinOps Agent",
          "DevOps Guru",
          "Zertifizierung",
        ],
      },
      {
        node: "DevOps",
        eyebrow: "Modul 2 von 3",
        title: "AI-Enhanced DevOps Engineer",
        topics: [
          "CI/CD für KI",
          "LangGraph",
          "RAG-Deployment",
          "Observability",
        ],
      },
      {
        node: "Azure",
        eyebrow: "Modul 3 von 3",
        title: "AI-Enhanced Azure Cloud",
        topics: ["Copilot für Azure", "Incident Management mit KI"],
      },
    ],
  },
  {
    id: "cyber",
    name: "Cyber Security",
    tagline: "Von Security+ bis zum KI-gestützten SOC.",
    slugDe: "/it-kurse/cyber-security-weiterbildung/",
    slugEn: "/it-courses/cyber-security/",
    modules: [
      {
        node: "Security+",
        eyebrow: "Modul 1 von 4",
        title: "CompTIA Security+ & Prüfungsvorbereitung",
        topics: [
          "Security-Grundlagen",
          "Prüfungsvorbereitung",
          "Ohne Vorkenntnisse",
        ],
      },
      {
        node: "SOC",
        eyebrow: "Modul 2 von 4",
        title: "KI-unterstützte SOC-Analyst-Erfahrung",
        topics: ["SOC-Praxis", "KI im Security-Alltag"],
      },
      {
        node: "Agentic AI",
        eyebrow: "Modul 3 von 4",
        title: "Agentic AI in Security Operations",
        topics: ["KI-Agenten", "Automatisierte Abläufe"],
      },
      {
        node: "Cloud",
        eyebrow: "Modul 4 von 4",
        title: "Cloud-Sicherheit (AWS) & KI-Sicherheit",
        topics: ["AWS Cloud Security", "KI-Sicherheit"],
      },
    ],
  },
  {
    id: "fullstack",
    name: "Full Stack",
    tagline: "Web-Apps bauen, mit KI im Workflow.",
    slugDe: "/it-kurse/full-stack-entwickler-weiterbildung/",
    slugEn: "/it-courses/full-stack-developer/",
    modules: [
      {
        node: "Toolkit",
        eyebrow: "Modul 1 von 4",
        title: "IT- & Web-Grundlagen & AI-Native Developer Toolkit",
        topics: [
          "HTML, CSS & JavaScript",
          "Cursor & Claude Code",
          "Prompting für Devs",
        ],
      },
      {
        node: "Frontend",
        eyebrow: "Modul 2 von 4",
        title: "AI-Assisted Frontend Development",
        topics: ["React", "TypeScript", "Next.js", "Testing"],
      },
      {
        node: "Backend",
        eyebrow: "Modul 3 von 4",
        title: "AI-Assisted Backend Development",
        topics: [
          "Node.js",
          "PostgreSQL & MongoDB",
          "Docker",
          "LLM-APIs",
        ],
      },
      {
        node: "Projekt",
        eyebrow: "Modul 4 von 4",
        title: "AI-Powered Full-Stack Team Projekt",
        topics: ["Scrum & Jira", "Cloud-Deployment", "Demo Day"],
      },
    ],
  },
  {
    id: "testing",
    name: "Software Testing",
    tagline: "Web, APIs und Mobile automatisiert testen.",
    slugDe: "/it-kurse/software-testing-weiterbildung/",
    slugEn: "/it-courses/software-development-engineer-in-test/",
    modules: [
      {
        node: "Automation",
        eyebrow: "Modul 1 von 2",
        title: "Full Stack Automation Engineer",
        topics: [
          "Java",
          "Selenium & TestNG",
          "API-Tests",
          "ISTQB-Vorbereitung",
        ],
      },
      {
        node: "Mobile & AWS",
        eyebrow: "Modul 2 von 2",
        title: "Mobile Testing (Appium) & AWS für Tester",
        topics: ["Appium", "Mobile Apps testen", "AWS Cloud"],
      },
    ],
  },
];

export const MODULAR_PATHS_EN: PathCourse[] = [
  {
    id: "ai",
    name: "AI Engineering",
    tagline: "From Python to your own AI agents.",
    slugDe: "/it-kurse/ai-engineer-weiterbildung/",
    slugEn: "/it-courses/ai-engineering/",
    modules: [
      {
        node: "Data Analytics",
        eyebrow: "Module 1 of 3",
        title: "Data Analytics & BI",
        topics: ["Python & SQL", "Data analysis", "Power BI", "Tableau"],
      },
      {
        node: "Data Science",
        eyebrow: "Module 2 of 3",
        title: "Data Science & Machine Learning",
        topics: [
          "Feature engineering",
          "Supervised learning",
          "Time series",
          "ML deployment",
        ],
      },
      {
        node: "AI Engineering",
        eyebrow: "Module 3 of 3",
        title: "AI Engineering & Agentic AI",
        topics: ["LLMs & prompting", "RAG", "LangChain & CrewAI", "LLMOps"],
      },
    ],
  },
  {
    id: "aws",
    name: "AWS & DevOps",
    tagline: "Build the cloud and automate it with AI.",
    slugDe: "/it-kurse/aws-devops-weiterbildung/",
    slugEn: "/it-courses/devops-aws/",
    modules: [
      {
        node: "AWS",
        eyebrow: "Module 1 of 3",
        title: "AI-Enhanced AWS Cloud Engineer",
        topics: [
          "Amazon Q",
          "AWS FinOps Agent",
          "DevOps Guru",
          "Certification",
        ],
      },
      {
        node: "DevOps",
        eyebrow: "Module 2 of 3",
        title: "AI-Enhanced DevOps Engineer",
        topics: [
          "CI/CD for AI",
          "LangGraph",
          "RAG deployment",
          "Observability",
        ],
      },
      {
        node: "Azure",
        eyebrow: "Module 3 of 3",
        title: "AI-Enhanced Azure Cloud",
        topics: ["Copilot for Azure", "AI incident management"],
      },
    ],
  },
  {
    id: "cyber",
    name: "Cyber Security",
    tagline: "From Security+ to an AI-powered SOC.",
    slugDe: "/it-kurse/cyber-security-weiterbildung/",
    slugEn: "/it-courses/cyber-security/",
    modules: [
      {
        node: "Security+",
        eyebrow: "Module 1 of 4",
        title: "CompTIA Security+ & Exam Prep",
        topics: ["Security basics", "Exam prep", "No experience needed"],
      },
      {
        node: "SOC",
        eyebrow: "Module 2 of 4",
        title: "AI-Enhanced SOC Analyst Experience",
        topics: ["Hands-on SOC work", "AI in daily security work"],
      },
      {
        node: "Agentic AI",
        eyebrow: "Module 3 of 4",
        title: "Agentic AI in Security Operations",
        topics: ["AI agents", "Automated workflows"],
      },
      {
        node: "Cloud",
        eyebrow: "Module 4 of 4",
        title: "Cloud Security (AWS) + AI Security Basics",
        topics: ["AWS cloud security", "AI security"],
      },
    ],
  },
  {
    id: "fullstack",
    name: "Full Stack",
    tagline: "Build web apps with AI in your workflow.",
    slugDe: "/it-kurse/full-stack-entwickler-weiterbildung/",
    slugEn: "/it-courses/full-stack-developer/",
    modules: [
      {
        node: "Toolkit",
        eyebrow: "Module 1 of 4",
        title: "IT & Web Foundations & AI-Native Developer Toolkit",
        topics: [
          "HTML, CSS & JavaScript",
          "Cursor & Claude Code",
          "Prompting for devs",
        ],
      },
      {
        node: "Frontend",
        eyebrow: "Module 2 of 4",
        title: "AI-Assisted Frontend Development",
        topics: ["React", "TypeScript", "Next.js", "Testing"],
      },
      {
        node: "Backend",
        eyebrow: "Module 3 of 4",
        title: "AI-Assisted Backend Development",
        topics: ["Node.js", "PostgreSQL & MongoDB", "Docker", "LLM APIs"],
      },
      {
        node: "Project",
        eyebrow: "Module 4 of 4",
        title: "AI-Powered Full Stack Team Project",
        topics: ["Scrum & Jira", "Cloud deployment", "Demo Day"],
      },
    ],
  },
  {
    id: "testing",
    name: "Software Testing",
    tagline: "Automated testing for web, APIs and mobile.",
    slugDe: "/it-kurse/software-testing-weiterbildung/",
    slugEn: "/it-courses/software-development-engineer-in-test/",
    modules: [
      {
        node: "Automation",
        eyebrow: "Module 1 of 2",
        title: "Full Stack Automation Engineer",
        topics: ["Java", "Selenium & TestNG", "API testing", "ISTQB prep"],
      },
      {
        node: "Mobile & AWS",
        eyebrow: "Module 2 of 2",
        title: "Mobile Testing (Appium) & AWS for Testers",
        topics: ["Appium", "Mobile app testing", "AWS cloud"],
      },
    ],
  },
];

export const MODULAR_STRINGS = {
  de: {
    eyebrow: "Modulare IT-Pfade 2026",
    title: "So wächst dein Curriculum",
    pause: "Pausieren",
    play: "Abspielen",
    choose: "Kurs wählen",
    note: "Alle Module einzeln buchbar. Einstieg nach Einstufungsprüfung möglich.",
    viewCoursePage: "Zur Kursseite",
  },
  en: {
    eyebrow: "Modular IT paths 2026",
    title: "How your curriculum grows",
    pause: "Pause",
    play: "Play",
    choose: "Choose a course",
    note: "Every module can be booked on its own. Direct entry is possible after a placement test.",
    viewCoursePage: "View course page",
  },
};

export type ModularPathId = "ai" | "aws" | "cyber" | "fullstack" | "testing";

export function mapCourseKeyToModularPath(courseKey: string): {
  pathId: ModularPathId;
  defaultModuleIndex: number;
} | null {
  switch (courseKey) {
    case "ai-engineering":
      return { pathId: "ai", defaultModuleIndex: 0 };
    case "data-analytics":
      // Data Analytics is Module 1 of AI Engineering
      return { pathId: "ai", defaultModuleIndex: 0 };
    case "aws-devops":
      return { pathId: "aws", defaultModuleIndex: 0 };
    case "aws-solutions-architect":
      // AWS Solutions Architect is Module 1 of AWS & DevOps
      return { pathId: "aws", defaultModuleIndex: 0 };
    case "cyber-security":
      return { pathId: "cyber", defaultModuleIndex: 0 };
    case "full-stack":
      return { pathId: "fullstack", defaultModuleIndex: 0 };
    case "sdet":
      return { pathId: "testing", defaultModuleIndex: 0 };
    default:
      return null;
  }
}
