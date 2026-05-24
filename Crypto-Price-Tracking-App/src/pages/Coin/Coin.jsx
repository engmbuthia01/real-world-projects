import React, { useState } from "react";
import "./Coin.css";
import { useParams } from "react-router-dom";

const Coin = () => {
  const { coinId } = useParams();

  const [coinData, setCoinData] = useState();

  const fetchCoinData = (async) => {
    const options = {
      method: "GET",
      headers: { "x-cg-demo-api-key": "CG-F6g5Yy3HThVYLqEtwbsqcqXF" },
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return <div>Coin : {coinId}</div>;
};

export default Coin;
