import { createContext, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  const contextValue = {};
  return (
    <coinContext.Provider value={contextValue}>
      {props.children}
    </coinContext.Provider>
  );
};

export default CoinContextProvider;
