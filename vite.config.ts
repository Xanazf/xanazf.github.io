import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import solidSvg from 'vite-plugin-solid-svg';
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';

export default defineConfig({
  base: '/',
  plugins: [
    solid(),
    solidSvg(),
    mdx({ jsxImportSource: 'solid-jsx', remarkPlugins: [remarkGfm] }),
  ],
  build: {
    target: 'esnext',
  },
});
