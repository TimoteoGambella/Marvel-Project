import React from "react";
import FooterSocials from "../FooterSocials/FooterSocials";

const FooterText = ({ text }) => {
  return <div className="footer-text-container">
          {text}
          <FooterSocials/>
          </div>;
      };

export default FooterText;
