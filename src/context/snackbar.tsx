import React, { createContext, useCallback, useState } from "react";
import Snackbar from "../components/Snackbar";

interface Snackbar {
  id: number;
  message: string;
}
interface SnackbarProviderProps {
  children: React.ReactNode;
}

interface SnackbarProviderState {
  snackbars: Snackbar[];
  addSnackbar: (message: string) => void;
  removeSnackbar: (id: number) => void;
}

const DURATION = 3000;

export const SnackbarContext = createContext<SnackbarProviderState>({
  snackbars: [],
  addSnackbar: () => {},
  removeSnackbar: () => {},
});

const SnackProvider: React.FC<SnackbarProviderProps> = ({ children }) => {
  const [snackbars, setSnackbars] = useState<Snackbar[]>([]);

  const addSnackbar = useCallback((message: string) => {
    const snackbarObj: Snackbar = {
      id: new Date().getTime(),
      message,
    };
    setSnackbars((prevSnackbars) => [...prevSnackbars, snackbarObj]);
    setTimeout(() => removeSnackbar(snackbarObj.id), DURATION);
  }, []);

  const removeSnackbar = useCallback((id: number) => {
    setSnackbars((prevSnackbar) =>
      prevSnackbar.filter((snack) => snack.id !== id)
    );
  }, []);

  return (
    <SnackbarContext.Provider
      value={{ addSnackbar, removeSnackbar, snackbars }}
    >
      <Snackbar />
      {children}
    </SnackbarContext.Provider>
  );
};

export default SnackProvider;
