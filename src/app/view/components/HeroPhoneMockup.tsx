import clsx from 'clsx'

type HeroPhoneMockupProps = {
  className?: string
}

const metricCards = [
  { x: 60, y: 276, iconSurface: 'rgba(134,166,255,0.16)' },
  { x: 206, y: 276, iconSurface: 'rgba(208,163,255,0.16)' },
  { x: 60, y: 456, iconSurface: 'rgba(255,208,100,0.16)' },
  { x: 206, y: 456, iconSurface: 'rgba(109,227,192,0.16)' },
]

const navItems = [
  { x: 96, active: false },
  { x: 164, active: false },
  { x: 232, active: true },
  { x: 300, active: false },
]

export function HeroPhoneMockup({ className }: HeroPhoneMockupProps) {
  return (
    <svg
      viewBox="0 0 390 850"
      role="img"
      aria-label="Mockup em SVG do app Cognix com interface em shimmer"
      className={clsx('h-auto w-full', className)}
    >
      <defs>
        <linearGradient id="phone-body" x1="195" x2="195" y1="18" y2="878">
          <stop offset="0%" stopColor="#192234" />
          <stop offset="55%" stopColor="#111827" />
          <stop offset="100%" stopColor="#0A1020" />
        </linearGradient>
        <linearGradient id="screen-surface" x1="195" x2="195" y1="36" y2="860">
          <stop offset="0%" stopColor="#0C132A" />
          <stop offset="45%" stopColor="#0A1024" />
          <stop offset="100%" stopColor="#090E21" />
        </linearGradient>
        <linearGradient id="card-surface" x1="60" x2="334" y1="276" y2="636">
          <stop offset="0%" stopColor="#182440" />
          <stop offset="100%" stopColor="#17223D" />
        </linearGradient>
        <linearGradient id="nav-active" x1="214" x2="282" y1="794" y2="868">
          <stop offset="0%" stopColor="#1A2445" />
          <stop offset="100%" stopColor="#141F3C" />
        </linearGradient>
        <linearGradient id="shimmer" x1="-100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
          <stop offset="45%" stopColor="rgba(255,255,255,0.12)" />
          <stop offset="55%" stopColor="rgba(255,255,255,0.26)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.08)" />
          <animate attributeName="x1" from="-100%" to="100%" dur="2.8s" repeatCount="indefinite" />
          <animate attributeName="x2" from="0%" to="200%" dur="2.8s" repeatCount="indefinite" />
        </linearGradient>
        <radialGradient
          id="top-purple-glow"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="translate(310 118) rotate(117) scale(120 130)"
        >
          <stop stopColor="#8B5CF6" stopOpacity="0.34" />
          <stop offset="0.45" stopColor="#7C3AED" stopOpacity="0.12" />
          <stop offset="1" stopColor="#7C3AED" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="bottom-glow"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="translate(250 828) rotate(90) scale(90 110)"
        >
          <stop stopColor="#8B5CF6" stopOpacity="0.2" />
          <stop offset="1" stopColor="#8B5CF6" stopOpacity="0" />
        </radialGradient>
        <clipPath id="screen-clip">
          <rect x="52" y="36" width="286" height="824" rx="46" />
        </clipPath>
      </defs>

      <g transform="translate(0 10) scale(1 0.935)">
        <rect x="34" y="18" width="322" height="860" rx="58" fill="url(#phone-body)" />
        <rect
          x="38"
          y="22"
          width="314"
          height="852"
          rx="54"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="1.5"
        />
        <rect x="136" y="46" width="118" height="32" rx="16" fill="#050A16" />
        <rect x="30" y="180" width="5" height="92" rx="2.5" fill="#374151" />
        <rect x="355" y="226" width="5" height="108" rx="2.5" fill="#374151" />

        <g clipPath="url(#screen-clip)">
          <rect x="52" y="36" width="286" height="824" rx="46" fill="url(#screen-surface)" />
          <rect x="52" y="36" width="286" height="824" rx="46" fill="url(#top-purple-glow)" />
          <rect x="52" y="730" width="286" height="130" rx="46" fill="url(#bottom-glow)" />

          <rect x="72" y="52" width="46" height="12" rx="6" fill="url(#shimmer)" />
          <rect x="286" y="54" width="16" height="8" rx="4" fill="url(#shimmer)" />
          <rect x="308" y="50" width="18" height="12" rx="6" fill="url(#shimmer)" />
          <rect x="332" y="48" width="24" height="16" rx="8" fill="url(#shimmer)" />

          <rect x="60" y="96" width="270" height="66" rx="24" fill="#1A2542" />
          <rect x="78" y="110" width="28" height="28" rx="12" fill="rgba(196,181,253,0.16)" />
          <rect x="118" y="116" width="92" height="14" rx="7" fill="url(#shimmer)" />
          <rect x="250" y="108" width="38" height="42" rx="16" fill="#111A34" />
          <rect x="259" y="120" width="20" height="18" rx="9" fill="url(#shimmer)" />
          <rect x="294" y="108" width="38" height="42" rx="16" fill="#111A34" />
          <rect x="303" y="120" width="20" height="18" rx="9" fill="url(#shimmer)" />

          <rect x="60" y="192" width="182" height="20" rx="10" fill="url(#shimmer)" />
          <rect x="60" y="230" width="246" height="12" rx="6" fill="url(#shimmer)" />
          <rect x="60" y="250" width="224" height="12" rx="6" fill="url(#shimmer)" />

          {metricCards.map((card) => (
            <g key={`${card.x}-${card.y}`}>
              <rect
                x={card.x}
                y={card.y}
                width="124"
                height="138"
                rx="24"
                fill="url(#card-surface)"
                stroke="#263558"
                strokeWidth="1.2"
              />
              <rect
                x={card.x + 16}
                y={card.y + 18}
                width="38"
                height="38"
                rx="14"
                fill={card.iconSurface}
              />
              <rect
                x={card.x + 16}
                y={card.y + 72}
                width="82"
                height="10"
                rx="5"
                fill="url(#shimmer)"
              />
              <rect
                x={card.x + 16}
                y={card.y + 104}
                width="76"
                height="8"
                rx="4"
                fill="url(#shimmer)"
              />
              <rect
                x={card.x + 16}
                y={card.y + 116}
                width="62"
                height="8"
                rx="4"
                fill="url(#shimmer)"
              />
            </g>
          ))}

          <rect x="60" y="636" width="198" height="20" rx="10" fill="url(#shimmer)" />
          <rect x="60" y="674" width="244" height="12" rx="6" fill="url(#shimmer)" />
          <rect x="60" y="694" width="216" height="12" rx="6" fill="url(#shimmer)" />

          <rect
            x="60"
            y="738"
            width="270"
            height="90"
            rx="24"
            fill="url(#card-surface)"
            stroke="#263558"
            strokeWidth="1.2"
          />
          <rect x="78" y="756" width="40" height="40" rx="15" fill="rgba(255,146,117,0.14)" />
          <rect x="132" y="762" width="84" height="10" rx="5" fill="url(#shimmer)" />
          <rect x="132" y="792" width="142" height="16" rx="8" fill="url(#shimmer)" />
          <rect x="132" y="816" width="126" height="10" rx="5" fill="url(#shimmer)" />

          <rect x="68" y="810" width="252" height="68" rx="24" fill="#121A34" />
          <rect x="198" y="800" width="68" height="72" rx="22" fill="url(#nav-active)" />
          <rect x="198" y="800" width="68" height="72" rx="22" fill="url(#bottom-glow)" />

          {navItems.map((item) => (
            <g key={item.x}>
              <rect
                x={item.x - 10}
                y="820"
                width="20"
                height="20"
                rx="10"
                fill={item.active ? 'rgba(196,181,253,0.9)' : 'url(#shimmer)'}
              />
              <rect
                x={item.x - 18}
                y="848"
                width="36"
                height="8"
                rx="4"
                fill={item.active ? 'rgba(196,181,253,0.72)' : 'url(#shimmer)'}
              />
            </g>
          ))}

          <rect x="151" y="872" width="88" height="4" rx="2" fill="#E5E7EB" opacity="0.72" />
        </g>
      </g>
    </svg>
  )
}
