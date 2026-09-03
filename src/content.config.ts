import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const engagements = defineCollection({
	// Load Markdown and MDX files in the `src/content/engagements/` directory.
	loader: glob({ base: "./src/content/engagements", pattern: "**/*.{md,mdx}" }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Engagement start date — used for ordering.
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		// Engagement metadata
		client: z.string().optional(),
		role: z.string().optional(),
		period: z.string().optional(),
		sector: z.string().optional(),
		via: z.string().optional(),
	}),
});

export const collections = { engagements };
