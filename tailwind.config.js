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
            background: "var(--background)",
            foreground: "var(--foreground)",
            color: {
               primary: "#0d1117",
               secondary: "#161b22",
               accent: "#77bdfb",
               light: "#ecf2f8",
               dark: "#000000",
            },
         },
      },
   },
   plugins: [],
};
