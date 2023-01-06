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
  },
}

interface FooterItems {
  heading: string
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
      { name: "Timeline", link: "#" },
      { name: "Games", link: "#" },
      { name: "Characters", link: "#" },
      { name: "Storyline", link: "#" },
      { name: "Achievements & Guides", link: "#" },
      { name: "Behind The Crew", link: "#" },
    ],
  },
  {
    heading: "Official Links & Socials",
    links: [
      { name: "Official website", link: "#" },
      { name: "Playful Studios' website", link: "#" },
      { name: "Official store page", link: "#" },
      { name: "Reddit", link: "#" },
      { name: "Twitter", link: "#" },
      { name: "Instagram", link: "#" },
    ],
  },
  {
    heading: "TFV Project",
    links: [
      { name: "About", link: "/about" },
      { name: "FAQ", link: "/faq" },
      { name: "Sitemap", link: "/sitemap" },
      { name: "Foxington Vault API", link: "/api-docs" },
      {
        name: "Open Source @ GitHub",
        link: "https://github.com/foxington-vault",
        external: true,
      },
    ],
  },
]
