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
		menuList: z
			.object({
				gelato: z.array(
					z.object({
						item: z.string(),
						price: z.string(),
						subtext: z.string().optional(),
					})
				),
				flavors: z.array(
					z.object({
						item: z.string(),
						subtext: z.string().optional(),
					})
				),
				beverages: z.array(
					z.object({
						item: z.string(),
						price: z.string(),
						subtext: z.string().optional(),
					})
				),
				bakedgoods: z.array(
					z.object({
						item: z.string(),
						price: z.string(),
						subtext: z.string().optional(),
					})
				),
			})
			.optional(),
		contact: z
			.object({
				address: z.string(),
				email: z.string().email(),
				phone: z.string(),
			})
			.optional(),
	}),
});

/* const menu = defineCollection({
	type: "data",
	schema: z.object({
		intro: z.string(),
		bannerImage: z.string(),
		bannerImageAlt: z.string(),
		menu1: z.array(z.object({})),
		menu2: z.array(z.object({})),
		menu3: z.array(z.object({})),
	}),
}); */

export const collections = { blog, pages };
