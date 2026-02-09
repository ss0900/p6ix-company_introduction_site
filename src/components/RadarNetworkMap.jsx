import { useId } from "react";

const baseNodes = [
  { x: 210, y: 220, r: 5.5, a: 0.66 },
  { x: 260, y: 265, r: 4.8, a: 0.58 },
  { x: 305, y: 210, r: 5.2, a: 0.62 },
  { x: 340, y: 255, r: 4.2, a: 0.54 },
  { x: 410, y: 325, r: 5.7, a: 0.64 },
  { x: 445, y: 355, r: 4.2, a: 0.56 },
  { x: 505, y: 265, r: 4.8, a: 0.6 },
  { x: 550, y: 290, r: 5, a: 0.64 },
  { x: 575, y: 352, r: 4.3, a: 0.56 },
  { x: 630, y: 310, r: 5.4, a: 0.66 },
  { x: 668, y: 338, r: 4.6, a: 0.58 },
  { x: 715, y: 292, r: 5.2, a: 0.62 },
  { x: 742, y: 347, r: 4.4, a: 0.52 },
  { x: 476, y: 220, r: 4.1, a: 0.48 },
  { x: 384, y: 283, r: 4.1, a: 0.48 },
];

const highlightedNodes = [
  { x: 302, y: 238, r: 7.8 },
  { x: 506, y: 228, r: 7.4 },
  { x: 652, y: 273, r: 8.2 },
  { x: 426, y: 382, r: 8.6 },
];

function RadarNetworkMap() {
  const titleId = useId();
  const descId = useId();
  const glowId = useId();
  const softGlowId = useId();

  return (
    <svg
      className="eppm-radar-network-svg"
      viewBox="0 0 960 600"
      role="img"
      aria-labelledby={`${titleId} ${descId}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id={titleId}>Radar network map visualization</title>
      <desc id={descId}>
        Stylized world map with radar rings, network nodes, and subtle
        connection lines.
      </desc>

      <defs>
        <radialGradient id={softGlowId} cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#5ad7ff" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#5ad7ff" stopOpacity="0" />
        </radialGradient>
        <filter id={glowId} x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="3.6" result="blurred" />
          <feColorMatrix
            in="blurred"
            type="matrix"
            values="0 0 0 0 0.35 0 0 0 0 0.86 0 0 0 0 1 0 0 0 0.72 0"
            result="colored"
          />
          <feMerge>
            <feMergeNode in="colored" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g opacity="0.18" fill="#91b8dd">
        <path d="M118 196L148 170L220 164L250 184L238 214L214 225L173 236L132 226L112 206Z" />
        <path d="M224 250L250 242L284 250L296 274L272 292L238 292L220 274Z" />
        <path d="M298 166L332 150L404 146L468 164L498 190L476 216L428 218L398 202L366 212L330 204L296 182Z" />
        <path d="M412 232L456 234L494 256L502 294L468 320L432 334L402 320L392 282Z" />
        <path d="M478 156L528 148L604 156L654 180L662 208L630 224L572 214L528 196L492 186Z" />
        <path d="M640 214L690 224L736 248L728 276L688 286L654 274L632 246Z" />
        <path d="M658 324L694 314L726 330L734 356L712 376L674 376L650 350Z" />
        <path d="M750 362L790 356L824 374L834 404L812 428L778 430L752 406Z" />
      </g>

      <g stroke="#8cd4ff" strokeWidth="1.2" fill="none" opacity="0.33">
        <circle cx="480" cy="300" r="72" />
        <circle cx="480" cy="300" r="132" />
        <circle cx="480" cy="300" r="192" />
        <circle cx="480" cy="300" r="252" />
      </g>

      <g stroke="#89ceff" strokeWidth="1" opacity="0.27">
        <line x1="110" y1="300" x2="850" y2="300" />
        <line x1="480" y1="78" x2="480" y2="522" />
      </g>

      <g stroke="#6ecaff" strokeWidth="1.2" fill="none" opacity="0.36">
        <path d="M302 238Q404 208 506 228" />
        <path d="M506 228Q590 236 652 273" />
        <path d="M652 273Q564 340 426 382" />
      </g>

      <g fill="#68cfff">
        {baseNodes.map((node, index) => (
          <circle
            key={`node-${index}`}
            cx={node.x}
            cy={node.y}
            r={node.r}
            opacity={node.a}
          />
        ))}
      </g>

      <g>
        {highlightedNodes.map((node, index) => (
          <g key={`highlight-${index}`}>
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r * 3}
              fill={`url(#${softGlowId})`}
            />
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill="#78d8ff"
              opacity="0.96"
              filter={`url(#${glowId})`}
            />
          </g>
        ))}
      </g>
    </svg>
  );
}

export default RadarNetworkMap;
