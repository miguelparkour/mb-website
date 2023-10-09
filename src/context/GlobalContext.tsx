import React, { createContext, useState, ReactNode } from 'react';

// Definiendo la interfaz para el estado global
interface GlobalState {
  data: string | null;
  setData: React.Dispatch<React.SetStateAction<string | null>>;
}

// Creando el contexto
export const GlobalContext = createContext<GlobalState | undefined>(undefined);

// Definiendo la interfaz para las props del proveedor
interface GlobalProviderProps {
  children: ReactNode;
}

// Creando el proveedor del contexto
export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [data, setData] = useState<string | null>(null);

  return (
    <GlobalContext.Provider value={{ data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
};
