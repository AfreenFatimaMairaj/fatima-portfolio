import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Hero />

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <Experience />

      <Education />

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default Home;