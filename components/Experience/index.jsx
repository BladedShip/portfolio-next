"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import "./Experience.scss";

const experience = [
  {
    role: "Media Lead",
    company: "GTech µLearn",
    description: [
      "Worked with and coordinated all media, marketing and creative activities of the organization.",
      "Functioned alongside a team of talented and passionate individuals",
      "Designed and released multiple marketing campaigns for the organization",
    ],
    image: "/assets/mulearn.jpg",
    from: "April 2021",
    to: "January 2022",
  },
  {
    role: "Media Intern",
    company: "TinkerHub Foundation",
    description: [
      "Designed mutiple marketing and promotional material for the organisation",
      "Worked alongside other designers and content writers to create content",
      "Managed the social media accounts of the organisation",
    ],
    image: "/assets/tinkerhub.png",
    from: "August 2020",
    to: "May 2021",
  },
  {
    role: "Graphic Designer",
    company: "CampuzOn",
    description: [
      "Designed posters and other promotional material for the company",
      "Managed social media accounts of the company",
      "Designed content for their app and website",
    ],
    image: "/assets/campuzon.png",
    from: "May 2021",
    to: "January 2022",
  },
];

function Experience() {
  return (
    <>
      <div className="block">
        <h2 className="head-text">
          Working <span>Experience</span>
        </h2>
        <motion.div className="container">
          {experience.map((exp, index) => (
            <>
              <motion.div
                initial={{ opacity: 0, x: 300 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, ease: "easeInOut"}}
                className="work-card"
                key={index}
              >
                <div className="exp-img">
                  <img src={exp.image} />
                </div>
                <div className="content">
                  <div>
                    <div className="header-work">
                      <div>
                        <h4 className="bold-text">{exp.role}</h4>
                        <p className="p-text">{exp.company}</p>
                      </div>
                      <p className="p-text">
                        {exp.from} - {exp.to}
                      </p>
                    </div>

                    <ul className="skills-list">
                      {exp.description.map((desc, index) => (
                        <li className="p-text skill" key={index}>
                          <ArrowRightIcon
                            height={8}
                            width={8}
                            color="#fcfcfc"
                          />
                          {`  ${desc}`}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default Experience;
