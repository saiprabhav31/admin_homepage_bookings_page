import React from 'react';
import blacklogo from "../blacklogo.png";
import "./mainbody.css";
import { useNavigate } from "react-router-dom";



function Mainbody() {
  const navigate = useNavigate(); 
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
          <button onClick={()=>navigate('admincarspage')} className="main-button">My Vehicles</button>
          <button onClick={()=>navigate('adminbookings')} className="main-button">My Booking  </button>
          <button  onClick={()=>navigate('admindriverpage')} className="main-button">Drivers List</button>
        </div>
      </div>
    </div>
  );
}

export default Mainbody;
