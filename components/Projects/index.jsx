"use client";

import React from "react";
import { motion } from "framer-motion";
import { EyeIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import "./Projects.scss";
import { work } from "@/lib/constants";

function Projects() {
  return (
    <>
      <div className="block">
        <h2 className="head-text">
          Building <span>Random </span> Crap
        </h2>
        <motion.div className="work-portfolio">
          {work.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index*0.04,
              }}
            >
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default Projects;
