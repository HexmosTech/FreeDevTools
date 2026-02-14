/** @type {import('tailwindcss').Config} */

const typography = require('@tailwindcss/typography');

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    "./components/**/*.templ",
    "./components/**/*.go",
    "./cmd/**/*.templ",
    "./cmd/**/*.go",
    "./frontend/**/*.{ts,tsx}",
  ],
  plugins: [typography],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#424242',
        },
        yellow: {
          DEFAULT: '#d5cb22',
        },
        background: 'rgb(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'rgb(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'rgb(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
        neon: {
          DEFAULT: '#19222d',
          light: '#fff',
        },
        cyan: {
          DEFAULT: '#06b6d4',
          light: '#22d3ee',
        },
        'fdt-yellow': {
          DEFAULT: '#d4cb24',
          dark: '#b6b000',
          50: 'oklch(98.7% 0.026 102.212)',
          100: 'oklch(97.3% 0.071 103.193)',
          200: 'oklch(94.5% 0.129 101.54)',
          300: 'oklch(90.5 % 0.182 98.111)',
          400: 'oklch(85.2 % 0.199 91.936)',
          500: 'oklch(79.5 % 0.184 86.047)',
          600: 'oklch(68.1 % 0.162 75.834)',
          700: 'oklch(55.4 % 0.135 66.442)',
          800: 'oklch(47.6 % 0.114 61.907)',
          900: 'oklch(42.1 % 0.095 57.708)',
          950: 'oklch(28.6% 0.066 53.813)',
        },
        'fdt-yellow-dark': {
          DEFAULT: '#b6b000',
        },
        'fdt-red': {
          DEFAULT: '#b81c1d',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        neon: '0 0 10px #8129D9, 0 0 20px #8129D9, 0 0 30px #8129D9',
      },
    },
  },
};

