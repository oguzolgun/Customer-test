import { Link } from "react-router-dom";
import imgLogo from "@/imports/1440WLight-1/cdb5267869f41011e947a0d52b23ac56676c7902.png";
import { useLanguage } from "@/context/LanguageContext";
import { IconMapPin, IconMail, IconPhone } from "@/components/Icons";

const PRIMARY = "#e51a59";
const DARK = "#1a1d2e";

export default function Footer() {
  const { lang } = useLanguage();

  const columns =
    lang === "de"
      ? [
          {
            title: "IT-Kurse",
            links: [
              { label: "Alle IT-Kurse", to: "/it-kurse/" },
              { label: "AI Engineer Weiterbildung", to: "/it-kurse/ai-engineer-weiterbildung/" },
              { label: "Data Analyst Weiterbildung", to: "/it-kurse/data-analyst-weiterbildung/" },
              { label: "Full Stack Entwickler Weiterbildung", to: "/it-kurse/full-stack-entwickler-weiterbildung/" },
              { label: "Cyber Security Weiterbildung", to: "/it-kurse/cyber-security-weiterbildung/" },
              { label: "AWS & DevOps Weiterbildung", to: "/it-kurse/aws-devops-weiterbildung/" },
              { label: "AWS Solutions Architect", to: "/it-kurse/aws-solutions-architect-weiterbildung/" },
              { label: "SDET Weiterbildung", to: "/it-kurse/sdet-weiterbildung/" },
              { label: "Kubernetes CKAD Zertifikat Kurs", to: "/it-kurse/kubernetes-ckad-zertifikat-kurs/" },
              { label: "IT-Orientierungskurs", to: "/it-orientierungskurs/" },
            ],
          },
          {
            title: "Finanzierung",
            links: [
              { label: "Finanzierungswege im Überblick", to: "/finanzierung/" },
              { label: "Bildungsgutschein", to: "/bildungsgutschein/" },
              { label: "AVGS Gutschein", to: "/avgs/" },
              { label: "Qualifizierungschancengesetz (QCG)", to: "/qualifizierungschancengesetz/" },
              { label: "Für Unternehmen", to: "/fuer-unternehmen/" },
            ],
          },
          {
            title: "Ratgeber",
            links: [
              { label: "Alle Ratgeber", to: "/ratgeber/" },
              { label: "Weiterbildung über Arbeitsagentur", to: "/ratgeber/weiterbildung-arbeitsagentur/" },
              { label: "Quereinstieg in die IT", to: "/ratgeber/quereinstieg-it/" },
              { label: "SOC Analyst: Aufgaben & Gehalt", to: "/ratgeber/soc-analyst/" },
              { label: "Agentic AI einfach erklärt", to: "/ratgeber/agentic-ai/" },
              { label: "Full-Stack-Entwickler werden", to: "/ratgeber/full-stack-entwickler/" },
            ],
          },
          {
            title: "Clarusway",
            links: [
              { label: "Über uns", to: "/ueber-uns/" },
              { label: "Erfolgsgeschichten", to: "/erfolgsgeschichten/" },
              { label: "Karriere-Management", to: "/karriere-management/" },
              { label: "Events & Infoveranstaltungen", to: "/events/" },
              { label: "Kostenlose Beratung", to: "/beratung/" },
              { label: "Freunde werben", to: "/freunde-werben/" },
              { label: "Kontakt", to: "/kontakt/" },
            ],
          },
          {
            title: "Rechtliches",
            links: [
              { label: "Impressum", to: "/impressum/" },
              { label: "Datenschutz", to: "/datenschutz/" },
            ],
          },
        ]
      : [
          {
            title: "Courses",
            links: [
              { label: "All courses", to: "/it-courses/" },
              { label: "AI Engineering Bootcamp", to: "/it-courses/ai-engineering/" },
              { label: "AI-Assisted Full Stack Course", to: "/it-courses/full-stack-developer/" },
              { label: "Cyber Security Course (SOC)", to: "/it-courses/cyber-security/" },
              { label: "AWS & DevOps Engineer Training", to: "/it-courses/devops-aws/" },
              { label: "SDET Course", to: "/it-courses/software-development-engineer-in-test/" },
              { label: "Kubernetes CKAD Course", to: "/it-courses/kubernetes-ckad-certification-course/" },
              { label: "IT Orientation Course", to: "/it-orientation-course/" },
            ],
          },
          {
            title: "Funding",
            links: [
              { label: "Funding overview", to: "/financing-and-tuition/" },
              { label: "Bildungsgutschein Guide", to: "/bildungsgutschein/" },
              { label: "AVGS coaching", to: "/avgs/" },
              { label: "Qualifizierungschancengesetz", to: "/qualifizierungschancengesetz/" },
              { label: "For companies", to: "/enterprise-corporate-training/" },
            ],
          },
          {
            title: "Guides",
            links: [
              { label: "All guides", to: "/guides/" },
              { label: "What does a Data Analyst do?", to: "/guides/data-analyst/" },
              { label: "What is an AI Engineer?", to: "/guides/ai-engineer/" },
              { label: "What is a Full Stack Developer?", to: "/guides/full-stack-developer/" },
              { label: "What does a SOC Analyst do?", to: "/guides/soc-analyst/" },
              { label: "What does a DevOps Engineer do?", to: "/guides/devops-engineer/" },
            ],
          },
          {
            title: "Company",
            links: [
              { label: "About Clarusway", to: "/about/" },
              { label: "Success stories", to: "/success-stories/" },
              { label: "Career Management", to: "/career-management/" },
              { label: "Info sessions and events", to: "/events/" },
              { label: "Book a free consultation", to: "/application-form/" },
              { label: "Refer a friend", to: "/refer-a-friend/" },
              { label: "Contact", to: "/contact/" },
            ],
          },
          {
            title: "Legal",
            links: [
              { label: "Imprint", to: "/imprint/" },
              { label: "Privacy policy", to: "/privacy-policy/" },
            ],
          },
        ];

  return (
    <footer
      style={{ background: DARK, fontFamily: "'Poppins', sans-serif" }}
      className="text-white border-t border-white/10"
    >
      <div className="max-w-[1200px] mx-auto px-5 pt-16 pb-12">
        {/* Top Row: Brand + Trust Badges + Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block bg-white px-4 py-2 rounded-xl">
              <img
                src={imgLogo}
                alt="Clarusway Germany"
                width={150}
                height={38}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-xs text-gray-300 leading-relaxed max-w-sm">
              {lang === "de"
                ? "Clarusway GmbH ist ein AZAV-zertifizierter Bildungsträger in Deutschland. Live-Online-IT-Weiterbildungen mit 100 % Förderung über Bildungsgutschein (Agentur für Arbeit & Jobcenter) und Qualifizierungschancengesetz."
                : "Clarusway GmbH is an AZAV-certified education provider in Germany offering live online IT bootcamps in English, Turkish, and German — 100% fundable with a Bildungsgutschein (education voucher) from the Agentur für Arbeit or Jobcenter."}
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                "AZAV Zertifiziert",
                "AWS Select Tier Partner",
                "Bildungsgutschein 100%",
                "Kursnet / meinNOW",
              ].map((b) => (
                <span
                  key={b}
                  className="text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/15 bg-white/5 text-gray-200"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* 5 SEO Navigation Columns (No heading tags inside footer per SEO rule) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {columns.map((col) => (
              <div key={col.title} className="space-y-3">
                <div
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: "#f9a8c0" }}
                >
                  {col.title}
                </div>
                <ul className="space-y-2">
                  {col.links.map((lnk) => (
                    <li key={lnk.to + lnk.label}>
                      <Link
                        to={lnk.to}
                        className="text-xs text-gray-300 hover:text-white transition-colors leading-snug block"
                      >
                        {lnk.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row: Address, Phone, Email, Socials */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="https://maps.app.goo.gl/SC27oYYf69WPQv4CA"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <IconMapPin color={PRIMARY} size={14} />
              <span>Bataver Str. 84, 41462 Neuss, Germany</span>
            </a>
            <a
              href="mailto:kontakt@clarusway.de"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <IconMail color={PRIMARY} size={14} />
              <span>kontakt@clarusway.de</span>
            </a>
            <a
              href="tel:+4953319549998"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <IconPhone color={PRIMARY} size={14} />
              <span>+49 5331 9549998</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/clarusway-germany/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/clarusway_de/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/clarusway.de/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Facebook
            </a>
            <span className="text-gray-500">
              © {new Date().getFullYear()} Clarusway GmbH
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}


export { Footer };
