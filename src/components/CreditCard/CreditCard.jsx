import React from "react";
import Visa from "../../assets/images/visa.png";
import MasterCard from "../../assets/images/master-card.svg";
import "./CreditCard.css";

export default function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  return (
    <div className="creditcard" style={{ backgroundColor: bgColor, color }}>
      <img src={type === "Visa" ? Visa : MasterCard} alt={type} />
      <p className="cc">•••• •••• •••• {number.slice(-4)}</p>
      <div className="card-info">
        <p className="expires-bank">
          <span>
            Expires {expirationMonth}/{expirationYear}
          </span>
          <span>{bank}</span>
        </p>
        <p>{owner}</p>
      </div>
    </div>
  );
}
