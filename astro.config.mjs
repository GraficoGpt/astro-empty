// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig( {
  site: 'https://example.com',
  integrations: [],
  output: 'server',

  adapter: node( {
    mode: 'standalone',
  } ),
} );