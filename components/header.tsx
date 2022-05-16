import Link from 'next/link'

const Header = () => {
  return (
    <div className="mb-10 mt-8 max-w-2xl mx-auto">
      <Link href="/">
        <a className="text-gray-800 hover:underline font-medium text-2xl md:text-2xl tracking-tight md:tracking-tighter leading-tight">
          cat2koban.dev
        </a>
      </Link>
      <Link href="/about">
        <a className="text-gray-800 hover:underline text-xl md:text-xl ml-8 tracking-tight md:tracking-tighter leading-tight">
          / about 
        </a>
      </Link>
       <Link href="/tags">
        <a className="text-gray-800 hover:underline text-xl md:text-xl ml-8 tracking-tight md:tracking-tighter leading-tight">
          / tags 
        </a>
      </Link>
   </div>
  )
}

export default Header
