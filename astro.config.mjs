import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://state-society.pages.dev/',
  integrations: [mdx()],
});
