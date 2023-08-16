"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import "./Experience.scss";
import { experience } from "@/lib/constants";
import Link from "next/link";

function Experience() {
    return (
        <>
            <div className="block">
                <h2 className="head-text">
                    Working <span>Experience</span>
                </h2>
                <motion.div className="container">
                    {experience.map((exp, index) => (
                        <div key={index} className="work-div">
                            <motion.div
                                initial={{ opacity: 0, x: 300 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                whileHover={{ scale: 1.05 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.2,
                                    delay: index * 0.1,
                                    ease: "easeInOut",
                                }}
                                
                            >
                                <Link
                                    href={exp.link}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="work-card"
                                >
                                    <div className="exp-img">
                                        <img src={exp.image} />
                                    </div>
                                    <div className="content">
                                        <div>
                                            <div className="header-work">
                                                <div>
                                                    <h4 className="bold-text">
                                                        {exp.role}
                                                    </h4>
                                                    <p className="p-text">
                                                        {exp.company}
                                                    </p>
                                                </div>
                                                <p className="p-text">
                                                    {exp.from} - {exp.to}
                                                </p>
                                            </div>

                                            <ul className="skills-list">
                                                {exp.description.map(
                                                    (desc, index) => (
                                                        <li
                                                            className="p-text skill"
                                                            key={index}
                                                        >
                                                            <ArrowRightIcon
                                                                height={8}
                                                                width={8}
                                                            />
                                                            {`  ${desc}`}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </>
    );
}

export default Experience;
