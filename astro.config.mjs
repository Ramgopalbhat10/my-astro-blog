import { defineConfig } from "astro/config";
import vercel from '@astrojs/vercel/serverless';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { SITE } from "./src/consts";

export default defineConfig({
  output: 'hybrid',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  site: SITE.SITE,
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    shikiConfig: {
      theme: 'nord',
    }
  },
  experimental: {
    contentCollectionCache: true
  }
});
