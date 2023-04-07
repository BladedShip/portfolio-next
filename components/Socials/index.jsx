import React from "react";
import { SocialIcon } from "react-social-icons";

import "./Socials.scss";
import { socials } from "@/lib/constants";

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
