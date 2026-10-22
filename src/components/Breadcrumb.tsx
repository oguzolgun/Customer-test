import { Link } from "react-router-dom";
import type { BreadcrumbItem } from "@/components/SeoHead";

const PRIMARY = "#e51a59";

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  if (!items || items.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="w-full border-b border-gray-100 bg-white/90"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-[1200px] mx-auto px-5 py-2.5">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-gray-500">
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={`${item.label}-${idx}`} className="flex items-center gap-1.5">
                {idx > 0 && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path
                      d="M4.5 2.5L8 6l-3.5 3.5"
                      stroke="#9ca3af"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                {item.to && !isLast ? (
                  <Link
                    to={item.to}
                    className="hover:underline font-medium transition-colors"
                    style={{ color: "#4b5563" }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className="font-semibold"
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
