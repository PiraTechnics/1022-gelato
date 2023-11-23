import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import NetlifyCMS from "astro-decap-cms";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	site: "https://example.com",
	integrations: [
		NetlifyCMS({
			config: {
				backend: {
					name: "git-gateway",
					branch: "main",
				},
				collections: [
					// Define a blog post collection
					/* 					{
						name: "posts",
						label: "Blog Posts",
						label_singular: "Blog Post",
						folder: "src/content/blog",
						create: true,
						delete: true,
						fields: [
							{
								name: "title",
								widget: "string",
								label: "Post Title",
							},
							{
								name: "description",
								widget: "string",
								label: "Post Description",
							},
							{
								name: "pubDate",
								widget: "datetime",
								label: "Publish Date",
							},
							{
								name: "heroImage",
								widget: "image",
								label: "Featured Image",
							},
							{
								name: "body",
								widget: "markdown",
								label: "Post Body",
							},
						],
					}, */
					{
						label: "Pages",
						name: "pages",
						files: [
							{
								label: "Home",
								name: "home",
								file: "src/content/pages/home.yml",
								fields: [
									{
										name: "intro",
										widget: "string",
										label: "Intro",
									},
									{
										name: "heroImage",
										widget: "image",
										label: "Featured Image",
									},
								],
							},
						],
					},
				],
			},
		}),
		mdx(),
		sitemap(),
		tailwind(),
		react(),
	],
});
