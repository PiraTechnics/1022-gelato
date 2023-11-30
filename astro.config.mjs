import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import NetlifyCMS from "astro-decap-cms";
import tailwind from "@astrojs/tailwind";
import { SITE_URL } from "./src/consts";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	site: SITE_URL,
	integrations: [
		NetlifyCMS({
			config: {
				backend: {
					name: "git-gateway",
					branch: "main",
				},
				collections: [
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
								label: "Menu",
								name: "menu",
								file: "src/content/pages/menu.mdx",
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
										label: "Menu",
										name: "menuList",
										widget: "object",
										collapsed: true,
										fields: [
											{
												label: "Gelato",
												name: "gelato",
												widget: "list",
												minimize_collapsed: true,
												summary: "{{fields.item}}: {{fields.price}}",
												fields: [
													{
														label: "Item",
														name: "item",
														widget: "string",
													},
													{
														label: "Price",
														name: "price",
														widget: "string",
													},
													{
														label: "Subtext",
														name: "subtext",
														widget: "string",
														required: false,
													},
												],
											},
											{
												label: "Gelato Flavors",
												label_singular: "Gelato Flavor",
												name: "flavors",
												widget: "list",
												minimize_collapsed: true,
												summary: "{{fields.item}}",
												fields: [
													{
														label: "Item",
														name: "item",
														widget: "string",
													},
													{
														label: "Subtext",
														name: "subtext",
														widget: "string",
														required: false,
													},
												],
											},
											{
												label: "Beverages",
												label_singular: "Beverage",
												name: "beverages",
												widget: "list",
												minimize_collapsed: true,
												summary: "{{fields.item}}: {{fields.price}}",
												fields: [
													{
														label: "Item",
														name: "item",
														widget: "string",
													},
													{
														label: "Price",
														name: "price",
														widget: "string",
													},
													{
														label: "Subtext",
														name: "subtext",
														widget: "string",
														required: false,
													},
												],
											},
											{
												label: "Baked Goods",
												label_singular: "Baked Good",
												name: "bakedgoods",
												widget: "list",
												minimize_collapsed: true,
												summary: "{{fields.item}}: {{fields.price}}",
												fields: [
													{
														label: "Item",
														name: "item",
														widget: "string",
													},
													{
														label: "Price",
														name: "price",
														widget: "string",
													},
													{
														label: "Subtext",
														name: "subtext",
														widget: "string",
														required: false,
													},
												],
											},
										],
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
							{
								label: "Hours & Location",
								name: "location",
								file: "src/content/pages/location.mdx",
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
										name: "contact",
										widget: "object",
										label: "Contact Info",
										minimize_collapsed: true,
										fields: [
											{
												name: "address",
												widget: "string",
												label: "Address",
											},
											{
												name: "email",
												widget: "string",
												label: "Email",
											},
											{
												name: "phone",
												widget: "string",
												label: "Phone Number",
											},
										],
									},
									{
										name: "body",
										widget: "markdown",
										label: "Opening Hours",
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
