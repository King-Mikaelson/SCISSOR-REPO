import React, { useState, createContext, useReducer, useEffect } from "react";
import axios from "axios";
import { AppContextProp } from "@/@types/types";


const AppContext = createContext<AppContextProp>(null!);

export default AppContext;

export const AppProvider: React.FC<AppContextProp> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const contextData = {
    open,
    setOpen,
  };

  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
};
