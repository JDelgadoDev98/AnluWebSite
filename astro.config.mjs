import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://anlu-web.pages.dev',
  integrations: [tailwind()],
});
