import React from "react";
import facebook from "../assets/facebook.jpg";
import xcorp from "../assets/xcorp.jpg";
import linkedin from "../assets/linkedin.png";
import worldMap from "../assets/World-Map.svg";

function Footer() {
  return (
    <footer className="footer-container ">
      <div className="footer">
        <p className="rights">
          <span id="all-rights">All rights reserved to</span> Food Treck&trade;
        </p>
        <a href="/#top" className="footer_map">
          <img src={worldMap} alt="Footer map" id="logo-bottom-center" />
        </a>
        <div className="social-media">
          Follow us
          <a href="https://www.facebook.com/zuck/?locale=fr_FR">
            <img src={facebook} alt="facebook icon" />
          </a>
          <a href="https://twitter.com/BarackObama?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
            <img src={xcorp} alt="twitter or xcorp icon" />
          </a>
          <a href="https://www.linkedin.com/search/results/all/?keywords=bill%20gates&origin=GLOBAL_SEARCH_HEADER&sid=GxJ">
            <img src={linkedin} alt="linkedin icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
