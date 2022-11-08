export default function Footer() {
  return (
    <footer className="bg-orange-600 text-white">
      <div className="max-w-screen-2xl mx-auto px-5 py-10 flex flex-col gap-y-5">
        <span className="block text-center w-full md:w-[75%] mx-auto">
          <strong>The Foxington Vault</strong> is a dedicated
          archive project and fansite run by a group of dedicated volunteers. The Foxington
          Vault does not pertain any of the contents nor copyright used on the
          website and has no direct affiliation with Playful Studios whatsoever.
        </span>
        <span className="block text-center text-sm">{`© ${new Date().getFullYear()} The Foxington Vault - archive still under construction`}</span>
        <span className="block text-center text-sm">
          This archive project and all its images are hosted on Cloudinary and other
          third-party sources, website hosted on Vercel, written in Next.js.
        </span>
      </div>
    </footer>
  )
}
