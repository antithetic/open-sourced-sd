// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import sanity from '@sanity/astro';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), sanity({
    projectId: 'u0y4587v',
      dataset: 'production',
      useCdn: false, // See note on using the CDN
      apiVersion: "2026-05-25", // insert the current date to access the latest version of the API

  })],
  output: 'server',
  adapter: vercel()
});