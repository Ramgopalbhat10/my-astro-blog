import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { SITE } from "./src/consts";

export default defineConfig({
  site: SITE.SITE,
  // Astro 7 defaults to JSX whitespace trimming. Keep the v6 HTML rules so
  // spaces between inline elements stay as they were.
  compressHTML: true,
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: "nord",
    }
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
