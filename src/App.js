import NavBar from "./components/NavBar";
import HeroPage from "./components/HeroPage";
import About from "./components/About";
import SkillsAndExperience from "./components/Skills&Experience";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <HeroPage />
      <About />
      <SkillsAndExperience />
      <Certificates />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
