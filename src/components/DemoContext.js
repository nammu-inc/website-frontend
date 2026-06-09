import React, { createContext, useContext, useState } from "react";
import DemoRequestModal from "./DemoRequestModal";

const DemoContext = createContext(() => {});

export const useDemo = () => useContext(DemoContext);

export const DemoProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openDemo = () => setIsOpen(true);
  const closeDemo = () => setIsOpen(false);

  return (
    <DemoContext.Provider value={openDemo}>
      {children}
      <DemoRequestModal isOpen={isOpen} onClose={closeDemo} />
    </DemoContext.Provider>
  );
};
