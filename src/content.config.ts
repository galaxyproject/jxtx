import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const content = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./content" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // NOTE: the glob loader consumes frontmatter `slug` as the entry id and strips it from
      // data (spike-verified). Declared here only so unexpected keys don't error.
      slug: z.string().optional(),
      fullWidth: z.boolean().optional(),
      image: image().optional(),
      images: z.array(image()).optional(),
      links: z.array(z.string()).optional(),
      name: z.string().optional(),
      institution: z.string().optional(),
      photo: image().optional(),
      conference: z.string().optional(),
      year: z.number().optional(),
      program: z.string().optional(),
    }),
});

export const collections = { content };
