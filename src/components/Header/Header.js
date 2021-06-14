import React, { useState } from "react";
import Burger from "@animated-burgers/burger-squeeze";
import "@animated-burgers/burger-squeeze/dist/styles.css";
import logo from "../../assets/images/logo.png";
import SideNav from "./SideNav.js";

function Header( {color, className, className2} ) {
  const [active, setActive] = useState(false);

  const burgerHandler = () => {
    setActive(!active);
  };
  return (
    <>
      <div style={{backgroundColor: color }} className={`nav-header ${className}`}>
        <ul className={`nav-header-items ${className2}`}>
          <a href="/">
            <img src={logo} id="logo"></img>
          </a>
          <Burger
            isOpen={active}
            title="Squeeze"
            onClick={() => burgerHandler()}
            id="burger"
          >

          </Burger>
        </ul>
      </div>
      <SideNav show={active} />
    </>
  );
}

export default Header;
