import Footer from "./base/Footer"
import Navbar from "./base/Navbar"

export interface LayoutProps {
  children?: React.ReactElement
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
