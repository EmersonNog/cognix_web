export function MobileHeroVisual() {
  return (
    <div className="relative mx-auto mt-7 h-[16.75rem] w-full max-w-[22.5rem] sm:hidden" aria-hidden="true">
      <svg
        className="h-full w-full overflow-visible"
        viewBox="0 0 360 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>
          {`
            .mobile-visual-float {
              animation: mobileVisualFloat 5.8s ease-in-out infinite;
              transform-origin: 180px 116px;
            }

            .mobile-visual-card {
              animation: mobileVisualCardGlow 3.8s ease-in-out infinite;
            }

            .mobile-visual-scan {
              animation: mobileVisualScan 3.2s ease-in-out infinite;
            }

            .mobile-visual-orbit {
              animation: mobileVisualOrbit 8s linear infinite;
              transform-origin: 180px 110px;
            }

            .mobile-visual-pulse {
              animation: mobileVisualPulse 2.4s ease-in-out infinite;
            }

            .mobile-visual-bar-one {
              animation: mobileVisualBarOne 3.4s ease-in-out infinite;
              transform-origin: 84px 188px;
            }

            .mobile-visual-bar-two {
              animation: mobileVisualBarTwo 3.4s ease-in-out infinite;
              transform-origin: 84px 202px;
            }

            .mobile-visual-bar-three {
              animation: mobileVisualBarThree 3.4s ease-in-out infinite;
              transform-origin: 84px 216px;
            }

            @keyframes mobileVisualFloat {
              0%, 100% {
                transform: translate3d(0, 0, 0) rotate(-1deg);
              }

              50% {
                transform: translate3d(0, -10px, 0) rotate(1deg);
              }
            }

            @keyframes mobileVisualCardGlow {
              0%, 100% {
                opacity: 0.82;
              }

              50% {
                opacity: 1;
              }
            }

            @keyframes mobileVisualScan {
              0% {
                transform: translateX(-130px);
                opacity: 0;
              }

              28% {
                opacity: 0.8;
              }

              66% {
                opacity: 0.28;
              }

              100% {
                transform: translateX(210px);
                opacity: 0;
              }
            }

            @keyframes mobileVisualOrbit {
              to {
                transform: rotate(360deg);
              }
            }

            @keyframes mobileVisualPulse {
              0%, 100% {
                opacity: 0.42;
                transform: scale(1);
              }

              50% {
                opacity: 0.9;
                transform: scale(1.04);
              }
            }

            @keyframes mobileVisualBarOne {
              0%, 100% {
                transform: scaleX(0.78);
              }

              50% {
                transform: scaleX(1);
              }
            }

            @keyframes mobileVisualBarTwo {
              0%, 100% {
                transform: scaleX(0.64);
              }

              50% {
                transform: scaleX(0.86);
              }
            }

            @keyframes mobileVisualBarThree {
              0%, 100% {
                transform: scaleX(0.48);
              }

              50% {
                transform: scaleX(0.72);
              }
            }
          `}
        </style>

        <defs>
          <linearGradient id="mobile-visual-card" x1="74" y1="42" x2="278" y2="224" gradientUnits="userSpaceOnUse">
            <stop stopColor="#173957" stopOpacity="0.92" />
            <stop offset="1" stopColor="#071827" stopOpacity="0.88" />
          </linearGradient>
          <linearGradient id="mobile-visual-accent" x1="90" y1="0" x2="250" y2="220" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8BFCFF" />
            <stop offset="0.5" stopColor="#40D8FF" />
            <stop offset="1" stopColor="#6DF6C8" />
          </linearGradient>
          <radialGradient id="mobile-visual-glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(178 122) rotate(90) scale(122 150)">
            <stop stopColor="#3DF6FF" stopOpacity="0.24" />
            <stop offset="1" stopColor="#3DF6FF" stopOpacity="0" />
          </radialGradient>
          <filter id="mobile-visual-soft-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="0 0 0 0 0.239 0 0 0 0 0.965 0 0 0 0 1 0 0 0 0.72 0"
            />
            <feBlend in="SourceGraphic" />
          </filter>
        </defs>

        <ellipse cx="180" cy="114" rx="148" ry="102" fill="url(#mobile-visual-glow)" />

        <g className="mobile-visual-orbit" opacity="0.82">
          <ellipse cx="180" cy="110" rx="136" ry="82" stroke="#7EFBFF" strokeOpacity="0.16" />
          <circle cx="316" cy="110" r="4" fill="#7EFBFF" filter="url(#mobile-visual-soft-glow)" />
          <circle cx="44" cy="110" r="2.5" fill="#3DF6FF" fillOpacity="0.55" />
        </g>

        <g className="mobile-visual-float" transform="translate(0 -8)">
          <rect
            x="46"
            y="36"
            width="268"
            height="200"
            rx="28"
            fill="url(#mobile-visual-card)"
            stroke="#7EFBFF"
            strokeOpacity="0.18"
          />
          <rect
            className="mobile-visual-card"
            x="70"
            y="62"
            width="126"
            height="28"
            rx="14"
            fill="#092338"
            stroke="#7EFBFF"
            strokeOpacity="0.34"
          />
          <circle cx="88" cy="76" r="3.5" fill="#7EFBFF" filter="url(#mobile-visual-soft-glow)" />
          <text x="103" y="80" fill="#A4FBFF" fontSize="10" fontWeight="700" letterSpacing="2.3">
            COGNIX IA
          </text>

          <rect x="68" y="104" width="216" height="120" rx="22" fill="#0C2337" fillOpacity="0.72" stroke="#FFFFFF" strokeOpacity="0.08" />
          <g className="mobile-visual-scan">
            <rect x="78" y="104" width="46" height="120" rx="22" fill="#7EFBFF" fillOpacity="0.1" />
          </g>

          <text x="84" y="126" fill="#7EFBFF" fontSize="9" fontWeight="800" letterSpacing="2.4">
            SEM PERDER TEMPO
          </text>
          <text x="84" y="151" fill="#FFFFFF" fontSize="18" fontWeight="800">
            Revise o que
          </text>
          <text x="84" y="174" fill="#FFFFFF" fontSize="18" fontWeight="800">
            mais importa
          </text>

          <rect x="84" y="191" width="132" height="5" rx="2.5" fill="#FFFFFF" fillOpacity="0.12" />
          <rect className="mobile-visual-bar-one" x="84" y="191" width="132" height="5" rx="2.5" fill="url(#mobile-visual-accent)" />

          <rect x="84" y="205" width="106" height="5" rx="2.5" fill="#FFFFFF" fillOpacity="0.1" />
          <rect className="mobile-visual-bar-two" x="84" y="205" width="106" height="5" rx="2.5" fill="#58D8FF" />

          <rect x="214" y="52" width="102" height="66" rx="19" fill="#0B243A" fillOpacity="0.82" stroke="#7EFBFF" strokeOpacity="0.16" />
          <text x="232" y="77" fill="#7EFBFF" fontSize="9" fontWeight="800" letterSpacing="2">
            PLANO
          </text>
          <text x="232" y="102" fill="#FFFFFF" fontSize="19" fontWeight="800" letterSpacing="0.5">
            CERTO
          </text>

          <g className="mobile-visual-pulse">
            <circle cx="286" cy="153" r="18" fill="#7EFBFF" fillOpacity="0.08" />
            <path
              d="M274 153C279 143 292 143 297 153C292 163 279 163 274 153Z"
              stroke="#7EFBFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="286" cy="153" r="3.5" fill="#7EFBFF" />
          </g>
        </g>
      </svg>
    </div>
  )
}
