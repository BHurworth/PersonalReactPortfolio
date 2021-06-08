import React from 'react'
import logo from "../../assets/images/logo-black.png";

function SideNav( { show }) {
    return (
      <div className={show ? "side-nav-active" : "side-nav-inactive"}>
        <ul className={show ? "side-nav-links-active" : 'side-nav-links-inactive'}>
          <li><img src={logo} className='side-nav-logo'></img></li>
          <li><div className='side-nav-divider'></div></li>
          <li className="side-nav-link">Contact Me</li>
          <li className="side-nav-link">About Me</li>
          <li className="side-nav-link">My Photography</li>
        </ul>
      </div>
    );
}

export default SideNav
