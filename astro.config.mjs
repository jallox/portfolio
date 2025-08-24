// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'server',
  adapter: cloudflare(),
  env: {
    schema: {
      GH_TOKEN: envField.string({ context: "server", access: "secret" }),
    }
  }
});