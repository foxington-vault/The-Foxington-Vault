import Footer from "./Footer"
import Navbar from "./Navbar"

export interface LayoutProps {
  children?: React.ReactElement
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {/* <Navbar /> */}
      {children}
      <Footer />
    </>
  )
}
