/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    extend: {
      width: {
        'w-0': '0',
        'w-1/4': '25%',
        'w-1/3': '33.333333%',
        'w-1/2': '50%',
        'w-2/3': '66.666666%',
        'w-3/4': '75%',
        full: '100%',
        screen: '100vw',
      },
      paddingLeft: {
        'pl-0': '0',
        'pl-2': '8px',
        'pl-4': '16px',
        'pl-8': '32px',
        'pl-12': '48px',
      },
      paddingRight: {
        'pr-0': '0',
        'pr-2': '8px',
        'pr-4': '16px',
        'pr-8': '32px',
        'pr-12': '48px',
      },
      marginLeft: {
        'ml-0': '0',
        'ml-2': '8px',
        'ml-4': '16px',
        'ml-8': '32px',
        'ml-12': '48px',
      },
      marginRight: {
        'mr-0': '0',
        'mr-2': '8px',
        'mr-4': '16px',
        'mr-8': '32px',
        'mr-12': '48px',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'cabinet-grotesk': ['Cabinet Grotesk', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5715' }],
        base: ['1rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.415', letterSpacing: '-0.01em' }],
        '3xl': ['1.875rem', { lineHeight: '1.333', letterSpacing: '-0.01em' }],
        '4xl': ['2.25rem', { lineHeight: '1.277', letterSpacing: '-0.01em' }],
        '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.01em' }],
        '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.01em' }],
        '7xl': ['5.5rem', { lineHeight: '1', letterSpacing: '-0.01em' }],
        '8xl': ['7.5rem', { lineHeight: '1', letterSpacing: '-0.01em' }],
        '9xl': ['9rem', { lineHeight: '1', letterSpacing: '-0.01em' }],
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 60s linear infinite',
        'infinite-scroll-inverse': 'infinite-scroll-inverse 60s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'infinite-scroll-inverse': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
