"use client";

import React from "react";
import { motion } from "framer-motion";

import "./About.scss";
import { cards } from "@/lib/constants";

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
                delay: index * 0.06,
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
