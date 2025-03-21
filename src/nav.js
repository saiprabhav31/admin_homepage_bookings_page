import React from "react";
import logo from "./greylogo.png";
import "./nav.css";
function Nav() {  
  console.log("Nav component rendered");  
    return (
        <div className="navbar">
        <div className="logo-section">
            <img className="greylogo" src={logo} alt="a" />
       
        </div>
        <div className="profile-icon">
          <span>A</span>
        </div>
      </div>
    );
}

export default Nav;