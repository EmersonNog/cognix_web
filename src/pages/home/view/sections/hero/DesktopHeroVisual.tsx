export function DesktopHeroVisual() {
  return (
    <div className="relative hidden w-full max-w-[32rem] translate-x-4 justify-self-end lg:block xl:max-w-[36rem] xl:translate-x-6" aria-hidden="true">
      <svg
        className="h-auto w-full overflow-visible"
        viewBox="0 0 760 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>
          {`
            .desktop-visual-float {
              animation: desktopVisualFloat 7s ease-in-out infinite;
              transform-origin: 390px 260px;
            }

            .desktop-visual-orbit {
              animation: desktopVisualOrbit 12s linear infinite;
              transform-origin: 382px 252px;
            }

            .desktop-visual-scan {
              animation: desktopVisualScan 4.2s ease-in-out infinite;
            }

            .desktop-visual-pulse {
              animation: desktopVisualPulse 2.8s ease-in-out infinite;
              transform-origin: center;
            }

            .desktop-visual-bar-one {
              animation: desktopVisualBarOne 3.7s ease-in-out infinite;
              transform-origin: 150px 337px;
            }

            .desktop-visual-bar-two {
              animation: desktopVisualBarTwo 3.7s ease-in-out infinite;
              transform-origin: 150px 375px;
            }

            .desktop-visual-bar-three {
              animation: desktopVisualBarThree 3.7s ease-in-out infinite;
              transform-origin: 150px 413px;
            }

            @keyframes desktopVisualFloat {
              0%, 100% {
                transform: translate3d(0, 0, 0) rotate(-0.5deg);
              }

              50% {
                transform: translate3d(0, -14px, 0) rotate(0.5deg);
              }
            }

            @keyframes desktopVisualOrbit {
              to {
                transform: rotate(360deg);
              }
            }

            @keyframes desktopVisualScan {
              0% {
                transform: translateX(-180px);
                opacity: 0;
              }

              28% {
                opacity: 0.58;
              }

              72% {
                opacity: 0.16;
              }

              100% {
                transform: translateX(390px);
                opacity: 0;
              }
            }

            @keyframes desktopVisualPulse {
              0%, 100% {
                opacity: 0.42;
                transform: scale(1);
              }

              50% {
                opacity: 0.9;
                transform: scale(1.06);
              }
            }

            @keyframes desktopVisualBarOne {
              0%, 100% {
                transform: scaleX(0.76);
              }

              50% {
                transform: scaleX(1);
              }
            }

            @keyframes desktopVisualBarTwo {
              0%, 100% {
                transform: scaleX(0.58);
              }

              50% {
                transform: scaleX(0.84);
              }
            }

            @keyframes desktopVisualBarThree {
              0%, 100% {
                transform: scaleX(0.44);
              }

              50% {
                transform: scaleX(0.72);
              }
            }
          `}
        </style>

        <defs>
          <linearGradient id="desktop-visual-card" x1="92" y1="72" x2="660" y2="458" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1A4263" stopOpacity="0.94" />
            <stop offset="1" stopColor="#061827" stopOpacity="0.92" />
          </linearGradient>
          <linearGradient id="desktop-visual-accent" x1="148" y1="218" x2="418" y2="430" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8BFCFF" />
            <stop offset="0.52" stopColor="#45D9FF" />
            <stop offset="1" stopColor="#76F8C9" />
          </linearGradient>
          <radialGradient id="desktop-visual-glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(382 258) rotate(90) scale(210 330)">
            <stop stopColor="#3DF6FF" stopOpacity="0.23" />
            <stop offset="1" stopColor="#3DF6FF" stopOpacity="0" />
          </radialGradient>
          <filter id="desktop-visual-soft-glow" x="-35%" y="-35%" width="170%" height="170%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="0 0 0 0 0.239 0 0 0 0 0.965 0 0 0 0 1 0 0 0 0.72 0"
            />
            <feBlend in="SourceGraphic" />
          </filter>
        </defs>

        <ellipse cx="382" cy="260" rx="330" ry="202" fill="url(#desktop-visual-glow)" />

        <g className="desktop-visual-orbit" opacity="0.72">
          <ellipse cx="382" cy="252" rx="318" ry="176" stroke="#7EFBFF" strokeOpacity="0.13" />
          <circle cx="700" cy="252" r="5.5" fill="#7EFBFF" filter="url(#desktop-visual-soft-glow)" />
          <circle cx="64" cy="252" r="3.5" fill="#3DF6FF" fillOpacity="0.58" />
        </g>

        <g className="desktop-visual-float">
          <rect
            x="76"
            y="72"
            width="590"
            height="374"
            rx="42"
            fill="url(#desktop-visual-card)"
            stroke="#7EFBFF"
            strokeOpacity="0.16"
          />

          <rect x="112" y="110" width="184" height="40" rx="20" fill="#092338" stroke="#7EFBFF" strokeOpacity="0.34" />
          <circle cx="138" cy="130" r="4.5" fill="#7EFBFF" filter="url(#desktop-visual-soft-glow)" />
          <text x="160" y="135" fill="#A4FBFF" fontSize="13" fontWeight="800" letterSpacing="3.4">
            COGNIX IA
          </text>

          <rect x="112" y="182" width="360" height="242" rx="30" fill="#0C2337" fillOpacity="0.74" stroke="#FFFFFF" strokeOpacity="0.08" />
          <g className="desktop-visual-scan">
            <rect x="126" y="182" width="76" height="242" rx="30" fill="#7EFBFF" fillOpacity="0.08" />
          </g>

          <text x="150" y="222" fill="#7EFBFF" fontSize="12" fontWeight="800" letterSpacing="3.4">
            SEM PERDER TEMPO
          </text>
          <text x="150" y="270" fill="#FFFFFF" fontSize="34" fontWeight="800">
            Revise o que
          </text>
          <text x="150" y="312" fill="#FFFFFF" fontSize="34" fontWeight="800">
            mais importa
          </text>

          <rect x="150" y="342" width="230" height="8" rx="4" fill="#FFFFFF" fillOpacity="0.13" />
          <rect className="desktop-visual-bar-one" x="150" y="342" width="230" height="8" rx="4" fill="url(#desktop-visual-accent)" />

          <rect x="150" y="374" width="184" height="8" rx="4" fill="#FFFFFF" fillOpacity="0.1" />
          <rect className="desktop-visual-bar-two" x="150" y="374" width="184" height="8" rx="4" fill="#58D8FF" />

          <rect x="150" y="406" width="146" height="8" rx="4" fill="#FFFFFF" fillOpacity="0.09" />
          <rect className="desktop-visual-bar-three" x="150" y="406" width="146" height="8" rx="4" fill="#7EFBFF" fillOpacity="0.84" />

          <rect x="448" y="96" width="178" height="104" rx="28" fill="#0B243A" fillOpacity="0.92" stroke="#7EFBFF" strokeOpacity="0.17" />
          <text x="486" y="134" fill="#7EFBFF" fontSize="12" fontWeight="800" letterSpacing="3">
            PLANO
          </text>
          <text x="486" y="170" fill="#FFFFFF" fontSize="30" fontWeight="800" letterSpacing="0.5">
            CERTO
          </text>

          <g className="desktop-visual-pulse">
            <circle cx="568" cy="316" r="30" fill="#7EFBFF" fillOpacity="0.08" />
            <path
              d="M546 316C556 299 580 299 590 316C580 333 556 333 546 316Z"
              stroke="#7EFBFF"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="568" cy="316" r="5" fill="#7EFBFF" />
          </g>
        </g>
      </svg>
    </div>
  )
}
