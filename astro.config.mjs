import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://sbaier1.github.io',
  base: '/recipes/',
  output: 'static',
  build: {
    format: 'file'
  }
});
