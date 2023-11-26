import React, { Fragment, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Change from useHistory to useNavigate
import Button, { ButtonType, ButtonColor } from "../button/Button";
import { Header } from "../header/Header";
import HamburgerMenu from "./HamburgerMenu";
import { _scrollTo } from "./utils";

export const MenuOptions = ({ closeMenu, isHamburgerMenu }) => {
  const location = useLocation();
  const navigate = useNavigate(); // Replace useHistory with useNavigate

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
    <Fragment>


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
    </Fragment>
  );
};

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__content">
        <Header />
        <div className={`navbar__buttons`}>
          <MenuOptions />
        </div>
        <HamburgerMenu options={<MenuOptions />}></HamburgerMenu>
      </div>

    </nav>
  );
}
