import { defineConfig } from 'astro/config';

export default defineConfig({
  build: {
    format: 'directory', // Ensures /divider/index.html structure
  },
  srcDir: '../../astro-docs/sites/demo-divider',
  outDir: './demo',
});