import React from "react";

import "./Error.scss";

function Error() {
  return (
    <div className="block flex">
      <h1 className="head-text">
        <span>404</span> <span className="grey">/</span> Page not found
      </h1>
      <p className="p-text">How did you get here?</p>
      <p className="footer">Back to <a href="https://www.adithyan.co.in">adithyan.co.in</a></p>
    </div>
  );
}

export default Error;
