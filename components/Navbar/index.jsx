"use client";

import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

import "./Navbar.scss";

const tabs = ["home", "about", "experience", "projects", "contact"];

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <p className="headText">Adithyan Jayakumar</p>
        </div>
        <ul className="navbar-links">
          {tabs.map((item) => (
            <li key={`link-${item}`} className="flex p-text">
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
        <div className="navbar-menu">
          <Bars3Icon className="icon-default" onClick={() => setToggle(true)} />
          {toggle && (
            <motion.div
              whileInView={{
                x: [300, 0],
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
            >
              <XMarkIcon
                className="icon-default"
                onClick={() => setToggle(false)}
              />
              <ul>
                {tabs.map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} 
                    onClick={() => setToggle(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
