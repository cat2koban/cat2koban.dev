import Link from 'next/link'

const Header = () => {
  return (
<nav className="max-w-2xl mx-auto py-2.5 my-8">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    <Link href="/">
      <a className="text-gray-700 text-2xl hover:text-sky-700 hover:underline">cat2koban.dev</a>
    </Link>
    <div className="hidden w-full md:block md:w-auto">
      <ul className="flex flex-col mt-4 md:flex-row md:space-x-2 md:mt-0 md:text-sm md:font-medium">
        <li>
          <Link href="/tags">
            <a className="text-gray-500 font-normal text-lg hover:text-sky-700 hover:underline md:bg-transparent md:p-0">
              tags
            </a>
          </Link>
        </li>
        <li>
          <span className="text-gray-500 font-normal text-lg md:bg-transparent md:p-0">
            /
          </span>
        </li>
        <li>
          <Link href="/about">
            <a className="text-gray-500 font-normal text-lg hover:text-sky-700 hover:underline md:bg-transparent md:p-0">
              about
            </a>
          </Link>
        </li>
         <li>
          <span className="text-gray-500 font-normal text-lg md:bg-transparent md:p-0">
            /
          </span>
        </li>
       <li>
          <Link href="rss.xml">
            <a className="text-gray-500 font-normal text-lg hover:text-sky-700 hover:underline md:bg-transparent md:p-0">
              rss
            </a>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav> 
)}

export default Header
