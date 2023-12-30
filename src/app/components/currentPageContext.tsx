"use client";
// currentPageContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface PageContextValue {
  pageType: string;
  setPageType: React.Dispatch<React.SetStateAction<string>>;
}
// Error: usePage must be used within a PageProvider
const PageContext = createContext<PageContextValue | undefined>(undefined);

interface PageProviderProps {
  children: ReactNode;
}

export const PageProvider: React.FC<PageProviderProps> = ({ children }) => {
  const [pageType, setPageType] = useState("manageOrders");

  return (
    <PageContext.Provider value={{ pageType, setPageType }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = (): PageContextValue => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePage must be used within a PageProvider");
  }
  return context;
};
