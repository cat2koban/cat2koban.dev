import { DateFormatter } from './date-formatter'
import PostTitle from './post-title'

type Props = {
  title: string
  date: string
}

const PostHeader = ({ title, date }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="max-w-2xl mx-auto">
        <div className="mt-2 mb-6 text-lg">
          <DateFormatter date={date} />
        </div>
      </div>
   </>
  )
}

export default PostHeader
