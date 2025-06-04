// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // site: "https://barriedirk.github.io",
  // base: "/frontend-mentor-exercise-26-space-tourism-multi-page-website",
  compressHTML: false,
  build: {
    format: "file",
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
