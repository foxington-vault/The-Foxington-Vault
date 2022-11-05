export default function Footer() {
  return (
    <footer className="bg-orange-600 text-white">
      <div className="max-w-screen-2xl mx-auto px-5 py-6">
        <span className="block text-center text-sm mb-4 w-[75%] mx-auto">
          <strong>The Foxington Vault</strong> is a fansite and a dedicated
          archive project run by a group of dedicated volunteers. The Foxington
          Vault does not pertain any of the contents nor copyright used on the
          website and has no direct affiliation with Playful Studios whatsoever.
        </span>
        <span className="block text-center text-sm">{`© ${new Date().getFullYear()} The Foxington Vault - archive still under construction`}</span>
      </div>
    </footer>
  )
}
