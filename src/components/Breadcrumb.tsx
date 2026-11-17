import { Link } from "react-router-dom";
import type { BreadcrumbItem } from "@/components/SeoHead";
import { useLanguage } from "@/context/LanguageContext";

const PRIMARY = "#e51a59";

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  containerClassName?: string;
}

export default function Breadcrumb({
  items,
  containerClassName = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
}: BreadcrumbProps) {
  const { lang } = useLanguage();

  if (!items || items.length === 0) return null;

  const homeLabel = lang === "en" ? "Home" : "Startseite";
  const hasHome =
    items[0]?.to === "/" ||
    items[0]?.label === "Home" ||
    items[0]?.label === "Startseite";

  const fullItems: BreadcrumbItem[] = hasHome
    ? items
    : [{ label: homeLabel, to: "/" }, ...items];

  return (
    <nav
      aria-label="Breadcrumb"
      className="w-full border-b border-gray-100 bg-white/95"
      style={{ fontFamily: "'Inter', -apple-system, sans-serif" }}
    >
      <div className={`${containerClassName} py-2.5`}>
        <ol className="flex flex-wrap items-center gap-y-1 gap-x-1.5 text-xs text-gray-500">
          {fullItems.map((item, idx) => {
            const isFirst = idx === 0;
            const isLast = idx === fullItems.length - 1;
            return (
              <li key={`${item.label}-${idx}`} className="inline-flex items-center gap-1.5 min-w-0">
                {idx > 0 && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                    className="shrink-0 text-gray-400"
                  >
                    <path
                      d="M4.5 2.5L8 6l-3.5 3.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                {item.to && !isLast ? (
                  <Link
                    to={item.to}
                    className="inline-flex items-center gap-1 font-medium text-gray-500 hover:text-[#e51a59] transition-colors"
                  >
                    {isFirst && item.to === "/" && (
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="shrink-0 -mt-[1px]"
                      >
                        <path d="M3 10.5L12 3l9 7.5" />
                        <path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5" />
                      </svg>
                    )}
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <span
                    className="font-medium"
                    style={{ color: isLast ? PRIMARY : "#374151" }}
                    aria-current={isLast ? "page" : undefined}
                  >
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

export { Breadcrumb };
