import React from "react";
import FooterText from "../FooterText/FooterText";

const Footer = () => {
  return (
    <div className={`footer-container d-flex-row font-family-marvel-inter ${window.location.pathname!=="/"?"footer-position-relative":"footer-position-fixed"}`}>
      <FooterText text={"Know about the page's creators"}></FooterText>
    </div>
  );
};

export default Footer;
