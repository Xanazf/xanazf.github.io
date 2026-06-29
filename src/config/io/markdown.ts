import { remarkAlert } from "remark-github-blockquote-alert";
import type { AstroUserConfig } from "astro";
import {
  rehypeShiki,
  unified,
  rehypeHeadingIds,
} from "@astrojs/markdown-remark";

const markdownConfig: AstroUserConfig["markdown"] = {
  syntaxHighlight: false,
  processor: unified({
    remarkPlugins: [[remarkAlert, { legacyTitle: true }]],
    rehypePlugins: [
      rehypeHeadingIds,
      [
        rehypeShiki,
        {
          theme: "synthwave-84",
          wrap: true,
        },
      ],
    ],
  }),
};

export { markdownConfig };
