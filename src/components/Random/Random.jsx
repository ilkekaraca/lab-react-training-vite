import React from "react";

export default function Random({ min, max }) {
  const myNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <div className="box-style">
      Random value between {min} and {max} =&gt; {myNumber}
    </div>
  );
}
