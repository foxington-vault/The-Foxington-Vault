export const navbarItems = {
	root: [
		{ link: "#", name: "Franchise" },
		{ link: "#", name: "Community" },
		{ link: "#", name: "About" },
	],
	dropdown: {
		games: [],
		characters: [
			{ name: "Name", type: "Protagonist", rank: "Guardian Order" },
			{ name: "Name", type: "Protagonist", rank: "Guardian Order" },
			{ name: "Name", type: "Antagonist", rank: "Guardian Order" },
		],
	}
}

interface FooterItems {
	heading: string,
	links: Array<{
		name: string
		link: string
		external?: boolean
	}>
}

export const footerItems: FooterItems[] = [
	{
		heading: "Franchise",
		links: [
			{ name: "Games", link: "#" },
			{ name: "Characters", link: "#" },
			{ name: "Storyline", link: "#" },
			{ name: "Achievements & Guides", link: "#" },
			{ name: "Behind The Crew", link: "#" },
		]
	},
	{
		heading: "Links & Socials",
		links: [
			{ name: "Official website", link: "#" },
			{ name: "Official store page", link: "#" },
			{ name: "Playful Studios' website", link: "#" },
			{ name: "Twitter", link: "#" },
			{ name: "Instagram", link: "#" },
		]
	},
	{
		heading: "Community",
		links: [
			{ name: "Lost Media", link: "#" },
			{ name: "DeviantArt", link: "#", external: true },
			{ name: "Official Discord", link: "#" , external: true},
			{ name: "Speedrunning Discord", link: "#", external: true },
		]
	},
	{
		heading: "Projects",
		links: [
			{ name: "Lucky's Tale Text-To-Speech", link: "/projects/lucky-tts" },
		]
	},
	{
		heading: "About",
		links: [
			{ name: "About this project", link: "/about" },
			{ name: "FAQ", link: "/faq" },
			{ name: "Contact", link: "/contact" },
			{ name: "Open Source @ GitHub", link: "https://github.com/foxington-vault", external: true },
		]
	},
]
