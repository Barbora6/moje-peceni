import React from "react";
import { createContext, useContext } from "react";
import { dataCategories } from "../data/data_categories";
import { dataRecepies } from "../data/data_recepies";

const appContextDefaultValue = {
  dataCategories: [],
  dataRecepies: []
};

export const AppContext = createContext(appContextDefaultValue);

export const AppProvider = ({ children }) => {
  const value = { dataCategories, dataRecepies };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("useAppStore must be used within a AppStoreProvider");
  }

  return context;
};
