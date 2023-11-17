import React from "react";

function Footer() {
  return (
    <footer className="footer-container ">
      <div className="footer">
        <p className="rights">
          <span id="all-rights">All rights reserved to</span> Food Treck&trade;
        </p>
        <a href="/#top" className="footer_map">
          <img
            src="../assets/World-Map.svg"
            alt="Footer map"
            id="logo-bottom-center"
          />
        </a>
        <div className="social-media">
          Follow us
          <a href="https://www.facebook.com/zuck/?locale=fr_FR">
            <img src="../src/assets/facebook.jpg" alt="facebook icon" />
          </a>
          <a href="https://twitter.com/BarackObama?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
            <img src="../src/assets/xcorp.jpg" alt="twitter or xcorp icon" />
          </a>
          <a href="https://www.linkedin.com/search/results/all/?keywords=bill%20gates&origin=GLOBAL_SEARCH_HEADER&sid=GxJ">
            <img src="../src/assets/linkedin.png" alt="linkedin icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
