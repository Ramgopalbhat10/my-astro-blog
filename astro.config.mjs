import { defineConfig } from "astro/config";
import vercel from '@astrojs/vercel';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from '@tailwindcss/vite';
import { SITE } from "./src/consts";

export default defineConfig({
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
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
