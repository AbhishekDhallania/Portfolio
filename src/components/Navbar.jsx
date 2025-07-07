import mode from "../assets/mode.svg"

export const Navbar = ({toggleDarkMode}) => {
  return (
    <nav className="px-4 md:px-16 lg:px-24 ">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold hidden md:inline">Abhishek</div>
        <div className="flex items-center font-bold space-x-2 md:space-x-6">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#services" className="hover:text-gray-400">Services</a>
          <a href="#project" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
          <button onClick={toggleDarkMode} className="bg-black rounded-full size-4"><img src={mode} alt="" className=""/></button>
        </div>
        <button className="bg-gradient-to-tr from-red-500 to-blue-500 text-white md:inline w-8px
         transform transition-transform duration-300 hover:scale-105 px-2 py-1 rounded-xl"><a href="mailto:dhallaniaabhishek@gmail.com">Connect Me</a></button>
      </div>
    </nav>
  )
}

export default Navbar
