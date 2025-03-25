import React from "react";
import "./userpayment.css";
import logo from "../fulllogo.jpg";

function Userpayment() {
    return (
        <div className="body">
          {/* Left side for logo */}
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo-image" />
          </div>
    
          {/* Right side for payment options */}
          <div className="payment-options">
            <h2>Payment Options</h2>
            <div className="payment-option">
              <span>Credit/Debit Card</span>
              <img src="/images/mastercard.png" alt="MasterCard" />
            </div>
            <div className="payment-option">
              <span>UPI</span>
              <img src="/images/upi.png" alt="UPI" />
            </div>
            <div className="payment-option">
              <span>Cash on Delivery</span>
              <img src="/images/cash.png" alt="Cash on Delivery" />
            </div>
            <button className="next-button">Next</button>
          </div>
        </div>
      );
  }

export default Userpayment;
