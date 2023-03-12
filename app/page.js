import React from "react";

import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";

function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="experience">
        {/* TODO:Experience */}
        <Experience/>
        </section>
      <section id="projects">
        <Projects/>
      </section>
      <section id="skills">{/* TODO:Skills */}</section>
      <section id="contact">{/* TODO:Contact */}</section>
    </>
  );
}

export default Home;
