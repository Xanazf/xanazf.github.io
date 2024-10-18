import { remarkAlert } from "remark-github-blockquote-alert";
import type { AstroMarkdownOptions } from "@astrojs/markdown-remark";
import { rehypeShiki } from "@astrojs/markdown-remark";

export const markdownConfig: AstroMarkdownOptions = {
  syntaxHighlight: false,
  remarkPlugins: [[remarkAlert, { legacyTitle: true }]],
  rehypePlugins: [
    [
      rehypeShiki,
      {
        theme: "synthwave-84",
        wrap: true,
      },
    ],
  ],
};
