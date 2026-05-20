import { createContext } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const contextValue = {};
  return (
    <coinContext.Provider value={contextValue}>
      {props.children}
    </coinContext.Provider>
  );
};
