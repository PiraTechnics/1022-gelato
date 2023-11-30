import { defineCollection, z } from "astro:content";

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
export const collections = { pages };
