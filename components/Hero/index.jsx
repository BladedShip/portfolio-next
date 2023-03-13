"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import "./Hero.scss";

function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Web Developer",
      "UI Designer",
      "Meme Enthusiast",
      "VFX Artist",
      "Gamer",
    ],
    loop: true,
    delaySpeed: 2500,
  });

  return (
    <>
      <div className="block">
        <motion.div
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
            type: "spring",
          }}
          viewport={{
            once: true,
          }}
          className="header-info"
        >
          <div className="header-badge">
            <div className="badge-cmp flex">
              <span className="emoji">👋</span>
              <div style={{ marginLeft: 20 }}>
                <p className="p-text">Hello, I'm</p>
                <h1 className="head-text">Adithyan Jayakumar</h1>
              </div>
            </div>
            <div className="tag-cmp flex">
              <p className="p-text">
                <span>{text}</span>
                <Cursor cursorColor="#fcfcfc" />
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Hero;
