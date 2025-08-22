import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark mode color palette
        background: {
          DEFAULT: '#0a0a0a',
          surface: '#1a1a1a',
        },
        primary: {
          DEFAULT: '#00ff88',
          light: '#33ff99',
          dark: '#00cc6a',
        },
        secondary: {
          DEFAULT: '#ff6b35',
          light: '#ff8c5e',
          dark: '#e55a2b',
        },
        text: {
          DEFAULT: '#ffffff',
          secondary: '#a0a0a0',
          muted: '#666666',
        },
        accent: {
          cyan: '#00ffff',
          purple: '#9d4edd',
          yellow: '#ffff00',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Monaco', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '4xl': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '6xl': ['3.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'matrix': 'matrix 10s linear infinite',
        'glitch': 'glitch 2s infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'cursor': 'cursor 0.75s step-end infinite',
      },
      keyframes: {
        glow: {
          'from': { boxShadow: '0 0 5px #00ff88, 0 0 10px #00ff88, 0 0 15px #00ff88' },
          'to': { boxShadow: '0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 30px #00ff88' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        matrix: {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' }
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        cursor: {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#00ff88' }
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 255, 136, 0.5)',
        'glow-lg': '0 0 40px rgba(0, 255, 136, 0.6)',
        'inner-glow': 'inset 0 0 20px rgba(0, 255, 136, 0.2)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      }
    },
  },
  plugins: [],
} satisfies Config;