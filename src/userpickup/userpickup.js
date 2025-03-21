import React from "react";
import "./userpickup.css";
import fullLogo from "../fulllogo.jpg";
function Userpickup() {
    return (
      <div className="main-container">
        <div className="left-section">
          <img src={fullLogo} alt="Fleet Logo" className="fleet-logo" />
          <h1 className="brand-title"></h1>
          <p className="tagline"></p>
        </div>
  
        <div className="right-section">
          <div className="pickup-box">
            <img src="" alt="Location Icon" className="location-icon" />
            < input type="text"className="pickup-btn" placeholder="Enter Pickup Location" /> 
          </div>
          <button className="next-btn">Next</button>
        </div>
      </div>
    );
  }
  export default Userpickup;