import Navbar from "./components/Navbar.tsx";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Footer from "./components/Footer.tsx";
import Skills from "./components/Skills.tsx";
import Education from "./components/Education.tsx";

function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="education">
        <Education />
      </section>
      <Footer />
    </>
  );
}

export default App;
