import AboutImage from "../assets/hero.png";
import reactLogo from '../assets/react.svg'
import mongodbImg from "../assets/mongodb-icon.svg"
import expressjsImg from "../assets/expressjs-icon.svg"
import nodejsImg from "../assets/nodejs-icon.svg"
import "./About.css" 

export const About = () => {
  return (
    <div className="py-20" id="about">
      <div className="conatiner mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
            src={AboutImage}
            alt=""
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a computer science and passionate full-stack developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in both frontend and backend technologies, I strive to create
              seamless and efficient user expreriences.
            </p>
            <div className="space-y-4">
                <div className="flex items-center">
                    <label htmlFor="htmlandcss" className="w-2/12">
                        HTML & CSS
                    </label>
                    <div className="grow bg-gray-800 rounded-full h-2.5">
                        <div className="bg-gradient-to-r from-red-500 to-blue-500 h-2.5 rounded-full
                        transform transition-transform duration-300 hover:scale-105 w-10/12          ">

                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <label htmlFor="htmlandcss" className="w-2/12">
                        React JS
                    </label>
                    <div className="grow bg-gray-800 rounded-full h-2.5">
                        <div className="bg-gradient-to-r from-red-500 to-blue-500 h-2.5 rounded-full
                        transform transition-transform duration-300 hover:scale-105 w-11/12">
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <label htmlFor="htmlandcss" className="w-2/12">
                        Node JS
                    </label>
                    <div className="grow bg-gray-800 rounded-full h-2.5">
                        <div className="bg-gradient-to-r from-red-500 to-blue-500 h-2.5 rounded-full
                        transform transition-transform duration-300 hover:scale-105 w-9/12          ">
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <label htmlFor="htmlandcss" className="w-2/12">
                        Java & DSA
                    </label>
                    <div className="grow bg-gray-800 rounded-full h-2.5">
                        <div className="bg-gradient-to-r from-red-500 to-blue-500 h-2.5 rounded-full
                        transform transition-transform duration-300 hover:scale-105 w-4/5          ">
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <label htmlFor="htmlandcss" className="w-2/12">
                        Python
                    </label>
                    <div className="grow bg-gray-800 rounded-full h-2.5">
                        <div className="bg-gradient-to-r from-red-500 to-blue-500 h-2.5 rounded-full
                        transform transition-transform duration-300 hover:scale-105 w-3/4         ">
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
            <div className="flex flex-col md:flex-row justify-evenly items-center mt-8 " >
              <h3 className="text-3xl mb-8 font-bold text-center">Tech Stack</h3>
              <div className="flex flex-wrap space-x-4 justify-center items-center ">
              <img src={mongodbImg} className=" transform transition-transform duration-300 hover:scale-125" alt="mongodb logo" />
              <img src={expressjsImg} className=" transform transition-transform duration-300 bg-slate-50 w-16 h-16 rounded-xl hover:scale-125" alt="express logo" />
              <img src={reactLogo} className="logo react" alt="React logo" />
              <img src={nodejsImg} className="transform transition-transform duration-300 hover:scale-125" alt="nodejs logo" />
              </div>
            </div>
      </div>
    </div>
  );
};

export default About;
