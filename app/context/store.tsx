"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface ContextProps {
  country: string;
  setCountry: Dispatch<SetStateAction<string>>;
}

const GlobalContext = createContext<ContextProps>({
  country: "",
  setCountry: () => "",
});

export function GlobalContextProvider({ children }: any) {
  const [country, setCountry] = useState<string>("nigeria");
  return (
    <GlobalContext.Provider value={{ country, setCountry }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}
