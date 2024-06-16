/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "kora-Blue": {
          "kora-blue-50": "#e6fafd",
          "kora-blue-100": "#b0f0f8",
          "kora-blue-200": "#8ae9f4",
          "kora-blue-300": "#54e0ef",
          "kora-blue-400": "#33d9ec",
          "kora-blue-500": "#00d0e7",
          "kora-blue-600": "#00bdd2",
          "kora-blue-700": "#0094a4",
          "kora-blue-800": "#00727f",
          "kora-blue-900": "#005761",
        },
        "kora-Neutral": {
          "kora-neutral-1": "#ffffff",
          "kora-neutral-2": "#fcfcfc",
          "kora-neutral-3": "#f5f5f5",
          "kora-neutral-4": "#f0f0f0",
          "kora-neutral-5": "#d9d9d9",
          "kora-neutral-6": "#bfbfbf",
          "kora-neutral-7": "#8c8c8c",
          "kora-neutral-8": "#595959",
          "kora-neutral-9": "#454545",
          "kora-neutral-10": "#262626",
          "kora-neutral-11": "#1f1f1f",
          "kora-neutral-12": "#141414",
          "kora-neutral-13": "#000000",
          "kora-neutral-14": "rgb(35,35,37)",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3rem",
        "6xl": "3.5rem",
      },
      fontFamily: {
        "clash-display": "Clash Display",
      },
      /*       borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      }, */
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        header: "url('/img/header-image.png')",
        login: "url('/img/login-bg.png')",
        download: "url('/img/bg-download.png')",
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        features: "1fr 1fr 1fr",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
