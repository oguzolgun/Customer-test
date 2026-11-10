import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// ============================================================================
// TYPES & DATA DEFINITIONS
// ============================================================================
export interface HeroCourseItem {
  id: string;
  name: string;
  oneLiner: string;
  tags: string[];
  to: string;
  iconId: "cloud" | "data-science" | "data-analytics" | "cyber" | "full-stack" | "ai" | "testing";
}

export const HERO_COURSES: Record<"en" | "de", HeroCourseItem[]> = {
  en: [
    {
      id: "cloud-devops",
      name: "Cloud & DevOps",
      oneLiner: "From cloud basics to automated pipelines.",
      tags: ["AWS", "Docker", "Kubernetes"],
      to: "/it-courses/devops-aws/",
      iconId: "cloud",
    },
    {
      id: "data-science",
      name: "Data Science",
      oneLiner: "Turn raw data into decisions with machine learning.",
      tags: ["Python", "SQL", "ML"],
      to: "/it-courses/ai-engineering/",
      iconId: "data-science",
    },
    {
      id: "data-analytics",
      name: "Data Analytics",
      oneLiner: "Analyze, visualize and tell stories with data.",
      tags: ["SQL", "BI", "Dashboards"],
      to: "/it-courses/data-analytics-bootcamp/",
      iconId: "data-analytics",
    },
    {
      id: "cyber-security",
      name: "Cyber Security",
      oneLiner: "Protect systems and data from modern threats.",
      tags: ["Threat analysis", "Risk", "Cloud security"],
      to: "/it-courses/cyber-security/",
      iconId: "cyber",
    },
    {
      id: "full-stack",
      name: "Full Stack",
      oneLiner: "Build complete web apps, AI-assisted.",
      tags: ["Frontend", "Backend", "APIs"],
      to: "/it-courses/full-stack-developer/",
      iconId: "full-stack",
    },
    {
      id: "ai-engineering",
      name: "AI Engineering",
      oneLiner: "Design and ship AI systems and agents.",
      tags: ["LLMs", "APIs", "Agentic AI"],
      to: "/it-courses/ai-engineering/",
      iconId: "ai",
    },
    {
      id: "software-testing",
      name: "Software Testing",
      oneLiner: "Automate quality with modern test frameworks.",
      tags: ["Test automation", "CI/CD", "Frameworks"],
      to: "/it-courses/software-development-engineer-in-test/",
      iconId: "testing",
    },
  ],
  de: [
    {
      id: "cloud-devops",
      name: "Cloud & DevOps",
      oneLiner: "Von Cloud-Grundlagen bis zu automatisierten CI/CD-Pipelines.",
      tags: ["AWS", "Docker", "Kubernetes"],
      to: "/it-kurse/aws-devops-weiterbildung/",
      iconId: "cloud",
    },
    {
      id: "data-science",
      name: "Data Science",
      oneLiner: "Aus Daten präzise Vorhersagen und ML-Modelle entwickeln.",
      tags: ["Python", "SQL", "ML"],
      to: "/it-kurse/ai-engineer-weiterbildung/",
      iconId: "data-science",
    },
    {
      id: "data-analytics",
      name: "Data Analytics",
      oneLiner: "Daten analysieren, visualisieren und Dashboards bauen.",
      tags: ["SQL", "BI", "Dashboards"],
      to: "/it-kurse/data-analytics-weiterbildung/",
      iconId: "data-analytics",
    },
    {
      id: "cyber-security",
      name: "Cyber Security",
      oneLiner: "Systeme schützen, Angriffe abwehren und Cloud sichern.",
      tags: ["Bedrohungsanalyse", "Risiko", "Cloud-Sicherheit"],
      to: "/it-kurse/cyber-security-weiterbildung/",
      iconId: "cyber",
    },
    {
      id: "full-stack",
      name: "Full Stack",
      oneLiner: "Moderne Web-Apps entwickeln — KI-unterstützt.",
      tags: ["Frontend", "Backend", "APIs"],
      to: "/it-kurse/full-stack-entwickler-weiterbildung/",
      iconId: "full-stack",
    },
    {
      id: "ai-engineering",
      name: "AI Engineering",
      oneLiner: "LLM-Anwendungen, RAG und autonome Agenten bauen.",
      tags: ["LLMs", "APIs", "Agentic AI"],
      to: "/it-kurse/ai-engineer-weiterbildung/",
      iconId: "ai",
    },
    {
      id: "software-testing",
      name: "Software Testing",
      oneLiner: "Qualitätssicherung und moderne Testautomatisierung.",
      tags: ["Testautomatisierung", "CI/CD", "Frameworks"],
      to: "/it-kurse/software-testing-weiterbildung/",
      iconId: "testing",
    },
  ],
};

// Germany anchor location & distant origins for arcs
const GERMANY_COORDS: [number, number] = [51.2, 9.0]; // [lat, lon]
const ARC_ORIGINS: [number, number][] = [
  [40.71, -74.00], // New York
  [-23.55, -46.63], // São Paulo
  [6.52, 3.38], // Lagos
  [41.01, 28.98], // Istanbul
  [19.07, 72.88], // Mumbai
  [35.68, 139.76], // Tokyo
];

// ============================================================================
// MINIMAL GEOMETRIC INSTRUMENT ICON (Auros-style 1.5px crisp vector strokes)
// ============================================================================
function CourseLineIcon({
  iconId,
  className = "w-3.5 h-3.5",
}: {
  iconId: HeroCourseItem["iconId"];
  className?: string;
}) {
  switch (iconId) {
    case "cloud":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.55} strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M6.5 19h11a4.5 4.5 0 0 0 .9-8.9A5.5 5.5 0 0 0 7.7 8.4 4.2 4.2 0 0 0 6.5 19Z" />
        </svg>
      );
    case "data-science":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.55} strokeLinecap="round" strokeLinejoin="round" className={className}>
          <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(35 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(-35 12 12)" />
          <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
        </svg>
      );
    case "data-analytics":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.65} strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M4 19h16" />
          <path d="M7 19v-5" />
          <path d="M12 19V9" />
          <path d="M17 19V5" />
        </svg>
      );
    case "cyber":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.55} strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12 3l7 3v5c0 4.5-3 8.4-7 10-4-1.6-7-5.5-7-10V6l7-3Z" />
          <path d="M9.5 12l1.8 1.8 3.4-3.6" />
        </svg>
      );
    case "full-stack":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="m8 8-4 4 4 4" />
          <path d="m16 8 4 4-4 4" />
          <path d="m13.5 6-3 12" />
        </svg>
      );
    case "ai":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.55} strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z" />
          <circle cx="12" cy="10" r="1.1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "testing":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.55} strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <path d="m8.5 12.2 2.3 2.3 4.7-4.8" />
        </svg>
      );
  }
}

// ============================================================================
// MAIN HERO SHOWPIECE COMPONENT
// ============================================================================
export function ClaruswayHeroShowpiece({ isEn = true }: { isEn?: boolean }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const nodesOverlayRef = useRef<HTMLDivElement | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const occludedRef = useRef<boolean[]>(new Array(7).fill(false));
  const activeIndexRef = useRef(activeIndex);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const courses = isEn ? HERO_COURSES.en : HERO_COURSES.de;

  // Auto-cycle every 4.5s (pauses on hover/focus)
  // Automatically advances to the next visible course on the front of the globe!
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        for (let offset = 1; offset <= courses.length; offset++) {
          const nextIdx = (prev + offset) % courses.length;
          if (!occludedRef.current[nextIdx]) {
            return nextIdx;
          }
        }
        return (prev + 1) % courses.length;
      });
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, courses.length]);

  // THREE.JS SHOWPIECE SCENE
  useEffect(() => {
    const THREE = (window as any).THREE;
    if (!THREE || !canvasRef.current || !containerRef.current) return;

    const DEG = Math.PI / 180;
    const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Dimensions
    let W = containerRef.current.clientWidth || 800;
    let H = containerRef.current.clientHeight || 800;

    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(W, H);
    const PR = renderer.getPixelRatio();

    const scene = new THREE.Scene();

    // Enlarged globe proportion inside canvas with crisp margin for right-side wave scatter
    const camera = new THREE.PerspectiveCamera(34, W / H, 0.1, 100);
    camera.position.set(0, 0, 21.6);

    // Helpers
    const R = 4.55; // Larger, commanding particle globe core radius
    const ORBIT_R = R * 1.13; // Balanced instrument orbit radius around enlarged globe
    function llToVec3(lat: number, lon: number, radius: number) {
      const phi = (90 - lat) * DEG;
      const theta = (lon + 180) * DEG;
      return new THREE.Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );
    }

    // World Root Groups
    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // Globe Spin Group
    const globeSpin = new THREE.Group();
    worldGroup.add(globeSpin);

    // Center Germany initially: [lat 51.2, lon 9.0]
    const initialGerRotY = -Math.PI / 2 - GERMANY_COORDS[1] * DEG;
    globeSpin.rotation.x = 0.38;
    globeSpin.rotation.y = initialGerRotY;

    // Shared interactive fluid uniforms & wave erosion field (Clarusway x Auros wave-scatter)
    const gGermanyPos = llToVec3(GERMANY_COORDS[0], GERMANY_COORDS[1], 1.0).normalize();
    const uMouseLocalShared = { value: gGermanyPos.clone() };
    const uHoverShared = { value: 0.0 };
    const uReducedVal = REDUCED ? 1.0 : 0.0;

    // Shared 3D view-aligned S-wave dissolution boundary:
    // intact dense left/upper-center -> curved concave wave bay -> billowing right scatter
    const GLSL_WAVE_ERODE = `
      float waveErode(vec3 wp, float t) {
        float diag = wp.x - wp.y * 0.26 + wp.z * 0.14;
        float bay = 0.24 * sin(wp.y * 3.1 - t * 0.85 + wp.z * 1.2)
                  + 0.14 * cos(wp.y * 5.8 + t * 0.65 - wp.x * 2.1)
                  + 0.07 * sin(wp.z * 4.8 - wp.y * 4.4 + t * 1.15);
        return diag + bay - 0.18;
      }
    `;

    // ------------------------------------------------------------------------
    // 1. SOFT PLUM INNER VOLUME GLOW (Dissolves along the exact same wave cut
    //    so there is NO hard geometric circle outline on the broken particle side)
    // ------------------------------------------------------------------------
    const sphereBodyGeom = new THREE.SphereGeometry(R * 0.965, 64, 64);
    const sphereBodyMat = new THREE.ShaderMaterial({
      transparent: true,
      blending: THREE.NormalBlending,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uMouseLocal: uMouseLocalShared,
        uHover: uHoverShared,
        uReduced: { value: uReducedVal },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vView;
        varying vec3 vObjPos;
        varying vec3 vWorldDir;
        void main() {
          vObjPos = normalize(position);
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldDir = normalize(worldPos.xyz);
          vec4 mv = viewMatrix * worldPos;
          vNormal = normalize(normalMatrix * normal);
          vView = normalize(-mv.xyz);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uMouseLocal;
        uniform float uHover;
        uniform float uReduced;
        varying vec3 vNormal;
        varying vec3 vView;
        varying vec3 vObjPos;
        varying vec3 vWorldDir;
        ${GLSL_WAVE_ERODE}
        void main() {
          float t = uTime * 0.55 * (1.0 - uReduced);
          float erode = waveErode(normalize(vWorldDir), t);
          float intactMask = 1.0 - smoothstep(-0.14, 0.22, erode);
          if (intactMask <= 0.005) discard;

          float ndotv = clamp(dot(vNormal, vView), 0.0, 1.0);
          // Feather edge softly so the outer silhouette is formed by dense particles
          float rimFeather = smoothstep(0.05, 0.46, ndotv);
          float alpha = 0.90 * rimFeather * intactMask;

          vec3 p = normalize(vObjPos);
          float mouseDist = length(p - normalize(uMouseLocal));
          float hoverInfluence = uHover * exp(-mouseDist * 4.2);

          // Organic liquid wine-plum interior currents
          vec3 q = vec3(
            sin(p.y * 3.4 + p.z * 2.1 + t * 0.6),
            sin(p.z * 3.1 - p.x * 2.6 + t * 0.5),
            sin(p.x * 2.9 + p.y * 2.4 - t * 0.45)
          );
          float flow = smoothstep(-0.4, 0.85, sin(p.x * 3.8 + q.y * 2.1 + t * 0.4) * cos(p.y * 3.4 - q.z * 1.9));

          vec3 plumAbyss   = vec3(0.071, 0.024, 0.059); // #12060F
          vec3 plumCenter  = vec3(0.175, 0.055, 0.145); // #2A0F24
          vec3 wineCurrent = vec3(0.541, 0.110, 0.290); // #8A1C4A
          vec3 crimsonGlow = vec3(0.898, 0.145, 0.310); // #E5254F

          float ndotvSafe = max(ndotv, 0.0001);
          vec3 base = mix(plumAbyss, plumCenter, pow(ndotvSafe, 0.72));
          base = mix(base, wineCurrent, flow * 0.55);

          float waveEdge = smoothstep(-0.22, 0.08, erode) * (1.0 - smoothstep(0.08, 0.22, erode));
          base += crimsonGlow * (waveEdge * 0.32 + hoverInfluence * 0.22);

          gl_FragColor = vec4(base, alpha);
        }
      `,
    });
    const sphereBody = new THREE.Mesh(sphereBodyGeom, sphereBodyMat);
    globeSpin.add(sphereBody);

    // Subtle Atmosphere Glow Shell (only hugging intact wave hemisphere)
    const atmoGeom = new THREE.SphereGeometry(R * 1.11, 48, 48);
    const atmoMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      transparent: true,
      blending: THREE.NormalBlending,
      depthWrite: false,
      uniforms: {
        uColor: { value: new THREE.Color(0xe5254f) },
        uTime: { value: 0 },
        uHover: uHoverShared,
        uReduced: { value: uReducedVal },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vWorldDir;
        void main() {
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldDir = normalize(worldPos.xyz);
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        uniform float uTime;
        uniform float uHover;
        uniform float uReduced;
        varying vec3 vNormal;
        varying vec3 vWorldDir;
        ${GLSL_WAVE_ERODE}
        void main() {
          float t = uTime * 0.55 * (1.0 - uReduced);
          float erode = waveErode(normalize(vWorldDir), t);
          float intactMask = 1.0 - smoothstep(-0.05, 0.45, erode);
          float rimBase = max(0.66 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 0.0);
          float intensity = rimBase * rimBase * rimBase * 0.38 * intactMask;
          vec3 roseHalo = mix(uColor, vec3(0.949, 0.651, 0.737), 0.35);
          gl_FragColor = vec4(roseHalo, intensity * (0.20 + 0.08 * uHover));
        }
      `,
    });
    const atmoSphere = new THREE.Mesh(atmoGeom, atmoMat);
    globeSpin.add(atmoSphere);

    // ------------------------------------------------------------------------
    // 2. ORTHOGRAPHIC DOTTED CONTINENTS (Synced with wavy wave-scatter boundary)
    // ------------------------------------------------------------------------
    let dotsPoints: any = null;
    let dotsMat: any = null;
    let disposed = false;

    function createDots(mask: Uint8ClampedArray | null, mw: number, mh: number) {
      if (disposed) return;
      const N = mask ? 16000 : 9000;
      const pos: number[] = [];
      const isGer: number[] = [];
      const seeds: number[] = [];

      let dotSeed = 1337;
      const nextDotRand = () => {
        dotSeed = (dotSeed * 1664525 + 1013904223) >>> 0;
        return dotSeed / 4294967296;
      };

      for (let i = 0; i < N; i++) {
        const y = 1 - (i / (N - 1)) * 2;
        const rr = Math.sqrt(Math.max(0, 1 - y * y));
        const theta = i * 2.399963229728653; // Golden angle
        const x = Math.cos(theta) * rr;
        const z = Math.sin(theta) * rr;

        const lat = Math.asin(y) / DEG;
        const lon = Math.atan2(-z, x) / DEG;

        if (mask) {
          const u = Math.floor(((lon + 180) / 360) * mw) % mw;
          const v = Math.min(mh - 1, Math.floor(((90 - lat) / 180) * mh));
          // If water (value > 110 in earth-water.png mask), skip!
          if (mask[(v * mw + u) * 4] > 110) continue;
        }

        const rDot = R + 0.015;
        pos.push(x * rDot, y * rDot, z * rDot);

        // Germany highlight region
        const dotVec = new THREE.Vector3(x, y, z).normalize();
        const distToGer = Math.acos(Math.min(1, Math.max(-1, dotVec.dot(gGermanyPos)))) / DEG;
        isGer.push(distToGer < 12 ? 1.0 : 0.0);
        seeds.push(nextDotRand());
      }

      const geom = new THREE.BufferGeometry();
      geom.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
      geom.setAttribute("aIsGermany", new THREE.Float32BufferAttribute(isGer, 1));
      geom.setAttribute("aSeed", new THREE.Float32BufferAttribute(seeds, 1));

      dotsMat = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        uniforms: {
          uTime: { value: 0 },
          uPR: { value: PR },
          uIntroSweep: { value: REDUCED ? Math.PI : 0.1 },
          uGermanyDir: { value: gGermanyPos },
          uMouseLocal: uMouseLocalShared,
          uHover: uHoverShared,
          uReduced: { value: uReducedVal },
          uRadius: { value: R },
        },
        vertexShader: `
          attribute float aIsGermany;
          attribute float aSeed;
          uniform float uPR;
          uniform float uTime;
          uniform float uIntroSweep;
          uniform vec3 uGermanyDir;
          uniform vec3 uMouseLocal;
          uniform float uHover;
          uniform float uReduced;
          uniform float uRadius;
          varying float vAlpha;
          varying vec3 vColor;
          ${GLSL_WAVE_ERODE}
          void main() {
            vec3 ptNorm = normalize(position);
            float t = uTime * 0.55 * (1.0 - uReduced);

            vec4 worldPos = modelMatrix * vec4(position, 1.0);
            vec3 wp = normalize(worldPos.xyz);
            float erode = waveErode(wp, t);
            float scatter = smoothstep(-0.04, 0.85, erode);

            // Keep Germany crisp; allow eastern continents to peel gently into the wave scatter
            float gerLock = aIsGermany > 0.5 ? 0.15 : 1.0;
            float scatterEff = scatter * gerLock;

            float mouseDist = length(ptNorm - normalize(uMouseLocal));
            float hoverPush = uHover * exp(-mouseDist * 4.5);

            // Scatter displacement matching particle cloud (frustum-safe)
            vec3 driftDir = normalize(vec3(1.15, -0.15 + 0.3 * (aSeed - 0.5), 0.14));
            worldPos.xyz += driftDir * (scatterEff * (0.25 + 0.85 * aSeed) * uRadius * 0.24);
            worldPos.xyz += wp * (hoverPush * 0.14);

            vec4 mv = viewMatrix * worldPos;
            vec3 viewNorm = normalize(normalMatrix * ptNorm);
            float facing = dot(viewNorm, normalize(-mv.xyz));
            float frontMask = smoothstep(-0.18, 0.25, facing);

            // Radial sweep intro starting from Germany
            float angFromGer = acos(clamp(dot(ptNorm, uGermanyDir), -1.0, 1.0));
            float sweepFactor = 1.0 - smoothstep(uIntroSweep - 0.15, uIntroSweep + 0.25, angFromGer);

            float limbAlpha = mix(0.50, 0.90, pow(max(facing, 0.0001), 0.65));
            vAlpha = limbAlpha * frontMask * sweepFactor * (1.0 - scatterEff * 0.55);

            if (aIsGermany > 0.5) {
              vColor = mix(vec3(0.898, 0.145, 0.310), vec3(1.0, 0.88, 0.94), 0.22 + 0.22 * sin(uTime * 3.2));
              vAlpha = frontMask * sweepFactor * (0.92 + 0.08 * sin(uTime * 3.5));
            } else {
              vec3 rose = vec3(0.949, 0.651, 0.737);     // #F2A6BC (over dark dome)
              vec3 mist = vec3(0.992, 0.914, 1.000);     // #FDE9FF
              vec3 wine = vec3(0.541, 0.110, 0.290);     // #8A1C4A (scattered over light canvas)
              vec3 crispOverDark = mix(rose, mist, aSeed * 0.45 + hoverPush * 0.4);
              vColor = mix(crispOverDark, wine, smoothstep(0.05, 0.45, scatterEff));
            }

            float sz = (aIsGermany > 0.5 ? 2.35 : (1.35 + hoverPush * 0.7)) * uPR * (16.5 / -mv.z);
            gl_PointSize = sz;
            gl_Position = projectionMatrix * mv;
          }
        `,
        fragmentShader: `
          varying float vAlpha;
          varying vec3 vColor;
          void main() {
            if (vAlpha <= 0.01) discard;
            vec2 c = gl_PointCoord - vec2(0.5);
            float d = length(c);
            if (d > 0.5) discard;
            float smoothEdge = 1.0 - smoothstep(0.16, 0.5, d);
            gl_FragColor = vec4(vColor, vAlpha * smoothEdge);
          }
        `,
      });

      dotsPoints = new THREE.Points(geom, dotsMat);
      globeSpin.add(dotsPoints);
    }

    // Load land mask image or fallback
    const img = new Image();
    img.crossOrigin = "anonymous";
    let maskProcessed = false;
    const processMask = (data: Uint8ClampedArray | null, w: number, h: number) => {
      if (maskProcessed || disposed) return;
      maskProcessed = true;
      createDots(data, w, h);
    };
    img.onload = () => {
      const c = document.createElement("canvas");
      c.width = 1024;
      c.height = 512;
      const ctx = c.getContext("2d");
      if (ctx) {
        ctx.drawImage(img, 0, 0, 1024, 512);
        try {
          processMask(ctx.getImageData(0, 0, 1024, 512).data, 1024, 512);
        } catch {
          processMask(null, 1024, 512);
        }
      } else {
        processMask(null, 1024, 512);
      }
    };
    img.onerror = () => processMask(null, 1024, 512);
    img.src = "/images/earth-water.png";
    const maskFallbackTimer = window.setTimeout(() => processMask(null, 1024, 512), 2500);

    // ------------------------------------------------------------------------
    // 2B. WAVY DISSOLVING PARTICLE SPHERE (Auros "dalgalı dağınık" effect in Clarusway palette)
    //     Dense micro-granular sphere crust -> S-wave crest -> swirling right-side scatter cloud
    // ------------------------------------------------------------------------
    const CLOUD_COUNT = 28000;
    const cloudPos = new Float32Array(CLOUD_COUNT * 3);
    const cloudRand = new Float32Array(CLOUD_COUNT * 3);
    const cloudSeed = new Float32Array(CLOUD_COUNT);

    let cSeedState = 88421;
    const nextCloudRand = () => {
      cSeedState = (cSeedState * 1664525 + 1013904223) >>> 0;
      return cSeedState / 4294967296;
    };

    for (let i = 0; i < CLOUD_COUNT; i++) {
      // Fibonacci sphere base + slight organic angular jitter so no grid moiré appears
      const yBase = 1 - (i / (CLOUD_COUNT - 1)) * 2;
      const yJit = Math.max(-0.999, Math.min(0.999, yBase + (nextCloudRand() - 0.5) * 0.015));
      const rr = Math.sqrt(Math.max(0, 1 - yJit * yJit));
      const theta = i * 2.399963229728653 + (nextCloudRand() - 0.5) * 0.08;
      const x = Math.cos(theta) * rr;
      const z = Math.sin(theta) * rr;

      // Rich granular shell depth (0.94 .. 1.02 * R)
      const rFactor = 0.94 + 0.08 * Math.pow(nextCloudRand(), 0.65);
      const rad = R * rFactor;

      cloudPos[i * 3 + 0] = x * rad;
      cloudPos[i * 3 + 1] = yJit * rad;
      cloudPos[i * 3 + 2] = z * rad;

      cloudRand[i * 3 + 0] = nextCloudRand();
      cloudRand[i * 3 + 1] = nextCloudRand();
      cloudRand[i * 3 + 2] = nextCloudRand();
      cloudSeed[i] = nextCloudRand();
    }

    const fluidGeom = new THREE.BufferGeometry();
    fluidGeom.setAttribute("position", new THREE.BufferAttribute(cloudPos, 3));
    fluidGeom.setAttribute("aRand", new THREE.BufferAttribute(cloudRand, 3));
    fluidGeom.setAttribute("aSeed", new THREE.BufferAttribute(cloudSeed, 1));

    const fluidSwarmMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
      uniforms: {
        uTime: { value: 0 },
        uPR: { value: PR },
        uIntroSweep: { value: REDUCED ? Math.PI : 0.1 },
        uGermanyDir: { value: gGermanyPos },
        uMouseLocal: uMouseLocalShared,
        uHover: uHoverShared,
        uReduced: { value: uReducedVal },
        uRadius: { value: R },
      },
      vertexShader: `
        attribute vec3 aRand;
        attribute float aSeed;

        uniform float uTime;
        uniform float uPR;
        uniform float uIntroSweep;
        uniform vec3 uGermanyDir;
        uniform vec3 uMouseLocal;
        uniform float uHover;
        uniform float uReduced;
        uniform float uRadius;

        varying float vAlpha;
        varying vec3 vColor;
        varying float vCoreMask;

        ${GLSL_WAVE_ERODE}

        void main() {
          vec3 ptNorm = normalize(position);
          float tWave = uTime * 0.55 * (1.0 - uReduced);
          float tSwirl = uTime * (1.0 - uReduced);

          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vec3 wp = normalize(worldPos.xyz);

          float erode = waveErode(wp, tWave);
          // Smooth transition across the breaking wave boundary
          float scatter = smoothstep(-0.08, 0.90, erode);

          // Luminous ridge right where dense sphere peels into dispersed particles
          float ridgeDiff = (erode - 0.02) * 4.2;
          float ridge = exp(-(ridgeDiff * ridgeDiff));

          // Micro jitter on intact crust + billowing 3D wave dispersion into right space
          vec3 microJit = vec3(
            sin(tSwirl * 1.2 + aRand.x * 24.0),
            cos(tSwirl * 1.05 + aRand.y * 22.0),
            sin(tSwirl * 1.15 + aRand.z * 26.0)
          ) * (0.025 + ridge * 0.06) * (1.0 - uReduced);

          vec3 driftDir = normalize(mix(
            wp,
            vec3(1.0, -0.14 + (aRand.y - 0.5) * 0.62, 0.12 + (aRand.z - 0.5) * 0.50),
            0.65
          ));
          float travelDist = scatter * (0.18 + 1.05 * pow(max(aRand.x, 0.0001), 0.88)) * uRadius * 0.22;

          vec3 swirl = vec3(
            sin(tSwirl * 0.92 + aRand.y * 16.0 + erode * 2.8),
            cos(tSwirl * 0.78 + aRand.z * 18.0 + wp.y * 3.0),
            sin(tSwirl * 0.85 + aRand.x * 14.0)
          ) * (scatter * (0.12 + 0.32 * aRand.y));

          // Cursor hover wave ripple
          float mouseDist = length(ptNorm - normalize(uMouseLocal));
          float hoverInfluence = uHover * exp(-mouseDist * 3.8);

          worldPos.xyz += microJit + driftDir * travelDist + swirl + wp * (ridge * 0.10 * aSeed + hoverInfluence * 0.22);

          vec4 mv = viewMatrix * worldPos;
          vec3 viewNorm = normalize(normalMatrix * ptNorm);
          float facing = dot(viewNorm, normalize(-mv.xyz));

          // Intact crust culls back hemisphere cleanly; scattered clouds swirl visibly in full 3D depth
          float backCull = smoothstep(-0.22, 0.14, facing);
          float hemMask = mix(backCull, 1.0, smoothstep(0.05, 0.40, scatter));

          // Reveal with page-load radial sweep from Germany
          float angFromGer = acos(clamp(dot(ptNorm, uGermanyDir), -1.0, 1.0));
          float sweepFactor = 1.0 - smoothstep(uIntroSweep - 0.15, uIntroSweep + 0.35, angFromGer);

          float twinkle = 0.70 + 0.30 * sin(tSwirl * 2.4 + aSeed * 25.0 + erode * 4.0);

          // Determine whether particle lies over dark plum dome vs open light #FFF4F6 background
          float overDome = (1.0 - smoothstep(-0.10, 0.22, erode)) * smoothstep(0.08, 0.45, max(facing, 0.0));
          vCoreMask = overDome;

          // Clarusway palette calibrated for BOTH surfaces:
          // 1) Over dark dome: deep plum grain + crimson + soft rose + bright lavender-white glints
          // 2) Over light #FFF4F6 scatter space: crisp dark wine, obsidian plum & crimson specks
          vec3 deepPlum  = vec3(0.118, 0.035, 0.094); // #1E0918
          vec3 darkWine  = vec3(0.541, 0.110, 0.290); // #8A1C4A
          vec3 crimson   = vec3(0.898, 0.145, 0.310); // #E5254F
          vec3 softRose  = vec3(0.949, 0.651, 0.737); // #F2A6BC
          vec3 pearlPink = vec3(0.992, 0.914, 1.000); // #FDE9FF

          vec3 domeTone = aSeed < 0.28
            ? mix(deepPlum, darkWine, aSeed * 2.5)
            : (aSeed < 0.78
              ? mix(crimson, softRose, (aSeed - 0.28) * 2.0)
              : mix(softRose, pearlPink, 0.55 + 0.45 * twinkle));
          domeTone = mix(domeTone, pearlPink, ridge * 0.45 + hoverInfluence * 0.45);

          vec3 openTone = aRand.z < 0.36
            ? mix(deepPlum, darkWine, aRand.y)
            : mix(darkWine, crimson, 0.45 + 0.55 * aSeed);

          vColor = mix(openTone, domeTone, overDome);

          // Natural fading aerosol scatter tail on far right
          float scatterFade = 1.0 - smoothstep(0.45, 1.0, scatter) * (0.35 + 0.40 * aRand.x);
          float baseOp = mix(0.92, 0.78, scatter) * twinkle;
          vAlpha = hemMask * sweepFactor * scatterFade * baseOp;

          // Crisp varied micro-grain sizes (many fine dots + bright sparse foreground specks)
          float powSeed = aSeed * aSeed;
          float szBase = 1.25 + powSeed * 2.45 + ridge * 0.65 + hoverInfluence * 0.85;
          float scatterShrink = 1.0 - scatter * 0.22 * (1.0 - aRand.z);
          gl_PointSize = szBase * scatterShrink * uPR * (16.5 / -mv.z);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: `
        varying float vAlpha;
        varying vec3 vColor;
        varying float vCoreMask;
        void main() {
          if (vAlpha <= 0.01) discard;
          vec2 c = gl_PointCoord - vec2(0.5);
          float d = length(c);
          if (d > 0.5) discard;
          // Crisp granular particle edge with soft core sparkle
          float edge = 1.0 - smoothstep(0.18, 0.5, d);
          float core = 1.0 - smoothstep(0.0, 0.22, d);
          vec3 col = mix(vColor, vec3(1.0, 0.94, 0.98), core * 0.35 * vCoreMask);
          gl_FragColor = vec4(col, vAlpha * edge);
        }
      `,
    });
    const fluidSwarmPoints = new THREE.Points(fluidGeom, fluidSwarmMat);
    globeSpin.add(fluidSwarmPoints);

    // ------------------------------------------------------------------------
    // 3. GERMANY ANCHOR & PULSING PIN
    // ------------------------------------------------------------------------
    const gerPos = llToVec3(GERMANY_COORDS[0], GERMANY_COORDS[1], R + 0.04);
    const pinGroup = new THREE.Group();
    pinGroup.position.copy(gerPos);
    pinGroup.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), gerPos.clone().normalize());
    globeSpin.add(pinGroup);

    // Central white dot
    const pinDot = new THREE.Mesh(
      new THREE.CircleGeometry(0.065, 24),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    pinGroup.add(pinDot);

    // Two expanding pulse rings (2.4s loop in #E5254F)
    const pulseRings: { mesh: any; offset: number }[] = [];
    for (let i = 0; i < 2; i++) {
      const ringMesh = new THREE.Mesh(
        new THREE.RingGeometry(0.065, 0.095, 32),
        new THREE.MeshBasicMaterial({
          color: 0xe5254f,
          transparent: true,
          side: THREE.DoubleSide,
          depthWrite: false,
        })
      );
      ringMesh.position.z = 0.002 * (i + 1);
      pinGroup.add(ringMesh);
      pulseRings.push({ mesh: ringMesh, offset: i * 0.5 });
    }

    // ------------------------------------------------------------------------
    // 4. 6 GREAT-CIRCLE ARCS WITH TRAVELLING LIGHT COMETS
    // ------------------------------------------------------------------------
    const arcMaterials: any[] = [];
    ARC_ORIGINS.forEach((orig, idx) => {
      const startPt = llToVec3(orig[0], orig[1], R + 0.02);
      const endPt = gerPos.clone();
      const angle = startPt.angleTo(endPt);
      const midCtrl = startPt
        .clone()
        .add(endPt)
        .normalize()
        .multiplyScalar(R + 0.45 + angle * 0.95);

      const curve = new THREE.QuadraticBezierCurve3(startPt, midCtrl, endPt);
      const points = curve.getPoints(80);
      const geom = new THREE.BufferGeometry().setFromPoints(points);

      const progressAttr = new Float32Array(points.length);
      for (let p = 0; p < points.length; p++) progressAttr[p] = p / (points.length - 1);
      geom.setAttribute("aProgress", new THREE.BufferAttribute(progressAttr, 1));

      const arcMat = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: {
          uTime: { value: 0 },
          uOffset: { value: (idx * 0.17) % 1.0 },
          uSpeed: { value: 0.18 + (idx % 3) * 0.06 },
        },
        vertexShader: `
          attribute float aProgress;
          varying float vProgress;
          varying float vFacing;
          void main() {
            vProgress = aProgress;
            vec3 viewNorm = normalize(normalMatrix * normalize(position));
            vFacing = viewNorm.z;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime;
          uniform float uOffset;
          uniform float uSpeed;
          varying float vProgress;
          varying float vFacing;
          void main() {
            // Travelling dot along arc
            float head = fract(uTime * uSpeed + uOffset);
            float d = head - vProgress;
            float trail = d > 0.0 ? exp(-d * 9.0) : 0.0;

            float frontMask = smoothstep(-0.18, 0.22, vFacing);
            // Thin crimson arc line fading towards origin & back hemisphere
            float lineAlpha = 0.08 * vProgress;
            float dotAlpha = trail * 0.85;
            float alpha = (lineAlpha + dotAlpha) * frontMask;

            vec3 crimson = vec3(0.898, 0.145, 0.310);
            vec3 whiteLight = vec3(1.0, 0.85, 0.92);
            vec3 c = mix(crimson, whiteLight, trail * trail);

            gl_FragColor = vec4(c * alpha, alpha);
          }
        `,
      });

      arcMaterials.push(arcMat);
      globeSpin.add(new THREE.Line(geom, arcMat));
    });

    // ------------------------------------------------------------------------
    // 5. COURSE ORBIT RING (radius ≈ 1.13 * R, tilted ~-18°, depth-aware)
    // ------------------------------------------------------------------------
    const ringGroup = new THREE.Group();
    // Tilt ~ -18°
    ringGroup.rotation.x = 0.48;
    ringGroup.rotation.z = -0.31;
    worldGroup.add(ringGroup);

    const ringSpin = new THREE.Group();
    ringGroup.add(ringSpin);

    const RING_SEGS = 400;
    const ringPos = new Float32Array(RING_SEGS * 3);
    for (let i = 0; i < RING_SEGS; i++) {
      const a = (i / (RING_SEGS - 1)) * Math.PI * 2;
      ringPos[i * 3 + 0] = Math.cos(a) * ORBIT_R;
      ringPos[i * 3 + 1] = 0;
      ringPos[i * 3 + 2] = Math.sin(a) * ORBIT_R;
    }
    const ringGeom = new THREE.BufferGeometry();
    ringGeom.setAttribute("position", new THREE.BufferAttribute(ringPos, 3));

    // Depth-aware hairline orbit trace (ultra-subtle instrument aesthetic)
    const orbitRingMat = new THREE.ShaderMaterial({
      transparent: true,
      depthTest: true,
      depthWrite: false,
      uniforms: {
        uRadius: { value: R * 0.96 },
      },
      vertexShader: `
        varying vec3 vWorldPos;
        void main() {
          vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uRadius;
        varying vec3 vWorldPos;
        void main() {
          float distToCenter = length(vWorldPos.xy);
          vec3 c = distToCenter < uRadius ? vec3(0.992, 0.914, 1.0) : vec3(0.541, 0.110, 0.290);
          float alpha = distToCenter < uRadius ? 0.09 : 0.08;
          gl_FragColor = vec4(c, alpha);
        }
      `,
    });
    ringSpin.add(new THREE.Line(ringGeom, orbitRingMat));

    // ------------------------------------------------------------------------
    // 6. DRAG, POINTER RAY-SPHERE HOVER & ROTATION WITH INERTIA (Scroll does NOT hijack)
    // ------------------------------------------------------------------------
    let dragging = false;
    let lastPointerX = 0;
    let lastPointerY = 0;
    let velRotY = 0;
    let velRotX = 0;

    // Fluid ray-sphere pointer hover state
    let hoverTarget = 0;
    let hoverCurrent = 0;
    const mouseLocalTarget = gGermanyPos.clone();
    const rayNdc = new THREE.Vector3();
    const rayDir = new THREE.Vector3();
    const hitVec = new THREE.Vector3();

    const updateHoverRay = (e: PointerEvent) => {
      if (REDUCED) return;
      const rect = canvas.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      rayNdc.set(nx, ny, 0.5).unproject(camera);
      rayDir.copy(rayNdc).sub(camera.position).normalize();

      const b = camera.position.dot(rayDir);
      const c = camera.position.dot(camera.position) - R * R;
      const disc = b * b - c;

      if (disc >= 0) {
        const tHit = -b - Math.sqrt(disc);
        if (tHit > 0) {
          hitVec.copy(camera.position).addScaledVector(rayDir, tHit);
          globeSpin.updateMatrixWorld();
          globeSpin.worldToLocal(hitVec);
          mouseLocalTarget.copy(hitVec).normalize();
          hoverTarget = 1.0;
          return;
        }
      }
      hoverTarget = 0.0;
    };

    const handlePointerDown = (e: PointerEvent) => {
      dragging = true;
      lastPointerX = e.clientX;
      lastPointerY = e.clientY;
      canvas.setPointerCapture(e.pointerId);
      updateHoverRay(e);
    };

    const handlePointerMove = (e: PointerEvent) => {
      updateHoverRay(e);
      if (!dragging) return;
      const dx = e.clientX - lastPointerX;
      const dy = e.clientY - lastPointerY;
      lastPointerX = e.clientX;
      lastPointerY = e.clientY;

      velRotY = dx * 0.005;
      velRotX = dy * 0.003;
      globeSpin.rotation.y += velRotY;
      globeSpin.rotation.x = Math.max(0.15, Math.min(0.65, globeSpin.rotation.x + velRotX));
    };

    const handlePointerUp = () => {
      dragging = false;
    };

    const handlePointerLeave = () => {
      hoverTarget = 0.0;
    };

    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointercancel", handlePointerUp);
    canvas.addEventListener("pointerleave", handlePointerLeave);

    // Parallax subtle shift with pointer
    let parallaxTargetX = 0;
    let parallaxTargetY = 0;
    const handleWindowMouseMove = (e: MouseEvent) => {
      const rx = (e.clientX / window.innerWidth) * 2 - 1;
      const ry = (e.clientY / window.innerHeight) * 2 - 1;
      parallaxTargetX = rx * 0.22;
      parallaxTargetY = -ry * 0.18;
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    // ------------------------------------------------------------------------
    // 7. ANIMATION LOOP & ORBITING COURSE NODES
    // ------------------------------------------------------------------------
    let animId = 0;
    let clock = new THREE.Clock();
    let time = 0;
    let introProgress = REDUCED ? 1.0 : 0;

    // Project 3D vector to screen (overlay coordinates)
    function projectToScreen(vec: THREE.Vector3): [number, number] {
      const clone = vec.clone().project(camera);
      const x = ((clone.x + 1) / 2) * W;
      const y = ((1 - clone.y) / 2) * H;
      return [x, y];
    }

    const NODE_COUNT = 7;
    const nodeAngles = Array.from({ length: NODE_COUNT }, (_, i) => (i / NODE_COUNT) * Math.PI * 2);

    const render = () => {
      animId = requestAnimationFrame(render);
      const dt = Math.min(clock.getDelta(), 0.05);
      time += dt;

      // Page-load intro (2.2s)
      if (introProgress < 1.0) {
        introProgress = Math.min(1.0, introProgress + dt / 2.2);
        const sweepAngle = introProgress * Math.PI * 1.15;
        if (dotsMat) dotsMat.uniforms.uIntroSweep.value = sweepAngle;
        fluidSwarmMat.uniforms.uIntroSweep.value = sweepAngle;
      }

      // Parallax easing
      camera.position.x += (parallaxTargetX - camera.position.x) * 0.04;
      camera.position.y += (parallaxTargetY - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      // Globe serene continuous rotation (1 turn per ~70s)
      if (!dragging && !REDUCED) {
        velRotY *= 0.94;
        velRotX *= 0.94;
        const autoSpeed = (Math.PI * 2) / 70;
        globeSpin.rotation.y += autoSpeed * dt + velRotY;
        globeSpin.rotation.x += velRotX;
      }

      // Course Orbit slow rotation (1 turn per 95s)
      if (!REDUCED) {
        const orbitSpeed = (Math.PI * 2) / 95;
        ringSpin.rotation.y += orbitSpeed * dt;
      }

      // Update shared hover & time fluid uniforms
      hoverCurrent += (hoverTarget - hoverCurrent) * 0.08;
      uHoverShared.value = hoverCurrent;
      uMouseLocalShared.value.lerp(mouseLocalTarget, 0.14).normalize();

      sphereBodyMat.uniforms.uTime.value = time;
      atmoMat.uniforms.uTime.value = time;
      fluidSwarmMat.uniforms.uTime.value = time;
      if (dotsMat) dotsMat.uniforms.uTime.value = time;
      arcMaterials.forEach((m) => (m.uniforms.uTime.value = time));

      // Update pulse rings & front-hemisphere visibility at Germany pin
      globeSpin.updateMatrixWorld();
      const gerWorldPos = gerPos.clone().applyMatrix4(globeSpin.matrixWorld);
      pinGroup.visible = gerWorldPos.z > -0.25;
      pulseRings.forEach((p) => {
        const loop = (time * 0.42 + p.offset) % 1.0;
        const scale = 1.0 + loop * 4.8;
        p.mesh.scale.set(scale, scale, 1.0);
        p.mesh.material.opacity = (1.0 - loop) * 0.92;
      });

      renderer.render(scene, camera);

      // Position HTML Instrument Nodes over 3D Orbit Ring (Exact Ray-Sphere Occlusion)
      if (nodesOverlayRef.current) {
        ringSpin.updateMatrixWorld();
        const nodeEls = nodesOverlayRef.current.children;
        const camPos = camera.position;
        const sphereCenter = new THREE.Vector3(0, 0, 0);

        for (let k = 0; k < NODE_COUNT; k++) {
          const el = nodeEls[k] as HTMLElement;
          if (!el) continue;

          const ang = nodeAngles[k];
          const localVec = new THREE.Vector3(
            Math.cos(ang) * ORBIT_R,
            0,
            Math.sin(ang) * ORBIT_R
          );
          const worldVec = localVec.clone().applyMatrix4(ringSpin.matrixWorld);
          const [sx, sy] = projectToScreen(worldVec);

          // Ray from camera to node
          const ray = worldVec.clone().sub(camPos);
          const rayLen = ray.length();
          const rayDir = ray.clone().divideScalar(rayLen);

          // Projection of sphere center onto ray line
          const tc = sphereCenter.clone().sub(camPos).dot(rayDir);

          let isOccluded = false;
          let occludeOpacity = 1.0;

          if (tc > 0 && tc < rayLen) {
            const closest = camPos.clone().add(rayDir.clone().multiplyScalar(tc));
            const distFromCenter = closest.distanceTo(sphereCenter);

            if (distFromCenter < R * 0.97) {
              isOccluded = true;
              occludeOpacity = 0;
            } else if (distFromCenter < R * 1.13) {
              occludeOpacity = Math.max(0, Math.min(1, (distFromCenter - R * 0.97) / (R * 0.16)));
            }
          }

          occludedRef.current[k] = isOccluded;

          const isActive = k === activeIndexRef.current;

          if (isOccluded || occludeOpacity <= 0.02) {
            el.style.opacity = "0";
            el.style.pointerEvents = "none";
            el.style.visibility = "hidden";
          } else {
            el.style.visibility = "visible";
            el.style.pointerEvents = "auto";
            el.style.opacity = (occludeOpacity * (isActive ? 1.0 : 0.94)).toFixed(3);
          }

          el.style.transform = `translate3d(${sx.toFixed(1)}px, ${sy.toFixed(1)}px, 0) translate(-50%, -50%)`;
          el.style.zIndex = isActive ? "50" : "20";
        }
      }
    };

    animId = requestAnimationFrame(render);

    // Resize Handler
    const handleResize = () => {
      if (!containerRef.current) return;
      W = containerRef.current.clientWidth || 800;
      H = containerRef.current.clientHeight || 800;
      renderer.setSize(W, H);
      camera.aspect = W / H;
      camera.updateProjectionMatrix();
    };

    const ro = new ResizeObserver(handleResize);
    ro.observe(containerRef.current);

    return () => {
      disposed = true;
      window.clearTimeout(maskFallbackTimer);
      cancelAnimationFrame(animId);
      ro.disconnect();
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointercancel", handlePointerUp);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("mousemove", handleWindowMouseMove);
      sphereBodyGeom.dispose();
      sphereBodyMat.dispose();
      atmoGeom.dispose();
      atmoMat.dispose();
      fluidGeom.dispose();
      fluidSwarmMat.dispose();
      arcMaterials.forEach((m) => m.dispose());
      if (dotsPoints?.geometry) dotsPoints.geometry.dispose();
      if (dotsMat) dotsMat.dispose();
      ringGeom.dispose();
      orbitRingMat.dispose();
      renderer.dispose();
    };
  }, [courses.length]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] md:w-[520px] md:h-[520px] lg:w-[490px] lg:h-[490px] xl:w-[600px] xl:h-[600px] select-none flex items-center justify-center overflow-visible"
    >
      {/* 3D WebGL Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing touch-none block"
      />

      {/* 7 Orbiting Auros-Inspired Precision Course Nodes */}
      <div
        ref={nodesOverlayRef}
        className="absolute inset-0 pointer-events-none overflow-visible z-30"
      >
        {courses.map((course, idx) => {
          const isActive = idx === activeIndex;
          const microLabel = course.tags.slice(0, 2).join(" · ");
          return (
            <div
              key={course.id}
              className="absolute top-0 left-0 pointer-events-auto"
            >
              {isActive ? (
                /* Active Node: Engineered dark-plum frosted instrument capsule */
                <Link
                  to={course.to}
                  aria-label={course.name}
                  className="group flex items-center gap-2 sm:gap-2.5 pl-1.5 pr-2.5 sm:pr-3 py-1.5 rounded-[10px] bg-[#160812]/90 backdrop-blur-xl border border-[#F2A6BC]/25 hover:border-[#E5254F]/60 shadow-[0_8px_24px_rgba(18,6,15,0.18)] transition-colors duration-300"
                  style={{ animation: "instrumentReveal 0.35s cubic-bezier(0.16, 1, 0.3, 1)" }}
                >
                  <span className="w-6 h-6 rounded-[6px] bg-gradient-to-br from-[#E5254F]/25 to-[#8A1C4A]/35 border border-[#F2A6BC]/30 flex items-center justify-center text-[#FDE9FF] shrink-0">
                    <CourseLineIcon iconId={course.iconId} className="w-3.5 h-3.5" />
                  </span>
                  <span className="flex flex-col text-left">
                    <span className="text-[8.5px] font-medium uppercase tracking-[0.14em] text-[#F2A6BC]/85 leading-none mb-0.5 whitespace-nowrap">
                      {microLabel}
                    </span>
                    <span className="text-[11.5px] sm:text-xs font-medium tracking-[-0.015em] text-white leading-tight whitespace-nowrap">
                      {course.name}
                    </span>
                  </span>
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3 h-3 text-[#F2A6BC]/80 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0 ml-0.5"
                  >
                    <path d="M5 11L11 5" />
                    <path d="M6.5 5H11V9.5" />
                  </svg>
                </Link>
              ) : (
                /* Idle Node: Whisper-light frosted geometric badge with tracked hover label */
                <button
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={course.name}
                  className="group relative w-7 h-7 rounded-[8px] bg-white/85 backdrop-blur-md border border-[#141B2D]/12 text-[#141B2D]/70 hover:text-[#E5254F] hover:border-[#E5254F]/45 hover:bg-white hover:scale-105 shadow-[0_2px_10px_rgba(18,6,15,0.06)] flex items-center justify-center transition-all duration-200 cursor-pointer"
                >
                  <CourseLineIcon iconId={course.iconId} className="w-3.5 h-3.5" />
                  <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-[5px] bg-[#160812]/90 text-[#FDE9FF] text-[9.5px] font-medium uppercase tracking-[0.10em] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-[#F2A6BC]/20 shadow-sm">
                    {course.name}
                  </span>
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Micro-animations stylesheet */}
      <style>{`
        @keyframes instrumentReveal {
          from {
            opacity: 0;
            transform: scale(0.92);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
