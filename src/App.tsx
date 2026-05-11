import Navbar from "./components/Navbar.tsx";
import Home from "./components/Home.tsx";
import News from "./components/News.tsx";
import Footer from "./components/Footer.tsx";
import Education from "./components/Education.tsx";
import Publications from "./components/Publications.tsx";
import Resume from "./components/Resume.tsx";

function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="news">
        <News />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="pubs">
        <Publications />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <Footer />
    </>
  );
}

export default App;
