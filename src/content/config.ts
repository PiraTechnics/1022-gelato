import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	// Type-check frontmatter using a schema
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const pages = defineCollection({
	type: "content",
	schema: z.object({
		intro: z.string(),
		bannerImage: z.string(),
		bannerImageAlt: z.string(),
		featuredImage: z.string().optional(),
		featuredImageAlt: z.string().optional(),
	}),
});

export const collections = { blog, pages };
