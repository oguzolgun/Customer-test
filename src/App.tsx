import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
  Link,
} from "react-router-dom";
import { LanguageProvider, useLanguage, getHreflangPair } from "./context/LanguageContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { CoursesHubPage } from "./pages/CoursesHubPage";
import { CourseTemplatePage } from "./pages/CourseTemplatePage";
import {
  FinancingHubPage,
  BildungsgutscheinPage,
  AvgsPage,
  QcgPage,
  CorporateTrainingPage,
} from "./pages/FundingPages";
import { GuidesHubPage, GuideArticlePage } from "./pages/GuidesPages";
import {
  AboutPage,
  SuccessStoriesPage,
  CareerManagementPage,
  EventsPage,
  ConsultationPage,
  ThankYouPage,
  ReferFriendPage,
  ContactPage,
  ImprintPage,
  PrivacyPage,
} from "./pages/TrustAndLegalPages";

function ScrollAndLegacyRedirectHandler() {
  const location = useLocation();

  useEffect(() => {
    // Handle legacy query string ?page_id=754 from EN SEO Plan -> 301 to /it-courses/devops-aws/
    const params = new URLSearchParams(location.search);
    if (params.get("page_id") === "754") {
      window.history.replaceState({}, "", "/it-courses/devops-aws/");
      window.dispatchEvent(new PopStateEvent("popstate"));
      return;
    }

    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname, location.search, location.hash]);

  return null;
}

function SeoSitemapDrawer() {
  const { lang, setLang } = useLanguage();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [headings, setHeadings] = useState<{ tag: string; text: string }[]>([]);

  useEffect(() => {
    if (!open) return;
    const timer = setTimeout(() => {
      const nodes = Array.from(document.querySelectorAll("h1, h2, h3"));
      setHeadings(
        nodes.map((n) => ({
          tag: n.tagName,
          text: (n.textContent || "").trim().slice(0, 90),
        }))
      );
    }, 80);
    return () => clearTimeout(timer);
  }, [open, location.pathname, lang]);

  const pair = getHreflangPair(location.pathname);

  return (
    <div className="fixed bottom-4 right-4 z-50 font-sans">
      {open ? (
        <div className="w-[360px] sm:w-[420px] max-h-[82vh] overflow-y-auto bg-[#1a1d2e] text-white rounded-2xl shadow-2xl border border-white/15 p-5 text-xs">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/15">
            <div>
              <p className="font-bold text-sm text-white">SEO & Sitemap Navigator</p>
              <p className="text-[11px] text-gray-400">
                Lang: <strong className="text-[#f472b6] uppercase">{lang}</strong> · Path:{" "}
                <code className="text-emerald-300">{location.pathname}</code>
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-bold cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Language Toggle */}
          <div className="flex gap-2 mb-4">
            <button
              type="button"
              onClick={() => setLang("de")}
              className={`flex-1 py-1.5 rounded-lg font-bold cursor-pointer ${
                lang === "de" ? "bg-[#e51a59] text-white" : "bg-white/10 text-gray-300"
              }`}
            >
              Deutsch (clarusway.de)
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`flex-1 py-1.5 rounded-lg font-bold cursor-pointer ${
                lang === "en" ? "bg-[#e51a59] text-white" : "bg-white/10 text-gray-300"
              }`}
            >
              English (en.clarusway.de)
            </button>
          </div>

          {/* Hreflang Pair Status */}
          <div className="bg-white/5 rounded-xl p-3 mb-4 border border-white/10">
            <p className="font-semibold text-[#f472b6] mb-1">Hreflang Counterpart</p>
            {pair ? (
              <p className="text-[11px] text-gray-300">
                DE: <code>{pair.de}</code>
                <br />
                EN: <code>{pair.en}</code>
              </p>
            ) : (
              <p className="text-[11px] text-gray-400">
                Language-specific guide (self-canonical only, no cross-hreflang per SEO plan)
              </p>
            )}
          </div>

          {/* Quick Jump Sitemap */}
          <div className="mb-4">
            <p className="font-semibold text-[#f472b6] mb-2">
              Quick Jump ({lang === "en" ? "EN Sitemap" : "DE Sitemap"})
            </p>
            <div className="grid grid-cols-2 gap-1.5 text-[11px]">
              {(lang === "en"
                ? [
                    ["Home (EN)", "/"],
                    ["IT Courses Hub", "/it-courses/"],
                    ["AI Engineering", "/it-courses/ai-engineering/"],
                    ["Data Analytics", "/it-courses/data-analytics/"],
                    ["Full Stack Dev", "/it-courses/full-stack-developer/"],
                    ["Cyber Security", "/it-courses/cyber-security/"],
                    ["AWS & DevOps", "/it-courses/devops-aws/"],
                    ["AWS Architect", "/it-courses/aws-solutions-architect/"],
                    ["SDET Testing", "/it-courses/software-development-engineer-in-test/"],
                    ["Kubernetes CKAD", "/it-courses/kubernetes-ckad-certification-course/"],
                    ["IT Orientation", "/it-orientation-course/"],
                    ["Financing Hub", "/financing-and-tuition/"],
                    ["Bildungsgutschein", "/bildungsgutschein/"],
                    ["AVGS Voucher", "/avgs/"],
                    ["QCG Employees", "/qualifizierungschancengesetz/"],
                    ["Guides Hub", "/guides/"],
                    ["Unemployed Expat", "/guides/unemployed-in-germany/"],
                    ["Agentur & Jobcenter", "/guides/agentur-fur-arbeit-jobcenter/"],
                    ["IT Jobs English", "/guides/it-jobs-in-germany-english-speakers/"],
                    ["German CV Guide", "/guides/german-cv-template/"],
                    ["Free Consultation", "/application-form/"],
                    ["Events", "/events/"],
                  ]
                : [
                    ["Startseite (DE)", "/"],
                    ["IT-Kurse Übersicht", "/it-kurse/"],
                    ["AI Engineer", "/it-kurse/ai-engineer-weiterbildung/"],
                    ["Data Analytics", "/it-kurse/data-analytics-weiterbildung/"],
                    ["Full Stack", "/it-kurse/full-stack-entwickler-weiterbildung/"],
                    ["Cyber Security", "/it-kurse/cyber-security-weiterbildung/"],
                    ["AWS & DevOps", "/it-kurse/aws-devops-weiterbildung/"],
                    ["AWS Architect", "/it-kurse/aws-solutions-architect-weiterbildung/"],
                    ["Software Testing", "/it-kurse/software-testing-weiterbildung/"],
                    ["Kubernetes CKAD", "/it-kurse/kubernetes-ckad-zertifikat-kurs/"],
                    ["IT-Orientierung", "/it-orientierungskurs/"],
                    ["Finanzierung Hub", "/finanzierung/"],
                    ["Bildungsgutschein", "/bildungsgutschein/"],
                    ["AVGS Gutschein", "/avgs/"],
                    ["QCG Förderung", "/qualifizierungschancengesetz/"],
                    ["Ratgeber Hub", "/ratgeber/"],
                    ["Quereinstieg IT", "/ratgeber/quereinstieg-it/"],
                    ["Arbeitsagentur", "/ratgeber/weiterbildung-arbeitsagentur/"],
                    ["AI Engineer Beruf", "/ratgeber/ai-engineer/"],
                    ["SOC Analyst Beruf", "/ratgeber/soc-analyst/"],
                    ["Kostenlose Beratung", "/beratung/"],
                    ["Events", "/events/"],
                  ]
              ).map(([label, to]) => (
                <Link
                  key={to}
                  to={to}
                  className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-[#e51a59] text-gray-200 hover:text-white truncate transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Live H1 / H2 / H3 Hierarchy Audit */}
          <div>
            <p className="font-semibold text-[#f472b6] mb-1.5">
              Live Heading Hierarchy ({headings.filter((h) => h.tag === "H1").length} H1 ·{" "}
              {headings.filter((h) => h.tag === "H2").length} H2 ·{" "}
              {headings.filter((h) => h.tag === "H3").length} H3)
            </p>
            <div className="space-y-1 max-h-44 overflow-y-auto bg-black/30 rounded-xl p-2.5">
              {headings.map((h, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-2 ${
                    h.tag === "H1"
                      ? "text-emerald-300 font-bold"
                      : h.tag === "H2"
                      ? "text-sky-300 pl-2"
                      : "text-gray-300 pl-5"
                  }`}
                >
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-white/10 shrink-0">
                    {h.tag}
                  </span>
                  <span className="truncate">{h.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          style={{ backgroundColor: "#1a1d2e" }}
          className="flex items-center gap-2 text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-xl border border-white/15 hover:border-[#e51a59] transition-colors cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>SEO & Sitemap ({lang.toUpperCase()})</span>
        </button>
      )}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <ScrollAndLegacyRedirectHandler />
        <div className="min-h-screen flex flex-col bg-white">
          <Navbar />
          <main className="flex-1">
            <Routes>
              {/* =============================================================
                  HOME (DE & EN)
                  ============================================================= */}
              <Route path="/" element={<HomePage />} />

              {/* =============================================================
                  COURSES HUB (DE & EN)
                  ============================================================= */}
              <Route path="/it-kurse" element={<CoursesHubPage />} />
              <Route path="/it-kurse/" element={<CoursesHubPage />} />
              <Route path="/it-courses" element={<CoursesHubPage />} />
              <Route path="/it-courses/" element={<CoursesHubPage />} />

              {/* =============================================================
                  GERMAN COURSE PAGES (DE)
                  ============================================================= */}
              <Route
                path="/it-kurse/ai-engineer-weiterbildung/*"
                element={<CourseTemplatePage courseKey="ai-engineering" />}
              />
              <Route
                path="/it-kurse/data-analytics-weiterbildung/*"
                element={<CourseTemplatePage courseKey="data-analytics" />}
              />
              <Route
                path="/it-kurse/data-analyst-weiterbildung/*"
                element={<CourseTemplatePage courseKey="data-analytics" />}
              />
              <Route
                path="/it-kurse/full-stack-entwickler-weiterbildung/*"
                element={<CourseTemplatePage courseKey="full-stack" />}
              />
              <Route
                path="/it-kurse/cyber-security-weiterbildung/*"
                element={<CourseTemplatePage courseKey="cyber-security" />}
              />
              <Route
                path="/it-kurse/aws-devops-weiterbildung/*"
                element={<CourseTemplatePage courseKey="aws-devops" />}
              />
              <Route
                path="/it-kurse/aws-solutions-architect-weiterbildung/*"
                element={<CourseTemplatePage courseKey="aws-solutions-architect" />}
              />
              <Route
                path="/it-kurse/software-testing-weiterbildung/*"
                element={<CourseTemplatePage courseKey="sdet" />}
              />
              <Route
                path="/it-kurse/sdet-weiterbildung/*"
                element={<CourseTemplatePage courseKey="sdet" />}
              />
              <Route
                path="/it-kurse/kubernetes-ckad-zertifikat-kurs/*"
                element={<CourseTemplatePage courseKey="kubernetes-ckad" />}
              />
              <Route
                path="/it-orientierungskurs/*"
                element={<CourseTemplatePage courseKey="it-orientation" />}
              />

              {/* =============================================================
                  ENGLISH COURSE PAGES (EN)
                  ============================================================= */}
              <Route
                path="/it-courses/ai-engineering/*"
                element={<CourseTemplatePage courseKey="ai-engineering" />}
              />
              <Route
                path="/it-courses/data-analytics/*"
                element={<CourseTemplatePage courseKey="data-analytics" />}
              />
              <Route
                path="/it-courses/full-stack-developer/*"
                element={<CourseTemplatePage courseKey="full-stack" />}
              />
              <Route
                path="/it-courses/cyber-security/*"
                element={<CourseTemplatePage courseKey="cyber-security" />}
              />
              <Route
                path="/it-courses/devops-aws/*"
                element={<CourseTemplatePage courseKey="aws-devops" />}
              />
              <Route
                path="/it-courses/aws-solutions-architect/*"
                element={<CourseTemplatePage courseKey="aws-solutions-architect" />}
              />
              <Route
                path="/it-courses/software-development-engineer-in-test/*"
                element={<CourseTemplatePage courseKey="sdet" />}
              />
              <Route
                path="/it-courses/kubernetes-ckad-certification-course/*"
                element={<CourseTemplatePage courseKey="kubernetes-ckad" />}
              />
              <Route
                path="/it-orientation-course/*"
                element={<CourseTemplatePage courseKey="it-orientation" />}
              />

              {/* =============================================================
                  FUNDING & B2B PAGES (DE & EN)
                  ============================================================= */}
              <Route path="/finanzierung/*" element={<FinancingHubPage />} />
              <Route path="/financing-and-tuition/*" element={<FinancingHubPage />} />
              <Route path="/bildungsgutschein/*" element={<BildungsgutscheinPage />} />
              <Route path="/avgs/*" element={<AvgsPage />} />
              <Route path="/qualifizierungschancengesetz/*" element={<QcgPage />} />
              <Route path="/fuer-unternehmen/*" element={<CorporateTrainingPage />} />
              <Route path="/enterprise-corporate-training/*" element={<CorporateTrainingPage />} />

              {/* =============================================================
                  GUIDES & BLOGS HUB + ARTICLES (DE /ratgeber/ & EN /guides/)
                  ============================================================= */}
              <Route path="/ratgeber" element={<GuidesHubPage />} />
              <Route path="/ratgeber/" element={<GuidesHubPage />} />
              <Route path="/ratgeber/:slug" element={<GuideArticlePage />} />
              <Route path="/ratgeber/:slug/" element={<GuideArticlePage />} />

              <Route path="/guides" element={<GuidesHubPage />} />
              <Route path="/guides/" element={<GuidesHubPage />} />
              <Route path="/guides/:slug" element={<GuideArticlePage />} />
              <Route path="/guides/:slug/" element={<GuideArticlePage />} />

              {/* =============================================================
                  TRUST, EVENTS, CONSULTATION & LEGAL PAGES (DE & EN)
                  ============================================================= */}
              <Route path="/ueber-uns/*" element={<AboutPage />} />
              <Route path="/about/*" element={<AboutPage />} />
              <Route path="/erfolgsgeschichten/*" element={<SuccessStoriesPage />} />
              <Route path="/success-stories/*" element={<SuccessStoriesPage />} />
              <Route path="/karriere-management/*" element={<CareerManagementPage />} />
              <Route path="/career-management/*" element={<CareerManagementPage />} />
              <Route path="/events/*" element={<EventsPage />} />
              <Route path="/beratung/*" element={<ConsultationPage />} />
              <Route path="/application-form/*" element={<ConsultationPage />} />
              <Route path="/danke/*" element={<ThankYouPage />} />
              <Route path="/thank-you/*" element={<ThankYouPage />} />
              <Route path="/freunde-werben/*" element={<ReferFriendPage />} />
              <Route path="/refer-a-friend/*" element={<ReferFriendPage />} />
              <Route path="/kontakt/*" element={<ContactPage />} />
              <Route path="/contact/*" element={<ContactPage />} />
              <Route path="/impressum/*" element={<ImprintPage />} />
              <Route path="/imprint/*" element={<ImprintPage />} />
              <Route path="/datenschutz/*" element={<PrivacyPage />} />
              <Route path="/privacy-policy/*" element={<PrivacyPage />} />

              {/* =============================================================
                  301 REDIRECT MAPS (DE & EN Legacy URLs)
                  ============================================================= */}
              {/* DE Legacy Course URLs -> New DE Course URLs */}
              <Route
                path="/it-kurse/data-science/*"
                element={<Navigate to="/it-kurse/ai-engineer-weiterbildung/" replace />}
              />
              <Route
                path="/it-kurse/applied-ai-data-science/*"
                element={<Navigate to="/it-kurse/ai-engineer-weiterbildung/" replace />}
              />
              <Route
                path="/it-kurse/full-stack-development/*"
                element={<Navigate to="/it-kurse/full-stack-entwickler-weiterbildung/" replace />}
              />
              <Route
                path="/it-kurse/cyber-security-ops/*"
                element={<Navigate to="/it-kurse/cyber-security-weiterbildung/" replace />}
              />
              <Route
                path="/it-kurse/aws-devops/*"
                element={<Navigate to="/it-kurse/aws-devops-weiterbildung/" replace />}
              />
              <Route
                path="/it-kurse/software-testing/*"
                element={<Navigate to="/it-kurse/software-testing-weiterbildung/" replace />}
              />
              <Route
                path="/it-kurse/kubernetes-ckad/*"
                element={<Navigate to="/it-kurse/kubernetes-ckad-zertifikat-kurs/" replace />}
              />

              {/* EN Legacy Beginners & Professionals Duplicate Pages -> Single Program Page */}
              <Route
                path="/it-courses/applied-ai-data-science/*"
                element={<Navigate to="/it-courses/ai-engineering/" replace />}
              />
              <Route
                path="/it-courses/applied-ai-data-science-for-beginners/*"
                element={<Navigate to="/it-courses/ai-engineering/" replace />}
              />
              <Route
                path="/it-courses/applied-ai-data-science-for-professionals/*"
                element={<Navigate to="/it-courses/ai-engineering/" replace />}
              />
              <Route
                path="/it-courses/data-science/*"
                element={<Navigate to="/it-courses/ai-engineering/" replace />}
              />
              <Route
                path="/it-courses/full-stack-development/*"
                element={<Navigate to="/it-courses/full-stack-developer/" replace />}
              />
              <Route
                path="/it-courses/full-stack-development-for-beginners/*"
                element={<Navigate to="/it-courses/full-stack-developer/" replace />}
              />
              <Route
                path="/it-courses/full-stack-development-for-professionals/*"
                element={<Navigate to="/it-courses/full-stack-developer/" replace />}
              />
              <Route
                path="/it-courses/cyber-security-for-beginners/*"
                element={<Navigate to="/it-courses/cyber-security/" replace />}
              />
              <Route
                path="/it-courses/cyber-security-for-professionals/*"
                element={<Navigate to="/it-courses/cyber-security/" replace />}
              />
              <Route
                path="/it-courses/devops-aws-for-beginners/*"
                element={<Navigate to="/it-courses/devops-aws/" replace />}
              />
              <Route
                path="/it-courses/devops-aws-for-professionals/*"
                element={<Navigate to="/it-courses/devops-aws/" replace />}
              />
              <Route
                path="/it-courses/software-development-engineer-in-test-for-beginners/*"
                element={<Navigate to="/it-courses/software-development-engineer-in-test/" replace />}
              />
              <Route
                path="/it-courses/software-development-engineer-in-test-for-professionals/*"
                element={<Navigate to="/it-courses/software-development-engineer-in-test/" replace />}
              />
              <Route
                path="/it-courses-for-beginners/*"
                element={<Navigate to="/it-courses/" replace />}
              />
              <Route
                path="/it-courses-for-professionals/data-science/*"
                element={<Navigate to="/it-courses/ai-engineering/" replace />}
              />
              <Route
                path="/it-courses-for-professionals/*"
                element={<Navigate to="/it-courses/" replace />}
              />

              {/* Legacy Blog & FAQ Redirects */}
              <Route path="/blog/*" element={<Navigate to="/guides/" replace />} />
              <Route path="/faq/*" element={<Navigate to="/bildungsgutschein/" replace />} />
              <Route path="/uber-uns/*" element={<Navigate to="/ueber-uns/" replace />} />
              <Route path="/about-us/*" element={<Navigate to="/about/" replace />} />

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
          <SeoSitemapDrawer />
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
}
