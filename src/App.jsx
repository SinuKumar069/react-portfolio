import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
// import Skills from "./components/Skills";
import Technologies from "./components/Technologies";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";
import "../src/index.css";
import ProjectPage from "./components/ProjectPage";

function App() {
  return (
    <div className="selection:bg-cyan-400 selAection:text-cyan-900">
      <div className="fixed top-0 z-[-1] h-full w-full">
        <div className="absolute top-0 h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <Navbar />

      <Hero />

      <Education />

      {/* <Skills /> */}

      <ProjectPage />

      <Technologies />

      <GetInTouch />

      <Footer />
    </div>
  );
}

export default App;