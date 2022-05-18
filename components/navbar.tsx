import Link from 'next/link'
import 'remixicon/fonts/remixicon.css'

const Navbar = () => {
  return (
    <nav className="text-right py-2.5 my-1">
      <Link href="/tags">
        <a className="font-normal text-lg hover:text-sky-700 mr-4">
        <i className="ri-price-tag-3-fill"></i>
        </a>
      </Link>
      <Link href="/about">
        <a className="font-normal text-lg hover:text-sky-700 mr-4">
          <i className="ri-user-line"></i>
        </a>
      </Link>
      <Link href="/projects">
        <a className="font-normal text-lg hover:text-sky-700 hover:underline">
          <i className="ri-tools-fill"></i>
        </a>
      </Link>
    </nav>
)}

export default Navbar 
