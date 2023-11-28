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
						extension: "mdx",
						format: "frontmatter",
						editor: {
							preview: false,
						},
						files: [
							{
								label: "Home",
								name: "home",
								file: "src/content/pages/home.mdx",
								fields: [
									{
										name: "intro",
										widget: "string",
										label: "Intro",
									},
									{
										name: "bannerImage",
										widget: "image",
										label: "Featured Image",
									},
									{
										name: "bannerImageAlt",
										widget: "string",
										label: "Featured Image Alt Text",
									},
								],
							},
							{
								label: "About Us",
								name: "about",
								file: "src/content/pages/about.mdx",
								fields: [
									{
										name: "intro",
										widget: "string",
										label: "Intro",
									},
									{
										name: "bannerImage",
										widget: "image",
										label: "Banner Image",
									},
									{
										name: "bannerImageAlt",
										widget: "string",
										label: "Banner Image Alt Text",
									},
									{
										name: "featuredImage",
										widget: "image",
										label: "Featured Image",
									},
									{
										name: "featuredAlt",
										widget: "string",
										label: "Featured Image Alt Text",
									},
									{
										name: "body",
										widget: "markdown",
										label: "Page Body",
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
