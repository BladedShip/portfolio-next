import React from "react";
import { SocialIcon } from "react-social-icons";

import "./Socials.scss";

function Socials() {
  return (
    <>
      <div className="socials">
        <div className="social-icon">
          <SocialIcon
            url="https://github.com/BladedShip"
            bgColor="#b3b3b3"
            style={{ height: 32, width: 32 }}
            target="_blank"
            rel="noreferrer noopener"
          />
        </div>
        <div className="social-icon">
          <SocialIcon
            url="https://www.behance.net/adithyajayakum"
            bgColor="#b3b3b3"
            style={{ height: 32, width: 32 }}
            target="_blank"
            rel="noreferrer noopener"
          />
        </div>
        <div className="social-icon">
          <SocialIcon
            url="https://medium.com/@adithyanjayakumar"
            bgColor="#b3b3b3"
            style={{ height: 32, width: 32 }}
            target="_blank"
            rel="noreferrer noopener"
            className="hover-select"
          />
        </div>
        <div className="social-icon">
          <SocialIcon
            url="https://www.linkedin.com/in/adijay/"
            bgColor="#b3b3b3"
            style={{ height: 32, width: 32 }}
            target="_blank"
            rel="noreferrer noopener"
          />
        </div>
      </div>
    </>
  );
}

export default Socials;
