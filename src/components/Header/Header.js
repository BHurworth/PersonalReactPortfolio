import React, { useState } from "react";
import Burger from "@animated-burgers/burger-squeeze";
import "@animated-burgers/burger-squeeze/dist/styles.css";
import logo from "../../assets/images/logo.png";
import SideNav from "./SideNav.js";

function Header() {
  const [active, setActive] = useState(false);

  const burgerHandler = () => {
    setActive(!active);
  };
  return (
    <>
      <div className="nav-header">
        <ul className="nav-header-items">
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
