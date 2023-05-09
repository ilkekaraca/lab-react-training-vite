import React from "react";
import "./Rating.css";

export default function Rating({ children }) {
  const star = Math.round(children);
  let display = "";
  // for (let i = 0; i < star; i++) {
  //   display += "★";
  // }
  // for (let i = 0; i < 5 - star; i++) {
  //   display += "☆";
  // }
  switch (star) {
    case 0:
      display = "☆☆☆☆☆";
      break;
    case 1:
      display = "★☆☆☆☆";
      break;
    case 2:
      display = "★★☆☆☆";
      break;
    case 3:
      display = "★★★☆☆";
      break;
    case 4:
      display = "★★★★☆";
      break;
    case 5:
      display = "★★★★★";
      break;
  }

  return <div className="star">{display}</div>;
}
