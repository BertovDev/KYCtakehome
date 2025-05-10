"use client";
import { FormData } from "@/types/formTypes";

import { createContext, useContext, useState, ReactNode } from "react";

const formDataContext = createContext<{
  data: FormData;
  setData: (data: FormData) => void;
}>({
  data: {},
  setData: () => {},
});

export function SignupProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<FormData>({});

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
