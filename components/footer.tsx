import Vercel from '../components/vercel';
import 'remixicon/fonts/remixicon.css'

type Props = { fullWidth?: boolean };

export const Footer: React.VFC<Props> = ({ fullWidth }) => {
  const d = new Date();
  return (
    <footer className="max-w-2xl mx-auto text-gray-500 bg-sky-100 px-1 py-2 mb-4 rounded">
      <div className="my-4 text-sm leading-6">
        <div className="flex justify-center">
          <a href="https://twitter.com/cat2koban" className="text-blue-400 text-2xl mr-4">
            <i className="ri-twitter-fill"></i>
          </a>
           <a href="https://github.com/cat2koban" className="text-black text-2xl mr-4">
            <i className="ri-github-fill"></i>
          </a>
         <Vercel />
        </div>
      <div className="my-4 text-sm leading-6">
        <div className="flex justify-center">
          <span className="mr-4 align-middle">
            © 2022 cat2koban
          </span>
        </div>
      </div>
     </div>
    </footer>
  )
}

export default Footer
