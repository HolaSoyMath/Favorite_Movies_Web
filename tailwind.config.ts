/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"], // necessário para funcionar com next-themes
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./presentation/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./node_modules/@shadcn/ui/components/**/*.{js,ts,jsx,tsx}",
      "./node_modules/@shadcn/ui/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          primary: "#6366f1",
          darkBg: "#0f172a",
          darkCard: "#1e293b"
        }
      }
    },
    plugins: []
};