/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "red",
        success: "#34D399", //bg-green-400
        danger: " #DC2626", //bg-red-600
        warning: "#F59E0B", //bg-yellow-500
      },
      screens: {
        xs: "480px", // Extra small devices
        sm: "640px", // Small devices
        md: "768px", // Medium devices
        lg: "1024px", // Large devices
        xl: "1280px", // Extra large devices
        "2xl": "1536px", // 2x large devices
        "3xl": "1920px", // 3x large devices (e.g., Full HD screens)
        "4xl": "2560px", // 4x large devices (e.g., 2K screens)
        "5xl": "3840px", // 5x large devices (e.g., 4K screens)
      },
    },
  },
  plugins: [],
};
