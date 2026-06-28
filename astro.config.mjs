import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from '@tailwindcss/vite';
import { SITE } from "./src/consts";

export default defineConfig({
  site: SITE.SITE,
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'nord',
    }
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
