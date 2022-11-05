export default function Navbar() {
  return (
    <header>
      <div className="mx-auto max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl px-10 flex justify-between">
        <div id="logo">logo</div>
        <div>
          <nav role="list">
            <a href="#" role="listitem">item 1</a>
            <a href="#" role="listitem">item 2</a>
            <a href="#" role="listitem">item 3</a>
          </nav>
          <div id="toggle"></div>
        </div>
      </div>
    </header>
  )
}
