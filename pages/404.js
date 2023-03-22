import { Poppins } from "next/font/google";
import React from "react";

import Error from "../components/Error";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

function NotFound() {
  return (
      <div className={poppins.className}>
        <Error />
      </div>
  );
}

export default NotFound;
