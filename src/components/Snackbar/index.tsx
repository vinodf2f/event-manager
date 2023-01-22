import React, { useContext } from "react";
import { SnackbarContext } from "../../context/snackbar";
import "./snackbar.css";

const Snackbar = () => {
  const { snackbars } = useContext(SnackbarContext);

  return (
    <div className="snackbar-container">
      {snackbars.map((snack) => {
        return <div className="snackbar">{snack.message}</div>;
      })}
    </div>
  );
};

export default Snackbar;
