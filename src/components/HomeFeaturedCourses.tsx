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

type CourseCategory = "all" | "ai-data" | "software-web" | "cloud-sec" | "orientation";

interface CourseItem {
  id: string;
  category: "ai-data" | "software-web" | "cloud-sec" | "orientation";
  title: string;
  linkText: string;
  badge: string;
  duration: string;
  nextStart: string;
  desc: string;
  milestone: string;
  to: string;
  tags: string[];
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  iconType: "ai" | "code" | "shield" | "cloud" | "test" | "k8s" | "compass";
  fundingType: "bgs" | "avgs";
}

export function HomeFeaturedCourses({ isEn }: HomeFeaturedCoursesProps) {
  const [activeCategory, setActiveCategory] = useState<CourseCategory>("all");

  const categories: { id: CourseCategory; label: string; count: number }[] = isEn
    ? [
        { id: "all", label: "All Programs", count: 7 },
        { id: "ai-data", label: "AI & Data", count: 1 },
        { id: "software-web", label: "Software & QA", count: 2 },
        { id: "cloud-sec", label: "Cloud & Security", count: 3 },
        { id: "orientation", label: "Orientation (AVGS)", count: 1 },
      ]
    : [
        { id: "all", label: "Alle Programme", count: 7 },
        { id: "ai-data", label: "KI & Data", count: 1 },
        { id: "software-web", label: "Software & QA", count: 2 },
        { id: "cloud-sec", label: "Cloud & Security", count: 3 },
        { id: "orientation", label: "Orientierung (AVGS)", count: 1 },
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
          accentColor: "#E51A59",
          badgeBg: "bg-rose-50",
          badgeText: "text-rose-700 border-rose-200/80",
          iconType: "ai",
          fundingType: "bgs",
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
          accentColor: "#4F46E5",
          badgeBg: "bg-indigo-50",
          badgeText: "text-indigo-700 border-indigo-200/80",
          iconType: "code",
          fundingType: "bgs",
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
          accentColor: "#059669",
          badgeBg: "bg-emerald-50",
          badgeText: "text-emerald-800 border-emerald-200/80",
          iconType: "shield",
          fundingType: "bgs",
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
          accentColor: "#0284C7",
          badgeBg: "bg-sky-50",
          badgeText: "text-sky-800 border-sky-200/80",
          iconType: "cloud",
          fundingType: "bgs",
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
          accentColor: "#D97706",
          badgeBg: "bg-amber-50",
          badgeText: "text-amber-800 border-amber-200/80",
          iconType: "test",
          fundingType: "bgs",
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
          accentColor: "#2563EB",
          badgeBg: "bg-blue-50",
          badgeText: "text-blue-800 border-blue-200/80",
          iconType: "k8s",
          fundingType: "bgs",
        },
        {
          id: "it-orientation",
          category: "orientation",
          title: "IT Orientation Course",
          linkText: "View IT Orientation course",
          badge: "100% Funded with AVGS",
          duration: "4 Weeks (Full-Time or Part-Time)",
          nextStart: "Every Month",
          desc: "Not sure which tech path fits you? Test Data & AI, Web Development, Cyber Security, and Cloud Architecture hands-on in 4 weeks.",
          milestone: "Career Assessment: 4 IT Fields Hands-on + 1-on-1 Mentoring",
          to: "/it-orientation-course/",
          tags: ["AVGS Voucher", "4 IT Fields", "1-on-1 Mentoring", "0 € Tuition"],
          accentColor: "#E11D48",
          badgeBg: "bg-rose-50",
          badgeText: "text-rose-800 border-rose-200/80",
          iconType: "compass",
          fundingType: "avgs",
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
          accentColor: "#E51A59",
          badgeBg: "bg-rose-50",
          badgeText: "text-rose-700 border-rose-200/80",
          iconType: "ai",
          fundingType: "bgs",
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
          accentColor: "#4F46E5",
          badgeBg: "bg-indigo-50",
          badgeText: "text-indigo-700 border-indigo-200/80",
          iconType: "code",
          fundingType: "bgs",
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
          accentColor: "#059669",
          badgeBg: "bg-emerald-50",
          badgeText: "text-emerald-800 border-emerald-200/80",
          iconType: "shield",
          fundingType: "bgs",
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
          accentColor: "#0284C7",
          badgeBg: "bg-sky-50",
          badgeText: "text-sky-800 border-sky-200/80",
          iconType: "cloud",
          fundingType: "bgs",
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
          accentColor: "#D97706",
          badgeBg: "bg-amber-50",
          badgeText: "text-amber-800 border-amber-200/80",
          iconType: "test",
          fundingType: "bgs",
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
          accentColor: "#2563EB",
          badgeBg: "bg-blue-50",
          badgeText: "text-blue-800 border-blue-200/80",
          iconType: "k8s",
          fundingType: "bgs",
        },
        {
          id: "it-orientation",
          category: "orientation",
          title: "IT-Orientierungskurs",
          linkText: "IT-Orientierungskurs ansehen",
          badge: "100 % gefördert mit AVGS",
          duration: "4 Wochen (Vollzeit oder Teilzeit)",
          nextStart: "Jeden Monat",
          desc: "Noch unsicher, welcher IT-Bereich zu dir passt? Erprobe KI & Data, Webentwicklung, Cyber Security und Cloud in 4 Wochen praxisnah.",
          milestone: "Potenzialanalyse: 4 IT-Bereiche live testen + 1-zu-1 Mentoring",
          to: "/it-orientierungskurs/",
          tags: ["AVGS Gutschein", "4 IT-Bereiche", "1-zu-1 Mentoring", "0 € Kosten"],
          accentColor: "#E11D48",
          badgeBg: "bg-rose-50",
          badgeText: "text-rose-800 border-rose-200/80",
          iconType: "compass",
          fundingType: "avgs",
        },
      ];

  // In "all" mode, show the 6 core bootcamps in the 3x2 grid, plus the featured AVGS banner below.
  // In filtered mode, show matching courses in the grid.
  const displayedCourses =
    activeCategory === "all"
      ? courses.filter((c) => c.id !== "it-orientation")
      : courses.filter((c) => c.category === activeCategory);

  const orientationCourse = courses.find((c) => c.id === "it-orientation")!;

  return (
    <section
      className="py-20 sm:py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 65%, #FBFBFE 100%)",
      }}
    >
      {/* Subtle ambient lighting */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[360px] pointer-events-none opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(229, 26, 89, 0.08), rgba(79, 70, 229, 0.04), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* =====================================================================
            SECTION HEADER: Impeccable Typography & Clear Intent
            ===================================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/80 text-[#E51A59] text-xs font-bold tracking-wide uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E51A59] animate-pulse" />
              <span>
                {isEn ? "AZAV-Certified IT Academy" : "AZAV-Zertifizierter Bildungsträger"}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-200/90 text-sm font-semibold text-slate-800 hover:text-[#E51A59] hover:border-[#E51A59]/40 hover:shadow-sm active:scale-[0.98] transition-all group"
            >
              <span>{isEn ? "Compare all IT courses" : "Alle IT-Kurse vergleichen"}</span>
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* =====================================================================
            INTERACTIVE CATEGORY FILTER TABS
            ===================================================================== */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar scroll-smooth">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 cursor-pointer active:scale-[0.97] ${
                  isActive
                    ? "bg-[#141B2D] text-white shadow-md shadow-[#141B2D]/10 ring-1 ring-[#141B2D]"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200/90 hover:border-slate-300 hover:bg-slate-50/70"
                }`}
                type="button"
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[11px] font-bold px-1.5 py-0.5 rounded-md ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* =====================================================================
            COURSE CARDS GRID: Emil Kowalski Physics + Impeccable Craft
            ===================================================================== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-10">
          {displayedCourses.map((course) => (
            <article
              key={course.id}
              className="group relative bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between shadow-[0_2px_8px_rgba(15,23,42,0.04),0_12px_24px_-4px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_35px_-10px_rgba(229,26,89,0.12),0_8px_16px_-6px_rgba(15,23,42,0.06)] hover:-translate-y-1.5 transition-all duration-300 ease-out overflow-hidden"
            >
              {/* Top Accent Stripe */}
              <div
                className="absolute top-0 left-0 right-0 h-1 transition-all duration-300"
                style={{ backgroundColor: course.accentColor }}
              />

              <div>
                {/* Header: Discipline Icon + Funding Pill */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border border-slate-100 shadow-sm transition-transform duration-300 group-hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, ${course.accentColor}12 0%, ${course.accentColor}06 100%)`,
                    }}
                  >
                    <CourseIcon type={course.iconType} color={course.accentColor} />
                  </div>

                  {/* 100% Funding Badge with Live Pulse */}
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200/80 shadow-xs">
                    <span className="relative flex h-2 w-2 mr-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span>
                      {course.fundingType === "avgs"
                        ? isEn
                          ? "100% Funded (AVGS)"
                          : "100 % Förderung (AVGS)"
                        : isEn
                        ? "100% Funded (Bildungsgutschein)"
                        : "100 % Bildungsgutschein"}
                    </span>
                  </span>
                </div>

                {/* Domain Pill Badge */}
                <div className="mb-2.5">
                  <span
                    className={`inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-md border ${course.badgeBg} ${course.badgeText}`}
                  >
                    {course.badge}
                  </span>
                </div>

                {/* Course Title */}
                <h3 className="text-xl font-bold text-[#0F172A] mb-2.5 leading-snug group-hover:text-[#E51A59] transition-colors">
                  <Link to={course.to} className="focus:outline-none">
                    {course.title}
                  </Link>
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 min-h-[40px]">
                  {course.desc}
                </p>

                {/* Substance Callout: Real Capstone / Lab Milestone */}
                <div className="mb-5 p-3 rounded-xl bg-slate-50/90 border border-slate-200/70 flex items-start gap-2.5">
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
                      className="bg-white border border-slate-200 text-slate-700 text-[11px] font-medium px-2.5 py-0.5 rounded-md shadow-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Metadata & High-Craft CTA */}
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <ClockIcon className="w-3.5 h-3.5 text-slate-400" />
                    <span>{course.duration}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <CalendarIcon className="w-3.5 h-3.5 text-slate-400" />
                    <span>{course.nextStart}</span>
                  </span>
                </div>

                <Link
                  to={course.to}
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-[#E51A59] transition-all duration-200 shadow-sm group/btn active:scale-[0.98]"
                >
                  <span>{course.linkText}</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* =====================================================================
            ALL-PROGRAMS COMPANION: FEATURED IT-ORIENTATION BANNER (AVGS)
            Displayed prominently when "all" is active, giving perfect 3x2 + 1 balance.
            ===================================================================== */}
        {activeCategory === "all" && (
          <div className="relative rounded-2xl bg-gradient-to-r from-[#141B2D] via-[#1a233b] to-[#141B2D] text-white p-6 sm:p-8 lg:p-10 shadow-xl overflow-hidden border border-white/10">
            {/* Subtle brand glow behind banner */}
            <div
              className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full blur-3xl opacity-30 pointer-events-none"
              style={{ backgroundColor: "#E51A59" }}
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-300 text-xs font-bold uppercase tracking-wider mb-3">
                  <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
                  <span>
                    {isEn ? "100% Free with AVGS Voucher" : "100 % Kostenfrei mit AVGS-Gutschein"}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight mb-2">
                  {isEn
                    ? "Undecided which tech career fits you? Start with our 4-Week IT Orientation."
                    : "Noch unentschlossen? Finde deinen passenden IT-Pfad im 4-Wochen-Orientierungskurs."}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 max-w-2xl">
                  {isEn
                    ? "Test 4 future-proof IT fields hands-on (AI & Data, Web Development, Cloud & DevOps, Cyber Security). Includes 1-on-1 career coaching to match you with your optimal full bootcamp — 100% funded by the Jobcenter or Agentur für Arbeit."
                    : "Erprobe 4 zukunftssichere IT-Bereiche (KI & Data, Webentwicklung, Cloud & DevOps, Cyber Security) live und praxisnah. Inklusive 1-zu-1 Karriere-Coaching zur Auswahl deiner optimalen Weiterbildung — 100 % finanziert über deinen AVGS-Gutschein."}
                </p>

                <div className="flex flex-wrap gap-2.5 sm:gap-4 text-xs font-medium text-slate-200">
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircleIcon className="w-4 h-4 text-rose-400" />
                    <span>{isEn ? "0 € Tuition with AVGS" : "0 € Kosten mit AVGS"}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircleIcon className="w-4 h-4 text-rose-400" />
                    <span>{isEn ? "No prior experience required" : "Keine Vorkenntnisse nötig"}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircleIcon className="w-4 h-4 text-rose-400" />
                    <span>{isEn ? "Live online with mentors" : "Live-Online mit Mentoren"}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircleIcon className="w-4 h-4 text-rose-400" />
                    <span>{isEn ? "Flexible part-time or full-time" : "Vollzeit oder Teilzeit"}</span>
                  </span>
                </div>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
                <Link
                  to={orientationCourse.to}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#E51A59] text-white font-bold text-sm hover:bg-[#c21345] transition-all shadow-lg shadow-rose-900/30 group active:scale-[0.98]"
                >
                  <span>
                    {isEn ? "Explore IT Orientation Course" : "Zum IT-Orientierungskurs"}
                  </span>
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <div className="text-center sm:text-left lg:text-center text-[11px] text-slate-400 font-medium">
                  {isEn ? "Next cohorts start every month" : "Nächste Kohorten starten jeden Monat"}
                </div>
              </div>
            </div>
          </div>
        )}
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
  type: "ai" | "code" | "shield" | "cloud" | "test" | "k8s" | "compass";
  color: string;
}) {
  switch (type) {
    case "ai":
      // Neural / Brain Icon
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a4 4 0 0 0-4 4v1a4 4 0 0 0-2 3.46v2.08A4 4 0 0 0 4 16v1a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-1a4 4 0 0 0-2-3.46v-2.08A4 4 0 0 0 16 7V6a4 4 0 0 0-4-4z" />
          <path d="M9 12h6M12 9v6M9 16l3-4 3 4" opacity="0.6" />
        </svg>
      );
    case "code":
      // Terminal / Full Stack Code Icon
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" opacity="0.6" />
        </svg>
      );
    case "shield":
      // Cyber Security Shield Icon
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" opacity="0.75" />
        </svg>
      );
    case "cloud":
      // Cloud & Architecture Icon
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          <path d="M12 13v5M10 15l2-2 2 2" opacity="0.6" />
        </svg>
      );
    case "test":
      // QA / Test Automation Beaker Icon
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
          <path d="M8.5 2h7M7 16h10" opacity="0.6" />
        </svg>
      );
    case "k8s":
      // Kubernetes Helm Wheel Icon
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      );
    case "compass":
      // Compass / Orientation Icon
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill={color} fillOpacity="0.2" />
        </svg>
      );
  }
}
