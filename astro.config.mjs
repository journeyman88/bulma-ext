import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://journeyman88.github.io',
  base: '/bulma-ext',
  build: {
    format: 'directory', // Ensures /divider/index.html structure
  },
  srcDir: './astro-docs/sites/web',
  outDir: './pages',
});