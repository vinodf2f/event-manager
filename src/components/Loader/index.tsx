import React from "react";
import "./loader.css";

interface LoaderProps {
  loadingText?: string;
}

const Loader: React.FC<LoaderProps> = ({ loadingText = "Fetching Events" }) => {
  return <div className="loader">{loadingText}...</div>;
}

export default Loader;
