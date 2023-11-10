import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p className="rights">
        <span id="all-rights">All rights reserved to</span> Food Treck&trade;
      </p>
      <a href="#top" className="footer_map">
        <img
          src="./src/assets/World-Map.svg"
          alt="Footer map"
          id="logo-bottom-center"
        />
      </a>
      <div className="social-media">
        Follow us
        <img src="./src/assets/facebook.jpg" alt="facebook icon" />
        <img src="./src/assets/xcorp.jpg" alt="twitter or xcorp icon" />
        <img src="./src/assets/linkedin.png" alt="linkedin icon" />
      </div>
    </footer>
  );
}

export default Footer;
