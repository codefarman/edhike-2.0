import React, { createContext, useContext, useCallback, useState } from "react";

const LeadPopupContext = createContext(null);

export const LeadPopupProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const openLeadPopup = useCallback(() => {
    setOpen(true);
  }, []);

  const closeLeadPopup = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <LeadPopupContext.Provider
      value={{ open, openLeadPopup, closeLeadPopup }}
    >
      {children}
    </LeadPopupContext.Provider>
  );
};

export const useLeadPopup = () => {
  const ctx = useContext(LeadPopupContext);
  if (!ctx) {
    throw new Error("useLeadPopup must be used inside LeadPopupProvider");
  }
  return ctx;
};
