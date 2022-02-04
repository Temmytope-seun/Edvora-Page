import React from 'react';
import chipImg from '../images/Group 58.png';
import masterImg from '../images/Group 59.png';
import './CreditCard.css';



export const CreditCard = ({
  digits,
  full_name,
  expiry_date,
}) => {

  return (
      <div className = 'cc-container'>
          <div className="cc-container-top">
              <div className="cc-container-visa">
                <p>Card Number</p>
              <p style={{padding: '10px 0', lineSpacing: '5px'}}>{digits}</p>
              </div>
          </div>
          <div  className="cc-container-chip">
              <img src = {chipImg}alt ="chip" />
          </div>
          <div className="cc-container-top">
                <p>Expiration date</p>
              <p style={{padding: '10px 0', lineSpacing: '5px'}}>{expiry_date}</p>
          </div>
          <div className="cc-container-top cc-container-footer">
              <p>{full_name}</p>
              <img src = {masterImg}alt ="master" />
          </div>

      </div>
  )
}