import React from "react";
import { cardVariant } from "../../constants";
import "./button.css";


interface ButtonProps {
  text:string;
  onClick:()=>{};
  variant: keyof cardVariant;
  disabled: boolean
}

function Button({ text, onClick, variant, disabled }:ButtonProps) {
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
