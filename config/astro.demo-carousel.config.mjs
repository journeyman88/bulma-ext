import { defineConfig } from 'astro/config';

export default defineConfig({
  build: {
    format: 'directory', // Ensures /divider/index.html structure
  },
  vite: {
    build: {
      assetsInlineLimit: 100000000, // Effectively inlines all CSS/JS into the HTML
    }
  },
  srcDir: './astro-docs/sites/demo-carousel',
  outDir: './packages/carousel/demo',
});