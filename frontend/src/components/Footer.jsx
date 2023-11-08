import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div id="scroll_to_top">
          <a href="#top">
            <img
              className="footer_map"
              src="./src/assets/footer_map.svg"
              alt="Footer map"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
