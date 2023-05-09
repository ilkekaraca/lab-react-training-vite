import React from "react";
import "./style.css";

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export default function BoxColor({ r, g, b }) {
  return (
    <div
      className="bg-style"
      style={{ backgroundColor: `rgb(${r},${g},${b})` }}
    >
      {`rgb(${r},${g},${b})`}
      <br />
      {rgbToHex(r, g, b)}
    </div>
  );
}
