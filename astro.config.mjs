// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  fonts: [{
    provider: fontProviders.fontsource(),
    name: "Lato",
    cssVariable: "--font-lato",
    fallbacks: ["system-ui"]
  }],
  site: 'https://elliotsmovieblog.com'
  // base: ''
});

