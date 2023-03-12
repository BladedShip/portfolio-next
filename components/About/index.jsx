"use client";

import React from "react";
import { motion } from "framer-motion";

import "./About.scss";

const cards = [
  {
    title: "Web Developer",
    description:
      "Building top tier apps with Next.js and React with a dash of SvelteKit mixed in.",
    image: "/assets/web-min.jpg",
  },
  {
    title: "UI Designer",
    description:
      "Using Figma to bring all that I could imagine to life. Sometimes I wing it with the Adobe Suite.",
    image: "/assets/ui-min.jpg",
  },
  {
    title: "Content Writer",
    description:
      "A storyteller at heart, I love to write about the things I love and the things I learn.",
    image: "/assets/writer-min.jpg",
  },
  {
    title: "VFX Artist",
    description:
      "Sometimes the best way to tell stories is through Visual Effects. I love to create worlds and bring them to life.",
    image: "/assets/vfx-min.png",
  },
];

function About() {
  return (
    <>
      <div className="block">
        <h2 className="head-text">
          Learning <span>Tech </span>
          <br />
          one stack<span> at a time</span>
        </h2>
        <div className="cards">
          {cards.map((card, index) => (
            <motion.div
              initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                duration: 0.4,
              }}
              viewport={{
                once: true,
              }}
              className="profile-card"
              key={card.title + index}
            >
              {/* TODO: Dynamic height and width with Next Image */}
              <img src={card.image} alt={card.title} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {card.title}
              </h2>
              <p className="p-text" style={{ marginTop: 20 }}>
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
