import React from "react";

const PRIMARY = "#e51a59";

export function IconCheck({ color = PRIMARY, size = 18 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9" stroke={color} strokeWidth="1.5" />
      <path d="M6 10l3 3 5-5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconArrow({ color = "currentColor", size = 14 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 7h8M8 4l3 3-3 3" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCalendar({ color = PRIMARY, size = 16 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="14" height="12" rx="2" stroke={color} strokeWidth="1.5" />
      <path d="M6 2v3M12 2v3M2 8h14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconUsers({ color = PRIMARY, size = 16 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="7" cy="6" r="3" stroke={color} strokeWidth="1.5" />
      <path d="M1 16c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="13" cy="6" r="2" stroke={color} strokeWidth="1.2" />
      <path d="M16 16c0-2-1.5-3.5-3-4" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function IconCode({ color = PRIMARY, size = 16 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M6 5l-4 4 4 4M12 5l4 4-4 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 3l-2 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconShield({ color = PRIMARY, size = 16 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M9 2L3 5v5c0 3.5 2.5 6 6 7 3.5-1 6-3.5 6-7V5L9 2z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M6 9l2 2 4-4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconClock({ color = PRIMARY, size = 16 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="7" stroke={color} strokeWidth="1.5" />
      <path d="M9 5.5V9l2.5 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconGraduation({ color = PRIMARY, size = 16 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M9 3L1 7l8 4 8-4-8-4z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M5 9v4c0 1.5 1.8 2.5 4 2.5s4-1 4-2.5V9" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 7v4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconBriefcase({ color = PRIMARY, size = 16 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="6" width="14" height="10" rx="2" stroke={color} strokeWidth="1.5" />
      <path d="M6 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1M2 10h14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconChart({ color = PRIMARY, size = 16 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M2 14l4-5 3 3 5-7 2 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCloud({ color = PRIMARY, size = 16 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M6.5 15h8a3.5 3.5 0 0 0 .5-6.96A5 5 0 0 0 5.2 7.1 3.5 3.5 0 0 0 6.5 15Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconSparkles({ color = PRIMARY, size = 16 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M10 2l1.8 4.2L16 8l-4.2 1.8L10 14l-1.8-4.2L4 8l4.2-1.8L10 2zM15.5 13l.8 1.7 1.7.8-1.7.8-.8 1.7-.8-1.7-1.7-.8 1.7-.8.8-1.7z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconGlobe({ color = PRIMARY, size = 16 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7.5" stroke={color} strokeWidth="1.5" />
      <path d="M2.5 10h15M10 2.5c2 2.2 3 4.8 3 7.5s-1 5.3-3 7.5c-2-2.2-3-4.8-3-7.5s1-5.3 3-7.5z" stroke={color} strokeWidth="1.4" />
    </svg>
  );
}

export function IconDownload({ color = PRIMARY, size = 15 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8.75 1.25a.75.75 0 0 0-1.5 0v6.44L5.03 5.47a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 7.69V1.25ZM2 9.25a.75.75 0 0 1 .75.75v2.5h10.5V10a.75.75 0 0 1 1.5 0v2.75A1.25 1.25 0 0 1 13.5 14h-11A1.25 1.25 0 0 1 1.25 12.75V10a.75.75 0 0 1 .75-.75Z"
        fill={color}
      />
    </svg>
  );
}

export function IconMapPin({ color = PRIMARY, size = 15 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M9 9.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" stroke={color} strokeWidth="1.5" />
      <path d="M9 16.5c4-3.5 6-6.5 6-9a6 6 0 1 0-12 0c0 2.5 2 5.5 6 9Z" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

export function IconMail({ color = PRIMARY, size = 15 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="3.5" width="14" height="11" rx="2" stroke={color} strokeWidth="1.5" />
      <path d="M2.5 4.5L9 9.5l6.5-5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconPhone({ color = PRIMARY, size = 15 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M3 3h4l1.5 3.5-2 1.5a9 9 0 0 0 3.5 3.5l1.5-2L15 11v4a1 1 0 0 1-1 1C7.4 16 2 10.6 2 4a1 1 0 0 1 1-1z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconExternal({ color = "currentColor", size = 12 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M8 2h4v4M12 2L6.5 7.5M5 3H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Stars({ count = 5, size = 14 }: { count?: number; size?: number }) {
  return (
    <div className="inline-flex gap-0.5" aria-hidden="true">
      {[...Array(count)].map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 18 18" fill={PRIMARY}>
          <path d="M9 1l2.163 4.38L16.5 6.18l-3.75 3.656.885 5.164L9 12.45l-4.635 2.55.885-5.164L1.5 6.18l5.337-.8z" />
        </svg>
      ))}
    </div>
  );
}


export interface SvgIconProps {
  className?: string;
  style?: React.CSSProperties;
}

export function CheckCircleIcon({ className = "w-4 h-4", style }: SvgIconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6.5 10.2l2.3 2.3 4.7-4.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "w-4 h-4", style }: SvgIconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3.5 8h9M9 4.5L12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DownloadIcon({ className = "w-4 h-4", style }: SvgIconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 2v8m0 0L5 7m3 3 3-3M2.5 11.5v1.5a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ShieldCheckIcon({ className = "w-4 h-4", style }: SvgIconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M9 2L3 4.8v4.7c0 3.6 2.5 6.2 6 7.2 3.5-1 6-3.6 6-7.2V4.8L9 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M6.3 9l1.9 1.9 3.6-3.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BriefcaseIcon({ className = "w-4 h-4", style }: SvgIconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="5.5" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 5.5v-1A1.5 1.5 0 0 1 7.5 3h3A1.5 1.5 0 0 1 12 4.5v1M2 9.5h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function BookOpenIcon({ className = "w-4 h-4", style }: SvgIconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M2 4a2 2 0 0 1 2-2h3.5A1.5 1.5 0 0 1 9 3.5v11A1.5 1.5 0 0 0 7.5 13H2V4Zm14 0a2 2 0 0 0-2-2h-3.5A1.5 1.5 0 0 0 9 3.5v11a1.5 1.5 0 0 1 1.5-1.5H16V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function StarIcon({ className = "w-4 h-4", style }: SvgIconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
      <path d="M9 1.5l2.2 4.4 4.8.7-3.5 3.4.8 4.8L9 12.5l-4.3 2.3.8-4.8L2 6.6l4.8-.7L9 1.5z" />
    </svg>
  );
}

export function SparklesIcon({ className = "w-4 h-4", style }: SvgIconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 2l1.8 4.2L16 8l-4.2 1.8L10 14l-1.8-4.2L4 8l4.2-1.8L10 2zM15.5 13l.8 1.7 1.7.8-1.7.8-.8 1.7-.8-1.7-1.7-.8 1.7-.8.8-1.7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CalendarIcon({ className = "w-4 h-4", style }: SvgIconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="3.5" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 2v3M12 2v3M2 7.5h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ClockIcon({ className = "w-4 h-4", style }: SvgIconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 5.5V9l2.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function GlobeIcon({ className = "w-4 h-4", style }: SvgIconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2.5 10h15M10 2.5c2 2.2 3 4.8 3 7.5s-1 5.3-3 7.5c-2-2.2-3-4.8-3-7.5s1-5.3 3-7.5z" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function AwardIcon({ className = "w-4 h-4", style }: SvgIconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="8" r="5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7.5 12.2L6 17.5l4-2 4 2-1.5-5.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ExternalLinkIcon({ className = "w-3.5 h-3.5", style }: SvgIconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M8 2h4v4M12 2L6.5 7.5M5 3H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BuildingIcon({ className = "w-4 h-4", style }: SvgIconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="3" y="2.5" width="12" height="13.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.5 6h1.5M10 6h1.5M6.5 9.5h1.5M10 9.5h1.5M7.5 16v-3h3v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function MapPinIcon({ className = "w-4 h-4", style }: SvgIconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M9 9.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 16.5c4-3.5 6-6.5 6-9a6 6 0 1 0-12 0c0 2.5 2 5.5 6 9Z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function PhoneIcon({ className = "w-4 h-4", style }: SvgIconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3 3h4l1.5 3.5-2 1.5a9 9 0 0 0 3.5 3.5l1.5-2L15 11v4a1 1 0 0 1-1 1C7.4 16 2 10.6 2 4a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MailIcon({ className = "w-4 h-4", style }: SvgIconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="3.5" width="14" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2.5 4.5L9 9.5l6.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
