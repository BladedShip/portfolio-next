"use client";

import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import "./Navbar.scss";
import { tabs } from "@/lib/constants";
import { motion } from "framer-motion";

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
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              <XMarkIcon
                className="icon-default"
                onClick={() => setToggle(false)}
              />
              <ul>
                {tabs.map((item) => (
                  <a href={`#${item}`} onClick={() => setToggle(false)} key={item}>
                    <li>{item}</li>
                  </a>
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
