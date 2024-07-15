/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sans-serif', 'system-ui','Segoe UI, Tahoma, Geneva, Verdana, sans-serif', 'Sansita One','Carter One'],
        // Add other custom font families if needed
      },
    },
  },
  plugins: [],
};
