import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://fedeherrera10.github.io/frontend-mentor-solutions/',
  base: '/expenses-char-component',
});