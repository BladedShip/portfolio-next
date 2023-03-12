import React from "react";

import About from "@/components/About";
import Hero from "@/components/Hero";

function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        {/* TODO:About */}
        <About/>
      </section>
      <section id="experience">{/* TODO:Experience */}</section>
      <section id="projects">{/* TODO:Projects */}</section>
      <section id="skills">{/* TODO:Skills */}</section>
      <section id="contact">{/* TODO:Contact */}</section>
    </>
  );
}

export default Home;
