import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  darkMode: "class", // toggle dark mode by adding/removing a `dark` class on <html>, not by OS media query alone
  content: ["./index.html", "./src/**/*.{js,jsx}"], // files Tailwind scans to know which classes to keep
  theme: {
    extend: {}, // we'll add custom colors/fonts here later if the Stripe/Mintlify look needs them
  },
  plugins: [react(), tailwindcss()],
});
