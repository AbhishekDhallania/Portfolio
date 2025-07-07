import heroimg from "../assets/hero.png"

export const Hero = () => {
  return (
    <div className=" text-center py-16 ">
        <img className="mx-auto mb-8 w-52 rounded-2xl object-cover transform
         transition-transfrom duration-300 hover:scale-110" src={heroimg} alt="" />
        <h1 className="text-4xl font-bold">I'm Abhishek{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-blue-500">,Full Stack Developer</span>
        </h1>
        <p className="mt-4 text-lg  ">
            I specialize in building modern and responsive web applications.
        </p>
        <div className="mt-8 space-x-4">
            <button className="bg-gradient-to-tr from-red-500 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-xl"><a href="https://www.linkedin.com/in/abhishek-dhallania-011b41216/">Connect With Me </a></button>
            <button className="bg-gradient-to-tr from-red-700 to-yellow-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-xl"> Resume</button>
        </div> 
    </div>
  )
}

export default Hero

