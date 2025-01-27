import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { supabase } from "./utils";

const appContextDefaultValue = {
  dataCategories: [],
  dataRecepies: []
};

export const AppContext = createContext(appContextDefaultValue);

export const AppProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [recepies, setRecepies] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await supabase.from("categories").select().order("id");
      setCategories(data);
      console.log(data);
    };

    const getRecepies = async () => {
      const { data } = await supabase.from("recepies").select().order("id");
      setRecepies(data);
    };
    getCategories();
    getRecepies();
  }, []);

  const value = { dataCategories: categories, dataRecepies: recepies };
  console.log(recepies);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("useAppStore must be used within a AppStoreProvider");
  }

  return context;
};
