'use client';

import React from "react";
import { motion } from "framer-motion";

function Experience() {
  return (
    <>
      <div className="block">
        <h2 className="head-text">
          Working <span>Experience</span>
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delayChildren: 0.5 }}
          className="work-experience"
        >

        </motion.div>
      </div>
    </>
  );
}

export default Experience;
