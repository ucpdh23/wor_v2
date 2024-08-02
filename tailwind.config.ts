import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'royal-dark-purple': '#090c1e',
        'royal-bright-purple': '#1b1738',
        'royal-purple': '#212337',
        'royal-lightly-purple': 'rgba(53, 52, 72, 0.4)',
        'almost-white': '#fffeff',

      }
    },
  },
  plugins: [],
};
export default config;
