import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import solidSvg from 'vite-plugin-solid-svg';
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import rehypePrism from '@mapbox/rehype-prism';
import rehypeMdxCodeProps from 'rehype-mdx-code-props';

export default defineConfig({
  base: '/',
  plugins: [
    solid(),
    solidSvg(),
    mdx({
      jsxImportSource: 'solid-jsx',
      remarkPlugins: [remarkGfm],
      // @ts-ignore
      rehypePlugins: [rehypePrism, rehypeMdxCodeProps],
    }),
  ],
  build: {
    target: 'esnext',
  },
});
