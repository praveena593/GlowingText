import React from "react";
import "./GlowingText.css";

const GlowingText = () => {
  const text = "Secrolis";

  return (
    <div className="glowing-container">
      {text.split("").map((letter, index) => (
        <span key={index} className="glowing-letter">
          {letter}
        </span>
      ))}
    </div>
  );
};

export default GlowingText;
