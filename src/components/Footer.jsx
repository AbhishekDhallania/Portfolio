import likedinImg from "../assets/linkedin-brands-solid.svg"
import githubImg from "../assets/github-brands-solid.svg"
import twitterImg from "../assets/square-x-twitter-brands-solid.svg"

const Footer = () => {
  return (
    <footer className='px-2  font-semibold border-t border-gray-600 py-4 flex flex-col md:flex-row
    justify-between items-center'>
      <p className='text-gray-400'>Copyright &copy; {new Date().getFullYear()} Abhishek all rights reserved</p>
        <div className='flex space-x-4 my-4 md:my-0'>
            <a className='text-gray-400 hover:text-white' target='_blank' href="https://github.com/AbhishekDhallania/"><img className="h-6" src={githubImg} alt="" /></a>
            <a className='text-gray-400 hover:text-white' target='_blank' href="https://www.linkedin.com/in/abhishek-dhallania-011b41216/"><img  className="h-6"src={likedinImg} alt="" /></a>
            {/* <a className='text-gray-400 hover:text-white' target='_blank' href="https://twitter.com/dhallaniaabhishek"><img className="h-6"  src={twitterImg} alt="" /></a> */}
        </div>
        <div className='flex space-x-4'>
          <a className='text-gray-400 hover:text-black' href="#">Privacy</a>
          <a className='text-gray-400 hover:text-black' href="#">Terms of Services</a>
        </div>
    </footer>
  )
}

export default Footer