"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "@/client";

import "./About.scss";

const cards = [
  {
    title: "Web Developer",
    description:
      "Building dumb apps with Next.js, React and React Native with a dash of SvelteKit mixed in",
    image: "https://images.pexels.com/photos/6044820/pexels-photo-6044820.jpeg",
  },
  {
    title: "UI Designer",
    description:
      "Building dumb apps with Next.js, React and React Native with a dash of SvelteKit mixed in",
    image: "https://images.pexels.com/photos/6044820/pexels-photo-6044820.jpeg",
  },
  {
    title: "Content Writer",
    description:
      "Building dumb apps with Next.js, React and React Native with a dash of SvelteKit mixed in",
    image: "https://images.pexels.com/photos/6044820/pexels-photo-6044820.jpeg",
  },
  {
    title: "Mobile Developer",
    description:
      "Building dumb apps with Next.js, React and React Native with a dash of SvelteKit mixed in",
    image: "https://images.pexels.com/photos/6044820/pexels-photo-6044820.jpeg",
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
              whileInView={{
                opacity: [0, 1],
                y: [100, 0],
              }}
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                duration: 0.4,
                type: "tween",
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
