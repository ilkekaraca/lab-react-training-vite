import React from "react";

export default function Greetings({ lang, children }) {
  let hello = "Hello";
  if (lang === "de") {
    hello = "Hallo";
  } else if (lang === "es") {
    hello = "Hola";
  } else if (lang === "fr") {
    hello = "Bonjour";
  }

  return (
    <div lang={lang} className="box-style">
      {`${hello} ${children}`}
    </div>
  );
}
