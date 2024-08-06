/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#00ACEE",
          "primary-content": "#ffffff",
          "secondary": "#1B2049",
          "secondary-content": "#ffffff",
          "neutral": "#8D90A4",
          "neutral-content": "#D4D7E3",
          "base-100": "#000000",
          "base-200": "#8D8D8D",
          "base-300": "#D5D5D5",
          "base-content": "#000000",
          "accent": "#0C1136",
          "accent-content": "#000000",
          "info": "#F7FBFF",
          "info-content": "#000000",
          "success": "#000000",
          "success-content": "#000000",
          "warning": "#000000",
          "warning-content": "#000000",
          "error": "#000000",
          "error-content": "#000000",
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};

module.exports = config;
