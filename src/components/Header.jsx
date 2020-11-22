import React from "react";
import logo from "../svgs/Masket.svg";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__brand">
        <img src={logo} alt="Logo - Nos cuidemos" />
        <p>#NosCuidemos</p>
      </div>
    </header>
  );
}
