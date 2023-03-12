"use client";

import React from "react";
import { motion } from "framer-motion";
import { EyeIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import "./Projects.scss";

const work = [
  {
    title: "Thoughts Unleashed",
    description: "A blogging website built using NextJS and SanityCMS",
    link: "https://blog.adithyan.tech",
    code: "https://github.com/BladedShip/unleashed",
    image: "/assets/unleashed.png",
    category: ["Web App", "All"],
  },
  {
    title: "JeePeeTee",
    description: "A GPT-3 web client made using NextJS, Firebase and GPT-3 API",
    link: "https://gpt.adithyan.tech",
    code: "https://github.com/BladedShip/jeepeetee",
    image: "/assets/gpt.png",
    category: ["Web App", "All"],
  },
  {
    title: "FaithFood",
    description: "A food delivery platform focusing on home to home food delivery",
    link: "https://www.figma.com/file/us3Bc9AX78sL5YwZwOj8zX/Designs?node-id=144%3A712&t=IKUFKQ7nSuP11f3f-1",
    code: "https://github.com/BladedShip/S8Project",
    image: "/assets/ff.png",
    category: ["Mobile App", "All"],
  },
  {
    title: "WhatsDown",
    description: "It's WhatsApp, but worse. Built with React Native and Amplify",
    link: "https://github.com/BladedShip/WhatsDown",
    code: "https://github.com/BladedShip/WhatsDown",
    image: "https://images.pexels.com/photos/6044820/pexels-photo-6044820.jpeg",
    category: ["Mobile App", "All"],
  },
  {
    title: "Thoroute",
    description: "Supposed to be a web app with a bus router, but it's not",
    link: "https://bladedship.github.io/thoroute/",
    code: "https://github.com/BladedShip/thoroute",
    image: "/assets/thoroute.png",
    category: ["Website", "All"],
  },
  {
    title: "RK Musical",
    description: "A website made for RK Musical using Mobirise",
    link: "https://rkmusical.com/",
    code: "https://github.com/itsmeRK/itsmerk.github.io",
    image: "/assets/rkmusical.png",
    category: ["Website", "All"],
  },{
    title: "Adventure of a Lifetime",
    description: "A game I made in under 12 hours using Unity and C#",
    link: "https://drive.google.com/file/d/1YDuqnbva6sTOo5W4p_4CUGSMpRB251g8/view?usp=sharing",
    code: "https://github.com/BladedShip/The-Adventure-of-a-Lifetime",
    image: "/assets/lifetime.png",
    category: ["Game", "All"],
  },{
    title: "Moorcha",
    description: "A short film dreamt up by me and my friends",
    link: "https://www.youtube.com/watch?v=01vQ105e1xI",
    code: "https://www.youtube.com/watch?v=01vQ105e1xI",
    image: "/assets/moorcha.png",
    category: ["VFX & Editing", "All"],
  },{
    title: "Pulsar India",
    description: "Multiple IG Reels videos made for Pulsar India",
    link: "https://drive.google.com/drive/folders/1KEhxEhX3yIQihL6ieUS68T9G1rie7r4N?usp=sharing",
    code: "https://drive.google.com/drive/folders/1KEhxEhX3yIQihL6ieUS68T9G1rie7r4N?usp=sharing",
    image: "/assets/pulsar.png",
    category: ["VFX & Editing", "All"],
  },{
    title: "Rewind 2019",
    description: "An RK Musical mashup of all top songs of 2019",
    link: "https://www.youtube.com/watch?v=l53F1xJgoXs",
    code: "https://www.youtube.com/watch?v=l53F1xJgoXs",
    image: "/assets/rewind.png",
    category: ["VFX & Editing", "All"],
  },{
    title: "HTML with GPT-3",
    description: "Let's compare code from GPT-3 and a dumb human",
    link: "https://bladedship.github.io/HTMLwithGPT3/",
    code: "https://github.com/BladedShip/HTMLwithGPT3",
    image: "/assets/htmlgpt.png",
    category: ["Website", "All"],
  },
];

function Projects() {
  const filter = () => {};
  return (
    <>
      <div className="block">
        <h2 className="head-text">
          Building <span>Random </span> Crap
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delayChildren: 0.5 }}
          className="work-portfolio"
        >
          {work.map((item, index) => (
            <div className="work-item flex">
              <div className="work-img flex">
              <img src={item.image} alt={item.title} />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="work-hover flex"
                >
                  <Link href={item.link} target="_blank" rel="noreferrer">
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 0.9 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="flex"
                    >
                      <EyeIcon className="icon" />
                    </motion.div>
                  </Link>
                  <Link href={item.code} target="_blank" rel="noreferrer">
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 0.9 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="flex"
                    >
                      <CodeBracketIcon className="icon" />
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
              <div className="work-content flex">
              <h4 className="bold-text">{item.title}</h4>
              <p className="p-text p-custom">{item.description}</p>
              <div className="work-tag flex">
                    <p className="p-text">{item.category[0]}</p>
              </div>
            </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default Projects;
