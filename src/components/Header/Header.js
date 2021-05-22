import React, { useState } from "react";
import Hamburger from "./Hamburger/index";

function Header() {
  const [activee, setActivee] = "active";

  const eventHandler = () => {
    console.log("YOweO");
  };
  return (
    <>
      <div className="nav-header">
        <li>Home</li>
        <li>Blog</li>
        <li>Whatever</li>
        <li>You once</li>
      </div>
    </>
  );
}

export default Header;
