import React, { Fragment, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Change from useHistory to useNavigate
import { MenuOptions } from "./Navbar";
import { _scrollTo } from "./utils";
import Button, { ButtonType, ButtonColor } from "../button/Button";
const HamburgerMenu = (props) => {
  const location = useLocation();
  const navigate = useNavigate(); // Replace useHistory with useNavigate

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



  const handleScrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      _scrollTo(id, 70);
      closeMenu && closeMenu();
    }
  };



  const handleContactButtonClick = () => {
    navigate("/about-us");
    setTimeout(() => handleScrollToId("contact-form"), 0);
  };

  useEffect(() => {

    window.scrollTo(0, 0);
  }, [location.pathname]);

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
          className={`hamburger__dropdown ${isMenuOpen ? "hamburger__dropdown--active" : ""
            }`}
        >
          {/* {MenuOptions({ closeMenu })} */}

          <Button
            type={ButtonType.Ghost}
            color={ButtonColor.Default}
            text={"Strona główna"}
            // onClick={() => handleScrollToId("kontakt")}
            linkTo={"/"}
            selected={location.pathname === "/"}
          />
          <Button
            type={ButtonType.Ghost}
            color={ButtonColor.Default}
            text={"O nas"}
            linkTo={"/about-us"}
            selected={location.pathname === "/about-us"}
          />
          <Button
            type={ButtonType.Filled}
            color={ButtonColor.Primary}
            append={<box-icon name='chevron-right' ></box-icon>}
            text={"Skontaktuj się!"}
            onClick={handleContactButtonClick}
          />
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
