import React from "react";
import Rating from "../Rating/Rating";
import "./style.css";

export default function DriverCard({ name, rating, img, car }) {
  return (
    <div className="drivercard">
      {/* <img src={img} alt={name} /> */}
      <div className="img" style={{ backgroundImage: `url(${img})` }}></div>
      <div className="driver-info">
        <p>{name}</p>
        <Rating>{rating}</Rating>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}
