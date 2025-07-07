// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Serivces from './components/Services.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'
import { useState } from 'react'
import { Contact } from './components/Contact.jsx';


function App() {
  let [darkMode, setDarkMode] = useState(true);
  let toggleDarkMode = () => setDarkMode(!darkMode);  
  return (
        <main className={`w-full overflow-x-hidden box-border ${darkMode ? 'bg-neutral-900 text-white' : 'text-neutral-800 bg-neutral-300'} `}>
          <Navbar toggleDarkMode={toggleDarkMode}></Navbar>
          <Hero></Hero>
          <About></About>
          <Serivces></Serivces>
          <Projects></Projects>
          <Contact></Contact>
          <Footer></Footer>
        </main>
  );
}

export default App
