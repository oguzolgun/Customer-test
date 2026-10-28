import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// ---------------------------------------------------------------------------
// TYPES & DATA
// ---------------------------------------------------------------------------
interface ProgramItem {
  id: string;
  short: string;
  name: string;
  meta: string;
  out: string;
  chip: string;
  to: string;
  icon: "brain" | "chart" | "diagram" | "cloud" | "shield" | "code";
}

const PROGRAMS_DATA: Record<"en" | "de", ProgramItem[]> = {
  en: [
    {
      id: "ai-eng",
      short: "AI Engineering",
      name: "AI Engineering Bootcamp",
      meta: "33 weeks · 3 stacked modules",
      out: "AI Engineer",
      chip: "Next start · 7 Dec 2026",
      to: "/it-courses/ai-engineering-course/",
      icon: "brain",
    },
    {
      id: "data-analytics",
      short: "Data Analytics",
      name: "Data Analytics Bootcamp",
      meta: "Module 1 · 13 weeks · Python, SQL, BI",
      out: "Data Analyst",
      chip: "Bildungsgutschein",
      to: "/it-courses/data-analytics-course/",
      icon: "chart",
    },
    {
      id: "data-science",
      short: "Data Science",
      name: "Data Science & Machine Learning",
      meta: "Module 2 · 7 weeks · ML & Deep Learning",
      out: "Data Scientist",
      chip: "Bildungsgutschein",
      to: "/it-courses/ai-engineering-course/",
      icon: "diagram",
    },
    {
      id: "devops-aws",
      short: "Cloud & DevOps",
      name: "AI-Enhanced Cloud & DevOps",
      meta: "AWS Solutions Architect · DevOps · Azure",
      out: "Cloud & DevOps Engineer",
      chip: "Bildungsgutschein",
      to: "/it-courses/aws-solutions-architect-and-devops-engineer/",
      icon: "cloud",
    },
    {
      id: "cyber-security",
      short: "Cyber Security",
      name: "AI-Enhanced Cyber Security Analyst",
      meta: "SOC Analyst · CompTIA Security+ · SIEM",
      out: "SOC Analyst",
      chip: "Bildungsgutschein",
      to: "/it-courses/cyber-security-analyst-course/",
      icon: "shield",
    },
    {
      id: "full-stack",
      short: "Full Stack",
      name: "AI-Assisted Full Stack Development",
      meta: "AI-native frontend & backend · team project",
      out: "Full Stack Developer",
      chip: "Bildungsgutschein",
      to: "/it-courses/full-stack-developer-course/",
      icon: "code",
    },
  ],
  de: [
    {
      id: "ai-eng",
      short: "AI Engineering",
      name: "AI Engineer Weiterbildung",
      meta: "33 Wochen · 3 kombinierbare Module",
      out: "AI Engineer",
      chip: "Start: 27. Jul 2026",
      to: "/it-kurse/ai-engineer-weiterbildung/",
      icon: "brain",
    },
    {
      id: "data-analytics",
      short: "Data Analytics",
      name: "Data Analytics Weiterbildung",
      meta: "Modul 1 · 13 Wochen · Python, SQL, BI",
      out: "Data Analyst",
      chip: "100 % Bildungsgutschein",
      to: "/it-kurse/data-analytics-weiterbildung/",
      icon: "chart",
    },
    {
      id: "data-science",
      short: "Data Science",
      name: "Data Science & Machine Learning",
      meta: "Modul 2 · 7 Wochen · ML & KI-Modelle",
      out: "Data Scientist",
      chip: "100 % Bildungsgutschein",
      to: "/it-kurse/ai-engineer-weiterbildung/",
      icon: "diagram",
    },
    {
      id: "devops-aws",
      short: "Cloud & DevOps",
      name: "AWS & DevOps Weiterbildung",
      meta: "AWS SAA-C03 · Kubernetes · Terraform · Azure",
      out: "Cloud & DevOps Engineer",
      chip: "100 % Bildungsgutschein",
      to: "/it-kurse/aws-devops-weiterbildung/",
      icon: "cloud",
    },
    {
      id: "cyber-security",
      short: "Cyber Security",
      name: "Cyber Security Weiterbildung",
      meta: "SOC Analyst · CompTIA Security+ · SIEM",
      out: "SOC Analyst",
      chip: "100 % Bildungsgutschein",
      to: "/it-kurse/cyber-security-weiterbildung/",
      icon: "shield",
    },
    {
      id: "full-stack",
      short: "Full Stack",
      name: "Full Stack Entwickler Weiterbildung",
      meta: "React, TypeScript, Node.js & KI-Coding-Tools",
      out: "Full Stack Entwickler",
      chip: "100 % Bildungsgutschein",
      to: "/it-kurse/full-stack-entwickler-weiterbildung/",
      icon: "code",
    },
  ],
};

// Simplified outline of Germany [lon, lat]
const GERMANY: [number, number][] = [
  [5.99, 50.75], [6.03, 51.10], [6.20, 51.36], [5.95, 51.75], [6.70, 51.92], [6.85, 52.23], [7.05, 52.40], [6.70, 52.48], [7.03, 52.63],
  [7.10, 53.00], [7.20, 53.25], [7.30, 53.70], [8.10, 53.55], [8.55, 53.55], [8.70, 53.90], [9.10, 53.90], [8.85, 54.05], [8.60, 54.40],
  [8.95, 54.55], [8.60, 54.90], [9.45, 54.83], [9.95, 54.75], [10.95, 54.40], [10.80, 54.00], [11.50, 54.00], [12.30, 54.20], [13.10, 54.55],
  [13.65, 54.55], [14.20, 53.95], [14.40, 53.30], [14.12, 52.85], [14.65, 52.55], [14.55, 52.00], [14.75, 51.55], [15.03, 51.10], [14.60, 50.95],
  [14.30, 51.05], [14.00, 50.85], [13.40, 50.65], [12.90, 50.40], [12.35, 50.25], [12.10, 50.30], [12.50, 49.95], [12.40, 49.75], [13.00, 49.30],
  [13.55, 48.95], [13.80, 48.75], [13.45, 48.55], [13.00, 48.25], [12.75, 48.10], [13.00, 47.70], [12.80, 47.55], [12.20, 47.70], [11.50, 47.45],
  [11.00, 47.40], [10.45, 47.55], [10.15, 47.30], [9.60, 47.55], [8.80, 47.70], [8.55, 47.80], [7.60, 47.58], [7.55, 47.90], [7.80, 48.60],
  [8.20, 48.97], [7.40, 49.17], [6.75, 49.17], [6.35, 49.47], [6.50, 49.80], [6.10, 50.10], [6.40, 50.35], [6.05, 50.65],
];

const NEUSS: [number, number] = [51.20, 6.69];
const GERMANY_CENTER: [number, number] = [51.0, 10.3];
const CITIES: [number, number][] = [
  [41.01, 28.98], [30.04, 31.24], [6.52, 3.38], [19.07, 72.88], [50.45, 30.52], [-23.55, -46.63],
  [35.69, 51.39], [14.60, 120.98], [4.71, -74.07], [-1.29, 36.82], [40.71, -74.00], [33.51, 36.29], [28.61, 77.21], [31.63, -8.0],
];

function ProgramIcon({ type }: { type: string }) {
  switch (type) {
    case "brain":
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z" />
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z" />
        </svg>
      );
    case "chart":
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 20V10M12 20V4M6 20v-6" />
        </svg>
      );
    case "diagram":
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98" />
        </svg>
      );
    case "cloud":
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      );
    case "shield":
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case "code":
    default:
      return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
  }
}

export function ClaruswayOrbit({ isEn }: { isEn: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const labelsRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const geoTagRef = useRef<HTMLDivElement>(null);

  const programs = isEn ? PROGRAMS_DATA.en : PROGRAMS_DATA.de;

  useEffect(() => {
    const THREE = (window as any).THREE;
    if (!THREE || !stageRef.current || !containerRef.current) return;

    const DEG = Math.PI / 180;
    const R = 3.9;
    const RING_R = 7.2;
    const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const MOTION = REDUCED ? 0.3 : 1;

    function ll(lat: number, lon: number, r: number) {
      const phi = (90 - lat) * DEG;
      const th = (lon + 180) * DEG;
      return new THREE.Vector3(
        -r * Math.sin(phi) * Math.cos(th),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(th)
      );
    }

    const stage = stageRef.current;
    stage.innerHTML = "";

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    stage.appendChild(renderer.domElement);
    const PR = renderer.getPixelRatio();

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 400);
    camera.position.set(0, 0, 19);

    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
    keyLight.position.set(-4, 6, 9);
    scene.add(keyLight);
    const rimLight = new THREE.DirectionalLight(0xff5c8d, 0.6);
    rimLight.position.set(6, -2, -4);
    scene.add(rimLight);

    const world = new THREE.Group();
    scene.add(world);
    const tilt = new THREE.Group();
    tilt.rotation.x = 0.62;
    tilt.rotation.z = -0.04;
    world.add(tilt);
    const spin = new THREE.Group();
    tilt.add(spin);
    spin.rotation.y = -Math.PI / 2 - GERMANY_CENTER[1] * DEG - 0.62;

    // Stars background
    let starsObj: any = null;
    {
      const n = 1000;
      const p = new Float32Array(n * 3);
      const s = new Float32Array(n);
      for (let i = 0; i < n; i++) {
        const v = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
        v.multiplyScalar(40 + Math.random() * 60);
        p.set([v.x, v.y, v.z], i * 3);
        s[i] = Math.random();
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.BufferAttribute(p, 3));
      g.setAttribute("aS", new THREE.BufferAttribute(s, 1));
      const m = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        uniforms: { uT: { value: 0 }, uPR: { value: PR } },
        vertexShader: `attribute float aS; uniform float uT; uniform float uPR; varying float vA;
          void main(){ vec4 mv=modelViewMatrix*vec4(position,1.); vA=.25+.55*(.5+.5*sin(uT*(.6+aS*1.6)+aS*40.)); gl_PointSize=(.6+aS*1.4)*uPR; gl_Position=projectionMatrix*mv; }`,
        fragmentShader: `varying float vA; void main(){ vec2 c=gl_PointCoord-.5; if(length(c)>.5) discard; gl_FragColor=vec4(vec3(.85,.82,.98),vA*.75); }`,
      });
      starsObj = new THREE.Points(g, m);
      scene.add(starsObj);
    }

    // Globe core
    const core = new THREE.Mesh(
      new THREE.SphereGeometry(R * 0.995, 80, 80),
      new THREE.ShaderMaterial({
        uniforms: {
          uCol: { value: new THREE.Color(0x0e0d1a) },
          uRim: { value: new THREE.Color(0xe51a59) },
        },
        vertexShader: `varying vec3 vN; varying vec3 vV;
          void main(){ vec4 mv=modelViewMatrix*vec4(position,1.); vN=normalize(normalMatrix*normal); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }`,
        fragmentShader: `uniform vec3 uCol; uniform vec3 uRim; varying vec3 vN; varying vec3 vV;
          void main(){ float f=1.-max(dot(vN,vV),0.); float rim=pow(f,2.6);
            float l=clamp(dot(vN,normalize(vec3(-.45,.6,.65))),0.,1.);
            vec3 c=uCol*(.55+.75*l)+uRim*rim*.55+vec3(.5,.45,.9)*pow(f,6.)*.25;
            gl_FragColor=vec4(c,1.); }`,
      })
    );
    spin.add(core);

    // Atmosphere
    const atmo = new THREE.Mesh(
      new THREE.SphereGeometry(R * 1.15, 60, 60),
      new THREE.ShaderMaterial({
        side: THREE.BackSide,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: { uC: { value: new THREE.Color(0xe51a59) } },
        vertexShader: `varying vec3 vN; void main(){ vN=normalize(normalMatrix*normal); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
        fragmentShader: `uniform vec3 uC; varying vec3 vN; void main(){ float i=pow(max(.6-dot(vN,vec3(0.,0.,1.)),0.),4.)*.55; i=min(i,.55); gl_FragColor=vec4(mix(uC,vec3(.55,.35,1.),.3)*i,i); }`,
      })
    );
    tilt.add(atmo);

    // Land dots
    const gN = ll(GERMANY_CENTER[0], GERMANY_CENTER[1], 1).normalize();
    let dotsMat: any = null;
    function buildDots(mask: Uint8ClampedArray | null, w: number, h: number) {
      const N = mask ? 24000 : 9000;
      const pos: number[] = [];
      const hi: number[] = [];
      for (let i = 0; i < N; i++) {
        const y = 1 - (i / (N - 1)) * 2;
        const rr = Math.sqrt(1 - y * y);
        const th = i * 2.399963229728653;
        const x = Math.cos(th) * rr;
        const z = Math.sin(th) * rr;
        const lat = Math.asin(y) / DEG;
        const lon = Math.atan2(-z, x) / DEG;
        if (mask) {
          const u = Math.floor(((lon + 180) / 360) * w) % w;
          const v = Math.min(h - 1, Math.floor(((90 - lat) / 180) * h));
          if (mask[(v * w + u) * 4] > 110) continue;
        }
        pos.push(x * R, y * R, z * R);
        const d = Math.acos(Math.min(1, x * gN.x + y * gN.y + z * gN.z)) / DEG;
        hi.push(Math.max(0, Math.min(1, (20 - d) / 14)));
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
      g.setAttribute("aH", new THREE.Float32BufferAttribute(hi, 1));
      dotsMat = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        uniforms: {
          uSize: { value: mask ? 2.3 : 2.0 },
          uPR: { value: PR },
          uFade: { value: 0 },
          uT: { value: 0 },
          uBase: { value: new THREE.Color(0x6b6f8f) },
          uHi: { value: new THREE.Color(0xff3d78) },
        },
        vertexShader: `attribute float aH; uniform float uSize; uniform float uPR; uniform float uFade; uniform float uT;
          varying float vA; varying float vH;
          void main(){ vec4 mv=modelViewMatrix*vec4(position,1.); vec3 n=normalize(normalMatrix*normalize(position));
            float f=clamp(dot(n,normalize(-mv.xyz)),0.,1.); vH=aH;
            vA=(.18+.82*f)*uFade*(1.+aH*(.35+.25*sin(uT*2.2)));
            gl_PointSize=uSize*uPR*(1.+aH*.5)*(15./-mv.z); gl_Position=projectionMatrix*mv; }`,
        fragmentShader: `uniform vec3 uBase; uniform vec3 uHi; varying float vA; varying float vH;
          void main(){ float d=length(gl_PointCoord-.5); if(d>.5) discard; float a=smoothstep(.5,.15,d)*vA;
            gl_FragColor=vec4(mix(uBase,uHi,vH),min(a,1.)); }`,
      });
      spin.add(new THREE.Points(g, dotsMat));
    }

    {
      const img = new Image();
      img.crossOrigin = "anonymous";
      let done = false;
      const go = (d: Uint8ClampedArray | null, w: number, h: number) => {
        if (done) return;
        done = true;
        buildDots(d, w, h);
      };
      img.onload = () => {
        const c = document.createElement("canvas");
        c.width = 1024;
        c.height = 512;
        const x = c.getContext("2d");
        if (x) {
          x.drawImage(img, 0, 0, 1024, 512);
          try {
            go(x.getImageData(0, 0, 1024, 512).data, 1024, 512);
          } catch {
            go(null, 1024, 512);
          }
        } else {
          go(null, 1024, 512);
        }
      };
      img.onerror = () => go(null, 1024, 512);
      img.src = "/images/earth-water.png";
      setTimeout(() => go(null, 1024, 512), 3000);
    }

    // Germany extrude landmass
    const G_BASE = R + 0.006;
    const G_H = 0.075;
    let germanyCap: any = null;
    {
      const shape = new THREE.Shape(GERMANY.map((p) => new THREE.Vector2(p[0], p[1])));
      const g = new THREE.ExtrudeGeometry(shape, { depth: 1, bevelEnabled: false, steps: 1 });
      const p = g.attributes.position;
      const lat = new Float32Array(p.count);
      for (let i = 0; i < p.count; i++) {
        const lon = p.getX(i);
        const la = p.getY(i);
        const hh = p.getZ(i);
        lat[i] = la;
        const v = ll(la, lon, G_BASE + hh * G_H);
        p.setXYZ(i, v.x, v.y, v.z);
      }
      g.setAttribute("aLat", new THREE.BufferAttribute(lat, 1));
      g.computeVertexNormals();

      const capMat = new THREE.ShaderMaterial({
        uniforms: { uT: { value: 0 } },
        vertexShader: `attribute float aLat; varying float vLat; varying vec3 vN;
          void main(){ vLat=aLat; vN=normalize(normalMatrix*normalize(position)); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
        fragmentShader: `uniform float uT; varying float vLat; varying vec3 vN;
          void main(){
            vec3 magenta = vec3(0.90, 0.10, 0.35); // #e51a59
            vec3 bright = vec3(1.0, 0.28, 0.52);   // #ff4785
            float l = clamp(dot(vN, normalize(vec3(-.4, .7, .8))), 0., 1.);
            vec3 c = mix(magenta, bright, l * 0.45);
            float sweep = exp(-pow((vLat - (45.5 + mod(uT * 2.6, 16.))) * 1.1, 2.));
            c += vec3(1.0, 0.85, 0.92) * sweep * 0.35;
            gl_FragColor = vec4(c, 1.);
          }`,
      });
      const sideMat = new THREE.MeshBasicMaterial({ color: 0x4a0a1f });
      const germanyMesh = new THREE.Mesh(g, [capMat, sideMat]);
      spin.add(germanyMesh);

      // Glowing edges
      const pts = GERMANY.concat([GERMANY[0]]).map((q) => ll(q[1], q[0], G_BASE + G_H + 0.003));
      const og = new THREE.BufferGeometry().setFromPoints(pts);
      spin.add(new THREE.Line(og, new THREE.LineBasicMaterial({ color: 0xff3d78, transparent: true, opacity: 0.95 })));
      germanyCap = capMat;
    }

    // Neuss Pulse
    const pulses: { m: any; o: number }[] = [];
    {
      const p = ll(NEUSS[0], NEUSS[1], G_BASE + G_H + 0.006);
      const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), p.clone().normalize());
      const dot = new THREE.Mesh(new THREE.CircleGeometry(0.045, 20), new THREE.MeshBasicMaterial({ color: 0xffffff }));
      dot.position.copy(p);
      dot.quaternion.copy(q);
      spin.add(dot);

      for (let i = 0; i < 3; i++) {
        const m = new THREE.Mesh(
          new THREE.RingGeometry(0.05, 0.075, 36),
          new THREE.MeshBasicMaterial({ color: 0xe51a59, transparent: true, side: THREE.DoubleSide, depthWrite: false })
        );
        m.position.copy(p).multiplyScalar(1.0005 + i * 0.0002);
        m.quaternion.copy(q);
        spin.add(m);
        pulses.push({ m, o: i / 3 });
      }
    }

    // Flight Arcs
    const arcMats: any[] = [];
    {
      const end = ll(NEUSS[0], NEUSS[1], R + 0.08);
      const cityPos: number[] = [];
      CITIES.forEach((cty, k) => {
        const a = ll(cty[0], cty[1], R + 0.01);
        const ang = a.angleTo(end);
        const ctrl = a.clone().add(end).normalize().multiplyScalar(R + 0.35 + ang * 1.55);
        const pts = new THREE.QuadraticBezierCurve3(a, ctrl, end).getPoints(100);
        const g = new THREE.BufferGeometry().setFromPoints(pts);
        const t = new Float32Array(pts.length);
        for (let i = 0; i < t.length; i++) t[i] = i / (t.length - 1);
        g.setAttribute("aT", new THREE.BufferAttribute(t, 1));
        const m = new THREE.ShaderMaterial({
          transparent: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
          uniforms: { uT: { value: 0 }, uOff: { value: (k * 0.137) % 1 }, uSp: { value: 0.16 + (k % 4) * 0.03 } },
          vertexShader: `attribute float aT; varying float vT; void main(){ vT=aT; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
          fragmentShader: `uniform float uT; uniform float uOff; uniform float uSp; varying float vT;
            void main(){ float head=fract(uT*uSp+uOff)*1.35; float d=head-vT;
              float tr = d>0. ? exp(-d*7.) : 0.; tr*= step(vT,1.);
              float a=.06+tr*.95; vec3 c=mix(vec3(.89,.07,.33),vec3(1.,.85,.9),tr*tr*.8);
              gl_FragColor=vec4(c*a,a); }`,
        });
        arcMats.push(m);
        spin.add(new THREE.Line(g, m));
        cityPos.push(a.x, a.y, a.z);
      });
      const cg = new THREE.BufferGeometry();
      cg.setAttribute("position", new THREE.Float32BufferAttribute(cityPos, 3));
      spin.add(
        new THREE.Points(
          cg,
          new THREE.PointsMaterial({ color: 0xff6e98, size: 0.07, transparent: true, opacity: 0.9, depthWrite: false })
        )
      );
    }

    // Orbit Ring + Comet
    const ringTilt = new THREE.Group();
    ringTilt.rotation.x = 0.40;
    ringTilt.rotation.z = -0.15;
    world.add(ringTilt);
    const ringSpin = new THREE.Group();
    ringTilt.add(ringSpin);

    const nRing = 500;
    const posRing = new Float32Array(nRing * 3);
    const angRing = new Float32Array(nRing);
    for (let i = 0; i < nRing; i++) {
      const a = (i / (nRing - 1)) * Math.PI * 2;
      posRing.set([Math.cos(a) * RING_R, 0, Math.sin(a) * RING_R], i * 3);
      angRing[i] = a;
    }
    const gRing = new THREE.BufferGeometry();
    gRing.setAttribute("position", new THREE.BufferAttribute(posRing, 3));
    gRing.setAttribute("aA", new THREE.BufferAttribute(angRing, 1));
    const ringMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: { uHead: { value: 0 } },
      vertexShader: `attribute float aA; varying float vA; void main(){ vA=aA; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
      fragmentShader: `uniform float uHead; varying float vA;
        void main(){ float d=mod(uHead-vA,6.2831853); float tr=d<2.2? pow(1.-d/2.2,2.4):0.;
          float dash=step(.5,fract(vA*48.));
          float a=.10+dash*.05+tr*.9; vec3 c=mix(vec3(.75,.74,.85),vec3(.95,.1,.4),clamp(tr*1.4,0.,1.));
          gl_FragColor=vec4(c*a,a); }`,
    });
    ringSpin.add(new THREE.Line(gRing, ringMat));

    function glowTex(stops: [number, string][]) {
      const c = document.createElement("canvas");
      c.width = c.height = 128;
      const x = c.getContext("2d");
      if (x) {
        const g = x.createRadialGradient(64, 64, 0, 64, 64, 64);
        stops.forEach((s) => g.addColorStop(s[0], s[1]));
        x.fillStyle = g;
        x.fillRect(0, 0, 128, 128);
      }
      return new THREE.CanvasTexture(c);
    }

    // High-resolution Clarusway Double-Chevron Arrow Texture
    function claruswayArrowTex() {
      const c = document.createElement("canvas");
      c.width = 256;
      c.height = 256;
      const ctx = c.getContext("2d");
      if (ctx) {
        // Vibrant neon glow behind arrow
        const g = ctx.createRadialGradient(128, 128, 10, 128, 128, 120);
        g.addColorStop(0, "rgba(255, 60, 130, 0.95)");
        g.addColorStop(0.35, "rgba(229, 26, 89, 0.7)");
        g.addColorStop(0.7, "rgba(229, 26, 89, 0.2)");
        g.addColorStop(1, "rgba(229, 26, 89, 0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, 256, 256);

        ctx.save();
        ctx.translate(128, 128);
        ctx.shadowColor = "#ff286e";
        ctx.shadowBlur = 18;

        // First Chevron (White foreground with sharp glow)
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.moveTo(34, 0);
        ctx.lineTo(-8, -26);
        ctx.lineTo(6, 0);
        ctx.lineTo(-8, 26);
        ctx.closePath();
        ctx.fill();

        // Second Chevron (Clarusway vibrant Magenta #e51a59)
        ctx.fillStyle = "#e51a59";
        ctx.beginPath();
        ctx.moveTo(8, 0);
        ctx.lineTo(-34, -26);
        ctx.lineTo(-20, 0);
        ctx.lineTo(-34, 26);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
      }
      return new THREE.CanvasTexture(c);
    }

    const comet = new THREE.Group();
    ringSpin.add(comet);

    const cometGlow = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glowTex([[0, "rgba(255,90,140,1)"], [0.25, "rgba(229,18,84,.65)"], [1, "rgba(229,18,84,0)"]]),
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    cometGlow.scale.set(2.4, 2.4, 1);
    comet.add(cometGlow);

    const cometCore = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glowTex([[0, "rgba(255,255,255,1)"], [0.35, "rgba(255,220,235,.7)"], [1, "rgba(255,255,255,0)"]]),
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    cometCore.scale.set(0.65, 0.65, 1);
    comet.add(cometCore);

    // Prominent Clarusway Chevron Arrow Sprite riding the orbit
    const claruswayArrow = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: claruswayArrowTex(),
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    claruswayArrow.scale.set(1.8, 1.8, 1);
    comet.add(claruswayArrow);

    // Anchor beads
    const NODE_ANG = programs.map((_, k) => (k / programs.length) * Math.PI * 2);
    NODE_ANG.forEach((a) => {
      const b = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: glowTex([[0, "rgba(255,255,255,.9)"], [0.4, "rgba(255,255,255,.15)"], [1, "rgba(255,255,255,0)"]]),
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        })
      );
      b.scale.set(0.22, 0.22, 1);
      b.position.set(Math.cos(a) * RING_R, 0, Math.sin(a) * RING_R);
      ringSpin.add(b);
    });

    // Interaction state
    let W = 500;
    let H = 600;
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let velX = 0;
    let tiltOff = 0;
    let mx = 0;
    let my = 0;

    const handlePointerDown = (e: PointerEvent) => {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      stage.classList.add("cursor-grabbing");
      stage.setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: PointerEvent) => {
      const rect = stage.getBoundingClientRect();
      mx = ((e.clientX - rect.left) / W) * 2 - 1;
      my = ((e.clientY - rect.top) / H) * 2 - 1;
      if (!dragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      spin.rotation.y += dx * 0.006;
      velX = dx * 0.006;
      tiltOff = Math.max(-0.35, Math.min(0.35, tiltOff + dy * 0.003));
    };

    const handlePointerUp = () => {
      dragging = false;
      stage.classList.remove("cursor-grabbing");
    };

    stage.addEventListener("pointerdown", handlePointerDown);
    stage.addEventListener("pointermove", handlePointerMove);
    stage.addEventListener("pointerup", handlePointerUp);
    stage.addEventListener("pointercancel", handlePointerUp);

    // Layout
    function resize() {
      if (!containerRef.current) return;
      W = containerRef.current.clientWidth || 580;
      H = containerRef.current.clientHeight || 620;
      renderer.setSize(W, H);
      camera.aspect = W / H;
      const tan = Math.tan((camera.fov / 2) * DEG);
      const camZ = Math.max(18.5, (RING_R + 1.8) / (tan * Math.min(camera.aspect, 1.05)));
      camera.position.z = camZ;
      world.position.set(0, 0, 0);
      camera.updateProjectionMatrix();
    }

    const resizeObserver = new ResizeObserver(() => resize());
    resizeObserver.observe(containerRef.current);
    resize();

    // Loop
    const clock = new THREE.Clock();
    let t = 0;
    let head = -0.4;
    let intro = 0;
    let animId = 0;
    const tmpQ = new THREE.Quaternion();
    const tmpV = new THREE.Vector3();
    const tmpC = new THREE.Vector3();
    const camDir = new THREE.Vector3();
    const TAU = Math.PI * 2;

    function occluded(P: any) {
      world.getWorldPosition(tmpC);
      const O = camera.position;
      const d = P.clone().sub(O);
      const len = d.length();
      d.divideScalar(len);
      const tc = tmpC.clone().sub(O).dot(d);
      if (tc > len) return false;
      const closest = O.clone().add(d.multiplyScalar(tc));
      return closest.distanceTo(tmpC) < R * 1.02;
    }

    function toScreen(P: any) {
      const v = P.clone().project(camera);
      return [(v.x + 1) / 2 * W, (1 - v.y) / 2 * H, v.z];
    }

    function renderLoop() {
      animId = requestAnimationFrame(renderLoop);
      const dt = Math.min(clock.getDelta(), 0.05);
      t += dt;
      intro = Math.min(1, intro + dt / 2.0);
      const e = 1 - Math.pow(1 - intro, 3);

      camera.position.x += (mx * 0.35 - camera.position.x) * 0.04;
      camera.position.y += (-my * 0.25 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      // Facing factor
      spin.getWorldQuaternion(tmpQ);
      const gw = gN.clone().applyQuaternion(tmpQ);
      world.getWorldPosition(tmpC);
      camDir.copy(camera.position).sub(tmpC).normalize();
      const facing = gw.dot(camDir);

      if (!dragging) {
        const f = Math.max(0, facing);
        const sp = 0.13 * (0.12 + 0.88 * (1 - Math.pow(f, 4))) * MOTION;
        velX *= 0.94;
        spin.rotation.y += sp * dt + velX;
        tiltOff *= 0.985;
      }
      tilt.rotation.x = 0.62 + tiltOff;

      // Continuous orbit rotation
      ringSpin.rotation.y += 0.08 * dt * MOTION;
      head = (head + 0.38 * dt * MOTION) % TAU;

      if (dotsMat) {
        dotsMat.uniforms.uFade.value = Math.min(1, dotsMat.uniforms.uFade.value + dt * 0.7);
        dotsMat.uniforms.uT.value = t;
      }
      if (germanyCap) germanyCap.uniforms.uT.value = t;
      arcMats.forEach((m) => (m.uniforms.uT.value = t));
      if (starsObj) {
        starsObj.material.uniforms.uT.value = t;
        starsObj.rotation.y += dt * 0.003;
      }
      pulses.forEach((p) => {
        const k = (t * 0.55 * MOTION + p.o) % 1;
        const s = 1 + k * 5;
        p.m.scale.set(s, s, s);
        p.m.material.opacity = (1 - k) * 0.9;
      });

      // Position comet & Clarusway arrow along the orbit
      comet.position.set(Math.cos(head) * RING_R, 0, Math.sin(head) * RING_R);
      const pulseVal = 1 + Math.sin(t * 6) * 0.14;
      claruswayArrow.scale.set(1.9 * pulseVal, 1.9 * pulseVal, 1);
      cometGlow.scale.set(2.5 * pulseVal, 2.5 * pulseVal, 1);
      ringMat.uniforms.uHead.value = head;

      // Dynamically orient Clarusway arrow along the exact tangent of the orbit
      const pNow = ringSpin.localToWorld(tmpV.set(Math.cos(head) * RING_R, 0, Math.sin(head) * RING_R).clone());
      const pNext = ringSpin.localToWorld(tmpC.set(Math.cos(head + 0.05) * RING_R, 0, Math.sin(head + 0.05) * RING_R).clone());
      const [x1, y1] = toScreen(pNow);
      const [x2, y2] = toScreen(pNext);
      claruswayArrow.material.rotation = -Math.atan2(y2 - y1, x2 - x1);

      renderer.render(scene, camera);

      // DOM Node coordinates & smooth continuous orbit strictly OUTSIDE the globe
      ringSpin.updateMatrixWorld();
      world.getWorldPosition(tmpC);
      const cView = tmpC.clone().applyMatrix4(camera.matrixWorldInverse).z;

      // Find which card is closest to the zooming Clarusway arrow
      let minCardDist = Infinity;
      let activeIndex = 0;

      nodeRefs.current.forEach((el, k) => {
        if (!el) return;
        const ang = NODE_ANG[k];
        let diff = ((head - ang) % TAU + TAU) % TAU;
        if (diff > Math.PI) diff -= TAU;
        const distToHead = Math.abs(diff);
        if (distToHead < minCardDist) {
          minCardDist = distToHead;
          activeIndex = k;
        }
      });

      // Render each card along the outer orbit — NEVER touching or overlapping the globe
      nodeRefs.current.forEach((el, k) => {
        if (!el) return;
        const ang = NODE_ANG[k];
        const P = ringSpin.localToWorld(tmpV.set(Math.cos(ang) * RING_R, 0, Math.sin(ang) * RING_R).clone());
        const [sx, sy] = toScreen(P);
        const vz = P.clone().applyMatrix4(camera.matrixWorldInverse).z - cView;
        const depth = Math.max(-1, Math.min(1, vz / RING_R));
        const isActive = k === activeIndex;

        // Smooth depth scaling and opacity: NEVER 0, ALWAYS smoothly visible!
        const scale = isActive ? 1.08 : 0.88 + (depth + 1) * 0.08;
        const opacity = (0.78 + (depth + 1) * 0.11) * e;
        const zIndex = isActive ? 120 : Math.round((depth + 1) * 50);

        el.style.transform = `translate3d(${sx.toFixed(1)}px,${sy.toFixed(1)}px,0) translate(-50%,-50%) scale(${scale.toFixed(3)})`;
        el.style.opacity = opacity.toFixed(3);
        el.style.zIndex = String(zIndex);
        el.classList.toggle("orbit-node-active", isActive);
      });

      // Update Deutschland Pin Card (pinned to Neuss / Germany on the larger globe)
      if (geoTagRef.current) {
        const pNeuss = ll(NEUSS[0], NEUSS[1], R + 0.15);
        const neussWorld = spin.localToWorld(pNeuss);
        const [nx, ny] = toScreen(neussWorld);
        const isNeussFacing = facing > 0.12 && !occluded(neussWorld);
        const gOp = (isNeussFacing ? Math.max(0, Math.min(1, (facing - 0.12) / 0.25)) : 0) * e;
        const tw = geoTagRef.current.offsetWidth || 155;
        const tx = Math.min(Math.max(10, nx + 12), W - tw - 10);
        geoTagRef.current.style.transform = `translate3d(${tx.toFixed(1)}px,${(ny - 22).toFixed(1)}px,0)`;
        geoTagRef.current.style.opacity = gOp.toFixed(3);
      }
    }

    animId = requestAnimationFrame(renderLoop);

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      stage.removeEventListener("pointerdown", handlePointerDown);
      stage.removeEventListener("pointermove", handlePointerMove);
      stage.removeEventListener("pointerup", handlePointerUp);
      stage.removeEventListener("pointercancel", handlePointerUp);
      renderer.dispose();
      stage.innerHTML = "";
    };
  }, [isEn]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[660px] h-[560px] sm:h-[620px] lg:h-[660px] select-none flex items-center justify-center overflow-visible"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, rgba(229,26,89,0.06) 0%, transparent 70%)",
      }}
    >
      {/* Three.js Canvas Container */}
      <div
        ref={stageRef}
        className="absolute inset-0 z-0 cursor-grab touch-none overflow-hidden"
        style={{ cursor: "grab" }}
      />

      {/* Floating 3D Projected Labels */}
      <div ref={labelsRef} className="absolute inset-0 z-10 pointer-events-none overflow-visible">
        {programs.map((p, idx) => (
          <Link
            key={p.id}
            ref={(el) => {
              nodeRefs.current[idx] = el;
            }}
            to={p.to}
            className="orbit-node pointer-events-auto absolute left-0 top-0 flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-gray-200/80 bg-white/95 backdrop-blur-md text-slate-700 font-semibold text-xs tracking-tight shadow-[0_4px_16px_rgba(0,0,0,0.07)] hover:scale-105 transition-all"
            style={{
              willChange: "transform, opacity",
              opacity: 0,
            }}
          >
            <span className="node-icon w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 transition-all shrink-0">
              <ProgramIcon type={p.icon} />
            </span>
            <span className="node-text whitespace-nowrap transition-colors">
              {p.short}
            </span>
          </Link>
        ))}

        {/* Deutschland Pin Card */}
        <div
          ref={geoTagRef}
          className="absolute left-0 top-0 flex items-center gap-2.5 px-3 py-1.5 rounded-2xl border border-gray-100 bg-white/95 backdrop-blur-md text-gray-800 shadow-[0_8px_24px_rgba(0,0,0,0.08)] pointer-events-none transition-opacity duration-300"
          style={{ willChange: "transform, opacity", opacity: 0 }}
        >
          <span className="w-5 h-3.5 rounded-[2px] overflow-hidden flex flex-col shadow-xs border border-gray-200 shrink-0">
            <i className="flex-1 bg-black" />
            <i className="flex-1 bg-[#DD0000]" />
            <i className="flex-1 bg-[#FFCE00]" />
          </span>
          <span className="text-[11px] leading-tight">
            <b className="block font-bold text-gray-900 tracking-tight">Deutschland</b>
            <span className="block text-[9px] text-gray-500 font-medium">Clarusway GmbH · Neuss</span>
          </span>
        </div>
      </div>

      {/* Custom Styles for active orbit nodes */}
      <style>{`
        .orbit-node {
          box-shadow: 0 4px 18px -2px rgba(0, 0, 0, 0.07), 0 2px 6px -1px rgba(0, 0, 0, 0.04);
          transition: border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease;
        }
        .orbit-node:hover {
          border-color: rgba(229, 26, 89, 0.4) !important;
          box-shadow: 0 8px 24px -2px rgba(0, 0, 0, 0.12) !important;
        }
        .orbit-node.orbit-node-active {
          border-color: #e51a59 !important;
          background-color: #ffffff !important;
          box-shadow: 0 0 0 1px rgba(229, 26, 89, 0.3), 0 0 32px 6px rgba(229, 26, 89, 0.38), 0 8px 22px -2px rgba(229, 26, 89, 0.28) !important;
        }
        .orbit-node.orbit-node-active .node-text {
          color: #e51a59 !important;
          font-weight: 700 !important;
        }
        .orbit-node.orbit-node-active .node-icon {
          background-color: #e51a59 !important;
          color: #ffffff !important;
          box-shadow: 0 0 12px rgba(229, 26, 89, 0.6) !important;
        }
      `}</style>
    </div>
  );
}
