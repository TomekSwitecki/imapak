import React, { Fragment, useState } from "react";
import Button, { ButtonShape, ButtonColor, ButtonType } from "../button/Button";
import { Header } from "../header/Header";
import HamburgerMenu from "./HamburgerMenu";
import { _scrollTo } from "./utils";


export const MenuOptions = ({ closeMenu, isHamburgerMenu }) => {
  const handleScrollToId = (id) => {
    const element = document.getElementById(id);
    console.log(element);
    if (element) {
      _scrollTo(id, 70);
      {
        closeMenu && closeMenu();
      }
    }
  };

  return (
    <Fragment>


      <Button
        type={ButtonType.Ghost}
        color={ButtonColor.Default}
        text={"Strona główna"}
        onClick={() => handleScrollToId("kontakt")}
      />
      <Button
        type={ButtonType.Ghost}
        color={ButtonColor.Default}
        text={"Nasz zespół"}
        onClick={() => handleScrollToId("kontakt")}
      />
      <Button
        type={ButtonType.Filled}
        color={ButtonColor.Primary}
        append={<box-icon name='right-arrow-alt' ></box-icon>}
        text={"Skontaktuj się!"}
        onClick={() => handleScrollToId("kontakt")}
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
