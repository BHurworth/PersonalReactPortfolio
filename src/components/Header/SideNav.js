import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo-black.png";

function SideNav({ show }) {
  return (
    <div className={show ? "side-nav-active" : "side-nav-inactive"}>
      <ul
        className={show ? "side-nav-links-active" : "side-nav-links-inactive"}
      >
        <li>
          <img src={logo} className="side-nav-logo"></img>
        </li>
        <li>
          <div className="side-nav-divider"></div>
        </li>


        <NavLink to="/" exact activeClassName="active" className="Link">
          <li className="side-nav-link">Home</li>
        </NavLink>
        <NavLink to='/contact-me' exact activeClassName="active" className="Link">
          <li className="side-nav-link">Contact Me</li>
        </NavLink>
        <NavLink to='/about-me' exact activeClassName="active" className="Link">
          <li className="side-nav-link">About Me</li>
        </NavLink>
        <NavLink to="/photography" exact activeClassName="active" className="Link">
          <li className="side-nav-link">My Photography</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default SideNav;
