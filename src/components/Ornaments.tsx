import type { CSSProperties } from "react";
import { useId, useMemo } from "react";

type Art = { className?: string; style?: CSSProperties };

/* ---------------------------------------------------------------
   Aghora Labs mark — the "A" prism from the reference header
   --------------------------------------------------------------- */
export function Logo({ className, style }: Art) {
  const id = useId();
  return (
    <svg className={className} style={style} viewBox="0 0 40 40" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-a`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8E7BFF" />
          <stop offset="100%" stopColor="#5A49D6" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill={`url(#${id}-a)`} />
      <path d="M20 9.5 30 30.5h-5.6L20 20.6l-4.4 9.9H10L20 9.5Z" fill="#fff" opacity=".95" />
      <path d="M20 9.5 30 30.5h-5.6L20 20.6V9.5Z" fill="#fff" opacity=".55" />
    </svg>
  );
}

/* ---------------------------------------------------------------
   Diya (oil lamp) with a live flame
   --------------------------------------------------------------- */
export function Diya({ className, style }: Art) {
  const id = useId();
  return (
    <svg className={className} style={style} viewBox="0 0 120 130" aria-hidden="true">
      <defs>
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%">
          <stop offset="0%" stopColor="#FFC978" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#FFC978" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-clay`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#B96A38" />
          <stop offset="100%" stopColor="#5C2E19" />
        </linearGradient>
        <linearGradient id={`${id}-flame`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFF6D2" />
          <stop offset="45%" stopColor="#FFC24A" />
          <stop offset="100%" stopColor="#F2611F" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="62" r="56" fill={`url(#${id}-glow)`} />
      <g style={{ transformOrigin: "60px 78px", animation: "flicker 2.4s ease-in-out infinite" }}>
        <path d="M60 34c9 12 14 20 14 29a14 14 0 0 1-28 0c0-9 5-17 14-29Z" fill={`url(#${id}-flame)`} />
        <ellipse cx="60" cy="68" rx="4.5" ry="8" fill="#FFF8E2" opacity="0.9" />
      </g>
      <path d="M26 84h68c-4 14-16 22-34 22S30 98 26 84Z" fill={`url(#${id}-clay)`} />
      <ellipse cx="60" cy="84" rx="34" ry="8" fill="#D07C41" />
      <ellipse cx="60" cy="84" rx="26" ry="5" fill="#3A1C10" opacity="0.6" />
      <style>{`@keyframes flicker{0%,100%{transform:scale(1) rotate(-1deg);opacity:.95}50%{transform:scale(1.08) rotate(2deg);opacity:1}}`}</style>
    </svg>
  );
}

/* ---------------------------------------------------------------
   Bansuri (flute)
   --------------------------------------------------------------- */
export function Flute({ className, style }: Art) {
  const id = useId();
  return (
    <svg className={className} style={style} viewBox="0 0 420 120" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-w`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8B96B" />
          <stop offset="50%" stopColor="#B47C34" />
          <stop offset="100%" stopColor="#6A4318" />
        </linearGradient>
      </defs>
      <g transform="rotate(-9 210 60)">
        <rect x="20" y="48" width="380" height="20" rx="10" fill={`url(#${id}-w)`} />
        <rect x="20" y="48" width="380" height="7" rx="4" fill="#F3D492" opacity="0.35" />
        {[70, 120, 168, 214, 258, 300].map((x) => (
          <ellipse key={x} cx={x} cy="58" rx="5.5" ry="4.5" fill="#3A230B" />
        ))}
        <rect x="384" y="44" width="12" height="28" rx="5" fill="#E0A93E" />
        <rect x="34" y="44" width="9" height="28" rx="4" fill="#E0A93E" />
      </g>
    </svg>
  );
}

/* ---------------------------------------------------------------
   Small icon set
   --------------------------------------------------------------- */
const ICON_PATHS: Record<string, string> = {
  design: "M4 20 20 4M14 4h6v6M4 14v6h6",
  product: "M12 3 21 8v8l-9 5-9-5V8l9-5ZM3 8l9 5 9-5M12 13v8",
  shield: "M12 3 20 6v6c0 4.4-3.2 7.9-8 9-4.8-1.1-8-4.6-8-9V6l8-3Zm-3 9 2 2 4-4",
  heart: "M12 20s-7-4.4-7-9.3A4 4 0 0 1 12 8a4 4 0 0 1 7-.3C19 15.6 12 20 12 20Z",
  spark: "M12 3v5M12 16v5M3 12h5M16 12h5M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3",
  lamp: "M5 15h14c-1 4-4 6-7 6s-6-2-7-6ZM12 3c2 3 3 4.5 3 6a3 3 0 0 1-6 0c0-1.5 1-3 3-6Z",
};

export function Icon({ name, size = 20 }: { name: keyof typeof ICON_PATHS | string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={ICON_PATHS[name] ?? ICON_PATHS.spark} />
    </svg>
  );
}

export function SocialIcon({ name }: { name: "linkedin" | "instagram" | "x" | "mail" }) {
  const common = { width: 16, height: 16, viewBox: "0 0 24 24", "aria-hidden": true } as const;
  if (name === "linkedin")
    return (
      <svg {...common} fill="currentColor">
        <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3V9.5Zm6.5 0h3.8v1.6h.05a4.2 4.2 0 0 1 3.77-2c4.03 0 4.78 2.6 4.78 6V21h-4v-5.2c0-1.24-.02-2.84-1.75-2.84-1.76 0-2.03 1.35-2.03 2.75V21h-4V9.5Z" />
      </svg>
    );
  if (name === "instagram")
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    );
  if (name === "x")
    return (
      <svg {...common} fill="currentColor">
        <path d="M17.5 3h3.2l-7 8 8.2 10h-6.4l-5-6.1L4.7 21H1.5l7.5-8.6L1.1 3h6.6l4.5 5.6L17.5 3Zm-1.1 16h1.8L7.7 4.8H5.8L16.4 19Z" />
      </svg>
    );
  return (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

/* ---------------------------------------------------------------
   Drifting embers
   --------------------------------------------------------------- */
export function Embers({ count = 22 }: { count?: number }) {
  const specs = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: `${(i * 37 + 11) % 100}%`,
        size: 3 + ((i * 13) % 7),
        delay: -((i * 1.9) % 18),
        duration: 16 + ((i * 7) % 12),
        drift: `${(((i * 29) % 100) - 50) * 1.4}px`,
        bottom: `${-10 - ((i * 11) % 25)}%`,
      })),
    [count],
  );

  return (
    <>
      {specs.map((s, i) => (
        <span
          key={i}
          className="ember"
          style={{
            left: s.left,
            bottom: s.bottom,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            ["--drift" as string]: s.drift,
          }}
        />
      ))}
    </>
  );
}
