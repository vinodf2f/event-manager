import React from "react";
import "./loader.css";

export default function Loader({ loadingText = "Fetching Events" }) {
  return <div className="loader">{loadingText}...</div>;
}
