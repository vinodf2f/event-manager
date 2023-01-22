import React from "react";
import "./button.css";
function Button({ text, onClick, variant, disabled }) {
  return (
    <button
      className={`button button${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
