"use client";
import { FormData } from "@/types/formTypes";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

const STORAGE_KEY = "signup-data";

const formDataContext = createContext<{
  data: FormData;
  setData: (data: FormData) => void;
}>({
  data: {},
  setData: () => {},
});

export function SignupProvider({ children }: { children: ReactNode }) {
  const [data, setDataState] = useState<FormData>({});

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setDataState(JSON.parse(stored));
      } catch (error) {
        console.error("Error parsing stored data:", error);
      }
    }
  }, []);

  const setData = (newData: Partial<FormData>) => {
    const updatedData = { ...data, ...newData };
    setDataState(updatedData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
  };

  return (
    <formDataContext.Provider value={{ data, setData }}>
      {children}
    </formDataContext.Provider>
  );
}

export function useFormData() {
  const context = useContext(formDataContext);
  if (!context)
    throw new Error("useFormData debe usarse dentro de SignupProvider");
  return context;
}
