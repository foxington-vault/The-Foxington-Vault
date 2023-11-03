import Link from "next/link"

export default function Navbar() {
  const NAV_ITEMS = [
    {
      title: "Franchise",
    },
    {
      title: "Characters",
    },
    {
      title: "About",
    },
  ]
  return (
    <div className="mx-auto max-w-screen-2xl px-8 sticky inset-0 bottom-[unset] py-1">
      <nav className="flex items-center justify-between select-none">
        <Link href="/" className="block">
          logo
        </Link>
        <div className="flex items-center gap-x-0.5">
          {NAV_ITEMS.map((_, i) => (
            <Link href="#" key={i} className="px-2 py-4">
              {_.title}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}
