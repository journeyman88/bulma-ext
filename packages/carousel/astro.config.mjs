import { defineConfig } from 'astro/config';

export default defineConfig({
  build: {
    format: 'directory',
  },
  srcDir: '../../astro-docs/sites/demo-carousel',
  outDir: './demo',
});