import React, { Fragment, useState, useEffect } from "react";
import Button from "../button/Button";
import { MenuOptions } from "./Navbar";
const HamburgerMenu = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth > 640) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="hamburger__container">
      <div
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="hamburger__wrapper">
          <div className="hamburger__lines-wrapper">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="hamburger__menu">Menu</div>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className={`hamburger__dropdown ${
            isMenuOpen ? "hamburger__dropdown--active" : ""
          }`}
        >
          {MenuOptions({ closeMenu })}
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
