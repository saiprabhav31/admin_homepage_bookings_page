import React from 'react';
import blacklogo from "./blacklogo.png";
import "./mainbody.css";


function Mainbody() {
  console.log("Mainbody component rendered");
  return (
    <div className="body-container">
      <div className="content">
        {/* Left Section - Logo and Title */}
        <div className="left-section">
          <img src={blacklogo} alt="Fleet Logo" className="main-logo" />
          <h1 className="title">FLEET</h1>
          <p className="tagline">DRIVE YOUR JOURNEY ANYTIME, ANYWHERE</p>
        </div>

        {/* Right Section - Buttons */}
        <div className="right-section">
          <button className="main-button">My Vehicles</button>
    <button className="main-button">Bookings</button>
          <button className="main-button">Drivers List</button>
        </div>
      </div>
    </div>
  );
}

export default Mainbody;
