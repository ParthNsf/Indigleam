/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)', // champagne highlights
        input: 'var(--color-input)', // pure white
        ring: 'var(--color-ring)', // luxury gold
        background: 'var(--color-background)', // pure white
        foreground: 'var(--color-foreground)', // rich charcoal
        primary: {
          DEFAULT: 'var(--color-primary)', // luxury gold
          foreground: 'var(--color-primary-foreground)', // white
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', // warm neutral
          foreground: 'var(--color-secondary-foreground)', // rich charcoal
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', // warm brown
          foreground: 'var(--color-destructive-foreground)', // white
        },
        muted: {
          DEFAULT: 'var(--color-muted)', // warm neutral
          foreground: 'var(--color-muted-foreground)', // clear hierarchy
        },
        accent: {
          DEFAULT: 'var(--color-accent)', // champagne highlights
          foreground: 'var(--color-accent-foreground)', // rich charcoal
        },
        popover: {
          DEFAULT: 'var(--color-popover)', // pure white
          foreground: 'var(--color-popover-foreground)', // rich charcoal
        },
        card: {
          DEFAULT: 'var(--color-card)', // gentle depth
          foreground: 'var(--color-card-foreground)', // rich charcoal
        },
        success: {
          DEFAULT: 'var(--color-success)', // refined green
          foreground: 'var(--color-success-foreground)', // white
        },
        warning: {
          DEFAULT: 'var(--color-warning)', // elegant amber
          foreground: 'var(--color-warning-foreground)', // white
        },
        error: {
          DEFAULT: 'var(--color-error)', // warm brown
          foreground: 'var(--color-error-foreground)', // white
        },
        // Brand-specific colors
        'rose-gold': 'var(--color-rose-gold)', // rose gold accent
        'deep-gold': 'var(--color-deep-gold)', // deep gold for CTAs
        'text-primary': 'var(--color-text-primary)', // rich charcoal
        'text-secondary': 'var(--color-text-secondary)', // clear hierarchy
        'champagne': 'var(--color-champagne)', // champagne white
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'cormorant': ['Cormorant Garamond', 'serif'],
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '13': '3.25rem',
        '21': '5.25rem',
        '34': '8.5rem',
        '55': '13.75rem',
      },
      borderRadius: {
        'luxury': '24px',
        'lg': '0.5rem',
        'md': '0.375rem',
        'sm': '0.25rem',
      },
      boxShadow: {
        'luxury': '0 4px 20px rgba(212, 175, 55, 0.1)',
        'luxury-hover': '0 8px 30px rgba(212, 175, 55, 0.15)',
        'luxury-glow': '0 0 20px rgba(212, 175, 55, 0.3)',
      },
      animation: {
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'gentle-bounce': 'gentleBounce 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        sparkle: {
          '0%, 100%': { 
            transform: 'scale(1)', 
            opacity: '1' 
          },
          '50%': { 
            transform: 'scale(1.05)', 
            opacity: '0.8' 
          }
        },
        gentleBounce: {
          '0%, 100%': { 
            transform: 'translateY(0)' 
          },
          '50%': { 
            transform: 'translateY(-2px)' 
          }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '800': '800ms',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
}