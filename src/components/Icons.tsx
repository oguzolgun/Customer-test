import React from "react";

const PRIMARY = "#e51a59";

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

export function UsersIcon({ className = "w-5 h-5", style }: SvgIconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M14 16.5v-1a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v1M8.5 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 16.5v-1a3 3 0 0 0-2.2-2.9M13 3.1a3 3 0 0 1 0 5.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function VideoCameraIcon({ className = "w-5 h-5", style }: SvgIconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2.5" y="4.5" width="10.5" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13 8l4.5-3v10L13 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="6.5" cy="8.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function AcademicCapIcon({ className = "w-5 h-5", style }: SvgIconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 2.5L2 6.5l8 4 8-4-8-4zM4.5 8.5v4.5c0 2 2.5 3.5 5.5 3.5s5.5-1.5 5.5-3.5V8.5M18 7.5v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChatBubbleIcon({ className = "w-5 h-5", style }: SvgIconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M16 10c0 3.3-3.1 6-7 6a8.4 8.4 0 0 1-3.2-.6L2 16.5l1.3-3.3C2.5 12.1 2 11.1 2 10c0-3.3 3.1-6 7-6s7 2.7 7 6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LockClosedIcon({ className = "w-3.5 h-3.5", style }: SvgIconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="3" y="6.5" width="10" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5.5 6.5V4.5a2.5 2.5 0 0 1 5 0v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
