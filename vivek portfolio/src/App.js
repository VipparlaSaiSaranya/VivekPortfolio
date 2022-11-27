import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <WorkExperience/>
      
      <Portfolio/>
      
      
      <Experience />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
