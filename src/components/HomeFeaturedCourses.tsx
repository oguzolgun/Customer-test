import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  ClockIcon,
  CalendarIcon,
  CheckCircleIcon,
  SparklesIcon,
} from "./Icons";

interface HomeFeaturedCoursesProps {
  isEn: boolean;
}

type CourseCategory = "all" | "ai-data" | "software-web" | "cloud-sec";

interface CourseItem {
  id: string;
  category: "ai-data" | "software-web" | "cloud-sec";
  title: string;
  linkText: string;
  badge: string;
  duration: string;
  nextStart: string;
  desc: string;
  milestone: string;
  to: string;
  tags: string[];
  iconType: "ai" | "code" | "shield" | "cloud" | "test" | "k8s";
  isOppositeFeatured?: boolean;
}

const PRIMARY_MAGENTA = "#E51A59";
const DARK_NAVY = "#141B2D";

export function HomeFeaturedCourses({ isEn }: HomeFeaturedCoursesProps) {
  const [activeCategory, setActiveCategory] = useState<CourseCategory>("all");

  const categories: { id: CourseCategory; label: string; count: number }[] = isEn
    ? [
        { id: "all", label: "All Career Tracks", count: 6 },
        { id: "ai-data", label: "AI & Data", count: 1 },
        { id: "software-web", label: "Software & QA", count: 2 },
        { id: "cloud-sec", label: "Cloud & Security", count: 3 },
      ]
    : [
        { id: "all", label: "Alle Fachbereiche", count: 6 },
        { id: "ai-data", label: "KI & Data", count: 1 },
        { id: "software-web", label: "Software & QA", count: 2 },
        { id: "cloud-sec", label: "Cloud & Security", count: 3 },
      ];

  const courses: CourseItem[] = isEn
    ? [
        {
          id: "ai-engineering",
          category: "ai-data",
          title: "AI Engineering",
          linkText: "View AI Engineering bootcamp",
          badge: "Data Analytics, ML & Agentic AI",
          duration: "32 Weeks (or 6–19 Wk. Modular)",
          nextStart: "27 Jul 2026",
          desc: "Three modular stages: Data Analytics & BI (Module 1), Data Science & Machine Learning (Module 2), and AI Engineering & Agentic AI (Module 3).",
          milestone: "Capstone: Enterprise RAG & Multi-Agent Copilot",
          to: "/it-courses/ai-engineering/",
          tags: ["Python & SQL", "Power BI", "PyTorch", "RAG & Agentic AI"],
          iconType: "ai",
          isOppositeFeatured: true, // Opposite Magenta Card (Image 2 Option 2 style)
        },
        {
          id: "full-stack",
          category: "software-web",
          title: "AI-Assisted Full Stack Development",
          linkText: "View Full Stack Developer course",
          badge: "Web Development + AI Workflows",
          duration: "3 – 12 Months (4 Modules)",
          nextStart: "27 Jul 2026",
          desc: "Build production web applications with React, TypeScript, Next.js, Node.js, and PostgreSQL while mastering AI coding workflows with Cursor, Claude Code, and Copilot.",
          milestone: "Capstone: Production SaaS Platform with AI Copilot",
          to: "/it-courses/full-stack-developer/",
          tags: ["React & Next.js", "TypeScript", "Node.js", "Cursor & Claude Code"],
          iconType: "code",
        },
        {
          id: "cyber-security",
          category: "cloud-sec",
          title: "AI-Enhanced Cyber Security Analyst",
          linkText: "View Cyber Security course",
          badge: "SOC, Agentic AI & Cloud Security",
          duration: "4 Modules (Direct Entry Option)",
          nextStart: "24 Aug 2026",
          desc: "From CompTIA Security+ exam prep to live AI-enhanced Security Operations Center (SOC) hunting and AWS Cloud Security architecture.",
          milestone: "Capstone: Live SIEM Threat Hunting in Splunk Lab",
          to: "/it-courses/cyber-security/",
          tags: ["CompTIA Security+", "SIEM & SOC", "Agentic AI", "AWS Security"],
          iconType: "shield",
        },
        {
          id: "aws-devops",
          category: "cloud-sec",
          title: "AI-Enhanced AWS Solutions Architect/DevOps Engineer",
          linkText: "View AWS & DevOps training",
          badge: "AWS Select Tier Partner",
          duration: "3 – 8 Months (5 Combinations)",
          nextStart: "24 Aug 2026",
          desc: "Master AWS Cloud Architecture, Docker, Kubernetes, Terraform, GitOps CI/CD pipelines, and Microsoft Azure Fundamentals.",
          milestone: "Capstone: Multi-Region High-Availability K8s Cluster via Terraform",
          to: "/it-courses/devops-aws/",
          tags: ["AWS SAA-C03", "Kubernetes", "Terraform", "Azure AZ-900"],
          iconType: "cloud",
        },
        {
          id: "sdet",
          category: "software-web",
          title: "SDET",
          linkText: "View SDET course",
          badge: "QA & Test Automation",
          duration: "Full-Time Track",
          nextStart: "14 Sep 2026",
          desc: "Automate web, API, and database testing with Java, Selenium, Cypress, Playwright, Postman, and Jenkins CI/CD.",
          milestone: "Capstone: End-to-End Playwright & API Framework",
          to: "/it-courses/software-development-engineer-in-test/",
          tags: ["Java", "Selenium & Playwright", "API Testing", "CI/CD"],
          iconType: "test",
        },
        {
          id: "kubernetes-ckad",
          category: "cloud-sec",
          title: "Kubernetes CKAD Certification Course",
          linkText: "View Kubernetes CKAD course",
          badge: "4-Week CNCF Specialization",
          duration: "4 Weeks (Full-Time)",
          nextStart: "24 Aug 2026",
          desc: "Intensive 100% practical Linux Foundation CNCF CKAD exam preparation for developers, cloud, and DevOps engineers.",
          milestone: "Exam Lab: 100% Practical CNCF Performance Lab Simulation",
          to: "/it-courses/kubernetes-ckad-certification-course/",
          tags: ["CNCF CKAD", "Kubernetes", "Container Security", "Helm & Pods"],
          iconType: "k8s",
        },
      ]
    : [
        {
          id: "ai-engineering",
          category: "ai-data",
          title: "AI Engineering",
          linkText: "AI Engineer Weiterbildung ansehen",
          badge: "Data Analytics, ML & Agentic AI",
          duration: "32 Wochen (oder 6–19 Wo. modular)",
          nextStart: "27 Jul 2026",
          desc: "Drei kombinierbare Module: Data Analytics & BI (Modul 1), Data Science & Machine Learning (Modul 2) sowie AI Engineering & Agentic AI (Modul 3).",
          milestone: "Praxis-Projekt: Enterprise RAG & Multi-Agenten-Copilot",
          to: "/it-kurse/ai-engineer-weiterbildung/",
          tags: ["Python & SQL", "Power BI", "PyTorch", "RAG & Agentic AI"],
          iconType: "ai",
          isOppositeFeatured: true, // Opposite Magenta Card (Image 2 Option 2 style)
        },
        {
          id: "full-stack",
          category: "software-web",
          title: "AI-Assisted Full Stack Development",
          linkText: "Full Stack Entwickler Weiterbildung ansehen",
          badge: "Webentwicklung mit KI-Workflows",
          duration: "3 – 12 Monate (4 Module)",
          nextStart: "27 Jul 2026",
          desc: "Moderne Webentwicklung mit React, TypeScript, Next.js, Node.js und PostgreSQL — unterstützt durch Cursor, Claude Code und GitHub Copilot.",
          milestone: "Praxis-Projekt: Full-Stack SaaS Plattform mit KI-Workflows",
          to: "/it-kurse/full-stack-entwickler-weiterbildung/",
          tags: ["React & Next.js", "TypeScript", "Node.js", "KI-Coding-Tools"],
          iconType: "code",
        },
        {
          id: "cyber-security",
          category: "cloud-sec",
          title: "AI-Enhanced Cyber Security Analyst",
          linkText: "Cyber Security Weiterbildung ansehen",
          badge: "SOC Analyst & Cloud Security",
          duration: "4 Module (Direkteinstieg möglich)",
          nextStart: "24 Aug 2026",
          desc: "Von der CompTIA Security+ Vorbereitung über das KI-gestützte Security Operations Center (SOC) bis hin zu AWS Cloud Security.",
          milestone: "Praxis-Lab: Threat Hunting im Splunk SIEM & SecOps AI",
          to: "/it-kurse/cyber-security-weiterbildung/",
          tags: ["CompTIA Security+", "SIEM & SOC", "Agentic AI", "AWS Security"],
          iconType: "shield",
        },
        {
          id: "aws-devops",
          category: "cloud-sec",
          title: "AI-Enhanced AWS Solutions Architect/DevOps Engineer",
          linkText: "AWS & DevOps Weiterbildung ansehen",
          badge: "AWS Select Tier Partner",
          duration: "3 – 8 Monate (5 Kombinationen)",
          nextStart: "24 Aug 2026",
          desc: "Qualifiziere dich in drei Modulen (AI-Enhanced AWS Cloud Engineer, DevOps Engineer und Azure Basics) zum Cloud & DevOps Engineer.",
          milestone: "Praxis-Lab: Multi-Region Kubernetes Cluster mit Terraform",
          to: "/it-kurse/aws-devops-weiterbildung/",
          tags: ["AWS SAA-C03", "Kubernetes", "Terraform", "Azure AZ-900"],
          iconType: "cloud",
        },
        {
          id: "sdet",
          category: "software-web",
          title: "SDET",
          linkText: "SDET Weiterbildung ansehen",
          badge: "QA & Testautomatisierung",
          duration: "Vollzeit-Programm",
          nextStart: "14 Sep 2026",
          desc: "Qualitätssicherung und automatisierte Softwaretests für Web- und API-Systeme mit Java, Selenium, Cypress, Playwright und CI/CD.",
          milestone: "Praxis-Projekt: End-to-End Test-Suite mit Playwright & CI/CD",
          to: "/it-kurse/sdet-weiterbildung/",
          tags: ["Java", "Selenium & Playwright", "API Testing", "ISTQB Basis"],
          iconType: "test",
        },
        {
          id: "kubernetes-ckad",
          category: "cloud-sec",
          title: "Kubernetes CKAD Zertifikat Kurs",
          linkText: "CKAD Zertifikat Kurs ansehen",
          badge: "4-Wochen CNCF Spezialisierung",
          duration: "4 Wochen (Vollzeit)",
          nextStart: "24 Aug 2026",
          desc: "Intensive, 100 % praxisnahe Vorbereitung auf die offizielle CNCF CKAD Prüfung für Entwickler und Cloud-Engineers.",
          milestone: "Prüfungslabor: 100 % praktische CNCF Performance-Simulation",
          to: "/it-kurse/kubernetes-ckad-zertifikat-kurs/",
          tags: ["CNCF CKAD", "Kubernetes", "Container Security", "Helm & Pods"],
          iconType: "k8s",
        },
      ];

  const displayedCourses =
    activeCategory === "all"
      ? courses
      : courses.filter((c) => c.category === activeCategory);

  return (
    <section
      className="py-20 sm:py-24 relative overflow-hidden bg-[#FAF9F7]"
      style={{
        background: "linear-gradient(180deg, #FBFBFA 0%, #FFFFFF 50%, #FAF8F6 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* =====================================================================
            SECTION HEADER: Clean & Authoritative
            ===================================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDE8EF] border border-[#E51A59]/30 text-[#E51A59] text-xs font-semibold tracking-wide uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E51A59] animate-pulse" />
              <span>
                {isEn ? "AZAV-Certified IT Academy" : "AZAV-Zertifizierter Bildungsträger"}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141B2D] tracking-tight mb-3">
              {isEn ? "Funded IT Training Programs" : "Geförderte Weiterbildungsprogramme"}
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              {isEn
                ? "Every program is taught live online with interactive instructors and can be taken as a complete career pathway or in modular stages. 100% funded with Bildungsgutschein or AVGS."
                : "Alle Programme finden im interaktiven Live-Online-Unterricht mit praxiserfahrenen Dozenten statt. 100 % förderfähig über den Bildungsgutschein oder AVGS der Agentur für Arbeit und des Jobcenters."}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              to={isEn ? "/it-courses/" : "/it-kurse/"}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-300 text-sm font-semibold text-[#141B2D] hover:text-[#E51A59] hover:border-[#E51A59]/50 shadow-xs active:scale-[0.98] transition-all group"
            >
              <span>{isEn ? "Compare all IT courses" : "Alle IT-Kurse vergleichen"}</span>
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* =====================================================================
            OPPOSITE CARDS (IMAGE 2 ARCHITECTURE: OPTION 1 WHITE vs OPTION 2 MAGENTA)
            High-impact two-path decision structure directly derived from user reference
            ===================================================================== */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-14">
          {/* OPTION 1: LIGHT / WHITE CARD */}
          <div className="bg-white rounded-2xl p-7 sm:p-9 border-2 border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(20,27,45,0.06)] flex flex-col justify-between hover:border-[#141B2D]/40 transition-all duration-300 group">
            <div>
              {/* Option 1 Badge (Dark Navy on White) */}
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-[#141B2D] text-white text-xs font-semibold uppercase tracking-wider mb-5 shadow-xs">
                {isEn ? "Option 1 · Career Track" : "Option 1 · IT-Weiterbildung"}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141B2D] mb-3 leading-snug tracking-tight">
                {isEn
                  ? "Direct Entry to Your Chosen IT Field"
                  : "Direkteinstieg in deinen IT-Fachbereich"}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                {isEn
                  ? "You know your target career. Choose from 6 specialized tracks (AI, Full Stack, Cyber Security, Cloud & DevOps, SDET, CKAD). 100% funded with a Bildungsgutschein."
                  : "Du weißt bereits, wo du hinwillst. Wähle aus 6 spezialisierten Fachbereichen (KI & Data, Full Stack, Cyber Security, Cloud, SDET, CKAD). 100 % finanziert mit Bildungsgutschein."}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                  <CheckCircleIcon className="w-4 h-4 text-[#E51A59] shrink-0" />
                  <span>{isEn ? "0 € Tuition (BGS)" : "0 € Kosten mit BGS"}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                  <CheckCircleIcon className="w-4 h-4 text-[#E51A59] shrink-0" />
                  <span>{isEn ? "Live online instruction" : "100 % Live-Online"}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                  <CheckCircleIcon className="w-4 h-4 text-[#E51A59] shrink-0" />
                  <span>{isEn ? "Max. 15 per class" : "Max. 15 pro Klasse"}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                  <CheckCircleIcon className="w-4 h-4 text-[#E51A59] shrink-0" />
                  <span>{isEn ? "DE · EN · TR Cohorts" : "DE · EN · TR Klassen"}</span>
                </div>
              </div>
            </div>

            {/* Button Option 1: Outlined Button with Dark Navy Border (Exact Image 2 Style) */}
            <a
              href="#career-tracks"
              className="w-full py-3.5 px-6 rounded-xl border-2 border-[#141B2D] text-[#141B2D] font-bold text-sm hover:bg-[#141B2D] hover:text-white transition-all duration-200 text-center flex items-center justify-center gap-2 shadow-xs active:scale-[0.98]"
            >
              <span>{isEn ? "Explore 6 IT Career Tracks" : "Zu den 6 Fachbereichen"}</span>
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>

          {/* OPTION 2: OPPOSITE / MAGENTA CARD */}
          <div className="bg-[#E51A59] rounded-2xl p-7 sm:p-9 text-white shadow-[0_12px_32px_-6px_rgba(229,26,89,0.35)] flex flex-col justify-between transition-all duration-300 relative overflow-hidden group">
            {/* Ambient inner soft glow */}
            <div
              className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10">
              {/* Option 2 Badge (White on Magenta - Exact Image 2 Style) */}
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white text-[#E51A59] text-xs font-semibold uppercase tracking-wider mb-5 shadow-xs">
                {isEn ? "Option 2 · Free Orientation" : "Option 2 · IT-Orientierung"}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 leading-snug tracking-tight">
                {isEn
                  ? "Undecided? Test 4 IT Fields in 4 Weeks"
                  : "Noch unentschlossen? 4-Wochen Orientierung"}
              </h3>

              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6">
                {isEn
                  ? "Not sure which tech path fits your strengths? Test AI & Data, Web, Cyber Security, and Cloud Architecture hands-on. Includes 1-on-1 coaching — 100% funded with AVGS."
                  : "Noch nicht sicher, welcher Bereich zu dir passt? Erprobe KI & Data, Webentwicklung, Cyber Security und Cloud live und praxisnah ohne Risiko. Inklusive 1-zu-1 Mentoring – 100 % finanziert mit AVGS."}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8 text-xs font-semibold text-white">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/15 border border-white/20">
                  <CheckCircleIcon className="w-4 h-4 text-white shrink-0" />
                  <span>{isEn ? "0 € with AVGS Voucher" : "0 € Kosten mit AVGS"}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/15 border border-white/20">
                  <CheckCircleIcon className="w-4 h-4 text-white shrink-0" />
                  <span>{isEn ? "No prior skills needed" : "Keine Vorkenntnisse"}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/15 border border-white/20">
                  <CheckCircleIcon className="w-4 h-4 text-white shrink-0" />
                  <span>{isEn ? "4 IT Fields Hands-on" : "4 Fachbereiche live"}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/15 border border-white/20">
                  <CheckCircleIcon className="w-4 h-4 text-white shrink-0" />
                  <span>{isEn ? "1-on-1 Mentoring" : "1-zu-1 Coaching"}</span>
                </div>
              </div>
            </div>

            {/* Button Option 2: Solid White Button with Magenta Text (Exact Image 2 Style) */}
            <Link
              to={isEn ? "/it-orientation-course/" : "/it-orientierungskurs/"}
              className="relative z-10 w-full py-3.5 px-6 rounded-xl bg-white text-[#E51A59] font-bold text-sm hover:bg-slate-50 transition-all duration-200 text-center flex items-center justify-center gap-2 shadow-md active:scale-[0.98]"
            >
              <span>
                {isEn
                  ? "Start Free IT Orientation Course"
                  : "Kostenfreien Orientierungskurs ansehen"}
              </span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* =====================================================================
            FILTER TABS & HEADING FOR THE DETAILED 6 BOOTCAMPS
            ===================================================================== */}
        <div id="career-tracks" className="pt-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-semibold text-[#E51A59] uppercase tracking-wider block mb-1">
                {isEn ? "Full & Modular Programs" : "Gesamt- & Modulprogramme"}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#141B2D]">
                {isEn ? "Explore Specialized Bootcamps" : "Die 6 Weiterbildungsprogramme im Detail"}
              </h3>
            </div>

            {/* Filter Tabs (Strict Clarusway Brand Colors - Soft Typography) */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 shrink-0 cursor-pointer active:scale-[0.98] outline-none focus:outline-none ${
                      isActive
                        ? "bg-[#141B2D] text-white shadow-xs"
                        : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200/90 hover:border-slate-300 hover:bg-slate-50/70"
                    }`}
                    type="button"
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[11px] font-normal px-2 py-0.5 rounded-full ${
                        isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* =====================================================================
            COURSE CARDS GRID (STRICT BRAND PALETTE: WHITE & MAGENTA OPPOSITE)
            ===================================================================== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {displayedCourses.map((course) => {
            const isFeatured = course.isOppositeFeatured && activeCategory === "all";

            // OPPOSITE FEATURED CARD (AI Engineering in Magenta / Image 2 style)
            if (isFeatured) {
              return (
                <article
                  key={course.id}
                  className="group relative bg-[#E51A59] rounded-2xl p-6 sm:p-7 flex flex-col justify-between text-white shadow-xl shadow-rose-900/20 hover:-translate-y-1.5 transition-all duration-300 ease-out overflow-hidden"
                >
                  <div className="relative z-10">
                    {/* Top Row: Icon + Funding Pill */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-white/20 border border-white/30 text-white shadow-xs">
                        <CourseIcon type={course.iconType} color="#FFFFFF" />
                      </div>

                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white text-[#E51A59] shadow-xs">
                        <span className="relative flex h-2 w-2 mr-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E51A59] opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E51A59]" />
                        </span>
                        <span>
                          {isEn ? "100% Funded (BGS)" : "100 % Bildungsgutschein"}
                        </span>
                      </span>
                    </div>

                    {/* Domain Badge (White Pill on Magenta) */}
                    <div className="mb-2.5">
                      <span className="inline-block text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-white/20 text-white border border-white/30">
                        {course.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2.5 leading-snug">
                      <Link to={course.to} className="focus:outline-none hover:underline">
                        {course.title}
                      </Link>
                    </h3>

                    {/* Description */}
                    <p className="text-white/90 text-xs sm:text-sm leading-relaxed mb-4 min-h-[40px]">
                      {course.desc}
                    </p>

                    {/* Milestone Box (Glass on Magenta) */}
                    <div className="mb-5 p-3 rounded-xl bg-white/15 border border-white/20 flex items-start gap-2.5 text-white">
                      <SparklesIcon className="w-4 h-4 text-white shrink-0 mt-0.5" />
                      <p className="text-xs font-semibold leading-tight">
                        {course.milestone}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {course.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/20 text-white border border-white/30 text-[11px] font-medium px-2.5 py-0.5 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer: Metadata & Solid White Button */}
                  <div className="pt-4 border-t border-white/20 flex flex-col gap-3 relative z-10">
                    <div className="flex items-center justify-between text-xs text-white/80">
                      <span className="inline-flex items-center gap-1.5 font-medium">
                        <ClockIcon className="w-3.5 h-3.5 text-white" />
                        <span>{course.duration}</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-medium">
                        <CalendarIcon className="w-3.5 h-3.5 text-white" />
                        <span>{course.nextStart}</span>
                      </span>
                    </div>

                    <Link
                      to={course.to}
                      className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-white text-[#E51A59] text-xs font-semibold hover:bg-slate-50 transition-all duration-200 shadow-sm group/btn active:scale-[0.98]"
                    >
                      <span>{course.linkText}</span>
                      <ArrowRightIcon className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              );
            }

            // STANDARD WHITE CARDS (Strict Clarusway Brand Palette)
            return (
              <article
                key={course.id}
                className="group relative bg-white rounded-2xl border border-slate-300 p-6 sm:p-7 flex flex-col justify-between shadow-[0_2px_8px_rgba(20,27,45,0.04)] hover:shadow-[0_16px_30px_-6px_rgba(20,27,45,0.08)] hover:-translate-y-1.5 transition-all duration-300 ease-out overflow-hidden"
              >
                {/* Top Magenta Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#E51A59]" />

                <div>
                  {/* Top Row: Icon + Funding Pill */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-[#FDE8EF] border border-[#E51A59]/20 shadow-xs text-[#E51A59] transition-transform duration-300 group-hover:scale-105">
                      <CourseIcon type={course.iconType} color={PRIMARY_MAGENTA} />
                    </div>

                    {/* Live Magenta Pulse Funding Badge (NO GREEN!) */}
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#FDE8EF] text-[#E51A59] border border-[#E51A59]/30 shadow-xs">
                      <span className="relative flex h-2 w-2 mr-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E51A59] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E51A59]" />
                      </span>
                      <span>
                        {isEn ? "100% Funded (BGS)" : "100 % Bildungsgutschein"}
                      </span>
                    </span>
                  </div>

                  {/* Domain Badge */}
                  <div className="mb-2.5">
                    <span className="inline-block text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-[#141B2D] text-white">
                      {course.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#141B2D] mb-2.5 leading-snug group-hover:text-[#E51A59] transition-colors">
                    <Link to={course.to} className="focus:outline-none">
                      {course.title}
                    </Link>
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 min-h-[40px]">
                    {course.desc}
                  </p>

                  {/* Milestone Box */}
                  <div className="mb-5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                    <SparklesIcon className="w-4 h-4 text-[#E51A59] shrink-0 mt-0.5" />
                    <p className="text-xs font-semibold text-slate-800 leading-tight">
                      {course.milestone}
                    </p>
                  </div>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {course.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white border border-slate-300 text-slate-700 text-[11px] font-medium px-2.5 py-0.5 rounded-md shadow-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Metadata & Dark Navy Button */}
                <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span className="inline-flex items-center gap-1.5">
                      <ClockIcon className="w-3.5 h-3.5 text-slate-400" />
                      <span>{course.duration}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarIcon className="w-3.5 h-3.5 text-slate-400" />
                      <span>{course.nextStart}</span>
                    </span>
                  </div>

                  <Link
                    to={course.to}
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-[#141B2D] text-white text-xs font-semibold hover:bg-[#E51A59] transition-all duration-200 shadow-sm group/btn active:scale-[0.98]"
                  >
                    <span>{course.linkText}</span>
                    <ArrowRightIcon className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// HIGH-PRECISION DISCIPLINE ICONS
// ============================================================================
function CourseIcon({
  type,
  color,
}: {
  type: "ai" | "code" | "shield" | "cloud" | "test" | "k8s";
  color: string;
}) {
  switch (type) {
    case "ai":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a4 4 0 0 0-4 4v1a4 4 0 0 0-2 3.46v2.08A4 4 0 0 0 4 16v1a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-1a4 4 0 0 0-2-3.46v-2.08A4 4 0 0 0 16 7V6a4 4 0 0 0-4-4z" />
          <path d="M9 12h6M12 9v6M9 16l3-4 3 4" opacity="0.6" />
        </svg>
      );
    case "code":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" opacity="0.6" />
        </svg>
      );
    case "shield":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" opacity="0.75" />
        </svg>
      );
    case "cloud":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          <path d="M12 13v5M10 15l2-2 2 2" opacity="0.6" />
        </svg>
      );
    case "test":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
          <path d="M8.5 2h7M7 16h10" opacity="0.6" />
        </svg>
      );
    case "k8s":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      );
  }
}
