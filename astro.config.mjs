import { defineConfig } from "astro/config";
import solidJs from "@astrojs/solid-js";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";

//import pagefind from "./pagefind";
import { markdownConfig } from "./src/config/io/markdown.ts";

// https://astro.build/config
export default defineConfig({
  vite: {
    //css: {
    //  transformer: "lightningcss",
    //},
    build: {
      cssMinify: "lightningcss",
    },
  },
  markdown: markdownConfig,
  integrations: [
    solidJs({
      devtools: true,
    }),
    mdx(),
    //pagefind(),
    icon({
      include: {
        logos: ["*"]
      }
    }),
  ],
});
