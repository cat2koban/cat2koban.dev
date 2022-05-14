import Link from 'next/link'

const Header = () => {
  return (
    <h2 className="text-2xl md:text-2xl tracking-tight md:tracking-tighter leading-tight mb-10 mt-8 max-w-2xl mx-auto">
      <Link href="/">
        <a className="text-gray-800">cat2koban.dev</a>
      </Link>
      <br />
    </h2>
  )
}

export default Header
