import React from "react";

import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default Home;
