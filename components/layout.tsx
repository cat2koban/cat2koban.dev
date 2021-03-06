import Header from './header'
import Footer from './footer'
import Navbar from './navbar'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="top-0 px-5">
          <Header />
          <Navbar />
        </div>
        <div className="flex-grow">
          <main>{children}</main>
        </div>
        <div className="bottom-0">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
