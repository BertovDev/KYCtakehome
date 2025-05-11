"use client";
import { FormData } from "@/types/formTypes";
import { getOverlappingDaysInIntervals } from "date-fns";

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
  isHydrated: boolean;
}>({
  data: {},
  setData: () => {},
  isHydrated: false,
});

export function SignupProvider({ children }: { children: ReactNode }) {
  const [data, setDataState] = useState<FormData>({});
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsedData = JSON.parse(stored);
        setDataState(parsedData);
      } catch (error) {
        console.error("Error parsing stored data:", error);
      }
    }
    setIsHydrated(true);
  }, []);

  const setData = (newData: Partial<FormData>) => {
    const updatedData = { ...data, ...newData };
    setDataState(updatedData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
  };

  return (
    <formDataContext.Provider value={{ data, setData, isHydrated }}>
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
