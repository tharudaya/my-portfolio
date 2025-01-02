import Bio from "./components/Bio";
import Blog from "./components/Blog";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {

  return (
    <>
      <div className="relative h-full overflow-y-auto antialiased">
        <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
        <div className="relative z-10 flex flex-col items-center p-4 pt-8 space-y-2 container mx-auto">
          <Hero />
          <Navbar />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Bio />
          <Blog />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App;
