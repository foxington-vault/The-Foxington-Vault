interface NestedLinks {
  name: string
  link: string
  external?: boolean
  description?: string
}

interface NavItems {
  heading: string
  links?: NestedLinks[]
  customLinks?: NestedLinks[]
}

const SOCIAL_LINKS = [
  { name: "Official website", link: "#" },
  { name: "Playful Studios' website", link: "#" },
  { name: "Official store page", link: "#" },
  { name: "Reddit", link: "#" },
  { name: "Twitter", link: "#" },
  { name: "Instagram", link: "#" },
]

export const navbarItems: NavItems[] = [
  {
    heading: "Franchise",
    customLinks: [
      { name: "Games", link: "/games", description: "lol" },
      { name: "Characters", link: "/characters", description: "lol" },
      { name: "Storyline", link: "/storyline", description: "lol" },
      { name: "Timeline", link: "/timeline", description: "lol" },
    ],
  },
  { heading: "Community", links: [...SOCIAL_LINKS] },
  {
    heading: "About",
    links: [
      { name: "About The Foxington Vault", link: "#" },
      { name: "About The Foxington Vault", link: "#" },
      { name: "About The Foxington Vault", link: "#" },
    ],
  },
]

export const footerItems: NavItems[] = [
  {
    heading: "Franchise",
    links: [
      { name: "Timeline", link: "/timeline" },
      { name: "Games", link: "/games" },
      { name: "Characters", link: "/characters" },
      { name: "Storyline", link: "/storyline" },
      { name: "Behind The Crew", link: "/behind-the-crew" },
    ],
  },
  {
    heading: "Official Links & Socials",
    links: [...SOCIAL_LINKS],
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