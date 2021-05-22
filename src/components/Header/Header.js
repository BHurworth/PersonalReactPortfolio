import React, { useState } from "react";
import Burger from "@animated-burgers/burger-squeeze"
import "@animated-burgers/burger-squeeze/dist/styles.css"
import logo from '../../assets/images/Group 1.png'


function Header() {
  const [active, setActive] = useState(false);

  const burgerHandler = () => {
    setActive(!active);
  };
  return (
    <>
      <div className="nav-header">
        <ul className="nav-header-items">
          <img src={logo} id="logo"></img>
          <Burger isOpen= { active} title="Squeeze" onClick={() => burgerHandler()} id="burger"></Burger>
        </ul>
      </div>
    </>
  );
}

export default Header;
