import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { dataRecepies } from "../data/data_recepies";
import { supabase } from "./utils";

const appContextDefaultValue = {
  dataCategories: [],
  dataRecepies: []
};

export const AppContext = createContext(appContextDefaultValue);

export const AppProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await supabase.from("categories").select();
      setCategories(data);
    };
    getCategories();
  }, []);

  const value = { dataCategories: categories, dataRecepies };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("useAppStore must be used within a AppStoreProvider");
  }

  return context;
};
