export function TabletHeroVisual() {
  return (
    <div className="relative mx-auto mt-8 hidden w-full max-w-[22.75rem] sm:block md:mx-0 md:mt-0 md:justify-self-end lg:hidden" aria-hidden="true">
      <svg
        className="h-auto w-full overflow-visible"
        viewBox="0 0 360 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>
          {`
            .tablet-visual-float {
              animation: tabletVisualFloat 6s ease-in-out infinite;
              transform-origin: 178px 158px;
            }

            .tablet-visual-orbit {
              animation: tabletVisualOrbit 9s linear infinite;
              transform-origin: 168px 150px;
            }

            .tablet-visual-scan {
              animation: tabletVisualScan 3.6s ease-in-out infinite;
            }

            .tablet-visual-pulse {
              animation: tabletVisualPulse 2.8s ease-in-out infinite;
              transform-origin: center;
            }

            .tablet-visual-bar-one {
              animation: tabletVisualBarOne 3.5s ease-in-out infinite;
              transform-origin: 64px 218px;
            }

            .tablet-visual-bar-two {
              animation: tabletVisualBarTwo 3.5s ease-in-out infinite;
              transform-origin: 64px 233px;
            }

            @keyframes tabletVisualFloat {
              0%, 100% {
                transform: translate3d(0, 0, 0) rotate(-0.8deg);
              }

              50% {
                transform: translate3d(0, -9px, 0) rotate(0.8deg);
              }
            }

            @keyframes tabletVisualOrbit {
              to {
                transform: rotate(360deg);
              }
            }

            @keyframes tabletVisualScan {
              0% {
                transform: translateX(-110px);
                opacity: 0;
              }

              30% {
                opacity: 0.52;
              }

              68% {
                opacity: 0.16;
              }

              100% {
                transform: translateX(188px);
                opacity: 0;
              }
            }

            @keyframes tabletVisualPulse {
              0%, 100% {
                opacity: 0.44;
                transform: scale(1);
              }

              50% {
                opacity: 0.9;
                transform: scale(1.05);
              }
            }

            @keyframes tabletVisualBarOne {
              0%, 100% {
                transform: scaleX(0.78);
              }

              50% {
                transform: scaleX(1);
              }
            }

            @keyframes tabletVisualBarTwo {
              0%, 100% {
                transform: scaleX(0.62);
              }

              50% {
                transform: scaleX(0.84);
              }
            }
          `}
        </style>

        <defs>
          <linearGradient id="tablet-visual-card" x1="34" y1="48" x2="302" y2="260" gradientUnits="userSpaceOnUse">
            <stop stopColor="#193F60" stopOpacity="0.93" />
            <stop offset="1" stopColor="#061827" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="tablet-visual-accent" x1="64" y1="136" x2="210" y2="238" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8BFCFF" />
            <stop offset="0.52" stopColor="#4EE4FF" />
            <stop offset="1" stopColor="#78F8CD" />
          </linearGradient>
          <radialGradient id="tablet-visual-glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(166 156) rotate(90) scale(126 160)">
            <stop stopColor="#3DF6FF" stopOpacity="0.2" />
            <stop offset="1" stopColor="#3DF6FF" stopOpacity="0" />
          </radialGradient>
          <filter id="tablet-visual-soft-glow" x="-35%" y="-35%" width="170%" height="170%">
            <feGaussianBlur stdDeviation="5.5" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="0 0 0 0 0.239 0 0 0 0 0.965 0 0 0 0 1 0 0 0 0.72 0"
            />
            <feBlend in="SourceGraphic" />
          </filter>
        </defs>

        <ellipse cx="168" cy="154" rx="148" ry="120" fill="url(#tablet-visual-glow)" />

        <g className="tablet-visual-orbit" opacity="0.68">
          <ellipse cx="168" cy="150" rx="142" ry="120" stroke="#7EFBFF" strokeOpacity="0.14" />
          <circle cx="68" cy="32" r="3" fill="#7EFBFF" filter="url(#tablet-visual-soft-glow)" />
          <circle cx="292" cy="46" r="3.5" fill="#3DF6FF" fillOpacity="0.72" />
        </g>

        <g className="tablet-visual-float">
          <rect
            x="24"
            y="48"
            width="288"
            height="212"
            rx="32"
            fill="url(#tablet-visual-card)"
            stroke="#7EFBFF"
            strokeOpacity="0.16"
          />

          <rect x="49" y="75" width="134" height="32" rx="16" fill="#092338" stroke="#7EFBFF" strokeOpacity="0.35" />
          <circle cx="66" cy="91" r="3.4" fill="#7EFBFF" filter="url(#tablet-visual-soft-glow)" />
          <text x="82" y="95" fill="#A4FBFF" fontSize="10.5" fontWeight="800" letterSpacing="2.8">
            COGNIX IA
          </text>

          <rect x="49" y="124" width="230" height="124" rx="23" fill="#0C2337" fillOpacity="0.74" stroke="#FFFFFF" strokeOpacity="0.08" />
          <g className="tablet-visual-scan">
            <rect x="58" y="124" width="46" height="124" rx="23" fill="#7EFBFF" fillOpacity="0.08" />
          </g>

          <text x="64" y="149" fill="#7EFBFF" fontSize="9.5" fontWeight="800" letterSpacing="2.55">
            SEM PERDER TEMPO
          </text>
          <text x="64" y="176" fill="#FFFFFF" fontSize="22" fontWeight="800">
            Revise o que
          </text>
          <text x="64" y="203" fill="#FFFFFF" fontSize="22" fontWeight="800">
            mais importa
          </text>

          <rect x="64" y="220" width="132" height="5.5" rx="2.75" fill="#FFFFFF" fillOpacity="0.13" />
          <rect className="tablet-visual-bar-one" x="64" y="220" width="132" height="5.5" rx="2.75" fill="url(#tablet-visual-accent)" />

          <rect x="64" y="235" width="102" height="5.5" rx="2.75" fill="#FFFFFF" fillOpacity="0.1" />
          <rect className="tablet-visual-bar-two" x="64" y="235" width="102" height="5.5" rx="2.75" fill="#58D8FF" />

          <rect x="204" y="62" width="110" height="72" rx="22" fill="#0B243A" fillOpacity="0.92" stroke="#7EFBFF" strokeOpacity="0.17" />
          <text x="221" y="90" fill="#7EFBFF" fontSize="9.5" fontWeight="800" letterSpacing="2.5">
            PLANO
          </text>
          <text x="221" y="117" fill="#FFFFFF" fontSize="22" fontWeight="800" letterSpacing="0.35">
            CERTO
          </text>

          <g className="tablet-visual-pulse">
            <circle cx="292" cy="177" r="18" fill="#7EFBFF" fillOpacity="0.08" />
            <path
              d="M279 177C285 166 299 166 305 177C299 188 285 188 279 177Z"
              stroke="#7EFBFF"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="292" cy="177" r="4" fill="#7EFBFF" />
          </g>
        </g>
      </svg>
    </div>
  )
}
