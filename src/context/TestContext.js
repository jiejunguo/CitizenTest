import React from "react";

const TestContext = React.createContext();

export const TestProvider = ({ children }) => {
  return <TestContext.Provider>{children}</TestContext.Provider>;
};
