import logo from "../../resources/LOGOTYPE.svg";
import React from "react";
export function Header() {
  return (
    <header className="header">
      <div className="header__logotype">
        <img className="logotype_img" src={logo} alt="Klinika BM Logo" />
      </div>
    </header>
  );
}
