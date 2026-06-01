// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

// 4. Define a `loader` and `schema` for each collection
const ratingsCollection = defineCollection({
  // uncomment this for dev environment testing
  loader: glob({ pattern: "**/*.md", base: "./src/pages/" }),
  // works for live GitHub Pages
  // loader: glob({ pattern: "**/*.md", base: "./src/pages/ratings" }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { ratingsCollection };