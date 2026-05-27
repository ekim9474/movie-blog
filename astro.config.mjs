// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  fonts: [{
    provider: fontProviders.fontsource(),
    name: "Lato",
    cssVariable: "--font-lato",
  }]
});

