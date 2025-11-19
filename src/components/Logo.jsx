import { motion } from 'framer-motion'

/*
  Logo Ludopia (inline SVG)
  - Cartoon bird with thick dark outlines
  - Warm colors (orange, reddish-orange, yellow)
  - Text "LUDOPIA" below in dark blue
  - Gentle idle animation + playful hover

  Props:
  - size: 'sm' | 'md' | 'lg' (controls rendered width)
  - withLabel: boolean (show the LUDOPIA label under the bird)
  - className: extra classes
*/

const sizes = {
  sm: 'w-24',
  md: 'w-40',
  lg: 'w-60',
}

function Logo({ size = 'md', withLabel = true, className = '' }) {
  return (
    <motion.div
      className={`inline-block select-none ${sizes[size]} ${className}`}
      initial={{ y: 0 }}
      animate={{ y: [0, -2, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      whileHover={{ scale: 1.03 }}
    >
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Logo Ludopia"
      >
        <defs>
          <linearGradient id="bodyGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFB300" />
            <stop offset="100%" stopColor="#FF6A00" />
          </linearGradient>
          <linearGradient id="bellyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFE08A" />
            <stop offset="100%" stopColor="#FFC266" />
          </linearGradient>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.18" />
          </filter>
        </defs>

        {/* Base shadow ellipse to give pseudo-3D grounding */}
        <ellipse cx="100" cy="150" rx="42" ry="10" fill="#0B1B4A" opacity="0.08" />

        {/* Bird group with outline */}
        <g filter="url(#softShadow)">
          {/* Body */}
          <path
            d="M65 105c0-26 20-45 45-45 22 0 40 14 43 34 3 19-10 40-36 44-24 4-52-10-52-33z"
            fill="url(#bodyGrad)"
            stroke="#1F2937"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Belly */}
          <path
            d="M90 120c12 10 32 10 44-4-4-13-16-20-28-20-12 0-23 7-28 16 3 3 7 6 12 8z"
            fill="url(#bellyGrad)"
            stroke="#1F2937"
            strokeWidth="5"
            strokeLinejoin="round"
          />

          {/* Tail feathers */}
          <path
            d="M142 108c10 0 18-6 24-15-9-4-18-5-27-2"
            fill="none"
            stroke="#E05200"
            strokeWidth="8"
            strokeLinecap="round"
          />

          {/* Eye */}
          <circle cx="118" cy="94" r="6.5" fill="#1F2937" />
          <circle cx="116.5" cy="92.5" r="2" fill="#ffffff" />

          {/* Beak */}
          <path
            d="M126 104c10 4 18 2 24-6-10-4-17-5-24-1"
            fill="#FFB300"
            stroke="#1F2937"
            strokeWidth="5"
            strokeLinejoin="round"
          />

          {/* Wing (animated on hover) */}
          <motion.g
            transform="translate(95 110)"
            style={{ originX: 0.2, originY: 0.2 }}
            whileHover={{ rotate: [-2, 8, -2] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
          >
            <path
              d="M0 0c-16 10-22 22-18 34 14 0 28-6 36-18"
              fill="#FF8A00"
              stroke="#1F2937"
              strokeWidth="5"
              strokeLinejoin="round"
            />
            <path d="M-6 18c8 0 14-2 20-8" stroke="#1F2937" strokeWidth="4" strokeLinecap="round" />
          </motion.g>
        </g>

        {withLabel && (
          <text
            x="100"
            y="188"
            textAnchor="middle"
            fontFamily="Inter, system-ui, -apple-system, Segoe UI, Arial"
            fontSize="28"
            fontWeight="800"
            fill="#0B1B4A"
            letterSpacing="2"
          >
            LUDOPIA
          </text>
        )}
      </svg>
    </motion.div>
  )
}

export default Logo
