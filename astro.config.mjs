import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: 'https://aaluac08-creator.github.io',
  base: '/Personal-website',
  integrations: [mdx()],
  markdown: {
    smartypants: false
  }
});