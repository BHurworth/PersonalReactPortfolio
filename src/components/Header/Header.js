import React, { useState } from "react";
import Burger from "@animated-burgers/burger-squeeze";
import "@animated-burgers/burger-squeeze/dist/styles.css";
import logo from "../../assets/images/Group 1.png";
import SideNav from "./SideNav.js";

function Header() {
  const [active, setActive] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const burgerHandler = () => {
    setActive(!active);
    setShowNav(!showNav);
  };
  return (
    <>
      <div className="nav-header">
        <ul className="nav-header-items">
          <img src={logo} id="logo"></img>
          <Burger
            isOpen={active}
            title="Squeeze"
            onClick={() => burgerHandler()}
            id="burger"
          >
            <div id="burger-lines"></div>
          </Burger>
        </ul>
      </div>
      <SideNav show={showNav} />
    </>
  );
}

export default Header;
