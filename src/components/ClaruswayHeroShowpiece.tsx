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

// Clarusway Arrow path (brand double chevron)
const ARROW_SVG_PATH = "M 22 15 L 62 50 L 22 85 L 42 85 L 82 50 L 42 15 Z";

// 7 Editable icon silhouettes (closed outlines for jelly morph)
const ICON_SILHOUETTES: Record<string, string> = {
  arrow: ARROW_SVG_PATH,
  cloud:
    "M 30,70 L 70,70 C 76,70 82,65 82,58 C 82,51 77,46 71,45 C 70,35 61,28 50,28 C 40,28 32,34 30,42 C 24,43 18,48 18,55 C 18,63 23,70 30,70 Z",
  "data-science":
    "M 50,22 C 65,22 78,34 78,50 C 78,66 65,78 50,78 C 35,78 22,66 22,50 C 22,34 35,22 50,22 Z",
  "data-analytics":
    "M 18,78 L 18,54 L 32,54 L 32,78 L 44,78 L 44,38 L 58,38 L 58,78 L 70,78 L 70,22 L 84,22 L 84,78 Z",
  cyber:
    "M 50,18 L 80,30 L 80,52 C 80,70 66,82 50,86 C 34,82 20,70 20,52 L 20,30 Z",
  "full-stack":
    "M 20,24 L 80,24 C 84,24 86,26 86,30 L 86,64 C 86,68 84,70 80,70 L 56,70 L 56,77 L 66,77 L 66,82 L 34,82 L 34,77 L 44,77 L 44,70 L 20,70 C 16,70 14,68 14,64 L 14,30 C 14,26 16,24 20,24 Z",
  ai:
    "M 50,14 C 52,34 66,48 86,50 C 66,52 52,66 50,86 C 48,66 34,52 14,50 C 34,48 48,34 50,14 Z",
  testing:
    "M 50,18 L 80,32 L 80,54 C 80,70 66,82 50,86 C 34,82 20,70 20,54 L 20,32 Z",
};

// Inner 2px line details that pop in after jelly settling
const INNER_DETAILS: Record<string, string> = {
  cloud: "M 32,58 C 38,52 44,52 48,56 C 52,52 58,52 64,58",
  "data-science": "M 24,50 A 26,10 0 1,0 76,50 A 26,10 0 1,0 24,50 M 50,24 A 10,26 0 1,0 50,76 A 10,26 0 1,0 50,24",
  "data-analytics": "M 24,46 L 46,32 L 62,40 L 78,26",
  cyber: "M 50,34 L 50,48 M 42,48 L 58,48 L 58,62 L 42,62 Z",
  "full-stack": "M 34,44 L 26,50 L 34,56 M 66,44 L 74,50 L 66,56 M 53,40 L 47,60",
  ai: "M 50,36 L 50,64 M 36,50 L 64,50",
  testing: "M 36,50 L 46,60 L 64,40",
};

// Resample SVG path into 64 evenly distributed points
function sampleSvgPath(pathStr: string, numPoints = 64): { x: number; y: number }[] {
  if (typeof document === "undefined") {
    // SSR / Node fallback
    return Array.from({ length: numPoints }, (_, i) => {
      const a = (i / numPoints) * Math.PI * 2;
      return { x: 50 + Math.cos(a) * 30, y: 50 + Math.sin(a) * 30 };
    });
  }
  try {
    const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
    p.setAttribute("d", pathStr);
    const total = p.getTotalLength();
    const pts: { x: number; y: number }[] = [];
    for (let i = 0; i < numPoints; i++) {
      const pt = p.getPointAtLength((i / numPoints) * total);
      pts.push({ x: pt.x, y: pt.y });
    }
    return pts;
  } catch {
    return Array.from({ length: numPoints }, (_, i) => {
      const a = (i / numPoints) * Math.PI * 2;
      return { x: 50 + Math.cos(a) * 30, y: 50 + Math.sin(a) * 30 };
    });
  }
}

// ============================================================================
// JELLY SILHOUETTE ICON COMPONENT
// ============================================================================
interface JellyIconProps {
  iconId: string;
  isActive: boolean;
  isEn: boolean;
  triggerLanding: number; // Increment counter when arrow lands
}

function JellyIcon({ iconId, isActive, triggerLanding }: JellyIconProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const stateRef = useRef<{
    points: { x: number; y: number; vx: number; vy: number }[];
    targets: { x: number; y: number }[];
    settled: boolean;
    landingAnim: number; // 0 to 1
  }>({
    points: [],
    targets: [],
    settled: false,
    landingAnim: 0,
  });

  // Pre-sample points on mount / change
  useEffect(() => {
    const targetSvg = isActive ? ICON_SILHOUETTES[iconId] || ICON_SILHOUETTES.cloud : ICON_SILHOUETTES[iconId];
    const sampled = sampleSvgPath(targetSvg, 64);
    const arrowSampled = sampleSvgPath(ARROW_SVG_PATH, 64);

    if (stateRef.current.points.length === 0) {
      stateRef.current.points = sampled.map((p) => ({ x: p.x, y: p.y, vx: 0, vy: 0 }));
    } else if (isActive) {
      // Start from Arrow silhouette when arrow lands, then spring into target icon!
      stateRef.current.points = arrowSampled.map((p) => ({
        x: p.x,
        y: p.y,
        vx: (Math.random() - 0.5) * 40,
        vy: (Math.random() - 0.5) * 40,
      }));
      stateRef.current.settled = false;
    }
    stateRef.current.targets = sampled;
  }, [iconId, isActive, triggerLanding]);

  // Spring mass physics loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId = 0;
    let lastTime = performance.now();

    const STIFFNESS = 150;
    const DAMPING = 11;
    const COUPLING = 30;

    const render = (time: number) => {
      animId = requestAnimationFrame(render);
      const dt = Math.min((time - lastTime) / 1000, 0.032);
      lastTime = time;

      const { points, targets } = stateRef.current;
      if (points.length < 64 || targets.length < 64) return;

      const N = 64;
      let totalMotion = 0;

      for (let i = 0; i < N; i++) {
        const pt = points[i];
        const tgt = targets[i];
        const prev = points[(i - 1 + N) % N];
        const next = points[(i + 1) % N];

        // Spring pulling to target shape
        const fx_target = -STIFFNESS * (pt.x - tgt.x) - DAMPING * pt.vx;
        const fy_target = -STIFFNESS * (pt.y - tgt.y) - DAMPING * pt.vy;

        // Neighbor coupling (membrane elasticity)
        const fx_couple = COUPLING * (prev.x - 2 * pt.x + next.x);
        const fy_couple = COUPLING * (prev.y - 2 * pt.y + next.y);

        pt.vx += (fx_target + fx_couple) * dt;
        pt.vy += (fy_target + fy_couple) * dt;
        pt.x += pt.vx * dt;
        pt.y += pt.vy * dt;

        totalMotion += Math.abs(pt.vx) + Math.abs(pt.vy);
      }

      stateRef.current.settled = totalMotion < 1.5;

      // Draw onto canvas
      ctx.clearRect(0, 0, 48, 48);
      ctx.save();
      ctx.scale(48 / 100, 48 / 100);

      // Draw jelly silhouette
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < N; i++) {
        const midX = (points[i].x + points[(i + 1) % N].x) / 2;
        const midY = (points[i].y + points[(i + 1) % N].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, midX, midY);
      }
      ctx.closePath();

      if (isActive) {
        ctx.fillStyle = "#E5254F";
        ctx.shadowColor = "rgba(229, 37, 79, 0.4)";
        ctx.shadowBlur = 8;
        ctx.fill();

        // Inner 2px stroke detail after settling
        if (stateRef.current.settled && INNER_DETAILS[iconId]) {
          ctx.restore();
          ctx.save();
          ctx.scale(48 / 100, 48 / 100);
          ctx.strokeStyle = "#FFFFFF";
          ctx.lineWidth = 2.5;
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          const p2 = new Path2D(INNER_DETAILS[iconId]);
          ctx.stroke(p2);
        }
      } else {
        ctx.fillStyle = "#5B6475";
        ctx.fill();
      }

      ctx.restore();
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [iconId, isActive]);

  return (
    <canvas
      ref={canvasRef}
      width={48}
      height={48}
      className="w-5 h-5 pointer-events-none transition-transform duration-300"
    />
  );
}

// ============================================================================
// MAIN HERO SHOWPIECE COMPONENT
// ============================================================================
export function ClaruswayHeroShowpiece({ isEn = true }: { isEn?: boolean }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const nodesOverlayRef = useRef<HTMLDivElement | null>(null);
  const germanyLabelRef = useRef<HTMLDivElement | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [triggerLanding, setTriggerLanding] = useState(0);

  const courses = isEn ? HERO_COURSES.en : HERO_COURSES.de;
  const activeCourse = courses[activeIndex] || courses[0];

  // Auto-cycle every 4.5s (pauses on hover/focus)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % courses.length);
      setTriggerLanding((prev) => prev + 1);
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

    // Low-distortion orthographic feel using narrow FOV
    const camera = new THREE.PerspectiveCamera(32, W / H, 0.1, 100);
    camera.position.set(0, 0, 18);

    // Helpers
    const R = 4.2; // Globe radius
    const ORBIT_R = R * 1.13; // Course orbit radius ≈ 1.13 * R
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

    // ------------------------------------------------------------------------
    // 1. SPHERE BODY: Deep plum radial gradient (#2A0F24 -> #12060F) + Rim light
    // ------------------------------------------------------------------------
    const sphereBodyMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vView;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vNormal = normalize(normalMatrix * normal);
          vView = normalize(-mv.xyz);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        varying vec3 vView;
        void main() {
          float ndotv = clamp(dot(vNormal, vView), 0.0, 1.0);
          // Radial deep plum gradient: #2A0F24 center -> #12060F edges
          vec3 plumCenter = vec3(0.165, 0.059, 0.141);
          vec3 plumEdge   = vec3(0.071, 0.024, 0.059);
          vec3 base = mix(plumEdge, plumCenter, pow(ndotv, 0.75));

          // Soft crimson rim light on upper-left
          vec3 rimDir = normalize(vec3(-0.65, 0.70, 0.35));
          float rimLight = pow(1.0 - ndotv, 2.4) * max(0.0, dot(vNormal, rimDir));
          vec3 crimson = vec3(0.898, 0.145, 0.310); // #E5254F
          base += crimson * (rimLight * 0.75);

          // Subtle ambient glow
          float edgeGlow = pow(1.0 - ndotv, 4.0);
          base += vec3(0.95, 0.45, 0.65) * (edgeGlow * 0.3);

          gl_FragColor = vec4(base, 1.0);
        }
      `,
      depthWrite: true,
    });
    const sphereBody = new THREE.Mesh(new THREE.SphereGeometry(R * 0.992, 64, 64), sphereBodyMat);
    globeSpin.add(sphereBody);

    // Atmosphere Glow Shell
    const atmoMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      uniforms: {
        uColor: { value: new THREE.Color(0xe5254f) },
      },
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        varying vec3 vNormal;
        void main() {
          float intensity = pow(max(0.65 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 0.0), 3.5) * 0.45;
          gl_FragColor = vec4(uColor * intensity, intensity * 0.4);
        }
      `,
    });
    const atmoSphere = new THREE.Mesh(new THREE.SphereGeometry(R * 1.12, 48, 48), atmoMat);
    globeSpin.add(atmoSphere);

    // ------------------------------------------------------------------------
    // 2. ORTHOGRAPHIC DOTTED GLOBE (~9,000 Land-Only Dots with Limb Darkening)
    // ------------------------------------------------------------------------
    let dotsPoints: any = null;
    let dotsMat: any = null;

    const gGermanyPos = llToVec3(GERMANY_COORDS[0], GERMANY_COORDS[1], 1.0).normalize();

    function createDots(mask: Uint8ClampedArray | null, mw: number, mh: number) {
      const N = mask ? 16000 : 9000;
      const pos: number[] = [];
      const isGer: number[] = [];

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

        pos.push(x * R, y * R, z * R);

        // Germany highlight region
        const dotVec = new THREE.Vector3(x, y, z).normalize();
        const distToGer = Math.acos(Math.min(1, Math.max(-1, dotVec.dot(gGermanyPos)))) / DEG;
        isGer.push(distToGer < 12 ? 1.0 : 0.0);
      }

      const geom = new THREE.BufferGeometry();
      geom.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
      geom.setAttribute("aIsGermany", new THREE.Float32BufferAttribute(isGer, 1));

      dotsMat = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        uniforms: {
          uTime: { value: 0 },
          uPR: { value: PR },
          uIntroSweep: { value: REDUCED ? Math.PI : 0.1 },
          uGermanyDir: { value: gGermanyPos },
        },
        vertexShader: `
          attribute float aIsGermany;
          uniform float uPR;
          uniform float uTime;
          uniform float uIntroSweep;
          uniform vec3 uGermanyDir;
          varying float vAlpha;
          varying vec3 vColor;
          void main() {
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            vec3 norm = normalize(normalMatrix * normalize(position));
            float facing = clamp(dot(norm, normalize(-mv.xyz)), 0.0, 1.0);

            // Limb darkening: 55% to 80% opacity based on facing angle
            float limbAlpha = mix(0.55, 0.80, pow(facing, 0.7));

            // Radial sweep intro starting from Germany
            vec3 ptNorm = normalize(position);
            float angFromGer = acos(clamp(dot(ptNorm, uGermanyDir), -1.0, 1.0));
            float sweepFactor = smoothstep(uIntroSweep + 0.25, uIntroSweep - 0.15, angFromGer);

            vAlpha = limbAlpha * sweepFactor;

            if (aIsGermany > 0.5) {
              vColor = vec3(0.95, 0.18, 0.35); // #E5254F Germany highlight
              vAlpha *= (1.0 + 0.35 * sin(uTime * 3.5));
            } else {
              vColor = vec3(0.949, 0.651, 0.737); // #F2A6BC
            }

            float sz = (aIsGermany > 0.5 ? 2.3 : 1.45) * uPR * (15.0 / -mv.z);
            gl_PointSize = sz;
            gl_Position = projectionMatrix * mv;
          }
        `,
        fragmentShader: `
          varying float vAlpha;
          varying vec3 vColor;
          void main() {
            vec2 c = gl_PointCoord - vec2(0.5);
            float d = length(c);
            if (d > 0.5) discard;
            float smoothEdge = smoothstep(0.5, 0.2, d);
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
      if (maskProcessed) return;
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
    setTimeout(() => processMask(null, 1024, 512), 2500);

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
          void main() {
            vProgress = aProgress;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime;
          uniform float uOffset;
          uniform float uSpeed;
          varying float vProgress;
          void main() {
            // Travelling dot along arc
            float head = fract(uTime * uSpeed + uOffset);
            float d = head - vProgress;
            float trail = d > 0.0 ? exp(-d * 9.0) : 0.0;

            // Thin crimson arc line (1.2px) fading towards origin
            float lineAlpha = 0.12 * vProgress;
            float dotAlpha = trail * 0.9;
            float alpha = lineAlpha + dotAlpha;

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

    // Depth-aware ring shader (white on dark sphere, crimson outside)
    const orbitRingMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      vertexShader: `
        varying vec3 vWorldPos;
        void main() {
          vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vWorldPos;
        void main() {
          // #FFFFFF at 25% when in front of dark globe, #E5254F at 20% outside
          float distToCenter = length(vWorldPos.xy);
          vec3 c = distToCenter < 4.1 ? vec3(1.0, 1.0, 1.0) : vec3(0.898, 0.145, 0.310);
          float alpha = distToCenter < 4.1 ? 0.25 : 0.20;
          gl_FragColor = vec4(c, alpha);
        }
      `,
    });
    ringSpin.add(new THREE.Line(ringGeom, orbitRingMat));

    // ------------------------------------------------------------------------
    // 6. SIGNATURE MOMENT: ELASTIC ARROW FLIGHT FROM GERMANY PIN TO ACTIVE NODE
    // ------------------------------------------------------------------------
    // Arrow Trail Ribbon
    const TRAIL_LEN = 16;
    const trailPositions = new Float32Array(TRAIL_LEN * 3);
    const trailAlpha = new Float32Array(TRAIL_LEN);
    for (let i = 0; i < TRAIL_LEN; i++) trailAlpha[i] = (1 - i / TRAIL_LEN) * 0.85;

    const trailGeom = new THREE.BufferGeometry();
    trailGeom.setAttribute("position", new THREE.BufferAttribute(trailPositions, 3));
    trailGeom.setAttribute("aAlpha", new THREE.BufferAttribute(trailAlpha, 1));

    const trailMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexShader: `
        attribute float aAlpha;
        varying float vA;
        void main() {
          vA = aAlpha;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying float vA;
        void main() {
          vec3 crimson = vec3(0.898, 0.145, 0.310);
          gl_FragColor = vec4(crimson * vA, vA);
        }
      `,
    });
    const trailLine = new THREE.Line(trailGeom, trailMat);
    scene.add(trailLine);

    // Flying Arrow Sprite
    function makeArrowTexture() {
      const c = document.createElement("canvas");
      c.width = 128;
      c.height = 128;
      const ctx = c.getContext("2d");
      if (ctx) {
        ctx.fillStyle = "#E5254F";
        ctx.shadowColor = "rgba(229, 37, 79, 0.8)";
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.moveTo(35, 20);
        ctx.lineTo(85, 64);
        ctx.lineTo(35, 108);
        ctx.lineTo(55, 108);
        ctx.lineTo(105, 64);
        ctx.lineTo(55, 20);
        ctx.closePath();
        ctx.fill();
      }
      return new THREE.CanvasTexture(c);
    }

    const flyingArrowSprite = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: makeArrowTexture(),
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    flyingArrowSprite.scale.set(0.85, 0.85, 1);
    flyingArrowSprite.visible = false;
    scene.add(flyingArrowSprite);

    // Flight state
    let flightProgress = 1.0; // 0 (at Germany) -> 1 (landed at node)
    let flightP0 = new THREE.Vector3();
    let flightP1 = new THREE.Vector3();
    let flightP2 = new THREE.Vector3();
    const trailHistory: THREE.Vector3[] = [];

    // ------------------------------------------------------------------------
    // 7. DRAG & ROTATION WITH INERTIA (Scroll does NOT hijack)
    // ------------------------------------------------------------------------
    let dragging = false;
    let lastPointerX = 0;
    let lastPointerY = 0;
    let velRotY = 0;
    let velRotX = 0;
    let targetGerLerp = 0; // When course activates, ease to Germany

    const handlePointerDown = (e: PointerEvent) => {
      dragging = true;
      lastPointerX = e.clientX;
      lastPointerY = e.clientY;
      canvas.setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: PointerEvent) => {
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

    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointercancel", handlePointerUp);

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
    // 8. ANIMATION LOOP & ACTIVE NODE FLIGHT TRIGGER
    // ------------------------------------------------------------------------
    let lastActive = -1;
    let animId = 0;
    let clock = new THREE.Clock();
    let time = 0;
    let introProgress = 0;

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
      }

      // Parallax easing
      camera.position.x += (parallaxTargetX - camera.position.x) * 0.04;
      camera.position.y += (parallaxTargetY - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      // Globe auto-rotation (1 turn per ~70s = 0.0898 rad/s)
      if (!dragging && !REDUCED) {
        velRotY *= 0.94;
        velRotX *= 0.94;

        if (targetGerLerp > 0) {
          // Re-centering on Germany
          targetGerLerp = Math.max(0, targetGerLerp - dt * 1.2);
          const targetY = initialGerRotY;
          let diffY = (targetY - globeSpin.rotation.y) % (Math.PI * 2);
          if (diffY > Math.PI) diffY -= Math.PI * 2;
          if (diffY < -Math.PI) diffY += Math.PI * 2;
          globeSpin.rotation.y += diffY * 0.06;
          globeSpin.rotation.x += (0.38 - globeSpin.rotation.x) * 0.06;
        } else {
          // Normal slow auto-spin
          const autoSpeed = (Math.PI * 2) / 70;
          globeSpin.rotation.y += autoSpeed * dt + velRotY;
          globeSpin.rotation.x += velRotX;
        }
      }

      // Course Orbit slow rotation (1 turn per 90s)
      if (!REDUCED) {
        const orbitSpeed = (Math.PI * 2) / 90;
        ringSpin.rotation.y += orbitSpeed * dt;
      }

      // Update shader uniforms
      if (dotsMat) dotsMat.uniforms.uTime.value = time;
      arcMaterials.forEach((m) => (m.uniforms.uTime.value = time));

      // Update pulse rings at Germany pin
      pulseRings.forEach((p) => {
        const loop = (time * 0.42 + p.offset) % 1.0;
        const scale = 1.0 + loop * 4.8;
        p.mesh.scale.set(scale, scale, 1.0);
        p.mesh.material.opacity = (1.0 - loop) * 0.92;
      });

      // Check if active course changed -> Trigger Elastic Arrow flight!
      const currentActive = activeIndex;
      if (currentActive !== lastActive) {
        lastActive = currentActive;
        targetGerLerp = 1.0; // Ease globe to center Germany

        // Launch brand arrow flight from Germany
        flightProgress = 0.0;
        trailHistory.length = 0;

        // Origin: Germany pin in world space
        globeSpin.updateMatrixWorld();
        flightP0 = gerPos.clone().applyMatrix4(globeSpin.matrixWorld);

        // Destination: active node in world space
        ringSpin.updateMatrixWorld();
        const activeAngle = nodeAngles[currentActive];
        const localNodeVec = new THREE.Vector3(
          Math.cos(activeAngle) * ORBIT_R,
          0,
          Math.sin(activeAngle) * ORBIT_R
        );
        flightP2 = localNodeVec.clone().applyMatrix4(ringSpin.matrixWorld);

        // Curve control point lifting high above globe surface
        flightP1 = flightP0
          .clone()
          .add(flightP2)
          .multiplyScalar(0.5)
          .add(flightP0.clone().normalize().multiplyScalar(R * 0.75));

        flyingArrowSprite.visible = true;
      }

      // Animate Arrow Flight
      if (flightProgress < 1.0) {
        flightProgress = Math.min(1.0, flightProgress + dt / 0.85); // 0.85s flight
        const u = flightProgress;

        // Quadratic Bezier interpolation
        const currentArrowPos = new THREE.Vector3()
          .addScaledVector(flightP0, (1 - u) * (1 - u))
          .addScaledVector(flightP1, 2 * (1 - u) * u)
          .addScaledVector(flightP2, u * u);

        flyingArrowSprite.position.copy(currentArrowPos);

        // Orient arrow along tangent
        const tangent = new THREE.Vector3()
          .addScaledVector(flightP0, -2 * (1 - u))
          .addScaledVector(flightP1, 2 - 4 * u)
          .addScaledVector(flightP2, 2 * u)
          .normalize();
        flyingArrowSprite.material.rotation = Math.atan2(tangent.y, tangent.x);

        // Squash on landing
        if (flightProgress >= 0.9) {
          flyingArrowSprite.scale.set(0.94, 1.05, 1);
        } else {
          flyingArrowSprite.scale.set(0.85, 0.85, 1);
        }

        // Record trail points
        trailHistory.unshift(currentArrowPos.clone());
        if (trailHistory.length > TRAIL_LEN) trailHistory.pop();

        for (let i = 0; i < TRAIL_LEN; i++) {
          const pt = trailHistory[i] || currentArrowPos;
          trailPositions[i * 3 + 0] = pt.x;
          trailPositions[i * 3 + 1] = pt.y;
          trailPositions[i * 3 + 2] = pt.z;
        }
        trailGeom.attributes.position.needsUpdate = true;
        trailLine.visible = true;

        if (flightProgress >= 1.0) {
          flyingArrowSprite.visible = false;
          trailLine.visible = false;
        }
      }

      renderer.render(scene, camera);

      // Project Germany Anchor Pin Label
      if (germanyLabelRef.current) {
        globeSpin.updateMatrixWorld();
        const worldGerPos = gerPos.clone().applyMatrix4(globeSpin.matrixWorld);
        const [gx, gy] = projectToScreen(worldGerPos);

        // Check facing direction towards camera
        const gerNormal = worldGerPos.clone().normalize();
        const camDir = camera.position.clone().sub(worldGerPos).normalize();
        const isFacing = gerNormal.dot(camDir) > 0.15;

        if (isFacing) {
          germanyLabelRef.current.style.transform = `translate3d(${gx.toFixed(1)}px, ${(gy - 24).toFixed(1)}px, 0) translate(-50%, -100%)`;
          germanyLabelRef.current.style.opacity = "1";
        } else {
          germanyLabelRef.current.style.opacity = "0";
        }
      }

      // Position HTML Glass Nodes over 3D Orbit Ring
      if (nodesOverlayRef.current) {
        ringSpin.updateMatrixWorld();
        const nodeEls = nodesOverlayRef.current.children;

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

          // Depth aware z-index and subtle scale
          const viewZ = worldVec.clone().applyMatrix4(camera.matrixWorldInverse).z;
          const isFront = viewZ > -18;
          const isActive = k === activeIndex;

          const baseScale = isActive ? 1.4 : 1.0;
          el.style.transform = `translate3d(${sx.toFixed(1)}px, ${sy.toFixed(1)}px, 0) translate(-50%, -50%) scale(${baseScale})`;
          el.style.zIndex = isActive ? "50" : isFront ? "30" : "10";
          el.style.opacity = isFront || isActive ? "1.0" : "0.75";
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
      cancelAnimationFrame(animId);
      ro.disconnect();
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointercancel", handlePointerUp);
      window.removeEventListener("mousemove", handleWindowMouseMove);
      renderer.dispose();
    };
  }, [activeIndex, courses.length]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-[340px] h-[340px] sm:w-[540px] sm:h-[540px] md:w-[680px] md:h-[680px] lg:w-[780px] lg:h-[780px] xl:w-[820px] xl:h-[820px] select-none flex items-center justify-center overflow-visible"
      style={{
        filter: "drop-shadow(0 20px 60px rgba(229, 37, 79, 0.16))",
      }}
    >
      {/* 3D WebGL Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing touch-none block"
      />

      {/* 7 Orbiting Course Glass Nodes Overlay */}
      <div
        ref={nodesOverlayRef}
        className="absolute inset-0 pointer-events-none overflow-visible z-30"
      >
        {courses.map((course, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div
              key={course.id}
              onClick={() => {
                setActiveIndex(idx);
                setTriggerLanding((prev) => prev + 1);
              }}
              style={{
                animationDelay: `${idx * 60}ms`,
              }}
              className={`absolute top-0 left-0 pointer-events-auto cursor-pointer transition-all duration-300 flex items-center ${
                isActive ? "orbit-node-active" : "orbit-node-idle"
              }`}
            >
              {/* Circular Glass Button: 40px default, 56px active */}
              <button
                type="button"
                aria-label={course.name}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 relative ${
                  isActive
                    ? "w-14 h-14 bg-white ring-2 ring-[#E5254F] shadow-[0_0_24px_rgba(229,37,79,0.45)]"
                    : "bg-white/92 border border-[#F3D3DC] hover:border-[#E5254F]/50 shadow-[0_4px_14px_rgba(20,27,45,0.08)] hover:scale-110"
                }`}
              >
                <JellyIcon
                  iconId={course.iconId}
                  isActive={isActive}
                  isEn={isEn}
                  triggerLanding={triggerLanding}
                />
              </button>

              {/* Attached Label Pill (ONLY shown for active course) */}
              {isActive && (
                <div
                  className="ml-3 px-3 py-1 bg-white/95 backdrop-blur-md border border-[#F3D3DC] text-[#141B2D] font-bold text-xs rounded-full shadow-[0_6px_20px_rgba(20,27,45,0.08)] whitespace-nowrap animate-fade-in flex items-center gap-1.5"
                  style={{ animation: "labelSlide 0.35s cubic-bezier(0.16, 1, 0.3, 1)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5254F] animate-pulse" />
                  <span>{course.name}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Germany Visual Anchor Pin Label */}
      <div
        ref={germanyLabelRef}
        className="absolute top-0 left-0 z-20 pointer-events-none transition-opacity duration-300 flex items-center gap-1.5 bg-white/95 backdrop-blur-md border border-[#F3D3DC] px-2.5 py-0.5 rounded-full shadow-[0_4px_12px_rgba(20,27,45,0.08)]"
        style={{ willChange: "transform, opacity", opacity: 0 }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#E5254F]" />
        <span className="text-[11px] font-bold text-[#141B2D] tracking-tight">
          {isEn ? "Germany" : "Deutschland"}
        </span>
      </div>

      {/* =====================================================================
          FIXED LOWER-LEFT INFO CARD (280px, Never Overlaps Nodes or Globe)
          ===================================================================== */}
      <div
        className="absolute bottom-2 left-2 sm:bottom-6 sm:left-6 z-40 w-[260px] sm:w-[280px] bg-white/95 backdrop-blur-md rounded-2xl border border-[#F3D3DC] p-4 sm:p-5 shadow-[0_12px_32px_rgba(20,27,45,0.09)] transition-all duration-500"
        style={{
          boxShadow: "0 12px 32px rgba(20, 27, 45, 0.08), 0 2px 8px rgba(229, 37, 79, 0.06)",
        }}
      >
        <div key={activeCourse.id} className="animate-fade-in-quick">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <h3 className="font-extrabold text-[#141B2D] text-base sm:text-lg tracking-tight">
              {activeCourse.name}
            </h3>
            <span className="w-2 h-2 rounded-full bg-[#E5254F]" />
          </div>

          <p className="text-xs sm:text-[13px] text-[#5B6475] leading-relaxed mb-3">
            {activeCourse.oneLiner}
          </p>

          {/* 3 Course Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {activeCourse.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[10px] sm:text-[11px] font-medium bg-[#F6F3EE] text-[#141B2D] px-2 py-0.5 rounded-md border border-[#F3D3DC]/60"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            to={activeCourse.to}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E5254F] hover:text-[#c4153f] transition-colors group"
          >
            <span>{isEn ? "View course →" : "Kurs ansehen →"}</span>
          </Link>
        </div>
      </div>

      {/* Micro-animations stylesheet */}
      <style>{`
        @keyframes labelSlide {
          from {
            opacity: 0;
            transform: translateX(-8px) scale(0.92);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        .animate-fade-in-quick {
          animation: fadeInQuick 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes fadeInQuick {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
