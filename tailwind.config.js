/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-radial-gradient":
          "radial-gradient(circle, var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        card: "#edf3f4",
        postsDiv: "#0017ff",
        navbar: "#363636",
      },
      fontFamily: {
        readex: ["var[--font-read-ex]"],
        roboto: ["var[--font-roboto]"],
      },
    },
  },
  plugins: [],
};
