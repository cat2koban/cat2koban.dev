import Link from 'next/link'
import 'remixicon/fonts/remixicon.css'

const Navbar = () => {
  return (
    <nav className="text-center md:text-right text-4xl md:text-xl py-2.5 my-1 max-w-2xl mx-auto">
      <div className="inline-block">
        <Link href="/tags">
          <a className="font-normal hover:text-sky-700 mr-4">
          <i className="ri-price-tag-3-fill"></i>
          </a>
        </Link>
      </div>
      <div className="inline-block">
        <Link href="/about">
          <a className="font-normal hover:text-sky-700 mr-4">
            <i className="ri-user-line"></i>
          </a>
        </Link>
      </div>
      <div className="inline-block">
       <Link href="/projects">
         <a className="font-normal hover:text-sky-700 hover:underline">
           <i className="ri-tools-fill"></i>
         </a>
       </Link>
      </div>
    </nav>
)}

export default Navbar 
