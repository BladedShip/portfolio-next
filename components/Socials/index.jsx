import React from "react";
import { SocialIcon } from "react-social-icons";

import "./Socials.scss";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/BladedShip",
  },
  {
    name: "Behance",
    url: "https://www.behance.net/adithyajayakum",
  },
  {
    name: "Medium",
    url: "https://medium.com/@adithyanjayakumar",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/adijay/",
  },
];

function Socials() {
  return (
    <>
      <div className="socials">
        {socials.map((item, index) => (
          <div className="social-icon" key={index}>
            <SocialIcon
              url={item.url}
              bgColor="#b3b3b3"
              style={{ height: 32, width: 32 }}
              target="_blank"
              rel="noreferrer noopener"
              className="hover-select"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Socials;
