import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [workflow, setWorkflow] = useState({ nodes: [], connections: [] });

  return (
    <AppContext.Provider value={{ workflow, setWorkflow }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};