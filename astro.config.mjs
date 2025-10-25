import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: 'https://github.com/aaluac08-creator/',
  base: '/Personal-website',
  integrations: [mdx()],
  markdown: {
    smartypants: false
  }
});
