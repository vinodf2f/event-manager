import React from "react";
import App from "./App";
import SnackProvider from "./context/snackbar";

function AppContainer() {
  return (
    <div>
      <SnackProvider>
        <App />
      </SnackProvider>
    </div>
  );
}

export default AppContainer;
