import calculator from "../assets/calculator.png";
import blog from "../assets/blog.png";
import mern from "../assets/mern.jfif";

const projects = [
  {
    id: 1,
    name: "Employee MS",
    technologies: "MERN Stack",
    image: mern,
    github: "http://github.com/dhallaniaabhishek",
  },
  {
    id: 2,
    name: "Gist App",
    technologies: "MERN Stack",
    image: blog,
    github: "http://github.com/dhallaniaabhishek",
  },
  {
    id: 3,
    name: "Comprehensive Calculator",
    technologies: "Java",
    image: calculator,
    github: "http://github.com/dhallaniaabhishek",
  },
];

export const Projects = () => {
  return (
    <div className=" py-20" id="project">
      <div className="conatiner mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {
          projects.map((project)=> (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 ">
              <img src={project.image}  alt={project.name} className="rounded-lg mb-4 w-full h-48 object-cover" />
              <h3 className=" text-white text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a href={project.github} className="inline-block bg-gradient-to-tr from-red-500 to-blue-500 text-white px-4 py-2 rounded"
              target="_blank"
              rel="noopener noreferrer">Github</a>
            </div>
          ))
         }
        </div>
      </div>
    </div>
  );
};

export default Projects;
