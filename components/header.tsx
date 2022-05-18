import Link from 'next/link'

const Header = () => {
  return (
    <div className="text-center py-2.5 mt-8">
      <Link href="/">
        <a className="text-3xl font-bold hover:text-sky-700 hover:underline">cat2koban.dev</a>
      </Link>
    </div> 
)}

export default Header
