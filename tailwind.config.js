/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'base-neue': ['Base Neue Trial', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'], // Adds the font as a utility
      },
      backgroundImage: {
        'custom-bg': "url('/Images/bg2.jpeg')", // Replace with your image path
        'offer-bg':"url('/Images/bg.png')",
        'custom-gradient': 'linear-gradient(179.4deg, #F7F8FA 1.01%, #F4E9DC 12.56%, #EBAD83 34.46%, #DCA367 66.75%, #895833 97.25%)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "nav-bg": "#1F2028",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.gradient-text': {
          background: 'linear-gradient(360deg, #E56702 -16.16%, #000000 50%)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          color: 'transparent',
        },
      });
    },
  ],
};
