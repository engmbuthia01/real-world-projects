import React, { useContext, useEffect, useState } from "react";
import "./Coin.css";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState();
  const { currency } = useContext(CoinContext);

  const fetchCoinData = (async) => {
    const options = {
      method: "GET",
      headers: { "x-cg-demo-api-key": "CG-F6g5Yy3HThVYLqEtwbsqcqXF" },
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then((res) => res.json())
      .then((res) => setCoinData(res))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCoinData();
  }, [currency]);

  return <div>Coin : {coinId}</div>;
};

export default Coin;
