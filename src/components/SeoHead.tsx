import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage, normalizePath } from "@/context/LanguageContext";

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface SeoHeadProps {
  title: string;
  description: string;
  path?: string;
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FaqItem[];
  noindex?: boolean;
  schemas?: Record<string, unknown>[];
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackGa4Event(
  eventName: "beratung_angefragt" | "lehrplan_download" | "Form_donusumu_qcg_de",
  params: Record<string, unknown> = {}
) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      hostname: window.location.hostname || "clarusway.de",
      ...params,
    });
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    }
  }
}

export const trackClaruswayEvent = trackGa4Event;

export function SeoHead({
  title,
  description,
  path,
  breadcrumbs = [],
  faqs = [],
  noindex = false,
  schemas = [],
  schema,
}: SeoHeadProps) {
  const { lang, hreflangPair } = useLanguage();
  const location = useLocation();
  const cleanPath = normalizePath(path || location.pathname);
  const domain = lang === "en" ? "https://en.clarusway.de" : "https://clarusway.de";
  const canonicalUrl = `${domain}${cleanPath}`;

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = title;

    function upsertMeta(attr: "name" | "property", key: string, content: string) {
      let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    }

    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:locale", lang === "en" ? "en_US" : "de_DE");
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:type", "website");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);

    // Canonical link
    let canonicalEl = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      canonicalEl.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute("href", canonicalUrl);

    // Hreflang tags
    document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());
    if (hreflangPair && hreflangPair.hasCounterpart && !noindex) {
      const deHref = `https://clarusway.de${hreflangPair.deNew}`;
      const enHref = `https://en.clarusway.de${hreflangPair.en}`;
      [
        { hreflang: "de", href: deHref },
        { hreflang: "en", href: enHref },
        { hreflang: "x-default", href: deHref },
      ].forEach(({ hreflang, href }) => {
        const link = document.createElement("link");
        link.setAttribute("rel", "alternate");
        link.setAttribute("hreflang", hreflang);
        link.setAttribute("href", href);
        document.head.appendChild(link);
      });
    }

    // JSON-LD Schemas
    document.head.querySelectorAll('script[data-cw-schema="true"]').forEach((el) => el.remove());

    const extraSchemaList = Array.isArray(schema)
      ? schema
      : schema
      ? [schema]
      : [];
    const allSchemas: Record<string, unknown>[] = [...schemas, ...extraSchemaList];

    if (breadcrumbs.length > 0) {
      allSchemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((b, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: b.label,
          ...(b.to ? { item: `${domain}${normalizePath(b.to)}` } : {}),
        })),
      });
    }

    if (faqs.length > 0) {
      allSchemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      });
    }

    allSchemas.forEach((schemaObj) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-cw-schema", "true");
      script.textContent = JSON.stringify(schemaObj);
      document.head.appendChild(script);
    });
  }, [title, description, canonicalUrl, lang, hreflangPair, noindex, breadcrumbs, faqs, schemas]);

  return null;
}


export default SeoHead;
