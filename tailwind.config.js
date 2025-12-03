/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#596a40",
        "background-light": "#F9FAFB",
        "background-dark": "#121212",
        "text-light": "#1f2937",
        "text-dark": "#f3f4f6",
        "nav-dark": "rgba(11, 17, 30, 0.95)", // Darker Navy
        "brand-gray-light": "#d1d5db",
        "brand-gray-dark": "#4b5563",
        
        // New tokens for Services section
        "card-light": "#FFFFFF",
        "card-dark": "#1F2937",
        "text-light-primary": "#111827",
        "text-dark-primary": "#F9FAFB",
        "text-light-secondary": "#4B5563",
        "text-dark-secondary": "#9CA3AF",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
      },
      boxShadow: {
        "3d-green-light":
          "10px 10px 25px rgba(0, 0, 0, 0.2), inset 5px 5px 15px rgba(255, 255, 255, 0.2)",
        "3d-green-dark":
          "12px 12px 30px rgba(0, 0, 0, 0.3), inset 8px 8px 20px rgba(255, 255, 255, 0.15)",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}