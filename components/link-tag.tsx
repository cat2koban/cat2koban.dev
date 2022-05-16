import Link from 'next/link'
type Props = {
  name: string
  href: string
}

const LinkTag = ({ name, href}: Props) => {
  return (
    <Link href={`/tags/${href}`}>
      <a className="text-blue-700 hover:text-white bg-blue-100 hover:bg-blue-600 w-max text-sm rounded-sm px-2 py-1 mr-2 cursor-pointer">
        # {name}
      </a>
    </Link>
  )
}

export default LinkTag
