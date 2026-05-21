import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const [allCoin, setAllCoin] = useState([]);
  const [curency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  const fetchAllCoin = async () => {
    const options = {
      method: "GET",
      headers: { "x-cg-demo-api-key": "CG-F6g5Yy3HThVYLqEtwbsqcqXF" },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${setCurrency.name}`,
      options,
    )
      .then((res) => res.json())
      .then((res) => setAllCoin(res))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchAllCoin();
  }, []);

  const contextValue = {};

  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
